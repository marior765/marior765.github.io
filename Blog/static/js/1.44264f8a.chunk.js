webpackJsonp([1],{147:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),r=n.n(o),i=n(49),a=n(151),u=n.n(a),l=function(){return r.a.createElement("div",null,"Loading...")},c=u()({loader:function(){return n.e(2).then(n.bind(null,152))},loading:l}),d=u()({loader:function(){return n.e(3).then(n.bind(null,153))},loading:l}),s=function(e){var t=e.postData;return r.a.createElement("div",null,r.a.createElement(c,{id:t.userId}),r.a.createElement("div",{className:"item"},r.a.createElement("p",null,t.id),r.a.createElement("p",null,"Title: ",t.title),r.a.createElement("p",null,"Body: ",t.body)),r.a.createElement(d,{id:t.id}))},p=function(e){return{postData:e.init.PostItem}};t.default=Object(i.b)(p)(s)},151:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(e){return"object"===m(n.m)&&e().every(function(e){return"undefined"!==typeof e&&"undefined"!==typeof n.m[e]})}function u(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then(function(e){return n.loading=!1,n.loaded=e,e}).catch(function(e){throw n.loading=!1,n.error=e,e}),n}function l(e){var t={loading:!1,loaded:{},error:null},n=[];try{Object.keys(e).forEach(function(o){var r=u(e[o]);r.loading?t.loading=!0:(t.loaded[o]=r.loaded,t.error=r.error),n.push(r.promise),r.promise.then(function(e){t.loaded[o]=e}).catch(function(e){t.error=e})})}catch(e){t.error=e}return t.promise=Promise.all(n).then(function(e){return t.loading=!1,e}).catch(function(e){throw t.loading=!1,e}),t}function c(e){return e&&e.__esModule?e.default:e}function d(e,t){return y.createElement(c(e),t)}function s(e,t){function n(){return s||(s=e(c.loader)),s.promise}var u,l;if(!t.loading)throw new Error("react-loadable requires a `loading` component");var c=Object.assign({loader:null,loading:null,delay:200,timeout:null,render:d,webpack:null,modules:null},t),s=null;return g.push(n),"function"===typeof c.webpack&&_.push(function(){if(a(c.webpack))return n()}),l=u=function(t){function a(i){o(this,a);var u=r(this,t.call(this,i));return u.retry=function(){u.setState({error:null,loading:!0,timedOut:!1}),s=e(c.loader),u._loadModule()},n(),u.state={error:s.error,pastDelay:!1,timedOut:!1,loading:s.loading,loaded:s.loaded},u}return i(a,t),a.preload=function(){return n()},a.prototype.componentWillMount=function(){this._mounted=!0,this._loadModule()},a.prototype._loadModule=function(){var e=this;if(this.context.loadable&&Array.isArray(c.modules)&&c.modules.forEach(function(t){e.context.loadable.report(t)}),s.loading){"number"===typeof c.delay&&(0===c.delay?this.setState({pastDelay:!0}):this._delay=setTimeout(function(){e.setState({pastDelay:!0})},c.delay)),"number"===typeof c.timeout&&(this._timeout=setTimeout(function(){e.setState({timedOut:!0})},c.timeout));var t=function(){e._mounted&&(e.setState({error:s.error,loaded:s.loaded,loading:s.loading}),e._clearTimeouts())};s.promise.then(function(){t()}).catch(function(e){t()})}},a.prototype.componentWillUnmount=function(){this._mounted=!1,this._clearTimeouts()},a.prototype._clearTimeouts=function(){clearTimeout(this._delay),clearTimeout(this._timeout)},a.prototype.render=function(){return this.state.loading||this.state.error?y.createElement(c.loading,{isLoading:this.state.loading,pastDelay:this.state.pastDelay,timedOut:this.state.timedOut,error:this.state.error,retry:this.retry}):this.state.loaded?c.render(this.state.loaded,this.props):null},a}(y.Component),u.contextTypes={loadable:b.shape({report:b.func.isRequired})},l}function p(e){return s(u,e)}function f(e){if("function"!==typeof e.render)throw new Error("LoadableMap requires a `render(loaded, props)` function");return s(l,e)}function h(e){for(var t=[];e.length;){var n=e.pop();t.push(n())}return Promise.all(t).then(function(){if(e.length)return h(e)})}var m="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y=n(0),b=n(1),g=[],_=[];p.Map=f;var v=function(e){function t(){return o(this,t),r(this,e.apply(this,arguments))}return i(t,e),t.prototype.getChildContext=function(){return{loadable:{report:this.props.report}}},t.prototype.render=function(){return y.Children.only(this.props.children)},t}(y.Component);v.propTypes={report:b.func.isRequired},v.childContextTypes={loadable:b.shape({report:b.func.isRequired}).isRequired},p.Capture=v,p.preloadAll=function(){return new Promise(function(e,t){h(g).then(e,t)})},p.preloadReady=function(){return new Promise(function(e,t){h(_).then(e,e)})},e.exports=p}});
//# sourceMappingURL=1.44264f8a.chunk.js.map