import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDataContext } from '../../context/context';
import ProductCardComponent from '../../components/ProductCardComponent/ProductCardComponent';
import { NavBar } from '../../components/NavBar/NavBar';
import { Avatar, Box, List, ListItem, ListItemAvatar, ListItemText, useMediaQuery, useTheme } from '@mui/material';

export const CategoryPage = () => {
    
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm")); // below 600px

    const {category} = useParams();
    const {products} = useDataContext();

    // filter the products based on the category
    const categoryProducts = products.filter(
      (product) => product.category === category
    );

    // extract the subcategories from the filtered products and store it in array
    const subcategories = [
      ...new Set(categoryProducts.map((product) => product["sub-category"])),
    ];
    
    const [activeSubcategory, setActiveSubcategory] = useState(
      subcategories[0]
    );

    // filter the products based on the sub-category
    const filteredProducts = products.filter(
      (product) => product["sub-category"] === activeSubcategory
    );
    
  return (
    <>
      <NavBar />

      <div className="container-fluid p-0 px-md-2 px-lg-5">
        <div className="row m-0 p-0 px-md-2 px-lg-5">
          {/* Left Sidebar */}
          <Box
            className="col-3 border-end"
            sx={{ minHeight: "100vh", overflowY: "auto" }}
          >
            
            <List>
              {subcategories.map((subcategory, index) => (
                <ListItem
                  key={index}
                  button
                  onClick={() => setActiveSubcategory(subcategory)}
                  sx={{
                    backgroundColor: activeSubcategory === subcategory ? "#eaf7e1" : "white",
                    borderRight: activeSubcategory === subcategory ? "5px solid #4CAF50" : "none",
                    cursor: "pointer", 
                    "&:hover": { backgroundColor: "#f5f5f5" },
                    display:'flex',
                    flexDirection: isSmallScreen ? "column" : "row",
                  }}
                >
                  {/* <ListItemAvatar>
                    <Avatar
                      src="" 
                      alt={subcategory}
                      sx={{
                        width: 40,
                        height: 40,
                        borderRadius: "5px",
                        backgroundColor: "#f0f0f0", 
                        marginX: 'auto',
                      }}
                    />
                  </ListItemAvatar> */}

                  <ListItemText
                    primary={subcategory}
                    primaryTypographyProps={{
                      fontWeight:
                        activeSubcategory === subcategory ? "bold" : "normal",
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Box>

          {/* Right Products Card section */}

          <Box
            className="col-9 m-0 p-0 "
            sx={{ minHeight: "100vh", overflowY: "auto" }}
          >
            <h5 className="p-3">Products</h5>
            <div className="row m-0 p-0">
              {/* Render product cards dynamically */}
              {filteredProducts.map((product, index) => (
                <div className="col-6 col-md-4 col-lg-3 mb-4" key={index}>
                  <ProductCardComponent Data={product} />
                </div>
              ))}
            </div>
          </Box>
        </div>
      </div>
    </>
  );
}
