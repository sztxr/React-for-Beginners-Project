import React from 'react';
import PropTypes from 'prop-types';
import { getFunName } from '../helpers';

// State is an object that lives inside a component
// it stores data that the component and/or its children may need

class StorePicker extends React.Component {
    // GOLDEN RULE: Don't touch the DOM!
    myInput = React.createRef();

    static propTypes = {
        history: PropTypes.object
    };

    goToStore = (event) => {
        // 1. Stop the form from submitting
        event.preventDefault();
        // 2. Get the text from that input
        const storeName = this.myInput.value.value;
        // 3. Change the page to /store/whatever-they-entered
        this.props.history.push(`/store/${storeName}`);
    }

    render() {
        return (
            <form className="store-selector" onSubmit={this.goToStore}>
                <h2>Please Enter a Store</h2>
                <input
                    required
                    type="text"
                    ref={this.myInput}
                    placeholder="Store Name"
                    defaultValue={getFunName()}
                />
                <button type="submit">Visit Store</button>
            </form>
        );
    }
}

export default StorePicker;
