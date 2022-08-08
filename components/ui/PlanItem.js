import React from "react";
import { Col, Row, Slider } from "antd";
import classes from "./PlanItem.module.css";
import { Divider, Tag } from "antd";

const Planning = (props) => {
  const {
    name,
    descriptation,
    benifits,
    productImg,
    diseases,
    plan_categories,
    trends,
  } = props;

  // <Tag color="magenta">magenta</Tag>
  return (
    <Row className="text-center">
      <Col span={12}>
        <img className={classes.img} src={productImg} alt={name} />
      </Col>
      <Col span={12}>
        <Tag color="magenta">
          <h2>{name}</h2>
        </Tag>

        <p>{descriptation}</p>

        <Tag color="magenta">
          <h2>Benefits:</h2>
        </Tag>

        <ul>
          {Object.values(benifits).map((items) => {
            return (
              <>
                <li>{items}</li>
              </>
            );
          })}
        </ul>
        <Tag color="magenta">
          <h2>Diseases:</h2>
        </Tag>
        <p>{diseases.join(" , ")}</p>
        <Tag color="magenta">
          <h2>Plan Categories</h2>
        </Tag>
        <p>{plan_categories.join(" , ")}</p>
        <Tag color="magenta">
          <h2>Trends</h2>
        </Tag>
        <ul>
          {Object.values(trends).map((items) => {
            return (
              <>
                <li>{items}</li>
              </>
            );
          })}
        </ul>
      </Col>
    </Row>
  );
};

export default Planning;
