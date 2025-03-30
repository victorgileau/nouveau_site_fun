document.body.addEventListener("mousemove", evt => {
  const mouseX = evt.clientX;
  const mouseY = evt.clientY;
  
  gsap.set("#mouse", {
    x: mouseX,
    y: mouseY
  })
});

const body = document.querySelector('body');
const main = document.querySelector('main');
const hero = document.querySelector('.imgHero')
const logoHeader = document.querySelector('.imgLogo');

const app = Vue.createApp({
  data() {
    return {
      gameArr: [
        {
          logo: "../medias/img/logo/Far_Cry_4_logo.webp",
          mainBg: "../medias/img/far-cry-4_3-1410247904-far-cry-4-best-weapons-to-storm-kyrat-explained.webp",
          heroBg: "../medias/img/ccc1a9e1-1597-42c6-9eba-2637f8a5faff-1024x768.avif",
        },
        {
          logo: "../medias/img/logo/Far_Cry_3_Logo.png",
          mainBg: "../medias/img/farcry3/ss_842bfdeb44368babd55ad93af1cbbf560f9fb9a1.1920x1080.jpg",
          heroBg: "../medias/img/farcry3/capsule_616x353.jpg",
        },
        {
          logo: "../medias/img/logo/farcry_2.png",
          mainBg: "../medias/img/farcry2/0000004527.1920x1080.jpg",
          heroBg: "../medias/img/farcry2/24042-image-far-cry-2.jpg",
        },
        {
          logo: "../medias/img/logo/FC5_Logo.png",
          mainBg: "../medias/img/D2B6604C-997D-4A6A-998A-2EDA7FB258DB.png",
          heroBg: "../medias/img/farcry5/far-cry-5-pc-jeu-ubisoft-connect-europe-cover.jpg",
        },
        {
          logo: "../medias/img/logo/FC6_Logo.png",
          mainBg: "./medias/img/222E320E-FE48-4262-9923-9E53358F1AF5.png",
          heroBg: "../medias/img/farcry6/game-reviews-far-cry-6-xbox-series-x-review-2-1280x720.webp",
        },
      ]
    }
  },
  methods: {
      changeToRandomGame() {
        let random = Math.floor((Math.random() * (this.gameArr.length)));
        console.log("test " + random);
        logoHeader.style.backgroundImage = `url(${this.gameArr[random].logo})`;
        main.style.backgroundImage = `url(${this.gameArr[random].mainBg})`;
        console.log(this.gameArr[random].heroBg);
        hero.style.backgroundImage = `url(${this.gameArr[random].heroBg})`;
      }
  }
});

app.mount("main");