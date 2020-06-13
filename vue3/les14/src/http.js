import axios from 'axios'

export default new class http {
  constructor() {
    let service = axios.create();
    this.service = service;
  }
  certainData = 'Hello Vue'
  get(path) {
    return this.service.get(path);
  }
  delete(path) {
    return this.service.delete(path);
  }
  download(path) {
    return this.service.request({
      method: "GET",
      url: path,
      responseType: "blob",
    });
  }
  post(path, payload) {
    return this.service.request({
      method: "POST",
      url: path,
      responseType: "json",
      data: payload,
    });
  }
};
