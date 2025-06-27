# 导入所需的库
import json  # 用于处理JSON数据
from llm import client  # 导入LLM客户端
from prompt import REACT_PROMPT  # 导入预设的提示模板
from tools import get_closing_price,tools  # 导入工具函数
import re  # 导入正则表达式库

# 定义发送消息到LLM的函数
def send_messages(messages):
    """
    向LLM发送消息并获取响应
    :param messages: 消息列表
    :return: LLM的响应
    """
    response = client.chat.completions.create(
        model="deepseek-chat",  # 使用deepseek-chat模型
        messages=messages,  # 传入消息列表
    )
    return response

if __name__ == "__main__":
    # 设置助手的角色说明
    instructions = "你是一个股票助手，可以回答股票相关的问题"

    # 设置用户查询
    query = "青岛啤酒和贵州茅台的收盘价哪个贵？"
    
    # 使用模板构建完整的提示
    prompt = REACT_PROMPT.format(instructions=instructions,tools=tools,tool_name="get_closing_price",input=query,yes_or_no="是",agent_scratchpad=""
    )
    
    # 初始化消息列表
    messages = [{"role": "user", "content": prompt}]

    # 开始对话循环
    while True:
        response = send_messages(messages)
        response_text = response.choices[0].message.content
        print("大模型的回复：")
        print(response_text)

        # 检查是否有最终答案
        final_answer_match = re.search(r'最终答案\s*[:：]\s*([\s\S]*)', response_text, re.IGNORECASE)
        if final_answer_match:
            final_answer = final_answer_match.group(1).strip()
            print("最终答案:", final_answer)
            break

        # 检查是否有行动
        action_match = re.search(r'行动：\s*(\w+)', response_text)
        action_input_match = re.search(r'行动输入：\s*({.*?}|".*?")', response_text, re.DOTALL)
        print(action_match)
        print(action_input_match)
        if action_match and action_input_match:
            tool_name = action_match.group(1)
            params = json.loads(action_input_match.group(1))
            print("工具名称:", tool_name)
            print("参数:", params)

            if tool_name == "get_closing_price":
                price = get_closing_price(params["name"])
                observation = f"{params['name']}的收盘价为{price}元"
                print("调用第三方API结果:", observation)
                messages.append({'role': 'user', 'content': f"观察：{observation}"})
        else:
            # 没有行动也没有最终答案，防止死循环
            print("未检测到行动或最终答案，模型回复如下：")
            print(response_text)
            break