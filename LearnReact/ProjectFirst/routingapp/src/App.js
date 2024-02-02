
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./components/Home";
import Product from "./components/Product";
import Contact from "./components/Contact";
import  GitApi  from "./components/GitApi";
import UseEffectFn from "./components/UseEffectFn";
import UseMemoFn from "./components/UseMemoFn";
import UseReducerFn from "./components/UseReducerFn";
import { Users } from "./components/GetRequest";
import { PostUser } from "./components/PostRequest";
import { PageNotFound } from "./components/PageNotFound";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from 'react-bootstrap/Nav';

function App() {
 

  return (
    <Router>
      <Nav defaultActiveKey="/" as="ul">
      <Nav.Item as="li">
        <Nav.Link href="/">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
      <Nav.Link href="/products">Product</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
      <Nav.Link href="/contact">Contact</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
      <Nav.Link href="/getapi">Get APi</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
      <Nav.Link href="/postapi">Post APi</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
      <Nav.Link href="/gitapi">Github APi</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
      <Nav.Link href="/UseEffectFn">UseEffectFn</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
      <Nav.Link href="/UseMemoFn">UseMemoFn</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
      <Nav.Link href="/UseReducerFn">UseReducerFn</Nav.Link>
      </Nav.Item>
    </Nav>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/products" element={<Product />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/getapi" element={<Users />}></Route>
        <Route path="/postapi" element={<PostUser />}></Route>
        <Route path="/gitapi" element={<GitApi />}></Route>
        <Route path="/UseEffectFn" element={<UseEffectFn />}></Route>
        <Route path="/UseMemoFn" element={<UseMemoFn />}></Route>
        <Route path="/UseReducerFn" element={<UseReducerFn />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
