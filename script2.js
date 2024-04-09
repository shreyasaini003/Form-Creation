setTimeout(function () {
    document.querySelector('.loading-circle-container').style.display = 'none';
    document.querySelector('.learning-page').style.display = 'flex';
  }, 3000); 
  function changeBorderColor(element) {
    element.style.borderColor = "#000";
  }