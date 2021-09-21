import { combineReducers } from "redux";
const valuesReducer = require('./valuesReducer');

const allReducers = combineReducers({
    valuesReducer
})

export default allReducers