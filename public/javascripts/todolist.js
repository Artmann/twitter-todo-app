(function() {

  document.getElementById('form').onsubmit = function(e) {
    e.preventDefault();
    document.getElementById('overlay').classList.toggle('invisible');
    this.submit();
  };

  document.getElementById('modal').addEventListener('click', function(e) {
    e.stopPropagation();
  });

  document.getElementById('overlay').addEventListener('click', function() {
    document.getElementById('overlay').classList.toggle('invisible');
  });

  document.getElementById('add-button').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('overlay').classList.toggle('invisible');
  });
})();