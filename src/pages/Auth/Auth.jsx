import React, { useState,useContext } from 'react'
import classes from "./SignUp.module.css"
import { Link, useNavigate, useLocation } from "react-router-dom"
import { auth } from "../../Utility/firebase"
import { Type } from "../../Utility/action.type"
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth"
import {ClipLoader } from "react-spinners"
import {DataContext} from "../../Components/DataProvider/DataProvider"
function Auth() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState({signIn:false,signUp:false})
  const [{ user }, dispatch] = useContext(DataContext);

  const navigate = useNavigate();
  const navStateData = useLocation();
  // console.log(navStateData);


  const authHandler =async (e) => {
    e.preventDefault();
    console.log(e.target.name)
    if (e.target.name === "signIn") {
      //firebase auth
      setLoading({loading,signIn:true})
      signInWithEmailAndPassword(auth, email, password).then((userInfo) => {
        dispatch({
          type: Type.SET_USER,
          user: userInfo.user
        })
        setLoading({ ...loading, signIn: false })
        navigate(navStateData?.state?.redirect || "/")
      })
        .catch((error) => {
          setError(error.message)
          setLoading({...loading,signIn:false})
})
    } else {
      setLoading({...loading,signUp:true})
      createUserWithEmailAndPassword(auth, email, password).then((userInfo) => {
dispatch({
  type: Type.SET_USER,
  user: userInfo.user
})
        setLoading({ ...loading, signIn: false })
        navigate(navStateData?.state?.redirect || "/")
}).catch((error) => {
  setError(error.message)
  setLoading({...loading,signUp:false})
      })
    }
  }


  return (
    <section className={classes.login}>
      {/* Amazon logo */}
      <Link to="/">
        <img src="https://pngimg.com/uploads/amazon/amazon_PNG1.png" alt="" />
      </Link>
      <div className={classes.login__container}>
        <h1>Sign In</h1>
        {
          navStateData?.state?.msg && (
            <small style={{
              padding: "5px",
              textAlign: "center",
              color: "red",
              fontWeight: "bold",
            }}>
              {navStateData?.state?.msg}
              
            </small>
          )
        }
        <form action="">
          <div>
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="email"
              id="email"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              name="password"
              id="password"
            />
          </div>
          <button
            type="submit"
            onClick={authHandler}
            name="signIn"
            className={classes.login_signButton}
          >
            {loading.signIn ? <ClipLoader color="#fff" size={20} /> : "Sign In"}
          </button>
        </form>
        <p>
          By signing in you agree to Amazon's fake clone conditions of use &
          sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest Based Ads Notice.
        </p>
        <button
          type="submit"
          onClick={authHandler}
          name="signUp"
          className={classes.login__registerButton}
        >
          {loading.signUp ? (
            <ClipLoader color="#fff" size={20} />
          ) : (
            "Create your Amazon Account"
          )}
        </button>
        {error && (
          <small style={{ color: "red", paddingTop: "5px" }}>{error}</small>
        )}
      </div>
    </section>
  );
}

export default Auth;