var file_selector = document.createElement("input");
file_selector.type = "file"

var default_image = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Blue_Marble_2002.png/3840px-Blue_Marble_2002.png";

const viewer = new PhotoSphereViewer.Viewer({
	container: document.querySelector("#viewer"),
	panorama: default_image,
	navbar: [
		"zoom",
		{
			content: "🖼️",
			title: "File selector",
			onClick: (viewer) => {
				file_selector.click();
			}
		},
		"caption",
		"fullscreen",
	],
	minFov: 1,
	maxFov: 90,
});

file_selector.onchange = e => {
	let new_file = e.target.files[0];
	console.log(new_file);
	let reader = new FileReader();
	reader.addEventListener(
		"load",
		() => {
			viewer.setPanorama(reader.result);
		},
		false
	);
	reader.readAsDataURL(new_file);
}
