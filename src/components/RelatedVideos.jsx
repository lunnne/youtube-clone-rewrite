import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useYoutubeApi } from '../context/YoutubeApiContext';
import VideoCard from './VideoCard';

export default function RelatedVideos({ videoId }) {
  const { youtube } = useYoutubeApi();
  const { isLoading, error, data: videoList } = useQuery(['related', videoId], () => youtube.relatedVideos(videoId), { staleTime: 1000 * 60 * 5 });

  // if (isLoading) return <p>is Loding..</p>;
  // if (error) return <p>error occured..</p>;
  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is Wrong 😢</p>}
      {videoList && (
        <ul>
          {videoList.map((item) => (
            <VideoCard key={item.id} video={item} type='list' />
          ))}
        </ul>
      )}
    </>
  );
}
