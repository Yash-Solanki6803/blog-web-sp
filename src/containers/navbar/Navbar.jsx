import ResponsiveNav from "@/components/responsiveNav/ResponsiveNav";
import AuthLinks from "../../components/authLinks/AuthLinks";
import Navlink from "../../components/navLink/NavLink";
import HamburIcon from "@/components/hamburgurIcon/HamburIcon";
import classNames from "classnames";

const Navbar = () => {
  return (
    <nav
      className={classNames(
        " flex items-center justify-between 2xl:px-32  xl:px-24  lg:px-16 px-10 py-5 h-36 z-50 fixed w-full 2xl:-ml-32 xl:-ml-24 lg:-ml-16 -ml-10 backdrop-blur-md"
      )}
    >
      {/* Company Name */}
      <div className="text-4xl font-semibold ">
        Cyber <span className="text-brand_primary">Shakha</span>
      </div>
      {/* nav links */}
      <div className="bg-glass p-3 rounded-[3rem]  justify-around gap-9 xl:flex hidden">
        <Navlink href="/">Home</Navlink>
        <Navlink href="/blogs">Blogs</Navlink>
        <Navlink href="/writeups">Write Ups</Navlink>
        <Navlink href="/about">About</Navlink>
      </div>
      {/* AuthLinks */}
      <div className="bg-glass p-3 rounded-[3rem] hidden xl:flex gap-2">
        <AuthLinks />
      </div>
      <HamburIcon />
      <ResponsiveNav />
    </nav>
  );
};

export default Navbar;
