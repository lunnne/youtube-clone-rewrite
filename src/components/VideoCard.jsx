import React from 'react';

export default function VideoCard({ videos }) {
  const { id, snippet } = videos;

  console.log(snippet);

  return (
    <div>
      <img src={snippet.thumbnails.default.url} alt="thumbnail" />
      <div>
        <p>{snippet.title}</p>
        <p>{snippet.channelTitle}</p>
        <p>{snippet.publishedAt}</p>
      </div>
    </div>
  );
}
