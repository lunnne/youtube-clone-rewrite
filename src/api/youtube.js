export default class Youtube {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  }

  async #searchByKeyword(keyword) {
    return this.apiClient
      .search({
        params: {
          part: 'snippet',
          maxResults: 25,
          type: 'video',
          q: keyword,
        },
      })
      .then((res) => res.data.items)
      .then((items) => items.map((item) => ({ ...item, id: item.id.videoId }))); //우리 어플리케이션에 필요한 포맷으로 변경해준다
  }

  async #mostPopular() {
    return this.apiClient
      .videos({
        params: {
          part: 'snippet',
          maxResults: 25,
          chart: 'mostPopular',
        },
      })
      .then((res) => res.data.items);
  }

  async channelDetail(channelId) {
    return this.apiClient
      .channels({
        params: {
          part: 'snippet',
          id: channelId,
        },
      })
      .then((res) => res.data.items);
  }

  async relatedVideos(videoId) {
    return this.apiClient
      .related({
        params: {
          part: 'snippet',
          type : 'video',
          maxResults: 25,
          relatedToVideoId: videoId,
        },
      })
      .then((res) => res.data.items)
      .then((items) => items.map((item) => ({ ...item, id: item.id.videoId })));
  }
}
