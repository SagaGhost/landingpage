const SLIDES =[
    {caption: 'Fairbanks',link:'https://www.fairbanksalaska.us/', photo: 'https://images.pexels.com/photos/5389771/pexels-photo-5389771.jpeg?auto=compress&cs=tinysrgb&w=1600'},
    {caption: 'Anchorage',link:'https://www.anchorage.net/', photo: 'https://images.pexels.com/photos/4027720/pexels-photo-4027720.jpeg?auto=compress&cs=tinysrgb&w=1600'},
    {caption: 'Sitka',link:'https://visitsitka.org/', photo: 'https://images.pexels.com/photos/6144982/pexels-photo-6144982.jpeg?auto=compress&cs=tinysrgb&w=1600'},
    {caption: 'Valdez',link:'https://www.valdezak.gov/', photo: 'https://images.pexels.com/photos/2150901/pexels-photo-2150901.jpeg?auto=compress&cs=tinysrgb&w=1600'}

];

const nextSlide = document.getElementById('nextBtn');

nextSlide.addEventListener("click", function () {
    current ++;
    if (current >= SLIDES.length){
        current = 0
    }
    createSlides(current)
})

const prevSlide = document.getElementById('prevBtn');

prevSlide.addEventListener("click", function () {
    current --;
    if (current < 0){
        current = SLIDES.length-1
    }
    createSlides(current)
})


let current = 0

function createSlides(num){
    let container=document.getElementById('caresolBG')
    let element = SLIDES[num]
    let link = document.createElement('a');
    link.href = element.link;
    let slide = document.createElement('div');
    slide.classList.add('slide');
    let photo = document.createElement('img');
    photo.src = element.photo;
    link.appendChild(photo);
    slide.appendChild(link);
    let cap = document.createElement('figcaption')
    cap.innerHTML=element.caption
    slide.appendChild(cap);
    container.innerHTML=''
    container.appendChild(slide);
}

createSlides(current)