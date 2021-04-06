import '../css/index.css'
import '../css/home.less'
import avatar from '../img/avatar.png'

export const showName = () => {
    console.log('my name is webpack')

    const body = document.body;

    const div = document.createElement('div')
    div.className = 'wrap'
    div.style.width = "50px"
    div.style.height = "50px"
    body.appendChild(div)

    const img = document.createElement('img');
    img.width = 100;
    img.height = 100;
    img.src = avatar;
    body.appendChild(img)


}