/* exported truncate */
function truncate(length, string) {
  var shortVersion = '';
  if (string !== '') {
    for (var i = 0; i < length; i++) {
      shortVersion += string[i];
    }
  }
  shortVersion += '...';
  return shortVersion;
}
