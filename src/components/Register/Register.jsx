import React from "react";

const Register = ({onRouteChange}) => {
    return(
        <div className="flex justify-center">
            <div className=" pa4 br3 ba b--black ">
                <h2>Register Form</h2>
                <label className="m" htmlFor="">Username:</label><br/>
                <input type="text" name="name" placeholder="Enter your username" /><br/>
                <label htmlFor="">Email:</label><br/>
                <input type="email" name="email" placeholder="Enter your email" /><br/>
                <label htmlFor="">Password:</label><br/>
                <input type="password" name="password" placeholder="********" /><br />
                <input onClick={()=>onRouteChange('home')} type="submit" value="Register"/>
                <p className="pointer" onClick={()=>onRouteChange('signin')}>Sign in</p>
            </div>
        </div>
        
    )
}
export default Register;