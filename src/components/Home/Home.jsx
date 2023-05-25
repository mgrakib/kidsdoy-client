import useTitle from "../../CustomHooks/useTitle/useTitle";
import Footer from "../Share/Footer/Footer";
import NavBar from "../Share/NavBar/NavBar";
import AllToy from "./AllToy/AllToy";
import Gallery from "./Gallery/Gallery";
import HeroSection from "./HeroSection/HeroSection";
import KidsFavorite from "./KidsFavorite/KidsFavorite";
import RelatedProduct from "./RelatedProduct/RelatedProduct";


const Home = () => {
    useTitle('Home')
    return (
		<div>
			<NavBar />
            <div>
                <HeroSection />
                <Gallery />
                <AllToy />
                <KidsFavorite />
                <RelatedProduct />
            </div>
            <Footer />
		</div>
	);
};

export default Home;