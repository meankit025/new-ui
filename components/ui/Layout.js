import React from "react";
import "antd/dist/antd.css";
import "./Layouts.module.css";
import { Layout } from "antd";
import Cards from "./Card";

const { Header, Footer, Content } = Layout;

const Layouts = (props) => (
  <>
    <Layout>
      <Header>Header</Header>
      <Content style={{ textAlign: "center" }}>{props.children}</Content>
      <Footer style={{'textAlign': 'center'}}>© Star Health Insurance . All rights reserved .</Footer>
    </Layout>
  </>
);

export default Layouts;
