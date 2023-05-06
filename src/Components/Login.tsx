import React, {SyntheticEvent, useState} from "react"
import { FaApple,
            FaGooglePlusG,
            FaFacebookF } from "react-icons/fa"
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { auth, login, register, setForm, toggleLoginModal } from "../../Data/Reducers/authSlice"
import { IoClose } from "react-icons/io5"
import store, { RootState, useAppDispatch } from "../../Data/Store"

const Login = () => {

  const authState = useSelector( (state: RootState ) => state.auth)
  const dispatch = useDispatch<LoginFormTypes>()
  const errorStatus = authState.error
  
  return (
    <div className="login_container" 
      style={authState.loginModal.open ?{"display" : "flex"} : {"display" : "none"}}
    >
      { authState.loginModal.form == "login" ? <LoginModal errorStatus={errorStatus}/> 
      : <RegisterModal errorStatus={errorStatus} />}
    </div>
  )
}

type LoginFormTypes = {
  email: string,
  password: string,
}

const LoginModal = (props: any) => {
  const dispatch = useAppDispatch()


  return(
    <div className="modal">
    <div className="form_container">
    <h1> Login </h1>

      <form 
        onSubmit={(e: React.SyntheticEvent) => {
          e.preventDefault();
          const target = e.target as typeof e.target & {
            email: { value: string };
            password: { value: string };
          };
          
          const formData = {
            email: target.email.value, 
            password: target.password.value
          }

          dispatch(login(formData))
        }}  
      >
        <input 
          type="email" 
          name="email"
          placeholder="Email"
        />
        <input 
          type="password" 
          name="password"
          placeholder="Password "
        />
        <Link to="reset">Forgot password?</Link>
        <button>Sign in </button>
        <span className="errorMessage">{props.errorStatus} </span>
      </form>
      <div className="seperator_container">
        <hr/> Or <hr/>
      </div>

      <div className="Other_auth_options">
        <div className="register_button_container"><div className="register_button"><FaApple/><button> Login With Apple </button></div></div>
        <div className="register_button_container"><div className="register_button"><FaGooglePlusG/><button>Login With Google </button></div></div>
        <div className="register_button_container register register_button"  onClick={() => dispatch(setForm("register"))}><button>Sign Up </button></div>
      </div>
    </div>
    
   </div>
  )
}

const RegisterModal = (props: any) => {

  const [authData, setAuthData ] = useState<any>({})
  const [passwordValidation, setPasswordValidation] = useState("")

  const dispatch = useDispatch<any>()

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {

    setAuthData({
        ...authData,
        [e.currentTarget.name]: e.currentTarget.value
      })
  }


  
  const handleSubmit =async ( e: React.SyntheticEvent) => {
    e.preventDefault()

    try{ 
      await verifyPasswords()
      dispatch(register(authData))
    }
    catch( err){  
      console.log("")
    }
   
  }

  const verifyPasswords = async() => {
    if(passwordValidation != authData.password){
      throw false 
    }

    return
  }
  return(
    <div className="modal">
        <div className="form_container">
        <h1> Sign Up </h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input 
            type="text" 
            required={true}
            placeholder="Username"
            name="username"
            onChange={(e) => handleChange(e)}/>
            <input 
            type="email" 
            required={true}
            placeholder="Email"
            name="email"
            onChange={(e) => handleChange(e)}/>
            <input 
            type="password" 
            required={true}
            placeholder="Password "
            name="password"
            onChange={(e) => handleChange(e)}/>
            <input type="password" 
            required={true}
            placeholder="Confirm Password"
            name="passwordValidation"
            onChange={(e) => setPasswordValidation(e.target.value)}/>

            <br/>
            <button type="submit">Sign up </button>
            <span className="errorMessage">{props.errorStatus} </span>
          </form>
          <div className="seperator_container">
            <hr/> Or <hr/>
          </div>

          <div className="Other_auth_options">
            <div className="register_button_container"><div className="register_button"><FaApple/><button> Login With Apple </button></div></div>
            <div className="register_button_container"><div className="register_button"><FaGooglePlusG/><button>Login With Google </button></div></div>
            <div className="register_button_container register register_button"  onClick={() =>  dispatch(setForm("login"))}><button>Sign In </button></div>
          </div>
        </div>

      </div>
  )
}
export default  Login
