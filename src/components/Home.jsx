import React , {useEffect , useContext}  from 'react';
import { Link , useHistory , } from 'react-router-dom';
import UserContext from '../context/userContext'

const Home = () => {
    const {userData} = useContext(UserContext);
    const history = useHistory();

    useEffect(() => {
        if(!userData.user)
            history.push("/login");

    }, []);

    return (

        <div>
        {userData.user ? (
            <h1>Welcome {userData.user.name}</h1>
            
           
        ) : (
            <>
                <h2>You are not logged in</h2>
                <Link to="/login">Login</Link>
            </>
        )}
    </div>

//  <div>

//  <div className="topnav" id="myTopnav">
//   <Link to="/" className="active">Home</Link>
//   <Link to="/login" className="login">Login</Link>
//   <Link to="/SignUp" className="SignUp">SignUp</Link>
//   <Link to="/Profile" className="SignUp">Profile</Link>
  
// </div>
/* <h1 className= "heading"> Welcome to Home Page</h1>  */
// </div> 



    )
}

export default Home;
