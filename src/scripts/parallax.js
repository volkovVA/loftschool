var parallax = (function() {
    var mountains = document.querySelector('.paralax__layer--mountains');
    var train = document.querySelector('.paralax__layer--train');
    var grass = document.querySelector('.paralax__layer--grass');
  
    return {
      move: function (block, windowScroll, strafeAmount) {
        var strafe = (windowScroll) / strafeAmount + '%';
        var transformString = 'translate3d(0,' + strafe + ', 0)';
        var style = block.style;
        style.transform = transformString;
        style.webkitTransform = transformString;
      }, 
      init: function (wScroll) {
        this.move(mountains, wScroll, -80);
        this.move(train, wScroll, -65);
        this.move(grass, wScroll, -50);
      }
    }
}());

var parallax_leaf = (function() {
  var layerOne = document.querySelector('.paralax-leaf__layer--one');
  var layerTwo = document.querySelector('.paralax-leaf__layer--two');
  var layerThree = document.querySelector('.paralax-leaf__layer--three');
  var layerTFour = document.querySelector('.paralax-leaf__layer--four');

  return {
    move: function (block, windowScroll, strafeAmount) {
      var strafe = (windowScroll-3600) / strafeAmount + '%';
      var transformString = 'translate3d(0,' + strafe + ', 0)';
      var style = block.style;
      style.transform = transformString;
      style.webkitTransform = transformString;
    }, 
    init: function (wScroll) {
      this.move(layerOne, wScroll, -20);
      this.move(layerTwo, wScroll, -7);
      this.move(layerThree, wScroll, -10);
      this.move(layerTFour, wScroll, -5);
    }
  }
}());
  
window.onscroll = function() {
var wScroll = window.pageYOffset;
parallax.init(wScroll);
parallax_leaf.init(wScroll);
}