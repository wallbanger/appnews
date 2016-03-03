import ReactDOM from 'react-dom'
import React from 'react'
import articles from './fixtures'

class Article extends React.Component {
    render() {
        const { title, body } = this.props.article
        return (
            <div>
                <h3>{title}</h3>
                <p>{body}</p>
            </div>
        )
    }
}

class ArticleList extends React.Component {
    render() {
        const articles = this.props.articles.map((article) =>
        <li><Article article={article} /></li>)

        return(
            <div>
                <ul>
                    {articles}
                </ul>
            </div>
        )
    }
}

ReactDOM.render(<ArticleList articles={articles} />, document.getElementById('container'))