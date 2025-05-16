import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import HeaderIcons from "./HeaderIcon";

interface props {
  scrollToProducts: () => void;
}

const Navbar = ({ scrollToProducts }: props) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md relative z-20 py-4 md:py-6">
      <div className="container mx-auto px-4 sm:px-6 py-2 md:py-3 flex items-center justify-between">
        {/* Logo */}
        <a
          className="text-gray-800 font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
          href="#"
        >
          Fashionfy
        </a>

        {/* Desktop Header Icons */}
        <div className="hidden sm:flex">
          <HeaderIcons scrollToProducts={scrollToProducts} />
        </div>

        {/* Mobile Menu Button */}
        <div className="sm:hidden">
          <button
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
            className="text-gray-800 p-2"
          >
            <FaBars size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 sm:hidden">
          <div className="absolute top-0 right-0 h-full w-4/5 max-w-sm bg-white shadow-xl">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-xl font-bold">Menu</h2>
              <button
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
                className="text-gray-800 p-2"
              >
                <FaTimes size={24} />
              </button>
            </div>

            {/* Mobile HeaderIcons */}
            <div className="p-4">
              <HeaderIcons scrollToProducts={scrollToProducts} />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
