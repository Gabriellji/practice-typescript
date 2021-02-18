import React from 'react';

type Props = {
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void,
    onChange?: (e: React.FormEvent<HTMLInputElement>) => void
}

const EventBtn = ({onClick}: Props) => (
    <button onClick={onClick}>
        EVENTS!
    </button>
)

export default EventBtn;