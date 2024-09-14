import { useState } from "react"

const Counter = () => {
    const [count, setcount] = useState(0);

    const inc = () => {
        setcount(count + 1)
    }
    const dec = () => {
        // setcount(count -1)
        return count>0?setcount(count-1):count
    }
    return (
        <>
            <div className="col-6 mx-auto my-5 p-5 shadow text-center">
                <h4>Counter {count}</h4>
                <button className="btn btn-outline-danger mx-4" onClick={inc}>+</button>
                <button className="btn btn-outline-danger" onClick={dec}>-</button>
            </div>
        </>
    )
}

export default Counter