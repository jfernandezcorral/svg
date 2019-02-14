import styles from './xy.scss'
import {construyeSVG, appendTo, setAtt} from './tools.js'
const cfgDefault = {
    abcisa: 'Importe',
    puntos: [{e: "Enero", v: 400}, {e: "Febrero", v: 231}, {e: "Marzo", v: 0}, {e: "Abril", v: 180},{e: "Mayo", v:0.9}]
}
const orden = num=>{
    //console.log(num)
    const srango = num.toString()
    const dec = srango.indexOf('.')
    let d = 0
    for (let i = 0; i < srango.length; i++){
        if (srango[i] !== '0' && srango[i] !== '.' && srango[i] !== '-'){
           d = i
           break 
        }
    }
    if (dec == -1){
        return srango.length - d - 2
    }
    else{
        return dec - d - (dec > d? 2: 1)
    }
}
const calculoRango = (min, max)=>{
    const rango = max - min
    if (rango == 0){
        return (max==0? [0, 0.3, 0.7, 1]: [0, max, 2*max, 3*max])
    }
    const q = orden(rango)
    return [min, (Math.round((min + rango/3)*10**(-q)))/10**(-q),(Math.round((min + rango*2/3)*10**(-q)))/10**(-q), max]
}
const h = 1000
const t = 0.04
const scale = 0.85
const pre = 0.13
const lc = 10
const htext = 35
const xy = (padre, cfg=cfgDefault, aspectRatio=16/9)=>{
    const paintMarcas = (puntos_abcisa)=>{
        const lx = w-(2*offset)
        const inc = lx/(cfg.puntos.length-1)
        let x = offset
        cfg.puntos.forEach(p=>{
            axis.add(`<line x1="${x}" y1="${h}" x2="${x}" y2="${h+lc}"/>`)
            axis.add(`<text x="${x}" y="${h+htext}">${p.e}</text>`)
            x += inc
        })
        puntos_abcisa.forEach(p=>{
            axis.add(`<line stroke-dasharray="5" x1="${-lc}" y1="${h*(1-((p-pmin)/(pmax-pmin)))}" x2="${w}" y2="${h*(1-((p-pmin)/(pmax-pmin)))}"/>`)
            axis.add(`<text class="abcisa" x="${-htext}" y="${h*(1-((p-pmin)/(pmax-pmin)))}">${p.toString()}</text>`)
        })
    }
    const paint = ()=>{
        const lx = w-(2*offset)
        const inc = lx/(cfg.puntos.length-1)
        let x = offset
        let path = ""
        let ruta = []
        cfg.puntos.forEach((p, i)=>{
            path += i==0? `M${x},${h*(1-((p.v-pmin)/(pmax-pmin)))}`: ` L${x},${h*(1-((p.v-pmin)/(pmax-pmin)))}`
            ruta.push([x, h*(1-((p.v-pmin)/(pmax-pmin)))])
            x += inc
        })
        axis.add(`<path class='grafica' d="${path}"/>`)
        ruta.forEach(p=>{
            axis.add(`<use class='cir' xlink:href='#c' x="${p[0]}" y="${p[1]}"/>`)
        })
    }
    const w = h*aspectRatio
    const offset = t*w
    const [min, max] = cfg.puntos.reduce((a, it)=>{
        if (it.v < a[0]){a[0] = it.v}
        if (it.v > a[1]){a[1] = it.v}
        return a
    },[cfg.puntos[0].v, cfg.puntos[0].v])
    const pmin = min - 2*(max-min)*t
    const pmax = max + 2*(max-min)*t
    const puntos = calculoRango(min, max)
    const svg = construyeSVG(styles, undefined, undefined, w, h)
    svg.add_h("<def/>").add('<circle id="c" r="4"/>')
    const axis = svg.add_h(`<g class='axis' transform='scale(${scale}) translate(${w*pre}, ${h*(1-scale-pre)})'/>`)
    axis.add(`<line y1="${h}" x2="${w}" y2="${h}"/>`)
    axis.add(`<line y2="${h}"/>`)
    paintMarcas(puntos)
    paint()
    svg.add(`<text class="titulo_abcisa" x="0" y="25" transform="rotate(-70) translate(200,1000)">${cfg.abcisa}</text>`)
    padre.appendChild(svg)
    return svg
}

export {xy}
