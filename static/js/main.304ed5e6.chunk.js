(this.webpackJsonpmarkdown_prev=this.webpackJsonpmarkdown_prev||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(6),o=n.n(i),s=n(1),l=n(2),c=n(4),d=n(3),u=function(e){Object(c.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{id:"editor-wrapper"},r.a.createElement("div",{className:"header"},r.a.createElement("p",null,"Editor")),r.a.createElement("div",{id:"input-wrapper"},r.a.createElement("textarea",{id:"editor",onChange:this.props.handleChange},this.props.input)))}}]),n}(a.Component),h=window.marked;h.setOptions({breaks:!0});var p=function(e){Object(c.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e;return r.a.createElement("div",{id:"preview-wrapper"},r.a.createElement("div",{className:"header"},r.a.createElement("p",null,"Previewer")),r.a.createElement("div",{id:"preview",dangerouslySetInnerHTML:{__html:(e=this.props.display,h(e))}}))}}]),n}(a.Component),m=(n(12),function(e){Object(c.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).handleChange=function(e){a.setState({input:e.target.value})},a.state={input:f},a}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{id:"app-container"},r.a.createElement(u,{handleChange:this.handleChange,input:this.state.input}),r.a.createElement(p,{display:this.state.input}))}}]),n}(a.Component)),f="# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n  \nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n  \nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.com), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | ------------- \nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbererd lists too.\n1. Use just 1s if you want! \n1. But the list goes on...\n- Even if you use dashes or asterisks.\n* And last but not least, let's not forget embedded images:\n\n![React Logo w/ Text](https://goo.gl/Umyytc)\n",v=m;o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root"))},7:function(e,t,n){e.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.304ed5e6.chunk.js.map