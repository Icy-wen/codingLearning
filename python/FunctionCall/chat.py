from openai import OpenAI
import os
from dotenv import load_dotenv
load_dotenv('.env.local')
client = OpenAI(
    api_key=os.getenv("DEEPSEEK_API_KEY"),
    base_url="https://api.deepseek.com/v1",
)

completion=client.chat.completions.create(
    model='deepseek-reasoner',
    messages=[
        {'role':'system','content':'你是一个足球领域的专家'},
        {'role':'user','content':'c罗是哪个国家的'}
    ]
)
print('思考过程')
print(completion.choices[0].message.reasoning_content);
print("思考答案")
print(completion.choices[0].message.content)