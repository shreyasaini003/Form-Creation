

window.addEventListener('load', function () {
  var progressBar = document.querySelector('.progress-bar');
  progressBar.style.width = '20%';
});

function selectOption(option) {
  var options = document.querySelectorAll('.option-box label');
  for (var i = 0; i < options.length; i++) {
    options[i].style.borderColor = '#ccc';
  }
  option.style.borderColor = 'black';
  var continueButton = document.getElementById('continueButton');
  continueButton.style.backgroundColor = 'black';
  continueButton.onclick = nextPage;
}

function nextPage() {
  var selectedOption = document.querySelector('.option-box label[style="border-color: black;"]');
  if (!selectedOption) {
    alert('Please select an option.');
    return;
  }
  var currentPage = document.querySelector('.content');
  var nextPage = document.querySelector('.second-page');
  currentPage.style.display = 'none';
  nextPage.style.display = 'inline-block';

  var progressBar = document.querySelector('.progress-bar');
  progressBar.style.width = '40%';

  console.log('Navigating to the next page...');
}

function changeButtonColor(button) {
  button.style.backgroundColor = "black";
}

function secondSelectOption(option) {
  var options = document.querySelectorAll('.option-box label');
  for (var i = 0; i < options.length; i++) {
    options[i].style.borderColor = '#ccc';
  }
  option.style.borderColor = 'black';
  var continueButton = document.getElementById('secondContinueButton');
  continueButton.style.backgroundColor = 'black';
  continueButton.onclick = secondNextPage;
}

function secondNextPage() {
  var selectedOption = document.querySelector('.second-page .option-box label[style="border-color: black;"]');
  if (!selectedOption) {
    alert('Please select an option.');
    return;
  }
  var currentPage = document.querySelector('.second-page');
  var nextPage = document.querySelector('.third-page');
  currentPage.style.display = 'none';
  nextPage.style.display = 'inline-block';

  var progressBar = document.querySelector('.progress-bar');
  progressBar.style.width = '60%';

  console.log('Navigating to the next page...');
}

function thirdNextPage() {
  var currentPage = document.querySelector('.third-page');
  var nextPage = document.querySelector('.fourth-page');
  currentPage.style.display = 'none';
  nextPage.style.display = 'inline-block';

  var progressBar = document.querySelector('.progress-bar');
  progressBar.style.width = '80%';

  console.log('Navigating to the next page...');
}

document.querySelectorAll('.option').forEach(function (option) {
  option.addEventListener('click', function () {
    document.querySelectorAll('.option').forEach(function (otherOption) {
      otherOption.classList.remove('active');
    });
    option.classList.add('active');
    document.querySelector('.continue-button-fourth').classList.add('active');
  });
});

document.querySelector('.continue-button-fourth').addEventListener('click', function () {
  var currentPage = document.querySelector('.fourth-page');
  var nextPage = document.querySelector('.fifth-page');
  currentPage.style.animation = 'slideFromRightToLeft 0.5s ease both';
  setTimeout(function () {
    currentPage.style.display = 'none';
    nextPage.style.display = 'inline-block';
    nextPage.style.animation = 'slideFromRightToLeft 0.5s ease both';
    var progressBar = document.querySelector('.progress-bar');
    progressBar.style.width = '100%';

    console.log('Navigating to the next page...');
  }, 100);

});
function fifthNextPage() {

  window.location.href = "result.html";
}

document.querySelectorAll('.option').forEach(function (option) {
  option.addEventListener('click', function () {
    document.querySelectorAll('.option').forEach(function (otherOption) {
      otherOption.classList.remove('active');
    });
    option.classList.add('active');
    document.querySelector('.continue-button-fourth').classList.add('active');
  });
});

