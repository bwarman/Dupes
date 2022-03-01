(function(thisObj) {

    // Any code you write here will execute before the panel is built.

    var xMove, yMove, zMove, Rot, Scale, dupes = 0;
    
    buildUI(thisObj); // Calling the function to build the panel
    

    function buildUI(thisObj) {
    
    var windowName = "Duplicator";
    
      var DuplicatorWin = (thisObj instanceof Panel) ? thisObj : new Window("window", "Responsive UI", windowName, undefined, {
              resizeable: true
         });
    
          // Write any UI code here. Note: myPanel is your window panel object. If you add groups, buttons, or other UI objects make sure you use myPanel as their parent object, especially if you are using the only ScriptUI panel builder.
         
        /*
        Code for Import https://scriptui.joonas.me — (Triple click to select): 
        {"activeId":0,"items":{"item-0":{"id":0,"type":"Dialog","parentId":false,"style":{"enabled":true,"varName":"Duplicator","windowType":"Dialog","creationProps":{"su1PanelCoordinates":false,"maximizeButton":true,"minimizeButton":true,"independent":true,"closeButton":true,"borderless":false,"resizeable":true},"text":"Duplicator","preferredSize":[0,0],"margins":16,"orientation":"column","spacing":10,"alignChildren":["center","top"]}},"item-1":{"id":1,"type":"Panel","parentId":0,"style":{"enabled":true,"varName":null,"creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Duplicates","preferredSize":[0,0],"margins":10,"orientation":"row","spacing":10,"alignChildren":["center","center"],"alignment":null}},"item-2":{"id":2,"type":"EditText","parentId":1,"style":{"enabled":true,"varName":"numDupes","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"0","justify":"center","preferredSize":[35,0],"alignment":null,"helpTip":null}},"item-3":{"id":3,"type":"Group","parentId":0,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"column","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-4":{"id":4,"type":"Panel","parentId":3,"style":{"enabled":true,"varName":null,"creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Position","preferredSize":[0,0],"margins":10,"orientation":"row","spacing":10,"alignChildren":["left","top"],"alignment":null}},"item-5":{"id":5,"type":"EditText","parentId":4,"style":{"enabled":true,"varName":"posX","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"0","justify":"left","preferredSize":[35,0],"alignment":null,"helpTip":null}},"item-6":{"id":6,"type":"StaticText","parentId":4,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"X","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-7":{"id":7,"type":"StaticText","parentId":4,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Y","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-8":{"id":8,"type":"EditText","parentId":4,"style":{"enabled":true,"varName":"posY","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"0","justify":"left","preferredSize":[35,0],"alignment":null,"helpTip":null}},"item-9":{"id":9,"type":"StaticText","parentId":4,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Z","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-10":{"id":10,"type":"EditText","parentId":4,"style":{"enabled":true,"varName":"posZ","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"0","justify":"left","preferredSize":[35,0],"alignment":null,"helpTip":null}},"item-11":{"id":11,"type":"Panel","parentId":17,"style":{"enabled":true,"varName":null,"creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Rotation","preferredSize":[0,0],"margins":10,"orientation":"row","spacing":10,"alignChildren":["left","top"],"alignment":null}},"item-12":{"id":12,"type":"StaticText","parentId":11,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Degrees","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-13":{"id":13,"type":"EditText","parentId":11,"style":{"enabled":true,"varName":"rot","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"0","justify":"left","preferredSize":[35,0],"alignment":null,"helpTip":null}},"item-14":{"id":14,"type":"Panel","parentId":17,"style":{"enabled":true,"varName":null,"creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Scale","preferredSize":[0,0],"margins":10,"orientation":"row","spacing":10,"alignChildren":["left","top"],"alignment":null}},"item-15":{"id":15,"type":"StaticText","parentId":14,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"%","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-16":{"id":16,"type":"EditText","parentId":14,"style":{"enabled":true,"varName":"scale","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"0","justify":"left","preferredSize":[35,0],"alignment":null,"helpTip":null}},"item-17":{"id":17,"type":"Group","parentId":3,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-18":{"id":18,"type":"Group","parentId":0,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["center","center"],"alignment":null}},"item-19":{"id":19,"type":"Button","parentId":18,"style":{"enabled":true,"varName":"myButton","text":"Duplicate","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}}},"order":[0,1,2,3,4,6,5,7,8,9,10,17,11,12,13,14,15,16,18,19],"settings":{"importJSON":true,"indentSize":false,"cepExport":false,"includeCSSJS":true,"showDialog":true,"functionWrapper":false,"afterEffectsDockable":false,"itemReferenceList":"None"}}
        */ 

        // DUPLICATOR

        // PANEL1
        // ======
        var panel1 = DuplicatorWin.add("panel", undefined, undefined, {name: "panel1"}); 
        panel1.text = "Duplicates"; 
        panel1.orientation = "column"; 
        panel1.alignChildren = ["fill","fill"]; 
        panel1.spacing = 10; 
        panel1.margins = 10;

        var numDupes = panel1.add('edittext {justify: "center", properties: {name: "numDupes"}}'); 
        numDupes.text = "0"; 
        numDupes.preferredSize.width = 100 ; 
        //Parent to Layer Checkbox
        var parentLayer = panel1.add("checkbox", undefined, undefined, {name: "parentLayer"}); 
        parentLayer.text = "Parent to Selected"; 
        //Parent to Null Checkbox
        //var parentNull = panel1.add("checkbox", undefined, undefined, {name: "parentNull"}); 
        //parentNull.text = "Parent to Null"; 

        // GROUP1
        // ======
        var group1 = DuplicatorWin.add("group", undefined, {name: "group1"}); 
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
        var group3 = DuplicatorWin.add("group", undefined, {name: "group3"}); 
        group3.orientation = "row"; 
        group3.alignChildren = ["center","center"]; 
        group3.spacing = 10; 
        group3.margins = 0; 

        var myButton = group3.add("button", undefined, undefined, {name: "myButton"}); 
        myButton.text = "Duplicate"; 
        myButton.justify = "left"; 

    //End of UI
         DuplicatorWin.onResizing = DuplicatorWin.onResize = function() {
            this.layout.resize();
         };
         if (DuplicatorWin instanceof Window) {
            DuplicatorWin.center();
            DuplicatorWin.show();
         } else {
            DuplicatorWin.layout.layout(true);
            DuplicatorWin.layout.resize();
         }   
// Click function
myButton.onClick = function(){
    app.beginUndoGroup("Dupes");
    //get length of array of selected layers
    var layersSelected = app.project.activeItem.selectedLayers.length;
    if(layersSelected > 0){
        for(layers=0; layers<layersSelected; layers++){
            //get selected layer in loop
            var selected = app.project.activeItem.selectedLayers[layers];
            //get selected layer index in loop
            var selectedIndex = app.project.activeItem.selectedLayers[layers].index;
            if(posX.text==""){
                xMove = 0;
            }else{
                xMove = parseFloat(posX.text);
            }
            if(posY.text==""){
                yMove = 0;
            }else{
                yMove = parseFloat(posY.text);
            }
            if(posZ.text==""){
                zMove = 0;
            }else{
                zMove = parseFloat(posZ.text);
            }
            if(rot.text==""){
                Rot = 0;
            }else{
                Rot = parseFloat(rot.text);
            }
            if(scale.text==""){
                Scale = 0;
            }else{
                Scale = parseFloat(scale.text);
            }
            if(numDupes.text==""){
                dupes = 0;
            }else{
                dupes = parseFloat(numDupes.text);
            }
            dupes = parseFloat(numDupes.text);
            var newLayer = null;
            for(i=1; i<=dupes; i++){
                newLayer = selected.duplicate();
                if(parentLayer.value == true){
                    newLayer.parent = selected;
                }
            //Move layer to before selected layer
                newLayer.moveBefore(selected);
                loopKeys(newLayer, i);
            }
            //Move selected layer to the top of the duplicates
            app.project.activeItem.selectedLayers[layers].moveBefore(app.project.activeItem.layer(selectedIndex));
            
        }
    
    }else{
        alert("Please select layer/layers to duplicate!");
    }
    app.endUndoGroup();
}

    }
    
// Write your helper functions here
function loopKeys(newLayer, i){
    //Position Modifications
    //Check if dimensions are separated
    if(newLayer.position.dimensionsSeparated){
        //X dimensions
        if(newLayer.position.getSeparationFollower(0).numKeys <= 0){
            var origXPos = newLayer.position.getSeparationFollower(0).value;
            newLayer.position.getSeparationFollower(0).setValue(origXPos + (xMove*i));
         }else{
             for(a=1; a<=newLayer.position.getSeparationFollower(0).numKeys; a++){
                 var origXPos = newLayer.position.getSeparationFollower(0).keyValue(a);
                 newLayer.position.getSeparationFollower(0).setValueAtKey(a, origXPos+(xMove*i));        
             }
         }
         //Y dimensions
         if(newLayer.position.getSeparationFollower(1).numKeys <= 0){
            var origYPos = newLayer.position.getSeparationFollower(1).value;
            newLayer.position.getSeparationFollower(1).setValue(origYPos + (yMove*i));
         }else{
             for(a=1; a<=newLayer.position.getSeparationFollower(1).numKeys; a++){
                 var origYPos = newLayer.position.getSeparationFollower(1).keyValue(a);
                 newLayer.position.getSeparationFollower(1).setValueAtKey(a, origYPos+(yMove*i));        
             }
         }
        //Z dimensions
        if(newLayer.threeDLayer){
            if(newLayer.position.getSeparationFollower(2).numKeys <= 0){
                var origZPos = newLayer.position.getSeparationFollower(2).value;
                newLayer.position.getSeparationFollower(2).setValue(origZPos + (zMove*i));
            }else{
                for(a=1; a<=newLayer.position.getSeparationFollower(2).numKeys; a++){
                    var origYPos = newLayer.position.getSeparationFollower(2).keyValue(a);
                    newLayer.position.getSeparationFollower(2).setValueAtKey(a, origYPos+(yMove*i));         
                }
            }
        }
    }
    else if(newLayer.position.numKeys <= 0){
        var origPos = newLayer.position.value;
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

    //Rotation Modifications
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
    
})(this);