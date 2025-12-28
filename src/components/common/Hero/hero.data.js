export const heroData = {
  home: {
    title: 'Ivan Samolkin',
    subtitle: 'Aka Leccon1',
    post: 'Front-End Developer',
    description:
      'I am a self-taught front-end developer passionate about creating intuitive, modern, and user-friendly interfaces.',
    buttons: [
      {
        text: 'View Me Identity',
        href: '#news',
        variant: 'primary',
        onClick: () => console.log('news'),
      },
      {
        text: 'About Me',
        href: '#about',
        variant: 'secondary',
        onClick: () => console.log('about'),
      },
    ],
  },
  about: {
    title: 'My Story',
    subtitle: 'Experience',
    post: 'Developer & Designer',
    description: 'Here you can find more information about my professional journey and skills.',
    buttons: [{ text: 'Download CV', href: '/cv.pdf', variant: 'primary' }],
  },
}
