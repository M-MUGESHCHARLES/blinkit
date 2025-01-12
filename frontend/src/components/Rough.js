import React from "react";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useForm } from "react-hook-form";

export const Rough = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  console.log(errors);

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>

        <FormControl className="pt-2">
          <TextField
            variant="outlined"
            type="text"
            label="Product Name"
            {...register("ProductName", {
              required: { value: true, message: "* Enter Product Name" },
            })}
          />
          {errors.ProductName && (
            <FormHelperText className="" >{errors.ProductName.message}</FormHelperText>
          )}
        </FormControl>

        <FormControl className="pt-2">
          <TextField
            variant="outlined"
            type="text"
            label="Brand Name"
            {...register("BrandName", {
              required: { value: true, message: "* Enter Brand Name" },
            })}
          />
          {errors.BrandName && (
            <FormHelperText>{errors.BrandName.message}</FormHelperText>
          )}
        </FormControl>

        <FormControl className="pt-2">
          <InputLabel id="Category">Category</InputLabel>
          <Select
            labelId="Category"
            variant="outlined"
            label="Category"
            {...register("Category", { required: true })}
          >
            <MenuItem value="Dairy">Dairy</MenuItem>
            <MenuItem value="Snacks">Snacks</MenuItem>
          </Select>
        </FormControl>

        <FormControl className="pt-2">
          <TextField
            variant="outlined"
            type="text"
            label="Sub-Category "
            {...register("SubCategory ", { required: true })}
          />
        </FormControl>

        <FormControl className="pt-2">
          <TextField
            variant="outlined"
            type="number"
            label="Duration"
            {...register("Duration", { required: true })}
          />
        </FormControl>

        <FormControl className="pt-2">
          <TextField
            variant="outlined"
            type="text"
            label="Image"
            {...register("Image", { required: true })}
          />
        </FormControl>

        <FormControl className="pt-2">
          <TextField
            variant="outlined"
            type="number"
            label="MRP"
            {...register("MRP", { required: true })}
          />
        </FormControl>

        <FormControl className="pt-2">
          <TextField
            variant="outlined"
            type="text"
            label="Weight"
            {...register("Weight", { required: true })}
          />
        </FormControl>

        <FormControl className="pt-2">
          <textarea {...register("Description", { required: true })} />
        </FormControl>

        <Button type="submit"> ADD Product </Button>
      </form>
    </Box>
  );
};
