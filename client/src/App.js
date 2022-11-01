import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import AddEdit from "./pages/AddEdit";
import View from "./pages/View";
import Header from "./component/header/Header";

function App() {
  return (
    // <BrowserRouter>
    //   <ToastContainer />
    //   <Routes>
    //     <Route path="/" element={<Home />}>
    //       <Route path="/add" element={<AddEdit />} />
    //       <Route path="/update/:id" element={<AddEdit />} />
    //       <Route path="/view/:id" element={<View />} />
    //       <Route path="/about" element={<About />} />
    //       <Route path="*" element={<NotFound />} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
    <BrowserRouter>
      <Header />
      <ToastContainer position="top-center" autoClose = {1000}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddEdit />} />
        <Route path="/update/:id" element={<AddEdit />} />
        <Route path="/view/:id" element={<View />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
