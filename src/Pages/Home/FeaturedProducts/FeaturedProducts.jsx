import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../../Products/ProductCard';

const fetchFeaturedProducts = async () => {
  const response = await fetch(`${import.meta.env.VITE_APP_API_URL}/products?limit=3`);
  if (!response.ok) {
    throw new Error('Failed to fetch featured products');
  }
  return response.json();
};

const FeaturedProducts = () => {
  const navigate = useNavigate();
  const { data: featuredProducts, isLoading, error } = useQuery({
    queryKey: ['featuredProducts'],
    queryFn: fetchFeaturedProducts,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching featured products</div>;
  }

  return (
    <div className="py-6">
      <h3 className="text-xl md:text-4xl font-bold text-center">Featured Products</h3>
      <hr className="border-t-2 border-dashed w-2/5 md:w-1/4 mx-auto my-4" style={{ borderColor: '#052e16' }} />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-10 px-4">
        {featuredProducts?.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
      <div className="text-center mt-6">
        <button onClick={() => navigate('/products')} className="btn btn-info">
          Show All Products
        </button>
      </div>
    </div>
  );
};

export default FeaturedProducts;
