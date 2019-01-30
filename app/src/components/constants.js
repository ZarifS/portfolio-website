import MunchiesMain from './../images/munchies/munchies-Macbook.png'
import MunchiesStacked from './../images/munchies/munchies-stacked.png'
import HabitualMain from './../images/habitual/habitual-Pixel.png'
import HabitualStacked from './../images/habitual/habitual.png'
import GradedMain from './../images/graded/graded-Pixel.png'
import GradedStacked from './../images/graded/graded.png'
import AzuariShowcase from './../images/azauri/showcase.png'
import cienaLogo from './../images/logos/ciena.svg'
import ibmLogo from './../images/logos/ibm.svg'
import kinaxisLogo from './../images/logos/kinaxis.svg'
import canadaLogo from './../images/logos/canada.svg'

// ---------------------- Experience ---------------------- //
export const ciena = {
  title: 'Ciena',
  role: 'Full Stack Developer',
  logo: cienaLogo,
  color1: '8148c4',
  color2: '702fd8',
  color3: '2216d6',
  duration: 'Jan 2017 - May 2017',
  info:
    'As in intern at Ciena, a global telecommunications company, I was introduced to ' +
    'agile development and a array of new technologies. As my first job at a private ' +
    'software development company I was able to learn many new skills and get introdu' +
    'ced to industry standards very quickly. As a full stack developer I worked on th' +
    'e Alarms software, a micro-service for one of Ciena’s hardware solutions. My dev' +
    'elopment involved using Ember to continue adding and developing the front end we' +
    'b app, while using Java to develop the backend API functionality. I was also int' +
    'roduced to testing and using source control to review and document my developmen' +
    't. Working at Ciena opened my eyes to what software development is like in the p' +
    'rivate sector and also equipped me with the skills needed to further my career p' +
    'ath as a software engineer.',
  skills: [
    'EmberJS',
    'BitBucket',
    'Mocha',
    'Java',
    'Cassandra',
    'REST',
    'Postman'
  ]
}
export const canada = {
  title: 'canada',
  role: 'Full Stack Developer',
  logo: canadaLogo,
  color1: 'a8a8a8',
  color2: 'a8a8a8',
  color3: '7d7d7d',
  duration: 'May 2016 - Aug 2016',
  info:
    'Agriculture and Agri-Food Canada (AAFC) was my first experience in professional ' +
    'software development and through it I was introduced to many different aspects o' +
    'f the field. The project I worked on dealt with data about different farms and f' +
    'armers across Canada. The application that stored this data was allowed for inte' +
    'rnal usage only and was outdated and needed to be redesigned and rebuilt for fas' +
    'ter querying and a better user experience. Throughout my term I worked on redesi' +
    'gning the application from the ground up using web technologies such as Javascri' +
    'pt, JQuery and Twitter Bootstrap alongside Groovy on Grails to deal with the bac' +
    'kend REST api and database. I learnt many interesting skills such as gathering r' +
    'equirements from the end users who would use the application, to designing both ' +
    'the front and back end of a web application from scratch.',
  skills: [
    'Twitter Bootstrap',
    'HTML/CSS/Javascript',
    'jQuery',
    'Groovy on Grails',
    'REST'
  ]
}
export const ibm = {
  title: 'ibm',
  role: 'Back End Engineer',
  logo: ibmLogo,
  color1: '0f98ca',
  color2: '2554ae',
  color3: '2d50ce',
  duration: 'May 2018 - Aug 2018',
  info:
    'As a future blue intern at IBM the work I did was very similar to full time empl' +
    'oyees. As a developer on the Security division I worked on QRadar which is the f' +
    'lagship product IBM sells for managing security and online traffic. In terms of ' +
    'work, I focused on back end development in an agile environment which dealt with' +
    ' Node JS and SQLite. Efficiency and performance were key during my development a' +
    's the application I was working on was a add-on for the main QRadar app and need' +
    'ed to be memory friendly. During my internship I was able to work on creating se' +
    'cure REST endpoints, efficient database querying with SQL, as well as developing' +
    ' asynchronous scripting using Node. Working at IBM allowed my backend developmen' +
    't skills to develop and mature to industry standards.',
  skills: ['ReactJS', 'NodeJS', 'SQLite', 'REST', 'Mocha']
}
export const kinaxis = {
  title: 'kinaxis',
  role: 'Front End Engineer',
  logo: kinaxisLogo,
  color1: 'ff0034',
  color2: 'a61818',
  color3: 'a61818',
  duration: 'Sept 2017 - Dec 2017',
  info:
    'As an intern at Kinaxis, a small supply chain company in Ottawa, I was given the' +
    ' opportunity to work alongside some brilliant developers. Being in intern I was ' +
    'still given the same work and tasks as other developers on my team and my work m' +
    'ostly consisted of developing the front end mobile application Rapid Response. R' +
    'apid response is a application that helps companies accurately and efficiently m' +
    'anage their supply chain. The font end tech stack consisted of Angular, Redux, S' +
    'ASS, Typescript alongside testing suites such as Jasmine. The development was ag' +
    'ile and allowed me to learn many new skills in terms of developing scalable web ' +
    'technologies.',
  skills: ['AngularJS', 'BitBucket', 'Jasmine', 'Redux', 'NodeJS', 'REST']
}

// ---------------------- Works ---------------------- //

export const Munchies = {
  title: 'Munchies',
  tech: 'React | Python',
  color1: '0bf9aa',
  color2: '19b78b',
  color3: '3cd291',
  picture1: MunchiesMain,
  picture2: MunchiesStacked,
  pictureClass: 'web',
  platforms: ['github'],
  links: {
    github: 'https://github.com/ZarifS/munchies-react'
  },
  info1:
    'Munchies is a web application designed for my database design course which allow' +
    's users to view the ratings and menus of restaurants. Because the application wa' +
    's to be designed in the scope of the course the database was populated with rest' +
    'aurants locally.',
  info2:
    'The website was designed by focusing on finding what users want to eat fast and ' +
    'in a beautiful way. Once the user searches for a type of food or restaurant the ' +
    'website will bring them to a restaurant page that shows all the relevant informa' +
    'tion including the menu.',
  info3:
    'The site offers a admin page that allows adding and editing restaurants as well ' +
    'as engaging in advanced SQL queries to bring back specific data (related to proj' +
    'ect requirements rather than functionality).',
  info4:
    'The site was designed using React for the front end client and Python with the F' +
    'lask framework for the backend API. The database used was PostgreSQL which allow' +
    'ed us to execute SQL queries for a wide variety of specifications. '
}

export const Habitual = {
  title: 'Habitual',
  tech: 'Android | Realm',
  color1: '535b53',
  color2: '4f554f',
  color3: '393939',
  picture1: HabitualMain,
  picture2: HabitualStacked,
  pictureClass: 'mobile',
  platforms: ['github', 'android'],
  links: {
    github: 'https://github.com/ZarifS/habitual-android',
    android:
      'https://play.google.com/store/apps/details?id=com.accentsoftware.habitual'
  },
  info1:
    'Habitual is a android application designed to help people develop good habits an' +
    'd stick with them. The application was designed to create a simple and beautiful' +
    ' interface that helps users set up and track habits very quickly. ',
  info2:
    'Developing a good habit takes 30 days and the app leverages this by allowing use' +
    'rs to streak their habits on a weekly basis and work towards getting the gold ba' +
    'dge. By the time the badge arrives the habit would have been developed. The goal' +
    ' of the app is to make building great habits as quick and easy as possible but t' +
    'here is still many things that I wish to add to it.',
  info3:
    'The design process involved figuring out how users interacted with mobile applic' +
    'ations and designing something that will take advantage of the mobile interface.' +
    ' The first designs for the application involved a large and complicated interfac' +
    'e which did not resonate well with users. Similar to other apps I tried doing to' +
    'o much with the mobile interface and decided to pivot to a simple streaking appl' +
    'ication with continuous feedback from testers.',
  info4:
    'The application was developed using Android Studio using the Java language for l' +
    'ogic and functionality and XML for design and interface. Realm mobile database w' +
    'as used for managing the database and user data.'
}

export const Graded = {
  title: 'Graded',
  tech: 'Android | Realm',
  color1: '4dcdee',
  color2: '2596d9',
  color3: '168fdd',
  picture1: GradedMain,
  picture2: GradedStacked,
  pictureClass: 'mobile',
  platforms: ['github', 'android'],
  links: {
    github: 'https://github.com/ZarifS/graded-android',
    android: 'https://play.google.com/store/apps/details?id=tempo.graded&hl=en'
  },
  info1:
    'Graded is a android application designed to help students keep track of their gr' +
    'ades throughout the semester. It was designed with the user experience in mind a' +
    'nd because of this the app was kept very simple and user friendly. The applicati' +
    'on was the final project of my User Experience course and allowed my partner and' +
    ' I to do user research on fellow students, mock up designs and finally code the ' +
    'app in Android Studio. ',
  info2:
    'As university students the most important aspect of our lives often revolve arou' +
    'nd making sure our studies and grades are kept up. Often times because of the ma' +
    'ny different deliverables and items each course offers it becomes difficult to m' +
    'anage what needs to be done and gauge how one is really doing in each course.',
  info3:
    'With this app the user will be able to track their progress and make sure they s' +
    'tay up to date with each course and see their current mark at a glance. In order' +
    ' to make things simple we decided to streamline the process of adding items for ' +
    'each course and give a course hub where the user can see all their current cours' +
    'es and their current grade based on the items they have delivered so far.',
  info4:
    'The application was developed using Android Studio using the Java language for l' +
    'ogic and functionality and XML for design and interface. Realm mobile database w' +
    'as used for managing the database and user data.'
}

export const BlockChainPaper = {
  title: 'The Implications of Blockchain Technologies',
  date: '2018',
  color: 'd4c447'
}

export const CloudComputingPaper = {
  title: 'The Benefits of Cloud Computing For File Management',
  date: '2016',
  color: '6490e4'
}

// ---------------------- Clients ---------------------- //
export const Azauri = {
  title: 'Azauri',
  tech: 'UX Design',
  color1: '181919',
  color2: '1f2121',
  color3: '212323',
  picture1: AzuariShowcase,
  picture2: GradedStacked,
  pictureClass: 'web',
  client:
    'Graded is a android application designed to help students keep track of their gr' +
    'ades throughout the semester. It was designed with the user experience in mind a' +
    'nd because of this the app was kept very simple and user friendly. The applicati' +
    'on was the final project of my User Experience course and allowed my partner and' +
    ' I to do user research on fellow students, mock up designs and finally code the ' +
    'app in Android Studio. ',
  problem:
    'As university students the most important aspect of our lives often revolve arou' +
    'nd making sure our studies and grades are kept up. Often times because of the ma' +
    'ny different deliverables and items each course offers it becomes difficult to m' +
    'anage what needs to be done and gauge how one is really doing in each course.',
  info1:
    'With this app the user will be able to track their progress and make sure they s' +
    'tay up to date with each course and see their current mark at a glance. In order' +
    ' to make things simple we decided to streamline the process of adding items for ' +
    'each course and give a course hub where the user can see all their current cours' +
    'es and their current grade based on the items they have delivered so far.',
  info2:
    'The application was developed using Android Studio using the Java language for l' +
    'ogic and functionality and XML for design and interface. Realm mobile database w' +
    'as used for managing the database and user data.',
  result:
    'The application was developed using Android Studio using the Java language for l' +
    'ogic and functionality and XML for design and interface. Realm mobile database w' +
    'as used for managing the database and user data.',
  review: ''
}
