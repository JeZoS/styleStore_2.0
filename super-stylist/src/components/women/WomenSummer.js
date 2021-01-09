import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getWomensSummer } from "../../actions/getProducts";
import MainPage from "../Main/mainpage";
import "./summer.css";

const SummerWomen = () => {
  const dispatch = useDispatch();

  const WomenSummer = useSelector((state) => state.WomenSummer);

  const { loading, products } = WomenSummer;

  useEffect(() => {
    dispatch(getWomensSummer());
  }, [dispatch]);

  return (
    <div>
      <MainPage />

      <div className="filter_bar">
        <div className="sidebar">
          <div>
            <h2 style={{ color: "crimson" }}>Filters</h2>
            <h3>Skin Tone</h3>

            <input type="radio" id="fair" name="skin_tone" value="fair"></input>
            <label for="fair">Fair-Medium</label>
            <br />

            <input
              type="radio"
              id="dark"
              name="skin_tone"
              value="brown"
            ></input>
            <label for="dark">Medium-dark</label>
          </div>
          <div>
            <h3>Body Type</h3>

            <input type="radio" id="slim" name="body_type" value="slim"></input>
            <label for="slim">Slim-Fit</label>
            <br />

            <input type="radio" id="fat" name="body_type" value="fat"></input>
            <label for="fat">Fit-Heavy</label>
          </div>
          <button className="btn">Clear All</button>
          <button className="btn">Apply</button>
        </div>
      </div>
      <div className="summers">
        {products.map((el, idx) => (
          <div key={idx}>
            <Link to="#">
              <div className="heart">
                <i className="fas fa-heart" style={{ color: "white" }}></i>
              </div>
            </Link>
            <img src={el.src} alt="f"></img>
            <Link
              to={{
                pathname: `/product/${el._id}`,
                // state: { url: data[idx], season: "summer" },
              }}
            >
              <h4>Explore</h4>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SummerWomen;
