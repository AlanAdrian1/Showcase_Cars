"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true); 
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      console.log("Logging in with", username, password);
    } else {
      console.log("Signing up with", username, password);
    }
    router.push("/home");
  };

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>

      <div style={{ marginBottom: "20px" }}>
        <button
          onClick={() => setIsLogin(true)}
          style={{
            padding: "10px 20px",
            backgroundColor: isLogin ? "#0070f3" : "#ccc",
            color: isLogin ? "#fff" : "#000",
            marginRight: "10px",
          }}
        >
          Login
        </button>
        <button
          onClick={() => setIsLogin(false)}
          style={{
            padding: "10px 20px",
            backgroundColor: !isLogin ? "#0070f3" : "#ccc",
            color: !isLogin ? "#fff" : "#000",
          }}
        >
          Sign Up
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "20px" }}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={{ padding: "10px", width: "200px" }}
          />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ padding: "10px", width: "200px" }}
          />
        </div>
        <button type="submit" style={{ padding: "10px 20px" }}>
          {isLogin ? "Login" : "Sign Up"}
        </button>
      </form>

      <style jsx>{`
        button {
          cursor: pointer;
          border: none;
          border-radius: 5px;
          font-size: 16px;
        }
        input {
          border: 1px solid #ccc;
          border-radius: 5px;
          font-size: 16px;
        }
      `}</style>
    </div>
  );
};

export default AuthPage;
