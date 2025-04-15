import menuIcon from "../assets/icons/icon-menu.svg";
import logo from "../assets/logo.svg";
import cartLogo from "../assets/icons/icon-cart.svg";
import userIcon from "/images/image-avatar.png";

export const NavBar = ({
  openModal,
  openCartModal,
  cartLength,
}: {
  openModal: () => void;
  openCartModal: () => void;
  cartLength: number;
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
        <div className="relative">
          <img
            src={cartLogo}
            onClick={openCartModal}
            alt="cart logo"
            className="h-5"
          />
          {cartLength > 0 && (
            <div className="bg-orange-400 flex justify-center items-center font-semibold absolute top-[-4px] right-[-4px] text-white text-xs w-4 h-3 rounded-full">
              {cartLength}
            </div>
          )}
        </div>
        <img src={userIcon} alt="user icon" className="w-6" />
      </div>
    </div>
  );
};
