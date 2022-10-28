import React, { useState } from 'react';

const CreateSong = (props) => {
    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [album, setAlbum] = useState('');
    const [releaseDate, setReleaseDate] = useState('');
    const [genre, setGenre] = useState('');

    function handleSubmit(event){
        event.preventDefault();
        let newSong = {
            title: title,
            artist: artist,
            album: album,
            release_date: releaseDate,
            genre: genre
        };
        props.createNewSong(newSong);
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <div><h3 className='d-flex justify-content-center'>Add New Song To Music Library</h3></div>
            <div className='col'>
                <div className='row spacing padding-lr'>
                    <label className='col-sm-2 col-form-label label-styling'>Title</label>
                    <input className='col-sm-8 form-control' type='text' placeholder='Enter Song Title' value={title} onChange={(event) => setTitle(event.target.value)} />
                </div>

                <div className='row spacing padding-lr'>
                    <label className='col-sm-2 col-form-label label-styling'>Artist</label>
                    <input className='col-sm-8 form-control' type='text' placeholder='Enter Artist Name' value={artist} onChange={(event) => setArtist(event.target.value)} />
                </div>

                <div className='row spacing padding-lr'>
                    <label className='col-sm-2 col-form-label label-styling'>Album</label>
                    <input className='col-sm-8 form-control' type='text' placeholder='Enter Album Name' value={album} onChange={(event) => setAlbum(event.target.value)}/>
                </div>

                <div className='row spacing padding-lr'>
                    <label className='col-sm-2 col-form-label label-styling'>Release Date</label>
                    <input className='col-sm-8 form-control' type='date' value={releaseDate} onChange={(event) => setReleaseDate(event.target.value)}/>
                </div>

                <div className='row spacing padding-lr'>
                    <label className='col-sm-2 col-form-label label-styling'>Genre</label>
                    <input className='col-sm-8 form-control' type='text' placeholder='Enter Genre' value={genre} onChange={(event) => setGenre(event.target.value)}/>
                </div>

                <div className='d-flex justify-content-end'><button className='btn btn-primary' type='submit'>Add Song</button></div>
            </div>
        </form>
     );
}
 
export default CreateSong;