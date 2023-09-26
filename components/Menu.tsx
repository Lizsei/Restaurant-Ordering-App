"use client";

import React, { useState } from "react";
import Image from 'next/image';
import Link from "next/link";
import CartIcon from "./Carticon"

const links = [
    { id: 1, title: "Homepage" , url: "/" },
    { id: 2, title: "Sign Up" , url: "/" },
    { id: 3, title: "Log Out" , url: "/" },
];

const Menu = () => {
    const [open, setOpen] = useState(false);

    //TEMPORARY
    const user = false;

  return (
    <div>
        {/* {!open ? (
             <Image src="/menuorange.jpeg" alt="Menu icon" width={30} height={30} onClick={() => setOpen(true)} />
        ) : (
            <Image src="/closeorangex.png" alt="Close icon" width={30} height={30} onClick={() => setOpen(false)} />
        )} */}

        {/* SHORTER WAY THAN ABOVE */}

        <Image
        src={open ? "/closeorangex.png" : "/menuorange.jpeg"}
        alt=""
        width={30}
        height={30}
        onClick={() => setOpen(!open)}
        className="cursor-pointer"
      />


       
       {open && (
       <div className= "bg-orange-600 text-white absolute left-0 top-24 w-full h-[calc(100vh-6rem)] flex flex-col gap-8 items-center justify-center text-3xl z-10" >
          {links.map((item) => (
            <Link href={item.url} key={item.id} onClick={()=>setOpen(false)}>
                {item.title}
            </Link>
         ))}

         {/* LONGER WAY *?}
        {!user ? (
            <Link href="/login" onClick={()=>setOpen(false)}>Login</Link>
        ) : (
          <Link href="/orders" onClick={()=>setOpen(false)}>Orders</Link>
        )}
        <Link href="/cart" onClick={()=>setOpen(false)}>Cart</Link> */}

        {/* SHORTER WAY TO DO IT */}

        <Link href={user ? "/order" : "login"}
              onClick={() => setOpen(false)}
              >
                {user ? "Orders" : "Login"}
              </Link>
            <Link href="/cart" onClick={() => setOpen(false)}>
                <CartIcon />
            </Link>
        </div> 
        )}
    </div>
  );
};

export default Menu;