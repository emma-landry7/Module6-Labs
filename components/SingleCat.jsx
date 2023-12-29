function SingleCat({image, name, latinName}) {
    return (
        <li style={{textAlign: "left"}}>
            <img width="400px" style={{marginRight: 8}} src={image} alt={`image of ${name}`} />
            <span><strong>{name}:</strong> {latinName}</span>
            <span><button>Delete Cat</button></span>
        </li>
    )
}

export default SingleCat;