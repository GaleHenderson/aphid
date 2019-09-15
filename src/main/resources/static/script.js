// LinkedIn

// setup an event listener to make API call once auth is complete
function onLinkedInLoad(){
 	IN.Event.on(IN, "auth", confirmAuthorized); 
//	IN.User.authorize(getProfileData);

}

//use API call wrapper to request member profile data
function confirmAuthorized(){
	if (IN.User.isAuthorized() === true){
		alert("User is logged in.");
//		IN.API.Profile("me").fields("id", "firstName", "lastName", 
//		"headline", "siteStandardProfileRequest").result(displayProfileData).error(onError);
	}else {
		alert ("User not logged in.")
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

const linkedinBtn = document.getElementById("share-with-linkedin"); 
linkedinBtn.addEventListener("click", (event) => {
    shareContent();
});


// End LinkedIn Block


// Facebook

// Example content. Replace with content from Aphid.


FBSDKShareLinkContent *content = [[FBSDKShareLinkContent alloc] init];
content.contentURL = [NSURL URLWithString:@"https://developers.facebook.com"];

FBSDKShareDialog *dialog = [[FBSDKShareDialog alloc] init];
dialog.fromViewController = self;
dialog.content = content;
dialog.mode = FBSDKShareDialogModeShareSheet;
[dialog show];

/* begin testing for login */
FB.getLoginStatus(function(response)){
	 if (response.status === 'connected'){
		 document.getElementById('status').innerHTML = 'We are connected.';
	 } else if (response.status === 'not_authorized'){
		 document.getElementById('status').innerHTML = 'We are not logged in.';
};
/* end test */