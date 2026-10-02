import React, { useEffect, useState } from 'react'
import axios from 'axios';
import loginimage from '../../assets/login_page_image.png'

const AllProducts = ({addToCart}) => {
    const [allCategories, setAllCategories] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getCategoryList();
        getAllProducts();
    }, []);

    const getCategoryList = async () => {
        try {
            const response = await axios(
                "https://dummyjson.com/products/category-list"
            );
            setAllCategories(response?.data);

        } catch (error) {
            console.error("Failed to fetch Categories list:", {
                message: error.message,
                status: error.response?.status,
                endpoint: error.config?.url,
            });
        }
    };

    const getAllProductsByCategory = async (categoryName) => {
        try {
            if (categoryName) {
                const response = await axios(`https://dummyjson.com/products/category/${categoryName}`);
                setProducts(response?.data?.products);
            }
        } catch (error) {
            console.error("Failed to fetch Products by category:", {
                message: error.message,
                status: error.response?.status,
                endpoint: error.config?.url,
            });
        }
    };

    const filterProducts = (categoryName) => {
        try {
            if (categoryName === "all") {
                // Show all products without making another API call
                getAllProducts();
            } else {
                // Fetch products according to selected category
                getAllProductsByCategory(categoryName);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const getAllProducts = async () => {
        try {
            const response = await axios(`https://dummyjson.com/products?limit=0`);
            setProducts(response?.data?.products);
        } catch (error) {
            console.error("Failed to fetch Products:", {
                message: error.message,
                status: error.response?.status,
                endpoint: error.config?.url,
            });
        }
    }

    return (
        <div>
            <div className="relative">
                <img
                    src={loginimage}
                    alt="Login image"
                    className="object-cover w-full object-center h-50 mt-5"
                />

                <div className="w-full h-50 bg-black absolute top-0 left-0 opacity-[.4]"></div>

                <h2 className="absolute top-[40%] left-[10%] text-white font-semibold text-3xl md:text-5xl">
                    All Products
                </h2>
            </div>

            {/* Categories List */}
            <div className="h-1/5 flex flex-wrap gap-5 justify-center items-center mt-5 mb-5">
                <select onChange={(e) => filterProducts(e.target.value)} className="w-[200px] h-[50px] bg-red-500 rounded-lg p-2 text-white">
                    <option value="all">All Categories</option>
                    {allCategories.filter((filterItem) => !["laptops", "motorcycle", "furniture"].includes(filterItem)).map((item, index) => (
                        <option value={item} key={index} className="capitalize text-white red-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                            {item}
                        </option>
                    ))}
                </select>
            </div>

            {/* Product List */}
            {/* <div className="h-screen flex flex-wrap gap-5">
                {products?.map((product) => (
                    <div key={product.id}>
                        <img src={product.thumbnail} alt={product.title} />
                        <h3>title: {product.title}</h3>
                        <p>price: {product.price}</p>
                    </div>
                ))}
            </div> */}

            <section className="text-gray-600 body-font w-[80%] mx-auto">
                <div className="container px-5 py-24 mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {products?.map((product) => (
                            <div key={product.id} className="w-[90%] px-4 py-4 shadow-lg rounded-md">
                                <a
                                    className="block relative h-48 rounded overflow-hidden"
                                    href={`/singleProduct/${product.id}`}
                                >
                                    <img
                                        alt="ecommerce"
                                        className="object-cover object-center w-full h-full block rounded-t-lg"
                                        src={product.thumbnail}
                                    />
                                </a>

                                <div className="mt-4">
                                    <h2 className="text-gray-900 title-font text-lg font-medium mt-2 mb-2">
                                        {product.title}
                                    </h2>

                                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                                        {product.rating}
                                    </span>

                                    <div className="flex justify-between mt-3 flex-col sm:flex-row">
                                        <p className="mt-1 mb-2 sm:mb-0 text-[15px] sm:text-[20px] font-bold text-gray-900 dark:text-white">
                                            Price: {product.price} Rs.
                                        </p>

                                        <button onClick={() => addToCart(product)} className="text-white bg-red-500 hover:bg-red-500 focus:ring-4 focus:ring-blue-300 font-m rounded-lg text-sm px-2 py-2 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:bg-red-800">
                                            Add to cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AllProducts