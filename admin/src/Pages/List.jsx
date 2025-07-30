import axios from "axios";
import { useState, useEffect } from "react";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";
import { TbTrash } from "react-icons/tb";
import {Container,Row,Col,Table,Image,Button,Spinner} from "react-bootstrap";

const List = ({ token }) => {
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchList = async () => {
        try {
            setLoading(true);
            const response = await axios.get(`${backendUrl}/api/product/list`);
            if (response.data.status) {
                setList(response.data.data.products);
            } else {
                toast.error(response.data.data.message || "Failed to fetch list");
            }
        } catch (error) {
            console.error("Error fetching list:", error);
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    const removeProduct = async (id) => {
        try {
            const response = await axios.post(
                `${backendUrl}/api/product/remove`,
                { id },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            if (response.data.status) {
                toast.success(response.data.data.message || "Product removed successfully");
                await fetchList();
            } else {
                toast.error(response.data.data.message || "Failed to remove product");
            }
        } catch (error) {
            console.error(error);
            toast.error(error.message || "Something went wrong");
        }
    };

    useEffect(() => {
        fetchList();
    }, []);

    return (
        <>
        <Container className="px-0 py-5">
            <h4 className="mb-4 text-center text-md-start">Product List</h4>

            {loading ? (
                <div className="text-center py-5">
                    <Spinner animation="border" variant="dark" />
                </div>
            ) : list.length === 0 ? (
                <div className="text-center py-5">No products found.</div>
            ) : (
                <div className="table-responsive">
                    <Table bordered hover className="align-middle text-center">
                        <thead className="table-light">
                            <tr>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {list.map((item) => (
                                <tr key={item._id}>
                                    <td>
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            rounded
                                            style={{ width: "48px", height: "48px", objectFit: "cover" }}
                                        />
                                    </td>
                                    <td>{item.name}</td>
                                    <td>{item.category}</td>
                                    <td>
                                        {item.price
                                            ? `${currency}${Object.values(item.price)[0]}`
                                            : "N/A"}
                                    </td>
                                    <td>
                                        <Button
                                            variant="outline-danger"
                                            onClick={() => removeProduct(item._id)}
                                        >
                                            <TbTrash />
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            )}
        </Container>
        </>
    );
};

export default List;
