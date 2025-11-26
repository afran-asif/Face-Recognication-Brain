import React from "react";

const SignIn = () => {
    return(
        <div className="flex justify-center">
            <div className=" pa4 br3 ba b--black ">
            <label htmlFor="">Username:</label><br/>
            <input type="text" name="name" placeholder="Enter your username" /><br/>
            <label htmlFor="">Email:</label><br/>
            <input type="email" name="email" placeholder="Enter your email" /><br/>
            <label htmlFor="">Password:</label><br/>
            <input type="password" name="password" placeholder="********" />
            
        </div>
        </div>
        
    )
}
export default SignIn;