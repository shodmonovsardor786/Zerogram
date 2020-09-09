const usersItemAll = document.querySelectorAll(".user__item")

const navListElement = document.querySelector(".sections__list")
const links = document.querySelectorAll(".sections__link")
const oneSectionElement = document.querySelectorAll(".section")
const emojiListElement = document.querySelector(".emoji__list")
const emojiItemElement = document.querySelectorAll(".emoji__item")
const settingBtnElement = document.querySelector(".settings__btn")
const emojiesDisplayElement = document.querySelector(".emojies__display")
const settingDisplayElement = document.querySelector(".setting__display")
const xBtnElement = document.querySelector(".x__btn")

    for (let i of usersItemAll) {
        i.addEventListener('click', (e) => {
            for( let w of usersItemAll) {
                w.classList.remove("user--active")
            }
            i.classList.add("user--active")
        })
    }

function section (e) {
    let targetLink
    for(let i of links) { 
        i.classList.remove("sections__link--active")
        let thisLink = e.target
        targetLink = e.target
        thisLink.classList.add("sections__link--active")
    }
    for(let i of oneSectionElement) {
        i.classList.add("none")
        if (i.id === targetLink.id ) {
            i.classList.remove("none")
        }
    }
}



function emoji (e) {
    for(let i of emojiItemElement) {
        i.classList.remove("emoji__item--active")
        let thisLink = e.target
        thisLink.classList.add("emoji__item--active")
    }
}

function settingDisplay(e) {
    emojiesDisplayElement.classList.toggle("none")
    settingDisplayElement.classList.toggle("none")
    xBtnElement.classList.toggle("none")
    settingBtnElement.classList.toggle("none")
}

function xBtn(e) {
    emojiesDisplayElement.classList.toggle("none")
    settingDisplayElement.classList.toggle("none")
    xBtnElement.classList.toggle("none")
    settingBtnElement.classList.toggle("none")
}


xBtnElement.addEventListener('click', xBtn)
settingBtnElement.addEventListener('click', settingDisplay)
navListElement.addEventListener('click', section)
emojiListElement.addEventListener('click', emoji)