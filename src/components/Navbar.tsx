import Logo from "../assets/BLOTT.png";
const Navbar = () => {
  return (
    <nav className="flex w-full items-center justify-center py-4 lg:p-4  right-0 fixed left-0 top-0 z-50 mb-4 border-b border-gray-700 lg:border-transparent bg-[#0E0D13] opacity-90">
      <img src={Logo} alt="logo" />
    </nav>
  );
};

export default Navbar;
