import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const Navbar = ({ cart }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	}

	const cartCount = cart.reduce((total, item) => (total + item.quantity), 0);


	return (
		<header className="bg-white border-b border-gray-200 relative">
			<div className="container mx-auto flex justify-between p-5 items-center">

				<div>
					<Link to="/">
						<h3 className="font-bold text-1xl md:text-2xl">
							Apna<span className="text-red-500">Cart</span>
						</h3>
					</Link>
				</div>

				<div className="hidden md:block">
					<ul className="flex items-center text-lg justify-center font-semibold">
						<Link to="/">
							<li className="mr-5 hover:text-gray-900 cursor-pointer">
								Home
							</li>
						</Link>

						<Link to="/allproducts">
							<li className="mr-5 hover:text-gray-900 cursor-pointer">
								All Products
							</li>
						</Link>

						{/* <Link to="/about">
							<li className="mr-5 hover:text-gray-900 cursor-pointer">
								About
							</li>
						</Link> */}

						{/* <Link to="/Contact">
							<li className="mr-5 hover:text-gray-900 cursor-pointer">
								Contact
							</li>
						</Link> */}
					</ul>
				</div>

				{
					isOpen ? (<div className="">
						<ul className="flex absolute flex-col gap-10 left-0 h-screen w-full top-[73px] h-auto z-10 bg-red-500 text-white items-center text-lg justify-center font-semibold">
							<Link to="/">
								<li className="mt-5 hover:text-gray-900 cursor-pointer">
									Home
								</li>
							</Link>

							<Link to="/allproducts">
								<li className="mt-5 hover:text-gray-900 cursor-pointer">
									All Products
								</li>
							</Link>

							{/* <Link to="/about">
								<li className="mt-5 hover:text-gray-900 cursor-pointer">
									About
								</li>
							</Link> */}

							{/* <Link to="/Contact">
								<li className="mt-5 hover:text-gray-900 cursor-pointer">
									Contact
								</li>
							</Link> */}
						</ul>
						<button className="absolute top-[75px] z-10 right-0 text-white py-2 px-4 cursor-pointer" onClick={toggleMenu}>
							<RxCross2 size={30} />
						</button>
					</div>) : ""
				}



				<div className="flex justify-center items-center gap-3">

					<Link to="/login" className="bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base font-semibold">
						Login
					</Link>

					<Link to="/cart">
						<button className="relative cursor-pointer">
							<span className="absolute top-[-5px] bg-[red] right-0 text-white px-1 rounded-full text-xs ">
								{cartCount}
							</span>

							<FaShoppingCart size={25} />
						</button>
					</Link>

					{isOpen ? "" : <button className="md:hidden" onClick={toggleMenu}>
						<FaBars size={25} />
					</button>}


				</div>
			</div>
		</header>
	);
};

export default Navbar;