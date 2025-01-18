"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { ProductDetail } from "@/product/_component/product-detail";
import {
  ProductUseFormData,
  productSchema,
} from "@/product/types/product-scheme";

const mockData = {
  productCode: "C0032131",
  productName: "dummy product",
  caption: "",
  category: "",
  weight: "",
  size: "",
  color: "",
};

export default function ProductForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ProductUseFormData>({
    resolver: zodResolver(productSchema),
  });

  const onSubmit = (data: ProductUseFormData) => {
    console.log("Submitted data:", data);
  };

  useEffect(() => {
    reset(mockData);
  }, []);

  return (
    <div style={{ maxWidth: "500px", margin: "0 auto", padding: "20px" }}>
      <h1>＜Product Form＞</h1>
      <br />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ marginBottom: "15px" }}>
          <label
            htmlFor="productCode"
            style={{ display: "block", marginBottom: "5px" }}
          >
            Product Code:
          </label>
          <input
            type="text"
            id="productCode"
            {...register("productCode")}
            style={{
              width: "100%",
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
          {errors.productCode && (
            <p style={{ color: "red" }}>{errors.productCode.message}</p>
          )}
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label
            htmlFor="productName"
            style={{ display: "block", marginBottom: "5px" }}
          >
            Product Name:
          </label>
          <input
            type="text"
            id="productName"
            {...register("productName")}
            style={{
              width: "100%",
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label
            htmlFor="caption"
            style={{ display: "block", marginBottom: "5px" }}
          >
            Caption:
          </label>
          <textarea
            id="caption"
            {...register("caption")}
            style={{
              width: "100%",
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              resize: "vertical",
            }}
          ></textarea>
        </div>

        <ProductDetail register={register} errors={errors} />

        <button
          type="submit"
          style={{
            backgroundColor: "#0070f3",
            color: "#fff",
            padding: "10px 20px",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
