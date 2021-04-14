{
    function myScript(thisObj){
       function myScript_buildUI(thisObj){
          var palette = (thisObj instanceof Panel) ? thisObj : new Window("palette", "Dockable Script", undefined, {resizeable:true, closeButton: true});
 

// PALETTE
// =======
    palette.text = "Organize tool"; 
    palette.orientation = "column"; 
    palette.alignChildren = ["center","top"]; 
    palette.spacing = 10; 
    palette.margins = 16; 

var CrochetOpen = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%0A%00%00%00%12%08%06%00%00%00b%C2%B7OK%00%00%000IDAT(%C2%91c%C3%AC%C3%AA%C3%AA%C3%BA%C3%8F%40%04%60%22F%11%08%C2%B0%20%C2%B1%191d%C2%91%00%C3%91%26%C2%8E*%C3%84%0B%C2%86%C2%95B%C3%A4%C3%94%C2%837%5D%12g%22%03%03%03%00%06%C2%A2%03%C3%85kZ%C2%BF%1A%00%00%00%00IEND%C2%AEB%60%C2%82"; 
var CrochetClose = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%0A%00%00%00%12%08%06%00%00%00b%C2%B7OK%00%00%00EIDAT(%C2%91c%C3%AC%C3%AA%C3%AA%C3%BA%C3%8F%40%04%60%22F%11%08%C2%B00000b%C2%88%C2%A2%02%C2%B0%C2%8DD%C2%9BH%7D%C2%85%C2%8C%C3%BF%C3%BF%C3%A3%C3%B7tww%C3%B7%40%C2%BB%C2%91%C3%B8%00%C3%AF%C3%AE%C3%AE%C3%86%10%C3%84%06%C2%86%C2%84g%60%C2%A9%C2%83%3A%26200%00%00%C2%B2%1B%0C%03a%5C%C3%A2%0F%00%00%00%00IEND%C2%AEB%60%C2%82"; 




// PROJECT PANEL
// =============
var PrjPanel = palette.add("panel", undefined, undefined, {name: "panel1"}); 
    PrjPanel.text = "Project pannel"; 
    PrjPanel.orientation = "column"; 
    PrjPanel.alignChildren = ["center","top"]; 
    PrjPanel.spacing = 10; 
    PrjPanel.margins = 15; 
    PrjPanel.alignment = ["fill","top"]; 



var ReduceButton = PrjPanel.add("button", undefined, undefined, {name: "button1"}); 
    ReduceButton.text = "Reduce"; 
    ReduceButton.preferredSize.width = 160; 

GroupOrga = PrjPanel.add("group", undefined, {name: "group1"}); 
GroupOrga.orientation = "row"; 
GroupOrga.spacing = 10; 

var OrganizeButton = GroupOrga.add("button", undefined, undefined, {name: "button2"}); 
    OrganizeButton.text = "Organize"; 
    OrganizeButton.preferredSize.width = 115; 

    var help = GroupOrga.add("button", undefined, undefined, {name: "help"}); 
    help.text = "?"; 
    help.preferredSize.width = 35; 
    help.justify = "right"; 
    help.alignment = ["right","top"]; 

// COMPOSITION PANEL
// =================
var CompPanel = palette.add("panel", undefined, undefined, {name: "panel2"}); 
    CompPanel.text = "Composition"; 
    CompPanel.orientation = "column"; 
    CompPanel.alignChildren = ["center","top"]; 
    CompPanel.spacing = 10; 
    CompPanel.margins = 10; 
    CompPanel.alignment = ["fill","top"]; 
    CompPanel.enabled = true;


// GROUP TRIM KEYFRAME
// ===================
var GrpTrimKeyframe = CompPanel.add("group", undefined, {name: "GrpTrimKeyframe"}); 
GrpTrimKeyframe.orientation = "row"; 
GrpTrimKeyframe.alignChildren = ["left","center"]; 
GrpTrimKeyframe.spacing = 10; 
GrpTrimKeyframe.margins = 0; 

var IcoTrimStartKeyframe = GrpTrimKeyframe.add("iconbutton", undefined, File.decode(CrochetOpen), {name: "iconbutton7", style: "toolbutton"}); 

var ButtonTrimKeyframe = GrpTrimKeyframe.add("button", undefined, undefined, {name: "button6"}); 
    ButtonTrimKeyframe.text = "Trim KeyFrames"; 
    ButtonTrimKeyframe.preferredSize.width = 110; 

var IcoTrimEndKeyframe = GrpTrimKeyframe.add("iconbutton", undefined, File.decode(CrochetClose), {name: "iconbutton8", style: "toolbutton"}); 


// GROUP TRIM OPACITY
// ==================
var GrpTrimOpacity = CompPanel.add("group", undefined, {name: "group1"}); 
    GrpTrimOpacity.orientation = "row"; 
    GrpTrimOpacity.alignChildren = ["left","center"]; 
    GrpTrimOpacity.spacing = 10; 
    GrpTrimOpacity.margins = 0; 

var IcoTrimStartOpacity = GrpTrimOpacity.add("iconbutton", undefined, File.decode(CrochetOpen), {name: "IcoStartOpacity", style: "toolbutton"}); 

var ButtonTrimOpacity = GrpTrimOpacity.add("button", undefined, undefined, {name: "button3"}); 
    ButtonTrimOpacity.text = "Trim Opacity"; 
    ButtonTrimOpacity.preferredSize.width = 110; 

var IcoTrimEndOpacity = GrpTrimOpacity.add("iconbutton", undefined, File.decode(CrochetClose), {name: "iconbutton2", style: "toolbutton"}); 

// GROUP TRIM SCALE
// ================
var GrpTrimScale = CompPanel.add("group", undefined, {name: "GrpTrimScale"}); 
    GrpTrimScale.orientation = "row"; 
    GrpTrimScale.alignChildren = ["left","center"]; 
    GrpTrimScale.spacing = 10; 
    GrpTrimScale.margins = 0; 

var IcoTrimStartScale = GrpTrimScale.add("iconbutton", undefined, File.decode(CrochetOpen), {name: "iconbutton3", style: "toolbutton"}); 

var ButtonTrimScale = GrpTrimScale.add("button", undefined, undefined, {name: "button4"}); 
    ButtonTrimScale.text = "Trim Scale"; 
    ButtonTrimScale.preferredSize.width = 110; 

var IcoTrimEndScale = GrpTrimScale.add("iconbutton", undefined, File.decode(CrochetClose), {name: "iconbutton4", style: "toolbutton"}); 

// GROUP TRIM ALPHA
// ================
var GrpTrimAlpha = CompPanel.add("group", undefined, {name: "GrpTrimAlpha"}); 
    GrpTrimAlpha.orientation = "row"; 
    GrpTrimAlpha.alignChildren = ["left","center"]; 
    GrpTrimAlpha.spacing = 10; 
    GrpTrimAlpha.margins = 0; 

var IcoTrimStartAlpha = GrpTrimAlpha.add("iconbutton", undefined, File.decode(CrochetOpen), {name: "iconbutton5", style: "toolbutton"}); 

var ButtonTrimAlpha = GrpTrimAlpha.add("button", undefined, undefined, {name: "button5"}); 
    ButtonTrimAlpha.text = "Trim alpha"; 
    ButtonTrimAlpha.preferredSize.width = 110; 

var IcoTrimEndAlpha = GrpTrimAlpha.add("iconbutton", undefined, File.decode(CrochetClose), {name: "iconbutton6", style: "toolbutton"}); 


// DELETE UNUSED LAYER BUTTON
// ==========================

var ButtonDeleteLayer = palette.add("button", undefined, undefined, {name: "ButtonDeleteLayer"}); 
    ButtonDeleteLayer.text = "Deleted unused layers"; 
    ButtonDeleteLayer.preferredSize.width = 160; 

    var ButtonAudioAtBottom = palette.add("button", undefined, undefined, {name: "ButtonAudioAtBottom"}); 
    ButtonAudioAtBottom.text = "Audio at the bottom"; 
    ButtonAudioAtBottom.preferredSize.width = 160; 



// TABBEDPANEL
// ===========
helpText = "01_Media\n" + 
"   01_Video\n" + 
"    --> Media that are video without alpha Channel,\n" + 
"       and that are not images sequences\n" + 
"    02_ Audio\n" + 
"        01_Music \n" + 
"        --> Audio with ARTLIST as a suffix\n" + 
"        02_VO\n" + 
"        --> Audio with VO / TASCAM as a prefix\n" + 
"        03_SFX\n" + 
"    03_Statics\n" + 
"        01_Logos/Flags\n" + 
"        --> Statics with LOGO / FLAG as a prefix\n" + 
"        02_App Screen\n" + 
"        --> Statics with APP as a prefix\n" + 
"        03_Other\n" + 
"        Solids\n" + 
"    04_Motion\n" + 
"    --> Media that are video with alpha Channel,\n" + 
"       or that are images sequences\n" + 
"\n" + 
"02_Compositions\n" + 
"    01_Working Comps\n" + 
"    --> PreComps that begin with :\n" + 
"    VO / AUDIO / LOGO / FLAG  / CTA /\n" + 
"    COPY / APP / SCREEN / COLOR\n" +  
"    02_Precomps\n" + 
"    --> PreComps with no key name\n" + 
"    z_achives\n" + 
"\n" + 
"03_Deliverables\n" + 
"    01_Display\n" + 
"    --> Master Comps of 6s\n" + 
"        Format : 1920x1080 / 1080x1920 / 1080/1080\n" + 
"    02_PaidSocial\n" + 
"    --> Master Comps of more than 7s\n" + 
"        Format : 1080x1920 / 1080/1080\n" + 
"    03_Mobile\n" + 
"    --> Master Comps of any duration\n" + 
"        Format : 1024x768 / 768x1024 / 320x240\n" + 
"       / 640x480 / 320x480\n" + 
"    04_Gif\n" + 
"    --> Master comps with a frame rate \n" + 
"       inferior of 23fbs\n";





///// What's happen after a click ///

    ButtonTrimKeyframe.onClick = function () {
        TrimKey ()
    }

    IcoTrimStartKeyframe.onClick = function () {
        TrimKeyStart ()
    }

    IcoTrimEndKeyframe.onClick = function () {
        TrimKeyEnd ()
    }



    IcoTrimStartOpacity.onClick = function () {
        TrimOpacityStart ()
    }

    ButtonTrimOpacity.onClick = function () {
        TrimOpacity ()
    }

    IcoTrimEndOpacity.onClick = function () {
        TrimOpacityEnd ()
    }


    ButtonTrimScale.onClick = function () {
        TrimScale ()
    }

   IcoTrimStartScale.onClick = function () {
        TrimScaleStart ()
    }

    IcoTrimEndScale.onClick = function () {
        TrimScaleEnd ()
    }


    ButtonTrimAlpha.onClick = function () {
        TrimAlpha ()
    }

    IcoTrimStartAlpha.onClick = function () {
        TrimAlphaStart ()
    }


    IcoTrimEndAlpha.onClick = function () {
        TrimAlphaEnd ()
    }


    ReduceButton.onClick = function () {
        ReduceProject ()
    }

    OrganizeButton.onClick = function () {
        OrganizeProject ()
    }

    help.onClick = function () {alert("Organisation of the project" + "\n" + helpText)}


    ButtonDeleteLayer.onClick = function () {
        DeleteUnusedLayer ()
    }

    ButtonAudioAtBottom.onClick = function () {
        PutAudioAtTheBottom ()
    }



//============== FUNCTIONS ==========================

function TrimKey() {
    
	// Get the current or active composition
	var comp = app.project.activeItem;
	if ((comp !== null) && (comp instanceof CompItem))
	{
        var sel = comp.selectedLayers;
        if(sel.length > 0){
        app.beginUndoGroup("TrimKeys");

            // Loop through all selected layers
            for (var l=0; l<sel.length; l++) { 
            var thisLayer = sel[l];
            var FirstKeyTime = thisLayer.inPoint;
            var LastKeyTime = thisLayer.outPoint;

                if(thisLayer.selectedProperties.length > 0){
                    var thisPropInPoint = null;
                    var thisPropOutPoint = null;

                    for(var p = 0; p < thisLayer.selectedProperties.length; p++){
                        var thisProperty = thisLayer.selectedProperties[p];
                        if(thisProperty.selectedKeys.length > 0){
                            if (thisPropInPoint == null){
                            thisPropInPoint = thisProperty.keyTime(1);
                            thisPropOutPoint = thisProperty.keyTime(thisProperty.numKeys);
                            } else {
                                if (thisPropInPoint > thisProperty.keyTime(1)){
                                    thisPropInPoint = thisProperty.keyTime(1);
                                }
                                if (thisPropOutPoint < thisProperty.keyTime(thisProperty.numKeys)){
                                    thisPropOutPoint = thisProperty.keyTime(thisProperty.numKeys);
                                }
                            }

                        }
                    }
                    
                    if (thisPropInPoint != null) {
                        FirstKeyTime = thisPropInPoint;
                        LastKeyTime = thisPropOutPoint;
                    }
                    
                }

                thisLayer.inPoint = FirstKeyTime;
                thisLayer.outPoint = LastKeyTime;
	        }
        app.endUndoGroup();       
        } 
    }
}
function TrimKeyStart() {
    
	// Get the current or active composition
	var comp = app.project.activeItem;
	if ((comp !== null) && (comp instanceof CompItem))
	{
        var sel = comp.selectedLayers;
        if(sel.length > 0){
        app.beginUndoGroup("TrimKeys");

            // Loop through all selected layers
            for (var l=0; l<sel.length; l++) { 
            var thisLayer = sel[l];
            var FirstKeyTime = thisLayer.inPoint;
            var LastKeyTime = thisLayer.outPoint;

                if(thisLayer.selectedProperties.length > 0){
                    var thisPropInPoint = null;
                    var thisPropOutPoint = null;

                    for(var p = 0; p < thisLayer.selectedProperties.length; p++){
                        var thisProperty = thisLayer.selectedProperties[p];
                        if(thisProperty.selectedKeys.length > 0){
                            if (thisPropInPoint == null){
                            thisPropInPoint = thisProperty.keyTime(1);
                            thisPropOutPoint = thisProperty.keyTime(thisProperty.numKeys);
                            } else {
                                if (thisPropInPoint > thisProperty.keyTime(1)){
                                    thisPropInPoint = thisProperty.keyTime(1);
                                }
                                if (thisPropOutPoint < thisProperty.keyTime(thisProperty.numKeys)){
                                    thisPropOutPoint = thisProperty.keyTime(thisProperty.numKeys);
                                }
                            }

                        }
                    }
                    
                    if (thisPropInPoint != null) {
                        FirstKeyTime = thisPropInPoint;
                        //LastKeyTime = thisPropOutPoint;
                    }
                    
                }

                thisLayer.inPoint = FirstKeyTime;
                thisLayer.outPoint = LastKeyTime;
	        }
        app.endUndoGroup();       
        } 
    }
}
function TrimKeyEnd() {
    
	// Get the current or active composition
	var comp = app.project.activeItem;
	if ((comp !== null) && (comp instanceof CompItem))
	{
        var sel = comp.selectedLayers;
        if(sel.length > 0){
        app.beginUndoGroup("TrimKeys");

            // Loop through all selected layers
            for (var l=0; l<sel.length; l++) { 
            var thisLayer = sel[l];
            var FirstKeyTime = thisLayer.inPoint;
            var LastKeyTime = thisLayer.outPoint;

                if(thisLayer.selectedProperties.length > 0){
                    var thisPropInPoint = null;
                    var thisPropOutPoint = null;

                    for(var p = 0; p < thisLayer.selectedProperties.length; p++){
                        var thisProperty = thisLayer.selectedProperties[p];
                        if(thisProperty.selectedKeys.length > 0){
                            if (thisPropInPoint == null){
                            thisPropInPoint = thisProperty.keyTime(1);
                            thisPropOutPoint = thisProperty.keyTime(thisProperty.numKeys);
                            } else {
                                if (thisPropInPoint > thisProperty.keyTime(1)){
                                    thisPropInPoint = thisProperty.keyTime(1);
                                }
                                if (thisPropOutPoint < thisProperty.keyTime(thisProperty.numKeys)){
                                    thisPropOutPoint = thisProperty.keyTime(thisProperty.numKeys);
                                }
                            }

                        }
                    }
                    
                    if (thisPropInPoint != null) {
                        // FirstKeyTime = thisPropInPoint;
                        LastKeyTime = thisPropOutPoint;
                    }
                    
                }

                thisLayer.inPoint = FirstKeyTime;
                thisLayer.outPoint = LastKeyTime;
	        }
        app.endUndoGroup();       
        } 
    }
}

function TrimOpacity () {
    
	// Get the current or active composition
	var comp = app.project.activeItem;
	if ((comp !== null) && (comp instanceof CompItem))
	{
        app.beginUndoGroup("Trim Opacity");

		// Loop through all selected layers
		for (var i=0; i<comp.selectedLayers.length; i++)
		{
			// Make sure the layer has an Opacity property with at least 2 keyframes
			var layer = comp.selectedLayers[i];
			var opac = layer.opacity;
			if ((opac === null) || (opac.numKeys < 2))
				continue;
			
			// Check the first and last keyframe for a zero value, and trim to it if so
			if (opac.keyValue(1) === 0)
				layer.inPoint = opac.keyTime(1);
			if (opac.keyValue(opac.numKeys) === 0)
				layer.outPoint = opac.keyTime(opac.numKeys);
        }
        app.endUndoGroup(); 

	}
}
function TrimOpacityStart () {
   // create an undo group 
    
   // Get the current or active composition
	var comp = app.project.activeItem;
	if ((comp !== null) && (comp instanceof CompItem))
	{
        app.beginUndoGroup("Trim Opacity InPoint");

		// Loop through all selected layers
		for (var i=0; i<comp.selectedLayers.length; i++)
		{
			// Make sure the layer has an Opacity property with at least 2 keyframes
            var layer = comp.selectedLayers[i];
            var SaveOutPoint = layer.outPoint;
			var opac = layer.opacity;
			if ((opac === null) || (opac.numKeys < 2))
				continue;
			
			// Check the first and last keyframe for a zero value, and trim to it if so
			if (opac.keyValue(1) === 0) {
                layer.inPoint = opac.keyTime(1);
                layer.outPoint = SaveOutPoint;
            }

        }
        app.endUndoGroup(); 

	}
}
function TrimOpacityEnd () {

	// Get the current or active composition
	var comp = app.project.activeItem;
	if ((comp !== null) && (comp instanceof CompItem))
	{
        app.beginUndoGroup("Trim Opacity OutPoint");

		// Loop through all selected layers
		for (var i=0; i<comp.selectedLayers.length; i++)
		{
			// Make sure the layer has an Opacity property with at least 2 keyframes
            var layer = comp.selectedLayers[i];
            var SaveInPoint = layer.inPoint;
			var opac = layer.opacity;
			if ((opac === null) || (opac.numKeys < 2))
				continue;
			
			// Check the first and last keyframe for a zero value, and trim to it if so
            if (opac.keyValue(opac.numKeys) === 0)
                layer.inPoint = SaveInPoint;
				layer.outPoint = opac.keyTime(opac.numKeys);
        }
        app.endUndoGroup(); 

    }

}

function TrimScale() {
    
	// Get the current or active composition
	var comp = app.project.activeItem;
	if ((comp !== null) && (comp instanceof CompItem))
	{
        app.beginUndoGroup("Trim Scale"); //Undo

		// Loop through all selected layers
		for (var i=0; i<comp.selectedLayers.length; i++)
		{
			// Make sure the layer has an Opacity property with at least 2 keyframes
            var layer = comp.selectedLayers[i];
            var SaveInPointScale = layer.inPoint;
            var SaveOutPointScale = layer.outPoint;
            var scaleX = layer.scale[0];
            var scaleY = layer.scale[1];

			if ((scaleX != null) || (scaleY != null) || (layer.scale.numKeys > 1)) {
                var FirstKeyTime = layer.scale.keyTime(1);
                var LastKeyTime = layer.scale.keyTime(layer.scale.numKeys);
            	// Check the first and last keyframe for a zero value, and trim to it if so
                if (layer.scale.valueAtTime(FirstKeyTime, false)[0] == 0 || layer.scale.valueAtTime(FirstKeyTime, false)[1] == 0){
                    layer.inPoint = layer.scale.keyTime(1);}
                    else {
                    layer.inPoint = SaveInPointScale
                    }
                if (layer.scale.valueAtTime(LastKeyTime, false)[0] == 0 || layer.scale.valueAtTime(LastKeyTime, false)[1] == 0){
                    layer.outPoint = layer.scale.keyTime(layer.scale.numKeys);
                }   else {
                    layer.outPoint = SaveOutPointScale
                }
            }
            
            

        }
        app.endUndoGroup(); //closing Undo
 
    }
}
function TrimScaleStart() {
    
	// Get the current or active composition
	var comp = app.project.activeItem;
	if ((comp !== null) && (comp instanceof CompItem))
	{
        app.beginUndoGroup("Trim Scale Start");
		// Loop through all selected layers
		for (var i=0; i<comp.selectedLayers.length; i++)
		{
			// Make sure the layer has an Opacity property with at least 2 keyframes
			var layer = comp.selectedLayers[i];
            var scaleX = layer.scale[0];
            var scaleY = layer.scale[1];
            var SaveOutPointScale = layer.outPoint;
            
			if ((scaleX != null) || (scaleY != null) || (layer.scale.numKeys > 1)) {
    
                var FirstKeyTime = layer.scale.keyTime(1);
                var LastKeyTime = layer.scale.keyTime(layer.scale.numKeys);

                // Check the first and last keyframe for a zero value, and trim to it if so
                if (layer.scale.valueAtTime(FirstKeyTime, false)[0] == 0 || layer.scale.valueAtTime(FirstKeyTime, false)[1] == 0){
                    layer.inPoint = layer.scale.keyTime(1);
                    layer.outPoint =SaveOutPointScale;
                }
            }
        }
        app.endUndoGroup(); //closing Undo
	}
}
function TrimScaleEnd() {
    
	// Get the current or active composition
	var comp = app.project.activeItem;
	if ((comp !== null) && (comp instanceof CompItem))
	{
        app.beginUndoGroup("Trim Scale End");

		// Loop through all selected layers
		for (var i=0; i<comp.selectedLayers.length; i++)
		{
			// Make sure the layer has an Opacity property with at least 2 keyframes
			var layer = comp.selectedLayers[i];
            var scaleX = layer.scale[0];
            var scaleY = layer.scale[1];
            var SaveInPointScale = layer.inPoint;

            
			if ((scaleX != null) || (scaleY != null) || (layer.scale.numKeys > 1)) {
                var FirstKeyTime = layer.scale.keyTime(1);
                var LastKeyTime = layer.scale.keyTime(layer.scale.numKeys);
                if (layer.scale.valueAtTime(LastKeyTime, false)[0] == 0 || layer.scale.valueAtTime(LastKeyTime, false)[1] == 0){
                layer.inPoint= SaveInPointScale;
                layer.outPoint = layer.scale.keyTime(layer.scale.numKeys);
                }
            }
        }
        app.endUndoGroup(); //closing Undo
	}
}

function TrimAlphaStart () {

    var activeComp = app.project.activeItem; //active item
    if(activeComp && activeComp instanceof CompItem){ //if it's a comp
    
		app.beginUndoGroup("Trim"); //Undo
		for (l=1; l <= activeComp.numLayers; ++l) {
            var sel = activeComp.layer(l);
            var SaveOutPoint = sel.outPoint;
            if (sel.isTrackMatte == true && sel.selected ==true ) {
            sel.inPoint = activeComp.layer(l+1).inPoint;
            sel.outPoint = SaveOutPoint;            
            
            }
    }
		app.endUndoGroup(); //closing Undo
	}
}
function TrimAlphaEnd () {	
    var activeComp = app.project.activeItem; //active item
    if(activeComp && activeComp instanceof CompItem){ //if it's a comp
    
		app.beginUndoGroup("Trim"); //Undo
		for (l=1; l <= activeComp.numLayers; ++l) {
            var sel = activeComp.layer(l);
            var SaveInPoint = sel.inPoint;
            if (sel.isTrackMatte == true && sel.selected ==true ) {
            sel.inPoint = SaveInPoint;
            sel.outPoint = activeComp.layer(l+1).outPoint;
            }
    }
		app.endUndoGroup(); //closing Undo
	}
}
function TrimAlpha () {	
    var activeComp = app.project.activeItem; //active item
    if(activeComp && activeComp instanceof CompItem){ //if it's a comp
    
		app.beginUndoGroup("Trim"); //Undo
		for (l=1; l <= activeComp.numLayers; ++l) {
            var sel = activeComp.layer(l);
            if (sel.isTrackMatte == true && sel.selected ==true ) {
            sel.inPoint = activeComp.layer(l+1).inPoint;
            sel.outPoint = activeComp.layer(l+1).outPoint;
            
            }
    }
		app.endUndoGroup(); //closing Undo
	}
}


function ReduceProject () {
    var everyItem = app.project.items;
    selectedComps = new Array();
    for (var i = everyItem.length; i >= 1; i--) {
        eyeTem = everyItem[i];
        if (eyeTem.selected) {
            selectedComps[selectedComps.length] = eyeTem;
        }
    }
    app.project.reduceProject(selectedComps);
}
function OrganizeProject () {

    app.beginUndoGroup("OrganizeProject");
    
    var everyItem = app.project.items;
    var NULL = app.project.items.addFolder('Solids'); 


// =========== CREATE FOLDERS ===========

        var folderMaster = app.project.items.addFolder('03_Deliverables'); 
            var folderDisplay = app.project.items.addFolder(' Display'); 
            var folderGif = app.project.items.addFolder(' GIFs'); 
            var folderMobile = app.project.items.addFolder(' Mobile'); 
            var folderPaidSocial = app.project.items.addFolder(' PaidSocial'); 
            folderDisplay.parentFolder = folderMaster;
            folderGif.parentFolder = folderMaster;
            folderMobile.parentFolder = folderMaster;
            folderPaidSocial.parentFolder = folderMaster;
        
        var folderComps = app.project.items.addFolder('02_Compositions'); 
            var folderAdapt = app.project.items.addFolder('01_Working Comps'); 
            var folderPreComp = app.project.items.addFolder('02_Pre Comps');
            var folderCompsArchives = app.project.items.addFolder('z_archives'); 
            folderAdapt.parentFolder = folderComps;
            folderPreComp.parentFolder = folderComps;
            folderCompsArchives.parentFolder = folderComps;
        
        var folderMedia = app.project.items.addFolder('01_Media'); 
            var folderVideo = app.project.items.addFolder('01_Video'); 
            folderVideo.parentFolder = folderMedia;

            var folderAudio = app.project.items.addFolder('02_Audio'); 
            folderAudio.parentFolder = folderMedia;
                var folderMUSIC = app.project.items.addFolder('01_Music'); 
                var folderVO = app.project.items.addFolder('02_VO'); 
                var folderSFX = app.project.items.addFolder('03_SFX'); 
                folderMUSIC.parentFolder = folderAudio;
                folderVO.parentFolder = folderAudio;
                folderSFX.parentFolder = folderAudio;



            var folderImages = app.project.items.addFolder('03_Static');
            folderImages.parentFolder = folderMedia; 
                var folderLOGO = app.project.items.addFolder('01_Logos/Flags'); 
                var folderAPPSCREEN = app.project.items.addFolder('02_App Screens');
                var folderOtherIMG = app.project.items.addFolder('Other images');
                folderLOGO.parentFolder = folderImages;
                folderAPPSCREEN.parentFolder = folderImages;
                folderOtherIMG.parentFolder = folderImages;

            var folderPrerender= app.project.items.addFolder('04_Motion');
            folderPrerender.parentFolder = folderMedia;



// =========== CREER DES ARRAYS POUR GERER LE FUTUR RANGEMENT ===========

    // Create an array so the index don't change if the tiems move or are deleted
    selectedComps = new Array();
    for (var i = 1 ; i <= everyItem.length; i++) {
        eyeTem = everyItem[i];
        selectedComps[selectedComps.length] = eyeTem;
        }
    

    // tout les items qui ne sont pas un dossier sont rangés dans le dossier "NULL"
    for (var n = (selectedComps.length-1); n >= 0; n--) {
        item = selectedComps[n];
        if (!(item instanceof FolderItem)) {
            item.parentFolder = NULL 
        }
    }  

    // Supprimer tout les dossier avec une exception pour les dossiers qu'on vient de creer
    for (var n = (selectedComps.length-1); n >= 0; n--) {
        item = selectedComps[n];
            if ((item instanceof FolderItem) 
            && (item != NULL) && (item != folderMaster) && (item != folderDisplay) && (item != folderGif) && (item != folderMobile) && (item != folderPaidSocial) 
            && (item != folderComps) && (item != folderAdapt) && (item != folderPreComp) && (item != folderCompsArchives) && (item != folderMedia) 
            && (item != folderVideo) && (item != folderPrerender) 
            && (item != folderImages) && (item != folderLOGO) && (item != folderAPPSCREEN) && (item != folderOtherIMG)
            && (item != folderAudio) && (item != folderMUSIC) && (item != folderVO) && (item != folderSFX) ) {
                item.remove()
        }
    } 
  
    LastStuffs = new Array();
    for (var i = 1 ; i <= everyItem.length; i++) {
        eyeTem = everyItem[i];
        LastStuffs[LastStuffs.length] = eyeTem;
        }

    


    
// =========== TRIER LES ITEMS FOLDERS ===========


    for (var n = (LastStuffs.length-1); n >= 0; n--) {
        item = LastStuffs[n];
        
        // Organize IMG
        if ((item.duration == 0) && (item.file != null)) {
            if (item.name.substring(0, 4).toLowerCase() == "logo" || item.name.substring(0, 4).toLowerCase() == "flag") {
                item.parentFolder = folderLOGO 
            } else if (item.name.substring(0,3).toLowerCase() == "app" ) {
                item.parentFolder = folderAPPSCREEN 
            } else {
            item.parentFolder = folderOtherIMG 
            }
    
        // Organize VIDEO
         } else if ((item.duration > 0) && (item.hasVideo) && !(item instanceof CompItem)) {
            if ( (item.name.substring(item.name.length - 3, item.name.length).toLowerCase() == "png") || (item.name.substring(item.name.length - 3, item.name.length).toLowerCase() == "jpg") || (item.name.substring(item.name.length - 3, item.name.length).toLowerCase() == "psd") || (item.name.substring(item.name.length - 4, item.name.length).toLowerCase() == "jpeg") ){
                item.parentFolder = folderPrerender 
            } else if (item.mainSource.hasAlpha == true){
                item.parentFolder = folderPrerender 
            } else {
            item.parentFolder = folderVideo 
            }
        }
    
        // Organize SOUND
        else if ((item.duration > 0) && !(item.hasVideo) && !(item instanceof CompItem)) {
            if (item.name.substring(item.name.length - 11, item.name.length - 4).toLowerCase() == "artlist")  {
                item.parentFolder = folderMUSIC 
            } else if (item.name.substring(0, 2).toLowerCase() == "vo" || item.name.substring(0, 6).toLowerCase() == "tascam") {
                item.parentFolder = folderVO
            } else {
                item.parentFolder = folderAudio
            }
            

        // Organize DELIVRABLES
        } else if ((item instanceof CompItem) && (item.usedIn == 0)) {

            // si la compostion a un frame rate inferieur a 23frame by second, go to GIF
            if (item.frameRate < 23) {
                item.parentFolder = folderGif 
            
            } else if (((item.width == 1024) && (item.height == 768))
            || ((item.width == 768) && (item.height == 1024))
            || ((item.width == 320) && (item.height == 240))
            || ((item.width == 640) && (item.height == 480))
            || ((item.width == 320) && (item.height == 480)) ) { 
                item.parentFolder = folderMobile
            

            // si la compostion dure entre 5 et 7 seconde, selon son format elle va soit en Display soit en mobile, soit echoué dans le dossier delivrable
            } else if (item.workAreaDuration < 7 && item.workAreaDuration > 5) {
                if (((item.width == 1920) && (item.height == 1080))
                || ((item.width == 1080) && (item.height == 1920))
                || ((item.width == 1080) && (item.height == 1080)) ) {
                    item.parentFolder = folderDisplay 
                } else {
                    item.parentFolder = folderMaster
                }


            // si la compostion dure plus que 7 seconde, selon son format elle va soit en PaidSocial soit en mobile, soit echoué dans le dossier delivrable
            } else if (item.workAreaDuration >= 7) {
                if (((item.width == 1080) && (item.height == 1920))
                || ((item.width == 1080) && (item.height == 1080)) ) {
                    item.parentFolder = folderPaidSocial 
                } else {
                    item.parentFolder = folderMaster
                }
                    


            // sinon la composition va s'echoué dans le dossier delivrable   
            } else { item.parentFolder = folderMaster}
    
        
        
        // Organize WORKINGS
        } else if ((item instanceof CompItem) && !(item.usedIn == 0)) {
            if (item.name.substring(0, 3).toLowerCase() == "cta" || 
                item.name.substring(0, 4).toLowerCase() == "logo"|| 
                item.name.substring(0, 4).toLowerCase() == "flag" || 
                item.name.substring(0, 2) == "VO" || 
                item.name.substring(0, 5).toLowerCase() == "color" || 
                item.name.substring(0, 6).toLowerCase() == " color" ||
                item.name.substring(0, 3).toLowerCase() == "app" ||
                item.name.substring(0, 6).toLowerCase() == "screen" ||
                item.name.substring(0, 5).toLowerCase() == "audio"   
                ){
                item.parentFolder = folderAdapt 
            } else {
            item.parentFolder = folderPreComp 
            }
        }
    }
    
// Delete the empty folders
NULL.parentFolder = folderMedia;

if (folderOtherIMG.numItems == 0) { folderOtherIMG.remove() }


      
   
    app.endUndoGroup()
   
}
function DeleteUnusedLayer () {

    // Get the current or active composition
	var comp = app.project.activeItem;
	if ((comp !== null) && (comp instanceof CompItem))
	{
        app.beginUndoGroup("Delete unused Layers");

        compsLayers = new Array();
		for (var i = (comp.numLayers); i >= 1; i--)
		{
			// Make sure the layer has an Opacity property with at least 2 keyframes
            var allLayers = comp.layer(i);
            compsLayers[compsLayers.length] = allLayers;        
        }
          

        for (var l = (compsLayers.length-1); l >= 0; l--)
        {
            var thisLayer = compsLayers[l];
            var numChild = 0;
            var addChild;

            
            for (var m = (comp.numLayers); m >= 1; m--)
            {
                var childLayer = comp.layer(m);
                if (childLayer.parent != null) {
                    if (childLayer.parent == thisLayer) {
                    addChild = numChild + 1;
                    numChild = addChild;
                    }
                }
            }   
            
            if (thisLayer.hasVideo == true && thisLayer.hasAudio) {
                if (thisLayer.enabled == false && thisLayer.locked == false && thisLayer.isTrackMatte == false && thisLayer.audioEnabled == false) {
                    if (numChild == 0) {
                        thisLayer.remove();
                    }
                } 
            } else if (thisLayer.hasVideo == true) {
                if (thisLayer.enabled == false && thisLayer.locked == false && thisLayer.isTrackMatte == false ) {
                    if (numChild == 0) {
                        thisLayer.remove();
                    }
                } 
            } else if (thisLayer.hasAudio == true) {
                if (thisLayer.locked == false && thisLayer.isTrackMatte == false && thisLayer.audioEnabled == false ) {
                    if (numChild == 0) {
                        thisLayer.remove();
                    }
                } 
            } else {
                if (thisLayer.locked == false && thisLayer.isTrackMatte == false) {
                    if (numChild == 0) {
                        thisLayer.remove();
                    }
            }

        }
        app.endUndoGroup();
    }
    }
}

function PutAudioAtTheBottom () {

// Get the current or active composition
var comp = app.project.activeItem;
if ((comp !== null) && (comp instanceof CompItem))
{
    app.beginUndoGroup("Delete unused Layers");

    compsLayers = new Array();
    for (var i = (comp.numLayers); i >= 1; i--)
    {
        var allLayers = comp.layer(i);
        compsLayers[compsLayers.length] = allLayers;        
    }
      

    for (var l = (compsLayers.length-1); l >= 0; l--)
    {
        var thisLayer = compsLayers[l];
        
        if (thisLayer.hasVideo == false && thisLayer.hasAudio == true) {
                thisLayer.moveToEnd();
                } 
        else if (thisLayer.hasVideo == true && thisLayer.hasAudio == true) {
            if (thisLayer.enabled == false) {
            thisLayer.moveToEnd();
            } 
        }
    }
    app.endUndoGroup();
}
}


          
palette.layout.layout(true);
 
return palette;
}


var myScriptPal = myScript_buildUI(thisObj);

if (myScriptPal != null && myScriptPal instanceof Window){
myScriptPal.center();
myScriptPal.show();
}

}
myScript(this);
}
