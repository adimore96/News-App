import React, { Component } from 'react'

export class NewsItem extends Component {
    
    render() {
        let { title, description, imageUrl, newsUrl, author, date} = this.props;
        return (
            <div className='my-3'>
                <div className="card " >
                    <img src={!imageUrl?"https://images.hindustantimes.com/tech/img/2022/10/02/1600x900/IMG_4284_1657976137822_1664703188118_1664703188118.jpg":imageUrl} className="card-img-top" style={{height:'20vw'}} alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p class="card-text"><small class="text-muted">By {author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
                        <a rel='noreferrer' href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem