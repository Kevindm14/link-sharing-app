import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export const Login = () => {
  return (
    <div className="flex lg:flex-row relative bg-[#FFFFFF] overflow-hidden">
      <div className="flex h-screen w-full lg:w-9/12 justify-center p-20">
        <div className="pt-16 px-6 lg:w-[640px]">
          <h1 className="font-extrabold text-5xl">Log in</h1>

          <form className="flex flex-col gap-5 mt-10">
            <div className="">
              <input
                type="text"
                className="text-black outline-none bg-gray-100 w-full py-3 px-5 rounded-md focus:outline-gray-400 transition-all ease-in"
                placeholder="Username or email"
              />
            </div>

            <div className="">
              <input
                type="password"
                className="text-black bg-gray-100 w-full py-3 px-5 rounded-md outline-none focus:outline-gray-400 transition-all ease-in"
                placeholder="Password"
              />
            </div>

            <div>
              <button className="w-full bg-purple-600 hover:bg-purple-900 transition-all ease-in py-3 rounded-md text-white font-bold">
                Log in
              </button>
            </div>
          </form>

          <p className="text-sm mt-5 text-gray-500">
            Don't have an account yet?{" "}
            <NavLink to="/signup" className="ml-1 text-purple-600">
              Sign up
            </NavLink>
          </p>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="hidden lg:w-1/3 relative bg-cover lg:block w-full bg-center bg-no-repeat overflow-hidden min-h-screen"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/4570733/pexels-photo-4570733.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
        }}
      ></motion.div>
    </div>
  );
};
