import React from 'react';

/* refactoring React modules */

/* 3 */
const Header = (props) => (
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
            <span>{props.tagline}</span>
        </h3>
    </header>
);

/* 2 */
/* destructure the props (tagline, age) --> ({ tagline, age })

const Header = ({ tagline, age }) => (
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
            <span>{tagline} {age}</span>
        </h3>
    </header>
); */

/* 1 */
/* class Header extends React.Component {
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
        );
    }
} */

export default Header;
