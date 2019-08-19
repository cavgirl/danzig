pubcoder.projectID = "F59E419BBB6A46269DE4AA47FC599515";
pubcoder.project.id = "F59E419BBB6A46269DE4AA47FC599515";
pubcoder.project.title = "Danzig2";
pubcoder.page.id = 80;
pubcoder.page.title = "2";
pubcoder.page.number = 2;
pubcoder.page.alias = "";

var ua = navigator.userAgent.toLowerCase();
var touchDownEvent;
var touchUpEvent;
var isMobile;
var aigX = 0, aigY = 0;
var askAudioPermission = false;

/*
 * 
 * Init Action Lists
 *
 * 
 */
var obj466_onTap_activeActionGroupIndex = -1;
var obj466_onTap_runningActionsCount = 0;
var obj466_onTap_loopCount = 0;
var obj471_onTap_activeActionGroupIndex = -1;
var obj471_onTap_runningActionsCount = 0;
var obj471_onTap_loopCount = 0;
/*
 * 
 * Init SCCounter
 *
 * 
 */
 
 $(window).load(function(){
	window.eventObj = {};
	/*
	 * 
	 * Init SCAnimation
	 * 
	 * 
	 */
	
	/*
	 *
	 *   Init Shake
	 *
	 */
	window.addEventListener('shake', function () {
		
	}, false);
	
	/*
	 *
	 *   Init Masked Images
	 *
	 */
	 
 	/*
	 * 
	 * Init SCPhotogallery
	 * 
	 * 
	 */
	
 	/*
	 * 
	 * Init SCQuizMulti
	 * 
	 * 
	 */
	
 	/*
	 * 
	 * Init SCDrawer
	 * 
	 * 
	 */
	
    
 	/*
	 * 
	 * Init SCWPanZoom
	 * 
	 * 
	 */
	
    
 	/*
	 * 
	 * Init SCWMemoryGame
	 * 
	 * 
	 */
	
    
    
	if(! navigator.userAgent.match(/PubCoderHelper/i)) {
		/*
		 *
	 	 *   Action Groups
	 	 *
	 	 */
		
obj466_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj466_onTap_activeActionGroupIndex = -1;
		$("#obj466").trigger("obj466_onTap_ended");
		
		return;
	}
	window.obj466_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj466 
hide_468();
function hide_468() {
	window.obj466_onTap_runningActionsCount = obj466_onTap_runningActionsCount + 1;
	$("#obj466").fadeOut(0, function() {
			setTimeout(function() {
				window.obj466_onTap_runningActionsCount = window.obj466_onTap_runningActionsCount - 1;
if (window.obj466_onTap_runningActionsCount == 0) {
	obj466_onTap_actionGroup1();
}
			}, 1);
		}
	);
}
//	action: hide
//	target: obj128 
hide_469();
function hide_469() {
	window.obj466_onTap_runningActionsCount = obj466_onTap_runningActionsCount + 1;
	$("#obj128").fadeOut(2000, function() {
			setTimeout(function() {
				window.obj466_onTap_runningActionsCount = window.obj466_onTap_runningActionsCount - 1;
if (window.obj466_onTap_runningActionsCount == 0) {
	obj466_onTap_actionGroup1();
}
			}, 1);
		}
	);
}
//	action: show 
//	target: obj125 
show_470();
function show_470() {
	window.obj466_onTap_runningActionsCount = obj466_onTap_runningActionsCount + 1;
	$("#obj125").fadeIn(0, function() {
			setTimeout(function() {
				window.obj466_onTap_runningActionsCount = window.obj466_onTap_runningActionsCount - 1;
if (window.obj466_onTap_runningActionsCount == 0) {
	obj466_onTap_actionGroup1();
}
				$("#obj125").trigger('SCEventShow');
			}, 1);
		}
	);
}
//	action: show 
//	target: obj471 
show_476();
function show_476() {
	window.obj466_onTap_runningActionsCount = obj466_onTap_runningActionsCount + 1;
	$("#obj471").fadeIn(0, function() {
			setTimeout(function() {
				window.obj466_onTap_runningActionsCount = window.obj466_onTap_runningActionsCount - 1;
if (window.obj466_onTap_runningActionsCount == 0) {
	obj466_onTap_actionGroup1();
}
				$("#obj471").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj466_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj466_onTap_activeActionGroupIndex = -1;
		$("#obj466").trigger("obj466_onTap_ended");
		
		return;
	}
	window.obj466_onTap_activeActionGroupIndex = 1;
	





















};
obj471_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj471_onTap_activeActionGroupIndex = -1;
		$("#obj471").trigger("obj471_onTap_ended");
		
		return;
	}
	window.obj471_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj471 
hide_473();
function hide_473() {
	window.obj471_onTap_runningActionsCount = obj471_onTap_runningActionsCount + 1;
	$("#obj471").fadeOut(0, function() {
			setTimeout(function() {
				window.obj471_onTap_runningActionsCount = window.obj471_onTap_runningActionsCount - 1;
if (window.obj471_onTap_runningActionsCount == 0) {
	obj471_onTap_actionGroup1();
}
			}, 1);
		}
	);
}
//	action: hide
//	target: obj125 
hide_477();
function hide_477() {
	window.obj471_onTap_runningActionsCount = obj471_onTap_runningActionsCount + 1;
	$("#obj125").fadeOut(2000, function() {
			setTimeout(function() {
				window.obj471_onTap_runningActionsCount = window.obj471_onTap_runningActionsCount - 1;
if (window.obj471_onTap_runningActionsCount == 0) {
	obj471_onTap_actionGroup1();
}
			}, 1);
		}
	);
}
//	action: hide
//	target: obj480 
hide_482();
function hide_482() {
	window.obj471_onTap_runningActionsCount = obj471_onTap_runningActionsCount + 1;
	$("#obj480").fadeOut(2000, function() {
			setTimeout(function() {
				window.obj471_onTap_runningActionsCount = window.obj471_onTap_runningActionsCount - 1;
if (window.obj471_onTap_runningActionsCount == 0) {
	obj471_onTap_actionGroup1();
}
			}, 1);
		}
	);
}
//	action: hide
//	target: obj110 
hide_478();
function hide_478() {
	window.obj471_onTap_runningActionsCount = obj471_onTap_runningActionsCount + 1;
	$("#obj110").fadeOut(2000, function() {
			setTimeout(function() {
				window.obj471_onTap_runningActionsCount = window.obj471_onTap_runningActionsCount - 1;
if (window.obj471_onTap_runningActionsCount == 0) {
	obj471_onTap_actionGroup1();
}
			}, 1);
		}
	);
}




















};
obj471_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj471_onTap_activeActionGroupIndex = -1;
		$("#obj471").trigger("obj471_onTap_ended");
		
		return;
	}
	window.obj471_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj108 
show_479();
function show_479() {
	window.obj471_onTap_runningActionsCount = obj471_onTap_runningActionsCount + 1;
	$("#obj108").fadeIn(0, function() {
			setTimeout(function() {
				window.obj471_onTap_runningActionsCount = window.obj471_onTap_runningActionsCount - 1;
if (window.obj471_onTap_runningActionsCount == 0) {
	obj471_onTap_actionGroup2();
}
				$("#obj108").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj471_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj471_onTap_activeActionGroupIndex = -1;
		$("#obj471").trigger("obj471_onTap_ended");
		
		return;
	}
	window.obj471_onTap_activeActionGroupIndex = 2;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		























































































/*
 *
 *   obj466: Event Touch Down
 *
 */
 
$("#obj466").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj466_onTap_activeActionGroupIndex != -1) return;
var obj466_onTap_runningActionsCount = 0;
var obj466_onTap_loopCount = 0;
obj466_onTap_actionGroup0();
});







/*
 *
 *   obj471: Event Touch Down
 *
 */
 
$("#obj471").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj471_onTap_activeActionGroupIndex != -1) return;
var obj471_onTap_runningActionsCount = 0;
var obj471_onTap_loopCount = 0;
obj471_onTap_actionGroup0();
});




		
		
		/*
		 *
	 	 *  Page is ready to be played
	 	 *
	 	 */
		if (askAudioPermission) {
	$("#SCAudioPermissionAllowButton").click(function () {
		$( "audio" ).each(function( index ) {
			this.play();
			this.pause();
		});
		$(window).trigger(PubCoder.Events.PagePlay);
	});
	$("#SCAudioPermissionCancelButton").click(function () {
		$(window).trigger(PubCoder.Events.PagePlay);
	});
	var remodalInst = $('[data-remodal-id=SCAudioPermissionAlert]').remodal().open();
} else {
	setTimeout(function() {
		$(window).trigger(PubCoder.Events.PagePlay);
	}, 200);
}
	 }
});
var orientationDevice = getOrientation(PubCoder.isAndroidReader);
$(window).on(PubCoder.Events.PagePlay, function() {
	
$("#obj81").trigger('SCEventShow');
$("#obj96").trigger('SCEventShow');
$("#obj98").trigger('SCEventShow');
$("#obj100").trigger('SCEventShow');
$("#obj102").trigger('SCEventShow');
$("#obj104").trigger('SCEventShow');
$("#obj106").trigger('SCEventShow');
$("#obj110").trigger('SCEventShow');
$("#obj480").trigger('SCEventShow');
$("#obj128").trigger('SCEventShow');
$("#obj466").trigger('SCEventShow');
	$(window).trigger(PubCoder.Events.PageReady);
	
});