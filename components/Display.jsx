function Display(char) {
    const display = () => {
        char.onDisplay(char.value)

    }
    return (
        <button value={char.value} onClick={() => display(char)}>{char.value}</button>
    )
}

export default Display;