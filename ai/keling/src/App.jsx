import React, { useRef, useState } from 'react'
import './styles.css'

export default function App() {
    const [imgUrl, setImgUrl] = useState(null)
    const promptRef=useRef(null)
    const generateImage=async()=>{
        
        const negative_prompt='Blurry, Bad, Bad anatomy, Bad proportions, Deformed, Disconnected limbs, Disfigured, Extra arms, Extra limbs, Extra hands, Fused fingers, Gross proportions, Long neck, Malformed limbs, Mutated, Mutated hands, Mutated limbs, Missing arms, Missing fingers, Poorly drawn hands, Poorly drawn face.'
        const endpoint='/klingai/v1/images/generations'
        const token=await(await fetch('/api/jwt-auth')).text()
        //console.log(token);
        const payload={
            prompt:promptRef.current.value,
            negative_prompt,
            aspect_ratio:'1:1',
        }
        const headers={
            'Authorization':`Bearer ${token}`,
            'Content-Type':'application/json',
        }
        const response=await fetch(endpoint,{
            method:'POST',
            headers,
            body:JSON.stringify(payload),
        })
        const data=await response.json()
        console.log(data);
        
        //setImgUrl(data.data[0].url)
    }
  return (
    <div className="container">
        <div className="prompt-container">
            <label>Prompt:</label>
            <button onClick={generateImage}>生成</button>
            <textarea className='prompt-textarea' ref={promptRef}></textarea>
        </div>
        <div className="output">
        <img src="{imgUrl}" alt="" />
        </div>
    </div>
  )
}
