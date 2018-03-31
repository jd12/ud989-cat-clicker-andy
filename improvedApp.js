/* ====== Model ===== */

var model = {
  currentCat: null,
  cats: [{
      clickCount: 0,
      name: 'Tabby',
      imgSrc: 'img/cat_picture1.jpg',
      imgAttribution: 'Tabby the Cat'
    },
    {
      clickCount: 0,
      name: 'Tiger',
      imgSrc: 'img/cat_picture2.jpeg',
      imgAttribution: 'Tiger the Cat'
    },
    {
      clickCount: 0,
      name: 'Scaredy',
      imgSrc: 'img/cat_picture3.jpeg',
      imgAttribution: 'Scaredy the Cat'
    },
    {
      clickCount: 0,
      name: 'Shadow',
      imgSrc: 'img/cat_picture4.jpeg',
      imgAttribution: 'Shadow the Cat'
    },
    {
      clickCount: 0,
      name: 'Sleepy',
      imgSrc: 'img/cat_picture5.jpeg',
      imgAttribution: 'Sleepy the Cat'
    }
  ]
};

/* ===== Octopus ===== */

var octopus = {

  init: function() {
    // set currentCat to the first one in the list
    model.currentCat = model.cats[0];
    console.log(model.currentCat);
    // initialize views
    //catListView.init();
    catView.init();
  },

  getCats: function() {
    return model.cats;
  },

  // update the currentCat to the object passed in
  setCurrentCat: function(cat) {
    model.currentCat = cat;
  },

  getCurrentCat: function() {
    return model.currentCat;
  },

  // increment the counter for the currentCat
  incrementCounter: function() {
    model.currentCat.clickCount++;
    catView.render();
  }

};

/* ==== View ==== */

var catView = {

  init: function() {
    // store pointers to our DOM elements for easy access later
    this.catElem = document.getElementById('cat');
    this.catNameElem = document.getElementById('cat-name');
    this.catImageElem = document.getElementById('cat-img');
    this.countElem = document.getElementById('cat-count');

    // on click, increment the current cat's counter
    this.catImageElem.addEventListener('click', function() {
      octopus.incrementCounter();
    });

    // update the DOM elements with the right values)
    this.render();
  },

  render: function() {
    // update the DOM elements with values from the current cat
    var currentCat = octopus.getCurrentCat();
    this.countElem.textContent = currentCat.clickCount;
    this.catNameElem.textContent = currentCat.name;
    this.catImageElem.src = currentCat.imgSrc;
  }
};

var catListView = {

  init: function() {
    // store the DOM element for easy access later
    this.catListElem = document.getElementById('cat-list');

    // render this view (update the DOM elements with the right values)
    this.render();
  },

  render: function() {
    var cat = null;
    var elem = null;

    // get the cats we'll be rendering from the octopus
    var cats = octopus.getCats();

    // empty the cat list
    this.catListElem.innerHTML = '';

    // loop over the cats
    for (var i = 0; i < cats.length; i++) {
      // this is the cat we're currently looping over
      cat = cats[i];

      // make a new cat list item and set its text
      elem = document.createElement('li');
      elem.textContent = cat.name;

      // on click, setCurrentCat and render the catView
      // (this uses our closure-in-a-loop trick to connect the value
      //  of the cat variable to the click event function)
      elem.addEventListener('click', (function(catCopy) {
        return function() {
          octopus.setCurrentCat(catCopy);
          catView.render();
        };
      })(cat))

      // finally, add the element to the list
      this.catListElem.appendChild(elem);
    }
  }
};

octopus.init();
