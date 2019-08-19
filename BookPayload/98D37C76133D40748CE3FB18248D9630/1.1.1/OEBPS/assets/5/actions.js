pubcoder.projectID = "F59E419BBB6A46269DE4AA47FC599515";
pubcoder.project.id = "F59E419BBB6A46269DE4AA47FC599515";
pubcoder.project.title = "Danzig2";
pubcoder.page.id = 242;
pubcoder.page.title = "5";
pubcoder.page.number = 5;
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
var obj441_onTap_activeActionGroupIndex = -1;
var obj441_onTap_runningActionsCount = 0;
var obj441_onTap_loopCount = 0;
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
		
obj441_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj441_onTap_activeActionGroupIndex = -1;
		$("#obj441").trigger("obj441_onTap_ended");
		
		return;
	}
	window.obj441_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj441 
hide_443();
function hide_443() {
	window.obj441_onTap_runningActionsCount = obj441_onTap_runningActionsCount + 1;
	$("#obj441").fadeOut(0, function() {
			setTimeout(function() {
				window.obj441_onTap_runningActionsCount = window.obj441_onTap_runningActionsCount - 1;
if (window.obj441_onTap_runningActionsCount == 0) {
	obj441_onTap_actionGroup1();
}
			}, 1);
		}
	);
}
//	action: hide
//	target: obj252 
hide_444();
function hide_444() {
	window.obj441_onTap_runningActionsCount = obj441_onTap_runningActionsCount + 1;
	$("#obj252").fadeOut(0, function() {
			setTimeout(function() {
				window.obj441_onTap_runningActionsCount = window.obj441_onTap_runningActionsCount - 1;
if (window.obj441_onTap_runningActionsCount == 0) {
	obj441_onTap_actionGroup1();
}
			}, 1);
		}
	);
}




















};
obj441_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj441_onTap_activeActionGroupIndex = -1;
		$("#obj441").trigger("obj441_onTap_ended");
		
		return;
	}
	window.obj441_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj249 
show_446();
function show_446() {
	window.obj441_onTap_runningActionsCount = obj441_onTap_runningActionsCount + 1;
	$("#obj249").fadeIn(0, function() {
			setTimeout(function() {
				window.obj441_onTap_runningActionsCount = window.obj441_onTap_runningActionsCount - 1;
if (window.obj441_onTap_runningActionsCount == 0) {
	obj441_onTap_actionGroup2();
}
				$("#obj249").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj441_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj441_onTap_activeActionGroupIndex = -1;
		$("#obj441").trigger("obj441_onTap_ended");
		
		return;
	}
	window.obj441_onTap_activeActionGroupIndex = 2;
	








//	action: wait
wait_448();
function wait_448() {
	window.obj441_onTap_runningActionsCount = obj441_onTap_runningActionsCount + 1;
	setTimeout(function() {
		window.obj441_onTap_runningActionsCount = window.obj441_onTap_runningActionsCount - 1;
if (window.obj441_onTap_runningActionsCount == 0) {
	obj441_onTap_actionGroup3();
}
	}, 5000);
}












};
obj441_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj441_onTap_activeActionGroupIndex = -1;
		$("#obj441").trigger("obj441_onTap_ended");
		
		return;
	}
	window.obj441_onTap_activeActionGroupIndex = 3;
	

//	action: hide
//	target: obj249 
hide_449();
function hide_449() {
	window.obj441_onTap_runningActionsCount = obj441_onTap_runningActionsCount + 1;
	$("#obj249").fadeOut(3000, function() {
			setTimeout(function() {
				window.obj441_onTap_runningActionsCount = window.obj441_onTap_runningActionsCount - 1;
if (window.obj441_onTap_runningActionsCount == 0) {
	obj441_onTap_actionGroup4();
}
			}, 1);
		}
	);
}
//	action: hide
//	target: obj247 
hide_450();
function hide_450() {
	window.obj441_onTap_runningActionsCount = obj441_onTap_runningActionsCount + 1;
	$("#obj247").fadeOut(2000, function() {
			setTimeout(function() {
				window.obj441_onTap_runningActionsCount = window.obj441_onTap_runningActionsCount - 1;
if (window.obj441_onTap_runningActionsCount == 0) {
	obj441_onTap_actionGroup4();
}
			}, 1);
		}
	);
}
//	action: show 
//	target: obj245 
show_451();
function show_451() {
	window.obj441_onTap_runningActionsCount = obj441_onTap_runningActionsCount + 1;
	$("#obj245").fadeIn(0, function() {
			setTimeout(function() {
				window.obj441_onTap_runningActionsCount = window.obj441_onTap_runningActionsCount - 1;
if (window.obj441_onTap_runningActionsCount == 0) {
	obj441_onTap_actionGroup4();
}
				$("#obj245").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj441_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj441_onTap_activeActionGroupIndex = -1;
		$("#obj441").trigger("obj441_onTap_ended");
		
		return;
	}
	window.obj441_onTap_activeActionGroupIndex = 4;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		






































/*
 *
 *   obj441: Event Touch Down
 *
 */
 
$("#obj441").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj441_onTap_activeActionGroupIndex != -1) return;
var obj441_onTap_runningActionsCount = 0;
var obj441_onTap_loopCount = 0;
obj441_onTap_actionGroup0();
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
	
$("#obj243").trigger('SCEventShow');
$("#obj247").trigger('SCEventShow');
$("#obj252").trigger('SCEventShow');
$("#obj441").trigger('SCEventShow');
	$(window).trigger(PubCoder.Events.PageReady);
	
});