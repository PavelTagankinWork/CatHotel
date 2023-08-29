import { v4 as uuid } from "uuid"

const CatsData = [
    {
        id: uuid(),
        title: "Эконом",
        imgMob: "/img/econom.jpg",
        imgMob2x: "/img/econom-2x.jpg",
        imgTab: "/img/econom-tab.jpg",
        imgTab2x: "/img/econom-tab-2x.jpg",
        imgDes: "/img/econom-des.jpg",
        imgDes2x: "/img/econom-des-2x.jpg",
        size: "- 90х70х180 см",
        area: "- 0,63 м2",
        eqp: [{
            one: "/img/none.svg"
        }],
        price: '100₽',
        slug: 'econom',
        priceNum: 100,
        areaNum: 0.63
    },
    {
        id: uuid(),
        title: "Эконом плюс",
        imgMob: "/img/economplus.jpg",
        imgMob2x: "/img/economplus-2x.jpg",
        imgTab: "/img/economplus-tab.jpg",
        imgTab2x: "/img/economplus-tab-2x.jpg",
        imgDes: "/img/economplus-des.jpg",
        imgDes2x: "/img/economplus-des-2x.jpg",
        size: "- 90х100х180 см",
        area: "- 0,90 м2",
        eqp: [{
            one: "/img/sunbed.svg",
            two: "/img/nails.svg"
        }],
        price: '200₽',
        slug: 'economPlus',
        priceNum: 200,
        areaNum: 0.90
    },
    {
        id: uuid(),
        title: "Комфорт",
        imgMob: "/img/comfort.jpg",
        imgMob2x: "/img/comfort-2x.jpg",
        imgTab: "/img/comfort-tab.jpg",
        imgTab2x: "/img/comfort-tab-2x.jpg",
        imgDes: "/img/comfort-des.jpg",
        imgDes2x: "/img/comfort-des-2x.jpg",
        size: "- 100х125х180 см",
        area: "- 1,13 м2",
        eqp: [{
            one: "/img/sunbed.svg",
            two: "/img/nails.svg",
            three: "/img/threads.svg"
        }],
        price: '250₽',
        slug: 'comfort',
        priceNum: 250,
        areaNum: 1.13
    },
    {
        id: uuid(),
        title: "Сьют",
        imgMob: "/img/suite.jpg",
        imgMob2x: "/img/suite-2x.jpg",
        imgTab: "/img/suite-tab.jpg",
        imgTab2x: "/img/suite-tab-2x.jpg",
        imgDes: "/img/suite-des.jpg",
        imgDes2x: "/img/suite-des-2x.jpg",
        size: "- 125х125х180 см",
        area: "- 1,56 м2",
        eqp: [{
            one: "/img/sunbed.svg",
            two: "/img/nails.svg",
            three: "/img/threads.svg"
        }],
        price: '350₽',
        slug: 'suite',
        priceNum: 350,
        areaNum: 1.56
    },
    {
        id: uuid(),
        title: "Люкс",
        imgMob: "/img/luxe.jpg",
        imgMob2x: "/img/luxe-2x.jpg",
        imgTab: "/img/luxe-tab.jpg",
        imgTab2x: "/img/luxe-tab-2x.jpg",
        imgDes: "/img/luxe-des.jpg",
        imgDes2x: "/img/luxe-des-2x.jpg",
        size: "- 160х160х180 см",
        area: "- 2,56 м2",
        eqp: [{
            one: "/img/sunbed.svg",
            two: "/img/nails.svg",
            three: "/img/threads.svg",
            four: "/img/home.svg"
        }],
        price: '500₽',
        slug: 'luxe',
        priceNum: 500,
        areaNum: 2.56
    },
    {
        id: uuid(),
        title: "Супер-люкс",
        imgMob: "/img/superluxe.jpg",
        imgMob2x: "/img/superluxe-2x.jpg",
        imgTab: "/img/superluxe-tab.jpg",
        imgTab2x: "/img/superluxe-tab-2x.jpg",
        imgDes: "/img/superluxe-des.jpg",
        imgDes2x: "/img/superluxe-des-2x.jpg",
        size: "- 180х160х180 см",
        area: "- 2,88 м2",
        eqp: [{
            one: "/img/sunbed.svg",
            two: "/img/nails.svg",
            three: "/img/threads.svg",
            four: "/img/home.svg"
        }],
        price: '600₽',
        slug: 'luxe',
        priceNum: 600,
        areaNum: 2.88
    }
]

export default CatsData