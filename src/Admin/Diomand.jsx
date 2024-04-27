// ProductForm Component

import React, { useState, useEffect } from "react";
import axios from "axios";
import DiomandShape1 from "./DiomandShape"

const ProductForm = () => {
  const [name, setName] = useState("");
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const[DiomandShape,setDiomandShape] = useState("");

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "http://localhost:6001/api/v1/AdminDash/getCatogary"
        ); // Corrected endpoint URL
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
    fetchDiomandShape();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:6001/api/v1/AdminDash/DiomandShepa",
        {
          name: name,
          category: selectedCategory,
        }
      );
      console.log("Product data sent to the server:", response.data);
      setName("");
      setSelectedCategory("");
      alert("Product added successfully!");
     
    } catch (error) {
      console.error("Error sending product data:", error);
      alert("Failed to add product.");
    }
  };
  console.log("DiomandShape",DiomandShape)
  const fetchDiomandShape = async () => {
    try {
      const response = await axios.get(
        "http://localhost:6001/api/v1/AdminDash/getDiomandShepa"
      ); // Corrected endpoint URL
      setDiomandShape(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  return (
    <div className="flex flex-col w-full h-full justify-between">
      <div className="w-full relative p-6 border-b border-gray-100 bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
        <div className="flex md:flex-row flex-col justify-between mr-20">
          <div>
            <h4 className="text-xl font-medium dark:text-gray-300">
              Add Category
            </h4>
            <p className="mb-0 text-sm dark:text-gray-300">
              Add your Product category and necessary information from here
            </p>
          </div>
        </div>
      </div>
      <div
        className="w-full md:w-7/12 lg:w-8/12 xl:w-8/12 relative dark:bg-gray-700 dark:text-gray-200"
        style={{
          position: "relative",
          overflow: "hidden",
          width: "100%",
          height: "100%",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            overflow: "scroll",
            marginRight: "-17px",
            marginBottom: "-17px",
          }}
        >
          <form onSubmit={handleSubmit}>
            <div className="p-6 flex-grow scrollbar-hide w-full max-h-full pb-40">
              <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                <label className="block text-sm text-gray-800 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium text-sm">
                  Category
                </label>
                <div className="col-span-8 sm:col-span-4">
                  <select
                    id="category"
                    className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700"
                    name="category"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    <option value="">Select Category</option>
                    {categories.map((category) => (
                      <option key={category._id} value={category._id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                <label className="block text-sm text-gray-800 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium text-sm">
                  Shape Name
                </label>
                <div className="col-span-8 sm:col-span-4">
                  <input
                    className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 h-12 p-2"
                    type="text"
                    name="name"
                    placeholder="Enter Shape name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                
                <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
                  <button
                    className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white bg-emerald-500 border border-transparent active:bg-emerald-600 hover:bg-emerald-600 w-full h-12"
                    type="submit"
                  >
                    <span>Add Diomand Shepa</span>
                  </button>
                </div>
              </div>
            </div>
          </form>

          <DiomandShape1 diomandShape={DiomandShape} />
          
        </div>
      </div>
    </div>
  );
};

export default ProductForm;
