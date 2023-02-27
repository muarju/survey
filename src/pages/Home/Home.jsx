import React, { useState, useEffect } from 'react'
import axios from 'axios'
export default function Home() {
    const data = [
        {
            "id": 1,
            "createdAt": "2023-02-24T10:37:35.463Z",
            "updatedAt": "2023-02-24T10:37:35.463Z",
            "title": "are you a developer?",
            "surveyId": 1,
            "name": "queston1",
            "type": "input",
            "inputType": "text"
        },
        {
            "id": 2,
            "createdAt": "2023-02-24T10:37:35.463Z",
            "updatedAt": "2023-02-24T10:37:35.463Z",
            "title": "How many your of experience do you have?",
            "surveyId": 1,
            "name": "queston2",
            "type": "input",
            "inputType": "number"
        },
        {
            "id": 3,
            "createdAt": "2023-02-24T10:37:35.463Z",
            "updatedAt": "2023-02-24T10:37:35.463Z",
            "title": "When you start your first coding?",
            "surveyId": 1,
            "name": "queston3",
            "type": "input",
            "inputType": "date"
        },
        {
            "id": 4,
            "createdAt": "2023-02-24T10:37:35.463Z",
            "updatedAt": "2023-02-24T10:37:35.463Z",
            "title": "When you wake up at the morning?",
            "surveyId": 1,
            "name": "queston4",
            "type": "input",
            "inputType": "time"
        },
        {
            "id": 5,
            "createdAt": "2023-02-24T10:37:35.463Z",
            "updatedAt": "2023-02-24T10:37:35.463Z",
            "title": "When you will be available for a quick meeting?",
            "surveyId": 1,
            "name": "queston5",
            "type": "input",
            "inputType": "datetime"
        },
        {
            "id": 6,
            "createdAt": "2023-02-24T10:37:35.463Z",
            "updatedAt": "2023-02-24T10:37:35.463Z",
            "title": "Select your programming langues you know",
            "surveyId": 1,
            "name": "queston6",
            "type": "input",
            "inputType": "checkbox",
            "options": ["JavaScript", "HTML", "CSS", "JAVA", "Python", "Ruby", "C++"]
        },
        {
            "id": 7,
            "createdAt": "2023-02-24T10:37:35.463Z",
            "updatedAt": "2023-02-24T10:37:35.463Z",
            "title": "Select your gender",
            "surveyId": 1,
            "name": "queston7",
            "type": "input",
            "inputType": "radio",
            "options": ["male", "female"]
        },
        {
            "id": 8,
            "createdAt": "2023-02-24T10:37:35.463Z",
            "updatedAt": "2023-02-24T10:37:35.463Z",
            "title": "Which country do you currently living?",
            "surveyId": 1,
            "name": "queston8",
            "type": "input",
            "inputType": "select",
            "options": ["Portugal", "Germany", "Sweden", "Brazil", "Australia"]
        },
        {
            "id": 9,
            "createdAt": "2023-02-24T10:37:35.463Z",
            "updatedAt": "2023-02-24T10:37:35.463Z",
            "title": "Tell us something about yourself",
            "surveyId": 1,
            "name": "queston9",
            "type": "input",
            "inputType": "textarea"
        },
        {
            "id": 10,
            "createdAt": "2023-02-24T10:37:35.463Z",
            "updatedAt": "2023-02-24T10:37:35.463Z",
            "title": "do you have any alternative email?",
            "surveyId": 1,
            "name": "queston10",
            "type": "input",
            "inputType": "email"
        },
        {
            "id": 11,
            "createdAt": "2023-02-24T10:37:35.463Z",
            "updatedAt": "2023-02-24T10:37:35.463Z",
            "title": "Input your portfolio website address",
            "surveyId": 1,
            "name": "queston11",
            "type": "input",
            "inputType": "url"
        },
        {
            "id": 12,
            "createdAt": "2023-02-24T10:37:35.463Z",
            "updatedAt": "2023-02-24T10:37:35.463Z",
            "title": "What is your telephone number?",
            "surveyId": 1,
            "name": "queston12",
            "type": "input",
            "inputType": "tel"
        },
        {
            "id": 13,
            "createdAt": "2023-02-24T10:37:35.463Z",
            "updatedAt": "2023-02-24T10:37:35.463Z",
            "title": "Select your favorite color",
            "surveyId": 1,
            "name": "queston13",
            "type": "input",
            "inputType": "color"
        },
        {
            "id": 14,
            "createdAt": "2023-02-24T10:37:35.463Z",
            "updatedAt": "2023-02-24T10:37:35.463Z",
            "title": "Upload your profile photo",
            "surveyId": 1,
            "name": "queston14",
            "type": "input",
            "inputType": "file"
        },
        {
            "id": 15,
            "createdAt": "2023-02-24T10:37:35.463Z",
            "updatedAt": "2023-02-24T10:37:35.463Z",
            "title": "Select your expert level out of 100",
            "surveyId": 1,
            "name": "queston15",
            "type": "input",
            "inputType": "range",
            "default": 60
        }
    ]
    const [ShuffledArray, setShuffledArray] = useState([]);
    const [checkboxItems, setCheckboxItems] = useState([]);
    const [SuervyData, setSuervyData] = useState({
        name: "",
        email: "",
    });

    const onInputChange = e => {
        setSuervyData({ ...SuervyData, [e.target.name]: e.target.value });
    };
    const onInputCheckboxChange = e => {
        let value = e.target.value;
        setCheckboxItems([...checkboxItems, value])
        setSuervyData({ ...SuervyData, [e.target.name]: [...checkboxItems, value] });
    };
    const [selectedImage, setSelectedImage] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);
    const handleFileUpload = file => {
        setImageUrl(URL.createObjectURL(file));
        let form = new FormData()
        form.append('file', file)
        setSelectedImage(form);
    }


    function shuffle(array) {
        let currentIndex = array.length, randomIndex;

        // While there remain elements to shuffle.
        while (currentIndex !== 0) {

            // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }

        return array;
    }

    useEffect(() => {
        setShuffledArray(shuffle(data))
    }, []);


    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/survey/add`, SuervyData, { withCredentials: true });
        if (response) {
            if (selectedImage === null) {

            } else {
                const addImageResponse = await axios.put(`${process.env.REACT_APP_API_URL}/survey/` + response.data._id, selectedImage, { withCredentials: true })
                if (addImageResponse) {

                }
            }
        }
    }
    return (
        <div className='container'>
            <div className="row py-5 justify-content-center">
                <div className="col-md-8">
                    <h2 className='text-center'>A Simple Survey Form</h2>
                    <form onSubmit={handleSubmit}>
                        <div class="mb-3">
                            <label for="name" class="form-label">Full Name</label>
                            <input type="text" name='name' class="form-control" id="name" onChange={onInputChange} placeholder='Input your full name' />
                        </div>
                        <div class="mb-3">
                            <label for="email" class="form-label">Email address</label>
                            <input type="email" name='email' class="form-control" id="email" onChange={onInputChange} placeholder='Input your email address' />
                        </div>
                        {ShuffledArray && ShuffledArray.length > 0 && ShuffledArray.map((item, index) => (
                            <div className='mb-3' key={index}>
                                <label class="form-label">{item?.title}</label>
                                {(() => {
                                    switch (item?.inputType) {
                                        case 'number':
                                            return (
                                                <input type="number" className='form-control' name={item?.name} onChange={onInputChange} />
                                            );
                                        case 'date':
                                            return (
                                                <input type="date" className='form-control' name={item?.name} onChange={onInputChange} />
                                            );
                                        case 'time':
                                            return (
                                                <input type="time" className='form-control' name={item?.name} onChange={onInputChange} />
                                            );
                                        case 'datetime':
                                            return (
                                                <input type="datetime-local" className='form-control' name={item?.name} onChange={onInputChange} />
                                            );
                                        case 'checkbox':
                                            return (
                                                <div >
                                                    {item?.options.map((option, index) => (
                                                        <div className='form-check' name={item?.name} onChange={onInputCheckboxChange}>
                                                            <input type="checkbox" name={item?.name} key={index} value={option} className='form-check-input' />
                                                            <label class="form-label text-capitalize">{option}</label>
                                                        </div>
                                                    ))
                                                    }
                                                </div>
                                            );
                                        case 'radio':
                                            return (
                                                <div >
                                                    {item?.options.map((option, index) => (
                                                        <div className='form-check' name={item?.name} onChange={onInputChange}>
                                                            <input type="radio" name={item?.name} key={index} value={option} className='form-check-input' />
                                                            <label class="form-label text-capitalize">{option}</label>
                                                        </div>
                                                    ))
                                                    }
                                                </div>
                                            );
                                        case 'select':
                                            return (
                                                <select className='form-select' name={item?.name} onChange={onInputChange}>
                                                    {item?.options.map((option, index) => (
                                                        <option value={option}>{option}</option>
                                                    ))
                                                    }
                                                </select>
                                            );
                                        case 'textarea':
                                            return (
                                                <input type="textarea" name={item?.name} className='form-control' onChange={onInputChange} style={{ height: '100px' }} />
                                            );
                                        case 'email':
                                            return (
                                                <input type="email" name={item?.name} className='form-control' onChange={onInputChange} />
                                            );
                                        case 'url':
                                            return (
                                                <input type="url" name={item?.name} className='form-control' onChange={onInputChange} />
                                            );
                                        case 'tel':
                                            return (
                                                <input type="tel" name={item?.name} className='form-control' onChange={onInputChange} />
                                            );
                                        case 'color':
                                            return (
                                                <input type="color" name={item?.name} className='form-control' onChange={onInputChange} />
                                            );
                                        case 'file':
                                            return (
                                                <input type="file" onChange={handleFileUpload} className='form-control' />
                                            );
                                        case 'range':
                                            return (
                                                <input type="range" name={item?.name} className='form-range' onChange={onInputChange} defaultValue={item?.default} />
                                            );
                                        default:
                                            return (
                                                <input type="text" name={item?.name} onChange={onInputChange} className='form-control' />
                                            )
                                    }
                                })
                                    ()}

                            </div>
                        ))}
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
