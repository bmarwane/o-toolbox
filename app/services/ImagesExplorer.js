import scan from './scan'

export function loadImagesByQuery(searchPath, query, callback) {

  scan(searchPath, query, function(err, files) {
    callback(files);
  });
}
