import React from 'react';

type Props = {
    onClick: (e: React.MouseEvent) => void
}

const EventBtn = ({onClick}: Props) => (
    <button onClick={onClick}>
        EVENTS!
    </button>
)

export default EventBtn;