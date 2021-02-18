import React, {useState} from 'react';

const Input = () => {
    const [name, setName] = useState('')
    const [text, setText] = useState<string | number>('hellllooo')
    return (
        <div>
            <h1>{text}</h1>
            <h3>{name}</h3>
            <input value={name} onChange={e => setName(e.target.value)}/>
        </div>
    )
}

export default Input;