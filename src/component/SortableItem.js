import React from 'react';
import { connect } from "react-redux";
import { sortableElement } from 'react-sortable-hoc';
import DragHandle from './DragHandle';
import Lists from './Lists';
import CardTitle from './CardTitle';

const SortableItem = sortableElement(({id, value, changeCategoriName, dispatch }) => (
    <div className="col s12 m6 l4">
        <div className="card sticky-action">
            <DragHandle />
            <CardTitle id={id} title={value.title}/>
            <ul className="collection">
                <li className="collection-item myItems teal white-text"
                    onClick={() => dispatch({ type: "ADD_LIST_ASYNC", id })}>
                    + Tambah Catatan
                </li>
                {value.lists.filter(e => e.show).map((list, index) => (
                    <Lists key={`ora${id}${index}`} id={`list${id}-${index}`} tkey={id} index={index} value={list} />
                ))}
                {value.lists.length === 0 ? (
                    <li className="collection-item">
                        Kosong
                    </li>
                ) : ""}
            </ul>
        </div>
    </div>
));

const mapStateToProps = state => (state)

export default connect(mapStateToProps)(SortableItem);
