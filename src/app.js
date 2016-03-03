import ArticleList from './ArticleList'
import fixtures from './fixtures'
import ReactDOM from 'react-dom'
import React from 'react'

ReactDOM.render(<ArticleList articles = {fixtures} />, document.getElementById('container'))