import React from "react";
import "./slideshow.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const SlideShow = () => {
  return (
    <div>
      <Carousel className="react_carousel">
        <div>
          <img src="https://s3.ap-south-1.amazonaws.com/mebaz-staging/Category_images/82/original/Inner_Wedding_Banner.jpg?1548913610" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src="https://cdn.shopify.com/s/files/1/0268/9715/4090/files/Banner_cd27938c-b290-4549-9fde-c29747ae5959_1944x.jpg?v=1603776122" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src="https://www.selectfashion.co.uk/templates/selectfashion.co.uk.new/assets/images/landing/plussize/banner.jpg" />
          <p className="legend">Legend 3</p>
        </div>
        <div>
          <img src="https://elle.in/wp-content/uploads/2019/09/banner-image-ELLE-INDIA-11.jpg" />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </div>
  );
};

export default SlideShow;
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// class SlideShow extends React.Component {
//   render() {
//     return (
//       <div style={{ paddingTop: "100px" }}>
//         <div className="contain">
//           <div id="myCarousel" className="carousel slide" data-ride="carousel">
//             <ol className="carousel-indicators">
//               <li
//                 data-target="#myCarousel"
//                 data-slide-to="0"
//                 className="active"
//               ></li>
//               <li data-target="#myCarousel" data-slide-to="1"></li>
//               <li data-target="#myCarousel" data-slide-to="2"></li>
//             </ol>

//             <div className="carousel-inner">
//               <div className="item active" id="item-active">
//                 <img
// src="https://s3.ap-south-1.amazonaws.com/mebaz-staging/Category_images/82/original/Inner_Wedding_Banner.jpg?1548913610"
//                   alt="Los Angeles"
//                   style={{ width: "100% ", height: "550px", zIndex: "-1" }}
//                 />
//               </div>

//               <div className="item">
//                 <img
// src="https://cdn.shopify.com/s/files/1/0268/9715/4090/files/Banner_cd27938c-b290-4549-9fde-c29747ae5959_1944x.jpg?v=1603776122"
//                   alt="Chicago"
//                   style={{ width: "100%", height: "550px", zIndex: "-1" }}
//                 />
//               </div>
//               <div className="item">
//                 <img
// src="https://www.selectfashion.co.uk/templates/selectfashion.co.uk.new/assets/images/landing/plussize/banner.jpg"
//                   alt="New york"
//                   style={{ width: "100%", height: "550px" }}
//                 />
//               </div>

//               <div className="item">
//                 <img
// src="https://elle.in/wp-content/uploads/2019/09/banner-image-ELLE-INDIA-11.jpg"
//                   alt="New york"
//                   style={{ width: "100%", height: "550px" }}
//                 />
//                 <span className="ban"></span>
//                 <span className="banner">
//                   Stying Tips from Fashion Bloggers
//                 </span>
//               </div>
//             </div>

//             <a
//               className="left carousel-control"
//               href="#myCarousel"
//               data-slide="prev"
//             >
//               <span className="glyphicon glyphicon-chevron-left"></span>
//               <span className="sr-only">Previous</span>
//             </a>
//             <a
//               className="right carousel-control"
//               href="#myCarousel"
//               data-slide="next"
//             >
//               <span className="glyphicon glyphicon-chevron-right"></span>
//               <span className="sr-only">Next</span>
//             </a>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default SlideShow;
