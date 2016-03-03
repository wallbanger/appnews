import React, { Component, PropTypes } from 'react'
import Article from './Article'
import CommentList from './CommentList'

class ArticleList extends Component {
    constructor() {
        super()
        this.state = {
            selected: []
        }
    }
    render() {
        const articles = this.props.articles.map((article) =>
                <li key={article.id}>
                    <Article article={article}
                        select = {this.select(article.id).bind(this)}
                        selected = {this.state.selected.includes(article.id)}/>
                </li>
        )
        return (
            <div>
                <ul>
                    {articles}
                </ul>
            </div>
        )
    }

    select(id) {
        return function() {
            this.setState({
                selected: this.state.selected.concat(id)
            })
        }
    }
}

export default ArticleList
