import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export const Preview = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white md:bg-[#FAFAFA] h-full flex justify-center items-center relative"
    >
      <div className="hidden md:block bg-purple-700 absolute w-full top-0 h-1/2 rounded-b-[2rem]">
        <nav>
          <div className="hidden md:flex justify-between bg-white py-4 px-10 rounded-lg mx-10 mt-10 gap-10 font-bold">
            <NavLink
              to={"/links"}
              className="bg-white rounded-lg border text-purple-700 border-purple-700 px-5 py-2"
            >
              Back to editor
            </NavLink>
            <button className="bg-purple-700 text-white rounded-lg px-5 py-2">
              Share Link
            </button>
          </div>
        </nav>
      </div>

      <div className="flex md:hidden justify-between absolute top-5 gap-10 font-bold">
        <NavLink
          to={"/links"}
          className="bg-white rounded-lg border text-purple-700 border-purple-700 px-5 py-2"
        >
          Back to editor
        </NavLink>
        <button className="bg-purple-700 text-white rounded-lg px-5 py-2">
          Share Link
        </button>
      </div>

      <div className="flex flex-col py-20 w-full md:w-[350px] z-20 bg-white md:shadow rounded-2xl">
        <div className="flex flex-col justify-center items-center gap-10">
          <img
            src=""
            alt="profile"
            className="bg-gray-300 rounded-full w-[100px] h-[100px]"
          />

          <div className="text-center">
            <h1 className="font-bold text-2xl mb-2">Ben wright</h1>
            <h2 className="font-light text-sm">benwright@email.com</h2>
          </div>

          <div className="flex flex-col gap-5">
            <div className="rounded-md bg-gray-100 w-[250px] h-[50px]"></div>
            <div className="rounded-md bg-gray-100 w-[250px] h-[50px]"></div>
            <div className="rounded-md bg-gray-100 w-[250px] h-[50px]"></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Preview;
