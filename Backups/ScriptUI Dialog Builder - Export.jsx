
/*
Code for Import https://scriptui.joonas.me — (Triple click to select): 
{"activeId":0,"items":{"item-0":{"id":0,"type":"Dialog","parentId":false,"style":{"enabled":true,"varName":"Duplicator","windowType":"Dialog","creationProps":{"su1PanelCoordinates":false,"maximizeButton":true,"minimizeButton":true,"independent":true,"closeButton":true,"borderless":false,"resizeable":true},"text":"Duplicator","preferredSize":[0,0],"margins":16,"orientation":"column","spacing":10,"alignChildren":["center","top"]}},"item-1":{"id":1,"type":"Panel","parentId":0,"style":{"enabled":true,"varName":null,"creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Duplicates","preferredSize":[0,0],"margins":10,"orientation":"row","spacing":10,"alignChildren":["center","center"],"alignment":null}},"item-2":{"id":2,"type":"EditText","parentId":1,"style":{"enabled":true,"varName":"numDupes","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"0","justify":"center","preferredSize":[35,0],"alignment":null,"helpTip":null}},"item-3":{"id":3,"type":"Group","parentId":0,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"column","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-4":{"id":4,"type":"Panel","parentId":3,"style":{"enabled":true,"varName":null,"creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Position","preferredSize":[0,0],"margins":10,"orientation":"row","spacing":10,"alignChildren":["left","top"],"alignment":null}},"item-5":{"id":5,"type":"EditText","parentId":4,"style":{"enabled":true,"varName":"posX","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"0","justify":"left","preferredSize":[35,0],"alignment":null,"helpTip":null}},"item-6":{"id":6,"type":"StaticText","parentId":4,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"X","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-7":{"id":7,"type":"StaticText","parentId":4,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Y","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-8":{"id":8,"type":"EditText","parentId":4,"style":{"enabled":true,"varName":"posY","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"0","justify":"left","preferredSize":[35,0],"alignment":null,"helpTip":null}},"item-9":{"id":9,"type":"StaticText","parentId":4,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Z","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-10":{"id":10,"type":"EditText","parentId":4,"style":{"enabled":true,"varName":"posZ","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"0","justify":"left","preferredSize":[35,0],"alignment":null,"helpTip":null}},"item-11":{"id":11,"type":"Panel","parentId":17,"style":{"enabled":true,"varName":null,"creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Rotation","preferredSize":[0,0],"margins":10,"orientation":"row","spacing":10,"alignChildren":["left","top"],"alignment":null}},"item-12":{"id":12,"type":"StaticText","parentId":11,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Degrees","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-13":{"id":13,"type":"EditText","parentId":11,"style":{"enabled":true,"varName":"rot","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"0","justify":"left","preferredSize":[35,0],"alignment":null,"helpTip":null}},"item-14":{"id":14,"type":"Panel","parentId":17,"style":{"enabled":true,"varName":null,"creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Scale","preferredSize":[0,0],"margins":10,"orientation":"row","spacing":10,"alignChildren":["left","top"],"alignment":null}},"item-15":{"id":15,"type":"StaticText","parentId":14,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"%","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-16":{"id":16,"type":"EditText","parentId":14,"style":{"enabled":true,"varName":"scale","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"0","justify":"left","preferredSize":[35,0],"alignment":null,"helpTip":null}},"item-17":{"id":17,"type":"Group","parentId":3,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-18":{"id":18,"type":"Group","parentId":0,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["center","center"],"alignment":null}},"item-19":{"id":19,"type":"Button","parentId":18,"style":{"enabled":true,"varName":"myButton","text":"Duplicate","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}}},"order":[0,1,2,3,4,6,5,7,8,9,10,17,11,12,13,14,15,16,18,19],"settings":{"importJSON":true,"indentSize":false,"cepExport":false,"includeCSSJS":true,"showDialog":true,"functionWrapper":false,"afterEffectsDockable":false,"itemReferenceList":"None"}}
*/ 

// DUPLICATOR
// ==========
var Duplicator = new Window("dialog", undefined, undefined, {maximizeButton: true, minimizeButton: true, independent: true, resizeable: true}); 
    Duplicator.text = "Duplicator"; 
    Duplicator.orientation = "column"; 
    Duplicator.alignChildren = ["center","top"]; 
    Duplicator.spacing = 10; 
    Duplicator.margins = 16; 

// PANEL1
// ======
var panel1 = Duplicator.add("panel", undefined, undefined, {name: "panel1"}); 
    panel1.text = "Duplicates"; 
    panel1.orientation = "row"; 
    panel1.alignChildren = ["center","center"]; 
    panel1.spacing = 10; 
    panel1.margins = 10; 

var numDupes = panel1.add('edittext {justify: "center", properties: {name: "numDupes"}}'); 
    numDupes.text = "0"; 
    numDupes.preferredSize.width = 35; 

// GROUP1
// ======
var group1 = Duplicator.add("group", undefined, {name: "group1"}); 
    group1.orientation = "column"; 
    group1.alignChildren = ["left","center"]; 
    group1.spacing = 10; 
    group1.margins = 0; 

// PANEL2
// ======
var panel2 = group1.add("panel", undefined, undefined, {name: "panel2"}); 
    panel2.text = "Position"; 
    panel2.orientation = "row"; 
    panel2.alignChildren = ["left","top"]; 
    panel2.spacing = 10; 
    panel2.margins = 10; 

var statictext1 = panel2.add("statictext", undefined, undefined, {name: "statictext1"}); 
    statictext1.text = "X"; 

var posX = panel2.add('edittext {properties: {name: "posX"}}'); 
    posX.text = "0"; 
    posX.preferredSize.width = 35; 

var statictext2 = panel2.add("statictext", undefined, undefined, {name: "statictext2"}); 
    statictext2.text = "Y"; 

var posY = panel2.add('edittext {properties: {name: "posY"}}'); 
    posY.text = "0"; 
    posY.preferredSize.width = 35; 

var statictext3 = panel2.add("statictext", undefined, undefined, {name: "statictext3"}); 
    statictext3.text = "Z"; 

var posZ = panel2.add('edittext {properties: {name: "posZ"}}'); 
    posZ.text = "0"; 
    posZ.preferredSize.width = 35; 

// GROUP2
// ======
var group2 = group1.add("group", undefined, {name: "group2"}); 
    group2.orientation = "row"; 
    group2.alignChildren = ["left","center"]; 
    group2.spacing = 10; 
    group2.margins = 0; 

// PANEL3
// ======
var panel3 = group2.add("panel", undefined, undefined, {name: "panel3"}); 
    panel3.text = "Rotation"; 
    panel3.orientation = "row"; 
    panel3.alignChildren = ["left","top"]; 
    panel3.spacing = 10; 
    panel3.margins = 10; 

var statictext4 = panel3.add("statictext", undefined, undefined, {name: "statictext4"}); 
    statictext4.text = "Degrees"; 

var rot = panel3.add('edittext {properties: {name: "rot"}}'); 
    rot.text = "0"; 
    rot.preferredSize.width = 35; 

// PANEL4
// ======
var panel4 = group2.add("panel", undefined, undefined, {name: "panel4"}); 
    panel4.text = "Scale"; 
    panel4.orientation = "row"; 
    panel4.alignChildren = ["left","top"]; 
    panel4.spacing = 10; 
    panel4.margins = 10; 

var statictext5 = panel4.add("statictext", undefined, undefined, {name: "statictext5"}); 
    statictext5.text = "%"; 

var scale = panel4.add('edittext {properties: {name: "scale"}}'); 
    scale.text = "0"; 
    scale.preferredSize.width = 35; 

// GROUP3
// ======
var group3 = Duplicator.add("group", undefined, {name: "group3"}); 
    group3.orientation = "row"; 
    group3.alignChildren = ["center","center"]; 
    group3.spacing = 10; 
    group3.margins = 0; 

var myButton = group3.add("button", undefined, undefined, {name: "myButton"}); 
    myButton.text = "Duplicate"; 
    myButton.justify = "left"; 

Duplicator.show();

