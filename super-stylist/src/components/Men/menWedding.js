import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MainPage from "../Main/mainpage";
import { useDispatch, useSelector } from "react-redux";
import "../women/summer.css";
import { getMensWedding } from "../../actions/getProducts";

const WeddingMen = () => {
  const [tone, setTone] = useState("");
  const [body, setBody] = useState("");

  const settonehandler = (e) => {
    setTone(e.target.value);
  };

  const setbodyhandler = (e) => {
    setBody(e.target.value);
  };

  const MensWedding = useSelector((state) => state.MensWedding);
  const { loading, products } = MensWedding;

  const filter = () => {};

  const dispatch = useDispatch();

  useEffect(async () => {
    dispatch(getMensWedding());
  }, [dispatch]);

  return (
    <div style={{ position: "relative" }}>
      <MainPage />
      <div className="filter_bar">
        <div className="sidebar">
          <div>
            <h2 style={{ color: "crimson" }}>Filters</h2>
            <h3>Skin Tone</h3>

            <input
              type="radio"
              id="fair"
              name="skin_tone"
              value="fair"
              onChange={(e) => {
                settonehandler(e);
              }}
            ></input>
            <label for="fair">Fair-Medium</label>
            <br />
            <input
              type="radio"
              id="dark"
              name="skin_tone"
              value="brown"
              onChange={(e) => {
                settonehandler(e);
              }}
            ></input>
            <label for="dark">Medium-dark</label>
          </div>
          <div>
            <h3>Body Type</h3>

            <input
              type="radio"
              id="slim"
              name="body_type"
              value="slim"
              onChange={(e) => {
                setbodyhandler(e);
              }}
            ></input>
            <label for="slim">Slim-Fit</label>
            <br />

            <input
              type="radio"
              id="fat"
              name="body_type"
              value="fat"
              onChange={(e) => {
                setbodyhandler(e);
              }}
            ></input>
            <label for="fat">Fit-Heavy</label>
          </div>
          <button
            className="btn"
            onClick={() => {
              // setData([]);
            }}
          >
            Clear All
          </button>
          <button className="btn" onClick={() => filter()}>
            Apply
          </button>
        </div>
      </div>
      {loading ? (
        <div>LOADING</div>
      ) : (
        <div className="summers" style={{ paddingTop: "100px" }}>
          {products.map((el, idx) => (
            <div key={idx}>
              <Link to="#">
                <div className="heart">
                  <i className="fas fa-heart" style={{ color: "white" }}></i>
                </div>
              </Link>
              <img src={el.src} alt="f"></img>
              <Link to={`/product/${el._id}`}>
                <h4>Explore</h4>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WeddingMen;
