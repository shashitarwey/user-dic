import axios from 'axios';
import { successHandler,errorHandler } from './helper';

export const getUsers = () => {
    return axios.get(`https://jsonplaceholder.typicode.com/users`,{
        headers: {
            'Content-Type': 'application/json'
        }
    }
    )
    .then( successHandler )
    .catch( errorHandler )
}

export const getPosts = () => {
    return axios.get(`https://jsonplaceholder.typicode.com/posts`, {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    )
    .then( successHandler )
    .catch( errorHandler )
}

export const getComments = () => {
    return axios.get(`https://jsonplaceholder.typicode.com/comments`, {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    )
    .then( successHandler )
    .catch( errorHandler )
}

export const getAlbums = () => {
    return axios.get(`https://jsonplaceholder.typicode.com/albums`, {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    )
    .then( successHandler )
    .catch( errorHandler )
}

export const getPhotos = () => {
    return axios.get(`https://jsonplaceholder.typicode.com/photos`, {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    )
    .then( successHandler )
    .catch( errorHandler )
}



