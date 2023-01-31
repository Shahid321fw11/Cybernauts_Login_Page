import React, { useState } from "react";
import "./styles.css";
const SignUp = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    userName: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  //   const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);
    // try {
    //   const url = `http://localhost:8080/api/users`;
    //   const { data: res } = await axios.post(url, data);
    //   navigate("/login");
    //   console.log(res.message);
    // } catch (error) {
    //   if (
    //     error.response &&
    //     error.response.status >= 400 &&
    //     error.response.status <= 500
    //   ) {
    //     setError(error.response.data.message);
    //   }
    // }
  };

  return (
    <>
      <div className="signup_container">
        <div className="signup_form_container">
          <div className="left">
            <h1>Welcome Back</h1>
            {/* <Link to="/login">
            <button type="button" className="white_btn">
              Sign in
            </button>
          </Link> */}
          </div>
          <div className="right">
            <form className="form_container" onSubmit={handleSubmit}>
              {/* <Link to="/login"> */}
              <button type="button" className="white___btn">
                Sign in
              </button>
              {/* </Link> */}
              <h1>Explore & Experience</h1>
              <p>Get onto your most confortable journey yet. All the way up.</p>
              <input
                type="text"
                placeholder="First Name"
                name="firstName"
                onChange={handleChange}
                value={data.firstName}
                required
                className="input"
              />
              <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                onChange={handleChange}
                value={data.lastName}
                required
                className="input"
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleChange}
                value={data.email}
                required
                className="input"
              />
              <input
                type="text"
                placeholder="Username"
                name="userName"
                onChange={handleChange}
                value={data.userName}
                required
                className="input"
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
                value={data.password}
                required
                className="input"
              />
              <input
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                onChange={handleChange}
                value={data.confirmPassword}
                required
                className="input"
              />
              {error && <div className="error_msg">{error}</div>}
              <button type="submit" className="green_btn">
                Get Started
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
