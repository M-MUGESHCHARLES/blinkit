import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaExclamationCircle } from "react-icons/fa";
import { IoHome, IoLogIn } from "react-icons/io5";
import { Button } from "@mui/material";

const NotFoundPage = () => {
  return (
    <>
      <div className="px-2 sticky-top py-4">
        <h2 className=" Logo m-0 d-inline ps-3 m-0">
          <span id="color-Y">blink</span>
          <span id="color-G">it</span>
        </h2>
      </div>
      <div className="container d-flex flex-column justify-content-center align-items-center vh-100 text-center">
        <div>
          <div className="display-1 fw-bold mb-3">
            <span>4</span>
            <span className="mx-2 text-danger" id="NotFoundIcon">
              <FaExclamationCircle />
            </span>
            <span>4</span>
          </div>
          <h2 className="fw-bold mb-3" id="color-Y">
            Oops! You're lost.
          </h2>
          <p className="text-muted mb-4 ">
            The page you are looking for was not found.
          </p>
          <div className="d-flex justify-content-around">
            <Link to="/">
              <Button variant="contained" color="info" endIcon={<IoHome />} className="py-3 px-4 rounded-4">
                Back to
              </Button>
            </Link>
            <span className="my-auto fw-bold"> / </span>
            <Link to="/login" className="">
              <Button variant="outlined" color="success" endIcon={<IoLogIn />} className="py-3 px-4 rounded-4">
                Back to
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
