import React, { useEffect, useState } from 'react';
import { getSpotifyAuthUrl } from '../services/spotifyAuth';
import axios from 'axios';
import '../styles/MoodExperience.css';
const spotifyLogoUrl = "https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg";

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
        <div className="mood-music-wrapper">
            <div className="spotify-player green-theme">
                <div className="spotify-header-group">
                    <div className="spotify-logo">
                        <img src={spotifyLogoUrl} alt="Spotify" style={{ width: '32px', height: '32px', marginBottom: '10px' }} />
                    </div>
                    <h3 className="mood-experience__label">Mood Music</h3>
                </div>
                {!spotifyToken ? (
                    <a href={getSpotifyAuthUrl()}>Log in with Spotify</a>
                ) : (
                    <div className="mood-experience__options">
                        <div className="mood-option">
                            <button className="mood-experience__button large-emoji" onClick={() => fetchPlaylists('😊')}>
                                😊
                            </button>
                            <p className="mood-label">Energetic Pop</p>
                        </div>
                        <div className="mood-option">
                            <button className="mood-experience__button large-emoji" onClick={() => fetchPlaylists('😐')}>
                                😐
                            </button>
                            <p className="mood-label">Chill Vibes</p>
                        </div>
                        <div className="mood-option">
                            <button className="mood-experience__button large-emoji" onClick={() => fetchPlaylists('😩')}>
                                😩
                            </button>
                            <p className="mood-label">Motivation Boost</p>
                        </div>
                    </div>
                )}

                {playlists.length > 0 && (
                    <div className="playlist-wrapper">
                        <div className="spotify-media-box">
                            <div className="mood-experience__suggestion playlist-box dark-background">
                                <h4 className="playlist-heading">Your recommended playlists:</h4>
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
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SpotifyIntegration;
