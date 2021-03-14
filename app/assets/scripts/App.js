import '../styles/styles.css'
import 'lazysizes'

// React Related Code
import React from 'react'
import ReactDOM from 'react-dom'

// Import React components
import HeaderComponent from './modules/HeaderComponent'
import MainComponent from './modules/MainComponent'
import FooterComponent from './modules/FooterComponent'


ReactDOM.render(
    <React.StrictMode>
        <HeaderComponent />
        <MainComponent />
        <FooterComponent />
    </React.StrictMode>, document.querySelector("#root"))