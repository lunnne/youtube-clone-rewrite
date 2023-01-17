import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useYoutubeApi } from '../context/YoutubeApiContext';

export default function ChannelInfo({ channelId, channelTitle }) {
  const { youtube } = useYoutubeApi();
  const { isLoading, error, data } = useQuery(['channel', channelId], () => youtube.channelDetail(channelId));

  if (isLoading) return <p>is Loding..</p>;
  if (error) return <p>error occured..</p>;
  console.log(data);

  const { thumbnails, title } = data[0].snippet;

  return (
    <div className="flex items-center my-5">
      <img className="rounded-full w-10" src={thumbnails.default.url} alt={title} />
      <p className="text-xl mx-3">{channelTitle}</p>
    </div>
  );
}
