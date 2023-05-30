const text = document.querySelector(".sec-text");
	const textLoad = () => {
		setTimeout(() => {
			text.textContent = "Freelancer";
		}, 0);
		setTimeout(() => {
			text.textContent = "video editor";
		}, 4000);
		setTimeout(() => {
			text.textContent = "web developer";
		}, 8000);
		setTimeout(() => {
			text.textContent = "NDT Inspector";
		}, 1200);
		
			
		
	}
	textLoad();
	// setInterval(textLoad, 1200);
	// 1s =1000 milliseconds


  document.getElementById("footer").innerHTML = "<p>&copy; " + new Date().getFullYear() + " designed by NICKSON N100 MEDIA. All rights reserved.</p>";
