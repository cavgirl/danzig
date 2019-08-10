pubcoder.projectID = "18658B6D99D44CD8BE3D25481D40B4A6";
pubcoder.project.id = "18658B6D99D44CD8BE3D25481D40B4A6";
pubcoder.project.title = "Lisa Townsend\'s Project";
pubcoder.page.id = 2;
pubcoder.page.title = "1";
pubcoder.page.number = 1;
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
var obj764_onLoad_activeActionGroupIndex = -1;
var obj764_onLoad_runningActionsCount = 0;
var obj764_onLoad_loopCount = 0;
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
		
obj764_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj764_onLoad_activeActionGroupIndex = -1;
		$("#obj764").trigger("obj764_onLoad_ended");
		
		return;
	}
	window.obj764_onLoad_activeActionGroupIndex = 0;
	








//	action: wait
wait_767();
function wait_767() {
	window.obj764_onLoad_runningActionsCount = obj764_onLoad_runningActionsCount + 1;
	setTimeout(function() {
		window.obj764_onLoad_runningActionsCount = window.obj764_onLoad_runningActionsCount - 1;
if (window.obj764_onLoad_runningActionsCount == 0) {
	obj764_onLoad_actionGroup1();
}
	}, 1000);
}












};
obj764_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj764_onLoad_activeActionGroupIndex = -1;
		$("#obj764").trigger("obj764_onLoad_ended");
		
		return;
	}
	window.obj764_onLoad_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj759 
hide_768();
function hide_768() {
	window.obj764_onLoad_runningActionsCount = obj764_onLoad_runningActionsCount + 1;
	$("#obj759").fadeOut(3000, function() {
			setTimeout(function() {
				window.obj764_onLoad_runningActionsCount = window.obj764_onLoad_runningActionsCount - 1;
if (window.obj764_onLoad_runningActionsCount == 0) {
	obj764_onLoad_actionGroup2();
}
			}, 1);
		}
	);
}
//	action: show 
//	target: obj762 
show_769();
function show_769() {
	window.obj764_onLoad_runningActionsCount = obj764_onLoad_runningActionsCount + 1;
	$("#obj762").fadeIn(3000, function() {
			setTimeout(function() {
				window.obj764_onLoad_runningActionsCount = window.obj764_onLoad_runningActionsCount - 1;
if (window.obj764_onLoad_runningActionsCount == 0) {
	obj764_onLoad_actionGroup2();
}
				$("#obj762").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj764_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj764_onLoad_activeActionGroupIndex = -1;
		$("#obj764").trigger("obj764_onLoad_ended");
		
		return;
	}
	window.obj764_onLoad_activeActionGroupIndex = 2;
	

//	action: hide
//	target: obj762 
hide_770();
function hide_770() {
	window.obj764_onLoad_runningActionsCount = obj764_onLoad_runningActionsCount + 1;
	$("#obj762").fadeOut(3000, function() {
			setTimeout(function() {
				window.obj764_onLoad_runningActionsCount = window.obj764_onLoad_runningActionsCount - 1;
if (window.obj764_onLoad_runningActionsCount == 0) {
	obj764_onLoad_actionGroup3();
}
			}, 1);
		}
	);
}
//	action: show 
//	target: obj759 
show_771();
function show_771() {
	window.obj764_onLoad_runningActionsCount = obj764_onLoad_runningActionsCount + 1;
	$("#obj759").fadeIn(3000, function() {
			setTimeout(function() {
				window.obj764_onLoad_runningActionsCount = window.obj764_onLoad_runningActionsCount - 1;
if (window.obj764_onLoad_runningActionsCount == 0) {
	obj764_onLoad_actionGroup3();
}
				$("#obj759").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj764_onLoad_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj764_onLoad_activeActionGroupIndex = -1;
		$("#obj764").trigger("obj764_onLoad_ended");
		
		return;
	}
	window.obj764_onLoad_activeActionGroupIndex = 3;
	
//	action: goToPage
//	target: page2
goToPage_772();
function goToPage_772() {
	var isPreview = false;
	if (isPreview) {
		$(location).attr('href', '../2/page.xhtml');
	} else {
		setTimeout(function(){ parent.SCHtmlController.goToPageViewer(parent.SCHtmlController.getPageForView(2))},200);
	}
}





















};
obj764_onLoad_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj764_onLoad_activeActionGroupIndex = -1;
		$("#obj764").trigger("obj764_onLoad_ended");
		
		return;
	}
	window.obj764_onLoad_activeActionGroupIndex = 4;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		


























/*
 *
 *   obj764: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj764_onLoad_activeActionGroupIndex != -1) return;
var obj764_onLoad_runningActionsCount = 0;
var obj764_onLoad_loopCount = 0;
obj764_onLoad_actionGroup0();
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
	
$("#obj587").trigger('SCEventShow');
$("#obj759").trigger('SCEventShow');
	$(window).trigger(PubCoder.Events.PageReady);
	
});