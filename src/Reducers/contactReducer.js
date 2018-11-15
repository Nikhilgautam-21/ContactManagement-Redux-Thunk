import { ADD_CONTACT, GET_CONTACT,UPDATE_CONTACT, DELETE_CONTACT,EDIT_CONTACT} from '../Actions/Action-types';

let initState={
    contacts:[],
    contact:{},
    sub_disabled:false,
    up_disabled:true
}

const contactReducer = (state = initState, action) => {
    
    switch(action.type){
        case GET_CONTACT:
           state= {...state,
            contacts:action.payload}
          
        return state;
        case ADD_CONTACT:
         state = {...state, contacts:[...state.contacts, action.payload]}
         return state;


        case DELETE_CONTACT:
         return {contacts: state.contacts.filter(con => con._id !== action.payload)}   


         case EDIT_CONTACT:
         state.sub_disabled=true;
         state.up_disabled=false;
         state={...state,contact:action.payload}
         return state;


        case UPDATE_CONTACT:
   
         state.contact={};
         state.sub_disabled=false;
         state.up_disabled=true;
         
         const updatedItems=state.contacts.map((item)=>{
            if(item._id===action.payload._id){
                return{...item,...action.payload}
            }
            return item
        })
         return {...state, contacts:updatedItems}
         
        default:
            return state;

    }

}
export default contactReducer;