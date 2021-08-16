import React from 'react';
import axios from 'axios';

const Posts = () => {
    const [data, setdata] = React.useState([
        {
            data: {
                title: '',
                message: '',
                tags: '',
                creator: ''
            }
        }
    ]);

    const handleChange = (event) => {
        setdata({ ...data, [event.target.name]: event.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:5000/posts', data)
            .then(function (respoons) {
                console.log(respoons);
                console.log(data)
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    /* React.useEffect(() => {
        axios.post('http://localhost:5000/posts', {
            handleSubmit
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error)
            })
    }, []); */

    return (
        <div className="container">
            <form className="white" onSubmit={handleSubmit}>
                <h5 className="grey-text.text-darken-3">Post</h5>
                <div className="input-field mr-2">
                    <input placeholder="title" name="title" value={data.title} onChange={handleChange} />
                </div>

                <div className="input-field mr-2">
                    <input placeholder="message" name="message" value={data.message} onChange={handleChange} />
                </div>

                <div className="input-field mr-2">
                    <input placeholder="creator" name="creator" value={data.creator} onChange={handleChange} />
                </div>

                <div className="input-field mr-2">
                    <input placeholder="tags" name="tags" value={data.tags} onChange={handleChange} />
                </div>

                <div className="input-field mr-2">
                    <button className="btn blue darken-3" type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Posts;
