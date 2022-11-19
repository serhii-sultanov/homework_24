import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  name: yup
    .string()
    .trim()
    .required("Fill this field")
    .min(3, "Enter minimum 3 symbols"),
  surname: yup
    .string()
    .trim()
    .required("Fill this field")
    .min(3, "Enter minimum 3 symbols"),
  country: yup.string().required(),
});

const ProfileFormYup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <label className="label-name">
        First Name:
        <input type="text" {...register("name")}></input>
        {errors.name && <p className="error">{errors.name.message}</p>}
      </label>
      <label className="label-name">
        Last Name:
        <input type="text" {...register("surname")}></input>
        {errors.surname && <p className="error">{errors.surname.message}</p>}
      </label>
      <select {...register("country")} className="country">
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

export default ProfileFormYup;
