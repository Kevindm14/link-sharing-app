import { Image } from "../components/icons/image";
import PhoneViewer from "../components/phone-viewer";

export const Profile = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row mt-7 gap-5">
      <div className="bg-white hidden lg:flex lg:w-5/12 justify-center py-20">
        <PhoneViewer />
      </div>

      <div className="bg-white w-full lg:w-7/12 py-6 px-7 rounded-md">
        <div className="">
          <h1 className="font-bold text-2xl text-[#363636]">Profile Details</h1>
          <p className="text-[#ADADAD] text-sm mt-2 mb-10">
            Add your details to create a personal touch to your profile
          </p>
        </div>

        <div className="bg-[#FAFAFA] py-4 px-5">
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

        <div className="bg-[#FAFAFA] mt-5 py-4 px-5">
          <form className="flex flex-col gap-5">
            <div className="form-group flex flex-col gap-2">
              <label htmlFor="" className="text-[#ADADAD] text-sm">
                First Name <span>*</span>
              </label>
              <input
                type="text"
                className="py-2 px-5 outline-none transition-all ease-in border border-[#ADADAD] rounded-md focus:shadow-md focus:shadow-purple-700"
              />
            </div>

            <div className="form-group flex flex-col gap-2">
              <label htmlFor="" className="text-[#ADADAD] text-sm">
                Last Name <span>*</span>
              </label>
              <input
                type="text"
                className="py-2 px-5 outline-none transition-all ease-in border border-[#ADADAD] rounded-md focus:shadow-md focus:shadow-purple-700"
              />
            </div>

            <div className="form-group flex flex-col gap-2">
              <label htmlFor="" className="text-[#ADADAD] text-sm">
                Email <span>*</span>
              </label>
              <input
                type="text"
                className="py-2 px-5 outline-none transition-all ease-in border border-[#ADADAD] rounded-md focus:shadow-md focus:shadow-purple-700"
              />
            </div>
          </form>
        </div>

        <hr className="mt-10" />

        <div className="flex justify-end mt-10">
          <button className="bg-purple-700 py-2 px-5 rounded-md text-white">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
