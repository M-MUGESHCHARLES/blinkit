import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDataContext } from '../../context/context';
import { AddCartButton } from '../../components/AddCartButton/AddCartButton';
import { ProductData } from '../../assets/Data/Data';
import NotFoundPage from '../404/NotFoundPage';

export default function ProductDetailsPage() {
    const {product} = useParams();
    const {} = useDataContext();

    const Details = ProductData.find(
        (P) => P.name === product
    );

    if (!Details) {
      return <NotFoundPage />; // Redirect to 404 Page
    };

  return (
    <>
      <div className="container my-5">
        <div className="row">
          {/* Product Image Section */}
          <div className="col-md-5 d-flex flex-column m-0 align-content-around text-center">
            <img
              src={Details.img}
              alt="product"
              className="img-fluid mb-3 col-12"
            />

            <div className="d-flex px-2">
              <div className="p-2">
                <img
                  src={Details.img}
                  alt="product"
                  height="auto"
                  width="25%"
                  className="img-fluid mb-3 col-12"
                />
              </div>
              <div className="p-2">
                <img
                  src={Details.img}
                  alt="product"
                  height="auto"
                  width="25%"
                  className="img-fluid mb-3 col-12"
                />
              </div>
              <div className="p-2">
                <img
                  src={Details.img}
                  alt="product"
                  height="auto"
                  width="25%"
                  className="img-fluid mb-3 col-12"
                />
              </div>
              <div className="p-2">
                <img
                  src={Details.img}
                  alt="product"
                  height="auto"
                  width="25%"
                  className="img-fluid mb-3 col-12"
                />
              </div>
              <div className="p-2">
                <img
                  src={Details.img}
                  alt="product"
                  height="auto"
                  width="25%"
                  className="img-fluid mb-3 col-12"
                />
              </div>
            </div>
          </div>

          {/* Product Information Section */}
          <div className="col-md-7 px-4 pt-xl-4 py-3 py-lg-0 px-lg-2">
            <nav className="text-muted fw-semibold mb-4">
              <Link to='/' className='text-decoration-none text-muted'> Home </Link> / {Details.category} /
              <span className="fw-bold" id="color-G">
                {Details.name}
              </span>
            </nav>
            <h1 className="h4 mb-2">{Details.name}</h1>
            <p className="text-muted small">⏱️ {Details.duration} MINS</p>
            <p>
              <a href="/" className="text-success">
                View all by {Details.brand} &rarr;
              </a>
            </p>

            <div className="my-3">
              <span className="h5">₹{Details.price}</span>
              <span className="text-muted ms-2 text-decoration-line-through">
                MRP ₹{Details.mrp}
              </span>
            </div>
            <p className="text-muted small">{Details.description}</p>

            {/* Quantity Control */}
            <AddCartButton ProductName={Details.name} />

            {/* Why Shop Section */}
            <h3 className="h6 mt-4">Why shop from us?</h3>
            <div className="d-flex flex-column gap-3">
              {Details.offers.map((offer, index) => (
                <div key={index} className="d-flex align-items-start gap-2">
                  <span className="fs-4">{offer.icon}</span>
                  <div>
                    <h4 className="h6 m-0">{offer.title}</h4>
                    <p className="small text-muted m-0">{offer.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
