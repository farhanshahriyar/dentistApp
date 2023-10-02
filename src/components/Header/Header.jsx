import { useContext, useEffect, useRef } from "react";
import logo from "../../assets/images/logo.png";
import userImg from "../../assets/images/avatar-icon.png";
import { NavLink, Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { AppContext } from "../../context/AppProvider";
import Notification from "../../pages/Doctors/Notification";

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/doctors",
    display: "Find a Doctor",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

const Header = () => {

  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const { user, setUser } = useContext(AppContext);
  const handleStickyHeader = () => {
    window.addEventListener("scroll", () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };

  useEffect(() => {
    handleStickyHeader();

    return () => window.removeEventListener("scroll", handleStickyHeader);
  });

  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

  return (
    <header className="header flex items-center" ref={headerRef}>
      <div className="container">
        <div className="flex items-center justify-between">
          {/* ===== logo ===== */}
          <div className="">
            <Link to="/">
              <img src={logo} alt="medicare logo" />
            </Link>
          </div>

          {/* ===== menu ===== */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu flex flex-row items-center gap-[2.7rem]">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={(navClass) =>
                      navClass.isActive
                        ? "text-primaryColor text-[16px] leading-7 font-[600]"
                        : "text-textColor text-[16px] leading-7 font-[600]"
                    }
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* ===== nav right ===== */}
          <div className="flex items-center gap-4">
            {user ? <Notification /> : null}
            {user ? <div >
              <Link to="/">
                <figure className='w-[50px] h-[50px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center'>
                  <img src={user.photo} alt='' className='w-full rounded-full' />
                </figure>
              </Link>
            </div> : null}

            {!user ? <Link to='/login'>
              <button className="bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[40px]">
                Login</button>
            </Link> : null}


            {user ?
              <button onClick={() => setUser(null)} className="bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[40px]">
                Logout</button>
              : null}

            <span className="md:hidden" onClick={toggleMenu}>
              <BiMenu className="w-6 h-6 cursor-pointer" />
            </span>

          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
