import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { _id, name, photoURL, prevPrice, price } = product;

  return (
    <Link to={`/products/${_id}`}>
      <div className="card w-auto bg-base-200 shadow-xl">
        <figure className="px-2 pt-2">
          <img src={photoURL} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body bg-base-200 items-center rounded text-center p-4 md:p-8">
          <h2 className="card-title text-base md:text-xl">{name}</h2>
          <p className="text-sm md:text-xl font-bold text-red-600">
            <span className="text-xs md:text-base line-through mr-2 text-red-400">₹{prevPrice}</span>
            ₹{price}</p>
          <Link to={`/products/${_id}`}><button className="btn btn-sm md:btn-md text-xs btn-info hidden md:block">View Details <FaLongArrowAltRight /></button>
          </Link>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
