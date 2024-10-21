import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Other from "./pages/Other";
import Header from "./components/ui/Header";

const App = () => {
  return (
    <div className="flex flex-col gap-8 ">
      <Header />
      <main id="wrapper-all">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Other />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
