import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import AlertMessage from "../../../components/common/AlertMessage";

const schema = yup.object().shape({
  firstname: yup
    .string()
    .required("Please enter your first name")
    .min(3, "Must be at least 3 characters")
    .trim(),
  lastname: yup
    .string()
    .required("Please enter your last name")
    .min(4, "Must be at least 4 characters")
    .trim(),
  email: yup
    .string()
    .required("Please enter your email")
    .email("Must be a valid email format")
    .trim(),
  subject: yup
    .string()
    .oneOf(["admin", "other"], "Please choose a subject")
    .required("Please choose a subject"),
  messageField: yup
    .string()
    .required("Please write a message")
    .min(10, "Must be at least 10 characters")
    .trim(),
});

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  function onSubmit(data) {
    console.log(data);
    setSubmitted(true);
    reset();
  }

  console.log(errors);

  return (
    <form id="contactForm" onSubmit={handleSubmit(onSubmit)}>
      {submitted && (
        <p className="alert success">Your message has been sent!</p>
      )}
      <fieldset>
        <div>
          <div>
            <label htmlFor="firstname" hidden aria-label="First name">
              Firstname
            </label>
            <input
              name="firstname"
              id="firstname"
              placeholder="First name"
              {...register("firstname", { required: true })}
            />{" "}
            {errors.firstname && (
              <AlertMessage className={"inputError"}>
                {errors.firstname.message}{" "}
              </AlertMessage>
            )}{" "}
          </div>

          <div>
            <label htmlFor="lastname" hidden aria-label="Last name">
              Last name
            </label>
            <input
              name="lastname"
              id="lastname"
              placeholder="Last name"
              {...register("lastname", { required: true })}
            />{" "}
            {errors.lastname && (
              <AlertMessage className={"inputError"}>
                {errors.lastname.message}{" "}
              </AlertMessage>
            )}{" "}
          </div>
        </div>

        <div>
          <label htmlFor="email" hidden aria-label="Email">
            Email
          </label>
          <input
            name="email"
            id="email"
            placeholder="Email"
            type="email"
            {...register("email", { required: true })}
          />{" "}
          {errors.email && (
            <AlertMessage className={"inputError"}>
              {errors.email.message}{" "}
            </AlertMessage>
          )}{" "}
        </div>

        <div>
          <label htmlFor="subject" hidden aria-label="Choose subject">
            Subject
          </label>
          <select
            name="subject"
            id="subject"
            defaultValue={"Choose subject"}
            {...register("subject", { required: true })}
          >
            <option defaultValue="Choose subject" disabled>
              Choose subject
            </option>
            <option value="other">Other</option>
            <option value="admin">Admin</option>
          </select>
          {errors.subject && (
            <AlertMessage className={"inputError"}>
              {errors.subject.message}{" "}
            </AlertMessage>
          )}{" "}
        </div>

        <div>
          <label htmlFor="message" hidden aria-label="Message">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Message..."
            {...register("messageField", { required: true })}
          />{" "}
          {errors.messageField && (
            <AlertMessage className={"inputError"}>
              {errors.messageField.message}{" "}
            </AlertMessage>
          )}{" "}
        </div>

        <button type="submit" id="contactBtn">
          Submit
        </button>
      </fieldset>
    </form>
  );
}
