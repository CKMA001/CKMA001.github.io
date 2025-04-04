//  https://blog.51cto.com/u_16213440/12667491


function makeSlides() {

  // const images = document.querySelectorAll('.carousel-images img');
  // const prevButton = document.querySelector('.prev');
  // const nextButton = document.querySelector('.next');
  // const carousel = document.getElementById('carousel');


  // const carousel = document.querySelector('.carousel-inner');
  const carouselInner = document.querySelector('.carousel .carousel-inner');
  const images = document.querySelectorAll('.carousel .carousel-item');
  const prevButton = document.querySelector('.carousel .prev');
  const nextButton = document.querySelector('.carousel .next');

  let currentIndex = 0;
  let interval;


  function autoScroll() {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
  }

  // 定义一个函数来重置自动滚动计时器：
  function resetAutoScroll() {
    clearInterval(interval);
    interval = setInterval(autoScroll, 3000); // 重新设置自动滚动计时器
  }


  function updateCarousel() {
    // const offset = -currentIndex * 100;
    // document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;

    const offset = -currentIndex * 100;
    if(carouselInner) {
      carouselInner.style.transform = `translateX(${offset}%)`;
    }
    if(images) {
      images.forEach((item, index) => {
        item.classList.toggle('active', index === currentIndex);
      });
    }

  }


  function startAutoSlide() {
    interval = setInterval(nextSlide, 3000); // 每3秒切换
  }

  function stopAutoSlide() {
    clearInterval(interval);
  }



  // next 》
  function nextSlide() {
    // currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
    // resetAutoScroll(); // 重置自动滚动计时器
  }

  if(prevButton) {
    // previous,  《
    prevButton.onclick = () => {
      stopAutoSlide();
      // currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      updateCarousel();
      startAutoSlide();
    };
  }



  if (nextButton) {
    nextButton.onclick = () => {
      stopAutoSlide();
      nextSlide();
      startAutoSlide();
    };
  }


  if (carouselInner) {
    carouselInner.onmouseover = stopAutoSlide;
    carouselInner.onmouseout = startAutoSlide;
  }



  startAutoSlide();




}





function makeSlides2() {
  const carouselInner = document.querySelector('.carousel-inner');
  const items = document.querySelectorAll('.carousel-item');
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');


  let currentIndex = 0;
  // 使用setInterval来实现自动滚动功能：
  function autoScroll() {
    currentIndex = (currentIndex + 1) % items.length;
    updateCarousel();
  }
  let scrollInterval = setInterval(autoScroll, 3000); // 每3秒滚动一次

  // 更新轮播图的显示：
  function updateCarousel() {
    const offset = -currentIndex * 100;
    carouselInner.style.transform = `translateX(${offset}%)`;
    items.forEach((item, index) => {
      item.classList.toggle('active', index === currentIndex);
    });
  }


  // 定义一个函数来重置自动滚动计时器：
  function resetAutoScroll() {
    clearInterval(scrollInterval);
    scrollInterval = setInterval(autoScroll, 3000); // 重新设置自动滚动计时器
  }

  // 为“上一张”和“下一张”按钮添加事件监听器：

  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateCarousel();
    resetAutoScroll(); // 重置自动滚动计时器
  });

  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % items.length;
    updateCarousel();
    resetAutoScroll(); // 重置自动滚动计时器
  });




}

$(document).ready(function() {
  makeSlides()
});
