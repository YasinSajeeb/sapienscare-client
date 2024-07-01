import React, { useState, useEffect, useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css';
import { useLoaderData } from "react-router-dom";

const BookingModal = ({ productName }) => {
  const { register, handleSubmit, reset, setValue, control, formState: { errors, isValid } } = useForm({ mode: "onChange" });
  const productDetails = useLoaderData();
  const { price } = productDetails;
  
  const phoneInputRef = useRef();

  // State for quantity and total price
  const [quantity, setQuantity] = useState("1");
  const [totalPrice, setTotalPrice] = useState(price.toString());

  useEffect(() => {
    // Register quantity and totalPrice fields and set their initial values
    setValue("quantity", quantity);
    setValue("totalPrice", totalPrice);
  }, [quantity, totalPrice, setValue]);

  // Handler for incrementing quantity
  const incrementQuantity = () => {
    setQuantity((prevQuantity) => {
      const newQuantity = (parseInt(prevQuantity) + 1).toString();
      setTotalPrice((parseInt(newQuantity) * price).toString());
      setValue("quantity", newQuantity);
      setValue("totalPrice", (parseInt(newQuantity) * price).toString());
      return newQuantity;
    });
  };

  // Handler for decrementing quantity
  const decrementQuantity = () => {
    setQuantity((prevQuantity) => {
      const newQuantity = (parseInt(prevQuantity) > 1 ? parseInt(prevQuantity) - 1 : 1).toString();
      setTotalPrice((parseInt(newQuantity) * price).toString());
      setValue("quantity", newQuantity);
      setValue("totalPrice", (parseInt(newQuantity) * price).toString());
      return newQuantity;
    });
  };

  // Form submission handler
  const handleBooking = async (data) => {

    const bookingData = { ...data, productName };

    try {
      const response = await fetch('http://localhost:5000/bookingProducts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(bookingData)
      });
      if (response.ok) {
        const result = await response.json();
        console.log('Booking successful:', result);
        // Reset form after successful submission
        reset();
        phoneInputRef.current.setState({ value: "" });
        setQuantity("1");
        setTotalPrice(price.toString());
        document.getElementById('booking-modal').checked = false;
      } else {
        console.error('Booking failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box max-w-lg">
          <div className="modal-action">
            <label
              htmlFor="booking-modal"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              X
            </label>
            <form onSubmit={handleSubmit(handleBooking)} className="w-full">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-semibold">Your Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  placeholder="Type Your Name"
                  className="input input-bordered w-full"
                />
                {errors.name && <span className="text-red-500">Name is required</span>}
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-semibold">Your Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="Type Your email"
                  className="input input-bordered w-full"
                />
                {errors.email && <span className="text-red-500">Email is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Mobile Number</span>
                </label>
                <Controller
                  name="number"
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { onChange, value } }) => (
                    <PhoneInput
                      ref={phoneInputRef}
                      country={"in"}
                      enableSearch={true}
                      inputStyle={{ width: "100%" }}
                      value={value}
                      onChange={(phone) => onChange(`+${phone}`)}
                    />
                  )}
                />
                {errors.number && <span className="text-red-500">Mobile number is required</span>}
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-semibold">Your Address</span>
                </label>
                <textarea
                  {...register("address", { required: true })}
                  placeholder="Type Your delivery address"
                  className="textarea textarea-info"
                />
                {errors.address && <span className="text-red-500">Address is required</span>}
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-semibold">PIN code</span>
                </label>
                <input
                  type="number"
                  {...register("pin", { required: true })}
                  placeholder="Type Your PIN code"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="form-control grid grid-cols-2 gap-4">
                <div>
                  <label className="label">
                    <span className="label-text font-semibold">Quantity</span>
                  </label>
                  <div className="flex items-center">
                    <button
                      type="button"
                      className="btn btn-sm"
                      onClick={decrementQuantity}
                    >
                      -
                    </button>
                    <span className="mx-2">{quantity}</span>
                    <button
                      type="button"
                      className="btn btn-sm"
                      onClick={incrementQuantity}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div>
                  <label className="label">
                    <span className="label-text font-semibold">Total Price</span>
                  </label>
                  <div className="flex items-center">
                    <span className="mr-1 text-xl font-bold text-red-600">₹</span>
                    <input
                      type="text"
                      value={totalPrice}
                      readOnly
                      className="input font-bold text-red-600 text-xl w-full border-0 p-0 focus:outline-none"
                    />
                  </div>
                </div>
              </div>
              <input type="hidden" {...register("quantity")} value={quantity} />
              <input type="hidden" {...register("totalPrice")} value={totalPrice} />
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary w-full" disabled={!isValid}>
                  Book Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;