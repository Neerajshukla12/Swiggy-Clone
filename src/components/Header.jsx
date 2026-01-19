import React from 'react';

const Header = () => {
    return (
        <header className="bg-[#ff5200] font-serif">
            <div className="flex items-center justify-between container mx-auto py-8">

                {/* Logo */}
                <img
                    alt="Swiggy"
                    className="w-40 h-12"
                    loading="lazy"
                    src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png"
                />

                {/* Right Links */}
                <div className="flex items-center gap-15 text-white font-bold mx-15 ">

                    <a
                        href="https://www.swiggy.com/corporate/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Swiggy Corporate
                    </a>

                    <a
                        href="https://partner.swiggy.com/login#/swiggy"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Partner with us
                    </a>

                    <a href="#" className="flex items-center border border-white px-4 py-2 rounded-2xl gap-1">
                        Get the App
                        <span style={{ lineHeight: 0 }}>
                            <svg
                                width="21"
                                height="21"
                                viewBox="0 0 21 21"
                                fill="none"
                            >
                                <path
                                    d="M12.634 3.45a1 1 0 0 0-1.365 1.462l4.827 4.506c.238.221.44.41.614.577H2.996a1 1 0 0 0 0 2h13.777c-.186.18-.41.39-.677.64l-4.769 4.45a1 1 0 0 0 1.365 1.462l4.817-4.495c.546-.51 1.03-.96 1.367-1.376.365-.449.664-.979.664-1.65 0-.672-.299-1.201-.664-1.65-.338-.415-.821-.866-1.367-1.376z"
                                    fill="#FFFFFF"
                                    fillOpacity="0.92"
                                />
                            </svg>
                        </span>
                    </a>

                    <button className="border  px-4 py-2 rounded-xl bg-black">
                        Sign in
                    </button>

                </div>
            </div>
            <div className='pt-16 pb-8 relative'>
                <img className='h-110 w-60 absolute top-0 left-0' src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png' />
                <img className='h-110 w-60 absolute top-0 right-0' src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png' />
                <div className="max-w-[60%] text-4xl text-white font-bold mx-auto container text-center">
                    Order food & groceries. Discover best restaurants. Swiggy it!
                </div>

                <div className=' flex max-w-[70%] container mx-auto gap-5 mt-5'>
                    <input className='bg-white w-[40%] text-xl px-6 py-4 rounded-2xl' placeholder='Delhi,India'></input>
                    <input className='bg-white w-[50%] text-xl px-6 py-4 rounded-2xl' placeholder='Search for restaurant, item or more'></input>
                </div>

            </div>
            <div className=' flex max-w-[80%] container mx-auto'>
                <a href='https://www.swiggy.com/restaurants'>
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png" />
                </a>
                <a href='https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1'>
                    <img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.png' />
                </a>
                <a href='https://www.swiggy.com/dineout'>
                    <img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png' />
                </a>
            </div>
        </header>
    );
};

export default Header;
