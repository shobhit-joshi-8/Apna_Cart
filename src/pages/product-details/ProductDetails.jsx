import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
    FaStar,
    FaRegStar,
    FaFacebookF,
    FaTwitter,
    FaComment,
    FaHeart,
    FaArrowLeft,
    FaSpinner,
    FaExclamationCircle,
} from "react-icons/fa";

const ProductDetails = ({ addToCart }) => {
    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState(null);
    const [error, setError] = useState("");

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const controller = new AbortController();

        const getProductDetails = async () => {
            try {
                setLoading(true);
                setError("");
                setProduct(null);

                const response = await axios.get(
                    `https://dummyjson.com/products/${id}`,
                    { signal: controller.signal }
                );

                setProduct(response.data);
            } catch (error) {
                if (error.code === "ERR_CANCELED") return;

                console.error("Failed to fetch product details:", error);

                setError(
                    error.response?.status === 404
                        ? "Product not found."
                        : "Unable to load product details. Please try again."
                );
            } finally {
                if (!controller.signal.aborted) {
                    setLoading(false);
                }
            }
        };

        getProductDetails();

        return () => controller.abort();
    }, [id]);

    const handleBack = () => {
        navigate("/allProducts");
    };

    if (loading) {
        return (
            <div className="min-h-[70vh] flex flex-col items-center justify-center gap-4">
                <FaSpinner className="animate-spin text-indigo-600 text-4xl" />
                <p className="text-gray-600 text-lg font-medium">
                    Loading product details...
                </p>
            </div>
        );
    }

    if (error || !product) {
        return (
            <div className="min-h-[70vh] flex flex-col items-center justify-center px-5 text-center">
                <FaExclamationCircle className="text-red-500 text-4xl mb-4" />

                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                    {error || "Product not found."}
                </h2>

                <p className="text-gray-500 mb-6">
                    Please check the product or try again.
                </p>

                <button
                    onClick={handleBack}
                    className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-lg transition duration-200"
                >
                    <FaArrowLeft />
                    Back to All Products
                </button>
            </div>
        );
    }

    return (
        <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 py-10 md:py-16 mx-auto">
                {/* Back Button */}
                <button
                    onClick={handleBack}
                    className="inline-flex items-center gap-2 mb-8 px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-gray-700 font-medium shadow-sm hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-200 transition duration-200"
                >
                    <FaArrowLeft />
                    Back to All Products
                </button>

                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    <img
                        alt={product.title}
                        className="w-full max-w-md h-72 sm:h-80 lg:h-96 object-contain rounded-xl"
                        src={product.thumbnail}
                    />

                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h2 className="text-sm title-font text-gray-500 tracking-widest uppercase">
                            {product.brand || "Brand"}
                        </h2>

                        <h1 className="text-gray-900 text-3xl title-font font-semibold mb-3">
                            {product.title}
                        </h1>

                        <div className="flex flex-wrap items-center gap-3 mb-5">
                            <span className="flex items-center gap-1">
                                {Array.from({ length: 5 }, (_, index) =>
                                    index < Math.round(product.rating || 0) ? (
                                        <FaStar
                                            key={index}
                                            className="w-4 h-4 text-amber-400"
                                        />
                                    ) : (
                                        <FaRegStar
                                            key={index}
                                            className="w-4 h-4 text-amber-400"
                                        />
                                    )
                                )}

                                <span className="text-gray-600 ml-2">
                                    {product.rating ?? "N/A"} / 5
                                </span>
                            </span>

                            <span className="flex items-center gap-3 border-l border-gray-200 pl-3">
                                <a
                                    href="https://www.facebook.com/"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="Facebook"
                                    className="text-gray-500 hover:text-indigo-600 transition"
                                >
                                    <FaFacebookF className="w-5 h-5" />
                                </a>

                                <a
                                    href="https://twitter.com/"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="Twitter"
                                    className="text-gray-500 hover:text-sky-500 transition"
                                >
                                    <FaTwitter className="w-5 h-5" />
                                </a>

                                <a
                                    href="#reviews"
                                    aria-label="Reviews"
                                    className="text-gray-500 hover:text-indigo-600 transition"
                                >
                                    <FaComment className="w-5 h-5" />
                                </a>
                            </span>
                        </div>

                        <p className="leading-relaxed mb-6 text-gray-600">
                            {product.description}
                        </p>

                        <div className="flex items-center justify-between gap-4 border-t border-gray-100 pt-5">
                            <div>
                                <p className="text-sm text-gray-500 mb-1">Price</p>
                                <span className="title-font font-bold text-3xl text-gray-900">
                                    ₹{product.price}
                                </span>
                            </div>

                            <div className="flex items-center gap-3">
                                <button
                                    onClick={() => addToCart?.(product)}
                                    className="flex items-center justify-center text-white bg-indigo-600 border-0 py-3 px-6 hover:bg-indigo-700 rounded-lg font-medium shadow-sm transition duration-200"
                                >
                                    Add to Cart
                                </button>

                                <button
                                    aria-label="Add to wishlist"
                                    className="rounded-full w-11 h-11 bg-gray-100 border-0 inline-flex items-center justify-center text-gray-500 hover:bg-red-50 hover:text-red-500 transition duration-200"
                                >
                                    <FaHeart className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductDetails;