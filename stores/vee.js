import { defineStore } from "pinia";
import { useForm } from "vee-validate";
import { object, string } from "yup";

const schema = object({
  name: string().required(),
  email: string().email().required(),
  password: string().min(6).required(),
});

const initialValues = {
  name: "test",
  email: "test@example.com",
  password: "12345678",
};

export const useVeeStore = defineStore("vee", () => {
  const toast = useToast();
  const { errors, defineField, handleSubmit, handleReset } = useForm({
    validationSchema: schema,
    initialValues,
  });

  const [name, nameProps] = defineField("name");
  const [email, emailProps] = defineField("email");
  const [password, passwordProps] = defineField("password");

  const signup = handleSubmit((values, { resetForm, setValues }) => {
    // send values to API
    console.log("pinia-store-Submit", values);
    // setValues({ name: "", email: "", password: "" });
    resetForm();
    toast.add({
      severity: "success",
      summary: "successfully submitted",
      detail: "You have accepted",
      life: 3000,
    });
  });

  const reset = handleReset;

  return {
    errors,
    name,
    nameProps,
    email,
    emailProps,
    password,
    passwordProps,
    signup,
    reset,
  };
});
