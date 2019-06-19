import { IMAGES, STATS,AUTH } from '../constants';

const LoginUser = creds =>({
    type:AUTH.LOGIN,
    creds
})

const RegUser = data =>({
    type:AUTH.REG,
    data
})

const loadImages = () => ({
    type: IMAGES.LOAD,
});

const setImages = images => ({
    type: IMAGES.LOAD_SUCCESS,
    images,
});

const setError = error => ({
    type: IMAGES.LOAD_FAIL,
    error,
});

const loadImageStats = id => ({
    type: STATS.LOAD,
    id,
});

const setImageStats = (id, downloads) => ({
    type: STATS.LOAD_SUCCESS,
    id,
    downloads,
});

const setImageStatsError = id => ({
    type: STATS.LOAD_FAIL,
    id,
});

export {
    LoginUser,
    RegUser,
    loadImages,
    setImages,
    setError,
    loadImageStats,
    setImageStats,
    setImageStatsError,
};
