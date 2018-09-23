const construyeSVG = (w, h, styles, vw, vh)=>{
    const el = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    el.setAttribute("width", w)
    el.setAttribute("height", h)
    el.setAttribute("viewBox", `0 0 ${String(vw)} ${String(vh)}`)
    const tmp = document.createElementNS('http://www.w3.org/2000/svg', 'style')
    tmp.setAttribute("type", 'text/css')
    tmp.appendChild(document.createTextNode(styles))
    el.appendChild(tmp)
    return el
}
const appendTo = (padre, cfg)=>{
    const tmp = document.createElementNS('http://www.w3.org/2000/svg', cfg.tag)
    Object.keys(cfg).forEach(k=>{
        k!='tag' && tmp.setAttributeNS(null, k, cfg[k])
    })
    padre.appendChild(tmp)
    return tmp
}
const setAtt = (el, name, value)=>{
    el.setAttributeNS(null, name, value)
    return el
}
export {construyeSVG, appendTo, setAtt}