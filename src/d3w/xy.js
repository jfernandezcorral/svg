import {construyeSVG, construyeSVGS, DEFAULT_ASPECT_RATIO, DEFAULT_H} from './util'
import * as d3 from 'd3'
const xy = (el, data, aspectRatio = DEFAULT_ASPECT_RATIO)=>{
    const svg = construyeSVGS(aspectRatio)
    el.appendChild(svg)
    const svgd3 = d3.select(svg)

    return svg
}
const donut = (el, data, aspectRatio = 1)=>{
    data = data || [{n: 'A', v: 22}, {n: 'B', v: 12}, {n: 'C', v: 18}]
    const svg = construyeSVGS(aspectRatio)
    el.appendChild(svg)
    const svgd3 = d3.select(svg)
    let pie = d3.pie().value(d=>d.v).padAngle(0.025)(data)
    let arcMkr = d3.arc().innerRadius(50).outerRadius(150).cornerRadius(10)
    let scc = d3.scaleOrdinal(d3.schemePastel2).domain(pie.map(d=>d.index))
    svgd3.append("g").attr("transform", "translate(300, 175)")
        .selectAll("path").data(pie).enter().append("path")
        .attr("d", arcMkr)
        .attr("fill", d=>scc(d.index)).attr("stroke", "grey")
    return svg
}
export {xy, donut}