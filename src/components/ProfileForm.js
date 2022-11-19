import { useForm } from "react-hook-form";

const ProfileForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <label className="label-name">
        First Name:
        <input
          type="text"
          {...register("name", {
            required: "Enter your Name",
            minLength: { value: 3, message: "Should be 3 or more symbols" },
          })}
        ></input>
        {errors.name && <p className="error">{errors.name.message}</p>}
      </label>
      <label className="label-name">
        Last Name:
        <input
          type="text"
          {...register("surname", {
            required: "Enter your Last Name",
            minLength: { value: 3, message: "Should be 3 or more symbols" },
          })}
        ></input>
        {errors.surname && <p className="error">{errors.surname.message}</p>}
      </label>
      <select {...register("country", { required: true })} className="country">
        <option value="ua">Ukraine</option>
        <option value="pl">Poland</option>
        <option value="usa">USA</option>
      </select>
      <button type="submit" className="btn">
        Submit
      </button>
    </form>
  );
};

export default ProfileForm;
