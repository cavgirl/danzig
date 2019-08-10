pubcoder.projectID = "18658B6D99D44CD8BE3D25481D40B4A6";
pubcoder.project.id = "18658B6D99D44CD8BE3D25481D40B4A6";
pubcoder.project.title = "Lisa Townsend\'s Project";
pubcoder.page.id = 163;
pubcoder.page.title = "4";
pubcoder.page.number = 4;
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
var obj367_onLoad_activeActionGroupIndex = -1;
var obj367_onLoad_runningActionsCount = 0;
var obj367_onLoad_loopCount = 0;
var obj744_onTap_activeActionGroupIndex = -1;
var obj744_onTap_runningActionsCount = 0;
var obj744_onTap_loopCount = 0;
var obj747_onTap_activeActionGroupIndex = -1;
var obj747_onTap_runningActionsCount = 0;
var obj747_onTap_loopCount = 0;
/*
 * 
 * Init SCCounter
 *
 * 
 */
 
var obj367_counterValue = 0;
var obj367_counterTargetValue = 2;
var obj367_counterCanExceedTargetValue = false;
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
		
obj367_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj367_onLoad_activeActionGroupIndex = -1;
		$("#obj367").trigger("obj367_onLoad_ended");
		
		return;
	}
	window.obj367_onLoad_activeActionGroupIndex = 0;
	








//	action: wait
wait_370();
function wait_370() {
	window.obj367_onLoad_runningActionsCount = obj367_onLoad_runningActionsCount + 1;
	setTimeout(function() {
		window.obj367_onLoad_runningActionsCount = window.obj367_onLoad_runningActionsCount - 1;
if (window.obj367_onLoad_runningActionsCount == 0) {
	obj367_onLoad_actionGroup1();
}
	}, 20000);
}












};
obj367_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj367_onLoad_activeActionGroupIndex = -1;
		$("#obj367").trigger("obj367_onLoad_ended");
		
		return;
	}
	window.obj367_onLoad_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj594 
hide_371();
function hide_371() {
	window.obj367_onLoad_runningActionsCount = obj367_onLoad_runningActionsCount + 1;
	$("#obj594").fadeOut(0, function() {
			setTimeout(function() {
				window.obj367_onLoad_runningActionsCount = window.obj367_onLoad_runningActionsCount - 1;
if (window.obj367_onLoad_runningActionsCount == 0) {
	obj367_onLoad_actionGroup2();
}
			}, 1);
		}
	);
}
//	action: hide
//	target: obj306 
hide_372();
function hide_372() {
	window.obj367_onLoad_runningActionsCount = obj367_onLoad_runningActionsCount + 1;
	$("#obj306").fadeOut(0, function() {
			setTimeout(function() {
				window.obj367_onLoad_runningActionsCount = window.obj367_onLoad_runningActionsCount - 1;
if (window.obj367_onLoad_runningActionsCount == 0) {
	obj367_onLoad_actionGroup2();
}
			}, 1);
		}
	);
}
//	action: hide
//	target: obj306 
hide_373();
function hide_373() {
	window.obj367_onLoad_runningActionsCount = obj367_onLoad_runningActionsCount + 1;
	$("#obj306").fadeOut(0, function() {
			setTimeout(function() {
				window.obj367_onLoad_runningActionsCount = window.obj367_onLoad_runningActionsCount - 1;
if (window.obj367_onLoad_runningActionsCount == 0) {
	obj367_onLoad_actionGroup2();
}
			}, 1);
		}
	);
}
//	action: show 
//	target: obj327 
show_374();
function show_374() {
	window.obj367_onLoad_runningActionsCount = obj367_onLoad_runningActionsCount + 1;
	$("#obj327").fadeIn(0, function() {
			setTimeout(function() {
				window.obj367_onLoad_runningActionsCount = window.obj367_onLoad_runningActionsCount - 1;
if (window.obj367_onLoad_runningActionsCount == 0) {
	obj367_onLoad_actionGroup2();
}
				$("#obj327").trigger('SCEventShow');
			}, 1);
		}
	);
}
//	action: show 
//	target: obj336 
show_375();
function show_375() {
	window.obj367_onLoad_runningActionsCount = obj367_onLoad_runningActionsCount + 1;
	$("#obj336").fadeIn(0, function() {
			setTimeout(function() {
				window.obj367_onLoad_runningActionsCount = window.obj367_onLoad_runningActionsCount - 1;
if (window.obj367_onLoad_runningActionsCount == 0) {
	obj367_onLoad_actionGroup2();
}
				$("#obj336").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj367_onLoad_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj367_onLoad_activeActionGroupIndex = -1;
		$("#obj367").trigger("obj367_onLoad_ended");
		
		return;
	}
	window.obj367_onLoad_activeActionGroupIndex = 2;
	





















};
obj744_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj744_onTap_activeActionGroupIndex = -1;
		$("#obj744").trigger("obj744_onTap_ended");
		
		return;
	}
	window.obj744_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
//	target: page3
goToPage_746();
function goToPage_746() {
	var isPreview = false;
	if (isPreview) {
		$(location).attr('href', '../3/page.xhtml');
	} else {
		setTimeout(function(){ parent.SCHtmlController.goToPageViewer(parent.SCHtmlController.getPageForView(3))},200);
	}
}





















};
obj744_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj744_onTap_activeActionGroupIndex = -1;
		$("#obj744").trigger("obj744_onTap_ended");
		
		return;
	}
	window.obj744_onTap_activeActionGroupIndex = 1;
	





















};
obj747_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj747_onTap_activeActionGroupIndex = -1;
		$("#obj747").trigger("obj747_onTap_ended");
		
		return;
	}
	window.obj747_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
//	target: page5
goToPage_750();
function goToPage_750() {
	var isPreview = false;
	if (isPreview) {
		$(location).attr('href', '../5/page.xhtml');
	} else {
		setTimeout(function(){ parent.SCHtmlController.goToPageViewer(parent.SCHtmlController.getPageForView(5))},200);
	}
}





















};
obj747_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj747_onTap_activeActionGroupIndex = -1;
		$("#obj747").trigger("obj747_onTap_ended");
		
		return;
	}
	window.obj747_onTap_activeActionGroupIndex = 1;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		





























































/*
 *
 *   obj367: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj367_onLoad_activeActionGroupIndex != -1) return;
var obj367_onLoad_runningActionsCount = 0;
var obj367_onLoad_loopCount = 0;
obj367_onLoad_actionGroup0();
});












/*
 *
 *   obj744: Event Touch Down
 *
 */
 
$("#obj744").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj744_onTap_activeActionGroupIndex != -1) return;
var obj744_onTap_runningActionsCount = 0;
var obj744_onTap_loopCount = 0;
obj744_onTap_actionGroup0();
});







/*
 *
 *   obj747: Event Touch Down
 *
 */
 
$("#obj747").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj747_onTap_activeActionGroupIndex != -1) return;
var obj747_onTap_runningActionsCount = 0;
var obj747_onTap_loopCount = 0;
obj747_onTap_actionGroup0();
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
	
$("#obj638").trigger('SCEventShow');
$("#obj666").trigger('SCEventShow');
$("#obj636").trigger('SCEventShow');
$("#obj634").trigger('SCEventShow');
$("#obj594").trigger('SCEventShow');
$("#obj306").trigger('SCEventShow');
$("#obj302").trigger('SCEventShow');
$("#obj744").trigger('SCEventShow');
$("#obj747").trigger('SCEventShow');
	$(window).trigger(PubCoder.Events.PageReady);
	
});