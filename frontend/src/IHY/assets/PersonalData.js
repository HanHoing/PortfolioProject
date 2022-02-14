import profilePiPicture from './images/me.jpg'
import korail from './images/korail.png'
import mung from './images/mung.png'
import portfolio from './images/portfolio.png'
import logo from './images/logo.png'
import bg1 from './images/logo-1.jpg'


const personData = {
    about:{
            phone: `010-5439-3419`,
            email:`younge1009@gmail.com`,
            profession:[`포기하지 않는 개발자 임해영 입니다.`],
            profilePiPicture,
            logo
        },

    backgroundSlides:{
        slideOne:bg1
    },

    socialMedias:[
        {
            url:`https://github.com/haeyoungim`,
            icon:`fab fa-github`,
            name:`Github`
        }
    ],

    background:[
        {
            experience:`평소에도 무언가를 직접 만드는걸 즐겼으며, 
            우연히 접하게 된 코딩에 재미를 느껴 배우게 됐습니다.`
        },
        {
            experience:`주어진 업무를 책임지고 헤쳐나아가며,제 힘으로만 해결하기 버거울 때에는 주변인들에게 조언을 구하겠습니다.`
        },
        {
            experience:`현재 웹 백엔드 분야를 공부하고 있으며,백엔드 전문가가 되기를 원합니다,`
        },
        {
            experience:`항상 배우고 습득하는 자세로 어제보다 나은 개발자가 되겠습니다.👩‍💻`
        }
    ],

    skills:[
        {
            name:`frontend`,
            language:[`HTML5 / `,`CSS3 / `,`JavaScript / `,`React / `,`Bootstrap 4` ],
            icon:`fas fa-laptop-code`
        },
        {
            name:`backend`,
            language:[`Node / `,`Java / `,`Spring`],
            icon:`fas fa-code`
        },
        {
            name:`database`,
            language:[`HeidiSQL`,` / MYSQL` ,` / Oracle`],
            icon:`fas fa-database`
        },
        {
            name:`version control`,
            language:[`Git / `,`Github`],
            icon:`fas fa-code-branch`
        },
        {
            name:`cloud`,
            language:[`AWS`],
            icon:`fas fa-cloud`
        }
    ],

    
    projects:[
        {
            title:"학원 커뮤니티 사이트 구현",
            technologies:['Spring / ' , `Node / ` , `React / `  ,`JavaScript` ,` / MySQL`],
            about:`클라우드 풀스택 과정을 듣는 학생들을 위한 커뮤니티`,
            image:mung,
            url:"https://github.com/muse9312/Cloud_Project_Mini_2.git",
            
        },
        {
            title:"Krail 홈페이지 구현",
            technologies:['React',` / JavaScript` ,` / CSS`,` / HTML5`, ` / Java`,` / Oracle SQL Developer`],
            about:`korail 홈페이지에 있는 기능들을 구현`,
            image:korail,
        },
        {
            title:"Portfolio 사이트 구현",
            technologies:['React / ', `CSS3 / `, `JavaScript`],
            about:`나의 관한 포트폴리오 사이트를 구현`,
            image:portfolio,
            url:"https://github.com/haeyoungim/react-Portfolio.git",
        }

  ]
};

export default personData;
