export function Game() {
  this.row1 = [5, 3, "", "", 7, "", "", "", ""];

}


Game.prototype.numbOnly = function() {
  var failureLog = [];
  var allowedValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, ""];

  for (var i = 0; i < 9; i++) {
    if (allowedValues.indexOf(this.row1[i]) < 0) {
      failureLog.push([i]);
    }
  }
  if (failureLog.length > 0) {
    return failureLog;
  } else {
    return "PASS";
  }
}

Game.prototype.noDupe = function() {
  var failureLog = [];
  var keepLog = [];
  var dumbLog = [];
  for (var i = 0; i < 9; i++) {
    var num = this.row1[i]
    if (num === "") {
    dumbLog.push("");
    } else if (keepLog.indexOf(num) < 0) {
      keepLog.push(this.row1[i]);
    } else {
      failureLog.push(this.row1[num])
    }
  }
  return failureLog;

}
