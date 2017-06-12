var MKscanner = angular.module('starter', ['ionic', 'ngCordova', 'ngStorage'])


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
        alert('Scanned text  "' + result.text + '"  copied to clipboard');
        new Clipboard(result.text);
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


$scope.encodeBarcodee = function()
{


 console.log();

  cordova.plugins.barcodeScanner.encode(cordova.plugins.barcodeScanner.Encode.TEXT_TYPE, "Graduate work by Maksym Kozoriz for Cherkasy Polytechnic College (с) 2017", function(success) {
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



MKscanner.factory ('StorageService', function ($localStorage) {

  $localStorage = $localStorage.$default({
    things: []
  });

  var _getAll = function () {
    return $localStorage.things;
  };

  var _add = function (thing) {
    $localStorage.things.push(thing);
  }

  var _remove = function (thing) {
    $localStorage.things.splice($localStorage.things.indexOf(thing), 1);
  }

  return {
    getAll: _getAll,
    add: _add,
    remove: _remove
  };
});


MKscanner.controller( 'MainCtrl', function ($scope, StorageService) {
  $scope.things = StorageService.getAll();

  $scope.add = function (newThing) {
    StorageService.add(newThing);
      };

  $scope.remove = function (thing) {
    StorageService.remove(thing);
  };
});

