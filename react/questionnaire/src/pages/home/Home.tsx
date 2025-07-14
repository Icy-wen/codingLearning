import React from 'react'
import logo from '../../assets/logo.png'
import './index.scss'
import{ useNavigate}from 'react-router-dom'
export default function Home() {
    const navigate=useNavigate()
    const toQuestion=()=>{
        navigate('/question')
    }
    return (
        <div className='home-container'>
            <div className="home-box">
                <div className="home-box-hd">
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    <div className="title">
                        欢迎参与旅梦问卷调查
                    </div>
                    <div className="desc">
                        你的每一个想法都很重要
                    </div>
                </div>
                <div className="home-box-btn" onClick={toQuestion}>
                    开始问卷
                </div>
            </div>
        </div>

    )
}
