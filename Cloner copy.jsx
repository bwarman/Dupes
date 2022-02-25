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
var submitGroup = myWin.add("group", undefined, "");    
    var myButton = submitGroup.add("button", undefined, "Button");

var xMove, yMove, zMove, Rot, Scale, dupes = 0;

myButton.onClick = function(){
    app.beginUndoGroup("Dupes");
    var selectedLayers = app.project.activeItem.selectedLayers.length;
    if(selectedLayers > 0){
        for(layers=0; layers<selectedLayers; layers++){
            var selected = app.project.activeItem.selectedLayers[layers];
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
                alert("duping " + dupes + " times.");
                newLayer = selected.duplicate();
                if(parentLayer.value == true){
                    newLayer.parent = selected;
                }
                var layerIndex = selected.index;
                newLayer.moveBefore(selected);
                loopKeys(newLayer);
            }
            
        }
    }else{
        alert("Please select a layer!");
    }
    app.endUndoGroup();
}
function loopKeys(newLayer){
    //var origRot = newLayer.rotation.value;
    //Position Modifications

    //Check if dimensions are separated
    if(newLayer.position.dimensionsSeparated){
        alert("Dimensions are separated!");
        //X dimensions
        if(newLayer.position.getSeparationFollower(0).numKeys <= 0){
            var origXPos = newLayer.position.getSeparationFollower(0).value;
            alert("X position is: " + origXPos);
            newLayer.position.getSeparationFollower(0).setValue(origXPos + xMove);
         }else{
             for(a=1; a<=newLayer.position.getSeparationFollower(0).numKeys; a++){
                 var origXPos = newLayer.position.getSeparationFollower(0).keyValue(a);
                 newLayer.position.getSeparationFollower(0).setValueAtKey(a, origXPos+(xMove*i));        
             }
         }
         //Y dimensions
         if(newLayer.position.getSeparationFollower(1).numKeys <= 0){
            alert("Y Loop");
            var origXPos = newLayer.position.getSeparationFollower(1).value;
            alert("Y position is: " + origYPos);
            newLayer.position.getSeparationFollower(1).setValue(origYPos + yMove);
         }else{
             for(a=1; a<=newLayer.position.getSeparationFollower(1).numKeys; a++){
                 var origYPos = newLayer.position.getSeparationFollower(1).keyValue(a);
                 newLayer.position.getSeparationFollower(1).setValueAtKey(a, origYPos+(yMove*i));        
             }
         }
        //Z dimensions
        if(newLayer.threeDLayer){
            if(newLayer.position.getSeparationFollower(2).numKeys <= 0){
                alert("Z Loop");
                var origZPos = newLayer.position.getSeparationFollower(2).value;
                alert("Z position is: " + origZPos);
                newLayer.position.getSeparationFollower(2).setValue(origZPos + zMove);
            }else{
                for(a=1; a<=newLayer.position.getSeparationFollower(2).numKeys; a++){
                    var origYPos = newLayer.position.getSeparationFollower(2).keyValue(a);
                    newLayer.position.getSeparationFollower(2).setValueAtKey(a, origYPos+(yMove*i));         
                }
            }
        }
    }
    else if(newLayer.position.numKeys <= 0){
       // alert("Numkeys = " + newLayer.position.numKeys);
        var origPos = newLayer.position.value;
        alert(origPos);
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
    alert("End of loop function!");
}
myWin.center();
myWin.show();