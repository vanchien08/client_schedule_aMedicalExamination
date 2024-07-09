import actionTypes from './actionTypes';
import {getAllCode} from '../../services/userService'
export const fetchGenderStart = () => {
    return async(dispatch,getState)=>{
        try {
            let res=await getAllCode("GENDER");
     //      console.log('resssssssssss>>action',res.data.data)
  
            if(res.errCode ===0)
            {
                dispatch(fetchGenderSuccess(res.data.data));
            }
            else{
               dispatch(fetchGenderFail());
            }
        } catch (error) {
            dispatch(fetchGenderFail());
            console.log(error)
        }
    }
    
}
export const fetchGenderSuccess = (data) => ({
    type: actionTypes.FETCH_GENDER_SUCCESS,
    data:data
})

export const fetchGenderFail = () => ({
    type: actionTypes.FETCH_GENDER_FAIL
})