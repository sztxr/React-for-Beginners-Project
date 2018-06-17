import React from 'react';
import { getFunName } from '../helpers';

/* Refactoring the initial code */
class StorePicker extends React.Component {
    // GOLDEN RULE: Don't touch the DOM
    myInput = React.createRef();

    goToStore = (event) => { // arrow function to avoit using constructor() and binding this
        // 1. Stop the form from submitting
        event.preventDefault();

        // 2. Get the text from that input
        console.log(this); // this = StorePicker component without having to bind it first

        // 3. Change the page to /store/whatever-they-entered
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
