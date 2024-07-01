import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { _id, name, photoURL, price } = product;

  return (
    <Link to={`/products/${_id}`}>
      <div className="card w-auto bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={photoURL} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p className="text-xl text-orange-500">Price: ₹{price}</p>
          <Link to={`/products/${_id}`}><button className="btn btn-primary">View Details <FaLongArrowAltRight /></button></Link>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
