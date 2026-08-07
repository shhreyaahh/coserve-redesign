import { BrowserRouter, Routes, Route } from "react-router-dom";

import PageLayout from "./layouts/PageLayout";
import Home from "./pages/Home";
import Industries from "./pages/Industries";
import IndustryPage from "./pages/IndustryPage";
import AIProductsPage from "./pages/AIProducts";
import AboutPage from "./pages/About";
import Partners from "./pages/Partners";
import PartnerDetailPage from "./pages/Partnersdetails";
import ContactPage from "./pages/Contact";
import CareersPage from "./pages/Careers";
import InsightsSection from "./pages/Insights";
import InsightArticle from "./pages/InsightArticle";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/industries/:slug" element={<IndustryPage />} />
          <Route path="/ai-products" element={<AIProductsPage />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/partners/:slug" element={<PartnerDetailPage />} />
          <Route path="/insights" element={<InsightsSection />} />
          <Route path="/insights/article" element={<InsightArticle />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
