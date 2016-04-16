;(function () {
  'use strict'
  var gui = require("nw.gui")
  var node_exports = process.mainModule.exports
  var win = gui.Window.get()
  var nativeMenuBar = new gui.Menu({type: "menubar"})
  var helperMenu = new gui.Menu()
  var checkUpdateMenuItem = new gui.MenuItem({
    label: '检查更新',
    click: function() {
      // window.localStorage.setItem('ignoreVersion', '')
      // document.querySelector('client-updater').checkVersion()
    }
  })
  helperMenu.append(checkUpdateMenuItem)
  try {
    nativeMenuBar.createMacBuiltin("node-webkit", {})
    nativeMenuBar.append(new gui.MenuItem({
      label: '帮助',
      submenu: helperMenu
    }))
    win.menu = nativeMenuBar
  } catch (err) {
    console.log(err.message)
  }
  $(window).on('dragover', function (e) {
    e.preventDefault()
    e.originalEvent.dataTransfer.dropEffect = 'none'
  })
  $(window).on('drop', function (e) {
    e.preventDefault()
  })
  $(document).on('dragstart', 'a', function (e) {
    e.preventDefault()
  })
  window.Cfg = {
    baseUrl: '',
    ajaxFileUpLoadUrl: '',
    swfuploadUrl: '',
  };
})()
