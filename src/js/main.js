
   
$(".menu-icon").click(function(){
	// console.log('helloooo');
	$(".sidebar").toggleClass("active")
	$(".menu-icon").toggleClass("active")
});


$(".menu li a").click(function(){
	$(".menu-icon").toggleClass("active")
	$(".sidebar").toggleClass("active")
});




