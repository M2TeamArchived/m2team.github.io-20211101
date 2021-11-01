function download_error(error_link) {
	window.open(error_link, "_blank").focus();
}
function download(option, urlOptions) {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			try {
				var content = JSON.parse(xhttp.responseText);
				var url = content.assets[option].browser_download_url;				
				window.location.replace(url);
			} catch (error) {
				download_error(urlOptions.error_link);
			}
		}
	};
	xhttp.onload = function () {
		if (this.readyState != 4 && this.status != 200) {
			download_error(urlOptions.error_link);
		}
	};
	xhttp.onerror = function () {
		download_error(urlOptions.error_link);
	};
	xhttp.ontimeout = function (e) {
		download_error(urlOptions.error_link);
	};
	xhttp.open(
		"GET",
		urlOptions.downloadUrl,
		true
	);
	xhttp.timeout = 2000;
	xhttp.send(null);
}
function github_download(repositories, option) {
	const downloadUrl = "https://api.github.com/repos/" + repositories + "/releases/latest";
	var error_link = "https://github.com/" + repositories + "/releases";
	download(option, { downloadUrl, error_link });
}