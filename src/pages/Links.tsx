import { useState } from "react";
import { Empty } from "../components/icons/empty";
import PhoneViewer from "../components/phone-viewer";
import { motion } from "framer-motion";
import { NewLink } from "../components/NewLink";

export const Links = () => {
  // @ts-ignore
  const [links, setLinks] = useState([]);
  const [newLink, setNewLink] = useState({
    isNewLink: false,
    numberOfLinks: 0,
  });

  const handleAddNewLink = (linkNumber: number) => {
    // 4 is the max number of links
    if (linkNumber == 4) return;

    setNewLink({ isNewLink: true, numberOfLinks: linkNumber + 1 });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
      className="flex flex-col-reverse lg:flex-row gap-5 mb-10 mx-5"
    >
      <div className="hidden lg:flex lg:w-5/12 justify-center py-20">
        <PhoneViewer />
      </div>

      <div className="bg-white w-full lg:w-7/12 py-6 rounded-md shadow-sm max-h-[800px]">
        <div className="h-1/4 px-7">
          <motion.h1
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="font-bold text-2xl text-[#363636]"
          >
            Customize your links
          </motion.h1>
          <p className="text-[#ADADAD] text-sm mt-2 mb-10">
            Add/edit/remove links below and then share all your profiles with
            the world!
          </p>

          <button
            className="w-full text-center text-purple-700 border border-purple-700 rounded-md py-2 hover:bg-purple-100 text-sm font-semibold mb-10"
            type="button"
            onClick={() =>
              handleAddNewLink([...Array(newLink.numberOfLinks)].length)
            }
          >
            + Add new link
          </button>
        </div>

        {newLink.isNewLink ? (
          <form className="h-3/4 flex flex-col justify-between">
            <div className="">
              <div className="no-scrollbar flex flex-col gap-10 h-[450px] overflow-y-auto mx-7 mb-5">
                {[...Array(newLink.numberOfLinks)].map((_, i) => (
                  <NewLink key={i} i={i} />
                ))}
              </div>
            </div>
            <hr className="mt-2" />

            <div className="flex justify-start lg:justify-end mx-7">
              <button
                type="submit"
                className="bg-purple-700 text-white px-5 py-2 rounded-md font-bold w-full mt-5"
              >
                Save
              </button>
            </div>
          </form>
        ) : links.length > 0 ? (
          <h1>LInks</h1>
        ) : (
          <div className="flex flex-col gap-3 justify-center items-center bg-gray-50 py-20 h-[75%] mx-7">
            <Empty className="text-gray-400 w-16 h-16" />
            <h2 className="text-gray-400 font-extralight text-sm lg:text-lg">
              You don't have links yet.
            </h2>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Links;
