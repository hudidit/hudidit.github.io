import axios from 'axios';

const REPO = 'hudidit/hudidit.github.io';

export const requestGithub = ({
  path = 'issues',
  type = 'json'
} = {}) => {
  let url = `https://api.github.com/repos/${REPO}/${path}`;
  let accept = `application/vnd.github.v3.${type}`;
  return axios.get(url, {
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
};