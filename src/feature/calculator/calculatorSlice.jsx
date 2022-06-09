import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    number: '',
}

export const calculatorSlice =  createSlice ({
    name: 'calculator',
    initialState,
    reducers: {
        calcButton: (state,action) => {
            return {
                ...state,
                number: state.number.concat(action.payload)
            }
        },
        calcResult: (state) => {
            const newState = eval(state.number).toString()
            
            return {
                ...state,
                number: newState
            }
        },
        calcBackSpace: (state) => {
            return {
                ...state,
                number: state.number.slice(0,-1)
            }
        },
        calcClear: (state) => {
            return {
                ...state,
                number: '',
            }
        }
    }
})

export const {calcButton, calcResult, calcBackSpace, calcClear} = calculatorSlice.actions

export default calculatorSlice.reducer
