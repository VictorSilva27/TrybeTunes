(this.webpackJsonptrybetunes=this.webpackJsonptrybetunes||[]).push([[0],{29:function(t,e,n){},30:function(t,e,n){},32:function(t,e,n){},42:function(t,e,n){},43:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(21),i=n.n(r),s=(n(29),n(2)),o=n(3),u=n(5),l=n(4),d=n(13),j=(n(30),n(7)),h=n(15),b=n(0),p=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{children:"Carregando..."})}}]),n}(c.a.Component),m=p,O=n(17),f="user",v=function(t){return localStorage.setItem(f,JSON.stringify(t))},x=function(t){return function(e){setTimeout((function(){e(t)}),1500)}},g=function(){return new Promise((function(t){var e=JSON.parse(localStorage.getItem(f));null===e&&(e={}),x(e)(t)}))},k=function(t){return new Promise((function(e){v(Object(O.a)(Object(O.a)({},{name:"",email:"",image:"",description:""}),t)),x("OK")(e)}))},y=(n(32),function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={nameLogin:"",buttonLogin:!0,loading:!1},t.onInputLogin=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(h.a)({},a,c),(function(){return t.setState({buttonLogin:t.validInput()})}))},t.validInput=function(){return t.state.nameLogin.length<3},t.changeRoute=function(){t.props.history.push("/search")},t.onClickLogin=function(e){var n=t.state.nameLogin;e.preventDefault(),k({name:n}).then((function(){t.changeRoute()}),t.setState({loading:!0}))},t}return Object(o.a)(n,[{key:"render",value:function(){var t=this.state,e=t.buttonLogin,n=t.nameLogin,a=t.loading;return Object(b.jsx)("section",{children:a?Object(b.jsx)(m,{}):Object(b.jsxs)("div",{"data-testid":"page-login",className:"page-login",children:[Object(b.jsx)("h1",{children:"Login"}),Object(b.jsx)("div",{className:"forms-content",children:Object(b.jsxs)("form",{children:[Object(b.jsx)("label",{htmlFor:"login-name-input",children:Object(b.jsx)("input",{type:"text","data-testid":"login-name-input",name:"nameLogin",value:n,onChange:this.onInputLogin})}),Object(b.jsx)("button",{type:"submit","data-testid":"login-submit-button",disabled:e,onClick:this.onClickLogin,children:"Entrar"})]})})]})})}}]),n}(c.a.Component)),S=y,w=n(6),I=n.n(w),N=n(9),C=function(){var t=Object(N.a)(I.a.mark((function t(e){var n,a,c,r,i,s;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=encodeURI(e).replaceAll("%20","+"),a="https://itunes.apple.com/search?entity=album&term=".concat(n,"&attribute=allArtistTerm"),t.next=4,fetch(a);case 4:return c=t.sent,t.next=7,c.json();case 7:return r=t.sent,i=r.results,s=i.map((function(t){return{artistId:t.artistId,artistName:t.artistName,collectionId:t.collectionId,collectionName:t.collectionName,collectionPrice:t.collectionPrice,artworkUrl100:t.artworkUrl100,releaseDate:t.releaseDate,trackCount:t.trackCount}})),t.abrupt("return",s);case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),F=C,M=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={inputSearch:"",buttonSearch:!0,loading:!1,saveInput:"",saveSearch:[]},t.setNameAlbums=Object(N.a)(I.a.mark((function e(){var n,a;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.state.inputSearch,t.setState({loading:!0}),e.next=4,F(n);case 4:a=e.sent,t.setState({saveInput:n,saveSearch:a,loading:!1},(function(){return t.setState({inputSearch:""})}));case 6:case"end":return e.stop()}}),e)}))),t.onInputSearch=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(h.a)({},a,c),(function(){return t.setState({buttonSearch:t.validInput()})}))},t.validInput=function(){return t.state.inputSearch.length<2},t}return Object(o.a)(n,[{key:"render",value:function(){var t=this.state,e=t.buttonSearch,n=t.inputSearch,a=t.loading,c=t.saveInput,r=t.saveSearch;return Object(b.jsx)("div",{className:"page-search",children:a?Object(b.jsx)(m,{}):Object(b.jsxs)("div",{children:[Object(b.jsxs)("form",{children:[Object(b.jsx)("label",{htmlFor:"search-artist-input",children:Object(b.jsx)("input",{type:"text","data-testid":"search-artist-input",name:"inputSearch",value:n,onChange:this.onInputSearch})}),Object(b.jsxs)("button",{type:"submit","data-testid":"search-artist-button",disabled:e,onClick:this.setNameAlbums,children:[" ","Pesquisar"]})]}),Object(b.jsx)("h3",{className:"title-search",children:c&&"Resultado de \xe1lbuns de: ".concat(c)}),Object(b.jsx)("div",{className:"result-search",children:0===r.length?Object(b.jsx)("h2",{children:"Nenhum \xe1lbum foi encontrado"}):r.map((function(t){return Object(b.jsx)("div",{className:"collection",children:Object(b.jsxs)(d.b,{to:"/album/".concat(t.collectionId),"data-testid":"link-to-album-".concat(t.collectionId),children:[Object(b.jsx)("img",{src:t.artworkUrl100,alt:"\xc1lbum ".concat(t.collectionName)}),Object(b.jsx)("p",{className:"collection-artist",children:t.artistName}),Object(b.jsx)("p",{className:"collection-name",children:t.collectionName})]})},t.collectionId)}))})]})})}}]),n}(a.Component),A=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={loading:!1,nameUser:""},t.getNameHeader=Object(N.a)(I.a.mark((function e(){var n;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.setState({loading:!0}),e.next=3,g();case 3:n=e.sent,t.setState({nameUser:n.name,loading:!1});case 5:case"end":return e.stop()}}),e)}))),t}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.getNameHeader()}},{key:"render",value:function(){var t=this.state,e=t.nameUser,n=t.loading;return Object(b.jsx)("header",{"data-testid":"header-component",children:n?Object(b.jsx)(m,{}):Object(b.jsxs)("div",{children:[Object(b.jsxs)("p",{children:["\xdasuario:"," ",Object(b.jsx)("span",{"data-testid":"header-user-name",children:e})]}),Object(b.jsxs)("nav",{children:[Object(b.jsx)(d.b,{to:"/search","data-testid":"link-to-search",children:" Search "}),Object(b.jsx)(d.b,{to:"/favorites","data-testid":"link-to-favorites",children:" Favoritos "}),Object(b.jsx)(d.b,{to:"/profile","data-testid":"link-to-profile",children:" Perfil "})]})]})})}}]),n}(a.Component),L=(n(42),function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("div",{"data-testid":"page-search",children:[Object(b.jsx)(A,{}),Object(b.jsx)("h1",{children:"Search"}),Object(b.jsx)("div",{children:Object(b.jsx)(M,{})})]})}}]),n}(a.Component)),P=L,J=function(){var t=Object(N.a)(I.a.mark((function t(e){var n,a;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://itunes.apple.com/lookup?id=".concat(e,"&entity=song"));case 2:return n=t.sent,t.next=5,n.json();case 5:return a=t.sent,t.abrupt("return",a.results);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),U=J,D=n(24),R="favorite_songs";JSON.parse(localStorage.getItem(R))||localStorage.setItem(R,JSON.stringify([]));var T=function(){return JSON.parse(localStorage.getItem(R))},E=function(t){return localStorage.setItem(R,JSON.stringify(t))},G=function(t){return function(e){setTimeout((function(){e(t)}),500)}},K=function(){return new Promise((function(t){var e=T();G(e)(t)}))},H=function(t){return new Promise((function(e){if(t){var n=T();E([].concat(Object(D.a)(n),[t]))}G("OK")(e)}))},q=function(t){return new Promise((function(e){var n=T();E(n.filter((function(e){return e.trackId!==t.trackId}))),G("OK")(e)}))},B=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={loading:!1,checked:!1,musicFavorite:!1},t.setRemoveMusic=Object(N.a)(I.a.mark((function e(){var n;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.setState({loading:!0}),n=t.props.music,e.next=4,q(n);case 4:t.setState({loading:!1});case 5:case"end":return e.stop()}}),e)}))),t.getMusicFavorite=Object(N.a)(I.a.mark((function e(){var n,a;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.setState({loading:!0}),n=t.props.music,e.next=4,K();case 4:a=e.sent,t.setState({loading:!1}),a.some((function(t){return t.trackId===n.trackId}))?t.setState({checked:!0}):t.setState({checked:!1});case 8:case"end":return e.stop()}}),e)}))),t.setMusic=function(){var e=Object(N.a)(I.a.mark((function e(n){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.setState({loading:!0}),e.next=3,H(n);case 3:t.setState({loading:!1});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.setAddFavotite=function(){var e=t.props,n=e.music,a=e.check;console.log(a);var c=t.state.checked;"favorito"===a?(t.setRemoveMusic(),t.setState({musicFavorite:!0})):c?(t.setRemoveMusic(),t.setState({checked:!1})):(t.setState({checked:!0}),t.setMusic(n))},t}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.getMusicFavorite()}},{key:"render",value:function(){var t=this.props.music,e=this.state,n=e.loading,a=e.checked,c=e.musicFavorite;return Object(b.jsxs)("div",{children:[n&&Object(b.jsx)(m,{}),c?null:Object(b.jsxs)("div",{children:[Object(b.jsx)("p",{children:t.trackName}),Object(b.jsxs)("audio",{"data-testid":"audio-component",src:t.previewUrl,controls:!0,children:[Object(b.jsx)("track",{kind:"captions"}),"O seu navegador n\xe3o suporta o elemento"," "," ",Object(b.jsx)("code",{children:"audio"}),"."]}),Object(b.jsxs)("label",{htmlFor:"forms","data-testid":"checkbox-music-".concat(t.trackId),children:[Object(b.jsx)("input",{type:"checkbox",checked:a,onChange:this.setAddFavotite}),"Favorita"]})]})]})}}]),n}(a.Component),_=B,z=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={nameGroup:"",nameCollection:"",musics:[]},t.setMusic=Object(N.a)(I.a.mark((function e(){var n,a;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.props.match.params.id,e.next=3,U(n);case 3:a=e.sent,t.setState({nameGroup:a[0].artistName,nameCollection:a[0].collectionName,musics:a.filter((function(t){return"song"===t.kind}))});case 5:case"end":return e.stop()}}),e)}))),t}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.setMusic()}},{key:"render",value:function(){var t=this.state,e=t.nameGroup,n=t.nameCollection,a=t.musics;return Object(b.jsxs)("div",{"data-testid":"page-album",children:[Object(b.jsx)(A,{}),Object(b.jsx)("h1",{children:"Album"}),Object(b.jsx)("p",{"data-testid":"album-name",children:n}),Object(b.jsx)("p",{"data-testid":"artist-name",children:e}),a.map((function(t){return Object(b.jsx)(_,{music:t},t.trackId)}))]})}}]),n}(c.a.Component),Q=z,V=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={loading:!1,checked:"favorito",musicFavorite:[]},t.getMusicFavorite=Object(N.a)(I.a.mark((function e(){var n;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.setState({loading:!0}),e.next=3,K();case 3:n=e.sent,t.setState({loading:!1,musicFavorite:n});case 5:case"end":return e.stop()}}),e)}))),t}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.getMusicFavorite()}},{key:"render",value:function(){var t=this.state,e=t.musicFavorite,n=t.loading,a=t.checked;return Object(b.jsxs)("div",{"data-testid":"page-favorites",children:[Object(b.jsx)(A,{}),Object(b.jsx)("h1",{children:"Favorites"}),n&&Object(b.jsx)(m,{}),e.map((function(t){return Object(b.jsx)(_,{music:t,check:a},t.trackId)}))]})}}]),n}(c.a.Component),W=V,X=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{"data-testid":"page-not-found",children:"Not Found"})}}]),n}(c.a.Component),Y=X,Z=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("div",{"data-testid":"page-profile",children:[Object(b.jsx)(A,{}),Object(b.jsx)("h1",{children:"Profile"})]})}}]),n}(c.a.Component),$=Z,tt=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("div",{"data-testid":"page-profile-edit",children:[Object(b.jsx)(A,{}),Object(b.jsx)("h1",{children:"Profile Edit"})]})}}]),n}(c.a.Component),et=tt,nt=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsxs)(j.c,{children:[Object(b.jsx)(j.a,{exact:!0,path:"/",component:S}),Object(b.jsx)(j.a,{path:"/search",component:P}),Object(b.jsx)(j.a,{path:"/album/:id",component:Q}),Object(b.jsx)(j.a,{path:"/favorites",component:W}),Object(b.jsx)(j.a,{exact:!0,path:"/profile/edit",component:et}),Object(b.jsx)(j.a,{path:"/profile",component:$}),Object(b.jsx)(j.a,{path:"*",component:Y})]})}}]),n}(a.Component),at=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("p",{className:"title",children:"TrybeTunes"}),Object(b.jsx)(d.a,{children:Object(b.jsx)(nt,{})})]})}}]),n}(c.a.Component),ct=at;i.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(ct,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.0168492d.chunk.js.map