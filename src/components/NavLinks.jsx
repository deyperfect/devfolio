import { Link, useNavigate, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Home", href: "/", type: "route" },
  { label: "Tech Stack", href: "tools", type: "section" },
  { label: "Projects", href: "projects", type: "section"  },
  { label: "Contact", href: "contact", type: "section" },
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
                {link.label}
              </Link>
            ) : (
              <a
                href={`#${link.href}`}
                className="nav-link"
                onClick={(e) => handleSectionClick(e, link.href)}
              >
                {link.label}
              </a>
            )}
        </li>
        
      ))}
    </>
  );
};


export default NavLinks;
