var plugin = JavaScriptPlugin.define(id, version, author, url, description);

plugin.addRepositoryAction('/desktop-clone', function(request, response){
  var endpoint = request.getRequestURL() + "";
  var ary = endpoint.split("/");
  ary.pop();
  ary.splice(-2, 0, "git");
  endpoint = ary.join("/") + ".git";
  return '<div style="margin-top: 10px;">' +
         '   <a href="github-mac://openRepo/' + endpoint + '" class="btn btn-small" style="width: 147px;"><i class="icon-download-alt"></i>Clone in Desktop</a>' +
         '</div>';
});

PluginSystem.install(plugin);
