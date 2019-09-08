import React from 'react';
import { connect } from "react-redux";

const Lists = ({ id, tkey, index, value, dispatch }) => (
    <li className="collection-item myItems myIco">
        <div className="row" style={{margin:0}}>
            <div className="col s2">
                <input type="checkbox" id={id} defaultChecked={value.status} />
                <label htmlFor={id}
                    onClick={() => dispatch({ type: "TOGGLE_LIST_ASYNC", id: [tkey, index] })}>
                </label>
            </div>
            <div className="col s8">
                <p style={{ wordWarp: "break-word", margin:0 }}>
                    {value.list}
                </p>
            </div>
            <div className="col s2">
                <i style={{ margin: 2 }} className="material-icons right red lighten-1 white-text right"
                    onClick={() => dispatch({ type: "DELETE_LIST_ASYNC", id: [tkey, index] })}>
                        delete
                </i>
                <i style={{ margin: 2 }} className="material-icons right teal white-text left"
                    onClick={() => dispatch({ type: "EDIT_LIST_ASYNC", id : [tkey, index] })}>
                        edit
                </i>
            </div>
        </div>
    </li>
);

const mapStateToProps = state => (state)

export default connect(mapStateToProps)(Lists);
