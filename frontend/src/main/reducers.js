import { combineReducers } from 'redux'

const rootReducers = combineReducers({
    dashboard: () => ({sumary: {credit: 100, debt: 50}})
})

export default rootReducers