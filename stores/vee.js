import { defineStore } from "pinia";
import { useForm } from "vee-validate";
import { object, string } from "yup";

const schema = object({
  name: string().required(),
  email: string().email().required(),
  password: string().min(6).required(),
  ingredient: string().required(),
  city: string().required(),
});

const initialValues = {
  name: "test",
  email: "test@example.com",
  password: "12345678",
  ingredient: "Mushroom",
  city: "",
};

export const useVeeStore = defineStore("vee", () => {
  const { $message } = useNuxtApp();
  const { errors, defineField, handleSubmit, handleReset } = useForm({
    validationSchema: schema,
    initialValues,
  });

  const [name, nameProps] = defineField("name");
  const [email, emailProps] = defineField("email");
  const [password, passwordProps] = defineField("password");
  const [ingredient, ingredientProps] = defineField("ingredient");
  const [city, cityProps] = defineField("city");

  const signup = handleSubmit((values, { resetForm, setValues }) => {
    console.log("pinia-store-Submit", values);
    // setValues({ name: "", email: "", password: "" });
    // resetForm();
    $message("success", "successfully submitted", () => {
      console.log("callback successful");
    });
  });

  const reset = () => {
    $message("info", "successfully reseted");
    handleReset();
  };

  return {
    errors,
    name,
    nameProps,
    email,
    emailProps,
    password,
    passwordProps,
    ingredient,
    ingredientProps,
    city,
    cityProps,
    signup,
    reset,
  };
});
