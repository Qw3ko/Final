import React, { Component } from 'react';
import Main from './Main';
import Header from './Header';
import Footer from './Footer';

export default class Both extends Component {
    render() {
        return (
            <>
                <Header />
                <Main />
                <Footer />
            </>
        )
    }
}