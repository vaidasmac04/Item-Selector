import HttpClient from './HttpClient';

export const getItems = (params) => {
    return HttpClient.get('https://localhost:5001/api/items', { params });
}

