import React, { useEffect, useState } from "react";

const CurrentOrder = () => {

const [orders, setOrders] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
  fetchOrders();
}, []);

const fetchOrders = async () => {
  try {
    const res = await fetch("http://localhost:5000/api/orders");

    const data = await res.json();

    setOrders(data);
    setLoading(false);
  } catch (error) {
    console.error(error);
    setLoading(false);
  }
};

if (loading) {
  return (
    <div className="text-center mt-20">
      Loading orders...
    </div>
  );
}

return (

<div className="max-w-6xl mx-auto px-4 py-10">

<h1 className="text-3xl font-bold mb-8">
Current Orders
</h1>

{orders.length === 0 ? (

<p className="text-gray-500">
No active orders found
</p>

) : (

<div className="space-y-6">

{orders.map((order) => (

<div
key={order._id}
className="bg-white shadow rounded-xl p-6 flex gap-6"
>

<img
src={order.product.image}
alt={order.product.title}
className="w-32 h-24 object-cover rounded"
/>

<div className="flex-1">

<h2 className="font-semibold text-lg">
{order.product.title}
</h2>

<p className="text-emerald-600 font-bold">
{order.product.price}
</p>

<p className="text-sm text-gray-500">
{order.address}
</p>

<span className="inline-block mt-2 px-3 py-1 text-sm rounded bg-yellow-100 text-yellow-700">
{order.status}
</span>

</div>

</div>

))}

</div>

)}

</div>

);

};

export default CurrentOrder;