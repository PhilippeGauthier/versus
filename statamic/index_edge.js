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
                id: 'asddsa',
                type: 'rect',
                rect: ['-76', '-16','auto','auto','auto', 'auto']
            },
            {
                id: 'play',
                type: 'group',
                rect: ['316', '360','60','31','auto', 'auto'],
                opacity: 0,
                c: [
                {
                    id: 'RoundRect',
                    type: 'rect',
                    rect: ['0px', '0px','56px','27px','auto', 'auto'],
                    borderRadius: ["4px 4px", "4px 4px", "4px 4px", "4px 4px"],
                    opacity: 1,
                    fill: ["rgba(54,177,249,1.00)"],
                    stroke: [2,"rgba(54,177,249,1.00)","solid"]
                },
                {
                    id: 'Text',
                    type: 'text',
                    rect: ['14px', '9px','auto','auto','auto', 'auto'],
                    opacity: 1,
                    text: "PLAY",
                    font: ['Arial, Helvetica, sans-serif', 12, "rgba(241,241,241,1.00)", "900", "none", ""]
                }]
            },
            {
                id: 'Replay',
                type: 'group',
                rect: ['316px', '360','60','31','auto', 'auto'],
                opacity: 0,
                c: [
                {
                    id: 'Round',
                    type: 'rect',
                    rect: ['0%', '0%','93.3%','87.1%','auto', 'auto'],
                    borderRadius: ["4px 4px", "4px 4px", "4px 4px", "4px 4px"],
                    fill: ["rgba(54,177,249,1.00)"],
                    stroke: [2,"rgba(54,177,249,1.00)","solid"]
                },
                {
                    id: 'TextCopy',
                    type: 'text',
                    rect: ['8.3%', '29%','81.7%','45.2%','auto', 'auto'],
                    text: "REPLAY",
                    font: ['Arial, Helvetica, sans-serif', 12, "rgba(241,241,241,1.00)", "900", "none", ""]
                }]
            }],
            symbolInstances: [
            {
                id: 'asddsa',
                symbolName: 'asddsa',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_Replay}": [
                ["style", "opacity", '0']
            ],
            "${_asddsa}": [
                ["style", "left", '-78px']
            ],
            "${_Text}": [
                ["style", "top", '9px'],
                ["style", "letter-spacing", '0px'],
                ["style", "opacity", '1'],
                ["color", "color", 'rgba(241,241,241,1.00)'],
                ["style", "font-weight", '900'],
                ["style", "left", '14px'],
                ["style", "font-size", '12px']
            ],
            "${_Round}": [
                ["color", "background-color", 'rgba(54,177,249,1.00)'],
                ["style", "border-top-left-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-style", 'solid'],
                ["style", "left", '0%'],
                ["style", "width", '93.34%'],
                ["style", "top", '0%'],
                ["style", "border-bottom-left-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '87.1%'],
                ["color", "border-color", 'rgba(54,177,249,1.00)'],
                ["style", "border-top-right-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-width", '2px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '700px'],
                ["style", "height", '726px'],
                ["style", "overflow", 'hidden']
            ],
            "${_play}": [
                ["style", "opacity", '0']
            ],
            "${_TextCopy}": [
                ["style", "top", '29.03%'],
                ["style", "letter-spacing", '0px'],
                ["style", "height", '45.16%'],
                ["style", "width", '81.67%'],
                ["color", "color", 'rgba(241,241,241,1.00)'],
                ["style", "font-weight", '900'],
                ["style", "left", '8.33%'],
                ["style", "font-size", '12px']
            ],
            "${_RoundRect}": [
                ["color", "background-color", 'rgba(54,177,249,1.00)'],
                ["style", "border-top-left-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "width", '56px'],
                ["style", "top", '0px'],
                ["style", "border-bottom-left-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-style", 'solid'],
                ["style", "height", '27px'],
                ["color", "border-color", 'rgba(54,177,249,1.00)'],
                ["style", "border-width", '2px'],
                ["style", "border-top-right-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ]
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 46000,
            autoPlay: true,
            labels: {
                "Start": 250
            },
            timeline: [
                { id: "eid7152", tween: [ "style", "${_RoundRect}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 250 },
                { id: "eid7311", tween: [ "style", "${_play}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
                { id: "eid7312", tween: [ "style", "${_play}", "opacity", '0', { fromValue: '0'}], position: 250, duration: 0 },
                { id: "eid7153", tween: [ "style", "${_Text}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 250 },
                { id: "eid7066", tween: [ "style", "${_asddsa}", "left", '-78px', { fromValue: '-78px'}], position: 46000, duration: 0 },
                { id: "eid7132", tween: [ "style", "${_Replay}", "opacity", '1', { fromValue: '0'}], position: 45500, duration: 500 }            ]
        }
    }
},
"cover-page": {
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
                    id: 'cover-img2',
                    type: 'image',
                    rect: ['0px', '0px', '400px', '533px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cover-img.png', '0px', '0px']
                },
                {
                    id: 'colver-logo2',
                    type: 'image',
                    rect: ['0px', '0px', '400px', '533px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/colver-logo.png', '0px', '0px']
                },
                {
                    id: 'cover-swipe3',
                    type: 'image',
                    rect: ['0px', '0px', '400px', '533px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cover-swipe.png', '0px', '0px']
                },
                {
                    id: 'cover-swipe-dot',
                    type: 'image',
                    rect: ['233px', '496px', '5px', '5px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cover-swipe-dot.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_cover-swipe3}": [
                ["style", "top", '0px'],
                ["style", "height", '533px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "width", '400px']
            ],
            "${_cover-swipe-dot}": [
                ["style", "top", '495px'],
                ["style", "height", '6px'],
                ["style", "opacity", '1'],
                ["style", "left", '233px'],
                ["style", "width", '6px']
            ],
            "${_colver-logo2}": [
                ["style", "top", '0px'],
                ["style", "height", '532px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "width", '400px']
            ],
            "${symbolSelector}": [
                ["style", "height", '533px'],
                ["style", "width", '400px']
            ],
            "${_cover-img2}": [
                ["style", "top", '0px'],
                ["style", "height", '533px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "width", '400px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 46000,
            autoPlay: true,
            labels: {
                "Start to fade": 3000
            },
            timeline: [
                { id: "eid112", tween: [ "style", "${_cover-swipe-dot}", "left", '198px', { fromValue: '233px'}], position: 2500, duration: 500, easing: "easeInCirc" },
                { id: "eid113", tween: [ "style", "${_cover-swipe-dot}", "left", '163px', { fromValue: '198px'}], position: 3000, duration: 500, easing: "easeOutCirc" },
                { id: "eid6687", tween: [ "style", "${_cover-swipe-dot}", "left", '233px', { fromValue: '163px'}], position: 40657, duration: 343, easing: "easeInOutCirc" },
                { id: "eid334", tween: [ "style", "${_cover-swipe-dot}", "opacity", '0', { fromValue: '1'}], position: 3000, duration: 750, easing: "easeInOutCirc" },
                { id: "eid6686", tween: [ "style", "${_cover-swipe-dot}", "opacity", '1', { fromValue: '0'}], position: 40657, duration: 343, easing: "easeInOutCirc" },
                { id: "eid496", tween: [ "style", "${_cover-swipe-dot}", "top", '495px', { fromValue: '495px'}], position: 2500, duration: 0, easing: "easeInOutCirc" },
                { id: "eid6684", tween: [ "style", "${_cover-swipe-dot}", "top", '495px', { fromValue: '495px'}], position: 40657, duration: 0, easing: "easeInOutCirc" },
                { id: "eid6678", tween: [ "style", "${_cover-swipe-dot}", "top", '495px', { fromValue: '495px'}], position: 41000, duration: 0, easing: "easeInOutCirc" },
                { id: "eid596", tween: [ "style", "${_cover-swipe-dot}", "width", '6px', { fromValue: '6px'}], position: 2500, duration: 0, easing: "easeInOutCirc" },
                { id: "eid335", tween: [ "style", "${_cover-swipe3}", "opacity", '0', { fromValue: '1'}], position: 3000, duration: 750, easing: "easeInOutCirc" },
                { id: "eid6681", tween: [ "style", "${_cover-swipe3}", "opacity", '1', { fromValue: '0.000000'}], position: 3750, duration: 37250, easing: "easeInOutCirc" },
                { id: "eid595", tween: [ "style", "${_cover-swipe-dot}", "height", '6px', { fromValue: '6px'}], position: 2500, duration: 0, easing: "easeInOutCirc" }            ]
        }
    }
},
"main-screen": {
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
                    id: 'top-slider',
                    type: 'group',
                    rect: ['200px', '0px', '400', '243', 'auto', 'auto'],
                    c: [
                    {
                        rect: ['400px', '0px', '400px', '243px', 'auto', 'auto'],
                        id: 'top-slider-img-23',
                        opacity: 1,
                        type: 'image',
                        fill: ['rgba(0,0,0,0)', 'images/top-slider-img-2.png', '0px', '0px']
                    },
                    {
                        id: 'new-img-p1',
                        type: 'image',
                        rect: ['0px', '20px', '400px', '247px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/new-img-p1.png', '0px', '0px']
                    },
                    {
                        rect: ['0px', '0px', '400px', '243px', 'auto', 'auto'],
                        id: 'top-slider-img-13',
                        opacity: 1,
                        type: 'image',
                        fill: ['rgba(0,0,0,0)', 'images/top-slider-img-1.png', '0px', '0px']
                    },
                    {
                        rect: ['301px', '191px', '99px', '34px', 'auto', 'auto'],
                        id: 'top-slider-tag-23',
                        opacity: 1,
                        type: 'image',
                        fill: ['rgba(0,0,0,0)', 'images/top-slider-tag-2.png', '0px', '0px']
                    },
                    {
                        rect: ['284px', '191px', '116px', '34px', 'auto', 'auto'],
                        id: 'top-slider-tag-13',
                        opacity: 1,
                        type: 'image',
                        fill: ['rgba(0,0,0,0)', 'images/top-slider-tag-1.png', '0px', '0px']
                    }]
                },
                {
                    id: 'row',
                    type: 'group',
                    rect: ['0px', '243px', '600', '176', 'auto', 'auto'],
                    c: [
                    {
                        id: 'row-1-img3',
                        type: 'group',
                        rect: ['400px', '0px', '200', '176', 'auto', 'auto'],
                        c: [
                        {
                            rect: ['0px', '0px', '763px', '673px', 'auto', 'auto'],
                            transform: [[0, 0], [], [], ['0.26221', '0.26221']],
                            id: 'row-1-img-22',
                            opacity: 1,
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/row-1-img-2.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'row-1-tag-22',
                            rect: ['66px', '109px', '175px', '64px', 'auto', 'auto'],
                            transform: [[0, 0], [], [], ['0.52889', '0.52889']],
                            fill: ['rgba(0,0,0,0)', 'images/row-1-tag-2.png', '0px', '0px']
                        }]
                    },
                    {
                        id: 'row-1-img2',
                        type: 'group',
                        rect: ['200px', '0px', '200', '176', 'auto', 'auto'],
                        c: [
                        {
                            rect: ['-563px', '0px', '763px', '673px', 'auto', 'auto'],
                            borderRadius: ['0px', '0px', '0px', '0px'],
                            transform: [[0, 0], [], [], ['0.26221', '0.26221']],
                            id: 'row-1-img-12',
                            opacity: 1,
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/row-1-img-1.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'row-1-tag-12',
                            rect: ['51px', '109px', '195px', '64px', 'auto', 'auto'],
                            transform: [[0, 0], [], [], ['0.52889', '0.52889']],
                            fill: ['rgba(0,0,0,0)', 'images/row-1-tag-1.png', '0px', '0px']
                        }]
                    },
                    {
                        id: 'row-1-img1',
                        type: 'group',
                        rect: ['0px', '0px', '200', '176', 'auto', 'auto'],
                        c: [
                        {
                            rect: ['0px', '0px', '763px', '670px', 'auto', 'auto'],
                            transform: [[0, 0], [], [], ['0.26221', '0.26221']],
                            id: 'row-1-img-32',
                            opacity: 1,
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/row-1-img-3.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'row-1-tag-32',
                            rect: ['106px', '109px', '123px', '64px', 'auto', 'auto'],
                            transform: [[0, 0], [], [], ['0.52889', '0.52889']],
                            fill: ['rgba(0,0,0,0)', 'images/row-1-tag-3.png', '0px', '0px']
                        }]
                    }]
                },
                {
                    rect: ['200px', '419px', '435', '128', 'auto', 'auto'],
                    id: 'bottom-row',
                    type: 'group',
                    transform: [[0, 0], [], [], ['0.91954', '0.91954']],
                    c: [
                    {
                        id: 'row-2-img3',
                        type: 'group',
                        rect: ['267', '0', '133', '118', 'auto', 'auto'],
                        c: [
                        {
                            rect: ['23px', '0px', '510px', '451px', 'auto', 'auto'],
                            transform: [[0, 0], [], [], ['0.28436', '0.28436']],
                            id: 'row-2-img-33',
                            opacity: 1,
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/row-2-img-3.png', '0px', '0px']
                        },
                        {
                            id: 'row-2-tag-32',
                            type: 'image',
                            rect: ['72px', '76px', '96px', '34px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/row-2-tag-3.png', '0px', '0px']
                        }]
                    },
                    {
                        id: 'row-2-img2',
                        type: 'group',
                        rect: ['133', '0', '133', '117', 'auto', 'auto'],
                        c: [
                        {
                            type: 'image',
                            id: 'row-2-img-24',
                            rect: ['12px', '0px', '100px', '88px', 'auto', 'auto'],
                            transform: [[0, 0], [], [], ['1.45022', '1.45022']],
                            fill: ['rgba(0,0,0,0)', 'images/row-2-img-2.png', '0px', '0px']
                        },
                        {
                            id: 'row-2-tag-22',
                            type: 'image',
                            rect: ['59px', '76px', '98px', '34px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/row-2-tag-2.png', '0px', '0px']
                        }]
                    },
                    {
                        id: 'row-2-img1',
                        type: 'group',
                        rect: ['0', '0', '133', '117', 'auto', 'auto'],
                        c: [
                        {
                            type: 'image',
                            id: 'row-2-img-13',
                            rect: ['45px', '0px', '100px', '88px', 'auto', 'auto'],
                            transform: [[0, 0], [], [], ['1.45022', '1.45022']],
                            fill: ['rgba(0,0,0,0)', 'images/row-2-img-1.png', '0px', '0px']
                        },
                        {
                            id: 'row-2-tag-12',
                            type: 'image',
                            rect: ['76px', '76px', '69px', '34px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/row-2-tag-1.png', '0px', '0px']
                        }]
                    }]
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_top-slider-img-13}": [
                ["style", "top", '0px'],
                ["style", "height", '243px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "width", '400px']
            ],
            "${_row-2-tag-22}": [
                ["style", "top", '76px'],
                ["style", "height", '34px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '59px'],
                ["style", "width", '98px']
            ],
            "${_row-1-tag-12}": [
                ["style", "top", '109px'],
                ["transform", "scaleY", '0.52889'],
                ["style", "height", '64px'],
                ["transform", "scaleX", '0.52889'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '51px'],
                ["style", "width", '195px']
            ],
            "${_row-1-img-12}": [
                ["style", "-webkit-transform-origin", [100,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [100,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [100,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [100,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [100,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleX", '0.26221'],
                ["style", "right", 'auto'],
                ["style", "left", '-563px'],
                ["style", "width", '763px'],
                ["style", "top", '0px'],
                ["transform", "scaleY", '0.26221'],
                ["style", "height", '673px'],
                ["style", "opacity", '0']
            ],
            "${_row-2-img1}": [
                ["style", "top", '0px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px']
            ],
            "${_top-slider}": [
                ["style", "left", '200px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '537px'],
                ["style", "width", '1000px']
            ],
            "${_row-2-tag-12}": [
                ["style", "top", '76px'],
                ["style", "height", '34px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '76px'],
                ["style", "width", '69px']
            ],
            "${_row-1-img-32}": [
                ["style", "-webkit-transform-origin", [0,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '0px'],
                ["transform", "scaleY", '0.26221'],
                ["transform", "scaleX", '0.26221'],
                ["style", "height", '670px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "width", '763px']
            ],
            "${_top-slider-img-23}": [
                ["style", "top", '0px'],
                ["transform", "scaleX", '1'],
                ["style", "height", '243px'],
                ["style", "opacity", '0'],
                ["style", "left", '400px'],
                ["style", "width", '400px']
            ],
            "${_row-2-img-24}": [
                ["style", "top", '0px'],
                ["style", "-webkit-transform-origin", [0,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleY", '1.45022'],
                ["style", "height", '88px'],
                ["transform", "scaleX", '1.45022'],
                ["style", "opacity", '0'],
                ["style", "left", '12px'],
                ["style", "width", '100px']
            ],
            "${_row-2-tag-32}": [
                ["style", "top", '76px'],
                ["style", "height", '34px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '72px'],
                ["style", "width", '96px']
            ],
            "${_row-2-img2}": [
                ["style", "top", '0px'],
                ["style", "opacity", '1'],
                ["style", "left", '133px']
            ],
            "${_top-slider-tag-23}": [
                ["style", "top", '191px'],
                ["transform", "scaleX", '1'],
                ["style", "height", '34px'],
                ["style", "opacity", '0'],
                ["style", "left", '301px'],
                ["style", "width", '99px']
            ],
            "${_new-img-p1}": [
                ["style", "top", '20px'],
                ["style", "height", '247px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "width", '400px']
            ],
            "${_row-2-img3}": [
                ["style", "top", '0px'],
                ["style", "opacity", '1'],
                ["style", "left", '267px']
            ],
            "${_row-1-img3}": [
                ["style", "top", '0px'],
                ["style", "opacity", '1'],
                ["style", "left", '400px'],
                ["transform", "scaleX", '1']
            ],
            "${_row}": [
                ["style", "top", '243px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px']
            ],
            "${_row-1-img2}": [
                ["style", "top", '0px'],
                ["style", "opacity", '1'],
                ["style", "left", '200px'],
                ["transform", "scaleX", '1']
            ],
            "${_bottom-row}": [
                ["style", "-webkit-transform-origin", [0,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleY", '0.91954'],
                ["transform", "scaleX", '0.91954'],
                ["style", "opacity", '1'],
                ["style", "left", '200px'],
                ["style", "top", '419px']
            ],
            "${_row-2-img-13}": [
                ["style", "-webkit-transform-origin", [100,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [100,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [100,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [100,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [100,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '0px'],
                ["transform", "scaleY", '1.45022'],
                ["style", "height", '88px'],
                ["transform", "scaleX", '1.45022'],
                ["style", "opacity", '0'],
                ["style", "left", '45px'],
                ["style", "width", '100px']
            ],
            "${_row-1-img1}": [
                ["style", "top", '0px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["transform", "scaleX", '1']
            ],
            "${_row-1-img-22}": [
                ["style", "-webkit-transform-origin", [0,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '0px'],
                ["transform", "scaleY", '0.26221'],
                ["transform", "scaleX", '0.26221'],
                ["style", "height", '673px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "width", '763px']
            ],
            "${_top-slider-tag-13}": [
                ["style", "top", '191px'],
                ["style", "height", '34px'],
                ["style", "opacity", '0'],
                ["style", "left", '284px'],
                ["style", "width", '116px']
            ],
            "${_row-1-tag-22}": [
                ["style", "top", '109px'],
                ["transform", "scaleY", '0.52889'],
                ["style", "height", '64px'],
                ["transform", "scaleX", '0.52889'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '66px'],
                ["style", "width", '175px']
            ],
            "${_row-1-tag-32}": [
                ["style", "top", '109px'],
                ["transform", "scaleY", '0.52889'],
                ["style", "height", '64px'],
                ["transform", "scaleX", '0.52889'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '106px'],
                ["style", "width", '123px']
            ],
            "${_row-2-img-33}": [
                ["style", "top", '0px'],
                ["transform", "scaleY", '0.28436'],
                ["transform", "scaleX", '0.28436'],
                ["style", "opacity", '0'],
                ["style", "left", '23px'],
                ["style", "-webkit-transform-origin", [0,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}]
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 46000,
            autoPlay: true,
            timeline: [
                { id: "eid5392", tween: [ "style", "${_row-1-tag-32}", "top", '109px', { fromValue: '109px'}], position: 36997, duration: 0, easing: "easeInQuad" },
                { id: "eid5395", tween: [ "style", "${_row-1-img-12}", "top", '0px', { fromValue: '0px'}], position: 36997, duration: 0, easing: "easeInQuad" },
                { id: "eid1367", tween: [ "style", "${_row-1-img-32}", "opacity", '1', { fromValue: '0.000000'}], position: 4836, duration: 879, easing: "easeInQuad" },
                { id: "eid1365", tween: [ "style", "${_row-1-img-12}", "opacity", '1', { fromValue: '0.000000'}], position: 4543, duration: 879, easing: "easeInQuad" },
                { id: "eid4015", tween: [ "style", "${_row-2-img1}", "left", '0px', { fromValue: '0px'}], position: 24858, duration: 0, easing: "easeInQuad" },
                { id: "eid5383", tween: [ "style", "${_row-1-img-32}", "left", '0px', { fromValue: '0px'}], position: 36997, duration: 0, easing: "easeInQuad" },
                { id: "eid5387", tween: [ "style", "${_row-2-img-13}", "top", '0px', { fromValue: '0px'}], position: 36997, duration: 0, easing: "easeInQuad" },
                { id: "eid1368", tween: [ "style", "${_top-slider-img-13}", "opacity", '1', { fromValue: '0.000000'}], position: 4250, duration: 879, easing: "easeInQuad" },
                { id: "eid1642", tween: [ "style", "${_row-1-tag-12}", "opacity", '1', { fromValue: '0.000000'}], position: 7000, duration: 406, easing: "easeInSine" },
                { id: "eid4029", tween: [ "style", "${_row-1-img1}", "left", '-210px', { fromValue: '0px'}], position: 24858, duration: 1142, easing: "easeInQuad" },
                { id: "eid5404", tween: [ "style", "${_row-1-img1}", "left", '0px', { fromValue: '-210px'}], position: 36500, duration: 918, easing: "easeInQuad" },
                { id: "eid5389", tween: [ "style", "${_row-2-img-24}", "top", '0px', { fromValue: '0px'}], position: 36997, duration: 0, easing: "easeInQuad" },
                { id: "eid5376", tween: [ "style", "${_row-2-tag-12}", "left", '76px', { fromValue: '76px'}], position: 36997, duration: 0, easing: "easeInQuad" },
                { id: "eid5381", tween: [ "style", "${_row-2-img-33}", "left", '23px', { fromValue: '23px'}], position: 36997, duration: 0, easing: "easeInQuad" },
                { id: "eid4020", tween: [ "style", "${_row-2-img2}", "top", '0px', { fromValue: '0px'}], position: 24858, duration: 0, easing: "easeInQuad" },
                { id: "eid4032", tween: [ "style", "${_row-1-img3}", "left", '610px', { fromValue: '400px'}], position: 24858, duration: 1142, easing: "easeInQuad" },
                { id: "eid5416", tween: [ "style", "${_row-1-img3}", "left", '400px', { fromValue: '610px'}], position: 36500, duration: 918, easing: "easeInQuad" },
                { id: "eid4033", tween: [ "style", "${_row-1-img3}", "opacity", '0', { fromValue: '1'}], position: 24858, duration: 1142, easing: "easeInQuad" },
                { id: "eid5417", tween: [ "style", "${_row-1-img3}", "opacity", '1', { fromValue: '0'}], position: 36500, duration: 918, easing: "easeInQuad" },
                { id: "eid4046", tween: [ "style", "${_bottom-row}", "left", '200px', { fromValue: '200px'}], position: 24858, duration: 0, easing: "easeInQuad" },
                { id: "eid5418", tween: [ "style", "${_bottom-row}", "left", '200px', { fromValue: '200px'}], position: 36500, duration: 0, easing: "easeInQuad" },
                { id: "eid4014", tween: [ "style", "${_row-2-img2}", "left", '133px', { fromValue: '133px'}], position: 24858, duration: 0, easing: "easeInQuad" },
                { id: "eid4050", tween: [ "style", "${_bottom-row}", "top", '547px', { fromValue: '419px'}], position: 24858, duration: 1142, easing: "easeInQuad" },
                { id: "eid5421", tween: [ "style", "${_bottom-row}", "top", '419px', { fromValue: '547px'}], position: 36500, duration: 918, easing: "easeInQuad" },
                { id: "eid4137", tween: [ "style", "${_top-slider-tag-23}", "top", '191px', { fromValue: '191px'}], position: 24858, duration: 0, easing: "easeInOutSine" },
                { id: "eid5455", tween: [ "style", "${_top-slider-tag-23}", "top", '191px', { fromValue: '191px'}], position: 36082, duration: 0, easing: "easeInQuad" },
                { id: "eid5377", tween: [ "style", "${_row-2-img-13}", "left", '45px', { fromValue: '45px'}], position: 36997, duration: 0, easing: "easeInQuad" },
                { id: "eid4017", tween: [ "style", "${_row-1-img2}", "top", '0px', { fromValue: '0px'}], position: 24858, duration: 0, easing: "easeInQuad" },
                { id: "eid5399", tween: [ "style", "${_row-1-img2}", "top", '0px', { fromValue: '0px'}], position: 36500, duration: 0, easing: "easeInQuad" },
                { id: "eid5382", tween: [ "style", "${_row-1-tag-32}", "left", '106px', { fromValue: '106px'}], position: 36997, duration: 0, easing: "easeInQuad" },
                { id: "eid5384", tween: [ "style", "${_row-1-tag-12}", "left", '51px', { fromValue: '51px'}], position: 36997, duration: 0, easing: "easeInQuad" },
                { id: "eid3560", tween: [ "style", "${_top-slider-img-13}", "left", '-400px', { fromValue: '0px'}], position: 21844, duration: 1156, easing: "easeInOutSine" },
                { id: "eid4051", tween: [ "style", "${_bottom-row}", "opacity", '0', { fromValue: '1'}], position: 24858, duration: 1142, easing: "easeInQuad" },
                { id: "eid5422", tween: [ "style", "${_bottom-row}", "opacity", '1', { fromValue: '0'}], position: 36500, duration: 918, easing: "easeInQuad" },
                { id: "eid5388", tween: [ "style", "${_row-2-tag-22}", "top", '76px', { fromValue: '76px'}], position: 36997, duration: 0, easing: "easeInQuad" },
                { id: "eid3558", tween: [ "style", "${_top-slider-img-13}", "top", '0px', { fromValue: '0px'}], position: 21844, duration: 0, easing: "easeInOutCirc" },
                { id: "eid4141", tween: [ "style", "${_top-slider}", "left", '200px', { fromValue: '200px'}], position: 25500, duration: 0, easing: "easeInOutSine" },
                { id: "eid4031", tween: [ "style", "${_row-1-img1}", "opacity", '0', { fromValue: '1'}], position: 24858, duration: 1142, easing: "easeInQuad" },
                { id: "eid5411", tween: [ "style", "${_row-1-img1}", "opacity", '1', { fromValue: '0'}], position: 36500, duration: 918, easing: "easeInQuad" },
                { id: "eid1373", tween: [ "style", "${_row-2-img-13}", "opacity", '1', { fromValue: '0.000000'}], position: 5715, duration: 879, easing: "easeInQuad" },
                { id: "eid4016", tween: [ "style", "${_row-1-img3}", "top", '0px', { fromValue: '0px'}], position: 24858, duration: 0, easing: "easeInQuad" },
                { id: "eid5414", tween: [ "style", "${_row-1-img3}", "top", '0px', { fromValue: '0px'}], position: 36500, duration: 0, easing: "easeInQuad" },
                { id: "eid5385", tween: [ "style", "${_row-1-img-12}", "left", '-563px', { fromValue: '-563px'}], position: 36997, duration: 0, easing: "easeInQuad" },
                { id: "eid4142", tween: [ "style", "${_top-slider}", "top", '0px', { fromValue: '0px'}], position: 25500, duration: 0, easing: "easeInOutSine" },
                { id: "eid4003", tween: [ "style", "${_row}", "opacity", '1', { fromValue: '1'}], position: 24858, duration: 0, easing: "easeInQuad" },
                { id: "eid1369", tween: [ "style", "${_top-slider-img-23}", "opacity", '1', { fromValue: '0.000000'}], position: 4250, duration: 879, easing: "easeInQuad" },
                { id: "eid4362", tween: [ "style", "${_top-slider-img-23}", "opacity", '1', { fromValue: '1'}], position: 27608, duration: 0, easing: "easeInQuad" },
                { id: "eid5031", tween: [ "style", "${_top-slider-img-23}", "opacity", '0', { fromValue: '1'}], position: 30000, duration: 1000, easing: "easeInQuad" },
                { id: "eid5447", tween: [ "style", "${_top-slider-img-23}", "opacity", '0', { fromValue: '0'}], position: 35750, duration: 0, easing: "easeInQuad" },
                { id: "eid5453", tween: [ "style", "${_top-slider-img-23}", "opacity", '1', { fromValue: '0'}], position: 36082, duration: 918, easing: "easeInQuad" },
                { id: "eid4018", tween: [ "style", "${_row-1-img1}", "top", '0px', { fromValue: '0px'}], position: 24858, duration: 0, easing: "easeInQuad" },
                { id: "eid5398", tween: [ "style", "${_row-1-img1}", "top", '0px', { fromValue: '0px'}], position: 36500, duration: 0, easing: "easeInQuad" },
                { id: "eid4028", tween: [ "style", "${_row-1-img2}", "left", '-10px', { fromValue: '200px'}], position: 24858, duration: 1142, easing: "easeInQuad" },
                { id: "eid5405", tween: [ "style", "${_row-1-img2}", "left", '200px', { fromValue: '-10px'}], position: 36500, duration: 918, easing: "easeInQuad" },
                { id: "eid5393", tween: [ "style", "${_row-1-img-32}", "top", '0px', { fromValue: '0px'}], position: 36997, duration: 0, easing: "easeInQuad" },
                { id: "eid3575", tween: [ "style", "${_top-slider-tag-23}", "opacity", '1', { fromValue: '0'}], position: 22422, duration: 578, easing: "easeInOutSine" },
                { id: "eid4140", tween: [ "style", "${_top-slider-tag-23}", "opacity", '0', { fromValue: '1'}], position: 24858, duration: 1142, easing: "easeInOutSine" },
                { id: "eid5457", tween: [ "style", "${_top-slider-tag-23}", "opacity", '1', { fromValue: '0'}], position: 36082, duration: 918, easing: "easeInQuad" },
                { id: "eid5391", tween: [ "style", "${_row-2-img-33}", "top", '0px', { fromValue: '0px'}], position: 36997, duration: 0, easing: "easeInQuad" },
                { id: "eid4377", tween: [ "style", "${_new-img-p1}", "opacity", '1', { fromValue: '0'}], position: 28989, duration: 1011 },
                { id: "eid4674", tween: [ "style", "${_new-img-p1}", "opacity", '0', { fromValue: '1'}], position: 33074, duration: 514 },
                { id: "eid4008", tween: [ "style", "${_row-2-img2}", "opacity", '1', { fromValue: '1'}], position: 24858, duration: 0, easing: "easeInQuad" },
                { id: "eid3561", tween: [ "style", "${_top-slider-img-23}", "left", '0px', { fromValue: '400px'}], position: 21844, duration: 1156, easing: "easeInOutSine" },
                { id: "eid4144", tween: [ "style", "${_top-slider-img-23}", "left", '0px', { fromValue: '0px'}], position: 26000, duration: 0, easing: "easeInOutSine" },
                { id: "eid5449", tween: [ "style", "${_top-slider-img-23}", "left", '0px', { fromValue: '0px'}], position: 35750, duration: 0, easing: "easeInQuad" },
                { id: "eid5451", tween: [ "style", "${_top-slider-img-23}", "left", '0px', { fromValue: '0px'}], position: 36082, duration: 0, easing: "easeInQuad" },
                { id: "eid4019", tween: [ "style", "${_row-2-img3}", "top", '0px', { fromValue: '0px'}], position: 24858, duration: 0, easing: "easeInQuad" },
                { id: "eid1641", tween: [ "style", "${_row-1-tag-32}", "opacity", '1', { fromValue: '0.000000'}], position: 7000, duration: 406, easing: "easeInSine" },
                { id: "eid3559", tween: [ "style", "${_top-slider-img-23}", "top", '0px', { fromValue: '0px'}], position: 21844, duration: 0, easing: "easeInOutCirc" },
                { id: "eid4146", tween: [ "style", "${_top-slider-img-23}", "top", '23px', { fromValue: '0px'}], position: 26000, duration: 500, easing: "easeInOutSine" },
                { id: "eid5450", tween: [ "style", "${_top-slider-img-23}", "top", '0px', { fromValue: '23px'}], position: 35750, duration: 92, easing: "easeInQuad" },
                { id: "eid5380", tween: [ "style", "${_row-2-tag-32}", "left", '72px', { fromValue: '72px'}], position: 36997, duration: 0, easing: "easeInQuad" },
                { id: "eid1366", tween: [ "style", "${_row-2-img-33}", "opacity", '1', { fromValue: '0.000000'}], position: 5129, duration: 879, easing: "easeInQuad" },
                { id: "eid5386", tween: [ "style", "${_row-2-tag-12}", "top", '76px', { fromValue: '76px'}], position: 36997, duration: 0, easing: "easeInQuad" },
                { id: "eid1643", tween: [ "style", "${_row-1-tag-22}", "opacity", '1', { fromValue: '0.000000'}], position: 7000, duration: 406, easing: "easeInSine" },
                { id: "eid5378", tween: [ "style", "${_row-2-tag-22}", "left", '59px', { fromValue: '59px'}], position: 36997, duration: 0, easing: "easeInQuad" },
                { id: "eid2749", tween: [ "style", "${_row}", "left", '200px', { fromValue: '0px'}], position: 10500, duration: 1500, easing: "easeInOutQuad" },
                { id: "eid2751", tween: [ "style", "${_row}", "left", '0px', { fromValue: '200px'}], position: 13000, duration: 1500, easing: "easeInOutQuad" },
                { id: "eid1646", tween: [ "style", "${_row-2-tag-12}", "opacity", '1', { fromValue: '0.000000'}], position: 7000, duration: 406, easing: "easeInSine" },
                { id: "eid4013", tween: [ "style", "${_row-2-img3}", "left", '267px', { fromValue: '267px'}], position: 24858, duration: 0, easing: "easeInQuad" },
                { id: "eid2748", tween: [ "style", "${_row}", "top", '243px', { fromValue: '243px'}], position: 10500, duration: 0, easing: "easeInQuad" },
                { id: "eid1616", tween: [ "style", "${_top-slider-tag-13}", "opacity", '1', { fromValue: '0.000000'}], position: 7000, duration: 406, easing: "easeInSine" },
                { id: "eid3578", tween: [ "style", "${_top-slider-tag-13}", "opacity", '1', { fromValue: '1'}], position: 7406, duration: 0, easing: "easeInCirc" },
                { id: "eid3579", tween: [ "style", "${_top-slider-tag-13}", "opacity", '0', { fromValue: '1'}], position: 21844, duration: 578, easing: "easeInOutSine" },
                { id: "eid5379", tween: [ "style", "${_row-2-img-24}", "left", '12px', { fromValue: '12px'}], position: 36997, duration: 0, easing: "easeInQuad" },
                { id: "eid4136", tween: [ "style", "${_top-slider-tag-23}", "left", '301px', { fromValue: '301px'}], position: 24858, duration: 0, easing: "easeInOutSine" },
                { id: "eid5454", tween: [ "style", "${_top-slider-tag-23}", "left", '301px', { fromValue: '301px'}], position: 36082, duration: 0, easing: "easeInQuad" },
                { id: "eid5390", tween: [ "style", "${_row-2-tag-32}", "top", '76px', { fromValue: '76px'}], position: 36997, duration: 0, easing: "easeInQuad" },
                { id: "eid1370", tween: [ "style", "${_row-1-img-22}", "opacity", '1', { fromValue: '0.000000'}], position: 4836, duration: 879, easing: "easeInQuad" },
                { id: "eid4007", tween: [ "style", "${_row-2-img3}", "opacity", '1', { fromValue: '1'}], position: 24858, duration: 0, easing: "easeInQuad" },
                { id: "eid1644", tween: [ "style", "${_row-2-tag-32}", "opacity", '1', { fromValue: '0.000000'}], position: 7000, duration: 406, easing: "easeInSine" },
                { id: "eid4021", tween: [ "style", "${_row-2-img1}", "top", '0px', { fromValue: '0px'}], position: 24858, duration: 0, easing: "easeInQuad" },
                { id: "eid4009", tween: [ "style", "${_row-2-img1}", "opacity", '1', { fromValue: '1'}], position: 24858, duration: 0, easing: "easeInQuad" },
                { id: "eid5394", tween: [ "style", "${_row-1-tag-12}", "top", '109px', { fromValue: '109px'}], position: 36997, duration: 0, easing: "easeInQuad" },
                { id: "eid4030", tween: [ "style", "${_row-1-img2}", "opacity", '0', { fromValue: '1'}], position: 24858, duration: 1142, easing: "easeInQuad" },
                { id: "eid5410", tween: [ "style", "${_row-1-img2}", "opacity", '1', { fromValue: '0'}], position: 36500, duration: 918, easing: "easeInQuad" },
                { id: "eid1645", tween: [ "style", "${_row-2-tag-22}", "opacity", '1', { fromValue: '0.000000'}], position: 7000, duration: 406, easing: "easeInSine" },
                { id: "eid1374", tween: [ "style", "${_row-2-img-24}", "opacity", '1', { fromValue: '0.000000'}], position: 5422, duration: 879, easing: "easeInQuad" }            ]
        }
    }
},
"click": {
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
                    rect: ['6px', '6px', '45px', '45px', 'auto', 'auto'],
                    title: 'click',
                    type: 'ellipse',
                    id: 'click',
                    stroke: [0, 'rgba(255,255,255,0.00)', 'solid'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    fill: ['rgba(241,241,241,1.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '55px'],
                ["style", "width", '55px']
            ],
            "${_click}": [
                ["color", "background-color", 'rgba(241,241,241,1.00)'],
                ["style", "bottom", 'auto'],
                ["transform", "scaleX", '1'],
                ["style", "right", 'auto'],
                ["style", "left", '6px'],
                ["style", "width", '45px'],
                ["style", "top", '6px'],
                ["transform", "scaleY", '1'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '45px'],
                ["color", "border-color", 'rgba(255,255,255,0.00)'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '0px']
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
"app": {
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
                    id: 'bg',
                    type: 'image',
                    rect: ['316px', '161px', '1536px', '2048px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/bg.png', '0px', '0px']
                },
                {
                    id: 'page-2',
                    type: 'group',
                    rect: ['200px', '30px', '400', '533', 'auto', 'auto'],
                    c: [
                    {
                        id: 'single-page-2-content',
                        type: 'image',
                        rect: ['0px', '0px', '400px', '533px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/single-page-2-content.png', '0px', '0px']
                    },
                    {
                        id: 'single-page-2-img-4',
                        type: 'image',
                        rect: ['0px', '431px', '155px', '74px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/single-page-2-img-4.png', '0px', '0px']
                    },
                    {
                        id: 'single-page-2-img-3',
                        type: 'image',
                        rect: ['0', '355px', '155px', '74px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/single-page-2-img-3.png', '0px', '0px']
                    },
                    {
                        rect: ['0px', '279px', '155px', '74px', 'auto', 'auto'],
                        id: 'single-page-2-img-2',
                        opacity: 0.5,
                        type: 'image',
                        fill: ['rgba(0,0,0,0)', 'images/single-page-2-img-2.png', '0px', '0px']
                    },
                    {
                        id: 'single-page-2-img-1',
                        type: 'image',
                        rect: ['0', '26px', '400px', '237px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/single-page-2-img-1.png', '0px', '0px']
                    }]
                },
                {
                    id: 'page-1',
                    type: 'group',
                    rect: ['200px', '30px', '400', '505', 'auto', 'auto'],
                    c: [
                    {
                        id: 'single-page-1-content',
                        type: 'image',
                        rect: ['0', '0', '400px', '533px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/single-page-1-content.png', '0px', '0px']
                    },
                    {
                        id: 'single-page-1-img-42',
                        type: 'image',
                        rect: ['0', '431px', '155px', '74px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/single-page-1-img-4.png', '0px', '0px']
                    },
                    {
                        id: 'single-page-1-img-3',
                        type: 'image',
                        rect: ['0', '355px', '155px', '74px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/single-page-1-img-3.png', '0px', '0px']
                    },
                    {
                        rect: ['0', '279px', '155px', '74px', 'auto', 'auto'],
                        id: 'single-page-1-img-2',
                        opacity: 0.5,
                        type: 'image',
                        fill: ['rgba(0,0,0,0)', 'images/single-page-1-img-2.png', '0px', '0px']
                    },
                    {
                        id: 'single-page-1-img-1',
                        type: 'image',
                        rect: ['0', '26px', '400px', '237px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/single-page-1-img-1.png', '0px', '0px']
                    }]
                },
                {
                    id: 'page-controlls',
                    type: 'group',
                    rect: ['200px', '30px', '400', '533', 'auto', 'auto'],
                    c: [
                    {
                        id: 'footer-pages2',
                        type: 'image',
                        rect: ['0px', '0px', '400px', '533px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/footer-pages.png', '0px', '0px']
                    },
                    {
                        id: 'footer-page-flip',
                        type: 'image',
                        rect: ['365px', '453px', '35px', '25px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/footer-page-flip.png', '0px', '0px']
                    },
                    {
                        rect: ['165px', '513px', '8px', '10px', 'auto', 'auto'],
                        id: 'footer-icon2',
                        opacity: 1,
                        type: 'image',
                        fill: ['rgba(0,0,0,0)', 'images/footer-icon.png', '0px', '0px']
                    },
                    {
                        id: 'footer-page-flip-back',
                        type: 'image',
                        rect: ['365px', '454px', '35px', '24px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/footer-page-flip-back.png', '0px', '0px']
                    }]
                },
                {
                    id: 'main-screen',
                    type: 'rect',
                    rect: ['0px', '27px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'sidebar2',
                    type: 'image',
                    rect: ['34px', '30px', '166px', '533px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/sidebar.png', '0px', '0px']
                },
                {
                    id: 'cover-page',
                    type: 'rect',
                    rect: ['200px', '30px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'top-bar',
                    type: 'group',
                    rect: ['200px', '30px', '400', '533', 'auto', 'auto'],
                    c: [
                    {
                        id: 'top-bar-bg3',
                        type: 'image',
                        rect: ['0px', '0px', '400px', '533px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/top-bar-bg.png', '0px', '0px']
                    },
                    {
                        rect: ['172px', '8px', '55px', '11px', 'auto', 'auto'],
                        id: 'top-bar-logo3',
                        opacity: 1,
                        type: 'image',
                        fill: ['rgba(0,0,0,0)', 'images/top-bar-logo.png', '0px', '0px']
                    },
                    {
                        id: 'icon-menu2',
                        type: 'image',
                        rect: ['10', '8', '14px', '11px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/icon-menu.png', '0px', '0px']
                    },
                    {
                        id: 'icon-refresh2',
                        type: 'image',
                        rect: ['379px', '8', '11px', '11px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/icon-refresh.png', '0px', '0px']
                    },
                    {
                        type: 'image',
                        id: 'icon-close',
                        rect: ['379px', '8', '11px', '11px', 'auto', 'auto'],
                        transform: [],
                        fill: ['rgba(0,0,0,0)', 'images/icon-close.png', '0px', '0px']
                    }]
                },
                {
                    rect: ['119px', '165px', '35px', '36px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'clickCopy2',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(255,255,255,0.97)']
                }
            ],
            symbolInstances: [
            {
                id: 'main-screen',
                symbolName: 'main-screen'
            },
            {
                id: 'cover-page',
                symbolName: 'cover-page'
            }            ]
        },
    states: {
        "Base State": {
            "${_cover-page}": [
                ["style", "top", '30px'],
                ["style", "opacity", '1'],
                ["style", "left", '200px']
            ],
            "${_page-1}": [
                ["style", "top", '30px'],
                ["style", "opacity", '0'],
                ["style", "left", '200px']
            ],
            "${_footer-page-flip}": [
                ["style", "top", '453px'],
                ["style", "height", '25px'],
                ["style", "opacity", '1'],
                ["style", "left", '365px'],
                ["style", "width", '35px']
            ],
            "${_footer-pages2}": [
                ["style", "top", '0px'],
                ["style", "height", '533px'],
                ["style", "left", '0px'],
                ["style", "width", '400px']
            ],
            "${_clickCopy2}": [
                ["color", "background-color", 'rgba(187,187,187,0.78)'],
                ["transform", "rotateZ", '0deg'],
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["style", "left", '419px'],
                ["style", "width", '32px'],
                ["style", "top", '513px'],
                ["transform", "scaleY", '1.1'],
                ["style", "height", '32px'],
                ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_single-page-1-img-1}": [
                ["style", "height", '237px'],
                ["style", "opacity", '0'],
                ["style", "top", '26px'],
                ["style", "width", '400px']
            ],
            "${_page-controlls}": [
                ["style", "top", '30px'],
                ["style", "opacity", '0'],
                ["style", "left", '200px']
            ],
            "${_top-bar-bg3}": [
                ["style", "top", '-30px'],
                ["style", "height", '533px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "width", '400px']
            ],
            "${_single-page-1-img-42}": [
                ["style", "top", '431px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "height", '74px'],
                ["style", "opacity", '0'],
                ["style", "left", '-156px'],
                ["style", "width", '155px']
            ],
            "${_single-page-2-img-2}": [
                ["style", "top", '279px'],
                ["style", "height", '74px'],
                ["style", "opacity", '0.5'],
                ["style", "left", '0px'],
                ["style", "width", '155px']
            ],
            "${_single-page-2-img-1}": [
                ["style", "height", '237px'],
                ["style", "top", '26px'],
                ["style", "width", '400px']
            ],
            "${_icon-refresh2}": [
                ["style", "height", '11px'],
                ["style", "opacity", '0'],
                ["style", "left", '378px'],
                ["style", "width", '11px']
            ],
            "${_single-page-1-content}": [
                ["style", "height", '533px'],
                ["style", "width", '400px']
            ],
            "${_single-page-2-img-3}": [
                ["style", "height", '74px'],
                ["style", "top", '355px'],
                ["style", "width", '155px']
            ],
            "${_icon-close}": [
                ["style", "height", '11px'],
                ["style", "opacity", '0'],
                ["style", "left", '376px'],
                ["style", "width", '11px']
            ],
            "${symbolSelector}": [
                ["style", "height", '564px'],
                ["style", "width", '1000px']
            ],
            "${_icon-menu2}": [
                ["style", "top", '8px'],
                ["style", "height", '11px'],
                ["style", "opacity", '0'],
                ["style", "left", '15px'],
                ["style", "width", '14px']
            ],
            "${_footer-page-flip-back}": [
                ["style", "top", '482px'],
                ["style", "height", '24px'],
                ["style", "opacity", '0'],
                ["style", "left", '365px'],
                ["style", "width", '35px']
            ],
            "${_main-screen}": [
                ["style", "top", '27px'],
                ["style", "left", '0px']
            ],
            "${_top-bar}": [
                ["style", "top", '30px'],
                ["style", "opacity", '1'],
                ["style", "left", '200px']
            ],
            "${_page-2}": [
                ["style", "top", '30px'],
                ["style", "opacity", '0'],
                ["style", "left", '200px']
            ],
            "${_bg}": [
                ["style", "top", '30px'],
                ["style", "height", '533px'],
                ["style", "opacity", '1'],
                ["style", "left", '200px'],
                ["style", "width", '400px']
            ],
            "${_single-page-1-img-3}": [
                ["style", "top", '355px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "height", '74px'],
                ["style", "opacity", '0'],
                ["style", "left", '-156px'],
                ["style", "width", '155px']
            ],
            "${_single-page-1-img-2}": [
                ["style", "top", '279px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "height", '74px'],
                ["style", "opacity", '0'],
                ["style", "left", '-156px'],
                ["style", "width", '155px']
            ],
            "${_footer-icon2}": [
                ["style", "top", '513px'],
                ["style", "height", '10px'],
                ["style", "opacity", '1'],
                ["style", "left", '165px'],
                ["style", "width", '8px']
            ],
            "${_single-page-2-img-4}": [
                ["style", "height", '74px'],
                ["style", "top", '431px'],
                ["style", "left", '0px'],
                ["style", "width", '155px']
            ],
            "${_single-page-2-content}": [
                ["style", "top", '0px'],
                ["style", "height", '533px'],
                ["style", "left", '0px'],
                ["style", "width", '400px']
            ],
            "${_sidebar2}": [
                ["style", "top", '30px'],
                ["style", "height", '533px'],
                ["style", "left", '34px'],
                ["style", "width", '166px']
            ],
            "${_top-bar-logo3}": [
                ["style", "top", '8px'],
                ["style", "height", '11px'],
                ["style", "opacity", '0'],
                ["style", "left", '172px'],
                ["style", "width", '55px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 46000,
            autoPlay: true,
            timeline: [
                { id: "eid2983", tween: [ "style", "${_main-screen}", "top", '26px', { fromValue: '27px'}], position: 17092, duration: 750, easing: "easeOutQuad" },
                { id: "eid3459", tween: [ "style", "${_main-screen}", "top", '26px', { fromValue: '26px'}], position: 19537, duration: 0, easing: "easeInQuad" },
                { id: "eid743", tween: [ "style", "${_clickCopy2}", "-webkit-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 1500, duration: 0, easing: "easeInOutCirc" },
                { id: "eid7349", tween: [ "style", "${_clickCopy2}", "-moz-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 1500, duration: 0, easing: "easeInOutCirc" },
                { id: "eid7350", tween: [ "style", "${_clickCopy2}", "-ms-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 1500, duration: 0, easing: "easeInOutCirc" },
                { id: "eid7351", tween: [ "style", "${_clickCopy2}", "msTransformOrigin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 1500, duration: 0, easing: "easeInOutCirc" },
                { id: "eid7352", tween: [ "style", "${_clickCopy2}", "-o-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 1500, duration: 0, easing: "easeInOutCirc" },
                { id: "eid744", tween: [ "style", "${_clickCopy2}", "-webkit-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 2500, duration: 0, easing: "easeInOutCirc" },
                { id: "eid7353", tween: [ "style", "${_clickCopy2}", "-moz-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 2500, duration: 0, easing: "easeInOutCirc" },
                { id: "eid7354", tween: [ "style", "${_clickCopy2}", "-ms-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 2500, duration: 0, easing: "easeInOutCirc" },
                { id: "eid7355", tween: [ "style", "${_clickCopy2}", "msTransformOrigin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 2500, duration: 0, easing: "easeInOutCirc" },
                { id: "eid7356", tween: [ "style", "${_clickCopy2}", "-o-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 2500, duration: 0, easing: "easeInOutCirc" },
                { id: "eid2517", tween: [ "style", "${_clickCopy2}", "-webkit-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 10000, duration: 0, easing: "easeInOutCirc" },
                { id: "eid7357", tween: [ "style", "${_clickCopy2}", "-moz-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 10000, duration: 0, easing: "easeInOutCirc" },
                { id: "eid7358", tween: [ "style", "${_clickCopy2}", "-ms-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 10000, duration: 0, easing: "easeInOutCirc" },
                { id: "eid7359", tween: [ "style", "${_clickCopy2}", "msTransformOrigin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 10000, duration: 0, easing: "easeInOutCirc" },
                { id: "eid7360", tween: [ "style", "${_clickCopy2}", "-o-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 10000, duration: 0, easing: "easeInOutCirc" },
                { id: "eid4287", tween: [ "transform", "${_single-page-1-img-2}", "scaleY", '1', { fromValue: '1'}], position: 26500, duration: 0, easing: "easeInOutSine" },
                { id: "eid4302", tween: [ "style", "${_single-page-1-img-3}", "left", '0px', { fromValue: '-156px'}], position: 26100, duration: 500, easing: "easeInOutSine" },
                { id: "eid4303", tween: [ "style", "${_single-page-1-img-42}", "left", '0px', { fromValue: '-156px'}], position: 26250, duration: 500, easing: "easeInOutSine" },
                { id: "eid4304", tween: [ "style", "${_single-page-1-img-2}", "left", '0px', { fromValue: '-156px'}], position: 26000, duration: 500, easing: "easeInOutSine" },
                { id: "eid1910", tween: [ "style", "${_icon-close}", "opacity", '0', { fromValue: '0'}], position: 8250, duration: 0, easing: "easeInSine" },
                { id: "eid1911", tween: [ "style", "${_icon-close}", "opacity", '0', { fromValue: '0'}], position: 9000, duration: 0, easing: "easeInSine" },
                { id: "eid4737", tween: [ "style", "${_icon-close}", "opacity", '0', { fromValue: '0'}], position: 24608, duration: 0, easing: "easeInQuad" },
                { id: "eid4739", tween: [ "style", "${_icon-close}", "opacity", '1', { fromValue: '0'}], position: 26000, duration: 337, easing: "easeInQuad" },
                { id: "eid5802", tween: [ "style", "${_icon-close}", "opacity", '0', { fromValue: '1'}], position: 36995, duration: 423, easing: "easeInOutSine" },
                { id: "eid4478", tween: [ "style", "${_footer-page-flip}", "top", '453px', { fromValue: '453px'}], position: 30750, duration: 0, easing: "easeInQuad" },
                { id: "eid4295", tween: [ "style", "${_single-page-1-img-42}", "top", '431px', { fromValue: '431px'}], position: 26750, duration: 0, easing: "easeInOutSine" },
                { id: "eid4476", tween: [ "style", "${_footer-page-flip}", "opacity", '1', { fromValue: '1'}], position: 30750, duration: 0, easing: "easeInQuad" },
                { id: "eid6665", tween: [ "style", "${_top-bar}", "opacity", '0.02392578125', { fromValue: '1'}], position: 41500, duration: 500, easing: "easeInQuad" },
                { id: "eid2136", tween: [ "style", "${_bg}", "top", '30px', { fromValue: '30px'}], position: 0, duration: 0, easing: "easeInSine" },
                { id: "eid4305", tween: [ "style", "${_single-page-1-img-3}", "opacity", '1', { fromValue: '0'}], position: 26100, duration: 500, easing: "easeInOutSine" },
                { id: "eid4360", tween: [ "style", "${_single-page-1-img-3}", "opacity", '0.5', { fromValue: '1'}], position: 28989, duration: 337, easing: "easeInQuad" },
                { id: "eid2233", tween: [ "style", "${_top-bar-bg3}", "opacity", '1', { fromValue: '1'}], position: 7750, duration: 0, easing: "easeInSine" },
                { id: "eid2979", tween: [ "style", "${_sidebar2}", "top", '29px', { fromValue: '30px'}], position: 17092, duration: 750, easing: "easeOutQuad" },
                { id: "eid3458", tween: [ "style", "${_sidebar2}", "top", '29px', { fromValue: '29px'}], position: 19537, duration: 0, easing: "easeInQuad" },
                { id: "eid745", tween: [ "style", "${_clickCopy2}", "opacity", '0.85', { fromValue: '0'}], position: 1000, duration: 500, easing: "easeInOutCirc" },
                { id: "eid746", tween: [ "style", "${_clickCopy2}", "opacity", '0', { fromValue: '0.8500000238418579'}], position: 3500, duration: 750, easing: "easeInOutCirc" },
                { id: "eid2518", tween: [ "style", "${_clickCopy2}", "opacity", '0.85', { fromValue: '0'}], position: 9500, duration: 500, easing: "easeInOutCirc" },
                { id: "eid3040", tween: [ "style", "${_clickCopy2}", "opacity", '0', { fromValue: '0.8500000238418579'}], position: 14750, duration: 250, easing: "easeInQuad" },
                { id: "eid3042", tween: [ "style", "${_clickCopy2}", "opacity", '0.85', { fromValue: '0'}], position: 16000, duration: 305, easing: "easeInQuad" },
                { id: "eid2989", tween: [ "style", "${_clickCopy2}", "opacity", '0', { fromValue: '0.8500000238418579'}], position: 17092, duration: 158, easing: "easeInQuad" },
                { id: "eid3400", tween: [ "style", "${_clickCopy2}", "opacity", '0.85', { fromValue: '0'}], position: 18750, duration: 305, easing: "easeInQuad" },
                { id: "eid3396", tween: [ "style", "${_clickCopy2}", "opacity", '0', { fromValue: '0.8500000238418579'}], position: 19537, duration: 158, easing: "easeInQuad" },
                { id: "eid3513", tween: [ "style", "${_clickCopy2}", "opacity", '0.85', { fromValue: '0'}], position: 20750, duration: 500, easing: "easeInOutCirc" },
                { id: "eid3516", tween: [ "style", "${_clickCopy2}", "opacity", '0.85', { fromValue: '0.85'}], position: 21500, duration: 0, easing: "easeInOutCirc" },
                { id: "eid3858", tween: [ "style", "${_clickCopy2}", "opacity", '0', { fromValue: '0.8500000238418579'}], position: 22500, duration: 250, easing: "easeInOutSine" },
                { id: "eid3940", tween: [ "style", "${_clickCopy2}", "opacity", '0.85', { fromValue: '0'}], position: 24250, duration: 305, easing: "easeInQuad" },
                { id: "eid3939", tween: [ "style", "${_clickCopy2}", "opacity", '0', { fromValue: '0.8500000238418579'}], position: 25037, duration: 158, easing: "easeInQuad" },
                { id: "eid4346", tween: [ "style", "${_clickCopy2}", "opacity", '0', { fromValue: '0'}], position: 26449, duration: 0, easing: "easeInQuad" },
                { id: "eid4353", tween: [ "style", "${_clickCopy2}", "opacity", '0.85', { fromValue: '0'}], position: 28381, duration: 305, easing: "easeInQuad" },
                { id: "eid4354", tween: [ "style", "${_clickCopy2}", "opacity", '0', { fromValue: '0.8500000238418579'}], position: 29168, duration: 158, easing: "easeInQuad" },
                { id: "eid4481", tween: [ "style", "${_clickCopy2}", "opacity", '0.85', { fromValue: '0'}], position: 32435, duration: 305, easing: "easeInQuad" },
                { id: "eid4482", tween: [ "style", "${_clickCopy2}", "opacity", '0', { fromValue: '0.8500000238418579'}], position: 33221, duration: 158, easing: "easeInQuad" },
                { id: "eid5218", tween: [ "style", "${_clickCopy2}", "opacity", '0.85', { fromValue: '0'}], position: 36387, duration: 305, easing: "easeInQuad" },
                { id: "eid5219", tween: [ "style", "${_clickCopy2}", "opacity", '0', { fromValue: '0.8500000238418579'}], position: 37173, duration: 158, easing: "easeInQuad" },
                { id: "eid2451", tween: [ "style", "${_icon-menu2}", "left", '10px', { fromValue: '10px'}], position: 8250, duration: 0, easing: "easeInSine" },
                { id: "eid4260", tween: [ "style", "${_page-2}", "opacity", '0', { fromValue: '0'}], position: 23715, duration: 0, easing: "easeInQuad" },
                { id: "eid5069", tween: [ "style", "${_page-2}", "opacity", '1', { fromValue: '0.000000'}], position: 32500, duration: 545, easing: "easeInQuad" },
                { id: "eid5242", tween: [ "style", "${_page-2}", "opacity", '0', { fromValue: '1'}], position: 36995, duration: 423, easing: "easeInOutSine" },
                { id: "eid4292", tween: [ "transform", "${_single-page-1-img-42}", "scaleX", '1', { fromValue: '1'}], position: 26750, duration: 0, easing: "easeInOutSine" },
                { id: "eid4306", tween: [ "style", "${_single-page-1-img-42}", "opacity", '1', { fromValue: '0'}], position: 26250, duration: 500, easing: "easeInOutSine" },
                { id: "eid747", tween: [ "style", "${_clickCopy2}", "left", '348px', { fromValue: '419px'}], position: 2500, duration: 1000, easing: "easeInOutCirc" },
                { id: "eid2543", tween: [ "style", "${_clickCopy2}", "left", '321px', { fromValue: '348px'}], position: 9000, duration: 250, easing: "easeInOutCirc" },
                { id: "eid2621", tween: [ "style", "${_clickCopy2}", "left", '321px', { fromValue: '321px'}], position: 9500, duration: 0, easing: "easeInOutCirc" },
                { id: "eid2623", tween: [ "style", "${_clickCopy2}", "left", '531px', { fromValue: '321px'}], position: 10500, duration: 1500, easing: "easeInOutQuad" },
                { id: "eid2698", tween: [ "style", "${_clickCopy2}", "left", '321px', { fromValue: '531px'}], position: 13000, duration: 1500, easing: "easeInOutQuad" },
                { id: "eid2818", tween: [ "style", "${_clickCopy2}", "left", '202px', { fromValue: '321px'}], position: 15000, duration: 1000, easing: "easeInQuad" },
                { id: "eid3439", tween: [ "style", "${_clickCopy2}", "left", '369px', { fromValue: '202px'}], position: 18500, duration: 98, easing: "easeInQuad" },
                { id: "eid3504", tween: [ "style", "${_clickCopy2}", "left", '541px', { fromValue: '369px'}], position: 20000, duration: 250, easing: "easeInQuad" },
                { id: "eid3519", tween: [ "style", "${_clickCopy2}", "left", '135px', { fromValue: '541px'}], position: 21844, duration: 1156, easing: "easeInOutSine" },
                { id: "eid3863", tween: [ "style", "${_clickCopy2}", "left", '400px', { fromValue: '135px'}], position: 23250, duration: 250, easing: "easeInOutSine" },
                { id: "eid4349", tween: [ "style", "${_clickCopy2}", "left", '280px', { fromValue: '400px'}], position: 26449, duration: 97, easing: "easeInQuad" },
                { id: "eid4487", tween: [ "style", "${_clickCopy2}", "left", '569px', { fromValue: '280px'}], position: 32185, duration: 84, easing: "easeInQuad" },
                { id: "eid5227", tween: [ "style", "${_clickCopy2}", "left", '570px', { fromValue: '569px'}], position: 33902, duration: 348, easing: "easeInQuad" },
                { id: "eid4293", tween: [ "style", "${_single-page-1-img-2}", "top", '279px', { fromValue: '279px'}], position: 26500, duration: 0, easing: "easeInOutSine" },
                { id: "eid4588", tween: [ "style", "${_footer-page-flip-back}", "top", '482px', { fromValue: '482px'}], position: 33286, duration: 0, easing: "easeInQuad" },
                { id: "eid4290", tween: [ "transform", "${_single-page-1-img-2}", "scaleX", '1', { fromValue: '1'}], position: 26500, duration: 0, easing: "easeInOutSine" },
                { id: "eid4274", tween: [ "style", "${_page-controlls}", "opacity", '1', { fromValue: '0.000000'}], position: 24000, duration: 500, easing: "easeInOutSine" },
                { id: "eid5244", tween: [ "style", "${_page-controlls}", "opacity", '0', { fromValue: '1'}], position: 36995, duration: 423, easing: "easeInOutSine" },
                { id: "eid4294", tween: [ "style", "${_single-page-1-img-3}", "top", '355px', { fromValue: '355px'}], position: 26600, duration: 0, easing: "easeInOutSine" },
                { id: "eid4605", tween: [ "style", "${_footer-icon2}", "left", '177px', { fromValue: '165px'}], position: 33043, duration: 243, easing: "easeInQuad" },
                { id: "eid3056", tween: [ "style", "${_top-bar}", "top", '30px', { fromValue: '30px'}], position: 17092, duration: 0, easing: "easeInQuad" },
                { id: "eid3453", tween: [ "style", "${_top-bar}", "top", '30px', { fromValue: '30px'}], position: 19537, duration: 0, easing: "easeInQuad" },
                { id: "eid6664", tween: [ "style", "${_top-bar}", "top", '-5px', { fromValue: '30px'}], position: 41500, duration: 500, easing: "easeInQuad" },
                { id: "eid2244", tween: [ "style", "${_icon-menu2}", "opacity", '1', { fromValue: '0'}], position: 8250, duration: 750, easing: "easeInSine" },
                { id: "eid3057", tween: [ "style", "${_top-bar}", "left", '365px', { fromValue: '200px'}], position: 17092, duration: 750, easing: "easeOutQuad" },
                { id: "eid3463", tween: [ "style", "${_top-bar}", "left", '201px', { fromValue: '365px'}], position: 19537, duration: 963, easing: "easeInQuad" },
                { id: "eid6661", tween: [ "style", "${_top-bar}", "left", '201px', { fromValue: '201px'}], position: 41500, duration: 0, easing: "easeInQuad" },
                { id: "eid2981", tween: [ "style", "${_cover-page}", "top", '29px', { fromValue: '30px'}], position: 17092, duration: 750, easing: "easeOutQuad" },
                { id: "eid3457", tween: [ "style", "${_cover-page}", "top", '29px', { fromValue: '29px'}], position: 19537, duration: 0, easing: "easeInQuad" },
                { id: "eid6585", tween: [ "style", "${_cover-page}", "top", '29px', { fromValue: '29px'}], position: 41500, duration: 0, easing: "easeInQuad" },
                { id: "eid2242", tween: [ "style", "${_top-bar-logo3}", "opacity", '1', { fromValue: '0.000000'}], position: 8250, duration: 750, easing: "easeInSine" },
                { id: "eid6764", tween: [ "color", "${_clickCopy2}", "background-color", 'rgba(187,187,187,0.78)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(187,187,187,0.78)'}], position: 40222, duration: 0, easing: "easeInQuad" },
                { id: "eid741", tween: [ "style", "${_clickCopy2}", "top", '513px', { fromValue: '513px'}], position: 1500, duration: 0, easing: "easeInOutCirc" },
                { id: "eid742", tween: [ "style", "${_clickCopy2}", "top", '513px', { fromValue: '513px'}], position: 2500, duration: 0, easing: "easeInOutCirc" },
                { id: "eid2544", tween: [ "style", "${_clickCopy2}", "top", '330px', { fromValue: '513px'}], position: 9000, duration: 250, easing: "easeInOutCirc" },
                { id: "eid2620", tween: [ "style", "${_clickCopy2}", "top", '330px', { fromValue: '330px'}], position: 9500, duration: 0, easing: "easeInOutCirc" },
                { id: "eid2582", tween: [ "style", "${_clickCopy2}", "top", '330px', { fromValue: '330px'}], position: 10500, duration: 0, easing: "easeInOutCirc" },
                { id: "eid2696", tween: [ "style", "${_clickCopy2}", "top", '330px', { fromValue: '330px'}], position: 14500, duration: 0, easing: "easeInOutCirc" },
                { id: "eid2819", tween: [ "style", "${_clickCopy2}", "top", '33px', { fromValue: '330px'}], position: 15000, duration: 1000, easing: "easeInQuad" },
                { id: "eid3437", tween: [ "style", "${_clickCopy2}", "top", '33px', { fromValue: '33px'}], position: 18500, duration: 0, easing: "easeInQuad" },
                { id: "eid3505", tween: [ "style", "${_clickCopy2}", "top", '136px', { fromValue: '33px'}], position: 20000, duration: 250, easing: "easeInQuad" },
                { id: "eid3864", tween: [ "style", "${_clickCopy2}", "top", '141px', { fromValue: '136px'}], position: 23250, duration: 250, easing: "easeInOutSine" },
                { id: "eid4350", tween: [ "style", "${_clickCopy2}", "top", '406px', { fromValue: '141px'}], position: 26449, duration: 97, easing: "easeInQuad" },
                { id: "eid4488", tween: [ "style", "${_clickCopy2}", "top", '482px', { fromValue: '406px'}], position: 32185, duration: 84, easing: "easeInQuad" },
                { id: "eid5228", tween: [ "style", "${_clickCopy2}", "top", '33px', { fromValue: '482px'}], position: 33902, duration: 348, easing: "easeInQuad" },
                { id: "eid2957", tween: [ "style", "${_clickCopy2}", "height", '28px', { fromValue: '32px'}], position: 16663, duration: 250, easing: "easeInQuad" },
                { id: "eid2959", tween: [ "style", "${_clickCopy2}", "height", '32px', { fromValue: '28px'}], position: 16913, duration: 337, easing: "easeInQuad" },
                { id: "eid3394", tween: [ "style", "${_clickCopy2}", "height", '28px', { fromValue: '32px'}], position: 19108, duration: 250, easing: "easeInQuad" },
                { id: "eid3395", tween: [ "style", "${_clickCopy2}", "height", '32px', { fromValue: '28px'}], position: 19358, duration: 337, easing: "easeInQuad" },
                { id: "eid3937", tween: [ "style", "${_clickCopy2}", "height", '28px', { fromValue: '32px'}], position: 24608, duration: 250, easing: "easeInQuad" },
                { id: "eid3938", tween: [ "style", "${_clickCopy2}", "height", '32px', { fromValue: '28px'}], position: 24858, duration: 337, easing: "easeInQuad" },
                { id: "eid4351", tween: [ "style", "${_clickCopy2}", "height", '28px', { fromValue: '32px'}], position: 28739, duration: 250, easing: "easeInQuad" },
                { id: "eid4352", tween: [ "style", "${_clickCopy2}", "height", '32px', { fromValue: '28px'}], position: 28989, duration: 337, easing: "easeInQuad" },
                { id: "eid4479", tween: [ "style", "${_clickCopy2}", "height", '28px', { fromValue: '32px'}], position: 32793, duration: 250, easing: "easeInQuad" },
                { id: "eid4480", tween: [ "style", "${_clickCopy2}", "height", '32px', { fromValue: '28px'}], position: 33043, duration: 337, easing: "easeInQuad" },
                { id: "eid5216", tween: [ "style", "${_clickCopy2}", "height", '28px', { fromValue: '32px'}], position: 36745, duration: 250, easing: "easeInQuad" },
                { id: "eid5217", tween: [ "style", "${_clickCopy2}", "height", '32px', { fromValue: '28px'}], position: 36995, duration: 337, easing: "easeInQuad" },
                { id: "eid1891", tween: [ "style", "${_top-bar-bg3}", "top", '0px', { fromValue: '-30px'}], position: 7750, duration: 250, easing: "easeInSine" },
                { id: "eid1888", tween: [ "style", "${_top-bar-bg3}", "left", '0px', { fromValue: '0px'}], position: 7750, duration: 0, easing: "easeInSine" },
                { id: "eid5915", tween: [ "style", "${_icon-close}", "left", '376px', { fromValue: '376px'}], position: 8250, duration: 0, easing: "easeInSine" },
                { id: "eid2243", tween: [ "style", "${_icon-refresh2}", "opacity", '1', { fromValue: '0.000000'}], position: 8250, duration: 750, easing: "easeInSine" },
                { id: "eid4740", tween: [ "style", "${_icon-refresh2}", "opacity", '0', { fromValue: '1'}], position: 26000, duration: 337, easing: "easeInQuad" },
                { id: "eid5803", tween: [ "style", "${_icon-refresh2}", "opacity", '1', { fromValue: '0'}], position: 36995, duration: 423, easing: "easeInOutSine" },
                { id: "eid4291", tween: [ "transform", "${_single-page-1-img-3}", "scaleX", '1', { fromValue: '1'}], position: 26600, duration: 0, easing: "easeInOutSine" },
                { id: "eid782", tween: [ "style", "${_cover-page}", "opacity", '0', { fromValue: '1'}], position: 4500, duration: 750, easing: "easeOutQuad" },
                { id: "eid6588", tween: [ "style", "${_cover-page}", "opacity", '1', { fromValue: '0'}], position: 41500, duration: 1000, easing: "easeInQuad" },
                { id: "eid1120", tween: [ "style", "${_cover-page}", "left", '-200px', { fromValue: '200px'}], position: 3750, duration: 1250, easing: "easeOutQuad" },
                { id: "eid2982", tween: [ "style", "${_cover-page}", "left", '-35px', { fromValue: '-200px'}], position: 17092, duration: 750, easing: "easeOutQuad" },
                { id: "eid3461", tween: [ "style", "${_cover-page}", "left", '-199px', { fromValue: '-35px'}], position: 19537, duration: 963, easing: "easeInQuad" },
                { id: "eid6587", tween: [ "style", "${_cover-page}", "left", '201px', { fromValue: '-199px'}], position: 41500, duration: 1000, easing: "easeInQuad" },
                { id: "eid4288", tween: [ "transform", "${_single-page-1-img-3}", "scaleY", '1', { fromValue: '1'}], position: 26600, duration: 0, easing: "easeInOutSine" },
                { id: "eid4477", tween: [ "style", "${_footer-page-flip}", "left", '365px', { fromValue: '365px'}], position: 30750, duration: 0, easing: "easeInQuad" },
                { id: "eid4585", tween: [ "style", "${_footer-page-flip-back}", "opacity", '1', { fromValue: '0'}], position: 33043, duration: 243, easing: "easeInQuad" },
                { id: "eid4307", tween: [ "style", "${_single-page-1-img-2}", "opacity", '0.5', { fromValue: '0'}], position: 26000, duration: 500, easing: "easeInOutSine" },
                { id: "eid4358", tween: [ "style", "${_single-page-1-img-2}", "opacity", '1', { fromValue: '0.5'}], position: 28989, duration: 337, easing: "easeInQuad" },
                { id: "eid2984", tween: [ "style", "${_main-screen}", "left", '165px', { fromValue: '0px'}], position: 17092, duration: 750, easing: "easeOutQuad" },
                { id: "eid3462", tween: [ "style", "${_main-screen}", "left", '1px', { fromValue: '165px'}], position: 19537, duration: 963, easing: "easeInQuad" },
                { id: "eid2045", tween: [ "style", "${_bg}", "left", '200px', { fromValue: '200px'}], position: 0, duration: 0, easing: "easeInSine" },
                { id: "eid2958", tween: [ "style", "${_clickCopy2}", "width", '28px', { fromValue: '32px'}], position: 16663, duration: 250, easing: "easeInQuad" },
                { id: "eid2960", tween: [ "style", "${_clickCopy2}", "width", '32px', { fromValue: '28px'}], position: 16913, duration: 337, easing: "easeInQuad" },
                { id: "eid3397", tween: [ "style", "${_clickCopy2}", "width", '28px', { fromValue: '32px'}], position: 19108, duration: 250, easing: "easeInQuad" },
                { id: "eid3398", tween: [ "style", "${_clickCopy2}", "width", '32px', { fromValue: '28px'}], position: 19358, duration: 337, easing: "easeInQuad" },
                { id: "eid3941", tween: [ "style", "${_clickCopy2}", "width", '28px', { fromValue: '32px'}], position: 24608, duration: 250, easing: "easeInQuad" },
                { id: "eid3942", tween: [ "style", "${_clickCopy2}", "width", '32px', { fromValue: '28px'}], position: 24858, duration: 337, easing: "easeInQuad" },
                { id: "eid4355", tween: [ "style", "${_clickCopy2}", "width", '28px', { fromValue: '32px'}], position: 28739, duration: 250, easing: "easeInQuad" },
                { id: "eid4356", tween: [ "style", "${_clickCopy2}", "width", '32px', { fromValue: '28px'}], position: 28989, duration: 337, easing: "easeInQuad" },
                { id: "eid4483", tween: [ "style", "${_clickCopy2}", "width", '28px', { fromValue: '32px'}], position: 32793, duration: 250, easing: "easeInQuad" },
                { id: "eid4484", tween: [ "style", "${_clickCopy2}", "width", '32px', { fromValue: '28px'}], position: 33043, duration: 337, easing: "easeInQuad" },
                { id: "eid5221", tween: [ "style", "${_clickCopy2}", "width", '28px', { fromValue: '32px'}], position: 36745, duration: 250, easing: "easeInQuad" },
                { id: "eid5222", tween: [ "style", "${_clickCopy2}", "width", '32px', { fromValue: '28px'}], position: 36995, duration: 337, easing: "easeInQuad" },
                { id: "eid4289", tween: [ "transform", "${_single-page-1-img-42}", "scaleY", '1', { fromValue: '1'}], position: 26750, duration: 0, easing: "easeInOutSine" },
                { id: "eid2980", tween: [ "style", "${_sidebar2}", "left", '199px', { fromValue: '34px'}], position: 17092, duration: 750, easing: "easeOutQuad" },
                { id: "eid3460", tween: [ "style", "${_sidebar2}", "left", '35px', { fromValue: '199px'}], position: 19537, duration: 963, easing: "easeInQuad" },
                { id: "eid4602", tween: [ "style", "${_footer-icon2}", "top", '513px', { fromValue: '513px'}], position: 33043, duration: 0, easing: "easeInQuad" },
                { id: "eid4273", tween: [ "style", "${_page-1}", "opacity", '1', { fromValue: '0.000000'}], position: 24000, duration: 500, easing: "easeInOutSine" },
                { id: "eid4619", tween: [ "style", "${_page-1}", "opacity", '0', { fromValue: '1'}], position: 33043, duration: 545, easing: "easeInQuad" }            ]
        }
    }
},
"asddsa": {
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
                    id: 'app',
                    type: 'rect',
                    rect: ['-124px', '-14px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'animation-frame2',
                    type: 'image',
                    rect: ['78px', '16px', '705px', '731px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/animation-frame2.png', '0px', '0px']
                },
                {
                    rect: ['195px', '181px', '35px', '36px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'clickCopy2',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(255,255,255,0.97)']
                },
                {
                    type: 'rect',
                    id: 'Rectangle',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['78px', '16px', '60px', '731px', 'auto', 'auto'],
                    fill: ['rgba(255,255,255,1.00)']
                },
                {
                    type: 'rect',
                    id: 'RectangleCopy',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['723px', '16px', '60px', '731px', 'auto', 'auto'],
                    fill: ['rgba(255,255,255,1.00)']
                }
            ],
            symbolInstances: [
            {
                id: 'app',
                symbolName: 'app'
            }            ]
        },
    states: {
        "Base State": {
            "${_RectangleCopy}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "height", '731px'],
                ["style", "top", '16px'],
                ["style", "left", '723px'],
                ["style", "width", '60px']
            ],
            "${_app}": [
                ["style", "top", '86px'],
                ["style", "left", '31px']
            ],
            "${symbolSelector}": [
                ["style", "height", '782px'],
                ["style", "width", '1031px']
            ],
            "${_Rectangle}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "height", '731px'],
                ["style", "top", '16px'],
                ["style", "left", '78px'],
                ["style", "width", '60px']
            ],
            "${_clickCopy2}": [
                ["color", "background-color", 'rgba(187,187,187,0.78)'],
                ["transform", "rotateZ", '0deg'],
                ["transform", "scaleX", '1.1'],
                ["style", "opacity", '0'],
                ["style", "left", '646px'],
                ["style", "width", '32px'],
                ["style", "top", '49px'],
                ["transform", "scaleY", '1.1'],
                ["style", "height", '32px'],
                ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_animation-frame2}": [
                ["style", "height", '731px'],
                ["style", "top", '16px'],
                ["style", "left", '78px'],
                ["style", "width", '705px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 40559,
            autoPlay: true,
            timeline: [
                { id: "eid6507", tween: [ "style", "${_clickCopy2}", "opacity", '0.85', { fromValue: '0'}], position: 39614, duration: 305, easing: "easeInQuad" },
                { id: "eid6508", tween: [ "style", "${_clickCopy2}", "opacity", '0', { fromValue: '0.8500000238418579'}], position: 40400, duration: 158, easing: "easeInQuad" },
                { id: "eid6139", tween: [ "style", "${_app}", "top", '86px', { fromValue: '86px'}], position: 9750, duration: 0, easing: "easeInSine" },
                { id: "eid6212", tween: [ "style", "${_app}", "left", '31px', { fromValue: '31px'}], position: 9750, duration: 0, easing: "easeInSine" },
                { id: "eid6487", tween: [ "style", "${_clickCopy2}", "height", '28px', { fromValue: '32px'}], position: 39972, duration: 250, easing: "easeInQuad" },
                { id: "eid6488", tween: [ "style", "${_clickCopy2}", "height", '32px', { fromValue: '28px'}], position: 40222, duration: 337, easing: "easeInQuad" },
                { id: "eid6535", tween: [ "style", "${_clickCopy2}", "top", '662px', { fromValue: '49px'}], position: 39019, duration: 595, easing: "easeInQuad" },
                { id: "eid6534", tween: [ "style", "${_clickCopy2}", "left", '425px', { fromValue: '646px'}], position: 39019, duration: 595, easing: "easeInQuad" },
                { id: "eid6750", tween: [ "color", "${_clickCopy2}", "background-color", 'rgba(187,187,187,0.78)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(187,187,187,0.78)'}], position: 40222, duration: 0, easing: "easeInQuad" },
                { id: "eid6532", tween: [ "style", "${_clickCopy2}", "width", '28px', { fromValue: '32px'}], position: 39972, duration: 250, easing: "easeInQuad" },
                { id: "eid6533", tween: [ "style", "${_clickCopy2}", "width", '32px', { fromValue: '28px'}], position: 40222, duration: 337, easing: "easeInQuad" }            ]
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
})(jQuery, AdobeEdge, "juxtapoz");
