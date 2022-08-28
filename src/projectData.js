// importing project screenshots then setting up project data array of objects to pass as props

import project1 from "./assets/project1.png"
import project2 from "./assets/project2.png"
import project3 from "./assets/project3.png"
import project4 from "./assets/project4.png"
import project5 from "./assets/project5.png"
import project6 from "./assets/project6.png"

const data = [

    {
        id: 1,
        img: project1,
        title: "Questionable - the Quiz",
        details: "A multiple-choice quiz with category and difficulty options showcasing the use of React Hooks such as State, Effect, and Callback, and the use of props and reusable components.",
        viewUrl: "https://questionablequiz.netlify.app/",
        sourceUrl: "https://github.com/jcGrennan/questionable-quiz",
    },

    {
        id: 2,
        img: project2,
        title: "Tenzies Game",
        details: "A dice match game showing the use of React Hooks (State and Effect) props, reusable components, and javaScript algorithms.",
        viewUrl: "https://tenziesbygrennan.netlify.app/",
        sourceUrl: "https://github.com/jcGrennan/tenzies-game",
    },

    {
        id: 3,
        img: project3,
        title: "Meme-Generator",
        details: "A meme-generator that fetchs popular meme images from an api and allows the user to write the text in roulette style fun.",
        viewUrl: "https://memeroulette.netlify.app/",
        sourceUrl: "https://github.com/jcGrennan/meme-generator",
    },

    {
        id: 4,
        img: project4,
        title: "My Travel Journal",
        details: "A small one page travel journal showcasing the use of reusable components with props, and my ability to follow design files while scaling between mobile and wide screen devices.",
        viewUrl: "https://jcgrennantraveljournal.netlify.app/",
        sourceUrl: "https://github.com/jcGrennan/my-travel-journal",
    },

    {
        id: 5,
        img: project5,
        title: "Air-Bnb Clone",
        details: "A small one page air-bnb experience app showcasing the use of reusable components with props, and my ability to follow design files while scaling between mobile and wide screen devices.",
        viewUrl: "https://jcgrennanairbnbclone.netlify.app/",
        sourceUrl: "https://github.com/jcGrennan/air-bnb-clone",
    },

    {
        id: 6,
        img: project6,
        title: "Digital Business Card",
        details: "A digital business card showcasing some basic jsx composition, and my ability to follow design files while scaling between mobile and wide screen devices.",
        viewUrl: "https://jcgrennanbusinesscard.netlify.app/",
        sourceUrl: "https://github.com/jcGrennan/digital-business-card",
    },
    
]

export default data