import { ADD_CONTACT, GET_CONTACT,UPDATE_CONTACT, DELETE_CONTACT,EDIT_CONTACT } from './Action-types';
import axios from 'axios';

const apiUrl = 'http://localhost:8000/api';

export const addContact=(contact)=>{
    return dispatch=>{
        axios.post(`${apiUrl}/addcontact`,contact)
        .then(res=>{
            dispatch(addContactSuccess(res.data))
        })
        .catch(error=>{throw(error)})
        }
    }

const addContactSuccess=(contact)=>{


    return{
        type:ADD_CONTACT,
        payload:contact
    }        
}

export  const getContact=()=>{
    return dispatch => {
        axios.get(`${apiUrl}/contact`)
          .then(res => {
               dispatch(getContactSuccess(res.data))    
          })
          .catch(error=>{throw(error)})
        };
    };

const getContactSuccess=(data)=>{
        return{
            type:GET_CONTACT,
            payload:data
        }

}

export const deleteContact=(id)=>{
    return dispatch=>{
        axios.delete(`${apiUrl}/delete/${id}`)
        .then(res=>{
            dispatch(deleteContactSuccess(res.data._id))
        })
        .catch(error=>{throw(error)})
    }
}

const deleteContactSuccess=(id)=>{
    
    return{
        type:DELETE_CONTACT,
        payload:id
    }

}

export const editContact=(item)=>{
   
    return{
        type:EDIT_CONTACT,
        payload:item
    }
}

export const updateContact=(contact,id)=>{
    return dispatch=>{
        axios.put(`${apiUrl}/update/${id}`,contact)
        .then(res=>{
            dispatch(updateContactSuccess(res.data))
        })
        
    }
}

const updateContactSuccess=(contact)=>{
        return{
            type:UPDATE_CONTACT,
            payload:contact
        }

}