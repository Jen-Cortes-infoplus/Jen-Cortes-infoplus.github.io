var guidesIcon = '<i style="padding-right:13px;" class="fas icon fa-solid fa-book"></i>';
var breadCrumbSvg = '<div class="bread-crumb-svg"><svg width="12" height="7" xmlns="http://www.w3.org/2000/svg"><path d="M10.6817 1.6816l-4.5364 4-4.5364-3.9315" stroke="#d24566" stroke-width="2" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>';

function capitalizeFirstLetter(string) {
    return string[0].toUpperCase() + string.slice(1);
}

const url = window.location.href;
var splitUrl = url.split('knowledge-base')[1].split("?")[0].split("/");
var node = document.getElementsByClassName("breadcrumbs__nav")[0];
node.innerHTML = "";

for (var i = 0; i < splitUrl.length; i++) {
    if (splitUrl[i]) {
        var crumbText = capitalizeFirstLetter(splitUrl[i].replaceAll("-", " "));
        var childNode = document.createElement("a");

        if (crumbText == "Guides") {
            childNode.innerHTML = guidesIcon + crumbText + breadCrumbSvg;
        } else if (i == splitUrl.length - 1) {
            childNode.innerHTML = crumbText;
        } else {
            childNode.innerHTML = crumbText + breadCrumbSvg;
        }
        childNode.href = url;
        childNode.className = "breadcrumbs__item";

        node.appendChild(childNode)
    }
}
