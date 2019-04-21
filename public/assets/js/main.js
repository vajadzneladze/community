
(function ($) {
    "use strict";

    /*[ Load page ]
    ===========================================================*/

    var getUrl = window.location;
	var baseUrl = getUrl .protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
    var accessToken = '';



    function getToken(){
    	$.ajax({
              method: "POST",
              url: baseUrl + "oauth/token",
              data: {
              	grant_type: "password",
              	client_secret: "aW9cf1Oke0p9iPPD9SjMCsFlXd5HfuhrLmjv1QHA",
              	client_id:2,
              	username:'student@gmail.com',
              	password:'password123' 
              },
              headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
              },
            }).done(function( msg ) {
            	document.cookie = "access_token="+msg.access_token;
            });
  	
	  	var cookieArray = document.cookie.split(';');

	  	for(var i = 0 ; i < cookieArray.length ; i++){
	  		if(cookieArray[i].includes('access_token=')){
	  			accessToken = cookieArray[i].split('=')[1].trim();
	  		}
	  	} 
    }
    

  	



  

  	function getSubjects(){
  		 $.ajax({
              method: "GET",
              url: baseUrl + "api/subjects/byUser",
              data: {},
              headers: {
                "Authorization": "Bearer "+accessToken,
              },
            }).done(function(data) {

				if(data.data){
						
						var template = '';

						data.data.subjects.forEach(function(subject) {
						  template +=`
						  	<li>
						  		<i class="fa-li fa fa-book fa-fw text-warning"></i>
				               `+subject.title+`
				            </li>
						  `;
						});	

						$('.subjects').html(template);

				}          	
            });
  	}



   

  


  

})(jQuery);