// get your own key from unsplash please 😇
const KEY =
    '?client_id=5f96323678d05ff0c4eb264ef184556868e303b32a2db88ecbf15746e6f25e02';
const URL = `https://api.unsplash.com/photos/`;

const fetchImages = async page => {
    const response = await fetch(`${URL}${KEY}&per_page=3&page=${page}`);
    const data = await response.json();
    if (response.status >= 400) {
        throw new Error(data.errors);
    }
    return data;
};

const fetchImageStats = async id => {
    const response = await fetch(`${URL}/${id}/statistics${KEY}`);
    const data = await response.json();
    if (response.status >= 400) {
        throw new Error(data.errors);
    }
    return data;
};

const authenticateUser = async creds => {
    const options = {
        method: 'POST',
        headers: {
            'Set-Cookie':"name=arvind",
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(creds)
    }
    const response = await fetch(`http://localhost:3001/auth`,options );
    const data = await response.json();
    if (response.status >= 400) {
        throw new Error(JSON.stringify(data));
    }
    return data;
};

const regUser = async data => {
    const options = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    const response = await fetch(`${URL}`,options );
    const res = await response.json();
    if (response.status >= 400) {
        throw new Error(JSON.stringify(res));
    }
    return res;
};

export {
    authenticateUser,
    regUser,
    fetchImages,
    fetchImageStats
};