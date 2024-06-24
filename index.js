const courses = [
    {
        "title": "Curso de IT ESSENTIAL",
        "description": "Aprenda HTML do zero.",
        "image": "IT-ESSENTIAL-CISCO.png",
        "category": "NETWORK basic"
    },
    {
        "title": "Curso de CSS",
        "description": "Domine o CSS.",
        "image": "cWeb Development",
        "category": "Web Development"
    },
    {
        "title": "Curso de JavaScript",
        "description": "Torne-se um ninja em JavaScript.",
        "image": "js-course.jpg",
        "category": "Web Development"
    },
    {
        "title": "Curso de Python",
        "description": "Introdução ao Python.",
        "image": "python-course.jpg",
        "category": "Programming"
    },
    {
        "title": "Curso de Data Science",
        "description": "Ciência de Dados com Python.",
        "image": "data-science-course.jpg",
        "category": "Data Science"
    }
    // Adicione mais cursos conforme necessário
];



// 
document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');

    // Carregar cursos do arquivo cards.js
    courses.forEach(course => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <img src="assets/image${course.image}" alt="${course.title}">
            <div class="card-content">
                <h3 class="card-title">${course.title}</h3>
                <p class="card-description">${course.description}</p>
            </div>
        `;
        track.appendChild(card);
    });

    let index = 0;
    const cardWidth = document.querySelector('.card').offsetWidth + 20; // Card width + margin

    function updateArrows() {
        leftArrow.style.display = index === 0 ? 'none' : 'block';
        rightArrow.style.display = (index === courses.length - 1) ? 'none' : 'block';
    }

    rightArrow.addEventListener('click', () => {
        if (index < courses.length - 1) {
            index++;
            track.style.transform = `translateX(-${index * cardWidth}px)`;
            updateArrows();
        }
    });

    leftArrow.addEventListener('click', () => {
        if (index > 0) {
            index--;
            track.style.transform = `translateX(-${index * cardWidth}px)`;
            updateArrows();
        }
    });

    // Habilitar swipe para dispositivos móveis
    let startX;

    track.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    });

    track.addEventListener('touchmove', (e) => {
        if (!startX) return;

        const currentX = e.touches[0].clientX;
        const diffX = startX - currentX;

        if (diffX > 50) {
            if (index < courses.length - 1) {
                index++;
                track.style.transform = `translateX(-${index * cardWidth}px)`;
                updateArrows();
            }
            startX = null;
        } else if (diffX < -50) {
            if (index > 0) {
                index--;
                track.style.transform = `translateX(-${index * cardWidth}px)`;
                updateArrows();
            }
            startX = null;
        }
    });

    updateArrows();
});


