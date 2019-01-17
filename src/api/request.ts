import axios from 'axios';
import { getStorage, setStorage } from '../utils/storage';

const REPO = 'hudidit/hudidit.github.io';
const STORAGE_KEY = 'request_cache';

export const requestGithub = ({
  path = 'issues',
  type = 'json'
} = {}) => {
  let url = `https://api.github.com/repos/${REPO}/${path}`;
  let accept = `application/vnd.github.v3.${type}`;

  let cache: any = getStorage(STORAGE_KEY);
  cache = cache ? JSON.parse(cache) : {};
  
  let req = axios.get(url, {
    headers: {
      Accept: accept
    },
    params: {
      page: 1,
      per_page: 15
    }
  }).then(res => {
    if (res.status === 200) {
      return res.data;
    } else {
      console.error('Failed to fetch data via Github API.');
      return [];
    }
  });
  return req;
};