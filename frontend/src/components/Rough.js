import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Badge,
} from "@mui/material";
import { MdDelete } from "react-icons/md";

const sampleWishlist = [
  {
    id: "1",
    name: "Wireless Headphones",
    image: "/images/headphones.jpg", // Replace with actual image paths
    price: 120.99,
    currency: "USD",
    addedOn: "2024-12-01",
    inStock: true,
  },
  {
    id: "2",
    name: "Smartphone",
    image: "/images/smartphone.jpg",
    price: 799.49,
    currency: "USD",
    addedOn: "2024-12-03",
    inStock: true,
  },
  {
    id: "3",
    name: "Laptop",
    image: "/images/laptop.jpg",
    price: 1299.99,
    currency: "USD",
    addedOn: "2024-12-05",
    inStock: false,
  },
];

// Main Component
export const Rough = () => {
  const [wishlist, setWishlist] = useState(sampleWishlist); // Wishlist state
  const [selectedItems, setSelectedItems] = useState(new Set()); // Selected items state

  // Handle item selection
  const handleSelectItem = (itemId) => {
    setSelectedItems((prevSelected) => {
      const updatedSet = new Set(prevSelected);
      if (updatedSet.has(itemId)) {
        updatedSet.delete(itemId); // Deselect item
      } else {
        updatedSet.add(itemId); // Select item
      }
      return updatedSet;
    });
  };

  // Handle adding an item to the cart
  const handleAddToCart = (itemId) => {
    const item = wishlist.find((product) => product.id === itemId);
    if (item) {
      console.log(`Adding to cart: ${item.name}`);
      // Logic to add the item to the cart (e.g., update state, make API call)
    }
  };

  // Handle removing an item from the wishlist
  const handleRemoveFromWishlist = (itemId) => {
    setWishlist((prevWishlist) =>
      prevWishlist.filter((product) => product.id !== itemId)
    );
    console.log(`Removed item with ID: ${itemId}`);
    // Logic to remove item from the server or database
  };

  return (
    <Roughpage
      wishlist={wishlist}
      selectedItems={selectedItems}
      handleSelectItem={handleSelectItem}
      handleAddToCart={handleAddToCart}
      handleRemoveFromWishlist={handleRemoveFromWishlist}
    />
  );
};


const Roughpage = ({
    wishlist,
    selectedItems,
    handleSelectItem,
    handleAddToCart,
    handleRemoveFromWishlist,
  }) => {
    return (
      <Box className="container my-5">
        {/* Header Section */}
        <Box className="d-flex justify-content-between align-items-center mb-4">
          <Typography variant="h4" component="h1">
            My Wishlist
          </Typography>
        </Box>

        {/* Empty Wishlist */}
        {wishlist.length === 0 ? (
          <Box className="alert alert-info" sx={{ p: 2, textAlign: "center" }}>
            Your wishlist is empty
          </Box>
        ) : (
          <TableContainer component={Paper} sx={{ mt: 3 }}>
            <Table>
              {/* Table Header */}
              <TableHead>
                <TableRow>
                  <TableCell>Product Name</TableCell>
                  <TableCell>Unit Price</TableCell>
                  <TableCell>Stock</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>

              {/* Table Body */}
              <TableBody>
                {wishlist.map((item) => (
                  <TableRow key={item.id}>
                    {/* Product Details */}
                    <TableCell>
                      <Box display="flex" alignItems="center">
                        {/* <Image
                          src={item.image}
                          alt={item.name}
                          width={50}
                          height={50}
                          className="me-3"
                          style={{ borderRadius: "8px" }}
                        /> */} hii
                        <Typography>{item.name}</Typography>
                      </Box>
                    </TableCell>

                    {/* Price */}
                    <TableCell>
                      ${item.price.toFixed(2)} ({item.currency})
                    </TableCell>

                    {/* Stock */}
                    <TableCell>
                      <Badge color="success" variant="dot" className="me-2" />
                      <Typography component="span" color="success.main">
                        In Stock
                      </Typography>
                    </TableCell>

                    {/* Actions */}
                    <TableCell>
                      <Box display="flex" gap={1}>
                        <Button
                          variant="contained"
                          color="primary"
                          size="small"
                          onClick={() => handleAddToCart(item.id)}
                        >
                          Add to cart
                        </Button>
                        <Button
                          variant="outlined"
                          color="error"
                          size="small"
                          onClick={() => handleRemoveFromWishlist(item.id)}
                          startIcon={<MdDelete size={16} />}
                        >
                          Remove
                        </Button>
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Box>
    );
};

