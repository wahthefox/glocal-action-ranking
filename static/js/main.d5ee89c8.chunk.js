(this.webpackJsonpranking=this.webpackJsonpranking||[]).push([[0],{19:function(e,n,t){},26:function(e,n,t){"use strict";t.r(n);var r,a=t(0),o=t.n(a),c=t(9),d=t.n(c),s=(t(19),t(3)),i=t(4),l=t(14),b=function(){return fetch.apply(void 0,arguments).then((function(e){return e.json()}))};var u=i.a.div(r||(r=Object(s.a)(["\n    border: 4px solid #f3f3f3; /* Light grey */\n    border-top: 4px solid #A7B459; /* Blue */\n    border-radius: 50%;\n    width: 20px;\n    height: 20px;\n    animation: spin 1s linear infinite;\n\n  @keyframes spin {\n    0% { transform: rotate(0deg); }\n    100% { transform: rotate(360deg); }\n  }\n"]))),p=t(2),j=t(13),h=t(1);var g,f=function(e){var n=e.columns,t=e.data,r=Object(j.useTable)({columns:n,data:t}),a=r.getTableProps,o=r.getTableBodyProps,c=r.headerGroups,d=r.rows,s=r.prepareRow;return Object(h.jsxs)("table",Object(p.a)(Object(p.a)({},a()),{},{children:[Object(h.jsx)("thead",{children:c.map((function(e){return Object(h.jsx)("tr",Object(p.a)(Object(p.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(h.jsx)("th",Object(p.a)(Object(p.a)({},e.getHeaderProps()),{},{children:e.render("Header")}))}))}))}))}),Object(h.jsx)("tbody",Object(p.a)(Object(p.a)({},o()),{},{children:d.map((function(e,n){return s(e),Object(h.jsx)("tr",Object(p.a)(Object(p.a)({},e.getRowProps()),{},{children:e.cells.map((function(e){return Object(h.jsx)("td",Object(p.a)(Object(p.a)({},e.getCellProps()),{},{children:e.render("Cell")}))}))}))}))}))]}))},m=i.a.div(g||(g=Object(s.a)(["\n  padding: 1rem;\n\n  table {\n    border-collapse: collapse;\n    margin: 25px 0;\n    font-size: 0.9em;\n    font-family: sans-serif;\n    min-width: 400px;\n    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);\n    width: 100%;\n\n    thead tr {\n      background-color: #A7B459;\n      color: #FFFFFF;\n      text-align: left;\n    }\n\n    thead th,\n    td {\n      padding: 12px 15px;\n    }\n\n    tbody tr {\n      border-bottom: 1px solid #dddddd;\n    }\n\n    tbody tr:nth-of-type(even) {\n      background-color: #F3F3F3;\n    }\n\n    tbody tr:nth-of-type(odd) {\n      background-color: #FFFFFF;\n    }\n\n    tbody tr:last-of-type {\n        border-bottom: 2px solid #5E7835;\n    }\n\n    tbody tr.active-row {\n      font-weight: bold;\n      color: #009879;\n    }\n  }\n"])));var O=function(){var e=o.a.useMemo((function(){return[{Header:"Rank",accessor:"",Cell:function(e){return Object(h.jsx)("div",{children:parseInt(e.row.id)+1})}},{Header:"Name",accessor:function(e){return Object(h.jsxs)("div",{className:"wrapper",children:[e.user.first_name," ",e.user.last_name]})}},{Header:"Miles",accessor:"miles"},{Header:"Progress",accessor:function(e){return Object(h.jsx)("div",{className:"wrapper",children:(100*e.progress).toFixed(2)+"%"})}}]}),[]),n=new URL(window.location.href),t=new URLSearchParams(n.search),r=t.get("env"),a=t.get("campaign_id"),c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"test",n=arguments.length>1?arguments[1]:void 0,t=Object(l.a)("https://ga-".concat(e,".wahthefox.com/api/enrollments/?campaign=").concat(n,"&sort=-miles"),b),r=t.data,a=t.error;return{data:(null===r||void 0===r?void 0:r.results)||[],isLoading:!a&&!r,isError:a}}(r,a),d=c.data,s=c.error;return null===r||null===a||s?Object(h.jsx)("h1",{children:"Something went wrong!"}):d?Object(h.jsx)(m,{children:Object(h.jsx)(f,{columns:e,data:d})}):Object(h.jsx)(u,{})},x=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,27)).then((function(n){var t=n.getCLS,r=n.getFID,a=n.getFCP,o=n.getLCP,c=n.getTTFB;t(e),r(e),a(e),o(e),c(e)}))};d.a.render(Object(h.jsx)(o.a.StrictMode,{children:Object(h.jsx)(O,{})}),document.getElementById("root")),x()}},[[26,1,2]]]);
//# sourceMappingURL=main.d5ee89c8.chunk.js.map