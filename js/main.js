$(document).ready(() => {
	// Year
	$("#year").text(new Date().getFullYear());

	// Page hits
	$.getJSON("https://api.countapi.xyz/hit/Znyoomy.github.io/hits-test", function(response) {
    $("#hits").text(response.value);
});
});