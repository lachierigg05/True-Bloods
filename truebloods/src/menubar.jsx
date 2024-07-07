import React from "react";

const Header = () => {
  return (
    <nav class="flex justify-between bg-truebloods-red h-28 w-full">
      <a
        href="https://truebloods.com.au"
        class="flex items-center space-x-10 mx-4"
      >
        <img
          src="./src/assets/TrueBloods_CMYK_Master.jpg"
          class="h-24 w-24 rounded-full"
          alt="Truebloods Logo"
        />
        <span class="text-center text-lg text-white w-60">
          The #1 Independent Sydney Swans Fan Podcast
        </span>
      </a>
      <div class="flex justify-around items-center ">
        <button className="h-10 w-42 bg-white text-truebloods-red text-sm font-bold py-2 px-4 rounded transform transition duration-500 hover:scale-105">
          SHOP
        </button>
        <button className="h-10 w-42 bg-white text-truebloods-red text-sm font-bold py-2 px-4 rounded transform transition duration-500 hover:scale-105">
          CONTACT
        </button>
      </div>
    </nav>
  );
};

export default Header;
