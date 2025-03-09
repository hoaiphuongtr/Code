import 'core-js/modules/es.object.values';
import 'core-js/modules/es.promise';
import sum from './utils.js';
import './styles/style.css';
import './styles/style.scss';
import domHandler from './dom.js';
domHandler();
console.log(sum(100, 100));
//ES6
const person = { name: 'Tran Hoai Phuong' };
const personClone = { ...person };
console.log('personClone', personClone);

//ES7
console.log('Object.values', Object.values(personClone));

//Promise,Async Await
const handle = () =>
    new Promise((resolve) => {
        setTimeout(() => {
            resolve(100);
        }, 1000);
    });
const main = async () => {
    const value = await handle();
    console.log('Value', value);
};

main();
