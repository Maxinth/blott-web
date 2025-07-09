import Logo from "../assets/BLOTT.svg";
const Navbar = () => {
  return (
    <nav className="flex w-full items-center justify-center py-4 lg:p-4 lg:py-8  right-0 fixed left-0 top-0 z-50 mb-4 border-b border-gray-700 lg:border-transparent bg-[#0E0D13] opacity-90">
      <img src={Logo} alt="logo" className="lg:scale-150" />
    </nav>
  );
};

export default Navbar;
