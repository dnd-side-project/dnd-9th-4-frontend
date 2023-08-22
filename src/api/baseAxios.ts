import axios from 'axios';

export const baseAxios = axios.create({
  baseURL: 'https://dnd-newple-server.store',
});
