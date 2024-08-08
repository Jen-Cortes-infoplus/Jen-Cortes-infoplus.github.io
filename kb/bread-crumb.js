function capitalizeFirstLetter(string) {
    return string[0].toUpperCase() + string.slice(1);
}

const url = window.location.href;
var splitUrl = url.split('knowledge-base')[1].split("?")[0].split("/");
var node = document.getElementsByClassName("breadcrumbs__nav")[0];

for (var i = 0; i < splitUrl.length; i++) {
    if (splitUrl[i]) {
        var crumbText = splitUrl[i].replaceAll("-", " ");
        var childNode = document.createElement("a");

        console.log(i + " " + crumbText)
        if (crumbText == "guides") {
            childNode.innerHTML = '<i style="padding-right:8px;" class="fas icon fa-solid fa-book"></i>' + capitalizeFirstLetter(crumbText);
        } else {
            childNode.innerHTML = capitalizeFirstLetter(crumbText);
        }
        childNode.href = url;
        childNode.className = "breadcrumbs__item";

        node.appendChild(childNode)
    }
}
