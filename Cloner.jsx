var myWin = new Window("palette", "Duplicate and Offset", undefined); 

var groupOne = myWin.add("group", undefined, "Position"); 
    groupOne.add("staticText", [0, 0, 50, 10], "Position");
    var posX = groupOne.add("editText", [0, 0, 30, 20], "0");
    var posY = groupOne.add("editText", [0, 0, 30, 20], "0");
    var posZ = groupOne.add("editText", [0,0,30,20], "0");
var groupTwo = myWin.add("group", undefined, "Rotation");
    groupTwo.add("staticText", [0, 0, 50, 10], "Rotation"); 
    var rot = groupTwo.add("editText", [0, 0,30,20], "0");
var groupThree = myWin.add("group", undefined, "Scale");
    groupThree.add("staticText", [0,0, 50, 10], "Scale"); 
    var scale = groupThree.add("editText", [0,0,30,20], "0");
var groupFour = myWin.add("group", undefined, "Duplicates");
    groupFour.add("staticText", [0,0, 50, 10], "Duplicates"); 
    var numDupes = groupFour.add("editText", [0,0,30,20], "0");
    var parentLayer = groupFour.add("checkbox", undefined, "Parent to Selected?");
    var parentNull = groupFour.add("checkbox", undefined, "Parent to Null?");
var submitGroup = myWin.add("group", undefined, "");    
    var myButton = submitGroup.add("button", undefined, "Button");

var xMove, yMove, zMove, Rot, Scale, dupes = 0;

myButton.onClick = function(){
     if(parentNull.value == true && parentLayer.value == true){
        alert("Only select one parenting option");
        return;
    }
    app.beginUndoGroup("Dupes");
    //get length of array of selected layers
    var layersSelected = app.project.activeItem.selectedLayers.length;
    //check if parented to null
    if (parentNull.value == true){
        //get selected layers and store in variable
        var theSelectedLayers = app.project.activeItem.selectedLayers;
        //add null item
        var parentNullItem = app.project.activeItem.layers.addNull();
        //deselected null item
        app.project.activeItem.selectedLayers[0].selected = false;
        //go through theSelectedLayers array and select each previously selected layer
        for(i=0; i<theSelectedLayers.length; i++){
            theSelectedLayers[i].selected = true;            
        }
    }
    if(layersSelected > 0){
        for(layers=0; layers<layersSelected; layers++){
            //get selected layer in loop
            var selected = app.project.activeItem.selectedLayers[layers];
            //get selected layer's index in loop
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
                //check if layer should be parented to duplicated layer
                if(parentLayer.value == true){
                    newLayer.parent = selected;
                }
                //check if layer shoudl be parented to null
                 if(parentNull.value == true){
                    newLayer.parent = parentNullItem;
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
myWin.center();
myWin.show();