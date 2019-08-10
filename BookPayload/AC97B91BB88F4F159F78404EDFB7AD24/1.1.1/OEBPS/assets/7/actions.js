pubcoder.projectID = "18658B6D99D44CD8BE3D25481D40B4A6";
pubcoder.project.id = "18658B6D99D44CD8BE3D25481D40B4A6";
pubcoder.project.title = "Lisa Townsend\'s Project";
pubcoder.page.id = 707;
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
var obj732_onLoad_activeActionGroupIndex = -1;
var obj732_onLoad_runningActionsCount = 0;
var obj732_onLoad_loopCount = 0;
var obj752_onTap_activeActionGroupIndex = -1;
var obj752_onTap_runningActionsCount = 0;
var obj752_onTap_loopCount = 0;
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
		
obj732_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj732_onLoad_activeActionGroupIndex = -1;
		$("#obj732").trigger("obj732_onLoad_ended");
		
		return;
	}
	window.obj732_onLoad_activeActionGroupIndex = 0;
	








//	action: wait
wait_735();
function wait_735() {
	window.obj732_onLoad_runningActionsCount = obj732_onLoad_runningActionsCount + 1;
	setTimeout(function() {
		window.obj732_onLoad_runningActionsCount = window.obj732_onLoad_runningActionsCount - 1;
if (window.obj732_onLoad_runningActionsCount == 0) {
	obj732_onLoad_actionGroup1();
}
	}, 7000);
}












};
obj732_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj732_onLoad_activeActionGroupIndex = -1;
		$("#obj732").trigger("obj732_onLoad_ended");
		
		return;
	}
	window.obj732_onLoad_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj729 
hide_736();
function hide_736() {
	window.obj732_onLoad_runningActionsCount = obj732_onLoad_runningActionsCount + 1;
	$("#obj729").fadeOut(2000, function() {
			setTimeout(function() {
				window.obj732_onLoad_runningActionsCount = window.obj732_onLoad_runningActionsCount - 1;
if (window.obj732_onLoad_runningActionsCount == 0) {
	obj732_onLoad_actionGroup2();
}
			}, 1);
		}
	);
}
//	action: hide
//	target: obj725 
hide_737();
function hide_737() {
	window.obj732_onLoad_runningActionsCount = obj732_onLoad_runningActionsCount + 1;
	$("#obj725").fadeOut(2000, function() {
			setTimeout(function() {
				window.obj732_onLoad_runningActionsCount = window.obj732_onLoad_runningActionsCount - 1;
if (window.obj732_onLoad_runningActionsCount == 0) {
	obj732_onLoad_actionGroup2();
}
			}, 1);
		}
	);
}
//	action: hide
//	target: obj727 
hide_738();
function hide_738() {
	window.obj732_onLoad_runningActionsCount = obj732_onLoad_runningActionsCount + 1;
	$("#obj727").fadeOut(2000, function() {
			setTimeout(function() {
				window.obj732_onLoad_runningActionsCount = window.obj732_onLoad_runningActionsCount - 1;
if (window.obj732_onLoad_runningActionsCount == 0) {
	obj732_onLoad_actionGroup2();
}
			}, 1);
		}
	);
}




















};
obj732_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj732_onLoad_activeActionGroupIndex = -1;
		$("#obj732").trigger("obj732_onLoad_ended");
		
		return;
	}
	window.obj732_onLoad_activeActionGroupIndex = 2;
	

//	action: show 
//	target: obj740 
show_739();
function show_739() {
	window.obj732_onLoad_runningActionsCount = obj732_onLoad_runningActionsCount + 1;
	$("#obj740").fadeIn(1000, function() {
			setTimeout(function() {
				window.obj732_onLoad_runningActionsCount = window.obj732_onLoad_runningActionsCount - 1;
if (window.obj732_onLoad_runningActionsCount == 0) {
	obj732_onLoad_actionGroup3();
}
				$("#obj740").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj732_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj732_onLoad_activeActionGroupIndex = -1;
		$("#obj732").trigger("obj732_onLoad_ended");
		
		return;
	}
	window.obj732_onLoad_activeActionGroupIndex = 3;
	





















};
obj752_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj752_onTap_activeActionGroupIndex = -1;
		$("#obj752").trigger("obj752_onTap_ended");
		
		return;
	}
	window.obj752_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
//	target: page6
goToPage_754();
function goToPage_754() {
	var isPreview = false;
	if (isPreview) {
		$(location).attr('href', '../6/page.xhtml');
	} else {
		setTimeout(function(){ parent.SCHtmlController.goToPageViewer(parent.SCHtmlController.getPageForView(6))},200);
	}
}





















};
obj752_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj752_onTap_activeActionGroupIndex = -1;
		$("#obj752").trigger("obj752_onTap_ended");
		
		return;
	}
	window.obj752_onTap_activeActionGroupIndex = 1;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		

































/*
 *
 *   obj732: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj732_onLoad_activeActionGroupIndex != -1) return;
var obj732_onLoad_runningActionsCount = 0;
var obj732_onLoad_loopCount = 0;
obj732_onLoad_actionGroup0();
});





/*
 *
 *   obj752: Event Touch Down
 *
 */
 
$("#obj752").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj752_onTap_activeActionGroupIndex != -1) return;
var obj752_onTap_runningActionsCount = 0;
var obj752_onTap_loopCount = 0;
obj752_onTap_actionGroup0();
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
	
$("#obj725").trigger('SCEventShow');
$("#obj727").trigger('SCEventShow');
$("#obj729").trigger('SCEventShow');
$("#obj752").trigger('SCEventShow');
	$(window).trigger(PubCoder.Events.PageReady);
	
});