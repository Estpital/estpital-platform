// Estpital - Ana JavaScript Dosyası

document.addEventListener('DOMContentLoaded', function() {
    console.log('Estpital web sitesi yüklendi!');
    
    // Mobil menü toggle işlevi
    const mobileMenuButton = document.querySelector('.sm\\:hidden button');
    if (mobileMenuButton) {
        const mobileMenu = document.createElement('div');
        mobileMenu.className = 'mobile-menu hidden sm:hidden absolute w-full bg-white shadow-lg z-50';
        mobileMenu.innerHTML = `
            <div class="px-2 pt-2 pb-3 space-y-1">
                <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50">Operasyonlar</a>
                <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50">Doktorlar</a>
                <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50">Hakkımızda</a>
                <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50">İletişim</a>
                <button class="w-full mt-3 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none">
                    Doktor Girişi
                </button>
            </div>
        `;
        
        mobileMenuButton.parentNode.parentNode.appendChild(mobileMenu);
        
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // Animasyonları tetikle
    const animatedElements = document.querySelectorAll('.animate-fade-in, .animate-slide-up');
    if (animatedElements.length > 0) {
        animatedElements.forEach(el => {
            el.style.opacity = '0';
        });
        
        setTimeout(() => {
            animatedElements.forEach(el => {
                el.style.opacity = '1';
            });
        }, 100);
    }
    
    // Arama formunu işlevsel hale getir
    const searchForm = document.querySelector('input[placeholder="Operasyon veya doktor arayın..."]');
    if (searchForm) {
        const searchButton = searchForm.parentNode.nextElementSibling;
        
        searchButton.addEventListener('click', function() {
            const searchValue = searchForm.value.trim();
            if (searchValue) {
                alert(`"${searchValue}" için arama yapılacak. Bu özellik henüz geliştirme aşamasında.`);
            } else {
                alert('Lütfen arama yapmak için bir terim girin.');
            }
        });
        
        searchForm.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                searchButton.click();
            }
        });
    }
});
