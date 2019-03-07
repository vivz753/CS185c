/**
 * Set random color on material.
 */
AFRAME.registerComponent('random-color', {
    dependencies: ['color'],
  
    init: function () {
      this.el.setAttribute('color', getRandomColor());
    }
  });
  
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }