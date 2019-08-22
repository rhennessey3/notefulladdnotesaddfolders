import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import { BrowserRouter } from 'react-router-dom';
import SidebarNoteDetails from './SidebarNoteDetails';

describe('Sidebar when note is clicked', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<BrowserRouter>
          <SidebarNoteDetails folders={sampleFolders} folderId={sampleFolders[0].id}/>
        </BrowserRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders UI correctly', () => {
        const tree = renderer
          .create(<BrowserRouter><SidebarNoteDetails folders={sampleFolders} folderId={sampleFolders[0].id}/></BrowserRouter>)
          .toJSON();
        expect(tree).toMatchSnapshot();
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