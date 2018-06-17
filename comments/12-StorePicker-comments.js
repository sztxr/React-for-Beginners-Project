import React from 'react';
import { getFunName } from '../helpers';

/* There is a better way to do it without using constructor() */

class StorePicker extends React.Component {
    // This will run before the StorePicker component is created
    constructor() {
        super(); // this will run the component that we are extending first
        console.log('Gonna create a component');
        this.goToStore = this.goToStore.bind(this);
    }

    // GOLDEN RULE: Don't touch the DOM
    myInput = React.createRef();

    goToStore(event) {
        // 1. Stop the form from submitting
        event.preventDefault();

        // 2. Get the text from that input
        // console.log(this); -> this = undefined, before creating the constructor() function and biding this
        console.log(this); // -> this = StorePicker component, after biding this in constructor()

        // 3. Change the page to /store/whatever-they-entered
    }

    // componentDidMount() {
    //     console.log('Mounted!');
    //     console.log(this); // this = StorePicker component
    // }

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
