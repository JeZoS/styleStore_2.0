import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import MainPage from "../Main/mainpage";
import { getMensWinter } from "../../actions/getProducts";

const MenWinter = () => {
  const settonehandler = (e) => {};

  const setbodyhandler = (e) => {};

  const MensWinter = useSelector((state) => state.MensWinter);

  const { loading, products } = MensWinter;

  const filter = () => {
    // products.filter(prod=> prod.)
  };

  const dispatch = useDispatch();

  useEffect(async () => {
    dispatch(getMensWinter());
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
          <button className="btn" onClick={() => {}}>
            Clear All
          </button>
          <button className="btn" onClick={() => filter()}>
            Apply
          </button>
        </div>
      </div>
      {loading ? (
        <div className="Loading_Icon">
          <img src="https://img.icons8.com/ios/50/000000/spinner-frame-5.png" />
        </div>
      ) : (
        <div className="summers">
          {products.map((el, idx) => (
            <div key={idx}>
              <Link to="#">
                <div className="heart">
                  <i className="fas fa-heart" style={{ color: "white" }}></i>
                </div>
              </Link>
              <img src={el.src}></img>
              <Link
                to={{
                  pathname: `/product/${el._id}`,
                  // state: { url: data[idx], season: "winter" },
                }}
              >
                <h4 style={{ backgroundColor: "crimson", color: "white" }}>
                  Explore
                </h4>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MenWinter;
