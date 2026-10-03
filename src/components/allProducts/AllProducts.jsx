import React, { useEffect, useState } from 'react'
import axios from 'axios';
import loginimage from '../../assets/login_page_image.png'

const AllProducts = ({ addToCart }) => {
    const [allCategories, setAllCategories] = useState([]);
    const [allProducts, setAllProducts] = useState([]);
    const [products, setProducts] = useState([]);
    const [searchItem, setSearchItem] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [loading, setLoading] = useState(false);

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
                setLoading(true);
                const response = await axios(`https://dummyjson.com/products/category/${categoryName}`);
                const categoryProducts = response?.data?.products;

                setAllProducts(categoryProducts);
                setProducts(categoryProducts);
            }
        } catch (error) {
            console.error("Failed to fetch Products by category:", {
                message: error.message,
                status: error.response?.status,
                endpoint: error.config?.url,
            });
        }
        finally {
            setLoading(false);
        }
    };

    const filterProducts = (categoryName) => {
        try {
            setSelectedCategory(categoryName);

            // Reset search whenever category changes
            setSearchItem('');
            if (categoryName === "all") {
                getAllProducts();
            } else {
                getAllProductsByCategory(categoryName);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const getAllProducts = async () => {
        try {
            setLoading(true);
            const response = await axios(`https://dummyjson.com/products?limit=0`);
            const fetchedProducts = response?.data?.products;
            setProducts(fetchedProducts);
            setAllProducts(fetchedProducts);
        } catch (error) {
            console.error("Failed to fetch Products:", {
                message: error.message,
                status: error.response?.status,
                endpoint: error.config?.url,
            });
        } finally {
            setLoading(false);
        }
    }

    const handleSearchItem = (e) => {
        const query = e.target.value.toLowerCase();;
        setSearchItem(query);
    }

    // Categories which don't want to show
    const filteredCategories = allCategories.filter(
        (category) =>
            !['laptops', 'motorcycle', 'furniture'].includes(category));

    const handleSearchByButton = () => {
        const filteredProducts = allProducts?.filter((item) => item?.title?.toLowerCase().includes(searchItem));
        setProducts(filteredProducts);
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
                <select onChange={(e) => filterProducts(e.target.value)} value={selectedCategory} className="w-[200px] h-[50px] bg-red-500 rounded-lg p-2 text-white">
                    <option value="all">All Categories</option>
                    {filteredCategories.map((item, index) => (
                        <option value={item} key={index} className="capitalize text-white red-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                            {item}
                        </option>
                    ))}
                </select>
            </div>

            {/* Search Filter */}

            <div className='text-center'>
                <input placeholder='Search Item' className='border px-2 py-2 ' onChange={handleSearchItem} value={searchItem} />
                <button className='bg-black text-white px-2 py-2 ml-4 rounded-md ' onClick={handleSearchByButton}>Search Products</button>
            </div>


            <section className="text-gray-600 body-font w-[90%] mx-auto">
                <div className="container w-full  py-10 md:mx-0 mx-auto">

                    {loading ? (
                        <div className="text-center py-10">
                            <p className="text-lg font-semibold">
                                Loading products...
                            </p>
                        </div>
                    ) : products.length === 0 ? (<div className="text-center py-2">
                        <p className="text-lg font-semibold">
                            No products found.
                        </p>
                    </div>) : (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                            {products?.map((product) => (
                                <div
                                    key={product.id}
                                    className="h-full bg-white px-4 py-4 shadow-md hover:shadow-xl rounded-lg border border-gray-100 flex flex-col"
                                >
                                    {/* Product Image */}
                                    <a
                                        className="block relative h-52 w-full rounded-lg overflow-hidden bg-gray-50 flex-shrink-0"
                                        href={`/singleProduct/${product.id}`}
                                    >
                                        <img
                                            src={product.thumbnail}
                                            alt={product.title}
                                            className="w-full h-full object-contain p-3 block transition-transform duration-300 hover:scale-105"
                                        />
                                    </a>

                                    {/* Product Details */}
                                    <div className="mt-4 flex flex-col flex-grow">

                                        {/* Product Title */}
                                        <h2 className="text-gray-900 text-lg font-medium leading-6 line-clamp-2 min-h-[48px]">
                                            {product.title}
                                        </h2>

                                        {/* Rating */}
                                        <div className="mt-3">
                                            <span className="inline-flex items-center bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-1 rounded">
                                                ⭐ {product.rating}
                                            </span>
                                        </div>

                                        {/* Bottom Section */}
                                        <div className="mt-auto pt-5 flex items-center justify-between gap-3">
                                            <p className="text-[16px] sm:text-[18px] font-bold text-gray-900 whitespace-nowrap">
                                                ₹{product.price}
                                            </p>

                                            <button
                                                onClick={() => addToCart(product)}
                                                className="text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2 transition-colors whitespace-nowrap"
                                            >
                                                Add to cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>)}
                </div>
            </section>
        </div>
    )
}

export default AllProducts