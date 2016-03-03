export default {
    getInitialState() {
        return {
            isOpen: false
        }
    },

    toggleOpen: function() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}
