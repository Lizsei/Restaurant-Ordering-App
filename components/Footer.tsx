import Link from "next/link";
import React from 'react'

const Footer = () => {
  return (
    <div className="min-h-12 md:min-h-24 p-4 lg:px-20 xl:px-40 text-blue-600 flex items-center justify-between flex-wrap overflow-hidden">
      <Link href="/" className="font-bold text-xl">ZIP LOCAL DISH</Link>
      <p>© 2023 ALL RIGHTS RESERVED.</p>
    </div>
  );
}
;
export default Footer;