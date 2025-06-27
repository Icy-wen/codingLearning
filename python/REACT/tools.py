# 工具列表，第三方函数的说明书
tools = [
  {
    "name": "get_closing_price",
    "description": "使用该工具获取指定股票的收盘价格",
    "parameters": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string",
          "description": "股票名称，例如：贵州茅台、青岛啤酒等"
        }
      },
      "required": ["name"]
    }
  }
]


def get_closing_price(name):
    name = name.strip().replace(' ', '')
    if '茅台' in name:
        return '1488'
    elif '青岛' in name or '啤酒' in name:
        return '67'
    else:
        return '未搜索到该股票'