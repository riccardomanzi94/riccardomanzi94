/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: false, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "Riccardo",
  logo_name: "riccardo.m()",
  nickname: "Riccardo Manzi",
  full_name: "Riccardo Manzi",
  subTitle:
    "BackEnd Developer, Open Source Enthusiast 🔥. Always learning.",
  resumeLink:
    "https://drive.google.com/file/d/17Klo8gtK7-y82tunSw7F2OOkk-b7ex2A/view",
  mail: "mailto:riccardomanzi1994@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/riccardomanzi94",
  linkedin: "https://www.linkedin.com/in/riccardomanzi/",
  gmail: "riccardomanzi1994@gmail.com",
  facebook: "https://www.facebook.com/riccardo.manzi.22/",
  twitter: "https://twitter.com/riccardomanzi94",
  instagram: "https://www.instagram.com/riccardomanzi94/",
};

const skills = {
  data: [
    {
      title: "BackEnd Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Develop BackEnd for your web and mobile applications",
        "⚡ Building BackEnd application using Spring Framework",
        "⚡ Integration of third party services such as Docker and Kubernetes"
      ],
      softwareSkills: [
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#f89820",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "Oracle Database",
          fontAwesomeClassname: "simple-icons:oracle",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "Microsoft SQL Server",
          fontAwesomeClassname: "simple-icons:microsoftsqlserver",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "Apache Tomcat",
          fontAwesomeClassname: "simple-icons:apachetomcat",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "Jira Software",
          fontAwesomeClassname: "simple-icons:jira",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "JSON",
          fontAwesomeClassname: "simple-icons:json",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "GitLab",
          fontAwesomeClassname: "simple-icons:gitlab",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "Bitbucket",
          fontAwesomeClassname: "simple-icons:bitbucket",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "SonarQube",
          fontAwesomeClassname: "simple-icons:sonarqube",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "Jenkins",
          fontAwesomeClassname: "simple-icons:jenkins",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "Apache",
          fontAwesomeClassname: "simple-icons:apache",
          style: {
            color: "#CA1A22",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "Spring",
          fontAwesomeClassname: "simple-icons:spring",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "Swagger",
          fontAwesomeClassname: "simple-icons:swagger",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "Apache JMeter",
          fontAwesomeClassname: "simple-icons:apachejmeter",
          style: {
            color: "#5b77ef",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
         "⚡ Experience working on multiple cloud platforms",
         "⚡ Experience hosting and managing websites",
         "⚡ Experience with Continuous Integration",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "Red Hat Open Shift",
          fontAwesomeClassname: "simple-icons:redhatopenshift",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "GitHub Actions",
          fontAwesomeClassname: "simple-icons:githubactions",
          style: {
            color: "#5b77ef",
          },
        },
        {
          skillName: "Linux",
          fontAwesomeClassname: "simple-icons:linux",
          style: {
            color: "#5b77ef",
          },
        },
        {
          skillName: "Apache Kafka",
          fontAwesomeClassname: "simple-icons:apachekafka",
          style: {
            color: "#5b77ef",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Università degli studi di Cassino e del Lazio meridionale",
      subtitle: "Laurea Triennale in Ingegneria Informatica e delle Telecomunicazioni",
      logo_path: "unicas.png",
      //alt_name: "SSEC",
      duration: "2015 - 2018",
      descriptions: [
        "⚡ I have a bachelor's degree in Computer and Telecommunication Engineering"
      ],
      website_link: "http://www.unicas.it/",
    },
    {
      title: "Liceo Scientifico P.N.I. Luigi Pietrobono",
      subtitle: "Diploma di scuola secondaria",
      logo_path: "liceo.jpg",
      //alt_name: "SSGC",
      duration: "2008 - 2013",
      descriptions: [
        "⚡ I have studied core subjects like Data Structures, DBMS, Networking, etc.",
        "⚡ I have also completed various online courses for Backend , Web , Mobile App Development, etc.",
      ],
      website_link: "https://www.liceopietrobono.edu.it/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Impariamo da zero l'ecosistema Spring: Teoria e Pratica",
      subtitle: "Udemy",
      logo_path: "udemy.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-9a72f3ec-79f4-4ee7-98ed-562dc40ab7c2/",
      alt_name: "Udemy",
      color_code: "#a434f3",
    },
    {
      title: "Docker e Kubernetes da zero a cento",
      subtitle: "Udemy",
      logo_path: "udemy.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-ed4e5b74-e737-43cb-ac56-8948afae4038/",
      alt_name: "Udemy",
      // color_code: "#2AAFED",
      color_code: "#a434f3",
    },
    {
      title: "Java Microservices con Spring Boot, Spring Cloud e AWS",
      subtitle: "Udemy",
      logo_path: "udemy.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-f937adf0-6832-4579-aab1-d42530d5cfd6/",
      alt_name: "Udemy",
      // color_code: "#F6B808",
      color_code: "#a434f3",
    },
    {
      title: "Scrum Fundamentals Certified",
      subtitle: "SCRUMstudy - Accreditation Body for Scrum and Agile",
      logo_path: "scrum_study.jpg",
      certificate_link:
        "https://c46e136a583f7e334124-ac22991740ab4ff17e21daf2ed577041.ssl.cf1.rackcdn.com/Certificate/ScrumFundamentalsCertified-RiccardoManzi-820242.pdf",
      alt_name: "SCRUMstudy - Accreditation Body for Scrum and Agile",
      color_code: "#2AAFED",
    },
    {
      title: "ECDL Core base",
      subtitle: "AICA - Associazione Italiana per l'Informatica e il Calcolo Automatico",
      logo_path: "aica.png",
      certificate_link:
        "https://drive.google.com/file/d/17FTN559XOoQlk9lRFeLt9xqVQwt9NbPJ/view",
      alt_name: "Google",
      color_code: "#fe0037",
    },
    {
      title: "Corso MongoDB: basi del database no-sql più usato al mondo",
      subtitle: "Udemy",
      logo_path: "udemy.png",
      alt_name: "Udemy",
      // color_code: "#f36c3d",
      color_code: "#a434f3",
    },
  ],
}

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Solution Developer",
          company: "Engineering Ingegneria informatica Spa",
          company_url: "https://eng.it",
          logo_path: "eng.png",
          duration: "Maggio 2021 - Present",
          //location: "Office",
          description:
          `Integrazione dell'istituto INAIL con l'app IO . Infrastruttura a microservizi creata con Java11 e Spring boot 2 . Integrazione tra i microservizi attraverso Apache Camel. Comunicazione tra i servizi grazie ad ActiveMQ Artemis. 
          Gestione della base dati tramite Microsoft SqlServer 2019 . Applicativi installati su cloud tramite immagini Docker e gestite attraverso Red hat OpenShift. Documentazione API tramite OpenApi.`,
          color: "#ee3c26",
        },
        {
          title: "BackEnd Developer",
          company: "Innotek Consulting",
          company_url: "https://inno-tek.it/",
          logo_path: "innotek.png",
          duration: "Ottobre 2020 – Maggio 2021",
          description:
          `Cliente Sisal Betting International.Progetto costruito per gestire l'iter della scommessa di un qualsiasi evento. 
           Il progetto è un adapter per consentire ai provider internazionali di comunicare con i sistemi Sisal. Il backend è scritto in Java utilizzando Spring framework ed in particolare Spring boot. La comunicazione con i sistemi esterni avviene tramite chiamate Rest con protocollo http. La documentazione è creata attraverso Swagger 2.0 il quale permette, tramite un tool apposito, l'export del file yaml contenente la descrizione del modello e dei servizi REST esposti
          `,
          color: "#ee3c26",
        },
        {
          title: "Analyst Consultant",
          company: "Capgemini Italia Spa",
          company_url: "https://www.capgemini.com/it-it/",
          logo_path: "capgemini.png",
          duration: "Agosto 2019 – Ottobre 2020",
          description:
          `Progetto basato sulla reingegnerizzazione dei sistemi TIM . In particolare i sistemi vengono utilizzati dagli operatori del cliente per creare nuove pratiche che consentono la creazione di contratti ADSL e fibra FTTC e FTTH. I sistemi sono basati su : - backend : Java 6,7,8 e Grails 2.0.4 e 2.2.4 . - frontend : html , Zkoss, Primefaces . 
           Questi applicativi sono installati su : - Jboss - Wildfly - Apache Tomcat v9 - Oracle Weblogic Il framework per alcuni progetti è stato Spring per il backend e primefaces per il frontend. Si utilizza una CD/CI che comprende: - GitLab : repository centralizzato - Jenkins : gestisce la creazione dei pacchetti dell'applicativo - Nexus : repository con tutte le librerie necessarie a supporto dei vari progetti - SonarQube : controllo continuo della qualità del codice per eseguire revisioni automatiche
          `,
          color: "#ee3c26",
        }
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of latest technology tools. My best experience is to create NodeJS Backend Projects, Python Scripts, and React Project. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "riccardo.jpg",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I don't blog frequently but when I do something awesome, I do try to document it so it can be helpful to others. I write on Linkedin.",
    link: "https://www.linkedin.com/in/riccardomanzi/",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "Progetto laurea triennale",
      //url: "https://github.com/harikanani/AutomateInstaPyBot",
      description: "Realizzazione di un sistema di monitoraggio spettrale distribuito mediante utilizzo di SDR",
      languages: [
        /*{
          name: "Python",
          iconifyClass: "logos-python",
        },*/
      ],
    },
    {
      id: "1",
      name: "TIM OpenAccess",
      url: "https://github.com/harikanani/react-twitter-clone",
      description:
        "A React Twitter Clone UI with basic functionality such as make a Tweet.Embedded Profile Tweets and Share on Twitter.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "Firebase",
          iconifyClass: "logos-firebase",
        },
      ],
    },
    {
      id: "2",
      name: "node-blockchain",
      url: "https://github.com/harikanani/node-blockchain",
      description:
        "A simple blockchain and cryptocurrency wallet implemented in Node.js and TypeScript (for learning purposes).",
      languages: [
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "TypeScript",
          iconifyClass: "logos-typescript",
        },
      ],
    },
    {
      id: "3",
      name: "top-crypto-gainers",
      url: "https://github.com/harikanani/top-crypto-gainers",
      description:
        "A top high price changed crypto coins wring 24 hoursA sound-classifier webapp made with ReactJS + TensorflowJS.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
      ],
    },
    {
      id: "4",
      name: "personal-portfolio",
      url: "https://github.com/harikanani/personal-portfolio",
      description:
        "A simple command line interface based quiz app to know more about me :).",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
      ],
    },
    {
      id: "3",
      name: "node_express_crud_api_starter",
      url: "https://github.com/harikanani/node_express_crud_api_starter",
      description:
        "Simple NodeJS Express CRUD Operations API starter.",
      languages: [
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
      ],
    },
    {
      id: "4",
      name: "node-web-scrapper",
      url: "https://github.com/harikanani/node-web-scrapper",
      description:
        "A Simple web scrapper that scrap the information of amazon products such as price.It also scrap Wikipedia Data such as birthdate.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "NodeJs",
          iconifyClass: "logos-nodejs",
        },
      ],
    },
    {
      id: "5",
      name: "harikanani.github.io",
      url: "https://github.com/harikanani/harikanani.github.io",
      description:
        "A Personal Portfolio Website that showcases my work and experience. which is hosted on Github Pages.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "SCSS",
          iconifyClass: "vscode-icons:file-type-scss2",
        },
      ],
    },
    {
      id: "6",
      name: "Automate Attendace",
      url: "https://github.com/harikanani/Node_Python",
      description:
        "Automation of Online Attendance using node js and python",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },
    {
      id: "7",
      name: "Automate Discord Bot",
      url: "https://github.com/harikanani/AutomateDiscordBot",
      description:
        "A Discord Bot to send Automatic messages to serer channel in regular time difference.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Python Selenium",
          iconifyClass: "logos-selenium",
        },
        {
          name: "Chromium Browser",
          iconifyClass: "openmoji-chromium",
        },
      ],
    },
    {
      id: "8",
      name: "Flask Blog",
      url: "https://github.com/harikanani/flask_blog",
      description:
        "A Simple Blog Web Application made using Flask Framework",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Flask",
          iconifyClass: "cib-flask",
        },
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
      ],
    },
    {
      id: "9",
      name: "Netflix top series",
      url: "https://github.com/harikanani/netflix-top-series",
      description:
        "List of Top Netflix Series which is deployed to vercel.",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "HTML5",
          iconifyClass: "logos-html-5",
        },
        {
          name: "CSS3",
          iconifyClass: "logos-css-3",
        },
      ],
    },
    {
      id: "10",
      name: "COVID-19 Tracker",
      url: "https://github.com/harikanani/Covid19TrackerReact",
      description: "Simple Covid-19 Tracker made using React and deployed to Vercel.",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "HTML5",
          iconifyClass: "logos-html-5",
        },
        {
          name: "CSS3",
          iconifyClass: "logos-css-3",
        },
      ],
    },
    {
      id: "11",
      name: "Food Order Static Website",
      url: "https://github.com/harikanani/food-order-website",
      description: "A simple static website related to food restaurants service. this is reasponsive as well.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "logos-html-5",
        },
        {
          name: "CSS3",
          iconifyClass: "logos-css-3",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "PHP",
          iconifyClass: "logos-php",
        },
      ],
    },
    {
      id: "12",
      name: "NFT Launchpad",
      url: "https://deliquescent-cents.000webhostapp.com/",
      description: "NFT Launchpad crypto site portfolio",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "logos-html-5",
        },
        {
          name: "CSS3",
          iconifyClass: "logos-css-3",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
