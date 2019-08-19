pubcoder.projectID = "F59E419BBB6A46269DE4AA47FC599515";
pubcoder.project.id = "F59E419BBB6A46269DE4AA47FC599515";
pubcoder.project.title = "Danzig2";
pubcoder.page.id = 142;
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
var obj486_onTap_activeActionGroupIndex = -1;
var obj486_onTap_runningActionsCount = 0;
var obj486_onTap_loopCount = 0;
var obj339_onTap_activeActionGroupIndex = -1;
var obj339_onTap_runningActionsCount = 0;
var obj339_onTap_loopCount = 0;
var obj166_onTap_activeActionGroupIndex = -1;
var obj166_onTap_runningActionsCount = 0;
var obj166_onTap_loopCount = 0;
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
		
obj486_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj486_onTap_activeActionGroupIndex = -1;
		$("#obj486").trigger("obj486_onTap_ended");
		
		return;
	}
	window.obj486_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj486 
hide_504();
function hide_504() {
	window.obj486_onTap_runningActionsCount = obj486_onTap_runningActionsCount + 1;
	$("#obj486").fadeOut(0, function() {
			setTimeout(function() {
				window.obj486_onTap_runningActionsCount = window.obj486_onTap_runningActionsCount - 1;
if (window.obj486_onTap_runningActionsCount == 0) {
	obj486_onTap_actionGroup1();
}
			}, 1);
		}
	);
}
//	action: hide
//	target: obj178 
hide_505();
function hide_505() {
	window.obj486_onTap_runningActionsCount = obj486_onTap_runningActionsCount + 1;
	$("#obj178").fadeOut(1000, function() {
			setTimeout(function() {
				window.obj486_onTap_runningActionsCount = window.obj486_onTap_runningActionsCount - 1;
if (window.obj486_onTap_runningActionsCount == 0) {
	obj486_onTap_actionGroup1();
}
			}, 1);
		}
	);
}
//	action: hide
//	target: obj182 
hide_506();
function hide_506() {
	window.obj486_onTap_runningActionsCount = obj486_onTap_runningActionsCount + 1;
	$("#obj182").fadeOut(1000, function() {
			setTimeout(function() {
				window.obj486_onTap_runningActionsCount = window.obj486_onTap_runningActionsCount - 1;
if (window.obj486_onTap_runningActionsCount == 0) {
	obj486_onTap_actionGroup1();
}
			}, 1);
		}
	);
}
//	action: show 
//	target: obj484 
show_508();
function show_508() {
	window.obj486_onTap_runningActionsCount = obj486_onTap_runningActionsCount + 1;
	$("#obj484").fadeIn(1000, function() {
			setTimeout(function() {
				window.obj486_onTap_runningActionsCount = window.obj486_onTap_runningActionsCount - 1;
if (window.obj486_onTap_runningActionsCount == 0) {
	obj486_onTap_actionGroup1();
}
				$("#obj484").trigger('SCEventShow');
			}, 1);
		}
	);
}
//	action: show 
//	target: obj489 
show_509();
function show_509() {
	window.obj486_onTap_runningActionsCount = obj486_onTap_runningActionsCount + 1;
	$("#obj489").fadeIn(1000, function() {
			setTimeout(function() {
				window.obj486_onTap_runningActionsCount = window.obj486_onTap_runningActionsCount - 1;
if (window.obj486_onTap_runningActionsCount == 0) {
	obj486_onTap_actionGroup1();
}
				$("#obj489").trigger('SCEventShow');
			}, 1);
		}
	);
}
//	action: move
//	target: obj337 
move_507();
function move_507() {
	window.obj486_onTap_runningActionsCount = obj486_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj337");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 8;
	var moveY = -40;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj486_onTap_runningActionsCount = window.obj486_onTap_runningActionsCount - 1;
if (window.obj486_onTap_runningActionsCount == 0) {
	obj486_onTap_actionGroup1();
}
		}, 1);
	});
}



















};
obj486_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj486_onTap_activeActionGroupIndex = -1;
		$("#obj486").trigger("obj486_onTap_ended");
		
		return;
	}
	window.obj486_onTap_activeActionGroupIndex = 1;
	





















};
obj339_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj339_onTap_activeActionGroupIndex = -1;
		$("#obj339").trigger("obj339_onTap_ended");
		
		return;
	}
	window.obj339_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj339 
hide_341();
function hide_341() {
	window.obj339_onTap_runningActionsCount = obj339_onTap_runningActionsCount + 1;
	$("#obj339").fadeOut(0, function() {
			setTimeout(function() {
				window.obj339_onTap_runningActionsCount = window.obj339_onTap_runningActionsCount - 1;
if (window.obj339_onTap_runningActionsCount == 0) {
	obj339_onTap_actionGroup1();
}
			}, 1);
		}
	);
}
//	action: hide
//	target: obj171 
hide_363();
function hide_363() {
	window.obj339_onTap_runningActionsCount = obj339_onTap_runningActionsCount + 1;
	$("#obj171").fadeOut(1000, function() {
			setTimeout(function() {
				window.obj339_onTap_runningActionsCount = window.obj339_onTap_runningActionsCount - 1;
if (window.obj339_onTap_runningActionsCount == 0) {
	obj339_onTap_actionGroup1();
}
			}, 1);
		}
	);
}
//	action: hide
//	target: obj175 
hide_364();
function hide_364() {
	window.obj339_onTap_runningActionsCount = obj339_onTap_runningActionsCount + 1;
	$("#obj175").fadeOut(1000, function() {
			setTimeout(function() {
				window.obj339_onTap_runningActionsCount = window.obj339_onTap_runningActionsCount - 1;
if (window.obj339_onTap_runningActionsCount == 0) {
	obj339_onTap_actionGroup1();
}
			}, 1);
		}
	);
}
//	action: show 
//	target: obj178 
show_365();
function show_365() {
	window.obj339_onTap_runningActionsCount = obj339_onTap_runningActionsCount + 1;
	$("#obj178").fadeIn(1000, function() {
			setTimeout(function() {
				window.obj339_onTap_runningActionsCount = window.obj339_onTap_runningActionsCount - 1;
if (window.obj339_onTap_runningActionsCount == 0) {
	obj339_onTap_actionGroup1();
}
				$("#obj178").trigger('SCEventShow');
			}, 1);
		}
	);
}
//	action: show 
//	target: obj182 
show_366();
function show_366() {
	window.obj339_onTap_runningActionsCount = obj339_onTap_runningActionsCount + 1;
	$("#obj182").fadeIn(1000, function() {
			setTimeout(function() {
				window.obj339_onTap_runningActionsCount = window.obj339_onTap_runningActionsCount - 1;
if (window.obj339_onTap_runningActionsCount == 0) {
	obj339_onTap_actionGroup1();
}
				$("#obj182").trigger('SCEventShow');
			}, 1);
		}
	);
}
//	action: show 
//	target: obj486 
show_488();
function show_488() {
	window.obj339_onTap_runningActionsCount = obj339_onTap_runningActionsCount + 1;
	$("#obj486").fadeIn(0, function() {
			setTimeout(function() {
				window.obj339_onTap_runningActionsCount = window.obj339_onTap_runningActionsCount - 1;
if (window.obj339_onTap_runningActionsCount == 0) {
	obj339_onTap_actionGroup1();
}
				$("#obj486").trigger('SCEventShow');
			}, 1);
		}
	);
}
//	action: move
//	target: obj337 
move_345();
function move_345() {
	window.obj339_onTap_runningActionsCount = obj339_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj337");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 9;
	var moveY = 195;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj339_onTap_runningActionsCount = window.obj339_onTap_runningActionsCount - 1;
if (window.obj339_onTap_runningActionsCount == 0) {
	obj339_onTap_actionGroup1();
}
		}, 1);
	});
}



















};
obj339_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj339_onTap_activeActionGroupIndex = -1;
		$("#obj339").trigger("obj339_onTap_ended");
		
		return;
	}
	window.obj339_onTap_activeActionGroupIndex = 1;
	





















};
obj166_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj166_onTap_activeActionGroupIndex = -1;
		$("#obj166").trigger("obj166_onTap_ended");
		
		return;
	}
	window.obj166_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj166 
hide_346();
function hide_346() {
	window.obj166_onTap_runningActionsCount = obj166_onTap_runningActionsCount + 1;
	$("#obj166").fadeOut(0, function() {
			setTimeout(function() {
				window.obj166_onTap_runningActionsCount = window.obj166_onTap_runningActionsCount - 1;
if (window.obj166_onTap_runningActionsCount == 0) {
	obj166_onTap_actionGroup1();
}
			}, 1);
		}
	);
}
//	action: hide
//	target: obj162 
hide_347();
function hide_347() {
	window.obj166_onTap_runningActionsCount = obj166_onTap_runningActionsCount + 1;
	$("#obj162").fadeOut(0, function() {
			setTimeout(function() {
				window.obj166_onTap_runningActionsCount = window.obj166_onTap_runningActionsCount - 1;
if (window.obj166_onTap_runningActionsCount == 0) {
	obj166_onTap_actionGroup1();
}
			}, 1);
		}
	);
}
//	action: hide
//	target: obj160 
hide_348();
function hide_348() {
	window.obj166_onTap_runningActionsCount = obj166_onTap_runningActionsCount + 1;
	$("#obj160").fadeOut(0, function() {
			setTimeout(function() {
				window.obj166_onTap_runningActionsCount = window.obj166_onTap_runningActionsCount - 1;
if (window.obj166_onTap_runningActionsCount == 0) {
	obj166_onTap_actionGroup1();
}
			}, 1);
		}
	);
}
//	action: show 
//	target: obj322 
show_349();
function show_349() {
	window.obj166_onTap_runningActionsCount = obj166_onTap_runningActionsCount + 1;
	$("#obj322").fadeIn(0, function() {
			setTimeout(function() {
				window.obj166_onTap_runningActionsCount = window.obj166_onTap_runningActionsCount - 1;
if (window.obj166_onTap_runningActionsCount == 0) {
	obj166_onTap_actionGroup1();
}
				$("#obj322").trigger('SCEventShow');
			}, 1);
		}
	);
}
//	action: show 
//	target: obj354 
show_356();
function show_356() {
	window.obj166_onTap_runningActionsCount = obj166_onTap_runningActionsCount + 1;
	$("#obj354").fadeIn(0, function() {
			setTimeout(function() {
				window.obj166_onTap_runningActionsCount = window.obj166_onTap_runningActionsCount - 1;
if (window.obj166_onTap_runningActionsCount == 0) {
	obj166_onTap_actionGroup1();
}
				$("#obj354").trigger('SCEventShow');
			}, 1);
		}
	);
}
//	action: show 
//	target: obj171 
show_350();
function show_350() {
	window.obj166_onTap_runningActionsCount = obj166_onTap_runningActionsCount + 1;
	$("#obj171").fadeIn(0, function() {
			setTimeout(function() {
				window.obj166_onTap_runningActionsCount = window.obj166_onTap_runningActionsCount - 1;
if (window.obj166_onTap_runningActionsCount == 0) {
	obj166_onTap_actionGroup1();
}
				$("#obj171").trigger('SCEventShow');
			}, 1);
		}
	);
}
//	action: show 
//	target: obj175 
show_351();
function show_351() {
	window.obj166_onTap_runningActionsCount = obj166_onTap_runningActionsCount + 1;
	$("#obj175").fadeIn(0, function() {
			setTimeout(function() {
				window.obj166_onTap_runningActionsCount = window.obj166_onTap_runningActionsCount - 1;
if (window.obj166_onTap_runningActionsCount == 0) {
	obj166_onTap_actionGroup1();
}
				$("#obj175").trigger('SCEventShow');
			}, 1);
		}
	);
}
//	action: show 
//	target: obj337 
show_352();
function show_352() {
	window.obj166_onTap_runningActionsCount = obj166_onTap_runningActionsCount + 1;
	$("#obj337").fadeIn(0, function() {
			setTimeout(function() {
				window.obj166_onTap_runningActionsCount = window.obj166_onTap_runningActionsCount - 1;
if (window.obj166_onTap_runningActionsCount == 0) {
	obj166_onTap_actionGroup1();
}
				$("#obj337").trigger('SCEventShow');
			}, 1);
		}
	);
}
//	action: show 
//	target: obj339 
show_353();
function show_353() {
	window.obj166_onTap_runningActionsCount = obj166_onTap_runningActionsCount + 1;
	$("#obj339").fadeIn(0, function() {
			setTimeout(function() {
				window.obj166_onTap_runningActionsCount = window.obj166_onTap_runningActionsCount - 1;
if (window.obj166_onTap_runningActionsCount == 0) {
	obj166_onTap_actionGroup1();
}
				$("#obj339").trigger('SCEventShow');
			}, 1);
		}
	);
}



















};
obj166_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj166_onTap_activeActionGroupIndex = -1;
		$("#obj166").trigger("obj166_onTap_ended");
		
		return;
	}
	window.obj166_onTap_activeActionGroupIndex = 1;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		






































/*
 *
 *   obj486: Event Touch Down
 *
 */
 
$("#obj486").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj486_onTap_activeActionGroupIndex != -1) return;
var obj486_onTap_runningActionsCount = 0;
var obj486_onTap_loopCount = 0;
obj486_onTap_actionGroup0();
});



































/*
 *
 *   obj339: Event Touch Down
 *
 */
 
$("#obj339").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj339_onTap_activeActionGroupIndex != -1) return;
var obj339_onTap_runningActionsCount = 0;
var obj339_onTap_loopCount = 0;
obj339_onTap_actionGroup0();
});





















/*
 *
 *   obj166: Event Touch Down
 *
 */
 
$("#obj166").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj166_onTap_activeActionGroupIndex != -1) return;
var obj166_onTap_runningActionsCount = 0;
var obj166_onTap_loopCount = 0;
obj166_onTap_actionGroup0();
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
	
$("#obj486").trigger('SCEventShow');
$("#obj160").trigger('SCEventShow');
$("#obj162").trigger('SCEventShow');
$("#obj166").trigger('SCEventShow');
	$(window).trigger(PubCoder.Events.PageReady);
	
});