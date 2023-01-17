import axios from 'axios';

export default class FakeYoutubeClient {

  async search() {
    return axios.get('/data/search.json')
  }

  async videos() {
    return axios.get('/data/most-popular.json')
  }

  async channels() {
    return axios.get('/data/detail.json')
  }

  async related() {
    return axios.get('/data/related.json')
  }

}
