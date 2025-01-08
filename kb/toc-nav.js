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
    const headings = document.querySelectorAll('h3, h4, h5, h6');
    const tocList = document.createElement('ul');
    var splitFound = false;

    headings.forEach((heading) => {
        const level = parseInt(heading.tagName.slice(1)) - 2; // because we are excluding h1 & h2's minus "2"
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

            // Indentation based on heading level
            listItem.style.paddingLeft = `${(level - 1) * 15}px`;

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

const content = document.getElementsByTagName("main")[0];
const mainMenuContainer = document.createElement('div');
mainMenuContainer.appendChild(createTOC());
mainMenuContainer.id = "main-menu-container";
mainMenuContainer.classList.add("main-menu-container");
//mainMenuContainer.style.display = "none";

const mainMenuNav = document.createElement('nav');
mainMenuNav.id = 'main-menu'
mainMenuNav.classList.add("main-menu");


const tocIcon = document.createElement('i');
tocIcon.classList.add("fas");
tocIcon.classList.add("fas-toc");
tocIcon.classList.add("icon");
tocIcon.classList.add("fa-solid");
tocIcon.classList.add("fa-book");
tocIcon.classList.add("fa-2x");
mainMenuNav.appendChild(tocIcon);


const tocTitle = document.createElement("p");
tocTitle.classList.add("toc-title");
tocTitle.classList.add("flip-txt");
tocTitle.innerText = "Table of Contents";
mainMenuNav.appendChild(tocTitle);

mainMenuNav.appendChild(mainMenuContainer);
content.prepend(mainMenuNav);



const element = document.querySelector('.main-menu');

mainMenuNav.addEventListener('mouseover', function () {
    mainMenuContainer.classList.add('hover-class');
    tocTitle.classList.remove('flip-txt');
});

element.addEventListener('mouseout', function () {
    mainMenuContainer.classList.remove('hover-class');
    tocTitle.classList.add('flip-txt');
});