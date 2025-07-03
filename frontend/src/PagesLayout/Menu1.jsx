import "../Pages.css/Menu.css"
import { RiSearch2Line } from "react-icons/ri"
import { LuSettings2 } from 'react-icons/lu'
import { useContext, useState } from "react"
import { ShopContext } from "../Context/ShopContext"

const Menu1 = () => {

    const { foods } = useContext(ShopContext)
    const [category, SetCategory] = useState([])
    const [sortType, SetSortType] = useState("relevant")
    const [filterFoods, SetFilterFoods] = useState([])
    const [showCategories, SetShowCategories] = useState(true)
    const [search, setSearch] = useState("")

    return (
        <>
            <section>
                {/* search box */}
                <div>
                    <div>
                        <div><RiSearch2Line /></div>
                        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search Here..." className="border-none outline-none w-full text-sm pl-4 bg-deep" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Menu1