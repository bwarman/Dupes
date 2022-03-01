var mainWindow = new Window("palette", "Test", undefined);
mainWindow.orientation = "column";

var groupOne = mainWindow.add("group", undefined, "groupOne");
groupOne.orientation = "row";
var button = groupOne.add("button", undefined, "Select");

mainWindow.center();
mainWindow.show();

button.onClick = function(){
    var selectedLength = app.project.activeItem.selectedLayers.length;
    var FirstLayerIndex = app.project.activeItem.selectedLayers[0].index;
    alert("First Layer Index = " + FirstLayerIndex);
    app.project.activeItem.layers.addNull();
    app.project.activeItem.selectedLayers[0].selected = false;
    for(i=FirstLayerIndex+1; i<=selectedLength+FirstLayerIndex; i++){
        app.project.activeItem.layer(i).selected = true;
    }
}