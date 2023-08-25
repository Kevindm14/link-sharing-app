import { Image } from "../components/icons/image";
import PhoneViewer from "../components/phone-viewer";
import { motion } from "framer-motion";

export const Profile = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col-reverse lg:flex-row mt-7 gap-5 mx-5"
    >
      <div className="bg-white hidden lg:flex lg:w-5/12 justify-center py-20 rounded-2xl">
        <PhoneViewer />
      </div>

      <form className="bg-white w-full lg:w-7/12 py-6 px-7 rounded-2xl">
        <div className="">
          <h1 className="font-bold text-2xl text-[#363636]">Profile Details</h1>
          <p className="text-[#ADADAD] text-sm mt-2 mb-10">
            Add your details to create a personal touch to your profile
          </p>
        </div>

        <div className="bg-[#FAFAFA] py-4 px-5 lg:px-10 lg:grid grid-cols-3 items-center gap-7">
          <h2 className="text-[#ADADAD] font-bold">Profile Picture</h2>
          <div className="w-full h-[200px] bg-purple-100 mt-5 rounded-md flex flex-col gap-2 justify-center items-center text-purple-700 cursor-pointer">
            <Image className="w-10 h-10" />
            <span className="text-sm font-semibold">Upload your image</span>
          </div>

          <p className="text-[#ADADAD] text-sm mt-5 font-light">
            Image must be below 1024x1024px.
            <br />
            Use PNG, JPG, or BMP format.
          </p>
        </div>

        <div className="bg-[#FAFAFA] mt-5 py-4 px-5 lg:px-10">
          <div className="flex flex-col gap-5">
            <div className="form-group flex flex-col lg:flex-row gap-2 lg:items-center lg:justify-between">
              <label
                htmlFor=""
                className="text-[#ADADAD] text-sm font-semibold"
              >
                First Name <span>*</span>
              </label>
              <input
                type="text"
                className="py-2 px-5 outline-none transition-all ease-in border border-[#ADADAD] rounded-md focus:shadow-md focus:shadow-purple-700 lg:w-1/2"
              />
            </div>

            <div className="form-group flex flex-col lg:flex-row gap-2 lg:items-center lg:justify-between">
              <label
                htmlFor=""
                className="text-[#ADADAD] text-sm font-semibold"
              >
                Last Name <span>*</span>
              </label>
              <input
                type="text"
                className="py-2 px-5 outline-none transition-all ease-in border border-[#ADADAD] rounded-md focus:shadow-md focus:shadow-purple-700 lg:w-1/2"
              />
            </div>

            <div className="form-group flex flex-col lg:flex-row gap-2 lg:items-center lg:justify-between">
              <label
                htmlFor=""
                className="text-[#ADADAD] text-sm font-semibold"
              >
                Email
              </label>
              <input
                type="text"
                className="py-2 px-5 outline-none transition-all ease-in border border-[#ADADAD] rounded-md focus:shadow-md focus:shadow-purple-700 lg:w-1/2"
              />
            </div>
          </div>
        </div>

        <hr className="mt-10" />

        <div className="flex justify-end mt-10">
          <button
            className="bg-purple-700 py-2 px-5 rounded-md text-white w-full lg:w-20"
            type="submit"
          >
            Save
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default Profile;
