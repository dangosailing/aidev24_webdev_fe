import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import UserContext from '../contexts/UserContextBase';
import '../styles/Profile.css';
import MapView from '../components/MapView';
import RunCard from '../components/RunCard';
import MoodExperience from '../components/MoodExperience';
import SpotifyIntegration from '../components/MoodMusic';

const Profile = () => {

  const { user } = useContext(UserContext);
  const [token, setToken] = useState('token')
  const navigate = useNavigate()
  const placeholderuser = {
    name: 'Dirk Diggler',
    role: 'Photographer',
    friends: 2000,
    comments: 26,
    bookmarks: 48,
    bio: `An artist of considerable range, named Dirk. I loves to run, write, perform and records all of his own music.`,
    runs: [
      `url(https://placehold.co/600x400)`,
      `url(https://placehold.co/600x400)`,
      `url(https://placehold.co/600x400)`
    ]
  };

  useEffect(() => {
    const sessionToken = sessionStorage.getItem('token')
    if (!sessionToken) {
      navigate('/login')

    } else {
      setToken(sessionToken)
    }
  }, [navigate])

  return (
    
    <>
      <div className="container">
        <h1>Welcome, {user?.username}!</h1>
        <div style={{
          margin: '0',
          backgroundImage: `url(https://placehold.co/600x400)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: 20,
          borderRadius: 8,
          color: 'white'
        }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <img
              src={`url(https://placehold.co/600x400)`}
              alt="Profile"
              style={{ borderRadius: '50%', width: 100, height: 100, objectFit: 'cover' }}
            />
            <h1>{placeholderuser.name}</h1>
            <h3 style={{ color: 'gray' }}>{placeholderuser.role}</h3>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: 30 }}>
            <div>
              <h2>{placeholderuser.friends}</h2>
              <p>Friends</p>
            </div>
            <div>
              <h2>{placeholderuser.comments}</h2>
              <p>Comments</p>
            </div>
            <div>
              <h2>{placeholderuser.bookmarks}</h2>
              <p>Bookmarks</p>
            </div>
          </div>
        </div>

        <MapView />

        <div>
          <div style={{ marginBottom: 30 }}>
            <h2>About me</h2>
            <p style={{ color: '#555', lineHeight: '1.5em' }}>{placeholderuser.bio}</p>
          </div>

          <MoodExperience />

          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <h2>Runs</h2>
              <button style={{ border: 'none', background: 'none', color: '#007bff', cursor: 'pointer' }}>
                View all
              </button>
            </div>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 10 }}>
              {placeholderuser.runs.map((run, index) => (
                <img
                  key={index}
                  src={run}
                  alt={`Run ${index + 1}`}
                  style={{ width: 100, height: 100, borderRadius: 8 }}
                />
              ))}
            </div>
            <RunCard
              date="27 mars 2025"
              distance={5.2}
              time={31}
              mood="😊"
            />
          </div>
        </div>
      </div>

      <div>
        <h1>Recomended music:</h1>
        <SpotifyIntegration />
      </div>
    </>
  );
};

export default Profile;