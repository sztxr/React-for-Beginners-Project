import React from 'react';
/* import React, { Fragment } from 'react'; 
then just the <Fragment> tag is needed to create sibling elements */

class StorePicker extends React.Component {
    render() {
        return ( /* the space between 'return' and '(' is required */
            /* <p>Fish</p> No sibling elements allowed */
            <React.Fragment>
            <p>Fish</p>
            <form className="store-selector">
                <h2>Please Enter a Store</h2>
            </form>
            </React.Fragment> /* <React.Fragment> tag needed to create sibling elements */
        );
    }
}

/* to toggle comments it must be dones inside {} */
/* doing it outside an element will throw and error, the comment must be inside */

export default StorePicker;
