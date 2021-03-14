import '../styles/styles.css'
import 'lazysizes'

// React Related Code
import React from 'react'
import ReactDOM from 'react-dom'

// Import React components
import HeaderComponent from './modules/HeaderComponent'
import FooterComponent from './modules/FooterComponent'

ReactDOM.render(
    <React.StrictMode>
        <HeaderComponent />
        <FooterComponent />
    </React.StrictMode>, document.querySelector("#root"))