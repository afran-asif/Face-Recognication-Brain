import React from "react";

const SignIn = ({onRouteChange}) => {
    return(
        <div className="flex justify-center"> 
            <div className=" pa4 br3 ba b--black ">
                <h2>Singin Form</h2>
                <label className="m" htmlFor="">Username:</label><br/>
                <input type="text" name="name" placeholder="Enter your username" /><br/>
                <label htmlFor="">Password:</label><br/>
                <input type="password" name="password" placeholder="********" /><br />
                <input onClick={()=>onRouteChange('home')} type="submit" value="sign in"/>
                <p className="pointer" onClick={()=>onRouteChange('register')}>register</p>
            </div>
        </div>
        
    )
}
export default SignIn;