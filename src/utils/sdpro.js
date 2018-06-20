
function SDsix () {
  this.sdArr = [] // 生成的数独数组
  this.errorArr = [] // 错误的格子。
  this.blankNum = 30 // 空白格子数量
  this.backupSdArr = [] // 数独数组备份。
}

SDsix.prototype = {
  constructor: SDsix,
  createSdArr: function () {
    // 生成数独数组。
    var that = this
    try {
      this.sdArr = []
      var allNum = [1, 2, 3, 4, 5, 6]
      // outerfor:
      for (var i = 1; i <= 6; i++) {
        // innerfor:
        for (var j = 1; j <= 6; j++) {
            // console.log(this.sdArr[parseInt(i + '' + j)])
          if (!this.sdArr[parseInt(i + '' + j)]) {
            // continue innerfor
            var XArr = this.getXArr(j, this.sdArr)
            var YArr = this.getYArr(i, this.sdArr)
            var thArr = this.getThArr(i, j, this.sdArr)
            var arr = getConnect(getConnect(XArr, YArr), thArr)
            var ableArr = arrMinus(allNum, arr)
            if (ableArr.length == 0) {
              this.createSdArr()
              return
              // break outerfor
              // break
            }
            var item
            // 如果生成的重复了就重新生成。
            do {
              item = ableArr[getRandom(ableArr.length) - 1]
            } while (arr.indexOf(item) > -1)

            this.sdArr[parseInt(i + '' + j)] = item
          }
        }
      }
      this.backupSdArr = this.sdArr.slice()
      return this.sdArr
    } catch (e) {
      // 如果因为超出浏览器的栈限制出错，就重新运行。
      that.createSdArr()
    }
  },
  getXArr: function (j, sdArr) {
    // 获取所在行的值。
    var arr = []
    for (var a = 1; a <= 6; a++) {
      if (this.sdArr[parseInt(a + '' + j)]) {
        arr.push(sdArr[parseInt(a + '' + j)])
      }
    }
    return arr
  },
  getYArr: function (i, sdArr) {
    // 获取所在列的值。
    var arr = []
    for (var a = 1; a <= 6; a++) {
      if (sdArr[parseInt(i + '' + a)]) {
        arr.push(sdArr[parseInt(i + '' + a)])
      }
    }
    return arr
  },
  getThArr: function (i, j, sdArr) {
    // 获取所在三宫格的值。
    var arr = []
    var cenNum = this.getTh(i, j)
    var thIndexArr = [cenNum - 11, cenNum - 1, cenNum + 9, cenNum - 10, cenNum, cenNum + 10]
    for (var a = 0; a < 6; a++) {
      if (sdArr[thIndexArr[a]]) {
        arr.push(sdArr[thIndexArr[a]])
      }
    }
    return arr
  },
  getTh: function (i, j) {
    // 获取所在三宫格的中间位坐标。
    var cenArr = [22, 52, 24, 54, 26, 56]
    var index = (Math.ceil(j / 2) - 1) * 2 + Math.ceil(i / 3) - 1
    var cenNum = cenArr[index]
    return cenNum
  },
  createBlank: function (num) {
    // 生成指定数量的空白格子的坐标。
    var blankArr = []
    var numArr = [1, 2, 3, 4, 5, 6]
    var item
    num = num || this.blankNum
    for (var a = 0; a < num; a++) {
      do {
        item = parseInt(numArr[getRandom(6) - 1] + '' + numArr[getRandom(6) - 1])
      } while (blankArr.indexOf(item) > -1)
      blankArr.push(item)
    }
    this.blankArr = blankArr
    for (var i = 0; i < blankArr.length; i++) {
      this.sdArr[blankArr[i]] = ''
    }
  }
}

function SDfour () {
  this.sdArr = [] // 生成的数独数组
  this.errorArr = [] // 错误的格子。
  this.blankNum = 5 // 空白格子数量
  this.backupSdArr = [] // 数独数组备份。
}

SDfour.prototype = {
  constructor: SDfour,
  init: function (blankNum) {
    this.createSdArr()
    this.createBlank()
  },
  createSdArr: function () {
    // 生成数独数组。
    var that = this
    try {
      this.sdArr = []
      var allNum = [1, 2, 3, 4]
      // outerfor:
      for (var i = 1; i <= 4; i++) {
        // innerfor:
        for (var j = 1; j <= 4; j++) {
          if (!this.sdArr[parseInt(i + '' + j)]) {
            // continue innerfor;
            var XArr = this.getXArr(j, this.sdArr)
            var YArr = this.getYArr(i, this.sdArr)
            var thArr = this.getThArr(i, j, this.sdArr)
            var arr = getConnect(getConnect(XArr, YArr), thArr)
            var ableArr = arrMinus(allNum, arr)

            if (ableArr.length == 0) {
              this.createSdArr()
              return
              // break outerfor;
            }

            var item
            // 如果生成的重复了就重新生成。
            do {
              item = ableArr[getRandom(ableArr.length) - 1]
            } while (arr.indexOf(item) > -1)

            this.sdArr[parseInt(i + '' + j)] = item
          }
        }
      }
      this.backupSdArr = this.sdArr.slice()
      return this.sdArr
    } catch (e) {
      // 如果因为超出浏览器的栈限制出错，就重新运行。
      that.createSdArr()
    }
  },
  getXArr: function (j, sdArr) {
    // 获取所在行的值。
    var arr = []
    for (var a = 1; a <= 4; a++) {
      if (this.sdArr[parseInt(a + '' + j)]) {
        arr.push(sdArr[parseInt(a + '' + j)])
      }
    }
    return arr
  },
  getYArr: function (i, sdArr) {
    // 获取所在列的值。
    var arr = []
    for (var a = 1; a <= 4; a++) {
      if (sdArr[parseInt(i + '' + a)]) {
        arr.push(sdArr[parseInt(i + '' + a)])
      }
    }
    return arr
  },
  getThArr: function (i, j, sdArr) {
    // n获取所在三宫格的值。
    var arr = []
    var cenNum = this.getTh(i, j)
    var thIndexArr = [cenNum - 10, cenNum, cenNum + 1, cenNum - 9]
    for (var a = 0; a < 4; a++) {
      if (sdArr[thIndexArr[a]]) {
        arr.push(sdArr[thIndexArr[a]])
      }
    }
    return arr
  },
  getTh: function (i, j) {
    // 获取所在三宫格的中间位坐标。
    var cenArr = [21, 41, 23, 43]
    var index = (Math.ceil(j / 2) - 1) * 2 + Math.ceil(i / 2) - 1
    var cenNum = cenArr[index]
    return cenNum
  },
  createBlank: function (num) {
    // 生成指定数量的空白格子的坐标。
    var blankArr = []
    var numArr = [1, 2, 3, 4]
    var item
    num = num || this.blankNum
    for (var a = 0; a < num; a++) {
      do {
        item = parseInt(numArr[getRandom(4) - 1] + '' + numArr[getRandom(4) - 1])
      } while (blankArr.indexOf(item) > -1)
      blankArr.push(item)
    }
    this.blankArr = blankArr
    // console.log(blankArr)
    for (var i = 0; i < blankArr.length; i++) {
      this.sdArr[blankArr[i]] = ''
    }
  }
}

//  九宫格-----------------------------------------------------------------------------
function SDnine () {
  this.sdArr = [] // 生成的数独数组
  this.errorArr = [] // 错误的格子。
  this.blankNum = 30 // 空白格子数量
  this.backupSdArr = [] // 数独数组备份。
}

SDnine.prototype = {
  constructor: SDnine,
  init: function (blankNum) {
    this.createSdArr()
    this.createBlank()
  },
  createSdArr: function () {
    // 生成数独数组。
    var that = this
    try {
      this.sdArr = []
      this.setThird(2, 2)
      this.setThird(5, 5)
      this.setThird(8, 8)
      var allNum = [1, 2, 3, 4, 5, 6, 7, 8, 9]
      // outerfor:
      for (var i = 1; i <= 9; i++) {
        // innerfor:
        for (var j = 1; j <= 9; j++) {
          if (!this.sdArr[parseInt(i + '' + j)]) {
            // continue innerfor
            var XArr = this.getXArr(j, this.sdArr)
            var YArr = this.getYArr(i, this.sdArr)
            var thArr = this.getThArr(i, j, this.sdArr)
            var arr = getConnect(getConnect(XArr, YArr), thArr)
            var ableArr = arrMinus(allNum, arr)

            if (ableArr.length == 0) {
              this.createSdArr()
              return
              // break outerfor
              // break
            }
            var item
            // 如果生成的重复了就重新生成。
            do {
              item = ableArr[getRandom(ableArr.length) - 1]
            } while (arr.indexOf(item) > -1)

            this.sdArr[parseInt(i + '' + j)] = item
          }
        }
      }
      this.backupSdArr = this.sdArr.slice()
      return this.sdArr
    } catch (e) {
      // 如果因为超出浏览器的栈限制出错，就重新运行。
      that.createSdArr()
    }
  },
  getXArr: function (j, sdArr) {
    // 获取所在行的值。
    var arr = []
    for (var a = 1; a <= 9; a++) {
      if (this.sdArr[parseInt(a + '' + j)]) {
        arr.push(sdArr[parseInt(a + '' + j)])
      }
    }
    return arr
  },
  getYArr: function (i, sdArr) {
    // 获取所在列的值。
    var arr = []
    for (var a = 1; a <= 9; a++) {
      if (sdArr[parseInt(i + '' + a)]) {
        arr.push(sdArr[parseInt(i + '' + a)])
      }
    }
    return arr
  },
  getThArr: function (i, j, sdArr) {
    // 获取所在三宫格的值。
    var arr = []
    var cenNum = this.getTh(i, j)
    var thIndexArr = [cenNum - 11, cenNum - 1, cenNum + 9, cenNum - 10, cenNum, cenNum + 10, cenNum - 9, cenNum + 1, cenNum + 11]
    for (var a = 0; a < 9; a++) {
      if (sdArr[thIndexArr[a]]) {
        arr.push(sdArr[thIndexArr[a]])
      }
    }
    return arr
  },
  getTh: function (i, j) {
    // 获取所在三宫格的中间位坐标。
    var cenArr = [22, 52, 82, 25, 55, 85, 28, 58, 88]
    var index = (Math.ceil(j / 3) - 1) * 3 + Math.ceil(i / 3) - 1
    var cenNum = cenArr[index]
    return cenNum
  },
  setThird: function (i, j) {
    // 为对角线上的三个三宫格随机生成。
    var numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    var sortedNumArr = numArr.sort(function () { return Math.random() - 0.5 > 0 ? -1 : 1 })
    var cenNum = parseInt(i + '' + j)
    var thIndexArr = [cenNum - 11, cenNum - 1, cenNum + 9, cenNum - 10, cenNum, cenNum + 10, cenNum - 9, cenNum + 1, cenNum + 11]
    for (var a = 0; a < 9; a++) {
      this.sdArr[thIndexArr[a]] = sortedNumArr[a]
    }
  },
  createBlank: function (num) {
    // 生成指定数量的空白格子的坐标。
    var blankArr = []
    var numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    var item
    num = num || this.blankNum
    for (var a = 0; a < num; a++) {
      do {
        item = parseInt(numArr[getRandom(9) - 1] + '' + numArr[getRandom(9) - 1])
      } while (blankArr.indexOf(item) > -1)
      blankArr.push(item)
    }
    this.blankArr = blankArr
    // console.log(blankArr)
    for (var i = 0; i < blankArr.length; i++) {
      this.sdArr[blankArr[i]] = ''
    }
  }
}

// 生成随机正整数
function getRandom (n) {
  return Math.floor(Math.random() * n + 1)
}

// 两个简单数组的并集。
function getConnect (arr1, arr2) {
  var i
  var len = arr1.length
  var resArr = arr2.slice()
  for (i = 0; i < len; i++) {
    if (arr2.indexOf(arr1[i]) < 0) {
      resArr.push(arr1[i])
    }
  }
  return resArr
}

// 两个简单数组差集，arr1为大数组
function arrMinus (arr1, arr2) {
  var resArr = []
  var len = arr1.length
  for (var i = 0; i < len; i++) {
    if (arr2.indexOf(arr1[i]) < 0) {
      resArr.push(arr1[i])
    }
  }
  return resArr
}

export {
    SDfour,
    SDsix, // 数独逻辑
    SDnine
}
