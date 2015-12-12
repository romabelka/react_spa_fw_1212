export default (type) => {
    return {
        getInitialState: function() {
            return {
                [type]: ''
            }
        },

        [`change_${type}`]: function(ev) {
            this.setState({
                [type]: ev.target.value
            })
        }
    }
}