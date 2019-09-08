import React from 'react';
import { connect } from "react-redux";

const CardTitle = ({ id, title, dispatch }) => (
    <div className="card-content">
        <span className="card-title grey-text text-darken-4 myIco">
            <span className="blue-text darken-1" 
            onClick={() => dispatch({ type: "EDIT_CATEGORY_ASYNC", id })}>
                {title}
            </span>
            <i className="red-text material-icons right" 
            onClick={() => dispatch({ type: "DELETE_CATEGORY_ASYNC", id })}>
                delete
            </i>
        </span>
    </div>
) 

export default connect()(CardTitle);
