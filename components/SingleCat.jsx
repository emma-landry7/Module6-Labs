function SingleCat({image, name, latinName}) {
    return (
        <li style={{textAlign: "left"}}>
            <img width="400px" style={{marginRight: 8}} src={image} alt={`image of ${name}`} />
            <span><strong>{name}:</strong> {latinName}</span>
        </li>
    )
}

export default SingleCat;