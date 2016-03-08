$("#add-to-list-button").on("click",function(){
	console.log($("#new-item-input").val())
	console.log("add button clicked")
	var listItem ='<div class="list-item"><h5>'+$("#new-item-input").val()+'</h5><i class="fa fa-square-o"></i><i class="fa fa-times"></i></div>'
	$(".list").append(listItem)
	$('#new-item-input').val('');
})
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
