import { useState } from "react";

function Emoji() {
    const [mood, setMood] = useState("😃")

    const handleMoodChange = () => {
        if (mood === "😃") {
            setMood("🙁")
        } else {
            setMood("😃")
        }
        
    }

    return (
        <div>
            <h2>Mood </h2>
            <div>
                {mood}
            </div>
            <div>
                <button onClick={handleMoodChange}>Change mood</button>
            </div>
        </div>
    )
}

export default Emoji;