import { useQuery } from "@tanstack/react-query";
import ProductCard from "./ProductCard";
import AddProductModal from "./AddProductModal";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Products = () => {
  const { user } = useContext(AuthContext);
  const { data: products, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      try {
        const res = await fetch("http://localhost:5000/products");
        const data = await res.json();
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  });

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
                <ProductCard 
                key={product._id}
                product={product}>
                </ProductCard>
              ))}
        </div>
        {user?.uid && (
            <div className="text-center flex flex-row my-10 justify-center gap-4">
            <label htmlFor="addProductModal" className="btn">
              Add A Product
            </label>
            <AddProductModal></AddProductModal>
            <button className="btn ">Delete a product</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
