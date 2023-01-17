import React from 'react';
import { useLocation } from 'react-router-dom';
import ChannelInfo from '../components/ChannelInfo';
import RelatedVideos from '../components/RelatedVideos';

export default function VideoDetail() {
  const {
    state: { video },
  } = useLocation();
  const { title, channelId, channelTitle, description } = video.snippet;

  return (
    <section className='flex flex-col lg:flex-row'>
      <article>
        <iframe id="player" type="text/html" width="100%" height="640" src={`http://www.youtube.com/embed/${video.id}`} frameBorder="0"></iframe>
        <ChannelInfo channelId={channelId} channelTitle={channelTitle} />
        <pre className="whitespace-pre-wrap">{description}</pre>
      </article>
      <section>
        <RelatedVideos videoId={video.id} />
      </section>
    </section>
  );
}
