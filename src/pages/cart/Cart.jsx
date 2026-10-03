
import { FaArrowLeft, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Cart = ({
    cart,
    handleItemIncrement,
    handleItemDecrement,
    handleRemove,
    getTotalAmount,
    finalAmount,
    applyPromoCode,
    promoCode,
    setPromoCode,
}) => {
    return (
        <div className="min-h-screen bg-gray-50 py-8 sm:py-10 lg:py-16">
            <div className="w-[95%] sm:w-[92%] lg:w-[90%] mx-auto">
                <div className="container mx-auto">

                    {/* Main Cart Container */}
                    <div className="flex flex-col lg:flex-row shadow-md rounded-lg overflow-hidden">

                        {/* ================= CART SECTION ================= */}
                        <div className="w-full lg:w-3/4 bg-white px-4 sm:px-6 md:px-8 lg:px-10 py-6 sm:py-8">

                            {/* Cart Header */}
                            <div className="flex items-center justify-between border-b pb-5 sm:pb-8">
                                <h1 className="font-semibold text-xl sm:text-2xl">
                                    Shopping Cart
                                </h1>

                                <h2 className="font-semibold text-lg sm:text-2xl uppercase">
                                    {cart?.length || 0} Items
                                </h2>
                            </div>

                            {/* Desktop Table Header */}
                            <div className="hidden md:flex mt-5 mb-5">
                                <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
                                    Product Details
                                </h3>

                                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
                                    Quantity
                                </h3>

                                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
                                    Price
                                </h3>

                                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
                                    Total
                                </h3>
                            </div>

                            {/* ================= CART ITEMS ================= */}
                            {cart?.length > 0 ? (
                                cart.map((item) => (
                                    <div
                                        key={item.id}
                                        className="
                                            flex flex-col
                                            md:flex-row
                                            md:flex-wrap
                                            md:items-center
                                            gap-4
                                            md:gap-0
                                            border-b
                                            py-5
                                            hover:bg-gray-50
                                            transition
                                        "
                                    >
                                        {/* Product Details */}
                                        <div className="flex items-center w-full md:w-2/5 min-w-0">
                                            <div className="w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0">
                                                <img
                                                    className="w-full h-full object-cover rounded-md"
                                                    src={item.thumbnail}
                                                    alt={item.title}
                                                />
                                            </div>

                                            <div className="flex flex-col justify-between ml-3 sm:ml-4 min-w-0">
                                                <span className="font-bold text-sm sm:text-base line-clamp-2">
                                                    {item.title}
                                                </span>

                                                <span className="text-red-500 text-xs sm:text-sm mt-1 capitalize">
                                                    {item.category}
                                                </span>

                                                <button
                                                    type="button"
                                                    className="flex items-center gap-1 font-semibold hover:text-red-500 text-gray-500 text-xs mt-2 w-fit"
                                                    onClick={() =>
                                                        handleRemove(item.id)
                                                    }
                                                >
                                                    <FaTrash size={11} />
                                                    Remove
                                                </button>
                                            </div>
                                        </div>

                                        {/* Quantity */}
                                        <div className="flex items-center justify-between md:justify-center w-full md:w-1/5">
                                            <span className="md:hidden font-semibold text-xs uppercase text-gray-500">
                                                Quantity
                                            </span>

                                            <div className="flex items-center">
                                                <button
                                                    type="button"
                                                    className="border border-gray-300 px-3 py-1.5 rounded-l-md hover:bg-gray-100"
                                                    onClick={() =>
                                                        handleItemDecrement(
                                                            item.id
                                                        )
                                                    }
                                                >
                                                    -
                                                </button>

                                                <span className="border-t border-b border-gray-300 px-4 py-1.5 text-sm min-w-[42px] text-center">
                                                    {item.quantity}
                                                </span>

                                                <button
                                                    type="button"
                                                    className="border border-gray-300 px-3 py-1.5 rounded-r-md hover:bg-gray-100"
                                                    onClick={() =>
                                                        handleItemIncrement(
                                                            item.id
                                                        )
                                                    }
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>

                                        {/* Price */}
                                        <div className="flex items-center justify-between md:justify-center w-full md:w-1/5">
                                            <span className="md:hidden font-semibold text-xs uppercase text-gray-500">
                                                Price
                                            </span>

                                            <span className="font-semibold text-sm">
                                                {item.price} Rs.
                                            </span>
                                        </div>

                                        {/* Total */}
                                        <div className="flex items-center justify-between md:justify-center w-full md:w-1/5">
                                            <span className="md:hidden font-semibold text-xs uppercase text-gray-500">
                                                Total
                                            </span>

                                            <span className="font-semibold text-sm">
                                                {(
                                                    item.price * item.quantity
                                                ).toFixed(2)}{" "}
                                                Rs.
                                            </span>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                /* Empty Cart */
                                <div className="text-center py-16">
                                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-700">
                                        Your cart is empty
                                    </h2>

                                    <p className="text-gray-500 mt-2 text-sm sm:text-base">
                                        Add some products to your cart.
                                    </p>

                                    <Link
                                        to="/allProducts"
                                        className="inline-flex items-center mt-6 bg-red-500 hover:bg-red-600 text-white px-5 py-2.5 rounded-md text-sm"
                                    >
                                        <FaArrowLeft className="mr-2" />
                                        Continue Shopping
                                    </Link>
                                </div>
                            )}

                            {/* Continue Shopping */}
                            {cart?.length > 0 && (
                                <div className="mt-8">
                                    <Link
                                        to="/allProducts"
                                        className="inline-flex items-center font-semibold text-indigo-600 hover:text-indigo-800 text-sm"
                                    >
                                        <FaArrowLeft
                                            className="mr-2"
                                            size={16}
                                        />
                                        Continue Shopping
                                    </Link>
                                </div>
                            )}
                        </div>

                        {/* ================= ORDER SUMMARY ================= */}
                        <div
                            id="summary"
                            className="w-full lg:w-1/4 px-5 sm:px-8 py-7 sm:py-10 bg-[#f6f6f6]"
                        >
                            <h1 className="font-semibold text-xl sm:text-2xl border-b pb-6">
                                Order Summary
                            </h1>

                            {/* Items + Subtotal */}
                            <div className="flex justify-between mt-8 sm:mt-10 mb-5">
                                <span className="font-semibold text-sm uppercase">
                                    Items {cart?.length || 0}
                                </span>

                                <span className="font-semibold text-sm">
                                    {getTotalAmount().toFixed(2)} Rs.
                                </span>
                            </div>

                            {/* Shipping */}
                            <div>
                                <label className="font-medium inline-block mb-3 text-sm uppercase">
                                    Shipping
                                </label>

                                <select className="block p-3 text-gray-600 w-full text-sm bg-white border border-gray-200 rounded-md">
                                    <option>
                                        Standard shipping - 10.00 Rs
                                    </option>
                                </select>
                            </div>

                            {/* Promo Code */}
                            <div className="py-8 sm:py-10">
                                <label
                                    htmlFor="promo"
                                    className="font-semibold inline-block mb-3 text-sm uppercase"
                                >
                                    Promo Code
                                </label>

                                <input
                                    type="text"
                                    id="promo"
                                    placeholder="Enter your code"
                                    className="p-3 text-sm w-full mb-3 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-red-300"
                                    value={promoCode}
                                    onChange={(e) =>
                                        setPromoCode(e.target.value)
                                    }
                                />

                                <span className="text-xs text-gray-500">
                                    Use code:{" "}
                                    <span className="font-semibold">
                                        DISCOUNT10
                                    </span>
                                </span>

                                <button
                                    type="button"
                                    className="w-full mt-4 bg-red-500 hover:bg-red-600 px-5 py-3 text-sm text-white uppercase rounded-md transition"
                                    onClick={applyPromoCode}
                                >
                                    Apply
                                </button>
                            </div>

                            {/* Total */}
                            <div className="border-t pt-5">
                                <div className="flex font-semibold justify-between py-4 text-sm uppercase">
                                    <span>Total Cost</span>

                                    <span>
                                        {finalAmount().toFixed(2)} Rs.
                                    </span>
                                </div>

                                <button
                                    type="button"
                                    className="w-full flex items-center justify-center text-white bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:ring-cyan-300 rounded-lg text-sm px-4 py-3 transition"
                                >
                                    Checkout
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;

