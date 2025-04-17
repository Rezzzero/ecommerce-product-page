import menuIcon from "../assets/icons/icon-menu.svg";
import logo from "../assets/logo.svg";
import cartLogo from "../assets/icons/icon-cart.svg";
import userIcon from "/images/image-avatar.png";
import { LinkList } from "../components/link-list/LinkList";
import { useDeviceSize } from "../hooks/useDeviceSize";

export const NavBar = ({
  openModal,
  openCartModal,
  cartLength,
}: {
  openModal: () => void;
  openCartModal: () => void;
  cartLength: number;
}) => {
  const { width } = useDeviceSize();
  return (
    <div className="flex justify-between p-5 lg:mx-12 lg:p-0 lg:pt-8 lg:shadow-[0_5px_5px_-5px_rgba(0,0,0,0.2)]">
      <div className="flex items-center lg:items-end gap-4 lg:gap-12">
        {width < 768 && (
          <img
            src={menuIcon}
            onClick={openModal}
            alt="menu icon"
            className="h-4"
          />
        )}
        <img src={logo} alt="sneaker company logo" className="lg:pb-11" />
        {width >= 768 && <LinkList />}
      </div>
      <div className="flex gap-4 lg:gap-10 items-center lg:pb-8">
        <div className="relative">
          <img
            src={cartLogo}
            onClick={openCartModal}
            alt="cart logo"
            className="h-5 cursor-pointer"
          />
          {cartLength > 0 && (
            <div className="bg-orange-400 flex justify-center items-center font-semibold absolute top-[-4px] right-[-4px] text-white text-xs w-4 h-3 rounded-full">
              {cartLength}
            </div>
          )}
        </div>
        <img
          src={userIcon}
          alt="user icon"
          className="w-6 lg:w-10 cursor-pointer hover:border-3 hover:border-orange-400 rounded-full"
        />
      </div>
    </div>
  );
};
