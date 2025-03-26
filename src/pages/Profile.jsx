import React from 'react';

const Profile = () => {
  const user = {
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

  return (
    <>
      <div style={{
        width: '100vw',
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
          <h1>{user.name}</h1>
          <h3 style={{ color: 'gray' }}>{user.role}</h3>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: 30 }}>
          <div>
            <h2>{user.friends}</h2>
            <p>Friends</p>
          </div>
          <div>
            <h2>{user.comments}</h2>
            <p>Comments</p>
          </div>
          <div>
            <h2>{user.bookmarks}</h2>
            <p>Bookmarks</p>
          </div>
        </div>
      </div>

      <div style={{ fontFamily: 'sans-serif', padding: 20 }}>
        <div style={{ marginBottom: 30 }}>
          <h2>About me</h2>
          <p style={{ color: '#555', lineHeight: '1.5em' }}>{user.bio}</p>
        </div>

        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <h2>Runs</h2>
            <button style={{ border: 'none', background: 'none', color: '#007bff', cursor: 'pointer' }}>
              View all
            </button>
          </div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 10 }}>
            {user.runs.map((run, index) => (
              <img
                key={index}
                src={run}
                alt={`Run ${index + 1}`}
                style={{ width: 100, height: 100, borderRadius: 8 }}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;