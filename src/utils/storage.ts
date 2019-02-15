// 在 Node 环境下不存在 localStorage
let storage: any;

if (typeof localStorage !== 'undefined') {
  storage = localStorage;
} else {
  storage = {
    data: {},
    setItem(key = '', value = '') {
      if (typeof value !== 'string') {
        value = JSON.stringify(value);
      }
      this.data[key] = value;
    },
    getItem(key = '') {
      return this.data[key];
    }
  };
}

export function setStorage (key = '', value = '') {
  try {
    if (key) {
      storage.setItem(key, value);
    }
  } catch (e) {
    console.error('Cannot set localStorage in private mode.');
  }
}

export function getStorage (key = '') {
  return storage.getItem(key);
}