import styles from './xy.scss'
import {construyeSVG, appendTo, setAtt} from './tools.js'
const cfgDefault = {
    puntos: [{e: "Enero", v: 25}, {e: "Febrero", v: -5}, {e: "Marzo", v: 10}]
}
const calculoRango = (min, max)=>{
    //
    if (max-min == 0){
        return (max==0? [0, 1]: [max-1, max+1])
    }
    return [2, 5]
}
const h = 1000
const t = 0.04
const scale = 0.85
const pre = 0.13
const lc = 10
const htext = 35
const xy = (padre, cfg=cfgDefault, aspectRatio=16/9)=>{
    const paintMarcas = ()=>{
        const lx = w-(2*offset)
        const inc = lx/(cfg.puntos.length-1)
        let x = offset
        cfg.puntos.forEach(p=>{
            axis.add(`<line x1="${x}" y1="${h}" x2="${x}" y2="${h+lc}"/>`)
            axis.add(`<text x="${x}" y="${h+htext}">${p.e}</text>`)
            x += inc
        })
    }
    
    const w = h*aspectRatio
    const offset = t*w
    const [min, max] = cfg.puntos.reduce((a, it)=>{
        if (it.v < a[0]){a[0] = it.v}
        if (it.v > a[1]){a[1] = it.v}
        return a
    },[cfg.puntos[0].v, cfg.puntos[0].v])
    const [pmin, pmax] = calculoRango(min, max)
    console.log(pmin, pmax)
    const svg = construyeSVG(styles, undefined, undefined, w, h)
    //svg.add_h("<def/>").add('<circle id="c" r="50"/>')
    const axis = svg.add_h(`<g class='axis' transform='scale(${scale}) translate(${w*pre}, ${h*(1-scale-pre)})'/>`)
    axis.add(`<line y1="${h}" x2="${w}" y2="${h}"/>`)
    axis.add(`<line y2="${h}"/>`)
    paintMarcas()
    padre.appendChild(svg)
    return svg
}

export {xy}
