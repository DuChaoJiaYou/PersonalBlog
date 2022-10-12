import { createStore , applyMiddleware,combineReducers} from 'redux'
import thunk from 'redux-thunk'
const reducer = (state = { count: 0 }, action) => {

    switch (action.type) {
        case 'INCREASE':
            return {
                count: state.count + 1
            }

        case 'REDUCE':
            return {
                count: state.count - 1
            }

        default:
            return state
    }

}

//定义rootReducer
const rootReducer = combineReducers({
    reducer
})


export const store = createStore(rootReducer,applyMiddleware(thunk))