import { requestGithub } from './request';

export const getIssues = () => {
  return requestGithub({
    type: 'html'
  });
}