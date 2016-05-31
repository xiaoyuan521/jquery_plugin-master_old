$(function(){

	initBtn();
	destroyBtn();
	zoomInBtn();
});


function initBtn(){
	$("#initBtn").on("click",function(){
		$(".poem").poem({
			title:"将进酒",
			imageName: "niu"
		});
	})
}

function destroyBtn(){
	$("#destroyBtn").on("click", function(){
		$(".poem").poem("destroy");
	});
}

function zoomInBtn(){
	$("#zoomInBtn").on("click", function(){ 
		$(".poem").trigger("zoomIn");
	});
}
