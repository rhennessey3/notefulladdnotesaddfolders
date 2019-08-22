import React from 'react';
import ReactDOM from 'react-dom';

import AddFolder from './AddFolder';

describe('Add Folder Window', () => {
    it('renders as expected', () => {
        const div = document.createElement('div');
        ReactDOM.render(<AddFolder/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
})
