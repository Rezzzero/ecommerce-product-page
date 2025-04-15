export const CartModal = ({ closeModal }: { closeModal: () => void }) => {
  return (
    <div>
      <div className="fixed z-10 inset-0" onClick={closeModal}></div>

      <div className="fixed z-20 top-20 left-3 flex flex-col bg-white font-bold p-5 w-[352px] h-[250px] rounded-md border-2 border-black">
        <h1 className="mb-5">Cart</h1>
        <p className="self-center my-auto text-gray-500">Your cart is empty.</p>
      </div>
    </div>
  );
};
