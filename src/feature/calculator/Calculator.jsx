import React  from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {calcButton, calcResult, calcBackSpace, calcClear} from './calculatorSlice'
import './calculator.css'

const Calculator = () => {
    const number = useSelector(state => state.calc.number)
    const dispatch = useDispatch()
    const ops = ['+', '-', '*', '/']

    const updateCalc = (value) => {
        if( 
            (ops.includes(value) && number ==='') ||
            (ops.includes(value) && ops.includes(number.slice(-1)))
        ) {return}
        dispatch(calcButton(value))
    }
    
    
    return (
        <>
        <div className="container col-6" style={{backgroundColor: '#333', color: 'white', borderRadius: '10px'}}>
            <div className="row calcDisplay">
                    
                {number || '0'}              
            </div>
           
            <div className="row">
                <div className="col" onClick={() => {
                    dispatch(calcButton('(')) 
                   
                }}>
                (
                </div>
                <div className="col" onClick={() => {
                    dispatch(calcButton(')'))
                   
                }}>
                )
                </div>
                <div className="col" onClick={() => {
                    dispatch(calcClear())
                }}>
                AC
                </div>
                <div className="col" onClick={() => {
                    dispatch(calcBackSpace())
                }}>
                Del
                </div>
            </div>
            <div className="row">
                <div className="col" onClick={() => {
                    dispatch(calcButton('7'))
                   
                }}>
                7
                </div>
                <div className="col" onClick={() => {
                    dispatch(calcButton('8'))
                   
                }}>
                8
                </div>
                <div className="col" onClick={() => {
                    dispatch(calcButton(9))
                   
                }}>
                9
                </div>
                <div className="col" onClick={() => {
                    updateCalc('+')

                }}>
                +
                </div>
            </div>
            <div className="row">
                <div className="col" onClick={() => {
                    dispatch(calcButton(4))
                   
                }}>
                4
                </div>
                <div className="col" onClick={() => {
                    dispatch(calcButton(5))
                   
                }}>
                5
                </div>
                <div className="col" onClick={() => {
                    dispatch(calcButton(6))
                   
                }}>
                6
                </div>
                <div className="col" onClick={() => {
                    updateCalc('-')
                }}>
                -
                </div>
            </div>
            <div className="row">
            <div className="col" onClick={() => {
                    dispatch(calcButton(1))
                   
                }}>
                1
                </div>
                <div className="col" onClick={() => {
                    dispatch(calcButton(2))
                   
                }}>
                2
                </div>
                <div className="col" onClick={() => {
                    dispatch(calcButton(3))
                   
                }}>
                3
                </div>
                <div className="col" onClick={() => {
                    updateCalc('*')


                }}>
                *
                </div>
            </div>
            <div className="row">
                <div className="col" onClick={() => {
                    dispatch(calcButton(0))
                   
                }}>
                0
                </div>
                <div className="col" onClick={() => {
                    dispatch(calcButton('.'))

                   
                }}>
                .
                </div>
                <div className="col" onClick={() => {
                    dispatch(calcResult())
                    
                }}>
                =
                </div>
                <div className="col" onClick={() => {
                    updateCalc('/')
                }}>
                /
                </div>
            </div>
            
        </div>
        </> 

    )
}

export default Calculator