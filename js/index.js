//自己调用自己  递归函数 它不是循环，所以要有一个出口(停止的条件)
//在一堆函数实现的功能一样，参数不一样的时候，用到递归
fn(0);   
function fn(num){
	if(num<5){
		fn(++num);
	}
	alert(num);
}
function fn(){
	alert(1);
}

// var arr=[1,2,3,4,5,6];
// // var arr1=arr;   //arr的首地址给了arr1 浅拷贝
// // arr[2]='x';

// var arr1=[];
// // arr1[4]='a'; 
// for(var i=0;i<arr.length;i++){  //arr里面的每一个值给了arr1   深拷贝
// 	arr1[i]=arr[i];
// }
// arr[2]='x';
// arr1[4]='a'; 
// console.log(arr)
// console.log(arr1)
// 
// 
// //数组拷贝  递归
// var arr=[1,2,3,['x','y','z']];
// function copy(arr){
// 	var newarr=[];
// 	for(var i=0;i<arr.length;i++){
// 		if(typeof arr[i]=='object'){
// 			newarr[i]=copy(arr[i]);
// 		}else{
// 			newarr[i]=arr[i];
// 		}				
// 	}
// 	return newarr;
// }
// var arr1=copy(arr);
// arr[3][0]='a';			
// console.log(arr1);
// console.log(arr);