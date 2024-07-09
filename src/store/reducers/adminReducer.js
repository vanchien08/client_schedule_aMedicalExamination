import actionTypes from '../actions/actionTypes';



const initialState = {
   genders:[],
   roles:[],
   position:[]
}

const AdminReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_GENDER_START: 
            return {
                ...state,
              
            }
            case actionTypes.FETCH_GENDER_SUCCESS: 
            let cpstate={...state};
            cpstate.genders=action.data;
            console.log("cpstate>>",action)
            return {
                ...cpstate,
                
            }
            case actionTypes.FETCH_GENDER_FAIL: 
            return {
                ...state,
               
            }
        default:
            return state;
    }
}

export default AdminReducer;