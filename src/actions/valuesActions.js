export const principleAmountAction = (e)=>{
    return {type: 'principleAmount', payload: e.target.value}
}

export const interestRateAction = (e)=>{
    return {type: 'interestRate', payload: e.target.value}
}

export const numberOfYearsAction = (e)=>{
    return {type: 'numberOfYears', payload: e.target.value}
}

export const submitAction = ()=>{
    return {type: 'submit'}
}