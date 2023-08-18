import { NavLink } from "react-router-dom";
import Link from "./icons/link";
import { Profile } from "./icons/profile";
import { Eye } from "./icons/eye";

export const Navbar = () => {
  return (
    <nav className="bg-white px-7 py-6 flex justify-between rounded-md items-center">
      <div className="flex gap-3 items-center">
        <Link className="bg-purple-700 text-white rounded-md w-8 h-8" />
        <h1 className="font-extrabold text-xl text-[#363636] hidden lg:block">
          devlinks
        </h1>
      </div>

      {/* links */}
      <div className="flex gap-2">
        <NavLink
          to="/links"
          className={({ isActive }) =>
            isActive
              ? "flex gap-1 bg-purple-100 text-purple-700 py-2 px-5 rounded-md"
              : "flex gap-1 py-2 px-5 text-[#ADADAD]"
          }
        >
          <Link />
          <span className="hidden lg:block">Links</span>
        </NavLink>

        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive
              ? "flex gap-1 bg-purple-100 text-purple-700 py-2 px-5 rounded-md"
              : "flex gap-1 py-2 px-5 text-[#ADADAD]"
          }
        >
          <Profile />
          <span className="hidden lg:block">Profile</span>
        </NavLink>
      </div>

      {/* preview */}
      <NavLink
        to="/preview"
        className="text-purple-700 rounded-md lg:hidden border border-purple-700 py-2 px-3 hover:bg-purple-100"
      >
        <Eye className="" />
      </NavLink>

      <NavLink
        to="/preview"
        className="hidden lg:block text-purple-700 rounded-md border border-purple-700 py-2 px-5 hover:bg-purple-100"
      >
        Preview
      </NavLink>
    </nav>
  );
};

export default Navbar;
