import menuIcon from "../assets/icons/icon-menu.svg";
import logo from "../assets/logo.svg";
import cartLogo from "../assets/icons/icon-cart.svg";
import userIcon from "/images/image-avatar.png";

export const NavBar = ({
  openModal,
  openCartModal,
}: {
  openModal: () => void;
  openCartModal: () => void;
}) => {
  return (
    <div className="flex justify-between p-5">
      <div className="flex items-center gap-4">
        <img
          src={menuIcon}
          onClick={openModal}
          alt="menu icon"
          className="h-4"
        />
        <img src={logo} alt="sneaker company logo" />
      </div>
      <div className="flex gap-4 items-center">
        <img
          src={cartLogo}
          onClick={openCartModal}
          alt="cart logo"
          className="h-5"
        />
        <img src={userIcon} alt="user icon" className="w-6" />
      </div>
    </div>
  );
};
