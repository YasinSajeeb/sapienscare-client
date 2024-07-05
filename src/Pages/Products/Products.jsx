import './Products.css';
import { useContext, useState } from 'react';
import { useQuery } from "@tanstack/react-query";
import ProductCard from "./ProductCard";
import AddProductModal from "./AddProductModal";
import { FaTrashAlt } from 'react-icons/fa';
import { AuthContext } from "../../providers/AuthProvider";
import toast from 'react-hot-toast';
import { Tooltip } from 'react-tooltip';

const Products = () => {
  const { user } = useContext(AuthContext);
  const { data: products, isLoading, refetch } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_APP_API_URL}/products`);
        const data = await res.json();
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  });

  const handleDeleteProduct = async (productId) => {
    try {
      const res = await fetch(`${import.meta.env.VITE_APP_API_URL}/products/${productId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      if (res.ok) {
        toast.success("Product Deleted Successfully");
        // Product successfully deleted from the server, now update the UI
        refetch(); // Refetch products data to update UI
      } else {
        console.error('Failed to delete product:', res.statusText);
      }
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const [isDeleteClicked, setIsDeleteClicked] = useState(false);

  const skeletons = Array.from({ length: 8 }, (_, index) => (
    <div key={index} className="flex flex-col gap-4 w-full bg-gray-200 p-4 rounded-lg animate-pulse">
      <div className="skeleton h-32 w-full bg-gray-300 rounded"></div>
      <div className="skeleton h-4 w-28 bg-gray-300 rounded"></div>
      <div className="skeleton h-4 w-full bg-gray-300 rounded"></div>
      <div className="skeleton h-4 w-full bg-gray-300 rounded"></div>
    </div>
  ));

  return (
    <div>
      <div className="py-6">
        <h3 className="text-4xl font-bold text-center">Our Products</h3>
        <hr
          className="border-t-2 border-dashed w-1/6 mx-auto my-4"
          style={{ borderColor: "#052e16" }}
        />
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-5 mt-10 px-4">
          {isLoading
            ? skeletons
            : products?.map((product) => (
                <div key={product._id} className='relative'>
                  {isDeleteClicked && (
                    <button
                      className="absolute top-2 right-2 p-2 bg-white rounded-full text-red-700 hover:bg-red-800 hover:text-white focus:outline-none z-10"
                      data-tooltip-content="Delete this product"
                      data-tooltip-id="delete-product"
                      onClick={() => handleDeleteProduct(product._id)}
                    >
                      <Tooltip id="delete-product" place="top" />
                      <FaTrashAlt className="text-lg shivering" />
                    </button>
                  )}
                  <ProductCard product={product}></ProductCard>
                </div>
              ))}
        </div>
        {user?.uid && (
          <div className="text-center flex flex-row my-10 justify-center gap-4">
            <label htmlFor="addProductModal" className="btn">
              Add A Product
            </label>
            <AddProductModal></AddProductModal>
            <div className='btn btn-delete' onClick={() => setIsDeleteClicked(!isDeleteClicked)}>
              {isDeleteClicked ? 'Cancel' : 'Delete'}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;