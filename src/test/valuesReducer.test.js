const valuesReducer = require('../reducers/valuesReducer')

test('Calculates interests and returns new state with totalInterest that should = 5625', ()=>{
    const values = {
                principleAmount: 5000,
                interestRate: 2.5,
                numberOfYears: 5
            }
        
    const action =  {
        type: 'submit',
    }
        
    const equalsTo = {
        principleAmount: 5000,
        interestRate: 2.5,
        numberOfYears: 5,
        totalInterest: 5625
    }

    const outcome = valuesReducer(values, action)
    expect(outcome).toStrictEqual(equalsTo)
})