import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import VideoCard from '../components/VideoCard';

export default function Videos() {
  const { keyword } = useParams();
  const {
    isLoading,
    error,
    data: videoList,
  } = useQuery(['videoList', keyword], async () => fetch(`/data/${keyword ? 'search' : 'most-popular'}.json`).then((res) => res.json().then((data) => data.items)));

  if (isLoading) return 'Loading...';
  if (error) return 'An error has occurred: ' + error.message;

  return (
    <div>
      Videos : {keyword ? keyword : 'hottrend'}
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is Wrong 😢</p>}
      <ul>
        {videoList.map((item) => (
          <VideoCard key={item.id} videos={item} />
        ))}
      </ul>
    </div>
  );
}
