'use strict';

describe('myApp.view1 module', function() {

  beforeEach(module('myApp.selectedList'));

  describe('selectedList controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var view1Ctrl = $controller('SelectedListCtrl');
      expect(view1Ctrl).toBeDefined();
    }));

  });
});