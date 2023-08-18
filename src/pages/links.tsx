import PhoneViewer from "../components/phone-viewer";

export const Links = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row mt-7 gap-5">
      <div className="bg-white hidden lg:flex lg:w-5/12 justify-center py-20">
        <PhoneViewer />
      </div>

      <div className="bg-white w-full lg:w-7/12 py-6 px-7 rounded-md">
        <div className="h-1/4">
          <h1 className="font-bold text-2xl text-[#363636]">
            Customize your links
          </h1>
          <p className="text-[#ADADAD] text-sm mt-2 mb-10">
            Add/edit/remove links below and then share all your profiles with
            the world!
          </p>

          <button className="w-full text-center text-purple-700 border border-purple-700 rounded-md py-2 hover:bg-purple-100 text-sm font-semibold">
            + Add new link
          </button>
        </div>

        <div className="flex justify-center items-center bg-gray-50 py-20 h-[75%]">
          <h2 className="text-[#363636] font-extralight text-sm">
            You don't have links yet.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Links;
