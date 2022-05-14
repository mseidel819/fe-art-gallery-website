import Footer from "../../components/footer/footer.component";
import Map from "../../components/map/map.component";
import MapText from "../../components/map-text/map-text.component";

const LocationPage = ({ size, buttonHandler }) => {
  return (
    <>
      <Map role="banner" buttonHandler={buttonHandler} size={size} />
      <MapText role="main" size={size} />
      <Footer
        role="contentinfo"
        bkgColor={"#d5966c"}
        color={"#151515"}
        hoverColor={"white"}
        size={size}
      />
    </>
  );
};

export default LocationPage;
