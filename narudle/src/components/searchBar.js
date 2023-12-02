
import React, { useState, useEffect } from 'react';


const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        getCharacters();
    }, []);

    const getCharacters = async () => {
        try {
            const response = await fetch('http://localhost:3000/characters');
            const data = await response.json();
            setCharacters(data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };
 
    // const filteredCharacters = characters.filter((character) =>
    //     character.name.toLowerCase().includes(searchTerm.toLowerCase())
    // );


    return (
        <div>
            <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleSearch}
            />
            <button>Search</button>

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {filteredCharacters.map((character) => (
                        <tr key={character.id}>
                            <td>{character.name}</td>
                        </tr>
                    ))} */}
                </tbody>
            </table>
        </div>
    );
};

export default SearchBar;

