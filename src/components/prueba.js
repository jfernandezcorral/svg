
import styles from './prueba.scss'
import {construyeSVG, appendTo, setAtt} from './tools.js'
const prueba = (w, h, padre)=>{
    const el = construyeSVG(w, h, styles, 1024, 1024)
    appendTo(el, {tag: 'rect', x:"20", y:"20", width:"100", height:"280", fill:"blue", stroke:"black", 'stroke-width':"3"})
    padre.appendChild(el)
}

export {prueba}