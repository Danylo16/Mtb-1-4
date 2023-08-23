

const DeviceInfo = ({device}) =>{
    const {name, price, rating} = device || {}

    return(
        <>
            <div>
                Name: {name}
            </div>
            <div>
                Price: {price}
            </div>
            <div>
                Rating: {rating}
            </div>
        </>
    )
}

export default DeviceInfo