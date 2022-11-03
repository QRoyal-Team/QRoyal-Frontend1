const fileUpload = document.querySelector("#file-upload");
fileUpload.addEventListener("change", (event) => {
	const { files } = event.target;
	
	console.log("files", files)
})
