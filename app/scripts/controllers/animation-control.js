'use strict';

/**
 * @ngdoc function
 * @name angularSvgCharacterAnimationsApp.controller:AnimationControlCtrl
 * @description
 * # AnimationControlCtrl
 * Controller of the angularSvgCharacterAnimationsApp
 */
 angular.module('angularSvgCharacterAnimationsApp')
 .controller('AnimationControlCtrl', function ($scope, $timeout, $speechSynthetis) {
 	$scope.currentShape = 'a';
 	$scope.letterMS = 75;
 	$scope.spacePause = 50;
 	$scope.commaPause = 10000;
 	$scope.fullstopPause = 150;

 	function pathTween(p1, p2) {
 		//console.log('from',p1,'\nto',p2);
 		var ti = d3.interpolate(p1,p2);
 		return function(t) {
 			return ti(t);
 		};
 	}

 	$scope.letter2shape = makeLetters2ShapeObj(prestonBlair);

 	$scope.speak = function(str) {
 		// Speak sentence:
 		$speechSynthetis.speak(str, 'en-UK');
 		// Break up into sentences:
 		var delay = 0;
 		str.split('.').forEach(function(sentence) {
 			//Split into sub-sentences (commas):
 			sentence.split(',').forEach(function (subSentence){
 				// Split into letters:
 				subSentence.split(' ').forEach(function(word){
 					var w = word.trim();
 					for (var i = 0; i < w.length; i++) {
 						var letter = w.charAt(i);
 						// need to check if letter is 'th'
 						if (letter == 't' && w.charAt(i+1) == 'h') {
 							letter+= 'h';
 							i++;
 						}
 						var shape = $scope.letter2shape[letter];
 						$scope.changeToShapeDelay(shape, delay);
 						delay += $scope.letterMS;
 					}
 					$scope.changeToShapeDelay('rest', delay);
 					delay += $scope.spacePause;
 				});
 				$scope.changeToShapeDelay('rest', delay);
 				delay += $scope.commaPause;
 			});
 			$scope.changeToShapeDelay('rest', delay);
 			delay += $scope.fullstopPause;
 		});
 	};

 	var d3v_mouths;
 	var d3v_current;

 	$scope.initSvg = function() {
 		d3v_mouths = d3.select('#mouths');
 		d3v_current = d3v_mouths.select('#current');
 	};

 	function hideOrShow(e, d3v, d3c_current) {
 		if (d3v.select(e)[0][0].style['display'] === "") {
 			d3v_current.select(e).style('display','none');
 		} else {
 			d3v_current.select(e).style('display','inline');//.transition().delay(150)
 		}
 	}

 	function tween(e, d3v, d3c_current) {
 		d3v_current.select(e).transition().duration($scope.letterMS).attrTween('d', function() {
 			return pathTween(d3v_current.select(e).attr('d'),
 				d3v.select(e).attr('d'));
 		});
 	}

 	function hideOrShowAndTween(e, tweenExt, d3v, d3c_current) {
 		hideOrShow(e, d3v, d3c_current);
 		tween(e + ' ' + tweenExt, d3v, d3c_current);
 	}

 	function hideOrShowAndTweenChildren(e, post, d3v, d3c_current) {
 		d3v_current.selectAll(e + ' ' + post).transition().duration($scope.letterMS).attrTween('d', function(a,b) {
 			if (d3v.select(e + ':nth-child(' + (b+1) + ') ' + post)[0][0].style['display'] === "inline") {
 				d3v_current.select(e + ':nth-child(' + (b+1) + ') ' + post).style('display','none');
 			} else {
 				d3v_current.select(e + ':nth-child(' + (b+1) + ') ' + post).style('display','inline');
 			}
 			return pathTween(d3v_current.select(e + ':nth-child(' + (b+1) + ') ' + post).attr('d'),
 				d3v.select(e + ':nth-child(' + (b+1) + ') ' + post).attr('d'));
 		});
 	}
 	
 	$scope.changeToShape = function(shapeId) {
 		console.log('changeToShape', shapeId);
 		// Select new shape:
 		var d3v = d3v_mouths.select('#' + shapeId);
 		hideOrShowAndTween('.tooth-left', 'path', d3v, d3v_current);
 		hideOrShowAndTween('.tooth-right', 'path', d3v, d3v_current);
 		hideOrShow('.tooth-row', d3v, d3v_current);
 		hideOrShowAndTweenChildren('.tooth-row g', 'path', d3v, d3v_current);
 		hideOrShowAndTween('.lips', '', d3v, d3v_current);
 		hideOrShowAndTween('.tounge', '', d3v, d3v_current);
 		hideOrShowAndTween('.outer-tounge', '', d3v, d3v_current);
 	};

 	$scope.changeToShapeDelay = function(shapeId, delay) {
 		console.log('changeToShapeDealy', shapeId, delay);
 		$timeout( function() {
 			var d3v = d3v_mouths.select('#' + shapeId);
 			hideOrShowAndTween('.tooth-left', 'path', d3v, d3v_current);
 			hideOrShowAndTween('.tooth-right', 'path', d3v, d3v_current);
 			hideOrShow('.tooth-row', d3v, d3v_current);
 			hideOrShowAndTweenChildren('.tooth-row g', 'path', d3v, d3v_current);
 			hideOrShowAndTween('.lips', '', d3v, d3v_current);
 			hideOrShowAndTween('.tounge', '', d3v, d3v_current);
 			hideOrShowAndTween('.outer-tounge', '', d3v, d3v_current);
 		}, delay);
 	};
 });
