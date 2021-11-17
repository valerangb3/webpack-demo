import _ from 'lodash';
import './style.css';
import MyIcon from './icon.png';


function component() {
    const element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    console.log(MyIcon);

    const myIcon = new Image();
    myIcon.src = MyIcon;

    element.appendChild(myIcon);

    return element;
}

document.body.appendChild(component());