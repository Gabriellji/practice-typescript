import React from 'react'

type Props = {
    text: string,
    subText?: string
}

const Footer = ({text, subText}: Props) => (
    <div>
        <hr/>
        <h1>{text}</h1>
        <h2>{subText}</h2>
    </div>
)

export default Footer;