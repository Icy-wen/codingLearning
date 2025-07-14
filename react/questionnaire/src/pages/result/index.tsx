import React from 'react'
import './index.scss'
import { useSelector } from 'react-redux'
import type { RootState } from '../../store/modules/questionalStore'

export default function index() {
    const { answersId, questions } = useSelector((state: RootState) => state.questional)
    
    const calculateScore = () => {
        let score = 0
        questions.forEach((question, index) => {
            const correctAnswer = question.topic_answer.find(answer => answer.is_standard_answer === 1)
            if (correctAnswer && answersId[index] === correctAnswer.topic_answer_id) {
                score++
            }
        })
        return score*(100/questions.length)
    }

    const score = calculateScore()
    const content=()=>{
        if(score<60){
            return '测试结果：您的测试结果为不及格，需要继续努力！'
        }else if(score>60&&score<80){
            return '测试结果：您的测试结果为良好，需要继续努力！'
        }else if(score>=80){
            return '测试结果：您的测试结果为优秀'
        }else if(score>=90){
            return '太秀了'
        }
    }
    return (
        <div className="score">
            <div className="score-hd">
                <div className="score-hd-title">
                    测试结果
                </div>
            </div>
            <div className="score-title">
                得分:{score}分
            </div>
            <div className="score-content">
                {content()}
            </div>
        </div>
    )
}
