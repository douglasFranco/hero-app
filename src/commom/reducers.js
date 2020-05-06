import {combineReducers} from 'redux'
import charactersReducer from '../characters/charactersReducer'

const rootReducer = combineReducers({
    character: charactersReducer
})

export default rootReducer