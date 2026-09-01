import { Link } from "react-router-dom";

const navLinks = [
  { label: "Home", href: "/", isLink: true },
  { label: "Tech Stack", href: "#tools" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const NavLinks = ({ closeMenu }) => {
  const handleHomeClick = (e) => {
    if (closeMenu) closeMenu();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    }
  

  return (
    <>
      {navLinks.map((link) => {
        return (
        <li key={link.label}>
          {link.isLink ? (
              <Link
                to={link.href}
                className="nav-link"
                onClick={handleHomeClick}
              >
                {link.label}
              </Link>
            ) : (
              <a
                href={link.href}
                className="nav-link"
                onClick={closeMenu}
              >
                {link.label}
              </a>
            )}
        </li>
        )
      })}
    </>
  );
};


export default NavLinks;
