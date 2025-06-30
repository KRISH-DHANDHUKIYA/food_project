import { Card, Image } from "react-bootstrap";
import { FaStar, FaStarHalfStroke } from "react-icons/fa6";

const Item = ({ food }) => {
    return (
        <Card className="text-center shadow-sm border-0 h-100">
            <Card.Body>
                <Image
                    src={food.image}
                    alt={food.name}
                    height={155}
                    width={155}
                    style={{
                        objectFit: "contain"
                    }}
                    roundedCircle
                    className="img-fluid rounded-circle mb-2"
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/fallback-image.jpg";
                    }}
                />
                < Card.Title className="fw-bold" > {food.name}</Card.Title>
                <div>
                    <h5>{food.category}</h5>
                    <div>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStarHalfStroke />
                    </div>
                </div>
                <p>{food.description}</p>
            </Card.Body>
        </Card >
    );
};

export default Item;