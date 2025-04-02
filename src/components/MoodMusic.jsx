import React, { useEffect, useState } from 'react';
import { getSpotifyAuthUrl } from '../services/spotifyAuth';
import axios from 'axios';
import '../styles/MoodExperience.css';

const SpotifyIntegration = () => {
    const [spotifyToken, setSpotifyToken] = useState(null);
    const [playlists, setPlaylists] = useState([]);

    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            const token = new URLSearchParams(hash.substring(1)).get('access_token');
            if (token) {
                setSpotifyToken(token);
                window.location.hash = '';
            }
        }
    }, []);

    const fetchPlaylists = async (mood) => {
        if (!spotifyToken) {
            alert('Please sign in to Spotify');
            return;
        }

        const moodToPlaylist = {
            '😊': 'Energetic Pop',
            '😐': 'Chill Vibes',
            '😩': 'Motivation Boost'
        };

        const genre = moodToPlaylist[mood] || 'pop';

        try {
            const response = await axios.get('https://api.spotify.com/v1/search', {
                headers: {
                    Authorization: `Bearer ${spotifyToken}`,
                },
                params: {
                    q: genre,
                    type: 'playlist',
                    limit: 10,
                },
            });
            setPlaylists(response.data.playlists.items);
        } catch (error) {
            console.error('Error fetching playlists:', error.response?.data || error.message);
        }
    };

    return (
        <div className="mood-experience">
            <h3 className="mood-experience__label">Music</h3>
            {!spotifyToken ? (
                <a href={getSpotifyAuthUrl()}>Log in with Spotify</a>
            ) : (
                <div className="mood-experience__options">
                    <button className="mood-experience__button" onClick={() => fetchPlaylists('😊')}>😊</button>
                    <button className="mood-experience__button" onClick={() => fetchPlaylists('😐')}>😐</button>
                    <button className="mood-experience__button" onClick={() => fetchPlaylists('😩')}>😩</button>
                </div>
            )}

            {playlists.length > 0 && (
                <div className="mood-experience__suggestion">
                    <p>Your recommended playlists:</p>
                    <ul>
                        {playlists.map((playlist, index) => {
                            if (!playlist) return null;
                            return (
                                <li key={index}>
                                    <a href={playlist.external_urls.spotify} target="_blank" rel="noopener noreferrer">
                                        {playlist.name}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default SpotifyIntegration;
