import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDataContext } from '../../context/context';
import { AddCartButton } from '../../components/AddCartButton/AddCartButton';

export default function ProductDetailsPage() {
    const {product} = useParams();
    const {ProductData} = useDataContext();

        const [quantity, setQuantity] = useState(0);

    const Details = ProductData.find(
        (P) => P.name === product
    );

  return (
    <>
      <div className="container my-5">
        <div className="row">
          {/* Product Image Section */}
          <div className="col-md-6 align-content-around text-center">
            <img src={Details.img} alt="product" className="img-fluid mb-3" />
          </div>

          {/* Product Information Section */}
          <div className="col-md-6 px-4 px-lg-2">
            <nav className="text-muted mb-2">
              Home / {Details.category} / {Details.name}
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
            <AddCartButton />

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
}