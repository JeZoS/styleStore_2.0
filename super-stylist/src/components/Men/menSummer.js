import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MainPage from "../Main/mainpage";
import { useDispatch, useSelector } from "react-redux";
import "../women/summer.css";
import { getMensSummer } from "../../actions/getProducts";
import axios from "axios";

const SummerMen = () => {
  const [tone, setTone] = useState("");
  const [body, setBody] = useState("");
  const [fltr, setFilter] = useState(false);
  const dispatch = useDispatch();

  const USER = useSelector((state) => state.user);
  const { loggedIn, user } = USER;

  const settonehandler = (e) => {
    setTone(e.target.value);
  };

  const setbodyhandler = (e) => {
    setBody(e.target.value);
  };

  const favHandler = async (id, img) => {
    console.log(id, img);
    if (loggedIn) {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };
      const { data } = await axios.post(`/fav/${id}`, { img }, config);
      console.log(data);
    }
  };

  const MensSummer = useSelector((state) => state.MensSummer);
  const { loading, products } = MensSummer;
  const [data, setData] = useState(products);

  const clearFilter = () => {
    setData(products);
    setFilter(false);
    setTone("");
    setBody("");
  };
  const filter = () => {
    setFilter(true);
    setData(
      products.filter(
        (prod) => prod.skin_tone === tone && prod.body_type === body
      )
    );
  };

  useEffect(async () => {
    dispatch(getMensSummer());
    setData(products);
  }, [dispatch]);

  return (
    <div style={{ position: "relative" }}>
      <MainPage />
      <div className="filter_bar">
        <div className="sidebar">
          <div>
            <h2 style={{ color: "crimson" }}>Filters</h2>
            <h3>Skin Tone</h3>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <input
                style={{ width: "20px", height: "20px" }}
                type="radio"
                id="fair"
                name="skin_tone"
                checked={tone === "fair"}
                value="fair"
                onChange={(e) => {
                  settonehandler(e);
                }}
              ></input>
              <label for="fair">Fair-Medium</label>
            </div>{" "}
            <br />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <input
                style={{ width: "20px", height: "20px" }}
                type="radio"
                id="dark"
                checked={tone === "brown"}
                name="skin_tone"
                value="brown"
                onChange={(e) => {
                  settonehandler(e);
                }}
              ></input>
              <label for="dark">Medium-dark</label>
            </div>
          </div>
          <div>
            <h3>Body Type</h3>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <input
                style={{ width: "20px", height: "20px" }}
                type="radio"
                id="slim"
                name="body_type"
                checked={body === "slim"}
                value="slim"
                onChange={(e) => {
                  setbodyhandler(e);
                }}
              ></input>
              <label for="slim">Slim-Fit</label>
            </div>
            <br />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <input
                style={{ width: "20px", height: "20px" }}
                type="radio"
                id="fat"
                checked={body === "fat"}
                name="body_type"
                value="fat"
                onChange={(e) => {
                  setbodyhandler(e);
                }}
              ></input>
              <label for="fat">Fit-Heavy</label>
            </div>
          </div>
          <button
            className="btn"
            onClick={() => {
              // setData([]);
              clearFilter();
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
        <div className="Loading_Icon">
          <img src="https://img.icons8.com/ios/50/000000/spinner-frame-5.png" />
        </div>
      ) : (
        <div className="summers" style={{ paddingTop: "100px" }}>
          {(fltr ? data : products).map((el, idx) => (
            <div key={idx}>
              <div className="heart">
                <i
                  className="fas fa-heart"
                  onClick={() => {
                    favHandler(el._id, el.src);
                  }}
                  style={{ color: "white" }}
                ></i>
              </div>
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

export default SummerMen;
