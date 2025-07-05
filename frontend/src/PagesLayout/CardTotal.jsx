import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { Row, Col, Container } from "react-bootstrap";

const CardTotal = () => {
    const { currency, delivery_charges, getCartAmount } = useContext(ShopContext);

    return (
        <>
        <Container fluid className="p-4 bg-light border rounded shadow-sm w-100">
            <Row>
                <Col><h2>Cart Total</h2></Col>
            </Row>
            {/* Subtotal */}
            <Row className="pt-3 align-items-center">
                <Col><h5>SubTotal:</h5></Col>
                <Col className="text-end">
                    <h5>{currency}{getCartAmount()}.00</h5>
                </Col>
            </Row>
            <hr />

            {/* Shipping Fees */}
            <Row className="pt-2 align-items-center">
                <Col><h5>Shipping Fees:</h5></Col>
                <Col className="text-end">
                    <h5>
                        {getCartAmount() === 0 ? "0.00" : `${currency}${delivery_charges || 0}.00`}
                    </h5>
                </Col>
            </Row>
            <hr />

            {/* Total */}
            <Row className="pt-2 align-items-center">
                <Col><h5>Total:</h5></Col>
                <Col className="text-end">
                    <h5>
                        {currency}{getCartAmount() === 0 ? "0.00" : getCartAmount() + delivery_charges}
                    </h5>
                </Col>
            </Row>
            <hr />
        </Container>
        </>
    );
};

export default CardTotal;
