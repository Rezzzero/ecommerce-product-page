const linkList = ["Collections", "Men", "Women", "About", "Contact"];

export const LinkList = () => {
  return (
    <div className="flex gap-4 text-gray-400 font-semibold h-[66px]">
      {linkList.map((item, index) => (
        <div
          key={index}
          className="hover:border-b-5 border-orange-400 pb-12 hover:text-black "
        >
          <a href="#" key={index} className="cursor-pointer">
            {item}
          </a>
        </div>
      ))}
    </div>
  );
};
