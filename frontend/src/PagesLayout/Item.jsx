// import { useContext, useState } from "react";
// import {  Image } from "react-bootstrap";
// import { FaStar, FaStarHalfStroke } from "react-icons/fa6";
// import { ShopContext } from "../Context/ShopContext";
// import { TbShoppingBagPlus } from "react-icons/tb"

// const Item = ({ food }) => {

//     const { currency } = useContext(ShopContext)

//     const [size, setSize] = useState(food.sizes[0])

//     return (
//         <div className="flex rounded-xl bg-deep relative">
//             <div className="flexCenter m-6 rounded-full absolute top-0 bottom-0 -left-[88px ]">
//                 <Image
//                     src={food.image}
//                     alt={food.name}
//                     height={155}
//                     width={155}
//                     style={{
//                         objectFit: "contain"
//                     }}
//                     roundedCircle
//                     className="img-fluid rounded-circle mb-2"
//                 // onError={(e) => {
//                 //     e.target.onerror = null;
//                 //     e.target.src = "/fallback-image.jpg";
//                 // }}
//                 />
//             </div>
//             <div className="mx-4 pl-20">
//                 <div className="py-3 ">
//                     <h4 className="bold-16 line-clamp-1 mb-1">{food.name}</h4>
//                     <div className="flex items-center justify-between pb-2">
//                         <h5 className="medium-14">{food.category}</h5>
//                         <div className="flex items-center justify-start gap-x-1 text-secondary bold-14 ">
//                             <FaStar />
//                             <FaStar />
//                             <FaStar />
//                             <FaStar />
//                             <FaStarHalfStroke />
//                         </div>
//                     </div>
//                     <p className="line-clamp-2">{food.description}</p>
//                     <div className="flexBetween mb-2">
//                         <div className="flex gap-1">
//                             {[...food.sizes].sort((a, b) => {
//                                 const order = ["H", "F", "S", "M", "L", 'XL']
//                                 return order.indexOf(a) - order.indexOf(b)
//                             }).map((item, i) => (
//                                 <button key={i} className={`${item == size ? "ring-1 ring-slate-900/10" : ''} h-6 w-6 bg-light text-xs fontsemibold rounded-sm`}>{item}</button>
//                             ))}
//                         </div>
//                         <button className="flexCenter gap-x-1 text-[18px] bg-secondary text-white rounded-sm p-[3px] "><TbShoppingBagPlus /></button>
//                     </div>
//                     {/* Order  */}
//                     <div className="flexBetween rounded-xl pb-3 text-[13px]">
//                         <div className="flexBetween gsp-1">
//                             <h5>Prep:</h5>
//                             <p className="text-xs relative top-[1px]">20m</p>
//                         </div>
//                         <hr className="h-4 w-[1px] bg-tertiary/10 border-none" />
//                         <div className="flexCenter gsp-1">
//                             <h5>Price:</h5>
//                             {/* Dynamically update the price */}
//                             <p className="text-xs text-secondary relative top-[1px]">
//                                 {currency}{food.price[size]}
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>

//     );
// };

// export default Item;
import { useContext, useState } from "react";
import { Card, Button, Image, ButtonGroup } from "react-bootstrap";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { TbShoppingBagPlus } from "react-icons/tb";
import { ShopContext } from "../Context/ShopContext";

const Item = ({ food }) => {
    const { currency } = useContext(ShopContext);
    const [size, setSize] = useState(food.sizes[0]);

    return (
        <Card
            className="text-center position-relative border-0 shadow-lg mb-4"
            style={{
                borderRadius: "20px",
                backgroundColor: "#eaf8dc",
                paddingTop: "80px",
                overflow: "hidden",
                minHeight: "400px",
            }}
        >
            {/* Floating Image */}
            <div
                className="position-absolute top-0 start-50 translate-middle"
                style={{
                    zIndex: 1,
                    marginTop: "70px",
                }}
            >
                <Image
                    src={food.image}
                    alt={food.name}
                    width={120}
                    height={120}
                    roundedCircle
                    style={{
                        objectFit: "cover",
                        backgroundColor: "#fff",
                        padding: "6px",
                        boxShadow: "0 6px 15px rgba(0,0,0,0.15)",
                    }}
                />
            </div>

            {/* Card Content */}
            <div className="px-3 pt-5 mt-4">
                <h6 className="fw-bold text-truncate">{food.name}</h6>
                <p className="text-muted small mb-2">{food.category}</p>

                <div className="text-success d-flex justify-content-center gap-1 mb-2 fs-6">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalfAlt />
                </div>

                <p className="text-muted small" style={{ height: "2.5em", overflow: "hidden" }}>
                    {food.description}
                </p>

                {/* Size Selector and Add Button */}
                <div className="d-flex justify-content-between align-items-center my-3">
                    <ButtonGroup size="sm">
                        {[...food.sizes]
                            .sort((a, b) => {
                                const order = ["H", "F", "S", "M", "L", "XL"];
                                return order.indexOf(a) - order.indexOf(b);
                            })
                            .map((item, i) => (
                                <Button
                                    key={i}
                                    variant={item === size ? "dark" : "light"}
                                    className="rounded-1 px-2 py-0"
                                    onClick={() => setSize(item)}
                                >
                                    {item}
                                </Button>
                            ))}
                    </ButtonGroup>

                    <Button variant="success" className="p-2 rounded-2">
                        <TbShoppingBagPlus size={18} color="#fff" />
                    </Button>
                </div>

                {/* Footer Info */}
                <div className="d-flex justify-content-between text-muted small">
                    <span><strong>Prep:</strong> 20m</span>
                    <span><strong>Price:</strong> {currency}{food.price[size]}</span>
                </div>
            </div>
        </Card>
    );
};

export default Item;
