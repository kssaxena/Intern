import React, { useState } from "react";

const ImageInput = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="w-full">
      <label className="block text-sm font-medium mb-2">
        Upload Image
      </label>

      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-emerald-500 transition">
        
        {image ? (
          <img
            src={image}
            alt="preview"
            className="mx-auto h-40 object-cover rounded-lg"
          />
        ) : (
          <p className="text-gray-500">Click to upload image</p>
        )}

        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="mt-4"
        />
      </div>
    </div>
  );
};

export default ImageInput;