import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './CSS/NewAlbum.css';

function Newalbum() {
    const [Id, setId] = useState();
    const [title, setTitle] = useState('');

    function saveUser(e) {
        e.preventDefault();
        let data = {Id, title };
        fetch('https://jsonplaceholder.typicode.com/albums', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));

    }

    return (
        <div className="Album">
            <h1 id='albumHeading' className='mt-4'>Add Album To Your List</h1>

            <Form>
             <Form.Group className="mb-3" controlId="Title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Title" value={title} onChange={(e) => { setTitle(e.target.value) }} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="Id">
                    <Form.Label>Id</Form.Label>
                    <Form.Control type="number" placeholder="ID" value={Id} onChange={(e) => { setId(e.target.value) }} />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={saveUser}>
                    Add To Album
                </Button>
            </Form>
        </div>
    );
}

export default Newalbum;
