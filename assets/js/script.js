

$('#currentDay').text(moment($("#date_val").val()).format('dddd, MM Do YYYY, h:mmA'));

$

$('.container').on('click', '.detail', function() {
    var parentId = $(this).parent().attr('data-id');
    var detail = $(this).val();
    localStorage.setItem(parentId, detail);
  });



 $('.container').on('click', '.done', function() {
    var parentId = $(this).parent().attr('data-id');
    var detail = $(this).prev().val();
    localStorage.setItem(parentId, detail);
  });

  $('.detail').each(function() {
    var parentId = $(this).parent().attr('data-id');
     var detail = localStorage.getItem(parentId);
     $(this).val(detail);  
    
 });
    
 var now = moment();
 if ('#currentDay' === now){
  textAreaEl.setAttribute("background-color: red");
 } else if('#currentDay' < now){
  textAreaEl.setAttribute("background-color: gray");
   } else ('#currentDay' > now)
    textAreaEl.setAttribute("background-color: green");



//need function to get color coding to time of day
    
  //var textAreaEl = $(".detail")
  // var now = moment();
//
  // for(var i = 9; i < textAreaEl.length; i++){
  //  if (moment()=== now) {
  //  textAreaEl[i].setAttribute("background-color: gray") 
//
  // }



  // if time is present row = red
   // if time is past row = gray
   // if time is future row = green


  
   





 


 