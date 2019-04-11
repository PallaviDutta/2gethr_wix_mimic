import React, {Component, Fragment} from 'react';
import {Header, Footer} from './Layouts/importindex';
import Main from './Main';


export default class extends Component{
    render(){
        return<Fragment style={{ backgroundColor:'green'}}>
            <Header/>
            <Main/> 
            <Footer/>
        </Fragment>
    }
}
    