import { useContext } from "react"
import useForm from "../../hooks/useForm.jsx"
import AuthContext from "../../contexts/authContexts.js"

const LoginFormKeys = {
    Email: 'email',
    Password: 'password'
}

export default function Login (){
    const{loginSubmitHandler} = useContext(AuthContext)

    const{values, onChange, onSubmit} =   useForm(loginSubmitHandler,{ 
        [LoginFormKeys.Email]:'',
        [LoginFormKeys.Password]:''
    })
    return(
        <section id="login-page" className="auth">
            <form id="login" onSubmit={onSubmit}>

                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Login</h1>
                    <label htmlFor="email">Email:</label>
                    <input 
                        type="email" 
                        id="email" 
                        name={LoginFormKeys.Email} 
                        placeholder="Sokka@gmail.com"
                        onChange = {onChange}
                        value={values['email']}
                        />

                    <label htmlFor="login-pass">Password:</label>
                    <input 
                        type="password" 
                        id="login-password" 
                        name={LoginFormKeys.Password}
                        onChange = {onChange}
                        value={values[LoginFormKeys.Password]}
                        />
                    <input type="submit" className="btn submit" value="Login"/>
                    <p className="field">
                        <span>If you don't have profile click <a href="#">here</a></span>
                    </p>
                </div>
            </form>
        </section>
    )
}