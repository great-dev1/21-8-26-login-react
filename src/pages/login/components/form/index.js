import './Form.scss'
import FacebookIcon from '../../assets/images/facebook.svg'
import TwitterIcon from '../../assets/images/twitter.svg'
import GoogleIcon from '../../assets/images/google.svg'

function Form() {
  return (
    <div className="login-form">
      <div className="content">
        <h2 className="title">Welcome Back!</h2>
        <p className="subtitle">Sign in to continue to Skote.</p>

        {/* Login form */}
        <form>
          <label className="label" for="username">Username</label>
          <input
            className="input-box"
            type="text"
            id="username"
            placeholder="Enter username"
          />
          <a className="forgot-link" href="/">Forgot Password?</a>
          <label className="label" for="password">Password</label>
          <input
            className="input-box"
            type="password"
            id="password"
            placeholder="Enter password"
          />
          <label className="label" for="remember">
            <input
              className="check-box"
              type="checkbox"
              id="remember"
            />
            Remember me
          </label>
          <button className="login-btn">Log In</button>
        </form>

        {/* Social links */}
        <div className="social">
          <p className="text">Sign in with</p>
          <div>
            <a href="/">
              <img className="icon" src={FacebookIcon} alt="facebook" />
            </a>
            <a href="/">
              <img className="icon" src={TwitterIcon} alt="twitter" />
            </a>
            <a href="/">
              <img className="icon" src={GoogleIcon} alt="google" />
            </a>
          </div>
        </div>

        {/* Signup text */}
        <p className="signup-text">
          Don't have an account ?
          <a href="/"> Signup now</a>
        </p>
      </div>
    </div>
  )
}

export default Form
