webpackJsonp([9],{"3xQC":function(t,a,e){"use strict";e("NYxO");a.a={computed:{ItemsArray:function(){return this.$store.state.Items},filteredTrackBuild:function(){return this.ItemsArray.filter(function(t){return"Build"==t.Track.Title})}}}},QEzw:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-md-4"},[e("div",{staticClass:"title-list"},[e("p",{staticClass:"track-title"},[t._v("Build")]),e("div",{staticClass:"nav flex-column",attrs:{role:"tablist","aria-orientation":"vertical"}},t._l(t.filteredTrackBuild,function(a,s){return e("a",{staticClass:"nav-link",class:{active:0===s},attrs:{id:"tab"+a.Id,href:"#"+a.Id,"data-toggle":"pill",role:"tab","aria-controls":a.Id}},[t._v(t._s(a.Title)+"\n                            "),t._l(a.Speakers,function(a){return e("div",{staticClass:"speaker"},[t._v("\n                                "+t._s(a.FirstName)+" "+t._s(a.LastName)+", "+t._s(a.Company)+"\n                            ")])})],2)}))])]),e("div",{staticClass:"col-12 col-md-8"},[e("div",{staticClass:"tab-content"},t._l(t.filteredTrackBuild,function(a,s){return e("div",{staticClass:"tab-pane fade",class:{"show active":0===s},attrs:{id:a.Id,role:"tabpanel","aria-labelledby":"tab"+a.Id}},[e("h1",[t._v(t._s(a.Title))]),t._l(a.Speakers,function(a){return e("div",[e("p",{staticClass:"font-weight-bold"},[t._v(t._s(a.FirstName)+" "+t._s(a.LastName)+", "+t._s(a.Company))])])}),e("p",[t._v(t._s(a.Description))]),t._m(0,!0),e("h3",[t._v("About the Speaker")]),t._l(a.Speakers,function(a){return e("div",[e("p",{staticClass:"font-weight-bold"},[t._v(t._s(a.FirstName)+" "+t._s(a.LastName)+", "+t._s(a.Company))]),e("p",{staticClass:"speaker"},[t._v(t._s(a.Biography))])])})],2)}))])])])])},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("p",[e("a",{attrs:{href:"#"}},[t._v("See the Q&A from this talk and others here.")])])}],r={render:s,staticRenderFns:i};a.a=r},Yuyo:function(t,a,e){a=t.exports=e("FZ+f")(!1),a.push([t.i,".container[data-v-89a95b12]{color:#172b4d}h3[data-v-89a95b12]{margin:20px 0}.title-list[data-v-89a95b12]{margin-bottom:40px}.track-title[data-v-89a95b12]{font-size:22px;font-weight:700}.nav-link[data-v-89a95b12]{color:#172b4d;font-weight:700;padding:15px;border-top:1px solid #989898}.nav-link.active[data-v-89a95b12]{background-color:#f2f2f2}.speaker[data-v-89a95b12]{color:#989898;font-size:14px;font-weight:400}",""])},oYNV:function(t,a,e){var s=e("Yuyo");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);e("rjj0")("140743e8",s,!0)},wfNI:function(t,a,e){"use strict";function s(t){e("oYNV")}Object.defineProperty(a,"__esModule",{value:!0});var i=e("3xQC"),r=e("QEzw"),n=e("VU/8"),l=s,o=n(i.a,r.a,!1,l,"data-v-89a95b12",null);a.default=o.exports}});
//# sourceMappingURL=build.bf381954b680c472df91.js.map