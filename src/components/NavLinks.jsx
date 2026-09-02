import { Link, useNavigate, useLocation } from "react-router-dom";
import { RiHomeLine } from "react-icons/ri";
import { MdComputer, MdOutlineFolderOpen } from "react-icons/md";
import { IoMailOutline } from "react-icons/io5";

const navLinks = [
  { label: "Home", href: "/", icon: RiHomeLine, type: "route" },
  { label: "Tech Stack", href: "tools", icon: MdComputer, type: "section" },
  { label: "Projects", href: "projects", icon: MdOutlineFolderOpen, type: "section"  },
  { label: "Contact", href: "contact", icon: IoMailOutline, type: "section" },
];

const NavLinks = ({ closeMenu }) => {
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
      {navLinks.map((link) => (
        
        <li key={link.label}>
          {link.type === "route" ? (
              <Link
                to={link.href}
                className="nav-link"
                onClick={handleHomeClick}
              >
                {link.icon && <link.icon className="lg:hidden text-lg" />}
                {link.label}
              </Link>
            ) : (
              <a
                href={`#${link.href}`}
                className="nav-link"
                onClick={(e) => handleSectionClick(e, link.href)}
              >
                {link.icon && <link.icon className="lg:hidden text-lg" />}
                {link.label}
              </a>
            )}
        </li>
        
      ))}
    </>
  );
};


export default NavLinks;
