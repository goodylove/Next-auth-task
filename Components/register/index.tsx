import React from "react";

export default function Register() {
  return (
    <form>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" placeholder="Enter Name" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" name="email" placeholder="Enter Email" />
      </div>

      <div>
        <label htmlFor="password">PassWord</label>
        <input type="text" id="password" name="password" />
      </div>

      <button>Register</button>

      <p>Already have an acount? Login</p>
    </form>
  );
}
