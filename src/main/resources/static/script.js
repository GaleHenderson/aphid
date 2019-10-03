//LinkedIn User CLass

class linkedinUser {
  constructor(id, firstName, lastName, headline, siteStandardProfileRequest) {
	this.id = id;	  
	this.firstName = firstName;
    this.lastName = lastName;
    this.headline = headline;
    this.siteStandardProfileRequest = siteStandardProfileRequest;
  }
}

const user =  new linkedinUser();

// LinkedIn Logic Blocks

// function ran on click in index
function logInLinkedIn(){
  //IN.API.Raw("https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=786jvytwfvr5ck&redirect_uri=localhost:8080&scope=r_liteprofile").method("GET");
	IN.API.Raw("https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=786jvytwfvr5ck&redirect_uri=https://www.localhost:8080&state=fooobar&scope=r_liteprofile%20r_emailaddress%20w_member_social").method("GET");
	console.log("Now I'm here!") // Debug: where am I?
//	IN.User.authorize(confirmAuthorized());	

}

// setup an event listener to make API call once auth is complete
function onLinkedInLoad(){
 	IN.Event.on(IN, "auth", confirmAuthorized); 
//	IN.User.authorize(getProfileData);
   	console.log("here!") // Debug: where am I?

}


//use API call wrapper to request member profile data
function confirmAuthorized(){
	if (IN.User.isAuthorized() === true){
//		alert("User is logged in.");
 	 	console.log("User is logged in.")// where am I?
//		IN.API.Profile("me").fields("id", "firstName", "lastName", 
//		"headline", "siteStandardProfileRequest").result(displayProfileData).error(onError);
	 	shareContent();
	}else {
		alert ("User not logged in.")
		console.log("User not logged in.")// where am I?
	}
}

//Handle the successful return from the API call
function onSuccess(data) {
  console.log(data);
}

// Handle an error response from the API call
function onError(error) {
  console.log(error);
}

// Use the API call wrapper to share content on LinkedIn
function shareContent() {
  // Build the JSON payload containing the content to be shared
  var content4Share = { 
    'comment': "Join me on Aphid!",
    'content': {
      'title': "My Beautiful Title",
      'description': "My Awesome Description",
      'submitted-url': "https://localhost:8080",
    },
    'visibility': {
      'code': "anyone"
    }
  };

  IN.API.Raw("/people/~/shares?format=json")
    .method("POST")
    .body(JSON.stringify(content4Share))
    .result(onSuccess)
    .error(onError);
}

//const linkedinBtn = document.getElementById("share-with-linkedin"); 
//linkedinBtn.addEventListener("click", (event) => {
//    shareContent();
//});


// url for linkedin share "https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=786jvytwfvr5ck&redirect_uri=localhost:8080&scope=w_member_social"

// End LinkedIn Block


// Facebook

// Example content. Replace with content from Aphid.


//FBSDKShareLinkContent *content = [[FBSDKShareLinkContent alloc] init];
//content.contentURL = [NSURL URLWithString:@"https://developers.facebook.com"];
//
//FBSDKShareDialog *dialog = [[FBSDKShareDialog alloc] init];
//dialog.fromViewController = self;
//dialog.content = content;
//dialog.mode = FBSDKShareDialogModeShareSheet;
//[dialog show];
//
///* begin testing for login */
//FB.getLoginStatus(function(response)){
//	 if (response.status === 'connected'){
//		 document.getElementById('status').innerHTML = 'We are connected.';
//	 } else if (response.status === 'not_authorized'){
//		 document.getElementById('status').innerHTML = 'We are not logged in.';
//};
/* end test */