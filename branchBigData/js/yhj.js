var areaId = 427,
	baseUrl = "http://127.0.0.1:8081/branch/api/screen/";
initData();

function initData() {
	$.ajax({
		url: baseUrl + "firstBrachType",
		type: "post",
		data: {
			"areaId": areaId
		},
		success: function(res) {
			var s_tr =
				`
				<tr class="opacity">
					<th style="width: 30%;"></th>
					<th style="width: 25%;"></th>
					<th style="width: 15%;"></th>
					<th style="width: 15%;"></th>
					<th style="width: 15%;"></th>
				</tr>
				`;
			var s2_tr =
				`
				<tr class="opacity">
					<th style="width: 30%;"></th>
					<th style="width: 25%;"></th>
					<th style="width: 15%;"></th>
					<th style="width: 15%;"></th>
					<th style="width: 15%;"></th>
				</tr>
				`;
			var s3_tr =
				`
				<tr class="opacity">
					<th style="width: 30%;"></th>
					<th style="width: 25%;"></th>
					<th style="width: 15%;"></th>
					<th style="width: 15%;"></th>
					<th style="width: 15%;"></th>
				</tr>
				`;
			$.each(res.czsqlist, function(k, v) {
				var s_td = ``;
				$.each(v.value, function(k2, v2) {
					if (k2 == 0) {
						s_td +=
							`<td style="border-color: rgb(68, 98, 161); border-style: solid; border-width: 1px 0px 1px 1px; border-image: none 100% / 1 / 0 stretch; color: rgb(255, 255, 255);">${v.name}</td>`;
					} else {
						s_td +=
							`<td style="border-color: rgb(68, 98, 161); border-style: solid; border-width: 1px 0px 1px 1px; border-image: none 100% / 1 / 0 stretch; color: rgb(255, 255, 255);">${v2}</td>`;
					}
				})
				if ((k % 2) == 0) {
					s_tr += `<tr style="background: rgb(32, 37, 106) none repeat scroll 0% 0%;">
								${s_td}
							</tr>`;
				} else {
					s_tr += `<tr style="background: rgb(41, 46, 116) none repeat scroll 0% 0%;">
								${s_td}
							</tr>`;
				}
			});
			$("#czsqlist").find("tbody").html(s_tr);
			$("#czsq").find(".pNum").html(res.allczsBranch);

			$.each(res.jgsylist, function(k, v) {
				var s_td = ``;
				$.each(v.value, function(k2, v2) {
					if (k2 == 0) {
						s_td +=
							`<td style="border-color: rgb(68, 98, 161); border-style: solid; border-width: 1px 0px 1px 1px; border-image: none 100% / 1 / 0 stretch; color: rgb(255, 255, 255);">${v.name}</td>`;
					} else {
						s_td +=
							`<td style="border-color: rgb(68, 98, 161); border-style: solid; border-width: 1px 0px 1px 1px; border-image: none 100% / 1 / 0 stretch; color: rgb(255, 255, 255);">${v2}</td>`;
					}
				})
				if ((k % 2) == 0) {
					s2_tr += `<tr style="background: rgb(32, 37, 106) none repeat scroll 0% 0%;">
								${s_td}
							</tr>`;
				} else {
					s2_tr += `<tr style="background: rgb(41, 46, 116) none repeat scroll 0% 0%;">
								${s_td}
							</tr>`;
				}
			});
			$("#jgsylist").find("tbody").html(s2_tr);
			$("#jgsy_jg").html(res.alljgBranch);
			$("#jgsy_sy").html(res.allsyBranch);

			$.each(res.gqlist, function(k, v) {
				var s_td = ``;
				$.each(v.value, function(k2, v2) {
					if (k2 == 0) {
						s_td +=
							`<td style="border-color: rgb(68, 98, 161); border-style: solid; border-width: 1px 0px 1px 1px; border-image: none 100% / 1 / 0 stretch; color: rgb(255, 255, 255);">${v.name}</td>`;
					} else {
						s_td +=
							`<td style="border-color: rgb(68, 98, 161); border-style: solid; border-width: 1px 0px 1px 1px; border-image: none 100% / 1 / 0 stretch; color: rgb(255, 255, 255);">${v2}</td>`;
					}
				})
				if ((k % 2) == 0) {
					s3_tr += `<tr style="background: rgb(32, 37, 106) none repeat scroll 0% 0%;">
								${s_td}
							</tr>`;
				} else {
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

var htmlPage = ['first.html', 'member.html', 'branch.html', 'map.html'];
$(".rightTabBtn>div").click(function() {
	var indee = $(this).index();
	$(".rightTabBtn div").removeClass("active_0");
	$(this).addClass("active_0");
	$.ajax({
		type: "get",
		url: htmlPage[indee],
		async: false,
		success: function(result) {
			$("#root").find(".ant-spin-container").html($(result));
		}
	});

	if (indee == 0) { //组织概况
		initData();
	} else if (indee == 1) { //党员队伍
		secondMember();
	} else if (indee == 2) { //基层组织
		threeBranch();
	} else if (indee == 3) { // 地图
		renderMap();
	}

})

function secondMember() {

}

function renderMap() {
	var map = new BMapGL.Map('ec-extension-bmap');
	map.centerAndZoom(new BMapGL.Point(113.11206049537659, 41.03424843478617), 12);
	map.enableScrollWheelZoom(true);
	map.setTilt(30);
	map.setMapStyleV2({
		styleId: '2bf16c682f52647cce02ebcdf8d3e101'
	});

	//标注点
	var icon = new BMapGL.Icon('img/dh.png', new BMapGL.Size(50, 50), {
		anchor: new BMapGL.Size(50, 50)
	});
	var marker = new BMapGL.Marker(new BMapGL.Point(113.11206049537659, 41.03424843478617), {
		icon: icon
	}, {

		fillColor: "blue", //圆形填充颜色
		fillOpacity: 0.2, //填充透明度
		strokeWeight: 1,
		strokeColor: "blue", //线条颜色，为了保证感觉无线条，和填充颜色一致即可
		strokeOpacity: 0.2, //线条透明度，为了保证感觉无线条，和填充颜色透明度一致即可
		enableEditing: false
	});
	map.addOverlay(marker);

	//3D棱柱覆盖物
	var bd1 = new BMapGL.Boundary();
	bd1.get('集宁区', function(rs) {
		let count = rs.boundaries.length;
		for (let i = 0; i < count; i++) {
			let path = [];
			let str = rs.boundaries[i].replace(' ', '');
			let points = str.split(';');
			for (let j = 0; j < points.length; j++) {
				let lng = points[j].split(',')[0];
				let lat = points[j].split(',')[1];
				path.push(new BMapGL.Point(lng, lat));
			}
			let prism = new BMapGL.Prism(path, 500, {
				topFillColor: '#5679ea',
				topFillOpacity: 0.6,
				sideFillColor: '#5679ea',
				sideFillOpacity: 0.9
			});
			map.addOverlay(prism);

			// 绑定鼠标事件
			var events = ['click', 'mouseover', 'mouseout'];
			for (let i = 0; i < events.length; i++) {
				prism.addEventListener(events[i], e => {
					switch (events[i]) {
						case 'click':
							// alert('集宁区');
							break;
						case 'mouseover':
							e.target.setTopFillColor('#475fab');
							e.target.setTopFillOpacity(1);
							break;
						case 'mouseout':
							e.target.setTopFillColor('#5679ea');
							e.target.setTopFillOpacity(0.5);
							break;
					}
				});
			}
		}
	});

	//循环标注点
	$.ajax({
		url: baseUrl + "getAllBranchXY",
		type: "post",
		data: {
			"areaId": areaId
		},
		success: function(res) {
			if (res.code == 200) {
				if (res.data != null) {
					$.each(res.data, function(k, v) {
						var mkr = new BMapGL.Marker(new BMapGL.Point(v.longitude, v.latitude), {icon: icon});
						map.addOverlay(mkr);
					})
				}
			}
		}
	})

}

function threeBranch() {
	//比例
	// let currName = "";
	// let myChart = echarts.getInstanceByDom(document.getElementById('yhj-ca'));
	// //console.log(myChart);
	// myChart.on('mouseover', (params) => {
	//     currName = params.name;
	// 
	//     let op = myChart.getOption();
	//     let _label = {
	//         normal:{
	//             show: true,
	//             position: 'center',
	//             formatter: [
	//                 `{a|${params.name}}`,
	//                 `{b|${params.percent + "%"}}`
	//             ].join('\n'),
	//             rich: {
	//                 a: {
	//                     color:'#fff',
	//                     fontSize: 18,
	//                     lineHeight: 30
	//                 },
	//                 b: {
	//                     color:'blue',
	//                     fontSize: 20,
	//                     foneWeight:'bold',
	//                 },
	//                 
	//             }
	//         }  
	//     }
	//     if(params.seriesIndex === 1){
	//         _label.normal.formatter = ['zhiliang'].join('\n')
	//     }
	//     op.series[0].label = _label;
	//     myChart.setOption(op,true)
	// })

	option = {
		tooltip: {
			trigger: 'item',
			formatter: '{a} <br/>{b}: {c} ({d}%)'
		},

		color: ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'purple'],
		series: [{
				name: '访问来源',
				type: 'pie',
				radius: ['50%', '70%'],
				avoidLabelOverlap: false,

				label: {
					normal: {
						show: true,
						position: 'center',

						formatter: [
							'zhiliang'
						].join('\n'),
						rich: {
							a: {
								color: '#fff',
								fontSize: 18,
								lineHeight: 30
							},
							b: {
								color: 'yellow',
								fontSize: 20,
								foneWeight: 'bold',
								textShadowBlur: 20,
								textShadowColor: 'yellow'
							},

						}
					}
				},
				labelLine: {
					normal: {
						show: false
					}
				},
				data: [{
						value: 335,
						name: '直接访问',
						color: "#cccccc"
					},
					{
						value: 310,
						name: '邮件营销'
					},
					{
						value: 234,
						name: '联盟广告'
					},
					{
						value: 135,
						name: '视频广告'
					},
					{
						value: 1548,
						name: '搜索引擎'
					}
				]
			},
			{
				name: '边框1',
				type: 'pie',
				hoverAnimation: false,
				radius: ['75%', '90%'],

				labelLine: {
					normal: {
						show: false
					}
				},
				itemStyle: {
					normal: {
						borderWidth: 1,
						borderColor: "#ffffff",
						opacity: 0
					}
				},
				data: [{
					value: 100,
					tooltip: {
						show: false
					}
				}]
			},
		]
	};
	var chart = echarts.init(document.getElementById('yhj_ca'), null, {
		renderer: 'canvas'
	})
	chart.setOption(option);
	chart.dispatchAction({
		type: "hightlight",
		seriesIndex: 0,
		dataIndex: 2
	})
	var curIndex = 0;
	setInterval(function() {
		var dataLen = option.series[0].data.length;
		chart.dispatchAction
	})
	$.ajax({
		url: baseUrl + "secondMember",
		type: "post",
		data: {
			"areaId": areaId
		},
		success: function(res) {
			$("#allBranch").html(res.allBranch);
			$("#allDwBranch").html(res.allDwBranch);
			$("#allDzzBranch").html(res.allDzzBranch);
			$("#allDzbBranch").html(res.allDzbBranch);

			$("#enterTypes").html(9);
			$("#enterprises").html(res.allEnters);
		},
	});
}
