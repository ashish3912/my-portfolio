import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Ashish',
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Ashish',
  subtitle: ['I am a web developer', 'I am SEO analyst ', 'I am proud Indian'],
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.png',
  paragraphOne: 'Hi I am Ashish Sharma, a 25 year old Web developer and blogger living in Amritsar, India. I am a Computer Science Engineer, currently working with awesome folks at TATA 1mg.',
  paragraphTwo: 'I don’t like to define myself by the work I’ve done. I define myself by the work I want to do. Skills can be taught, personality is inherent. I prefer to keep learning, continue challenging myself, and do interesting things that matter.',
  paragraphThree: 'You can read more about my biography, experience, skills, education and much more in the PDF attached bellow:',
  resume: 'Ashish_Resume.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.png',
    title: 'Budget Tracker',
    info: 'Budget Tracker helps you track your financial activity efficiently. Its simple design makes it lightweight, straightforward and very easy to use. It’s done in one click, because you don’t need to fill anything except the amount. You need just a few SECONDS daily to save the amount and each spending purpose. No matter where you are just a couple of taps will save your expense.',
    info2: '',
    url: 'https://my-budget-tracker.netlify.app',
    repo: 'https://github.com/ashish3912/Budget-Tracker', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.png',
    title: 'Burger Builder',
    info: 'Burger Builder is an appltion scripted in React and backend is deployed on Firebase , where users can order burger by choosing ingredients. You just need to simply create an account and login to order your burger.',
    info2: '',
    url: 'https://my-burger-shop.netlify.app',
  }
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'ashishsharma3912@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'facebook',
      url: 'https://www.facebook.com/sharmaashish.aa',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/ashish-sharma-52558512b/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/ashish3912',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
