import React, { useState } from "react";
import Layout from "./../../components/Layout/Layout";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate,useLocation } from "react-router-dom";
import { useAuth } from "../../context/auth";
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [auth, setAuth] = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const res = await axios.post("http://localhost:8080/api/v1/auth/login", {  // Add protocol and host here
          email,
          password,
        });
        if (res && res.data.success) {
          toast.success(res.data.message);
          setAuth({
            ...auth,
            user: res.data.user,
            token: res.data.token,
          });
          localStorage.setItem("auth", JSON.stringify(res.data));
          navigate(location.state || "/");
        } else {
          toast.error(res.data.message);
        }
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong");
      }
    };
    return (
        <Layout title="Login - Ecommer App">
          <div className="login">
            <form onSubmit={handleSubmit}>
              <h4 className="title">LOGIN FORM</h4>
              <div className="mb-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control"
                  placeholder="Enter Your Email"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control"
                  placeholder="Enter Your Password"
                  required
                />
                </div>
            
            
            
           
              
              
              <button type="submit" className="btn btn-primary">
               Login
              </button>


              <button type="submit" onClick={() => {navigate("/forgot-password");}}>
              Forgot Password
            </button>
            </form>
          </div>
        </Layout>
  )
}

export default Login
