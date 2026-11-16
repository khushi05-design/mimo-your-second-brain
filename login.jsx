import { useState } from "react";
import { useNavigate } from "react-router-dom";

import AuthLayout from "../components/auth/AuthLayout";
import AuthInput from "../components/auth/AuthInput";
import AuthButton from "../components/auth/AuthButton";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

 const handleLogin = (e) => {
  e.preventDefault();

  const users =
    JSON.parse(localStorage.getItem("users")) || {};

  const user = users[email];

  if (!user) {
    alert("Account does not exist. Please register first.");
    return;
  }

  if (user.password !== password) {
    alert("Incorrect password.");
    return;
  }

  localStorage.setItem(
    "userName",
    user.name
  );

  localStorage.setItem(
    "userEmail",
    user.email
  );

  navigate("/dashboard");
};

  return (
    <AuthLayout
      title="Welcome Back 👋"
      subtitle="Login to continue"
    >
      <form
        onSubmit={handleLogin}
        className="space-y-5"
      >

        <AuthInput
          label="Email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <AuthInput
          label="Password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <AuthButton type="submit">
          Login
        </AuthButton>

      </form>
    </AuthLayout>
  );
};

export default Login;