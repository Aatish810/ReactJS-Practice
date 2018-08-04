import React from 'react';

export default class AddOptions extends React.Component {
    state = {
        error: undefined
    }
    handleAddOptions = (e) => {
        e.preventDefault();
        let option = e.target.elements.option.value;
        option = option.trim();
        const error = this.props.handleAddOption(option)
        e.target.elements.option.value = '';
        this.setState((previousState) => ({ error }))
        // return {error: error} which is equal to
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOptions}>
                    <input type="text" name="option" />
                    <button>Add Option</button>
                </form>
            </div>
        )
    }
}