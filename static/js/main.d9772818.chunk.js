(this.webpackJsonpbeesweeper=this.webpackJsonpbeesweeper||[]).push([[0],{69:function(e,n,t){"use strict";t.r(n);var A,r,a,o,i,s,c,l,u,f,d,g=t(0),p=t.n(g),b=t(10),m=t.n(b),j=t(9),v=t(53),h=t(13),O=t(108),x=t(105),w=t(106),C=t(15),y=t(14),I=function(e,n){switch(e){case"hidden":return"fil"===n?"brightness(100%)":"hue-rotate(35deg)";case"flag":return"fil"===n?"brightness(60%) hue-rotate(320deg)":"brightness(70%) hue-rotate(50deg)";case"missFlag":return"fil"===n?"invert(100%) hue-rotate(320deg)":"hue-rotate(190deg)";case"mine":return"fil"===n?"brightness(75%) hue-rotate(340deg)":"unset";case"empty":return"vHFil"===n?"brightness(60%) sepia(0%) invert(0%) hue-rotate(490deg)":"vFil"===n?"brightness(10%) sepia(80%) invert(10%) hue-rotate(90deg)":"brightness(10%) sepia(80%) invert(10%) hue-rotate(-270deg)";case"number":return"fil"===n?"brightness(50%) sepia(50%)":"vFil"===n?"brightness(50%) sepia(50%) hue-rotate(360deg)":"hFil"===n?"brightness(55%) sepia(50%) hue-rotate(390deg)":"brightness(60%) sepia(0%) hue-rotate(630deg)"}},E=Object(y.c)(A||(A=Object(C.a)(["\n  0% {\n    transform: scale(1, 1) skew(2deg, 3deg);\n    filter: hue-rotate(320deg);\n  }\n  25% { \n    transform: scale(0.8, 1) skew(-2deg, 5deg);\n    filter: hue-rotate(250deg);\n  }\n  50% { \n    transform: scale(1, 1) skew(5deg, 0deg);\n    filter: hue-rotate(150deg);\n  }\n  75% {\n    transform: scale(1.1, 1) skew(0deg, -3deg);\n    filter: hue-rotate(190deg);\n  }\n  100% { \n    transform: scale(1, 1) skew(2deg, 3deg);\n    filter: hue-rotate(320deg);\n  }\n"]))),R=Object(y.c)(r||(r=Object(C.a)(["\n  0% { \n    transform: scale(0.9) skew(2deg, 3deg);\n    filter: brightness(55%) hue-rotate(360deg);\n  }\n  25% { \n    transform: scale(1) skew(7deg, 5deg);\n    filter: brightness(75%) hue-rotate(270deg);\n  }\n  50% { \n    transform: scale(1.1) skew(0deg, 2deg);\n    filter: brightness(100%) hue-rotate(180deg);\n  }\n  75% { \n    transform: scale(1) skew(-5deg, -5deg);\n    filter: brightness(75%) hue-rotate(90deg);\n  }\n  100% { \n    transform: scale(0.9) skew(2deg, 3deg);\n    filter: brightness(55%) hue-rotate(0deg);\n  }\n"]))),Q=Object(y.c)(a||(a=Object(C.a)(["\n  0% { \n    transform: rotate(0deg) scale(1);\n    filter: brightness(100%) saturate(100%) hue-rotate(0deg);\n  }\n  25% { \n    transform: rotate(90deg) scale(0.9);\n    filter: brightness(100%) saturate(150%) hue-rotate(-70deg);\n  }\n  50% { \n    transform: rotate(180deg) scale(1.05);\n    filter: brightness(100%) saturate(200%) hue-rotate(0deg);\n  }\n  75% { \n    transform: rotate(270deg) scale(0.9);\n    filter: brightness(100%) saturate(150%) hue-rotate(-70deg);\n  }\n  100% { \n    transform: rotate(360deg) scale(1);\n    filter: brightness(100%) saturate(100%) hue-rotate(0deg);\n  }\n"]))),B=(Object(y.c)(o||(o=Object(C.a)(["\n  0% { \n    transform: translate(0) scale(1);\n  }\n  25% { \n    transform: translate(0) scale(0);\n  }\n  50% { \n    transform: translate(-100vw) scale(1);\n  }\n  100% { \n    transform: translate(0) scale(1);\n  }\n"]))),y.b.div(i||(i=Object(C.a)(["\n  height: 66px;\n  width: 66px;\n  z-index: ",";\n  // margin-",": 30px;\n  margin-left: ",";\n  // margin-right: ",";\n  cursor: pointer;\n  background-image: ",";\n  background-size: 66px 66px;\n  perspective: 1000px;\n  color: ",";\n  filter: ",";\n  opacity: ",";\n  transform: ",";\n  transition: all ",", opacity 1s ease-out 0.5s;\n  animation-name: ",";\n  animation-timing-function: ",";\n  animation-delay: ",";\n  animation-duration: ",";\n  animation-iteration-count: infinite;\n  animation-direction: ",";\n  :hover {\n    transition: ",";\n    filter: ",";\n    transform: ",";\n  }\n  > div {\n    animation-name: ",";\n    animation-timing-function: ease;\n    animation-duration: 4.5s;\n    animation-iteration-count: infinite;\n    animation-direction: ",";\n    // transition: step 0.4s;\n    transition-delay: 0.15s;\n    text-align: center;\n    font-family: cursive; \n    font-weight: bold;\n    font-size: 30px;\n    transform: ",";\n    padding-top: 10px;\n    filter: unset;\n  }\n"])),(function(e){return"mine"!==e.type||e.victory?"0":"1"}),(function(e){return e.evenRow?"left":"none"}),(function(e){return e.evenRow?"-5px":"25px"}),(function(e){return e.evenRow?"15px":"0"}),(function(e){return"missFlag"===e.type||"mine"===e.type&&!e.victory?"none":"url(".concat("data:image/png;base64,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RVHzIyPVIp7zA7AvRZim5W5tNf6UlFQ6Vwhx2N5na2ObN4/9Rna2a2lsrHappqkajR+A/QXaqmlazRUVPavGjdv1mL3P1H6GNTYWLEhMdFyt60oCEwpA8Ak8rejsND/evdvz8Bln7PqjHc/QVrZvz7kjO9s1x+XSRgWO8KkfQDBThGGYRne3tX7DhiPLrrqqbpt9zsxGenrGXeVyaS8JweMeAKFGEYZh7XA4Sorscka6ncrjcumWEILmDyAk6bq9PnSrDAkADBR7fbglAABAUgQAAEiKAAAASREAACApAgAAJEUAAICkCAAAkBQBAACSIgAAQFIEAABIigAAAEkRAAAgKQIAACRFAACApAgAAJAUAQAAkiIAAEBSBAAASIoAAABJEQAAICkCAAAkRQAAgKQIAACQFAEAAJIiAABAUgQAAEiKAAAASREAACApAgAAJEUAAICkCAAAkBQBAACSIgAAQFIEAABIigAAAEkRAAAgKQIAACRFAACApAgAAJAUAQAAkiIAAEBSBAAASIoAAABJEQAAICkCAAAkRQAAgKQIAACQFAEAAJIiAABAUgQAAEiKAAAASREAACApAgAAJEUAAICkCAAAkBQBAACSIgAAQFIEAABIigAAAEkRAAAgKQIAACRFAACApAgAAJAUAQAAkiIAAEBSBAAASIoAAABJEQAAICkCAAAkRQAAgKQIAACQFAEAAJIiAABAUgQAAEiKAAAASREAACApAgAAJEUAAICkCAAAkBQBAACSIgAAQFIEAABIigAAAEkRAAAgKQIAACRFAACApAgAAJAUAQAAkiIAAEBSBAAASIoAAABJEQAAICkCAAAkRQAAgKQIAACQFAEAAJIiAABAUgQAAEiKAAAASREAACApAgAAJEUAAICkCAAAkBQBAACSIgAAQFIEAABIigAAAEkRAAAgKQIAACRFAACApAgAAJAUAQAAkiIAAEBSBAAASIoAAABJEQAAICkCAAAkRQAAgKQIAACQFAEAAJIiAABAUgQAAEiKAAAASREAACApAgAAJEUAAICkCAAAkBQBAACSIgAAQFIEAABIigAAAEkRAAAgKQIAACRFAACApAgAAJAUAQAAkiIAAEBSBAAASIoAAABJEQAAICkCAAAkRQAAgKQIAACQFAEAAJIiAABAUgQAAEiKAAAASREAACApAgAAJEUAAICkCAAAkBQBAACSIgAAQFIEAABIigAAAEkRAAAgKQIAACRFAACApAgAAJAUAQAAkiIAAEBSBAAASIoAAABJEQAAICkCAAAkRQAAgKQIAACQFAEAAJIiAABAUgQAAEiKAAAASREAACApAgAAJEUAAICkCAAAkBQBAACSslkA+FUhFEYFQIhSNDudja0CoLPTf6Cry9gRCAGCAECoUIRpWt0dHcYn9jor+4mqq8srTk52/tjh0BKF8DN3AAQpRfj9lr+z09pcV+d5qKBg13p7nZ1NPftsesH06TELoqO172qaNpQgABA8Aq3V4zGrqqs9j48bV/lL+56ljX3yyZhLc3PDlwwZok9QFEUQBADsTRGmaR1xu83fJSTsvN3OZ2r7t4AmTdr9xtChO88sL+/5b6/XauJvAwDsKdCb2tp8r69efWiq3Zv/P884iBw4UPDz+Hj9FodDDxfCYs4BGGSBNtrZaZRv3Ngxb9q0Wls95z/+mQefmAMHCtYmJ4ddFfgnj4UADAZVeDxG/d69vQ/l5+/6RbCdfVA/T3nyyYxvz5oV+3B4uDY+cCkEAYCBoAifz/Q0N3vXpqdX3BW8VxECqqtz705PD7vF5dLH8FgIQP9RhN9vWUeOWH9dvbppwZIlLduD+Wps9a20U/XEE4e3tLZ6/zhhgisyPFwbo6qqi4kKoO8EPiv39Fjb9+zxzM3IKJv3/vvdB0PjqkLI3/42asqkSVFzo6K0C1RVDeexEIDTowifz6xtbPQ9N2pU+bLQurIQtXt33jVJSY77oqL0fEIAwMlThGVZ3a2txh8nTixduH+/qA29Kwxx1dW5xZmZrns1TY0iCAAcX6Attrf7Nr333tHi6dNrPwjtK5VAS0vhS3Fx+g9UVXUQBAC+LNAOu7qMuoqK7oVnnbX7+VC/Yml+DyAhofS6efMazmpr873JbqMAvkgVhmG21dT0LB4yZMcIGZq/EJJ2wU2bRl87cWJkscul5wSOcEcAyEkRpml53W7jlYSE0nuFEEH/Zs/JXb3E6urylyYlOW5yOvVUvj8AyCTQ+o4c8b3z7rvtK2bM2L9R3ipI7Le/zRzz7W9HLo+P16dpmuribgAIZYEdA3w+/56amt4ncnIqH5e9GhBCbN48+ntFRZH3RESoZyuKqhMEQKhRhM9nHmhpMf53+PCy5UKIw1QEX1BXlz87IUG/0+XSswgBIBQowu+3vK2txv9t2HBkyaxZ9Z9Rk79XBl+ppibvoYyMsNmaxmujQHBShBCW2dlpba+s9Kw866xdf6QmX64Qvl6i2z3u1zEx+sXsNgoEE1X09BjuhgbvwrFjK4Jum+aBqxKO5VBs7M5LXnut7aKODt9HgXKRmYB9KcKy/J66ut7HIyK2x9H8j1ctnLCdO3Nnjx3rvCssTM8IHOGOALAHRZimZXZ1WRseffTg/CVLmsuoyYlUDSdrWHNz4aK4OO1qXdfj+f4AMJj+sX3Dx5WVPT+fOLH6FWpystXDSduyZezE7OywhdHR+qWapircDQADKdC6fD6zsb7ety4rK7S2aR7YKuKUffRR9jVFReH3uFxqEX8oBgaCIgzDbGtrM9bfdFPZgvXrRR01OdVKok80NBQsS0x03OhwqKmEANAfAj/H2NFhfrhjR+fi88+veZeanG5F0ZdSmpoKVyQl6TNVld8fAPqGIoTw+3t7zeq9ez2PFBTseoaa9F1l0cfmzUueOG9ewqPR0c5vBo4QBMCpUYXXaxxtafGuTkurWEA9+hYB0I+2bBk9c9y4iKWRkc7cQAgQBMCJCbSmxkbPs2lpZTdTj/6sMvrVnj35S9PSHLeHhWnxhABwLIrw+/2iu9v88Pnn2+bdcUf9ZmrSn9XGgPjmN0Xmn/9cuCQ6Wr9C09RIggD4V4FW1NNjlNXVeX+Zk1O5lpoMVNUxYEpKci/JynLMjYzUzlNVvj8ABF7rtA4fPOh7KT29bKkQwk1NBqryGBTbtmXfmpfn+q+wMD03cIQggGwUYVnW0fZ24+033mhf/qMf1W2jJgM9AhhUBw4U/CIhwXGNpqmxhADkEPjCZEeHsbO21ntfUdGuN6jJ4GA30EGWklJ259y5+795+LD3z36/6CaTEep8PrOhoqL77ujond+g+Q8uuo2NvP561sVTpw5ZFRWlFwaOcEeAUKEKwzA8brf568TE0luphz0QADZUVpZ9W2ama154uCOD3UYR3AIt5tAhzx+TkspmCyHqqYndRge2VFeX/7PkZMdtDocWzt0Agss/Xuvc8be/dRRfcUXtempi11GCbc2ZE5e3YEHag0OHapcoiqoRBLA/VfT2GrXNzcYzI0eWraQe9kUABIny8rxrR41yzHG5tPGKwrbTsCNFmKZ1tKXFePXZZ1sXFhc38bjH9iOGoFJTk3v/8OFhNzmd2ihCAPagCMuyPF1d5gcff9z5wIUXsk1z8IwcglHawYOFKxMT9e8rCttKYLAE2kd3t1HV3Gw+lJlZ9itqEowjiKD00ksjJl9ySfSqmBhtsqKoToIAA0cRpmm5q6p6fp6fv2sp9QjWUUTQ27p17HW5ueHLIyP1EYEjBAH6S+BXuY4cMf8UF7fzh0IIk5oEL74JHAImTqx+aciQHSOrq7sW+nxmG8OKvqcIIVThdns3Pvxwy9lxcTtnCpp/SIwqQsuwlpaCR2JiHFfrOo+FcLr+8T7/3u3be1eec04Vz/lDbnQRcl59NePcb30relFMjPM/AkcIApwsVXi9RvOhQ77n0tPLFwshPNQktBAAIa6iIve2zMywu8LC1DF/34UROF5bME3L29pqvLFjR9fcCy+s2U1NQnWkIYOYhob8BYmJzqscDjWVEMDXtQO/37K6u61PS0p6Vp13XvVr1CTURxzSeOqpEUUzZkQvjonRLlZV/j6AL7aB3l5j/+HD1i/T00sfoiYyjTyk8v77o6dNmBC5IDJSHS8E+wvJ3gIsy2pvavI9n55eNlcI0UtNZBp9SGvXrtzbMjKcy8PDHXFsOy3n0j9yxPt/sbGldwgh9lATWWcBpFZbm/9oRobzdlVVw7gbkGHJK+LoUd+2d989umD69Jq/UhO5ZwMgrr8+Pmf16uEPRUVpl6gqj4VCdbl7veaBvXs9j+XlVT5MPUAA4As+/jhnRn6+c86QIY6zA0cIguCnCsMw291u4+XExNIlQogD1ARCEAD4GlVVefMzM52367qWFjhCEATj8rYsy+roMN6qqTFWTJhQ+QE1wRdnCPA1CgtF2ttvFy6Nj9emaZoWTwgE17Lu6THLt2/vWnHOObt/R03w9TMFOIa33sqaOmFC5KKYGG2KoqgqQWDvJW0Y1qFDh4znhg8vnUc9cOzZApygkpLsH2dnu+4ND9dy2VbCfkvZsqzOlhbjz5dfXl38ySeefdQEx581wEmqr89fnJDguCssTB/K9wfssYTb232f/OEPbffefHPDJmqCk5s9wCmor89/Mi3N9ZPAv7gbGHiq6O72VZWW9qyYPLn6ReqBk59BwClKTy+/ddmyhsldXcYHfr8QfJ4YKIrwePzt+/b1PBgZuSOH5o9Tn0lAH6iszLllxIiwO8LD9XGBI9wR9MdytSzL43Ybr9144/7i11/vYPsGnOaMAvpO1L59+YuGD3fO0nU1gRDou2VqWZbo7fVvqanxPFxYWPkaNUHfzCygjz33XGrR97437P7YWO0iVVWjCILTW6Iej1m1b59nbU5O5Wrqgb6dXUA/2bYt7+KsLMeKoUO18bw2evJL0++3jjY1+V5KSyu7WwjRTU3Q97MM6GdlZTl3jR3rmu1wqBlU4/hL0u+3etvazI2vvHL4vjvuaNpOTdB/sw0YIM3NBWtiY/UbHQ7dxfcHvnopHj1q7Nq2rfu+qVN3/4maYGBmHTBwUpqbCx5PTHRMF0LVeSwU4PFYDbW1vY/m5u56jGpgoBAAGBQvvzzi4mnTYlaEh+vjA0dkDAJV+HxGT2ur8auUlLI7mRUYaAQABtXevXnzUlMd/+lyOTLleSwU+IP4kSPGm8XF9XevWeMuZyZgMGiUAIPp8cdbNnd1mb8vKnLFulxKVuBnKUNV4POWx2OVVld75mdklN29dWtvC7MAgzsjARt4/fWR50+ZEn1fVJQ6RVVVV2g9FlKEz2ftb2ryvDhyZMUCRhv2mJWAzezZk399Soo+NyJCzw0cCeYgUIRlWT2HDxt//vGP9xdv2NCxlxGGfWYnYFOlpdn35eSEz9F1LS74QkARQlhGe7v1yYYNR4qvvnr/e4wo7DhLAVtrbS18JTZWn6Eoqmb/IFCEEIro6jKa9uzpKS4qqnqOEYRdsR00bC8+vvSHixY1T3S7fe8I4bfs+7lFET6f2VZT071iyJDtw2n+sDvuABBUtmwZ+6OioogF4eHamMARO9wRKMIwLF9np/mH2NiddwshmhgpBAMCAEGpvj5/ZWKi48dOp54yeN8fCCyfjg7fe9u29ay44ILdbzMyCCYEAILW+vUZmRMnDn0oLs7xPV1XnQN3NxD4Ipdh+Pft2tX9aGFh1ROMBoIRAYCg9847o783aVLk/IgIdZKiqGr/BoEiDMNsbmszf5+UVLpICNHGCCBYEQAIGfv3F9ydnKzf4XRqIwNH+jIIFOH3+31ut/HOxo2dC2bOrPmMiiPYEQAIOfX1+Y+mpDhv0DQ15vRDQBFC+K2uLrO0pKRr+Xnn7fkDFUaoIAAQqjJaW8eti4tzfDfwz1MJAlX09Bjugwd9yzIzy9mmGSGH7wEgVNXFx++8+IUXWv7j6FHf50II/4l/3lGEZfl79u3rWRMRsT2O5o9QxR0ApFBWljt79Oiwe8LCtNTAEf9XLge/37I6O623f/jDvXdt2NBZQeUQyggAyCShqalgcUKC4xpd12L++f2BwDLo7PRt3bPH+9j48bt+R6kAIARt3Zp9jts97q+mOd70+yf4fb6ipr178xZRGQCQRElJ9jWNjfkvFhcPG0M1AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyi/wfm/DobGQQh+wAAABJ0RVh0RVhJRjpPcmllbnRhdGlvbgAxhFjs7wAAAABJRU5ErkJggg==",")")}),(function(e){return 1===e.number?"#0044ff":2===e.number?"#009900":3===e.number?"red":"#ff0055"}),(function(e){return I(e.type,e.victory?"vFil":"fil")}),(function(e){return e.slide?"0%":"100%"}),(function(e){return e.slide?"translate(".concat(e.evenRow?"-":"","100vw) scale(-1, 1)"):"hidden"===e.type?"translate(0) scale(-1, 1)":e.victory?"scale(1, 1) rotate(-1080deg)":"scale(1, 1)"}),(function(e){return e.slide?"none":"mine"===e.type||e.victory?"ease-in-out 2s":"ease-out ".concat("hidden"===e.type?"1":"0.4","s")}),(function(e){return"mine"===e.type?e.victory?R:Q:"none"}),(function(e){return e.victory?"linear":"ease-out"}),(function(e){return e.victory?"1.8s":"0"}),(function(e){return e.evenCol?"4s":"3.5s"}),(function(e){return e.evenCol?"normal":"alternate"}),(function(e){return"mine"===e.type||e.victory?"ease-out 2s":"ease-in 0.3s"}),(function(e){return I(e.type,e.victory?"vHFil":"hFil")}),(function(e){return"hidden"===e.type?"scale(-1.05, 1.05)":e.victory?"scale(1.1) rotate(720deg)":"scale(1.05)"}),(function(e){return"missFlag"===e.type?E:"none"}),(function(e){return e.evenCol?"normal":"alternate"}),(function(e){return"hidden"===e.type?"scale(0)":"scale(1)"}))),F=t.p+"static/media/bee2.6a6a1aa9.png",z=t.p+"static/media/flag.155c6751.png",V=t.p+"static/media/miss2.d5cf22b2.png",k=t(6);function q(e){var n=e.cell,t=e.gameOver,A=e.gridSet,r=e.setGameOver,a=e.countRevealed,o=e.getEmptyCells,i=e.countFlags,s=e.countMinesFlagged,c=e.victory,l=Object(g.useState)(!0),u=Object(h.a)(l,2),f=u[0],d=u[1],p=Object(g.useState)(!1),b=Object(h.a)(p,2),m=b[0],j=b[1],v=Object(g.useState)(!1),O=Object(h.a)(v,2),x=O[0],w=O[1];return Object(g.useEffect)((function(){!0===t&&(!m||n.mine?(j(!1),d(!1)):w(!0))}),[t,m,n.mine]),Object(g.useEffect)((function(){!1===t&&(j(!1),d(!0),w(!1))}),[t]),Object(g.useEffect)((function(){n.display&&!m&&f&&(d(!1),a())}),[n.display,m,f]),Object(g.useEffect)((function(){f||0===n.nearBombs&&o(n)}),[f,n]),Object(g.useEffect)((function(){console.log(A)}),[A]),Object(k.jsxs)(B,{slide:A,number:n.nearBombs,victory:c,random:Math.random()>.5,evenRow:n.row%2!==0,evenCol:n.col%2!==0,type:f?m?x?"missFlag":"flag":"hidden":n.mine?"mine":0===n.nearBombs?"empty":"number",onClick:function(){if(!t&&!m){if(n.mine)return void r(!0);d(!1),a()}},onContextMenu:function(e){e.preventDefault(),!t&&f&&(i(!m),n.mine&&s(!m),j(!m))},children:[Object(k.jsx)("div",{children:m?Object(k.jsx)("img",{src:z,alt:"flag",style:{height:"40px",transform:"scale(".concat(n.col%2===0?x?"-1.3, 1.3":"-1, 1":x?"1.3, 1.3":"1")}}):f?"":n.mine?Object(k.jsx)("img",{src:F,alt:":(",style:{height:"60px",marginTop:"-8px",transform:"rotate(".concat(360*Math.random(),"deg)").concat(t&&!c?" scale(1.6)":"")}}):n.nearBombs>0?n.nearBombs:""}),x&&Object(k.jsx)("img",{src:V,alt:"missFlagged",style:{height:"50px",filter:"invert(100%)",transform:"translate(7px, -50px)"}})]})}var K=Object(y.a)(s||(s=Object(C.a)(["\n  body {\n    background: #222;\n    overflow: hidden;\n    .MuiDrawer-paperAnchorTop {\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: auto;\n        height: auto;\n        max-height: 100%;\n        padding: 35px;\n        background: #222;\n        color: white;\n        text-align: center;\n        * {\n          color: #999;\n        }\n        .MuiInputBase-input {\n          width: 60px;\n          // margin-right: 20px;\n          text-align: center;\n          color: #bbb;\n        }\n        .MuiOutlinedInput-notchedOutline {\n          border-color: #333;\n          width: 60px;\n          // margin-right: 20px;\n        }\n    }\n  }\n"]))),S=y.b.div(c||(c=Object(C.a)(["\n  display: inline-flex;\n  justify-content: center;\n  gap: 2.5%;\n  padding: 23px 0 23px 0;\n  text-align: center;\n  width: 100%;\n  transform: ",";\n  opacity: ",";\n  transition: ease-out .3s;\n  transition-delay: .2s;\n  button {\n    cursor: pointer;\n    float: right;\n    height: 90px;\n    box-shadow: 5px 5px 5px;\n    transition: ease-out 0.5s;\n    // padding-bottom: 5px;\n    // width: 250px;\n    // padding: 0 0 5px 50px;\n    padding-bottom: 7px;\n    border-radius: 20px;\n    text-align: center;\n    font-family: cursive; \n    font-weight: bold;\n    font-size: 60px;\n    background-color: #43A047;\n    :hover {\n      transform: scale(1.05, 1.03);\n      filter: hue-rotate(45deg) saturate(250%);\n      transition: ease 0.5s;\n    }\n  }\n"])),(function(e){return e.hide?"scale(0.8) translate(0, 20px)":"none"}),(function(e){return e.hide?"0%":"100%"})),U=y.b.div(l||(l=Object(C.a)(["\n  display: inline-flex;\n  justify-content: center;\n  gap: 5px;\n  float: left;\n  height: 90px;\n  // width: ",";\n  padding: 0 1.7% 0 2%;\n  border-radius: 20px;\n  text-align: center;\n  font-family: cursive; \n  font-weight: bold;\n  font-size: 60px;\n  background-color: orange;\n  box-shadow: 5px 5px 5px;\n  transition: ease-out 0.5s;\n  div {\n    float: left;\n    height: 80px;\n    margin-top: 1px;\n  }\n  img {\n    float: right;\n    height: 85px;\n    transition: ease-out 0.5s;\n  }\n  :hover {\n    filter: saturate(200%);\n    img {\n      transform: scale(1.1) skew(-2deg, -2deg);\n      transition: ease-out 0.5s;\n    }\n  }\n"])),(function(e){return e.victory?"400px":"250px"})),P=y.b.div(u||(u=Object(C.a)(["\n  display: grid;\n  justify-content: center;\n  padding-right: 30px;\n  // width: 100%;\n  grid-template-columns: repeat(",", 55px);\n  grid-template-rows: repeat(",", 47px);\n  column-gap: 5px;\n  row-gap: 5px;\n"])),(function(e){return e.cols}),(function(e){return e.rows})),X=y.b.img(f||(f=Object(C.a)(["\n  height: 40px;\n  filter: invert(75%);\n  position: absolute;\n  left: 30px;\n  top: 35px;\n  transition: ease-out 0.3s;\n  cursor: pointer;\n  :hover {\n    transform: scale(1.15) rotate(180deg);\n    filter: invert(90%);\n    transition: ease-out 0.3s;\n  }\n"]))),M=y.b.img(d||(d=Object(C.a)(["\n  height: ",";\n  padding:  ",";\n  transition: ease-out 0.3s;\n  cursor: pointer;\n  :hover {\n    transform: scale(1.1);\n    filter: saturate(200%) drop-shadow(0px 0px 15px #",");\n    transition: ease-out 0.3s;\n  }\n"])),(function(e){return e.cancel?"25px":"30px"}),(function(e){return e.cancel?"13px 15px 12px 15px":"12px 15px 13px 15px"}),(function(e){return e.cancel?"870000":"00aa00"})),L=t.p+"static/media/gear.4cbd52fb.svg",G=t.p+"static/media/confirm.ea4f0b17.svg",H=t.p+"static/media/cancel.fdf1fbdd.svg";function T(){var e=Object(g.useState)(!1),n=Object(h.a)(e,2),t=n[0],A=n[1],r=Object(g.useState)(!1),a=Object(h.a)(r,2),o=a[0],i=a[1],s=Object(g.useState)([]),c=Object(h.a)(s,2),l=c[0],u=c[1],f=Object(g.useState)(!0),d=Object(h.a)(f,2),p=d[0],b=d[1],m=Object(g.useState)(0),C=Object(h.a)(m,2),y=C[0],I=C[1],E=Object(g.useState)(0),R=Object(h.a)(E,2),Q=R[0],B=R[1],z=Object(g.useState)(0),V=Object(h.a)(z,2),T=V[0],Z=V[1],D=Object(g.useState)(0),N=Object(h.a)(D,2),Y=N[0],W=N[1],J=Object(g.useState)(!1),$=Object(h.a)(J,2),_=$[0],ee=$[1],ne=Object(g.useState)({mines:20,rows:10,cols:20}),te=Object(h.a)(ne,2),Ae=te[0],re=te[1],ae=Object(g.useState)(Ae),oe=Object(h.a)(ae,2),ie=oe[0],se=oe[1],ce=function(){o&&i(!1),B(0),Z(0),I(0),A(!t&&"reset")};return Object(g.useEffect)((function(){p&&b(!1)}),[l]),Object(g.useEffect)((function(){t?"reset"===t&&A(!1):function(){console.log("creating grid!");for(var e=[],n=0;n<Ae.rows;n++){for(var t=[],A=0;A<Ae.cols;A++)t.push({row:n,col:A,mine:!1,display:!1});e.push(t)}for(var r=Ae.mines;r>0;){var a=Math.floor(Math.random()*Ae.rows),o=Math.floor(Math.random()*Ae.cols);e[a][o].mine||(e[a][o].mine=!0,r--)}e.forEach((function(n){n.forEach((function(n){if(!n.mine)for(var t=0,A=-1;A<2;A++){if(n.row+A>-1&&n.row+A<Ae.rows)for(var r=0===A?{start:-1,end:2}:n.row%2===0?{start:0,end:2}:{start:-1,end:1},a=r.start;a<r.end;a++)n.col+a>-1&&n.col+a<Ae.cols&&e[n.row+A][n.col+a].mine&&t++;e[n.row][n.col].nearBombs=t}}))})),u(e)}()}),[t]),Object(g.useEffect)((function(){W(Ae.mines-Q)}),[Q,Ae]),Object(g.useEffect)((function(){Ae.mines-T===0&&Ae.rows*Ae.cols-Ae.mines===y&&(i(!0),A(!0))}),[Ae,T,y]),Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(K,{}),Object(k.jsx)(O.a,{anchor:"top",open:_,onClose:function(){ee(!1),se(Object(j.a)({},Ae))},children:Object(k.jsxs)("form",{style:{display:"inline-flex",gap:"20px",justifyContent:"center"},children:[Object(k.jsx)(x.a,{id:"rows",type:"number",inputProps:{min:"1",step:"1",autoComplete:"off",onKeyPress:function(e){","===e.key&&e.preventDefault()}},label:"Rows",variant:"outlined",value:ie.rows,error:ie.rows<1||ie.rows%1!==0,onChange:function(e){e.nativeEvent.data&&/[^0-9]/.test(e.nativeEvent.data)&&null!==e.nativeEvent.data?e.preventDefault():se(Object(j.a)(Object(j.a)({},ie),{},{rows:e.target.value.replace(/[^0-9]+/g,"")}))},onBlur:function(){if("0"===ie.rows.toString().slice(0,1)){for(var e=ie.rows;"0"===e.slice(0,1);)e=e.slice(1);se(Object(j.a)(Object(j.a)({},ie),{},{rows:e}))}ie.rows<1?se(Object(j.a)(Object(j.a)({},ie),{},{rows:1})):ie.rows%1!==0&&se(Object(j.a)(Object(j.a)({},ie),{},{rows:Math.round(ie.rows)}))}}),Object(k.jsx)(x.a,{id:"cols",type:"number",inputProps:{min:"1",step:"1",autoComplete:"off",onKeyPress:function(e){","===e.key&&e.preventDefault()}},label:"Columns",variant:"outlined",value:ie.cols,error:ie.cols<1||ie.cols%1!==0,onChange:function(e){e.nativeEvent.data&&/[^0-9]/.test(e.nativeEvent.data)&&null!==e.nativeEvent.data?e.preventDefault():se(Object(j.a)(Object(j.a)({},ie),{},{cols:e.target.value.replace(/[^0-9]+/g,"")}))},onBlur:function(){if("0"===ie.cols.toString().slice(0,1)){for(var e=ie.cols;"0"===e.slice(0,1);)e=e.slice(1);se(Object(j.a)(Object(j.a)({},ie),{},{cols:e}))}ie.cols<1?se(Object(j.a)(Object(j.a)({},ie),{},{cols:1})):ie.cols%1!==0&&se(Object(j.a)(Object(j.a)({},ie),{},{cols:Math.round(ie.cols)}))}}),Object(k.jsx)(x.a,{id:"bees",type:"number",inputProps:{min:"1",max:ie.rows*ie.cols-1,step:"1",autoComplete:"off",onKeyPress:function(e){","===e.key&&e.preventDefault()}},label:"Bees",variant:"outlined",value:ie.mines,error:ie.mines<1||ie.mines>=ie.rows*ie.cols,onChange:function(e){e.nativeEvent.data&&/[^0-9]/.test(e.nativeEvent.data)&&null!==e.nativeEvent.data?e.preventDefault():se(Object(j.a)(Object(j.a)({},ie),{},{mines:e.target.value.replace(/[^0-9]+/g,"")}))},onBlur:function(){console.log(/\d/g.test(ie.mines)),console.log(ie.mines),ie.mines<1||""===ie.mines?se(Object(j.a)(Object(j.a)({},ie),{},{mines:1})):ie.mines>=ie.rows*ie.cols?se(Object(j.a)(Object(j.a)({},ie),{},{mines:ie.rows*ie.cols-1})):ie.mines%1!==0&&se(Object(j.a)(Object(j.a)({},ie),{},{mines:Math.round(ie.mines)}))}}),Object(k.jsx)(w.a,{style:{height:"55px",width:"45px",padding:"0",marginLeft:"-10px"},onClick:function(e){ee(!1),se(Ae)},children:Object(k.jsx)(M,{cancel:!0,src:H,alt:"Cancel"})}),Object(k.jsx)(w.a,{type:"submit",style:{height:"55px",width:"45px",padding:"0",marginLeft:"-20px"},onClick:function(e){e.preventDefault(),ee(!1),console.log(Ae,ie),console.log(Ae!==ie),Ae!==ie&&ie.mines<ie.rows*ie.cols&&(b(!0),re(ie),A(!0),ce())},children:Object(k.jsx)(M,{src:G,alt:"Confirm"})})]})}),Object(k.jsx)(X,{src:L,alt:"configure",onClick:function(){ee(!0)}}),Object(k.jsxs)(S,{hide:_,children:[Object(k.jsx)(U,{victory:o,children:t&&"reset"!==t?o?"Victory!":"You lost":Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)("div",{children:Y}),Object(k.jsx)("img",{src:F,alt:"bees"})]})}),Object(k.jsx)("button",{onClick:function(){ce()},style:{padding:"0 2% 0 2%"},children:"Restart"})]}),Object(k.jsx)(P,{cols:Ae.cols,rows:Ae.rows,children:l.length>0&&l.map((function(e){return e.map((function(e,n){return Object(k.jsx)(q,{gridSet:p,setGameOver:function(){return A(!0)},countRevealed:function(){return I((function(e){return e+1}))},countFlags:function(e){B(e?function(e){return e+1}:function(e){return e-1})},countMinesFlagged:function(e){Z(e?function(e){return e+1}:function(e){return e-1})},gameOver:t,cell:e,victory:o,getEmptyCells:function(e){return function(e){for(var n=-1;n<2;n++)if(e.row+n>-1&&e.row+n<Ae.rows)for(var t=0===n?{start:-1,end:2}:e.row%2===0?{start:0,end:2}:{start:-1,end:1},A=t.start;A<t.end;A++)e.col+A>-1&&e.col+A<Ae.cols&&(0!==n||0!==A)&&(l[e.row+n][e.col+A].display||(l[e.row+n][e.col+A].display=!0,u((function(e){return Object(v.a)(e)}))))}(e)}},n)}))}))})]})}function Z(){return Object(k.jsx)("div",{className:"App",children:Object(k.jsx)(T,{})})}t.p;m.a.render(Object(k.jsx)(p.a.StrictMode,{children:Object(k.jsx)(Z,{})}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.d9772818.chunk.js.map