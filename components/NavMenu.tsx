import Image from "next/image";
interface itemProps {
  icon: string;
  title: string;
}
const NavMenu = ({ item }: { item: itemProps }) => {
  return (
    <div className="flex flex-col items-start px-2">
      <div className="flex flex-col py-3">
        <div className="w-full flex space-x-2">
          <Image src={item.icon} alt="navicon" width={24} height={24} />
          <h2 className="text-white">{item?.title}</h2>
        </div>
      </div>
    </div>
  );
};

export default NavMenu;
