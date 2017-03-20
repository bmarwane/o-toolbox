var fs = require('fs');
var async = require('async');

import mime from 'mime'

export default function scan(dir, searchStr, callback) {
  fs.readdir(dir, function(err, files) {
    var returnFiles = [];
    async.each(files, function(file, next) {
      var filePath = dir + '/' + file;
      fs.stat(filePath, function(err, stat) {
        if (err) {
          return next(err);
        }
        if (stat.isDirectory()) {
          scan(filePath, searchStr, function(err, results) {
            if (err) {
              return next(err);
            }
            returnFiles = returnFiles.concat(results);
            next();
          })
        }
        else if (stat.isFile()) {

          if (file.indexOf(searchStr) !== -1) {
            if(isImage(filePath)) {
              returnFiles.push({path: filePath});
            }
          }
          next();
        }
      });
    }, function(err) {
      callback(err, returnFiles);
    });
  });
};

function isImage(filePath) {
  var mimeType = mime.lookup(filePath)
  var mimeParts = mimeType.split('/')
  if(mimeParts.length == 2){
    if(mimeParts[0] === 'image'){
      return true;
    }
  }

  return false;
}
