function createTopBtn() {
    const btnTop = document.createElement("button");
    btnTop.textContent = "Go to Top ^";
    btnTop.id = "btn-top"

    btnTop.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    return btnTop;
}

function createToggleBtn(elemId) {
    const btnTocToggle = document.createElement('button');
    btnTocToggle.id = "btn-toc-toggle";
    btnTocToggle.textContent = 'toggle contents';

    btnTocToggle.addEventListener("click", () => {
        targetElement = document.getElementById(elemId);
        if (targetElement.style.display === "none") {
            targetElement.style.display = "block";
        } else {
            targetElement.style.display = "none";
        }
    });

    return btnTocToggle;
}

function createTOC() {
    const headings = document.querySelectorAll('h1, h3, h4, h5, h6');
    const tocList = document.createElement('ul');
    var splitFound = false;

    headings.forEach((heading) => {
        const level = parseInt(heading.tagName.slice(1));
        const listItem = document.createElement('li');
        const anchor = document.createElement('a');
        
        if (!heading.textContent.includes("Was this article helpful?") && !splitFound) {
            // Add id to heading if it doesn't have one
            if (!heading.id) {
                heading.id = heading.textContent.toLowerCase().replace(/[^a-z0-9]/g, '-');
            }

            anchor.href = `#${heading.id}`;
            anchor.textContent = heading.textContent;
            anchor.classList.add("nav-text");
            listItem.appendChild(anchor);
            listItem.classList.add("has-subnav");

            // Create the <hr> element
            //const hr = document.createElement("hr");
            //const container = document.getElementById("myContainer");
            //listItem.appendChild(hr);

            // Indentation based on heading level
            listItem.style.paddingLeft = `${(level - 1) * 20}px`;

            // Add to appropriate level in the list
            let currentList = tocList;
            for (let i = 1; i < level; i++) {
                if (currentList.lastChild && currentList.lastChild.tagName === 'UL') {
                    currentList = currentList.lastChild;
                } else {
                    const newList = document.createElement('ul');
                    currentList.appendChild(newList);
                    currentList = newList;
                }
            }

            currentList.appendChild(listItem);
        } else {
            splitFound = true;
        }
    });

    return tocList;
}

const content = document.getElementsByTagName("main")[0]; //kb-article tinymce-content

// const container = document.createElement('div');
// container.id = 'toc'
// container.classList.add("table-of-contents");//

// content.prepend(container);

// const navContainer = document.createElement('nav');
// navContainer.id = "nav-con";
// navContainer.classList.add("main-menu");


// const tocContainer = document.getElementById('toc');
// tocContainer.appendChild(navContainer);
// navContainer.appendChild(createTOC());
// //tocContainer.appendChild(createToggleBtn());

// const article = document.getElementsByClassName("kb-article")[0];
// article.appendChild(createTopBtn());


const mainMenu = document.createElement('nav');
mainMenu.id = 'main-menu'
mainMenu.classList.add("main-menu");
mainMenu.classList.add("table-of-contents");//
const tocTitle = document.createElement('i');
//<i class="fa fa-book fa-2x"></i>
//tocTitle.style.color="red";
//tocTitle.innerText = "Table of Contents";
// fas icon fa-solid fa-book
tocTitle.classList.add("fas");
tocTitle.classList.add("icon");
tocTitle.classList.add("fa-solid");
tocTitle.classList.add("fa-book");
//tocTitle.classList.add("fa-2x");//fa-book fa-2x");
mainMenu.prepend(tocTitle);
content.prepend(mainMenu);
mainMenu.appendChild(createTOC());
