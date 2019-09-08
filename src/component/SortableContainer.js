import React from 'react';
import { connect } from "react-redux";
import { sortableContainer } from 'react-sortable-hoc';

const SortableContainer = sortableContainer(({ children }) => {
    return <div className="row"> {children} </div>;
});

export default connect()(SortableContainer);