import React, { Component } from 'react'

export default class NewsItems extends Component {
    render() {
        let { title, description, imgurl, newsUrl, authorName, time, source } = this.props;
        return (
            <>
                <div className="card my-3" style={{
                    width: "24rem",
                    height: "400px",
                }}>
                    <span className="position-absolute top-0 translate-middle start-50 translate-middle badge rounded-pill bg-danger" style={{ zIndex: 2 }}>{source}</span>
                    <img src={imgurl ? imgurl : "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2023/12/kadha-1703234589.jpg"} className="card-img-top" alt="" style={{
                        width: "100%",
                        height: "170px",
                    }} />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href={newsUrl} className="btn btn-sm btn-primary">Go somewhere</a>
                        <p className="card-text my-2"><small className='text-muted'> By : {!authorName ? "Unknown" : authorName} on {time} </small></p>
                    </div>
                </div>
            </>
        )
    }
}
