import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = () => {
    if (email === "admin@gmail.com" && password === "123456") {
      localStorage.setItem("loggedIn", "true");
      navigate("/DashBoard");
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };
  const handleKeyPress = (event) => {
    // Check if the pressed key is Enter (keyCode 13)
    if (event.key === "Enter") {
      // Perform the login action here
      handleLogin();
    }
  };

  return (
    <>
      <div className="w-[100%] h-[100vh]  bg-[#f6f6f6] justify-center items-center  flex  ">
        <div className="w-[80%] h-[80vh] flex flex-row rounded-[25px] shadow-2xl bg-black">
          <div className="w-[50%] h-[100%] bg-green-50 rounded-l-[25px] flex flex-row ">
            <div className="w-[100%] h-[100%] flex flex-col ">
              <div className="flex items-center text-lg font-bold justify-center mt-8 ">
                <img
                  className=" w-[100px]"
                  src="https://flowbite.com/docs/images/logo.svg"
                ></img>
              </div>
              <h1 className="flex items-center text-lg font-bold justify-center mt-8 ">
                WELCOME BACK{" "}
              </h1>

              <form action="#" method="POST" className="mt-8">
                <div className="space-y-5">
                  <div className="">
                    <label
                      htmlFor=""
                      className="text-base font-medium  mx-[130px] text-gray-900"
                    >
                      Email address
                    </label>
                    <div className="mt-2 flex justify-center">
                      <input
                        value={email}
                        onKeyPress={handleKeyPress}
                        onChange={(e) => setEmail(e.target.value)}
                        className="flex justify-center h-10 w-[350px] rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="email"
                        placeholder="Email"
                      ></input>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-8 mx-[130px]">
                      <label
                        htmlFor=""
                        className="text-base font-medium text-gray-900 "
                      >
                        Password
                      </label>
                    </div>
                    <div className="mt-2 flex justify-center">
                      <input
                        value={password}
                        onKeyPress={handleKeyPress}
                        onChange={(e) => setPassword(e.target.value)}
                        className="flex h-10 w-[350px] rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="current-password"
                        placeholder="Password"
                      ></input>
                    </div>
                  </div>
                  <div>
                    <button
                      type="button"
                      onClick={handleLogin}
                      className="flex w-[350px]   justify-center rounded-md bg-[#673ab7] px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-[#673ab7] mx-[130px]"
                    >
                      LOGIN <div className="ml-2" size={16} />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <img
            className="w-[50%] bg-green-500 flex flex-row rounded-r-[25px] "
            src="https://images.unsplash.com/photo-1618761714954-0b8cd0026356?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
          ></img>
        </div>
      </div>
    </>
  );
}
