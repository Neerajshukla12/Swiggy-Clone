import React, { useEffect, useState } from "react";

const Header = () => {
  const [location, setLocation] = useState("Fetching location...");

  useEffect(() => {
    // Check if geolocation is available
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            // Use a reverse geocoding API to get city name
            const response = await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
            );
            const data = await response.json();
            const city = data.address.city || data.address.town || data.address.state;
            setLocation(city + ", India");
          } catch (error) {
            console.error(error);
            setLocation("Delhi, India"); // fallback
          }
        },
        (error) => {
          console.error(error);
          setLocation("Delhi, India"); // fallback
        }
      );
    } else {
      setLocation("Delhi, India"); // fallback
    }
  }, []);

  return (
    <header className="bg-[#ff5200] font-serif">
      {/* navBar  */}
      <div className="flex items-center justify-between container mx-auto py-8 ">
        {/* Logo */}
        <img
          alt="Swiggy"
          className="w-40 h-12 mx-auto"
          loading="lazy"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png"
        />

        {/* Right Links */}
        <div className="flex items-center gap-15 text-white font-bold mx-15 ">
          <a href="https://www.swiggy.com/corporate/" target="_blank" rel="noopener noreferrer">
            Swiggy Corporate
          </a>
          <a href="https://partner.swiggy.com/login#/swiggy" target="_blank" rel="noopener noreferrer">
            Partner with us
          </a>
          <a
            href="#"
            className="flex items-center border border-white px-4 py-3 rounded-2xl gap-1"
          >
            Get the App
          </a>
          <button className="border px-4 py-3 rounded-xl bg-black border-none">Sign in</button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="pt-16 pb-8 relative">
        <img
          className="h-110 w-50 absolute top-0 left-0"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"
        />
        <img
          className="h-110 w-55 absolute top-0 right-0"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"
        />
        <div className="max-w-[65%] text-5xl text-white font-bold mx-auto container text-center">
          Order food & groceries. Discover best restaurants. Swiggy it!
        </div>

        {/* Inputs */}
        <div className="flex max-w-[70%] container mx-auto gap-5 mt-8">
          <input
            className="bg-white w-[40%] text-xl px-6 py-4 rounded-2xl"
            placeholder="Location"
            value={location}
            readOnly
          />
          <input
            className="bg-white w-[56%] text-xl px-6 py-4 rounded-2xl"
            placeholder="Search for restaurant, item or more"
          />
        </div>
      </div>

      {/* Merch Banners */}
      <div className="flex max-w-[85%] container mx-auto">
        <a href="https://www.swiggy.com/restaurants">
          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png" />
        </a>
        <a href="https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1">
          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.png" />
        </a>
        <a href="https://www.swiggy.com/dineout">
          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png" />
        </a>
      </div>
    </header>
  );
};

export default Header;
