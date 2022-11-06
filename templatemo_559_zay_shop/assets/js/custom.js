const fileUpload = document.querySelector("#file-upload");
fileUpload.addEventListener("change", (event) => {
	const { files } = event.target;
	
	console.log("files", files)
})

$(function () {
	$(window).scroll(function () {
	  if ($(this).scrollTop() > 100) $('.lentop').fadeIn();
	  else $('.lentop').fadeOut();
	});
	$('.lentop').click(function () {
	  $('body,html').animate({ scrollTop: 0 }, 'slow');
	});
  });