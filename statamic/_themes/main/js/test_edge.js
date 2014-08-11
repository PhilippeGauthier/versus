/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {};
var resources = [
];
var symbols = {
"stage": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'Text',
                type: 'text',
                rect: ['144px', '93px','795px','61px','auto', 'auto'],
                text: "HELLO WORLD!!",
                align: "center",
                font: ['Arial, Helvetica, sans-serif', 50, "rgba(255,255,255,1.00)", "normal", "none", ""]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Stage}": [
                ["color", "background-color", 'rgba(0,0,0,0.00)'],
                ["style", "width", '1025px'],
                ["style", "height", '650px'],
                ["style", "overflow", 'hidden']
            ],
            "${_Text}": [
                ["style", "top", '447px'],
                ["style", "text-align", 'center'],
                ["style", "width", '1025px'],
                ["style", "height", '61px'],
                ["color", "color", 'rgba(210,210,210,1.00)'],
                ["style", "left", '0px'],
                ["style", "font-size", '50px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: true,
            timeline: [
                { id: "eid10", tween: [ "style", "${_Text}", "width", '1025px', { fromValue: '1025px'}], position: 713, duration: 0 },
                { id: "eid13", tween: [ "color", "${_Text}", "color", 'rgba(210,210,210,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(210,210,210,1.00)'}], position: 0, duration: 0 },
                { id: "eid8", tween: [ "style", "${_Text}", "left", '0px', { fromValue: '0px'}], position: 713, duration: 0 },
                { id: "eid12", tween: [ "color", "${_Stage}", "background-color", 'rgba(0,0,0,0.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,0.00)'}], position: 0, duration: 0 },
                { id: "eid4", tween: [ "style", "${_Text}", "top", '93px', { fromValue: '447px'}], position: 0, duration: 1000 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-129047792");
