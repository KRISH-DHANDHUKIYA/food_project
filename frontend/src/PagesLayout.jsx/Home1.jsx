import "../Pages.css/Home1.css"
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Home1 = () => {
    return (
        <>
            <OwlCarousel className="owl-theme" nav={false} dots={false} responsiveClass={true} items={1} autoplay loop margin={0} autoplayTimeout={3000} responsive={{ 0: { items: 1 }, 600: { items: 1 }, 1000: { items: 1 } }}>
                <div className="item">
                    <div className="slide-wrapper">
                        <img src="https://images.deliveryhero.io/image/fd-tr/LH/jbks-hero.jpg" alt="Slide 1" />
                        <div className="overlay" />
                        <div className="slide-content">
                            <span className="font5">Welcome to Taj Hotel</span>
                            <h4 className="btn5">Redefining the Art of Luxury</h4>
                            <button
                                className="text-uppercase btn1"
                                onClick={() => {
                                    const section3 = document.getElementById("features333");
                                    section3?.scrollIntoView({ behavior: "smooth" });
                                }}>
                                Discover More
                            </button>
                        </div>
                    </div>
                </div>

                <div className="item">
                    <div className="slide-wrapper">
                        <img src="https://metropolitanhost.com/themes/themeforest/html/quickmunch/assets/img/about/blog/1920x700/banner-4.jpg" alt="Slide 2" />
                        <div className="overlay" />
                        <div className="slide-content">
                            <span className=" font5">Welcome to Taj Hotel</span>
                            <h4 className="btn5">A Sanctuary for Dreams</h4>
                            <button
                                className="text-uppercase btn1"
                                onClick={() => {
                                    const section3 = document.getElementById("features333");
                                    section3?.scrollIntoView({ behavior: "smooth" });
                                }}>
                                Discover More
                            </button>
                        </div>
                    </div>
                </div>

                <div className="item ">
                    <div className="slide-wrapper">
                        <img src="https://metropolitanhost.com/themes/themeforest/html/quickmunch/assets/img/about/blog/1920x700/banner-6.jpg" alt="Slide 3" />
                        <div className="overlay" />
                        <div className="slide-content">
                            <span className="font5">Welcome to Taj Hotel</span>
                            <h4 className="btn5">Capture the spirit of timeless</h4>
                            <button
                                className="text-uppercase btn1"
                                onClick={() => {
                                    const section3 = document.getElementById("features333");
                                    section3?.scrollIntoView({ behavior: "smooth" });
                                }}>
                                Discover More
                            </button>
                        </div>
                    </div>
                </div>
            </OwlCarousel>

            {/* <section>
                <div>
                    {left side} 
                    <div>
                        <h1>Grab Exclusive Food Discount Now!</h1>
                    </div>
                </div>
            </section> */}
            
        </>
    )
}

export default Home1