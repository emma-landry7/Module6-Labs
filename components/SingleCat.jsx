function SingleCat({image, name, latinName}) {
    return (
        <li>
            <img height="200px" src={image} alt={`image of ${name}`} />
            <span><strong>{name}:</strong> {latinName}</span>
        </li>
    )
}

export default SingleCat;