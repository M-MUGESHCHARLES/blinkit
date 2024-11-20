import "./App.css";
// React Slick CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MainRouter } from "./routers/MainRouter";
import { DataProvider } from "./context/context";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <DataProvider>
            <MainRouter />
          </DataProvider>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
