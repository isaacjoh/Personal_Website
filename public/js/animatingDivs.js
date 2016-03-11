$(document).ready(function(){
 
  // hide our element on page load
  $('#aboutMeID').css('opacity', 0);
  $('#projectsID').css('opacity', 0);
  $('#resumeID').css('opacity', 0);
 
  $('#aboutMeID').waypoint(function() {
      $('#aboutMeID').addClass('animated fadeInUp');
  }, { offset: '85%' });

  $('#projectsID').waypoint(function() {
      $('#projectsID').addClass('animated fadeInUp');
  }, { offset: '85%' });

  $('#resumeID').waypoint(function() {
      $('#resumeID').addClass('animated fadeInUp');
  }, { offset: '85%' });

});