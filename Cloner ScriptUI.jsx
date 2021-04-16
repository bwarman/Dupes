
/*
Code for Import https://scriptui.joonas.me — (Triple click to select): 
{"activeId":0,"items":{"item-0":{"id":0,"type":"Dialog","parentId":false,"style":{"enabled":true,"varName":"","windowType":"Dialog","creationProps":{"su1PanelCoordinates":false,"maximizeButton":false,"minimizeButton":false,"independent":false,"closeButton":true,"borderless":false,"resizeable":false},"text":"Duplicator","preferredSize":[0,0],"margins":16,"orientation":"column","spacing":10,"alignChildren":["center","top"]}},"item-1":{"id":1,"type":"Panel","parentId":0,"style":{"enabled":true,"varName":null,"creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Duplicates","preferredSize":[0,0],"margins":10,"orientation":"row","spacing":10,"alignChildren":["center","center"],"alignment":null}},"item-2":{"id":2,"type":"EditText","parentId":1,"style":{"enabled":true,"varName":"numDupes","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"0","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-3":{"id":3,"type":"Group","parentId":0,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"column","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-4":{"id":4,"type":"Panel","parentId":3,"style":{"enabled":true,"varName":null,"creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Position","preferredSize":[0,0],"margins":10,"orientation":"row","spacing":10,"alignChildren":["left","top"],"alignment":null}},"item-5":{"id":5,"type":"EditText","parentId":4,"style":{"enabled":true,"varName":"posX","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"0","justify":"left","preferredSize":[30,0],"alignment":null,"helpTip":null}},"item-6":{"id":6,"type":"StaticText","parentId":4,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"X","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-7":{"id":7,"type":"StaticText","parentId":4,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Y","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-8":{"id":8,"type":"EditText","parentId":4,"style":{"enabled":true,"varName":"posY","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"0","justify":"left","preferredSize":[30,0],"alignment":null,"helpTip":null}},"item-9":{"id":9,"type":"StaticText","parentId":4,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Z","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-10":{"id":10,"type":"EditText","parentId":4,"style":{"enabled":true,"varName":"posZ","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"0","justify":"left","preferredSize":[30,0],"alignment":null,"helpTip":null}},"item-11":{"id":11,"type":"Panel","parentId":17,"style":{"enabled":true,"varName":null,"creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Rotation","preferredSize":[0,0],"margins":10,"orientation":"row","spacing":10,"alignChildren":["left","top"],"alignment":null}},"item-12":{"id":12,"type":"StaticText","parentId":11,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Degrees","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-13":{"id":13,"type":"EditText","parentId":11,"style":{"enabled":true,"varName":"rot","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"0","justify":"left","preferredSize":[30,0],"alignment":null,"helpTip":null}},"item-14":{"id":14,"type":"Panel","parentId":17,"style":{"enabled":true,"varName":null,"creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Scale","preferredSize":[0,0],"margins":10,"orientation":"row","spacing":10,"alignChildren":["left","top"],"alignment":null}},"item-15":{"id":15,"type":"StaticText","parentId":14,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"%","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-16":{"id":16,"type":"EditText","parentId":14,"style":{"enabled":true,"varName":"scale","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"0","justify":"left","preferredSize":[30,0],"alignment":null,"helpTip":null}},"item-17":{"id":17,"type":"Group","parentId":3,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-18":{"id":18,"type":"Group","parentId":0,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["center","center"],"alignment":null}},"item-19":{"id":19,"type":"Button","parentId":18,"style":{"enabled":true,"varName":"myButton","text":"Duplicate","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}}},"order":[0,1,2,3,4,6,5,7,8,9,10,17,11,12,13,14,15,16,18,19],"settings":{"importJSON":true,"indentSize":false,"cepExport":false,"includeCSSJS":true,"showDialog":true,"functionWrapper":false,"afterEffectsDockable":false,"itemReferenceList":"None"}}
*/ 

// DIALOG
// ======
var dialog = new Window("dialog"); 
    dialog.text = "Duplicator"; 
    dialog.orientation = "column"; 
    dialog.alignChildren = ["center","top"]; 
    dialog.spacing = 10; 
    dialog.margins = 16; 

// PANEL1
// ======
var panel1 = dialog.add("panel", undefined, undefined, {name: "panel1"}); 
    panel1.text = "Duplicates"; 
    panel1.orientation = "row"; 
    panel1.alignChildren = ["center","center"]; 
    panel1.spacing = 10; 
    panel1.margins = 10; 

var numDupes = panel1.add('edittext {justify: "center", properties: {name: "numDupes"}}'); 
    numDupes.text = "0"; 

// GROUP1
// ======
var group1 = dialog.add("group", undefined, {name: "group1"}); 
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
    posX.preferredSize.width = 30; 

var statictext2 = panel2.add("statictext", undefined, undefined, {name: "statictext2"}); 
    statictext2.text = "Y"; 

var posY = panel2.add('edittext {properties: {name: "posY"}}'); 
    posY.text = "0"; 
    posY.preferredSize.width = 30; 

var statictext3 = panel2.add("statictext", undefined, undefined, {name: "statictext3"}); 
    statictext3.text = "Z"; 

var posZ = panel2.add('edittext {properties: {name: "posZ"}}'); 
    posZ.text = "0"; 
    posZ.preferredSize.width = 30; 

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
    rot.preferredSize.width = 30; 

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
    scale.preferredSize.width = 30; 

// GROUP3
// ======
var group3 = dialog.add("group", undefined, {name: "group3"}); 
    group3.orientation = "row"; 
    group3.alignChildren = ["center","center"]; 
    group3.spacing = 10; 
    group3.margins = 0; 

var myButton = group3.add("button", undefined, undefined, {name: "myButton"}); 
    myButton.text = "Duplicate"; 
    myButton.justify = "left"; 



//myCode

var xMove, yMove, zMove, Rot, Scale, dupes = 0;

myButton.onClick = function(){
    var selected = app.project.activeItem.selectedLayers[0];
    if(selected != null){
        xMove = parseFloat(posX.text);
        yMove = parseFloat(posY.text);
        zMove = parseFloat(posZ.text);
        Rot = parseFloat(rot.text);
        Scale = parseFloat(scale.text);
        dupes = parseFloat(numDupes.text);
        var newLayer = null;
        for(i=1; i<=dupes; i++){
            newLayer = selected.duplicate();
            var layerIndex = selected.index;
            //alert(layerIndex);
            newLayer.moveBefore(selected);
            loopKeys(newLayer);
        }
    }else{
        alert("Please Select a Layer to Duplicate");
    }
}
function loopKeys(newLayer){
    //var origRot = newLayer.rotation.value;
    //Position Modifications
    if(newLayer.position.numKeys == 0){
        alert("This is an alert!");
        var origPos = newLayer.position.value;
        //alert(origPos);
        newLayer.position.setValue([origPos[0]+(xMove*i),origPos[1]+(yMove*i), origPos[2]+(zMove*i)]);
    }else{
        for(a=1; a<=newLayer.position.numKeys; a++){
            var origPos = newLayer.position.keyValue(a);
            newLayer.position.setValueAtKey(a, [origPos[0]+(xMove*i),origPos[1]+(yMove*i), origPos[2]+(zMove*i)]);        
        }
    }
    
    //Scale Modifications
    if(Scale != 0){
        if(newLayer.scale.numKeys == 0){
            var origScale = newLayer.scale.value;
            //alert(Math.pow((.01*Scale), i));
            newLayer.scale.setValue([origScale[0] * (Math.pow((.01*Scale), i)) , origScale[1] * (Math.pow((.01*Scale), i))]);
        }
        else{
            for(b=1; b<= newLayer.scale.numKeys; b++){
                var origScale = newLayer.scale.keyValue(b);
                newScale = [origScale[0] * (Math.pow((.01*Scale), i)) , origScale[1] * (Math.pow((.01*Scale), i))];
                newLayer.scale.setValueAtKey(b, newScale);        
            }
        }
    }

    //rotation keys
    if(newLayer.rotation.numKeys == 0){
        var origRot = newLayer.rotation.value;
        newLayer.rotation.setValue(origRot + (Rot* i));
    }
    else{
        for(c=1; c<= newLayer.rotation.numKeys; c++){
            var origRot = newLayer.rotation.keyValue(c);
            newLayer.rotation.setValueAtKey(c, origRot + (Rot * i));        
        }
    }
}



dialog.show();