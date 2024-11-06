import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./routes/Home";
import Checkout from "./routes/Checkout";
import SignIn from "./routes/SignIn";
import SignUp from "./routes/SignUp";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Route>
    </Routes>
  );
}

export default App;
