$(function() {
	$.fn.poem = main;
});

function main(params){
	var baseDom = this;

	if(params == "destroy"){
		destroy(baseDom);
	}else if(typeof params == "object"){
		init(params, baseDom);
	}else{
		console.error("unsupport method");
	}
	supportZoomIn(baseDom);

}

function init(params, baseDom) {
	var imageName=params.imageName;
	var title=params.title;

	//get template
	var template = $(".poemTemplate").html();
	// replace template variables
	template=template.format(imageName,title);

	// startup components
	var body = document.body;
	$(template).appendTo(body);
	//baseDom.detach().appendTo($(".poemBody"));和下面的功能一样
	baseDom.detach().appendTo($(".poemBody", body));

}

function destroy(baseDom){
	var body =document.body;
	var baseHtml=$(".poemBody").find(">div").detach().appendTo(body);
	$(".poemContainer").remove();

}

function supportZoomIn(baseDom){

	baseDom.off("zoomIn",zoomInHandler).on("zoomIn",{
		"baseDom":baseDom
	},zoomInHandler)

}

function zoomInHandler(e){
	var baseDom=e.data.baseDom;
	var container = baseDom.closest(".poemContainer");
	var containerWidth = container.width();
	containerWidth = containerWidth + 20;
	var containerFontSize =container.css("font-size");
	containerFontSize = parseInt(containerFontSize,10) + 1;

	container.css({
		"width" :containerWidth+"px",
		"font-size":containerFontSize+"px"
	})
}