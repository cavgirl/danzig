pubcoder.projectID = "18658B6D99D44CD8BE3D25481D40B4A6";
pubcoder.project.id = "18658B6D99D44CD8BE3D25481D40B4A6";
pubcoder.project.title = "Lisa Townsend\'s Project";
pubcoder.page.id = 165;
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
var obj424_onLoad_activeActionGroupIndex = -1;
var obj424_onLoad_runningActionsCount = 0;
var obj424_onLoad_loopCount = 0;
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
		
obj424_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj424_onLoad_activeActionGroupIndex = -1;
		$("#obj424").trigger("obj424_onLoad_ended");
		
		return;
	}
	window.obj424_onLoad_activeActionGroupIndex = 0;
	








//	action: wait
wait_702();
function wait_702() {
	window.obj424_onLoad_runningActionsCount = obj424_onLoad_runningActionsCount + 1;
	setTimeout(function() {
		window.obj424_onLoad_runningActionsCount = window.obj424_onLoad_runningActionsCount - 1;
if (window.obj424_onLoad_runningActionsCount == 0) {
	obj424_onLoad_actionGroup1();
}
	}, 7000);
}












};
obj424_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj424_onLoad_activeActionGroupIndex = -1;
		$("#obj424").trigger("obj424_onLoad_ended");
		
		return;
	}
	window.obj424_onLoad_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj681 
hide_703();
function hide_703() {
	window.obj424_onLoad_runningActionsCount = obj424_onLoad_runningActionsCount + 1;
	$("#obj681").fadeOut(2000, function() {
			setTimeout(function() {
				window.obj424_onLoad_runningActionsCount = window.obj424_onLoad_runningActionsCount - 1;
if (window.obj424_onLoad_runningActionsCount == 0) {
	obj424_onLoad_actionGroup2();
}
			}, 1);
		}
	);
}
//	action: hide
//	target: obj420 
hide_427();
function hide_427() {
	window.obj424_onLoad_runningActionsCount = obj424_onLoad_runningActionsCount + 1;
	$("#obj420").fadeOut(2000, function() {
			setTimeout(function() {
				window.obj424_onLoad_runningActionsCount = window.obj424_onLoad_runningActionsCount - 1;
if (window.obj424_onLoad_runningActionsCount == 0) {
	obj424_onLoad_actionGroup2();
}
			}, 1);
		}
	);
}
//	action: hide
//	target: obj704 
hide_706();
function hide_706() {
	window.obj424_onLoad_runningActionsCount = obj424_onLoad_runningActionsCount + 1;
	$("#obj704").fadeOut(2000, function() {
			setTimeout(function() {
				window.obj424_onLoad_runningActionsCount = window.obj424_onLoad_runningActionsCount - 1;
if (window.obj424_onLoad_runningActionsCount == 0) {
	obj424_onLoad_actionGroup2();
}
			}, 1);
		}
	);
}




















};
obj424_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj424_onLoad_activeActionGroupIndex = -1;
		$("#obj424").trigger("obj424_onLoad_ended");
		
		return;
	}
	window.obj424_onLoad_activeActionGroupIndex = 2;
	

//	action: show 
//	target: obj700 
show_434();
function show_434() {
	window.obj424_onLoad_runningActionsCount = obj424_onLoad_runningActionsCount + 1;
	$("#obj700").fadeIn(1000, function() {
			setTimeout(function() {
				window.obj424_onLoad_runningActionsCount = window.obj424_onLoad_runningActionsCount - 1;
if (window.obj424_onLoad_runningActionsCount == 0) {
	obj424_onLoad_actionGroup3();
}
				$("#obj700").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj424_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj424_onLoad_activeActionGroupIndex = -1;
		$("#obj424").trigger("obj424_onLoad_ended");
		
		return;
	}
	window.obj424_onLoad_activeActionGroupIndex = 3;
	





















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
//	target: page5
goToPage_746();
function goToPage_746() {
	var isPreview = false;
	if (isPreview) {
		$(location).attr('href', '../5/page.xhtml');
	} else {
		setTimeout(function(){ parent.SCHtmlController.goToPageViewer(parent.SCHtmlController.getPageForView(5))},200);
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
//	target: page7
goToPage_750();
function goToPage_750() {
	var isPreview = false;
	if (isPreview) {
		$(location).attr('href', '../7/page.xhtml');
	} else {
		setTimeout(function(){ parent.SCHtmlController.goToPageViewer(parent.SCHtmlController.getPageForView(7))},200);
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
 *   obj424: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj424_onLoad_activeActionGroupIndex != -1) return;
var obj424_onLoad_runningActionsCount = 0;
var obj424_onLoad_loopCount = 0;
obj424_onLoad_actionGroup0();
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
	
$("#obj684").trigger('SCEventShow');
$("#obj420").trigger('SCEventShow');
$("#obj704").trigger('SCEventShow');
$("#obj681").trigger('SCEventShow');
$("#obj744").trigger('SCEventShow');
$("#obj747").trigger('SCEventShow');
	$(window).trigger(PubCoder.Events.PageReady);
	
});