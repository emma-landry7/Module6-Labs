import { useState } from "react";
import SingleCat from "./SingleCat";
import AddCatForm from "./AddCatForm";

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

    const [currentCats, setCurrentCats] = useState(cats)

    const catsList = currentCats.map(cat => (
        <SingleCat 
            key={cat.id}
            name={cat.name}
            latinName={cat.latinName}
            image={cat.image} />
    ))

    const handleSortCats = () => {
        let newCats = [...currentCats]

        newCats.sort((a,b) => a.name.localeCompare(b.name))
        setCurrentCats(newCats)
    }

    const handleReverseCats = () => {
        let newCats = [...currentCats]

        newCats.reverse()
        setCurrentCats(newCats)
    }

    const handleFilterCats = () => {
        let newCats = currentCats.filter(cat => {
            if (cat.latinName.includes("Panthera")) {
                return cat
            }
        })

        setCurrentCats(newCats)
    }

    const handleResetCats = () => {
        let newCats = [...cats]

        setCurrentCats(newCats)
    }

    const handleAddCat = (newCat) => {
        newCat.id = currentCats.length + 1
        let newCats = [...currentCats, newCat]
        setCurrentCats(newCats)
    }

    const handleDeleteCat = (id) => {
        for (cat in currentCats) {
            
        }
        let newCats = currentCats.filter(cat => cat.id != id)
        setCurrentCats(newCats)
    }
    
    return (
        <div>
            <h3>Latin Names for Big Cats</h3>
            <ul>{catsList}</ul>
            <button onClick={handleSortCats}>Sort</button>
            <button onClick={handleReverseCats}>Reverse</button>
            <button onClick={handleFilterCats}>Filter Panthera family</button>
            <button onClick={handleResetCats}>Reset</button>
            <AddCatForm onAddCat={handleAddCat} />
        </div>
    )
}

export default BigCats;