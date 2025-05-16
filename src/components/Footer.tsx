import {
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaInstagram,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black mt-10">
      <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm text-gray-300">
        {/* Useful Links */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-white">Useful Links</h3>
          <ul className="space-y-2">
            <li className="hover:opacity-80 hover:underline transition ml-1">
              Call Center
            </li>
            <li className="hover:opacity-80 hover:underline transition ml-1">
              Shipping and Return
            </li>
          </ul>
        </div>

        {/* Secure Shopping */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-white">Secure Shopping</h3>
          <div className="flex items-center gap-4 text-3xl text-gray-400">
            <FaCcVisa className="hover:text-orange-500 transition" />
            <FaCcMastercard className="hover:text-orange-500 transition" />
            <FaCcPaypal className="hover:text-orange-500 transition" />
          </div>
        </div>

        {/* Connect Us */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-white">Connect Us</h3>
          <div className="flex items-center gap-4 text-2xl text-gray-400">
            <FaInstagram className="hover:text-orange-500 transition cursor-pointer" />
            <FaFacebook className="hover:text-orange-500 transition cursor-pointer" />
            <FaTwitter className="hover:text-orange-500 transition cursor-pointer" />
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-white">Trendyol</h3>
          <ul className="space-y-2">
            <li>123 Fashion St, Istanbul</li>
            <li>ZIP Code: 34000</li>
            <li>Email: support@trendyol.com</li>
            <li>Phone: +90 212 000 00 00</li>
          </ul>
        </div>
      </div>

      {/* حقوق النشر */}
      <div className="border-t border-gray-700 mt-6 py-4 text-center text-gray-400 text-sm">
        © 2025 Fashionfy. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
