/**
 * 根据链接里的参数，生成键值对。
 * @param url 链接。默认值为当前页面URL。
 */
export const getQueryObject = (url?: string) => {
  url = url || location.href;
  const queryObj: any = {};
  const query = url.split('?')[1];
  if (!query) {
    return queryObj;
  }
  const pairs = query.split('&');
  for (let pair of pairs) {
    const kv = pair.split('=');
    queryObj[kv[0]] = kv[1] || '';
  }
  return queryObj;
}

/**
 * 获取URL里的参数值
 * @param key 参数名
 * @param url 链接。默认值为当前页面URL。
 */
export const getUrlParam = (key = '', url?: string) => {
  const queryObj = getQueryObject(url);
  return queryObj[key] || '';
}


interface UrlParams {
  [x: string]: string
}
/**
 * 向URL后面添加参数
 * @param params 参数对象
 * @param url 链接。默认为当前页面URL。
 */
export const addUrlParams = (params: UrlParams, url?: string) => {
  url = url || location.href;
  if (typeof params !== 'object') {
    return url;
  }
  let paramStr = '';
  paramStr = Object.keys(params).map(key => `${key}=${params[key]}`).join('&')
  if (url.indexOf('?') > -1) {
    return `${url}&${paramStr}`;
  } else {
    return `${url}?${paramStr}`;
  }
}
