pubcoder.projectID = "18658B6D99D44CD8BE3D25481D40B4A6";
pubcoder.project.id = "18658B6D99D44CD8BE3D25481D40B4A6";
pubcoder.project.title = "Lisa Townsend\'s Project";
pubcoder.page.id = 205;
pubcoder.page.title = "3";
pubcoder.page.number = 3;
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
var obj220_onShow_activeActionGroupIndex = -1;
var obj220_onShow_runningActionsCount = 0;
var obj220_onShow_loopCount = 0;
var obj239_onShow_activeActionGroupIndex = -1;
var obj239_onShow_runningActionsCount = 0;
var obj239_onShow_loopCount = 0;
var obj231_onLoad_activeActionGroupIndex = -1;
var obj231_onLoad_runningActionsCount = 0;
var obj231_onLoad_loopCount = 0;
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
		
obj220_onShow_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj220_onShow_activeActionGroupIndex = -1;
		$("#obj220").trigger("obj220_onShow_ended");
		
		return;
	}
	window.obj220_onShow_activeActionGroupIndex = 0;
	








//	action: wait
wait_629();
function wait_629() {
	window.obj220_onShow_runningActionsCount = obj220_onShow_runningActionsCount + 1;
	setTimeout(function() {
		window.obj220_onShow_runningActionsCount = window.obj220_onShow_runningActionsCount - 1;
if (window.obj220_onShow_runningActionsCount == 0) {
	obj220_onShow_actionGroup1();
}
	}, 2000);
}












};
obj220_onShow_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj220_onShow_activeActionGroupIndex = -1;
		$("#obj220").trigger("obj220_onShow_ended");
		
		return;
	}
	window.obj220_onShow_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj220 
hide_630();
function hide_630() {
	window.obj220_onShow_runningActionsCount = obj220_onShow_runningActionsCount + 1;
	$("#obj220").fadeOut(2000, function() {
			setTimeout(function() {
				window.obj220_onShow_runningActionsCount = window.obj220_onShow_runningActionsCount - 1;
if (window.obj220_onShow_runningActionsCount == 0) {
	obj220_onShow_actionGroup2();
}
			}, 1);
		}
	);
}




















};
obj220_onShow_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj220_onShow_activeActionGroupIndex = -1;
		$("#obj220").trigger("obj220_onShow_ended");
		
		return;
	}
	window.obj220_onShow_activeActionGroupIndex = 2;
	





















};
obj239_onShow_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj239_onShow_activeActionGroupIndex = -1;
		$("#obj239").trigger("obj239_onShow_ended");
		
		return;
	}
	window.obj239_onShow_activeActionGroupIndex = 0;
	








//	action: wait
wait_273();
function wait_273() {
	window.obj239_onShow_runningActionsCount = obj239_onShow_runningActionsCount + 1;
	setTimeout(function() {
		window.obj239_onShow_runningActionsCount = window.obj239_onShow_runningActionsCount - 1;
if (window.obj239_onShow_runningActionsCount == 0) {
	obj239_onShow_actionGroup1();
}
	}, 2000);
}












};
obj239_onShow_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj239_onShow_activeActionGroupIndex = -1;
		$("#obj239").trigger("obj239_onShow_ended");
		
		return;
	}
	window.obj239_onShow_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj239 
hide_274();
function hide_274() {
	window.obj239_onShow_runningActionsCount = obj239_onShow_runningActionsCount + 1;
	$("#obj239").fadeOut(2000, function() {
			setTimeout(function() {
				window.obj239_onShow_runningActionsCount = window.obj239_onShow_runningActionsCount - 1;
if (window.obj239_onShow_runningActionsCount == 0) {
	obj239_onShow_actionGroup2();
}
			}, 1);
		}
	);
}




















};
obj239_onShow_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj239_onShow_activeActionGroupIndex = -1;
		$("#obj239").trigger("obj239_onShow_ended");
		
		return;
	}
	window.obj239_onShow_activeActionGroupIndex = 2;
	





















};
obj231_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj231_onLoad_activeActionGroupIndex = -1;
		$("#obj231").trigger("obj231_onLoad_ended");
		
		return;
	}
	window.obj231_onLoad_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj220 
show_632();
function show_632() {
	window.obj231_onLoad_runningActionsCount = obj231_onLoad_runningActionsCount + 1;
	$("#obj220").fadeIn(0, function() {
			setTimeout(function() {
				window.obj231_onLoad_runningActionsCount = window.obj231_onLoad_runningActionsCount - 1;
if (window.obj231_onLoad_runningActionsCount == 0) {
	obj231_onLoad_actionGroup1();
}
				$("#obj220").trigger('SCEventShow');
			}, 1);
		}
	);
}







//	action: wait
wait_631();
function wait_631() {
	window.obj231_onLoad_runningActionsCount = obj231_onLoad_runningActionsCount + 1;
	setTimeout(function() {
		window.obj231_onLoad_runningActionsCount = window.obj231_onLoad_runningActionsCount - 1;
if (window.obj231_onLoad_runningActionsCount == 0) {
	obj231_onLoad_actionGroup1();
}
	}, 2000);
}












};
obj231_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj231_onLoad_activeActionGroupIndex = -1;
		$("#obj231").trigger("obj231_onLoad_ended");
		
		return;
	}
	window.obj231_onLoad_activeActionGroupIndex = 1;
	








//	action: wait
wait_235();
function wait_235() {
	window.obj231_onLoad_runningActionsCount = obj231_onLoad_runningActionsCount + 1;
	setTimeout(function() {
		window.obj231_onLoad_runningActionsCount = window.obj231_onLoad_runningActionsCount - 1;
if (window.obj231_onLoad_runningActionsCount == 0) {
	obj231_onLoad_actionGroup2();
}
	}, 7000);
}












};
obj231_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj231_onLoad_activeActionGroupIndex = -1;
		$("#obj231").trigger("obj231_onLoad_ended");
		
		return;
	}
	window.obj231_onLoad_activeActionGroupIndex = 2;
	

//	action: hide
//	target: obj218 
hide_245();
function hide_245() {
	window.obj231_onLoad_runningActionsCount = obj231_onLoad_runningActionsCount + 1;
	$("#obj218").fadeOut(0, function() {
			setTimeout(function() {
				window.obj231_onLoad_runningActionsCount = window.obj231_onLoad_runningActionsCount - 1;
if (window.obj231_onLoad_runningActionsCount == 0) {
	obj231_onLoad_actionGroup3();
}
			}, 1);
		}
	);
}
//	action: hide
//	target: obj220 
hide_246();
function hide_246() {
	window.obj231_onLoad_runningActionsCount = obj231_onLoad_runningActionsCount + 1;
	$("#obj220").fadeOut(0, function() {
			setTimeout(function() {
				window.obj231_onLoad_runningActionsCount = window.obj231_onLoad_runningActionsCount - 1;
if (window.obj231_onLoad_runningActionsCount == 0) {
	obj231_onLoad_actionGroup3();
}
			}, 1);
		}
	);
}
//	action: show 
//	target: obj237 
show_241();
function show_241() {
	window.obj231_onLoad_runningActionsCount = obj231_onLoad_runningActionsCount + 1;
	$("#obj237").fadeIn(0, function() {
			setTimeout(function() {
				window.obj231_onLoad_runningActionsCount = window.obj231_onLoad_runningActionsCount - 1;
if (window.obj231_onLoad_runningActionsCount == 0) {
	obj231_onLoad_actionGroup3();
}
				$("#obj237").trigger('SCEventShow');
			}, 1);
		}
	);
}
//	action: show 
//	target: obj239 
show_633();
function show_633() {
	window.obj231_onLoad_runningActionsCount = obj231_onLoad_runningActionsCount + 1;
	$("#obj239").fadeIn(0, function() {
			setTimeout(function() {
				window.obj231_onLoad_runningActionsCount = window.obj231_onLoad_runningActionsCount - 1;
if (window.obj231_onLoad_runningActionsCount == 0) {
	obj231_onLoad_actionGroup3();
}
				$("#obj239").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj231_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj231_onLoad_activeActionGroupIndex = -1;
		$("#obj231").trigger("obj231_onLoad_ended");
		
		return;
	}
	window.obj231_onLoad_activeActionGroupIndex = 3;
	





















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
//	target: page2
goToPage_746();
function goToPage_746() {
	var isPreview = false;
	if (isPreview) {
		$(location).attr('href', '../2/page.xhtml');
	} else {
		setTimeout(function(){ parent.SCHtmlController.goToPageViewer(parent.SCHtmlController.getPageForView(2))},200);
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
//	target: page4
goToPage_750();
function goToPage_750() {
	var isPreview = false;
	if (isPreview) {
		$(location).attr('href', '../4/page.xhtml');
	} else {
		setTimeout(function(){ parent.SCHtmlController.goToPageViewer(parent.SCHtmlController.getPageForView(4))},200);
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
 *   obj220: Event Show
 *
 */
 
$("#obj220").bind('SCEventShow', function(event) {
	if (window.obj220_onShow_activeActionGroupIndex != -1) return;
var obj220_onShow_runningActionsCount = 0;
var obj220_onShow_loopCount = 0;
obj220_onShow_actionGroup0();
});














/*
 *
 *   obj239: Event Show
 *
 */
 
$("#obj239").bind('SCEventShow', function(event) {
	if (window.obj239_onShow_activeActionGroupIndex != -1) return;
var obj239_onShow_runningActionsCount = 0;
var obj239_onShow_loopCount = 0;
obj239_onShow_actionGroup0();
});







/*
 *
 *   obj231: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj231_onLoad_activeActionGroupIndex != -1) return;
var obj231_onLoad_runningActionsCount = 0;
var obj231_onLoad_loopCount = 0;
obj231_onLoad_actionGroup0();
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
	
$("#obj627").trigger('SCEventShow');
$("#obj651").trigger('SCEventShow');
$("#obj589").trigger('SCEventShow');
$("#obj275").trigger('SCEventShow');
$("#obj210").trigger('SCEventShow');
$("#obj218").trigger('SCEventShow');
$("#obj231").trigger('SCEventShow');
$("#obj744").trigger('SCEventShow');
$("#obj747").trigger('SCEventShow');
	$(window).trigger(PubCoder.Events.PageReady);
	
});