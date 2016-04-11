$(document).ready(function(){
	$("#formButtonInputID").click(function (){
		$("#emailForm").attr('action','mailto:isaacohishere@gmail.com?subject=' + $("#company").val() + ': ' + $("#name").val() + '&body=' + $('#message').val());
	});
});