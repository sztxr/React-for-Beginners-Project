import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <header className="top">
                <h1>
                    Catch
                    <span className="ofThe">
                        <span className="of">Of</span>
                        <span className="the">The</span>
                    </span>
                    Day
                </h1>
                <h3 className="tagline">
                    <span>{this.props.tagline}</span> 
                </h3>
            </header>
        )
    }
}

/* 'this' is the component instance --> <Header tagline="React is cool" age={500}/> */
/* 'props' is an object inside of the component, which contains all
of our properties eg: 'tagline' --> tagline="React is cool" */

/* type '$r' in the console and it should the component intance that we have,
it will show what's inside --> like the props */

export default Header;