$(document).ready(function(){
	$('button.btn-primary').click(function(e){
       var x = e.offsetX;
       var y = e.offsetY;
       var position = $(this).attr('data-type');
       var button_height = $(this).height();
       var button_width = $(this).width();
       console.log('x:'+x+'y:'+y);
       if(position == 'up'){
         var element = $(e.target).siblings('.dropdown');
         var element_height = element.height();
         var element_width = element.width();
           if(x <= button_width / 2){
             x = x - element_width;
           }
           else if(y <= button_height / 2){
             y = y- element_height;
           }
           console.log(element_height);
           console.log('Element top:  '  + (y - element_height) + " " + "Element LEFT: " + (x - element_width));
                element.css({
                	'left':x + 'px',
                	'top' : y +'px',
                	'display' : 'block'
                });
       }	
	});
   
});
