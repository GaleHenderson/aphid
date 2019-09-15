<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>  
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>AphidInvite</title>
<link href="https://stackpath.bootstrapcdn.com/bootswatch/4.1.3/flatly/bootstrap.min.css" rel="stylesheet" integrity="sha384-gJWVjz180MvwCrGGkC4xE5FjhWkTxHIR/+GgT8j2B3KKMgh6waEjPgzzh7lL7JZT" crossorigin="anonymous">

<!-- jQuery -->
<!-- <script src="//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"></script>
 -->
 <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>


<!-- linking page with javascript file -->
<!-- <script src="js/script.js" type="text/javascript"></script>
 -->
 <script src="script.js"></script>

<!-- LinkedIn Scripts  -->
<script type="text/javascript" src="//platform.linkedin.com/in.js">
api_key: 786jvytwfvr5ck
onLoad: onLinkedInLoad
authorize: true
lang: en_US
</script>


<!-- Facebook Script -->
<script>
$(document).ready(function() {
    // Execute some code here:
    // use jQuery getScript() method to import the SDK instead of importing FB JS SDK w/ default async script
    $.ajaxSetup({ cache: true });
$.getScript('https://connect.facebook.net/en_US/sdk.js', function(){
 FB.init({
   appId: '{469585646927611}',
   version: 'v2.7' // or v2.1, v2.2, v2.3, ...
 });
 $('#loginbutton,#feedbutton').removeAttr('disabled');
 FB.getLoginStatus(updateStatusCallback);
});
// end jQuery block used to import FB JavaScript SDK
  });
  </script>

</head>
<body>

${homepage}

<br>
<br>
<!-- <a class="btn btn-primary" href="https://www.linkedin.com/oauth/v2/authorization/response_type=code/client_id=786jvytwfvr5ck&redirect_uri=https://localhost:8080">Log In With LinkedIn</a>
 -->
 
 <script type="in/Login">
</script>


</body>
</html>