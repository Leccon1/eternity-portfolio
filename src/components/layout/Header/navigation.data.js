const navigationData = [
  {
    label: 'Home',
    llink: '#home',
    subMenu: [
      { label: 'Identity', link: '#about-short' },
      { label: 'Showcase', link: '#featured' },
      { label: 'News', link: '#news' },
    ],
  },
  {
    label: 'About Me',
    link: '#about',
    subMenu: [
      { label: 'My Story', link: '#my-story' },
      { label: 'Projects', link: '#projects' },
      { label: 'Skills', link: '#skills' },
      { label: 'Tools', link: '#tools' },
    ],
  },
  {
    id: 'Logo',
    type: 'Logo',
  },
  {
    label: 'Portfolio',
    link: '#portfolio',
    subMenu: [
      { label: 'Projects', link: '#projects' },
      { label: 'Games', link: '#games' },
      { label: 'Designs', link: '#designs' },
    ],
  },
  {
    label: 'Music',
    link: '#music',
    subMenu: [
      { label: 'Playlists', link: '#playlists' },
      { label: 'Tracks', link: '#tracks' },
      { label: 'Albums', link: '#albums' },
      { label: 'Genres', link: '#genres' },
    ],
  },
]

export default navigationData
