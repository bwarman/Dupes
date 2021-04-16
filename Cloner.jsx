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
var submitGroup = myWin.add("group", undefined, "");    
    var myButton = submitGroup.add("button", undefined, "Button");

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
myWin.center();
myWin.show();