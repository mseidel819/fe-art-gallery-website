import Hero from "../../components/hero/hero.component";
import Gallery from "../../components/Gallery/gallery.component";
import Footer from "../../components/footer/footer.component";

const MainPage = ({ size, buttonHandler }) => {
  return (
    <>
      <Hero role="banner" buttonHandler={buttonHandler} size={size} />
      <Gallery role="main" size={size} />
      <Footer
        role="contentinfo"
        bkgColor={"#151515"}
        color={"white"}
        hoverColor={"#d5966c"}
        size={size}
      />
    </>
  );
};

export default MainPage;
