import React, { useState } from 'react';

function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [educationSummary, setEducationSummary] = useState('');
    const [gender, setGender] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', { name, email, educationSummary, gender });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="email">Email:</label>
            <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="educationSummary">Education Summary:</label>
            <textarea
                id="educationSummary"
                value={educationSummary}
                onChange={(e) => setEducationSummary(e.target.value)}
            ></textarea>
            <div>
                <label>Gender:</label>
                <label>
                    <input
                        type="radio"
                        value="male"
                        checked={gender === 'male'}
                        onChange={(e) => setGender(e.target.value)}
                    />
                    Male
                </label>
                <label>
                    <input
                        type="radio"
                        value="female"
                        checked={gender === 'female'}
                        onChange={(e) => setGender(e.target.value)}
                    />
                    Female
                </label>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

function App() {
    return (
        <div>
            <h1>Education Assistance Application</h1>
            <Form />
        </div>
    );
}

export default App;
