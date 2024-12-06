import { Box, Button, Typography } from '@mui/material';
import React from 'react'
import { useForm } from 'react-hook-form';
import { useAuthContext } from '../../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserLogin } from '../../apis';
import { useDataContext } from '../../context/context';

export const LoginPage = () => {
  const navigate = useNavigate();
    const {setIsAuth, setUserID } = useAuthContext();
    const {setCart} = useDataContext();
    const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    // console.log(`Login form data : `,data);
    try {
      const res = await UserLogin(data);
      if(res?.status === 200 || 201) {
        const updatedData = {
          ...data,
          UserID: res.data.user._id,
        };
        localStorage.setItem("user", JSON.stringify(updatedData));
        // console.log(`Response : `, res.data);
        setUserID(res.data.user._id);
        // console.log("User ID : ", res.data.user._id);
        // Set the cart with data from the response
        if (res.data.user.cart) {
          setCart(res.data.user.cart);
            // localStorage.setItem("cart", JSON.stringify(res.data.user.cart));
          // console.log("Cart initialized: ", res.data.user.cart);
        }
        setIsAuth(true);
        // console.log("Login Form data : ", data);
        navigate("/");
        // alert(`Logged In successfull`);
      }      
    } catch (err) {
      console.log(`Error login : `, err.response?.data?.error || 'An error occurred');            
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

        <Box sx={{ minHeight: "80vh" }} className='px-2'>
          <div
            className="border rounded-4 mx-auto mt-5 px-2 px-md-3 py-2 py-md-4"
            id="Login-Form"
          >
            <h5 className="fw-bold text-center py-3"> <span id='color-Y'>Login</span> <span id='color-G'>Form</span> </h5>
    
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <div className="pt-2">
                <input
                  type="Email"
                  placeholder="Email"
                  {...register("Email", {
                    required: {
                      value: true,
                      message: "* Email is required ",
                    },
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                      message: "* Invalid email format ",
                    },
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
                  {...register("Password", { required: true })}
                  className="w-100 px-2 py-2 rounded-2 border border-1"
                />
              </div>
    
              <Button
                type="submit"
                variant="contained"
                color="success"
                className="mt-3 w-100"
              >
                Login
              </Button>

              <div class="d-flex pb-2 pt-3">
              <span> New User ?
              <Link to='/signup' className='text-decoration-none'> Sign-Up </Link></span>
            </div>

            </form>
          </div>
        </Box>
      </>
  );
};


