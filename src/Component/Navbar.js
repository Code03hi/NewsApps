import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <>
                <div>
                    <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="/#">NewsMonkey</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                <div className="navbar-nav">
                                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                                    <a className="nav-link" href="/business">business</a>
                                    <a className="nav-link" href="/entertainment">entertainment</a>
                                    <a className="nav-link" href="/general">general</a>
                                    <a className="nav-link" href="/health">health</a>
                                    <a className="nav-link" href="/science">science</a>
                                    <a className="nav-link" href="/sports">sports</a>
                                    <a className="nav-link" href="/technology">technology</a>
                                </div>
                            </div>
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            </div>
                        </div>
                    </nav>
                </div>
            </>
        )
    }
}
