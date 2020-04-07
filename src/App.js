import React from "react";
import { Layout as AntLayout } from "antd";
import LayoutHeader from "./components/LayoutHeader";
import LayoutFooter from "./components/LayoutFooter";
import "./App.css";
import "antd/dist/antd.css";
import SearchByKeyword from "./components/SearchByKeyword";

function App() {
  const { Content } = AntLayout;

  return (
    <div className="App">
      <AntLayout className="layout">
        <LayoutHeader />
        <Content style={{ margin: "150px 20px 100px 20px" }}>
          <SearchByKeyword />
        </Content>
        <LayoutFooter />
      </AntLayout>
    </div>
  );
}

export default App;
