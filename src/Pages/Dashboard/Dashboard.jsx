import { useQuery, useMutation } from "@tanstack/react-query";
import { FaCheck, FaTrashAlt, FaMapPin } from "react-icons/fa";
import { MdAddCall } from "react-icons/md";

const Dashboard = () => {
  // Fetch orders
  const { data: orders = [], isLoading, refetch } = useQuery({
    queryKey: ["orders"],
    queryFn: async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_APP_API_URL}/bookingProducts`);
        const data = await res.json();
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  });

  // Delete order mutation
  const deleteOrderMutation = useMutation({
    mutationFn: async (id) => {
      await fetch(`${import.meta.env.VITE_APP_API_URL}/bookingProducts/${id}`, {
        method: "DELETE",
      });
    },
    onSuccess: () => {
      // Refetch orders after successful deletion
      refetch();
    },
  });

  // Confirm order mutation
  const confirmOrderMutation = useMutation({
    mutationFn: async (id) => {
      await fetch(`${import.meta.env.VITE_APP_API_URL}/bookingProducts/${id}`, {
        method: "PATCH",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ status: "confirmed" }),
      });
    },
    onSuccess: () => {
      // Refetch orders after successful confirmation
      refetch();
    },
  });

  // Confirm order handler
  const handleConfirm = (id) => {
    confirmOrderMutation.mutate(id);
  };

  // Delete order handler
  const handleDelete = (id) => {
    deleteOrderMutation.mutate(id);
  };

  // Sort orders so that pending orders (no status or not confirmed) appear before confirmed ones
  const sortedOrders = [...orders].sort((a, b) => {
    const aStatus = a.status === "confirmed" ? 1 : 0;
    const bStatus = b.status === "confirmed" ? 1 : 0;
    return aStatus - bStatus;
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2 className="text-center text-3xl my-6 font-bold">Customer Orders</h2>
      <div className="overflow-x-auto mx-4 mb-5">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th className="text-base">Name & Email</th>
              <th className="text-base">Address</th>
              <th className="text-base">Contact</th>
              <th className="text-base">Product Name, <br />Quantity & Total Price</th>
              <th className="text-base">Action</th>
            </tr>
          </thead>
          <tbody>
            {sortedOrders.map((order, i) => (
              <tr key={order._id} className="hover">
                <th>{i + 1}</th>
                <td>
                  <p className="font-semibold text-base">{order.name}</p>
                  <span className="badge badge-ghost badge-md mt-2">
                    {order.email}
                  </span>
                </td>
                <td>
                  <p className="text-xs">{order.address}</p>
                </td>
                <td>
                  <div className="flex items-center mb-1">
                    <MdAddCall className="mr-2" />
                    <span>{order.number}</span>
                  </div>
                  <div className="flex items-center">
                    <FaMapPin className="mr-2" />
                    <span>{order.pin}</span>
                  </div>
                </td>
                <td>
                    <div>
                        <p className="font-bold text-base">{order.productName}</p>
                    </div>
                  <span className="font-semibold text-base">{order.quantity}x</span>
                  <span className="mt-2 ms-4 text-red-600 font-medium">
                    ₹{order.totalPrice}
                  </span>
                </td>
                <td>
                  <button
                    className={`p-2 rounded-full me-1 ${
                      order.status === "confirmed"
                        ? "bg-green-500 text-white"
                        : "text-blue-900 hover:text-white hover:bg-blue-900"
                    }`}
                    onClick={() => handleConfirm(order._id)}
                    disabled={order.status === "confirmed"}
                  >
                    <FaCheck className="text-lg" />
                  </button>
                  <button
                    className="p-2 bg-white rounded-full text-red-700 hover:bg-red-800 hover:text-white"
                    onClick={() => handleDelete(order._id)}
                  >
                    <FaTrashAlt className="text-lg" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button 
        className="mt-4 p-2 bg-blue-500 text-white rounded" 
        onClick={() => window.location.href = `${import.meta.env.VITE_APP_API_URL}/download-orders`}
      >
        Download Orders
      </button>
    </div>
  );
};

export default Dashboard;
