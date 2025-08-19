import { useContext, useState } from "react"
import { ShopContext } from "../Context/ShopContext"
import { useSearchParams } from "react-router-dom"
import axios from "axios"
import { toast } from "react-toastify"
import { useEffect } from "react"
import { Container, Row, Col } from 'react-bootstrap'

const Verify = () => {

    const { navigate, token, setCartItems, backendUrl } = useContext(ShopContext)
    const [searchParams, setSearchParams] = useSearchParams()

    const success = searchParams.get('success')
    const orderId = searchParams.get('orderId')

    const verifyPayment = async () => {
        try {
            if (!token) {
                return null
            }
            const response = await axios.post(
                `${backendUrl}/api/order/verifystripe`,
                { success, orderId },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            )

            if (response.data.success) {
                setCartItems({})
                navigate('/orders')
            }
            else {
                navigate('/cart')
            }
        }
        catch (error) {
            console.log(error);
            toast.error(error.message)
        }
    }

    useEffect(() => {
        verifyPayment()
    }, [token])

    return (
        <>
            <Container className="text-center my-4">
                <Row>
                    <Col>
                        Verify
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Verify