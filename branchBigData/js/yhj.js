	var htmlPage = ['index.html','member.html','',''];
	$(".rightTabBtn>div").click(function(){
		var indee = $(this).index();
		console.log(indee);
		$.ajax({ type:"get", url:"../member.html",async:false, success : function(result){ 
			alert(result); 
		} );
		$("#root").find(".ant-spin-container").html($());
	})