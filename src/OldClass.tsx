import React, { Component } from 'react'

type Props = {
    something: string
}

export default class OldClass extends Component<Props> {

    state = {
        stuff: 'Some stuff',
    }
    render() {
        return (
            <div>
                <h1>Class Component</h1>
                <h1>{this.state.stuff}</h1>
                <h1>{this.props.something}</h1>
            </div>
        )
    }
}
