import { useState } from "react";
import { useNavigate } from "react-router-dom";

import AuthLayout from "../components/auth/AuthLayout";
import AuthInput from "../components/auth/AuthInput";
import AuthButton from "../components/auth/AuthButton";

const Register = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

 const handleRegister = (e) => {
  e.preventDefault();

  if (!name.trim() || !email.trim() || !password.trim()) {
    alert("Please fill all fields");
    return;
  }

  const users =
    JSON.parse(localStorage.getItem("users")) || {};

  if (users[email]) {
    alert("Account already exists. Please login.");
    return;
  }

  users[email] = {
    name: name.trim(),
    email: email.trim(),
    password: password,
  };

  localStorage.setItem(
    "users",
    JSON.stringify(users)
  );

  localStorage.setItem(
    "userName",
    name.trim()
  );

  localStorage.setItem(
    "userEmail",
    email.trim()
  );

  navigate("/dashboard");
};
  return (
    <AuthLayout
      title="Create Account 🌸"
      subtitle="Join LifeOS today"
    >
      <form
        onSubmit={handleRegister}
        className="space-y-5"
      >

        <AuthInput
          label="Full Name"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <AuthInput
          label="Email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <AuthInput
          label="Password"
          type="password"
          placeholder="Create password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <AuthButton type="submit">
          Create Account
        </AuthButton>

      </form>
    </AuthLayout>
  );
};

export default Register;