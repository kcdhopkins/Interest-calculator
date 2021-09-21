import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { principleAmountAction, interestRateAction, numberOfYearsAction, submitAction} from '../actions/valuesActions'

const InterestCalculator = () => {
    const principleAmount = useSelector(state => state.valuesReducer.principleAmount )
    const interestRate = useSelector(state => state.valuesReducer.interestRate )
    const numberOfYears = useSelector(state => state.valuesReducer.numberOfYears )
    const totalInterest = useSelector(state => state.valuesReducer.totalInterest )

    const dispatch = useDispatch()

    const style ={
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        dispatch(submitAction())
    }
    
    return (
        <div style = {style}>
            <form onSubmit={handleSubmit}>
                <h1>Interest Calculator</h1>
                <div>
                    <label htmlFor="principle-amount">Principle Amount </label>
                    <input type='text' name="principle-amount" value={principleAmount} onChange={(e)=> dispatch(principleAmountAction(e))}/>
                    <br/><br/>
                    <label htmlFor="interest-rate">Interest Rate </label>
                    <input type='text' name="interest-rate" value={interestRate} onChange={(e)=> dispatch(interestRateAction(e))}/>%
                    <br/><br/>
                    <label htmlFor="total-years">Total number of years </label>
                    <input type='text' name="total-years" value={numberOfYears} onChange={(e)=> dispatch(numberOfYearsAction(e))}/><br/>
                    <button style = {{marginTop: '2px'}} type='submit'>Submit</button>
                </div>
                <div>
                    {typeof totalInterest === 'number' ? <h3>The total interest is ${totalInterest.toFixed(2)}</h3> : null}
                </div>
            </form>
        </div>
    )
}

export default InterestCalculator
