import React, { useState } from "react";
import { AiFillLock, AiOutlineMail } from "react-icons/ai";
import { Link } from "react-router-dom";
import { signIn } from "../context/AuthContext";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Signin() {
  const { signIn } = UserAuth();

  // we wanna set some state for eamil and password:
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  // when user signin or login we need to navigate to home page:
  const navigate = useNavigate();

  // now we need to handle the submit:
  const handleSubmit = async (e) => {
    // we don't want to page reloaded:
    e.preventDefault();
    // call set error to empty string:
    setError("");
    try {
      // now we need to call the signup function:
      await signIn(email, password);
      // if there is no error then navigate to home page:
      navigate("/account");
    } catch {
      setError(e.message);
      console.log(e.message);
    }
  };

  return (
    <div>
      <div className="max-w-[400px] mx-auto min-h-[600px] px-4 py-20">
        <h1 className="text-2xl font-bold font-mono">Signin</h1>
        <form onSubmit={handleSubmit}>
          <div className="my-4">
            <label>Email</label>
            <div className="my-2 w-full rounded-2xl relative shadow-xl">
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 bg-primary border-input rounded-2xl"
                type="email"
              />
              <AiOutlineMail className="absolute right-2 top-3 text-gray-500" />
            </div>
          </div>
          <div className="my-4">
            <label>Password</label>
            <div className="my-2 w-full rounded-2xl relative shadow-xl">
              <input
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 bg-primary border-input rounded-2xl"
                type="password"
              />
              <AiFillLock className="absolute right-2 top-3 text-gray-500" />
            </div>
          </div>
          <button className="w-full my-2 p-3 bg-button text-btnText rounded-2xl shadow-xl">
            Signin
          </button>
        </form>
        <p className="my-4">
          Don't have an account?
          <Link className="text-accent" to="/signup">
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signin;
