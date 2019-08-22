import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import { BrowserRouter } from 'react-router-dom';
import Notes from './Notes';

describe('Notes', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<BrowserRouter>
          <Notes notes={sampleNotes} folderId={sampleNotes[0].folderId}/>
        </BrowserRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders UI as expected', () => {
        const tree = renderer
          .create(<BrowserRouter><Notes notes={sampleNotes} folderId={sampleNotes[0].folderId}/></BrowserRouter>)
          .toJSON();
        expect(tree).toMatchSnapshot();
    })
})

const sampleNotes = [
    {
        "id": "d26e0034-ffaf-11e8-8eb2-f2801f1b9fd1",
        "name": "Cats",
        "modified": "2018-08-15T23:00:00.000Z",
        "folderId": "b07161a6-ffaf-11e8-8eb2-f2801f1b9fd1",
        "content": "Id vitae qui. Et ullam et eos. Suscipit perferendis et dolor non deserunt et et inventore exercitationem. Consequatur nihil ut impedit numquam ducimus. Culpa aut repellat sunt. Quas sapiente modi ea quia qui nihil maiores.\n \rIllo enim omnis illum dolorem. Voluptatem sequi pariatur id voluptatem quos. Ratione debitis laboriosam soluta optio. Eum nobis culpa sed quasi commodi sunt nesciunt doloribus accusantium.\n \rQuam cum quidem voluptas repudiandae tenetur error aut. Sit et explicabo voluptas dolore eum saepe omnis libero aut. Sit tempore voluptas voluptas ipsa ut explicabo ipsum et. Officiis minima tempora omnis consequatur est facilis eligendi nobis vel. Aliquam sapiente veniam corporis quas est omnis quis dolor dolor. Ut ducimus nobis perspiciatis debitis neque."
    },
    {
        "id": "d26e01a6-ffaf-11e8-8eb2-f2801f1b9fd1",
        "name": "Pigs",
        "modified": "2018-03-01T00:00:00.000Z",
        "folderId": "b07161a6-ffaf-11e8-8eb2-f2801f1b9fd1",
        "content": "Quaerat qui similique nihil. Aut eveniet architecto id. Fugit aut ab quam. Excepturi officia et voluptatem vel rerum voluptates quas ullam facere.\n \rDebitis quis amet. Pariatur repellendus occaecati nulla. Ducimus sit quia non asperiores. Hic unde autem.\n \rDignissimos cupiditate fuga fuga accusantium et distinctio ad aut. Nihil atque reprehenderit nihil eius in. Rem illo sint suscipit quaerat ex incidunt et ut quae."
    }
];