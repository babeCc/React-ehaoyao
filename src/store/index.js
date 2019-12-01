import {createStore,combineReducers,applyMiddleware} from "redux";
import reduxThunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import home from "./reducers/home";
import activity from "./reducers/activity";
import doctor from "./reducers/doctor";
import search from "./reducers/search";
const reducers = combineReducers({
    home ,
    activity,
    doctor,
    search
})

const store = createStore(reducers,composeWithDevTools(applyMiddleware(reduxThunk)))

export default store;