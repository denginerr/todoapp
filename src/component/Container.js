import React from 'react';
import SortableContainer from './SortableContainer';
import SortableItem from './SortableItem';
import { connect } from "react-redux";
import arrayMove from 'array-move';

const Container = ({state, todo, onSortEnd, addCategory, toggleFilter}) => (
    <div className="container">
        <ul id="dropdown1" className="dropdown-content">
            {state.todo.map((value, index) => (
                <li key={`filt${index}`} className={value.show ? "teal lighten-2" : "white"}
                onClick={() => toggleFilter(index)}>
                    <span className={value.show ? "white-text" : "teal-text"}>{value.title}</span></li>
            ))}
        </ul>
        <nav className="myNav">
            <div className="nav-wrapper">
                <ul className="left">
                    <li><span className="dropdown-button" data-activates="dropdown1">Lihat<i className="material-icons right">arrow_drop_down</i></span></li>
                </ul>
                <ul className="right">
                    <li><span onClick={() => addCategory()}>+ Tambah Kategori</span></li>
                </ul>
            </div>
        </nav>
        <SortableContainer onSortEnd={(collection) => onSortEnd(arrayMove(state.todo, collection.oldIndex, collection.newIndex))} useDragHandle axis="xy">
            {todo.map((value, index) => (
                <SortableItem key={`item${index}`} id={index} index={index} value={value} />
            ))}
        </SortableContainer>
        {todo.length === 0 ? (
            <div className="col s12 center">
                Kosong
            </div>
        ) : "" }
    </div>
)

const mapStateToProps = state => ({
    state,
    todo: state.todo.filter(e => e.show)
})

const map = dispatch => ({
    addCategory: () => dispatch({ type: "ADD_CATEGORY_ASYNC", value: false }),
    onSortEnd: (index) => dispatch({ type: "ON_SORT_END_ASYNC", value: index }),
    toggleFilter: (index) => dispatch({ type: "TOGGLE_FILTER_ASYNC", id: index }),
})

export default connect(
    mapStateToProps,
    map
)(Container);
