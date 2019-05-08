import React from "react";
import "../../Styles/app.css";


function RegisterForm (props) {
    return (
        <div>
      <div>
        hey
      </div>
      <div className="card">
        <div className="table">
  
      <h2>Sign up </h2>
      <h5><p>Create an account to save your events</p></h5>
  
  
    
      
  <div class="row center-align">
  <form className="register"action="/api/users" class="col s12 z-depth-1" method="POST">
        
        <div class="row">
          <div class="input-field col s12">
            <input id="username" type="text" class="validate"></input>
            <label for="username">Username</label>
          </div>
        </div>
  
        <div class="row">
          <div class="input-field col s12">
            <input id="email" type="text" class="validate"></input>
            <label for="email">Email</label>
          </div>
        </div>
  
        <div class="row">
          <div class="input-field col s12">
            <input id="phone" type="text" class="validate"></input>
            <label for="phone">Phone</label>
          </div>
        </div>
         </form>
 </div>
 </div>
         </div>
         </div>
    );
}
   

  export default RegisterForm;