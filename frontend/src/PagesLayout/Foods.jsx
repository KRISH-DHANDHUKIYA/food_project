import { useContext, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "../Pages.css/Home1.css";
import { ShopContext } from "../Context/ShopContext";
import Title from "./Title";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Item from "./Item";

const Foods = () => {

    const { foods } = useContext(ShopContext);
    const [popularFoods, setPopularFoods] = useState([]);

    useEffect(() => {
        if (foods && foods.length > 0) {
            const data = foods.filter((item) => item.popular);
            setPopularFoods(data.slice(0, 6));
            console.log(foods);
        }
    }, [foods]);

    return (
        <section className="py-5">
            <Container>
                <Title title1="POPULAR" title2="FOODS" titleStyles="text-center mb-4" paraStyles="d-block" />
                <OwlCarousel
                    className="owl-theme"
                    autoplay
                    autoplayTimeout={3500}
                    loop
                    nav={false}
                    responsive={{
                        0: { items: 1 },
                        768: { items: 2 },
                        992: { items: 3 },
                        1200: { items: 4 }
                    }}
                    key={popularFoods.length}
                >
                    {popularFoods.map((food) => (
                        <div key={food._id} className="px-3">
                            <Item food={food} />
                        </div>
                    ))}
                </OwlCarousel>
            </Container>
        </section>
    );
};

export default Foods;