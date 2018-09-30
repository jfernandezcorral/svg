
import styles from './prueba.scss'
import {construyeSVG, appendTo, setAtt} from './tools.js'
const prueba = (padre, w=undefined, h=undefined)=>{
    const svg = construyeSVG(styles, w, h)
    svg.add_h("<def/>").add('<circle id="c" r="50"/>')
    svg.add_h("<g fill='white'/>")
    .add({tag: 'rect', x:"20", y:"20", width:"100", height:"280", fill:"blue", stroke:"black", 'stroke-width':"3"})
    .add(`<circle cx="70" cy="80" r="30" stroke="black" stroke-width="2" />`)
    svg.add({tag: 'use', 'xlink:href': '#c', x: '120', y: '120', fill: '#40cc40'})
    svg.add(`<use xlink:href='#c' x='220' y='120' fill='#cc4040'/>`)
    svg.add_h(`<use x='320' y='120' fill='#cc4040'/>`)
    .setAtt('xlink:href', '#c')
    /*const g = appendTo(svg,"<g fill='white'/>")
    appendTo(g, {tag: 'rect', x:"20", y:"20", width:"100", height:"280", fill:"blue", stroke:"black", 'stroke-width':"3"})
    appendTo(g , `<circle cx="70" cy="80" r="30" stroke="black" stroke-width="2" />`)*/

    padre.appendChild(svg)
    return svg
}

export {prueba}