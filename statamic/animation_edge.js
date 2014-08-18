/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};    fonts['neusasemibold, Helvetica, \'Arial sans-serif\', Georgia, Cambria, "Times New Roman", Times, serif']='<link rel=\"stylesheet\" href=\"http://contestabili.com/assets/webfonts/neusa/stylesheet.css\" type=\"text/css\" charset=\"utf-8\" />';

var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "width",
    centerStage: "horizontal",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            // {
            //     id: 'background_1600x1600',
            //     type: 'image',
            //     rect: ['0px', '-312px','1190px','1165px','auto', 'auto'],
            //     fill: ["rgba(0,0,0,0)",im+"background_1600x1600.png",'0px','0px']
            // },
            {
                id: 'step1',
                type: 'rect',
                rect: ['297px', '222px','auto','auto','auto', 'auto'],
                clip: ['rect(0px 612px 99px 0px)']
            },
            {
                id: 'step2',
                type: 'group',
                rect: ['344', '222','512','98','auto', 'auto'],
                c: [
                {
                    id: 'FACE-TO-INTERFACE',
                    type: 'text',
                    rect: ['0px', '43px','auto','auto','auto', 'auto'],
                    clip: ['rect(0px 497px 55px 0px)'],
                    text: "FACE-TO-FACE AND INTERFACE.",
                    align: "left",
                    font: ['neusasemibold, Helvetica, \'Arial sans-serif\', Georgia, Cambria, \'Times New Roman\', Times, serif', 42, "rgba(102,0,255,1)", "bold", "none", "normal"]
                },
                {
                    id: 'CREATE-FOR-BOTH-WORLDS',
                    type: 'text',
                    rect: ['0px', '0px','auto','auto','auto', 'auto'],
                    clip: ['rect(0px 512px 55px 0px)'],
                    text: "WE CREATE FOR BOTH WORLDS.",
                    align: "left",
                    font: ['neusasemibold, Helvetica, \'Arial sans-serif\', Georgia, Cambria, \'Times New Roman\', Times, serif', 42, "rgba(102,0,255,1)", "bold", "none", "normal"]
                }]
            },
            {
                id: 'step3',
                type: 'group',
                rect: ['412', '222','367','99','auto', 'auto'],
                c: [
                {
                    id: 'MACKE-YOUR-BRAND',
                    type: 'text',
                    rect: ['0px', '44px','auto','auto','auto', 'auto'],
                    text: "TO MAKE YOUR BRAND",
                    align: "left",
                    font: ['neusasemibold, Helvetica, \'Arial sans-serif\', Georgia, Cambria, \'Times New Roman\', Times, serif', 42, "rgba(102,0,255,1)", "bold", "none", "normal"]
                },
                {
                    id: 'WHATEVER-TAKES',
                    type: 'text',
                    rect: ['17px', '0px','auto','auto','auto', 'auto'],
                    text: "WHATEVER IT TAKES",
                    align: "left",
                    font: ['neusasemibold, Helvetica, \'Arial sans-serif\', Georgia, Cambria, \'Times New Roman\', Times, serif', 42, "rgba(102,0,255,1)", "bold", "none", "normal"]
                }]
            },
            {
                id: 'LOUD',
                type: 'text',
                rect: ['1050px', '204px','auto','auto','auto', 'auto'],
                text: "LOUD.",
                align: "left",
                font: ['neusasemibold, Helvetica, \'Arial sans-serif\', Georgia, Cambria, \'Times New Roman\', Times, serif', 101, "rgba(102,0,255,1)", "bold", "none", "normal"]
            },
            {
                id: 'HEARD',
                type: 'text',
                rect: ['1204px', '204px','auto','auto','auto', 'auto'],
                text: "HEARD.",
                align: "left",
                font: ['neusasemibold, Helvetica, \'Arial sans-serif\', Georgia, Cambria, \'Times New Roman\', Times, serif', 101, "rgba(102,0,255,1)", "bold", "none", "normal"]
            },
            {
                id: 'SEEN',
                type: 'text',
                rect: ['1204px', '204px','auto','auto','auto', 'auto'],
                text: "SEEN.",
                align: "left",
                font: ['neusasemibold, Helvetica, \'Arial sans-serif\', Georgia, Cambria, \'Times New Roman\', Times, serif', 101, "rgba(102,0,255,1)", "bold", "none", "normal"]
            },
            {
                id: 'FELT',
                type: 'text',
                rect: ['1204px', '204px','auto','auto','auto', 'auto'],
                text: "FELT.",
                align: "left",
                font: ['neusasemibold, Helvetica, \'Arial sans-serif\', Georgia, Cambria, \'Times New Roman\', Times, serif', 101, "rgba(102,0,255,1)", "bold", "none", "normal"]
            },
            {
                id: 'BELIEVED-FIRST',
                type: 'text',
                rect: ['1204px', '204px','auto','auto','auto', 'auto'],
                clip: ['rect(0px 310px 132px 0px)'],
                text: "BELIEVED.",
                align: "left",
                font: ['neusasemibold, Helvetica, \'Arial sans-serif\', Georgia, Cambria, \'Times New Roman\', Times, serif', 101, "rgba(102,0,255,1)", "bold", "none", "normal"]
            },
            {
                id: 'BELIEVED-LAST',
                type: 'text',
                rect: ['1204px', '204px','auto','auto','auto', 'auto'],
                clip: ['rect(0px 310px 132px 0px)'],
                text: "BELIEVED.",
                align: "left",
                font: ['neusasemibold, Helvetica, \'Arial sans-serif\', Georgia, Cambria, \'Times New Roman\', Times, serif', 101, "rgba(102,0,255,1)", "bold", "none", "normal"]
            },
            {
                id: 'BOOM-BOX',
                type: 'rect',
                rect: ['16.4%', '4.5%','67.2%','37.4%','auto', 'auto'],
                fill: ["rgba(102,0,255,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'BOOM',
                type: 'text',
                rect: ['488px', '204px','auto','auto','auto', 'auto'],
                text: "BOOM",
                align: "left",
                font: ['neusasemibold, Helvetica, \'Arial sans-serif\', Georgia, Cambria, \'Times New Roman\', Times, serif', 101, "rgba(0,0,0,1.00)", "bold", "none", "normal"]
            },
            {
                id: 'READY-BLACK',
                type: 'text',
                rect: ['421px', '244px','auto','auto','auto', 'auto'],
                text: "READY TO GET LOUD?",
                align: "left",
                font: ['neusasemibold, Helvetica, \'Arial sans-serif\', Georgia, Cambria, \'Times New Roman\', Times, serif', 42, "rgba(0,0,0,1.00)", "bold", "none", "normal"]
            },
            {
                id: 'READY-COLOR',
                type: 'text',
                rect: ['421px', '244px','auto','auto','auto', 'auto'],
                clip: ['rect(0px 350px 55px 0px)'],
                text: "READY TO GET LOUD?",
                align: "center",
                font: ['neusasemibold, Helvetica, \'Arial sans-serif\', Georgia, Cambria, \'Times New Roman\', Times, serif', [262.5, "%"], "rgba(0,0,0,1.00)", "bold", "none", "normal"]
            }],
            symbolInstances: [
            {
                id: 'step1',
                symbolName: 'step1',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_HEARD}": [
                ["style", "top", '204px'],
                ["style", "opacity", '1'],
                ["style", "left", '1204px'],
                ["style", "font-size", '101px']
            ],
            "${_READY-BLACK}": [
                ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["color", "color", 'rgba(0,0,0,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '421px'],
                ["style", "font-size", '42px'],
                ["style", "top", '244px'],
                ["transform", "scaleY", '1'],
                ["transform", "skewX", '0deg'],
                ["style", "height", '55px'],
                ["style", "width", '350px'],
                ["transform", "skewY", '0deg'],
                ["transform", "scaleX", '1']
            ],
            "${_BOOM}": [
                ["style", "top", '204px'],
                ["color", "color", 'rgba(0,0,0,1.00)'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '488px'],
                ["style", "font-size", '101px']
            ],
            "${_BELIEVED-FIRST}": [
                ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '204px'],
                ["style", "left", '1204px'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0.10000000149011612'],
                ["style", "clip", [0,175,132,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "font-size", '101px']
            ],
            "${_BOOM-BOX}": [
                ["color", "background-color", 'rgba(102,0,255,1.00)'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '16.39%'],
                ["style", "width", '67.23%'],
                ["style", "top", '4.46%'],
                ["transform", "scaleY", '1'],
                ["transform", "skewX", '0deg'],
                ["style", "height", '37.42%'],
                ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "skewY", '0deg']
            ],
            "${_step1}": [
                ["style", "-webkit-transform-origin", [50,48], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,48],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,48],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,48],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,48],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleX", '1.0156'],
                ["style", "opacity", '1'],
                ["style", "left", '297px'],
                ["style", "width", '612px'],
                ["style", "top", '222px'],
                ["transform", "scaleY", '1.0156'],
                ["style", "height", '99px'],
                ["style", "clip", [0,612,99,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_LOUD}": [
                ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleX", '0.25334'],
                ["style", "opacity", '0'],
                ["style", "left", '489px'],
                ["style", "font-size", '101px'],
                ["style", "top", '204px'],
                ["transform", "scaleY", '0.25334'],
                ["style", "height", '132px'],
                ["style", "width", '211px']
            ],
            "${_SEEN}": [
                ["style", "top", '204px'],
                ["style", "opacity", '0.1'],
                ["style", "left", '1204px'],
                ["style", "font-size", '101px']
            ],
            "${_READY-COLOR}": [
                ["style", "-webkit-transform-origin", [58.15,7886.37], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [58.15,7886.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [58.15,7886.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [58.15,7886.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [58.15,7886.37],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleX", '1'],
                ["transform", "scaleY", '1'],
                ["color", "color", 'rgba(102,0,255,1.00)'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '366px'],
                ["style", "font-size", '262.5%'],
                ["style", "top", '244px'],
                ["style", "width", '459px'],
                ["transform", "skewY", '0deg'],
                ["transform", "skewX", '0deg'],
                ["style", "font-style", 'normal'],
                ["style", "height", '76px'],
                ["style", "clip", [-20.19921875,459.05078125,76.662109375,0.13085900247097015], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "text-align", 'center']
            ],
            "${_CREATE-FOR-BOTH-WORLDS}": [
                ["style", "top", '0px'],
                ["style", "clip", [0,512,45,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-5px'],
                ["style", "font-size", '42px']
            ],
            "${_step2}": [
                ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleX", '0.13574'],
                ["style", "opacity", '0'],
                ["style", "left", '344px'],
                ["style", "width", '512px'],
                ["style", "top", '222px'],
                ["transform", "scaleY", '0.13574'],
                ["transform", "skewX", '0deg'],
                ["style", "height", '98px'],
                ["transform", "skewY", '0deg']
            ],
            "${_background_1600x1600}": [
                ["style", "height", '1165px'],
                ["style", "top", '-312px'],
                ["style", "left", '0px'],
                ["style", "width", '1190px']
            ],
            "${_FACE-TO-INTERFACE}": [
                ["style", "top", '44px'],
                ["style", "clip", [0,497,45,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '3px'],
                ["style", "font-size", '42px']
            ],
            "${_MACKE-YOUR-BRAND}": [
                ["style", "top", '44px'],
                ["transform", "skewX", '0deg'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '0px'],
                ["style", "font-size", '42px']
            ],
            "${_BELIEVED-LAST}": [
                ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '204px'],
                ["style", "clip", [0,350,132,175], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0.10000000149011612'],
                ["style", "left", '1204px'],
                ["style", "font-size", '101px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(0,0,0,0.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '1165px'],
                ["style", "width", '1190px']
            ],
            "${_FELT}": [
                ["style", "top", '204px'],
                ["style", "opacity", '0.1'],
                ["style", "left", '1204px'],
                ["style", "font-size", '101px']
            ],
            "${_WHATEVER-TAKES}": [
                ["style", "top", '0px'],
                ["transform", "skewX", '0deg'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '17px'],
                ["style", "font-size", '42px']
            ],
            "${_step3}": [
                ["style", "opacity", '1']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 16924,
            autoPlay: true,
            labels: {
                "Label 1": 9223,
                "start": 9647,
                "end": 10147,
                "start2": 10704,
                "end2": 11174,
                "stop": 14924
            },
            timeline: [
                { id: "eid961", tween: [ "style", "${_BOOM}", "top", '204px', { fromValue: '204px'}], position: 16549, duration: 0 },
                { id: "eid580", tween: [ "style", "${_FELT}", "left", '504px', { fromValue: '1204px'}], position: 8416, duration: 500, easing: "easeInOutQuad" },
                { id: "eid591", tween: [ "style", "${_FELT}", "left", '-210px', { fromValue: '504px'}], position: 9598, duration: 500, easing: "easeOutQuad" },
                { id: "eid793", tween: [ "style", "${_FACE-TO-INTERFACE}", "top", '88px', { fromValue: '44px'}], position: 13174, duration: 500, easing: "easeInQuad" },
                { id: "eid247", tween: [ "transform", "${_step1}", "scaleY", '0.55365', { fromValue: '1.0156'}], position: 5799, duration: 250 },
                { id: "eid794", tween: [ "style", "${_FACE-TO-INTERFACE}", "clip", [0,497,0,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,497,45,0]}], position: 13174, duration: 500, easing: "easeInQuad" },
                { id: "eid1370", tween: [ "style", "${_READY-COLOR}", "left", '366px', { fromValue: '366px'}], position: 16570, duration: 0 },
                { id: "eid1369", tween: [ "style", "${_READY-COLOR}", "width", '459px', { fromValue: '459px'}], position: 16570, duration: 0 },
                { id: "eid180", tween: [ "style", "${_step1}", "top", '222px', { fromValue: '222px'}], position: 5875, duration: 0 },
                { id: "eid1033", tween: [ "transform", "${_BOOM-BOX}", "skewY", '0deg', { fromValue: '0deg'}], position: 16549, duration: 0 },
                { id: "eid755", tween: [ "transform", "${_step2}", "scaleY", '1', { fromValue: '0.13574'}], position: 10424, duration: 470 },
                { id: "eid529", tween: [ "style", "${_LOUD}", "top", '204px', { fromValue: '204px'}], position: 7121, duration: 0 },
                { id: "eid1043", tween: [ "transform", "${_READY-BLACK}", "skewY", '0deg', { fromValue: '0deg'}], position: 16549, duration: 0 },
                { id: "eid1037", tween: [ "transform", "${_BOOM-BOX}", "scaleY", '0.57173', { fromValue: '1'}], position: 16549, duration: 250 },
                { id: "eid856", tween: [ "style", "${_MACKE-YOUR-BRAND}", "opacity", '1', { fromValue: '0.000000'}], position: 13174, duration: 500, easing: "easeInQuad" },
                { id: "eid629", tween: [ "style", "${_BELIEVED-FIRST}", "-webkit-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 10424, duration: 0 },
                { id: "eid1626", tween: [ "style", "${_BELIEVED-FIRST}", "-moz-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 10424, duration: 0 },
                { id: "eid1627", tween: [ "style", "${_BELIEVED-FIRST}", "-ms-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 10424, duration: 0 },
                { id: "eid1628", tween: [ "style", "${_BELIEVED-FIRST}", "msTransformOrigin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 10424, duration: 0 },
                { id: "eid1629", tween: [ "style", "${_BELIEVED-FIRST}", "-o-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 10424, duration: 0 },
                { id: "eid636", tween: [ "style", "${_BELIEVED-FIRST}", "top", '-30px', { fromValue: '204px'}], position: 10424, duration: 470 },
                { id: "eid1028", tween: [ "style", "${_BOOM-BOX}", "width", '67.23%', { fromValue: '67.23%'}], position: 16549, duration: 0 },
                { id: "eid496", tween: [ "style", "${_LOUD}", "opacity", '1', { fromValue: '0'}], position: 5799, duration: 250, easing: "easeInQuad" },
                { id: "eid536", tween: [ "style", "${_LOUD}", "opacity", '0', { fromValue: '1'}], position: 7121, duration: 500, easing: "easeOutQuad" },
                { id: "eid1036", tween: [ "transform", "${_BOOM-BOX}", "scaleX", '0.57172', { fromValue: '1'}], position: 16549, duration: 250 },
                { id: "eid1064", tween: [ "transform", "${_READY-BLACK}", "scaleX", '0.57142', { fromValue: '1'}], position: 16549, duration: 250 },
                { id: "eid1358", tween: [ "style", "${_READY-COLOR}", "font-size", '350%', { fromValue: '262.5%'}], position: 16570, duration: 354 },
                { id: "eid960", tween: [ "style", "${_BOOM}", "left", '488px', { fromValue: '488px'}], position: 16549, duration: 0 },
                { id: "eid1065", tween: [ "transform", "${_READY-BLACK}", "scaleY", '0.57143', { fromValue: '1'}], position: 16549, duration: 250 },
                { id: "eid1046", tween: [ "style", "${_READY-BLACK}", "width", '350px', { fromValue: '350px'}], position: 16549, duration: 0 },
                { id: "eid1329", tween: [ "style", "${_BELIEVED-LAST}", "opacity", '1', { fromValue: '0.10000000149011612'}], position: 9272, duration: 500, easing: "easeInOutQuad" },
                { id: "eid1330", tween: [ "style", "${_BELIEVED-LAST}", "opacity", '0', { fromValue: '1'}], position: 10424, duration: 283, easing: "easeOutQuad" },
                { id: "eid1147", tween: [ "style", "${_step3}", "opacity", '0', { fromValue: '1'}], position: 14993, duration: 100, easing: "easeInQuad" },
                { id: "eid582", tween: [ "style", "${_FELT}", "opacity", '1', { fromValue: '0.1'}], position: 8416, duration: 500, easing: "easeInOutQuad" },
                { id: "eid592", tween: [ "style", "${_FELT}", "opacity", '0', { fromValue: '1'}], position: 9598, duration: 500, easing: "easeOutQuad" },
                { id: "eid181", tween: [ "style", "${_step1}", "width", '612px', { fromValue: '612px'}], position: 5875, duration: 0 },
                { id: "eid925", tween: [ "style", "${_BOOM-BOX}", "opacity", '1', { fromValue: '0.000000'}], position: 14993, duration: 100, easing: "easeInQuad" },
                { id: "eid1038", tween: [ "style", "${_BOOM-BOX}", "opacity", '0', { fromValue: '1'}], position: 16549, duration: 375 },
                { id: "eid538", tween: [ "style", "${_HEARD}", "opacity", '1', { fromValue: '1'}], position: 6799, duration: 0 },
                { id: "eid543", tween: [ "style", "${_HEARD}", "opacity", '0', { fromValue: '1'}], position: 7926, duration: 500, easing: "easeOutQuad" },
                { id: "eid1397", tween: [ "style", "${_READY-COLOR}", "clip", [-20.19921875,459.05078125,76.662109375,0.13085900247097015], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [-20.19921875,459.05078125,76.662109375,0.13085900247097015]}], position: 16924, duration: 0 },
                { id: "eid535", tween: [ "style", "${_LOUD}", "left", '-236px', { fromValue: '489px'}], position: 7121, duration: 500, easing: "easeOutQuad" },
                { id: "eid509", tween: [ "transform", "${_LOUD}", "scaleX", '1', { fromValue: '0.25334'}], position: 5799, duration: 250, easing: "easeInQuad" },
                { id: "eid539", tween: [ "style", "${_HEARD}", "left", '465px', { fromValue: '1204px'}], position: 6799, duration: 500, easing: "easeInOutQuad" },
                { id: "eid542", tween: [ "style", "${_HEARD}", "left", '-285px', { fromValue: '465px'}], position: 7926, duration: 500, easing: "easeOutQuad" },
                { id: "eid1029", tween: [ "style", "${_BOOM-BOX}", "height", '37.42%', { fromValue: '37.42%'}], position: 16549, duration: 0 },
                { id: "eid1429", tween: [ "style", "${_READY-COLOR}", "top", '241px', { fromValue: '244px'}], position: 16570, duration: 146 },
                { id: "eid1430", tween: [ "style", "${_READY-COLOR}", "top", '235px', { fromValue: '241px'}], position: 16716, duration: 208 },
                { id: "eid510", tween: [ "transform", "${_LOUD}", "scaleY", '1', { fromValue: '0.25334'}], position: 5799, duration: 250, easing: "easeInQuad" },
                { id: "eid1331", tween: [ "style", "${_BELIEVED-LAST}", "left", '420px', { fromValue: '1204px'}], position: 9272, duration: 500, easing: "easeInOutQuad" },
                { id: "eid1332", tween: [ "style", "${_BELIEVED-LAST}", "left", '635px', { fromValue: '420px'}], position: 10424, duration: 470, easing: "easeOutQuad" },
                { id: "eid246", tween: [ "transform", "${_step1}", "scaleX", '0.55365', { fromValue: '1.0156'}], position: 5799, duration: 250 },
                { id: "eid546", tween: [ "style", "${_SEEN}", "left", '496px', { fromValue: '1204px'}], position: 7602, duration: 500, easing: "easeInOutQuad" },
                { id: "eid551", tween: [ "style", "${_SEEN}", "left", '-225px', { fromValue: '496px'}], position: 8772, duration: 500, easing: "easeOutQuad" },
                { id: "eid1068", tween: [ "style", "${_READY-BLACK}", "opacity", '1', { fromValue: '0'}], position: 16549, duration: 21 },
                { id: "eid1066", tween: [ "style", "${_READY-BLACK}", "opacity", '0', { fromValue: '1'}], position: 16570, duration: 354 },
                { id: "eid1328", tween: [ "style", "${_BELIEVED-LAST}", "top", '394px', { fromValue: '204px'}], position: 10424, duration: 470, easing: "easeOutQuad" },
                { id: "eid855", tween: [ "style", "${_WHATEVER-TAKES}", "opacity", '1', { fromValue: '0.000000'}], position: 12674, duration: 500, easing: "easeInQuad" },
                { id: "eid548", tween: [ "style", "${_SEEN}", "opacity", '1', { fromValue: '0.1'}], position: 7602, duration: 500, easing: "easeInOutQuad" },
                { id: "eid552", tween: [ "style", "${_SEEN}", "opacity", '0', { fromValue: '1'}], position: 8772, duration: 500, easing: "easeOutQuad" },
                { id: "eid800", tween: [ "style", "${_CREATE-FOR-BOTH-WORLDS}", "top", '44px', { fromValue: '0px'}], position: 12674, duration: 500, easing: "easeInQuad" },
                { id: "eid1047", tween: [ "style", "${_READY-BLACK}", "height", '55px', { fromValue: '55px'}], position: 16549, duration: 0 },
                { id: "eid587", tween: [ "style", "${_BELIEVED-FIRST}", "left", '420px', { fromValue: '1204px'}], position: 9272, duration: 500, easing: "easeInOutQuad" },
                { id: "eid635", tween: [ "style", "${_BELIEVED-FIRST}", "left", '198px', { fromValue: '420px'}], position: 10424, duration: 470 },
                { id: "eid184", tween: [ "style", "${_step1}", "-webkit-transform-origin", [50,48], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,48]}], position: 5875, duration: 0 },
                { id: "eid1630", tween: [ "style", "${_step1}", "-moz-transform-origin", [50,48], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,48]}], position: 5875, duration: 0 },
                { id: "eid1631", tween: [ "style", "${_step1}", "-ms-transform-origin", [50,48], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,48]}], position: 5875, duration: 0 },
                { id: "eid1632", tween: [ "style", "${_step1}", "msTransformOrigin", [50,48], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,48]}], position: 5875, duration: 0 },
                { id: "eid1633", tween: [ "style", "${_step1}", "-o-transform-origin", [50,48], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,48]}], position: 5875, duration: 0 },
                { id: "eid1335", tween: [ "style", "${_BELIEVED-LAST}", "clip", [0,350,132,175], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,350,132,175]}], position: 9772, duration: 0 },
                { id: "eid1034", tween: [ "style", "${_BOOM-BOX}", "-webkit-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 16549, duration: 0 },
                { id: "eid1634", tween: [ "style", "${_BOOM-BOX}", "-moz-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 16549, duration: 0 },
                { id: "eid1635", tween: [ "style", "${_BOOM-BOX}", "-ms-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 16549, duration: 0 },
                { id: "eid1636", tween: [ "style", "${_BOOM-BOX}", "msTransformOrigin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 16549, duration: 0 },
                { id: "eid1637", tween: [ "style", "${_BOOM-BOX}", "-o-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 16549, duration: 0 },
                { id: "eid1327", tween: [ "style", "${_BELIEVED-LAST}", "-webkit-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 10424, duration: 0 },
                { id: "eid1638", tween: [ "style", "${_BELIEVED-LAST}", "-moz-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 10424, duration: 0 },
                { id: "eid1639", tween: [ "style", "${_BELIEVED-LAST}", "-ms-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 10424, duration: 0 },
                { id: "eid1640", tween: [ "style", "${_BELIEVED-LAST}", "msTransformOrigin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 10424, duration: 0 },
                { id: "eid1641", tween: [ "style", "${_BELIEVED-LAST}", "-o-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 10424, duration: 0 },
                { id: "eid245", tween: [ "style", "${_step1}", "opacity", '0', { fromValue: '1'}], position: 5799, duration: 250 },
                { id: "eid1396", tween: [ "style", "${_READY-COLOR}", "height", '76px', { fromValue: '76px'}], position: 16570, duration: 0 },
                { id: "eid1045", tween: [ "style", "${_READY-BLACK}", "top", '244px', { fromValue: '244px'}], position: 16549, duration: 0 },
                { id: "eid1095", tween: [ "style", "${_READY-COLOR}", "opacity", '1', { fromValue: '0.000000'}], position: 16549, duration: 21 },
                { id: "eid182", tween: [ "style", "${_step1}", "height", '99px', { fromValue: '99px'}], position: 5875, duration: 0 },
                { id: "eid1306", tween: [ "style", "${_BELIEVED-FIRST}", "clip", [0,175,132,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,175,132,0]}], position: 9772, duration: 0, easing: "easeInQuad" },
                { id: "eid1026", tween: [ "style", "${_BOOM-BOX}", "left", '16.39%', { fromValue: '16.39%'}], position: 16549, duration: 0 },
                { id: "eid1032", tween: [ "transform", "${_BOOM-BOX}", "skewX", '0deg', { fromValue: '0deg'}], position: 16549, duration: 0 },
                { id: "eid801", tween: [ "style", "${_CREATE-FOR-BOTH-WORLDS}", "clip", [0,512,0,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,512,45,0]}], position: 12674, duration: 500, easing: "easeInQuad" },
                { id: "eid1044", tween: [ "style", "${_READY-BLACK}", "left", '421px', { fromValue: '421px'}], position: 16549, duration: 0 },
                { id: "eid756", tween: [ "style", "${_step2}", "opacity", '1', { fromValue: '0'}], position: 10424, duration: 470 },
                { id: "eid773", tween: [ "style", "${_step2}", "opacity", '1', { fromValue: '1'}], position: 12674, duration: 0 },
                { id: "eid588", tween: [ "style", "${_BELIEVED-FIRST}", "opacity", '1', { fromValue: '0.10000000149011612'}], position: 9272, duration: 500, easing: "easeInOutQuad" },
                { id: "eid637", tween: [ "style", "${_BELIEVED-FIRST}", "opacity", '0', { fromValue: '1'}], position: 10424, duration: 283 },
                { id: "eid754", tween: [ "transform", "${_step2}", "scaleX", '1', { fromValue: '0.13574'}], position: 10424, duration: 470 },
                { id: "eid1039", tween: [ "style", "${_READY-BLACK}", "-webkit-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 16549, duration: 0 },
                { id: "eid1642", tween: [ "style", "${_READY-BLACK}", "-moz-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 16549, duration: 0 },
                { id: "eid1643", tween: [ "style", "${_READY-BLACK}", "-ms-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 16549, duration: 0 },
                { id: "eid1644", tween: [ "style", "${_READY-BLACK}", "msTransformOrigin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 16549, duration: 0 },
                { id: "eid1645", tween: [ "style", "${_READY-BLACK}", "-o-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 16549, duration: 0 },
                { id: "eid815", tween: [ "style", "${_FACE-TO-INTERFACE}", "left", '3px', { fromValue: '3px'}], position: 12822, duration: 0 },
                { id: "eid816", tween: [ "style", "${_FACE-TO-INTERFACE}", "left", '3px', { fromValue: '3px'}], position: 13174, duration: 0 },
                { id: "eid926", tween: [ "style", "${_BOOM}", "opacity", '1', { fromValue: '0.000000'}], position: 14993, duration: 100, easing: "easeInQuad" },
                { id: "eid943", tween: [ "style", "${_BOOM}", "opacity", '0', { fromValue: '1'}], position: 16049, duration: 250 },
                { id: "eid1042", tween: [ "transform", "${_READY-BLACK}", "skewX", '0deg', { fromValue: '0deg'}], position: 16549, duration: 0 },
                { id: "eid1027", tween: [ "style", "${_BOOM-BOX}", "top", '4.46%', { fromValue: '4.46%'}], position: 16549, duration: 0 },
                { id: "eid179", tween: [ "style", "${_step1}", "left", '297px', { fromValue: '297px'}], position: 5875, duration: 0 }            ]
        }
    }
},
"step1": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['197px', '44px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['neusasemibold, Helvetica, Arial sans-serif, Georgia, Cambria, \"Times New Roman\", Times, serif', 42, 'rgba(102,0,255,1.00)', 'bold', 'none', 'normal'],
                    align: 'left',
                    id: 'TO-MAKE-YOUR',
                    text: 'TO MAKE YOUR',
                    clip: ['rect(0px 246px 55px 0px)'],
                    type: 'text'
                },
                {
                    rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['neusasemibold, Helvetica, \'Arial sans-serif\', Georgia, Cambria, \"Times New Roman\", Times, serif', 42, 'rgba(102,0,255,1.00)', 'bold', 'none', 'normal'],
                    align: 'left',
                    id: 'WE-ARE',
                    text: 'WE ARE',
                    clip: ['rect(0px 126px 55px 0px)'],
                    type: 'text'
                },
                {
                    rect: ['141px', '0px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['neusasemibold, Helvetica, \'Arial sans-serif\', Georgia, Cambria, \"Times New Roman\", Times, serif', 42, 'rgba(249,249,249,1)', 'bold', 'none', 'normal'],
                    align: 'left',
                    id: 'VS',
                    text: 'VS.',
                    clip: ['rect(0px 54px 55px 0px)'],
                    type: 'text'
                },
                {
                    rect: ['209px', '0px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['neusasemibold, Helvetica, \'Arial sans-serif\', Georgia, Cambria, \"Times New Roman\", Times, serif', 42, 'rgba(102,0,255,1.00)', 'bold', 'none', 'normal'],
                    align: 'left',
                    id: 'AND-WE',
                    text: 'AND WE',
                    clip: ['rect(0px 131px 55px 0px)'],
                    type: 'text'
                },
                {
                    rect: ['354px', '0px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['neusasemibold, Helvetica, Arial sans-serif, Georgia, Cambria, Times New Roman, Times, serif', 42, 'rgba(102,0,255,1.00)', 'bold', 'none', 'normal'],
                    align: 'left',
                    id: 'BUILD',
                    text: 'BUILD',
                    clip: ['rect(0px 90px 55px 0px)'],
                    type: 'text'
                },
                {
                    rect: ['458px', '0px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['neusasemibold, Helvetica, \'Arial sans-serif\', Georgia, Cambria, \"Times New Roman\", Times, serif', 42, 'rgba(102,0,255,1.00)', 'bold', 'none', 'normal'],
                    align: 'left',
                    id: 'BRAND',
                    text: 'BRAND',
                    clip: ['rect(0px 107px 55px 0px)'],
                    type: 'text'
                },
                {
                    rect: ['565px', '0px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['neusasemibold, Helvetica, Arial sans-serif, Georgia, Cambria, \"Times New Roman\", Times, serif', 42, 'rgba(102,0,255,1.00)', 'bold', 'none', 'normal'],
                    align: 'left',
                    id: 'S',
                    text: 'S.',
                    clip: ['rect(0px 31px 55px 0px)'],
                    type: 'text'
                },
                {
                    rect: ['354px', '-42px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['neusasemibold, Helvetica, Arial sans-serif, Georgia, Cambria, Times New Roman, Times, serif', 42, 'rgba(102,0,255,1.00)', 'bold', 'none', 'normal'],
                    align: 'left',
                    id: 'LISTE-CLOSELY',
                    text: 'LISTEN CLOSELY',
                    clip: ['rect(0px 258px 55px 0px)'],
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_WE-ARE}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "clip", [0,126,55,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["color", "color", 'rgba(102,0,255,1)'],
                ["style", "font-family", 'neusasemibold, Helvetica, \'Arial sans-serif\', Georgia, Cambria, \'Times New Roman\', Times, serif'],
                ["style", "left", '0px'],
                ["style", "font-size", '42px']
            ],
            "${_TO-MAKE-YOUR}": [
                ["style", "top", '44px'],
                ["style", "opacity", '0'],
                ["style", "clip", [0,246,0,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["color", "color", 'rgba(102,0,255,1)'],
                ["style", "font-family", 'neusasemibold, Helvetica, Arial sans-serif, Georgia, Cambria, "Times New Roman", Times, serif'],
                ["style", "left", '201px'],
                ["style", "font-size", '42px']
            ],
            "${_BUILD}": [
                ["style", "top", '0px'],
                ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "clip", [0,90,45,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "opacity", '0'],
                ["color", "color", 'rgba(102,0,255,1)'],
                ["style", "font-family", 'neusasemibold, Helvetica, \'Arial sans-serif\', Georgia, Cambria, \'Times New Roman\', Times, serif'],
                ["style", "left", '354px'],
                ["style", "font-size", '42px']
            ],
            "${_BRAND}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "clip", [0,107,55,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["color", "color", 'rgba(102,0,255,1.00)'],
                ["style", "font-family", 'neusasemibold, Helvetica, \'Arial sans-serif\', Georgia, Cambria, "Times New Roman", Times, serif'],
                ["style", "left", '458px'],
                ["style", "font-size", '42px']
            ],
            "${_VS}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "clip", [0,54,55,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "font-family", 'neusasemibold, Helvetica, \'Arial sans-serif\', Georgia, Cambria, \'Times New Roman\', Times, serif'],
                ["style", "left", '141px'],
                ["style", "font-size", '42px']
            ],
            "${symbolSelector}": [
                ["style", "height", '99px'],
                ["style", "width", '612px']
            ],
            "${_AND-WE}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "clip", [0,131,55,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["color", "color", 'rgba(102,0,255,1)'],
                ["style", "font-family", 'neusasemibold, Helvetica, \'Arial sans-serif\', Georgia, Cambria, \'Times New Roman\', Times, serif'],
                ["style", "left", '209px'],
                ["style", "font-size", '42px']
            ],
            "${_S}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "clip", [0,31,55,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["color", "color", 'rgba(102,0,255,1.00)'],
                ["style", "font-family", 'neusasemibold, Helvetica, Arial sans-serif, Georgia, Cambria, "Times New Roman", Times, serif'],
                ["style", "left", '565px'],
                ["style", "font-size", '42px']
            ],
            "${_LISTE-CLOSELY}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "clip", [0,258,0,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["color", "color", 'rgba(102,0,255,1)'],
                ["style", "font-family", 'neusasemibold, Helvetica, \'Arial sans-serif\', Georgia, Cambria, \'Times New Roman\', Times, serif'],
                ["style", "left", '354px'],
                ["style", "font-size", '42px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 4250,
            autoPlay: true,
            timeline: [
                { id: "eid1601", tween: [ "style", "${_TO-MAKE-YOUR}", "left", '201px', { fromValue: '201px'}], position: 4250, duration: 0 },
                { id: "eid69", tween: [ "style", "${_S}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 1000 },
                { id: "eid132", tween: [ "style", "${_S}", "opacity", '0', { fromValue: '1'}], position: 4000, duration: 250 },
                { id: "eid20", tween: [ "style", "${_AND-WE}", "clip", [0,131,55,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,131,55,0]}], position: 1000, duration: 0 },
                { id: "eid18", tween: [ "style", "${_BRAND}", "clip", [0,107,55,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,107,55,0]}], position: 1000, duration: 0 },
                { id: "eid92", tween: [ "style", "${_BRAND}", "left", '458px', { fromValue: '458px'}], position: 2750, duration: 0 },
                { id: "eid22", tween: [ "style", "${_WE-ARE}", "clip", [0,126,55,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,126,55,0]}], position: 1000, duration: 0 },
                { id: "eid17", tween: [ "style", "${_S}", "clip", [0,31,55,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,31,55,0]}], position: 1000, duration: 0 },
                { id: "eid71", tween: [ "style", "${_AND-WE}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 1000 },
                { id: "eid16", tween: [ "style", "${_LISTE-CLOSELY}", "clip", [0,258,0,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,258,0,0]}], position: 1000, duration: 0 },
                { id: "eid107", tween: [ "style", "${_LISTE-CLOSELY}", "clip", [0,258,55,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,258,0,0]}], position: 2750, duration: 250 },
                { id: "eid79", tween: [ "style", "${_WE-ARE}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 1000 },
                { id: "eid96", tween: [ "style", "${_S}", "top", '44px', { fromValue: '0px'}], position: 2750, duration: 250 },
                { id: "eid131", tween: [ "style", "${_S}", "top", '88px', { fromValue: '44px'}], position: 4000, duration: 250 },
                { id: "eid67", tween: [ "style", "${_VS}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 1000 },
                { id: "eid75", tween: [ "style", "${_BRAND}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 1000 },
                { id: "eid85", tween: [ "style", "${_BRAND}", "opacity", '1', { fromValue: '1'}], position: 2750, duration: 0 },
                { id: "eid97", tween: [ "style", "${_BRAND}", "top", '44px', { fromValue: '0px'}], position: 2750, duration: 250 },
                { id: "eid81", tween: [ "style", "${_BUILD}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 1000 },
                { id: "eid21", tween: [ "style", "${_VS}", "clip", [0,54,55,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,54,55,0]}], position: 1000, duration: 0 },
                { id: "eid73", tween: [ "style", "${_LISTE-CLOSELY}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 1000 },
                { id: "eid120", tween: [ "style", "${_TO-MAKE-YOUR}", "clip", [0,246,55,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,246,0,0]}], position: 4000, duration: 250 },
                { id: "eid150", tween: [ "style", "${_BUILD}", "clip", [0,90,0,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,90,45,0]}], position: 2750, duration: 250 },
                { id: "eid151", tween: [ "style", "${_BUILD}", "left", '354px', { fromValue: '354px'}], position: 2750, duration: 0 },
                { id: "eid161", tween: [ "style", "${_BUILD}", "-webkit-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 2750, duration: 0 },
                { id: "eid1646", tween: [ "style", "${_BUILD}", "-moz-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 2750, duration: 0 },
                { id: "eid1647", tween: [ "style", "${_BUILD}", "-ms-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 2750, duration: 0 },
                { id: "eid1648", tween: [ "style", "${_BUILD}", "msTransformOrigin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 2750, duration: 0 },
                { id: "eid1649", tween: [ "style", "${_BUILD}", "-o-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 2750, duration: 0 },
                { id: "eid156", tween: [ "style", "${_BUILD}", "top", '45px', { fromValue: '0px'}], position: 2750, duration: 250 },
                { id: "eid77", tween: [ "style", "${_TO-MAKE-YOUR}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 1000 },
                { id: "eid82", tween: [ "style", "${_TO-MAKE-YOUR}", "opacity", '1', { fromValue: '1'}], position: 4000, duration: 0 }            ]
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
})(jQuery, AdobeEdge, "EDGE-6766476");