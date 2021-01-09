import React, { useEffect, useState } from "react";
import "./singleprod.css";
import { useParams } from "react-router-dom";
import MainPage from "../Main/mainpage";
import axios from "axios";

const SingleProd = () => {
  const params = useParams();
  const [prodData, setProdData] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(async () => {
    setLoading(true);
    const result = await axios.get("/products/" + params.id);
    //console.log(result.data[0])
    setProdData(result.data[0]);
    setLoading(false);
  }, []);

  // const loc = useLocation();
  // const url = loc.state.url;
  return (
    <>
      <MainPage />
      {loading ? (
        <div>Loading</div>
      ) : (
        <div className="singleitem" style={{ paddingTop: "120px" }}>
          <img src={prodData.src} alt="none"></img>
          <div className="item_description">
            <div className="title_rating">
              <h1 style={{ color: "crimson", fontWeight: "bold" }}>
                {prodData.statement}
              </h1>
              <span>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </span>
            </div>
            <h3>{prodData.ocassion}</h3>
            <h2>{prodData.suggestion}</h2>

            <div>
              <button className="btn">check Occasion</button>
              <button className="btn btn2">Add to Favourites</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SingleProd;
