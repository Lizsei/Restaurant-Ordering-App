'use client'

import React from 'react';
import { featuredRestaurants, Dish, Restaurant } from '@/data'; // adjust this path based on where your data is located
import Image from 'next/image';


type PageProps = {
    params: {
      id: string;
    };
  };
  
  const findRestaurantById = (id: number, restaurants: Restaurant[]): Restaurant | undefined => {
    return restaurants.find(restaurant => restaurant.id === id);
  };
  
  const RestaurantPage: React.FC<PageProps> = ({ params }) => {
    const id = parseInt(params.id, 10);
    const restaurant = findRestaurantById(id, featuredRestaurants);
  
    if (!restaurant) {
      return <div>Restaurant not found</div>;
    }




    return (
      <div className='flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-orange-50'>
        {/* TEXT CONTAINER */}
        <div className='flex-1 flex items-center justify-center flex-col gap-8 text-orange-600 font-bold '>
          <h1 className='text-5xl text-center uppercase p-4 md:p-10 md:text-6xl xl:text-7xl'>
            {restaurant.title}
          </h1>
  
          <p className='text-center p-4 md:p-10'>
            {restaurant.desc}
          </p>
        </div>
  
        {/* IMAGE CONTAINER */}
        <div className='w-full flex-1 relative'>
          {restaurant.img ? (
            <img src={restaurant.img} alt={restaurant.title} className='object-cover w-full h-full' />
          ) : null}
        </div>
  
        {/* DISH LIST */}
        <div className='w-full flex-1 p-8'>
          <h2 className='text-3xl text-orange-600 font-bold mb-4'>Menu</h2>
          <ul>
            {restaurant.dishes.map((dish: Dish) => (
              <li key={dish.id} className='border p-4 mb-4 text-orange-600'>
                <h3 className='text-xl font-bold'>{dish.title}</h3>
                <p className='text-sm'>{dish.desc}</p>
                <p className='text-sm'>{`Price: $${dish.price}`}</p>
                {dish.img ? (
                  <img src={dish.img} alt={dish.title} className='object-cover w-48 h-32 mt-4' />
                ) : null}
                <button className='bg-orange-600 text-white py-2 px-4 mt-4 rounded-md'>
                  Add to Cart
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  
  export default RestaurantPage;