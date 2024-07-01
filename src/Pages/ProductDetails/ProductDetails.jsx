import { Parser } from 'html-to-react';
import { useLoaderData } from 'react-router-dom';
import { useState } from 'react';
import BookingModal from './BookingModal';

const ProductDetails = () => {
  const productDetails = useLoaderData();
  const { name, photoURL, price, description, extraImages } = productDetails;
  const [mainImage, setMainImage] = useState(photoURL);

  const htmlParser = new Parser();
  const parsedDescription = htmlParser.parse(description);

  // Ensure extraImages is an array and include mainImage as the first element
  const images = [photoURL, ...extraImages];

  return (
    <div>
    <div className="flex flex-col lg:flex-row bg-white p-6">
      <div className="flex flex-col-reverse lg:flex-row lg:w-1/3 gap-4">
        <div className="flex flex-row lg:flex-col lg:space-y-2 space-x-2 lg:space-x-0">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`extra-${index}`}
              className={`w-16 h-16 object-cover rounded-lg cursor-pointer border-2 ${
                img === mainImage ? 'border-sky-600' : 'border-transparent'
              } hover:border-sky-600`}
              onClick={() => setMainImage(img)}
            />
          ))}
        </div>
        <div className="flex flex-col lg:w-full">
          <img src={mainImage} alt={name} className="w-full h-auto mb-4 rounded-lg" />
        </div>
      </div>
      <div className="lg:pl-6 lg:w-2/3">
        <h1 className="text-2xl font-bold text-gray-800">{name}</h1>
        <p className="text-xl text-red-500 font-semibold my-4">₹{price}</p>
        <div className="prose prose-sky max-w-none">{parsedDescription}</div>
      </div>
    </div>
    <div className='text-center my-5'>     
    <label htmlFor="booking-modal" className="btn btn-primary">Order Now</label>
    <BookingModal
    productName = {name}
    ></BookingModal>
    </div>
    </div>
  );
};

export default ProductDetails;
