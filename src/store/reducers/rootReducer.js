import {combineReducers} from 'redux';
import { connectRouter } from 'connected-react-router';

import appReducer from "./appReducer";
import learnreducer from "./learnReducer"
import userReducer from "./userReducer";
import AdminReducer from "./adminReducer";
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const persistCommonConfig = {
    storage: storage,
    stateReconciler: autoMergeLevel2,
};

const userPersistConfig = {
    ...persistCommonConfig,
    key: 'user',
    whitelist: ['isLoggedIn', 'userInfo']
};

export default (history) => combineReducers({
    router: connectRouter(history),
    
    user: persistReducer(userPersistConfig, userReducer),
    
    app: appReducer,
    admin:AdminReducer,
    learnredux:learnreducer
})