import React, {Component} from 'react';
// import axios from 'axios';


class Slider extends Component {
    constructor() {
        super();
        this.state = {loading: true};
    }

    render() {
        const loading = this.state.loading;
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <h2>My first React app with Symfony</h2>
                    </div>
                </div>
            </div>
        )
    }
}

export default Start;
