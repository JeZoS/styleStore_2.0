import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import MainPage from "../Main/mainpage";

const WomenWinter = () => {
  const [red, setRed] = useState(false);
  const data = [
    "https://img.faballey.com/Images/Product/JAC00484Z/1.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpYyRTRKwp_PCWEkXxJQQhEHmG1Uoxnp5O8Q&usqp=CAU",
    "https://4.imimg.com/data4/LS/UK/MY-21972370/ladies-winter-garment-250x250.jpg",
    "https://www.andindia.com/media/catalog/product/cache/a8e60f747ccf7a1531bde73b3776ea07/a/n/and__slate_blue__top_fw20at117tfk_4.jpg",
    "https://admintcns.wforwoman.com/product/18NOW11605-P210445/300/18NOW11605_P210445_1.JPG",
    "https://www.globaldesi.in/media/catalog/product/cache/4adadb463f2970af188d1546d78eb3dd/g/l/global_desi_charcoal_shrug_fw20gh104shfk_6.jpg",
    "https://pantaloons.imgix.net/img/app/product/4/443023-2906559.jpg?w=618&auto=format",
    "https://img.faballey.com/Images/Product/SHG00045Z/d3.jpg",
    "https://i.pinimg.com/originals/76/b5/7f/76b57f4388e1d8662ae70d23678b9abe.jpg",
    "https://img3.junaroad.com/uiproducts/17341437/pri_175_p-1602078793.jpg",
    "https://i.pinimg.com/originals/ed/d3/5a/edd35a638678a6a98a92e7b668a3d713.jpg",
    "https://img.looksgud.com/upload/item-image/2257/1cdlk/1cdlk-outtop-tm-winter-wear-women-s-coats-fashion-winter-women-solid_500x500_1.jpg",
    "https://assetscdn1.paytm.com/images/catalog/product/A/AP/APPCLUB-YORK-WOCLUB208357A4AD69C/1563068914969_0..jpg",
  ];
  return (
    <div>
      <MainPage />
      <div className="summers">
        {data.map((el, idx) => (
          <div key={idx}>
            <Link to="#">
              <div
                className="heart"
                onClick={() => {
                  setRed(!red);
                }}
              >
                <i
                  className="fas fa-heart"
                  style={{ color: red ? "red" : "white" }}
                ></i>
              </div>
            </Link>
            <img src={data[idx]}></img>
            <Link
              to={{
                pathname: `/product/${idx}`,
                state: { url: data[idx], season: "winter" },
              }}
            >
              <h4 style={{ backgroundColor: "crimson", color: "white" }}>
                Explore
              </h4>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WomenWinter;
