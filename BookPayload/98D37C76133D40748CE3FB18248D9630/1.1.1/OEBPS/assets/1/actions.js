pubcoder.projectID = "F59E419BBB6A46269DE4AA47FC599515";
pubcoder.project.id = "F59E419BBB6A46269DE4AA47FC599515";
pubcoder.project.title = "Danzig2";
pubcoder.page.id = 62;
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
var obj71_onLoad_activeActionGroupIndex = -1;
var obj71_onLoad_runningActionsCount = 0;
var obj71_onLoad_loopCount = 0;
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
		
obj71_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71_onLoad_activeActionGroupIndex = -1;
		$("#obj71").trigger("obj71_onLoad_ended");
		
		return;
	}
	window.obj71_onLoad_activeActionGroupIndex = 0;
	








//	action: wait
wait_74();
function wait_74() {
	window.obj71_onLoad_runningActionsCount = obj71_onLoad_runningActionsCount + 1;
	setTimeout(function() {
		window.obj71_onLoad_runningActionsCount = window.obj71_onLoad_runningActionsCount - 1;
if (window.obj71_onLoad_runningActionsCount == 0) {
	obj71_onLoad_actionGroup1();
}
	}, 1000);
}












};
obj71_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71_onLoad_activeActionGroupIndex = -1;
		$("#obj71").trigger("obj71_onLoad_ended");
		
		return;
	}
	window.obj71_onLoad_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj69 
hide_75();
function hide_75() {
	window.obj71_onLoad_runningActionsCount = obj71_onLoad_runningActionsCount + 1;
	$("#obj69").fadeOut(3000, function() {
			setTimeout(function() {
				window.obj71_onLoad_runningActionsCount = window.obj71_onLoad_runningActionsCount - 1;
if (window.obj71_onLoad_runningActionsCount == 0) {
	obj71_onLoad_actionGroup2();
}
			}, 1);
		}
	);
}
//	action: show 
//	target: obj67 
show_76();
function show_76() {
	window.obj71_onLoad_runningActionsCount = obj71_onLoad_runningActionsCount + 1;
	$("#obj67").fadeIn(3000, function() {
			setTimeout(function() {
				window.obj71_onLoad_runningActionsCount = window.obj71_onLoad_runningActionsCount - 1;
if (window.obj71_onLoad_runningActionsCount == 0) {
	obj71_onLoad_actionGroup2();
}
				$("#obj67").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj71_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71_onLoad_activeActionGroupIndex = -1;
		$("#obj71").trigger("obj71_onLoad_ended");
		
		return;
	}
	window.obj71_onLoad_activeActionGroupIndex = 2;
	

//	action: hide
//	target: obj67 
hide_77();
function hide_77() {
	window.obj71_onLoad_runningActionsCount = obj71_onLoad_runningActionsCount + 1;
	$("#obj67").fadeOut(3000, function() {
			setTimeout(function() {
				window.obj71_onLoad_runningActionsCount = window.obj71_onLoad_runningActionsCount - 1;
if (window.obj71_onLoad_runningActionsCount == 0) {
	obj71_onLoad_actionGroup3();
}
			}, 1);
		}
	);
}
//	action: show 
//	target: obj69 
show_78();
function show_78() {
	window.obj71_onLoad_runningActionsCount = obj71_onLoad_runningActionsCount + 1;
	$("#obj69").fadeIn(3000, function() {
			setTimeout(function() {
				window.obj71_onLoad_runningActionsCount = window.obj71_onLoad_runningActionsCount - 1;
if (window.obj71_onLoad_runningActionsCount == 0) {
	obj71_onLoad_actionGroup3();
}
				$("#obj69").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj71_onLoad_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71_onLoad_activeActionGroupIndex = -1;
		$("#obj71").trigger("obj71_onLoad_ended");
		
		return;
	}
	window.obj71_onLoad_activeActionGroupIndex = 3;
	
//	action: goToPage
//	target: page2
goToPage_79();
function goToPage_79() {
	var isPreview = false;
	if (isPreview) {
		$(location).attr('href', '../2/page.xhtml');
	} else {
		setTimeout(function(){ parent.SCHtmlController.goToPageViewer(parent.SCHtmlController.getPageForView(2))},200);
	}
}





















};
obj71_onLoad_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj71_onLoad_activeActionGroupIndex = -1;
		$("#obj71").trigger("obj71_onLoad_ended");
		
		return;
	}
	window.obj71_onLoad_activeActionGroupIndex = 4;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		

































/*
 *
 *   obj71: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj71_onLoad_activeActionGroupIndex != -1) return;
var obj71_onLoad_runningActionsCount = 0;
var obj71_onLoad_loopCount = 0;
obj71_onLoad_actionGroup0();
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
	
$("#obj63").trigger('SCEventShow');
$("#obj65").trigger('SCEventShow');
$("#obj69").trigger('SCEventShow');
	$(window).trigger(PubCoder.Events.PageReady);
	
});