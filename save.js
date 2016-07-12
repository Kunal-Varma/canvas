 var saveButton=document.getElementById('save');
saveButton.addEventListener('click',saveImage);

function saveImage(){
	var data =canvas.toDataURL();
	window.open(data,'-blank','location=no,menubar=no, titlebar=no');
}  