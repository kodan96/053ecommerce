$(document).ready(function () {
    // -------------------------------Element selectors------------------------------------------

    const productSlider = document.querySelector('.gallery_mobile');
    const images = document.querySelectorAll('.product');
    let currentIndex = 0;
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    const thumbnails = document.querySelectorAll('.thumb');
    switcher = document.querySelector('.switcher');

    // ----------------------------------Functions-----------------------------------------------
    function showImage(index) {
        images.forEach((image, i) => {
            image.style.display = i === index? 'block' : 'none';
        });
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    function previousImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    }

    const menuToggle = () => {

        const overlay = document.querySelector('.page-overlay');

        if (!overlay.style.opacity) {
            overlay.style.opacity = '0';
        }

        $('.page-overlay').toggle();
        overlay.style.opacity === '0' ? overlay.style.opacity = '1' : overlay.style.opacity = '0';
        
        $('nav').slideToggle();
        $('.open').toggle();
        $('.close').toggle();
    }

    const decreaseValue = () => {
        const productCount = $('#product-count');
        const currentValue = parseInt(productCount.val());
        const newValue = currentValue > 0 ? currentValue - 1 : 0;
        productCount.val(newValue);
    }

    const cartCounter = () => {
        const counter = $('.counter');
        const productCount = $('#product-count').val();
    
        if (productCount === "0" || productCount === "") {
            counter.hide();
        } else {
            counter.show();
            counter.html(parseInt(productCount, 10));
        }
    }

    const generatePrice = () => {
        if($('#product-count').val() === '0') {
            $('.cart-empty').show();
            $('.content').hide();
        } else {
            $('.cart-empty').hide();
            $('.content').show();
            $('.amount').html($('#product-count').val());
            const priceNumeric = $('.price').html().replace('$', '');
            $('.overall').html(`$${parseInt($('#product-count').val()) * priceNumeric}`);
        }
    }

    const deleteContent = () => {
        $('.content').hide();
        $('.cart-empty').show();
        $('.counter').hide();
    }

    const lightboxNext = () => {
        const lightboxImg = document.querySelector('.lightbox-img');

        currentIndex = (currentIndex + 1) % images.length;
        lightboxImg.src = images[currentIndex].src;
    }

    const lightboxPrev = () => {
        const lightboxImg = document.querySelector('.lightbox-img');

        currentIndex = (currentIndex - 1 + images.length) % images.length;
        lightboxImg.src = images[currentIndex].src;
    }

    



    // -------------------------Event listeners------------------------------------------------------
    next.addEventListener('click', nextImage);

    prev.addEventListener('click', previousImage);

    $('.open, .close').on('click', menuToggle);

    $('.minus').on('click', function() {
        decreaseValue();
    });

    $('.plus').on('click', () => {
        $('#product-count').val(parseInt($('#product-count').val()) + 1);
    })

    $('.cart').on('click', (e) => {
        e.preventDefault();
        cartCounter();
        generatePrice();
    })

    $('.cart-icon').on('click', () => {
        $('.cart-content').slideToggle();
    })

    $('.delete').on('click', () => {
        deleteContent();
    })
    

    $('.switcher').on('click', () => {
        $('.lightbox').css('display', 'flex');
    })

    $('.lightbox-close').on('click', () => {
        $('.lightbox').css('display', 'none');
    })

    thumbnails.forEach((thumbnail, i) => {
        const switcher = document.querySelector('.switcher');

        thumbnail.addEventListener('click', () => {
            thumbnails.forEach(t => t.classList.remove('active'));
            thumbnail.classList.add('active');
            thumbnail.classList.add('active');
            switcher.setAttribute('src', images[i].getAttribute('src'))
        })
    })

    $('.lightbox-prev').on('click', lightboxPrev)
    $('.lightbox-next').on('click', lightboxNext)


    window.addEventListener('resize', () => {
        if (window.innerWidth > 1000) {
            images.forEach((image, i) => {
                image.style.display = 'none';
            })
        } else {
            images.forEach((image, i) => {
                image.style.display = 'none';
            })
            images[0].style.display = 'block';
        }
            
        
        
    })
    

});


