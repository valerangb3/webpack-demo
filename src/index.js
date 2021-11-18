import _ from 'lodash';
import './style.css';
import MyIcon from './icon.png';
import DataXml from './data.xml';
import DataCsv from './data.csv';
import toml from './data.toml';
import yaml from './data.yaml';
import json5 from './data.json5';

console.log(toml);
console.log(yaml);
console.log(json5);

function component() {
    const element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    console.log(MyIcon);

    const myIcon = new Image();
    myIcon.src = MyIcon;

    element.appendChild(myIcon);

    console.log(DataXml);
    console.log(DataCsv);

    return element;
}

document.body.appendChild(component());