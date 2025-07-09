import Logo from "../assets/BLOTT.png";
const Navbar = () => {
  return (
    <nav className="flex items-center justify-center p-4  right-0 left-0 top-10 z-50 mb-4">
      <img src={Logo} alt="logo" />
    </nav>
  );
};

export default Navbar;
