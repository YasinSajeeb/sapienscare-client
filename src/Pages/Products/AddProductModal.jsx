import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const AddProductModal = () => {
  const { register, handleSubmit, reset, control } = useForm();
  const [editorHtml, setEditorHtml] = useState('');

  const handleAddProduct = async(data) => {
    const imageFields = ['mainImage', 'image1', 'image2', 'image3'];
    const uploadedImages = [];

    try {
      for (const field of imageFields) {
        if (data[field] && data[field][0]) {
          const image = data[field][0];
          const formData = new FormData();
          formData.append("file", image);
          formData.append("folder", "Products");
          formData.append("upload_preset", "sapiensCare");

          const response = await fetch(
            "https://api.cloudinary.com/v1_1/dqcxhmfgy/image/upload",
            {
              method: "POST",
              body: formData,
            }
          );

          if (!response.ok) {
            throw new Error("Failed to upload image to Cloudinary.");
          }

          const imageData = await response.json();
          uploadedImages.push(imageData.secure_url);
        }
      }

      const productInfo = {
        name: data.productName,
        photoURL: uploadedImages[0] || '',
        extraImages: uploadedImages.slice(1),
        price: data.price,
        description: editorHtml
      }

      const result = await fetch('http://localhost:5000/products', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(productInfo)
      }).then(res => res.json());

      console.log(result);
      reset();
    }
    catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <style>
        {`
          /* Hide spin buttons for all browsers */
          input[type="number"]::-webkit-outer-spin-button,
          input[type="number"]::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }
          input[type="number"] {
            -moz-appearance: textfield; /* Firefox */
          }

          /* Style for the price input wrapper */
          .input-wrapper {
            position: relative;
          }

          /* Style for the INR icon */
          .inr-icon {
            position: absolute;
            top: 50%;
            left: 10px;
            transform: translateY(-50%);
            color: white;
          }

          /* Padding adjustment for the input field */
          .input-with-icon {
            padding-left: 30px;
          }
        `}
      </style>
      <input type="checkbox" id="addProductModal" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box bg-sky-700">
          <h3 className="font-bold text-lg">Hello!</h3>

          <form onSubmit={handleSubmit(handleAddProduct)}>

          <div className="form-control w-full">
          <label className="label">
            <span className="label-text text-white font-semibold text-base">Product's Name</span>
          </label>
          <input type='text' {...register("productName")} placeholder="Type Product Name" className="input input-bordered bg-sky-400 w-full text-white font-medium" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Image</span>
          </label>
          <input type='file' {...register("mainImage")} placeholder="Submit cover photo" accept="image/*" className="file-input file-input-bordered w-full" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Image</span>
          </label>
          <input type='file' {...register("image1")} placeholder="Submit an extra photo" accept="image/*" className="file-input file-input-bordered w-full" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Image</span>
          </label>
          <input type='file' {...register("image2")} placeholder="Submit an extra photo" accept="image/*" className="file-input file-input-bordered w-full" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Image</span>
          </label>
          <input type='file' {...register("image3")} placeholder="Submit an extra photo" accept="image/*" className="file-input file-input-bordered w-full" />
        </div>
        <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-white font-semibold text-base">Price</span>
              </label>
              <div className="input-wrapper">
                <span className="inr-icon text-xl">₹</span>
                <input type="number" {...register("price")} placeholder="Type Product Price" className="input input-bordered bg-sky-400 w-full text-white font-medium input-with-icon" />
              </div>
            </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <Controller
                  name="description"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <ReactQuill
                      theme="snow"
                      className="bg-sky-200"
                      value={editorHtml}
                      onChange={setEditorHtml}
                      modules={{
                        toolbar: [
                          [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
                          [{size: []}],
                          ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                          [{'list': 'ordered'}, {'list': 'bullet'}, 
                          {'indent': '-1'}, {'indent': '+1'}],
                          [{ 'color': [] }, { 'background': [] }],
                          ['link', 'image'],
                          ['clean']
                        ],
                      }}
                    />
                  )}
                />
        </div>
          
          <button className="btn btn-primary">Submit</button>
          </form>
          <div className="modal-action">
            <label htmlFor="addProductModal" className="btn">
              Close!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProductModal;
