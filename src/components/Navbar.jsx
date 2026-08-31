import { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import { IoCloseCircleOutline } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);
  
  return (
    <header>
      <nav className="fixed top-0 z-50 w-full shadow-md" id="mynavbar">
        <div className="container mx-auto flex min-h-16 items-center justify-between px-4">

          <Link to="/" className="text-xl font-bold" onClick={closeMenu}>
            Edryl Palinis
          </Link>

          <button
            type="button"
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Open navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <IoCloseCircleOutline size={24} /> : <IoIosMenu size={24} />}
          </button>

          <div
            className={`${
              isOpen ? "block" : "hidden"
            } absolute left-0 top-full w-full lg:static lg:block lg:w-auto`}
          >
            <ul className="flex flex-col items-center gap-4 py-4 lg:flex-row lg:py-0 font-semibold">
              <li>
                <Link
                  to="/"
                  className="block hover:text-gray-500"
                  onClick={closeMenu}
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/#tools"
                  className="block hover:text-gray-500"
                  onClick={closeMenu}
                >
                  Tech Stack
                </Link>
              </li>

              <li>
                <Link
                  to="/#projects"
                  className="block hover:text-gray-500"
                  onClick={closeMenu}
                >
                  Projects
                </Link>
              </li>

              <li>
                <Link
                  to="/#contact"
                  className="block hover:text-gray-500"
                  onClick={closeMenu}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
