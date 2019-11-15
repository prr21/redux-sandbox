import React from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';

const Sandbox = ({ dec, inc, rnd, count }) => {
	return (
		<div className="sandbox d-flex justify-content-center align-items-center">
	    	<div className="calc-window bg-white border border-light text-center">
		    	<div className="count-window bg-dark">
			  		<span id="count">{count}</span>
		    	</div>
		    	<div className="btns d-flex justify-content-between">
		    		<button id="dec"
		    			onClick={dec}
		    			className="btn btn-danger btn-lg">
		    			Dec
		    		</button>

		    		<button id="rnd"
		    			onClick={rnd}
		    			className="btn btn-primary btn-lg">
		    			Rnd
		    		</button>

		    		<button id="inc"
		    			onClick={inc}
		    			className="btn btn-success btn-lg">
		    			Ink
		    		</button>
		    	</div>
	    	</div>
	    </div>
	)
}

const mapStateToProps = (state) => {
	return {
		count: state
	}
}

export default connect(mapStateToProps, actions)(Sandbox)
