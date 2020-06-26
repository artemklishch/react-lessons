import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import TodosPage from "./pages/TodosPage";
import AboutPage from "./pages/AboutPage";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Route exact path="/" component={TodosPage} />
        <Route path="/about" component={AboutPage} />
      </div>
    </BrowserRouter>
  );
};

export default App;
