const navigationData = [
  {
    label: 'Home',
    llink: '#home',
    subMenu: [
      { label: 'News', link: '#news' },
      { label: 'Changes', link: '#changes' },
      { label: 'Updates', link: '#updates' },
      { label: 'Highlights', link: '#highlights' },
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
      { label: 'Web Projects', link: '#web-projects' },
      { label: 'JS Games', link: '#js-games' },
      { label: 'UI/UX Designs', link: '#ui-ux-designs' },
      { label: 'Other Projects', link: '#other-projects' },
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
