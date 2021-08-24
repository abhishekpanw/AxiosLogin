
import React, { useState , useContext } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import UserContext from "../context/userContext"

const Signup = () => {

    const [name, setname] = useState();
    const [email, setemail] = useState();
    const [password, setPassword] = useState();
    const [passwordCheck, setPasswordCheck] = useState();
    
    const { setUserData } = useContext(UserContext);
    const history = useHistory();

    const submit = async (e) => {
        e.preventDefault();

        try{
            const newUser = {name, email, password , passwordCheck };
            await axios.post("http://localhost:8000/api/register", newUser);
            const loginResponse = await axios.post("http://localhost:8000/api/login", {
                email, password
            });
            setUserData({
                token: loginResponse.data.token,
                user: loginResponse.data.user
            });
            localStorage.setItem("auth-token", loginResponse.data.token);
            history.push("/");
        } catch(err) {
          console.log(err);
        }
        
    ;
  };

 return(   
   
  <div className="login-page">
  <div className="form">
  <div className="card-body">
      <form onSubmit={submit} className="login-form"> 
          
              <div className="form-group col-5">
                  <label htmlFor='name'> Name</label>
                  <input 
                    name="name" 
                    type="text" 
                    placeholder="enter name"
                    onChange={e => setname(e.target.value)}
                  />
                </div>

              <div className="form-group col">
                  <label htmlFor='email'>Email</label>
                  <input 
                  name="email"
                  placeholder="enter email" 
                  type="text"
                  onChange={e => setemail(e.target.value)}

                />
                </div>
          
              <div className="form-group col">
                  <label htmlFor='password'>Password</label>
                  <input 
                   name="password" 
                   placeholder="enter password"
                   type="password" 
                   onChange={e => setPassword(e.target.value)}
                  />
                  </div>
                  <div className="form-group col">
                  <label htmlFor='confirm_password'>Confirm Password</label>
                  <input 
                   name="confirm_password" 
                   placeholder="enter confirm password"
                   type="password" 
                   onChange={e => setPasswordCheck(e.target.value)}
                  />
                 </div>
                  
                 <div className="form-group">
                 <button type="submit" 
                 value="register">Register</button>
                 </div>
      </form>
  </div>
  </div>
  </div>

 )
 };
export default Signup;
