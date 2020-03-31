window.onload=function() {
	document.getElementById("two").addEventListener("click",function(){color("two");});
	document.getElementById("three").addEventListener("click",function(){color("three");});
}
var once=true;
function color(btn) {
	var id=document.getElementById(btn);
	if(id) {
		if(btn=="one") {
			if(document.getElementById("active").textContent=="Második"){document.getElementById("active").id="two";}else{document.getElementById("active").id="three";}
			document.getElementById("one").id="active";
		}else if(btn=="two") {
			if(document.getElementById("active").textContent=="Fõoldal"){document.getElementById("active").id="one";}else{document.getElementById("active").id="three";}
			document.getElementById("two").id="active";
		}else {
			if(document.getElementById("active").textContent=="Második"){document.getElementById("active").id="two";}else{document.getElementById("active").id="one";}
			document.getElementById("three").id="active";
		}
	}
	if(once==true) {
		once=false;
		document.getElementById("one").addEventListener("click",function(){color("one");});
	}
}
function swap(id) {
	let pressed=document.getElementById(id);
	if(pressed) {
		if(id=="one") {	
			document.getElementById("face").style.display="block";
			document.getElementById("hide").style.display="block";
			document.getElementById("cover").style.backgroundImage="url('fooldal.png')";
			document.getElementById("why").style.display="none";
			for(i=0;i<11;i++) {
				if(i==3 || i==7) {
					if(document.getElementById(i)) {
						let br=document.getElementById(i);
						document.getElementById("content").removeChild(br);
					}
				}else {
					if(document.getElementById("img"+i)) {
						let img=document.getElementById("img"+i);
						document.getElementById("content").removeChild(img);
					}
				}
			}
		}else if(id=="two") {
			document.getElementById("face").style.display="none";
			document.getElementById("hide").style.display="none";
			document.getElementById("cover").style.backgroundImage="url('masodik.png')";
			document.getElementById("why").style.display="block";
			for(i=0;i<11;i++) {
				if(i==3 || i==7) {
					if(document.getElementById(i)) {
						let br=document.getElementById(i);
						document.getElementById("content").removeChild(br);
					}
				}else {
					if(document.getElementById("img"+i)) {
						let img=document.getElementById("img"+i);
						document.getElementById("content").removeChild(img);
					}
				}
			}
		}else {
			if(document.getElementById("content").lastChild.id != "img10") {
				document.getElementById("face").style.display="none";
				document.getElementById("hide").style.display="none";
				document.getElementById("cover").style.backgroundImage="url('harmadik.png')";
				document.getElementById("why").style.display="none";
				for(i=0;i<11;i++) {
					if(i==3 || i==7) {
						let br=document.createElement("br");
						br.id=i;
						document.getElementById("content").appendChild(br);
					}else {
						let img=document.createElement("img");
						img.id="img"+i;
						img.src="sajtburi.png"
						document.getElementById("content").appendChild(img);
					}
				}
			}
		}
	}
}