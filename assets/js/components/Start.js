import React, {Component} from 'react';
// import axios from 'axios';

class Start extends Component {
    constructor() {
        super();
        this.state = {loading: true};
    }

    render() {
        const loading = this.state.loading;

        return (
            <div>
                <div className="container">
                    <div className="row mt-5 mb-5">
                        <h2>My first React app with Symfony</h2>
                    </div>

                    <div className="mb-5">
                    <div className="card-group">
                        <div className="card">
                            <img className="card-img-top" src={"https://picsum.photos/id/564/1250"} alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a
                                        natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                                <div className="card-footer">
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </div>
                        </div>
                        <div className="card">
                            <img className="card-img-top" src={"https://picsum.photos/id/522/1250"} alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This card has supporting text below as a natural lead-in to
                                        additional content.</p>
                                </div>
                                <div className="card-footer">
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </div>
                        </div>
                        <div className="card">
                                <img className="card-img-top" src="https://picsum.photos/id/553/1250" alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a
                                        natural lead-in to additional content. This card has even longer content than
                                        the first to show that equal height action.</p>
                                </div>
                                <div className="card-footer">
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Start;
