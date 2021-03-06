var plugin = JavaScriptPlugin.define(id, version, author, url, description);

plugin.addRepositoryAction('/desktop-clone', function(request, response){

  // var session = request.getSession(false);
  // var loginUserName = session == null ? "" : session.getAttribute("loginAccount");
  // var loginAccount = session.getAttribute("loginAccount");
  // var sql = "SELECT SSH_KEY_ID FROM SSH_KEY WHERE USER_NAME = '" + loginAccount.userName() + "'";
  // var sshKey = plugin.db().select(sql);

  var userAgent = request.getHeader("User-Agent") + "";
  var platform = "";
  if (userAgent.indexOf("Mac") >= 0) {
    platform = "mac";
  } else if (userAgent.indexOf("Linux") >= 0) {
    platform = "linux";
  } else if (userAgent.indexOf("Win") >= 0) {
    platform = "windows";
  } else {
    platform = "";
  }

  var endpoint = request.getRequestURL() + "";
  var ary = endpoint.split("/");
  ary.pop();
  ary.splice(-2, 0, "git");
  endpoint = ary.join("/") + ".git";
  return '<div style="margin-top: 10px;">' +
         '   <a href="github-' + platform + '://openRepo/' + endpoint + '" class="btn btn-small" style="width: 147px;"><i class="icon-download-alt"></i>Clone in Desktop</a>' +
         '</div>';
});

PluginSystem.install(plugin);
