import React from "react";
import { listings } from "../Home/Hero"; // adjust path if needed

const AllProducts = () => {

return (

<div className="max-w-7xl mx-auto px-4 py-10">

<h1 className="text-3xl font-bold mb-6">
All Products
</h1>

<div className="grid grid-cols-4 gap-6">

{listings.map((item) => (

<div
key={item.id}
className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md cursor-pointer"
>

<img
src={item.image}
alt={item.title}
className="h-48 w-full object-cover"
/>

<div className="p-4">

<p className="text-emerald-600 font-bold">
{item.price}
</p>

<p className="font-semibold text-sm">
{item.title}
</p>

<p className="text-xs text-gray-500 mt-1">
{item.location}
</p>

</div>

</div>

))}

</div>

</div>

);

};

export default AllProducts;