import Footer from "../../components/footer/footer.component";
import Map from "../../components/map/map.component";

const LocationPage = ({ size, buttonHandler }) => {
  return (
    <>
      <Map buttonHandler={buttonHandler} size={size} />
      <Footer
        bkgColor={"#d5966c"}
        color={"#151515"}
        hoverColor={"white"}
        size={size}
      />
    </>
  );
};

export default LocationPage;
