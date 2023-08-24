import "./phone-viewer.css";
import { AnimatePresence, motion } from "framer-motion";

export const PhoneViewer = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 500 }}
        animate={{ y: 0 }}
        className="phone-viewer flex flex-col items-center py-20 bg-white"
      >
        <div className="w-[100px] h-[100px] rounded-full bg-gray-100 mb-20">
          <img src="" alt="" />
        </div>

        <div className="flex flex-col gap-5">
          <div className="rounded-md bg-gray-100 w-[250px] h-[50px]"></div>
          <div className="rounded-md bg-gray-100 w-[250px] h-[50px]"></div>
          <div className="rounded-md bg-gray-100 w-[250px] h-[50px]"></div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PhoneViewer;
