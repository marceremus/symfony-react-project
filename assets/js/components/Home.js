import React, {Component} from 'react';
import { Route, Switch,Redirect, Link, withRouter } from 'react-router-dom';
import Users from './Users';
import Posts from './Posts';
import Start from './Start';

class Home extends Component {

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <Link className={"navbar-brand"} to={"/"}>React</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className={"nav-link"} to={"/"}>Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={"nav-link"} to={"/start"}>Start</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={"nav-link"} to={"/users"}>Users</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={"nav-link"} to={"/posts"}>Posts</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div>
                    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></li>
                            <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
                            <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner" >
                            <div className="carousel-item active" style={{height: "500px"}} >
                                <img src="https://picsum.photos/id/1015/2200/1200" className="d-block w-100 " alt="" />
                            </div>
                            <div className="carousel-item" style={{height: "500px"}}>
                                <img src="https://picsum.photos/id/1016/2200/1200" className="d-block w-100 " alt="" />
                            </div>
                            <div className="carousel-item" style={{height: "500px"}}>
                                <img src="https://picsum.photos/id/502/2200/1200" className="d-block w-100" alt="" />
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button"
                           data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button"
                           data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </a>
                    </div>
                    <div className="container mt-5 mb-5">
                        <div className="jumbotron">
                            <h1 className="display-4">Hello, world!</h1>
                            <p className="lead">This is a simple hero unit, a simple jumbotron-style component for
                                calling extra attention to featured content or information.</p>
                            <hr className="my-4" />
                                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                                <p className="lead" />

                                <Link className={"btn btn-success"} to={"/start"}>Start</Link>

                        </div>
                    </div>
                </div>

                <Switch>
                    <Redirect exact from="/" to="/" />
                    <Route path="/start" component={Start} />
                    <Route path="/users" component={Users} />
                    <Route path="/posts" component={Posts} />
                </Switch>
            </div>
        )
    }
}

export default Home;
