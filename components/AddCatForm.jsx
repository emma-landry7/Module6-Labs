import { useState } from "react";

function AddCatForm({onAddCat}) {
    const [name, setName] = useState('')
    const [latinName, setLatinName] = useState('')
    const [image, setImage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = new FormData(e.target)

        const newCat = Object.fromEntries(data)
        console.log(newCat)
        onAddCat({name, latinName, image})
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Cat name:
                    <input name="name" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <label>Latin name:
                    <input name="latinName" value={latinName} onChange={(e) => setLatinName(e.target.value)} />
                </label> <br />
                <label>Image:
                    <input name="image" value={image} onChange={(e) => setImage(e.target.value)} />
                </label>
                <button>Add Cat</button>
            </form>
        </div>
    )
}

export default AddCatForm;