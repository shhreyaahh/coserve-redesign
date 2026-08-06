import { BrowserRouter, Routes, Route } from "react-router-dom";

import PageLayout from "./layouts/PageLayout";
import Home from "./pages/Home";
import Industries from "./pages/Industries";
import IndustryPage from "./pages/IndustryPage";
import AIProductsPage from "./pages/AIProducts";
import Partners from "./pages/Partners";
import PartnerDetailPage from "./pages/Partnersdetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/industries/:slug" element={<IndustryPage />} />
          <Route path="/ai-products" element={<AIProductsPage />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/partners/:slug" element={<PartnerDetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
