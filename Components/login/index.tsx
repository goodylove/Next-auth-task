import React from "react";

export default function Login() {
  return (
    <form>
      <div>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" name="email" placeholder="Enter Email" />
      </div>

      <div>
        <label htmlFor="password">PassWord</label>
        <input type="text" id="password" name="password" />
      </div>

      <button>Login</button>

      <p>Don't have an account? Register </p>
    </form>
  );
}
