import "../Pages.css/Home1.css"
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from "react-router-dom"

const Home1 = () => {
    return (
        <>
            <OwlCarousel className="owl-theme" nav={false} dots={false} responsiveClass={true} items={1} autoplay loop margin={0} autoplayTimeout={3000} responsive={{ 0: { items: 1 }, 600: { items: 1 }, 1000: { items: 1 } }}>
                <div className="item">
                    <div className="slide-wrapper">
                        <img src="https://images.deliveryhero.io/image/fd-tr/LH/jbks-hero.jpg" alt="Slide 1" />
                        <div className="overlay" />
                        <div className="slide-content">
                            <span className="font5">Welcome to The FoodExpress</span>
                            <h4 className="btn5">Timeless tastes Trendy twists All in one place</h4>
                            <Link to="/menu"><button className="text-uppercase btn1">
                                Discover More
                            </button></Link>
                        </div>
                    </div>
                </div>

                <div className="item">
                    <div className="slide-wrapper">
                        <img src="https://metropolitanhost.com/themes/themeforest/html/quickmunch/assets/img/about/blog/1920x700/banner-4.jpg" alt="Slide 2" />
                        <div className="overlay" />
                        <div className="slide-content">
                            <span className=" font5">Welcome to The FoodExpress</span>
                            <h4 className="btn5">Dishes that satisfy and excite every taste</h4>
                            <Link to="/menu"><button className="text-uppercase btn1">
                                Discover More
                            </button></Link>
                        </div>
                    </div>
                </div>

                <div className="item">
                    <div className="slide-wrapper">
                        <img src="https://metropolitanhost.com/themes/themeforest/html/quickmunch/assets/img/about/blog/1920x700/banner-6.jpg" alt="Slide 3" />
                        <div className="overlay" />
                        <div className="slide-content">
                            <span className="font5">Welcome to The FoodExpress</span>
                            <h4 className="btn5">FoodExpress brings flavor and freshness</h4>
                            <Link to="/menu"><button className="text-uppercase btn1">
                                Discover More
                            </button></Link>
                        </div>
                    </div>
                </div>
            </OwlCarousel>
        </>
    )
}

export default Home1