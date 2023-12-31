// function SingleCat({image, name, latinName}) {
function SingleCat(cat) {
    const deleteCat = () => {
        cat.onDeleteCat(cat.name)
    }
    return (
        <li style={{textAlign: "left"}}>
            <img width="400px" style={{marginRight: 8}} src={cat.image} alt={`image of ${cat.name}`} />
            <span><strong>{cat.name}:</strong> {cat.latinName}</span>
            <span><button onClick={() => deleteCat(cat)}>Delete Cat</button></span>
        </li>
    )
}

export default SingleCat;