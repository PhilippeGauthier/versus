/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};    fonts['neusa-semi-bold, Georgia, Cambria, "Times New Roman", Times, serif']='';

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

            {
                id: 'step-1',
                type: 'rect',
                rect: ['0', '-13','auto','auto','auto', 'auto'],
                clip: ['rect(0px 1190px 500px 0px)']
            },
            {
                id: 'LOUD',
                type: 'text',
                rect: ['466px', '142px','auto','auto','auto', 'auto'],
                clip: ['rect(-11px 323px 44px 0px)'],
                text: "LOUD.",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 60, "rgba(102,0,255,1.00)", "bold", "none", "normal"]
            },
            {
                id: 'HARD',
                type: 'text',
                rect: ['466px', '142px','auto','auto','auto', 'auto'],
                clip: ['rect(-11px 323px 44px 0px)'],
                text: "HEARD.",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 60, "rgba(102,0,255,1.00)", "bold", "none", "normal"]
            },
            {
                id: 'SEEN',
                type: 'text',
                rect: ['466px', '142px','auto','auto','auto', 'auto'],
                clip: ['rect(-11px 323px 44px 0px)'],
                text: "SEEN.",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 60, "rgba(102,0,255,1.00)", "bold", "none", "normal"]
            },
            {
                id: 'FELT',
                type: 'text',
                rect: ['466px', '142px','auto','auto','auto', 'auto'],
                clip: ['rect(-11px 323px 44px 0px)'],
                text: "FELT.",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 60, "rgba(102,0,255,1.00)", "bold", "none", "normal"]
            },
            {
                id: 'BELIEVED',
                type: 'text',
                rect: ['466px', '142px','auto','auto','auto', 'auto'],
                clip: ['rect(-11px 323px 44px 0px)'], 
                text: "BELIEVED.",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 60, "rgba(102,0,255,1.00)", "bold", "none", "normal"]
            }],
            symbolInstances: [
            {
                id: 'step-1',
                symbolName: 'step-1'
            }
            ]
        },
    states: {
        "Base State": {
            "${_LOUD}": [
                ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["subproperty", "filter.contrast", '1'],
                ["color", "color", 'rgba(102,0,255,1)'],
                ["style", "opacity", '0.5'],
                ["style", "left", '501px'],
                ["style", "font-size", '60px'],
                ["style", "top", '192px'],
                ["transform", "skewY", '0deg'],
                ["transform", "scaleY", '1'],
                ["transform", "skewX", '0deg'],
                ["subproperty", "filter.saturate", '1'],
                ["subproperty", "filter.hue-rotate", '0deg'],
                ["style", "clip", [0,187,6,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["transform", "scaleX", '1']
            ],
            "${_HARD}": [
                ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["subproperty", "filter.contrast", '1'],
                ["color", "color", 'rgba(102,0,255,1)'],
                ["style", "opacity", '0.5'],
                ["style", "left", '1190px'],
                ["style", "font-size", '60px'],
                ["style", "top", '208px'],
                ["transform", "scaleX", '1'],
                ["transform", "skewY", '0deg'],
                ["transform", "skewX", '0deg'],
                ["subproperty", "filter.saturate", '1'],
                ["subproperty", "filter.hue-rotate", '0deg'],
                ["style", "clip", [0,234,57,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["transform", "scaleY", '1']
            ],
            "${_BELIEVED}": [
                ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["subproperty", "filter.contrast", '1'],
                ["color", "color", 'rgba(102,0,255,1)'],
                ["style", "opacity", '0.5'],
                ["style", "left", '1190px'],
                ["style", "font-size", '60px'],
                ["style", "top", '208px'],
                ["transform", "skewY", '0deg'],
                ["transform", "scaleY", '1'],
                ["transform", "skewX", '0deg'],
                ["subproperty", "filter.saturate", '1'],
                ["subproperty", "filter.hue-rotate", '0deg'],
                ["style", "clip", [0,315,57,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["transform", "scaleX", '1']
            ],
            "${_SEEN}": [
                ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["subproperty", "filter.contrast", '1'],
                ["color", "color", 'rgba(102,0,255,1)'],
                ["style", "opacity", '0.5'],
                ["style", "left", '1190px'],
                ["style", "font-size", '60px'],
                ["style", "top", '208px'],
                ["transform", "scaleY", '1'],
                ["transform", "skewY", '0deg'],
                ["transform", "skewX", '0deg'],
                ["subproperty", "filter.saturate", '1'],
                ["subproperty", "filter.hue-rotate", '0deg'],
                ["style", "clip", [0,180,57,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["transform", "scaleX", '1']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(0,0,0,0.00)'],
                ["style", "width", '1190px'],
                ["style", "height", '500px'],
                ["style", "overflow", 'hidden']
            ],
            "${_FELT}": [
                ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["subproperty", "filter.contrast", '1'],
                ["color", "color", 'rgba(102,0,255,1)'],
                ["style", "opacity", '0.5'],
                ["style", "left", '1190px'],
                ["style", "font-size", '60px'],
                ["style", "top", '208px'],
                ["transform", "scaleX", '1'],
                ["transform", "scaleY", '1'],
                ["transform", "skewX", '0deg'],
                ["subproperty", "filter.saturate", '1'],
                ["subproperty", "filter.hue-rotate", '0deg'],
                ["style", "clip", [0,166,57,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["transform", "skewY", '0deg']
            ],
            "${_step-1}": [
                ["style", "top", '0px'],
                ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "clip", [219,1190,500,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_background_1600x1600}": [
                ["style", "top", '0px'],
                ["style", "height", '500px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "width", '1190px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 8000,
            autoPlay: true,
            timeline: [
                { id: "eid270", tween: [ "style", "${_HARD}", "top", '208px', { fromValue: '208px'}], position: 5000, duration: 0 },
                { id: "eid303", tween: [ "style", "${_FELT}", "left", '511px', { fromValue: '1190px'}], position: 6750, duration: 250 },
                { id: "eid319", tween: [ "style", "${_FELT}", "left", '-174px', { fromValue: '511px'}], position: 7750, duration: 250 },
                { id: "eid245", tween: [ "style", "${_LOUD}", "opacity", '1', { fromValue: '0.5'}], position: 3750, duration: 250 },
                { id: "eid281", tween: [ "style", "${_LOUD}", "opacity", '0', { fromValue: '1'}], position: 4750, duration: 250 },
                { id: "eid320", tween: [ "style", "${_BELIEVED}", "clip", [0,315,57,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,315,57,0]}], position: 8000, duration: 0 },
                { id: "eid312", tween: [ "style", "${_BELIEVED}", "top", '208px', { fromValue: '208px'}], position: 8000, duration: 0 },
                { id: "eid300", tween: [ "style", "${_SEEN}", "clip", [0,180,57,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,180,57,0]}], position: 6000, duration: 0 },
                { id: "eid273", tween: [ "style", "${_HARD}", "opacity", '1', { fromValue: '0.5'}], position: 4750, duration: 250 },
                { id: "eid299", tween: [ "style", "${_HARD}", "opacity", '0', { fromValue: '1'}], position: 5750, duration: 250 },
                { id: "eid315", tween: [ "style", "${_BELIEVED}", "left", '436px', { fromValue: '1190px'}], position: 7750, duration: 250 },
                { id: "eid285", tween: [ "style", "${_SEEN}", "left", '505px', { fromValue: '1190px'}], position: 5750, duration: 250 },
                { id: "eid309", tween: [ "style", "${_SEEN}", "left", '-181px', { fromValue: '505px'}], position: 6750, duration: 250 },
                { id: "eid302", tween: [ "style", "${_FELT}", "opacity", '1', { fromValue: '0.5'}], position: 6750, duration: 250 },
                { id: "eid326", tween: [ "style", "${_FELT}", "opacity", '0', { fromValue: '1'}], position: 7750, duration: 250 },
                { id: "eid251", tween: [ "style", "${_LOUD}", "clip", [0,187,59,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,187,6,0]}], position: 3750, duration: 250 },
                { id: "eid237", tween: [ "style", "${_step-1}", "clip", [314,1190,500,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [219,1190,500,0]}], position: 3750, duration: 250 },
                { id: "eid313", tween: [ "style", "${_BELIEVED}", "opacity", '1', { fromValue: '0.5'}], position: 7750, duration: 250 },
                { id: "eid244", tween: [ "style", "${_LOUD}", "top", '208px', { fromValue: '192px'}], position: 3750, duration: 250 },
                { id: "eid278", tween: [ "style", "${_LOUD}", "top", '208px', { fromValue: '208px'}], position: 4750, duration: 0 },
                { id: "eid282", tween: [ "style", "${_LOUD}", "top", '208px', { fromValue: '208px'}], position: 5000, duration: 0 },
                { id: "eid284", tween: [ "style", "${_SEEN}", "opacity", '1', { fromValue: '0.5'}], position: 5750, duration: 250 },
                { id: "eid310", tween: [ "style", "${_SEEN}", "opacity", '0', { fromValue: '1'}], position: 6750, duration: 250 },
                { id: "eid311", tween: [ "style", "${_FELT}", "clip", [0,166,57,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,166,57,0]}], position: 7000, duration: 0 },
                { id: "eid280", tween: [ "style", "${_LOUD}", "left", '-189px', { fromValue: '501px'}], position: 4750, duration: 250 },
                { id: "eid272", tween: [ "style", "${_HARD}", "left", '480px', { fromValue: '1190px'}], position: 4750, duration: 250 },
                { id: "eid298", tween: [ "style", "${_HARD}", "left", '-232px', { fromValue: '480px'}], position: 5750, duration: 250 },
                { id: "eid301", tween: [ "style", "${_FELT}", "top", '208px', { fromValue: '208px'}], position: 7000, duration: 0 },
                { id: "eid317", tween: [ "style", "${_FELT}", "top", '208px', { fromValue: '208px'}], position: 7750, duration: 0 },
                { id: "eid283", tween: [ "style", "${_SEEN}", "top", '208px', { fromValue: '208px'}], position: 6000, duration: 0 },
                { id: "eid306", tween: [ "style", "${_SEEN}", "top", '208px', { fromValue: '208px'}], position: 6500, duration: 0 }            ]
        }
    }
},
"we-are-vs-and-we": {
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
                    rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 42, 'rgba(102,0,255,1.00)', 'bold', 'none', 'normal'],
                    id: 'WE-ARE',
                    text: 'WE ARE',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['178px', '0px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 42, 'rgba(249,249,249,1)', 'bold', 'none', 'normal'],
                    id: 'VS',
                    text: 'VS.',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['260px', '0px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 42, 'rgba(102,0,255,1.00)', 'bold', 'none', 'normal'],
                    id: 'AND-WE',
                    text: 'AND WE',
                    align: 'left',
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '48px'],
                ["style", "width", '430px']
            ],
            "${_VS}": [
                ["style", "left", '178px'],
                ["style", "top", '0px']
            ],
            "${_AND-WE}": [
                ["style", "top", '0px'],
                ["style", "left", '260px'],
                ["color", "color", 'rgba(102,0,255,1.00)']
            ],
            "${_WE-ARE}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["color", "color", 'rgba(102,0,255,1.00)']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"mask-build-listen": {
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
                    rect: ['0px', '0px', '363px', '32px', 'auto', 'auto'],
                    id: 'mask-rectangle1',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,1)']
                },
                {
                    rect: ['0px', '-7px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 42, 'rgba(102,0,255,1.00)', 'bold', 'none', 'normal'],
                    id: 'BUILD',
                    text: 'BUILD',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['0px', '-58px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 42, 'rgba(102,0,255,1.00)', 'bold', 'none', 'normal'],
                    id: 'LISTE-CLOSELY',
                    text: 'LISTEN CLOSELY',
                    align: 'left',
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_LISTE-CLOSELY}": [
                ["style", "top", '-58px'],
                ["style", "opacity", '0.5'],
                ["style", "left", '0px'],
                ["color", "color", 'rgba(102,0,255,1)']
            ],
            "${symbolSelector}": [
                ["style", "height", '32px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '363px']
            ],
            "${_BUILD}": [
                ["style", "top", '-7px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["color", "color", 'rgba(102,0,255,1)']
            ],
            "${_mask-rectangle1}": [
                ["style", "top", '0px'],
                ["style", "height", '32px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "width", '363px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2250,
            autoPlay: true,
            timeline: [
                { id: "eid137", tween: [ "style", "${_LISTE-CLOSELY}", "opacity", '1', { fromValue: '0.5'}], position: 2000, duration: 250 },
                { id: "eid134", tween: [ "style", "${_LISTE-CLOSELY}", "top", '-7px', { fromValue: '-58px'}], position: 2000, duration: 250 },
                { id: "eid129", tween: [ "style", "${_BUILD}", "left", '0px', { fromValue: '0px'}], position: 2000, duration: 0 },
                { id: "eid130", tween: [ "style", "${_LISTE-CLOSELY}", "left", '0px', { fromValue: '0px'}], position: 2000, duration: 0 },
                { id: "eid133", tween: [ "style", "${_BUILD}", "top", '44px', { fromValue: '-7px'}], position: 2000, duration: 250 },
                { id: "eid138", tween: [ "style", "${_BUILD}", "opacity", '0.5', { fromValue: '1'}], position: 2000, duration: 250 }            ]
        }
    }
},
"mask-to-make-your": {
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
                    rect: ['0px', '0px', '329px', '32px', 'auto', 'auto'],
                    id: 'mask-rectangle2',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,1)']
                },
                {
                    rect: ['1px', '-48px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 42, 'rgba(102,0,255,1.00)', 'bold', 'none', 'normal'],
                    id: 'TO_MAKE_YOUR',
                    text: 'TO MAKE YOUR',
                    align: 'left',
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '34px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '329px']
            ],
            "${_TO_MAKE_YOUR}": [
                ["style", "top", '-48px'],
                ["style", "opacity", '0.5'],
                ["style", "left", '1px'],
                ["color", "color", 'rgba(102,0,255,1)']
            ],
            "${_mask-rectangle2}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "width", '329px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2750,
            autoPlay: true,
            timeline: [
                { id: "eid126", tween: [ "style", "${_TO_MAKE_YOUR}", "opacity", '1', { fromValue: '0.5'}], position: 2500, duration: 250 },
                { id: "eid124", tween: [ "style", "${_TO_MAKE_YOUR}", "top", '-6px', { fromValue: '-48px'}], position: 2500, duration: 250 }            ]
        }
    }
},
"step-1": {
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
                    id: 'we-are-vs-and-we',
                    type: 'rect',
                    rect: ['209px', '226px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    rect: ['791px', '225px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 42, 'rgba(102,0,255,1.00)', 'bold', 'none', 'normal'],
                    align: 'left',
                    id: 'BRAND',
                    opacity: 1,
                    text: 'BRAND',
                    type: 'text'
                },
                {
                    rect: ['941px', '225px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 42, 'rgba(102,0,255,1.00)', 'bold', 'none', 'normal'],
                    align: 'left',
                    id: 'S',
                    opacity: 1,
                    text: 'S.',
                    type: 'text'
                },
                {
                    id: 'mask-build-listen',
                    type: 'rect',
                    rect: ['652px', '232px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'mask-to-make-your',
                    type: 'rect',
                    rect: ['448px', '280px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'mask-to-make-your',
                symbolName: 'mask-to-make-your',
                autoPlay: {

               }
            },
            {
                id: 'mask-build-listen',
                symbolName: 'mask-build-listen',
                autoPlay: {

               }
            },
            {
                id: 'we-are-vs-and-we',
                symbolName: 'we-are-vs-and-we',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_mask-build-listen}": [
                ["style", "top", '232px'],
                ["style", "opacity", '0'],
                ["style", "left", '652px']
            ],
            "${_mask-to-make-your}": [
                ["style", "top", '280px'],
                ["style", "opacity", '0'],
                ["style", "left", '450px']
            ],
            "${symbolSelector}": [
                ["style", "height", '500px'],
                ["style", "width", '1190px']
            ],
            "${_we-are-vs-and-we}": [
                ["style", "top", '225px'],
                ["style", "opacity", '0'],
                ["style", "left", '209px']
            ],
            "${_S}": [
                ["style", "top", '225px'],
                ["style", "opacity", '0'],
                ["style", "left", '941px'],
                ["color", "color", 'rgba(102,0,255,1.00)']
            ],
            "${_BRAND}": [
                ["style", "top", '225px'],
                ["style", "opacity", '0'],
                ["style", "left", '791px'],
                ["color", "color", 'rgba(102,0,255,1.00)']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3750,
            autoPlay: true,
            timeline: [
                { id: "eid73", tween: [ "style", "${_S}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1000 },
                { id: "eid81", tween: [ "style", "${_S}", "opacity", '1', { fromValue: '1'}], position: 2000, duration: 0 },
                { id: "eid144", tween: [ "style", "${_S}", "opacity", '0', { fromValue: '1'}], position: 2500, duration: 250 },
                { id: "eid150", tween: [ "style", "${_S}", "opacity", '0', { fromValue: '0'}], position: 3750, duration: 0 },
                { id: "eid119", tween: [ "style", "${_S}", "top", '274px', { fromValue: '225px'}], position: 2000, duration: 250 },
                { id: "eid149", tween: [ "style", "${_S}", "top", '274px', { fromValue: '274px'}], position: 3750, duration: 0 },
                { id: "eid87", tween: [ "style", "${_BRAND}", "left", '791px', { fromValue: '791px'}], position: 2000, duration: 0 },
                { id: "eid151", tween: [ "style", "${_BRAND}", "left", '791px', { fromValue: '791px'}], position: 3750, duration: 0 },
                { id: "eid120", tween: [ "style", "${_BRAND}", "top", '274px', { fromValue: '225px'}], position: 2000, duration: 250 },
                { id: "eid152", tween: [ "style", "${_BRAND}", "top", '274px', { fromValue: '274px'}], position: 3750, duration: 0 },
                { id: "eid75", tween: [ "style", "${_BRAND}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1000 },
                { id: "eid82", tween: [ "style", "${_BRAND}", "opacity", '1', { fromValue: '1'}], position: 2000, duration: 0 },
                { id: "eid153", tween: [ "style", "${_BRAND}", "opacity", '1', { fromValue: '1'}], position: 3750, duration: 0 },
                { id: "eid71", tween: [ "style", "${_we-are-vs-and-we}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1000 },
                { id: "eid78", tween: [ "style", "${_we-are-vs-and-we}", "opacity", '1', { fromValue: '1'}], position: 2000, duration: 0 },
                { id: "eid154", tween: [ "style", "${_we-are-vs-and-we}", "opacity", '1', { fromValue: '1'}], position: 3750, duration: 0 },
                { id: "eid88", tween: [ "style", "${_S}", "left", '941px', { fromValue: '941px'}], position: 2000, duration: 0 },
                { id: "eid148", tween: [ "style", "${_S}", "left", '941px', { fromValue: '941px'}], position: 3750, duration: 0 },
                { id: "eid69", tween: [ "style", "${_mask-build-listen}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1000 },
                { id: "eid80", tween: [ "style", "${_mask-build-listen}", "opacity", '1', { fromValue: '1'}], position: 2000, duration: 0 },
                { id: "eid147", tween: [ "style", "${_mask-build-listen}", "opacity", '1', { fromValue: '1'}], position: 3750, duration: 0 },
                { id: "eid77", tween: [ "style", "${_mask-to-make-your}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1000 },
                { id: "eid79", tween: [ "style", "${_mask-to-make-your}", "opacity", '1', { fromValue: '1'}], position: 2000, duration: 0 },
                { id: "eid146", tween: [ "style", "${_mask-to-make-your}", "opacity", '1', { fromValue: '1'}], position: 3750, duration: 0 }            ]
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
