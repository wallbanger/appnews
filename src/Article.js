import React, { Component } from 'react'
import CommentList from './CommentList'

class Article extends Component {
    constructor() {
        super()
        this.state = {
            showBody: false
        };
    }

    render() {
        return (
            <div>
                <a href = "#" onClick = {this.select.bind(this)}>select</a>
                {this.getTitle()}
                {this.getBody()}
            </div>
        )
    }

    getTitle() {
        const { title } = this.props.article
        const selectedStyle = this.props.selected ? {color: 'red'} : null;
        return  (
            <h3 style = {selectedStyle} onClick={this.handleClick.bind(this)}>
                {title}
            </h3>
        )
    }

    getBody() {
        if (!this.state.showBody) return null
        const {article} = this.props
        return (
            <div>
                <p>{article.body}</p>
                <CommentList comments = {article.comments || []} />
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

export default Article
