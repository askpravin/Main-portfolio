import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (item: string) => {
    if (item === "About") {
      navigate("/about-me");
    } else {
      // If we're not on the home page, navigate to home page with hash
      if (location.pathname !== "/") {
        navigate(`/#${item.toLowerCase()}`);
      } else {
        // If we're already on home page, just scroll to the section
        const element = document.getElementById(item.toLowerCase());
        element?.scrollIntoView({ behavior: "smooth" });
      }
    }
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 bg-[rgb(18,27,27)]/60 backdrop-blur-xl border-b border-[rgb(141,240,204)]/5"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link
          to="/"
          className="text-xl font-bold text-[rgb(141,240,204)] hover:opacity-80 transition-opacity"
          aria-label="Home"
        >
          dev.motion
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {["About", "Skills", "Projects", "Contact"].map((item) => (
            <button
              key={item}
              onClick={() => handleNavigation(item)}
              className="px-4 py-2 text-sm text-foreground/70 hover:text-[rgb(141,240,204)] transition-colors duration-200 rounded-md hover:bg-[rgb(141,240,204)]/5"
            >
              {item}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground p-2 rounded-md hover:bg-[rgb(141,240,204)]/5"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[rgb(18,27,27)]/95 backdrop-blur-md absolute top-full left-0 right-0 py-4 shadow-lg animate-fade-in-up border-b border-[rgb(141,240,204)]/5">
          <nav className="container mx-auto px-4 flex flex-col space-y-1">
            {["About", "Skills", "Projects", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => handleNavigation(item)}
                className="text-foreground/70 hover:text-[rgb(141,240,204)] hover:bg-[rgb(141,240,204)]/5 transition-colors px-4 py-3 rounded-md text-left"
              >
                {item}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
