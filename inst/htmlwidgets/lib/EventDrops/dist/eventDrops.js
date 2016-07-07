!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("d3")):"function"==typeof define&&define.amd?define(["d3"],e):"object"==typeof exports?exports.eventDrops=e(require("d3")):t.eventDrops=e(t.d3)}(this,function(t){return function(t){function e(r){if(n[r])return n[r].exports;var a=n[r]={exports:{},id:r,loaded:!1};return t[r].call(a.exports,a,a.exports,e),a.loaded=!0,a.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){n(9),function(){throw new Error('Cannot find module "C:\\Users\\KENT\\Dropbox\\development\\r\\EventDrops\\style.css"')}()},function(e,n){e.exports=t},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}var a=n(1),o=r(a),i={lineHeight:40,start:new Date(0),end:new Date,minScale:0,maxScale:1/0,margin:{top:60,left:200,bottom:40,right:50},labelsWidth:210,labelsRightMargin:10,locale:null,axisFormat:null,tickFormat:[[".%L",function(t){return t.getMilliseconds()}],[":%S",function(t){return t.getSeconds()}],["%I:%M",function(t){return t.getMinutes()}],["%I %p",function(t){return t.getHours()}],["%a %d",function(t){return t.getDay()&&1!==t.getDate()}],["%b %d",function(t){return 1!==t.getDate()}],["%B",function(t){return t.getMonth()}],["%Y",function(){return!0}]],eventHover:null,eventZoom:null,eventClick:null,hasDelimiter:!0,date:function(t){return t},hasTopAxis:!0,hasBottomAxis:function(t){return t.length>=10},eventLineColor:"black",eventColor:null,metaballs:!0,zoomable:!0};i.dateFormat=i.locale?i.locale.timeFormat("%d %B %Y"):o["default"].time.format("%d %B %Y"),t.exports=i},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(12),o=r(a),i=function(t,e){return"function"==typeof t?t(e):t};e["default"]=function(t,e,n,r){return function(a){var l=function(a){var i=t.selectAll(".x-axis."+a).data([{}]);i.enter().append("g").classed("x-axis",!0).classed(a,!0).call(o["default"](e.x,n,a)).attr("transform","translate(0,"+("bottom"===a?r.height:0)+")"),i.call(o["default"](e.x,n,a)),i.exit().remove()};i(n.hasTopAxis,a)&&l("top"),i(n.hasBottomAxis,a)&&l("bottom")}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.delimiters=function(t,e,n,r){var a=t.select(".extremum");a.selectAll(".minimum").remove(),a.selectAll(".maximum").remove();var o=e.x.domain();a.append("text").text(r(o[0])).classed("minimum",!0),a.append("text").text(r(o[1])).classed("maximum",!0).attr("transform","translate("+(e.x.range()[1]-n)+")").attr("text-anchor","end")}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=function(t,e,n){return function(r){var a=t.selectAll(".drop-line").data(r);a.enter().append("g").classed("drop-line",!0).attr("transform",function(t,n){return"translate(10, "+e.y(n)+")"}).attr("fill",n.eventLineColor),a.each(function(t){var r=d3.select(this).selectAll(".drop").data(t.data);r.attr("cx",function(t){return e.x(n.date(t))});var a=r.enter().append("circle").classed("drop",!0).attr("r",5).attr("cx",function(t){return e.x(n.date(t))}).attr("cy",n.lineHeight/2).attr("fill",n.eventColor);n.eventClick&&a.on("click",n.eventClick),n.eventHover&&a.on("mouseover",n.eventHover),r.exit().on("click",null).on("mouseover",null),r.exit().remove()}),a.exit().remove()}}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(4),o=n(11),i=n(3),l=r(i),u=n(5),s=r(u),c=n(7),d=r(c),f=n(8),m=r(f);e["default"]=function(t,e,n,r){var i=t.append("defs");i.append("clipPath").attr("id","drops-container-clipper").append("rect").attr("id","drops-container-rect").attr("width",e.width).attr("height",e.height+r.margin.top+r.margin.bottom);var u=t.append("g").classed("labels",!0).attr("transform","translate(0, "+r.lineHeight+")"),c=t.append("g").attr({"class":"chart-wrapper",transform:"translate("+(r.labelsWidth+r.labelsRightMargin)+", 55)"}),f=c.append("g").classed("axes",!0),p=c.append("g").classed("drops-container",!0).attr("clip-path","url(#drops-container-clipper)").style("filter","url(#metaballs)");c.append("g").classed("extremum",!0).attr("width",e.width).attr("height",30).attr("transform","translate(0, -35)"),r.metaballs&&o.metaballs(i);var v=m["default"](f,n,r,e),h=l["default"](f,n,r,e),x=d["default"](u,n,r),g=s["default"](p,n,r);return function(e){v(e),a.delimiters(t,n,r.labelsWidth+r.labelsRightMargin,r.dateFormat),g(e),x(e,r),h(e)}}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(10),o=r(a);e["default"]=function(t,e,n){return function(r){var a=t.selectAll(".label").data(r),i=function(t){var n=o["default"](t.data,e.x).length;return t.name+(n>0?" ("+n+")":"")};a.text(i),a.enter().append("text").classed("label",!0).attr("x",n.labelsWidth).attr("transform",function(t,n){return"translate(0, "+(40+e.y(n))+")"}).attr("text-anchor","end").text(i),a.exit().remove()}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=function(t,e,n,r){return function(a){var o=t.selectAll(".line-separator").data(a);o.enter().append("g").classed("line-separator",!0).attr("transform",function(t,r){return"translate(0, "+(e.y(r)+n.lineHeight)+")"}).append("line").attr("x1",0).attr("x2",r.width),o.exit().remove()}}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function a(){function t(t){t.each(function(e){l["default"].select(this).select(".event-drops-chart").remove();var o={width:this.clientWidth,height:e.length*n.lineHeight},i={x:a(o.width,[n.start,n.end]),y:r(e)},u=l["default"].select(this).append("svg").classed("event-drops-chart",!0).attr({width:o.width,height:o.height+n.margin.top+n.margin.bottom}),s=m["default"](u,o,i,n).bind(t);s(e),n.zoomable&&v["default"](l["default"].select(this),o,i,n,e,s)})}var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],n=o({},d["default"],e),r=function(t){var e=l["default"].scale.ordinal();return e.domain(t.map(function(t){return t.name})).range(t.map(function(t,e){return e*n.lineHeight}))},a=function(t,e){return l["default"].time.scale().range([0,t]).domain(e)};return s["default"](t,n),t}var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i=n(1),l=r(i),u=n(14),s=r(u),c=n(2),d=r(c),f=n(6),m=r(f),p=n(13),v=r(p);l["default"].chart=l["default"].chart||{},l["default"].chart.eventDrops=a,t.exports=a},function(t,e){"use strict";function n(){var t=arguments.length<=0||void 0===arguments[0]?[]:arguments[0],e=arguments[1],n=e.domain(),a=r(n,2),o=a[0],i=a[1];return t.filter(function(t){return t>=o&&i>=t})}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){var n=[],r=!0,a=!1,o=void 0;try{for(var i,l=t[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(u){a=!0,o=u}finally{try{!r&&l["return"]&&l["return"]()}finally{if(a)throw o}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();e["default"]=n},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.metaballs=function(t){var e=t.append("filter");return e.attr("id","metaballs"),e.append("feGaussianBlur").attr("in","SourceGraphic").attr("stdDeviation",10).attr("result","blur"),e.append("feColorMatrix").attr("in","blur").attr("mode","matrix").attr("values","1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 50 -10").attr("result","contrast"),e.append("feBlend").attr("in","SourceGraphic").attr("in2","contrast"),e}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=function(t,e,n){var r=e.tickFormat.map(function(t){return t.slice(0)}),a=e.locale?e.locale.timeFormat.multi(r):o["default"].time.format.multi(r),i=o["default"].svg.axis().scale(t).orient(n).tickFormat(a);return"function"==typeof e.axisFormat&&e.axisFormat(i),i};var a=n(1),o=r(a)},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(1),o=r(a);e["default"]=function(t,e,n,r,a,i){var l=o["default"].behavior.zoom().size([e.width,e.height]).scaleExtent([r.minScale,r.maxScale]).x(n.x).on("zoom",function(){requestAnimationFrame(function(){return i(a)})});return r.eventZoom&&l.on("zoomend",r.eventZoom),t.call(l)}},function(t,e,n){"use strict";function r(t,e){function n(n){return function(r){return arguments.length?(e[n]=r,t):e[n]}}for(var r in e)t[r]=n(r)}t.exports=r}])});
//# sourceMappingURL=eventDrops.js.map