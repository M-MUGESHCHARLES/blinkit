import { Badge, Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React, { useState } from 'react'
import { ProductData } from '../../assets/Data/Data';
import { MdDelete } from 'react-icons/md';
import image from '../../assets/Product-sample/Product-1.jpg'

export const WishListPage = () => {

    // const[wishList, setWishList] = useState([]);

    
  const wishList =[ {
    id: 1,
    // img: Product1,
    name: "Amul Taaza",
    duration: 8,
    weight: "1L",
    price: 10,
    mrp: 74,
    description: "Inclusive of all taxes",
    brand: "Amul",
    category: "Dairy",
  },
  {
    id: 2,
    // img: Product2,
    name: "Mother Dairy Classic Curd",
    duration: 8,
    weight: "1L",
    price: 20,
    mrp: 74,
    description: "Inclusive of all taxes",
    brand: "Amul",
    category: "Dairy",
  }];

      const CartProduct = ProductData.find((P) => {
        return wishList.id === P.id;
      });

  return (
    <Box className="my-3">
      <Box className="text-center mb-3">
        <Typography variant="h4" component="h1" color="secondary">
          My Wishlist
        </Typography>
      </Box>

      <Box className="px-2">
        {wishList.length === 0 ? (
          <Box className="alert alert-info" sx={{ p: 2, textAlign: "center" }}>
            Your wishlist is empty
          </Box>
        ) : (
          <TableContainer component={Paper} sx={{ mt: 3 }}>
            <Table>
              {/* Table Header */}
              <TableHead>
                <TableRow>
                  <TableCell>Product</TableCell>
                  <TableCell>Stock</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>

              {/* Table Body */}
              <TableBody>
                {wishList.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell >
                      <div className='row m-0'>
                          <div className="item-image col-3">
                            <img
                              className="img-fluid"
                              src={image}
                              alt="product"
                              height="auto"
                              width="100%"
                            />
                          </div>
                          <div className="item-info px-2 col-9">
                            <p className="m-0 mb-1 text-truncate fw-semibold">
                              {item.name}
                            </p>
                            <p className="m-0 mb-1 text-muted">{item.weight}</p>
                            <p className="m-0 mb-1 fw-semibold">₹{item.price}</p>
                          </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge color="success" variant="dot" className="me-2" />
                      <Typography component="span" color="success.main">
                        In Stock
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <div className="d-flex flex-column gap-1">
                        <Button
                          variant="contained"
                          color="primary"
                          size="small"
                        //   onClick={() => handleAddToCart(item.id)}
                        >
                          Add to cart
                        </Button>
                        <Button
                          variant="outlined"
                          color="error"
                          size="small"
                        //   onClick={() => handleRemoveFromWishlist(item.id)}
                          startIcon={<MdDelete size={16} />}
                        >
                          Remove
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Box>
    </Box>
  );
}
