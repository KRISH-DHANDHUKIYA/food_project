import "../Pages.css/Home1.css"
import Title from "./Title"
import { FaCheck, FaStar } from "react-icons/fa6"
import user1 from "../assets/testimonials/user1.png"
import user2 from "../assets/testimonials/user2.png"
import food1 from "../assets/food_1.png"
import food2 from "../assets/food_2.png"
import food3 from "../assets/food_12.png"
import food4 from "../assets/food_44.png"

const Review = () => {
    return (
        <>
            <div>
                <div className="py-16">
                    <Title title1={"DELICIOUS"} title2={"REVIEWS"} titleStyles={"text-center !pb-16"} paraStyles={"!block"} />
                    <div className="max-padd-container">
                        {/* Container */}
                        <div className="grid grid-cols-1 lg:grid-cols-[1fr_3fr] gap-20 mb-16 rounded-3xl">
                            {/* left */}
                            <div className="hidden sm:flex items-start justify-between flex-col gap-10">
                                <Title title1={"What People"} title2={'Says'} title1Styles={"pb-10"} paraStyles={'!block'} />
                                <div className="flex flex-col gap-1 bg-deep p-2 rounded">
                                    <div className="flex text-secondary gap-2">
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </div>
                                </div>
                                <div className="medium-14">
                                    more than <b>+25,000</b>
                                </div>
                            </div>
                            {/* right  */}
                            <div className="grid grid-cols-1 sm:grid:cols-2 gap-7">
                                {/* Review  card */}
                                <div>
                                    <div>
                                        <div>
                                            <img src={user1} alt="img" height={44} width={44} className="rounded-full" />
                                            <h5>John Deo</h5>
                                            <div>
                                                <FaCheck />Verified
                                            </div>
                                        </div>
                                        <hr className="h-[1px] w-full my-2" />
                                        <div>
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                        </div>
                                        <h4>High Quality</h4>
                                        <p>
                                            The food was Abs
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Review