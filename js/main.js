$("#add-to-list-button").on("click",function(){
	if ($('#new-item-input').val()!=''){
		console.log($("#new-item-input").val())
		console.log("add button clicked")
		var listItem ='<div class="list-item"><h5>'+$("#new-item-input").val()+'</h5><i class="fa fa-square-o"></i><i class="fa fa-times"></i></div>'
		$(".list").append(listItem)
		$('#new-item-input').val('');
	}else{
			alert("You must enter something into the input field!!!")
		}
});
$("#new-item-input").on("keyup",function(e){
	if (e.keyCode == 13) {
		if ($('#new-item-input').val()!=''){
			console.log($("#new-item-input").val())
			console.log("add button clicked")
			var listItem ='<div class="list-item"><h5>'+$("#new-item-input").val()+'</h5><i class="fa fa-square-o"></i><i class="fa fa-times"></i></div>'
			$(".list").append(listItem)
			$('#new-item-input').val('');
			console.log('press enter')
		}else{
			alert("You must enter something into the input field!!!")
		}
	}
});
$(".list").on("click",".list-item",function(){
	console.log('delete clicked')
	console.log(this)
})
$(".list").on("click",".fa-times",function(){
	console.log(this)
	$(this).parent().remove()
})
$(".list").on("click",".fa-square-o",function(){
	$(this).toggleClass("fa-square-o fa-check-square-o")
	$(this).next().toggleClass("delete-hidden")
	$(this).prev().toggleClass("markoff")
})
$(".list").on("click",".fa-check-square-o",function(){
	$(this).toggleClass("fa-square-o fa-check-square-o")
	$(this).next().toggleClass("delete-hidden")
	$(this).prev().toggleClass("markoff")
})
function doIntro(){
	$('.main').fadeIn(1000)
	$('.how-to').fadeIn(1000)
}
$(function(){
	doIntro()
})


