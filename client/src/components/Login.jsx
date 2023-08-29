import React, { useState } from "react";

const Login = () => {
  const [showForm, setShowForm] = useState(false);
  const [inputField, setInputField] = useState({
    userName: "",
    password: "",
  });
  const validateinput = () => {};
  const handleChange = (e) => {
    setInputField({ ...inputField, [e.target.name]: e.target.value });
  };
  return (
    <div className="w-full h-full ">
      {/* navbar */}
      <div className="w-full  flex justify-between p-4">
        <div className="">
          <h3 className="text-2xl ">To-Do App</h3>
        </div>
        <div className="">
          <button
            className="text-3xl font-semibold border p-2 rounded-md border-blue-600 border-4"
            onClick={() => setShowForm(!showForm)}
          >
            {showForm === true ? `Close` : `Login`}
          </button>
        </div>
      </div>
      {showForm === true ? (
        <>
          <div className="w-full  mt-10 flex justify-center items-center">
            <div className="w-[400px] border h-[400px] flex flex-col justify-center  gap-4 p-4">
            <p>Username:foo Password:bar</p>
              <h3 className="p-2 text-left text-xl font-bold">Login Form</h3>
              <input
                type="text"
                placeholder="Username"
                name="userName"
                className="p-2 bg-transparent outline-none text-lg hover:bg-black text-white rounded-lg  border-b-4 border-sky-700"
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Password"
                name="password"
                className="p-2 bg-transparent outline-none text-lg hover:bg-black text-white rounded-lg  border-b-4 border-sky-700"
                onChange={handleChange}
              />
              <button className="bg-black text-white text-2xl p-2 rounded-lg font-semibold w-[100px]">
                Login
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          <h4 className="uppercase text-9xl font-bold text-center mt-40 blur opacity-80">
            Login
          </h4>
        </>
      )}
    </div>
  );
};

export default Login;
