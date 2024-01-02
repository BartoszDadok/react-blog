import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Post from "../pages/Post/Post";
import MainTemplate from "../components/templates/MainTemplate/MainTemplate";
import NotFound from "../pages/NotFound/NotFound";

function Root() {
  return (
    <BrowserRouter>
      <MainTemplate>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/post/:postId' element={<Post />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </MainTemplate>
    </BrowserRouter>
  );
}

export default Root;
