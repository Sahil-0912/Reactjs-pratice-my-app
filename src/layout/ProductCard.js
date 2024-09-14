function ProductCard(props){
    return(
        <>
            <div className="card p-2 h-75 my-3">
                    <img src={props.image} className="w-100 h-50"/>
                    <div class="card-body">
                        <h4 className="text-uppercase">category: {props.category}</h4>
                        <ul>
                            <li>Title:{props.title}</li>
                            <li>Price:{props.price}/-</li>
                        </ul>
                    </div>
                </div>
        </>
    )
}

export default ProductCard