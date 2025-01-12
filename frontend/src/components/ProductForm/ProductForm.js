import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function ProductForm({ onSubmit, initialData = null }) {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      brand: "",
      category: "",
      subCategory: "",
      description: "",
      duration: 0,
      img: "",
      mrp: 0,
      price: 0,
      weight: "",
    },
  });

  useEffect(() => {
    if (initialData) {
      // Set initial data to the form fields
      Object.keys(initialData).forEach((key) => {
        setValue(key, initialData[key]);
      });
    }
  }, [initialData, setValue]);

  const onSubmitForm = (data) => {
    onSubmit(data); // Call parent onSubmit handler with form data
    reset(); // Reset the form after submission
  };

  return (
    <form onSubmit={handleSubmit(onSubmitForm)} className="space-y-4 mb-8">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>
        <div>
          <Label htmlFor="brand">Brand</Label>
          <Input
            id="brand"
            {...register("brand", { required: "Brand is required" })}
          />
          {errors.brand && (
            <p className="text-red-500">{errors.brand.message}</p>
          )}
        </div>
        <div>
          <Label htmlFor="category">Category</Label>
          <Input
            id="category"
            {...register("category", { required: "Category is required" })}
          />
          {errors.category && (
            <p className="text-red-500">{errors.category.message}</p>
          )}
        </div>
        <div>
          <Label htmlFor="subCategory">Sub Category</Label>
          <Input
            id="subCategory"
            {...register("subCategory", {
              required: "Sub Category is required",
            })}
          />
          {errors.subCategory && (
            <p className="text-red-500">{errors.subCategory.message}</p>
          )}
        </div>
        <div>
          <Label htmlFor="description">Description</Label>
          <Input
            id="description"
            {...register("description", {
              required: "Description is required",
            })}
          />
          {errors.description && (
            <p className="text-red-500">{errors.description.message}</p>
          )}
        </div>
        <div>
          <Label htmlFor="duration">Duration</Label>
          <Input
            id="duration"
            type="number"
            {...register("duration", {
              required: "Duration is required",
              valueAsNumber: true,
            })}
          />
          {errors.duration && (
            <p className="text-red-500">{errors.duration.message}</p>
          )}
        </div>
        <div>
          <Label htmlFor="img">Image</Label>
          <Input
            id="img"
            {...register("img", { required: "Image URL is required" })}
          />
          {errors.img && <p className="text-red-500">{errors.img.message}</p>}
        </div>
        <div>
          <Label htmlFor="mrp">MRP</Label>
          <Input
            id="mrp"
            type="number"
            {...register("mrp", {
              required: "MRP is required",
              valueAsNumber: true,
            })}
          />
          {errors.mrp && <p className="text-red-500">{errors.mrp.message}</p>}
        </div>
        <div>
          <Label htmlFor="price">Price</Label>
          <Input
            id="price"
            type="number"
            {...register("price", {
              required: "Price is required",
              valueAsNumber: true,
            })}
          />
          {errors.price && (
            <p className="text-red-500">{errors.price.message}</p>
          )}
        </div>
        <div>
          <Label htmlFor="weight">Weight</Label>
          <Input
            id="weight"
            {...register("weight", { required: "Weight is required" })}
          />
          {errors.weight && (
            <p className="text-red-500">{errors.weight.message}</p>
          )}
        </div>
      </div>
      <Button type="submit">{initialData ? "Update" : "Add"} Product</Button>
    </form>
  );
}
