import * as Yup from "yup";

const UserFormSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Must be longer than 2 characters")
    .max(20, "Nice try, nobody has a first name that long")
    .required("Required"),
  phone: Yup.string()
    .min(10, "Must be at least 10 digits")
    .required("Required")
});

const EmailFormSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Required")
});

export { UserFormSchema, EmailFormSchema };
