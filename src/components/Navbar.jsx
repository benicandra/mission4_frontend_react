import { useState } from "react";

const Navbar = ({ showLinks = true }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="flex justify-between items-center px-6 md:px-[120px] py-4">
        <div className="logo">
          <img src="/Logo.png" alt="Logo Videobelajar" className="h-6 md:h-8" />
        </div>

        {showLinks && (
          <>
            <ul className="hidden md:flex items-center gap-x-6">
              <li>
                <a href="#" className="text-gray-700 hover:text-black">
                  Kategori
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    src="AvatarImage.png"
                    alt="User Avatar"
                    className="w-10 h-10 rounded-lg"
                  />
                </a>
              </li>
            </ul>

            <div className="md:hidden">
              <button onClick={() => setMenuOpen(!menuOpen)}>
                <img src="Dehaze.png" alt="Burger Menu" />
              </button>
            </div>
          </>
        )}
      </div>

      {showLinks && menuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full w-full pb-2 px-4">
          <ul className="flex items-center justify-end gap-6">
            <li>
              <a href="#">Kategori</a>
            </li>
            <li>
              <a href="#">
                <img
                  src="AvatarImage.png"
                  alt="User Avatar"
                  className="w-10 h-10 rounded-lg"
                />
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
