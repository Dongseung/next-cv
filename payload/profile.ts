import { faEnvelope, faPen, faPhone } from '@fortawesome/free-solid-svg-icons';

import { faBell } from '@fortawesome/free-regular-svg-icons';
import { IProfile } from '../component/profile/IProfile';
// import image from '../asset/cv_profile.jpg';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image: '/asset/cv_profile.jpg',
  name: {
    title: '신동승',
    small: '(Owen)',
  },
  contact: [
    {
      title: 'me@dsshin.dev',
      link: 'mailto:me@dsshin.dev',
      icon: faEnvelope,
    },
    {
      title: 'Please contact me by email',
      icon: faPhone,
      badge: true,
    },
    {
      title:
        'https://next-portfolio-puce-seven.vercel.app/ - Next.js와 Tailwind css를 이용하여 제작한 포트폴리오 샘플페이지',
      link: 'https://next-portfolio-puce-seven.vercel.app/',
      icon: faPen,
    },
    {
      title:
        'https://dsshin-portfolio.netlify.app/ - React와 Gsap을 이용하여 제작한 포트폴리오 샘플페이지',
      link: 'https://dsshin-portfolio.netlify.app/',
      icon: faPen,
    },
    // {
    //   link: 'https://www.facebook.com/groups/ubuntu.ko',
    //   icon: faFacebook,
    // },
  ],
  notice: {
    title: '언제든 연락 부탁드립니다.',
    icon: faBell,
  },
};

export default profile;
