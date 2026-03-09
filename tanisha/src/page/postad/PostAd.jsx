import React, { useState } from "react";

const PostAd = () => {
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    category: "",
    location: "",
    description: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Ad Posted:", formData);

    alert("Ad submitted successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center py-10">

      <div className="bg-white w-full max-w-2xl p-8 rounded-xl shadow">

        <h2 className="text-3xl font-bold mb-6 text-center">
          Post Your Ad
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            name="title"
            placeholder="Ad Title"
            className="w-full border px-4 py-2 rounded-lg"
            onChange={handleChange}
            required
          />

          <input
            type="number"
            name="price"
            placeholder="Price"
            className="w-full border px-4 py-2 rounded-lg"
            onChange={handleChange}
            required
          />

          <select
            name="category"
            className="w-full border px-4 py-2 rounded-lg"
            onChange={handleChange}
            required
          >
            <option value="">Select Category</option>
            <option value="vehicles">Vehicles</option>
            <option value="electronics">Electronics</option>
            <option value="property">Property</option>
            <option value="fashion">Fashion</option>
            <option value="furniture">Furniture</option>
            <option value="jobs">Jobs</option>
            <option value="books">Books</option>
          </select>

          <input
            type="text"
            name="location"
            placeholder="Location"
            className="w-full border px-4 py-2 rounded-lg"
            onChange={handleChange}
            required
          />

          <textarea
            name="description"
            placeholder="Description"
            rows="4"
            className="w-full border px-4 py-2 rounded-lg"
            onChange={handleChange}
            required
          ></textarea>

          <input
            type="file"
            name="image"
            className="w-full"
            onChange={handleChange}
          />

          <button
            type="submit"
            className="w-full bg-emerald-500 text-white py-2 rounded-lg hover:bg-emerald-600"
          >
            Post Ad
          </button>

        </form>

      </div>

    </div>
  );
};

export default PostAd;