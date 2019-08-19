pubcoder.projectID = "F59E419BBB6A46269DE4AA47FC599515";
pubcoder.project.id = "F59E419BBB6A46269DE4AA47FC599515";
pubcoder.project.title = "Danzig2";
pubcoder.page.id = 301;
pubcoder.page.title = "7";
pubcoder.page.number = 7;
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
var obj309_onLoad_activeActionGroupIndex = -1;
var obj309_onLoad_runningActionsCount = 0;
var obj309_onLoad_loopCount = 0;
var obj460_onTap_activeActionGroupIndex = -1;
var obj460_onTap_runningActionsCount = 0;
var obj460_onTap_loopCount = 0;
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
		
obj309_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj309_onLoad_activeActionGroupIndex = -1;
		$("#obj309").trigger("obj309_onLoad_ended");
		
		return;
	}
	window.obj309_onLoad_activeActionGroupIndex = 0;
	








//	action: wait
wait_312();
function wait_312() {
	window.obj309_onLoad_runningActionsCount = obj309_onLoad_runningActionsCount + 1;
	setTimeout(function() {
		window.obj309_onLoad_runningActionsCount = window.obj309_onLoad_runningActionsCount - 1;
if (window.obj309_onLoad_runningActionsCount == 0) {
	obj309_onLoad_actionGroup1();
}
	}, 7000);
}












};
obj309_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj309_onLoad_activeActionGroupIndex = -1;
		$("#obj309").trigger("obj309_onLoad_ended");
		
		return;
	}
	window.obj309_onLoad_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj306 
hide_313();
function hide_313() {
	window.obj309_onLoad_runningActionsCount = obj309_onLoad_runningActionsCount + 1;
	$("#obj306").fadeOut(2000, function() {
			setTimeout(function() {
				window.obj309_onLoad_runningActionsCount = window.obj309_onLoad_runningActionsCount - 1;
if (window.obj309_onLoad_runningActionsCount == 0) {
	obj309_onLoad_actionGroup2();
}
			}, 1);
		}
	);
}
//	action: hide
//	target: obj304 
hide_314();
function hide_314() {
	window.obj309_onLoad_runningActionsCount = obj309_onLoad_runningActionsCount + 1;
	$("#obj304").fadeOut(2000, function() {
			setTimeout(function() {
				window.obj309_onLoad_runningActionsCount = window.obj309_onLoad_runningActionsCount - 1;
if (window.obj309_onLoad_runningActionsCount == 0) {
	obj309_onLoad_actionGroup2();
}
			}, 1);
		}
	);
}




















};
obj309_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj309_onLoad_activeActionGroupIndex = -1;
		$("#obj309").trigger("obj309_onLoad_ended");
		
		return;
	}
	window.obj309_onLoad_activeActionGroupIndex = 2;
	

//	action: show 
//	target: obj302 
show_315();
function show_315() {
	window.obj309_onLoad_runningActionsCount = obj309_onLoad_runningActionsCount + 1;
	$("#obj302").fadeIn(1000, function() {
			setTimeout(function() {
				window.obj309_onLoad_runningActionsCount = window.obj309_onLoad_runningActionsCount - 1;
if (window.obj309_onLoad_runningActionsCount == 0) {
	obj309_onLoad_actionGroup3();
}
				$("#obj302").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj309_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj309_onLoad_activeActionGroupIndex = -1;
		$("#obj309").trigger("obj309_onLoad_ended");
		
		return;
	}
	window.obj309_onLoad_activeActionGroupIndex = 3;
	





















};
obj460_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj460_onTap_activeActionGroupIndex = -1;
		$("#obj460").trigger("obj460_onTap_ended");
		
		return;
	}
	window.obj460_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj460 
hide_462();
function hide_462() {
	window.obj460_onTap_runningActionsCount = obj460_onTap_runningActionsCount + 1;
	$("#obj460").fadeOut(0, function() {
			setTimeout(function() {
				window.obj460_onTap_runningActionsCount = window.obj460_onTap_runningActionsCount - 1;
if (window.obj460_onTap_runningActionsCount == 0) {
	obj460_onTap_actionGroup1();
}
			}, 1);
		}
	);
}
//	action: hide
//	target: obj306 
hide_463();
function hide_463() {
	window.obj460_onTap_runningActionsCount = obj460_onTap_runningActionsCount + 1;
	$("#obj306").fadeOut(2000, function() {
			setTimeout(function() {
				window.obj460_onTap_runningActionsCount = window.obj460_onTap_runningActionsCount - 1;
if (window.obj460_onTap_runningActionsCount == 0) {
	obj460_onTap_actionGroup1();
}
			}, 1);
		}
	);
}
//	action: hide
//	target: obj304 
hide_464();
function hide_464() {
	window.obj460_onTap_runningActionsCount = obj460_onTap_runningActionsCount + 1;
	$("#obj304").fadeOut(2000, function() {
			setTimeout(function() {
				window.obj460_onTap_runningActionsCount = window.obj460_onTap_runningActionsCount - 1;
if (window.obj460_onTap_runningActionsCount == 0) {
	obj460_onTap_actionGroup1();
}
			}, 1);
		}
	);
}
//	action: show 
//	target: obj302 
show_465();
function show_465() {
	window.obj460_onTap_runningActionsCount = obj460_onTap_runningActionsCount + 1;
	$("#obj302").fadeIn(1000, function() {
			setTimeout(function() {
				window.obj460_onTap_runningActionsCount = window.obj460_onTap_runningActionsCount - 1;
if (window.obj460_onTap_runningActionsCount == 0) {
	obj460_onTap_actionGroup1();
}
				$("#obj302").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj460_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj460_onTap_activeActionGroupIndex = -1;
		$("#obj460").trigger("obj460_onTap_ended");
		
		return;
	}
	window.obj460_onTap_activeActionGroupIndex = 1;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		

































/*
 *
 *   obj309: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj309_onLoad_activeActionGroupIndex != -1) return;
var obj309_onLoad_runningActionsCount = 0;
var obj309_onLoad_loopCount = 0;
obj309_onLoad_actionGroup0();
});





/*
 *
 *   obj460: Event Touch Down
 *
 */
 
$("#obj460").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj460_onTap_activeActionGroupIndex != -1) return;
var obj460_onTap_runningActionsCount = 0;
var obj460_onTap_loopCount = 0;
obj460_onTap_actionGroup0();
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
	
$("#obj439").trigger('SCEventShow');
$("#obj304").trigger('SCEventShow');
$("#obj306").trigger('SCEventShow');
$("#obj460").trigger('SCEventShow');
	$(window).trigger(PubCoder.Events.PageReady);
	
});