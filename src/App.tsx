import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout.tsx";
import { About } from "./pages/About.tsx";
import { Groups } from "./pages/Groups.tsx";
import { Home } from "./pages/Home.tsx";
import { NotFound } from "./pages/NotFound.tsx";
import { ProductDetail } from "./pages/ProductDetail.tsx";
import { Products } from "./pages/Products.tsx";
import { ProgrammeDetail } from "./pages/ProgrammeDetail.tsx";
import { Programmes } from "./pages/Programmes.tsx";
import { ProjectDetail } from "./pages/ProjectDetail.tsx";
import { Projects } from "./pages/Projects.tsx";
import { Todas } from "./pages/Todas.tsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="about/groups" element={<Groups />} />
          <Route path="about/todas" element={<Todas />} />
          <Route path="programmes" element={<Programmes />} />
          <Route path="programmes/:slug" element={<ProgrammeDetail />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:slug" element={<ProjectDetail />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:slug" element={<ProductDetail />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
