const btn = document.getElementById('menu-btn');
const overlay = document.getElementById('overlay');
const menu = document.getElementById('mobile-menu');
const counters = document.querySelectorAll('.counter')
btn.addEventListener('click', navToggle);
window.addEventListener('scroll', scrollPage);
let scrollStarted = false;

function navToggle() {
    btn.classList.toggle('open');
    overlay.classList.toggle('overlay-show')
    document.body.classList.toggle('stop-srolling')
    menu.classList.toggle('show-menu')

}

function countUp() {
    counters.forEach((counter) => {
        counter.innerText = "0"

        const updateCounter = () => {
            // get count target
            const target = +counter.getAttribute('data-target')
            const c = +counter.innerText

            const increment = target / 100
            if (c < target) {
                counter.innerText = `${Math.ceil(c + increment)}`
                setTimeout(updateCounter, 10)
            } else {
                counter.innerText = target
            }

        }
        updateCounter()
    })
}
function scrollPage() {
    const scrollPos = window.scrollY
    if (scrollPos > 100 && !scrollStarted) {
        countUp()
        scrollStarted = true;
    } else if (scrollPos < 100 && scrollStarted) {
        reset()
        scrollStarted = false
    }
}
function reset() {
    counters.forEach((counter) => {
        counter.innerText = "0"
    })
}