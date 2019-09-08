import React from 'react';
import { sortableHandle } from 'react-sortable-hoc';

const DragHandle = sortableHandle(() => (
    <div className="card-image waves-effect waves-block waves-light">
        <img className="activator" src="images/office.jpg" alt="draganddrop" />
    </div>
));

export default DragHandle