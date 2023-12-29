import SingleCat from "./SingleCat";

function BigCats() {
    const cats = [
        {id: 1, name: 'Cheetah', latinName: 'Acinonyx jubatus', image: 'https://cdn.britannica.com/01/152301-050-1EF6EBB4/Cheetah.jpg?w=400&h=300&c=crop' },
        {id: 2, name: 'Cougar', latinName: 'Puma concolor', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdDhQV6cXDZfv6E_fAs2wvxeL5SDYscL-JJA&usqp=CAU' },
        {id: 3, name: 'Jaguar', latinName: 'Panthera onca', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLN2XeZkkyae_b8danIMqi7CiE2ks2E7_s2Q&usqp=CAU' },
        {id: 4, name: 'Leopard', latinName: 'Panthera pardus', image: 'https://cdn.britannica.com/40/146340-050-297B2798/Leopard-tree-Kenya-Masai-Mara-National-Reserve.jpg?w=300' },
        {id: 5, name: 'Lion', latinName: 'Panthera leo', image: 'https://cdn.britannica.com/29/150929-050-547070A1/lion-Kenya-Masai-Mara-National-Reserve.jpg' },
        {id: 6, name: 'Snow leopard', latinName: 'Panthera uncia', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxE75Th17aIcaT7r861MGpOtHvxgrEnaONtg&usqp=CAU' },
        {id: 7, name: 'Tiger', latinName: 'Panthera tigris', image: 'https://cdn-acgla.nitrocdn.com/bvIhcJyiWKFqlMsfAAXRLitDZjWdRlLX/assets/static/optimized/rev-5131b73/wp-content/uploads/2020/07/Bengal-tiger-1.jpg' },
    ]

    const catsList = cats.map(cat => (
        <SingleCat 
            key={cat.id}
            name={cat.name}
            latinName={cat.latinName}
            image={cat.image} />
    ))
    
    return (
        <div>
            <h3>Latin Names for Big Cats</h3>
            <ul>{catsList}</ul>
        </div>
    )
}

export default BigCats;