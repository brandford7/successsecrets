import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Tricks = () => {

     const tricks = [
       {
         title: "Division 4x4",
         logo: "",
         link: "",
       },
       {
         title: "5x5 Bundesliga LFL",
         logo: "",
         link: "",
       },
       {
         title: "Cameroon CUF Cup",
         logo: "",
         link: "",
       },
       {
         title: "Fifa 22 Cyber Champions Cup",
         logo: "",
         link: "",
       },
     ];

  return (
    <>
      <Carousel
        showArrows={true}
        onChange={onChange}
        onClickItem={onClickItem}
        onClickThumb={onClickThumb}
      >
        <div>
          <img src="assets/1.jpeg" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src="assets/2.jpeg" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src="assets/3.jpeg" />
          <p className="legend">Legend 3</p>
        </div>
        <div>
          <img src="assets/4.jpeg" />
          <p className="legend">Legend 4</p>
        </div>
        <div>
          <img src="assets/5.jpeg" />
          <p className="legend">Legend 5</p>
        </div>
        <div>
          <img src="assets/6.jpeg" />
          <p className="legend">Legend 6</p>
        </div>
      </Carousel>
    </>
  );
};

export default Tricks;
