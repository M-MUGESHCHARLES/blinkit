import React from 'react'
import { FaFacebookSquare } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { IoLogoInstagram } from 'react-icons/io5';

export default function Footer() {
  return (
      <>
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 px-4 border-top">
          <div className="col-md-4 d-flex align-items-center">
            <a
              href="/"
              className=" text-body-secondary text-decoration-none lh-1"
            >
              <h2 className=" Logo m-0 d-inline ">
                <span id="color-Y">blink</span>
                <span id="color-G">it</span>
              </h2>
            </a>
            <span className="m-0 mx-2 text-body-secondary">
              © 2024 blinkit, Inc
            </span>
          </div>

          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3 text-success">
              <FaFacebookSquare />
            </li>
            <li className="ms-3 text-success">
              <IoLogoInstagram />
            </li>
            <li className="ms-3 text-success">
              <FaXTwitter />
            </li>
          </ul>
        </footer>
      </>
  );
}
