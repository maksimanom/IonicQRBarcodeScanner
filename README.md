# Ionic Barcode Scanner

### Requirements

- [NPM](https://www.npmjs.com)
- [Ionic](https://ionicframework.com/)
- [Cordova](https://cordova.apache.org/)

### Instalation

Clone or Fork this repo, and then run:

```sh
# add android, iOS or both:
$ ionic platform add android
$ ionic platform add ios
# install node modules:
$ npm install
# add cordova plugin:
$ cordova plugin add phonegap-plugin-barcodescanner --variable CAMERA_USAGE_DESCRIPTION="Escáner de Pórticos"
```

#### Run, build, emulate

Just run `$ ionic build android` or `$ ionic build ios`. change `run`to `build` to deploy to the device.

[sabino.cl](http://www.sabino.cl)