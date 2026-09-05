import { Link, useNavigate, useLocation } from "react-router-dom";
import { useLayoutEffect, useRef, useState } from "react";
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
  const [dotStyle, setDotStyle] = useState({ x: 0, y: 0, opacity: 0 }); 
  const linkRefs = useRef({});
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

  useLayoutEffect(() => {
    const updateDotPosition = () => {
      const activeEl = linkRefs.current[activeSection];
      const container = activeEl?.closest("ul");
      if (!activeEl || !container) {
        setDotStyle((prev) => ({ ...prev, opacity: 0 }));
        return;
      }
      const containerRect = container.getBoundingClientRect();
      const linkRect = activeEl.getBoundingClientRect();

      setDotStyle({
        x: linkRect.left - containerRect.left + linkRect.width / 2 - 3,
        y: linkRect.bottom - containerRect.top - 12, // check paddings if this one breaks
        opacity: 1,
      });
    };

    updateDotPosition();

    const ro = new ResizeObserver(updateDotPosition);
    const activeEl = linkRefs.current[activeSection];
    if (activeEl) ro.observe(activeEl);
    const container = activeEl?.closest("ul");
    if (container) ro.observe(container);

    window.addEventListener("resize", updateDotPosition);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", updateDotPosition);
    };
  }, [activeSection]);

  return (
    <>
      {navLinks.map((link) => {
        const isActive = link.sectionId === activeSection;
        const setRef = (el) => (linkRefs.current[link.sectionId] = el);

        return (
          <li key={link.label}>
            {link.type === "route" ? (
              <Link
                to={link.href}
                ref={setRef}
                className={`nav-link ${isActive ? "active" : ""}`}
                onClick={handleHomeClick}
              >
                {link.icon && <link.icon className="lg:hidden text-lg" />}
                {link.label}
              </Link>
            ) : (
              <a
                href={`#${link.href}`}
                ref={setRef}
                className={`nav-link ${isActive ? "active" : ""}`}
                onClick={(e) => handleSectionClick(e, link.href)}
              >
                {link.icon && <link.icon className="lg:hidden text-lg" />}
                {link.label}
              </a>
            )}
          </li>
        );
      })}
      <span
        className="hidden lg:block dot absolute"
        style={{
          transform: `translate(${dotStyle.x}px, ${dotStyle.y}px)`,
          opacity: dotStyle.opacity,
        }}
      ></span>
    </>
  );
};

export default NavLinks;
