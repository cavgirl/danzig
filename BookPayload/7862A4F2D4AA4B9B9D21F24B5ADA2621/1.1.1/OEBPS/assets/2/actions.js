pubcoder.projectID = "18658B6D99D44CD8BE3D25481D40B4A6";
pubcoder.project.id = "18658B6D99D44CD8BE3D25481D40B4A6";
pubcoder.project.title = "Lisa Townsend\'s Project";
pubcoder.page.id = 468;
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
var obj560_onLoad_activeActionGroupIndex = -1;
var obj560_onLoad_runningActionsCount = 0;
var obj560_onLoad_loopCount = 0;
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
		
obj560_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj560_onLoad_activeActionGroupIndex = -1;
		$("#obj560").trigger("obj560_onLoad_ended");
		
		return;
	}
	window.obj560_onLoad_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj492 
show_563();
function show_563() {
	window.obj560_onLoad_runningActionsCount = obj560_onLoad_runningActionsCount + 1;
	$("#obj492").fadeIn(0, function() {
			setTimeout(function() {
				window.obj560_onLoad_runningActionsCount = window.obj560_onLoad_runningActionsCount - 1;
if (window.obj560_onLoad_runningActionsCount == 0) {
	obj560_onLoad_actionGroup1();
}
				$("#obj492").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj560_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj560_onLoad_activeActionGroupIndex = -1;
		$("#obj560").trigger("obj560_onLoad_ended");
		
		return;
	}
	window.obj560_onLoad_activeActionGroupIndex = 1;
	








//	action: wait
wait_564();
function wait_564() {
	window.obj560_onLoad_runningActionsCount = obj560_onLoad_runningActionsCount + 1;
	setTimeout(function() {
		window.obj560_onLoad_runningActionsCount = window.obj560_onLoad_runningActionsCount - 1;
if (window.obj560_onLoad_runningActionsCount == 0) {
	obj560_onLoad_actionGroup2();
}
	}, 5000);
}












};
obj560_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj560_onLoad_activeActionGroupIndex = -1;
		$("#obj560").trigger("obj560_onLoad_ended");
		
		return;
	}
	window.obj560_onLoad_activeActionGroupIndex = 2;
	

//	action: hide
//	target: obj492 
hide_565();
function hide_565() {
	window.obj560_onLoad_runningActionsCount = obj560_onLoad_runningActionsCount + 1;
	$("#obj492").fadeOut(2000, function() {
			setTimeout(function() {
				window.obj560_onLoad_runningActionsCount = window.obj560_onLoad_runningActionsCount - 1;
if (window.obj560_onLoad_runningActionsCount == 0) {
	obj560_onLoad_actionGroup3();
}
			}, 1);
		}
	);
}




















};
obj560_onLoad_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj560_onLoad_activeActionGroupIndex = -1;
		$("#obj560").trigger("obj560_onLoad_ended");
		
		return;
	}
	window.obj560_onLoad_activeActionGroupIndex = 3;
	

//	action: show 
//	target: obj517 
show_566();
function show_566() {
	window.obj560_onLoad_runningActionsCount = obj560_onLoad_runningActionsCount + 1;
	$("#obj517").fadeIn(0, function() {
			setTimeout(function() {
				window.obj560_onLoad_runningActionsCount = window.obj560_onLoad_runningActionsCount - 1;
if (window.obj560_onLoad_runningActionsCount == 0) {
	obj560_onLoad_actionGroup4();
}
				$("#obj517").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj560_onLoad_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj560_onLoad_activeActionGroupIndex = -1;
		$("#obj560").trigger("obj560_onLoad_ended");
		
		return;
	}
	window.obj560_onLoad_activeActionGroupIndex = 4;
	








//	action: wait
wait_567();
function wait_567() {
	window.obj560_onLoad_runningActionsCount = obj560_onLoad_runningActionsCount + 1;
	setTimeout(function() {
		window.obj560_onLoad_runningActionsCount = window.obj560_onLoad_runningActionsCount - 1;
if (window.obj560_onLoad_runningActionsCount == 0) {
	obj560_onLoad_actionGroup5();
}
	}, 5000);
}












};
obj560_onLoad_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj560_onLoad_activeActionGroupIndex = -1;
		$("#obj560").trigger("obj560_onLoad_ended");
		
		return;
	}
	window.obj560_onLoad_activeActionGroupIndex = 5;
	

//	action: hide
//	target: obj517 
hide_568();
function hide_568() {
	window.obj560_onLoad_runningActionsCount = obj560_onLoad_runningActionsCount + 1;
	$("#obj517").fadeOut(2000, function() {
			setTimeout(function() {
				window.obj560_onLoad_runningActionsCount = window.obj560_onLoad_runningActionsCount - 1;
if (window.obj560_onLoad_runningActionsCount == 0) {
	obj560_onLoad_actionGroup6();
}
			}, 1);
		}
	);
}
//	action: hide
//	target: obj528 
hide_569();
function hide_569() {
	window.obj560_onLoad_runningActionsCount = obj560_onLoad_runningActionsCount + 1;
	$("#obj528").fadeOut(2000, function() {
			setTimeout(function() {
				window.obj560_onLoad_runningActionsCount = window.obj560_onLoad_runningActionsCount - 1;
if (window.obj560_onLoad_runningActionsCount == 0) {
	obj560_onLoad_actionGroup6();
}
			}, 1);
		}
	);
}




















};
obj560_onLoad_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj560_onLoad_activeActionGroupIndex = -1;
		$("#obj560").trigger("obj560_onLoad_ended");
		
		return;
	}
	window.obj560_onLoad_activeActionGroupIndex = 6;
	

//	action: show 
//	target: obj523 
show_570();
function show_570() {
	window.obj560_onLoad_runningActionsCount = obj560_onLoad_runningActionsCount + 1;
	$("#obj523").fadeIn(0, function() {
			setTimeout(function() {
				window.obj560_onLoad_runningActionsCount = window.obj560_onLoad_runningActionsCount - 1;
if (window.obj560_onLoad_runningActionsCount == 0) {
	obj560_onLoad_actionGroup7();
}
				$("#obj523").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj560_onLoad_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj560_onLoad_activeActionGroupIndex = -1;
		$("#obj560").trigger("obj560_onLoad_ended");
		
		return;
	}
	window.obj560_onLoad_activeActionGroupIndex = 7;
	





















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
//	target: page1
goToPage_746();
function goToPage_746() {
	var isPreview = false;
	if (isPreview) {
		$(location).attr('href', '../1/page.xhtml');
	} else {
		setTimeout(function(){ parent.SCHtmlController.goToPageViewer(parent.SCHtmlController.getPageForView(1))},200);
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
//	target: page3
goToPage_750();
function goToPage_750() {
	var isPreview = false;
	if (isPreview) {
		$(location).attr('href', '../3/page.xhtml');
	} else {
		setTimeout(function(){ parent.SCHtmlController.goToPageViewer(parent.SCHtmlController.getPageForView(3))},200);
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
 *   obj560: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj560_onLoad_activeActionGroupIndex != -1) return;
var obj560_onLoad_runningActionsCount = 0;
var obj560_onLoad_loopCount = 0;
obj560_onLoad_actionGroup0();
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
	
$("#obj497").trigger('SCEventShow');
$("#obj543").trigger('SCEventShow');
$("#obj545").trigger('SCEventShow');
$("#obj547").trigger('SCEventShow');
$("#obj549").trigger('SCEventShow');
$("#obj553").trigger('SCEventShow');
$("#obj555").trigger('SCEventShow');
$("#obj528").trigger('SCEventShow');
$("#obj517").trigger('SCEventShow');
$("#obj492").trigger('SCEventShow');
$("#obj744").trigger('SCEventShow');
$("#obj747").trigger('SCEventShow');
	$(window).trigger(PubCoder.Events.PageReady);
	
});