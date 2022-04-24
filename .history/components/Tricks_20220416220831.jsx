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
       {tricks.map((trick)=)}
        </div>
       
      </Carousel>
    </>
  );
};

export default Tricks;
