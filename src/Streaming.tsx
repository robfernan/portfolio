import React from 'react';
import { useEffect, useState } from 'react';

type Video = { title: string; url: string; thumb: string };

const popularVideos: { category: string; items: Video[] }[] = [
  {
    category: 'Gaming Videos',
    items: [
      { title: 'Last Day on Earth Gameplay', url: 'https://www.youtube.com/live/-Er2Pmy0HZI?si=rr01QQwgWI6XbJDb', thumb: 'assets/streaming/gameplay-video1.jpg' },
      { title: 'theHunter Classic Gameplay', url: 'https://youtu.be/eXnNIszUU7E?si=IPZ_z_-1IyRqVwnG', thumb: 'assets/streaming/gameplay-video2.jpg' },
      { title: 'Halloween Stream theHunter Classic', url: 'https://www.twitch.tv/videos/2303292671', thumb: 'assets/streaming/gameplay-video3.jpg' }
    ]
  },
  {
    category: 'Drawing',
    items: [ { title: 'Car Sketch Video', url: 'https://youtu.be/-7a2JQIbCOk?si=gVuh0eYNBZvQ292f', thumb: 'assets/streaming/drawing-video.jpg' } ]
  },
  {
    category: 'Coding',
    items: [
      { title: 'XMB in SFML', url: 'https://www.youtube.com/watch?v=qLEClZEXr68&t=11850s', thumb: 'assets/streaming/coding-video1.jpg' },
      { title: 'Personal Website Build', url: 'https://www.twitch.tv/videos/2334965535', thumb: 'assets/streaming/coding-video2.jpg' }
    ]
  }
];

export default function Streaming() {
  const [isDark, setIsDark] = useState(() => typeof document !== 'undefined' && document.documentElement.classList.contains('dark'));

  useEffect(() => {
    const obs = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'));
    });
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => obs.disconnect();
  }, []);

  const youtubeThumb = (dark: boolean) => (dark ? 'assets/streaming/youtube-thumbnail-dark.jpg' : 'assets/streaming/youtube-thumbnail-light.jpg');
  const twitchThumb = (dark: boolean) => (dark ? 'assets/streaming/twitch-thumbnail-dark.jpg' : 'assets/streaming/twitch-thumbnail-light.jpg');

  return (
    <div className="max-w-6xl mx-auto py-12 px-4 bg-theme-bg dark:bg-theme-bg-dark transition-colors duration-300">
      <h1 className="text-3xl font-bold mb-6 text-theme-primary dark:text-theme-primary-dark">Streaming</h1>
      <p className="mb-8 text-theme-secondary dark:text-theme-secondary-dark">Where I stream — live coding, art, and gaming on Twitch and YouTube.</p>

      <div className="streaming-layout md:flex md:gap-6">
        <section className="youtube rounded border border-theme-accent dark:border-theme-accent-dark bg-theme-card dark:bg-theme-card-dark p-4 flex-1">
          <h2 className="text-xl font-semibold text-theme-primary dark:text-theme-primary-dark">YouTube</h2>
          <a href="https://www.youtube.com/@MungDaal321" target="_blank" rel="noreferrer" className="block mt-3">
            <img loading="lazy" decoding="async" src={youtubeThumb(isDark)} alt="YouTube Thumbnail" className="thumbnail w-full rounded bg-theme-card/50" onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/images/placeholder.svg'; }} />
          </a>
          <p className="mt-3 text-theme-secondary dark:text-theme-secondary-dark">Check out my latest YouTube content and subscribe to my channel for updates!</p>
          <a href="https://www.youtube.com/@MungDaal321" target="_blank" rel="noreferrer" className="button inline-block mt-4 px-3 py-2 rounded bg-theme-action dark:bg-theme-action-dark text-theme-card">Visit YouTube</a>
          <ul className="icons mt-4 flex gap-4">
            <li><a href="https://www.youtube.com/@MungDaal321" target="_blank" rel="noreferrer" className="text-theme-accent dark:text-theme-accent-dark"><i className="fab fa-youtube"></i></a></li>
          </ul>
        </section>

        <section className="twitch rounded border border-theme-accent dark:border-theme-accent-dark bg-theme-card dark:bg-theme-card-dark p-4 flex-1 mt-6 md:mt-0">
          <h2 className="text-xl font-semibold text-theme-primary dark:text-theme-primary-dark">Twitch</h2>
          <a href="https://www.twitch.tv/mungdaal321" target="_blank" rel="noreferrer" className="block mt-3">
            <img loading="lazy" decoding="async" src={twitchThumb(isDark)} alt="Twitch Thumbnail" className="thumbnail w-full rounded bg-theme-card/50" onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/images/placeholder.svg'; }} />
          </a>
          <p className="mt-3 text-theme-secondary dark:text-theme-secondary-dark">Join my live streams on Twitch to catch the action in real-time!</p>
          <a href="https://www.twitch.tv/mungdaal321" target="_blank" rel="noreferrer" className="button inline-block mt-4 px-3 py-2 rounded bg-theme-action dark:bg-theme-action-dark text-theme-card">Visit Twitch</a>
          <ul className="icons mt-4 flex gap-4">
            <li><a href="https://www.twitch.tv/mungdaal321" target="_blank" rel="noreferrer" className="text-theme-accent dark:text-theme-accent-dark"><i className="fab fa-twitch"></i></a></li>
          </ul>
        </section>
      </div>

      <hr className="my-8 border-theme-accent dark:border-theme-accent-dark" />

      <section className="popular-content bg-theme-card dark:bg-theme-card-dark p-6 rounded border border-theme-accent dark:border-theme-accent-dark">
        <h2 className="text-2xl font-semibold text-theme-primary dark:text-theme-primary-dark">Popular Videos</h2>
        {popularVideos.map(group => (
          <div key={group.category} className="mt-6">
            <p className="category text-theme-secondary dark:text-theme-secondary-dark">{group.category}</p>
            <div className="content-thumbnails mt-3 flex flex-wrap gap-4">
              {group.items.map(v => (
                <div key={v.url} className="thumbnail-item text-center">
                  <a href={v.url} target="_blank" rel="noreferrer">
                    <img loading="lazy" decoding="async" src={v.thumb} alt={v.title} className="rounded shadow-sm bg-theme-card/50" onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/images/placeholder.svg'; }} />
                  </a>
                  <p className="thumbnail-description text-theme-secondary dark:text-theme-secondary-dark mt-2">{v.title}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
