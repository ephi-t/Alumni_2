import { FaMoon, FaSun } from "react-icons/fa";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { MdSpaceDashboard } from "react-icons/md";

import { useNavigate } from "react-router-dom";

const Header = ({ toogleSidebar = { toogleSidebar } }) => {
  const navigate = useNavigate();
  return (
    <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div className="px-3 py-5 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start rtl:justify-end">
            <button
              className="inline-flex items-center p-2 text-smtext-gray-500 rounded-lg sm:hidden hover:bg-gray-100  focus:outline-none focus:ring-2 focus:ring-gray-200 
            
            "
              onClick={toogleSidebar}
            >
              <HiOutlineMenuAlt2 className="text-2xl" />
            </button>

            <a href="#" className="flex ms-2 md:me-24">
              {/* <MdSpaceDashboard className="h-8 me-3 text-xl text-violet-500" /> */}
              <span
                onClick={() => {
                  navigate("/");
                }}
                className="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
              >
                Almuni Mangement
              </span>
            </a>
          </div>

          <button>notification</button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
