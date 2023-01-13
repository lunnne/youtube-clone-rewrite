import React from 'react'

export default function VideoCard({videos}) {

  return (
    <div>{videos.snippet.title}</div>
  )
}
