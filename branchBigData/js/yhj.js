	
	var areaId = 427,baseUrl = "http://127.0.0.1:8081/branch/api/screen/";
	initData();
	function initData(){
		$.ajax({
			url:baseUrl+"firstBrachType",
			type:"post",
			data:{"areaId":areaId},
			success:function(res){
				var s_tr = `
				<tr class="opacity">
					<th style="width: 30%;"></th>
					<th style="width: 25%;"></th>
					<th style="width: 15%;"></th>
					<th style="width: 15%;"></th>
					<th style="width: 15%;"></th>
				</tr>
				`;
				var s2_tr = `
				<tr class="opacity">
					<th style="width: 30%;"></th>
					<th style="width: 25%;"></th>
					<th style="width: 15%;"></th>
					<th style="width: 15%;"></th>
					<th style="width: 15%;"></th>
				</tr>
				`;
				var s3_tr = `
				<tr class="opacity">
					<th style="width: 30%;"></th>
					<th style="width: 25%;"></th>
					<th style="width: 15%;"></th>
					<th style="width: 15%;"></th>
					<th style="width: 15%;"></th>
				</tr>
				`;
				$.each(res.czsqlist,function(k,v){
					var s_td = ``;
					$.each(v.value,function(k2,v2){
						if(k2==0){
							s_td+=`<td style="border-color: rgb(68, 98, 161); border-style: solid; border-width: 1px 0px 1px 1px; border-image: none 100% / 1 / 0 stretch; color: rgb(255, 255, 255);">${v.name}</td>`;
						}else{
							s_td+=`<td style="border-color: rgb(68, 98, 161); border-style: solid; border-width: 1px 0px 1px 1px; border-image: none 100% / 1 / 0 stretch; color: rgb(255, 255, 255);">${v2}</td>`;
						}
					})
					if((k%2) == 0){
						s_tr += `<tr style="background: rgb(32, 37, 106) none repeat scroll 0% 0%;">
								${s_td}
							</tr>`;
					}else{
						s_tr += `<tr style="background: rgb(41, 46, 116) none repeat scroll 0% 0%;">
								${s_td}
							</tr>`;
					}
				});
				$("#czsqlist").find("tbody").html(s_tr);
				$("#czsq").find(".pNum").html(res.allczsBranch);
				
				$.each(res.jgsylist,function(k,v){
					var s_td = ``;
					$.each(v.value,function(k2,v2){
						if(k2==0){
							s_td+=`<td style="border-color: rgb(68, 98, 161); border-style: solid; border-width: 1px 0px 1px 1px; border-image: none 100% / 1 / 0 stretch; color: rgb(255, 255, 255);">${v.name}</td>`;
						}else{
							s_td+=`<td style="border-color: rgb(68, 98, 161); border-style: solid; border-width: 1px 0px 1px 1px; border-image: none 100% / 1 / 0 stretch; color: rgb(255, 255, 255);">${v2}</td>`;
						}
					})
					if((k%2) == 0){
						s2_tr += `<tr style="background: rgb(32, 37, 106) none repeat scroll 0% 0%;">
								${s_td}
							</tr>`;
					}else{
						s2_tr += `<tr style="background: rgb(41, 46, 116) none repeat scroll 0% 0%;">
								${s_td}
							</tr>`;
					}
				});
				$("#jgsylist").find("tbody").html(s2_tr);
				$("#jgsy_jg").html(res.alljgBranch);
				$("#jgsy_sy").html(res.allsyBranch);
				
				$.each(res.gqlist,function(k,v){
					var s_td = ``;
					$.each(v.value,function(k2,v2){
						if(k2==0){
							s_td+=`<td style="border-color: rgb(68, 98, 161); border-style: solid; border-width: 1px 0px 1px 1px; border-image: none 100% / 1 / 0 stretch; color: rgb(255, 255, 255);">${v.name}</td>`;
						}else{
							s_td+=`<td style="border-color: rgb(68, 98, 161); border-style: solid; border-width: 1px 0px 1px 1px; border-image: none 100% / 1 / 0 stretch; color: rgb(255, 255, 255);">${v2}</td>`;
						}
					})
					if((k%2) == 0){
						s3_tr += `<tr style="background: rgb(32, 37, 106) none repeat scroll 0% 0%;">
								${s_td}
							</tr>`;
					}else{
						s3_tr += `<tr style="background: rgb(41, 46, 116) none repeat scroll 0% 0%;">
								${s_td}
							</tr>`;
					}
				});
				$("#gqlist").find("tbody").html(s3_tr);
				$("#gqsss").html(res.allgqBranch);
				
				// $.each(res.fgglist,function(k,v){
				// 	var s_td = ``;
				// 	$.each(v.value,function(k2,v2){
				// 		if(k2==0){
				// 			s_td+=`<td style="border-color: rgb(68, 98, 161); border-style: solid; border-width: 1px 0px 1px 1px; border-image: none 100% / 1 / 0 stretch; color: rgb(255, 255, 255);">${v.name}</td>`;
				// 		}else{
				// 			s_td+=`<td style="border-color: rgb(68, 98, 161); border-style: solid; border-width: 1px 0px 1px 1px; border-image: none 100% / 1 / 0 stretch; color: rgb(255, 255, 255);">${v2}</td>`;
				// 		}
				// 	})
				// 	if((k%2) == 0){
				// 		s3_tr += `<tr style="background: rgb(32, 37, 106) none repeat scroll 0% 0%;">
				// 				${s_td}
				// 			</tr>`;
				// 	}else{
				// 		s3_tr += `<tr style="background: rgb(41, 46, 116) none repeat scroll 0% 0%;">
				// 				${s_td}
				// 			</tr>`;
				// 	}
				// });
				// $("#fgglist").find("tbody").html(s_tr);
				$("#fggss").html(res.allfggBranch);
				
				// $.each(res.shzzlist,function(k,v){
				// 	var s_td = ``;
				// 	$.each(v.value,function(k2,v2){
				// 		if(k2==0){
				// 			s_td+=`<td style="border-color: rgb(68, 98, 161); border-style: solid; border-width: 1px 0px 1px 1px; border-image: none 100% / 1 / 0 stretch; color: rgb(255, 255, 255);">${v.name}</td>`;
				// 		}else{
				// 			s_td+=`<td style="border-color: rgb(68, 98, 161); border-style: solid; border-width: 1px 0px 1px 1px; border-image: none 100% / 1 / 0 stretch; color: rgb(255, 255, 255);">${v2}</td>`;
				// 		}
				// 	})
				// 	if((k%2) == 0){
				// 		s3_tr += `<tr style="background: rgb(32, 37, 106) none repeat scroll 0% 0%;">
				// 				${s_td}
				// 			</tr>`;
				// 	}else{
				// 		s3_tr += `<tr style="background: rgb(41, 46, 116) none repeat scroll 0% 0%;">
				// 				${s_td}
				// 			</tr>`;
				// 	}
				// });
				// $("#shzzlist").find("tbody").html(s_tr);
				$("#shzz").html(res.allshzzBranch);
				
				//非公有制企业党组织
				$("#enterFGG").html(res.enterFGG);
				$("#enterSHZZ").html(res.enterSHZZ);
				
				$("#linears").html(res.linears);
				$("#man").html(res.man);
				$("#woman").html(res.woman);
				$("#allMember").html(res.allMember);
				$("#allBranch").html(res.allBranch);
				$("#allDwBranch").html(res.allDwBranch);
				$("#allDzzBranch").html(res.allDzzBranch);
				$("#allDzbBranch").html(res.allDzbBranch);
			}
		});
	}
	
	var htmlPage = ['first.html','member.html','branch.html','map.html'];
	$(".rightTabBtn>div").click(function(){
		var indee = $(this).index();
		$(".rightTabBtn div").removeClass("active_0");
		$(this).addClass("active_0");
		$.ajax({ type:"get", url:htmlPage[indee],async:false, 
			success : function(result){ 
				$("#root").find(".ant-spin-container").html($(result));
			}
		});
		
		if(indee == 0){//组织概况
			initData();
		}else if(indee == 1){//党员队伍
			secondMember();
		}else if(indee == 2){//基层组织
			threeBranch();
		}else if(indee == 3){
			
		}
		
	})
	function secondMember(){
		
	}
	function threeBranch(){
		//比例
		option = {
		    tooltip: {
		        trigger: 'item',
		        formatter: '{a} <br/>{b}: {c} ({d}%)'
		    },
		    legend: {
		        orient: 'vertical',
		        left: 10,
		        data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
		    },
		    series: [
		        {
		            name: '访问来源',
		            type: 'pie',
		            radius: ['50%', '70%'],
		            avoidLabelOverlap: false,
		            label: {
		                show: false,
		                position: 'center'
		            },
		            emphasis: {
		                label: {
		                    show: true,
		                    fontSize: '30',
		                    fontWeight: 'bold'
		                }
		            },
		            labelLine: {
		                show: false
		            },
		            data: [
		                {value: 335, name: '直接访问'},
		                {value: 310, name: '邮件营销'},
		                {value: 234, name: '联盟广告'},
		                {value: 135, name: '视频广告'},
		                {value: 1548, name: '搜索引擎'}
		            ]
		        }
		    ]
		};
		var myEvharts = echarts.init(document.getElementById('yhj_sss'));
		myEvharts.setOption(option);
		$.ajax({
			url:baseUrl+"secondMember",
			type:"post",
			data:{"areaId":areaId},
			success:function(res){
				$("#allBranch").html(res.allBranch);
				$("#allDwBranch").html(res.allDwBranch);
				$("#allDzzBranch").html(res.allDzzBranch);
				$("#allDzbBranch").html(res.allDzbBranch);
				
				$("#enterTypes").html(9);$("#enterprises").html(res.allEnters);
			},
		});
	}