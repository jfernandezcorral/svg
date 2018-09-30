const NS ={svg: 'http://www.w3.org/2000/svg', xlink: 'http://www.w3.org/1999/xlink'}
const construyeSVG = (styles, w, h, vw=1024, vh=1024)=>{//styles, w, h, 1024, 1024
    const el = document.createElementNS(NS.svg, 'svg')
    w && el.setAttribute("width", w)
    h && el.setAttribute("height", h)
    el.setAttribute("viewBox", `0 0 ${String(vw)} ${String(vh)}`)
    const tmp = document.createElementNS(NS.svg, 'style')
    tmp.setAttribute("type", 'text/css')
    tmp.appendChild(document.createTextNode("/* <![CDATA][ */\n" + styles + "\n/* ]]> */"))
    el.appendChild(tmp)
    el.setAttribute('xmlns', NS.svg)
    el.setAttributeNS(NS.svg, 'xlink', NS.xlink)
    return el
}
const appendTo = (padre, cfg)=>{
    if (typeof cfg === 'string'){
        const el = document.createElementNS(NS.svg, 'g')
        el.innerHTML = cfg
        const ret = el.childNodes[0]
        padre.appendChild(ret)
        return ret
    }
    const tmp = document.createElementNS(NS.svg, cfg.tag)
    Object.keys(cfg).forEach(k=>{
        k!='tag' && k.indexOf(':') < 0 && tmp.setAttributeNS(null, k, cfg[k])
        if (k.indexOf(':')>0){
            const [ns, prop] = k.split(':')
            tmp.setAttributeNS(NS[ns], prop, cfg[k]) 
        } 
    })
    padre.appendChild(tmp)
    return tmp
}
!SVGElement.prototype.add_h && (SVGElement.prototype.add_h = function(cfg){
    return appendTo(this, cfg)
})
!SVGElement.prototype.add && (SVGElement.prototype.add = function(cfg){
    appendTo(this, cfg)
    return this
})
const setAtt = (el, name, value)=>{
    if (name.indexOf(':')>0){
        const [ns, prop] = name.split(':')
        el.setAttributeNS(NS[ns], prop, value) 
        return el
    } 
    el.setAttributeNS(null, name, value)
    return el
}
!SVGElement.prototype.setAtt && (SVGElement.prototype.setAtt = function(name, value){
    setAtt(this, name, value)
    return this
})
export {construyeSVG, appendTo, setAtt}