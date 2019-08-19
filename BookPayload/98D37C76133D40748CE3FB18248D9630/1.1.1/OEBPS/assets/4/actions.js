pubcoder.projectID = "F59E419BBB6A46269DE4AA47FC599515";
pubcoder.project.id = "F59E419BBB6A46269DE4AA47FC599515";
pubcoder.project.title = "Danzig2";
pubcoder.page.id = 367;
pubcoder.page.title = "3";
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
var obj413_onTap_activeActionGroupIndex = -1;
var obj413_onTap_runningActionsCount = 0;
var obj413_onTap_loopCount = 0;
var obj425_onTap_activeActionGroupIndex = -1;
var obj425_onTap_runningActionsCount = 0;
var obj425_onTap_loopCount = 0;
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
		
obj413_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj413_onTap_activeActionGroupIndex = -1;
		$("#obj413").trigger("obj413_onTap_ended");
		
		return;
	}
	window.obj413_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj413 
hide_415();
function hide_415() {
	window.obj413_onTap_runningActionsCount = obj413_onTap_runningActionsCount + 1;
	$("#obj413").fadeOut(0, function() {
			setTimeout(function() {
				window.obj413_onTap_runningActionsCount = window.obj413_onTap_runningActionsCount - 1;
if (window.obj413_onTap_runningActionsCount == 0) {
	obj413_onTap_actionGroup1();
}
			}, 1);
		}
	);
}
//	action: hide
//	target: obj406 
hide_416();
function hide_416() {
	window.obj413_onTap_runningActionsCount = obj413_onTap_runningActionsCount + 1;
	$("#obj406").fadeOut(1000, function() {
			setTimeout(function() {
				window.obj413_onTap_runningActionsCount = window.obj413_onTap_runningActionsCount - 1;
if (window.obj413_onTap_runningActionsCount == 0) {
	obj413_onTap_actionGroup1();
}
			}, 1);
		}
	);
}
//	action: hide
//	target: obj410 
hide_417();
function hide_417() {
	window.obj413_onTap_runningActionsCount = obj413_onTap_runningActionsCount + 1;
	$("#obj410").fadeOut(1000, function() {
			setTimeout(function() {
				window.obj413_onTap_runningActionsCount = window.obj413_onTap_runningActionsCount - 1;
if (window.obj413_onTap_runningActionsCount == 0) {
	obj413_onTap_actionGroup1();
}
			}, 1);
		}
	);
}
//	action: show 
//	target: obj437 
show_419();
function show_419() {
	window.obj413_onTap_runningActionsCount = obj413_onTap_runningActionsCount + 1;
	$("#obj437").fadeIn(1000, function() {
			setTimeout(function() {
				window.obj413_onTap_runningActionsCount = window.obj413_onTap_runningActionsCount - 1;
if (window.obj413_onTap_runningActionsCount == 0) {
	obj413_onTap_actionGroup1();
}
				$("#obj437").trigger('SCEventShow');
			}, 1);
		}
	);
}
//	action: show 
//	target: obj391 
show_420();
function show_420() {
	window.obj413_onTap_runningActionsCount = obj413_onTap_runningActionsCount + 1;
	$("#obj391").fadeIn(1000, function() {
			setTimeout(function() {
				window.obj413_onTap_runningActionsCount = window.obj413_onTap_runningActionsCount - 1;
if (window.obj413_onTap_runningActionsCount == 0) {
	obj413_onTap_actionGroup1();
}
				$("#obj391").trigger('SCEventShow');
			}, 1);
		}
	);
}
//	action: move
//	target: obj383 
move_418();
function move_418() {
	window.obj413_onTap_runningActionsCount = obj413_onTap_runningActionsCount + 1;

	var easing = "ease";
	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}
	var targetObject = $("#obj383");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=3";
	var moveY = "+=-226";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj413_onTap_runningActionsCount = window.obj413_onTap_runningActionsCount - 1;
if (window.obj413_onTap_runningActionsCount == 0) {
	obj413_onTap_actionGroup1();
}
		}, 1);
	});
}



















};
obj413_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj413_onTap_activeActionGroupIndex = -1;
		$("#obj413").trigger("obj413_onTap_ended");
		
		return;
	}
	window.obj413_onTap_activeActionGroupIndex = 1;
	





















};
obj425_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj425_onTap_activeActionGroupIndex = -1;
		$("#obj425").trigger("obj425_onTap_ended");
		
		return;
	}
	window.obj425_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj425 
hide_427();
function hide_427() {
	window.obj425_onTap_runningActionsCount = obj425_onTap_runningActionsCount + 1;
	$("#obj425").fadeOut(0, function() {
			setTimeout(function() {
				window.obj425_onTap_runningActionsCount = window.obj425_onTap_runningActionsCount - 1;
if (window.obj425_onTap_runningActionsCount == 0) {
	obj425_onTap_actionGroup1();
}
			}, 1);
		}
	);
}
//	action: hide
//	target: obj423 
hide_428();
function hide_428() {
	window.obj425_onTap_runningActionsCount = obj425_onTap_runningActionsCount + 1;
	$("#obj423").fadeOut(0, function() {
			setTimeout(function() {
				window.obj425_onTap_runningActionsCount = window.obj425_onTap_runningActionsCount - 1;
if (window.obj425_onTap_runningActionsCount == 0) {
	obj425_onTap_actionGroup1();
}
			}, 1);
		}
	);
}
//	action: hide
//	target: obj421 
hide_429();
function hide_429() {
	window.obj425_onTap_runningActionsCount = obj425_onTap_runningActionsCount + 1;
	$("#obj421").fadeOut(0, function() {
			setTimeout(function() {
				window.obj425_onTap_runningActionsCount = window.obj425_onTap_runningActionsCount - 1;
if (window.obj425_onTap_runningActionsCount == 0) {
	obj425_onTap_actionGroup1();
}
			}, 1);
		}
	);
}
//	action: show 
//	target: obj368 
show_430();
function show_430() {
	window.obj425_onTap_runningActionsCount = obj425_onTap_runningActionsCount + 1;
	$("#obj368").fadeIn(0, function() {
			setTimeout(function() {
				window.obj425_onTap_runningActionsCount = window.obj425_onTap_runningActionsCount - 1;
if (window.obj425_onTap_runningActionsCount == 0) {
	obj425_onTap_actionGroup1();
}
				$("#obj368").trigger('SCEventShow');
			}, 1);
		}
	);
}
//	action: show 
//	target: obj385 
show_431();
function show_431() {
	window.obj425_onTap_runningActionsCount = obj425_onTap_runningActionsCount + 1;
	$("#obj385").fadeIn(0, function() {
			setTimeout(function() {
				window.obj425_onTap_runningActionsCount = window.obj425_onTap_runningActionsCount - 1;
if (window.obj425_onTap_runningActionsCount == 0) {
	obj425_onTap_actionGroup1();
}
				$("#obj385").trigger('SCEventShow');
			}, 1);
		}
	);
}
//	action: show 
//	target: obj406 
show_432();
function show_432() {
	window.obj425_onTap_runningActionsCount = obj425_onTap_runningActionsCount + 1;
	$("#obj406").fadeIn(0, function() {
			setTimeout(function() {
				window.obj425_onTap_runningActionsCount = window.obj425_onTap_runningActionsCount - 1;
if (window.obj425_onTap_runningActionsCount == 0) {
	obj425_onTap_actionGroup1();
}
				$("#obj406").trigger('SCEventShow');
			}, 1);
		}
	);
}
//	action: show 
//	target: obj410 
show_433();
function show_433() {
	window.obj425_onTap_runningActionsCount = obj425_onTap_runningActionsCount + 1;
	$("#obj410").fadeIn(0, function() {
			setTimeout(function() {
				window.obj425_onTap_runningActionsCount = window.obj425_onTap_runningActionsCount - 1;
if (window.obj425_onTap_runningActionsCount == 0) {
	obj425_onTap_actionGroup1();
}
				$("#obj410").trigger('SCEventShow');
			}, 1);
		}
	);
}
//	action: show 
//	target: obj383 
show_434();
function show_434() {
	window.obj425_onTap_runningActionsCount = obj425_onTap_runningActionsCount + 1;
	$("#obj383").fadeIn(0, function() {
			setTimeout(function() {
				window.obj425_onTap_runningActionsCount = window.obj425_onTap_runningActionsCount - 1;
if (window.obj425_onTap_runningActionsCount == 0) {
	obj425_onTap_actionGroup1();
}
				$("#obj383").trigger('SCEventShow');
			}, 1);
		}
	);
}
//	action: show 
//	target: obj413 
show_435();
function show_435() {
	window.obj425_onTap_runningActionsCount = obj425_onTap_runningActionsCount + 1;
	$("#obj413").fadeIn(0, function() {
			setTimeout(function() {
				window.obj425_onTap_runningActionsCount = window.obj425_onTap_runningActionsCount - 1;
if (window.obj425_onTap_runningActionsCount == 0) {
	obj425_onTap_actionGroup1();
}
				$("#obj413").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj425_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj425_onTap_activeActionGroupIndex = -1;
		$("#obj425").trigger("obj425_onTap_ended");
		
		return;
	}
	window.obj425_onTap_activeActionGroupIndex = 1;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		




















































/*
 *
 *   obj413: Event Touch Down
 *
 */
 
$("#obj413").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj413_onTap_activeActionGroupIndex != -1) return;
var obj413_onTap_runningActionsCount = 0;
var obj413_onTap_loopCount = 0;
obj413_onTap_actionGroup0();
});





















/*
 *
 *   obj425: Event Touch Down
 *
 */
 
$("#obj425").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj425_onTap_activeActionGroupIndex != -1) return;
var obj425_onTap_runningActionsCount = 0;
var obj425_onTap_loopCount = 0;
obj425_onTap_actionGroup0();
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
	
$("#obj421").trigger('SCEventShow');
$("#obj423").trigger('SCEventShow');
$("#obj425").trigger('SCEventShow');
	$(window).trigger(PubCoder.Events.PageReady);
	
});