$(document).foundation();

BasicForm = {
  init: function() {
    this.handleFormSubmit();
  },

  handleFormSubmit: function() {
    document.querySelector('form').onsubmit = function(event) {
      var list = BasicForm.buildListItem(event.target);
      var details = document.querySelector('.details');
      if (!details) {
        details = document.createElement('div');
        details.className = 'details';
      }
      details.appendChild(list);
      document.querySelector('section').appendChild(details);
      event.target.reset();
      event.preventDefault();
    }
  },

  buildListItem: function(form) {
    var list = document.createElement('dl');
    list.innerHTML += '<dt>Name:</dt>';
    list.innerHTML += '<dd>' + form.name.value + '</dd>';
    list.innerHTML += '<dt>Hair Color:</dt>';
    list.innerHTML += '<dd>' + form.color.value + '</dd>';
    list.innerHTML += '<dt>Age:</dt>';
    list.innerHTML += '<dd>' + form.age.value + '</dd>';
    list.innerHTML += '<dt>Birthplace:</dt>';
    list.innerHTML += '<dd>' + form.birthplace.value + '</dd>';
    return list;
  }
}

BasicForm.init();
