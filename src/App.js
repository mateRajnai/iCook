import React from "react";
import { Layout } from "antd";
import LayoutHeader from "./components/LayoutHeader";
import LayoutFooter from "./components/LayoutFooter";
import "./App.css";
import "antd/dist/antd.css";

function App() {
  return (
    <div className="App">
      <Layout className="layout">
        <LayoutHeader />
        <LayoutFooter />
      </Layout>
    </div>
  );
}

export default App;
