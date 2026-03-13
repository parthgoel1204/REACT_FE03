import { CDN_URL } from "../utils/constants";
import { MenuItemCard } from "../types/menu";

interface ItemListProps {
  items?: MenuItemCard[];
}

const ItemList = ({ items }: ItemListProps) => {
  return (
    <div>
      {items?.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-b-2 border-gray-200"
        >
          <div className="flex justify-between">
            <div className="text-left py-1 w-9/12">
              <span className="font-bold block">
                {item.card.info.name}
              </span>

              <span className="block">
                ₹{(item.card.info.price ?? item.card.info.defaultPrice ?? 0) / 100}
              </span>

              <p className="text-sm mt-3">
                {item.card.info.description}
              </p>
            </div>


            <div className="w-3/12 relative">

              <img
                src={CDN_URL + item.card.info.imageId}
                className="w-full h-auto p-2 rounded-lg"
              />

              <button
                className="absolute bottom-0 left-1/2 -translate-x-1/2 
                bg-white text-green-600 font-bold px-4 py-1 rounded-lg 
                shadow-lg border border-gray-300 hover:bg-gray-100 cursor-pointer"
              >
                Add +
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;