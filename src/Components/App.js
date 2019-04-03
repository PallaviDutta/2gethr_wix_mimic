import React, {Component, Fragment} from 'react';
import {Header, Footer} from './Layouts/importindex';
import Main from './Main';


export default class extends Component{
    render(){
        return<Fragment>
            <Header/>
            <Main/> 
            <Footer/>
        </Fragment>
    }
}
    