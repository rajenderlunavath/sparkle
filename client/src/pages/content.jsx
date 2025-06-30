import React, { useEffect } from "react";
import "./css/content.css";
import { Helmet } from "react-helmet";

const Content = () => {
  // You can fetch or manage your clothing and accessories data here
  // For demonstration, using empty arrays as placeholders
  const [clothingItems, setClothingItems] = React.useState([]);
  const [accessoriesItems, setAccessoriesItems] = React.useState([]);

  useEffect(() => {
    // Example: Fetch data from an API or local storage
    // For now, simulate with empty arrays
    setClothingItems([]);
    setAccessoriesItems([]);
  }, []);

  return (
    <>
      <Helmet>
        <title>CONTENT | E-COMMERCE WEBSITE BY EDYODA</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link
          href="https://fonts.googleapis.com/css?family=Lato&display=swap"
          rel="stylesheet"
        />
        <link
          rel="icon"
          href="https://yt3.ggpht.com/a/AGF-l78km1YyNXmF0r3-0CycCA0HLA_i6zYn_8NZEg=s900-c-k-c0x00000000-no-rj-mo"
          type="image/gif"
          sizes="16x16"
        />
      </Helmet>

      <main id="mainContainer">
        <h1>clothing for men and women</h1>
        <div id="containerClothing">
          {clothingItems.length === 0 ? (
            <p>No clothing items found.</p>
          ) : (
            clothingItems.map((item, index) => (
              <div key={index} className="clothing-item">
                {/* Customize item display */}
                <h3>{item.name}</h3>
                <p>Price: ${item.price}</p>
              </div>
            ))
          )}
        </div>

        <h1>accessories for men and women</h1>
        <div id="containerAccessories">
          {accessoriesItems.length === 0 ? (
            <p>No accessories items found.</p>
          ) : (
            accessoriesItems.map((item, index) => (
              <div key={index} className="accessory-item">
                {/* Customize item display */}
                <h3>{item.name}</h3>
                <p>Price: ${item.price}</p>
              </div>
            ))
          )}
        </div>
      </main>
    </>
  );
};

export default Content;
