var MKscanner = angular.module('starter', ['ionic', 'ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

MKscanner.controller('scanBarCtrl', function($scope, $cordovaBarcodeScanner) {
  $scope.scanBarcode = function() {
    $cordovaBarcodeScanner.scan(
      {
        preferFrontCamera : false,
        orientation : 'portrait'
      }).then(function (result) {
        alert(result.text);
      },
      function (error) {
        alert('Scanning failed: ' + error);
      });
  };


$scope.encodeBarcode = function()
{

  cordova.plugins.barcodeScanner.encode(cordova.plugins.barcodeScanner.Encode.TEXT_TYPE, 

"www.polytechnic.ck.ua"

    , function(success) {
            alert("encode success: " + success);
          }, function(fail) {
            alert("encoding failed: " + fail);
          }
        );

}




});


