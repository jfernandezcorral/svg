import styles from './xy.scss'
import {construyeSVG, appendTo, setAtt} from './tools.js'
const cfgDefault = {
    puntos: [{e: "Enero", v: 25}, {e: "Febrero", v: -5}, {e: "Marzo", v: 10}]
}
const xy = (padre, cfg=cfgDefault, aspectRatio=16/9)=>{
    const paintMarcas = ()=>{
        const lx = w-(2*offset)
        const inc = lx/(cfg.puntos.length-1)
        let x = offset
        cfg.puntos.forEach(p=>{
            axis.add(`<line x1="${x}" y1="${h-5}" x2="${x}" y2="${h+5}"/>`)
            axis.add(`<text x="${x}" y="${h+30}">${p.e}</text>`)
            x += inc
        })
    }
    const h = 1000
    const w = 1000*aspectRatio
    const t = 0.04
    const offset = t*w
    const [min, max] = cfg.puntos.reduce((a, it)=>{
        if (it.v < a[0]){a[0] = it.v}
        if (it.v > a[1]){a[1] = it.v}
        return a
    },[cfg.puntos[0].v, cfg.puntos[0].v])
    let rango = max - min
    rango = rango? rango*(1+(2*t)): min? min*(1+(2*t)): 2
    console.log(rango)
    const svg = construyeSVG(styles, undefined, undefined, w, h)
    //svg.add_h("<def/>").add('<circle id="c" r="50"/>')
    const axis = svg.add_h(`<g class='axis' transform='scale(.90) translate(${w*0.05}, ${h*0.05})'/>`)
    axis.add(`<line y1="${h}" x2="${w}" y2="${h}"/>`)
    axis.add(`<line y2="${h}"/>`)
    paintMarcas()
    padre.appendChild(svg)
    return svg
}

export {xy}
