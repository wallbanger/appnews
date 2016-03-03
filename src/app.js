import ReactDOM from 'react-dom'
import React from 'react'
import articles from './fixtures'

class Article extends React.Component {
    state = {
        showBody: false
    };

    render() {
        const { title, body } = this.props.article
        const bodyElement = this.state.showBody ? <p>{body}</p> : null
        const selectedStyle = this.props.selected ? {color: 'red'} : null
        return (
            <div>
                <h3
                    style = {selectedStyle}
                    onClick={this.handleClick.bind(this)}>{title}</h3>
                <a href = "#" onClick = {this.select.bind(this)}>select</a>
                {bodyElement}
            </div>
        )
    }

    select(ev) {
        ev.preventDefault()
        this.props.select()
    }

    handleClick(ev) {
        this.setState({
            showBody: !this.state.showBody
        })
    }
}

class ArticleList extends React.Component {
    state = {
        selected: []
    };

    static propTypes = {
        articles: React.PropTypes.array
    };

    render() {
        const articles = this.props.articles.map((article) =>
        <li key={article.id}>
            <Article
                article={article}
                select = {this.select(article.id).bind(this)}
                selected = {this.state.selected.includes(article.id)} />
        </li>)

        return(
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

ReactDOM.render(<ArticleList articles={articles} />, document.getElementById('container'))