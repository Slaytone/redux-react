import React from 'react';
import {bindActionCreators} from "redux";
import  {connect} from "react-redux";
import * as actions from "../action";



const Counter = ({counter, inc, dec, rnd}) => {
    return (
        <div className="jumbotron">
            <h2> {counter} </h2>
            <button onClick={inc} className="btn btn-primary btn-lg">INC</button>
            <button onClick={dec} className="btn btn-primary btn-lg">DEC</button>
            <button onClick={rnd} className="btn btn-primary btn-lg">RANDOM INC</button>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        counter: state
    }
}

const mapDispatchToProps = (dispatch) => {
    const {inc, dec, rnd} = bindActionCreators(actions, dispatch);
    return {
        inc,
        dec,
        rnd: () => {
            const RandomValue = Math.floor(Math.random()*10);
            rnd(RandomValue);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Counter);