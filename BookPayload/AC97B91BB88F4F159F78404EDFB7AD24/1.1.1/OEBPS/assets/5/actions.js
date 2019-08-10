pubcoder.projectID = "18658B6D99D44CD8BE3D25481D40B4A6";
pubcoder.project.id = "18658B6D99D44CD8BE3D25481D40B4A6";
pubcoder.project.title = "Lisa Townsend\'s Project";
pubcoder.page.id = 164;
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
var obj644_onLoad_activeActionGroupIndex = -1;
var obj644_onLoad_runningActionsCount = 0;
var obj644_onLoad_loopCount = 0;
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
		
obj644_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj644_onLoad_activeActionGroupIndex = -1;
		$("#obj644").trigger("obj644_onLoad_ended");
		
		return;
	}
	window.obj644_onLoad_activeActionGroupIndex = 0;
	








//	action: wait
wait_647();
function wait_647() {
	window.obj644_onLoad_runningActionsCount = obj644_onLoad_runningActionsCount + 1;
	setTimeout(function() {
		window.obj644_onLoad_runningActionsCount = window.obj644_onLoad_runningActionsCount - 1;
if (window.obj644_onLoad_runningActionsCount == 0) {
	obj644_onLoad_actionGroup1();
}
	}, 22000);
}












};
obj644_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj644_onLoad_activeActionGroupIndex = -1;
		$("#obj644").trigger("obj644_onLoad_ended");
		
		return;
	}
	window.obj644_onLoad_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj386 
hide_648();
function hide_648() {
	window.obj644_onLoad_runningActionsCount = obj644_onLoad_runningActionsCount + 1;
	$("#obj386").fadeOut(2000, function() {
			setTimeout(function() {
				window.obj644_onLoad_runningActionsCount = window.obj644_onLoad_runningActionsCount - 1;
if (window.obj644_onLoad_runningActionsCount == 0) {
	obj644_onLoad_actionGroup2();
}
			}, 1);
		}
	);
}
//	action: hide
//	target: obj640 
hide_649();
function hide_649() {
	window.obj644_onLoad_runningActionsCount = obj644_onLoad_runningActionsCount + 1;
	$("#obj640").fadeOut(2000, function() {
			setTimeout(function() {
				window.obj644_onLoad_runningActionsCount = window.obj644_onLoad_runningActionsCount - 1;
if (window.obj644_onLoad_runningActionsCount == 0) {
	obj644_onLoad_actionGroup2();
}
			}, 1);
		}
	);
}
//	action: show 
//	target: obj642 
show_650();
function show_650() {
	window.obj644_onLoad_runningActionsCount = obj644_onLoad_runningActionsCount + 1;
	$("#obj642").fadeIn(0, function() {
			setTimeout(function() {
				window.obj644_onLoad_runningActionsCount = window.obj644_onLoad_runningActionsCount - 1;
if (window.obj644_onLoad_runningActionsCount == 0) {
	obj644_onLoad_actionGroup2();
}
				$("#obj642").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj644_onLoad_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj644_onLoad_activeActionGroupIndex = -1;
		$("#obj644").trigger("obj644_onLoad_ended");
		
		return;
	}
	window.obj644_onLoad_activeActionGroupIndex = 2;
	





















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
//	target: page4
goToPage_746();
function goToPage_746() {
	var isPreview = false;
	if (isPreview) {
		$(location).attr('href', '../4/page.xhtml');
	} else {
		setTimeout(function(){ parent.SCHtmlController.goToPageViewer(parent.SCHtmlController.getPageForView(4))},200);
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
//	target: page6
goToPage_750();
function goToPage_750() {
	var isPreview = false;
	if (isPreview) {
		$(location).attr('href', '../6/page.xhtml');
	} else {
		setTimeout(function(){ parent.SCHtmlController.goToPageViewer(parent.SCHtmlController.getPageForView(6))},200);
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
 *   obj644: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj644_onLoad_activeActionGroupIndex != -1) return;
var obj644_onLoad_runningActionsCount = 0;
var obj644_onLoad_loopCount = 0;
obj644_onLoad_actionGroup0();
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
	
$("#obj314").trigger('SCEventShow');
$("#obj640").trigger('SCEventShow');
$("#obj386").trigger('SCEventShow');
$("#obj744").trigger('SCEventShow');
$("#obj747").trigger('SCEventShow');
	$(window).trigger(PubCoder.Events.PageReady);
	
});