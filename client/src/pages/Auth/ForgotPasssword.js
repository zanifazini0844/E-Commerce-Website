import React, { useState } from "react";
import Layout from "./../../components/Layout/Layout";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Forgotpassword = () => {
 
    const [email, setEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");

    
    const navigate = useNavigate();

    
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const res = await axios.post("http://localhost:8080/api/v1/auth/forgot-password", {  // Add protocol and host here
          email,
          newPassword,
        });
        if (res && res.data.success) {
          toast.success(res.data.message);
          
          navigate( "/login");
        } else {
          toast.error(res.data.message);
        }
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong");
      }
    };
   

    return (
    <Layout title="Forgot Password-Ecommer App">
          <div className="login">
            <form onSubmit={handleSubmit}>
              <h4 className="title">RESET PASSWORD</h4>
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
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="form-control"
                  placeholder="Enter Your New Password"
                  required
                />
                </div>
              <button type="submit" className="btn btn-primary">
               Reset
              </button>
             
            </form>
          </div>
        </Layout>
  )
}

export default Forgotpassword
