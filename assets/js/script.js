var currentTime = moment().hour();

$('#currentDay').text(moment($("#date_val").val()).format('dddd, MMMM Do YYYY, h:mmA'));


 $('.container').on('click', 'button', function() {
    var time = $(this).parent().attr('data-id');
    var detail = $(this).prev().val();
    localStorage.setItem(time, detail);
  });

  $('.detail').each(function() {
    var time = $(this).parent().attr('data-id');
     var detail = localStorage.getItem(time);
     $(this).val(detail);  
    
     if (time == currentTime){
     $(this).addClass('bg-danger');
     }  if(time < currentTime){
      $(this).addClass('bg-secondary');
       } if (time > currentTime) {
       $(this).addClass('bg-success');
       }
 });
    











  
   





 


 