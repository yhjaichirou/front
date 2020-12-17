export function menu(value){
	var rout = [];
	let b = value;
	for(let v in b){
		if(b[v].url.length!=0 ){
			var childs = [];
			if(b[v].children !=null && b[v].children.length>0){
				childs = getChild(b[v].children);
			}
			var str = b[v].url;
			var ob = {
				path:b[v].url,
				component:() => import('@/views/test/test.vue'),
				meta:{
					title:b[v].name,
					icon: b[v].icon
				},
				children:childs
			}
			rout.push(ob);
		}
	}
	return rout;
}
export function getChild(childrens){
	var childs = [];
	for(var child of childrens){
		var currChild = [];
		if(child.children!=null && child.children.length>0){
			currChild = getChild(child.children);
		}
		var str = child.url;
		var ob = {
			path:child.url,
			name:child.url,
			component:() => import('@/views/test/test.vue'),
			meta:{
				title:child.name,
				icon: child.icon
			},
			children:currChild
		}
		childs.push(ob);
	}
	return childs;
}