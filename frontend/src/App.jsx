import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./routes/Home";
import Checkout from "./routes/Checkout";
import SignIn from "./routes/SignIn";
import SignUp from "./routes/SignUp";
import Success from "./routes/Success";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/success" element={<Success />} />
      </Route>
    </Routes>
  );
}

export default App;
