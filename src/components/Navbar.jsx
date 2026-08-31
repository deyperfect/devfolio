import { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import { IoCloseCircleOutline } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <header>
      <nav className="fixed top-0 z-50 w-full lg:shadow-md bg-primary" id="mynavbar">
        <div className="container mx-auto xl:max-w-[1300px] flex min-h-16 items-center justify-between px-4 lg:px-0">
          <Link
            to="/"
            className="text-xl lg:text-[1.6rem] text-accent font-jakarta font-extrabold hidden lg:block"
            onClick={() => {
              closeMenu();
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            Edryl Palinis
          </Link>

          <button
            type="button"
            className="lg:hidden fixed right-5 top-5 z-55 flex items-center justify-center text-secondary rounded-md p-2 shadow-[0_0_10px_rgba(0,0,0,0.2)]"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Open navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <IoCloseCircleOutline size={24} />
            ) : (
              <IoIosMenu size={24} />
            )}
          </button>

          <div
            className={`${
              isOpen ? "translate-x-0" : "translate-x-full"
            } fixed right-0 top-0 z-50 h-screen w-72 py-[6rem] lg:py-0 px-5 lg:px-0 bg-primary lg:bg-transparent shadow-xl lg:shadow-none transition-transform duration-400 lg:static lg:block lg:h-auto lg:w-auto lg:translate-x-0`}
          >
            <ul className="flex flex-col lg:items-center gap-4 px-1 lg:flex-row lg:p-0 font-semibold">
              <li>
                <Link
                  to="/"
                  className="nav-link"
                  onClick={() => {
                    closeMenu();
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                  }}
                >
                  Home
                </Link>
              </li>

              <li>
                <a
                  href="#tools"
                  className="nav-link"
                  onClick={closeMenu}
                >
                  Tech Stack
                </a>
              </li>

              <li>
                <a
                  href="#projects"
                  className="nav-link"
                  onClick={closeMenu}
                >
                  Projects
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="nav-link"
                  onClick={closeMenu}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
