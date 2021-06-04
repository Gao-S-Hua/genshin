import ELEMENT from './element';

const nameList = [
  {
    name: 'Ganyu',
    img: require('../assets/ganyu.png'),
    img2: require('../assets/ganyu2.png'),
    element: ELEMENT.ICE.name,
    level: 'SSS'
  },
  {
    name: 'Qi Qi',
    img: require('../assets/qiqi.jpeg'),
    img2: require('../assets/qiqi2.jpeg'),
    element: ELEMENT.ICE.name,
    level: 'S'
  },
  {
    name: 'Diluc',
    img: require('../assets/diluc.jpeg'),
    img2: require('../assets/diluc2.jpeg'),
    element: ELEMENT.FIRE.name,
    level: 'SSS'
  },
  {
    name: 'Rosaria',
    img: require('../assets/rosaria.png'),
    img2: require('../assets/rosaria2.png'),
    element: ELEMENT.ICE.name,
    level: 'A'
  },
  {
    name: 'Diona',
    img: require('../assets/diona.jpeg'),
    img2: require('../assets/diona2.jpeg'),
    element: ELEMENT.ICE.name,
    level: 'A'
  },
  {
    name: 'Barbala',
    img: require('../assets/barbala.jpeg'),
    img2: require('../assets/barbala2.jpeg'),
    element: ELEMENT.WATER.name,
    level: 'B'
  },
  {
    name: 'Hu Tao',
    img: require('../assets/hutao.jpeg'),
    img2: require('../assets/hutao2.jpeg'),
    element: ELEMENT.FIRE.name,
    level: 'SSS'
  },
  {
    name: 'Jean',
    img: require('../assets/Jean.jpeg'),
    img2: require('../assets/Jean2.jpeg'),
    element: ELEMENT.WIND.name,
    level: 'S'
  },
  {
    name: 'Keqing',
    img: require('../assets/keqing.jpeg'),
    img2: require('../assets/keqing2.jpeg'),
    element: ELEMENT.ELECTRO.name,
    level: 'S'
  },
  {
    name: 'Klee',
    img: require('../assets/klee.jpeg'),
    img2: require('../assets/klee2.jpeg'),
    element: ELEMENT.FIRE.name,
    level: 'SSS'
  },
  {
    name: 'Ning Guang',
    img: require('../assets/Ningguang.jpeg'),
    img2: require('../assets/Ningguang2.jpeg'),
    element: ELEMENT.GEO.name,
    level: 'A'
  },
  {
    name: 'Amber',
    img: require('../assets/Amber.jpeg'),
    img2: require('../assets/Amber2.jpeg'),
    element: ELEMENT.FIRE.name,
    level: 'B'
  },
  {
    name: 'Noelle',
    img: require('../assets/Noelle.jpeg'),
    img2: require('../assets/Noelle2.jpeg'),
    element: ELEMENT.GEO.name,
    level: 'A'
  },
  {
    name: 'Lisa',
    img: require('../assets/lisa.jpeg'),
    img2: require('../assets/lisa2.jpeg'),
    element: ELEMENT.ELECTRO.name,
    level: 'B'
  },
  {
    name: 'Sucrose',
    img: require('../assets/sucrose.jpeg'),
    img2: require('../assets/sucrose2.jpeg'),
    element: ELEMENT.WIND.name,
    level: 'A'
  },
  {
    name: 'Venti',
    img: require('../assets/venti.jpeg'),
    img2: require('../assets/venti2.jpeg'),
    element: ELEMENT.WIND.name,
    level: 'S'
  },
  {
    name: 'Xiang Ling',
    img: require('../assets/xiangling.jpeg'),
    img2: require('../assets/xiangling2.jpeg'),
    element: ELEMENT.FIRE.name,
    level: 'A'
  },
  {
    name: 'Xiao',
    img: require('../assets/xiao.jpeg'),
    img2: require('../assets/xiao2.jpeg'),
    element: ELEMENT.WIND.name,
    level: 'S'
  },
  {
    name: 'Mona',
    img: require('../assets/mona.jpeg'),
    img2: require('../assets/mona2.jpeg'),
    element: ELEMENT.WATER.name,
    level: 'S'
  },
  {
    name: 'Albedo',
    img: require('../assets/Albedo.png'),
    img2: require('../assets/Albedo2.png'),
    element: ELEMENT.GEO.name,
    level: 'S'
  },
  {
    name: 'Beidou',
    img: require('../assets/Beidou.jpeg'),
    img2: require('../assets/Beidou2.jpeg'),
    element: ELEMENT.ELECTRO.name,
    level: 'A'
  },
  {
    name: 'Bennett',
    img: require('../assets/Bennett.jpeg'),
    img2: require('../assets/Bennett2.jpeg'),
    element: ELEMENT.FIRE.name,
    level: 'A'
  },
  {
    name: 'Chongyun',
    img: require('../assets/Chongyun.jpeg'),
    img2: require('../assets/Chongyun2.jpeg'),
    element: ELEMENT.ICE.name,
    level: 'A'
  },
  {
    name: 'Fischl',
    img: require('../assets/Fischl.jpeg'),
    img2: require('../assets/Fischl2.jpeg'),
    element: ELEMENT.ELECTRO.name,
    level: 'A'
  },
  {
    name: 'Kaeya',
    img: require('../assets/Kaeya.jpeg'),
    img2: require('../assets/Kaeya2.jpeg'),
    element: ELEMENT.ICE.name,
    level: 'B'
  },
  {
    name: 'Razor',
    img: require('../assets/Razor.jpeg'),
    img2: require('../assets/Razor2.jpeg'),
    element: ELEMENT.ELECTRO.name,
    level: 'A'
  },
  {
    name: 'Tartaglia',
    img: require('../assets/Tartaglia.png'),
    img2: require('../assets/Tartaglia2.png'),
    element: ELEMENT.WATER.name,
    level: 'S'
  },
  {
    name: 'Xingqiu',
    img: require('../assets/Xingqiu.jpeg'),
    img2: require('../assets/Xingqiu2.jpeg'),
    element: ELEMENT.WATER.name,
    level: 'A'
  },
  {
    name: 'Xinyan',
    img: require('../assets/Xinyan.jpeg'),
    img2: require('../assets/Xinyan2.jpeg'),
    element: ELEMENT.FIRE.name,
    level: 'A'
  },
  {
    name: 'Zhongli',
    img: require('../assets/Zhongli.png'),
    img2: require('../assets/Zhongli2.png'),
    element: ELEMENT.GEO.name,
    level: 'S'
  },
  {
    name: 'Eula',
    img: require('../assets/Eula.png'),
    img2: require('../assets/Eula2.png'),
    element: ELEMENT.ICE.name,
    level: 'S'
  },
  {
    name: 'Yanfei',
    img: require('../assets/Yanfei.png'),
    img2: require('../assets/Yanfei2.png'),
    element: ELEMENT.FIRE.name,
    level: 'A'
  }
]

export default nameList