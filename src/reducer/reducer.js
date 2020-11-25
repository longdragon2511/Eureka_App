// const initialState=[]

// export const reducer=(state=initialState,action)=>{
//     if(action.type=='add_campaign'){
//         console.log(state)
//         return [...state, action.payload]
//         // return action.payload
//     }
//     return state
// }

const initialState={
    campaign:[],
    post:null,
    comment:null,
}

export const reducer=(state=initialState,action)=>{
    if(action.type=='add_campaign'){
        console.log(state);
        return {
            ...state,
            campaign:[...state.campaign,action.payload],
        }

        // return action.payload
    }
    if(action.type=='add_post'){
        return {
            ...state,
            post:action.payload,
        }

        // return action.payload
    }
    if(action.type=='add_comment'){
        return {
            ...state,
            comment:action.payload,
        }

        // return action.payload
    }
    
    return state
}