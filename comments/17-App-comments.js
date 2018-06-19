import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';

class App extends React.Component {
    state = {
        fishes: {},
        order: {}
    };

    addFish = fish => {
        // console.log('Adding a fish!');
        // 1. Take a copy of the existing state
        const fishes = { ...this.state.fishes }; // object spread -> makes a copy of the original object
        // 2. Add our new fish to that fishes varible
        fishes[`fish${Date.now()}`] = fish;
        // 3. Set the new fishes object to state
        this.setState({
            fishes // fishes: fishes
        });
    };

    loadSampleFishes = () => {
        // console.log('Loading Samples');
        this.setState({ fishes: sampleFishes });
    };

    addToOrder = key => {
        // 1. Take a copy of state
        const order = { ...this.state.order };
        // 2. Either add to the order, or update the number in our order
        order[key] = order[key] + 1 || 1; // if order[key] exists increment by 1, otherwise return 1
        // 3. Call setState to update out state object
        this.setState({ order });
    };

    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood Market" age={100} />
                    <ul className="fishes">
                        {Object.keys(this.state.fishes).map(key => (
                            <Fish
                                key={key}
                                index={key}
                                details={this.state.fishes[key]}
                                addToOrder={this.addToOrder}
                            />
                        ))}
                    </ul>
                </div>
                <Order 
                    /* fishes={this.state.fishes}
                    order={this.state.order}  */
                    {...this.state}
                    /* same as above but it can run into some issues in the future since we should only pass data we need */
                />
                <Inventory
                    addFish={this.addFish}
                    loadSampleFishes={this.loadSampleFishes}
                />
            </div>
        );
    }
}

export default App;
