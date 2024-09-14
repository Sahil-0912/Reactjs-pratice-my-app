import { useEffect } from "react"
import ProductData from "../layout/ProductData"
import ProductCard from "../layout/ProductCard"

const UseEffectHook = () => {

    async function showapi() {
        const res = await fetch("https://fakestoreapi.com/products")
        const data = await res.json()
        console.table(data)
    }

    useEffect(() => {
        // console.log("useEffect");
        showapi()
    })
    return (
        <>
            <div className="container">
                <div className="row">
                    {
                        ProductData.map((element) => {
                            return (
                                <div className="col-lg-3">
                                    <ProductCard title={element.title} price={element.price} category={element.category} image={element.image} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default UseEffectHook