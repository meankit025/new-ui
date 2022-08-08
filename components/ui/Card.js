// import React from "react";
// import "antd/dist/antd.css";
// import { Card } from "antd";

// const Cards = (props) => (
//   <>
//     <Card
//   </>
// );

// export default Cards;



import Planning from "./PlanItem";
import { Carousel } from "antd";

const Card = (props) => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  const { lists } = props;

  return (
    <>
      <div className="container">
        <Carousel afterChange={onChange}>
          {lists.map((list) => (
            <Planning
              key={list.id}
              id={list.id}
              name={list.name}
              descriptation={list.descriptation}
              benifits={list.benifits}
              diseases={list.diseases}
              plan_categories={list.plan_categories}
              productImg={list.productImg}
              trends={list.trends}
            />
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default Card;

