const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-section')
        } else {
            entry.target.classList.remove('show-section')
        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden-section')
hiddenElements.forEach((el) => observer.observe(el))