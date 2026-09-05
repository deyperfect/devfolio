import { Link, useNavigate, useLocation } from "react-router-dom";
import { RiHomeLine } from "react-icons/ri";
import { MdComputer, MdOutlineFolderOpen } from "react-icons/md";
import { IoMailOutline } from "react-icons/io5";

const navLinks = [
  {
    label: "Home",
    href: "/",
    icon: RiHomeLine,
    type: "route",
    sectionId: "hero",
  },
  {
    label: "Tech Stack",
    href: "tools",
    icon: MdComputer,
    type: "section",
    sectionId: "tools",
  },
  {
    label: "Projects",
    href: "projects",
    icon: MdOutlineFolderOpen,
    type: "section",
    sectionId: "projects",
  },
  {
    label: "Contact",
    href: "contact",
    icon: IoMailOutline,
    type: "section",
    sectionId: "contact",
  },
];

const NavLinks = ({ closeMenu, activeSection }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleHomeClick = () => {
    closeMenu?.();
    scrollToTop();
  };
  
  const handleSectionClick = (e, id) => {
    e.preventDefault();
    closeMenu?.();

    if (location.pathname !== "/") {
      navigate(`/#${id}`);
    } else {
      scrollToSection(id);
    }
  };

  return (
    <>
      {navLinks.map((link) => {
        const isActive = link.sectionId === activeSection;
        return (
          <li key={link.label}>
            {link.type === "route" ? (
              <Link
                to={link.href}
                className={`nav-link ${
                  isActive
                    ? "active"
                    : ""
                }`}
                onClick={handleHomeClick}
              >
                {link.icon && <link.icon className="lg:hidden text-lg" />}
                {link.label}
              </Link>
            ) : (
              <a
                href={`#${link.href}`}
                className={`nav-link ${
                  isActive ? "active" : ""
                }`}
                onClick={(e) => handleSectionClick(e, link.href)}
              >
                {link.icon && <link.icon className="lg:hidden text-lg" />}
                {link.label}
              </a>
            )}
          </li>
        );
      })}
    </>
  );
};

export default NavLinks;
