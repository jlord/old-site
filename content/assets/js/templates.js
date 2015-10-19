// note to self:
// handlebars --data content/assets/js/handlebars/ -f content/assets/js/templates.js

(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['instagram'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "  <div class=\"instaImgCirc\" style=\"background-image: url('"
    + alias4(((helper = (helper = helpers.instasource || (depth0 != null ? depth0.instasource : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"instasource","hash":{},"data":data}) : helper)))
    + "');\"><a href=\""
    + alias4(((helper = (helper = helpers.instasource || (depth0 != null ? depth0.instasource : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"instasource","hash":{},"data":data}) : helper)))
    + "\" target=\"_blank\"></a></div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, buffer = "";

  stack1 = ((helper = (helper = helpers.rows || (depth0 != null ? depth0.rows : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"rows","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},options) : helper));
  if (!helpers.rows) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true});
templates['pocket'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "  <span class=\"meta\">"
    + alias4(((helper = (helper = helpers.date || (depth0 != null ? depth0.date : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date","hash":{},"data":data}) : helper)))
    + "</span>\n  <p><a href=\""
    + alias4(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.article || (depth0 != null ? depth0.article : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"article","hash":{},"data":data}) : helper)))
    + "</a></p>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options;

  stack1 = ((helper = (helper = helpers.rows || (depth0 != null ? depth0.rows : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"rows","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},options) : helper));
  if (!helpers.rows) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { return stack1; }
  else { return ''; }
},"useData":true});
templates['quote'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<span class=\"meta\">"
    + alias4(((helper = (helper = helpers.date || (depth0 != null ? depth0.date : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date","hash":{},"data":data}) : helper)))
    + "</span>\n<blockquote>\n  <p>"
    + alias4(((helper = (helper = helpers.quote || (depth0 != null ? depth0.quote : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"quote","hash":{},"data":data}) : helper)))
    + "\n    <em>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</em>\n  </p>\n</blockquote>\n<span class=\"meta\"><a href=\""
    + alias4(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data}) : helper)))
    + "\" target=\"_blank\">Article</a>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options;

  stack1 = ((helper = (helper = helpers.rows || (depth0 != null ? depth0.rows : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"rows","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},options) : helper));
  if (!helpers.rows) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { return stack1; }
  else { return ''; }
},"useData":true});
templates['twitter'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function";

  return "  <span class=\"meta\">"
    + container.escapeExpression(((helper = (helper = helpers.date || (depth0 != null ? depth0.date : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date","hash":{},"data":data}) : helper)))
    + "</span>\n  <p>"
    + ((stack1 = ((helper = (helper = helpers.tweet || (depth0 != null ? depth0.tweet : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tweet","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</p>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, buffer = "";

  stack1 = ((helper = (helper = helpers.rows || (depth0 != null ? depth0.rows : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"rows","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},options) : helper));
  if (!helpers.rows) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true});
})();
