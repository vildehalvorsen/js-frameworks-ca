import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import AlertMessage from "../../../components/common/AlertMessage";
import { BASE_URL, TOKEN_PATH } from "../../../constants/api";
import AuthContext from "../../../context/AuthContext";

const url = BASE_URL + TOKEN_PATH;

const schema = yup.object().shape({
  username: yup.string().required("Please enter a your username"),
  password: yup.string().required("Please enter your password"),
});

export default function LoginForm() {
  const [submitting, setSubmitting] = useState(false);
  const [loginError, setLoginError] = useState(null);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [auth, setAuth] = useContext(AuthContext);

  async function onSubmit(data) {
    setSubmitting(true);
    setLoginError(null);

    console.log(data);

    try {
      const response = await axios.post(url, data);
      console.log("response", response.data);
      setAuth(response.data);
      navigate("/admin");
    } catch (error) {
      console.log("error", error);
      setLoginError(error.toString());
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} id="loginForm">
        {loginError && (
          <AlertMessage className={"alert error"}>
            Invalid username and/or password
          </AlertMessage>
        )}

        <fieldset disabled={submitting}>
          <div>
            <div>
              <label htmlFor="username" hidden>
                Username
              </label>
              <input
                name="username"
                id="username"
                placeholder="Username"
                {...register("username", { required: true })}
              />
              {errors.username && (
                <AlertMessage className={"inputError"}>
                  {errors.username.message}
                </AlertMessage>
              )}
            </div>

            <div>
              <label htmlFor="username" hidden>
                Password
              </label>
              <input
                name="password"
                id="password"
                placeholder="Password"
                type="password"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <AlertMessage className={"inputError"}>
                  {errors.password.message}
                </AlertMessage>
              )}
            </div>
          </div>
          <button type="submit" id="loginBtn">
            {submitting ? "Logging in..." : "Log in"}
          </button>
        </fieldset>
      </form>
    </>
  );
}
