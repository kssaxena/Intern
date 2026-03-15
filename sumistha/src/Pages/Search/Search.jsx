import { useLocation } from "react-router-dom";
import { products } from "../../Constants/products";


export default function Search() {

  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q") || "";

  const filteredProducts = products.filter((item) => {

    const searchText = query.toLowerCase();

    return (
      item.title.toLowerCase().includes(searchText) ||
      item.category.toLowerCase().includes(searchText) ||
      item.location.toLowerCase().includes(searchText) ||
      item.description.toLowerCase().includes(searchText)
    );

  });

  return (
    <div className="max-w-6xl mx-auto p-10">

      <h2 className="text-2xl font-semibold mb-8">
        Search Results for "{query}"
      </h2>

      {filteredProducts.length === 0 ? (

        <p className="text-gray-500">No items found.</p>

      ) : (

        <div className="grid grid-cols-4 gap-6">

          {filteredProducts.map((item) => (

            <div
              key={item.id}
              className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
            >

              <img
                src={item.image}
                alt={item.title}
                className="h-44 w-full object-cover"
              />

              <div className="p-4">

                <p className="text-[#0aa78f] font-semibold">
                  {item.price}
                </p>

                <h3 className="font-medium">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-500">
                  {item.location}
                </p>

                <p className="text-xs text-gray-400 mt-1">
                  {item.time}
                </p>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}