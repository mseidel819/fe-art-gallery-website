import Hero from "../../components/hero/hero.component";
import Gallery from "../../components/Gallery/gallery.component";
import Footer from "../../components/footer/footer.component";

const MainPage = () => {
  return (
    <>
      <Hero />
      <Gallery />
      <Footer bkgColor={"#151515"} color={"white"} hoverColor={"#d5966c"} />
    </>
  );
};

export default MainPage;
