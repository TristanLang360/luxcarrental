(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[71],{ZtKu:function(t,e,n){"use strict";n.r(e);var r=n("nKUr"),i=n("H+61"),s=n("UlJF"),o=n("+Css"),c=n("7LId"),a=n("VIvw"),l=n("iHvq"),u=n("cpVT"),d=n("q1tI"),f=n.n(d),h=n("YFqc"),p=n.n(h),b=n("z/o8"),j=n("yjZJ"),v=n("Qi1R");function m(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function O(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?m(Object(n),!0).forEach((function(e){Object(u.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function g(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(l.a)(t);if(e){var i=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return Object(a.a)(this,n)}}b.a.registerPlugin(j.ScrollToPlugin);var w=Object(v.T)("is_mobile_app"),R=function(t){Object(c.a)(n,t);var e=g(n);function n(t){var r;Object(i.a)(this,n),r=e.call(this,t),Object(u.a)(Object(o.a)(r),"updateCalculation",(function(){var t="",e=window.outerWidth;t=e<=761?2.8:e>1024&&e<1640?5:e>761&&e<1024?3.5:5;var n=r.headerContainerRef.current.getBoundingClientRect().left+15,i=r.sliderWrapperRef.current.offsetWidth/t;r.setState(O(O({},r.state),{},{transformWidth:(window.innerWidth-r.containerRef.current.offsetWidth)/2+n,contentWidth:r.sliderWrapperRef.current.offsetWidth,itemWidth:i,imgHeight:i*(r.imgHeight/r.imgWidth)}),(function(){r.setUpNavButtons()}))})),r.imgWidth=361,r.imgHeight=180,r.sliderWrapperRef=f.a.createRef(),r.sliderInnerRef=f.a.createRef(),r.containerRef=f.a.createRef(),r.headerContainerRef=f.a.createRef(),r.state={timeoffset:80,transformWidth:0,contentWidth:0,itemWidth:0,showLeftButton:!0,showRightButton:!0};var s=Object(v.T)("redirectUrl"),c="/ca/los-angeles";return r.redirectURLValue=s?"/"===s?c:s:c,r}return Object(s.a)(n,[{key:"left",value:function(t){b.a.to(this.sliderWrapperRef.current,{duration:t,scrollTo:{x:"-="+3*this.state.contentWidth}})}},{key:"right",value:function(t){b.a.to(this.sliderWrapperRef.current,{duration:t,scrollTo:{x:"+="+3*this.state.contentWidth}})}},{key:"stop",value:function(){b.a.to(this.sliderWrapperRef.current,{duration:this.state.timeoffset,scrollTo:{x:"+=0"}})}},{key:"setUpNavButtons",value:function(){var t=this.sliderWrapperRef.current.scrollLeft>0,e=this.sliderWrapperRef.current.scrollLeft<this.sliderInnerRef.current.offsetWidth-this.sliderWrapperRef.current.offsetWidth+this.state.transformWidth-10;this.setState(O(O({},this.state),{},{showLeftButton:t,showRightButton:e}))}},{key:"componentDidMount",value:function(){this.updateCalculation(),window.addEventListener("resize",this.updateCalculation)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateCalculation)}},{key:"componentDidUpdate",value:function(t){t.brandList!==this.props.brandList&&this.updateCalculation()}},{key:"render",value:function(){var t,e=this;return Object(r.jsxs)("section",{className:"browse-make py-75 pb-md-0",children:[Object(r.jsx)("div",{className:"custom-container",id:"containerLeft1",ref:this.headerContainerRef,children:Object(r.jsx)("div",{className:"section-heading mb-0",children:Object(r.jsx)("h3",{className:"browse-title",children:"Browse by Make"})})}),Object(r.jsxs)("div",{className:"slider-container custom-container",ref:this.containerRef,children:[Object(r.jsx)("div",{className:"slider-wrapper slider-overflow-auto",ref:this.sliderWrapperRef,onScroll:function(){return e.setUpNavButtons()},children:Object(r.jsx)("div",{className:"slider-inner",ref:this.sliderInnerRef,style:{width:this.state.itemWidth*(null===(t=this.props.brandList)||void 0===t?void 0:t.length)+"px"},children:this.props.brandList&&this.props.brandList.map((function(t,n){var i;return Object(r.jsx)("div",{className:"slider-boxes",style:{transform:"translate(".concat(e.state.transformWidth,"px,0px)"),width:"".concat(e.state.itemWidth,"px")},children:Object(r.jsx)("div",{className:"slider-boxes-inner brand-logo",children:Object(r.jsx)(p.a,{href:e.redirectURLValue+"/"+t.slug+("yes"===w?"?screen_type=make_details&title="+(null===t||void 0===t?void 0:t.title):""),children:Object(r.jsxs)("a",{children:[Object(r.jsx)("div",{className:"d-flex align-items-center justify-content-center text-center",style:{height:"".concat(e.state.imgHeight,"px")},children:Object(r.jsx)("picture",{children:Object(r.jsx)("img",{src:null===t||void 0===t||null===(i=t.image)||void 0===i?void 0:i.jpeg_w180,className:"img-fluid drive-car-dp",alt:(null===t||void 0===t?void 0:t.alt_tag)||(null===t||void 0===t?void 0:t.title)})})}),Object(r.jsx)("span",{className:"font-24 text-black brand-name",children:null===t||void 0===t?void 0:t.title})]})})})},n)}))})}),Object(r.jsx)("div",{className:this.state.showLeftButton?"slider-action-btn action-prev":"d-none",onMouseOver:function(){return e.left(e.state.timeoffset)},onMouseUp:function(){return e.left(e.state.timeoffset)},onMouseOut:function(){return e.stop()},onMouseDown:function(){return e.left(20)},children:Object(r.jsx)("span",{className:"icon icon-chevron-left"})}),Object(r.jsx)("div",{className:this.state.showRightButton?"slider-action-btn action-next":"d-none",onMouseOver:function(){return e.right(e.state.timeoffset)},onMouseUp:function(){return e.right(e.state.timeoffset)},onMouseOut:function(){return e.stop()},onMouseDown:function(){return e.right(20)},children:Object(r.jsx)("span",{className:"icon icon-chevron-right"})})]})]})}}]),n}(f.a.Component);e.default=R}}]);