import "./App.css";
import { useEffect, useState } from "react";
import { theme, responsiveTheme } from "./themes";
import { ThemeProvider } from "@mui/material/styles";
import MainPage from "./pages/main-page/main-page.component";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const assetRoute =
    windowWidth >= 1200 ? "desktop" : windowWidth >= 600 ? "tablet" : "mobile";
  console.log(assetRoute);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <ThemeProvider theme={assetRoute === "desktop" ? theme : responsiveTheme}>
      <MainPage size={assetRoute} />
    </ThemeProvider>
  );
}

export default App;
