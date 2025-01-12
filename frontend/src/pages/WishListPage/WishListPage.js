import { Badge, Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React, { useState } from 'react'
import { ProductData } from '../../assets/Data/Data';
import { MdDelete } from 'react-icons/md';
import { useDataContext } from '../../context/context';
import { Link } from 'react-router-dom';
import PNG from '../../assets/Png/your wishlist is empty.jpg'

export const WishListPage = () => {

  const { wishList, products } = useDataContext();

  const filteredWishList = products.filter((product) =>
    wishList.some((wishItem) => wishItem._id === product._id)
  );
  
  console.log("wishlist : ", wishList);
  console.log('Filtered wishlist : ', filteredWishList);
  
  return (
    <Box className="my-3">
      <Box className="text-center mb-3 d-flex flex-row justify-content-between px-5 ">
        <Typography
          variant="h4"
          component="h1"
          color="secondary"
          className=""
        >
          My Wishlist
        </Typography>
        <div>
          <Link to={-1} className='text-decoration-none'>
            <button
              type="button"
              className="btn-close my-auto ms-auto"
            ></button>
          </Link>
        </div>
      </Box>

      <Box className="px-2">
        {wishList.length === 0 ? (
          <Box className="alert alert-info align-content-center" sx={{ p: 2, textAlign: "center", minHeight: "50vh", }}>
            {/* <Typography variant="h6"
          component="h4"
          color="info"
          className="" >Your wishlist is empty</Typography> */}
            <img src={PNG} alt='empty-wish-list' height='auto' width='60%' className='img-fluid mx-auto my-3' />
          </Box>
        ) : (
          <TableContainer
            component={Paper}
            sx={{ mt: 3 }}
            className="table-hover"
          >
            <Table>
              {/* Table Header */}
              <TableHead>
                <TableRow>
                  <TableCell className='text-center'>Product</TableCell>
                  <TableCell className='text-center'>Actions</TableCell>
                </TableRow>
              </TableHead>

              {/* Table Body */}
              <TableBody>
                {filteredWishList.map((item, index) => (
                  <TableRowContent item={item} key={index}/>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Box>
    </Box>
  );
}


const TableRowContent = ({item}) => {
  const [loading, setLoading] = useState(false);
  const [loadingWishListButton, setLoadingWishListButton] = useState(false);
  
  const {handleCart, handleWishList} = useDataContext();
  
  const ProductID = item._id;
  
  const handleAddToCartButton = () => {
    handleCart(ProductID, "add", setLoading );
  };

  const handleRemoveButton = () => {
    handleWishList(ProductID, "remove", setLoadingWishListButton); 
  };

  const ProductImage = ProductData.find((P) => {
    return item._id === P.id;
  });  

  return (
    <TableRow>
      <TableCell>
        <Link to={`/${item.category}/${item.subCategory}/${item._id}`}>
          <div className="row m-0">
            <div className="item-image col-3 col-lg-2 px-xl-5">
              <img
                className="img-fluid"
                src={ProductImage.img}
                alt="product"
                height="auto"
                width="100%"
              />
            </div>
            <div className="item-info px-2 col-9 col-lg-10 align-content-center">
              <p className="m-0 mb-1 text-truncate fw-semibold">{item.name}</p>
              <p className="m-0 mb-1 text-muted">{item.weight}</p>
              <p className="m-0 mb-1 fw-semibold">₹{item.price}</p>
              <div>
                <Badge color="success" variant="dot" className="me-2" />
                <Typography component="span" color="success.main">
                  In Stock
                </Typography>
              </div>
            </div>
          </div>
        </Link>
      </TableCell>
      <TableCell>
        <div className="d-flex flex-column gap-1">
          <Button
            variant="outlined"
            color="success"
            size="small"
            onClick={handleAddToCartButton}
            disabled={loading}
          >
            Add
          </Button>
          <Button
            variant="contained"
            color="error"
            size="small"
            onClick={handleRemoveButton}
            startIcon={<MdDelete size={16} />}
            disabled={loadingWishListButton}
          >
            Remove
          </Button>
        </div>
      </TableCell>
    </TableRow>
  );
};