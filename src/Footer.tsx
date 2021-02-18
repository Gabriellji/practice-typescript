import React from 'react'

type Props = {
    text: string,
    subText?: string,
    moreText?: 'this is default value',
    arrayOfSomething?: [],
    arrayOfNames?: string[],
    age?: number,
    status?: 'married' | 'single',
    person?: object,
    personDetails?: {
        name: string,
        age: number
    }


}

const Footer = ({text, subText}: Props) => (
    <div>
        <hr/>
        <h1>{text}</h1>
        <h2>{subText}</h2>
    </div>
)

export default Footer;