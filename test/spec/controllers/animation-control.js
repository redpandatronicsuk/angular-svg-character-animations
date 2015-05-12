'use strict';

describe('Controller: AnimationControlCtrl', function () {

  // load the controller's module
  beforeEach(module('angularSvgCharacterAnimationsApp'));

  var AnimationControlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AnimationControlCtrl = $controller('AnimationControlCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
