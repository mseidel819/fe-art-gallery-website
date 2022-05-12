import Hero from "../../components/hero/hero.component";
import Gallery from "../../components/Gallery/gallery.component";
import Footer from "../../components/footer/footer.component";

const MainPage = ({ size }) => {
  return (
    <>
      <Hero size={size} />
      <Gallery size={size} />
      <Footer bkgColor={"#151515"} color={"white"} hoverColor={"#d5966c"} />
    </>
  );
};

export default MainPage;
