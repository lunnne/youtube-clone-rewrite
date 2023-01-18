import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useYoutubeApi } from '../context/YoutubeApiContext';

export default function ChannelInfo({ channelId, channelTitle }) {
  const { youtube } = useYoutubeApi();
  const { isLoading, error, data } = useQuery(['channel', channelId], () => youtube.channelDetail(channelId), { staleTime: 1000 * 60 * 5 });

  if (isLoading) return <p>is Loding..</p>;
  if (error) return <p>error occured..</p>;

  const { thumbnails, title } = data[0].snippet;

  return (
    <div className="flex items-center my-4 mb-8">
      <img className="rounded-full w-10" src={thumbnails.default.url} alt={title} />
      <p className="text-lg font-medium ml-2">{channelTitle}</p>
    </div>
  );
}
