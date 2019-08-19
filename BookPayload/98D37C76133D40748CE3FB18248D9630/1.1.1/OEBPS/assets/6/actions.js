pubcoder.projectID = "F59E419BBB6A46269DE4AA47FC599515";
pubcoder.project.id = "F59E419BBB6A46269DE4AA47FC599515";
pubcoder.project.title = "Danzig2";
pubcoder.page.id = 265;
pubcoder.page.title = "6";
pubcoder.page.number = 6;
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
var obj452_onTap_activeActionGroupIndex = -1;
var obj452_onTap_runningActionsCount = 0;
var obj452_onTap_loopCount = 0;
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
		
obj452_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj452_onTap_activeActionGroupIndex = -1;
		$("#obj452").trigger("obj452_onTap_ended");
		
		return;
	}
	window.obj452_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj452 
hide_459();
function hide_459() {
	window.obj452_onTap_runningActionsCount = obj452_onTap_runningActionsCount + 1;
	$("#obj452").fadeOut(0, function() {
			setTimeout(function() {
				window.obj452_onTap_runningActionsCount = window.obj452_onTap_runningActionsCount - 1;
if (window.obj452_onTap_runningActionsCount == 0) {
	obj452_onTap_actionGroup1();
}
			}, 1);
		}
	);
}
//	action: hide
//	target: obj289 
hide_454();
function hide_454() {
	window.obj452_onTap_runningActionsCount = obj452_onTap_runningActionsCount + 1;
	$("#obj289").fadeOut(2000, function() {
			setTimeout(function() {
				window.obj452_onTap_runningActionsCount = window.obj452_onTap_runningActionsCount - 1;
if (window.obj452_onTap_runningActionsCount == 0) {
	obj452_onTap_actionGroup1();
}
			}, 1);
		}
	);
}
//	action: hide
//	target: obj285 
hide_455();
function hide_455() {
	window.obj452_onTap_runningActionsCount = obj452_onTap_runningActionsCount + 1;
	$("#obj285").fadeOut(2000, function() {
			setTimeout(function() {
				window.obj452_onTap_runningActionsCount = window.obj452_onTap_runningActionsCount - 1;
if (window.obj452_onTap_runningActionsCount == 0) {
	obj452_onTap_actionGroup1();
}
			}, 1);
		}
	);
}
//	action: hide
//	target: obj287 
hide_456();
function hide_456() {
	window.obj452_onTap_runningActionsCount = obj452_onTap_runningActionsCount + 1;
	$("#obj287").fadeOut(2000, function() {
			setTimeout(function() {
				window.obj452_onTap_runningActionsCount = window.obj452_onTap_runningActionsCount - 1;
if (window.obj452_onTap_runningActionsCount == 0) {
	obj452_onTap_actionGroup1();
}
			}, 1);
		}
	);
}




















};
obj452_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj452_onTap_activeActionGroupIndex = -1;
		$("#obj452").trigger("obj452_onTap_ended");
		
		return;
	}
	window.obj452_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj283 
show_457();
function show_457() {
	window.obj452_onTap_runningActionsCount = obj452_onTap_runningActionsCount + 1;
	$("#obj283").fadeIn(2000, function() {
			setTimeout(function() {
				window.obj452_onTap_runningActionsCount = window.obj452_onTap_runningActionsCount - 1;
if (window.obj452_onTap_runningActionsCount == 0) {
	obj452_onTap_actionGroup2();
}
				$("#obj283").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj452_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj452_onTap_activeActionGroupIndex = -1;
		$("#obj452").trigger("obj452_onTap_ended");
		
		return;
	}
	window.obj452_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	target: obj281 
show_458();
function show_458() {
	window.obj452_onTap_runningActionsCount = obj452_onTap_runningActionsCount + 1;
	$("#obj281").fadeIn(1000, function() {
			setTimeout(function() {
				window.obj452_onTap_runningActionsCount = window.obj452_onTap_runningActionsCount - 1;
if (window.obj452_onTap_runningActionsCount == 0) {
	obj452_onTap_actionGroup3();
}
				$("#obj281").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj452_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj452_onTap_activeActionGroupIndex = -1;
		$("#obj452").trigger("obj452_onTap_ended");
		
		return;
	}
	window.obj452_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













































/*
 *
 *   obj452: Event Touch Down
 *
 */
 
$("#obj452").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj452_onTap_activeActionGroupIndex != -1) return;
var obj452_onTap_runningActionsCount = 0;
var obj452_onTap_loopCount = 0;
obj452_onTap_actionGroup0();
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
	
$("#obj266").trigger('SCEventShow');
$("#obj285").trigger('SCEventShow');
$("#obj287").trigger('SCEventShow');
$("#obj289").trigger('SCEventShow');
$("#obj452").trigger('SCEventShow');
	$(window).trigger(PubCoder.Events.PageReady);
	
});