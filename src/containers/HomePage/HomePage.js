import React, { Component } from 'react';
//import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Headerhome from './Headerhome';
import About from './About';
class HomePage extends Component {

    render() {
        

        return (
         //  <div>HomePagePage</div>
         <div>
           <Headerhome/>
           <About/>
           </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
