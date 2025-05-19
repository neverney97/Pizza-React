import React from 'react'
import image1 from '../assets/home.jpg'
import image2 from '../assets/Margherita.jpg'
import image3 from '../assets/pepperoni.jpg'
import image4 from '../assets/BBQ-Chicken.jpg'
import image5 from '../assets/Veggie.jpg'

const Hero = () => {
  return (
    <div>
      <main>
          <div class="flex flex-col relative items-center w-full h-full justify-center overflow-hidden">
            <div class="flex flex-col items-center text-white absolute">
              <h1 class="text-base sm:text-2xl md:text-4xl lg:text-6xl tracking-wide font-bold mb-10">
                Delicious Pizza, Freshly Baked
              </h1>
              <h4 class="text-base sm:text-xl md:text-2xl lg:text-3xl text-center tracking-wide mb-10">
                Experience the taste of authentic pizza made with love.
              </h4>
              <div class="flex flex-col items-center bg-red-500 w-1/4 rounded-[10px] w-40">
                <button class="h-10 hover:bg-red-700 text-white rounded-[10px] w-full">
                  Order Now
                </button>
            </div>
          </div>
          <div>
            <img class="w-full h-full" src={image1} alt='Home Image'/>
          </div>
        </div>
        <br/>
        <section class="bg-slate-200">
            <div class="flex grid sm:grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-4 justify-between p-10">
            <div class="p-5 pr-10">
              <h1 class="text-4xl tracking-wide font-bold">About Us</h1>
              <br/>
              <p>
                Welcome to our pizza paradise! We are passionate about delivering the freshest, tastiest pizzas made with love. Our mission is to bring joy to your taste buds with every bite. Experience the difference with our hand-crafted recipes and finest ingrediants.
              </p>
              
              <button className="flex flex-col justify-center items-center bg-red-500 w-1/5 rounded-[10px] w-40 h-10 text-white hover:bg-red-700">Learn More</button>
            </div>
            <div class="w-11/12">
              <img class="rounded-[12px]" src={image1} alt='Home Image'/>
            </div>
          </div>
          <h1 class="text-4xl tracking-wide font-bold text-center">
            Types of Pizza
          </h1>
          <div class="flex grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div class="m-10 bg-white shadow-xl rounded-[12px]">
              <img class="w-full object-cover rounded-t-[12px]" src={image2} alt="Margharita"/>
              <h1 class="text-center font-bold w-full py tracking-widest">Margherita Pizza</h1>
              <p class="text-center p-2">A classic pizza with fresh tomatoes, mozzarella, basil, and a drizzle of olive oil.</p>
            </div>
            <div class="m-10 bg-white shadow-xl rounded-[12px]">
              <img class="w-full object-cover rounded-t-[12px]" src={image3} alt="Pepperoni"/>
              <h1 class="text-center font-bold w-full tracking-widest">Pepperoni Pizza</h1>
              <p class="text-center p-2">A crowd favorite topped with spicy pepperoni and melting mozzarella cheese.</p>
            </div>
            <div class="m-10 bg-white shadow-xl rounded-[12px]">
              <img class="w-full object-cover rounded-t-[12px]" src={image4} alt="BBQ Chicken"/>
              <h1 class="text-center font-bold w-full tracking-widest">BBQ Chicken Pizza</h1>
              <p class="text-center p-2">Savory barbecue sauce, tender chicken pieces, red onions, and fresh cilantro.</p>
            </div>
            <div class="m-10 bg-white shadow-xl rounded-[12px]">
              <img class="w-full object-cover rounded-t-[12px]" src={image5} alt="Veggie"/>
              <h1 class="text-center font-bold w-full tracking-widest">Veggie Pizza</h1>
              <p class="text-center p-2">Loaded with fresh veggies like bell peppers, onions, olives, and mushrooms</p>
            </div>
          </div>
        </section>
	    </main>
    </div>
  )
}

export default Hero