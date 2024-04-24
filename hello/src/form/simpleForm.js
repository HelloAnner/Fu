// 非受控组件

import { Component } from "react"

class SimpleForm extends Component {
    constructor(props) {
        super(props)

        this.hanldeSubmit = this.hanldeSubmit.bind(this)
    }

    hanldeSubmit(e) {
        e.preventDefault()

        // react 的 ref 操作
        const { value } = this.refs.name
        console.log(value)
    }

    render() {
        return (
            <form onSubmit={this.hanldeSubmit}>
                <input ref="name" type="text" defaultValue="Anner"></input>
                <button type="submit">submit</button>
            </form>
        )
    }
}

export default SimpleForm