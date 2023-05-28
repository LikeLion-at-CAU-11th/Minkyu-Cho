import { Route, Routes } from "react-router-dom";
import LionInfo from "./components/info/LionInfo";
import LionInfoModal from "./components/info/LionInfoModal";
import LionTestModal from "./components/test/LionTestModal";
import LionTest from "./components/test/LionTest";
import Startpage from "./components/test/Startpage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LionInfo />}>
        <Route path="info/:type" element={<LionInfoModal />} />
        <Route path="info/:type/:number" element={<LionInfoModal />} />
        <Route path="test/:pageNum" element={<LionTestModal />} />
        <Route path="text" element={<LionTest />} />
        <Route path="start" element={<Startpage />} />
      </Route>
    </Routes>
  );
}

export default App;
