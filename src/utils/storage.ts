export function setStorage (key = '', value = '') {
  try {
    if (key) {
      localStorage.setItem(key, value);
    }
  } catch (e) {
    console.error('Cannot set localStorage in private mode.');
  }
}

export function getStorage (key = '') {
  return localStorage.getItem(key);
}