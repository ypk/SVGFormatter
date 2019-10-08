
        import React from "react";
        import withSVG from "./withSVG";

        const Playhead = () => (
            <title>playhead</title><desc>Created with Sketch.</desc><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-1"><stop stop-color="#FF4452" offset="0%"/><stop stop-color="#D24D57" offset="100%"/></linearGradient><polygon id="path-2" points="0.9375 0.75 29.0625 0.75 29.0625 15.7222222 15 25.25 0.9375 15.7222222"/><filter x="-7.1%" y="-4.1%" width="114.2%" height="116.3%" filterUnits="objectBoundingBox" id="filter-3"><feOffset dx="0" dy="1" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation="0.5" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0" type="matrix" in="shadowBlurOuter1"/></filter></defs><g id="playhead" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Rectangle-4" transform="translate(1.000000, 3.000000)"><g><use fill="black" fill-opacity="1" filter="url(#filter-3)" xlink:href="#path-2"/><use fill="url(#linearGradient-1)" fill-rule="evenodd" xlink:href="#path-2"/></g></g></g>
        );

        export default withSVG(Playhead, 32, 32, '25px', '25px');
    