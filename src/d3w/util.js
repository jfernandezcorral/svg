const NS ={svg: 'http://www.w3.org/2000/svg', xlink: 'http://www.w3.org/1999/xlink'}
const DEFAULT_H = 2048
const DEFAULT_ASPECT_RATIO = 16/9
const construyeSVG = (w, h, vw=DEFAULT_H, vh=DEFAULT_H)=>{
    const el = document.createElementNS(NS.svg, 'svg')
    w && el.setAttribute("width", w)
    h && el.setAttribute("height", h)
    el.setAttribute("viewBox", `0 0 ${String(vw)} ${String(vh)}`)
    el.setAttribute('xmlns', NS.svg)
    el.setAttributeNS(NS.svg, 'xlink', NS.xlink)
    return el
}
const construyeSVGS = (aspectRatio = DEFAULT_ASPECT_RATIO)=>{
    return construyeSVG(undefined, undefined, aspectRatio*DEFAULT_H, DEFAULT_H)
}

export {construyeSVG, construyeSVGS, DEFAULT_ASPECT_RATIO, DEFAULT_H}