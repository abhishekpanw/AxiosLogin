import React ,{useState , useContext} from 'react'
import { Link , useHistory} from 'react-router-dom';
import axios from 'axios';
import UserContext from "../context/userContext";

const Login = () => {

     const [email, setEmail] = useState();
     const [password, setPassword] = useState();
    const history = useHistory();

    const { setUserData } = useContext(UserContext);
    const submit = async (e) => {
        e.preventDefault();
        try{
            const loginUser = {email, password};
            const loginResponse = await axios.post("http://localhost:8000/api/login", loginUser);
            setUserData({
                token: loginResponse.data.token,
                user: loginResponse.data.user
            });
            localStorage.setItem("auth-token", loginResponse.data.token);
            history.push("/");
        } catch(err) {
           console.log(err);
        } ;
  
}

    return (
      
      <div className="login-page">
      <div className="form">
  
        <form className="login-form"  onSubmit={submit} >
          <input type="email" placeholder="enter your email" id="email" onChange={e => setEmail(e.target.value)} /> 
          <input type="password" placeholder="enter your password" id="password" onChange={e => setPassword(e.target.value)}  />
          <button type="submit" >login</button>
           <p className="message">Not registered? <Link to="/signup">Create an account</Link> </p> 
          
        </form>
      </div>
      
    </div>
  
    
    );
    };
 


export default Login;
