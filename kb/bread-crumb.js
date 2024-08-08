function capitalizeFirstLetter(string) {
    return string[0].toUpperCase() + string.slice(1);
}

const url = window.location.href;
var splitUrl = url.split('infoplus-wms')[1].split("/");

for (var i = 0; i < splitUrl.length; i++) {
    if (splitUrl[i]) {
        var crumbText = splitUrl[i].replaceAll("-", " ");
        var node = document.getElementsByTagName("nav")[0];
        var childNode = document.createElement("a");

        childNode.innerHTML = capitalizeFirstLetter(crumbText);
        childNode.href = url;
        childNode.className = "breadcrumbs__item";

        node.appendChild(childNode)
    }
}
