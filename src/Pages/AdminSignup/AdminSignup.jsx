import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";

const AdminSignup = () => {
  const { createUser } = useContext(AuthContext);
  const { register, handleSubmit, formState: { errors, isValid } } = useForm();

  const handleSignUp = async (data) => {
    const { name, email, password, secretKey } = data;
    const expectedSecretKey = "69SoftRiyaNougaWithNoShihab96";

    // Check if the entered secret key is correct
    if (secretKey !== expectedSecretKey) {
      alert("Invalid secret key");
      return;
    }

    try {
      await createUser(email, password);
      // Perform any additional actions, like saving the user's name
      console.log(data);
    } catch (error) {
      console.error("Error creating admin account:", error);
      alert("Failed to create admin account");
    }
  };

  return (
    <div className="card lg:card-side bg-base-100 w-3/5 mx-auto my-10 shadow-xl">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
          alt="Album"
        />
      </figure>
      <div className="card-body text-center">
        <h2 className="card-title mx-auto font-bold text-3xl">Create Admin Account</h2>
        <form onSubmit={handleSubmit(handleSignUp)}>
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
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">Set a Password</span>
            </label>
            <input
              type="password"
              {...register("password", { required: true })}
              placeholder="Set a password"
              className="input input-bordered w-full"
            />
            {errors.password && <span className="text-red-500">Password is required</span>}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">Secret Key</span>
            </label>
            <input
              type="password"
              {...register("secretKey", { required: true })}
              placeholder="Type Secret Key"
              className="input input-bordered w-full"
            />
            {errors.secretKey && <span className="text-red-500">Key is required</span>}
          </div>
          <button type="submit" className="btn btn-primary my-4" disabled={!isValid}>
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminSignup;
