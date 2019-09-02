import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';

import { shallow } from 'enzyme';

import Sidebar from './Sidebar';

describe('Main sidebar', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');

        ReactDOM.render(
        <BrowserRouter> 
            <Sidebar folders={sampleFolders}/>
        </BrowserRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the UI as expected', () => {
        const tree = renderer
          .create(<BrowserRouter><Sidebar folders={sampleFolders}/></BrowserRouter>)
          .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('loads dialog add folder window when clicked', () => {
      const onClick = jest.fn();
      const wrapper = shallow(<Sidebar folders={sampleFolders} addClickHandler={onClick} />)
      wrapper.find('button').at(0).simulate('click');
      expect(onClick).toBeCalledWith();
    })
});

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
