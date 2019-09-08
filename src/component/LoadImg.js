import React from 'react';
import { connect } from "react-redux";

const loads = ({ loading }) => {
    return loading ? (
        <div className="progress">
            <div className="indeterminate"></div>
        </div> 
    ) : ""
}
const dataLoader = state => ({
    loading: state.loading
})

export default connect(dataLoader)(loads);
