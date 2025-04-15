import closeIcon from "../assets/icons/icon-close.svg";

export const NavModal = ({ closeModal }: { closeModal: () => void }) => {
  return (
    <div className="fixed inset-0 z-10 flex">
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={closeModal}
      />

      <div className="relative bg-white p-5 w-2/3 h-full z-20">
        <img
          src={closeIcon}
          onClick={closeModal}
          alt="close icon"
          className="mb-10 cursor-pointer"
        />
        <li className="flex flex-col gap-2 font-bold">
          <a href="#">Collections</a>
          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </li>
      </div>
    </div>
  );
};
