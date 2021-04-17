let shareContent = document.getElementById('share-content');
let shareBtn = document.getElementById('share-btn');

shareBtn.addEventListener('click', () => {
  if (shareContent.style.display === 'none' || shareContent.style.display === '') {
    shareContent.style.display = 'flex';
    shareBtn.style.color = '#fff';
    shareBtn.style.background = 'hsl(214, 17%, 51%)';
  } else if (shareContent.style.display === 'flex') {
    shareContent.style.display = 'none';
    shareBtn.style.color = 'hsl(214, 17%, 51%)';
    shareBtn.style.background = 'hsl(210, 46%, 95%)';
  }
})
