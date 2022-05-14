import "./App.css";
import { useEffect, useState } from "react";
import { theme, responsiveTheme } from "./themes";
import { ThemeProvider } from "@mui/material/styles";
import MainPage from "./pages/main-page/main-page.component";
import LocationPage from "./pages/location-page/location-page.component";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [locationBool, setlocationBool] = useState(false);

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

  const buttonHandler = () => {
    setlocationBool(!locationBool);
    console.log(locationBool);
  };

  return (
    <ThemeProvider theme={assetRoute === "desktop" ? theme : responsiveTheme}>
      {locationBool ? (
        <LocationPage size={assetRoute} buttonHandler={buttonHandler} />
      ) : (
        <MainPage size={assetRoute} buttonHandler={buttonHandler} />
      )}
    </ThemeProvider>
  );
}

export default App;
