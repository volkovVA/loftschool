export default function parallax (areaName){
    const area = document.querySelector(areaName);
    const layers = area.querySelectorAll('.js-parallax-layer');
    
    window.addEventListener('scroll', () => {
        const coord = area.getBoundingClientRect();
        const gearbox = 20;
        
        if (coord.top < area.clientHeight && coord.bottom > 0) {
            const scrollY = window.pageYOffset;
            
            layers.forEach((item) => {
                const speed = item.dataset.speed;
                const value = speed * scrollY / gearbox;
                
                item.style.transform = `translateY(-${value}px)`;
            });
        }    
    });
}