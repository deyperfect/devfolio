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
        <div className="container mx-auto xl:max-w-[1300px] flex min-h-16 items-center justify-between px-4 lg:px-0">
          <Link
            to="/"
            className="text-xl lg:text-[1.6rem] text-accent font-jakarta font-extrabold"
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
            className="lg:hidden"
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
              isOpen ? "block" : "hidden"
            } absolute left-0 top-full w-full lg:static lg:block lg:w-auto`}
          >
            <ul className="flex flex-col items-center gap-4 py-4 lg:flex-row lg:py-0 font-semibold">
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
