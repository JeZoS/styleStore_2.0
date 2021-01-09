import React from "react";
import MainPage from "../Main/mainpage";
import "./tips.css";
class FashionTips extends React.Component {
  render() {
    return (
      <>
        <MainPage />

        <div className="collection" style={{paddingTop:'100px'}}>
          <h1 className="fashionHeading">Fashion Tips</h1>
          <br></br>
          <p className="fashion">
            Pay attention to what you wear and how you look. Wear things that
            make you feel comfortable and yourself. Don’t dress in a trend that
            isn’t you. The more confident you look, the more confident you’ll
            feel.
            <br></br>
            <br></br>
            Nature sometimes plays tricks on us by gifting some people with an
            ideal body shape, while most get the features they don’t want. Most
            of us always dream of having a perfect body, with no unwanted fat
            around our thighs, waist or face. Still, there is a great army of
            girls who would give everything only to add a couple of pounds to
            desired areas. Luckily, our outfit choices can help us showcase our
            bodies the way we want them to be seen. All we need to remember is
            that each of us represents an individual body shape, which requires
            an individual approach. And for you super skinny girls out there,
            you generally get lucky and have the most perfect fits from designer
            brands, as most designers love creating unique outfits for tiny
            proportions. Here, we discuss a list of fashion tips, who want to
            look fascinating, without the need of gaining weight to fill out
            their wardrobe pieces.
          </p>
          <div className="cardCollection">
            <div className="card">
              <img
                className="image"
                src="https://i.pinimg.com/236x/03/4f/d0/034fd06dd5257e495f40f48135d696fe.jpg"
                alt="Denim Jeans"
              ></img>
              <h1>Tips for Skinny Girls</h1>
              <p>Fashion styling tips and outfit ideas for Skinny girls.</p>
              <p>
                <button className="tips">Tips</button>
              </p>
            </div>
            <div className="card">
              <img
                className="image"
                src="https://i.pinimg.com/236x/fe/05/51/fe05516f06c43a5eae4ee74d4475c6b5.jpg"
                alt="Denim Jeans"
              ></img>
              <h1>Tips for Curvy Girls</h1>
              <p>Fashion Styling Tips and Outfit Ideas for Curvy girls.</p>
              <p>
                <button className="tips">Tips</button>
              </p>
            </div>
            <div className="card">
              <img
                className="image"
                src="https://images.unsplash.com/photo-1550614000-4895a10e1bfd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                alt="Denim Jeans"
              ></img>
              <h1>Tips for Brown Girls</h1>
              <p>Fashion Styling Tips and Outfit Ideas for brown girls .</p>
              <p>
                <button className="tips">Tips</button>
              </p>
            </div>
            <div className="card">
              <img
                className="image"
                src="https://i.pinimg.com/564x/67/9d/8c/679d8c4ee4ccc7116d8c3daabacc8618.jpg"
                alt="Denim Jeans"
              ></img>
              <h1>Ideas for Thin Guys</h1>
              <p>Fashion styling tips and outfit ideas for Skinny guys.</p>
              <p>
                <button className="tips">Tips</button>
              </p>
            </div>
            <div className="card">
              <img
                className="image"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScSE1ugu3k36_qz5idGoBOJCFlKVEW0tljHQ&usqp=CAU"
              ></img>
              <h1>Ideas for Large Man</h1>
              <p>Fashion styling tips and outfit ideas for Large Man.</p>
              <p>
                <button className="tips">Tips</button>
              </p>
            </div>
            <div className="card">
              <img
                className="image"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX2_ZfTun90UvAw--shKXIsmG9on1e6VRo3g&usqp=CAU"
              ></img>
              <h1>Casual Styling Ideas </h1>
              <p>Style your Casual looks to not look casual.</p>
              <p>
                <button className="tips">Tips</button>
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default FashionTips;
