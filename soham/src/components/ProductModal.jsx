function ProductModal({ product, onClose }) {
  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center p-4 z-50">
      <div className="bg-white w-full max-w-2xl rounded-xl shadow-xl relative overflow-hidden animate-fadeIn">

        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-white/80 hover:bg-white text-gray-700 rounded-full px-2 py-1 text-lg shadow-md"
        >
          ✕
        </button>

        {/* IMAGE */}
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-80 object-cover"
        />

        {/* CONTENT */}
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-2">{product.title}</h2>

          <p className="text-green-600 text-xl font-bold mb-4">{product.price}</p>

          <p className="text-gray-700 leading-relaxed mb-6">
  {product.description}
</p>

          <div className="text-sm text-gray-500 flex justify-between">
            <span>{product.location}</span>
            <span>{product.time}</span>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ProductModal;
