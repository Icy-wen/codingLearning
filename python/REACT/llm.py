# 定义一个客户端，用于从LLM获取响应
from openai import OpenAI
import os
from dotenv import load_dotenv


load_dotenv('.env.local')
client = OpenAI(
  api_key=os.getenv('DEEPSEEK_API_KEY'),
  base_url='https://api.deepseek.com/v1'
)
    

