export const getSpotifyAuthUrl = () => {
    const clientId = import.meta.env.VITE_CLIENT_ID;
    const clientSecret = import.meta.env.VITE_CLIENT_SECRET;
    console.log(clientId, clientSecret)
    const redirectUri = 'http://localhost:5173/profile';
    const scopes = [
    'user-read-private',
    'user-read-email',
    'playlist-read-private',
    ];

    const authUrl = `https://accounts.spotify.com/authorize?response_type=token&client_id=${clientId}&client_secret=${clientSecret}&scope=${scopes.join(
    '%20'
    )}&redirect_uri=${encodeURIComponent(redirectUri)}`;

    return authUrl;
};