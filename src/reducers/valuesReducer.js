const initialValues = {
    principleAmount: 0,
    interestRate: 0,
    numberOfYears: 0,
    totalInterest: null
}

const valuesReducer = (state = initialValues, action) => {
    switch(action.type){
        case 'principleAmount' :
            return {
                ...state,
                principleAmount: action.payload
            }
        case 'interestRate' :
            return {
                ...state,
                interestRate: action.payload
            }
        case 'numberOfYears' :
            return {
                ...state,
                numberOfYears: action.payload
            }
        case 'submit' :
            const rate = state.interestRate / 100
            return{
                ...state,  
                totalInterest: state.principleAmount * ( 1 + (rate * state.numberOfYears))
            }
        default: 
            return state
    }
}

module.exports = valuesReducer