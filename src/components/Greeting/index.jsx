import { useState } from "react";

export default function Greeting() {
    const [name, setName] = useState('Person');
    return (
        <>
            Hi, my name is {name || "Person1"}.
            <button onClick={() => setName("Joe")}>Change</button>
        </>
    )
}