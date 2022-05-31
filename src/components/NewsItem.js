import { Component } from 'react'

const NewsItem = function(props) {
    const { title, description, url, urlToImage } = props.article
    
    return (
        <div>
            <h1><a href={url} target='_blank'>{title}</a></h1>
            <img style={{ height: '100px' }} src={urlToImage} />
            <p>{description}</p>
        </div>
    )
}

export default NewsItem