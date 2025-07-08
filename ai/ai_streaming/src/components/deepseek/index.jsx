import { useState } from "react";
import "./index.css";
function Deepseek() {
  const [question, setQuestion] = useState("");
  const [content, setContent] = useState("");
  const [streaming, setStreaming] = useState(false);
  const update = async () => {
    //获取到用户在input框输入的内容
    if (!question) return;
    setContent("");
    //与deepseek交互
    const endpoint = "https://api.deepseek.com/chat/completions";
    const headers = {
      Authorization: `Bearer ${import.meta.env.VITE_DEEKSEEK_KEY}`,
      "Content-Type": "application/json",
    };
    const response = await fetch(endpoint, {
      method: "POST",
      headers: headers,
      body: JSON.stringify({
        model: "deepseek-chat",
        messages: [
          {
            role: "user",
            content: question,
          },
        ],
        stream: streaming,
      }),
    });
    // 非流式输出
    //const data = await response.json();
    //setContent(data.choices[0].message.content);

    // 流式输出
    if (streaming) {
      const reader = response.body.getReader(); // 读取器
      const decoder = new TextDecoder(); // 解码二进制数据
      let done = false;
      let buffer = "";

      while (!done) {
        const { value, done } = await reader.read(); // 读取到二进制数据
        const chunkValue = buffer + decoder.decode(value);
        buffer = "";
        const lines = chunkValue
          .split("\n")
          .filter((line) => line.startsWith("data: "));
        for (const line of lines) {
          const incoming = line.slice(6);
          if (incoming === "[DONE]") {
            done = true;
            break;
          }
          try {
            const data = JSON.parse(incoming);
            const delta = data.choices[0].delta.content; // 一小段中文
            if (delta) {
              setContent((prev) => prev + delta);

               //str += delta
               //setContent(str)
            }
          } catch (err) {
            console.log(err);
          }
        }
      }
    } else {
      const data = await response.json();
      setContent(data.choices[0].message.content);
    }
  };
  return (
    <div className="container">
      <div className="response">
        <label htmlFor="">请输入</label>
        <input
          type="text"
          className="input"
          onChange={(e) => {
            setQuestion(e.target.value);
          }}
        />
        <button onClick={update}>发送</button>
      </div>
      <div>
        <label htmlFor="">streaming</label>
        <input
          type="checkbox"
          onChange={(e) => {
            setStreaming(e.target.checked);
          }}
        />
      </div>
      <div>{content}</div>
    </div>
  );
}
export default Deepseek;
