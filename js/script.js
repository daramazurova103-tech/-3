const tabButtons = document.querySelectorAll('.tabs__btn');
const tabContents = document.querySelectorAll('.tabs__content');
tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    tabButtons.forEach(btn => btn.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));

    button.classList.add('active');

    const targetId = button.getAttribute('data-tab');
    const targetContent = document.getElementById(targetId);
    
    if (targetContent) {
      targetContent.classList.add('active');
    }
  });
});
