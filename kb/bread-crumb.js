/* ------------------------------------------------------------------------------------------------------------------ */
/*                                                      Html vars                                                     */
/* ------------------------------------------------------------------------------------------------------------------ */
var guidesIcon = '<i style="padding-right:13px;" class="fas icon fa-solid fa-book"></i>';
var breadCrumbSvg = '<div class="bread-crumb-svg"><svg width="12" height="7" xmlns="http://www.w3.org/2000/svg"><path d="M10.6817 1.6816l-4.5364 4-4.5364-3.9315" stroke="#d24566" stroke-width="2" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>';


/* ------------------------------------------------------------------------------------------------------------------ */
/*                                                   Utils/Functions                                                  */
/* ------------------------------------------------------------------------------------------------------------------ */

/* ------------------------------------------------- formatCrumbTxt ------------------------------------------------- */
function formatCrumbTxt(url) {
    var url2 = url.replaceAll("-", " ");
    return url2[0].toUpperCase() + url2.slice(1);
}

/* -------------------------------------------------- addNavBarNode ------------------------------------------------- */
function addNavBarNode(url, navTxt) {
    var childNode = document.createElement("a");

    childNode.innerHTML = navTxt;
    childNode.href = url;
    childNode.className = "breadcrumbs__item";

    node.appendChild(childNode);
}


/* ------------------------------------------------------------------------------------------------------------------ */
/*                                                     Main Logic                                                     */
/* ------------------------------------------------------------------------------------------------------------------ */

var noParamsUrl = window.location.href.split("?")[0];
var splitUrl = noParamsUrl.split('knowledge-base')[1].split("/");
var node = document.getElementsByClassName("breadcrumbs__nav")[0];
node.innerHTML = "";

addNavBarNode(noParamsUrl, guidesIcon + "Guides" + breadCrumbSvg);

for (var i = 0; i < splitUrl.length; i++) {
    if (splitUrl[i]) {
        var crumbText = formatCrumbTxt(splitUrl[i]);

        if (i == splitUrl.length - 1) {
            crumbText = crumbText;
        } else {
            crumbText = crumbText + breadCrumbSvg;
        }

        addNavBarNode(noParamsUrl, crumbText);
    }
}
