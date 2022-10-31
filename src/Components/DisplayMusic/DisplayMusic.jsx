import axios from "axios"
import React, { useEffect, useState } from 'react';

const DisplayMusic = (props) => {
    const [toggle, setToggle] = useState();

    useEffect(() => {
        props.getAllSongs()
    }, [toggle, props.toggle]);

    const deleteSong = async (key) => {
        await axios.delete(`http://127.0.0.1:8000/api/music/${key}/`);
        setToggle(!toggle);
    }

    return (
        <div>
            <h3 className="d-flex justify-content-center" data-cy='music-library'>Music Library</h3>
            <table className='table' id='music-library'>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Artist</th>
                        <th>Album</th>
                        <th>Release Date</th>
                        <th>Genre</th>
                    </tr>
                </thead>
                <tbody>
                    {props.songs.map((song, index) => {
                        return (
                            <tr key={index}>
                                <td>{song.title}</td>
                                <td>{song.artist}</td>
                                <td>{song.album}</td>
                                <td>{song.release_date}</td>
                                <td>{song.genre}</td>
                                <td><button type='button' onClick={() => deleteSong(song.id)} className='btn btn-primary'>Delete</button></td>
                            </tr>
                        )
                    })} 
                </tbody>
            </table>
        </div>
    )
}

export default DisplayMusic;