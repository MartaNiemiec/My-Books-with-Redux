(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){e.exports={BookList:"BookList_BookList__2yWf7",BookList__nomatches:"BookList_BookList__nomatches__1p7Ha",BookList__nomatches__info:"BookList_BookList__nomatches__info__1nmt3"}},14:function(e,t,a){e.exports={Book:"Book_Book__3jogB",Book__img:"Book_Book__img__3o_Xg",Book__info:"Book_Book__info__OFYMi",Book__title:"Book_Book__title__2Yppa",Book__authors:"Book_Book__authors__mZgpb"}},24:function(e,t,a){e.exports={Spinner:"SearchBooks_Spinner__1_uZd",Spinner__icon:"SearchBooks_Spinner__icon__14HGe",roll:"SearchBooks_roll__2MvIw",BookList:"SearchBooks_BookList__3OmVi"}},25:function(e,t,a){e.exports={SearchBox:"SearchBox_SearchBox__3a4Ru",SearchBox__input:"SearchBox_SearchBox__input__lP0o-",SearchBox__button:"SearchBox_SearchBox__button__3ic_P"}},28:function(e,t,a){e.exports={ListItem:"ListItem_ListItem__eQ1VU"}},38:function(e,t,a){e.exports={Toolbar:"Toolbar_Toolbar__29MX9"}},39:function(e,t,a){e.exports={Login:"Login_Login___n5ml"}},43:function(e,t,a){e.exports={Logo:"Logo_Logo__3XUoE"}},45:function(e,t,a){e.exports={Sidebar:"Sidebar_Sidebar__cdqZT"}},48:function(e,t,a){e.exports={Books:"Books_Books__3rD_Y"}},49:function(e,t,a){e.exports={ActionPanel:"ActionPanel_ActionPanel__2jZKJ"}},54:function(e,t,a){e.exports=a(75)},59:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(17),s=a.n(r),i=(a(59),a(18)),c=a(19),l=a(21),u=a(20),m=a(22),h=a(53),_=function(e){return e.children},k=a(38),d=a.n(k),g=a(39),f=a.n(g),B=a(3),v=a(1),b=a(40);function E(){var e=Object(B.a)(["\n        width: 2rem;\n        height: 2rem;\n        color: #eee;\n        "]);return E=function(){return e},e}var I=Object(v.a)(b.a)(E()),p=function(){return o.a.createElement("div",{className:f.a.Login},o.a.createElement(I,null))},S=a(43),L=a.n(S),j=a(44);function w(){var e=Object(B.a)(["\n        width: 1.8rem;\n        height: 1.8rem;\n        color: #eee;\n        "]);return w=function(){return e},e}var O=Object(v.a)(j.a)(w()),x=function(){return o.a.createElement("div",{className:L.a.Logo},o.a.createElement(O,null))},N=function(e){return o.a.createElement("div",{className:d.a.Toolbar},o.a.createElement(x,null),o.a.createElement(p,null))},y=a(45),H=a.n(y),C=a(9),U=a.n(C),D=a(28),R=a.n(D),W=a(29);function F(){var e=Object(B.a)(["\n  color: #ddd;\n  width: 1.2rem;\n  height: 1.2rem;\n  "]);return F=function(){return e},e}function M(){var e=Object(B.a)(["\n  color: orange;\n  width: 1.2rem;\n  height: 1.2rem;\n  "]);return M=function(){return e},e}var P=Object(v.a)(W.a)(M()),T=Object(v.a)(W.a)(F()),A=a(30);function J(){var e=Object(B.a)(["\n  color: #ddd;\n  width: 1.2rem;\n  height: 1.2rem;\n  "]);return J=function(){return e},e}function Z(){var e=Object(B.a)(["\n  color: lightgreen;\n  width: 1.2rem;\n  height: 1.2rem;\n  "]);return Z=function(){return e},e}var q=Object(v.a)(A.a)(Z()),X=Object(v.a)(A.a)(J()),Y=a(31);function V(){var e=Object(B.a)(["\n  color: #ddd;\n  width: 1.2rem;\n  height: 1.2rem;\n  "]);return V=function(){return e},e}function G(){var e=Object(B.a)(["\n  color: yellow;\n  width: 1.2rem;\n  height: 1.2rem;\n  "]);return G=function(){return e},e}var K=Object(v.a)(Y.a)(G()),Q=Object(v.a)(Y.a)(V()),$=a(32);function z(){var e=Object(B.a)(["\n        width: 3rem;\n        height: 3rem;\n        color: orange;\n        "]);return z=function(){return e},e}function ee(){var e=Object(B.a)(["\n        width: 1.2rem;\n        height: 1.2rem;\n        color: orange;\n        "]);return ee=function(){return e},e}var te=Object(v.a)($.a)(ee()),ae=Object(v.a)($.a)(z()),ne=function(e){var t;return"checkColor"===e.icon?t=o.a.createElement(K,null):"listColor"===e.icon?t=o.a.createElement(q,null):"starColor"===e.icon?t=o.a.createElement(P,null):"search"===e.icon&&(t=o.a.createElement(te,null)),o.a.createElement("li",{className:R.a.ListItem},o.a.createElement("span",{className:R.a.ListItem__icon},t),e.children)},oe=a(10),re=function(){var e=o.a.createElement(ne,{icon:"checkColor"},o.a.createElement("span",{className:U.a.ListItems__text},"Read")),t=o.a.createElement(ne,{icon:"listColor"},o.a.createElement("span",{className:U.a.ListItems__text},"Wishlist")),a=o.a.createElement(ne,{icon:"starColor"},o.a.createElement("span",{className:U.a.ListItems__text},"Favourites")),n=o.a.createElement(ne,{icon:"search"},o.a.createElement("span",{className:U.a.ListItems__text},"Search"));return o.a.createElement("ul",{className:U.a.ListItems},o.a.createElement(oe.b,{to:"/My-books/",exact:!0,activeClassName:U.a.active},n),o.a.createElement(oe.b,{to:"/My-books/read",activeClassName:U.a.active},e),o.a.createElement(oe.b,{to:"/My-books/wishlist",activeClassName:U.a.active},t),o.a.createElement(oe.b,{to:"/My-books/favourites",activeClassName:U.a.active},a))},se=function(){return o.a.createElement("div",{className:H.a.Sidebar},o.a.createElement(re,null))},ie=a(48),ce=a.n(ie),le=a(24),ue=a.n(le),me=a(25),he=a.n(me),_e=function(e){var t=e.searchChange,a=e.searchBooks;return o.a.createElement("form",{onSubmit:a,className:he.a.SearchBox,action:""},o.a.createElement("input",{className:he.a.SearchBox__input,type:"search",placeholder:"search books",onChange:t}),o.a.createElement("button",{type:"submit",className:he.a.SearchBox__button},"Search"))},ke=a(13),de=a.n(ke),ge=a(14),fe=a.n(ge),Be=a(49),ve=a.n(Be),be=function(e){var t,a,n,r=e.isInReadBooks,s=e.isInWishlist,i=e.isInFavourites,c=e.toggleWishlistBook,l=e.toggleFavouritesBook,u=e.toggleReadBook;return t=r?o.a.createElement(K,null):o.a.createElement(Q,null),a=s?o.a.createElement(q,null):o.a.createElement(X,null),n=i?o.a.createElement(P,null):o.a.createElement(T,null),o.a.createElement("div",{className:ve.a.ActionPanel},o.a.createElement("div",{onClick:c},a),o.a.createElement("div",{onClick:u},t),o.a.createElement("div",{onClick:l},n))},Ee=function(e){var t=e.book,a=e.isInReadBooks,n=e.toggleBookHandler,r=e.bookId,s=e.isInWishlist,i=e.isInFavourites,c=t.volumeInfo.imageLinks;void 0===c?c={backgroundColor:"#333"}:"string"===typeof c?c={backgroundImage:"url(".concat(c,")")}:c.thumbnail?c={backgroundImage:"url(".concat(c.thumbnail,")")}:c.smallThumbnail&&(c={backgroundImage:"url(".concat(c.smallThumbnail,")")});var l,u=t.volumeInfo.title;return u=u.length>32?t.volumeInfo.title.slice(0,32)+"...":t.volumeInfo.title,t.volumeInfo.authors?1===t.volumeInfo.authors.length?l=t.volumeInfo.authors:t.volumeInfo.authors.length>1&&(l=t.volumeInfo.authors.join(", ").length>37?t.volumeInfo.authors.join(", ").slice(0,37)+"...":t.volumeInfo.authors.join(", ")):l=null,o.a.createElement("div",{className:fe.a.Book},o.a.createElement(be,{isInReadBooks:a,isInWishlist:s,isInFavourites:i,toggleReadBook:function(){return n(r,"readBooks")},toggleWishlistBook:function(){return n(r,"wishlist")},toggleFavouritesBook:function(){return n(r,"favourites")}}),o.a.createElement("div",{className:fe.a.Book__img,style:c}),o.a.createElement("div",{className:fe.a.Book__info},o.a.createElement("h4",{className:fe.a.Book__title},u),o.a.createElement("p",{className:fe.a.Book__authors},l)))},Ie=a(50);function pe(){var e=Object(B.a)(["\n  color: red;\n  width: 3rem;\n  height: 3rem;\n  "]);return pe=function(){return e},e}var Se=Object(v.a)(Ie.a)(pe()),Le=function(e){var t,a,n=e.booksData,r=e.isInUserState,s=e.toggleBookHandler,i=(e.isLoading,e.isInitial);return console.log(i),n?(t=n.map(function(e,t){var a=e.id,n=r(a,"readBooks"),i=r(a,"wishlist"),c=r(a,"favourites");return o.a.createElement(Ee,{key:t,book:e,bookId:a,isInReadBooks:n,isInWishlist:i,isInFavourites:c,toggleBookHandler:s})}),a=o.a.createElement("div",{className:de.a.BookList},t)):a=o.a.createElement("div",{className:de.a.BookList__nomatches},o.a.createElement(Se,null),o.a.createElement("h3",{className:de.a.BookList__nomatches__info},"Sorry, no books matched your search. Please try again.")),i&&(a=o.a.createElement("div",{className:de.a.BookList__nomatches},o.a.createElement(ae,null),o.a.createElement("h3",{className:de.a.BookList__nomatches__info},"Search books"))),o.a.createElement(_,null,a)},je=a(51);function we(){var e=Object(B.a)(["\n  color: rgba(75, 75, 230, 0.9);\n  width: 3rem;\n  height: 3rem;\n  "]);return we=function(){return e},e}var Oe=Object(v.a)(je.a)(we()),xe=function(e){var t,a=e.changed,n=e.searchBooks,r=e.booksData,s=e.isLoading,i=e.toggleBookHandler,c=e.isInUserState,l=e.isInitial,u=o.a.createElement("div",{className:ue.a.Spinner},o.a.createElement(Oe,{className:ue.a.Spinner__icon})),m=o.a.createElement("div",{className:ue.a.BookList},o.a.createElement(Le,{booksData:r,isInUserState:c,toggleBookHandler:i,isInitial:l}));return t=s?u:m,o.a.createElement(_,null,o.a.createElement(_e,{searchChange:a,searchBooks:n}),t)},Ne=function(e){return o.a.createElement(Le,{booksData:e.userReadBooks,isInUserState:e.isInUserState,toggleBookHandler:e.toggleBookHandler})},ye=function(e){return o.a.createElement(Le,{booksData:e.userWishlist,isInUserState:e.isInUserState,toggleBookHandler:e.toggleBookHandler})},He=function(e){return o.a.createElement(Le,{booksData:e.userFavourites,isInUserState:e.isInUserState,toggleBookHandler:e.toggleBookHandler})},Ce=a(11),Ue=function(e){var t=e.changed,a=e.searchBook,n=e.booksData,r=e.isLoading,s=e.toggleBookHandler,i=e.isInUserState,c=e.userReadBooks,l=e.userWishlist,u=e.userFavourites,m=e.isInitial,h=o.a.createElement(xe,{isLoading:r,changed:t,searchBooks:a,booksData:n,isInUserState:i,toggleBookHandler:s,isInitial:m}),_=o.a.createElement(Ne,{userReadBooks:c,booksData:n,isInUserState:i,toggleBookHandler:s}),k=o.a.createElement(ye,{userWishlist:l,isInUserState:i,toggleBookHandler:s}),d=o.a.createElement(He,{userFavourites:u,isInUserState:i,toggleBookHandler:s});return o.a.createElement("div",{className:ce.a.Books},o.a.createElement(Ce.c,null,o.a.createElement(Ce.a,{path:"/My-books/read",render:function(){return _}}),o.a.createElement(Ce.a,{path:"/My-books/wishlist",render:function(){return k}}),o.a.createElement(Ce.a,{path:"/My-books/favourites",render:function(){return d}}),o.a.createElement(Ce.a,{path:"/My-books/",exact:!0,render:function(){return h}}),o.a.createElement(Ce.a,{render:function(){return o.a.createElement("h1",null,"Error 404")}})))},De=a(52),Re=a.n(De),We={searchfield:"",booksData:[],isLoading:!1,initialPage:!0,user:{name:"",email:"",password:"",joined:"",readBooks:[],wishlist:[],favourites:[]}},Fe=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state=We,a.searchChangeHandler=function(e){a.setState({searchfield:e.target.value})},a.searchBook=function(e){e.preventDefault(),a.setState({isLoading:!0,initialPage:!1}),Re.a.get("https://www.googleapis.com/books/v1/volumes").query({q:a.state.searchfield,maxResults:40}).then(function(e){a.setState({booksData:e.body.items,isLoading:!1}),console.log(a.state.booksData)})},a.isInUserState=function(e,t){return a.state.user[t].some(function(t){return t.id===e})},a.toggleBookHandler=function(e,t){var n=Object(h.a)({},a.state.user);!1===a.isInUserState(e,t)?a.setState(function(a){var o=[a.booksData.filter(function(t){return t.id===e})[0]].concat(a.user[t]);return n[t]=o,{user:n}}):a.setState(function(a){var o=a.user[t].filter(function(t){return t.id!==e});return n[t]=o,{user:n}})},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement(_,null,o.a.createElement(N,null),o.a.createElement("main",{style:{display:"flex"}},o.a.createElement(se,null),o.a.createElement(Ue,{changed:this.searchChangeHandler,searchfield:this.state.searchfield,searchBook:this.searchBook,booksData:this.state.booksData,isLoading:this.state.isLoading,isInitial:this.state.initialPage,isInUserState:this.isInUserState,toggleBookHandler:this.toggleBookHandler,userReadBooks:this.state.user.readBooks,userWishlist:this.state.user.wishlist,userFavourites:this.state.user.favourites})))}}]),t}(n.Component),Me=(a(74),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement(oe.a,null,o.a.createElement(Fe,null))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(Me,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports={ListItems:"ListItems_ListItems__2xBR3",ListItems__text:"ListItems_ListItems__text__2IS25",active:"ListItems_active__3crJk"}}},[[54,1,2]]]);
//# sourceMappingURL=main.f26fe4b3.chunk.js.map