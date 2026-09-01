import { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import { IoCloseCircleOutline } from "react-icons/io5";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <header>
      <nav
        className="fixed top-0 z-50 w-full lg:shadow-md bg-transparent lg:bg-primary"
        id="mynavbar"
      >
        <div className="container mx-auto xl:max-w-[1300px] flex min-h-16 items-center justify-between px-4 lg:px-0">
          <Link
            to="/"
            className="text-xl lg:text-[1.6rem] text-accent font-jakarta font-extrabold hidden lg:block"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            Edryl Palinis
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:block">
            <ul className="flex items-center gap-4 font-semibold">
              <NavLinks />
            </ul>
          </div>

          {/* Hamburger Icon for Mobile and Tablet */}
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

          {/* Backdrop */}
          {isOpen && (
            <div
              className="lg:hidden fixed inset-0 z-40 bg-primary/50 backdrop-blur-xl shadow-2xl"
              onClick={() => setIsOpen(false)}
            />
          )}

          {/* Mobile/Tablet Sidebar */}
          <div
            className={`${
              isOpen
                ? "translate-x-0 shadow-[-8px_0_15px_rgba(0,0,0,0.20)]"
                : "translate-x-full"
            } sidebar`}
          >
            <ul className="flex flex-col lg:items-center gap-4 px-1 lg:flex-row lg:p-0 font-semibold">
              <NavLinks closeMenu={closeMenu} />
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
