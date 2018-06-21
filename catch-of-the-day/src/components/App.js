import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';
import base from '../base';

class App extends React.Component {
    state = {
        fishes: {},
        order: {}
    };

    /* Firebase start */
    componentDidMount() {
        const { params } = this.props.match;

        // first reinstate our localStorage
        const localStorageRef = localStorage.getItem(params.storeId);
        if (localStorageRef) {
            this.setState({ order: JSON.parse(localStorageRef) });
            // b. JSON.parse to turn (localStorageRef) into an object
        }

        this.ref = base.syncState(`${params.storeId}/fishes`, {
            context: this,
            state: 'fishes'
        });
    }

    /* local storage for Order */
    componentDidUpdate() {
        console.log(this.state.order);
        localStorage.setItem(
            this.props.match.params.storeId,
            JSON.stringify(this.state.order)
        );
        // a. JSON.stringify to turn (this.state.order) into a string
    }

    /* Firebase end */
    componentWillUnmount() {
        base.removeBinding(this.ref);
    }

    addFish = fish => {
        // 1. Take a copy of the existing state
        const fishes = { ...this.state.fishes }; // object spread -> makes a copy of the original object
        // 2. Add our new fish to that fishes varible
        fishes[`fish${Date.now()}`] = fish;
        // 3. Set the new fishes object to state
        this.setState({
            fishes // fishes: fishes
        });
    };

    updateFish = (key, updatedFish) => {
        // 1. Take a copy of the current state
        const fishes = { ...this.state.fishes };
        // 2. Update that state
        fishes[key] = updatedFish;
        // 3. Set that to state
        this.setState({ fishes });
    };

    deleteFish = key => {
        // 1. Take a copy of state
        const fishes = { ...this.state.fishes };
        // 2. Update that state
        fishes[key] = null;
        // 3. Update state
        this.setState({ fishes });
    };

    loadSampleFishes = () => {
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

    removeFromOrder = key => {
        // 1. Take a copy of state
        const order = { ...this.state.order };
        // 2. Remove that item from order
        delete order[key];
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
                    fishes={this.state.fishes}
                    order={this.state.order}
                    removeFromOrder={this.removeFromOrder}
                />
                <Inventory
                    addFish={this.addFish}
                    updateFish={this.updateFish}
                    deleteFish={this.deleteFish}
                    loadSampleFishes={this.loadSampleFishes}
                    fishes={this.state.fishes}
                />
            </div>
        );
    }
}

export default App;
