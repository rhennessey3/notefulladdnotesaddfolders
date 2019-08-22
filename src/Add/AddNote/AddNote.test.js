import React from 'react';
import ReactDOM from 'react-dom';

import AddNote from './AddNote';

describe('Add Note Window', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<AddNote allFolders={sampleFolders} selectedFolder={sampleFolders[0].id}/>, div);
        ReactDOM.unmountComponentAtNode(div);
    })
})

const sampleFolders = [
    {
      "id": "b0715efe-ffaf-11e8-8eb2-f2801f1b9fd1",
      "name": "Important"
    },
    {
      "id": "b07161a6-ffaf-11e8-8eb2-f2801f1b9fd1",
      "name": "Super"
    },
    {
      "id": "b07162f0-ffaf-11e8-8eb2-f2801f1b9fd1",
      "name": "Spangley"
    }
  ];