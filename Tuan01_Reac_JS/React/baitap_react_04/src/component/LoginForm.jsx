
import './LoginForm.css';

function LoginForm() {

  return (
    <div className="login-container">
      <form className="login-form" >
        <h2>Login</h2>
        
        <div className="input-group">
          <label>Username</label>
          <input 
            type="text" 
            placeholder="Enter username"
            required 
          />
        </div>

        <div className="input-group">
          <label>Password</label>
          <input 
            type="password" 
            placeholder="Enter password"
            required 
          />
        </div>

        <button type="submit" className="btn-login">
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;