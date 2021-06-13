import localforage from "localforage";

localforage.config({
    driver: localforage.INDEXEDDB, //드라이버
    name: 'AGENDA', //이름
    version: 1.0, //버전
    size: 4980736, //허용할사이즈
    storeName: 'AGENDA', //하위이름
    description: 'AGENDA DB' //설명
});

export default localforage;