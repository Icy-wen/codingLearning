import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

//仓库子模块
const questional = createSlice({
    name: "questional",
    initialState: {
        questions: [],
        answersId:[]as number[],
        score:0
    },
    reducers: {
        setQuestions(state, action) {
            state.questions = action.payload
        },
        setAnswersId(state, action:PayloadAction<number>) {
            state.answersId.push(action.payload)
        },
        setScore(state, action:PayloadAction<number>) {
            state.score = action.payload
        }
    },
});

export interface Answer {

    answer_name:string,
    is_standard_answer:number,
    topic_answer_id:number,
    topic_id:number,
}
export interface Ques {
    topic_name?: string,
    topic_answer:Answer[]

}

export const { setQuestions ,setAnswersId} = questional.actions

export default questional.reducer
export type RootState = ReturnType<typeof questional.reducer>;
