var MKscanner = angular.module('starter', ['ionic', 'ngCordova'])


.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

MKscanner.controller('scanBarCtrl', function($scope, $cordovaBarcodeScanner) {
  
$scope.input ={
  MyText : ''
};


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


 console.log($scope.input.MyText);

  cordova.plugins.barcodeScanner.encode(cordova.plugins.barcodeScanner.Encode.TEXT_TYPE, $scope.input.MyText, function(success) {
            alert("encode success: " + success);
          }, function(fail) {
            alert("encoding failed: " + fail);
          }
        );

}

});


MKscanner.controller('SharingContr', function($scope, $cordovaSocialSharing) {

$scope.ShareAnywhere = function(){

  $cordovaSocialSharing.share("Hello! I just scanned this by 'QR and Barcode Scanner by M.K.':", "Scanned by QR and Barcode Scanner by M.K.", null, "Here is text of barcode")
}

});