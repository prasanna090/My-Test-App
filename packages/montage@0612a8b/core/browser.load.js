montageDefine("0612a8b","core/browser",{dependencies:["montage"],factory:function(e,t){var n=e("montage").Montage,i=RegExp(/AppleWebKit\/([\d.]+)/),s=n.specialize({constructor:{value:function s(e){this.super(),this._userAgent=e,this._analyze(e)}},_analyze:{value:function(e){if(e.indexOf("Android")>-1&&e.indexOf("Mozilla/5.0")>-1&&e.indexOf("AppleWebKit")>-1){this.android={};var t=i.exec(e),n=null===t?null:parseFloat(i.exec(e)[1]);this.android.androidBrowser=null!==n&&537>n}}},_userAgent:{value:null}}),a=null;n.defineProperties(t,{browser:{get:function(){return null===a&&(a=new s(navigator.userAgent)),a}},Browser:{value:s}})}});