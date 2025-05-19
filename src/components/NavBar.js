import { useState } from "react";
import { Menu, X } from "lucide-react";
export default function NavBar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <nav className="w-full h-max bg-gradient-to-r from-red-600 via-amber-500 to-orange-400 shadow-lg">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            {/*logo */}
            <div className="flex items-center justify-between w-full">
              <div className="flex-shrink-0 ">
                <span className="text-2xl font-bold text-white bg-opacity-20 bg-white px-3 py-1 rounded-lg">
                  AS
                </span>
              </div>
              <div className=" md:block hidden">
                <span className="text-white text-lg font-semibold">
                  ATHUL A S
                </span>
              </div>
              {/*desktop Nav */}
              <div className="justify-end">
                <div className="hidden md:block ">
                  <ul className="flex space-x-8">
                    <li>
                      <a
                        href="#About"
                        className="text-white hover:text-red-800 px-3 py-2 rounded-md text-sm font-medium"
                      >
                        About
                      </a>
                    </li>
                    <li>
                      <a
                        href="#Skill"
                        className="text-white hover:text-red-800 px-3 py-2 rounded-md text-sm font-medium"
                      >
                        Skills
                      </a>
                    </li>
                    <li>
                      <a
                        href="#project"
                        className="text-white hover:text-red-800 px-3 py-2 rounded-md text-sm font-medium"
                      >
                        Project
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        className="text-white hover:text-red-800 px-3 py-2 rounded-md text-sm font-medium"
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/*Mobile Navigation*/}
              <div className="md:hidden ">
                <button
                  onClick={() => setMenuOpen(!isMenuOpen)}
                  className="text-white hover:text-red-800 focus:outline-none transition-color duration-200 "
                >
                  {isMenuOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="w-6 h-6" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* mobile nav */}
        <nav>
          {isMenuOpen && (
            <div className="md:hidden bg-gradient-to-b from-red-600 to-amber-500 ">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 ">
                <a
                  href="#About"
                  className="text-white hover:text-red-800 block px-3 py-2 rounded-md transition-color duration-200"
                >
                  About
                </a>
                <a
                  href="#Skills"
                  className="text-white hover:text-red-800 block px-3 py-2 rounded-md transition-color duration-200"
                >
                  Skills
                </a>
                <a
                  href="#Project"
                  className="text-white hover:text-red-800 block px-3 py-2 rounded-md transition-color duration-200"
                >
                  Project
                </a>
                <a
                  href="#Contact"
                  className="text-white hover:text-red-800 block px-3 py-2 rounded-md transition-color duration-200"
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </nav>
      </nav>
    </>
  );
}
