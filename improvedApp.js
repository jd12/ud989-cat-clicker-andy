/* ====== Model ===== */

var model = {
  currentCat: null,
  cats: [
    {
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

/* ===== Octupus ===== */

var octupus = {

  init: function() {
    // set currentCat to the first one in the list
    model.currentCat = model.cats[0];

    // initialize views
    catListView.init();
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
