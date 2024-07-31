import * as yup from "yup";

export const registerFormScheamas = yup.object().shape({
    email: yup.string().email("Please,enter email form!").required("Email is required"),
    fullName : yup.string().required("Full name is required!"),
    message : yup.string(),


})