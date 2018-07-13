import MunchiesMain from './../images/munchies/munchies-Macbook.png'
import MunchiesStacked from './../images/munchies/munchies-stacked.png'
import HabitualMain from './../images/habitual/habitual-Pixel.png'
import HabitualStacked from './../images/habitual/habitual.png'
import GradedMain from './../images/graded/graded-Pixel.png'
import GradedStacked from './../images/graded/graded.png'
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
    info: 'As in intern at Ciena, a global telecommunications company, I was introduced to ' +
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
    info: 'Agriculture and Agri-Food Canada (AAFC) was my first experience in professional ' +
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
    skills: ['Twitter Bootstrap', 'HTML/CSS/Javascript', 'jQuery', 'Groovy on Grails', 'REST']
}
export const ibm = {
    title: 'ibm',
    role: 'Back End Engineer',
    logo: ibmLogo,
    color1: '0f98ca',
    color2: '2554ae',
    color3: '2d50ce',
    duration: 'May 2018 - Aug 2018',
    info: 'As a future blue intern at IBM the work I did was very similar to full time empl' +
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
    info: 'As an intern at Kinaxis, a small supply chain company in Ottawa, I was given the' +
            ' opportunity to work alongside some brilliant developers. Being in intern I was ' +
            'still given the same work and tasks as other developers on my team and my work m' +
            'ostly consisted of developing the front end mobile application Rapid Response. R' +
            'apid response is a application that helps companies accurately and efficiently m' +
            'anage their supply chain. The font end tech stack consisted of Angular, Redux, S' +
            'ASS, Typescript alongside testing suites such as Jasmine. The development was ag' +
            'ile and allowed me to learn many new skills in terms of developing scalable web ' +
            'technologies.',
    skills: [
        'AngularJS',
        'BitBucket',
        'Jasmine',
        'Redux',
        'NodeJS',
        'REST'
    ]
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
        'github': 'https://github.com/ZarifS/munchies-react'
    }
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
        'github': 'https://github.com/ZarifS/habitual-android',
        'android': 'https://play.google.com/store/apps/details?id=com.accentsoftware.habitual'
    }
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
        'github': 'https://github.com/ZarifS/graded-android',
        'android': 'https://play.google.com/store/apps/details?id=tempo.graded&hl=en'
    }
}

export const Website = {
    title: 'Portfolio Site',
    tech: 'React',
    color1: 'ba49c8',
    color2: 'ac54e6',
    color3: '8112e3',
    pictureClass: 'web',
    platforms: ['github'],
    links: {
        'github': 'https://github.com/ZarifS/portfolio-website'
    }

}

export const BlockChainPaper = {
    title: 'The Implications of Blockchain Technologies',
    date: '2018',
    color: 'd4c447'
}