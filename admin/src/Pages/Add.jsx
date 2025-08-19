import { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import upload_icon from "../assets/upload_icon.png";
import { TbTrash } from "react-icons/tb";
import { FaPlus } from "react-icons/fa6";
import { backendUrl } from "../App";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Add = () => {
    const [image, setImage] = useState(null);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("Curry");
    const [popular, setPopular] = useState(false);
    const [prices, setPrices] = useState([]);

    const handleImageChange = (e) => setImage(e.target.files[0]);

    const addSizePrice = () => setPrices([...prices, { size: "", price: "" }]);

    const removeSizePrice = (index) =>
        setPrices(prices.filter((_, i) => i !== index));

    const handleSizePriceChange = (index, field, value) => {
        const updatedPrices = prices.map((item, i) =>
            i === index
                ? { ...item, [field]: field === "size" ? value.toUpperCase() : value }
                : item
        );
        setPrices(updatedPrices);
    };

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        try {
            const formdata = new FormData();
            formdata.append("name", name);
            formdata.append("description", description);
            formdata.append("category", category);
            formdata.append("popular", popular);
            formdata.append("image", image);
            formdata.append("prices", JSON.stringify(prices));

            const token = localStorage.getItem("token");
            if (!token) {
                toast.error("You are not logged in.");
                return;
            }

            const response = await axios.post(`${backendUrl}/api/product/add`, formdata, {
                headers: { Authorization: `Bearer ${token}` },
            });

            if (response.data.status) {
                toast.success(response.data.data.message || "Product added successfully");
                setName("");
                setDescription("");
                setPopular(false);
                setImage(null);
                setPrices([]);
                document.getElementById("imageUpload").value = null;
            } else {
                toast.error(response.data.data.message || "Failed to add product");
            }
        } catch (error) {
            toast.error(error.response?.data?.message || error.message || "Something went wrong");
        }
    };

    return (
        <>
            <Container className="py-4">
                <ToastContainer position="top-right" autoClose={3000} />
                <h3 className="mb-4">Add Product</h3>
                <Form onSubmit={onSubmitHandler}>
                    <Form.Group className="mb-3" controlId="productName">
                        <Form.Label>Product Name</Form.Label>
                        <Form.Control type="text" placeholder="Write here..." value={name} onChange={(e) => setName(e.target.value)} required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="productDescription">
                        <Form.Label>Product Description</Form.Label>
                        <Form.Control as="textarea" rows={4} placeholder="Write here..." value={description} onChange={(e) => setDescription(e.target.value)} required />
                    </Form.Group>

                    <Row className="mb-3">
                        <Col xs={12} sm={6}>
                            <Form.Group controlId="productCategory">
                                <Form.Label>Category</Form.Label>
                                <Form.Select value={category} onChange={(e) => setCategory(e.target.value)}>
                                    <option value="Curry">Curry</option>
                                    <option value="Pizza">Pizza</option>
                                    <option value="Rice">Rice</option>
                                    <option value="Deserts">Deserts</option>
                                    <option value="Drinks">Drinks</option>
                                    <option value="Juices">Juices</option>
                                    <option value="Fruits">Fruits</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>

                        <Col xs={12} sm={6}>
                            <Form.Group>
                                <Form.Label>Image</Form.Label>
                                <div className="d-flex align-items-center">
                                    <Form.Label htmlFor="imageUpload" className="border rounded"
                                        style={{
                                            width: "56px", height: "56px", cursor: "pointer", overflow: "hidden",
                                        }}>
                                        <img
                                            src={image ? URL.createObjectURL(image) : upload_icon} alt="upload"
                                            style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                        />
                                    </Form.Label>
                                    <Form.Control type="file" id="imageUpload" accept="image/*" onChange={handleImageChange} hidden />
                                </div>
                            </Form.Group>
                        </Col>
                    </Row>

                    <Form.Group className="mb-3">
                        <Form.Label className="d-block">Size and Pricing</Form.Label>
                        {prices.map((item, index) => (
                            <Row key={index} className="mb-2 align-items-center">
                                <Col xs={5}>
                                    <Form.Control type="text" placeholder="Size (S, M, L)" value={item.size} onChange={(e) => handleSizePriceChange(index, "size", e.target.value)} required />
                                </Col>
                                <Col xs={5}>
                                    <Form.Control type="number" placeholder="Price" value={item.price} min={0} onChange={(e) => handleSizePriceChange(index, "price", e.target.value)} required />
                                </Col>
                                <Col xs={2}>
                                    <Button variant="outline-danger" className="w-100" onClick={() => removeSizePrice(index)}>
                                        <TbTrash />
                                    </Button>
                                </Col>
                            </Row>
                        ))}
                        <Button variant="secondary" size="sm" onClick={addSizePrice}>
                            <FaPlus /> Add Sizing
                        </Button>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="popularCheckbox">
                        <Form.Check type="checkbox" label="Add to popular" checked={popular} onChange={() => setPopular((prev) => !prev)} />
                    </Form.Group>

                    <Button type="submit" variant="dark" className="py-2">
                        Add Product
                    </Button>
                </Form>
            </Container>
        </>
    );
};

export default Add;