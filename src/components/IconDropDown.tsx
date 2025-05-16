import { useState, type ReactNode } from "react";

interface Props {
  icon: ReactNode;
  dropdownContent: ReactNode;
  mobile?: boolean;
}

const IconDropdown = ({ icon, dropdownContent, mobile = false }: Props) => {
  const [show, setShow] = useState(false);

  // Toggle for mobile (click) and desktop (hover)
  const toggleDropdown = () => setShow(!show);
  const openDropdown = () => !mobile && setShow(true);
  const closeDropdown = () => !mobile && setShow(false);

  return (
    <div
      className="relative"
      onMouseEnter={openDropdown}
      onMouseLeave={closeDropdown}
    >
      <div
        className={`cursor-pointer transition-colors duration-300 flex items-center ${
          show ? "text-orange-500" : "text-black hover:text-orange-500"
        } ${
          mobile
            ? "w-full justify-between px-4 py-3 border-b border-gray-100"
            : ""
        }`}
        onClick={mobile ? toggleDropdown : undefined}
        aria-expanded={show}
      >
        {icon}
        {mobile && (
          <svg
            className={`w-4 h-4 ml-2 transition-transform ${
              show ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        )}
      </div>

      {show && (
        <div
          className={`${
            mobile
              ? "static w-full mt-1 shadow-none"
              : "absolute right-0 mt-2 shadow-lg"
          } bg-white rounded-lg p-4 z-50`}
        >
          {dropdownContent}
        </div>
      )}
    </div>
  );
};

export default IconDropdown;
