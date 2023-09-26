import React from "react";
import Menu from "./Menu";
import Link from "next/link";
import CartIcon from "./Carticon"

const Navbar = () => {

  const user = false   
  return (
    <div className="h-12 text-blue-600 p-4 flex items-center justify-between border-b-2 border-blue-600 uppercase md:h-24">
        {/* LEFT LINKS */}
        <div className="hidden md:flex gap-4 flex-1">
          <Link href="/">Homepage</Link>
          <Link href="/logout">Log Out</Link>
          <Link href="/signup">Sign Up</Link>
         


          </div>

        {/* LOGO */}
        <div className="text-xl md:font-bold flex-1 md:text-center">
            <Link href="/">Zip Local Dish </Link>
        </div>
        {/* MOBILE MENU */}
        <div className="md:hidden">
            <Menu />
        </div>
         {/* RIGHT LINKS */}
         <div className="hidden md:flex gap-4 justify-end flex-1">
            {!user ? (
          <Link href="/login">Login</Link>
            ) : (
          <Link href="/orders">Orders</Link>
            )}
          <CartIcon/>
         </div>
    </div>
  );
};

export default Navbar;