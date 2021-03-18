

export const initialState={
    user:[]
    ,currIndex:0,
    currUser:null,
    sellUser:null,
    amount:0
};



const reducer= (state,action)=>{

    switch(action.type){
       case "SET_INDEX":
           return{
               ...state,
               currIndex:action.index
           };
        case "SET_USER":
            return {
                ...state,
                currUser:action.user

            };
        case "OVER":
            return {
                ...state,
                user:null
            };

            // const newUser=[...state.user];
            // newUser[userInd]=newUser[userInd].balance>action.amt?{...newUser[userInd],balance:Number(newUser[userInd].balance) + Number(action.amt)}:null

            // const userIndex=state.user.findIndex(item=>item.first==state.currUser.first);
            // newUser[userIndex]=newUser[userIndex].balance>action.amt?{...newUser[userIndex],balance:newUser[userIndex].balance-action.amt}:null
           
            //    const newUser=[...state.user]
            //    newUser=[...newUser,newUser[userInd]:result]
            // return{
            //     ...state,
            //     user:newUser
                
            // };
        case "TAKE_USER":
            return{
                ...state,
                user:action.user
            };
                
            

           

    }
};

export default reducer;