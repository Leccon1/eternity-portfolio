const navigationData = [
  {
    id: 'Home',
    label: 'Home',
    llink: '#home',
    subMenu: [
      { label: 'Identity', link: '#about-short' },
      { label: 'Showcase', link: '#featured' },
      { label: 'News', link: '#news' },
    ],
  },
  {
    id: 'About',
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
    id: 'Portfolio',
    label: 'Portfolio',
    link: '#portfolio',
    subMenu: [
      { label: 'Projects', link: '#projects' },
      { label: 'Games', link: '#games' },
      { label: 'Designs', link: '#designs' },
    ],
  },
  {
    id: 'Music',
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
