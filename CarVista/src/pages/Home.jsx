import React from "react";
import { useNavigate } from "react-router-dom";
import ReviewCard from "../components/ReviewCard";
import BuyCarCard from "../components/BuyCarCard";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      {/*Hero */}
      <section className="hero bg-cover bg-center h-screen flex items-center justify-start bg-slate-300">
        <div className="text-gray-800 flex flex-col items-start max-w-4xl mx-auto px-6">
          <div className="text-2xl md:text-4xl font-bold mb-4">
            Fast and Easy Way to <br /> Buy and Sell Cars
          </div>
          <div className="mb-4 text-base md:text-sm w-[40vw]">
            Discover your dream car faster and easier with us. We are the most
            trusted online destination for buying and selling cars, offering a
            seamless experience from start to finish. Whether you're looking to
            upgrade or find your first vehicle, our platform ensures
            transparency and reliability at every step. Explore our wide
            selection of vehicles and let us help you drive into the future with
            confidence.
          </div>
          <div className="space-x-4">
            <button
              onClick={() => navigate("/buy")}
              className="px-6 py-3 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 hover:font-bold transform hover:scale-105 transition duration-300"
            >
              Buy
            </button>
            <button
              onClick={() => navigate("/sell")}
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 hover:font-bold transform hover:scale-105 transition duration-300"
            >
              Sell
            </button>
          </div>
        </div>
      </section>

      {/* Buy car */}
      <section className="bg-slate-500 h-screen flex flex-col justify-around">
        <div className="text-xl font-bold mb-4 text-center">
          Best Selling Cars
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <BuyCarCard />
          <BuyCarCard />
          <BuyCarCard />
        </div>
        <div className="flex justify-center items-center">
          <button
            onClick={() => navigate("/buy")}
            className="mt-4 px-6 py-3 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 hover:font-bold transform hover:scale-105 transition duration-300"
          >
           See More
          </button>
        </div>
      </section>

      {/*Sell car */}
      <section className="bg-slate-300 h-screen flex flex-col justify-around items-center">
        <div className="text-xl font-bold mb-4 text-center">
          Best price is our guarrentee
        </div>
        <div className="w-[50vw] flex h-[50vh]">
          <p className="text-center">
            Experience hassle-free selling with us! At our platform, we ensure
            you get the best price for your car without the stress. From listing
            to closing the deal, our streamlined process guarantees transparency
            and efficiency. Whether you're upgrading or parting ways with your
            trusted vehicle, trust us to handle the details while you focus on
            what matters most. Sell your car confidently knowing you're in good
            hands, and discover just how simple and rewarding selling your car
            can be with our dedicated team by your side.
          </p>
        </div>

        <div className="flex justify-center items-center">
          <button
            onClick={() => navigate("/sell")}
            className="mt-4 px-6 py-3 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 hover:font-bold transform hover:scale-105 transition duration-300"
          >
            Sell Now
          </button>
        </div>
      </section>
      {/*reviews */}
      <section className="bg-slate-500 h-screen flex flex-col justify-around">
        <div className="text-xl font-bold mb-4 text-center">
          Reviews from our customers
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </div>
        <div className="flex justify-center items-center">
          <button
            onClick={() => navigate("/reviews")}
            className="mt-4 px-6 py-3 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 hover:font-bold transform hover:scale-105 transition duration-300"
          >
            See more reviews
          </button>
        </div>
      </section>
      {/*about us & contact */}
      <section id="AboutContact" className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8">
            {/* About Section */}
            <div className="md:w-1/2">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
                  About Us
                </h2>
                <p className="text-lg text-center md:text-left">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  convallis libero quis suscipit blandit. Cras auctor lobortis
                  risus, non posuere nisi pretium eget. Proin consequat nisl
                  tincidunt augue tincidunt, et elementum enim semper.
                </p>
              </div>
            </div>
            {/* Contact Form Section */}
            <section className="md:w-1/2 h-screen bg-slate-300">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
                  Contact Us
                </h2>
                <form
                  className="space-y-4"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg bg-gray-200 focus:outline-none focus:bg-white"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-lg bg-gray-200 focus:outline-none focus:bg-white"
                      placeholder="Your Email"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg bg-gray-200 focus:outline-none focus:bg-white"
                      placeholder="Subject"
                    />
                  </div>
                  <div>
                    <textarea
                      className="w-full px-4 py-3 rounded-lg bg-gray-200 focus:outline-none focus:bg-white"
                      rows="4"
                      placeholder="Your Message"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
