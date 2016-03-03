import React, { Component } from 'react'

export default function (CustomComponent) {
    return class extends Component {
        state = {
            isOpen: true
        }

        render() {
            return <CustomComponent
                {...this.state}
                {...{toggleOpen: this.toggleOpen}}
                {...this.props}
            />
        }

        toggleOpen = () => {
            this.setState({
                isOpen: !this.state.isOpen
            })
        }
    }
}
