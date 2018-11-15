import React, { Component } from 'react';
import './App.css';
import NavBar from './Components/Navbar';
import AddContact from './Components/AddContact';
import ContactList from './Components/ContactList';
import {addContact,getContact,deleteContact,editContact,updateContact} from './Actions/Action_Creator';
import {connect} from 'react-redux';


class App extends Component {

  render() {
    return (
      <div className="App"><NavBar/>
      <div className="Main-Body">
   
        <div className="Add-Body">
          <AddContact addContact={this.props.addContact}
                      updateContact={this.props.updateContact}
                      cont= {this.props.contact}
                      btn_up_disabled={this.props.btn_up_disabled}
                      btn_sub_disabled={this.props.btn_sub_disabled}
                     />
        </div>
        
         
        <div className="List-Body">
          <ContactList
            deleteContact={this.props.deleteContact}
            editContact={this.props.editContact}
            contacts= {this.props.contacts}
            getContact={this.props.getContact}
          />
        </div>
      </div>
      </div>
    );
  }
}


const mapDispatchToProps=(dispatch)=>({
  addContact:(contact)=>dispatch(addContact(contact)),
  getContact: ()=> dispatch(getContact()),
  deleteContact: (id) =>dispatch(deleteContact(id)),
  editContact: (item)=>dispatch(editContact(item)),
  updateContact:(contact,id)=>dispatch(updateContact(contact,id))
})


const mapStateToProps = (state) => {
  return {
      contacts: state.contactReducer.contacts,
      contact : state.contactReducer.contact,
      btn_up_disabled: state.contactReducer.up_disabled,
      btn_sub_disabled:state.contactReducer.sub_disabled

  };
}


export default connect(mapStateToProps,mapDispatchToProps)(App);
