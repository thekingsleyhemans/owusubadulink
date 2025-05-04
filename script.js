// Select all elements with the class 'link-item'
const linkItems = document.querySelectorAll('.link-item');

linkItems.forEach((item) => {
  item.addEventListener('mouseenter', () => {
    // Find the marquee content and link text within the current link-item
    const marqueeContent = item.querySelector('.marquee');
    const linkText = item.querySelector('.link-text');



    // Remove the 'hidden' class from the marquee content
    if (marqueeContent) {
      marqueeContent.classList.remove('hidden');
    }

    // Add the 'hidden' class to the link text
    if (linkText) {
      linkText.classList.add('hidden');
    }
  });

  item.addEventListener('mouseleave', () => {
    // Find the marquee content and link text within the current link-item
    const marqueeContent = item.querySelector('.marquee');
    const linkText = item.querySelector('.link-text');

    // Reset the width of the current link-item
    item.style.transition = 'width 0.3s ease-in-out'; // Smooth transition
    item.style.width = ''; // Reset to original width

    // Add the 'hidden' class back to the marquee content
    if (marqueeContent) {
      marqueeContent.classList.add('hidden');
    }

    // Remove the 'hidden' class from the link text
    if (linkText) {
      linkText.classList.remove('hidden');
    }
  });
});
