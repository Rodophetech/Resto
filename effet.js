var p = document.querySelector('.paragraph')
window.setInterval(function(){
    p.classList.toggle('blue')
}, 1000)

const ratio  = .1
const options = {
    root: null,
    rootMargin: '0px',
        threshold: .1
}

const handleIntersect = function (entries, observer)
{
    entries.forEach(function (entry){
        if(entry.intersectionRatio > ratio)
        {
            entry.target.classList.add('reveal-visible')
            observer.unobserve(entry.target)
        }
    })
    //console.log(handleIntersect)
}

const observer = new IntersectionObserver (handleIntersect , options)

observer.observe(document.querySelector('.reveal'))


