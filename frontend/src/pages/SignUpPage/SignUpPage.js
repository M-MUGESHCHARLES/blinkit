import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { useAuthContext } from "../../context/AuthContext";
import { Link, useNavigate} from 'react-router-dom';
import { UserSignUp } from '../../apis';

export const SignUpPage = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(`sign-up form data : `, data);
    try {
      const response = await UserSignUp(data);
      if (response?.status === 200 || 201) {
          console.log('Response : ',response.data);
          navigate("/login");
      } 
    } catch (err) {
      console.log(
        "Error sign-up : ",
        err.response?.data?.error || "An error occurred"
      );
    }
  };

  return (
    <>
      <div className="px-2 sticky-top py-4 mb-5">
        <h2 className=" Logo m-0 d-inline ps-3 m-0">
          <span id="color-Y">blink</span>
          <span id="color-G">it</span>
        </h2>
      </div>

      <Box sx={{ minHeight: "80vh" }} className="px-2">
        <div
          className="border rounded-4 mx-auto mt-5 px-2 px-md-3 py-2 py-md-4"
          id="SignUp-Form"
        >
          <h5 className="fw-bold text-center py-3">
            <span id="color-Y">Sign-Up</span> <span id="color-G">Form</span>
          </h5>

          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="pt-2">
              <input
                type="text"
                placeholder="Name"
                {...register("Name", {
                  // required: {
                  //   value: true,
                  //   message: "* Enter your name",
                  // },
                })}
                className="w-100 px-2 py-2 rounded-2 border border-1"
              />
              {errors.Name && (
                <Typography
                  sx={{ fontSize: "12px" }}
                  variant="caption"
                  color="error"
                  className="w-100"
                >
                  {errors.Name.message}
                </Typography>
              )}
            </div>

            <div className="pt-2">
              <input
                type="Email"
                placeholder="Email"
                {...register("Email", {
                  // required: {
                  //   value: true,
                  //   message: "* Enter your E-mail ",
                  // },
                  // pattern: {
                  //   value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                  //   message: "* Invalid email format ",
                  // },
                })}
                className="w-100 px-2 py-2 rounded-2 border border-1"
              />
              {errors.Email && (
                <Typography
                  sx={{ fontSize: "12px" }}
                  variant="caption"
                  color="error"
                  className="w-100"
                >
                  {errors.Email.message}
                </Typography>
              )}
            </div>

            <div className="pt-2">
              <input
                type="password"
                placeholder="Password"
                {...register("Password", {
                  // required: {
                  //   value: true,
                  //   message: "* Password is required ",
                  // },
                })}
                className="w-100 px-2 py-2 rounded-2 border border-1"
              />
              {errors.Password && (
                <Typography
                  sx={{ fontSize: "12px" }}
                  variant="caption"
                  color="error"
                  className="w-100"
                >
                  {errors.Password.message}
                </Typography>
              )}
            </div>

            <Button
              type="submit"
              variant="contained"
              color="success"
              className="mt-3 w-100"
            >
              Sign-Up
            </Button>

            <div class="d-flex pb-2 pt-3">
              <span> Already a User ?
              <Link to='/login' className='text-decoration-none'> Sign-In </Link></span>
            </div>

          </form>
        </div>
      </Box>
    </>
  );
};


