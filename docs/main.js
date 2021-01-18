/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/locomotive-scroll/dist/locomotive-scroll.esm.js":
/*!**********************************************************************!*\
  !*** ./node_modules/locomotive-scroll/dist/locomotive-scroll.esm.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__,
/* harmony export */   "Native": () => /* binding */ Native,
/* harmony export */   "Smooth": () => /* binding */ Smooth
/* harmony export */ });
/* locomotive-scroll v4.0.6 | MIT License | https://github.com/locomotivemtl/locomotive-scroll */
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get;
  } else {
    _get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);

      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var defaults = {
  el: document,
  name: 'scroll',
  offset: [0, 0],
  repeat: false,
  smooth: false,
  direction: 'vertical',
  gestureDirection: 'vertical',
  reloadOnContextChange: false,
  lerp: 0.1,
  "class": 'is-inview',
  scrollbarContainer: false,
  scrollbarClass: 'c-scrollbar',
  scrollingClass: 'has-scroll-scrolling',
  draggingClass: 'has-scroll-dragging',
  smoothClass: 'has-scroll-smooth',
  initClass: 'has-scroll-init',
  getSpeed: false,
  getDirection: false,
  scrollFromAnywhere: false,
  multiplier: 1,
  firefoxMultiplier: 50,
  touchMultiplier: 2,
  resetNativeScroll: true,
  tablet: {
    smooth: false,
    direction: 'vertical',
    gestureDirection: 'vertical',
    breakpoint: 1024
  },
  smartphone: {
    smooth: false,
    direction: 'vertical',
    gestureDirection: 'vertical'
  }
};

var _default = /*#__PURE__*/function () {
  function _default() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, _default);

    Object.assign(this, defaults, options);
    this.smartphone = defaults.smartphone;
    if (options.smartphone) Object.assign(this.smartphone, options.smartphone);
    this.tablet = defaults.tablet;
    if (options.tablet) Object.assign(this.tablet, options.tablet);
    this.namespace = 'locomotive';
    this.html = document.documentElement;
    this.windowHeight = window.innerHeight;
    this.windowWidth = window.innerWidth;
    this.windowMiddle = {
      x: this.windowWidth / 2,
      y: this.windowHeight / 2
    };
    this.els = {};
    this.currentElements = {};
    this.listeners = {};
    this.hasScrollTicking = false;
    this.hasCallEventSet = false;
    this.checkScroll = this.checkScroll.bind(this);
    this.checkResize = this.checkResize.bind(this);
    this.checkEvent = this.checkEvent.bind(this);
    this.instance = {
      scroll: {
        x: 0,
        y: 0
      },
      limit: {
        x: this.html.offsetHeight,
        y: this.html.offsetHeight
      },
      currentElements: this.currentElements
    };

    if (this.isMobile) {
      if (this.isTablet) {
        this.context = 'tablet';
      } else {
        this.context = 'smartphone';
      }
    } else {
      this.context = 'desktop';
    }

    if (this.isMobile) this.direction = this[this.context].direction;

    if (this.direction === 'horizontal') {
      this.directionAxis = 'x';
    } else {
      this.directionAxis = 'y';
    }

    if (this.getDirection) {
      this.instance.direction = null;
    }

    if (this.getDirection) {
      this.instance.speed = 0;
    }

    this.html.classList.add(this.initClass);
    window.addEventListener('resize', this.checkResize, false);
  }

  _createClass(_default, [{
    key: "init",
    value: function init() {
      this.initEvents();
    }
  }, {
    key: "checkScroll",
    value: function checkScroll() {
      this.dispatchScroll();
    }
  }, {
    key: "checkResize",
    value: function checkResize() {
      var _this = this;

      if (!this.resizeTick) {
        this.resizeTick = true;
        requestAnimationFrame(function () {
          _this.resize();

          _this.resizeTick = false;
        });
      }
    }
  }, {
    key: "resize",
    value: function resize() {}
  }, {
    key: "checkContext",
    value: function checkContext() {
      if (!this.reloadOnContextChange) return;
      this.isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1 || this.windowWidth < this.tablet.breakpoint;
      this.isTablet = this.isMobile && this.windowWidth >= this.tablet.breakpoint;
      var oldContext = this.context;

      if (this.isMobile) {
        if (this.isTablet) {
          this.context = 'tablet';
        } else {
          this.context = 'smartphone';
        }
      } else {
        this.context = 'desktop';
      }

      if (oldContext != this.context) {
        var oldSmooth = oldContext == 'desktop' ? this.smooth : this[oldContext].smooth;
        var newSmooth = this.context == 'desktop' ? this.smooth : this[this.context].smooth;
        if (oldSmooth != newSmooth) window.location.reload();
      }
    }
  }, {
    key: "initEvents",
    value: function initEvents() {
      var _this2 = this;

      this.scrollToEls = this.el.querySelectorAll("[data-".concat(this.name, "-to]"));
      this.setScrollTo = this.setScrollTo.bind(this);
      this.scrollToEls.forEach(function (el) {
        el.addEventListener('click', _this2.setScrollTo, false);
      });
    }
  }, {
    key: "setScrollTo",
    value: function setScrollTo(event) {
      event.preventDefault();
      this.scrollTo(event.currentTarget.getAttribute("data-".concat(this.name, "-href")) || event.currentTarget.getAttribute('href'), {
        offset: event.currentTarget.getAttribute("data-".concat(this.name, "-offset"))
      });
    }
  }, {
    key: "addElements",
    value: function addElements() {}
  }, {
    key: "detectElements",
    value: function detectElements(hasCallEventSet) {
      var _this3 = this;

      var scrollTop = this.instance.scroll.y;
      var scrollBottom = scrollTop + this.windowHeight;
      var scrollLeft = this.instance.scroll.x;
      var scrollRight = scrollLeft + this.windowWidth;
      Object.entries(this.els).forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            i = _ref2[0],
            el = _ref2[1];

        if (el && (!el.inView || hasCallEventSet)) {
          if (_this3.direction === 'horizontal') {
            if (scrollRight >= el.left && scrollLeft < el.right) {
              _this3.setInView(el, i);
            }
          } else {
            if (scrollBottom >= el.top && scrollTop < el.bottom) {
              _this3.setInView(el, i);
            }
          }
        }

        if (el && el.inView) {
          if (_this3.direction === 'horizontal') {
            var width = el.right - el.left;
            el.progress = (_this3.instance.scroll.x - (el.left - _this3.windowWidth)) / (width + _this3.windowWidth);

            if (scrollRight < el.left || scrollLeft > el.right) {
              _this3.setOutOfView(el, i);
            }
          } else {
            var height = el.bottom - el.top;
            el.progress = (_this3.instance.scroll.y - (el.top - _this3.windowHeight)) / (height + _this3.windowHeight);

            if (scrollBottom < el.top || scrollTop > el.bottom) {
              _this3.setOutOfView(el, i);
            }
          }
        }
      }); // this.els = this.els.filter((current, i) => {
      //     return current !== null;
      // });

      this.hasScrollTicking = false;
    }
  }, {
    key: "setInView",
    value: function setInView(current, i) {
      this.els[i].inView = true;
      current.el.classList.add(current["class"]);
      this.currentElements[i] = current;

      if (current.call && this.hasCallEventSet) {
        this.dispatchCall(current, 'enter');

        if (!current.repeat) {
          this.els[i].call = false;
        }
      } // if (!current.repeat && !current.speed && !current.sticky) {
      //     if (!current.call || current.call && this.hasCallEventSet) {
      //        this.els[i] = null
      //     }
      // }

    }
  }, {
    key: "setOutOfView",
    value: function setOutOfView(current, i) {
      var _this4 = this;

      // if (current.repeat || current.speed !== undefined) {
      this.els[i].inView = false; // }

      Object.keys(this.currentElements).forEach(function (el) {
        el === i && delete _this4.currentElements[el];
      });

      if (current.call && this.hasCallEventSet) {
        this.dispatchCall(current, 'exit');
      }

      if (current.repeat) {
        current.el.classList.remove(current["class"]);
      }
    }
  }, {
    key: "dispatchCall",
    value: function dispatchCall(current, way) {
      this.callWay = way;
      this.callValue = current.call.split(',').map(function (item) {
        return item.trim();
      });
      this.callObj = current;
      if (this.callValue.length == 1) this.callValue = this.callValue[0];
      var callEvent = new Event(this.namespace + 'call');
      this.el.dispatchEvent(callEvent);
    }
  }, {
    key: "dispatchScroll",
    value: function dispatchScroll() {
      var scrollEvent = new Event(this.namespace + 'scroll');
      this.el.dispatchEvent(scrollEvent);
    }
  }, {
    key: "setEvents",
    value: function setEvents(event, func) {
      if (!this.listeners[event]) {
        this.listeners[event] = [];
      }

      var list = this.listeners[event];
      list.push(func);

      if (list.length === 1) {
        this.el.addEventListener(this.namespace + event, this.checkEvent, false);
      }

      if (event === 'call') {
        this.hasCallEventSet = true;
        this.detectElements(true);
      }
    }
  }, {
    key: "unsetEvents",
    value: function unsetEvents(event, func) {
      if (!this.listeners[event]) return;
      var list = this.listeners[event];
      var index = list.indexOf(func);
      if (index < 0) return;
      list.splice(index, 1);

      if (list.index === 0) {
        this.el.removeEventListener(this.namespace + event, this.checkEvent, false);
      }
    }
  }, {
    key: "checkEvent",
    value: function checkEvent(event) {
      var _this5 = this;

      var name = event.type.replace(this.namespace, '');
      var list = this.listeners[name];
      if (!list || list.length === 0) return;
      list.forEach(function (func) {
        switch (name) {
          case 'scroll':
            return func(_this5.instance);

          case 'call':
            return func(_this5.callValue, _this5.callWay, _this5.callObj);

          default:
            return func();
        }
      });
    }
  }, {
    key: "startScroll",
    value: function startScroll() {}
  }, {
    key: "stopScroll",
    value: function stopScroll() {}
  }, {
    key: "setScroll",
    value: function setScroll(x, y) {
      this.instance.scroll = {
        x: 0,
        y: 0
      };
    }
  }, {
    key: "destroy",
    value: function destroy() {
      var _this6 = this;

      window.removeEventListener('resize', this.checkResize, false);
      Object.keys(this.listeners).forEach(function (event) {
        _this6.el.removeEventListener(_this6.namespace + event, _this6.checkEvent, false);
      });
      this.listeners = {};
      this.scrollToEls.forEach(function (el) {
        el.removeEventListener('click', _this6.setScrollTo, false);
      });
      this.html.classList.remove(this.initClass);
    }
  }]);

  return _default;
}();

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof __webpack_require__.g !== 'undefined' ? __webpack_require__.g : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var smoothscroll = createCommonjsModule(function (module, exports) {
/* smoothscroll v0.4.4 - 2019 - Dustan Kasten, Jeremias Menichelli - MIT License */
(function () {

  // polyfill
  function polyfill() {
    // aliases
    var w = window;
    var d = document;

    // return if scroll behavior is supported and polyfill is not forced
    if (
      'scrollBehavior' in d.documentElement.style &&
      w.__forceSmoothScrollPolyfill__ !== true
    ) {
      return;
    }

    // globals
    var Element = w.HTMLElement || w.Element;
    var SCROLL_TIME = 468;

    // object gathering original scroll methods
    var original = {
      scroll: w.scroll || w.scrollTo,
      scrollBy: w.scrollBy,
      elementScroll: Element.prototype.scroll || scrollElement,
      scrollIntoView: Element.prototype.scrollIntoView
    };

    // define timing method
    var now =
      w.performance && w.performance.now
        ? w.performance.now.bind(w.performance)
        : Date.now;

    /**
     * indicates if a the current browser is made by Microsoft
     * @method isMicrosoftBrowser
     * @param {String} userAgent
     * @returns {Boolean}
     */
    function isMicrosoftBrowser(userAgent) {
      var userAgentPatterns = ['MSIE ', 'Trident/', 'Edge/'];

      return new RegExp(userAgentPatterns.join('|')).test(userAgent);
    }

    /*
     * IE has rounding bug rounding down clientHeight and clientWidth and
     * rounding up scrollHeight and scrollWidth causing false positives
     * on hasScrollableSpace
     */
    var ROUNDING_TOLERANCE = isMicrosoftBrowser(w.navigator.userAgent) ? 1 : 0;

    /**
     * changes scroll position inside an element
     * @method scrollElement
     * @param {Number} x
     * @param {Number} y
     * @returns {undefined}
     */
    function scrollElement(x, y) {
      this.scrollLeft = x;
      this.scrollTop = y;
    }

    /**
     * returns result of applying ease math function to a number
     * @method ease
     * @param {Number} k
     * @returns {Number}
     */
    function ease(k) {
      return 0.5 * (1 - Math.cos(Math.PI * k));
    }

    /**
     * indicates if a smooth behavior should be applied
     * @method shouldBailOut
     * @param {Number|Object} firstArg
     * @returns {Boolean}
     */
    function shouldBailOut(firstArg) {
      if (
        firstArg === null ||
        typeof firstArg !== 'object' ||
        firstArg.behavior === undefined ||
        firstArg.behavior === 'auto' ||
        firstArg.behavior === 'instant'
      ) {
        // first argument is not an object/null
        // or behavior is auto, instant or undefined
        return true;
      }

      if (typeof firstArg === 'object' && firstArg.behavior === 'smooth') {
        // first argument is an object and behavior is smooth
        return false;
      }

      // throw error when behavior is not supported
      throw new TypeError(
        'behavior member of ScrollOptions ' +
          firstArg.behavior +
          ' is not a valid value for enumeration ScrollBehavior.'
      );
    }

    /**
     * indicates if an element has scrollable space in the provided axis
     * @method hasScrollableSpace
     * @param {Node} el
     * @param {String} axis
     * @returns {Boolean}
     */
    function hasScrollableSpace(el, axis) {
      if (axis === 'Y') {
        return el.clientHeight + ROUNDING_TOLERANCE < el.scrollHeight;
      }

      if (axis === 'X') {
        return el.clientWidth + ROUNDING_TOLERANCE < el.scrollWidth;
      }
    }

    /**
     * indicates if an element has a scrollable overflow property in the axis
     * @method canOverflow
     * @param {Node} el
     * @param {String} axis
     * @returns {Boolean}
     */
    function canOverflow(el, axis) {
      var overflowValue = w.getComputedStyle(el, null)['overflow' + axis];

      return overflowValue === 'auto' || overflowValue === 'scroll';
    }

    /**
     * indicates if an element can be scrolled in either axis
     * @method isScrollable
     * @param {Node} el
     * @param {String} axis
     * @returns {Boolean}
     */
    function isScrollable(el) {
      var isScrollableY = hasScrollableSpace(el, 'Y') && canOverflow(el, 'Y');
      var isScrollableX = hasScrollableSpace(el, 'X') && canOverflow(el, 'X');

      return isScrollableY || isScrollableX;
    }

    /**
     * finds scrollable parent of an element
     * @method findScrollableParent
     * @param {Node} el
     * @returns {Node} el
     */
    function findScrollableParent(el) {
      while (el !== d.body && isScrollable(el) === false) {
        el = el.parentNode || el.host;
      }

      return el;
    }

    /**
     * self invoked function that, given a context, steps through scrolling
     * @method step
     * @param {Object} context
     * @returns {undefined}
     */
    function step(context) {
      var time = now();
      var value;
      var currentX;
      var currentY;
      var elapsed = (time - context.startTime) / SCROLL_TIME;

      // avoid elapsed times higher than one
      elapsed = elapsed > 1 ? 1 : elapsed;

      // apply easing to elapsed time
      value = ease(elapsed);

      currentX = context.startX + (context.x - context.startX) * value;
      currentY = context.startY + (context.y - context.startY) * value;

      context.method.call(context.scrollable, currentX, currentY);

      // scroll more if we have not reached our destination
      if (currentX !== context.x || currentY !== context.y) {
        w.requestAnimationFrame(step.bind(w, context));
      }
    }

    /**
     * scrolls window or element with a smooth behavior
     * @method smoothScroll
     * @param {Object|Node} el
     * @param {Number} x
     * @param {Number} y
     * @returns {undefined}
     */
    function smoothScroll(el, x, y) {
      var scrollable;
      var startX;
      var startY;
      var method;
      var startTime = now();

      // define scroll context
      if (el === d.body) {
        scrollable = w;
        startX = w.scrollX || w.pageXOffset;
        startY = w.scrollY || w.pageYOffset;
        method = original.scroll;
      } else {
        scrollable = el;
        startX = el.scrollLeft;
        startY = el.scrollTop;
        method = scrollElement;
      }

      // scroll looping over a frame
      step({
        scrollable: scrollable,
        method: method,
        startTime: startTime,
        startX: startX,
        startY: startY,
        x: x,
        y: y
      });
    }

    // ORIGINAL METHODS OVERRIDES
    // w.scroll and w.scrollTo
    w.scroll = w.scrollTo = function() {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      }

      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0]) === true) {
        original.scroll.call(
          w,
          arguments[0].left !== undefined
            ? arguments[0].left
            : typeof arguments[0] !== 'object'
              ? arguments[0]
              : w.scrollX || w.pageXOffset,
          // use top prop, second argument if present or fallback to scrollY
          arguments[0].top !== undefined
            ? arguments[0].top
            : arguments[1] !== undefined
              ? arguments[1]
              : w.scrollY || w.pageYOffset
        );

        return;
      }

      // LET THE SMOOTHNESS BEGIN!
      smoothScroll.call(
        w,
        d.body,
        arguments[0].left !== undefined
          ? ~~arguments[0].left
          : w.scrollX || w.pageXOffset,
        arguments[0].top !== undefined
          ? ~~arguments[0].top
          : w.scrollY || w.pageYOffset
      );
    };

    // w.scrollBy
    w.scrollBy = function() {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      }

      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0])) {
        original.scrollBy.call(
          w,
          arguments[0].left !== undefined
            ? arguments[0].left
            : typeof arguments[0] !== 'object' ? arguments[0] : 0,
          arguments[0].top !== undefined
            ? arguments[0].top
            : arguments[1] !== undefined ? arguments[1] : 0
        );

        return;
      }

      // LET THE SMOOTHNESS BEGIN!
      smoothScroll.call(
        w,
        d.body,
        ~~arguments[0].left + (w.scrollX || w.pageXOffset),
        ~~arguments[0].top + (w.scrollY || w.pageYOffset)
      );
    };

    // Element.prototype.scroll and Element.prototype.scrollTo
    Element.prototype.scroll = Element.prototype.scrollTo = function() {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      }

      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0]) === true) {
        // if one number is passed, throw error to match Firefox implementation
        if (typeof arguments[0] === 'number' && arguments[1] === undefined) {
          throw new SyntaxError('Value could not be converted');
        }

        original.elementScroll.call(
          this,
          // use left prop, first number argument or fallback to scrollLeft
          arguments[0].left !== undefined
            ? ~~arguments[0].left
            : typeof arguments[0] !== 'object' ? ~~arguments[0] : this.scrollLeft,
          // use top prop, second argument or fallback to scrollTop
          arguments[0].top !== undefined
            ? ~~arguments[0].top
            : arguments[1] !== undefined ? ~~arguments[1] : this.scrollTop
        );

        return;
      }

      var left = arguments[0].left;
      var top = arguments[0].top;

      // LET THE SMOOTHNESS BEGIN!
      smoothScroll.call(
        this,
        this,
        typeof left === 'undefined' ? this.scrollLeft : ~~left,
        typeof top === 'undefined' ? this.scrollTop : ~~top
      );
    };

    // Element.prototype.scrollBy
    Element.prototype.scrollBy = function() {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      }

      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0]) === true) {
        original.elementScroll.call(
          this,
          arguments[0].left !== undefined
            ? ~~arguments[0].left + this.scrollLeft
            : ~~arguments[0] + this.scrollLeft,
          arguments[0].top !== undefined
            ? ~~arguments[0].top + this.scrollTop
            : ~~arguments[1] + this.scrollTop
        );

        return;
      }

      this.scroll({
        left: ~~arguments[0].left + this.scrollLeft,
        top: ~~arguments[0].top + this.scrollTop,
        behavior: arguments[0].behavior
      });
    };

    // Element.prototype.scrollIntoView
    Element.prototype.scrollIntoView = function() {
      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0]) === true) {
        original.scrollIntoView.call(
          this,
          arguments[0] === undefined ? true : arguments[0]
        );

        return;
      }

      // LET THE SMOOTHNESS BEGIN!
      var scrollableParent = findScrollableParent(this);
      var parentRects = scrollableParent.getBoundingClientRect();
      var clientRects = this.getBoundingClientRect();

      if (scrollableParent !== d.body) {
        // reveal element inside parent
        smoothScroll.call(
          this,
          scrollableParent,
          scrollableParent.scrollLeft + clientRects.left - parentRects.left,
          scrollableParent.scrollTop + clientRects.top - parentRects.top
        );

        // reveal parent in viewport unless is fixed
        if (w.getComputedStyle(scrollableParent).position !== 'fixed') {
          w.scrollBy({
            left: parentRects.left,
            top: parentRects.top,
            behavior: 'smooth'
          });
        }
      } else {
        // reveal element in viewport
        w.scrollBy({
          left: clientRects.left,
          top: clientRects.top,
          behavior: 'smooth'
        });
      }
    };
  }

  {
    // commonjs
    module.exports = { polyfill: polyfill };
  }

}());
});
var smoothscroll_1 = smoothscroll.polyfill;

var _default$1 = /*#__PURE__*/function (_Core) {
  _inherits(_default, _Core);

  var _super = _createSuper(_default);

  function _default() {
    var _this;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, _default);

    _this = _super.call(this, options);

    if (_this.resetNativeScroll) {
      if (history.scrollRestoration) {
        history.scrollRestoration = 'manual';
      }

      window.scrollTo(0, 0);
    }

    window.addEventListener('scroll', _this.checkScroll, false);

    if (window.smoothscrollPolyfill === undefined) {
      window.smoothscrollPolyfill = smoothscroll;
      window.smoothscrollPolyfill.polyfill();
    }

    return _this;
  }

  _createClass(_default, [{
    key: "init",
    value: function init() {
      this.instance.scroll.y = window.pageYOffset;
      this.addElements();
      this.detectElements();

      _get(_getPrototypeOf(_default.prototype), "init", this).call(this);
    }
  }, {
    key: "checkScroll",
    value: function checkScroll() {
      var _this2 = this;

      _get(_getPrototypeOf(_default.prototype), "checkScroll", this).call(this);

      if (this.getDirection) {
        this.addDirection();
      }

      if (this.getSpeed) {
        this.addSpeed();
        this.speedTs = Date.now();
      }

      this.instance.scroll.y = window.pageYOffset;

      if (Object.entries(this.els).length) {
        if (!this.hasScrollTicking) {
          requestAnimationFrame(function () {
            _this2.detectElements();
          });
          this.hasScrollTicking = true;
        }
      }
    }
  }, {
    key: "addDirection",
    value: function addDirection() {
      if (window.pageYOffset > this.instance.scroll.y) {
        if (this.instance.direction !== 'down') {
          this.instance.direction = 'down';
        }
      } else if (window.pageYOffset < this.instance.scroll.y) {
        if (this.instance.direction !== 'up') {
          this.instance.direction = 'up';
        }
      }
    }
  }, {
    key: "addSpeed",
    value: function addSpeed() {
      if (window.pageYOffset != this.instance.scroll.y) {
        this.instance.speed = (window.pageYOffset - this.instance.scroll.y) / Math.max(1, Date.now() - this.speedTs);
      } else {
        this.instance.speed = 0;
      }
    }
  }, {
    key: "resize",
    value: function resize() {
      if (Object.entries(this.els).length) {
        this.windowHeight = window.innerHeight;
        this.updateElements();
      }
    }
  }, {
    key: "addElements",
    value: function addElements() {
      var _this3 = this;

      this.els = {};
      var els = this.el.querySelectorAll('[data-' + this.name + ']');
      els.forEach(function (el, index) {
        var BCR = el.getBoundingClientRect();
        var cl = el.dataset[_this3.name + 'Class'] || _this3["class"];
        var id = typeof el.dataset[_this3.name + 'Id'] === 'string' ? el.dataset[_this3.name + 'Id'] : index;
        var top;
        var left;
        var offset = typeof el.dataset[_this3.name + 'Offset'] === 'string' ? el.dataset[_this3.name + 'Offset'].split(',') : _this3.offset;
        var repeat = el.dataset[_this3.name + 'Repeat'];
        var call = el.dataset[_this3.name + 'Call'];
        var target = el.dataset[_this3.name + 'Target'];
        var targetEl;

        if (target !== undefined) {
          targetEl = document.querySelector("".concat(target));
        } else {
          targetEl = el;
        }

        var targetElBCR = targetEl.getBoundingClientRect();
        top = targetElBCR.top + _this3.instance.scroll.y;
        left = targetElBCR.left + _this3.instance.scroll.x;
        var bottom = top + targetEl.offsetHeight;
        var right = left + targetEl.offsetWidth;

        if (target === '#header') {
          console.log(top, bottom);
        }

        if (repeat == 'false') {
          repeat = false;
        } else if (repeat != undefined) {
          repeat = true;
        } else {
          repeat = _this3.repeat;
        }

        var relativeOffset = _this3.getRelativeOffset(offset);

        top = top + relativeOffset[0];
        bottom = bottom - relativeOffset[1];
        var mappedEl = {
          el: el,
          targetEl: targetEl,
          id: id,
          "class": cl,
          top: top,
          bottom: bottom,
          left: left,
          right: right,
          offset: offset,
          progress: 0,
          repeat: repeat,
          inView: false,
          call: call
        };
        _this3.els[id] = mappedEl;

        if (el.classList.contains(cl)) {
          _this3.setInView(_this3.els[id], id);
        }
      });
    }
  }, {
    key: "updateElements",
    value: function updateElements() {
      var _this4 = this;

      Object.entries(this.els).forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            i = _ref2[0],
            el = _ref2[1];

        var top = el.targetEl.getBoundingClientRect().top + _this4.instance.scroll.y;

        var bottom = top + el.targetEl.offsetHeight;

        var relativeOffset = _this4.getRelativeOffset(el.offset);

        _this4.els[i].top = top + relativeOffset[0];
        _this4.els[i].bottom = bottom - relativeOffset[1];
      });
      this.hasScrollTicking = false;
    }
  }, {
    key: "getRelativeOffset",
    value: function getRelativeOffset(offset) {
      var relativeOffset = [0, 0];

      if (offset) {
        for (var i = 0; i < offset.length; i++) {
          if (typeof offset[i] == 'string') {
            if (offset[i].includes('%')) {
              relativeOffset[i] = parseInt(offset[i].replace('%', '') * this.windowHeight / 100);
            } else {
              relativeOffset[i] = parseInt(offset[i]);
            }
          } else {
            relativeOffset[i] = offset[i];
          }
        }
      }

      return relativeOffset;
    }
    /**
     * Scroll to a desired target.
     *
     * @param  Available options :
     *          target {node, string, "top", "bottom", int} - The DOM element we want to scroll to
     *          options {object} - Options object for additionnal settings.
     * @return {void}
     */

  }, {
    key: "scrollTo",
    value: function scrollTo(target) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      // Parse options
      var offset = parseInt(options.offset) || 0; // An offset to apply on top of given `target` or `sourceElem`'s target

      var callback = options.callback ? options.callback : false; // function called when scrollTo completes (note that it won't wait for lerp to stabilize)

      if (typeof target === 'string') {
        // Selector or boundaries
        if (target === 'top') {
          target = this.html;
        } else if (target === 'bottom') {
          target = this.html.offsetHeight - window.innerHeight;
        } else {
          target = document.querySelector(target); // If the query fails, abort

          if (!target) {
            return;
          }
        }
      } else if (typeof target === 'number') {
        // Absolute coordinate
        target = parseInt(target);
      } else if (target && target.tagName) ; else {
        console.warn('`target` parameter is not valid');
        return;
      } // We have a target that is not a coordinate yet, get it


      if (typeof target !== 'number') {
        offset = target.getBoundingClientRect().top + offset + this.instance.scroll.y;
      } else {
        offset = target + offset;
      }

      if (callback) {
        offset = offset.toFixed();

        var onScroll = function onScroll() {
          if (window.pageYOffset.toFixed() === offset) {
            window.removeEventListener('scroll', onScroll);
            callback();
          }
        };

        window.addEventListener('scroll', onScroll);
      }

      window.scrollTo({
        top: offset,
        behavior: 'smooth'
      });
    }
  }, {
    key: "update",
    value: function update() {
      this.addElements();
      this.detectElements();
    }
  }, {
    key: "destroy",
    value: function destroy() {
      _get(_getPrototypeOf(_default.prototype), "destroy", this).call(this);

      window.removeEventListener('scroll', this.checkScroll, false);
    }
  }]);

  return _default;
}(_default);

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

function E () {
  // Keep this empty so it's easier to inherit from
  // (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)
}

E.prototype = {
  on: function (name, callback, ctx) {
    var e = this.e || (this.e = {});

    (e[name] || (e[name] = [])).push({
      fn: callback,
      ctx: ctx
    });

    return this;
  },

  once: function (name, callback, ctx) {
    var self = this;
    function listener () {
      self.off(name, listener);
      callback.apply(ctx, arguments);
    }
    listener._ = callback;
    return this.on(name, listener, ctx);
  },

  emit: function (name) {
    var data = [].slice.call(arguments, 1);
    var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
    var i = 0;
    var len = evtArr.length;

    for (i; i < len; i++) {
      evtArr[i].fn.apply(evtArr[i].ctx, data);
    }

    return this;
  },

  off: function (name, callback) {
    var e = this.e || (this.e = {});
    var evts = e[name];
    var liveEvents = [];

    if (evts && callback) {
      for (var i = 0, len = evts.length; i < len; i++) {
        if (evts[i].fn !== callback && evts[i].fn._ !== callback)
          liveEvents.push(evts[i]);
      }
    }

    // Remove event from queue to prevent memory leak
    // Suggested by https://github.com/lazd
    // Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910

    (liveEvents.length)
      ? e[name] = liveEvents
      : delete e[name];

    return this;
  }
};

var tinyEmitter = E;

var lethargy = createCommonjsModule(function (module, exports) {
// Generated by CoffeeScript 1.9.2
(function() {
  var root;

  root =  exports !== null ? exports : this;

  root.Lethargy = (function() {
    function Lethargy(stability, sensitivity, tolerance, delay) {
      this.stability = stability != null ? Math.abs(stability) : 8;
      this.sensitivity = sensitivity != null ? 1 + Math.abs(sensitivity) : 100;
      this.tolerance = tolerance != null ? 1 + Math.abs(tolerance) : 1.1;
      this.delay = delay != null ? delay : 150;
      this.lastUpDeltas = (function() {
        var i, ref, results;
        results = [];
        for (i = 1, ref = this.stability * 2; 1 <= ref ? i <= ref : i >= ref; 1 <= ref ? i++ : i--) {
          results.push(null);
        }
        return results;
      }).call(this);
      this.lastDownDeltas = (function() {
        var i, ref, results;
        results = [];
        for (i = 1, ref = this.stability * 2; 1 <= ref ? i <= ref : i >= ref; 1 <= ref ? i++ : i--) {
          results.push(null);
        }
        return results;
      }).call(this);
      this.deltasTimestamp = (function() {
        var i, ref, results;
        results = [];
        for (i = 1, ref = this.stability * 2; 1 <= ref ? i <= ref : i >= ref; 1 <= ref ? i++ : i--) {
          results.push(null);
        }
        return results;
      }).call(this);
    }

    Lethargy.prototype.check = function(e) {
      var lastDelta;
      e = e.originalEvent || e;
      if (e.wheelDelta != null) {
        lastDelta = e.wheelDelta;
      } else if (e.deltaY != null) {
        lastDelta = e.deltaY * -40;
      } else if ((e.detail != null) || e.detail === 0) {
        lastDelta = e.detail * -40;
      }
      this.deltasTimestamp.push(Date.now());
      this.deltasTimestamp.shift();
      if (lastDelta > 0) {
        this.lastUpDeltas.push(lastDelta);
        this.lastUpDeltas.shift();
        return this.isInertia(1);
      } else {
        this.lastDownDeltas.push(lastDelta);
        this.lastDownDeltas.shift();
        return this.isInertia(-1);
      }
    };

    Lethargy.prototype.isInertia = function(direction) {
      var lastDeltas, lastDeltasNew, lastDeltasOld, newAverage, newSum, oldAverage, oldSum;
      lastDeltas = direction === -1 ? this.lastDownDeltas : this.lastUpDeltas;
      if (lastDeltas[0] === null) {
        return direction;
      }
      if (this.deltasTimestamp[(this.stability * 2) - 2] + this.delay > Date.now() && lastDeltas[0] === lastDeltas[(this.stability * 2) - 1]) {
        return false;
      }
      lastDeltasOld = lastDeltas.slice(0, this.stability);
      lastDeltasNew = lastDeltas.slice(this.stability, this.stability * 2);
      oldSum = lastDeltasOld.reduce(function(t, s) {
        return t + s;
      });
      newSum = lastDeltasNew.reduce(function(t, s) {
        return t + s;
      });
      oldAverage = oldSum / lastDeltasOld.length;
      newAverage = newSum / lastDeltasNew.length;
      if (Math.abs(oldAverage) < Math.abs(newAverage * this.tolerance) && (this.sensitivity < Math.abs(newAverage))) {
        return direction;
      } else {
        return false;
      }
    };

    Lethargy.prototype.showLastUpDeltas = function() {
      return this.lastUpDeltas;
    };

    Lethargy.prototype.showLastDownDeltas = function() {
      return this.lastDownDeltas;
    };

    return Lethargy;

  })();

}).call(commonjsGlobal);
});

var support = (function getSupport() {
    return {
        hasWheelEvent: 'onwheel' in document,
        hasMouseWheelEvent: 'onmousewheel' in document,
        hasTouch: ('ontouchstart' in window) || window.TouchEvent || window.DocumentTouch && document instanceof DocumentTouch,
        hasTouchWin: navigator.msMaxTouchPoints && navigator.msMaxTouchPoints > 1,
        hasPointer: !!window.navigator.msPointerEnabled,
        hasKeyDown: 'onkeydown' in document,
        isFirefox: navigator.userAgent.indexOf('Firefox') > -1
    };
})();

var toString = Object.prototype.toString,
    hasOwnProperty$1 = Object.prototype.hasOwnProperty;

var bindallStandalone = function(object) {
    if(!object) return console.warn('bindAll requires at least one argument.');

    var functions = Array.prototype.slice.call(arguments, 1);

    if (functions.length === 0) {

        for (var method in object) {
            if(hasOwnProperty$1.call(object, method)) {
                if(typeof object[method] == 'function' && toString.call(object[method]) == "[object Function]") {
                    functions.push(method);
                }
            }
        }
    }

    for(var i = 0; i < functions.length; i++) {
        var f = functions[i];
        object[f] = bind(object[f], object);
    }
};

/*
    Faster bind without specific-case checking. (see https://coderwall.com/p/oi3j3w).
    bindAll is only needed for events binding so no need to make slow fixes for constructor
    or partial application.
*/
function bind(func, context) {
  return function() {
    return func.apply(context, arguments);
  };
}

var Lethargy = lethargy.Lethargy;



var EVT_ID = 'virtualscroll';

var src = VirtualScroll;

var keyCodes = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    SPACE: 32
};

function VirtualScroll(options) {
    bindallStandalone(this, '_onWheel', '_onMouseWheel', '_onTouchStart', '_onTouchMove', '_onKeyDown');

    this.el = window;
    if (options && options.el) {
        this.el = options.el;
        delete options.el;
    }
    this.options = objectAssign({
        mouseMultiplier: 1,
        touchMultiplier: 2,
        firefoxMultiplier: 15,
        keyStep: 120,
        preventTouch: false,
        unpreventTouchClass: 'vs-touchmove-allowed',
        limitInertia: false,
        useKeyboard: true,
        useTouch: true
    }, options);

    if (this.options.limitInertia) this._lethargy = new Lethargy();

    this._emitter = new tinyEmitter();
    this._event = {
        y: 0,
        x: 0,
        deltaX: 0,
        deltaY: 0
    };
    this.touchStartX = null;
    this.touchStartY = null;
    this.bodyTouchAction = null;

    if (this.options.passive !== undefined) {
        this.listenerOptions = {passive: this.options.passive};
    }
}

VirtualScroll.prototype._notify = function(e) {
    var evt = this._event;
    evt.x += evt.deltaX;
    evt.y += evt.deltaY;

   this._emitter.emit(EVT_ID, {
        x: evt.x,
        y: evt.y,
        deltaX: evt.deltaX,
        deltaY: evt.deltaY,
        originalEvent: e
   });
};

VirtualScroll.prototype._onWheel = function(e) {
    var options = this.options;
    if (this._lethargy && this._lethargy.check(e) === false) return;
    var evt = this._event;

    // In Chrome and in Firefox (at least the new one)
    evt.deltaX = e.wheelDeltaX || e.deltaX * -1;
    evt.deltaY = e.wheelDeltaY || e.deltaY * -1;

    // for our purpose deltamode = 1 means user is on a wheel mouse, not touch pad
    // real meaning: https://developer.mozilla.org/en-US/docs/Web/API/WheelEvent#Delta_modes
    if(support.isFirefox && e.deltaMode == 1) {
        evt.deltaX *= options.firefoxMultiplier;
        evt.deltaY *= options.firefoxMultiplier;
    }

    evt.deltaX *= options.mouseMultiplier;
    evt.deltaY *= options.mouseMultiplier;

    this._notify(e);
};

VirtualScroll.prototype._onMouseWheel = function(e) {
    if (this.options.limitInertia && this._lethargy.check(e) === false) return;

    var evt = this._event;

    // In Safari, IE and in Chrome if 'wheel' isn't defined
    evt.deltaX = (e.wheelDeltaX) ? e.wheelDeltaX : 0;
    evt.deltaY = (e.wheelDeltaY) ? e.wheelDeltaY : e.wheelDelta;

    this._notify(e);
};

VirtualScroll.prototype._onTouchStart = function(e) {
    var t = (e.targetTouches) ? e.targetTouches[0] : e;
    this.touchStartX = t.pageX;
    this.touchStartY = t.pageY;
};

VirtualScroll.prototype._onTouchMove = function(e) {
    var options = this.options;
    if(options.preventTouch
        && !e.target.classList.contains(options.unpreventTouchClass)) {
        e.preventDefault();
    }

    var evt = this._event;

    var t = (e.targetTouches) ? e.targetTouches[0] : e;

    evt.deltaX = (t.pageX - this.touchStartX) * options.touchMultiplier;
    evt.deltaY = (t.pageY - this.touchStartY) * options.touchMultiplier;

    this.touchStartX = t.pageX;
    this.touchStartY = t.pageY;

    this._notify(e);
};

VirtualScroll.prototype._onKeyDown = function(e) {
    var evt = this._event;
    evt.deltaX = evt.deltaY = 0;
    var windowHeight = window.innerHeight - 40;

    switch(e.keyCode) {
        case keyCodes.LEFT:
        case keyCodes.UP:
            evt.deltaY = this.options.keyStep;
            break;

        case keyCodes.RIGHT:
        case keyCodes.DOWN:
            evt.deltaY = - this.options.keyStep;
            break;
        case  e.shiftKey:
            evt.deltaY = windowHeight;
            break;
        case keyCodes.SPACE:
            evt.deltaY = - windowHeight;
            break;
        default:
            return;
    }

    this._notify(e);
};

VirtualScroll.prototype._bind = function() {
    if(support.hasWheelEvent) this.el.addEventListener('wheel', this._onWheel, this.listenerOptions);
    if(support.hasMouseWheelEvent) this.el.addEventListener('mousewheel', this._onMouseWheel, this.listenerOptions);

    if(support.hasTouch && this.options.useTouch) {
        this.el.addEventListener('touchstart', this._onTouchStart, this.listenerOptions);
        this.el.addEventListener('touchmove', this._onTouchMove, this.listenerOptions);
    }

    if(support.hasPointer && support.hasTouchWin) {
        this.bodyTouchAction = document.body.style.msTouchAction;
        document.body.style.msTouchAction = 'none';
        this.el.addEventListener('MSPointerDown', this._onTouchStart, true);
        this.el.addEventListener('MSPointerMove', this._onTouchMove, true);
    }

    if(support.hasKeyDown && this.options.useKeyboard) document.addEventListener('keydown', this._onKeyDown);
};

VirtualScroll.prototype._unbind = function() {
    if(support.hasWheelEvent) this.el.removeEventListener('wheel', this._onWheel);
    if(support.hasMouseWheelEvent) this.el.removeEventListener('mousewheel', this._onMouseWheel);

    if(support.hasTouch) {
        this.el.removeEventListener('touchstart', this._onTouchStart);
        this.el.removeEventListener('touchmove', this._onTouchMove);
    }

    if(support.hasPointer && support.hasTouchWin) {
        document.body.style.msTouchAction = this.bodyTouchAction;
        this.el.removeEventListener('MSPointerDown', this._onTouchStart, true);
        this.el.removeEventListener('MSPointerMove', this._onTouchMove, true);
    }

    if(support.hasKeyDown && this.options.useKeyboard) document.removeEventListener('keydown', this._onKeyDown);
};

VirtualScroll.prototype.on = function(cb, ctx) {
  this._emitter.on(EVT_ID, cb, ctx);

  var events = this._emitter.e;
  if (events && events[EVT_ID] && events[EVT_ID].length === 1) this._bind();
};

VirtualScroll.prototype.off = function(cb, ctx) {
  this._emitter.off(EVT_ID, cb, ctx);

  var events = this._emitter.e;
  if (!events[EVT_ID] || events[EVT_ID].length <= 0) this._unbind();
};

VirtualScroll.prototype.reset = function() {
    var evt = this._event;
    evt.x = 0;
    evt.y = 0;
};

VirtualScroll.prototype.destroy = function() {
    this._emitter.off();
    this._unbind();
};

function lerp(start, end, amt) {
  return (1 - amt) * start + amt * end;
}

function getTranslate(el) {
  var translate = {};
  if (!window.getComputedStyle) return;
  var style = getComputedStyle(el);
  var transform = style.transform || style.webkitTransform || style.mozTransform;
  var mat = transform.match(/^matrix3d\((.+)\)$/);

  if (mat) {
    translate.x = mat ? parseFloat(mat[1].split(', ')[12]) : 0;
    translate.y = mat ? parseFloat(mat[1].split(', ')[13]) : 0;
  } else {
    mat = transform.match(/^matrix\((.+)\)$/);
    translate.x = mat ? parseFloat(mat[1].split(', ')[4]) : 0;
    translate.y = mat ? parseFloat(mat[1].split(', ')[5]) : 0;
  }

  return translate;
}

/**
 * Returns an array containing all the parent nodes of the given node
 * @param  {object} node
 * @return {array} parent nodes
 */
function getParents(elem) {
  // Set up a parent array
  var parents = []; // Push each parent element to the array

  for (; elem && elem !== document; elem = elem.parentNode) {
    parents.push(elem);
  } // Return our parent array


  return parents;
} // https://gomakethings.com/how-to-get-the-closest-parent-element-with-a-matching-selector-using-vanilla-javascript/

/**
 * https://github.com/gre/bezier-easing
 * BezierEasing - use bezier curve for transition easing function
 * by Gaëtan Renaudeau 2014 - 2015 – MIT License
 */

// These values are established by empiricism with tests (tradeoff: performance VS precision)
var NEWTON_ITERATIONS = 4;
var NEWTON_MIN_SLOPE = 0.001;
var SUBDIVISION_PRECISION = 0.0000001;
var SUBDIVISION_MAX_ITERATIONS = 10;

var kSplineTableSize = 11;
var kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);

var float32ArraySupported = typeof Float32Array === 'function';

function A (aA1, aA2) { return 1.0 - 3.0 * aA2 + 3.0 * aA1; }
function B (aA1, aA2) { return 3.0 * aA2 - 6.0 * aA1; }
function C (aA1)      { return 3.0 * aA1; }

// Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.
function calcBezier (aT, aA1, aA2) { return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT; }

// Returns dx/dt given t, x1, and x2, or dy/dt given t, y1, and y2.
function getSlope (aT, aA1, aA2) { return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1); }

function binarySubdivide (aX, aA, aB, mX1, mX2) {
  var currentX, currentT, i = 0;
  do {
    currentT = aA + (aB - aA) / 2.0;
    currentX = calcBezier(currentT, mX1, mX2) - aX;
    if (currentX > 0.0) {
      aB = currentT;
    } else {
      aA = currentT;
    }
  } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
  return currentT;
}

function newtonRaphsonIterate (aX, aGuessT, mX1, mX2) {
 for (var i = 0; i < NEWTON_ITERATIONS; ++i) {
   var currentSlope = getSlope(aGuessT, mX1, mX2);
   if (currentSlope === 0.0) {
     return aGuessT;
   }
   var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
   aGuessT -= currentX / currentSlope;
 }
 return aGuessT;
}

function LinearEasing (x) {
  return x;
}

var src$1 = function bezier (mX1, mY1, mX2, mY2) {
  if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) {
    throw new Error('bezier x values must be in [0, 1] range');
  }

  if (mX1 === mY1 && mX2 === mY2) {
    return LinearEasing;
  }

  // Precompute samples table
  var sampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);
  for (var i = 0; i < kSplineTableSize; ++i) {
    sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
  }

  function getTForX (aX) {
    var intervalStart = 0.0;
    var currentSample = 1;
    var lastSample = kSplineTableSize - 1;

    for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
      intervalStart += kSampleStepSize;
    }
    --currentSample;

    // Interpolate to provide an initial guess for t
    var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
    var guessForT = intervalStart + dist * kSampleStepSize;

    var initialSlope = getSlope(guessForT, mX1, mX2);
    if (initialSlope >= NEWTON_MIN_SLOPE) {
      return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
    } else if (initialSlope === 0.0) {
      return guessForT;
    } else {
      return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
    }
  }

  return function BezierEasing (x) {
    // Because JavaScript number are imprecise, we should guarantee the extremes are right.
    if (x === 0) {
      return 0;
    }
    if (x === 1) {
      return 1;
    }
    return calcBezier(getTForX(x), mY1, mY2);
  };
};

var keyCodes$1 = {
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
  SPACE: 32,
  TAB: 9,
  PAGEUP: 33,
  PAGEDOWN: 34,
  HOME: 36,
  END: 35
};

var _default$2 = /*#__PURE__*/function (_Core) {
  _inherits(_default, _Core);

  var _super = _createSuper(_default);

  function _default() {
    var _this;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, _default);

    if (history.scrollRestoration) {
      history.scrollRestoration = 'manual';
    }

    window.scrollTo(0, 0);
    _this = _super.call(this, options);
    if (_this.inertia) _this.lerp = _this.inertia * 0.1;
    _this.isScrolling = false;
    _this.isDraggingScrollbar = false;
    _this.isTicking = false;
    _this.hasScrollTicking = false;
    _this.parallaxElements = {};
    _this.stop = false;
    _this.scrollbarContainer = options.scrollbarContainer;
    _this.checkKey = _this.checkKey.bind(_assertThisInitialized(_this));
    window.addEventListener('keydown', _this.checkKey, false);
    return _this;
  }

  _createClass(_default, [{
    key: "init",
    value: function init() {
      var _this2 = this;

      this.html.classList.add(this.smoothClass);
      this.html.setAttribute("data-".concat(this.name, "-direction"), this.direction);
      this.instance = _objectSpread2({
        delta: {
          x: 0,
          y: 0
        }
      }, this.instance);
      this.vs = new src({
        el: this.scrollFromAnywhere ? document : this.el,
        mouseMultiplier: navigator.platform.indexOf('Win') > -1 ? 1 : 0.4,
        firefoxMultiplier: this.firefoxMultiplier,
        touchMultiplier: this.touchMultiplier,
        useKeyboard: false,
        passive: true
      });
      this.vs.on(function (e) {
        if (_this2.stop) {
          return;
        }

        if (!_this2.isDraggingScrollbar) {
          requestAnimationFrame(function () {
            _this2.updateDelta(e);

            if (!_this2.isScrolling) _this2.startScrolling();
          });
        }
      });
      this.setScrollLimit();
      this.initScrollBar();
      this.addSections();
      this.addElements();
      this.checkScroll(true);
      this.transformElements(true, true);

      _get(_getPrototypeOf(_default.prototype), "init", this).call(this);
    }
  }, {
    key: "setScrollLimit",
    value: function setScrollLimit() {
      this.instance.limit.y = this.el.offsetHeight - this.windowHeight;

      if (this.direction === 'horizontal') {
        var totalWidth = 0;
        var nodes = this.el.children;

        for (var i = 0; i < nodes.length; i++) {
          totalWidth += nodes[i].offsetWidth;
        }

        this.instance.limit.x = totalWidth - this.windowWidth;
      }
    }
  }, {
    key: "startScrolling",
    value: function startScrolling() {
      this.startScrollTs = Date.now(); // Record timestamp

      this.isScrolling = true;
      this.checkScroll();
      this.html.classList.add(this.scrollingClass);
    }
  }, {
    key: "stopScrolling",
    value: function stopScrolling() {
      cancelAnimationFrame(this.checkScrollRaf); // Prevent checkScroll to continue looping

      if (this.scrollToRaf) {
        cancelAnimationFrame(this.scrollToRaf);
        this.scrollToRaf = null;
      }

      this.isScrolling = false;
      this.instance.scroll.y = Math.round(this.instance.scroll.y);
      this.html.classList.remove(this.scrollingClass);
    }
  }, {
    key: "checkKey",
    value: function checkKey(e) {
      var _this3 = this;

      if (this.stop) {
        // If we are stopped, we don't want any scroll to occur because of a keypress
        // Prevent tab to scroll to activeElement
        if (e.keyCode == keyCodes$1.TAB) {
          requestAnimationFrame(function () {
            // Make sure native scroll is always at top of page
            _this3.html.scrollTop = 0;
            document.body.scrollTop = 0;
            _this3.html.scrollLeft = 0;
            document.body.scrollLeft = 0;
          });
        }

        return;
      }

      switch (e.keyCode) {
        case keyCodes$1.TAB:
          // Do not remove the RAF
          // It allows to override the browser's native scrollTo, which is essential
          requestAnimationFrame(function () {
            // Make sure native scroll is always at top of page
            _this3.html.scrollTop = 0;
            document.body.scrollTop = 0;
            _this3.html.scrollLeft = 0;
            document.body.scrollLeft = 0; // Request scrollTo on the focusedElement, putting it at the center of the screen

            _this3.scrollTo(document.activeElement, {
              offset: -window.innerHeight / 2
            });
          });
          break;

        case keyCodes$1.UP:
          this.instance.delta[this.directionAxis] -= 240;
          break;

        case keyCodes$1.DOWN:
          this.instance.delta[this.directionAxis] += 240;
          break;

        case keyCodes$1.PAGEUP:
          this.instance.delta[this.directionAxis] -= window.innerHeight;
          break;

        case keyCodes$1.PAGEDOWN:
          this.instance.delta[this.directionAxis] += window.innerHeight;
          break;

        case keyCodes$1.HOME:
          this.instance.delta[this.directionAxis] -= this.instance.limit[this.directionAxis];
          break;

        case keyCodes$1.END:
          this.instance.delta[this.directionAxis] += this.instance.limit[this.directionAxis];
          break;

        case keyCodes$1.SPACE:
          if (!(document.activeElement instanceof HTMLInputElement) && !(document.activeElement instanceof HTMLTextAreaElement)) {
            if (e.shiftKey) {
              this.instance.delta[this.directionAxis] -= window.innerHeight;
            } else {
              this.instance.delta[this.directionAxis] += window.innerHeight;
            }
          }

          break;

        default:
          return;
      }

      if (this.instance.delta[this.directionAxis] < 0) this.instance.delta[this.directionAxis] = 0;
      if (this.instance.delta[this.directionAxis] > this.instance.limit[this.directionAxis]) this.instance.delta[this.directionAxis] = this.instance.limit[this.directionAxis];
      this.stopScrolling(); // Stop any movement, allows to kill any other `scrollTo` still happening

      this.isScrolling = true;
      this.checkScroll();
      this.html.classList.add(this.scrollingClass);
    }
  }, {
    key: "checkScroll",
    value: function checkScroll() {
      var _this4 = this;

      var forced = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (forced || this.isScrolling || this.isDraggingScrollbar) {
        if (!this.hasScrollTicking) {
          this.checkScrollRaf = requestAnimationFrame(function () {
            return _this4.checkScroll();
          });
          this.hasScrollTicking = true;
        }

        this.updateScroll();
        var distance = Math.abs(this.instance.delta[this.directionAxis] - this.instance.scroll[this.directionAxis]);
        var timeSinceStart = Date.now() - this.startScrollTs; // Get the time since the scroll was started: the scroll can be stopped again only past 100ms

        if (!this.animatingScroll && timeSinceStart > 100 && (distance < 0.5 && this.instance.delta[this.directionAxis] != 0 || distance < 0.5 && this.instance.delta[this.directionAxis] == 0)) {
          this.stopScrolling();
        }

        Object.entries(this.sections).forEach(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              i = _ref2[0],
              section = _ref2[1];

          if (section.persistent || _this4.instance.scroll[_this4.directionAxis] > section.offset[_this4.directionAxis] && _this4.instance.scroll[_this4.directionAxis] < section.limit[_this4.directionAxis]) {
            if (_this4.direction === 'horizontal') {
              _this4.transform(section.el, -_this4.instance.scroll[_this4.directionAxis], 0);
            } else {
              _this4.transform(section.el, 0, -_this4.instance.scroll[_this4.directionAxis]);
            }

            if (!section.inView) {
              section.inView = true;
              section.el.style.opacity = 1;
              section.el.style.pointerEvents = 'all';
              section.el.setAttribute("data-".concat(_this4.name, "-section-inview"), '');
            }
          } else {
            if (section.inView) {
              section.inView = false;
              section.el.style.opacity = 0;
              section.el.style.pointerEvents = 'none';
              section.el.removeAttribute("data-".concat(_this4.name, "-section-inview"));
            }

            _this4.transform(section.el, 0, 0);
          }
        });

        if (this.getDirection) {
          this.addDirection();
        }

        if (this.getSpeed) {
          this.addSpeed();
          this.speedTs = Date.now();
        }

        this.detectElements();
        this.transformElements();

        if (this.hasScrollbar) {
          var scrollBarTranslation = this.instance.scroll[this.directionAxis] / this.instance.limit[this.directionAxis] * this.scrollBarLimit[this.directionAxis];

          if (this.direction === 'horizontal') {
            this.transform(this.scrollbarThumb, scrollBarTranslation, 0);
          } else {
            this.transform(this.scrollbarThumb, 0, scrollBarTranslation);
          }
        }

        _get(_getPrototypeOf(_default.prototype), "checkScroll", this).call(this);

        this.hasScrollTicking = false;
      }
    }
  }, {
    key: "resize",
    value: function resize() {
      this.windowHeight = window.innerHeight;
      this.windowWidth = window.innerWidth;
      this.checkContext();
      this.windowMiddle = {
        x: this.windowWidth / 2,
        y: this.windowHeight / 2
      };
      this.update();
    }
  }, {
    key: "updateDelta",
    value: function updateDelta(e) {
      var delta;
      var gestureDirection = this[this.context] && this[this.context].gestureDirection ? this[this.context].gestureDirection : this.gestureDirection;

      if (gestureDirection === 'both') {
        delta = e.deltaX + e.deltaY;
      } else if (gestureDirection === 'vertical') {
        delta = e.deltaY;
      } else if (gestureDirection === 'horizontal') {
        delta = e.deltaX;
      } else {
        delta = e.deltaY;
      }

      this.instance.delta[this.directionAxis] -= delta * this.multiplier;
      if (this.instance.delta[this.directionAxis] < 0) this.instance.delta[this.directionAxis] = 0;
      if (this.instance.delta[this.directionAxis] > this.instance.limit[this.directionAxis]) this.instance.delta[this.directionAxis] = this.instance.limit[this.directionAxis];
    }
  }, {
    key: "updateScroll",
    value: function updateScroll(e) {
      if (this.isScrolling || this.isDraggingScrollbar) {
        this.instance.scroll[this.directionAxis] = lerp(this.instance.scroll[this.directionAxis], this.instance.delta[this.directionAxis], this.lerp);
      } else {
        if (this.instance.scroll[this.directionAxis] > this.instance.limit[this.directionAxis]) {
          this.setScroll(this.instance.scroll[this.directionAxis], this.instance.limit[this.directionAxis]);
        } else if (this.instance.scroll.y < 0) {
          this.setScroll(this.instance.scroll[this.directionAxis], 0);
        } else {
          this.setScroll(this.instance.scroll[this.directionAxis], this.instance.delta[this.directionAxis]);
        }
      }
    }
  }, {
    key: "addDirection",
    value: function addDirection() {
      if (this.instance.delta.y > this.instance.scroll.y) {
        if (this.instance.direction !== 'down') {
          this.instance.direction = 'down';
        }
      } else if (this.instance.delta.y < this.instance.scroll.y) {
        if (this.instance.direction !== 'up') {
          this.instance.direction = 'up';
        }
      }

      if (this.instance.delta.x > this.instance.scroll.x) {
        if (this.instance.direction !== 'right') {
          this.instance.direction = 'right';
        }
      } else if (this.instance.delta.x < this.instance.scroll.x) {
        if (this.instance.direction !== 'left') {
          this.instance.direction = 'left';
        }
      }
    }
  }, {
    key: "addSpeed",
    value: function addSpeed() {
      if (this.instance.delta[this.directionAxis] != this.instance.scroll[this.directionAxis]) {
        this.instance.speed = (this.instance.delta[this.directionAxis] - this.instance.scroll[this.directionAxis]) / Math.max(1, Date.now() - this.speedTs);
      } else {
        this.instance.speed = 0;
      }
    }
  }, {
    key: "initScrollBar",
    value: function initScrollBar() {
      this.scrollbar = document.createElement('span');
      this.scrollbarThumb = document.createElement('span');
      this.scrollbar.classList.add("".concat(this.scrollbarClass));
      this.scrollbarThumb.classList.add("".concat(this.scrollbarClass, "_thumb"));
      this.scrollbar.append(this.scrollbarThumb);

      if (this.scrollbarContainer) {
        this.scrollbarContainer.append(this.scrollbar);
      } else {
        document.body.append(this.scrollbar);
      } // Scrollbar Events


      this.getScrollBar = this.getScrollBar.bind(this);
      this.releaseScrollBar = this.releaseScrollBar.bind(this);
      this.moveScrollBar = this.moveScrollBar.bind(this);
      this.scrollbarThumb.addEventListener('mousedown', this.getScrollBar);
      window.addEventListener('mouseup', this.releaseScrollBar);
      window.addEventListener('mousemove', this.moveScrollBar); // Set scrollbar values

      this.hasScrollbar = false;

      if (this.direction == 'horizontal') {
        if (this.instance.limit.x + this.windowWidth <= this.windowWidth) {
          return;
        }
      } else {
        if (this.instance.limit.y + this.windowHeight <= this.windowHeight) {
          return;
        }
      }

      this.hasScrollbar = true;
      this.scrollbarBCR = this.scrollbar.getBoundingClientRect();
      this.scrollbarHeight = this.scrollbarBCR.height;
      this.scrollbarWidth = this.scrollbarBCR.width;

      if (this.direction === 'horizontal') {
        this.scrollbarThumb.style.width = "".concat(this.scrollbarWidth * this.scrollbarWidth / (this.instance.limit.x + this.scrollbarWidth), "px");
      } else {
        this.scrollbarThumb.style.height = "".concat(this.scrollbarHeight * this.scrollbarHeight / (this.instance.limit.y + this.scrollbarHeight), "px");
      }

      this.scrollbarThumbBCR = this.scrollbarThumb.getBoundingClientRect();
      this.scrollBarLimit = {
        x: this.scrollbarWidth - this.scrollbarThumbBCR.width,
        y: this.scrollbarHeight - this.scrollbarThumbBCR.height
      };
    }
  }, {
    key: "reinitScrollBar",
    value: function reinitScrollBar() {
      this.hasScrollbar = false;

      if (this.direction == 'horizontal') {
        if (this.instance.limit.x + this.windowWidth <= this.windowWidth) {
          return;
        }
      } else {
        if (this.instance.limit.y + this.windowHeight <= this.windowHeight) {
          return;
        }
      }

      this.hasScrollbar = true;
      this.scrollbarBCR = this.scrollbar.getBoundingClientRect();
      this.scrollbarHeight = this.scrollbarBCR.height;
      this.scrollbarWidth = this.scrollbarBCR.width;

      if (this.direction === 'horizontal') {
        this.scrollbarThumb.style.width = "".concat(this.scrollbarWidth * this.scrollbarWidth / (this.instance.limit.x + this.scrollbarWidth), "px");
      } else {
        this.scrollbarThumb.style.height = "".concat(this.scrollbarHeight * this.scrollbarHeight / (this.instance.limit.y + this.scrollbarHeight), "px");
      }

      this.scrollbarThumbBCR = this.scrollbarThumb.getBoundingClientRect();
      this.scrollBarLimit = {
        x: this.scrollbarWidth - this.scrollbarThumbBCR.width,
        y: this.scrollbarHeight - this.scrollbarThumbBCR.height
      };
    }
  }, {
    key: "destroyScrollBar",
    value: function destroyScrollBar() {
      this.scrollbarThumb.removeEventListener('mousedown', this.getScrollBar);
      window.removeEventListener('mouseup', this.releaseScrollBar);
      window.removeEventListener('mousemove', this.moveScrollBar);
      this.scrollbar.remove();
    }
  }, {
    key: "getScrollBar",
    value: function getScrollBar(e) {
      this.isDraggingScrollbar = true;
      this.checkScroll();
      this.html.classList.remove(this.scrollingClass);
      this.html.classList.add(this.draggingClass);
    }
  }, {
    key: "releaseScrollBar",
    value: function releaseScrollBar(e) {
      this.isDraggingScrollbar = false;
      this.html.classList.add(this.scrollingClass);
      this.html.classList.remove(this.draggingClass);
    }
  }, {
    key: "moveScrollBar",
    value: function moveScrollBar(e) {
      var _this5 = this;

      if (this.isDraggingScrollbar) {
        requestAnimationFrame(function () {
          var x = (e.clientX - _this5.scrollbarBCR.left) * 100 / _this5.scrollbarWidth * _this5.instance.limit.x / 100;
          var y = (e.clientY - _this5.scrollbarBCR.top) * 100 / _this5.scrollbarHeight * _this5.instance.limit.y / 100;

          if (y > 0 && y < _this5.instance.limit.y) {
            _this5.instance.delta.y = y;
          }

          if (x > 0 && x < _this5.instance.limit.x) {
            _this5.instance.delta.x = x;
          }
        });
      }
    }
  }, {
    key: "addElements",
    value: function addElements() {
      var _this6 = this;

      this.els = {};
      this.parallaxElements = {}; // this.sections.forEach((section, y) => {

      var els = this.el.querySelectorAll("[data-".concat(this.name, "]"));
      els.forEach(function (el, index) {
        // Try and find the target's parent section
        var targetParents = getParents(el);
        var section = Object.entries(_this6.sections).map(function (_ref3) {
          var _ref4 = _slicedToArray(_ref3, 2),
              key = _ref4[0],
              section = _ref4[1];

          return section;
        }).find(function (section) {
          return targetParents.includes(section.el);
        });
        var cl = el.dataset[_this6.name + 'Class'] || _this6["class"];
        var id = typeof el.dataset[_this6.name + 'Id'] === 'string' ? el.dataset[_this6.name + 'Id'] : 'el' + index;
        var top;
        var left;
        var repeat = el.dataset[_this6.name + 'Repeat'];
        var call = el.dataset[_this6.name + 'Call'];
        var position = el.dataset[_this6.name + 'Position'];
        var delay = el.dataset[_this6.name + 'Delay'];
        var direction = el.dataset[_this6.name + 'Direction'];
        var sticky = typeof el.dataset[_this6.name + 'Sticky'] === 'string';
        var speed = el.dataset[_this6.name + 'Speed'] ? parseFloat(el.dataset[_this6.name + 'Speed']) / 10 : false;
        var offset = typeof el.dataset[_this6.name + 'Offset'] === 'string' ? el.dataset[_this6.name + 'Offset'].split(',') : _this6.offset;
        var target = el.dataset[_this6.name + 'Target'];
        var targetEl;

        if (target !== undefined) {
          targetEl = document.querySelector("".concat(target));
        } else {
          targetEl = el;
        }

        var targetElBCR = targetEl.getBoundingClientRect();

        if (section === null) {
          top = targetElBCR.top + _this6.instance.scroll.y - getTranslate(targetEl).y;
          left = targetElBCR.left + _this6.instance.scroll.x - getTranslate(targetEl).x;
        } else {
          if (!section.inView) {
            top = targetElBCR.top - getTranslate(section.el).y - getTranslate(targetEl).y;
            left = targetElBCR.left - getTranslate(section.el).x - getTranslate(targetEl).x;
          } else {
            top = targetElBCR.top + _this6.instance.scroll.y - getTranslate(targetEl).y;
            left = targetElBCR.left + _this6.instance.scroll.x - getTranslate(targetEl).x;
          }
        }

        var bottom = top + targetEl.offsetHeight;
        var right = left + targetEl.offsetWidth;
        var middle = {
          x: (right - left) / 2 + left,
          y: (bottom - top) / 2 + top
        };

        if (sticky) {
          var elBCR = el.getBoundingClientRect();
          var elTop = elBCR.top;
          var elLeft = elBCR.left;
          var elDistance = {
            x: elLeft - left,
            y: elTop - top
          };
          top += window.innerHeight;
          left += window.innerWidth;
          bottom = elTop + targetEl.offsetHeight - el.offsetHeight - elDistance[_this6.directionAxis];
          right = elLeft + targetEl.offsetWidth - el.offsetWidth - elDistance[_this6.directionAxis];
          middle = {
            x: (right - left) / 2 + left,
            y: (bottom - top) / 2 + top
          };
        }

        if (repeat == 'false') {
          repeat = false;
        } else if (repeat != undefined) {
          repeat = true;
        } else {
          repeat = _this6.repeat;
        }

        var relativeOffset = [0, 0];

        if (offset) {
          if (_this6.direction === 'horizontal') {
            for (var i = 0; i < offset.length; i++) {
              if (typeof offset[i] == 'string') {
                if (offset[i].includes('%')) {
                  relativeOffset[i] = parseInt(offset[i].replace('%', '') * _this6.windowWidth / 100);
                } else {
                  relativeOffset[i] = parseInt(offset[i]);
                }
              } else {
                relativeOffset[i] = offset[i];
              }
            }

            left = left + relativeOffset[0];
            right = right - relativeOffset[1];
          } else {
            for (var i = 0; i < offset.length; i++) {
              if (typeof offset[i] == 'string') {
                if (offset[i].includes('%')) {
                  relativeOffset[i] = parseInt(offset[i].replace('%', '') * _this6.windowHeight / 100);
                } else {
                  relativeOffset[i] = parseInt(offset[i]);
                }
              } else {
                relativeOffset[i] = offset[i];
              }
            }

            top = top + relativeOffset[0];
            bottom = bottom - relativeOffset[1];
          }
        }

        var mappedEl = {
          el: el,
          id: id,
          "class": cl,
          section: section,
          top: top,
          middle: middle,
          bottom: bottom,
          left: left,
          right: right,
          offset: offset,
          progress: 0,
          repeat: repeat,
          inView: false,
          call: call,
          speed: speed,
          delay: delay,
          position: position,
          target: targetEl,
          direction: direction,
          sticky: sticky
        };
        _this6.els[id] = mappedEl;

        if (el.classList.contains(cl)) {
          _this6.setInView(_this6.els[id], id);
        }

        if (speed !== false || sticky) {
          _this6.parallaxElements[id] = mappedEl;
        }
      }); // });
    }
  }, {
    key: "addSections",
    value: function addSections() {
      var _this7 = this;

      this.sections = {};
      var sections = this.el.querySelectorAll("[data-".concat(this.name, "-section]"));

      if (sections.length === 0) {
        sections = [this.el];
      }

      sections.forEach(function (section, index) {
        var id = typeof section.dataset[_this7.name + 'Id'] === 'string' ? section.dataset[_this7.name + 'Id'] : 'section' + index;
        var sectionBCR = section.getBoundingClientRect();
        var offset = {
          x: sectionBCR.left - window.innerWidth * 1.5 - getTranslate(section).x,
          y: sectionBCR.top - window.innerHeight * 1.5 - getTranslate(section).y
        };
        var limit = {
          x: offset.x + sectionBCR.width + window.innerWidth * 2,
          y: offset.y + sectionBCR.height + window.innerHeight * 2
        };
        var persistent = typeof section.dataset[_this7.name + 'Persistent'] === 'string';
        section.setAttribute('data-scroll-section-id', id);
        var mappedSection = {
          el: section,
          offset: offset,
          limit: limit,
          inView: false,
          persistent: persistent,
          id: id
        };
        _this7.sections[id] = mappedSection;
      });
    }
  }, {
    key: "transform",
    value: function transform(element, x, y, delay) {
      var transform;

      if (!delay) {
        transform = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(x, ",").concat(y, ",0,1)");
      } else {
        var start = getTranslate(element);
        var lerpX = lerp(start.x, x, delay);
        var lerpY = lerp(start.y, y, delay);
        transform = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(lerpX, ",").concat(lerpY, ",0,1)");
      }

      element.style.webkitTransform = transform;
      element.style.msTransform = transform;
      element.style.transform = transform;
    }
  }, {
    key: "transformElements",
    value: function transformElements(isForced) {
      var _this8 = this;

      var setAllElements = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var scrollRight = this.instance.scroll.x + this.windowWidth;
      var scrollBottom = this.instance.scroll.y + this.windowHeight;
      var scrollMiddle = {
        x: this.instance.scroll.x + this.windowMiddle.x,
        y: this.instance.scroll.y + this.windowMiddle.y
      };
      Object.entries(this.parallaxElements).forEach(function (_ref5) {
        var _ref6 = _slicedToArray(_ref5, 2),
            i = _ref6[0],
            current = _ref6[1];

        var transformDistance = false;

        if (isForced) {
          transformDistance = 0;
        }

        if (current.inView || setAllElements) {
          switch (current.position) {
            case 'top':
              transformDistance = _this8.instance.scroll[_this8.directionAxis] * -current.speed;
              break;

            case 'elementTop':
              transformDistance = (scrollBottom - current.top) * -current.speed;
              break;

            case 'bottom':
              transformDistance = (_this8.instance.limit[_this8.directionAxis] - scrollBottom + _this8.windowHeight) * current.speed;
              break;

            case 'left':
              transformDistance = _this8.instance.scroll[_this8.directionAxis] * -current.speed;
              break;

            case 'elementLeft':
              transformDistance = (scrollRight - current.left) * -current.speed;
              break;

            case 'right':
              transformDistance = (_this8.instance.limit[_this8.directionAxis] - scrollRight + _this8.windowHeight) * current.speed;
              break;

            default:
              transformDistance = (scrollMiddle[_this8.directionAxis] - current.middle[_this8.directionAxis]) * -current.speed;
              break;
          }
        }

        if (current.sticky) {
          if (current.inView) {
            if (_this8.direction === 'horizontal') {
              transformDistance = _this8.instance.scroll.x - current.left + window.innerWidth;
            } else {
              transformDistance = _this8.instance.scroll.y - current.top + window.innerHeight;
            }
          } else {
            if (_this8.direction === 'horizontal') {
              if (_this8.instance.scroll.x < current.left - window.innerWidth && _this8.instance.scroll.x < current.left - window.innerWidth / 2) {
                transformDistance = 0;
              } else if (_this8.instance.scroll.x > current.right && _this8.instance.scroll.x > current.right + 100) {
                transformDistance = current.right - current.left + window.innerWidth;
              } else {
                transformDistance = false;
              }
            } else {
              if (_this8.instance.scroll.y < current.top - window.innerHeight && _this8.instance.scroll.y < current.top - window.innerHeight / 2) {
                transformDistance = 0;
              } else if (_this8.instance.scroll.y > current.bottom && _this8.instance.scroll.y > current.bottom + 100) {
                transformDistance = current.bottom - current.top + window.innerHeight;
              } else {
                transformDistance = false;
              }
            }
          }
        }

        if (transformDistance !== false) {
          if (current.direction === 'horizontal' || _this8.direction === 'horizontal' && current.direction !== 'vertical') {
            _this8.transform(current.el, transformDistance, 0, isForced ? false : current.delay);
          } else {
            _this8.transform(current.el, 0, transformDistance, isForced ? false : current.delay);
          }
        }
      });
    }
    /**
     * Scroll to a desired target.
     *
     * @param  Available options :
     *          target {node, string, "top", "bottom", int} - The DOM element we want to scroll to
     *          options {object} - Options object for additionnal settings.
     * @return {void}
     */

  }, {
    key: "scrollTo",
    value: function scrollTo(target) {
      var _this9 = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      // Parse options
      var offset = parseInt(options.offset) || 0; // An offset to apply on top of given `target` or `sourceElem`'s target

      var duration = options.duration || 1000; // Duration of the scroll animation in milliseconds

      var easing = options.easing || [0.25, 0.0, 0.35, 1.0]; // An array of 4 floats between 0 and 1 defining the bezier curve for the animation's easing. See http://greweb.me/bezier-easing-editor/example/

      var disableLerp = options.disableLerp ? true : false; // Lerp effect won't be applied if set to true

      var callback = options.callback ? options.callback : false; // function called when scrollTo completes (note that it won't wait for lerp to stabilize)

      easing = src$1.apply(void 0, _toConsumableArray(easing));

      if (typeof target === 'string') {
        // Selector or boundaries
        if (target === 'top') {
          target = 0;
        } else if (target === 'bottom') {
          target = this.instance.limit.y;
        } else if (target === 'left') {
          target = 0;
        } else if (target === 'right') {
          target = this.instance.limit.x;
        } else {
          target = document.querySelector(target); // If the query fails, abort

          if (!target) {
            return;
          }
        }
      } else if (typeof target === 'number') {
        // Absolute coordinate
        target = parseInt(target);
      } else if (target && target.tagName) ; else {
        console.warn('`target` parameter is not valid');
        return;
      } // We have a target that is not a coordinate yet, get it


      if (typeof target !== 'number') {
        // Verify the given target belongs to this scroll scope
        var targetInScope = getParents(target).includes(this.el);

        if (!targetInScope) {
          // If the target isn't inside our main element, abort any action
          return;
        } // Get target offset from top


        var targetBCR = target.getBoundingClientRect();
        var offsetTop = targetBCR.top;
        var offsetLeft = targetBCR.left; // Try and find the target's parent section

        var targetParents = getParents(target);
        var parentSection = targetParents.find(function (candidate) {
          return Object.entries(_this9.sections) // Get sections associative array as a regular array
          .map(function (_ref7) {
            var _ref8 = _slicedToArray(_ref7, 2),
                key = _ref8[0],
                section = _ref8[1];

            return section;
          }) // map to section only (we dont need the key here)
          .find(function (section) {
            return section.el == candidate;
          }); // finally find the section that matches the candidate
        });
        var parentSectionOffset = 0;

        if (parentSection) {
          parentSectionOffset = getTranslate(parentSection)[this.directionAxis]; // We got a parent section, store it's current offset to remove it later
        } else {
          // if no parent section is found we need to use instance scroll directly
          parentSectionOffset = -this.instance.scroll[this.directionAxis];
        } // Final value of scroll destination : offsetTop + (optional offset given in options) - (parent's section translate)


        if (this.direction === 'horizontal') {
          offset = offsetLeft + offset - parentSectionOffset;
        } else {
          offset = offsetTop + offset - parentSectionOffset;
        }
      } else {
        offset = target + offset;
      } // Actual scrollto
      // ==========================================================================
      // Setup


      var scrollStart = parseFloat(this.instance.delta[this.directionAxis]);
      var scrollTarget = Math.max(0, Math.min(offset, this.instance.limit[this.directionAxis])); // Make sure our target is in the scroll boundaries

      var scrollDiff = scrollTarget - scrollStart;

      var render = function render(p) {
        if (disableLerp) {
          if (_this9.direction === 'horizontal') {
            _this9.setScroll(scrollStart + scrollDiff * p, _this9.instance.delta.y);
          } else {
            _this9.setScroll(_this9.instance.delta.x, scrollStart + scrollDiff * p);
          }
        } else {
          _this9.instance.delta[_this9.directionAxis] = scrollStart + scrollDiff * p;
        }
      }; // Prepare the scroll


      this.animatingScroll = true; // This boolean allows to prevent `checkScroll()` from calling `stopScrolling` when the animation is slow (i.e. at the beginning of an EaseIn)

      this.stopScrolling(); // Stop any movement, allows to kill any other `scrollTo` still happening

      this.startScrolling(); // Restart the scroll
      // Start the animation loop

      var start = Date.now();

      var loop = function loop() {
        var p = (Date.now() - start) / duration; // Animation progress

        if (p > 1) {
          // Animation ends
          render(1);
          _this9.animatingScroll = false;
          if (duration == 0) _this9.update();
          if (callback) callback();
        } else {
          _this9.scrollToRaf = requestAnimationFrame(loop);
          render(easing(p));
        }
      };

      loop();
    }
  }, {
    key: "update",
    value: function update() {
      this.setScrollLimit();
      this.addSections();
      this.addElements();
      this.detectElements();
      this.updateScroll();
      this.transformElements(true);
      this.reinitScrollBar();
      this.checkScroll(true);
    }
  }, {
    key: "startScroll",
    value: function startScroll() {
      this.stop = false;
    }
  }, {
    key: "stopScroll",
    value: function stopScroll() {
      this.stop = true;
    }
  }, {
    key: "setScroll",
    value: function setScroll(x, y) {
      this.instance = _objectSpread2(_objectSpread2({}, this.instance), {}, {
        scroll: {
          x: x,
          y: y
        },
        delta: {
          x: x,
          y: y
        },
        speed: 0
      });
    }
  }, {
    key: "destroy",
    value: function destroy() {
      _get(_getPrototypeOf(_default.prototype), "destroy", this).call(this);

      this.stopScrolling();
      this.html.classList.remove(this.smoothClass);
      this.vs.destroy();
      this.destroyScrollBar();
      window.removeEventListener('keydown', this.checkKey, false);
    }
  }]);

  return _default;
}(_default);

var Smooth = /*#__PURE__*/function () {
  function Smooth() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Smooth);

    this.options = options; // Override default options with given ones

    Object.assign(this, defaults, options);
    this.smartphone = defaults.smartphone;
    if (options.smartphone) Object.assign(this.smartphone, options.smartphone);
    this.tablet = defaults.tablet;
    if (options.tablet) Object.assign(this.tablet, options.tablet);
    if (!this.smooth && this.direction == 'horizontal') console.warn('🚨 `smooth:false` & `horizontal` direction are not yet compatible');
    if (!this.tablet.smooth && this.tablet.direction == 'horizontal') console.warn('🚨 `smooth:false` & `horizontal` direction are not yet compatible (tablet)');
    if (!this.smartphone.smooth && this.smartphone.direction == 'horizontal') console.warn('🚨 `smooth:false` & `horizontal` direction are not yet compatible (smartphone)');
    this.init();
  }

  _createClass(Smooth, [{
    key: "init",
    value: function init() {
      this.options.isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1 || window.innerWidth < this.tablet.breakpoint;
      this.options.isTablet = this.options.isMobile && window.innerWidth >= this.tablet.breakpoint;

      if (this.smooth && !this.options.isMobile || this.tablet.smooth && this.options.isTablet || this.smartphone.smooth && this.options.isMobile && !this.options.isTablet) {
        this.scroll = new _default$2(this.options);
      } else {
        this.scroll = new _default$1(this.options);
      }

      this.scroll.init();

      if (window.location.hash) {
        // Get the hash without the '#' and find the matching element
        var id = window.location.hash.slice(1, window.location.hash.length);
        var target = document.getElementById(id); // If found, scroll to the element

        if (target) this.scroll.scrollTo(target);
      }
    }
  }, {
    key: "update",
    value: function update() {
      this.scroll.update();
    }
  }, {
    key: "start",
    value: function start() {
      this.scroll.startScroll();
    }
  }, {
    key: "stop",
    value: function stop() {
      this.scroll.stopScroll();
    }
  }, {
    key: "scrollTo",
    value: function scrollTo(target, options) {
      this.scroll.scrollTo(target, options);
    }
  }, {
    key: "setScroll",
    value: function setScroll(x, y) {
      this.scroll.setScroll(x, y);
    }
  }, {
    key: "on",
    value: function on(event, func) {
      this.scroll.setEvents(event, func);
    }
  }, {
    key: "off",
    value: function off(event, func) {
      this.scroll.unsetEvents(event, func);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.scroll.destroy();
    }
  }]);

  return Smooth;
}();

var Native = /*#__PURE__*/function () {
  function Native() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Native);

    this.options = options; // Override default options with given ones

    Object.assign(this, defaults, options);
    this.smartphone = defaults.smartphone;
    if (options.smartphone) Object.assign(this.smartphone, options.smartphone);
    this.tablet = defaults.tablet;
    if (options.tablet) Object.assign(this.tablet, options.tablet);
    this.init();
  }

  _createClass(Native, [{
    key: "init",
    value: function init() {
      this.scroll = new _default$1(this.options);
      this.scroll.init();

      if (window.location.hash) {
        // Get the hash without the '#' and find the matching element
        var id = window.location.hash.slice(1, window.location.hash.length);
        var target = document.getElementById(id); // If found, scroll to the element

        if (target) this.scroll.scrollTo(target);
      }
    }
  }, {
    key: "update",
    value: function update() {
      this.scroll.update();
    }
  }, {
    key: "start",
    value: function start() {
      this.scroll.startScroll();
    }
  }, {
    key: "stop",
    value: function stop() {
      this.scroll.stopScroll();
    }
  }, {
    key: "scrollTo",
    value: function scrollTo(target, options) {
      this.scroll.scrollTo(target, options);
    }
  }, {
    key: "setScroll",
    value: function setScroll(x, y) {
      this.scroll.setScroll(x, y);
    }
  }, {
    key: "on",
    value: function on(event, func) {
      this.scroll.setEvents(event, func);
    }
  }, {
    key: "off",
    value: function off(event, func) {
      this.scroll.unsetEvents(event, func);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.scroll.destroy();
    }
  }]);

  return Native;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Smooth);



/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/waypoints/lib/noframework.waypoints.js":
/*!*************************************************************!*\
  !*** ./node_modules/waypoints/lib/noframework.waypoints.js ***!
  \*************************************************************/
/***/ (() => {

/*!
Waypoints - 4.0.1
Copyright © 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
(function() {
  'use strict'

  var keyCounter = 0
  var allWaypoints = {}

  /* http://imakewebthings.com/waypoints/api/waypoint */
  function Waypoint(options) {
    if (!options) {
      throw new Error('No options passed to Waypoint constructor')
    }
    if (!options.element) {
      throw new Error('No element option passed to Waypoint constructor')
    }
    if (!options.handler) {
      throw new Error('No handler option passed to Waypoint constructor')
    }

    this.key = 'waypoint-' + keyCounter
    this.options = Waypoint.Adapter.extend({}, Waypoint.defaults, options)
    this.element = this.options.element
    this.adapter = new Waypoint.Adapter(this.element)
    this.callback = options.handler
    this.axis = this.options.horizontal ? 'horizontal' : 'vertical'
    this.enabled = this.options.enabled
    this.triggerPoint = null
    this.group = Waypoint.Group.findOrCreate({
      name: this.options.group,
      axis: this.axis
    })
    this.context = Waypoint.Context.findOrCreateByElement(this.options.context)

    if (Waypoint.offsetAliases[this.options.offset]) {
      this.options.offset = Waypoint.offsetAliases[this.options.offset]
    }
    this.group.add(this)
    this.context.add(this)
    allWaypoints[this.key] = this
    keyCounter += 1
  }

  /* Private */
  Waypoint.prototype.queueTrigger = function(direction) {
    this.group.queueTrigger(this, direction)
  }

  /* Private */
  Waypoint.prototype.trigger = function(args) {
    if (!this.enabled) {
      return
    }
    if (this.callback) {
      this.callback.apply(this, args)
    }
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/destroy */
  Waypoint.prototype.destroy = function() {
    this.context.remove(this)
    this.group.remove(this)
    delete allWaypoints[this.key]
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/disable */
  Waypoint.prototype.disable = function() {
    this.enabled = false
    return this
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/enable */
  Waypoint.prototype.enable = function() {
    this.context.refresh()
    this.enabled = true
    return this
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/next */
  Waypoint.prototype.next = function() {
    return this.group.next(this)
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/previous */
  Waypoint.prototype.previous = function() {
    return this.group.previous(this)
  }

  /* Private */
  Waypoint.invokeAll = function(method) {
    var allWaypointsArray = []
    for (var waypointKey in allWaypoints) {
      allWaypointsArray.push(allWaypoints[waypointKey])
    }
    for (var i = 0, end = allWaypointsArray.length; i < end; i++) {
      allWaypointsArray[i][method]()
    }
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/destroy-all */
  Waypoint.destroyAll = function() {
    Waypoint.invokeAll('destroy')
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/disable-all */
  Waypoint.disableAll = function() {
    Waypoint.invokeAll('disable')
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/enable-all */
  Waypoint.enableAll = function() {
    Waypoint.Context.refreshAll()
    for (var waypointKey in allWaypoints) {
      allWaypoints[waypointKey].enabled = true
    }
    return this
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/refresh-all */
  Waypoint.refreshAll = function() {
    Waypoint.Context.refreshAll()
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/viewport-height */
  Waypoint.viewportHeight = function() {
    return window.innerHeight || document.documentElement.clientHeight
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/viewport-width */
  Waypoint.viewportWidth = function() {
    return document.documentElement.clientWidth
  }

  Waypoint.adapters = []

  Waypoint.defaults = {
    context: window,
    continuous: true,
    enabled: true,
    group: 'default',
    horizontal: false,
    offset: 0
  }

  Waypoint.offsetAliases = {
    'bottom-in-view': function() {
      return this.context.innerHeight() - this.adapter.outerHeight()
    },
    'right-in-view': function() {
      return this.context.innerWidth() - this.adapter.outerWidth()
    }
  }

  window.Waypoint = Waypoint
}())
;(function() {
  'use strict'

  function requestAnimationFrameShim(callback) {
    window.setTimeout(callback, 1000 / 60)
  }

  var keyCounter = 0
  var contexts = {}
  var Waypoint = window.Waypoint
  var oldWindowLoad = window.onload

  /* http://imakewebthings.com/waypoints/api/context */
  function Context(element) {
    this.element = element
    this.Adapter = Waypoint.Adapter
    this.adapter = new this.Adapter(element)
    this.key = 'waypoint-context-' + keyCounter
    this.didScroll = false
    this.didResize = false
    this.oldScroll = {
      x: this.adapter.scrollLeft(),
      y: this.adapter.scrollTop()
    }
    this.waypoints = {
      vertical: {},
      horizontal: {}
    }

    element.waypointContextKey = this.key
    contexts[element.waypointContextKey] = this
    keyCounter += 1
    if (!Waypoint.windowContext) {
      Waypoint.windowContext = true
      Waypoint.windowContext = new Context(window)
    }

    this.createThrottledScrollHandler()
    this.createThrottledResizeHandler()
  }

  /* Private */
  Context.prototype.add = function(waypoint) {
    var axis = waypoint.options.horizontal ? 'horizontal' : 'vertical'
    this.waypoints[axis][waypoint.key] = waypoint
    this.refresh()
  }

  /* Private */
  Context.prototype.checkEmpty = function() {
    var horizontalEmpty = this.Adapter.isEmptyObject(this.waypoints.horizontal)
    var verticalEmpty = this.Adapter.isEmptyObject(this.waypoints.vertical)
    var isWindow = this.element == this.element.window
    if (horizontalEmpty && verticalEmpty && !isWindow) {
      this.adapter.off('.waypoints')
      delete contexts[this.key]
    }
  }

  /* Private */
  Context.prototype.createThrottledResizeHandler = function() {
    var self = this

    function resizeHandler() {
      self.handleResize()
      self.didResize = false
    }

    this.adapter.on('resize.waypoints', function() {
      if (!self.didResize) {
        self.didResize = true
        Waypoint.requestAnimationFrame(resizeHandler)
      }
    })
  }

  /* Private */
  Context.prototype.createThrottledScrollHandler = function() {
    var self = this
    function scrollHandler() {
      self.handleScroll()
      self.didScroll = false
    }

    this.adapter.on('scroll.waypoints', function() {
      if (!self.didScroll || Waypoint.isTouch) {
        self.didScroll = true
        Waypoint.requestAnimationFrame(scrollHandler)
      }
    })
  }

  /* Private */
  Context.prototype.handleResize = function() {
    Waypoint.Context.refreshAll()
  }

  /* Private */
  Context.prototype.handleScroll = function() {
    var triggeredGroups = {}
    var axes = {
      horizontal: {
        newScroll: this.adapter.scrollLeft(),
        oldScroll: this.oldScroll.x,
        forward: 'right',
        backward: 'left'
      },
      vertical: {
        newScroll: this.adapter.scrollTop(),
        oldScroll: this.oldScroll.y,
        forward: 'down',
        backward: 'up'
      }
    }

    for (var axisKey in axes) {
      var axis = axes[axisKey]
      var isForward = axis.newScroll > axis.oldScroll
      var direction = isForward ? axis.forward : axis.backward

      for (var waypointKey in this.waypoints[axisKey]) {
        var waypoint = this.waypoints[axisKey][waypointKey]
        if (waypoint.triggerPoint === null) {
          continue
        }
        var wasBeforeTriggerPoint = axis.oldScroll < waypoint.triggerPoint
        var nowAfterTriggerPoint = axis.newScroll >= waypoint.triggerPoint
        var crossedForward = wasBeforeTriggerPoint && nowAfterTriggerPoint
        var crossedBackward = !wasBeforeTriggerPoint && !nowAfterTriggerPoint
        if (crossedForward || crossedBackward) {
          waypoint.queueTrigger(direction)
          triggeredGroups[waypoint.group.id] = waypoint.group
        }
      }
    }

    for (var groupKey in triggeredGroups) {
      triggeredGroups[groupKey].flushTriggers()
    }

    this.oldScroll = {
      x: axes.horizontal.newScroll,
      y: axes.vertical.newScroll
    }
  }

  /* Private */
  Context.prototype.innerHeight = function() {
    /*eslint-disable eqeqeq */
    if (this.element == this.element.window) {
      return Waypoint.viewportHeight()
    }
    /*eslint-enable eqeqeq */
    return this.adapter.innerHeight()
  }

  /* Private */
  Context.prototype.remove = function(waypoint) {
    delete this.waypoints[waypoint.axis][waypoint.key]
    this.checkEmpty()
  }

  /* Private */
  Context.prototype.innerWidth = function() {
    /*eslint-disable eqeqeq */
    if (this.element == this.element.window) {
      return Waypoint.viewportWidth()
    }
    /*eslint-enable eqeqeq */
    return this.adapter.innerWidth()
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/context-destroy */
  Context.prototype.destroy = function() {
    var allWaypoints = []
    for (var axis in this.waypoints) {
      for (var waypointKey in this.waypoints[axis]) {
        allWaypoints.push(this.waypoints[axis][waypointKey])
      }
    }
    for (var i = 0, end = allWaypoints.length; i < end; i++) {
      allWaypoints[i].destroy()
    }
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/context-refresh */
  Context.prototype.refresh = function() {
    /*eslint-disable eqeqeq */
    var isWindow = this.element == this.element.window
    /*eslint-enable eqeqeq */
    var contextOffset = isWindow ? undefined : this.adapter.offset()
    var triggeredGroups = {}
    var axes

    this.handleScroll()
    axes = {
      horizontal: {
        contextOffset: isWindow ? 0 : contextOffset.left,
        contextScroll: isWindow ? 0 : this.oldScroll.x,
        contextDimension: this.innerWidth(),
        oldScroll: this.oldScroll.x,
        forward: 'right',
        backward: 'left',
        offsetProp: 'left'
      },
      vertical: {
        contextOffset: isWindow ? 0 : contextOffset.top,
        contextScroll: isWindow ? 0 : this.oldScroll.y,
        contextDimension: this.innerHeight(),
        oldScroll: this.oldScroll.y,
        forward: 'down',
        backward: 'up',
        offsetProp: 'top'
      }
    }

    for (var axisKey in axes) {
      var axis = axes[axisKey]
      for (var waypointKey in this.waypoints[axisKey]) {
        var waypoint = this.waypoints[axisKey][waypointKey]
        var adjustment = waypoint.options.offset
        var oldTriggerPoint = waypoint.triggerPoint
        var elementOffset = 0
        var freshWaypoint = oldTriggerPoint == null
        var contextModifier, wasBeforeScroll, nowAfterScroll
        var triggeredBackward, triggeredForward

        if (waypoint.element !== waypoint.element.window) {
          elementOffset = waypoint.adapter.offset()[axis.offsetProp]
        }

        if (typeof adjustment === 'function') {
          adjustment = adjustment.apply(waypoint)
        }
        else if (typeof adjustment === 'string') {
          adjustment = parseFloat(adjustment)
          if (waypoint.options.offset.indexOf('%') > - 1) {
            adjustment = Math.ceil(axis.contextDimension * adjustment / 100)
          }
        }

        contextModifier = axis.contextScroll - axis.contextOffset
        waypoint.triggerPoint = Math.floor(elementOffset + contextModifier - adjustment)
        wasBeforeScroll = oldTriggerPoint < axis.oldScroll
        nowAfterScroll = waypoint.triggerPoint >= axis.oldScroll
        triggeredBackward = wasBeforeScroll && nowAfterScroll
        triggeredForward = !wasBeforeScroll && !nowAfterScroll

        if (!freshWaypoint && triggeredBackward) {
          waypoint.queueTrigger(axis.backward)
          triggeredGroups[waypoint.group.id] = waypoint.group
        }
        else if (!freshWaypoint && triggeredForward) {
          waypoint.queueTrigger(axis.forward)
          triggeredGroups[waypoint.group.id] = waypoint.group
        }
        else if (freshWaypoint && axis.oldScroll >= waypoint.triggerPoint) {
          waypoint.queueTrigger(axis.forward)
          triggeredGroups[waypoint.group.id] = waypoint.group
        }
      }
    }

    Waypoint.requestAnimationFrame(function() {
      for (var groupKey in triggeredGroups) {
        triggeredGroups[groupKey].flushTriggers()
      }
    })

    return this
  }

  /* Private */
  Context.findOrCreateByElement = function(element) {
    return Context.findByElement(element) || new Context(element)
  }

  /* Private */
  Context.refreshAll = function() {
    for (var contextId in contexts) {
      contexts[contextId].refresh()
    }
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/context-find-by-element */
  Context.findByElement = function(element) {
    return contexts[element.waypointContextKey]
  }

  window.onload = function() {
    if (oldWindowLoad) {
      oldWindowLoad()
    }
    Context.refreshAll()
  }


  Waypoint.requestAnimationFrame = function(callback) {
    var requestFn = window.requestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      requestAnimationFrameShim
    requestFn.call(window, callback)
  }
  Waypoint.Context = Context
}())
;(function() {
  'use strict'

  function byTriggerPoint(a, b) {
    return a.triggerPoint - b.triggerPoint
  }

  function byReverseTriggerPoint(a, b) {
    return b.triggerPoint - a.triggerPoint
  }

  var groups = {
    vertical: {},
    horizontal: {}
  }
  var Waypoint = window.Waypoint

  /* http://imakewebthings.com/waypoints/api/group */
  function Group(options) {
    this.name = options.name
    this.axis = options.axis
    this.id = this.name + '-' + this.axis
    this.waypoints = []
    this.clearTriggerQueues()
    groups[this.axis][this.name] = this
  }

  /* Private */
  Group.prototype.add = function(waypoint) {
    this.waypoints.push(waypoint)
  }

  /* Private */
  Group.prototype.clearTriggerQueues = function() {
    this.triggerQueues = {
      up: [],
      down: [],
      left: [],
      right: []
    }
  }

  /* Private */
  Group.prototype.flushTriggers = function() {
    for (var direction in this.triggerQueues) {
      var waypoints = this.triggerQueues[direction]
      var reverse = direction === 'up' || direction === 'left'
      waypoints.sort(reverse ? byReverseTriggerPoint : byTriggerPoint)
      for (var i = 0, end = waypoints.length; i < end; i += 1) {
        var waypoint = waypoints[i]
        if (waypoint.options.continuous || i === waypoints.length - 1) {
          waypoint.trigger([direction])
        }
      }
    }
    this.clearTriggerQueues()
  }

  /* Private */
  Group.prototype.next = function(waypoint) {
    this.waypoints.sort(byTriggerPoint)
    var index = Waypoint.Adapter.inArray(waypoint, this.waypoints)
    var isLast = index === this.waypoints.length - 1
    return isLast ? null : this.waypoints[index + 1]
  }

  /* Private */
  Group.prototype.previous = function(waypoint) {
    this.waypoints.sort(byTriggerPoint)
    var index = Waypoint.Adapter.inArray(waypoint, this.waypoints)
    return index ? this.waypoints[index - 1] : null
  }

  /* Private */
  Group.prototype.queueTrigger = function(waypoint, direction) {
    this.triggerQueues[direction].push(waypoint)
  }

  /* Private */
  Group.prototype.remove = function(waypoint) {
    var index = Waypoint.Adapter.inArray(waypoint, this.waypoints)
    if (index > -1) {
      this.waypoints.splice(index, 1)
    }
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/first */
  Group.prototype.first = function() {
    return this.waypoints[0]
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/last */
  Group.prototype.last = function() {
    return this.waypoints[this.waypoints.length - 1]
  }

  /* Private */
  Group.findOrCreate = function(options) {
    return groups[options.axis][options.name] || new Group(options)
  }

  Waypoint.Group = Group
}())
;(function() {
  'use strict'

  var Waypoint = window.Waypoint

  function isWindow(element) {
    return element === element.window
  }

  function getWindow(element) {
    if (isWindow(element)) {
      return element
    }
    return element.defaultView
  }

  function NoFrameworkAdapter(element) {
    this.element = element
    this.handlers = {}
  }

  NoFrameworkAdapter.prototype.innerHeight = function() {
    var isWin = isWindow(this.element)
    return isWin ? this.element.innerHeight : this.element.clientHeight
  }

  NoFrameworkAdapter.prototype.innerWidth = function() {
    var isWin = isWindow(this.element)
    return isWin ? this.element.innerWidth : this.element.clientWidth
  }

  NoFrameworkAdapter.prototype.off = function(event, handler) {
    function removeListeners(element, listeners, handler) {
      for (var i = 0, end = listeners.length - 1; i < end; i++) {
        var listener = listeners[i]
        if (!handler || handler === listener) {
          element.removeEventListener(listener)
        }
      }
    }

    var eventParts = event.split('.')
    var eventType = eventParts[0]
    var namespace = eventParts[1]
    var element = this.element

    if (namespace && this.handlers[namespace] && eventType) {
      removeListeners(element, this.handlers[namespace][eventType], handler)
      this.handlers[namespace][eventType] = []
    }
    else if (eventType) {
      for (var ns in this.handlers) {
        removeListeners(element, this.handlers[ns][eventType] || [], handler)
        this.handlers[ns][eventType] = []
      }
    }
    else if (namespace && this.handlers[namespace]) {
      for (var type in this.handlers[namespace]) {
        removeListeners(element, this.handlers[namespace][type], handler)
      }
      this.handlers[namespace] = {}
    }
  }

  /* Adapted from jQuery 1.x offset() */
  NoFrameworkAdapter.prototype.offset = function() {
    if (!this.element.ownerDocument) {
      return null
    }

    var documentElement = this.element.ownerDocument.documentElement
    var win = getWindow(this.element.ownerDocument)
    var rect = {
      top: 0,
      left: 0
    }

    if (this.element.getBoundingClientRect) {
      rect = this.element.getBoundingClientRect()
    }

    return {
      top: rect.top + win.pageYOffset - documentElement.clientTop,
      left: rect.left + win.pageXOffset - documentElement.clientLeft
    }
  }

  NoFrameworkAdapter.prototype.on = function(event, handler) {
    var eventParts = event.split('.')
    var eventType = eventParts[0]
    var namespace = eventParts[1] || '__default'
    var nsHandlers = this.handlers[namespace] = this.handlers[namespace] || {}
    var nsTypeList = nsHandlers[eventType] = nsHandlers[eventType] || []

    nsTypeList.push(handler)
    this.element.addEventListener(eventType, handler)
  }

  NoFrameworkAdapter.prototype.outerHeight = function(includeMargin) {
    var height = this.innerHeight()
    var computedStyle

    if (includeMargin && !isWindow(this.element)) {
      computedStyle = window.getComputedStyle(this.element)
      height += parseInt(computedStyle.marginTop, 10)
      height += parseInt(computedStyle.marginBottom, 10)
    }

    return height
  }

  NoFrameworkAdapter.prototype.outerWidth = function(includeMargin) {
    var width = this.innerWidth()
    var computedStyle

    if (includeMargin && !isWindow(this.element)) {
      computedStyle = window.getComputedStyle(this.element)
      width += parseInt(computedStyle.marginLeft, 10)
      width += parseInt(computedStyle.marginRight, 10)
    }

    return width
  }

  NoFrameworkAdapter.prototype.scrollLeft = function() {
    var win = getWindow(this.element)
    return win ? win.pageXOffset : this.element.scrollLeft
  }

  NoFrameworkAdapter.prototype.scrollTop = function() {
    var win = getWindow(this.element)
    return win ? win.pageYOffset : this.element.scrollTop
  }

  NoFrameworkAdapter.extend = function() {
    var args = Array.prototype.slice.call(arguments)

    function merge(target, obj) {
      if (typeof target === 'object' && typeof obj === 'object') {
        for (var key in obj) {
          if (obj.hasOwnProperty(key)) {
            target[key] = obj[key]
          }
        }
      }

      return target
    }

    for (var i = 1, end = args.length; i < end; i++) {
      merge(args[0], args[i])
    }
    return args[0]
  }

  NoFrameworkAdapter.inArray = function(element, array, i) {
    return array == null ? -1 : array.indexOf(element, i)
  }

  NoFrameworkAdapter.isEmptyObject = function(obj) {
    /* eslint no-unused-vars: 0 */
    for (var name in obj) {
      return false
    }
    return true
  }

  Waypoint.adapters.push({
    name: 'noframework',
    Adapter: NoFrameworkAdapter
  })
  Waypoint.Adapter = NoFrameworkAdapter
}())
;

/***/ }),

/***/ "./src/js/components/animations.js":
/*!*****************************************!*\
  !*** ./src/js/components/animations.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ headlines
/* harmony export */ });
/* harmony import */ var locomotive_scroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! locomotive-scroll */ "./node_modules/locomotive-scroll/dist/locomotive-scroll.esm.js");
/* harmony import */ var waypoints_lib_noframework_waypoints_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! waypoints/lib/noframework.waypoints.js */ "./node_modules/waypoints/lib/noframework.waypoints.js");
/* harmony import */ var waypoints_lib_noframework_waypoints_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(waypoints_lib_noframework_waypoints_js__WEBPACK_IMPORTED_MODULE_1__);




function headlines() {
	// Stuff here
	console.log('Running animations');

	Splitting();

	var mightyBlocks = document.querySelectorAll('.block');
	for (var i = 0; i < mightyBlocks.length; i++) {
		var mightyBlock = mightyBlocks[i];
		mightyBlock.classList.add('ready');
		new Waypoint({
			element: mightyBlock,
			handler: function () {
				this.element.classList.add('animate');
			},
			offset: '50%',
		});
	}

	// const scroll = new LocomotiveScroll();

	// let DOM = {
	// 	content: {
	// 		home: {
	// 			section: document.querySelector('.block.hero.style-1'),
	// 			get label() {
	// 				return this.section.querySelector('.label');
	// 			},
	// 			get chars() {
	// 				return this.section.querySelectorAll(
	// 					'.line .word > .char, .whitespace'
	// 				);
	// 			},
	// 		},
	// 	},
	// };

	// const timelineSettings = {
	// 	staggerValue: 0.01,
	// 	charsDuration: 0.5,
	// };
	// const timeline = gsap
	// 	.timeline({ paused: true })
	// 	// Start values for the home section elements that will animate in
	// 	.set(DOM.content.home.label, {
	// 		x: '-100%',
	// 		opacity: '0',
	// 	})
	// 	.set(DOM.content.home.chars, {
	// 		y: '100%',
	// 	})
	// 	// Stagger the animation of the home section chars
	// 	.staggerTo(
	// 		DOM.content.home.label,
	// 		1.5,
	// 		{
	// 			ease: 'Power3.easeIn',
	// 			x: '0%',
	// 			opacity: '1',
	// 		},
	// 		0
	// 	)
	// 	.staggerTo(
	// 		DOM.content.home.chars,
	// 		timelineSettings.charsDuration,
	// 		{
	// 			ease: 'Power3.easeIn',
	// 			y: '0%',
	// 		},
	// 		timelineSettings.staggerValue
	// 	);

	// timeline.play();
}


/***/ }),

/***/ "./src/js/components/portfolio.js":
/*!****************************************!*\
  !*** ./src/js/components/portfolio.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ portfolio
/* harmony export */ });
function portfolio() {
	// Stuff here
	console.log('Running portfolio');
	var portfolioBackground = document.querySelector(
		'#portfolio-background'
	);

	var portfolioItems = document.querySelectorAll('.listing .item');

	portfolioItems.forEach((element) => {
		element.addEventListener('mouseover', function (event) {
			// console.log(event.target.closest('.item');

			var newBG = element.querySelector('img');
			console.log('Mouse over event');
			console.log(newBG.getAttribute('src'));

			// Set the background color to a light gray
			portfolioBackground.style.backgroundImage =
				'url(' + newBG.getAttribute('src') + ')';
		});
	});
}


/***/ }),

/***/ "./src/js/components/vue.js":
/*!**********************************!*\
  !*** ./src/js/components/vue.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ vue
/* harmony export */ });
function vue() {
	var app = new Vue({
		el: "#app",
		data: {
			message: "Hello Vue!",
		},
	});
}


/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _components_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/vue */ "./src/js/components/vue.js");
/* harmony import */ var _components_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/animations */ "./src/js/components/animations.js");
/* harmony import */ var _components_portfolio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/portfolio */ "./src/js/components/portfolio.js");






document.addEventListener('DOMContentLoaded', function () {
	function doStuff(callback) {
		// do all app scripts here...
		callback();
	}

	doStuff(function () {
		document.body.className = 'visible';
	});

	(0,_components_vue__WEBPACK_IMPORTED_MODULE_1__.default)();
	(0,_components_animations__WEBPACK_IMPORTED_MODULE_2__.default)();
	(0,_components_portfolio__WEBPACK_IMPORTED_MODULE_3__.default)();
});


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/js/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taWdodGlseS13b3JkcHJlc3MtYnVpbGQvLi9ub2RlX21vZHVsZXMvbG9jb21vdGl2ZS1zY3JvbGwvZGlzdC9sb2NvbW90aXZlLXNjcm9sbC5lc20uanMiLCJ3ZWJwYWNrOi8vbWlnaHRpbHktd29yZHByZXNzLWJ1aWxkLy4vc3JjL3N0eWxlcy9tYWluLnNjc3M/MmZmNCIsIndlYnBhY2s6Ly9taWdodGlseS13b3JkcHJlc3MtYnVpbGQvLi9ub2RlX21vZHVsZXMvd2F5cG9pbnRzL2xpYi9ub2ZyYW1ld29yay53YXlwb2ludHMuanMiLCJ3ZWJwYWNrOi8vbWlnaHRpbHktd29yZHByZXNzLWJ1aWxkLy4vc3JjL2pzL2NvbXBvbmVudHMvYW5pbWF0aW9ucy5qcyIsIndlYnBhY2s6Ly9taWdodGlseS13b3JkcHJlc3MtYnVpbGQvLi9zcmMvanMvY29tcG9uZW50cy9wb3J0Zm9saW8uanMiLCJ3ZWJwYWNrOi8vbWlnaHRpbHktd29yZHByZXNzLWJ1aWxkLy4vc3JjL2pzL2NvbXBvbmVudHMvdnVlLmpzIiwid2VicGFjazovL21pZ2h0aWx5LXdvcmRwcmVzcy1idWlsZC8uL3NyYy9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9taWdodGlseS13b3JkcHJlc3MtYnVpbGQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbWlnaHRpbHktd29yZHByZXNzLWJ1aWxkL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL21pZ2h0aWx5LXdvcmRwcmVzcy1idWlsZC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbWlnaHRpbHktd29yZHByZXNzLWJ1aWxkL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vbWlnaHRpbHktd29yZHByZXNzLWJ1aWxkL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbWlnaHRpbHktd29yZHByZXNzLWJ1aWxkL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbWlnaHRpbHktd29yZHByZXNzLWJ1aWxkL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLGtCQUFrQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJFQUEyRTtBQUMzRTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkNBQTZDLCtCQUErQjtBQUM1RTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsd0NBQXdDLFNBQVM7O0FBRWpEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxFQUFFO0FBQ1Q7QUFDQSxVQUFVOztBQUVWO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQ0FBaUM7O0FBRWpDO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLENBQUM7O0FBRUQsc0hBQXNILHFCQUFNLG1CQUFtQixxQkFBTTs7QUFFcko7QUFDQSxrQkFBa0IsWUFBWSxFQUFFO0FBQ2hDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixpQkFBaUI7QUFDakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGNBQWM7QUFDN0IsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsS0FBSztBQUNwQixlQUFlLE9BQU87QUFDdEIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxLQUFLO0FBQ3BCLGVBQWUsT0FBTztBQUN0QixpQkFBaUI7QUFDakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxLQUFLO0FBQ3BCLGVBQWUsT0FBTztBQUN0QixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLEtBQUs7QUFDcEIsaUJBQWlCLEtBQUs7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFlBQVk7QUFDM0IsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNCQUFzQjtBQUN0Qjs7QUFFQSxDQUFDO0FBQ0QsQ0FBQztBQUNEOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVCQUF1QixtQkFBbUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLG1DQUFtQztBQUMzRCx5QkFBeUIsT0FBTztBQUNoQyxnQkFBZ0I7QUFDaEI7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlEOztBQUVqRCxpRUFBaUU7O0FBRWpFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNULGtEQUFrRDs7QUFFbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU8scUNBQXFDO0FBQzVDO0FBQ0E7QUFDQSxPQUFPOzs7QUFHUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdCQUFnQixzQkFBc0I7QUFDdEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLG9CQUFvQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0NBQWtDOztBQUVsQztBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7O0FBRUEsV0FBVyxTQUFTO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7O0FBRUE7QUFDQSx3Q0FBd0MsU0FBUztBQUNqRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsZ0NBQWdDO0FBQzdFO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsZ0NBQWdDO0FBQzdFO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsZ0NBQWdDO0FBQzdFO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLEdBQUc7O0FBRUgsQ0FBQztBQUNELENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixzQkFBc0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7QUFJQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFZLE9BQU87QUFDbkIsWUFBWSxNQUFNO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjs7QUFFbkIsUUFBUSwyQkFBMkI7QUFDbkM7QUFDQSxHQUFHOzs7QUFHSDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsdUJBQXVCLG9DQUFvQztBQUMzRCx1QkFBdUIsOEJBQThCO0FBQ3JELHVCQUF1QixrQkFBa0I7O0FBRXpDO0FBQ0Esb0NBQW9DLDhEQUE4RDs7QUFFbEc7QUFDQSxrQ0FBa0Msc0VBQXNFOztBQUV4RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0IsdUJBQXVCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsVUFBVSxtRUFBbUU7QUFDN0U7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXO0FBQ1g7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx1QkFBdUIsa0JBQWtCO0FBQ3pDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxzQ0FBc0M7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxnREFBZ0Q7O0FBRWhEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5Qzs7QUFFekM7QUFDQTtBQUNBLGFBQWE7QUFDYixXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMkJBQTJCOztBQUUzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNkRBQTZEOztBQUU3RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTzs7O0FBR1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtEQUErRDs7QUFFL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQ0FBaUM7O0FBRWpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLDJCQUEyQixtQkFBbUI7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsMkJBQTJCLG1CQUFtQjtBQUM5QztBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTyxFQUFFLEtBQUs7QUFDZDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLG1DQUFtQztBQUMzRCx5QkFBeUIsT0FBTztBQUNoQyxnQkFBZ0I7QUFDaEI7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaURBQWlEOztBQUVqRCw4Q0FBOEM7O0FBRTlDLDREQUE0RDs7QUFFNUQsMkRBQTJEOztBQUUzRCxpRUFBaUU7O0FBRWpFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNULGtEQUFrRDs7QUFFbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU8scUNBQXFDO0FBQzVDO0FBQ0E7QUFDQSxPQUFPOzs7QUFHUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7O0FBR1Q7QUFDQTtBQUNBLHdDQUF3Qzs7QUFFeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLFNBQVM7QUFDVDs7QUFFQTtBQUNBLGdGQUFnRjtBQUNoRixTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7OztBQUdUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBOzs7QUFHQTtBQUNBLGdHQUFnRzs7QUFFaEc7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsUUFBUTs7O0FBR1Isa0NBQWtDOztBQUVsQywyQkFBMkI7O0FBRTNCLDRCQUE0QjtBQUM1Qjs7QUFFQTs7QUFFQTtBQUNBLGdEQUFnRDs7QUFFaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0Esc0RBQXNELG9CQUFvQjtBQUMxRTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsMkJBQTJCOztBQUUzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQ7O0FBRWpEO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSwyQkFBMkI7O0FBRTNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaURBQWlEOztBQUVqRDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EsQ0FBQzs7QUFFRCxpRUFBZSxNQUFNLEVBQUM7QUFDSTs7Ozs7Ozs7Ozs7OztBQ3puRzFCOzs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCxTQUFTO0FBQzVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQztBQUNELENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLFNBQVM7QUFDdkQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxDQUFDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsU0FBUztBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDO0FBQ0QsQ0FBQztBQUNEOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlEQUFpRCxTQUFTO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHNDQUFzQyxTQUFTO0FBQy9DO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxDQUFDO0FBQ0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcnZCd0I7QUFDeUI7QUFDRDs7QUFFakM7QUFDZjtBQUNBOztBQUVBOztBQUVBO0FBQ0EsZ0JBQWdCLHlCQUF5QjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSLE9BQU87QUFDUCxNQUFNO0FBQ047O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixlQUFlO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzdFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsRUFBRTtBQUNGOzs7Ozs7Ozs7Ozs7Ozs7O0FDdEJlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsRUFBRTtBQUNGOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1A2Qjs7QUFFTTtBQUNhO0FBQ0Q7O0FBRS9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7O0FBRUYsQ0FBQyx3REFBRztBQUNKLENBQUMsK0RBQVM7QUFDVixDQUFDLDhEQUFTO0FBQ1YsQ0FBQzs7Ozs7OztVQ25CRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0NyQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGdDQUFnQyxZQUFZO1dBQzVDO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFQUFFO1dBQ0Y7V0FDQTtXQUNBLENBQUMsSTs7Ozs7V0NQRCxzRjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7OztVQ05BO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBsb2NvbW90aXZlLXNjcm9sbCB2NC4wLjYgfCBNSVQgTGljZW5zZSB8IGh0dHBzOi8vZ2l0aHViLmNvbS9sb2NvbW90aXZlbXRsL2xvY29tb3RpdmUtc2Nyb2xsICovXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHtcbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpO1xuXG4gIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7XG4gICAgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkge1xuICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7XG4gICAgfSk7XG4gICAga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpO1xuICB9XG5cbiAgcmV0dXJuIGtleXM7XG59XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQyKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9O1xuXG4gICAgaWYgKGkgJSAyKSB7XG4gICAgICBvd25LZXlzKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH07XG4gIHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7XG59XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfTtcblxuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkge1xuICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7XG4gIGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7XG4gIGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7XG5cbiAgdHJ5IHtcbiAgICBEYXRlLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKFJlZmxlY3QuY29uc3RydWN0KERhdGUsIFtdLCBmdW5jdGlvbiAoKSB7fSkpO1xuICAgIHJldHVybiB0cnVlO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGY7XG59XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtcbiAgaWYgKGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7XG4gICAgcmV0dXJuIGNhbGw7XG4gIH1cblxuICByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTtcbn1cblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHtcbiAgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkge1xuICAgIHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSxcbiAgICAgICAgcmVzdWx0O1xuXG4gICAgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHtcbiAgICAgIHZhciBOZXdUYXJnZXQgPSBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7XG5cbiAgICAgIHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIF9zdXBlclByb3BCYXNlKG9iamVjdCwgcHJvcGVydHkpIHtcbiAgd2hpbGUgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSkpIHtcbiAgICBvYmplY3QgPSBfZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTtcbiAgICBpZiAob2JqZWN0ID09PSBudWxsKSBicmVhaztcbiAgfVxuXG4gIHJldHVybiBvYmplY3Q7XG59XG5cbmZ1bmN0aW9uIF9nZXQodGFyZ2V0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpIHtcbiAgaWYgKHR5cGVvZiBSZWZsZWN0ICE9PSBcInVuZGVmaW5lZFwiICYmIFJlZmxlY3QuZ2V0KSB7XG4gICAgX2dldCA9IFJlZmxlY3QuZ2V0O1xuICB9IGVsc2Uge1xuICAgIF9nZXQgPSBmdW5jdGlvbiBfZ2V0KHRhcmdldCwgcHJvcGVydHksIHJlY2VpdmVyKSB7XG4gICAgICB2YXIgYmFzZSA9IF9zdXBlclByb3BCYXNlKHRhcmdldCwgcHJvcGVydHkpO1xuXG4gICAgICBpZiAoIWJhc2UpIHJldHVybjtcbiAgICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihiYXNlLCBwcm9wZXJ0eSk7XG5cbiAgICAgIGlmIChkZXNjLmdldCkge1xuICAgICAgICByZXR1cm4gZGVzYy5nZXQuY2FsbChyZWNlaXZlcik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkZXNjLnZhbHVlO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX2dldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlciB8fCB0YXJnZXQpO1xufVxuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHtcbiAgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTtcbn1cblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gX2FycmF5V2l0aG91dEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF9ub25JdGVyYWJsZVNwcmVhZCgpO1xufVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShhcnIpO1xufVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7XG59XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikge1xuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGl0ZXIpKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTtcbn1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkge1xuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjtcbiAgdmFyIF9hcnIgPSBbXTtcbiAgdmFyIF9uID0gdHJ1ZTtcbiAgdmFyIF9kID0gZmFsc2U7XG4gIHZhciBfZSA9IHVuZGVmaW5lZDtcblxuICB0cnkge1xuICAgIGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHtcbiAgICAgIF9hcnIucHVzaChfcy52YWx1ZSk7XG5cbiAgICAgIGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhaztcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9kID0gdHJ1ZTtcbiAgICBfZSA9IGVycjtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoX2QpIHRocm93IF9lO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBfYXJyO1xufVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgYXJyMltpXSA9IGFycltpXTtcblxuICByZXR1cm4gYXJyMjtcbn1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cblxudmFyIGRlZmF1bHRzID0ge1xuICBlbDogZG9jdW1lbnQsXG4gIG5hbWU6ICdzY3JvbGwnLFxuICBvZmZzZXQ6IFswLCAwXSxcbiAgcmVwZWF0OiBmYWxzZSxcbiAgc21vb3RoOiBmYWxzZSxcbiAgZGlyZWN0aW9uOiAndmVydGljYWwnLFxuICBnZXN0dXJlRGlyZWN0aW9uOiAndmVydGljYWwnLFxuICByZWxvYWRPbkNvbnRleHRDaGFuZ2U6IGZhbHNlLFxuICBsZXJwOiAwLjEsXG4gIFwiY2xhc3NcIjogJ2lzLWludmlldycsXG4gIHNjcm9sbGJhckNvbnRhaW5lcjogZmFsc2UsXG4gIHNjcm9sbGJhckNsYXNzOiAnYy1zY3JvbGxiYXInLFxuICBzY3JvbGxpbmdDbGFzczogJ2hhcy1zY3JvbGwtc2Nyb2xsaW5nJyxcbiAgZHJhZ2dpbmdDbGFzczogJ2hhcy1zY3JvbGwtZHJhZ2dpbmcnLFxuICBzbW9vdGhDbGFzczogJ2hhcy1zY3JvbGwtc21vb3RoJyxcbiAgaW5pdENsYXNzOiAnaGFzLXNjcm9sbC1pbml0JyxcbiAgZ2V0U3BlZWQ6IGZhbHNlLFxuICBnZXREaXJlY3Rpb246IGZhbHNlLFxuICBzY3JvbGxGcm9tQW55d2hlcmU6IGZhbHNlLFxuICBtdWx0aXBsaWVyOiAxLFxuICBmaXJlZm94TXVsdGlwbGllcjogNTAsXG4gIHRvdWNoTXVsdGlwbGllcjogMixcbiAgcmVzZXROYXRpdmVTY3JvbGw6IHRydWUsXG4gIHRhYmxldDoge1xuICAgIHNtb290aDogZmFsc2UsXG4gICAgZGlyZWN0aW9uOiAndmVydGljYWwnLFxuICAgIGdlc3R1cmVEaXJlY3Rpb246ICd2ZXJ0aWNhbCcsXG4gICAgYnJlYWtwb2ludDogMTAyNFxuICB9LFxuICBzbWFydHBob25lOiB7XG4gICAgc21vb3RoOiBmYWxzZSxcbiAgICBkaXJlY3Rpb246ICd2ZXJ0aWNhbCcsXG4gICAgZ2VzdHVyZURpcmVjdGlvbjogJ3ZlcnRpY2FsJ1xuICB9XG59O1xuXG52YXIgX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBfZGVmYXVsdCgpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgX2RlZmF1bHQpO1xuXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkZWZhdWx0cywgb3B0aW9ucyk7XG4gICAgdGhpcy5zbWFydHBob25lID0gZGVmYXVsdHMuc21hcnRwaG9uZTtcbiAgICBpZiAob3B0aW9ucy5zbWFydHBob25lKSBPYmplY3QuYXNzaWduKHRoaXMuc21hcnRwaG9uZSwgb3B0aW9ucy5zbWFydHBob25lKTtcbiAgICB0aGlzLnRhYmxldCA9IGRlZmF1bHRzLnRhYmxldDtcbiAgICBpZiAob3B0aW9ucy50YWJsZXQpIE9iamVjdC5hc3NpZ24odGhpcy50YWJsZXQsIG9wdGlvbnMudGFibGV0KTtcbiAgICB0aGlzLm5hbWVzcGFjZSA9ICdsb2NvbW90aXZlJztcbiAgICB0aGlzLmh0bWwgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgdGhpcy53aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgdGhpcy53aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIHRoaXMud2luZG93TWlkZGxlID0ge1xuICAgICAgeDogdGhpcy53aW5kb3dXaWR0aCAvIDIsXG4gICAgICB5OiB0aGlzLndpbmRvd0hlaWdodCAvIDJcbiAgICB9O1xuICAgIHRoaXMuZWxzID0ge307XG4gICAgdGhpcy5jdXJyZW50RWxlbWVudHMgPSB7fTtcbiAgICB0aGlzLmxpc3RlbmVycyA9IHt9O1xuICAgIHRoaXMuaGFzU2Nyb2xsVGlja2luZyA9IGZhbHNlO1xuICAgIHRoaXMuaGFzQ2FsbEV2ZW50U2V0ID0gZmFsc2U7XG4gICAgdGhpcy5jaGVja1Njcm9sbCA9IHRoaXMuY2hlY2tTY3JvbGwuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNoZWNrUmVzaXplID0gdGhpcy5jaGVja1Jlc2l6ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2hlY2tFdmVudCA9IHRoaXMuY2hlY2tFdmVudC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaW5zdGFuY2UgPSB7XG4gICAgICBzY3JvbGw6IHtcbiAgICAgICAgeDogMCxcbiAgICAgICAgeTogMFxuICAgICAgfSxcbiAgICAgIGxpbWl0OiB7XG4gICAgICAgIHg6IHRoaXMuaHRtbC5vZmZzZXRIZWlnaHQsXG4gICAgICAgIHk6IHRoaXMuaHRtbC5vZmZzZXRIZWlnaHRcbiAgICAgIH0sXG4gICAgICBjdXJyZW50RWxlbWVudHM6IHRoaXMuY3VycmVudEVsZW1lbnRzXG4gICAgfTtcblxuICAgIGlmICh0aGlzLmlzTW9iaWxlKSB7XG4gICAgICBpZiAodGhpcy5pc1RhYmxldCkge1xuICAgICAgICB0aGlzLmNvbnRleHQgPSAndGFibGV0JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY29udGV4dCA9ICdzbWFydHBob25lJztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb250ZXh0ID0gJ2Rlc2t0b3AnO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmlzTW9iaWxlKSB0aGlzLmRpcmVjdGlvbiA9IHRoaXNbdGhpcy5jb250ZXh0XS5kaXJlY3Rpb247XG5cbiAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgdGhpcy5kaXJlY3Rpb25BeGlzID0gJ3gnO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRpcmVjdGlvbkF4aXMgPSAneSc7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZ2V0RGlyZWN0aW9uKSB7XG4gICAgICB0aGlzLmluc3RhbmNlLmRpcmVjdGlvbiA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZ2V0RGlyZWN0aW9uKSB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNwZWVkID0gMDtcbiAgICB9XG5cbiAgICB0aGlzLmh0bWwuY2xhc3NMaXN0LmFkZCh0aGlzLmluaXRDbGFzcyk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuY2hlY2tSZXNpemUsIGZhbHNlKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhfZGVmYXVsdCwgW3tcbiAgICBrZXk6IFwiaW5pdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgdGhpcy5pbml0RXZlbnRzKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNoZWNrU2Nyb2xsXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNoZWNrU2Nyb2xsKCkge1xuICAgICAgdGhpcy5kaXNwYXRjaFNjcm9sbCgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjaGVja1Jlc2l6ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjaGVja1Jlc2l6ZSgpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIGlmICghdGhpcy5yZXNpemVUaWNrKSB7XG4gICAgICAgIHRoaXMucmVzaXplVGljayA9IHRydWU7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgX3RoaXMucmVzaXplKCk7XG5cbiAgICAgICAgICBfdGhpcy5yZXNpemVUaWNrID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZXNpemVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVzaXplKCkge31cbiAgfSwge1xuICAgIGtleTogXCJjaGVja0NvbnRleHRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2hlY2tDb250ZXh0KCkge1xuICAgICAgaWYgKCF0aGlzLnJlbG9hZE9uQ29udGV4dENoYW5nZSkgcmV0dXJuO1xuICAgICAgdGhpcy5pc01vYmlsZSA9IC9BbmRyb2lkfGlQaG9uZXxpUGFkfGlQb2R8QmxhY2tCZXJyeXxJRU1vYmlsZXxPcGVyYSBNaW5pL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSB8fCBuYXZpZ2F0b3IucGxhdGZvcm0gPT09ICdNYWNJbnRlbCcgJiYgbmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzID4gMSB8fCB0aGlzLndpbmRvd1dpZHRoIDwgdGhpcy50YWJsZXQuYnJlYWtwb2ludDtcbiAgICAgIHRoaXMuaXNUYWJsZXQgPSB0aGlzLmlzTW9iaWxlICYmIHRoaXMud2luZG93V2lkdGggPj0gdGhpcy50YWJsZXQuYnJlYWtwb2ludDtcbiAgICAgIHZhciBvbGRDb250ZXh0ID0gdGhpcy5jb250ZXh0O1xuXG4gICAgICBpZiAodGhpcy5pc01vYmlsZSkge1xuICAgICAgICBpZiAodGhpcy5pc1RhYmxldCkge1xuICAgICAgICAgIHRoaXMuY29udGV4dCA9ICd0YWJsZXQnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuY29udGV4dCA9ICdzbWFydHBob25lJztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gJ2Rlc2t0b3AnO1xuICAgICAgfVxuXG4gICAgICBpZiAob2xkQ29udGV4dCAhPSB0aGlzLmNvbnRleHQpIHtcbiAgICAgICAgdmFyIG9sZFNtb290aCA9IG9sZENvbnRleHQgPT0gJ2Rlc2t0b3AnID8gdGhpcy5zbW9vdGggOiB0aGlzW29sZENvbnRleHRdLnNtb290aDtcbiAgICAgICAgdmFyIG5ld1Ntb290aCA9IHRoaXMuY29udGV4dCA9PSAnZGVza3RvcCcgPyB0aGlzLnNtb290aCA6IHRoaXNbdGhpcy5jb250ZXh0XS5zbW9vdGg7XG4gICAgICAgIGlmIChvbGRTbW9vdGggIT0gbmV3U21vb3RoKSB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImluaXRFdmVudHNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaW5pdEV2ZW50cygpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB0aGlzLnNjcm9sbFRvRWxzID0gdGhpcy5lbC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtXCIuY29uY2F0KHRoaXMubmFtZSwgXCItdG9dXCIpKTtcbiAgICAgIHRoaXMuc2V0U2Nyb2xsVG8gPSB0aGlzLnNldFNjcm9sbFRvLmJpbmQodGhpcyk7XG4gICAgICB0aGlzLnNjcm9sbFRvRWxzLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgX3RoaXMyLnNldFNjcm9sbFRvLCBmYWxzZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2V0U2Nyb2xsVG9cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0U2Nyb2xsVG8oZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLnNjcm9sbFRvKGV2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1cIi5jb25jYXQodGhpcy5uYW1lLCBcIi1ocmVmXCIpKSB8fCBldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgnaHJlZicpLCB7XG4gICAgICAgIG9mZnNldDogZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLVwiLmNvbmNhdCh0aGlzLm5hbWUsIFwiLW9mZnNldFwiKSlcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJhZGRFbGVtZW50c1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRFbGVtZW50cygpIHt9XG4gIH0sIHtcbiAgICBrZXk6IFwiZGV0ZWN0RWxlbWVudHNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGV0ZWN0RWxlbWVudHMoaGFzQ2FsbEV2ZW50U2V0KSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgdmFyIHNjcm9sbFRvcCA9IHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnk7XG4gICAgICB2YXIgc2Nyb2xsQm90dG9tID0gc2Nyb2xsVG9wICsgdGhpcy53aW5kb3dIZWlnaHQ7XG4gICAgICB2YXIgc2Nyb2xsTGVmdCA9IHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLng7XG4gICAgICB2YXIgc2Nyb2xsUmlnaHQgPSBzY3JvbGxMZWZ0ICsgdGhpcy53aW5kb3dXaWR0aDtcbiAgICAgIE9iamVjdC5lbnRyaWVzKHRoaXMuZWxzKS5mb3JFYWNoKGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICAgIHZhciBfcmVmMiA9IF9zbGljZWRUb0FycmF5KF9yZWYsIDIpLFxuICAgICAgICAgICAgaSA9IF9yZWYyWzBdLFxuICAgICAgICAgICAgZWwgPSBfcmVmMlsxXTtcblxuICAgICAgICBpZiAoZWwgJiYgKCFlbC5pblZpZXcgfHwgaGFzQ2FsbEV2ZW50U2V0KSkge1xuICAgICAgICAgIGlmIChfdGhpczMuZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICAgIGlmIChzY3JvbGxSaWdodCA+PSBlbC5sZWZ0ICYmIHNjcm9sbExlZnQgPCBlbC5yaWdodCkge1xuICAgICAgICAgICAgICBfdGhpczMuc2V0SW5WaWV3KGVsLCBpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHNjcm9sbEJvdHRvbSA+PSBlbC50b3AgJiYgc2Nyb2xsVG9wIDwgZWwuYm90dG9tKSB7XG4gICAgICAgICAgICAgIF90aGlzMy5zZXRJblZpZXcoZWwsIGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbCAmJiBlbC5pblZpZXcpIHtcbiAgICAgICAgICBpZiAoX3RoaXMzLmRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgICAgICB2YXIgd2lkdGggPSBlbC5yaWdodCAtIGVsLmxlZnQ7XG4gICAgICAgICAgICBlbC5wcm9ncmVzcyA9IChfdGhpczMuaW5zdGFuY2Uuc2Nyb2xsLnggLSAoZWwubGVmdCAtIF90aGlzMy53aW5kb3dXaWR0aCkpIC8gKHdpZHRoICsgX3RoaXMzLndpbmRvd1dpZHRoKTtcblxuICAgICAgICAgICAgaWYgKHNjcm9sbFJpZ2h0IDwgZWwubGVmdCB8fCBzY3JvbGxMZWZ0ID4gZWwucmlnaHQpIHtcbiAgICAgICAgICAgICAgX3RoaXMzLnNldE91dE9mVmlldyhlbCwgaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBoZWlnaHQgPSBlbC5ib3R0b20gLSBlbC50b3A7XG4gICAgICAgICAgICBlbC5wcm9ncmVzcyA9IChfdGhpczMuaW5zdGFuY2Uuc2Nyb2xsLnkgLSAoZWwudG9wIC0gX3RoaXMzLndpbmRvd0hlaWdodCkpIC8gKGhlaWdodCArIF90aGlzMy53aW5kb3dIZWlnaHQpO1xuXG4gICAgICAgICAgICBpZiAoc2Nyb2xsQm90dG9tIDwgZWwudG9wIHx8IHNjcm9sbFRvcCA+IGVsLmJvdHRvbSkge1xuICAgICAgICAgICAgICBfdGhpczMuc2V0T3V0T2ZWaWV3KGVsLCBpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pOyAvLyB0aGlzLmVscyA9IHRoaXMuZWxzLmZpbHRlcigoY3VycmVudCwgaSkgPT4ge1xuICAgICAgLy8gICAgIHJldHVybiBjdXJyZW50ICE9PSBudWxsO1xuICAgICAgLy8gfSk7XG5cbiAgICAgIHRoaXMuaGFzU2Nyb2xsVGlja2luZyA9IGZhbHNlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZXRJblZpZXdcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0SW5WaWV3KGN1cnJlbnQsIGkpIHtcbiAgICAgIHRoaXMuZWxzW2ldLmluVmlldyA9IHRydWU7XG4gICAgICBjdXJyZW50LmVsLmNsYXNzTGlzdC5hZGQoY3VycmVudFtcImNsYXNzXCJdKTtcbiAgICAgIHRoaXMuY3VycmVudEVsZW1lbnRzW2ldID0gY3VycmVudDtcblxuICAgICAgaWYgKGN1cnJlbnQuY2FsbCAmJiB0aGlzLmhhc0NhbGxFdmVudFNldCkge1xuICAgICAgICB0aGlzLmRpc3BhdGNoQ2FsbChjdXJyZW50LCAnZW50ZXInKTtcblxuICAgICAgICBpZiAoIWN1cnJlbnQucmVwZWF0KSB7XG4gICAgICAgICAgdGhpcy5lbHNbaV0uY2FsbCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9IC8vIGlmICghY3VycmVudC5yZXBlYXQgJiYgIWN1cnJlbnQuc3BlZWQgJiYgIWN1cnJlbnQuc3RpY2t5KSB7XG4gICAgICAvLyAgICAgaWYgKCFjdXJyZW50LmNhbGwgfHwgY3VycmVudC5jYWxsICYmIHRoaXMuaGFzQ2FsbEV2ZW50U2V0KSB7XG4gICAgICAvLyAgICAgICAgdGhpcy5lbHNbaV0gPSBudWxsXG4gICAgICAvLyAgICAgfVxuICAgICAgLy8gfVxuXG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNldE91dE9mVmlld1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRPdXRPZlZpZXcoY3VycmVudCwgaSkge1xuICAgICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICAgIC8vIGlmIChjdXJyZW50LnJlcGVhdCB8fCBjdXJyZW50LnNwZWVkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuZWxzW2ldLmluVmlldyA9IGZhbHNlOyAvLyB9XG5cbiAgICAgIE9iamVjdC5rZXlzKHRoaXMuY3VycmVudEVsZW1lbnRzKS5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgICAgICBlbCA9PT0gaSAmJiBkZWxldGUgX3RoaXM0LmN1cnJlbnRFbGVtZW50c1tlbF07XG4gICAgICB9KTtcblxuICAgICAgaWYgKGN1cnJlbnQuY2FsbCAmJiB0aGlzLmhhc0NhbGxFdmVudFNldCkge1xuICAgICAgICB0aGlzLmRpc3BhdGNoQ2FsbChjdXJyZW50LCAnZXhpdCcpO1xuICAgICAgfVxuXG4gICAgICBpZiAoY3VycmVudC5yZXBlYXQpIHtcbiAgICAgICAgY3VycmVudC5lbC5jbGFzc0xpc3QucmVtb3ZlKGN1cnJlbnRbXCJjbGFzc1wiXSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImRpc3BhdGNoQ2FsbFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkaXNwYXRjaENhbGwoY3VycmVudCwgd2F5KSB7XG4gICAgICB0aGlzLmNhbGxXYXkgPSB3YXk7XG4gICAgICB0aGlzLmNhbGxWYWx1ZSA9IGN1cnJlbnQuY2FsbC5zcGxpdCgnLCcpLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICByZXR1cm4gaXRlbS50cmltKCk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuY2FsbE9iaiA9IGN1cnJlbnQ7XG4gICAgICBpZiAodGhpcy5jYWxsVmFsdWUubGVuZ3RoID09IDEpIHRoaXMuY2FsbFZhbHVlID0gdGhpcy5jYWxsVmFsdWVbMF07XG4gICAgICB2YXIgY2FsbEV2ZW50ID0gbmV3IEV2ZW50KHRoaXMubmFtZXNwYWNlICsgJ2NhbGwnKTtcbiAgICAgIHRoaXMuZWwuZGlzcGF0Y2hFdmVudChjYWxsRXZlbnQpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJkaXNwYXRjaFNjcm9sbFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkaXNwYXRjaFNjcm9sbCgpIHtcbiAgICAgIHZhciBzY3JvbGxFdmVudCA9IG5ldyBFdmVudCh0aGlzLm5hbWVzcGFjZSArICdzY3JvbGwnKTtcbiAgICAgIHRoaXMuZWwuZGlzcGF0Y2hFdmVudChzY3JvbGxFdmVudCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNldEV2ZW50c1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRFdmVudHMoZXZlbnQsIGZ1bmMpIHtcbiAgICAgIGlmICghdGhpcy5saXN0ZW5lcnNbZXZlbnRdKSB7XG4gICAgICAgIHRoaXMubGlzdGVuZXJzW2V2ZW50XSA9IFtdO1xuICAgICAgfVxuXG4gICAgICB2YXIgbGlzdCA9IHRoaXMubGlzdGVuZXJzW2V2ZW50XTtcbiAgICAgIGxpc3QucHVzaChmdW5jKTtcblxuICAgICAgaWYgKGxpc3QubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLm5hbWVzcGFjZSArIGV2ZW50LCB0aGlzLmNoZWNrRXZlbnQsIGZhbHNlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGV2ZW50ID09PSAnY2FsbCcpIHtcbiAgICAgICAgdGhpcy5oYXNDYWxsRXZlbnRTZXQgPSB0cnVlO1xuICAgICAgICB0aGlzLmRldGVjdEVsZW1lbnRzKHRydWUpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ1bnNldEV2ZW50c1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1bnNldEV2ZW50cyhldmVudCwgZnVuYykge1xuICAgICAgaWYgKCF0aGlzLmxpc3RlbmVyc1tldmVudF0pIHJldHVybjtcbiAgICAgIHZhciBsaXN0ID0gdGhpcy5saXN0ZW5lcnNbZXZlbnRdO1xuICAgICAgdmFyIGluZGV4ID0gbGlzdC5pbmRleE9mKGZ1bmMpO1xuICAgICAgaWYgKGluZGV4IDwgMCkgcmV0dXJuO1xuICAgICAgbGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuXG4gICAgICBpZiAobGlzdC5pbmRleCA9PT0gMCkge1xuICAgICAgICB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIodGhpcy5uYW1lc3BhY2UgKyBldmVudCwgdGhpcy5jaGVja0V2ZW50LCBmYWxzZSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNoZWNrRXZlbnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2hlY2tFdmVudChldmVudCkge1xuICAgICAgdmFyIF90aGlzNSA9IHRoaXM7XG5cbiAgICAgIHZhciBuYW1lID0gZXZlbnQudHlwZS5yZXBsYWNlKHRoaXMubmFtZXNwYWNlLCAnJyk7XG4gICAgICB2YXIgbGlzdCA9IHRoaXMubGlzdGVuZXJzW25hbWVdO1xuICAgICAgaWYgKCFsaXN0IHx8IGxpc3QubGVuZ3RoID09PSAwKSByZXR1cm47XG4gICAgICBsaXN0LmZvckVhY2goZnVuY3Rpb24gKGZ1bmMpIHtcbiAgICAgICAgc3dpdGNoIChuYW1lKSB7XG4gICAgICAgICAgY2FzZSAnc2Nyb2xsJzpcbiAgICAgICAgICAgIHJldHVybiBmdW5jKF90aGlzNS5pbnN0YW5jZSk7XG5cbiAgICAgICAgICBjYXNlICdjYWxsJzpcbiAgICAgICAgICAgIHJldHVybiBmdW5jKF90aGlzNS5jYWxsVmFsdWUsIF90aGlzNS5jYWxsV2F5LCBfdGhpczUuY2FsbE9iaik7XG5cbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIGZ1bmMoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInN0YXJ0U2Nyb2xsXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN0YXJ0U2Nyb2xsKCkge31cbiAgfSwge1xuICAgIGtleTogXCJzdG9wU2Nyb2xsXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN0b3BTY3JvbGwoKSB7fVxuICB9LCB7XG4gICAga2V5OiBcInNldFNjcm9sbFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRTY3JvbGwoeCwgeSkge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zY3JvbGwgPSB7XG4gICAgICAgIHg6IDAsXG4gICAgICAgIHk6IDBcbiAgICAgIH07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImRlc3Ryb3lcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgIHZhciBfdGhpczYgPSB0aGlzO1xuXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5jaGVja1Jlc2l6ZSwgZmFsc2UpO1xuICAgICAgT2JqZWN0LmtleXModGhpcy5saXN0ZW5lcnMpLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIF90aGlzNi5lbC5yZW1vdmVFdmVudExpc3RlbmVyKF90aGlzNi5uYW1lc3BhY2UgKyBldmVudCwgX3RoaXM2LmNoZWNrRXZlbnQsIGZhbHNlKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5saXN0ZW5lcnMgPSB7fTtcbiAgICAgIHRoaXMuc2Nyb2xsVG9FbHMuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfdGhpczYuc2V0U2Nyb2xsVG8sIGZhbHNlKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5odG1sLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5pbml0Q2xhc3MpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBfZGVmYXVsdDtcbn0oKTtcblxudmFyIGNvbW1vbmpzR2xvYmFsID0gdHlwZW9mIGdsb2JhbFRoaXMgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsVGhpcyA6IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDogdHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWwgOiB0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDoge307XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZuLCBtb2R1bGUpIHtcblx0cmV0dXJuIG1vZHVsZSA9IHsgZXhwb3J0czoge30gfSwgZm4obW9kdWxlLCBtb2R1bGUuZXhwb3J0cyksIG1vZHVsZS5leHBvcnRzO1xufVxuXG52YXIgc21vb3Roc2Nyb2xsID0gY3JlYXRlQ29tbW9uanNNb2R1bGUoZnVuY3Rpb24gKG1vZHVsZSwgZXhwb3J0cykge1xuLyogc21vb3Roc2Nyb2xsIHYwLjQuNCAtIDIwMTkgLSBEdXN0YW4gS2FzdGVuLCBKZXJlbWlhcyBNZW5pY2hlbGxpIC0gTUlUIExpY2Vuc2UgKi9cbihmdW5jdGlvbiAoKSB7XG5cbiAgLy8gcG9seWZpbGxcbiAgZnVuY3Rpb24gcG9seWZpbGwoKSB7XG4gICAgLy8gYWxpYXNlc1xuICAgIHZhciB3ID0gd2luZG93O1xuICAgIHZhciBkID0gZG9jdW1lbnQ7XG5cbiAgICAvLyByZXR1cm4gaWYgc2Nyb2xsIGJlaGF2aW9yIGlzIHN1cHBvcnRlZCBhbmQgcG9seWZpbGwgaXMgbm90IGZvcmNlZFxuICAgIGlmIChcbiAgICAgICdzY3JvbGxCZWhhdmlvcicgaW4gZC5kb2N1bWVudEVsZW1lbnQuc3R5bGUgJiZcbiAgICAgIHcuX19mb3JjZVNtb290aFNjcm9sbFBvbHlmaWxsX18gIT09IHRydWVcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBnbG9iYWxzXG4gICAgdmFyIEVsZW1lbnQgPSB3LkhUTUxFbGVtZW50IHx8IHcuRWxlbWVudDtcbiAgICB2YXIgU0NST0xMX1RJTUUgPSA0Njg7XG5cbiAgICAvLyBvYmplY3QgZ2F0aGVyaW5nIG9yaWdpbmFsIHNjcm9sbCBtZXRob2RzXG4gICAgdmFyIG9yaWdpbmFsID0ge1xuICAgICAgc2Nyb2xsOiB3LnNjcm9sbCB8fCB3LnNjcm9sbFRvLFxuICAgICAgc2Nyb2xsQnk6IHcuc2Nyb2xsQnksXG4gICAgICBlbGVtZW50U2Nyb2xsOiBFbGVtZW50LnByb3RvdHlwZS5zY3JvbGwgfHwgc2Nyb2xsRWxlbWVudCxcbiAgICAgIHNjcm9sbEludG9WaWV3OiBFbGVtZW50LnByb3RvdHlwZS5zY3JvbGxJbnRvVmlld1xuICAgIH07XG5cbiAgICAvLyBkZWZpbmUgdGltaW5nIG1ldGhvZFxuICAgIHZhciBub3cgPVxuICAgICAgdy5wZXJmb3JtYW5jZSAmJiB3LnBlcmZvcm1hbmNlLm5vd1xuICAgICAgICA/IHcucGVyZm9ybWFuY2Uubm93LmJpbmQody5wZXJmb3JtYW5jZSlcbiAgICAgICAgOiBEYXRlLm5vdztcblxuICAgIC8qKlxuICAgICAqIGluZGljYXRlcyBpZiBhIHRoZSBjdXJyZW50IGJyb3dzZXIgaXMgbWFkZSBieSBNaWNyb3NvZnRcbiAgICAgKiBAbWV0aG9kIGlzTWljcm9zb2Z0QnJvd3NlclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB1c2VyQWdlbnRcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBpc01pY3Jvc29mdEJyb3dzZXIodXNlckFnZW50KSB7XG4gICAgICB2YXIgdXNlckFnZW50UGF0dGVybnMgPSBbJ01TSUUgJywgJ1RyaWRlbnQvJywgJ0VkZ2UvJ107XG5cbiAgICAgIHJldHVybiBuZXcgUmVnRXhwKHVzZXJBZ2VudFBhdHRlcm5zLmpvaW4oJ3wnKSkudGVzdCh1c2VyQWdlbnQpO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogSUUgaGFzIHJvdW5kaW5nIGJ1ZyByb3VuZGluZyBkb3duIGNsaWVudEhlaWdodCBhbmQgY2xpZW50V2lkdGggYW5kXG4gICAgICogcm91bmRpbmcgdXAgc2Nyb2xsSGVpZ2h0IGFuZCBzY3JvbGxXaWR0aCBjYXVzaW5nIGZhbHNlIHBvc2l0aXZlc1xuICAgICAqIG9uIGhhc1Njcm9sbGFibGVTcGFjZVxuICAgICAqL1xuICAgIHZhciBST1VORElOR19UT0xFUkFOQ0UgPSBpc01pY3Jvc29mdEJyb3dzZXIody5uYXZpZ2F0b3IudXNlckFnZW50KSA/IDEgOiAwO1xuXG4gICAgLyoqXG4gICAgICogY2hhbmdlcyBzY3JvbGwgcG9zaXRpb24gaW5zaWRlIGFuIGVsZW1lbnRcbiAgICAgKiBAbWV0aG9kIHNjcm9sbEVsZW1lbnRcbiAgICAgKiBAcGFyYW0ge051bWJlcn0geFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB5XG4gICAgICogQHJldHVybnMge3VuZGVmaW5lZH1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBzY3JvbGxFbGVtZW50KHgsIHkpIHtcbiAgICAgIHRoaXMuc2Nyb2xsTGVmdCA9IHg7XG4gICAgICB0aGlzLnNjcm9sbFRvcCA9IHk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogcmV0dXJucyByZXN1bHQgb2YgYXBwbHlpbmcgZWFzZSBtYXRoIGZ1bmN0aW9uIHRvIGEgbnVtYmVyXG4gICAgICogQG1ldGhvZCBlYXNlXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGtcbiAgICAgKiBAcmV0dXJucyB7TnVtYmVyfVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGVhc2Uoaykge1xuICAgICAgcmV0dXJuIDAuNSAqICgxIC0gTWF0aC5jb3MoTWF0aC5QSSAqIGspKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBpbmRpY2F0ZXMgaWYgYSBzbW9vdGggYmVoYXZpb3Igc2hvdWxkIGJlIGFwcGxpZWRcbiAgICAgKiBAbWV0aG9kIHNob3VsZEJhaWxPdXRcbiAgICAgKiBAcGFyYW0ge051bWJlcnxPYmplY3R9IGZpcnN0QXJnXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgZnVuY3Rpb24gc2hvdWxkQmFpbE91dChmaXJzdEFyZykge1xuICAgICAgaWYgKFxuICAgICAgICBmaXJzdEFyZyA9PT0gbnVsbCB8fFxuICAgICAgICB0eXBlb2YgZmlyc3RBcmcgIT09ICdvYmplY3QnIHx8XG4gICAgICAgIGZpcnN0QXJnLmJlaGF2aW9yID09PSB1bmRlZmluZWQgfHxcbiAgICAgICAgZmlyc3RBcmcuYmVoYXZpb3IgPT09ICdhdXRvJyB8fFxuICAgICAgICBmaXJzdEFyZy5iZWhhdmlvciA9PT0gJ2luc3RhbnQnXG4gICAgICApIHtcbiAgICAgICAgLy8gZmlyc3QgYXJndW1lbnQgaXMgbm90IGFuIG9iamVjdC9udWxsXG4gICAgICAgIC8vIG9yIGJlaGF2aW9yIGlzIGF1dG8sIGluc3RhbnQgb3IgdW5kZWZpbmVkXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGZpcnN0QXJnID09PSAnb2JqZWN0JyAmJiBmaXJzdEFyZy5iZWhhdmlvciA9PT0gJ3Ntb290aCcpIHtcbiAgICAgICAgLy8gZmlyc3QgYXJndW1lbnQgaXMgYW4gb2JqZWN0IGFuZCBiZWhhdmlvciBpcyBzbW9vdGhcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICAvLyB0aHJvdyBlcnJvciB3aGVuIGJlaGF2aW9yIGlzIG5vdCBzdXBwb3J0ZWRcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICdiZWhhdmlvciBtZW1iZXIgb2YgU2Nyb2xsT3B0aW9ucyAnICtcbiAgICAgICAgICBmaXJzdEFyZy5iZWhhdmlvciArXG4gICAgICAgICAgJyBpcyBub3QgYSB2YWxpZCB2YWx1ZSBmb3IgZW51bWVyYXRpb24gU2Nyb2xsQmVoYXZpb3IuJ1xuICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBpbmRpY2F0ZXMgaWYgYW4gZWxlbWVudCBoYXMgc2Nyb2xsYWJsZSBzcGFjZSBpbiB0aGUgcHJvdmlkZWQgYXhpc1xuICAgICAqIEBtZXRob2QgaGFzU2Nyb2xsYWJsZVNwYWNlXG4gICAgICogQHBhcmFtIHtOb2RlfSBlbFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBheGlzXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgZnVuY3Rpb24gaGFzU2Nyb2xsYWJsZVNwYWNlKGVsLCBheGlzKSB7XG4gICAgICBpZiAoYXhpcyA9PT0gJ1knKSB7XG4gICAgICAgIHJldHVybiBlbC5jbGllbnRIZWlnaHQgKyBST1VORElOR19UT0xFUkFOQ0UgPCBlbC5zY3JvbGxIZWlnaHQ7XG4gICAgICB9XG5cbiAgICAgIGlmIChheGlzID09PSAnWCcpIHtcbiAgICAgICAgcmV0dXJuIGVsLmNsaWVudFdpZHRoICsgUk9VTkRJTkdfVE9MRVJBTkNFIDwgZWwuc2Nyb2xsV2lkdGg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogaW5kaWNhdGVzIGlmIGFuIGVsZW1lbnQgaGFzIGEgc2Nyb2xsYWJsZSBvdmVyZmxvdyBwcm9wZXJ0eSBpbiB0aGUgYXhpc1xuICAgICAqIEBtZXRob2QgY2FuT3ZlcmZsb3dcbiAgICAgKiBAcGFyYW0ge05vZGV9IGVsXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGF4aXNcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBjYW5PdmVyZmxvdyhlbCwgYXhpcykge1xuICAgICAgdmFyIG92ZXJmbG93VmFsdWUgPSB3LmdldENvbXB1dGVkU3R5bGUoZWwsIG51bGwpWydvdmVyZmxvdycgKyBheGlzXTtcblxuICAgICAgcmV0dXJuIG92ZXJmbG93VmFsdWUgPT09ICdhdXRvJyB8fCBvdmVyZmxvd1ZhbHVlID09PSAnc2Nyb2xsJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBpbmRpY2F0ZXMgaWYgYW4gZWxlbWVudCBjYW4gYmUgc2Nyb2xsZWQgaW4gZWl0aGVyIGF4aXNcbiAgICAgKiBAbWV0aG9kIGlzU2Nyb2xsYWJsZVxuICAgICAqIEBwYXJhbSB7Tm9kZX0gZWxcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gYXhpc1xuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGlzU2Nyb2xsYWJsZShlbCkge1xuICAgICAgdmFyIGlzU2Nyb2xsYWJsZVkgPSBoYXNTY3JvbGxhYmxlU3BhY2UoZWwsICdZJykgJiYgY2FuT3ZlcmZsb3coZWwsICdZJyk7XG4gICAgICB2YXIgaXNTY3JvbGxhYmxlWCA9IGhhc1Njcm9sbGFibGVTcGFjZShlbCwgJ1gnKSAmJiBjYW5PdmVyZmxvdyhlbCwgJ1gnKTtcblxuICAgICAgcmV0dXJuIGlzU2Nyb2xsYWJsZVkgfHwgaXNTY3JvbGxhYmxlWDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBmaW5kcyBzY3JvbGxhYmxlIHBhcmVudCBvZiBhbiBlbGVtZW50XG4gICAgICogQG1ldGhvZCBmaW5kU2Nyb2xsYWJsZVBhcmVudFxuICAgICAqIEBwYXJhbSB7Tm9kZX0gZWxcbiAgICAgKiBAcmV0dXJucyB7Tm9kZX0gZWxcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBmaW5kU2Nyb2xsYWJsZVBhcmVudChlbCkge1xuICAgICAgd2hpbGUgKGVsICE9PSBkLmJvZHkgJiYgaXNTY3JvbGxhYmxlKGVsKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgZWwgPSBlbC5wYXJlbnROb2RlIHx8IGVsLmhvc3Q7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBlbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBzZWxmIGludm9rZWQgZnVuY3Rpb24gdGhhdCwgZ2l2ZW4gYSBjb250ZXh0LCBzdGVwcyB0aHJvdWdoIHNjcm9sbGluZ1xuICAgICAqIEBtZXRob2Qgc3RlcFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb250ZXh0XG4gICAgICogQHJldHVybnMge3VuZGVmaW5lZH1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBzdGVwKGNvbnRleHQpIHtcbiAgICAgIHZhciB0aW1lID0gbm93KCk7XG4gICAgICB2YXIgdmFsdWU7XG4gICAgICB2YXIgY3VycmVudFg7XG4gICAgICB2YXIgY3VycmVudFk7XG4gICAgICB2YXIgZWxhcHNlZCA9ICh0aW1lIC0gY29udGV4dC5zdGFydFRpbWUpIC8gU0NST0xMX1RJTUU7XG5cbiAgICAgIC8vIGF2b2lkIGVsYXBzZWQgdGltZXMgaGlnaGVyIHRoYW4gb25lXG4gICAgICBlbGFwc2VkID0gZWxhcHNlZCA+IDEgPyAxIDogZWxhcHNlZDtcblxuICAgICAgLy8gYXBwbHkgZWFzaW5nIHRvIGVsYXBzZWQgdGltZVxuICAgICAgdmFsdWUgPSBlYXNlKGVsYXBzZWQpO1xuXG4gICAgICBjdXJyZW50WCA9IGNvbnRleHQuc3RhcnRYICsgKGNvbnRleHQueCAtIGNvbnRleHQuc3RhcnRYKSAqIHZhbHVlO1xuICAgICAgY3VycmVudFkgPSBjb250ZXh0LnN0YXJ0WSArIChjb250ZXh0LnkgLSBjb250ZXh0LnN0YXJ0WSkgKiB2YWx1ZTtcblxuICAgICAgY29udGV4dC5tZXRob2QuY2FsbChjb250ZXh0LnNjcm9sbGFibGUsIGN1cnJlbnRYLCBjdXJyZW50WSk7XG5cbiAgICAgIC8vIHNjcm9sbCBtb3JlIGlmIHdlIGhhdmUgbm90IHJlYWNoZWQgb3VyIGRlc3RpbmF0aW9uXG4gICAgICBpZiAoY3VycmVudFggIT09IGNvbnRleHQueCB8fCBjdXJyZW50WSAhPT0gY29udGV4dC55KSB7XG4gICAgICAgIHcucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXAuYmluZCh3LCBjb250ZXh0KSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogc2Nyb2xscyB3aW5kb3cgb3IgZWxlbWVudCB3aXRoIGEgc21vb3RoIGJlaGF2aW9yXG4gICAgICogQG1ldGhvZCBzbW9vdGhTY3JvbGxcbiAgICAgKiBAcGFyYW0ge09iamVjdHxOb2RlfSBlbFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB4XG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHlcbiAgICAgKiBAcmV0dXJucyB7dW5kZWZpbmVkfVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHNtb290aFNjcm9sbChlbCwgeCwgeSkge1xuICAgICAgdmFyIHNjcm9sbGFibGU7XG4gICAgICB2YXIgc3RhcnRYO1xuICAgICAgdmFyIHN0YXJ0WTtcbiAgICAgIHZhciBtZXRob2Q7XG4gICAgICB2YXIgc3RhcnRUaW1lID0gbm93KCk7XG5cbiAgICAgIC8vIGRlZmluZSBzY3JvbGwgY29udGV4dFxuICAgICAgaWYgKGVsID09PSBkLmJvZHkpIHtcbiAgICAgICAgc2Nyb2xsYWJsZSA9IHc7XG4gICAgICAgIHN0YXJ0WCA9IHcuc2Nyb2xsWCB8fCB3LnBhZ2VYT2Zmc2V0O1xuICAgICAgICBzdGFydFkgPSB3LnNjcm9sbFkgfHwgdy5wYWdlWU9mZnNldDtcbiAgICAgICAgbWV0aG9kID0gb3JpZ2luYWwuc2Nyb2xsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2Nyb2xsYWJsZSA9IGVsO1xuICAgICAgICBzdGFydFggPSBlbC5zY3JvbGxMZWZ0O1xuICAgICAgICBzdGFydFkgPSBlbC5zY3JvbGxUb3A7XG4gICAgICAgIG1ldGhvZCA9IHNjcm9sbEVsZW1lbnQ7XG4gICAgICB9XG5cbiAgICAgIC8vIHNjcm9sbCBsb29waW5nIG92ZXIgYSBmcmFtZVxuICAgICAgc3RlcCh7XG4gICAgICAgIHNjcm9sbGFibGU6IHNjcm9sbGFibGUsXG4gICAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgICBzdGFydFRpbWU6IHN0YXJ0VGltZSxcbiAgICAgICAgc3RhcnRYOiBzdGFydFgsXG4gICAgICAgIHN0YXJ0WTogc3RhcnRZLFxuICAgICAgICB4OiB4LFxuICAgICAgICB5OiB5XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBPUklHSU5BTCBNRVRIT0RTIE9WRVJSSURFU1xuICAgIC8vIHcuc2Nyb2xsIGFuZCB3LnNjcm9sbFRvXG4gICAgdy5zY3JvbGwgPSB3LnNjcm9sbFRvID0gZnVuY3Rpb24oKSB7XG4gICAgICAvLyBhdm9pZCBhY3Rpb24gd2hlbiBubyBhcmd1bWVudHMgYXJlIHBhc3NlZFxuICAgICAgaWYgKGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gYXZvaWQgc21vb3RoIGJlaGF2aW9yIGlmIG5vdCByZXF1aXJlZFxuICAgICAgaWYgKHNob3VsZEJhaWxPdXQoYXJndW1lbnRzWzBdKSA9PT0gdHJ1ZSkge1xuICAgICAgICBvcmlnaW5hbC5zY3JvbGwuY2FsbChcbiAgICAgICAgICB3LFxuICAgICAgICAgIGFyZ3VtZW50c1swXS5sZWZ0ICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gYXJndW1lbnRzWzBdLmxlZnRcbiAgICAgICAgICAgIDogdHlwZW9mIGFyZ3VtZW50c1swXSAhPT0gJ29iamVjdCdcbiAgICAgICAgICAgICAgPyBhcmd1bWVudHNbMF1cbiAgICAgICAgICAgICAgOiB3LnNjcm9sbFggfHwgdy5wYWdlWE9mZnNldCxcbiAgICAgICAgICAvLyB1c2UgdG9wIHByb3AsIHNlY29uZCBhcmd1bWVudCBpZiBwcmVzZW50IG9yIGZhbGxiYWNrIHRvIHNjcm9sbFlcbiAgICAgICAgICBhcmd1bWVudHNbMF0udG9wICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gYXJndW1lbnRzWzBdLnRvcFxuICAgICAgICAgICAgOiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICA/IGFyZ3VtZW50c1sxXVxuICAgICAgICAgICAgICA6IHcuc2Nyb2xsWSB8fCB3LnBhZ2VZT2Zmc2V0XG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBMRVQgVEhFIFNNT09USE5FU1MgQkVHSU4hXG4gICAgICBzbW9vdGhTY3JvbGwuY2FsbChcbiAgICAgICAgdyxcbiAgICAgICAgZC5ib2R5LFxuICAgICAgICBhcmd1bWVudHNbMF0ubGVmdCAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgPyB+fmFyZ3VtZW50c1swXS5sZWZ0XG4gICAgICAgICAgOiB3LnNjcm9sbFggfHwgdy5wYWdlWE9mZnNldCxcbiAgICAgICAgYXJndW1lbnRzWzBdLnRvcCAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgPyB+fmFyZ3VtZW50c1swXS50b3BcbiAgICAgICAgICA6IHcuc2Nyb2xsWSB8fCB3LnBhZ2VZT2Zmc2V0XG4gICAgICApO1xuICAgIH07XG5cbiAgICAvLyB3LnNjcm9sbEJ5XG4gICAgdy5zY3JvbGxCeSA9IGZ1bmN0aW9uKCkge1xuICAgICAgLy8gYXZvaWQgYWN0aW9uIHdoZW4gbm8gYXJndW1lbnRzIGFyZSBwYXNzZWRcbiAgICAgIGlmIChhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIGF2b2lkIHNtb290aCBiZWhhdmlvciBpZiBub3QgcmVxdWlyZWRcbiAgICAgIGlmIChzaG91bGRCYWlsT3V0KGFyZ3VtZW50c1swXSkpIHtcbiAgICAgICAgb3JpZ2luYWwuc2Nyb2xsQnkuY2FsbChcbiAgICAgICAgICB3LFxuICAgICAgICAgIGFyZ3VtZW50c1swXS5sZWZ0ICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gYXJndW1lbnRzWzBdLmxlZnRcbiAgICAgICAgICAgIDogdHlwZW9mIGFyZ3VtZW50c1swXSAhPT0gJ29iamVjdCcgPyBhcmd1bWVudHNbMF0gOiAwLFxuICAgICAgICAgIGFyZ3VtZW50c1swXS50b3AgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyBhcmd1bWVudHNbMF0udG9wXG4gICAgICAgICAgICA6IGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMFxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gTEVUIFRIRSBTTU9PVEhORVNTIEJFR0lOIVxuICAgICAgc21vb3RoU2Nyb2xsLmNhbGwoXG4gICAgICAgIHcsXG4gICAgICAgIGQuYm9keSxcbiAgICAgICAgfn5hcmd1bWVudHNbMF0ubGVmdCArICh3LnNjcm9sbFggfHwgdy5wYWdlWE9mZnNldCksXG4gICAgICAgIH5+YXJndW1lbnRzWzBdLnRvcCArICh3LnNjcm9sbFkgfHwgdy5wYWdlWU9mZnNldClcbiAgICAgICk7XG4gICAgfTtcblxuICAgIC8vIEVsZW1lbnQucHJvdG90eXBlLnNjcm9sbCBhbmQgRWxlbWVudC5wcm90b3R5cGUuc2Nyb2xsVG9cbiAgICBFbGVtZW50LnByb3RvdHlwZS5zY3JvbGwgPSBFbGVtZW50LnByb3RvdHlwZS5zY3JvbGxUbyA9IGZ1bmN0aW9uKCkge1xuICAgICAgLy8gYXZvaWQgYWN0aW9uIHdoZW4gbm8gYXJndW1lbnRzIGFyZSBwYXNzZWRcbiAgICAgIGlmIChhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIGF2b2lkIHNtb290aCBiZWhhdmlvciBpZiBub3QgcmVxdWlyZWRcbiAgICAgIGlmIChzaG91bGRCYWlsT3V0KGFyZ3VtZW50c1swXSkgPT09IHRydWUpIHtcbiAgICAgICAgLy8gaWYgb25lIG51bWJlciBpcyBwYXNzZWQsIHRocm93IGVycm9yIHRvIG1hdGNoIEZpcmVmb3ggaW1wbGVtZW50YXRpb25cbiAgICAgICAgaWYgKHR5cGVvZiBhcmd1bWVudHNbMF0gPT09ICdudW1iZXInICYmIGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFN5bnRheEVycm9yKCdWYWx1ZSBjb3VsZCBub3QgYmUgY29udmVydGVkJyk7XG4gICAgICAgIH1cblxuICAgICAgICBvcmlnaW5hbC5lbGVtZW50U2Nyb2xsLmNhbGwoXG4gICAgICAgICAgdGhpcyxcbiAgICAgICAgICAvLyB1c2UgbGVmdCBwcm9wLCBmaXJzdCBudW1iZXIgYXJndW1lbnQgb3IgZmFsbGJhY2sgdG8gc2Nyb2xsTGVmdFxuICAgICAgICAgIGFyZ3VtZW50c1swXS5sZWZ0ICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gfn5hcmd1bWVudHNbMF0ubGVmdFxuICAgICAgICAgICAgOiB0eXBlb2YgYXJndW1lbnRzWzBdICE9PSAnb2JqZWN0JyA/IH5+YXJndW1lbnRzWzBdIDogdGhpcy5zY3JvbGxMZWZ0LFxuICAgICAgICAgIC8vIHVzZSB0b3AgcHJvcCwgc2Vjb25kIGFyZ3VtZW50IG9yIGZhbGxiYWNrIHRvIHNjcm9sbFRvcFxuICAgICAgICAgIGFyZ3VtZW50c1swXS50b3AgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyB+fmFyZ3VtZW50c1swXS50b3BcbiAgICAgICAgICAgIDogYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyB+fmFyZ3VtZW50c1sxXSA6IHRoaXMuc2Nyb2xsVG9wXG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgbGVmdCA9IGFyZ3VtZW50c1swXS5sZWZ0O1xuICAgICAgdmFyIHRvcCA9IGFyZ3VtZW50c1swXS50b3A7XG5cbiAgICAgIC8vIExFVCBUSEUgU01PT1RITkVTUyBCRUdJTiFcbiAgICAgIHNtb290aFNjcm9sbC5jYWxsKFxuICAgICAgICB0aGlzLFxuICAgICAgICB0aGlzLFxuICAgICAgICB0eXBlb2YgbGVmdCA9PT0gJ3VuZGVmaW5lZCcgPyB0aGlzLnNjcm9sbExlZnQgOiB+fmxlZnQsXG4gICAgICAgIHR5cGVvZiB0b3AgPT09ICd1bmRlZmluZWQnID8gdGhpcy5zY3JvbGxUb3AgOiB+fnRvcFxuICAgICAgKTtcbiAgICB9O1xuXG4gICAgLy8gRWxlbWVudC5wcm90b3R5cGUuc2Nyb2xsQnlcbiAgICBFbGVtZW50LnByb3RvdHlwZS5zY3JvbGxCeSA9IGZ1bmN0aW9uKCkge1xuICAgICAgLy8gYXZvaWQgYWN0aW9uIHdoZW4gbm8gYXJndW1lbnRzIGFyZSBwYXNzZWRcbiAgICAgIGlmIChhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIGF2b2lkIHNtb290aCBiZWhhdmlvciBpZiBub3QgcmVxdWlyZWRcbiAgICAgIGlmIChzaG91bGRCYWlsT3V0KGFyZ3VtZW50c1swXSkgPT09IHRydWUpIHtcbiAgICAgICAgb3JpZ2luYWwuZWxlbWVudFNjcm9sbC5jYWxsKFxuICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgYXJndW1lbnRzWzBdLmxlZnQgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyB+fmFyZ3VtZW50c1swXS5sZWZ0ICsgdGhpcy5zY3JvbGxMZWZ0XG4gICAgICAgICAgICA6IH5+YXJndW1lbnRzWzBdICsgdGhpcy5zY3JvbGxMZWZ0LFxuICAgICAgICAgIGFyZ3VtZW50c1swXS50b3AgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyB+fmFyZ3VtZW50c1swXS50b3AgKyB0aGlzLnNjcm9sbFRvcFxuICAgICAgICAgICAgOiB+fmFyZ3VtZW50c1sxXSArIHRoaXMuc2Nyb2xsVG9wXG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNjcm9sbCh7XG4gICAgICAgIGxlZnQ6IH5+YXJndW1lbnRzWzBdLmxlZnQgKyB0aGlzLnNjcm9sbExlZnQsXG4gICAgICAgIHRvcDogfn5hcmd1bWVudHNbMF0udG9wICsgdGhpcy5zY3JvbGxUb3AsXG4gICAgICAgIGJlaGF2aW9yOiBhcmd1bWVudHNbMF0uYmVoYXZpb3JcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvLyBFbGVtZW50LnByb3RvdHlwZS5zY3JvbGxJbnRvVmlld1xuICAgIEVsZW1lbnQucHJvdG90eXBlLnNjcm9sbEludG9WaWV3ID0gZnVuY3Rpb24oKSB7XG4gICAgICAvLyBhdm9pZCBzbW9vdGggYmVoYXZpb3IgaWYgbm90IHJlcXVpcmVkXG4gICAgICBpZiAoc2hvdWxkQmFpbE91dChhcmd1bWVudHNbMF0pID09PSB0cnVlKSB7XG4gICAgICAgIG9yaWdpbmFsLnNjcm9sbEludG9WaWV3LmNhbGwoXG4gICAgICAgICAgdGhpcyxcbiAgICAgICAgICBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IHRydWUgOiBhcmd1bWVudHNbMF1cbiAgICAgICAgKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIExFVCBUSEUgU01PT1RITkVTUyBCRUdJTiFcbiAgICAgIHZhciBzY3JvbGxhYmxlUGFyZW50ID0gZmluZFNjcm9sbGFibGVQYXJlbnQodGhpcyk7XG4gICAgICB2YXIgcGFyZW50UmVjdHMgPSBzY3JvbGxhYmxlUGFyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgdmFyIGNsaWVudFJlY3RzID0gdGhpcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgaWYgKHNjcm9sbGFibGVQYXJlbnQgIT09IGQuYm9keSkge1xuICAgICAgICAvLyByZXZlYWwgZWxlbWVudCBpbnNpZGUgcGFyZW50XG4gICAgICAgIHNtb290aFNjcm9sbC5jYWxsKFxuICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgc2Nyb2xsYWJsZVBhcmVudCxcbiAgICAgICAgICBzY3JvbGxhYmxlUGFyZW50LnNjcm9sbExlZnQgKyBjbGllbnRSZWN0cy5sZWZ0IC0gcGFyZW50UmVjdHMubGVmdCxcbiAgICAgICAgICBzY3JvbGxhYmxlUGFyZW50LnNjcm9sbFRvcCArIGNsaWVudFJlY3RzLnRvcCAtIHBhcmVudFJlY3RzLnRvcFxuICAgICAgICApO1xuXG4gICAgICAgIC8vIHJldmVhbCBwYXJlbnQgaW4gdmlld3BvcnQgdW5sZXNzIGlzIGZpeGVkXG4gICAgICAgIGlmICh3LmdldENvbXB1dGVkU3R5bGUoc2Nyb2xsYWJsZVBhcmVudCkucG9zaXRpb24gIT09ICdmaXhlZCcpIHtcbiAgICAgICAgICB3LnNjcm9sbEJ5KHtcbiAgICAgICAgICAgIGxlZnQ6IHBhcmVudFJlY3RzLmxlZnQsXG4gICAgICAgICAgICB0b3A6IHBhcmVudFJlY3RzLnRvcCxcbiAgICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyByZXZlYWwgZWxlbWVudCBpbiB2aWV3cG9ydFxuICAgICAgICB3LnNjcm9sbEJ5KHtcbiAgICAgICAgICBsZWZ0OiBjbGllbnRSZWN0cy5sZWZ0LFxuICAgICAgICAgIHRvcDogY2xpZW50UmVjdHMudG9wLFxuICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAge1xuICAgIC8vIGNvbW1vbmpzXG4gICAgbW9kdWxlLmV4cG9ydHMgPSB7IHBvbHlmaWxsOiBwb2x5ZmlsbCB9O1xuICB9XG5cbn0oKSk7XG59KTtcbnZhciBzbW9vdGhzY3JvbGxfMSA9IHNtb290aHNjcm9sbC5wb2x5ZmlsbDtcblxudmFyIF9kZWZhdWx0JDEgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9Db3JlKSB7XG4gIF9pbmhlcml0cyhfZGVmYXVsdCwgX0NvcmUpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoX2RlZmF1bHQpO1xuXG4gIGZ1bmN0aW9uIF9kZWZhdWx0KCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBfZGVmYXVsdCk7XG5cbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIG9wdGlvbnMpO1xuXG4gICAgaWYgKF90aGlzLnJlc2V0TmF0aXZlU2Nyb2xsKSB7XG4gICAgICBpZiAoaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICBoaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCc7XG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgICB9XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgX3RoaXMuY2hlY2tTY3JvbGwsIGZhbHNlKTtcblxuICAgIGlmICh3aW5kb3cuc21vb3Roc2Nyb2xsUG9seWZpbGwgPT09IHVuZGVmaW5lZCkge1xuICAgICAgd2luZG93LnNtb290aHNjcm9sbFBvbHlmaWxsID0gc21vb3Roc2Nyb2xsO1xuICAgICAgd2luZG93LnNtb290aHNjcm9sbFBvbHlmaWxsLnBvbHlmaWxsKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKF9kZWZhdWx0LCBbe1xuICAgIGtleTogXCJpbml0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNjcm9sbC55ID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuICAgICAgdGhpcy5hZGRFbGVtZW50cygpO1xuICAgICAgdGhpcy5kZXRlY3RFbGVtZW50cygpO1xuXG4gICAgICBfZ2V0KF9nZXRQcm90b3R5cGVPZihfZGVmYXVsdC5wcm90b3R5cGUpLCBcImluaXRcIiwgdGhpcykuY2FsbCh0aGlzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY2hlY2tTY3JvbGxcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2hlY2tTY3JvbGwoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgX2dldChfZ2V0UHJvdG90eXBlT2YoX2RlZmF1bHQucHJvdG90eXBlKSwgXCJjaGVja1Njcm9sbFwiLCB0aGlzKS5jYWxsKHRoaXMpO1xuXG4gICAgICBpZiAodGhpcy5nZXREaXJlY3Rpb24pIHtcbiAgICAgICAgdGhpcy5hZGREaXJlY3Rpb24oKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuZ2V0U3BlZWQpIHtcbiAgICAgICAgdGhpcy5hZGRTcGVlZCgpO1xuICAgICAgICB0aGlzLnNwZWVkVHMgPSBEYXRlLm5vdygpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmluc3RhbmNlLnNjcm9sbC55ID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuXG4gICAgICBpZiAoT2JqZWN0LmVudHJpZXModGhpcy5lbHMpLmxlbmd0aCkge1xuICAgICAgICBpZiAoIXRoaXMuaGFzU2Nyb2xsVGlja2luZykge1xuICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpczIuZGV0ZWN0RWxlbWVudHMoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGlzLmhhc1Njcm9sbFRpY2tpbmcgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImFkZERpcmVjdGlvblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGREaXJlY3Rpb24oKSB7XG4gICAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID4gdGhpcy5pbnN0YW5jZS5zY3JvbGwueSkge1xuICAgICAgICBpZiAodGhpcy5pbnN0YW5jZS5kaXJlY3Rpb24gIT09ICdkb3duJykge1xuICAgICAgICAgIHRoaXMuaW5zdGFuY2UuZGlyZWN0aW9uID0gJ2Rvd24nO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA8IHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnkpIHtcbiAgICAgICAgaWYgKHRoaXMuaW5zdGFuY2UuZGlyZWN0aW9uICE9PSAndXAnKSB7XG4gICAgICAgICAgdGhpcy5pbnN0YW5jZS5kaXJlY3Rpb24gPSAndXAnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImFkZFNwZWVkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZFNwZWVkKCkge1xuICAgICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCAhPSB0aGlzLmluc3RhbmNlLnNjcm9sbC55KSB7XG4gICAgICAgIHRoaXMuaW5zdGFuY2Uuc3BlZWQgPSAod2luZG93LnBhZ2VZT2Zmc2V0IC0gdGhpcy5pbnN0YW5jZS5zY3JvbGwueSkgLyBNYXRoLm1heCgxLCBEYXRlLm5vdygpIC0gdGhpcy5zcGVlZFRzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaW5zdGFuY2Uuc3BlZWQgPSAwO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZXNpemVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVzaXplKCkge1xuICAgICAgaWYgKE9iamVjdC5lbnRyaWVzKHRoaXMuZWxzKS5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy53aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgIHRoaXMudXBkYXRlRWxlbWVudHMoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiYWRkRWxlbWVudHNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkRWxlbWVudHMoKSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgdGhpcy5lbHMgPSB7fTtcbiAgICAgIHZhciBlbHMgPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLScgKyB0aGlzLm5hbWUgKyAnXScpO1xuICAgICAgZWxzLmZvckVhY2goZnVuY3Rpb24gKGVsLCBpbmRleCkge1xuICAgICAgICB2YXIgQkNSID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIHZhciBjbCA9IGVsLmRhdGFzZXRbX3RoaXMzLm5hbWUgKyAnQ2xhc3MnXSB8fCBfdGhpczNbXCJjbGFzc1wiXTtcbiAgICAgICAgdmFyIGlkID0gdHlwZW9mIGVsLmRhdGFzZXRbX3RoaXMzLm5hbWUgKyAnSWQnXSA9PT0gJ3N0cmluZycgPyBlbC5kYXRhc2V0W190aGlzMy5uYW1lICsgJ0lkJ10gOiBpbmRleDtcbiAgICAgICAgdmFyIHRvcDtcbiAgICAgICAgdmFyIGxlZnQ7XG4gICAgICAgIHZhciBvZmZzZXQgPSB0eXBlb2YgZWwuZGF0YXNldFtfdGhpczMubmFtZSArICdPZmZzZXQnXSA9PT0gJ3N0cmluZycgPyBlbC5kYXRhc2V0W190aGlzMy5uYW1lICsgJ09mZnNldCddLnNwbGl0KCcsJykgOiBfdGhpczMub2Zmc2V0O1xuICAgICAgICB2YXIgcmVwZWF0ID0gZWwuZGF0YXNldFtfdGhpczMubmFtZSArICdSZXBlYXQnXTtcbiAgICAgICAgdmFyIGNhbGwgPSBlbC5kYXRhc2V0W190aGlzMy5uYW1lICsgJ0NhbGwnXTtcbiAgICAgICAgdmFyIHRhcmdldCA9IGVsLmRhdGFzZXRbX3RoaXMzLm5hbWUgKyAnVGFyZ2V0J107XG4gICAgICAgIHZhciB0YXJnZXRFbDtcblxuICAgICAgICBpZiAodGFyZ2V0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0YXJnZXRFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJcIi5jb25jYXQodGFyZ2V0KSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGFyZ2V0RWwgPSBlbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB0YXJnZXRFbEJDUiA9IHRhcmdldEVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICB0b3AgPSB0YXJnZXRFbEJDUi50b3AgKyBfdGhpczMuaW5zdGFuY2Uuc2Nyb2xsLnk7XG4gICAgICAgIGxlZnQgPSB0YXJnZXRFbEJDUi5sZWZ0ICsgX3RoaXMzLmluc3RhbmNlLnNjcm9sbC54O1xuICAgICAgICB2YXIgYm90dG9tID0gdG9wICsgdGFyZ2V0RWwub2Zmc2V0SGVpZ2h0O1xuICAgICAgICB2YXIgcmlnaHQgPSBsZWZ0ICsgdGFyZ2V0RWwub2Zmc2V0V2lkdGg7XG5cbiAgICAgICAgaWYgKHRhcmdldCA9PT0gJyNoZWFkZXInKSB7XG4gICAgICAgICAgY29uc29sZS5sb2codG9wLCBib3R0b20pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJlcGVhdCA9PSAnZmFsc2UnKSB7XG4gICAgICAgICAgcmVwZWF0ID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAocmVwZWF0ICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHJlcGVhdCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVwZWF0ID0gX3RoaXMzLnJlcGVhdDtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciByZWxhdGl2ZU9mZnNldCA9IF90aGlzMy5nZXRSZWxhdGl2ZU9mZnNldChvZmZzZXQpO1xuXG4gICAgICAgIHRvcCA9IHRvcCArIHJlbGF0aXZlT2Zmc2V0WzBdO1xuICAgICAgICBib3R0b20gPSBib3R0b20gLSByZWxhdGl2ZU9mZnNldFsxXTtcbiAgICAgICAgdmFyIG1hcHBlZEVsID0ge1xuICAgICAgICAgIGVsOiBlbCxcbiAgICAgICAgICB0YXJnZXRFbDogdGFyZ2V0RWwsXG4gICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgIFwiY2xhc3NcIjogY2wsXG4gICAgICAgICAgdG9wOiB0b3AsXG4gICAgICAgICAgYm90dG9tOiBib3R0b20sXG4gICAgICAgICAgbGVmdDogbGVmdCxcbiAgICAgICAgICByaWdodDogcmlnaHQsXG4gICAgICAgICAgb2Zmc2V0OiBvZmZzZXQsXG4gICAgICAgICAgcHJvZ3Jlc3M6IDAsXG4gICAgICAgICAgcmVwZWF0OiByZXBlYXQsXG4gICAgICAgICAgaW5WaWV3OiBmYWxzZSxcbiAgICAgICAgICBjYWxsOiBjYWxsXG4gICAgICAgIH07XG4gICAgICAgIF90aGlzMy5lbHNbaWRdID0gbWFwcGVkRWw7XG5cbiAgICAgICAgaWYgKGVsLmNsYXNzTGlzdC5jb250YWlucyhjbCkpIHtcbiAgICAgICAgICBfdGhpczMuc2V0SW5WaWV3KF90aGlzMy5lbHNbaWRdLCBpZCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ1cGRhdGVFbGVtZW50c1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1cGRhdGVFbGVtZW50cygpIHtcbiAgICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgICBPYmplY3QuZW50cmllcyh0aGlzLmVscykuZm9yRWFjaChmdW5jdGlvbiAoX3JlZikge1xuICAgICAgICB2YXIgX3JlZjIgPSBfc2xpY2VkVG9BcnJheShfcmVmLCAyKSxcbiAgICAgICAgICAgIGkgPSBfcmVmMlswXSxcbiAgICAgICAgICAgIGVsID0gX3JlZjJbMV07XG5cbiAgICAgICAgdmFyIHRvcCA9IGVsLnRhcmdldEVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArIF90aGlzNC5pbnN0YW5jZS5zY3JvbGwueTtcblxuICAgICAgICB2YXIgYm90dG9tID0gdG9wICsgZWwudGFyZ2V0RWwub2Zmc2V0SGVpZ2h0O1xuXG4gICAgICAgIHZhciByZWxhdGl2ZU9mZnNldCA9IF90aGlzNC5nZXRSZWxhdGl2ZU9mZnNldChlbC5vZmZzZXQpO1xuXG4gICAgICAgIF90aGlzNC5lbHNbaV0udG9wID0gdG9wICsgcmVsYXRpdmVPZmZzZXRbMF07XG4gICAgICAgIF90aGlzNC5lbHNbaV0uYm90dG9tID0gYm90dG9tIC0gcmVsYXRpdmVPZmZzZXRbMV07XG4gICAgICB9KTtcbiAgICAgIHRoaXMuaGFzU2Nyb2xsVGlja2luZyA9IGZhbHNlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRSZWxhdGl2ZU9mZnNldFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRSZWxhdGl2ZU9mZnNldChvZmZzZXQpIHtcbiAgICAgIHZhciByZWxhdGl2ZU9mZnNldCA9IFswLCAwXTtcblxuICAgICAgaWYgKG9mZnNldCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9mZnNldC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmICh0eXBlb2Ygb2Zmc2V0W2ldID09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBpZiAob2Zmc2V0W2ldLmluY2x1ZGVzKCclJykpIHtcbiAgICAgICAgICAgICAgcmVsYXRpdmVPZmZzZXRbaV0gPSBwYXJzZUludChvZmZzZXRbaV0ucmVwbGFjZSgnJScsICcnKSAqIHRoaXMud2luZG93SGVpZ2h0IC8gMTAwKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJlbGF0aXZlT2Zmc2V0W2ldID0gcGFyc2VJbnQob2Zmc2V0W2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVsYXRpdmVPZmZzZXRbaV0gPSBvZmZzZXRbaV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZWxhdGl2ZU9mZnNldDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2Nyb2xsIHRvIGEgZGVzaXJlZCB0YXJnZXQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIEF2YWlsYWJsZSBvcHRpb25zIDpcbiAgICAgKiAgICAgICAgICB0YXJnZXQge25vZGUsIHN0cmluZywgXCJ0b3BcIiwgXCJib3R0b21cIiwgaW50fSAtIFRoZSBET00gZWxlbWVudCB3ZSB3YW50IHRvIHNjcm9sbCB0b1xuICAgICAqICAgICAgICAgIG9wdGlvbnMge29iamVjdH0gLSBPcHRpb25zIG9iamVjdCBmb3IgYWRkaXRpb25uYWwgc2V0dGluZ3MuXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInNjcm9sbFRvXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNjcm9sbFRvKHRhcmdldCkge1xuICAgICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgICAgLy8gUGFyc2Ugb3B0aW9uc1xuICAgICAgdmFyIG9mZnNldCA9IHBhcnNlSW50KG9wdGlvbnMub2Zmc2V0KSB8fCAwOyAvLyBBbiBvZmZzZXQgdG8gYXBwbHkgb24gdG9wIG9mIGdpdmVuIGB0YXJnZXRgIG9yIGBzb3VyY2VFbGVtYCdzIHRhcmdldFxuXG4gICAgICB2YXIgY2FsbGJhY2sgPSBvcHRpb25zLmNhbGxiYWNrID8gb3B0aW9ucy5jYWxsYmFjayA6IGZhbHNlOyAvLyBmdW5jdGlvbiBjYWxsZWQgd2hlbiBzY3JvbGxUbyBjb21wbGV0ZXMgKG5vdGUgdGhhdCBpdCB3b24ndCB3YWl0IGZvciBsZXJwIHRvIHN0YWJpbGl6ZSlcblxuICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIC8vIFNlbGVjdG9yIG9yIGJvdW5kYXJpZXNcbiAgICAgICAgaWYgKHRhcmdldCA9PT0gJ3RvcCcpIHtcbiAgICAgICAgICB0YXJnZXQgPSB0aGlzLmh0bWw7XG4gICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0ID09PSAnYm90dG9tJykge1xuICAgICAgICAgIHRhcmdldCA9IHRoaXMuaHRtbC5vZmZzZXRIZWlnaHQgLSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBJZiB0aGUgcXVlcnkgZmFpbHMsIGFib3J0XG5cbiAgICAgICAgICBpZiAoIXRhcmdldCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnbnVtYmVyJykge1xuICAgICAgICAvLyBBYnNvbHV0ZSBjb29yZGluYXRlXG4gICAgICAgIHRhcmdldCA9IHBhcnNlSW50KHRhcmdldCk7XG4gICAgICB9IGVsc2UgaWYgKHRhcmdldCAmJiB0YXJnZXQudGFnTmFtZSkgOyBlbHNlIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdgdGFyZ2V0YCBwYXJhbWV0ZXIgaXMgbm90IHZhbGlkJyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gLy8gV2UgaGF2ZSBhIHRhcmdldCB0aGF0IGlzIG5vdCBhIGNvb3JkaW5hdGUgeWV0LCBnZXQgaXRcblxuXG4gICAgICBpZiAodHlwZW9mIHRhcmdldCAhPT0gJ251bWJlcicpIHtcbiAgICAgICAgb2Zmc2V0ID0gdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArIG9mZnNldCArIHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvZmZzZXQgPSB0YXJnZXQgKyBvZmZzZXQ7XG4gICAgICB9XG5cbiAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICBvZmZzZXQgPSBvZmZzZXQudG9GaXhlZCgpO1xuXG4gICAgICAgIHZhciBvblNjcm9sbCA9IGZ1bmN0aW9uIG9uU2Nyb2xsKCkge1xuICAgICAgICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQudG9GaXhlZCgpID09PSBvZmZzZXQpIHtcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvblNjcm9sbCk7XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25TY3JvbGwpO1xuICAgICAgfVxuXG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oe1xuICAgICAgICB0b3A6IG9mZnNldCxcbiAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidXBkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICAgIHRoaXMuYWRkRWxlbWVudHMoKTtcbiAgICAgIHRoaXMuZGV0ZWN0RWxlbWVudHMoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZGVzdHJveVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgX2dldChfZ2V0UHJvdG90eXBlT2YoX2RlZmF1bHQucHJvdG90eXBlKSwgXCJkZXN0cm95XCIsIHRoaXMpLmNhbGwodGhpcyk7XG5cbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLmNoZWNrU2Nyb2xsLCBmYWxzZSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIF9kZWZhdWx0O1xufShfZGVmYXVsdCk7XG5cbi8qXG5vYmplY3QtYXNzaWduXG4oYykgU2luZHJlIFNvcmh1c1xuQGxpY2Vuc2UgTUlUXG4qL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBwcm9wSXNFbnVtZXJhYmxlID0gT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuZnVuY3Rpb24gdG9PYmplY3QodmFsKSB7XG5cdGlmICh2YWwgPT09IG51bGwgfHwgdmFsID09PSB1bmRlZmluZWQpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdPYmplY3QuYXNzaWduIGNhbm5vdCBiZSBjYWxsZWQgd2l0aCBudWxsIG9yIHVuZGVmaW5lZCcpO1xuXHR9XG5cblx0cmV0dXJuIE9iamVjdCh2YWwpO1xufVxuXG5mdW5jdGlvbiBzaG91bGRVc2VOYXRpdmUoKSB7XG5cdHRyeSB7XG5cdFx0aWYgKCFPYmplY3QuYXNzaWduKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gRGV0ZWN0IGJ1Z2d5IHByb3BlcnR5IGVudW1lcmF0aW9uIG9yZGVyIGluIG9sZGVyIFY4IHZlcnNpb25zLlxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9NDExOFxuXHRcdHZhciB0ZXN0MSA9IG5ldyBTdHJpbmcoJ2FiYycpOyAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXctd3JhcHBlcnNcblx0XHR0ZXN0MVs1XSA9ICdkZSc7XG5cdFx0aWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QxKVswXSA9PT0gJzUnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MiA9IHt9O1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgMTA7IGkrKykge1xuXHRcdFx0dGVzdDJbJ18nICsgU3RyaW5nLmZyb21DaGFyQ29kZShpKV0gPSBpO1xuXHRcdH1cblx0XHR2YXIgb3JkZXIyID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDIpLm1hcChmdW5jdGlvbiAobikge1xuXHRcdFx0cmV0dXJuIHRlc3QyW25dO1xuXHRcdH0pO1xuXHRcdGlmIChvcmRlcjIuam9pbignJykgIT09ICcwMTIzNDU2Nzg5Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDMgPSB7fTtcblx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChsZXR0ZXIpIHtcblx0XHRcdHRlc3QzW2xldHRlcl0gPSBsZXR0ZXI7XG5cdFx0fSk7XG5cdFx0aWYgKE9iamVjdC5rZXlzKE9iamVjdC5hc3NpZ24oe30sIHRlc3QzKSkuam9pbignJykgIT09XG5cdFx0XHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0Ly8gV2UgZG9uJ3QgZXhwZWN0IGFueSBvZiB0aGUgYWJvdmUgdG8gdGhyb3csIGJ1dCBiZXR0ZXIgdG8gYmUgc2FmZS5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn1cblxudmFyIG9iamVjdEFzc2lnbiA9IHNob3VsZFVzZU5hdGl2ZSgpID8gT2JqZWN0LmFzc2lnbiA6IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSkge1xuXHR2YXIgZnJvbTtcblx0dmFyIHRvID0gdG9PYmplY3QodGFyZ2V0KTtcblx0dmFyIHN5bWJvbHM7XG5cblx0Zm9yICh2YXIgcyA9IDE7IHMgPCBhcmd1bWVudHMubGVuZ3RoOyBzKyspIHtcblx0XHRmcm9tID0gT2JqZWN0KGFyZ3VtZW50c1tzXSk7XG5cblx0XHRmb3IgKHZhciBrZXkgaW4gZnJvbSkge1xuXHRcdFx0aWYgKGhhc093blByb3BlcnR5LmNhbGwoZnJvbSwga2V5KSkge1xuXHRcdFx0XHR0b1trZXldID0gZnJvbVtrZXldO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcblx0XHRcdHN5bWJvbHMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZnJvbSk7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN5bWJvbHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKHByb3BJc0VudW1lcmFibGUuY2FsbChmcm9tLCBzeW1ib2xzW2ldKSkge1xuXHRcdFx0XHRcdHRvW3N5bWJvbHNbaV1dID0gZnJvbVtzeW1ib2xzW2ldXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiB0bztcbn07XG5cbmZ1bmN0aW9uIEUgKCkge1xuICAvLyBLZWVwIHRoaXMgZW1wdHkgc28gaXQncyBlYXNpZXIgdG8gaW5oZXJpdCBmcm9tXG4gIC8vICh2aWEgaHR0cHM6Ly9naXRodWIuY29tL2xpcHNtYWNrIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL3Njb3R0Y29yZ2FuL3RpbnktZW1pdHRlci9pc3N1ZXMvMylcbn1cblxuRS5wcm90b3R5cGUgPSB7XG4gIG9uOiBmdW5jdGlvbiAobmFtZSwgY2FsbGJhY2ssIGN0eCkge1xuICAgIHZhciBlID0gdGhpcy5lIHx8ICh0aGlzLmUgPSB7fSk7XG5cbiAgICAoZVtuYW1lXSB8fCAoZVtuYW1lXSA9IFtdKSkucHVzaCh7XG4gICAgICBmbjogY2FsbGJhY2ssXG4gICAgICBjdHg6IGN0eFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG5cbiAgb25jZTogZnVuY3Rpb24gKG5hbWUsIGNhbGxiYWNrLCBjdHgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgZnVuY3Rpb24gbGlzdGVuZXIgKCkge1xuICAgICAgc2VsZi5vZmYobmFtZSwgbGlzdGVuZXIpO1xuICAgICAgY2FsbGJhY2suYXBwbHkoY3R4LCBhcmd1bWVudHMpO1xuICAgIH1cbiAgICBsaXN0ZW5lci5fID0gY2FsbGJhY2s7XG4gICAgcmV0dXJuIHRoaXMub24obmFtZSwgbGlzdGVuZXIsIGN0eCk7XG4gIH0sXG5cbiAgZW1pdDogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB2YXIgZGF0YSA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICB2YXIgZXZ0QXJyID0gKCh0aGlzLmUgfHwgKHRoaXMuZSA9IHt9KSlbbmFtZV0gfHwgW10pLnNsaWNlKCk7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBsZW4gPSBldnRBcnIubGVuZ3RoO1xuXG4gICAgZm9yIChpOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGV2dEFycltpXS5mbi5hcHBseShldnRBcnJbaV0uY3R4LCBkYXRhKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICBvZmY6IGZ1bmN0aW9uIChuYW1lLCBjYWxsYmFjaykge1xuICAgIHZhciBlID0gdGhpcy5lIHx8ICh0aGlzLmUgPSB7fSk7XG4gICAgdmFyIGV2dHMgPSBlW25hbWVdO1xuICAgIHZhciBsaXZlRXZlbnRzID0gW107XG5cbiAgICBpZiAoZXZ0cyAmJiBjYWxsYmFjaykge1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGV2dHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgaWYgKGV2dHNbaV0uZm4gIT09IGNhbGxiYWNrICYmIGV2dHNbaV0uZm4uXyAhPT0gY2FsbGJhY2spXG4gICAgICAgICAgbGl2ZUV2ZW50cy5wdXNoKGV2dHNbaV0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJlbW92ZSBldmVudCBmcm9tIHF1ZXVlIHRvIHByZXZlbnQgbWVtb3J5IGxlYWtcbiAgICAvLyBTdWdnZXN0ZWQgYnkgaHR0cHM6Ly9naXRodWIuY29tL2xhemRcbiAgICAvLyBSZWY6IGh0dHBzOi8vZ2l0aHViLmNvbS9zY290dGNvcmdhbi90aW55LWVtaXR0ZXIvY29tbWl0L2M2ZWJmYWE5YmM5NzNiMzNkMTEwYTg0YTMwNzc0MmI3Y2Y5NGM5NTMjY29tbWl0Y29tbWVudC01MDI0OTEwXG5cbiAgICAobGl2ZUV2ZW50cy5sZW5ndGgpXG4gICAgICA/IGVbbmFtZV0gPSBsaXZlRXZlbnRzXG4gICAgICA6IGRlbGV0ZSBlW25hbWVdO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn07XG5cbnZhciB0aW55RW1pdHRlciA9IEU7XG5cbnZhciBsZXRoYXJneSA9IGNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZ1bmN0aW9uIChtb2R1bGUsIGV4cG9ydHMpIHtcbi8vIEdlbmVyYXRlZCBieSBDb2ZmZWVTY3JpcHQgMS45LjJcbihmdW5jdGlvbigpIHtcbiAgdmFyIHJvb3Q7XG5cbiAgcm9vdCA9ICBleHBvcnRzICE9PSBudWxsID8gZXhwb3J0cyA6IHRoaXM7XG5cbiAgcm9vdC5MZXRoYXJneSA9IChmdW5jdGlvbigpIHtcbiAgICBmdW5jdGlvbiBMZXRoYXJneShzdGFiaWxpdHksIHNlbnNpdGl2aXR5LCB0b2xlcmFuY2UsIGRlbGF5KSB7XG4gICAgICB0aGlzLnN0YWJpbGl0eSA9IHN0YWJpbGl0eSAhPSBudWxsID8gTWF0aC5hYnMoc3RhYmlsaXR5KSA6IDg7XG4gICAgICB0aGlzLnNlbnNpdGl2aXR5ID0gc2Vuc2l0aXZpdHkgIT0gbnVsbCA/IDEgKyBNYXRoLmFicyhzZW5zaXRpdml0eSkgOiAxMDA7XG4gICAgICB0aGlzLnRvbGVyYW5jZSA9IHRvbGVyYW5jZSAhPSBudWxsID8gMSArIE1hdGguYWJzKHRvbGVyYW5jZSkgOiAxLjE7XG4gICAgICB0aGlzLmRlbGF5ID0gZGVsYXkgIT0gbnVsbCA/IGRlbGF5IDogMTUwO1xuICAgICAgdGhpcy5sYXN0VXBEZWx0YXMgPSAoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBpLCByZWYsIHJlc3VsdHM7XG4gICAgICAgIHJlc3VsdHMgPSBbXTtcbiAgICAgICAgZm9yIChpID0gMSwgcmVmID0gdGhpcy5zdGFiaWxpdHkgKiAyOyAxIDw9IHJlZiA/IGkgPD0gcmVmIDogaSA+PSByZWY7IDEgPD0gcmVmID8gaSsrIDogaS0tKSB7XG4gICAgICAgICAgcmVzdWx0cy5wdXNoKG51bGwpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHRzO1xuICAgICAgfSkuY2FsbCh0aGlzKTtcbiAgICAgIHRoaXMubGFzdERvd25EZWx0YXMgPSAoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBpLCByZWYsIHJlc3VsdHM7XG4gICAgICAgIHJlc3VsdHMgPSBbXTtcbiAgICAgICAgZm9yIChpID0gMSwgcmVmID0gdGhpcy5zdGFiaWxpdHkgKiAyOyAxIDw9IHJlZiA/IGkgPD0gcmVmIDogaSA+PSByZWY7IDEgPD0gcmVmID8gaSsrIDogaS0tKSB7XG4gICAgICAgICAgcmVzdWx0cy5wdXNoKG51bGwpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHRzO1xuICAgICAgfSkuY2FsbCh0aGlzKTtcbiAgICAgIHRoaXMuZGVsdGFzVGltZXN0YW1wID0gKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgaSwgcmVmLCByZXN1bHRzO1xuICAgICAgICByZXN1bHRzID0gW107XG4gICAgICAgIGZvciAoaSA9IDEsIHJlZiA9IHRoaXMuc3RhYmlsaXR5ICogMjsgMSA8PSByZWYgPyBpIDw9IHJlZiA6IGkgPj0gcmVmOyAxIDw9IHJlZiA/IGkrKyA6IGktLSkge1xuICAgICAgICAgIHJlc3VsdHMucHVzaChudWxsKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICAgIH0pLmNhbGwodGhpcyk7XG4gICAgfVxuXG4gICAgTGV0aGFyZ3kucHJvdG90eXBlLmNoZWNrID0gZnVuY3Rpb24oZSkge1xuICAgICAgdmFyIGxhc3REZWx0YTtcbiAgICAgIGUgPSBlLm9yaWdpbmFsRXZlbnQgfHwgZTtcbiAgICAgIGlmIChlLndoZWVsRGVsdGEgIT0gbnVsbCkge1xuICAgICAgICBsYXN0RGVsdGEgPSBlLndoZWVsRGVsdGE7XG4gICAgICB9IGVsc2UgaWYgKGUuZGVsdGFZICE9IG51bGwpIHtcbiAgICAgICAgbGFzdERlbHRhID0gZS5kZWx0YVkgKiAtNDA7XG4gICAgICB9IGVsc2UgaWYgKChlLmRldGFpbCAhPSBudWxsKSB8fCBlLmRldGFpbCA9PT0gMCkge1xuICAgICAgICBsYXN0RGVsdGEgPSBlLmRldGFpbCAqIC00MDtcbiAgICAgIH1cbiAgICAgIHRoaXMuZGVsdGFzVGltZXN0YW1wLnB1c2goRGF0ZS5ub3coKSk7XG4gICAgICB0aGlzLmRlbHRhc1RpbWVzdGFtcC5zaGlmdCgpO1xuICAgICAgaWYgKGxhc3REZWx0YSA+IDApIHtcbiAgICAgICAgdGhpcy5sYXN0VXBEZWx0YXMucHVzaChsYXN0RGVsdGEpO1xuICAgICAgICB0aGlzLmxhc3RVcERlbHRhcy5zaGlmdCgpO1xuICAgICAgICByZXR1cm4gdGhpcy5pc0luZXJ0aWEoMSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmxhc3REb3duRGVsdGFzLnB1c2gobGFzdERlbHRhKTtcbiAgICAgICAgdGhpcy5sYXN0RG93bkRlbHRhcy5zaGlmdCgpO1xuICAgICAgICByZXR1cm4gdGhpcy5pc0luZXJ0aWEoLTEpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBMZXRoYXJneS5wcm90b3R5cGUuaXNJbmVydGlhID0gZnVuY3Rpb24oZGlyZWN0aW9uKSB7XG4gICAgICB2YXIgbGFzdERlbHRhcywgbGFzdERlbHRhc05ldywgbGFzdERlbHRhc09sZCwgbmV3QXZlcmFnZSwgbmV3U3VtLCBvbGRBdmVyYWdlLCBvbGRTdW07XG4gICAgICBsYXN0RGVsdGFzID0gZGlyZWN0aW9uID09PSAtMSA/IHRoaXMubGFzdERvd25EZWx0YXMgOiB0aGlzLmxhc3RVcERlbHRhcztcbiAgICAgIGlmIChsYXN0RGVsdGFzWzBdID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBkaXJlY3Rpb247XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5kZWx0YXNUaW1lc3RhbXBbKHRoaXMuc3RhYmlsaXR5ICogMikgLSAyXSArIHRoaXMuZGVsYXkgPiBEYXRlLm5vdygpICYmIGxhc3REZWx0YXNbMF0gPT09IGxhc3REZWx0YXNbKHRoaXMuc3RhYmlsaXR5ICogMikgLSAxXSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBsYXN0RGVsdGFzT2xkID0gbGFzdERlbHRhcy5zbGljZSgwLCB0aGlzLnN0YWJpbGl0eSk7XG4gICAgICBsYXN0RGVsdGFzTmV3ID0gbGFzdERlbHRhcy5zbGljZSh0aGlzLnN0YWJpbGl0eSwgdGhpcy5zdGFiaWxpdHkgKiAyKTtcbiAgICAgIG9sZFN1bSA9IGxhc3REZWx0YXNPbGQucmVkdWNlKGZ1bmN0aW9uKHQsIHMpIHtcbiAgICAgICAgcmV0dXJuIHQgKyBzO1xuICAgICAgfSk7XG4gICAgICBuZXdTdW0gPSBsYXN0RGVsdGFzTmV3LnJlZHVjZShmdW5jdGlvbih0LCBzKSB7XG4gICAgICAgIHJldHVybiB0ICsgcztcbiAgICAgIH0pO1xuICAgICAgb2xkQXZlcmFnZSA9IG9sZFN1bSAvIGxhc3REZWx0YXNPbGQubGVuZ3RoO1xuICAgICAgbmV3QXZlcmFnZSA9IG5ld1N1bSAvIGxhc3REZWx0YXNOZXcubGVuZ3RoO1xuICAgICAgaWYgKE1hdGguYWJzKG9sZEF2ZXJhZ2UpIDwgTWF0aC5hYnMobmV3QXZlcmFnZSAqIHRoaXMudG9sZXJhbmNlKSAmJiAodGhpcy5zZW5zaXRpdml0eSA8IE1hdGguYWJzKG5ld0F2ZXJhZ2UpKSkge1xuICAgICAgICByZXR1cm4gZGlyZWN0aW9uO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBMZXRoYXJneS5wcm90b3R5cGUuc2hvd0xhc3RVcERlbHRhcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMubGFzdFVwRGVsdGFzO1xuICAgIH07XG5cbiAgICBMZXRoYXJneS5wcm90b3R5cGUuc2hvd0xhc3REb3duRGVsdGFzID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5sYXN0RG93bkRlbHRhcztcbiAgICB9O1xuXG4gICAgcmV0dXJuIExldGhhcmd5O1xuXG4gIH0pKCk7XG5cbn0pLmNhbGwoY29tbW9uanNHbG9iYWwpO1xufSk7XG5cbnZhciBzdXBwb3J0ID0gKGZ1bmN0aW9uIGdldFN1cHBvcnQoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgaGFzV2hlZWxFdmVudDogJ29ud2hlZWwnIGluIGRvY3VtZW50LFxuICAgICAgICBoYXNNb3VzZVdoZWVsRXZlbnQ6ICdvbm1vdXNld2hlZWwnIGluIGRvY3VtZW50LFxuICAgICAgICBoYXNUb3VjaDogKCdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdykgfHwgd2luZG93LlRvdWNoRXZlbnQgfHwgd2luZG93LkRvY3VtZW50VG91Y2ggJiYgZG9jdW1lbnQgaW5zdGFuY2VvZiBEb2N1bWVudFRvdWNoLFxuICAgICAgICBoYXNUb3VjaFdpbjogbmF2aWdhdG9yLm1zTWF4VG91Y2hQb2ludHMgJiYgbmF2aWdhdG9yLm1zTWF4VG91Y2hQb2ludHMgPiAxLFxuICAgICAgICBoYXNQb2ludGVyOiAhIXdpbmRvdy5uYXZpZ2F0b3IubXNQb2ludGVyRW5hYmxlZCxcbiAgICAgICAgaGFzS2V5RG93bjogJ29ua2V5ZG93bicgaW4gZG9jdW1lbnQsXG4gICAgICAgIGlzRmlyZWZveDogbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdGaXJlZm94JykgPiAtMVxuICAgIH07XG59KSgpO1xuXG52YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLFxuICAgIGhhc093blByb3BlcnR5JDEgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG52YXIgYmluZGFsbFN0YW5kYWxvbmUgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICBpZighb2JqZWN0KSByZXR1cm4gY29uc29sZS53YXJuKCdiaW5kQWxsIHJlcXVpcmVzIGF0IGxlYXN0IG9uZSBhcmd1bWVudC4nKTtcblxuICAgIHZhciBmdW5jdGlvbnMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuXG4gICAgaWYgKGZ1bmN0aW9ucy5sZW5ndGggPT09IDApIHtcblxuICAgICAgICBmb3IgKHZhciBtZXRob2QgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgICBpZihoYXNPd25Qcm9wZXJ0eSQxLmNhbGwob2JqZWN0LCBtZXRob2QpKSB7XG4gICAgICAgICAgICAgICAgaWYodHlwZW9mIG9iamVjdFttZXRob2RdID09ICdmdW5jdGlvbicgJiYgdG9TdHJpbmcuY2FsbChvYmplY3RbbWV0aG9kXSkgPT0gXCJbb2JqZWN0IEZ1bmN0aW9uXVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9ucy5wdXNoKG1ldGhvZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZm9yKHZhciBpID0gMDsgaSA8IGZ1bmN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgZiA9IGZ1bmN0aW9uc1tpXTtcbiAgICAgICAgb2JqZWN0W2ZdID0gYmluZChvYmplY3RbZl0sIG9iamVjdCk7XG4gICAgfVxufTtcblxuLypcbiAgICBGYXN0ZXIgYmluZCB3aXRob3V0IHNwZWNpZmljLWNhc2UgY2hlY2tpbmcuIChzZWUgaHR0cHM6Ly9jb2RlcndhbGwuY29tL3Avb2kzajN3KS5cbiAgICBiaW5kQWxsIGlzIG9ubHkgbmVlZGVkIGZvciBldmVudHMgYmluZGluZyBzbyBubyBuZWVkIHRvIG1ha2Ugc2xvdyBmaXhlcyBmb3IgY29uc3RydWN0b3JcbiAgICBvciBwYXJ0aWFsIGFwcGxpY2F0aW9uLlxuKi9cbmZ1bmN0aW9uIGJpbmQoZnVuYywgY29udGV4dCkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJndW1lbnRzKTtcbiAgfTtcbn1cblxudmFyIExldGhhcmd5ID0gbGV0aGFyZ3kuTGV0aGFyZ3k7XG5cblxuXG52YXIgRVZUX0lEID0gJ3ZpcnR1YWxzY3JvbGwnO1xuXG52YXIgc3JjID0gVmlydHVhbFNjcm9sbDtcblxudmFyIGtleUNvZGVzID0ge1xuICAgIExFRlQ6IDM3LFxuICAgIFVQOiAzOCxcbiAgICBSSUdIVDogMzksXG4gICAgRE9XTjogNDAsXG4gICAgU1BBQ0U6IDMyXG59O1xuXG5mdW5jdGlvbiBWaXJ0dWFsU2Nyb2xsKG9wdGlvbnMpIHtcbiAgICBiaW5kYWxsU3RhbmRhbG9uZSh0aGlzLCAnX29uV2hlZWwnLCAnX29uTW91c2VXaGVlbCcsICdfb25Ub3VjaFN0YXJ0JywgJ19vblRvdWNoTW92ZScsICdfb25LZXlEb3duJyk7XG5cbiAgICB0aGlzLmVsID0gd2luZG93O1xuICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMuZWwpIHtcbiAgICAgICAgdGhpcy5lbCA9IG9wdGlvbnMuZWw7XG4gICAgICAgIGRlbGV0ZSBvcHRpb25zLmVsO1xuICAgIH1cbiAgICB0aGlzLm9wdGlvbnMgPSBvYmplY3RBc3NpZ24oe1xuICAgICAgICBtb3VzZU11bHRpcGxpZXI6IDEsXG4gICAgICAgIHRvdWNoTXVsdGlwbGllcjogMixcbiAgICAgICAgZmlyZWZveE11bHRpcGxpZXI6IDE1LFxuICAgICAgICBrZXlTdGVwOiAxMjAsXG4gICAgICAgIHByZXZlbnRUb3VjaDogZmFsc2UsXG4gICAgICAgIHVucHJldmVudFRvdWNoQ2xhc3M6ICd2cy10b3VjaG1vdmUtYWxsb3dlZCcsXG4gICAgICAgIGxpbWl0SW5lcnRpYTogZmFsc2UsXG4gICAgICAgIHVzZUtleWJvYXJkOiB0cnVlLFxuICAgICAgICB1c2VUb3VjaDogdHJ1ZVxuICAgIH0sIG9wdGlvbnMpO1xuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5saW1pdEluZXJ0aWEpIHRoaXMuX2xldGhhcmd5ID0gbmV3IExldGhhcmd5KCk7XG5cbiAgICB0aGlzLl9lbWl0dGVyID0gbmV3IHRpbnlFbWl0dGVyKCk7XG4gICAgdGhpcy5fZXZlbnQgPSB7XG4gICAgICAgIHk6IDAsXG4gICAgICAgIHg6IDAsXG4gICAgICAgIGRlbHRhWDogMCxcbiAgICAgICAgZGVsdGFZOiAwXG4gICAgfTtcbiAgICB0aGlzLnRvdWNoU3RhcnRYID0gbnVsbDtcbiAgICB0aGlzLnRvdWNoU3RhcnRZID0gbnVsbDtcbiAgICB0aGlzLmJvZHlUb3VjaEFjdGlvbiA9IG51bGw7XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLnBhc3NpdmUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLmxpc3RlbmVyT3B0aW9ucyA9IHtwYXNzaXZlOiB0aGlzLm9wdGlvbnMucGFzc2l2ZX07XG4gICAgfVxufVxuXG5WaXJ0dWFsU2Nyb2xsLnByb3RvdHlwZS5fbm90aWZ5ID0gZnVuY3Rpb24oZSkge1xuICAgIHZhciBldnQgPSB0aGlzLl9ldmVudDtcbiAgICBldnQueCArPSBldnQuZGVsdGFYO1xuICAgIGV2dC55ICs9IGV2dC5kZWx0YVk7XG5cbiAgIHRoaXMuX2VtaXR0ZXIuZW1pdChFVlRfSUQsIHtcbiAgICAgICAgeDogZXZ0LngsXG4gICAgICAgIHk6IGV2dC55LFxuICAgICAgICBkZWx0YVg6IGV2dC5kZWx0YVgsXG4gICAgICAgIGRlbHRhWTogZXZ0LmRlbHRhWSxcbiAgICAgICAgb3JpZ2luYWxFdmVudDogZVxuICAgfSk7XG59O1xuXG5WaXJ0dWFsU2Nyb2xsLnByb3RvdHlwZS5fb25XaGVlbCA9IGZ1bmN0aW9uKGUpIHtcbiAgICB2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcbiAgICBpZiAodGhpcy5fbGV0aGFyZ3kgJiYgdGhpcy5fbGV0aGFyZ3kuY2hlY2soZSkgPT09IGZhbHNlKSByZXR1cm47XG4gICAgdmFyIGV2dCA9IHRoaXMuX2V2ZW50O1xuXG4gICAgLy8gSW4gQ2hyb21lIGFuZCBpbiBGaXJlZm94IChhdCBsZWFzdCB0aGUgbmV3IG9uZSlcbiAgICBldnQuZGVsdGFYID0gZS53aGVlbERlbHRhWCB8fCBlLmRlbHRhWCAqIC0xO1xuICAgIGV2dC5kZWx0YVkgPSBlLndoZWVsRGVsdGFZIHx8IGUuZGVsdGFZICogLTE7XG5cbiAgICAvLyBmb3Igb3VyIHB1cnBvc2UgZGVsdGFtb2RlID0gMSBtZWFucyB1c2VyIGlzIG9uIGEgd2hlZWwgbW91c2UsIG5vdCB0b3VjaCBwYWRcbiAgICAvLyByZWFsIG1lYW5pbmc6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9XaGVlbEV2ZW50I0RlbHRhX21vZGVzXG4gICAgaWYoc3VwcG9ydC5pc0ZpcmVmb3ggJiYgZS5kZWx0YU1vZGUgPT0gMSkge1xuICAgICAgICBldnQuZGVsdGFYICo9IG9wdGlvbnMuZmlyZWZveE11bHRpcGxpZXI7XG4gICAgICAgIGV2dC5kZWx0YVkgKj0gb3B0aW9ucy5maXJlZm94TXVsdGlwbGllcjtcbiAgICB9XG5cbiAgICBldnQuZGVsdGFYICo9IG9wdGlvbnMubW91c2VNdWx0aXBsaWVyO1xuICAgIGV2dC5kZWx0YVkgKj0gb3B0aW9ucy5tb3VzZU11bHRpcGxpZXI7XG5cbiAgICB0aGlzLl9ub3RpZnkoZSk7XG59O1xuXG5WaXJ0dWFsU2Nyb2xsLnByb3RvdHlwZS5fb25Nb3VzZVdoZWVsID0gZnVuY3Rpb24oZSkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMubGltaXRJbmVydGlhICYmIHRoaXMuX2xldGhhcmd5LmNoZWNrKGUpID09PSBmYWxzZSkgcmV0dXJuO1xuXG4gICAgdmFyIGV2dCA9IHRoaXMuX2V2ZW50O1xuXG4gICAgLy8gSW4gU2FmYXJpLCBJRSBhbmQgaW4gQ2hyb21lIGlmICd3aGVlbCcgaXNuJ3QgZGVmaW5lZFxuICAgIGV2dC5kZWx0YVggPSAoZS53aGVlbERlbHRhWCkgPyBlLndoZWVsRGVsdGFYIDogMDtcbiAgICBldnQuZGVsdGFZID0gKGUud2hlZWxEZWx0YVkpID8gZS53aGVlbERlbHRhWSA6IGUud2hlZWxEZWx0YTtcblxuICAgIHRoaXMuX25vdGlmeShlKTtcbn07XG5cblZpcnR1YWxTY3JvbGwucHJvdG90eXBlLl9vblRvdWNoU3RhcnQgPSBmdW5jdGlvbihlKSB7XG4gICAgdmFyIHQgPSAoZS50YXJnZXRUb3VjaGVzKSA/IGUudGFyZ2V0VG91Y2hlc1swXSA6IGU7XG4gICAgdGhpcy50b3VjaFN0YXJ0WCA9IHQucGFnZVg7XG4gICAgdGhpcy50b3VjaFN0YXJ0WSA9IHQucGFnZVk7XG59O1xuXG5WaXJ0dWFsU2Nyb2xsLnByb3RvdHlwZS5fb25Ub3VjaE1vdmUgPSBmdW5jdGlvbihlKSB7XG4gICAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG4gICAgaWYob3B0aW9ucy5wcmV2ZW50VG91Y2hcbiAgICAgICAgJiYgIWUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhvcHRpb25zLnVucHJldmVudFRvdWNoQ2xhc3MpKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICB2YXIgZXZ0ID0gdGhpcy5fZXZlbnQ7XG5cbiAgICB2YXIgdCA9IChlLnRhcmdldFRvdWNoZXMpID8gZS50YXJnZXRUb3VjaGVzWzBdIDogZTtcblxuICAgIGV2dC5kZWx0YVggPSAodC5wYWdlWCAtIHRoaXMudG91Y2hTdGFydFgpICogb3B0aW9ucy50b3VjaE11bHRpcGxpZXI7XG4gICAgZXZ0LmRlbHRhWSA9ICh0LnBhZ2VZIC0gdGhpcy50b3VjaFN0YXJ0WSkgKiBvcHRpb25zLnRvdWNoTXVsdGlwbGllcjtcblxuICAgIHRoaXMudG91Y2hTdGFydFggPSB0LnBhZ2VYO1xuICAgIHRoaXMudG91Y2hTdGFydFkgPSB0LnBhZ2VZO1xuXG4gICAgdGhpcy5fbm90aWZ5KGUpO1xufTtcblxuVmlydHVhbFNjcm9sbC5wcm90b3R5cGUuX29uS2V5RG93biA9IGZ1bmN0aW9uKGUpIHtcbiAgICB2YXIgZXZ0ID0gdGhpcy5fZXZlbnQ7XG4gICAgZXZ0LmRlbHRhWCA9IGV2dC5kZWx0YVkgPSAwO1xuICAgIHZhciB3aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSA0MDtcblxuICAgIHN3aXRjaChlLmtleUNvZGUpIHtcbiAgICAgICAgY2FzZSBrZXlDb2Rlcy5MRUZUOlxuICAgICAgICBjYXNlIGtleUNvZGVzLlVQOlxuICAgICAgICAgICAgZXZ0LmRlbHRhWSA9IHRoaXMub3B0aW9ucy5rZXlTdGVwO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBrZXlDb2Rlcy5SSUdIVDpcbiAgICAgICAgY2FzZSBrZXlDb2Rlcy5ET1dOOlxuICAgICAgICAgICAgZXZ0LmRlbHRhWSA9IC0gdGhpcy5vcHRpb25zLmtleVN0ZXA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAgZS5zaGlmdEtleTpcbiAgICAgICAgICAgIGV2dC5kZWx0YVkgPSB3aW5kb3dIZWlnaHQ7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBrZXlDb2Rlcy5TUEFDRTpcbiAgICAgICAgICAgIGV2dC5kZWx0YVkgPSAtIHdpbmRvd0hlaWdodDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX25vdGlmeShlKTtcbn07XG5cblZpcnR1YWxTY3JvbGwucHJvdG90eXBlLl9iaW5kID0gZnVuY3Rpb24oKSB7XG4gICAgaWYoc3VwcG9ydC5oYXNXaGVlbEV2ZW50KSB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ3doZWVsJywgdGhpcy5fb25XaGVlbCwgdGhpcy5saXN0ZW5lck9wdGlvbnMpO1xuICAgIGlmKHN1cHBvcnQuaGFzTW91c2VXaGVlbEV2ZW50KSB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNld2hlZWwnLCB0aGlzLl9vbk1vdXNlV2hlZWwsIHRoaXMubGlzdGVuZXJPcHRpb25zKTtcblxuICAgIGlmKHN1cHBvcnQuaGFzVG91Y2ggJiYgdGhpcy5vcHRpb25zLnVzZVRvdWNoKSB7XG4gICAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMuX29uVG91Y2hTdGFydCwgdGhpcy5saXN0ZW5lck9wdGlvbnMpO1xuICAgICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMuX29uVG91Y2hNb3ZlLCB0aGlzLmxpc3RlbmVyT3B0aW9ucyk7XG4gICAgfVxuXG4gICAgaWYoc3VwcG9ydC5oYXNQb2ludGVyICYmIHN1cHBvcnQuaGFzVG91Y2hXaW4pIHtcbiAgICAgICAgdGhpcy5ib2R5VG91Y2hBY3Rpb24gPSBkb2N1bWVudC5ib2R5LnN0eWxlLm1zVG91Y2hBY3Rpb247XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUubXNUb3VjaEFjdGlvbiA9ICdub25lJztcbiAgICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdNU1BvaW50ZXJEb3duJywgdGhpcy5fb25Ub3VjaFN0YXJ0LCB0cnVlKTtcbiAgICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdNU1BvaW50ZXJNb3ZlJywgdGhpcy5fb25Ub3VjaE1vdmUsIHRydWUpO1xuICAgIH1cblxuICAgIGlmKHN1cHBvcnQuaGFzS2V5RG93biAmJiB0aGlzLm9wdGlvbnMudXNlS2V5Ym9hcmQpIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLl9vbktleURvd24pO1xufTtcblxuVmlydHVhbFNjcm9sbC5wcm90b3R5cGUuX3VuYmluZCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmKHN1cHBvcnQuaGFzV2hlZWxFdmVudCkgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCd3aGVlbCcsIHRoaXMuX29uV2hlZWwpO1xuICAgIGlmKHN1cHBvcnQuaGFzTW91c2VXaGVlbEV2ZW50KSB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNld2hlZWwnLCB0aGlzLl9vbk1vdXNlV2hlZWwpO1xuXG4gICAgaWYoc3VwcG9ydC5oYXNUb3VjaCkge1xuICAgICAgICB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLl9vblRvdWNoU3RhcnQpO1xuICAgICAgICB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMuX29uVG91Y2hNb3ZlKTtcbiAgICB9XG5cbiAgICBpZihzdXBwb3J0Lmhhc1BvaW50ZXIgJiYgc3VwcG9ydC5oYXNUb3VjaFdpbikge1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm1zVG91Y2hBY3Rpb24gPSB0aGlzLmJvZHlUb3VjaEFjdGlvbjtcbiAgICAgICAgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCdNU1BvaW50ZXJEb3duJywgdGhpcy5fb25Ub3VjaFN0YXJ0LCB0cnVlKTtcbiAgICAgICAgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCdNU1BvaW50ZXJNb3ZlJywgdGhpcy5fb25Ub3VjaE1vdmUsIHRydWUpO1xuICAgIH1cblxuICAgIGlmKHN1cHBvcnQuaGFzS2V5RG93biAmJiB0aGlzLm9wdGlvbnMudXNlS2V5Ym9hcmQpIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLl9vbktleURvd24pO1xufTtcblxuVmlydHVhbFNjcm9sbC5wcm90b3R5cGUub24gPSBmdW5jdGlvbihjYiwgY3R4KSB7XG4gIHRoaXMuX2VtaXR0ZXIub24oRVZUX0lELCBjYiwgY3R4KTtcblxuICB2YXIgZXZlbnRzID0gdGhpcy5fZW1pdHRlci5lO1xuICBpZiAoZXZlbnRzICYmIGV2ZW50c1tFVlRfSURdICYmIGV2ZW50c1tFVlRfSURdLmxlbmd0aCA9PT0gMSkgdGhpcy5fYmluZCgpO1xufTtcblxuVmlydHVhbFNjcm9sbC5wcm90b3R5cGUub2ZmID0gZnVuY3Rpb24oY2IsIGN0eCkge1xuICB0aGlzLl9lbWl0dGVyLm9mZihFVlRfSUQsIGNiLCBjdHgpO1xuXG4gIHZhciBldmVudHMgPSB0aGlzLl9lbWl0dGVyLmU7XG4gIGlmICghZXZlbnRzW0VWVF9JRF0gfHwgZXZlbnRzW0VWVF9JRF0ubGVuZ3RoIDw9IDApIHRoaXMuX3VuYmluZCgpO1xufTtcblxuVmlydHVhbFNjcm9sbC5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgZXZ0ID0gdGhpcy5fZXZlbnQ7XG4gICAgZXZ0LnggPSAwO1xuICAgIGV2dC55ID0gMDtcbn07XG5cblZpcnR1YWxTY3JvbGwucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9lbWl0dGVyLm9mZigpO1xuICAgIHRoaXMuX3VuYmluZCgpO1xufTtcblxuZnVuY3Rpb24gbGVycChzdGFydCwgZW5kLCBhbXQpIHtcbiAgcmV0dXJuICgxIC0gYW10KSAqIHN0YXJ0ICsgYW10ICogZW5kO1xufVxuXG5mdW5jdGlvbiBnZXRUcmFuc2xhdGUoZWwpIHtcbiAgdmFyIHRyYW5zbGF0ZSA9IHt9O1xuICBpZiAoIXdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKSByZXR1cm47XG4gIHZhciBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZWwpO1xuICB2YXIgdHJhbnNmb3JtID0gc3R5bGUudHJhbnNmb3JtIHx8IHN0eWxlLndlYmtpdFRyYW5zZm9ybSB8fCBzdHlsZS5tb3pUcmFuc2Zvcm07XG4gIHZhciBtYXQgPSB0cmFuc2Zvcm0ubWF0Y2goL15tYXRyaXgzZFxcKCguKylcXCkkLyk7XG5cbiAgaWYgKG1hdCkge1xuICAgIHRyYW5zbGF0ZS54ID0gbWF0ID8gcGFyc2VGbG9hdChtYXRbMV0uc3BsaXQoJywgJylbMTJdKSA6IDA7XG4gICAgdHJhbnNsYXRlLnkgPSBtYXQgPyBwYXJzZUZsb2F0KG1hdFsxXS5zcGxpdCgnLCAnKVsxM10pIDogMDtcbiAgfSBlbHNlIHtcbiAgICBtYXQgPSB0cmFuc2Zvcm0ubWF0Y2goL15tYXRyaXhcXCgoLispXFwpJC8pO1xuICAgIHRyYW5zbGF0ZS54ID0gbWF0ID8gcGFyc2VGbG9hdChtYXRbMV0uc3BsaXQoJywgJylbNF0pIDogMDtcbiAgICB0cmFuc2xhdGUueSA9IG1hdCA/IHBhcnNlRmxvYXQobWF0WzFdLnNwbGl0KCcsICcpWzVdKSA6IDA7XG4gIH1cblxuICByZXR1cm4gdHJhbnNsYXRlO1xufVxuXG4vKipcbiAqIFJldHVybnMgYW4gYXJyYXkgY29udGFpbmluZyBhbGwgdGhlIHBhcmVudCBub2RlcyBvZiB0aGUgZ2l2ZW4gbm9kZVxuICogQHBhcmFtICB7b2JqZWN0fSBub2RlXG4gKiBAcmV0dXJuIHthcnJheX0gcGFyZW50IG5vZGVzXG4gKi9cbmZ1bmN0aW9uIGdldFBhcmVudHMoZWxlbSkge1xuICAvLyBTZXQgdXAgYSBwYXJlbnQgYXJyYXlcbiAgdmFyIHBhcmVudHMgPSBbXTsgLy8gUHVzaCBlYWNoIHBhcmVudCBlbGVtZW50IHRvIHRoZSBhcnJheVxuXG4gIGZvciAoOyBlbGVtICYmIGVsZW0gIT09IGRvY3VtZW50OyBlbGVtID0gZWxlbS5wYXJlbnROb2RlKSB7XG4gICAgcGFyZW50cy5wdXNoKGVsZW0pO1xuICB9IC8vIFJldHVybiBvdXIgcGFyZW50IGFycmF5XG5cblxuICByZXR1cm4gcGFyZW50cztcbn0gLy8gaHR0cHM6Ly9nb21ha2V0aGluZ3MuY29tL2hvdy10by1nZXQtdGhlLWNsb3Nlc3QtcGFyZW50LWVsZW1lbnQtd2l0aC1hLW1hdGNoaW5nLXNlbGVjdG9yLXVzaW5nLXZhbmlsbGEtamF2YXNjcmlwdC9cblxuLyoqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vZ3JlL2Jlemllci1lYXNpbmdcbiAqIEJlemllckVhc2luZyAtIHVzZSBiZXppZXIgY3VydmUgZm9yIHRyYW5zaXRpb24gZWFzaW5nIGZ1bmN0aW9uXG4gKiBieSBHYcOrdGFuIFJlbmF1ZGVhdSAyMDE0IC0gMjAxNSDigJMgTUlUIExpY2Vuc2VcbiAqL1xuXG4vLyBUaGVzZSB2YWx1ZXMgYXJlIGVzdGFibGlzaGVkIGJ5IGVtcGlyaWNpc20gd2l0aCB0ZXN0cyAodHJhZGVvZmY6IHBlcmZvcm1hbmNlIFZTIHByZWNpc2lvbilcbnZhciBORVdUT05fSVRFUkFUSU9OUyA9IDQ7XG52YXIgTkVXVE9OX01JTl9TTE9QRSA9IDAuMDAxO1xudmFyIFNVQkRJVklTSU9OX1BSRUNJU0lPTiA9IDAuMDAwMDAwMTtcbnZhciBTVUJESVZJU0lPTl9NQVhfSVRFUkFUSU9OUyA9IDEwO1xuXG52YXIga1NwbGluZVRhYmxlU2l6ZSA9IDExO1xudmFyIGtTYW1wbGVTdGVwU2l6ZSA9IDEuMCAvIChrU3BsaW5lVGFibGVTaXplIC0gMS4wKTtcblxudmFyIGZsb2F0MzJBcnJheVN1cHBvcnRlZCA9IHR5cGVvZiBGbG9hdDMyQXJyYXkgPT09ICdmdW5jdGlvbic7XG5cbmZ1bmN0aW9uIEEgKGFBMSwgYUEyKSB7IHJldHVybiAxLjAgLSAzLjAgKiBhQTIgKyAzLjAgKiBhQTE7IH1cbmZ1bmN0aW9uIEIgKGFBMSwgYUEyKSB7IHJldHVybiAzLjAgKiBhQTIgLSA2LjAgKiBhQTE7IH1cbmZ1bmN0aW9uIEMgKGFBMSkgICAgICB7IHJldHVybiAzLjAgKiBhQTE7IH1cblxuLy8gUmV0dXJucyB4KHQpIGdpdmVuIHQsIHgxLCBhbmQgeDIsIG9yIHkodCkgZ2l2ZW4gdCwgeTEsIGFuZCB5Mi5cbmZ1bmN0aW9uIGNhbGNCZXppZXIgKGFULCBhQTEsIGFBMikgeyByZXR1cm4gKChBKGFBMSwgYUEyKSAqIGFUICsgQihhQTEsIGFBMikpICogYVQgKyBDKGFBMSkpICogYVQ7IH1cblxuLy8gUmV0dXJucyBkeC9kdCBnaXZlbiB0LCB4MSwgYW5kIHgyLCBvciBkeS9kdCBnaXZlbiB0LCB5MSwgYW5kIHkyLlxuZnVuY3Rpb24gZ2V0U2xvcGUgKGFULCBhQTEsIGFBMikgeyByZXR1cm4gMy4wICogQShhQTEsIGFBMikgKiBhVCAqIGFUICsgMi4wICogQihhQTEsIGFBMikgKiBhVCArIEMoYUExKTsgfVxuXG5mdW5jdGlvbiBiaW5hcnlTdWJkaXZpZGUgKGFYLCBhQSwgYUIsIG1YMSwgbVgyKSB7XG4gIHZhciBjdXJyZW50WCwgY3VycmVudFQsIGkgPSAwO1xuICBkbyB7XG4gICAgY3VycmVudFQgPSBhQSArIChhQiAtIGFBKSAvIDIuMDtcbiAgICBjdXJyZW50WCA9IGNhbGNCZXppZXIoY3VycmVudFQsIG1YMSwgbVgyKSAtIGFYO1xuICAgIGlmIChjdXJyZW50WCA+IDAuMCkge1xuICAgICAgYUIgPSBjdXJyZW50VDtcbiAgICB9IGVsc2Uge1xuICAgICAgYUEgPSBjdXJyZW50VDtcbiAgICB9XG4gIH0gd2hpbGUgKE1hdGguYWJzKGN1cnJlbnRYKSA+IFNVQkRJVklTSU9OX1BSRUNJU0lPTiAmJiArK2kgPCBTVUJESVZJU0lPTl9NQVhfSVRFUkFUSU9OUyk7XG4gIHJldHVybiBjdXJyZW50VDtcbn1cblxuZnVuY3Rpb24gbmV3dG9uUmFwaHNvbkl0ZXJhdGUgKGFYLCBhR3Vlc3NULCBtWDEsIG1YMikge1xuIGZvciAodmFyIGkgPSAwOyBpIDwgTkVXVE9OX0lURVJBVElPTlM7ICsraSkge1xuICAgdmFyIGN1cnJlbnRTbG9wZSA9IGdldFNsb3BlKGFHdWVzc1QsIG1YMSwgbVgyKTtcbiAgIGlmIChjdXJyZW50U2xvcGUgPT09IDAuMCkge1xuICAgICByZXR1cm4gYUd1ZXNzVDtcbiAgIH1cbiAgIHZhciBjdXJyZW50WCA9IGNhbGNCZXppZXIoYUd1ZXNzVCwgbVgxLCBtWDIpIC0gYVg7XG4gICBhR3Vlc3NUIC09IGN1cnJlbnRYIC8gY3VycmVudFNsb3BlO1xuIH1cbiByZXR1cm4gYUd1ZXNzVDtcbn1cblxuZnVuY3Rpb24gTGluZWFyRWFzaW5nICh4KSB7XG4gIHJldHVybiB4O1xufVxuXG52YXIgc3JjJDEgPSBmdW5jdGlvbiBiZXppZXIgKG1YMSwgbVkxLCBtWDIsIG1ZMikge1xuICBpZiAoISgwIDw9IG1YMSAmJiBtWDEgPD0gMSAmJiAwIDw9IG1YMiAmJiBtWDIgPD0gMSkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2JlemllciB4IHZhbHVlcyBtdXN0IGJlIGluIFswLCAxXSByYW5nZScpO1xuICB9XG5cbiAgaWYgKG1YMSA9PT0gbVkxICYmIG1YMiA9PT0gbVkyKSB7XG4gICAgcmV0dXJuIExpbmVhckVhc2luZztcbiAgfVxuXG4gIC8vIFByZWNvbXB1dGUgc2FtcGxlcyB0YWJsZVxuICB2YXIgc2FtcGxlVmFsdWVzID0gZmxvYXQzMkFycmF5U3VwcG9ydGVkID8gbmV3IEZsb2F0MzJBcnJheShrU3BsaW5lVGFibGVTaXplKSA6IG5ldyBBcnJheShrU3BsaW5lVGFibGVTaXplKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBrU3BsaW5lVGFibGVTaXplOyArK2kpIHtcbiAgICBzYW1wbGVWYWx1ZXNbaV0gPSBjYWxjQmV6aWVyKGkgKiBrU2FtcGxlU3RlcFNpemUsIG1YMSwgbVgyKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFRGb3JYIChhWCkge1xuICAgIHZhciBpbnRlcnZhbFN0YXJ0ID0gMC4wO1xuICAgIHZhciBjdXJyZW50U2FtcGxlID0gMTtcbiAgICB2YXIgbGFzdFNhbXBsZSA9IGtTcGxpbmVUYWJsZVNpemUgLSAxO1xuXG4gICAgZm9yICg7IGN1cnJlbnRTYW1wbGUgIT09IGxhc3RTYW1wbGUgJiYgc2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGVdIDw9IGFYOyArK2N1cnJlbnRTYW1wbGUpIHtcbiAgICAgIGludGVydmFsU3RhcnQgKz0ga1NhbXBsZVN0ZXBTaXplO1xuICAgIH1cbiAgICAtLWN1cnJlbnRTYW1wbGU7XG5cbiAgICAvLyBJbnRlcnBvbGF0ZSB0byBwcm92aWRlIGFuIGluaXRpYWwgZ3Vlc3MgZm9yIHRcbiAgICB2YXIgZGlzdCA9IChhWCAtIHNhbXBsZVZhbHVlc1tjdXJyZW50U2FtcGxlXSkgLyAoc2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGUgKyAxXSAtIHNhbXBsZVZhbHVlc1tjdXJyZW50U2FtcGxlXSk7XG4gICAgdmFyIGd1ZXNzRm9yVCA9IGludGVydmFsU3RhcnQgKyBkaXN0ICoga1NhbXBsZVN0ZXBTaXplO1xuXG4gICAgdmFyIGluaXRpYWxTbG9wZSA9IGdldFNsb3BlKGd1ZXNzRm9yVCwgbVgxLCBtWDIpO1xuICAgIGlmIChpbml0aWFsU2xvcGUgPj0gTkVXVE9OX01JTl9TTE9QRSkge1xuICAgICAgcmV0dXJuIG5ld3RvblJhcGhzb25JdGVyYXRlKGFYLCBndWVzc0ZvclQsIG1YMSwgbVgyKTtcbiAgICB9IGVsc2UgaWYgKGluaXRpYWxTbG9wZSA9PT0gMC4wKSB7XG4gICAgICByZXR1cm4gZ3Vlc3NGb3JUO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gYmluYXJ5U3ViZGl2aWRlKGFYLCBpbnRlcnZhbFN0YXJ0LCBpbnRlcnZhbFN0YXJ0ICsga1NhbXBsZVN0ZXBTaXplLCBtWDEsIG1YMik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIEJlemllckVhc2luZyAoeCkge1xuICAgIC8vIEJlY2F1c2UgSmF2YVNjcmlwdCBudW1iZXIgYXJlIGltcHJlY2lzZSwgd2Ugc2hvdWxkIGd1YXJhbnRlZSB0aGUgZXh0cmVtZXMgYXJlIHJpZ2h0LlxuICAgIGlmICh4ID09PSAwKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgaWYgKHggPT09IDEpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgICByZXR1cm4gY2FsY0JlemllcihnZXRURm9yWCh4KSwgbVkxLCBtWTIpO1xuICB9O1xufTtcblxudmFyIGtleUNvZGVzJDEgPSB7XG4gIExFRlQ6IDM3LFxuICBVUDogMzgsXG4gIFJJR0hUOiAzOSxcbiAgRE9XTjogNDAsXG4gIFNQQUNFOiAzMixcbiAgVEFCOiA5LFxuICBQQUdFVVA6IDMzLFxuICBQQUdFRE9XTjogMzQsXG4gIEhPTUU6IDM2LFxuICBFTkQ6IDM1XG59O1xuXG52YXIgX2RlZmF1bHQkMiA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0NvcmUpIHtcbiAgX2luaGVyaXRzKF9kZWZhdWx0LCBfQ29yZSk7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihfZGVmYXVsdCk7XG5cbiAgZnVuY3Rpb24gX2RlZmF1bHQoKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIF9kZWZhdWx0KTtcblxuICAgIGlmIChoaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICBoaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCc7XG4gICAgfVxuXG4gICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgb3B0aW9ucyk7XG4gICAgaWYgKF90aGlzLmluZXJ0aWEpIF90aGlzLmxlcnAgPSBfdGhpcy5pbmVydGlhICogMC4xO1xuICAgIF90aGlzLmlzU2Nyb2xsaW5nID0gZmFsc2U7XG4gICAgX3RoaXMuaXNEcmFnZ2luZ1Njcm9sbGJhciA9IGZhbHNlO1xuICAgIF90aGlzLmlzVGlja2luZyA9IGZhbHNlO1xuICAgIF90aGlzLmhhc1Njcm9sbFRpY2tpbmcgPSBmYWxzZTtcbiAgICBfdGhpcy5wYXJhbGxheEVsZW1lbnRzID0ge307XG4gICAgX3RoaXMuc3RvcCA9IGZhbHNlO1xuICAgIF90aGlzLnNjcm9sbGJhckNvbnRhaW5lciA9IG9wdGlvbnMuc2Nyb2xsYmFyQ29udGFpbmVyO1xuICAgIF90aGlzLmNoZWNrS2V5ID0gX3RoaXMuY2hlY2tLZXkuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBfdGhpcy5jaGVja0tleSwgZmFsc2UpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhfZGVmYXVsdCwgW3tcbiAgICBrZXk6IFwiaW5pdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHRoaXMuaHRtbC5jbGFzc0xpc3QuYWRkKHRoaXMuc21vb3RoQ2xhc3MpO1xuICAgICAgdGhpcy5odG1sLnNldEF0dHJpYnV0ZShcImRhdGEtXCIuY29uY2F0KHRoaXMubmFtZSwgXCItZGlyZWN0aW9uXCIpLCB0aGlzLmRpcmVjdGlvbik7XG4gICAgICB0aGlzLmluc3RhbmNlID0gX29iamVjdFNwcmVhZDIoe1xuICAgICAgICBkZWx0YToge1xuICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgeTogMFxuICAgICAgICB9XG4gICAgICB9LCB0aGlzLmluc3RhbmNlKTtcbiAgICAgIHRoaXMudnMgPSBuZXcgc3JjKHtcbiAgICAgICAgZWw6IHRoaXMuc2Nyb2xsRnJvbUFueXdoZXJlID8gZG9jdW1lbnQgOiB0aGlzLmVsLFxuICAgICAgICBtb3VzZU11bHRpcGxpZXI6IG5hdmlnYXRvci5wbGF0Zm9ybS5pbmRleE9mKCdXaW4nKSA+IC0xID8gMSA6IDAuNCxcbiAgICAgICAgZmlyZWZveE11bHRpcGxpZXI6IHRoaXMuZmlyZWZveE11bHRpcGxpZXIsXG4gICAgICAgIHRvdWNoTXVsdGlwbGllcjogdGhpcy50b3VjaE11bHRpcGxpZXIsXG4gICAgICAgIHVzZUtleWJvYXJkOiBmYWxzZSxcbiAgICAgICAgcGFzc2l2ZTogdHJ1ZVxuICAgICAgfSk7XG4gICAgICB0aGlzLnZzLm9uKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmIChfdGhpczIuc3RvcCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghX3RoaXMyLmlzRHJhZ2dpbmdTY3JvbGxiYXIpIHtcbiAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMyLnVwZGF0ZURlbHRhKGUpO1xuXG4gICAgICAgICAgICBpZiAoIV90aGlzMi5pc1Njcm9sbGluZykgX3RoaXMyLnN0YXJ0U2Nyb2xsaW5nKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5zZXRTY3JvbGxMaW1pdCgpO1xuICAgICAgdGhpcy5pbml0U2Nyb2xsQmFyKCk7XG4gICAgICB0aGlzLmFkZFNlY3Rpb25zKCk7XG4gICAgICB0aGlzLmFkZEVsZW1lbnRzKCk7XG4gICAgICB0aGlzLmNoZWNrU2Nyb2xsKHRydWUpO1xuICAgICAgdGhpcy50cmFuc2Zvcm1FbGVtZW50cyh0cnVlLCB0cnVlKTtcblxuICAgICAgX2dldChfZ2V0UHJvdG90eXBlT2YoX2RlZmF1bHQucHJvdG90eXBlKSwgXCJpbml0XCIsIHRoaXMpLmNhbGwodGhpcyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNldFNjcm9sbExpbWl0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldFNjcm9sbExpbWl0KCkge1xuICAgICAgdGhpcy5pbnN0YW5jZS5saW1pdC55ID0gdGhpcy5lbC5vZmZzZXRIZWlnaHQgLSB0aGlzLndpbmRvd0hlaWdodDtcblxuICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgdmFyIHRvdGFsV2lkdGggPSAwO1xuICAgICAgICB2YXIgbm9kZXMgPSB0aGlzLmVsLmNoaWxkcmVuO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB0b3RhbFdpZHRoICs9IG5vZGVzW2ldLm9mZnNldFdpZHRoO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pbnN0YW5jZS5saW1pdC54ID0gdG90YWxXaWR0aCAtIHRoaXMud2luZG93V2lkdGg7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInN0YXJ0U2Nyb2xsaW5nXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN0YXJ0U2Nyb2xsaW5nKCkge1xuICAgICAgdGhpcy5zdGFydFNjcm9sbFRzID0gRGF0ZS5ub3coKTsgLy8gUmVjb3JkIHRpbWVzdGFtcFxuXG4gICAgICB0aGlzLmlzU2Nyb2xsaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuY2hlY2tTY3JvbGwoKTtcbiAgICAgIHRoaXMuaHRtbC5jbGFzc0xpc3QuYWRkKHRoaXMuc2Nyb2xsaW5nQ2xhc3MpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzdG9wU2Nyb2xsaW5nXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN0b3BTY3JvbGxpbmcoKSB7XG4gICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmNoZWNrU2Nyb2xsUmFmKTsgLy8gUHJldmVudCBjaGVja1Njcm9sbCB0byBjb250aW51ZSBsb29waW5nXG5cbiAgICAgIGlmICh0aGlzLnNjcm9sbFRvUmFmKSB7XG4gICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuc2Nyb2xsVG9SYWYpO1xuICAgICAgICB0aGlzLnNjcm9sbFRvUmFmID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdGhpcy5pc1Njcm9sbGluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5pbnN0YW5jZS5zY3JvbGwueSA9IE1hdGgucm91bmQodGhpcy5pbnN0YW5jZS5zY3JvbGwueSk7XG4gICAgICB0aGlzLmh0bWwuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLnNjcm9sbGluZ0NsYXNzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY2hlY2tLZXlcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2hlY2tLZXkoZSkge1xuICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgIGlmICh0aGlzLnN0b3ApIHtcbiAgICAgICAgLy8gSWYgd2UgYXJlIHN0b3BwZWQsIHdlIGRvbid0IHdhbnQgYW55IHNjcm9sbCB0byBvY2N1ciBiZWNhdXNlIG9mIGEga2V5cHJlc3NcbiAgICAgICAgLy8gUHJldmVudCB0YWIgdG8gc2Nyb2xsIHRvIGFjdGl2ZUVsZW1lbnRcbiAgICAgICAgaWYgKGUua2V5Q29kZSA9PSBrZXlDb2RlcyQxLlRBQikge1xuICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBNYWtlIHN1cmUgbmF0aXZlIHNjcm9sbCBpcyBhbHdheXMgYXQgdG9wIG9mIHBhZ2VcbiAgICAgICAgICAgIF90aGlzMy5odG1sLnNjcm9sbFRvcCA9IDA7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA9IDA7XG4gICAgICAgICAgICBfdGhpczMuaHRtbC5zY3JvbGxMZWZ0ID0gMDtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc2Nyb2xsTGVmdCA9IDA7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XG4gICAgICAgIGNhc2Uga2V5Q29kZXMkMS5UQUI6XG4gICAgICAgICAgLy8gRG8gbm90IHJlbW92ZSB0aGUgUkFGXG4gICAgICAgICAgLy8gSXQgYWxsb3dzIHRvIG92ZXJyaWRlIHRoZSBicm93c2VyJ3MgbmF0aXZlIHNjcm9sbFRvLCB3aGljaCBpcyBlc3NlbnRpYWxcbiAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gTWFrZSBzdXJlIG5hdGl2ZSBzY3JvbGwgaXMgYWx3YXlzIGF0IHRvcCBvZiBwYWdlXG4gICAgICAgICAgICBfdGhpczMuaHRtbC5zY3JvbGxUb3AgPSAwO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgPSAwO1xuICAgICAgICAgICAgX3RoaXMzLmh0bWwuc2Nyb2xsTGVmdCA9IDA7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnNjcm9sbExlZnQgPSAwOyAvLyBSZXF1ZXN0IHNjcm9sbFRvIG9uIHRoZSBmb2N1c2VkRWxlbWVudCwgcHV0dGluZyBpdCBhdCB0aGUgY2VudGVyIG9mIHRoZSBzY3JlZW5cblxuICAgICAgICAgICAgX3RoaXMzLnNjcm9sbFRvKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQsIHtcbiAgICAgICAgICAgICAgb2Zmc2V0OiAtd2luZG93LmlubmVySGVpZ2h0IC8gMlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBrZXlDb2RlcyQxLlVQOlxuICAgICAgICAgIHRoaXMuaW5zdGFuY2UuZGVsdGFbdGhpcy5kaXJlY3Rpb25BeGlzXSAtPSAyNDA7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBrZXlDb2RlcyQxLkRPV046XG4gICAgICAgICAgdGhpcy5pbnN0YW5jZS5kZWx0YVt0aGlzLmRpcmVjdGlvbkF4aXNdICs9IDI0MDtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIGtleUNvZGVzJDEuUEFHRVVQOlxuICAgICAgICAgIHRoaXMuaW5zdGFuY2UuZGVsdGFbdGhpcy5kaXJlY3Rpb25BeGlzXSAtPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBrZXlDb2RlcyQxLlBBR0VET1dOOlxuICAgICAgICAgIHRoaXMuaW5zdGFuY2UuZGVsdGFbdGhpcy5kaXJlY3Rpb25BeGlzXSArPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBrZXlDb2RlcyQxLkhPTUU6XG4gICAgICAgICAgdGhpcy5pbnN0YW5jZS5kZWx0YVt0aGlzLmRpcmVjdGlvbkF4aXNdIC09IHRoaXMuaW5zdGFuY2UubGltaXRbdGhpcy5kaXJlY3Rpb25BeGlzXTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIGtleUNvZGVzJDEuRU5EOlxuICAgICAgICAgIHRoaXMuaW5zdGFuY2UuZGVsdGFbdGhpcy5kaXJlY3Rpb25BeGlzXSArPSB0aGlzLmluc3RhbmNlLmxpbWl0W3RoaXMuZGlyZWN0aW9uQXhpc107XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBrZXlDb2RlcyQxLlNQQUNFOlxuICAgICAgICAgIGlmICghKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSAmJiAhKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MVGV4dEFyZWFFbGVtZW50KSkge1xuICAgICAgICAgICAgaWYgKGUuc2hpZnRLZXkpIHtcbiAgICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS5kZWx0YVt0aGlzLmRpcmVjdGlvbkF4aXNdIC09IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UuZGVsdGFbdGhpcy5kaXJlY3Rpb25BeGlzXSArPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmluc3RhbmNlLmRlbHRhW3RoaXMuZGlyZWN0aW9uQXhpc10gPCAwKSB0aGlzLmluc3RhbmNlLmRlbHRhW3RoaXMuZGlyZWN0aW9uQXhpc10gPSAwO1xuICAgICAgaWYgKHRoaXMuaW5zdGFuY2UuZGVsdGFbdGhpcy5kaXJlY3Rpb25BeGlzXSA+IHRoaXMuaW5zdGFuY2UubGltaXRbdGhpcy5kaXJlY3Rpb25BeGlzXSkgdGhpcy5pbnN0YW5jZS5kZWx0YVt0aGlzLmRpcmVjdGlvbkF4aXNdID0gdGhpcy5pbnN0YW5jZS5saW1pdFt0aGlzLmRpcmVjdGlvbkF4aXNdO1xuICAgICAgdGhpcy5zdG9wU2Nyb2xsaW5nKCk7IC8vIFN0b3AgYW55IG1vdmVtZW50LCBhbGxvd3MgdG8ga2lsbCBhbnkgb3RoZXIgYHNjcm9sbFRvYCBzdGlsbCBoYXBwZW5pbmdcblxuICAgICAgdGhpcy5pc1Njcm9sbGluZyA9IHRydWU7XG4gICAgICB0aGlzLmNoZWNrU2Nyb2xsKCk7XG4gICAgICB0aGlzLmh0bWwuY2xhc3NMaXN0LmFkZCh0aGlzLnNjcm9sbGluZ0NsYXNzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY2hlY2tTY3JvbGxcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2hlY2tTY3JvbGwoKSB7XG4gICAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgICAgdmFyIGZvcmNlZCA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogZmFsc2U7XG5cbiAgICAgIGlmIChmb3JjZWQgfHwgdGhpcy5pc1Njcm9sbGluZyB8fCB0aGlzLmlzRHJhZ2dpbmdTY3JvbGxiYXIpIHtcbiAgICAgICAgaWYgKCF0aGlzLmhhc1Njcm9sbFRpY2tpbmcpIHtcbiAgICAgICAgICB0aGlzLmNoZWNrU2Nyb2xsUmFmID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpczQuY2hlY2tTY3JvbGwoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGlzLmhhc1Njcm9sbFRpY2tpbmcgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy51cGRhdGVTY3JvbGwoKTtcbiAgICAgICAgdmFyIGRpc3RhbmNlID0gTWF0aC5hYnModGhpcy5pbnN0YW5jZS5kZWx0YVt0aGlzLmRpcmVjdGlvbkF4aXNdIC0gdGhpcy5pbnN0YW5jZS5zY3JvbGxbdGhpcy5kaXJlY3Rpb25BeGlzXSk7XG4gICAgICAgIHZhciB0aW1lU2luY2VTdGFydCA9IERhdGUubm93KCkgLSB0aGlzLnN0YXJ0U2Nyb2xsVHM7IC8vIEdldCB0aGUgdGltZSBzaW5jZSB0aGUgc2Nyb2xsIHdhcyBzdGFydGVkOiB0aGUgc2Nyb2xsIGNhbiBiZSBzdG9wcGVkIGFnYWluIG9ubHkgcGFzdCAxMDBtc1xuXG4gICAgICAgIGlmICghdGhpcy5hbmltYXRpbmdTY3JvbGwgJiYgdGltZVNpbmNlU3RhcnQgPiAxMDAgJiYgKGRpc3RhbmNlIDwgMC41ICYmIHRoaXMuaW5zdGFuY2UuZGVsdGFbdGhpcy5kaXJlY3Rpb25BeGlzXSAhPSAwIHx8IGRpc3RhbmNlIDwgMC41ICYmIHRoaXMuaW5zdGFuY2UuZGVsdGFbdGhpcy5kaXJlY3Rpb25BeGlzXSA9PSAwKSkge1xuICAgICAgICAgIHRoaXMuc3RvcFNjcm9sbGluZygpO1xuICAgICAgICB9XG5cbiAgICAgICAgT2JqZWN0LmVudHJpZXModGhpcy5zZWN0aW9ucykuZm9yRWFjaChmdW5jdGlvbiAoX3JlZikge1xuICAgICAgICAgIHZhciBfcmVmMiA9IF9zbGljZWRUb0FycmF5KF9yZWYsIDIpLFxuICAgICAgICAgICAgICBpID0gX3JlZjJbMF0sXG4gICAgICAgICAgICAgIHNlY3Rpb24gPSBfcmVmMlsxXTtcblxuICAgICAgICAgIGlmIChzZWN0aW9uLnBlcnNpc3RlbnQgfHwgX3RoaXM0Lmluc3RhbmNlLnNjcm9sbFtfdGhpczQuZGlyZWN0aW9uQXhpc10gPiBzZWN0aW9uLm9mZnNldFtfdGhpczQuZGlyZWN0aW9uQXhpc10gJiYgX3RoaXM0Lmluc3RhbmNlLnNjcm9sbFtfdGhpczQuZGlyZWN0aW9uQXhpc10gPCBzZWN0aW9uLmxpbWl0W190aGlzNC5kaXJlY3Rpb25BeGlzXSkge1xuICAgICAgICAgICAgaWYgKF90aGlzNC5kaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICAgICAgICBfdGhpczQudHJhbnNmb3JtKHNlY3Rpb24uZWwsIC1fdGhpczQuaW5zdGFuY2Uuc2Nyb2xsW190aGlzNC5kaXJlY3Rpb25BeGlzXSwgMCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBfdGhpczQudHJhbnNmb3JtKHNlY3Rpb24uZWwsIDAsIC1fdGhpczQuaW5zdGFuY2Uuc2Nyb2xsW190aGlzNC5kaXJlY3Rpb25BeGlzXSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghc2VjdGlvbi5pblZpZXcpIHtcbiAgICAgICAgICAgICAgc2VjdGlvbi5pblZpZXcgPSB0cnVlO1xuICAgICAgICAgICAgICBzZWN0aW9uLmVsLnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgICAgICAgICAgICBzZWN0aW9uLmVsLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnYWxsJztcbiAgICAgICAgICAgICAgc2VjdGlvbi5lbC5zZXRBdHRyaWJ1dGUoXCJkYXRhLVwiLmNvbmNhdChfdGhpczQubmFtZSwgXCItc2VjdGlvbi1pbnZpZXdcIiksICcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHNlY3Rpb24uaW5WaWV3KSB7XG4gICAgICAgICAgICAgIHNlY3Rpb24uaW5WaWV3ID0gZmFsc2U7XG4gICAgICAgICAgICAgIHNlY3Rpb24uZWwuc3R5bGUub3BhY2l0eSA9IDA7XG4gICAgICAgICAgICAgIHNlY3Rpb24uZWwuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcbiAgICAgICAgICAgICAgc2VjdGlvbi5lbC5yZW1vdmVBdHRyaWJ1dGUoXCJkYXRhLVwiLmNvbmNhdChfdGhpczQubmFtZSwgXCItc2VjdGlvbi1pbnZpZXdcIikpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfdGhpczQudHJhbnNmb3JtKHNlY3Rpb24uZWwsIDAsIDApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRoaXMuZ2V0RGlyZWN0aW9uKSB7XG4gICAgICAgICAgdGhpcy5hZGREaXJlY3Rpb24oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmdldFNwZWVkKSB7XG4gICAgICAgICAgdGhpcy5hZGRTcGVlZCgpO1xuICAgICAgICAgIHRoaXMuc3BlZWRUcyA9IERhdGUubm93KCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmRldGVjdEVsZW1lbnRzKCk7XG4gICAgICAgIHRoaXMudHJhbnNmb3JtRWxlbWVudHMoKTtcblxuICAgICAgICBpZiAodGhpcy5oYXNTY3JvbGxiYXIpIHtcbiAgICAgICAgICB2YXIgc2Nyb2xsQmFyVHJhbnNsYXRpb24gPSB0aGlzLmluc3RhbmNlLnNjcm9sbFt0aGlzLmRpcmVjdGlvbkF4aXNdIC8gdGhpcy5pbnN0YW5jZS5saW1pdFt0aGlzLmRpcmVjdGlvbkF4aXNdICogdGhpcy5zY3JvbGxCYXJMaW1pdFt0aGlzLmRpcmVjdGlvbkF4aXNdO1xuXG4gICAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtKHRoaXMuc2Nyb2xsYmFyVGh1bWIsIHNjcm9sbEJhclRyYW5zbGF0aW9uLCAwKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm0odGhpcy5zY3JvbGxiYXJUaHVtYiwgMCwgc2Nyb2xsQmFyVHJhbnNsYXRpb24pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIF9nZXQoX2dldFByb3RvdHlwZU9mKF9kZWZhdWx0LnByb3RvdHlwZSksIFwiY2hlY2tTY3JvbGxcIiwgdGhpcykuY2FsbCh0aGlzKTtcblxuICAgICAgICB0aGlzLmhhc1Njcm9sbFRpY2tpbmcgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVzaXplXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlc2l6ZSgpIHtcbiAgICAgIHRoaXMud2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgdGhpcy53aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgdGhpcy5jaGVja0NvbnRleHQoKTtcbiAgICAgIHRoaXMud2luZG93TWlkZGxlID0ge1xuICAgICAgICB4OiB0aGlzLndpbmRvd1dpZHRoIC8gMixcbiAgICAgICAgeTogdGhpcy53aW5kb3dIZWlnaHQgLyAyXG4gICAgICB9O1xuICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidXBkYXRlRGVsdGFcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdXBkYXRlRGVsdGEoZSkge1xuICAgICAgdmFyIGRlbHRhO1xuICAgICAgdmFyIGdlc3R1cmVEaXJlY3Rpb24gPSB0aGlzW3RoaXMuY29udGV4dF0gJiYgdGhpc1t0aGlzLmNvbnRleHRdLmdlc3R1cmVEaXJlY3Rpb24gPyB0aGlzW3RoaXMuY29udGV4dF0uZ2VzdHVyZURpcmVjdGlvbiA6IHRoaXMuZ2VzdHVyZURpcmVjdGlvbjtcblxuICAgICAgaWYgKGdlc3R1cmVEaXJlY3Rpb24gPT09ICdib3RoJykge1xuICAgICAgICBkZWx0YSA9IGUuZGVsdGFYICsgZS5kZWx0YVk7XG4gICAgICB9IGVsc2UgaWYgKGdlc3R1cmVEaXJlY3Rpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgZGVsdGEgPSBlLmRlbHRhWTtcbiAgICAgIH0gZWxzZSBpZiAoZ2VzdHVyZURpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgIGRlbHRhID0gZS5kZWx0YVg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZWx0YSA9IGUuZGVsdGFZO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmluc3RhbmNlLmRlbHRhW3RoaXMuZGlyZWN0aW9uQXhpc10gLT0gZGVsdGEgKiB0aGlzLm11bHRpcGxpZXI7XG4gICAgICBpZiAodGhpcy5pbnN0YW5jZS5kZWx0YVt0aGlzLmRpcmVjdGlvbkF4aXNdIDwgMCkgdGhpcy5pbnN0YW5jZS5kZWx0YVt0aGlzLmRpcmVjdGlvbkF4aXNdID0gMDtcbiAgICAgIGlmICh0aGlzLmluc3RhbmNlLmRlbHRhW3RoaXMuZGlyZWN0aW9uQXhpc10gPiB0aGlzLmluc3RhbmNlLmxpbWl0W3RoaXMuZGlyZWN0aW9uQXhpc10pIHRoaXMuaW5zdGFuY2UuZGVsdGFbdGhpcy5kaXJlY3Rpb25BeGlzXSA9IHRoaXMuaW5zdGFuY2UubGltaXRbdGhpcy5kaXJlY3Rpb25BeGlzXTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidXBkYXRlU2Nyb2xsXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZVNjcm9sbChlKSB7XG4gICAgICBpZiAodGhpcy5pc1Njcm9sbGluZyB8fCB0aGlzLmlzRHJhZ2dpbmdTY3JvbGxiYXIpIHtcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5zY3JvbGxbdGhpcy5kaXJlY3Rpb25BeGlzXSA9IGxlcnAodGhpcy5pbnN0YW5jZS5zY3JvbGxbdGhpcy5kaXJlY3Rpb25BeGlzXSwgdGhpcy5pbnN0YW5jZS5kZWx0YVt0aGlzLmRpcmVjdGlvbkF4aXNdLCB0aGlzLmxlcnApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHRoaXMuaW5zdGFuY2Uuc2Nyb2xsW3RoaXMuZGlyZWN0aW9uQXhpc10gPiB0aGlzLmluc3RhbmNlLmxpbWl0W3RoaXMuZGlyZWN0aW9uQXhpc10pIHtcbiAgICAgICAgICB0aGlzLnNldFNjcm9sbCh0aGlzLmluc3RhbmNlLnNjcm9sbFt0aGlzLmRpcmVjdGlvbkF4aXNdLCB0aGlzLmluc3RhbmNlLmxpbWl0W3RoaXMuZGlyZWN0aW9uQXhpc10pO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnkgPCAwKSB7XG4gICAgICAgICAgdGhpcy5zZXRTY3JvbGwodGhpcy5pbnN0YW5jZS5zY3JvbGxbdGhpcy5kaXJlY3Rpb25BeGlzXSwgMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zZXRTY3JvbGwodGhpcy5pbnN0YW5jZS5zY3JvbGxbdGhpcy5kaXJlY3Rpb25BeGlzXSwgdGhpcy5pbnN0YW5jZS5kZWx0YVt0aGlzLmRpcmVjdGlvbkF4aXNdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJhZGREaXJlY3Rpb25cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkRGlyZWN0aW9uKCkge1xuICAgICAgaWYgKHRoaXMuaW5zdGFuY2UuZGVsdGEueSA+IHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnkpIHtcbiAgICAgICAgaWYgKHRoaXMuaW5zdGFuY2UuZGlyZWN0aW9uICE9PSAnZG93bicpIHtcbiAgICAgICAgICB0aGlzLmluc3RhbmNlLmRpcmVjdGlvbiA9ICdkb3duJztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0aGlzLmluc3RhbmNlLmRlbHRhLnkgPCB0aGlzLmluc3RhbmNlLnNjcm9sbC55KSB7XG4gICAgICAgIGlmICh0aGlzLmluc3RhbmNlLmRpcmVjdGlvbiAhPT0gJ3VwJykge1xuICAgICAgICAgIHRoaXMuaW5zdGFuY2UuZGlyZWN0aW9uID0gJ3VwJztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5pbnN0YW5jZS5kZWx0YS54ID4gdGhpcy5pbnN0YW5jZS5zY3JvbGwueCkge1xuICAgICAgICBpZiAodGhpcy5pbnN0YW5jZS5kaXJlY3Rpb24gIT09ICdyaWdodCcpIHtcbiAgICAgICAgICB0aGlzLmluc3RhbmNlLmRpcmVjdGlvbiA9ICdyaWdodCc7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodGhpcy5pbnN0YW5jZS5kZWx0YS54IDwgdGhpcy5pbnN0YW5jZS5zY3JvbGwueCkge1xuICAgICAgICBpZiAodGhpcy5pbnN0YW5jZS5kaXJlY3Rpb24gIT09ICdsZWZ0Jykge1xuICAgICAgICAgIHRoaXMuaW5zdGFuY2UuZGlyZWN0aW9uID0gJ2xlZnQnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImFkZFNwZWVkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZFNwZWVkKCkge1xuICAgICAgaWYgKHRoaXMuaW5zdGFuY2UuZGVsdGFbdGhpcy5kaXJlY3Rpb25BeGlzXSAhPSB0aGlzLmluc3RhbmNlLnNjcm9sbFt0aGlzLmRpcmVjdGlvbkF4aXNdKSB7XG4gICAgICAgIHRoaXMuaW5zdGFuY2Uuc3BlZWQgPSAodGhpcy5pbnN0YW5jZS5kZWx0YVt0aGlzLmRpcmVjdGlvbkF4aXNdIC0gdGhpcy5pbnN0YW5jZS5zY3JvbGxbdGhpcy5kaXJlY3Rpb25BeGlzXSkgLyBNYXRoLm1heCgxLCBEYXRlLm5vdygpIC0gdGhpcy5zcGVlZFRzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaW5zdGFuY2Uuc3BlZWQgPSAwO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJpbml0U2Nyb2xsQmFyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGluaXRTY3JvbGxCYXIoKSB7XG4gICAgICB0aGlzLnNjcm9sbGJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgIHRoaXMuc2Nyb2xsYmFyVGh1bWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICB0aGlzLnNjcm9sbGJhci5jbGFzc0xpc3QuYWRkKFwiXCIuY29uY2F0KHRoaXMuc2Nyb2xsYmFyQ2xhc3MpKTtcbiAgICAgIHRoaXMuc2Nyb2xsYmFyVGh1bWIuY2xhc3NMaXN0LmFkZChcIlwiLmNvbmNhdCh0aGlzLnNjcm9sbGJhckNsYXNzLCBcIl90aHVtYlwiKSk7XG4gICAgICB0aGlzLnNjcm9sbGJhci5hcHBlbmQodGhpcy5zY3JvbGxiYXJUaHVtYik7XG5cbiAgICAgIGlmICh0aGlzLnNjcm9sbGJhckNvbnRhaW5lcikge1xuICAgICAgICB0aGlzLnNjcm9sbGJhckNvbnRhaW5lci5hcHBlbmQodGhpcy5zY3JvbGxiYXIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmQodGhpcy5zY3JvbGxiYXIpO1xuICAgICAgfSAvLyBTY3JvbGxiYXIgRXZlbnRzXG5cblxuICAgICAgdGhpcy5nZXRTY3JvbGxCYXIgPSB0aGlzLmdldFNjcm9sbEJhci5iaW5kKHRoaXMpO1xuICAgICAgdGhpcy5yZWxlYXNlU2Nyb2xsQmFyID0gdGhpcy5yZWxlYXNlU2Nyb2xsQmFyLmJpbmQodGhpcyk7XG4gICAgICB0aGlzLm1vdmVTY3JvbGxCYXIgPSB0aGlzLm1vdmVTY3JvbGxCYXIuYmluZCh0aGlzKTtcbiAgICAgIHRoaXMuc2Nyb2xsYmFyVGh1bWIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5nZXRTY3JvbGxCYXIpO1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLnJlbGVhc2VTY3JvbGxCYXIpO1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMubW92ZVNjcm9sbEJhcik7IC8vIFNldCBzY3JvbGxiYXIgdmFsdWVzXG5cbiAgICAgIHRoaXMuaGFzU2Nyb2xsYmFyID0gZmFsc2U7XG5cbiAgICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgaWYgKHRoaXMuaW5zdGFuY2UubGltaXQueCArIHRoaXMud2luZG93V2lkdGggPD0gdGhpcy53aW5kb3dXaWR0aCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHRoaXMuaW5zdGFuY2UubGltaXQueSArIHRoaXMud2luZG93SGVpZ2h0IDw9IHRoaXMud2luZG93SGVpZ2h0KSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuaGFzU2Nyb2xsYmFyID0gdHJ1ZTtcbiAgICAgIHRoaXMuc2Nyb2xsYmFyQkNSID0gdGhpcy5zY3JvbGxiYXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICB0aGlzLnNjcm9sbGJhckhlaWdodCA9IHRoaXMuc2Nyb2xsYmFyQkNSLmhlaWdodDtcbiAgICAgIHRoaXMuc2Nyb2xsYmFyV2lkdGggPSB0aGlzLnNjcm9sbGJhckJDUi53aWR0aDtcblxuICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgdGhpcy5zY3JvbGxiYXJUaHVtYi5zdHlsZS53aWR0aCA9IFwiXCIuY29uY2F0KHRoaXMuc2Nyb2xsYmFyV2lkdGggKiB0aGlzLnNjcm9sbGJhcldpZHRoIC8gKHRoaXMuaW5zdGFuY2UubGltaXQueCArIHRoaXMuc2Nyb2xsYmFyV2lkdGgpLCBcInB4XCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zY3JvbGxiYXJUaHVtYi5zdHlsZS5oZWlnaHQgPSBcIlwiLmNvbmNhdCh0aGlzLnNjcm9sbGJhckhlaWdodCAqIHRoaXMuc2Nyb2xsYmFySGVpZ2h0IC8gKHRoaXMuaW5zdGFuY2UubGltaXQueSArIHRoaXMuc2Nyb2xsYmFySGVpZ2h0KSwgXCJweFwiKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zY3JvbGxiYXJUaHVtYkJDUiA9IHRoaXMuc2Nyb2xsYmFyVGh1bWIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICB0aGlzLnNjcm9sbEJhckxpbWl0ID0ge1xuICAgICAgICB4OiB0aGlzLnNjcm9sbGJhcldpZHRoIC0gdGhpcy5zY3JvbGxiYXJUaHVtYkJDUi53aWR0aCxcbiAgICAgICAgeTogdGhpcy5zY3JvbGxiYXJIZWlnaHQgLSB0aGlzLnNjcm9sbGJhclRodW1iQkNSLmhlaWdodFxuICAgICAgfTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVpbml0U2Nyb2xsQmFyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlaW5pdFNjcm9sbEJhcigpIHtcbiAgICAgIHRoaXMuaGFzU2Nyb2xsYmFyID0gZmFsc2U7XG5cbiAgICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgaWYgKHRoaXMuaW5zdGFuY2UubGltaXQueCArIHRoaXMud2luZG93V2lkdGggPD0gdGhpcy53aW5kb3dXaWR0aCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHRoaXMuaW5zdGFuY2UubGltaXQueSArIHRoaXMud2luZG93SGVpZ2h0IDw9IHRoaXMud2luZG93SGVpZ2h0KSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuaGFzU2Nyb2xsYmFyID0gdHJ1ZTtcbiAgICAgIHRoaXMuc2Nyb2xsYmFyQkNSID0gdGhpcy5zY3JvbGxiYXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICB0aGlzLnNjcm9sbGJhckhlaWdodCA9IHRoaXMuc2Nyb2xsYmFyQkNSLmhlaWdodDtcbiAgICAgIHRoaXMuc2Nyb2xsYmFyV2lkdGggPSB0aGlzLnNjcm9sbGJhckJDUi53aWR0aDtcblxuICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgdGhpcy5zY3JvbGxiYXJUaHVtYi5zdHlsZS53aWR0aCA9IFwiXCIuY29uY2F0KHRoaXMuc2Nyb2xsYmFyV2lkdGggKiB0aGlzLnNjcm9sbGJhcldpZHRoIC8gKHRoaXMuaW5zdGFuY2UubGltaXQueCArIHRoaXMuc2Nyb2xsYmFyV2lkdGgpLCBcInB4XCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zY3JvbGxiYXJUaHVtYi5zdHlsZS5oZWlnaHQgPSBcIlwiLmNvbmNhdCh0aGlzLnNjcm9sbGJhckhlaWdodCAqIHRoaXMuc2Nyb2xsYmFySGVpZ2h0IC8gKHRoaXMuaW5zdGFuY2UubGltaXQueSArIHRoaXMuc2Nyb2xsYmFySGVpZ2h0KSwgXCJweFwiKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zY3JvbGxiYXJUaHVtYkJDUiA9IHRoaXMuc2Nyb2xsYmFyVGh1bWIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICB0aGlzLnNjcm9sbEJhckxpbWl0ID0ge1xuICAgICAgICB4OiB0aGlzLnNjcm9sbGJhcldpZHRoIC0gdGhpcy5zY3JvbGxiYXJUaHVtYkJDUi53aWR0aCxcbiAgICAgICAgeTogdGhpcy5zY3JvbGxiYXJIZWlnaHQgLSB0aGlzLnNjcm9sbGJhclRodW1iQkNSLmhlaWdodFxuICAgICAgfTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZGVzdHJveVNjcm9sbEJhclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkZXN0cm95U2Nyb2xsQmFyKCkge1xuICAgICAgdGhpcy5zY3JvbGxiYXJUaHVtYi5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLmdldFNjcm9sbEJhcik7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMucmVsZWFzZVNjcm9sbEJhcik7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5tb3ZlU2Nyb2xsQmFyKTtcbiAgICAgIHRoaXMuc2Nyb2xsYmFyLnJlbW92ZSgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRTY3JvbGxCYXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0U2Nyb2xsQmFyKGUpIHtcbiAgICAgIHRoaXMuaXNEcmFnZ2luZ1Njcm9sbGJhciA9IHRydWU7XG4gICAgICB0aGlzLmNoZWNrU2Nyb2xsKCk7XG4gICAgICB0aGlzLmh0bWwuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLnNjcm9sbGluZ0NsYXNzKTtcbiAgICAgIHRoaXMuaHRtbC5jbGFzc0xpc3QuYWRkKHRoaXMuZHJhZ2dpbmdDbGFzcyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbGVhc2VTY3JvbGxCYXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVsZWFzZVNjcm9sbEJhcihlKSB7XG4gICAgICB0aGlzLmlzRHJhZ2dpbmdTY3JvbGxiYXIgPSBmYWxzZTtcbiAgICAgIHRoaXMuaHRtbC5jbGFzc0xpc3QuYWRkKHRoaXMuc2Nyb2xsaW5nQ2xhc3MpO1xuICAgICAgdGhpcy5odG1sLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5kcmFnZ2luZ0NsYXNzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwibW92ZVNjcm9sbEJhclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBtb3ZlU2Nyb2xsQmFyKGUpIHtcbiAgICAgIHZhciBfdGhpczUgPSB0aGlzO1xuXG4gICAgICBpZiAodGhpcy5pc0RyYWdnaW5nU2Nyb2xsYmFyKSB7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdmFyIHggPSAoZS5jbGllbnRYIC0gX3RoaXM1LnNjcm9sbGJhckJDUi5sZWZ0KSAqIDEwMCAvIF90aGlzNS5zY3JvbGxiYXJXaWR0aCAqIF90aGlzNS5pbnN0YW5jZS5saW1pdC54IC8gMTAwO1xuICAgICAgICAgIHZhciB5ID0gKGUuY2xpZW50WSAtIF90aGlzNS5zY3JvbGxiYXJCQ1IudG9wKSAqIDEwMCAvIF90aGlzNS5zY3JvbGxiYXJIZWlnaHQgKiBfdGhpczUuaW5zdGFuY2UubGltaXQueSAvIDEwMDtcblxuICAgICAgICAgIGlmICh5ID4gMCAmJiB5IDwgX3RoaXM1Lmluc3RhbmNlLmxpbWl0LnkpIHtcbiAgICAgICAgICAgIF90aGlzNS5pbnN0YW5jZS5kZWx0YS55ID0geTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoeCA+IDAgJiYgeCA8IF90aGlzNS5pbnN0YW5jZS5saW1pdC54KSB7XG4gICAgICAgICAgICBfdGhpczUuaW5zdGFuY2UuZGVsdGEueCA9IHg7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiYWRkRWxlbWVudHNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkRWxlbWVudHMoKSB7XG4gICAgICB2YXIgX3RoaXM2ID0gdGhpcztcblxuICAgICAgdGhpcy5lbHMgPSB7fTtcbiAgICAgIHRoaXMucGFyYWxsYXhFbGVtZW50cyA9IHt9OyAvLyB0aGlzLnNlY3Rpb25zLmZvckVhY2goKHNlY3Rpb24sIHkpID0+IHtcblxuICAgICAgdmFyIGVscyA9IHRoaXMuZWwucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLVwiLmNvbmNhdCh0aGlzLm5hbWUsIFwiXVwiKSk7XG4gICAgICBlbHMuZm9yRWFjaChmdW5jdGlvbiAoZWwsIGluZGV4KSB7XG4gICAgICAgIC8vIFRyeSBhbmQgZmluZCB0aGUgdGFyZ2V0J3MgcGFyZW50IHNlY3Rpb25cbiAgICAgICAgdmFyIHRhcmdldFBhcmVudHMgPSBnZXRQYXJlbnRzKGVsKTtcbiAgICAgICAgdmFyIHNlY3Rpb24gPSBPYmplY3QuZW50cmllcyhfdGhpczYuc2VjdGlvbnMpLm1hcChmdW5jdGlvbiAoX3JlZjMpIHtcbiAgICAgICAgICB2YXIgX3JlZjQgPSBfc2xpY2VkVG9BcnJheShfcmVmMywgMiksXG4gICAgICAgICAgICAgIGtleSA9IF9yZWY0WzBdLFxuICAgICAgICAgICAgICBzZWN0aW9uID0gX3JlZjRbMV07XG5cbiAgICAgICAgICByZXR1cm4gc2VjdGlvbjtcbiAgICAgICAgfSkuZmluZChmdW5jdGlvbiAoc2VjdGlvbikge1xuICAgICAgICAgIHJldHVybiB0YXJnZXRQYXJlbnRzLmluY2x1ZGVzKHNlY3Rpb24uZWwpO1xuICAgICAgICB9KTtcbiAgICAgICAgdmFyIGNsID0gZWwuZGF0YXNldFtfdGhpczYubmFtZSArICdDbGFzcyddIHx8IF90aGlzNltcImNsYXNzXCJdO1xuICAgICAgICB2YXIgaWQgPSB0eXBlb2YgZWwuZGF0YXNldFtfdGhpczYubmFtZSArICdJZCddID09PSAnc3RyaW5nJyA/IGVsLmRhdGFzZXRbX3RoaXM2Lm5hbWUgKyAnSWQnXSA6ICdlbCcgKyBpbmRleDtcbiAgICAgICAgdmFyIHRvcDtcbiAgICAgICAgdmFyIGxlZnQ7XG4gICAgICAgIHZhciByZXBlYXQgPSBlbC5kYXRhc2V0W190aGlzNi5uYW1lICsgJ1JlcGVhdCddO1xuICAgICAgICB2YXIgY2FsbCA9IGVsLmRhdGFzZXRbX3RoaXM2Lm5hbWUgKyAnQ2FsbCddO1xuICAgICAgICB2YXIgcG9zaXRpb24gPSBlbC5kYXRhc2V0W190aGlzNi5uYW1lICsgJ1Bvc2l0aW9uJ107XG4gICAgICAgIHZhciBkZWxheSA9IGVsLmRhdGFzZXRbX3RoaXM2Lm5hbWUgKyAnRGVsYXknXTtcbiAgICAgICAgdmFyIGRpcmVjdGlvbiA9IGVsLmRhdGFzZXRbX3RoaXM2Lm5hbWUgKyAnRGlyZWN0aW9uJ107XG4gICAgICAgIHZhciBzdGlja3kgPSB0eXBlb2YgZWwuZGF0YXNldFtfdGhpczYubmFtZSArICdTdGlja3knXSA9PT0gJ3N0cmluZyc7XG4gICAgICAgIHZhciBzcGVlZCA9IGVsLmRhdGFzZXRbX3RoaXM2Lm5hbWUgKyAnU3BlZWQnXSA/IHBhcnNlRmxvYXQoZWwuZGF0YXNldFtfdGhpczYubmFtZSArICdTcGVlZCddKSAvIDEwIDogZmFsc2U7XG4gICAgICAgIHZhciBvZmZzZXQgPSB0eXBlb2YgZWwuZGF0YXNldFtfdGhpczYubmFtZSArICdPZmZzZXQnXSA9PT0gJ3N0cmluZycgPyBlbC5kYXRhc2V0W190aGlzNi5uYW1lICsgJ09mZnNldCddLnNwbGl0KCcsJykgOiBfdGhpczYub2Zmc2V0O1xuICAgICAgICB2YXIgdGFyZ2V0ID0gZWwuZGF0YXNldFtfdGhpczYubmFtZSArICdUYXJnZXQnXTtcbiAgICAgICAgdmFyIHRhcmdldEVsO1xuXG4gICAgICAgIGlmICh0YXJnZXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRhcmdldEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIlwiLmNvbmNhdCh0YXJnZXQpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0YXJnZXRFbCA9IGVsO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHRhcmdldEVsQkNSID0gdGFyZ2V0RWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgICAgaWYgKHNlY3Rpb24gPT09IG51bGwpIHtcbiAgICAgICAgICB0b3AgPSB0YXJnZXRFbEJDUi50b3AgKyBfdGhpczYuaW5zdGFuY2Uuc2Nyb2xsLnkgLSBnZXRUcmFuc2xhdGUodGFyZ2V0RWwpLnk7XG4gICAgICAgICAgbGVmdCA9IHRhcmdldEVsQkNSLmxlZnQgKyBfdGhpczYuaW5zdGFuY2Uuc2Nyb2xsLnggLSBnZXRUcmFuc2xhdGUodGFyZ2V0RWwpLng7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKCFzZWN0aW9uLmluVmlldykge1xuICAgICAgICAgICAgdG9wID0gdGFyZ2V0RWxCQ1IudG9wIC0gZ2V0VHJhbnNsYXRlKHNlY3Rpb24uZWwpLnkgLSBnZXRUcmFuc2xhdGUodGFyZ2V0RWwpLnk7XG4gICAgICAgICAgICBsZWZ0ID0gdGFyZ2V0RWxCQ1IubGVmdCAtIGdldFRyYW5zbGF0ZShzZWN0aW9uLmVsKS54IC0gZ2V0VHJhbnNsYXRlKHRhcmdldEVsKS54O1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0b3AgPSB0YXJnZXRFbEJDUi50b3AgKyBfdGhpczYuaW5zdGFuY2Uuc2Nyb2xsLnkgLSBnZXRUcmFuc2xhdGUodGFyZ2V0RWwpLnk7XG4gICAgICAgICAgICBsZWZ0ID0gdGFyZ2V0RWxCQ1IubGVmdCArIF90aGlzNi5pbnN0YW5jZS5zY3JvbGwueCAtIGdldFRyYW5zbGF0ZSh0YXJnZXRFbCkueDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgYm90dG9tID0gdG9wICsgdGFyZ2V0RWwub2Zmc2V0SGVpZ2h0O1xuICAgICAgICB2YXIgcmlnaHQgPSBsZWZ0ICsgdGFyZ2V0RWwub2Zmc2V0V2lkdGg7XG4gICAgICAgIHZhciBtaWRkbGUgPSB7XG4gICAgICAgICAgeDogKHJpZ2h0IC0gbGVmdCkgLyAyICsgbGVmdCxcbiAgICAgICAgICB5OiAoYm90dG9tIC0gdG9wKSAvIDIgKyB0b3BcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoc3RpY2t5KSB7XG4gICAgICAgICAgdmFyIGVsQkNSID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgdmFyIGVsVG9wID0gZWxCQ1IudG9wO1xuICAgICAgICAgIHZhciBlbExlZnQgPSBlbEJDUi5sZWZ0O1xuICAgICAgICAgIHZhciBlbERpc3RhbmNlID0ge1xuICAgICAgICAgICAgeDogZWxMZWZ0IC0gbGVmdCxcbiAgICAgICAgICAgIHk6IGVsVG9wIC0gdG9wXG4gICAgICAgICAgfTtcbiAgICAgICAgICB0b3AgKz0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICAgIGxlZnQgKz0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgICAgYm90dG9tID0gZWxUb3AgKyB0YXJnZXRFbC5vZmZzZXRIZWlnaHQgLSBlbC5vZmZzZXRIZWlnaHQgLSBlbERpc3RhbmNlW190aGlzNi5kaXJlY3Rpb25BeGlzXTtcbiAgICAgICAgICByaWdodCA9IGVsTGVmdCArIHRhcmdldEVsLm9mZnNldFdpZHRoIC0gZWwub2Zmc2V0V2lkdGggLSBlbERpc3RhbmNlW190aGlzNi5kaXJlY3Rpb25BeGlzXTtcbiAgICAgICAgICBtaWRkbGUgPSB7XG4gICAgICAgICAgICB4OiAocmlnaHQgLSBsZWZ0KSAvIDIgKyBsZWZ0LFxuICAgICAgICAgICAgeTogKGJvdHRvbSAtIHRvcCkgLyAyICsgdG9wXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZXBlYXQgPT0gJ2ZhbHNlJykge1xuICAgICAgICAgIHJlcGVhdCA9IGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKHJlcGVhdCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICByZXBlYXQgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlcGVhdCA9IF90aGlzNi5yZXBlYXQ7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcmVsYXRpdmVPZmZzZXQgPSBbMCwgMF07XG5cbiAgICAgICAgaWYgKG9mZnNldCkge1xuICAgICAgICAgIGlmIChfdGhpczYuZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb2Zmc2V0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIGlmICh0eXBlb2Ygb2Zmc2V0W2ldID09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9mZnNldFtpXS5pbmNsdWRlcygnJScpKSB7XG4gICAgICAgICAgICAgICAgICByZWxhdGl2ZU9mZnNldFtpXSA9IHBhcnNlSW50KG9mZnNldFtpXS5yZXBsYWNlKCclJywgJycpICogX3RoaXM2LndpbmRvd1dpZHRoIC8gMTAwKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgcmVsYXRpdmVPZmZzZXRbaV0gPSBwYXJzZUludChvZmZzZXRbaV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZWxhdGl2ZU9mZnNldFtpXSA9IG9mZnNldFtpXTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZWZ0ID0gbGVmdCArIHJlbGF0aXZlT2Zmc2V0WzBdO1xuICAgICAgICAgICAgcmlnaHQgPSByaWdodCAtIHJlbGF0aXZlT2Zmc2V0WzFdO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9mZnNldC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICBpZiAodHlwZW9mIG9mZnNldFtpXSA9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGlmIChvZmZzZXRbaV0uaW5jbHVkZXMoJyUnKSkge1xuICAgICAgICAgICAgICAgICAgcmVsYXRpdmVPZmZzZXRbaV0gPSBwYXJzZUludChvZmZzZXRbaV0ucmVwbGFjZSgnJScsICcnKSAqIF90aGlzNi53aW5kb3dIZWlnaHQgLyAxMDApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICByZWxhdGl2ZU9mZnNldFtpXSA9IHBhcnNlSW50KG9mZnNldFtpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlbGF0aXZlT2Zmc2V0W2ldID0gb2Zmc2V0W2ldO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRvcCA9IHRvcCArIHJlbGF0aXZlT2Zmc2V0WzBdO1xuICAgICAgICAgICAgYm90dG9tID0gYm90dG9tIC0gcmVsYXRpdmVPZmZzZXRbMV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG1hcHBlZEVsID0ge1xuICAgICAgICAgIGVsOiBlbCxcbiAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgXCJjbGFzc1wiOiBjbCxcbiAgICAgICAgICBzZWN0aW9uOiBzZWN0aW9uLFxuICAgICAgICAgIHRvcDogdG9wLFxuICAgICAgICAgIG1pZGRsZTogbWlkZGxlLFxuICAgICAgICAgIGJvdHRvbTogYm90dG9tLFxuICAgICAgICAgIGxlZnQ6IGxlZnQsXG4gICAgICAgICAgcmlnaHQ6IHJpZ2h0LFxuICAgICAgICAgIG9mZnNldDogb2Zmc2V0LFxuICAgICAgICAgIHByb2dyZXNzOiAwLFxuICAgICAgICAgIHJlcGVhdDogcmVwZWF0LFxuICAgICAgICAgIGluVmlldzogZmFsc2UsXG4gICAgICAgICAgY2FsbDogY2FsbCxcbiAgICAgICAgICBzcGVlZDogc3BlZWQsXG4gICAgICAgICAgZGVsYXk6IGRlbGF5LFxuICAgICAgICAgIHBvc2l0aW9uOiBwb3NpdGlvbixcbiAgICAgICAgICB0YXJnZXQ6IHRhcmdldEVsLFxuICAgICAgICAgIGRpcmVjdGlvbjogZGlyZWN0aW9uLFxuICAgICAgICAgIHN0aWNreTogc3RpY2t5XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzNi5lbHNbaWRdID0gbWFwcGVkRWw7XG5cbiAgICAgICAgaWYgKGVsLmNsYXNzTGlzdC5jb250YWlucyhjbCkpIHtcbiAgICAgICAgICBfdGhpczYuc2V0SW5WaWV3KF90aGlzNi5lbHNbaWRdLCBpZCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3BlZWQgIT09IGZhbHNlIHx8IHN0aWNreSkge1xuICAgICAgICAgIF90aGlzNi5wYXJhbGxheEVsZW1lbnRzW2lkXSA9IG1hcHBlZEVsO1xuICAgICAgICB9XG4gICAgICB9KTsgLy8gfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImFkZFNlY3Rpb25zXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZFNlY3Rpb25zKCkge1xuICAgICAgdmFyIF90aGlzNyA9IHRoaXM7XG5cbiAgICAgIHRoaXMuc2VjdGlvbnMgPSB7fTtcbiAgICAgIHZhciBzZWN0aW9ucyA9IHRoaXMuZWwucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLVwiLmNvbmNhdCh0aGlzLm5hbWUsIFwiLXNlY3Rpb25dXCIpKTtcblxuICAgICAgaWYgKHNlY3Rpb25zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBzZWN0aW9ucyA9IFt0aGlzLmVsXTtcbiAgICAgIH1cblxuICAgICAgc2VjdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoc2VjdGlvbiwgaW5kZXgpIHtcbiAgICAgICAgdmFyIGlkID0gdHlwZW9mIHNlY3Rpb24uZGF0YXNldFtfdGhpczcubmFtZSArICdJZCddID09PSAnc3RyaW5nJyA/IHNlY3Rpb24uZGF0YXNldFtfdGhpczcubmFtZSArICdJZCddIDogJ3NlY3Rpb24nICsgaW5kZXg7XG4gICAgICAgIHZhciBzZWN0aW9uQkNSID0gc2VjdGlvbi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgdmFyIG9mZnNldCA9IHtcbiAgICAgICAgICB4OiBzZWN0aW9uQkNSLmxlZnQgLSB3aW5kb3cuaW5uZXJXaWR0aCAqIDEuNSAtIGdldFRyYW5zbGF0ZShzZWN0aW9uKS54LFxuICAgICAgICAgIHk6IHNlY3Rpb25CQ1IudG9wIC0gd2luZG93LmlubmVySGVpZ2h0ICogMS41IC0gZ2V0VHJhbnNsYXRlKHNlY3Rpb24pLnlcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGxpbWl0ID0ge1xuICAgICAgICAgIHg6IG9mZnNldC54ICsgc2VjdGlvbkJDUi53aWR0aCArIHdpbmRvdy5pbm5lcldpZHRoICogMixcbiAgICAgICAgICB5OiBvZmZzZXQueSArIHNlY3Rpb25CQ1IuaGVpZ2h0ICsgd2luZG93LmlubmVySGVpZ2h0ICogMlxuICAgICAgICB9O1xuICAgICAgICB2YXIgcGVyc2lzdGVudCA9IHR5cGVvZiBzZWN0aW9uLmRhdGFzZXRbX3RoaXM3Lm5hbWUgKyAnUGVyc2lzdGVudCddID09PSAnc3RyaW5nJztcbiAgICAgICAgc2VjdGlvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtc2Nyb2xsLXNlY3Rpb24taWQnLCBpZCk7XG4gICAgICAgIHZhciBtYXBwZWRTZWN0aW9uID0ge1xuICAgICAgICAgIGVsOiBzZWN0aW9uLFxuICAgICAgICAgIG9mZnNldDogb2Zmc2V0LFxuICAgICAgICAgIGxpbWl0OiBsaW1pdCxcbiAgICAgICAgICBpblZpZXc6IGZhbHNlLFxuICAgICAgICAgIHBlcnNpc3RlbnQ6IHBlcnNpc3RlbnQsXG4gICAgICAgICAgaWQ6IGlkXG4gICAgICAgIH07XG4gICAgICAgIF90aGlzNy5zZWN0aW9uc1tpZF0gPSBtYXBwZWRTZWN0aW9uO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInRyYW5zZm9ybVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB0cmFuc2Zvcm0oZWxlbWVudCwgeCwgeSwgZGVsYXkpIHtcbiAgICAgIHZhciB0cmFuc2Zvcm07XG5cbiAgICAgIGlmICghZGVsYXkpIHtcbiAgICAgICAgdHJhbnNmb3JtID0gXCJtYXRyaXgzZCgxLDAsMC4wMCwwLDAuMDAsMSwwLjAwLDAsMCwwLDEsMCxcIi5jb25jYXQoeCwgXCIsXCIpLmNvbmNhdCh5LCBcIiwwLDEpXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHN0YXJ0ID0gZ2V0VHJhbnNsYXRlKGVsZW1lbnQpO1xuICAgICAgICB2YXIgbGVycFggPSBsZXJwKHN0YXJ0LngsIHgsIGRlbGF5KTtcbiAgICAgICAgdmFyIGxlcnBZID0gbGVycChzdGFydC55LCB5LCBkZWxheSk7XG4gICAgICAgIHRyYW5zZm9ybSA9IFwibWF0cml4M2QoMSwwLDAuMDAsMCwwLjAwLDEsMC4wMCwwLDAsMCwxLDAsXCIuY29uY2F0KGxlcnBYLCBcIixcIikuY29uY2F0KGxlcnBZLCBcIiwwLDEpXCIpO1xuICAgICAgfVxuXG4gICAgICBlbGVtZW50LnN0eWxlLndlYmtpdFRyYW5zZm9ybSA9IHRyYW5zZm9ybTtcbiAgICAgIGVsZW1lbnQuc3R5bGUubXNUcmFuc2Zvcm0gPSB0cmFuc2Zvcm07XG4gICAgICBlbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IHRyYW5zZm9ybTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidHJhbnNmb3JtRWxlbWVudHNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdHJhbnNmb3JtRWxlbWVudHMoaXNGb3JjZWQpIHtcbiAgICAgIHZhciBfdGhpczggPSB0aGlzO1xuXG4gICAgICB2YXIgc2V0QWxsRWxlbWVudHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGZhbHNlO1xuICAgICAgdmFyIHNjcm9sbFJpZ2h0ID0gdGhpcy5pbnN0YW5jZS5zY3JvbGwueCArIHRoaXMud2luZG93V2lkdGg7XG4gICAgICB2YXIgc2Nyb2xsQm90dG9tID0gdGhpcy5pbnN0YW5jZS5zY3JvbGwueSArIHRoaXMud2luZG93SGVpZ2h0O1xuICAgICAgdmFyIHNjcm9sbE1pZGRsZSA9IHtcbiAgICAgICAgeDogdGhpcy5pbnN0YW5jZS5zY3JvbGwueCArIHRoaXMud2luZG93TWlkZGxlLngsXG4gICAgICAgIHk6IHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnkgKyB0aGlzLndpbmRvd01pZGRsZS55XG4gICAgICB9O1xuICAgICAgT2JqZWN0LmVudHJpZXModGhpcy5wYXJhbGxheEVsZW1lbnRzKS5mb3JFYWNoKGZ1bmN0aW9uIChfcmVmNSkge1xuICAgICAgICB2YXIgX3JlZjYgPSBfc2xpY2VkVG9BcnJheShfcmVmNSwgMiksXG4gICAgICAgICAgICBpID0gX3JlZjZbMF0sXG4gICAgICAgICAgICBjdXJyZW50ID0gX3JlZjZbMV07XG5cbiAgICAgICAgdmFyIHRyYW5zZm9ybURpc3RhbmNlID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKGlzRm9yY2VkKSB7XG4gICAgICAgICAgdHJhbnNmb3JtRGlzdGFuY2UgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGN1cnJlbnQuaW5WaWV3IHx8IHNldEFsbEVsZW1lbnRzKSB7XG4gICAgICAgICAgc3dpdGNoIChjdXJyZW50LnBvc2l0aW9uKSB7XG4gICAgICAgICAgICBjYXNlICd0b3AnOlxuICAgICAgICAgICAgICB0cmFuc2Zvcm1EaXN0YW5jZSA9IF90aGlzOC5pbnN0YW5jZS5zY3JvbGxbX3RoaXM4LmRpcmVjdGlvbkF4aXNdICogLWN1cnJlbnQuc3BlZWQ7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdlbGVtZW50VG9wJzpcbiAgICAgICAgICAgICAgdHJhbnNmb3JtRGlzdGFuY2UgPSAoc2Nyb2xsQm90dG9tIC0gY3VycmVudC50b3ApICogLWN1cnJlbnQuc3BlZWQ7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdib3R0b20nOlxuICAgICAgICAgICAgICB0cmFuc2Zvcm1EaXN0YW5jZSA9IChfdGhpczguaW5zdGFuY2UubGltaXRbX3RoaXM4LmRpcmVjdGlvbkF4aXNdIC0gc2Nyb2xsQm90dG9tICsgX3RoaXM4LndpbmRvd0hlaWdodCkgKiBjdXJyZW50LnNwZWVkO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnbGVmdCc6XG4gICAgICAgICAgICAgIHRyYW5zZm9ybURpc3RhbmNlID0gX3RoaXM4Lmluc3RhbmNlLnNjcm9sbFtfdGhpczguZGlyZWN0aW9uQXhpc10gKiAtY3VycmVudC5zcGVlZDtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ2VsZW1lbnRMZWZ0JzpcbiAgICAgICAgICAgICAgdHJhbnNmb3JtRGlzdGFuY2UgPSAoc2Nyb2xsUmlnaHQgLSBjdXJyZW50LmxlZnQpICogLWN1cnJlbnQuc3BlZWQ7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdyaWdodCc6XG4gICAgICAgICAgICAgIHRyYW5zZm9ybURpc3RhbmNlID0gKF90aGlzOC5pbnN0YW5jZS5saW1pdFtfdGhpczguZGlyZWN0aW9uQXhpc10gLSBzY3JvbGxSaWdodCArIF90aGlzOC53aW5kb3dIZWlnaHQpICogY3VycmVudC5zcGVlZDtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIHRyYW5zZm9ybURpc3RhbmNlID0gKHNjcm9sbE1pZGRsZVtfdGhpczguZGlyZWN0aW9uQXhpc10gLSBjdXJyZW50Lm1pZGRsZVtfdGhpczguZGlyZWN0aW9uQXhpc10pICogLWN1cnJlbnQuc3BlZWQ7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjdXJyZW50LnN0aWNreSkge1xuICAgICAgICAgIGlmIChjdXJyZW50LmluVmlldykge1xuICAgICAgICAgICAgaWYgKF90aGlzOC5kaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICAgICAgICB0cmFuc2Zvcm1EaXN0YW5jZSA9IF90aGlzOC5pbnN0YW5jZS5zY3JvbGwueCAtIGN1cnJlbnQubGVmdCArIHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtRGlzdGFuY2UgPSBfdGhpczguaW5zdGFuY2Uuc2Nyb2xsLnkgLSBjdXJyZW50LnRvcCArIHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKF90aGlzOC5kaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICAgICAgICBpZiAoX3RoaXM4Lmluc3RhbmNlLnNjcm9sbC54IDwgY3VycmVudC5sZWZ0IC0gd2luZG93LmlubmVyV2lkdGggJiYgX3RoaXM4Lmluc3RhbmNlLnNjcm9sbC54IDwgY3VycmVudC5sZWZ0IC0gd2luZG93LmlubmVyV2lkdGggLyAyKSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtRGlzdGFuY2UgPSAwO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKF90aGlzOC5pbnN0YW5jZS5zY3JvbGwueCA+IGN1cnJlbnQucmlnaHQgJiYgX3RoaXM4Lmluc3RhbmNlLnNjcm9sbC54ID4gY3VycmVudC5yaWdodCArIDEwMCkge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybURpc3RhbmNlID0gY3VycmVudC5yaWdodCAtIGN1cnJlbnQubGVmdCArIHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybURpc3RhbmNlID0gZmFsc2U7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGlmIChfdGhpczguaW5zdGFuY2Uuc2Nyb2xsLnkgPCBjdXJyZW50LnRvcCAtIHdpbmRvdy5pbm5lckhlaWdodCAmJiBfdGhpczguaW5zdGFuY2Uuc2Nyb2xsLnkgPCBjdXJyZW50LnRvcCAtIHdpbmRvdy5pbm5lckhlaWdodCAvIDIpIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1EaXN0YW5jZSA9IDA7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoX3RoaXM4Lmluc3RhbmNlLnNjcm9sbC55ID4gY3VycmVudC5ib3R0b20gJiYgX3RoaXM4Lmluc3RhbmNlLnNjcm9sbC55ID4gY3VycmVudC5ib3R0b20gKyAxMDApIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1EaXN0YW5jZSA9IGN1cnJlbnQuYm90dG9tIC0gY3VycmVudC50b3AgKyB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtRGlzdGFuY2UgPSBmYWxzZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0cmFuc2Zvcm1EaXN0YW5jZSAhPT0gZmFsc2UpIHtcbiAgICAgICAgICBpZiAoY3VycmVudC5kaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJyB8fCBfdGhpczguZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcgJiYgY3VycmVudC5kaXJlY3Rpb24gIT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgICAgIF90aGlzOC50cmFuc2Zvcm0oY3VycmVudC5lbCwgdHJhbnNmb3JtRGlzdGFuY2UsIDAsIGlzRm9yY2VkID8gZmFsc2UgOiBjdXJyZW50LmRlbGF5KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX3RoaXM4LnRyYW5zZm9ybShjdXJyZW50LmVsLCAwLCB0cmFuc2Zvcm1EaXN0YW5jZSwgaXNGb3JjZWQgPyBmYWxzZSA6IGN1cnJlbnQuZGVsYXkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNjcm9sbCB0byBhIGRlc2lyZWQgdGFyZ2V0LlxuICAgICAqXG4gICAgICogQHBhcmFtICBBdmFpbGFibGUgb3B0aW9ucyA6XG4gICAgICogICAgICAgICAgdGFyZ2V0IHtub2RlLCBzdHJpbmcsIFwidG9wXCIsIFwiYm90dG9tXCIsIGludH0gLSBUaGUgRE9NIGVsZW1lbnQgd2Ugd2FudCB0byBzY3JvbGwgdG9cbiAgICAgKiAgICAgICAgICBvcHRpb25zIHtvYmplY3R9IC0gT3B0aW9ucyBvYmplY3QgZm9yIGFkZGl0aW9ubmFsIHNldHRpbmdzLlxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJzY3JvbGxUb1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzY3JvbGxUbyh0YXJnZXQpIHtcbiAgICAgIHZhciBfdGhpczkgPSB0aGlzO1xuXG4gICAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgICAvLyBQYXJzZSBvcHRpb25zXG4gICAgICB2YXIgb2Zmc2V0ID0gcGFyc2VJbnQob3B0aW9ucy5vZmZzZXQpIHx8IDA7IC8vIEFuIG9mZnNldCB0byBhcHBseSBvbiB0b3Agb2YgZ2l2ZW4gYHRhcmdldGAgb3IgYHNvdXJjZUVsZW1gJ3MgdGFyZ2V0XG5cbiAgICAgIHZhciBkdXJhdGlvbiA9IG9wdGlvbnMuZHVyYXRpb24gfHwgMTAwMDsgLy8gRHVyYXRpb24gb2YgdGhlIHNjcm9sbCBhbmltYXRpb24gaW4gbWlsbGlzZWNvbmRzXG5cbiAgICAgIHZhciBlYXNpbmcgPSBvcHRpb25zLmVhc2luZyB8fCBbMC4yNSwgMC4wLCAwLjM1LCAxLjBdOyAvLyBBbiBhcnJheSBvZiA0IGZsb2F0cyBiZXR3ZWVuIDAgYW5kIDEgZGVmaW5pbmcgdGhlIGJlemllciBjdXJ2ZSBmb3IgdGhlIGFuaW1hdGlvbidzIGVhc2luZy4gU2VlIGh0dHA6Ly9ncmV3ZWIubWUvYmV6aWVyLWVhc2luZy1lZGl0b3IvZXhhbXBsZS9cblxuICAgICAgdmFyIGRpc2FibGVMZXJwID0gb3B0aW9ucy5kaXNhYmxlTGVycCA/IHRydWUgOiBmYWxzZTsgLy8gTGVycCBlZmZlY3Qgd29uJ3QgYmUgYXBwbGllZCBpZiBzZXQgdG8gdHJ1ZVxuXG4gICAgICB2YXIgY2FsbGJhY2sgPSBvcHRpb25zLmNhbGxiYWNrID8gb3B0aW9ucy5jYWxsYmFjayA6IGZhbHNlOyAvLyBmdW5jdGlvbiBjYWxsZWQgd2hlbiBzY3JvbGxUbyBjb21wbGV0ZXMgKG5vdGUgdGhhdCBpdCB3b24ndCB3YWl0IGZvciBsZXJwIHRvIHN0YWJpbGl6ZSlcblxuICAgICAgZWFzaW5nID0gc3JjJDEuYXBwbHkodm9pZCAwLCBfdG9Db25zdW1hYmxlQXJyYXkoZWFzaW5nKSk7XG5cbiAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnc3RyaW5nJykge1xuICAgICAgICAvLyBTZWxlY3RvciBvciBib3VuZGFyaWVzXG4gICAgICAgIGlmICh0YXJnZXQgPT09ICd0b3AnKSB7XG4gICAgICAgICAgdGFyZ2V0ID0gMDtcbiAgICAgICAgfSBlbHNlIGlmICh0YXJnZXQgPT09ICdib3R0b20nKSB7XG4gICAgICAgICAgdGFyZ2V0ID0gdGhpcy5pbnN0YW5jZS5saW1pdC55O1xuICAgICAgICB9IGVsc2UgaWYgKHRhcmdldCA9PT0gJ2xlZnQnKSB7XG4gICAgICAgICAgdGFyZ2V0ID0gMDtcbiAgICAgICAgfSBlbHNlIGlmICh0YXJnZXQgPT09ICdyaWdodCcpIHtcbiAgICAgICAgICB0YXJnZXQgPSB0aGlzLmluc3RhbmNlLmxpbWl0Lng7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBJZiB0aGUgcXVlcnkgZmFpbHMsIGFib3J0XG5cbiAgICAgICAgICBpZiAoIXRhcmdldCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnbnVtYmVyJykge1xuICAgICAgICAvLyBBYnNvbHV0ZSBjb29yZGluYXRlXG4gICAgICAgIHRhcmdldCA9IHBhcnNlSW50KHRhcmdldCk7XG4gICAgICB9IGVsc2UgaWYgKHRhcmdldCAmJiB0YXJnZXQudGFnTmFtZSkgOyBlbHNlIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdgdGFyZ2V0YCBwYXJhbWV0ZXIgaXMgbm90IHZhbGlkJyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gLy8gV2UgaGF2ZSBhIHRhcmdldCB0aGF0IGlzIG5vdCBhIGNvb3JkaW5hdGUgeWV0LCBnZXQgaXRcblxuXG4gICAgICBpZiAodHlwZW9mIHRhcmdldCAhPT0gJ251bWJlcicpIHtcbiAgICAgICAgLy8gVmVyaWZ5IHRoZSBnaXZlbiB0YXJnZXQgYmVsb25ncyB0byB0aGlzIHNjcm9sbCBzY29wZVxuICAgICAgICB2YXIgdGFyZ2V0SW5TY29wZSA9IGdldFBhcmVudHModGFyZ2V0KS5pbmNsdWRlcyh0aGlzLmVsKTtcblxuICAgICAgICBpZiAoIXRhcmdldEluU2NvcGUpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgdGFyZ2V0IGlzbid0IGluc2lkZSBvdXIgbWFpbiBlbGVtZW50LCBhYm9ydCBhbnkgYWN0aW9uXG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IC8vIEdldCB0YXJnZXQgb2Zmc2V0IGZyb20gdG9wXG5cblxuICAgICAgICB2YXIgdGFyZ2V0QkNSID0gdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICB2YXIgb2Zmc2V0VG9wID0gdGFyZ2V0QkNSLnRvcDtcbiAgICAgICAgdmFyIG9mZnNldExlZnQgPSB0YXJnZXRCQ1IubGVmdDsgLy8gVHJ5IGFuZCBmaW5kIHRoZSB0YXJnZXQncyBwYXJlbnQgc2VjdGlvblxuXG4gICAgICAgIHZhciB0YXJnZXRQYXJlbnRzID0gZ2V0UGFyZW50cyh0YXJnZXQpO1xuICAgICAgICB2YXIgcGFyZW50U2VjdGlvbiA9IHRhcmdldFBhcmVudHMuZmluZChmdW5jdGlvbiAoY2FuZGlkYXRlKSB7XG4gICAgICAgICAgcmV0dXJuIE9iamVjdC5lbnRyaWVzKF90aGlzOS5zZWN0aW9ucykgLy8gR2V0IHNlY3Rpb25zIGFzc29jaWF0aXZlIGFycmF5IGFzIGEgcmVndWxhciBhcnJheVxuICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKF9yZWY3KSB7XG4gICAgICAgICAgICB2YXIgX3JlZjggPSBfc2xpY2VkVG9BcnJheShfcmVmNywgMiksXG4gICAgICAgICAgICAgICAga2V5ID0gX3JlZjhbMF0sXG4gICAgICAgICAgICAgICAgc2VjdGlvbiA9IF9yZWY4WzFdO1xuXG4gICAgICAgICAgICByZXR1cm4gc2VjdGlvbjtcbiAgICAgICAgICB9KSAvLyBtYXAgdG8gc2VjdGlvbiBvbmx5ICh3ZSBkb250IG5lZWQgdGhlIGtleSBoZXJlKVxuICAgICAgICAgIC5maW5kKGZ1bmN0aW9uIChzZWN0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gc2VjdGlvbi5lbCA9PSBjYW5kaWRhdGU7XG4gICAgICAgICAgfSk7IC8vIGZpbmFsbHkgZmluZCB0aGUgc2VjdGlvbiB0aGF0IG1hdGNoZXMgdGhlIGNhbmRpZGF0ZVxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIHBhcmVudFNlY3Rpb25PZmZzZXQgPSAwO1xuXG4gICAgICAgIGlmIChwYXJlbnRTZWN0aW9uKSB7XG4gICAgICAgICAgcGFyZW50U2VjdGlvbk9mZnNldCA9IGdldFRyYW5zbGF0ZShwYXJlbnRTZWN0aW9uKVt0aGlzLmRpcmVjdGlvbkF4aXNdOyAvLyBXZSBnb3QgYSBwYXJlbnQgc2VjdGlvbiwgc3RvcmUgaXQncyBjdXJyZW50IG9mZnNldCB0byByZW1vdmUgaXQgbGF0ZXJcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBpZiBubyBwYXJlbnQgc2VjdGlvbiBpcyBmb3VuZCB3ZSBuZWVkIHRvIHVzZSBpbnN0YW5jZSBzY3JvbGwgZGlyZWN0bHlcbiAgICAgICAgICBwYXJlbnRTZWN0aW9uT2Zmc2V0ID0gLXRoaXMuaW5zdGFuY2Uuc2Nyb2xsW3RoaXMuZGlyZWN0aW9uQXhpc107XG4gICAgICAgIH0gLy8gRmluYWwgdmFsdWUgb2Ygc2Nyb2xsIGRlc3RpbmF0aW9uIDogb2Zmc2V0VG9wICsgKG9wdGlvbmFsIG9mZnNldCBnaXZlbiBpbiBvcHRpb25zKSAtIChwYXJlbnQncyBzZWN0aW9uIHRyYW5zbGF0ZSlcblxuXG4gICAgICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgICAgb2Zmc2V0ID0gb2Zmc2V0TGVmdCArIG9mZnNldCAtIHBhcmVudFNlY3Rpb25PZmZzZXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb2Zmc2V0ID0gb2Zmc2V0VG9wICsgb2Zmc2V0IC0gcGFyZW50U2VjdGlvbk9mZnNldDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb2Zmc2V0ID0gdGFyZ2V0ICsgb2Zmc2V0O1xuICAgICAgfSAvLyBBY3R1YWwgc2Nyb2xsdG9cbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAvLyBTZXR1cFxuXG5cbiAgICAgIHZhciBzY3JvbGxTdGFydCA9IHBhcnNlRmxvYXQodGhpcy5pbnN0YW5jZS5kZWx0YVt0aGlzLmRpcmVjdGlvbkF4aXNdKTtcbiAgICAgIHZhciBzY3JvbGxUYXJnZXQgPSBNYXRoLm1heCgwLCBNYXRoLm1pbihvZmZzZXQsIHRoaXMuaW5zdGFuY2UubGltaXRbdGhpcy5kaXJlY3Rpb25BeGlzXSkpOyAvLyBNYWtlIHN1cmUgb3VyIHRhcmdldCBpcyBpbiB0aGUgc2Nyb2xsIGJvdW5kYXJpZXNcblxuICAgICAgdmFyIHNjcm9sbERpZmYgPSBzY3JvbGxUYXJnZXQgLSBzY3JvbGxTdGFydDtcblxuICAgICAgdmFyIHJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcihwKSB7XG4gICAgICAgIGlmIChkaXNhYmxlTGVycCkge1xuICAgICAgICAgIGlmIChfdGhpczkuZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICAgIF90aGlzOS5zZXRTY3JvbGwoc2Nyb2xsU3RhcnQgKyBzY3JvbGxEaWZmICogcCwgX3RoaXM5Lmluc3RhbmNlLmRlbHRhLnkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfdGhpczkuc2V0U2Nyb2xsKF90aGlzOS5pbnN0YW5jZS5kZWx0YS54LCBzY3JvbGxTdGFydCArIHNjcm9sbERpZmYgKiBwKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX3RoaXM5Lmluc3RhbmNlLmRlbHRhW190aGlzOS5kaXJlY3Rpb25BeGlzXSA9IHNjcm9sbFN0YXJ0ICsgc2Nyb2xsRGlmZiAqIHA7XG4gICAgICAgIH1cbiAgICAgIH07IC8vIFByZXBhcmUgdGhlIHNjcm9sbFxuXG5cbiAgICAgIHRoaXMuYW5pbWF0aW5nU2Nyb2xsID0gdHJ1ZTsgLy8gVGhpcyBib29sZWFuIGFsbG93cyB0byBwcmV2ZW50IGBjaGVja1Njcm9sbCgpYCBmcm9tIGNhbGxpbmcgYHN0b3BTY3JvbGxpbmdgIHdoZW4gdGhlIGFuaW1hdGlvbiBpcyBzbG93IChpLmUuIGF0IHRoZSBiZWdpbm5pbmcgb2YgYW4gRWFzZUluKVxuXG4gICAgICB0aGlzLnN0b3BTY3JvbGxpbmcoKTsgLy8gU3RvcCBhbnkgbW92ZW1lbnQsIGFsbG93cyB0byBraWxsIGFueSBvdGhlciBgc2Nyb2xsVG9gIHN0aWxsIGhhcHBlbmluZ1xuXG4gICAgICB0aGlzLnN0YXJ0U2Nyb2xsaW5nKCk7IC8vIFJlc3RhcnQgdGhlIHNjcm9sbFxuICAgICAgLy8gU3RhcnQgdGhlIGFuaW1hdGlvbiBsb29wXG5cbiAgICAgIHZhciBzdGFydCA9IERhdGUubm93KCk7XG5cbiAgICAgIHZhciBsb29wID0gZnVuY3Rpb24gbG9vcCgpIHtcbiAgICAgICAgdmFyIHAgPSAoRGF0ZS5ub3coKSAtIHN0YXJ0KSAvIGR1cmF0aW9uOyAvLyBBbmltYXRpb24gcHJvZ3Jlc3NcblxuICAgICAgICBpZiAocCA+IDEpIHtcbiAgICAgICAgICAvLyBBbmltYXRpb24gZW5kc1xuICAgICAgICAgIHJlbmRlcigxKTtcbiAgICAgICAgICBfdGhpczkuYW5pbWF0aW5nU2Nyb2xsID0gZmFsc2U7XG4gICAgICAgICAgaWYgKGR1cmF0aW9uID09IDApIF90aGlzOS51cGRhdGUoKTtcbiAgICAgICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX3RoaXM5LnNjcm9sbFRvUmFmID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGxvb3ApO1xuICAgICAgICAgIHJlbmRlcihlYXNpbmcocCkpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBsb29wKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInVwZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1cGRhdGUoKSB7XG4gICAgICB0aGlzLnNldFNjcm9sbExpbWl0KCk7XG4gICAgICB0aGlzLmFkZFNlY3Rpb25zKCk7XG4gICAgICB0aGlzLmFkZEVsZW1lbnRzKCk7XG4gICAgICB0aGlzLmRldGVjdEVsZW1lbnRzKCk7XG4gICAgICB0aGlzLnVwZGF0ZVNjcm9sbCgpO1xuICAgICAgdGhpcy50cmFuc2Zvcm1FbGVtZW50cyh0cnVlKTtcbiAgICAgIHRoaXMucmVpbml0U2Nyb2xsQmFyKCk7XG4gICAgICB0aGlzLmNoZWNrU2Nyb2xsKHRydWUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzdGFydFNjcm9sbFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdGFydFNjcm9sbCgpIHtcbiAgICAgIHRoaXMuc3RvcCA9IGZhbHNlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzdG9wU2Nyb2xsXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN0b3BTY3JvbGwoKSB7XG4gICAgICB0aGlzLnN0b3AgPSB0cnVlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZXRTY3JvbGxcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0U2Nyb2xsKHgsIHkpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2UgPSBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwgdGhpcy5pbnN0YW5jZSksIHt9LCB7XG4gICAgICAgIHNjcm9sbDoge1xuICAgICAgICAgIHg6IHgsXG4gICAgICAgICAgeTogeVxuICAgICAgICB9LFxuICAgICAgICBkZWx0YToge1xuICAgICAgICAgIHg6IHgsXG4gICAgICAgICAgeTogeVxuICAgICAgICB9LFxuICAgICAgICBzcGVlZDogMFxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImRlc3Ryb3lcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgIF9nZXQoX2dldFByb3RvdHlwZU9mKF9kZWZhdWx0LnByb3RvdHlwZSksIFwiZGVzdHJveVwiLCB0aGlzKS5jYWxsKHRoaXMpO1xuXG4gICAgICB0aGlzLnN0b3BTY3JvbGxpbmcoKTtcbiAgICAgIHRoaXMuaHRtbC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuc21vb3RoQ2xhc3MpO1xuICAgICAgdGhpcy52cy5kZXN0cm95KCk7XG4gICAgICB0aGlzLmRlc3Ryb3lTY3JvbGxCYXIoKTtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5jaGVja0tleSwgZmFsc2UpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBfZGVmYXVsdDtcbn0oX2RlZmF1bHQpO1xuXG52YXIgU21vb3RoID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gU21vb3RoKCkge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTbW9vdGgpO1xuXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9uczsgLy8gT3ZlcnJpZGUgZGVmYXVsdCBvcHRpb25zIHdpdGggZ2l2ZW4gb25lc1xuXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkZWZhdWx0cywgb3B0aW9ucyk7XG4gICAgdGhpcy5zbWFydHBob25lID0gZGVmYXVsdHMuc21hcnRwaG9uZTtcbiAgICBpZiAob3B0aW9ucy5zbWFydHBob25lKSBPYmplY3QuYXNzaWduKHRoaXMuc21hcnRwaG9uZSwgb3B0aW9ucy5zbWFydHBob25lKTtcbiAgICB0aGlzLnRhYmxldCA9IGRlZmF1bHRzLnRhYmxldDtcbiAgICBpZiAob3B0aW9ucy50YWJsZXQpIE9iamVjdC5hc3NpZ24odGhpcy50YWJsZXQsIG9wdGlvbnMudGFibGV0KTtcbiAgICBpZiAoIXRoaXMuc21vb3RoICYmIHRoaXMuZGlyZWN0aW9uID09ICdob3Jpem9udGFsJykgY29uc29sZS53YXJuKCfwn5qoIGBzbW9vdGg6ZmFsc2VgICYgYGhvcml6b250YWxgIGRpcmVjdGlvbiBhcmUgbm90IHlldCBjb21wYXRpYmxlJyk7XG4gICAgaWYgKCF0aGlzLnRhYmxldC5zbW9vdGggJiYgdGhpcy50YWJsZXQuZGlyZWN0aW9uID09ICdob3Jpem9udGFsJykgY29uc29sZS53YXJuKCfwn5qoIGBzbW9vdGg6ZmFsc2VgICYgYGhvcml6b250YWxgIGRpcmVjdGlvbiBhcmUgbm90IHlldCBjb21wYXRpYmxlICh0YWJsZXQpJyk7XG4gICAgaWYgKCF0aGlzLnNtYXJ0cGhvbmUuc21vb3RoICYmIHRoaXMuc21hcnRwaG9uZS5kaXJlY3Rpb24gPT0gJ2hvcml6b250YWwnKSBjb25zb2xlLndhcm4oJ/CfmqggYHNtb290aDpmYWxzZWAgJiBgaG9yaXpvbnRhbGAgZGlyZWN0aW9uIGFyZSBub3QgeWV0IGNvbXBhdGlibGUgKHNtYXJ0cGhvbmUpJyk7XG4gICAgdGhpcy5pbml0KCk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoU21vb3RoLCBbe1xuICAgIGtleTogXCJpbml0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICB0aGlzLm9wdGlvbnMuaXNNb2JpbGUgPSAvQW5kcm9pZHxpUGhvbmV8aVBhZHxpUG9kfEJsYWNrQmVycnl8SUVNb2JpbGV8T3BlcmEgTWluaS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgfHwgbmF2aWdhdG9yLnBsYXRmb3JtID09PSAnTWFjSW50ZWwnICYmIG5hdmlnYXRvci5tYXhUb3VjaFBvaW50cyA+IDEgfHwgd2luZG93LmlubmVyV2lkdGggPCB0aGlzLnRhYmxldC5icmVha3BvaW50O1xuICAgICAgdGhpcy5vcHRpb25zLmlzVGFibGV0ID0gdGhpcy5vcHRpb25zLmlzTW9iaWxlICYmIHdpbmRvdy5pbm5lcldpZHRoID49IHRoaXMudGFibGV0LmJyZWFrcG9pbnQ7XG5cbiAgICAgIGlmICh0aGlzLnNtb290aCAmJiAhdGhpcy5vcHRpb25zLmlzTW9iaWxlIHx8IHRoaXMudGFibGV0LnNtb290aCAmJiB0aGlzLm9wdGlvbnMuaXNUYWJsZXQgfHwgdGhpcy5zbWFydHBob25lLnNtb290aCAmJiB0aGlzLm9wdGlvbnMuaXNNb2JpbGUgJiYgIXRoaXMub3B0aW9ucy5pc1RhYmxldCkge1xuICAgICAgICB0aGlzLnNjcm9sbCA9IG5ldyBfZGVmYXVsdCQyKHRoaXMub3B0aW9ucyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNjcm9sbCA9IG5ldyBfZGVmYXVsdCQxKHRoaXMub3B0aW9ucyk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2Nyb2xsLmluaXQoKTtcblxuICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5oYXNoKSB7XG4gICAgICAgIC8vIEdldCB0aGUgaGFzaCB3aXRob3V0IHRoZSAnIycgYW5kIGZpbmQgdGhlIG1hdGNoaW5nIGVsZW1lbnRcbiAgICAgICAgdmFyIGlkID0gd2luZG93LmxvY2F0aW9uLmhhc2guc2xpY2UoMSwgd2luZG93LmxvY2F0aW9uLmhhc2gubGVuZ3RoKTtcbiAgICAgICAgdmFyIHRhcmdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTsgLy8gSWYgZm91bmQsIHNjcm9sbCB0byB0aGUgZWxlbWVudFxuXG4gICAgICAgIGlmICh0YXJnZXQpIHRoaXMuc2Nyb2xsLnNjcm9sbFRvKHRhcmdldCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInVwZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1cGRhdGUoKSB7XG4gICAgICB0aGlzLnNjcm9sbC51cGRhdGUoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic3RhcnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgICB0aGlzLnNjcm9sbC5zdGFydFNjcm9sbCgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzdG9wXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgICB0aGlzLnNjcm9sbC5zdG9wU2Nyb2xsKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNjcm9sbFRvXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNjcm9sbFRvKHRhcmdldCwgb3B0aW9ucykge1xuICAgICAgdGhpcy5zY3JvbGwuc2Nyb2xsVG8odGFyZ2V0LCBvcHRpb25zKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2V0U2Nyb2xsXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldFNjcm9sbCh4LCB5KSB7XG4gICAgICB0aGlzLnNjcm9sbC5zZXRTY3JvbGwoeCwgeSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm9uXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uKGV2ZW50LCBmdW5jKSB7XG4gICAgICB0aGlzLnNjcm9sbC5zZXRFdmVudHMoZXZlbnQsIGZ1bmMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJvZmZcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb2ZmKGV2ZW50LCBmdW5jKSB7XG4gICAgICB0aGlzLnNjcm9sbC51bnNldEV2ZW50cyhldmVudCwgZnVuYyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImRlc3Ryb3lcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgIHRoaXMuc2Nyb2xsLmRlc3Ryb3koKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gU21vb3RoO1xufSgpO1xuXG52YXIgTmF0aXZlID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gTmF0aXZlKCkge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBOYXRpdmUpO1xuXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9uczsgLy8gT3ZlcnJpZGUgZGVmYXVsdCBvcHRpb25zIHdpdGggZ2l2ZW4gb25lc1xuXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkZWZhdWx0cywgb3B0aW9ucyk7XG4gICAgdGhpcy5zbWFydHBob25lID0gZGVmYXVsdHMuc21hcnRwaG9uZTtcbiAgICBpZiAob3B0aW9ucy5zbWFydHBob25lKSBPYmplY3QuYXNzaWduKHRoaXMuc21hcnRwaG9uZSwgb3B0aW9ucy5zbWFydHBob25lKTtcbiAgICB0aGlzLnRhYmxldCA9IGRlZmF1bHRzLnRhYmxldDtcbiAgICBpZiAob3B0aW9ucy50YWJsZXQpIE9iamVjdC5hc3NpZ24odGhpcy50YWJsZXQsIG9wdGlvbnMudGFibGV0KTtcbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhOYXRpdmUsIFt7XG4gICAga2V5OiBcImluaXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgIHRoaXMuc2Nyb2xsID0gbmV3IF9kZWZhdWx0JDEodGhpcy5vcHRpb25zKTtcbiAgICAgIHRoaXMuc2Nyb2xsLmluaXQoKTtcblxuICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5oYXNoKSB7XG4gICAgICAgIC8vIEdldCB0aGUgaGFzaCB3aXRob3V0IHRoZSAnIycgYW5kIGZpbmQgdGhlIG1hdGNoaW5nIGVsZW1lbnRcbiAgICAgICAgdmFyIGlkID0gd2luZG93LmxvY2F0aW9uLmhhc2guc2xpY2UoMSwgd2luZG93LmxvY2F0aW9uLmhhc2gubGVuZ3RoKTtcbiAgICAgICAgdmFyIHRhcmdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTsgLy8gSWYgZm91bmQsIHNjcm9sbCB0byB0aGUgZWxlbWVudFxuXG4gICAgICAgIGlmICh0YXJnZXQpIHRoaXMuc2Nyb2xsLnNjcm9sbFRvKHRhcmdldCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInVwZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1cGRhdGUoKSB7XG4gICAgICB0aGlzLnNjcm9sbC51cGRhdGUoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic3RhcnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgICB0aGlzLnNjcm9sbC5zdGFydFNjcm9sbCgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzdG9wXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgICB0aGlzLnNjcm9sbC5zdG9wU2Nyb2xsKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNjcm9sbFRvXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNjcm9sbFRvKHRhcmdldCwgb3B0aW9ucykge1xuICAgICAgdGhpcy5zY3JvbGwuc2Nyb2xsVG8odGFyZ2V0LCBvcHRpb25zKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2V0U2Nyb2xsXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldFNjcm9sbCh4LCB5KSB7XG4gICAgICB0aGlzLnNjcm9sbC5zZXRTY3JvbGwoeCwgeSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm9uXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uKGV2ZW50LCBmdW5jKSB7XG4gICAgICB0aGlzLnNjcm9sbC5zZXRFdmVudHMoZXZlbnQsIGZ1bmMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJvZmZcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb2ZmKGV2ZW50LCBmdW5jKSB7XG4gICAgICB0aGlzLnNjcm9sbC51bnNldEV2ZW50cyhldmVudCwgZnVuYyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImRlc3Ryb3lcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgIHRoaXMuc2Nyb2xsLmRlc3Ryb3koKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTmF0aXZlO1xufSgpO1xuXG5leHBvcnQgZGVmYXVsdCBTbW9vdGg7XG5leHBvcnQgeyBOYXRpdmUsIFNtb290aCB9O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLyohXG5XYXlwb2ludHMgLSA0LjAuMVxuQ29weXJpZ2h0IMKpIDIwMTEtMjAxNiBDYWxlYiBUcm91Z2h0b25cbkxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbmh0dHBzOi8vZ2l0aHViLmNvbS9pbWFrZXdlYnRoaW5ncy93YXlwb2ludHMvYmxvYi9tYXN0ZXIvbGljZW5zZXMudHh0XG4qL1xuKGZ1bmN0aW9uKCkge1xuICAndXNlIHN0cmljdCdcblxuICB2YXIga2V5Q291bnRlciA9IDBcbiAgdmFyIGFsbFdheXBvaW50cyA9IHt9XG5cbiAgLyogaHR0cDovL2ltYWtld2VidGhpbmdzLmNvbS93YXlwb2ludHMvYXBpL3dheXBvaW50ICovXG4gIGZ1bmN0aW9uIFdheXBvaW50KG9wdGlvbnMpIHtcbiAgICBpZiAoIW9wdGlvbnMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTm8gb3B0aW9ucyBwYXNzZWQgdG8gV2F5cG9pbnQgY29uc3RydWN0b3InKVxuICAgIH1cbiAgICBpZiAoIW9wdGlvbnMuZWxlbWVudCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBlbGVtZW50IG9wdGlvbiBwYXNzZWQgdG8gV2F5cG9pbnQgY29uc3RydWN0b3InKVxuICAgIH1cbiAgICBpZiAoIW9wdGlvbnMuaGFuZGxlcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBoYW5kbGVyIG9wdGlvbiBwYXNzZWQgdG8gV2F5cG9pbnQgY29uc3RydWN0b3InKVxuICAgIH1cblxuICAgIHRoaXMua2V5ID0gJ3dheXBvaW50LScgKyBrZXlDb3VudGVyXG4gICAgdGhpcy5vcHRpb25zID0gV2F5cG9pbnQuQWRhcHRlci5leHRlbmQoe30sIFdheXBvaW50LmRlZmF1bHRzLCBvcHRpb25zKVxuICAgIHRoaXMuZWxlbWVudCA9IHRoaXMub3B0aW9ucy5lbGVtZW50XG4gICAgdGhpcy5hZGFwdGVyID0gbmV3IFdheXBvaW50LkFkYXB0ZXIodGhpcy5lbGVtZW50KVxuICAgIHRoaXMuY2FsbGJhY2sgPSBvcHRpb25zLmhhbmRsZXJcbiAgICB0aGlzLmF4aXMgPSB0aGlzLm9wdGlvbnMuaG9yaXpvbnRhbCA/ICdob3Jpem9udGFsJyA6ICd2ZXJ0aWNhbCdcbiAgICB0aGlzLmVuYWJsZWQgPSB0aGlzLm9wdGlvbnMuZW5hYmxlZFxuICAgIHRoaXMudHJpZ2dlclBvaW50ID0gbnVsbFxuICAgIHRoaXMuZ3JvdXAgPSBXYXlwb2ludC5Hcm91cC5maW5kT3JDcmVhdGUoe1xuICAgICAgbmFtZTogdGhpcy5vcHRpb25zLmdyb3VwLFxuICAgICAgYXhpczogdGhpcy5heGlzXG4gICAgfSlcbiAgICB0aGlzLmNvbnRleHQgPSBXYXlwb2ludC5Db250ZXh0LmZpbmRPckNyZWF0ZUJ5RWxlbWVudCh0aGlzLm9wdGlvbnMuY29udGV4dClcblxuICAgIGlmIChXYXlwb2ludC5vZmZzZXRBbGlhc2VzW3RoaXMub3B0aW9ucy5vZmZzZXRdKSB7XG4gICAgICB0aGlzLm9wdGlvbnMub2Zmc2V0ID0gV2F5cG9pbnQub2Zmc2V0QWxpYXNlc1t0aGlzLm9wdGlvbnMub2Zmc2V0XVxuICAgIH1cbiAgICB0aGlzLmdyb3VwLmFkZCh0aGlzKVxuICAgIHRoaXMuY29udGV4dC5hZGQodGhpcylcbiAgICBhbGxXYXlwb2ludHNbdGhpcy5rZXldID0gdGhpc1xuICAgIGtleUNvdW50ZXIgKz0gMVxuICB9XG5cbiAgLyogUHJpdmF0ZSAqL1xuICBXYXlwb2ludC5wcm90b3R5cGUucXVldWVUcmlnZ2VyID0gZnVuY3Rpb24oZGlyZWN0aW9uKSB7XG4gICAgdGhpcy5ncm91cC5xdWV1ZVRyaWdnZXIodGhpcywgZGlyZWN0aW9uKVxuICB9XG5cbiAgLyogUHJpdmF0ZSAqL1xuICBXYXlwb2ludC5wcm90b3R5cGUudHJpZ2dlciA9IGZ1bmN0aW9uKGFyZ3MpIHtcbiAgICBpZiAoIXRoaXMuZW5hYmxlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGlmICh0aGlzLmNhbGxiYWNrKSB7XG4gICAgICB0aGlzLmNhbGxiYWNrLmFwcGx5KHRoaXMsIGFyZ3MpXG4gICAgfVxuICB9XG5cbiAgLyogUHVibGljICovXG4gIC8qIGh0dHA6Ly9pbWFrZXdlYnRoaW5ncy5jb20vd2F5cG9pbnRzL2FwaS9kZXN0cm95ICovXG4gIFdheXBvaW50LnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5jb250ZXh0LnJlbW92ZSh0aGlzKVxuICAgIHRoaXMuZ3JvdXAucmVtb3ZlKHRoaXMpXG4gICAgZGVsZXRlIGFsbFdheXBvaW50c1t0aGlzLmtleV1cbiAgfVxuXG4gIC8qIFB1YmxpYyAqL1xuICAvKiBodHRwOi8vaW1ha2V3ZWJ0aGluZ3MuY29tL3dheXBvaW50cy9hcGkvZGlzYWJsZSAqL1xuICBXYXlwb2ludC5wcm90b3R5cGUuZGlzYWJsZSA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuZW5hYmxlZCA9IGZhbHNlXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIC8qIFB1YmxpYyAqL1xuICAvKiBodHRwOi8vaW1ha2V3ZWJ0aGluZ3MuY29tL3dheXBvaW50cy9hcGkvZW5hYmxlICovXG4gIFdheXBvaW50LnByb3RvdHlwZS5lbmFibGUgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmNvbnRleHQucmVmcmVzaCgpXG4gICAgdGhpcy5lbmFibGVkID0gdHJ1ZVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICAvKiBQdWJsaWMgKi9cbiAgLyogaHR0cDovL2ltYWtld2VidGhpbmdzLmNvbS93YXlwb2ludHMvYXBpL25leHQgKi9cbiAgV2F5cG9pbnQucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5ncm91cC5uZXh0KHRoaXMpXG4gIH1cblxuICAvKiBQdWJsaWMgKi9cbiAgLyogaHR0cDovL2ltYWtld2VidGhpbmdzLmNvbS93YXlwb2ludHMvYXBpL3ByZXZpb3VzICovXG4gIFdheXBvaW50LnByb3RvdHlwZS5wcmV2aW91cyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdyb3VwLnByZXZpb3VzKHRoaXMpXG4gIH1cblxuICAvKiBQcml2YXRlICovXG4gIFdheXBvaW50Lmludm9rZUFsbCA9IGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgIHZhciBhbGxXYXlwb2ludHNBcnJheSA9IFtdXG4gICAgZm9yICh2YXIgd2F5cG9pbnRLZXkgaW4gYWxsV2F5cG9pbnRzKSB7XG4gICAgICBhbGxXYXlwb2ludHNBcnJheS5wdXNoKGFsbFdheXBvaW50c1t3YXlwb2ludEtleV0pXG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwLCBlbmQgPSBhbGxXYXlwb2ludHNBcnJheS5sZW5ndGg7IGkgPCBlbmQ7IGkrKykge1xuICAgICAgYWxsV2F5cG9pbnRzQXJyYXlbaV1bbWV0aG9kXSgpXG4gICAgfVxuICB9XG5cbiAgLyogUHVibGljICovXG4gIC8qIGh0dHA6Ly9pbWFrZXdlYnRoaW5ncy5jb20vd2F5cG9pbnRzL2FwaS9kZXN0cm95LWFsbCAqL1xuICBXYXlwb2ludC5kZXN0cm95QWxsID0gZnVuY3Rpb24oKSB7XG4gICAgV2F5cG9pbnQuaW52b2tlQWxsKCdkZXN0cm95JylcbiAgfVxuXG4gIC8qIFB1YmxpYyAqL1xuICAvKiBodHRwOi8vaW1ha2V3ZWJ0aGluZ3MuY29tL3dheXBvaW50cy9hcGkvZGlzYWJsZS1hbGwgKi9cbiAgV2F5cG9pbnQuZGlzYWJsZUFsbCA9IGZ1bmN0aW9uKCkge1xuICAgIFdheXBvaW50Lmludm9rZUFsbCgnZGlzYWJsZScpXG4gIH1cblxuICAvKiBQdWJsaWMgKi9cbiAgLyogaHR0cDovL2ltYWtld2VidGhpbmdzLmNvbS93YXlwb2ludHMvYXBpL2VuYWJsZS1hbGwgKi9cbiAgV2F5cG9pbnQuZW5hYmxlQWxsID0gZnVuY3Rpb24oKSB7XG4gICAgV2F5cG9pbnQuQ29udGV4dC5yZWZyZXNoQWxsKClcbiAgICBmb3IgKHZhciB3YXlwb2ludEtleSBpbiBhbGxXYXlwb2ludHMpIHtcbiAgICAgIGFsbFdheXBvaW50c1t3YXlwb2ludEtleV0uZW5hYmxlZCA9IHRydWVcbiAgICB9XG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIC8qIFB1YmxpYyAqL1xuICAvKiBodHRwOi8vaW1ha2V3ZWJ0aGluZ3MuY29tL3dheXBvaW50cy9hcGkvcmVmcmVzaC1hbGwgKi9cbiAgV2F5cG9pbnQucmVmcmVzaEFsbCA9IGZ1bmN0aW9uKCkge1xuICAgIFdheXBvaW50LkNvbnRleHQucmVmcmVzaEFsbCgpXG4gIH1cblxuICAvKiBQdWJsaWMgKi9cbiAgLyogaHR0cDovL2ltYWtld2VidGhpbmdzLmNvbS93YXlwb2ludHMvYXBpL3ZpZXdwb3J0LWhlaWdodCAqL1xuICBXYXlwb2ludC52aWV3cG9ydEhlaWdodCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodFxuICB9XG5cbiAgLyogUHVibGljICovXG4gIC8qIGh0dHA6Ly9pbWFrZXdlYnRoaW5ncy5jb20vd2F5cG9pbnRzL2FwaS92aWV3cG9ydC13aWR0aCAqL1xuICBXYXlwb2ludC52aWV3cG9ydFdpZHRoID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aFxuICB9XG5cbiAgV2F5cG9pbnQuYWRhcHRlcnMgPSBbXVxuXG4gIFdheXBvaW50LmRlZmF1bHRzID0ge1xuICAgIGNvbnRleHQ6IHdpbmRvdyxcbiAgICBjb250aW51b3VzOiB0cnVlLFxuICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgZ3JvdXA6ICdkZWZhdWx0JyxcbiAgICBob3Jpem9udGFsOiBmYWxzZSxcbiAgICBvZmZzZXQ6IDBcbiAgfVxuXG4gIFdheXBvaW50Lm9mZnNldEFsaWFzZXMgPSB7XG4gICAgJ2JvdHRvbS1pbi12aWV3JzogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5jb250ZXh0LmlubmVySGVpZ2h0KCkgLSB0aGlzLmFkYXB0ZXIub3V0ZXJIZWlnaHQoKVxuICAgIH0sXG4gICAgJ3JpZ2h0LWluLXZpZXcnOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbnRleHQuaW5uZXJXaWR0aCgpIC0gdGhpcy5hZGFwdGVyLm91dGVyV2lkdGgoKVxuICAgIH1cbiAgfVxuXG4gIHdpbmRvdy5XYXlwb2ludCA9IFdheXBvaW50XG59KCkpXG47KGZ1bmN0aW9uKCkge1xuICAndXNlIHN0cmljdCdcblxuICBmdW5jdGlvbiByZXF1ZXN0QW5pbWF0aW9uRnJhbWVTaGltKGNhbGxiYWNrKSB7XG4gICAgd2luZG93LnNldFRpbWVvdXQoY2FsbGJhY2ssIDEwMDAgLyA2MClcbiAgfVxuXG4gIHZhciBrZXlDb3VudGVyID0gMFxuICB2YXIgY29udGV4dHMgPSB7fVxuICB2YXIgV2F5cG9pbnQgPSB3aW5kb3cuV2F5cG9pbnRcbiAgdmFyIG9sZFdpbmRvd0xvYWQgPSB3aW5kb3cub25sb2FkXG5cbiAgLyogaHR0cDovL2ltYWtld2VidGhpbmdzLmNvbS93YXlwb2ludHMvYXBpL2NvbnRleHQgKi9cbiAgZnVuY3Rpb24gQ29udGV4dChlbGVtZW50KSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICAgIHRoaXMuQWRhcHRlciA9IFdheXBvaW50LkFkYXB0ZXJcbiAgICB0aGlzLmFkYXB0ZXIgPSBuZXcgdGhpcy5BZGFwdGVyKGVsZW1lbnQpXG4gICAgdGhpcy5rZXkgPSAnd2F5cG9pbnQtY29udGV4dC0nICsga2V5Q291bnRlclxuICAgIHRoaXMuZGlkU2Nyb2xsID0gZmFsc2VcbiAgICB0aGlzLmRpZFJlc2l6ZSA9IGZhbHNlXG4gICAgdGhpcy5vbGRTY3JvbGwgPSB7XG4gICAgICB4OiB0aGlzLmFkYXB0ZXIuc2Nyb2xsTGVmdCgpLFxuICAgICAgeTogdGhpcy5hZGFwdGVyLnNjcm9sbFRvcCgpXG4gICAgfVxuICAgIHRoaXMud2F5cG9pbnRzID0ge1xuICAgICAgdmVydGljYWw6IHt9LFxuICAgICAgaG9yaXpvbnRhbDoge31cbiAgICB9XG5cbiAgICBlbGVtZW50LndheXBvaW50Q29udGV4dEtleSA9IHRoaXMua2V5XG4gICAgY29udGV4dHNbZWxlbWVudC53YXlwb2ludENvbnRleHRLZXldID0gdGhpc1xuICAgIGtleUNvdW50ZXIgKz0gMVxuICAgIGlmICghV2F5cG9pbnQud2luZG93Q29udGV4dCkge1xuICAgICAgV2F5cG9pbnQud2luZG93Q29udGV4dCA9IHRydWVcbiAgICAgIFdheXBvaW50LndpbmRvd0NvbnRleHQgPSBuZXcgQ29udGV4dCh3aW5kb3cpXG4gICAgfVxuXG4gICAgdGhpcy5jcmVhdGVUaHJvdHRsZWRTY3JvbGxIYW5kbGVyKClcbiAgICB0aGlzLmNyZWF0ZVRocm90dGxlZFJlc2l6ZUhhbmRsZXIoKVxuICB9XG5cbiAgLyogUHJpdmF0ZSAqL1xuICBDb250ZXh0LnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbih3YXlwb2ludCkge1xuICAgIHZhciBheGlzID0gd2F5cG9pbnQub3B0aW9ucy5ob3Jpem9udGFsID8gJ2hvcml6b250YWwnIDogJ3ZlcnRpY2FsJ1xuICAgIHRoaXMud2F5cG9pbnRzW2F4aXNdW3dheXBvaW50LmtleV0gPSB3YXlwb2ludFxuICAgIHRoaXMucmVmcmVzaCgpXG4gIH1cblxuICAvKiBQcml2YXRlICovXG4gIENvbnRleHQucHJvdG90eXBlLmNoZWNrRW1wdHkgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaG9yaXpvbnRhbEVtcHR5ID0gdGhpcy5BZGFwdGVyLmlzRW1wdHlPYmplY3QodGhpcy53YXlwb2ludHMuaG9yaXpvbnRhbClcbiAgICB2YXIgdmVydGljYWxFbXB0eSA9IHRoaXMuQWRhcHRlci5pc0VtcHR5T2JqZWN0KHRoaXMud2F5cG9pbnRzLnZlcnRpY2FsKVxuICAgIHZhciBpc1dpbmRvdyA9IHRoaXMuZWxlbWVudCA9PSB0aGlzLmVsZW1lbnQud2luZG93XG4gICAgaWYgKGhvcml6b250YWxFbXB0eSAmJiB2ZXJ0aWNhbEVtcHR5ICYmICFpc1dpbmRvdykge1xuICAgICAgdGhpcy5hZGFwdGVyLm9mZignLndheXBvaW50cycpXG4gICAgICBkZWxldGUgY29udGV4dHNbdGhpcy5rZXldXG4gICAgfVxuICB9XG5cbiAgLyogUHJpdmF0ZSAqL1xuICBDb250ZXh0LnByb3RvdHlwZS5jcmVhdGVUaHJvdHRsZWRSZXNpemVIYW5kbGVyID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzXG5cbiAgICBmdW5jdGlvbiByZXNpemVIYW5kbGVyKCkge1xuICAgICAgc2VsZi5oYW5kbGVSZXNpemUoKVxuICAgICAgc2VsZi5kaWRSZXNpemUgPSBmYWxzZVxuICAgIH1cblxuICAgIHRoaXMuYWRhcHRlci5vbigncmVzaXplLndheXBvaW50cycsIGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKCFzZWxmLmRpZFJlc2l6ZSkge1xuICAgICAgICBzZWxmLmRpZFJlc2l6ZSA9IHRydWVcbiAgICAgICAgV2F5cG9pbnQucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlc2l6ZUhhbmRsZXIpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIC8qIFByaXZhdGUgKi9cbiAgQ29udGV4dC5wcm90b3R5cGUuY3JlYXRlVGhyb3R0bGVkU2Nyb2xsSGFuZGxlciA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBzZWxmID0gdGhpc1xuICAgIGZ1bmN0aW9uIHNjcm9sbEhhbmRsZXIoKSB7XG4gICAgICBzZWxmLmhhbmRsZVNjcm9sbCgpXG4gICAgICBzZWxmLmRpZFNjcm9sbCA9IGZhbHNlXG4gICAgfVxuXG4gICAgdGhpcy5hZGFwdGVyLm9uKCdzY3JvbGwud2F5cG9pbnRzJywgZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoIXNlbGYuZGlkU2Nyb2xsIHx8IFdheXBvaW50LmlzVG91Y2gpIHtcbiAgICAgICAgc2VsZi5kaWRTY3JvbGwgPSB0cnVlXG4gICAgICAgIFdheXBvaW50LnJlcXVlc3RBbmltYXRpb25GcmFtZShzY3JvbGxIYW5kbGVyKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICAvKiBQcml2YXRlICovXG4gIENvbnRleHQucHJvdG90eXBlLmhhbmRsZVJlc2l6ZSA9IGZ1bmN0aW9uKCkge1xuICAgIFdheXBvaW50LkNvbnRleHQucmVmcmVzaEFsbCgpXG4gIH1cblxuICAvKiBQcml2YXRlICovXG4gIENvbnRleHQucHJvdG90eXBlLmhhbmRsZVNjcm9sbCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciB0cmlnZ2VyZWRHcm91cHMgPSB7fVxuICAgIHZhciBheGVzID0ge1xuICAgICAgaG9yaXpvbnRhbDoge1xuICAgICAgICBuZXdTY3JvbGw6IHRoaXMuYWRhcHRlci5zY3JvbGxMZWZ0KCksXG4gICAgICAgIG9sZFNjcm9sbDogdGhpcy5vbGRTY3JvbGwueCxcbiAgICAgICAgZm9yd2FyZDogJ3JpZ2h0JyxcbiAgICAgICAgYmFja3dhcmQ6ICdsZWZ0J1xuICAgICAgfSxcbiAgICAgIHZlcnRpY2FsOiB7XG4gICAgICAgIG5ld1Njcm9sbDogdGhpcy5hZGFwdGVyLnNjcm9sbFRvcCgpLFxuICAgICAgICBvbGRTY3JvbGw6IHRoaXMub2xkU2Nyb2xsLnksXG4gICAgICAgIGZvcndhcmQ6ICdkb3duJyxcbiAgICAgICAgYmFja3dhcmQ6ICd1cCdcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBheGlzS2V5IGluIGF4ZXMpIHtcbiAgICAgIHZhciBheGlzID0gYXhlc1theGlzS2V5XVxuICAgICAgdmFyIGlzRm9yd2FyZCA9IGF4aXMubmV3U2Nyb2xsID4gYXhpcy5vbGRTY3JvbGxcbiAgICAgIHZhciBkaXJlY3Rpb24gPSBpc0ZvcndhcmQgPyBheGlzLmZvcndhcmQgOiBheGlzLmJhY2t3YXJkXG5cbiAgICAgIGZvciAodmFyIHdheXBvaW50S2V5IGluIHRoaXMud2F5cG9pbnRzW2F4aXNLZXldKSB7XG4gICAgICAgIHZhciB3YXlwb2ludCA9IHRoaXMud2F5cG9pbnRzW2F4aXNLZXldW3dheXBvaW50S2V5XVxuICAgICAgICBpZiAod2F5cG9pbnQudHJpZ2dlclBvaW50ID09PSBudWxsKSB7XG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuICAgICAgICB2YXIgd2FzQmVmb3JlVHJpZ2dlclBvaW50ID0gYXhpcy5vbGRTY3JvbGwgPCB3YXlwb2ludC50cmlnZ2VyUG9pbnRcbiAgICAgICAgdmFyIG5vd0FmdGVyVHJpZ2dlclBvaW50ID0gYXhpcy5uZXdTY3JvbGwgPj0gd2F5cG9pbnQudHJpZ2dlclBvaW50XG4gICAgICAgIHZhciBjcm9zc2VkRm9yd2FyZCA9IHdhc0JlZm9yZVRyaWdnZXJQb2ludCAmJiBub3dBZnRlclRyaWdnZXJQb2ludFxuICAgICAgICB2YXIgY3Jvc3NlZEJhY2t3YXJkID0gIXdhc0JlZm9yZVRyaWdnZXJQb2ludCAmJiAhbm93QWZ0ZXJUcmlnZ2VyUG9pbnRcbiAgICAgICAgaWYgKGNyb3NzZWRGb3J3YXJkIHx8IGNyb3NzZWRCYWNrd2FyZCkge1xuICAgICAgICAgIHdheXBvaW50LnF1ZXVlVHJpZ2dlcihkaXJlY3Rpb24pXG4gICAgICAgICAgdHJpZ2dlcmVkR3JvdXBzW3dheXBvaW50Lmdyb3VwLmlkXSA9IHdheXBvaW50Lmdyb3VwXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBncm91cEtleSBpbiB0cmlnZ2VyZWRHcm91cHMpIHtcbiAgICAgIHRyaWdnZXJlZEdyb3Vwc1tncm91cEtleV0uZmx1c2hUcmlnZ2VycygpXG4gICAgfVxuXG4gICAgdGhpcy5vbGRTY3JvbGwgPSB7XG4gICAgICB4OiBheGVzLmhvcml6b250YWwubmV3U2Nyb2xsLFxuICAgICAgeTogYXhlcy52ZXJ0aWNhbC5uZXdTY3JvbGxcbiAgICB9XG4gIH1cblxuICAvKiBQcml2YXRlICovXG4gIENvbnRleHQucHJvdG90eXBlLmlubmVySGVpZ2h0ID0gZnVuY3Rpb24oKSB7XG4gICAgLyplc2xpbnQtZGlzYWJsZSBlcWVxZXEgKi9cbiAgICBpZiAodGhpcy5lbGVtZW50ID09IHRoaXMuZWxlbWVudC53aW5kb3cpIHtcbiAgICAgIHJldHVybiBXYXlwb2ludC52aWV3cG9ydEhlaWdodCgpXG4gICAgfVxuICAgIC8qZXNsaW50LWVuYWJsZSBlcWVxZXEgKi9cbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyLmlubmVySGVpZ2h0KClcbiAgfVxuXG4gIC8qIFByaXZhdGUgKi9cbiAgQ29udGV4dC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24od2F5cG9pbnQpIHtcbiAgICBkZWxldGUgdGhpcy53YXlwb2ludHNbd2F5cG9pbnQuYXhpc11bd2F5cG9pbnQua2V5XVxuICAgIHRoaXMuY2hlY2tFbXB0eSgpXG4gIH1cblxuICAvKiBQcml2YXRlICovXG4gIENvbnRleHQucHJvdG90eXBlLmlubmVyV2lkdGggPSBmdW5jdGlvbigpIHtcbiAgICAvKmVzbGludC1kaXNhYmxlIGVxZXFlcSAqL1xuICAgIGlmICh0aGlzLmVsZW1lbnQgPT0gdGhpcy5lbGVtZW50LndpbmRvdykge1xuICAgICAgcmV0dXJuIFdheXBvaW50LnZpZXdwb3J0V2lkdGgoKVxuICAgIH1cbiAgICAvKmVzbGludC1lbmFibGUgZXFlcWVxICovXG4gICAgcmV0dXJuIHRoaXMuYWRhcHRlci5pbm5lcldpZHRoKClcbiAgfVxuXG4gIC8qIFB1YmxpYyAqL1xuICAvKiBodHRwOi8vaW1ha2V3ZWJ0aGluZ3MuY29tL3dheXBvaW50cy9hcGkvY29udGV4dC1kZXN0cm95ICovXG4gIENvbnRleHQucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgYWxsV2F5cG9pbnRzID0gW11cbiAgICBmb3IgKHZhciBheGlzIGluIHRoaXMud2F5cG9pbnRzKSB7XG4gICAgICBmb3IgKHZhciB3YXlwb2ludEtleSBpbiB0aGlzLndheXBvaW50c1theGlzXSkge1xuICAgICAgICBhbGxXYXlwb2ludHMucHVzaCh0aGlzLndheXBvaW50c1theGlzXVt3YXlwb2ludEtleV0pXG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwLCBlbmQgPSBhbGxXYXlwb2ludHMubGVuZ3RoOyBpIDwgZW5kOyBpKyspIHtcbiAgICAgIGFsbFdheXBvaW50c1tpXS5kZXN0cm95KClcbiAgICB9XG4gIH1cblxuICAvKiBQdWJsaWMgKi9cbiAgLyogaHR0cDovL2ltYWtld2VidGhpbmdzLmNvbS93YXlwb2ludHMvYXBpL2NvbnRleHQtcmVmcmVzaCAqL1xuICBDb250ZXh0LnByb3RvdHlwZS5yZWZyZXNoID0gZnVuY3Rpb24oKSB7XG4gICAgLyplc2xpbnQtZGlzYWJsZSBlcWVxZXEgKi9cbiAgICB2YXIgaXNXaW5kb3cgPSB0aGlzLmVsZW1lbnQgPT0gdGhpcy5lbGVtZW50LndpbmRvd1xuICAgIC8qZXNsaW50LWVuYWJsZSBlcWVxZXEgKi9cbiAgICB2YXIgY29udGV4dE9mZnNldCA9IGlzV2luZG93ID8gdW5kZWZpbmVkIDogdGhpcy5hZGFwdGVyLm9mZnNldCgpXG4gICAgdmFyIHRyaWdnZXJlZEdyb3VwcyA9IHt9XG4gICAgdmFyIGF4ZXNcblxuICAgIHRoaXMuaGFuZGxlU2Nyb2xsKClcbiAgICBheGVzID0ge1xuICAgICAgaG9yaXpvbnRhbDoge1xuICAgICAgICBjb250ZXh0T2Zmc2V0OiBpc1dpbmRvdyA/IDAgOiBjb250ZXh0T2Zmc2V0LmxlZnQsXG4gICAgICAgIGNvbnRleHRTY3JvbGw6IGlzV2luZG93ID8gMCA6IHRoaXMub2xkU2Nyb2xsLngsXG4gICAgICAgIGNvbnRleHREaW1lbnNpb246IHRoaXMuaW5uZXJXaWR0aCgpLFxuICAgICAgICBvbGRTY3JvbGw6IHRoaXMub2xkU2Nyb2xsLngsXG4gICAgICAgIGZvcndhcmQ6ICdyaWdodCcsXG4gICAgICAgIGJhY2t3YXJkOiAnbGVmdCcsXG4gICAgICAgIG9mZnNldFByb3A6ICdsZWZ0J1xuICAgICAgfSxcbiAgICAgIHZlcnRpY2FsOiB7XG4gICAgICAgIGNvbnRleHRPZmZzZXQ6IGlzV2luZG93ID8gMCA6IGNvbnRleHRPZmZzZXQudG9wLFxuICAgICAgICBjb250ZXh0U2Nyb2xsOiBpc1dpbmRvdyA/IDAgOiB0aGlzLm9sZFNjcm9sbC55LFxuICAgICAgICBjb250ZXh0RGltZW5zaW9uOiB0aGlzLmlubmVySGVpZ2h0KCksXG4gICAgICAgIG9sZFNjcm9sbDogdGhpcy5vbGRTY3JvbGwueSxcbiAgICAgICAgZm9yd2FyZDogJ2Rvd24nLFxuICAgICAgICBiYWNrd2FyZDogJ3VwJyxcbiAgICAgICAgb2Zmc2V0UHJvcDogJ3RvcCdcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBheGlzS2V5IGluIGF4ZXMpIHtcbiAgICAgIHZhciBheGlzID0gYXhlc1theGlzS2V5XVxuICAgICAgZm9yICh2YXIgd2F5cG9pbnRLZXkgaW4gdGhpcy53YXlwb2ludHNbYXhpc0tleV0pIHtcbiAgICAgICAgdmFyIHdheXBvaW50ID0gdGhpcy53YXlwb2ludHNbYXhpc0tleV1bd2F5cG9pbnRLZXldXG4gICAgICAgIHZhciBhZGp1c3RtZW50ID0gd2F5cG9pbnQub3B0aW9ucy5vZmZzZXRcbiAgICAgICAgdmFyIG9sZFRyaWdnZXJQb2ludCA9IHdheXBvaW50LnRyaWdnZXJQb2ludFxuICAgICAgICB2YXIgZWxlbWVudE9mZnNldCA9IDBcbiAgICAgICAgdmFyIGZyZXNoV2F5cG9pbnQgPSBvbGRUcmlnZ2VyUG9pbnQgPT0gbnVsbFxuICAgICAgICB2YXIgY29udGV4dE1vZGlmaWVyLCB3YXNCZWZvcmVTY3JvbGwsIG5vd0FmdGVyU2Nyb2xsXG4gICAgICAgIHZhciB0cmlnZ2VyZWRCYWNrd2FyZCwgdHJpZ2dlcmVkRm9yd2FyZFxuXG4gICAgICAgIGlmICh3YXlwb2ludC5lbGVtZW50ICE9PSB3YXlwb2ludC5lbGVtZW50LndpbmRvdykge1xuICAgICAgICAgIGVsZW1lbnRPZmZzZXQgPSB3YXlwb2ludC5hZGFwdGVyLm9mZnNldCgpW2F4aXMub2Zmc2V0UHJvcF1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgYWRqdXN0bWVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGFkanVzdG1lbnQgPSBhZGp1c3RtZW50LmFwcGx5KHdheXBvaW50KVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBhZGp1c3RtZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGFkanVzdG1lbnQgPSBwYXJzZUZsb2F0KGFkanVzdG1lbnQpXG4gICAgICAgICAgaWYgKHdheXBvaW50Lm9wdGlvbnMub2Zmc2V0LmluZGV4T2YoJyUnKSA+IC0gMSkge1xuICAgICAgICAgICAgYWRqdXN0bWVudCA9IE1hdGguY2VpbChheGlzLmNvbnRleHREaW1lbnNpb24gKiBhZGp1c3RtZW50IC8gMTAwKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHRNb2RpZmllciA9IGF4aXMuY29udGV4dFNjcm9sbCAtIGF4aXMuY29udGV4dE9mZnNldFxuICAgICAgICB3YXlwb2ludC50cmlnZ2VyUG9pbnQgPSBNYXRoLmZsb29yKGVsZW1lbnRPZmZzZXQgKyBjb250ZXh0TW9kaWZpZXIgLSBhZGp1c3RtZW50KVxuICAgICAgICB3YXNCZWZvcmVTY3JvbGwgPSBvbGRUcmlnZ2VyUG9pbnQgPCBheGlzLm9sZFNjcm9sbFxuICAgICAgICBub3dBZnRlclNjcm9sbCA9IHdheXBvaW50LnRyaWdnZXJQb2ludCA+PSBheGlzLm9sZFNjcm9sbFxuICAgICAgICB0cmlnZ2VyZWRCYWNrd2FyZCA9IHdhc0JlZm9yZVNjcm9sbCAmJiBub3dBZnRlclNjcm9sbFxuICAgICAgICB0cmlnZ2VyZWRGb3J3YXJkID0gIXdhc0JlZm9yZVNjcm9sbCAmJiAhbm93QWZ0ZXJTY3JvbGxcblxuICAgICAgICBpZiAoIWZyZXNoV2F5cG9pbnQgJiYgdHJpZ2dlcmVkQmFja3dhcmQpIHtcbiAgICAgICAgICB3YXlwb2ludC5xdWV1ZVRyaWdnZXIoYXhpcy5iYWNrd2FyZClcbiAgICAgICAgICB0cmlnZ2VyZWRHcm91cHNbd2F5cG9pbnQuZ3JvdXAuaWRdID0gd2F5cG9pbnQuZ3JvdXBcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICghZnJlc2hXYXlwb2ludCAmJiB0cmlnZ2VyZWRGb3J3YXJkKSB7XG4gICAgICAgICAgd2F5cG9pbnQucXVldWVUcmlnZ2VyKGF4aXMuZm9yd2FyZClcbiAgICAgICAgICB0cmlnZ2VyZWRHcm91cHNbd2F5cG9pbnQuZ3JvdXAuaWRdID0gd2F5cG9pbnQuZ3JvdXBcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChmcmVzaFdheXBvaW50ICYmIGF4aXMub2xkU2Nyb2xsID49IHdheXBvaW50LnRyaWdnZXJQb2ludCkge1xuICAgICAgICAgIHdheXBvaW50LnF1ZXVlVHJpZ2dlcihheGlzLmZvcndhcmQpXG4gICAgICAgICAgdHJpZ2dlcmVkR3JvdXBzW3dheXBvaW50Lmdyb3VwLmlkXSA9IHdheXBvaW50Lmdyb3VwXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBXYXlwb2ludC5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKSB7XG4gICAgICBmb3IgKHZhciBncm91cEtleSBpbiB0cmlnZ2VyZWRHcm91cHMpIHtcbiAgICAgICAgdHJpZ2dlcmVkR3JvdXBzW2dyb3VwS2V5XS5mbHVzaFRyaWdnZXJzKClcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIC8qIFByaXZhdGUgKi9cbiAgQ29udGV4dC5maW5kT3JDcmVhdGVCeUVsZW1lbnQgPSBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgcmV0dXJuIENvbnRleHQuZmluZEJ5RWxlbWVudChlbGVtZW50KSB8fCBuZXcgQ29udGV4dChlbGVtZW50KVxuICB9XG5cbiAgLyogUHJpdmF0ZSAqL1xuICBDb250ZXh0LnJlZnJlc2hBbGwgPSBmdW5jdGlvbigpIHtcbiAgICBmb3IgKHZhciBjb250ZXh0SWQgaW4gY29udGV4dHMpIHtcbiAgICAgIGNvbnRleHRzW2NvbnRleHRJZF0ucmVmcmVzaCgpXG4gICAgfVxuICB9XG5cbiAgLyogUHVibGljICovXG4gIC8qIGh0dHA6Ly9pbWFrZXdlYnRoaW5ncy5jb20vd2F5cG9pbnRzL2FwaS9jb250ZXh0LWZpbmQtYnktZWxlbWVudCAqL1xuICBDb250ZXh0LmZpbmRCeUVsZW1lbnQgPSBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgcmV0dXJuIGNvbnRleHRzW2VsZW1lbnQud2F5cG9pbnRDb250ZXh0S2V5XVxuICB9XG5cbiAgd2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmIChvbGRXaW5kb3dMb2FkKSB7XG4gICAgICBvbGRXaW5kb3dMb2FkKClcbiAgICB9XG4gICAgQ29udGV4dC5yZWZyZXNoQWxsKClcbiAgfVxuXG5cbiAgV2F5cG9pbnQucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgICB2YXIgcmVxdWVzdEZuID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgICAgd2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgICAgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lU2hpbVxuICAgIHJlcXVlc3RGbi5jYWxsKHdpbmRvdywgY2FsbGJhY2spXG4gIH1cbiAgV2F5cG9pbnQuQ29udGV4dCA9IENvbnRleHRcbn0oKSlcbjsoZnVuY3Rpb24oKSB7XG4gICd1c2Ugc3RyaWN0J1xuXG4gIGZ1bmN0aW9uIGJ5VHJpZ2dlclBvaW50KGEsIGIpIHtcbiAgICByZXR1cm4gYS50cmlnZ2VyUG9pbnQgLSBiLnRyaWdnZXJQb2ludFxuICB9XG5cbiAgZnVuY3Rpb24gYnlSZXZlcnNlVHJpZ2dlclBvaW50KGEsIGIpIHtcbiAgICByZXR1cm4gYi50cmlnZ2VyUG9pbnQgLSBhLnRyaWdnZXJQb2ludFxuICB9XG5cbiAgdmFyIGdyb3VwcyA9IHtcbiAgICB2ZXJ0aWNhbDoge30sXG4gICAgaG9yaXpvbnRhbDoge31cbiAgfVxuICB2YXIgV2F5cG9pbnQgPSB3aW5kb3cuV2F5cG9pbnRcblxuICAvKiBodHRwOi8vaW1ha2V3ZWJ0aGluZ3MuY29tL3dheXBvaW50cy9hcGkvZ3JvdXAgKi9cbiAgZnVuY3Rpb24gR3JvdXAob3B0aW9ucykge1xuICAgIHRoaXMubmFtZSA9IG9wdGlvbnMubmFtZVxuICAgIHRoaXMuYXhpcyA9IG9wdGlvbnMuYXhpc1xuICAgIHRoaXMuaWQgPSB0aGlzLm5hbWUgKyAnLScgKyB0aGlzLmF4aXNcbiAgICB0aGlzLndheXBvaW50cyA9IFtdXG4gICAgdGhpcy5jbGVhclRyaWdnZXJRdWV1ZXMoKVxuICAgIGdyb3Vwc1t0aGlzLmF4aXNdW3RoaXMubmFtZV0gPSB0aGlzXG4gIH1cblxuICAvKiBQcml2YXRlICovXG4gIEdyb3VwLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbih3YXlwb2ludCkge1xuICAgIHRoaXMud2F5cG9pbnRzLnB1c2god2F5cG9pbnQpXG4gIH1cblxuICAvKiBQcml2YXRlICovXG4gIEdyb3VwLnByb3RvdHlwZS5jbGVhclRyaWdnZXJRdWV1ZXMgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnRyaWdnZXJRdWV1ZXMgPSB7XG4gICAgICB1cDogW10sXG4gICAgICBkb3duOiBbXSxcbiAgICAgIGxlZnQ6IFtdLFxuICAgICAgcmlnaHQ6IFtdXG4gICAgfVxuICB9XG5cbiAgLyogUHJpdmF0ZSAqL1xuICBHcm91cC5wcm90b3R5cGUuZmx1c2hUcmlnZ2VycyA9IGZ1bmN0aW9uKCkge1xuICAgIGZvciAodmFyIGRpcmVjdGlvbiBpbiB0aGlzLnRyaWdnZXJRdWV1ZXMpIHtcbiAgICAgIHZhciB3YXlwb2ludHMgPSB0aGlzLnRyaWdnZXJRdWV1ZXNbZGlyZWN0aW9uXVxuICAgICAgdmFyIHJldmVyc2UgPSBkaXJlY3Rpb24gPT09ICd1cCcgfHwgZGlyZWN0aW9uID09PSAnbGVmdCdcbiAgICAgIHdheXBvaW50cy5zb3J0KHJldmVyc2UgPyBieVJldmVyc2VUcmlnZ2VyUG9pbnQgOiBieVRyaWdnZXJQb2ludClcbiAgICAgIGZvciAodmFyIGkgPSAwLCBlbmQgPSB3YXlwb2ludHMubGVuZ3RoOyBpIDwgZW5kOyBpICs9IDEpIHtcbiAgICAgICAgdmFyIHdheXBvaW50ID0gd2F5cG9pbnRzW2ldXG4gICAgICAgIGlmICh3YXlwb2ludC5vcHRpb25zLmNvbnRpbnVvdXMgfHwgaSA9PT0gd2F5cG9pbnRzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICB3YXlwb2ludC50cmlnZ2VyKFtkaXJlY3Rpb25dKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuY2xlYXJUcmlnZ2VyUXVldWVzKClcbiAgfVxuXG4gIC8qIFByaXZhdGUgKi9cbiAgR3JvdXAucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbih3YXlwb2ludCkge1xuICAgIHRoaXMud2F5cG9pbnRzLnNvcnQoYnlUcmlnZ2VyUG9pbnQpXG4gICAgdmFyIGluZGV4ID0gV2F5cG9pbnQuQWRhcHRlci5pbkFycmF5KHdheXBvaW50LCB0aGlzLndheXBvaW50cylcbiAgICB2YXIgaXNMYXN0ID0gaW5kZXggPT09IHRoaXMud2F5cG9pbnRzLmxlbmd0aCAtIDFcbiAgICByZXR1cm4gaXNMYXN0ID8gbnVsbCA6IHRoaXMud2F5cG9pbnRzW2luZGV4ICsgMV1cbiAgfVxuXG4gIC8qIFByaXZhdGUgKi9cbiAgR3JvdXAucHJvdG90eXBlLnByZXZpb3VzID0gZnVuY3Rpb24od2F5cG9pbnQpIHtcbiAgICB0aGlzLndheXBvaW50cy5zb3J0KGJ5VHJpZ2dlclBvaW50KVxuICAgIHZhciBpbmRleCA9IFdheXBvaW50LkFkYXB0ZXIuaW5BcnJheSh3YXlwb2ludCwgdGhpcy53YXlwb2ludHMpXG4gICAgcmV0dXJuIGluZGV4ID8gdGhpcy53YXlwb2ludHNbaW5kZXggLSAxXSA6IG51bGxcbiAgfVxuXG4gIC8qIFByaXZhdGUgKi9cbiAgR3JvdXAucHJvdG90eXBlLnF1ZXVlVHJpZ2dlciA9IGZ1bmN0aW9uKHdheXBvaW50LCBkaXJlY3Rpb24pIHtcbiAgICB0aGlzLnRyaWdnZXJRdWV1ZXNbZGlyZWN0aW9uXS5wdXNoKHdheXBvaW50KVxuICB9XG5cbiAgLyogUHJpdmF0ZSAqL1xuICBHcm91cC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24od2F5cG9pbnQpIHtcbiAgICB2YXIgaW5kZXggPSBXYXlwb2ludC5BZGFwdGVyLmluQXJyYXkod2F5cG9pbnQsIHRoaXMud2F5cG9pbnRzKVxuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICB0aGlzLndheXBvaW50cy5zcGxpY2UoaW5kZXgsIDEpXG4gICAgfVxuICB9XG5cbiAgLyogUHVibGljICovXG4gIC8qIGh0dHA6Ly9pbWFrZXdlYnRoaW5ncy5jb20vd2F5cG9pbnRzL2FwaS9maXJzdCAqL1xuICBHcm91cC5wcm90b3R5cGUuZmlyc3QgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy53YXlwb2ludHNbMF1cbiAgfVxuXG4gIC8qIFB1YmxpYyAqL1xuICAvKiBodHRwOi8vaW1ha2V3ZWJ0aGluZ3MuY29tL3dheXBvaW50cy9hcGkvbGFzdCAqL1xuICBHcm91cC5wcm90b3R5cGUubGFzdCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLndheXBvaW50c1t0aGlzLndheXBvaW50cy5sZW5ndGggLSAxXVxuICB9XG5cbiAgLyogUHJpdmF0ZSAqL1xuICBHcm91cC5maW5kT3JDcmVhdGUgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgcmV0dXJuIGdyb3Vwc1tvcHRpb25zLmF4aXNdW29wdGlvbnMubmFtZV0gfHwgbmV3IEdyb3VwKG9wdGlvbnMpXG4gIH1cblxuICBXYXlwb2ludC5Hcm91cCA9IEdyb3VwXG59KCkpXG47KGZ1bmN0aW9uKCkge1xuICAndXNlIHN0cmljdCdcblxuICB2YXIgV2F5cG9pbnQgPSB3aW5kb3cuV2F5cG9pbnRcblxuICBmdW5jdGlvbiBpc1dpbmRvdyhlbGVtZW50KSB7XG4gICAgcmV0dXJuIGVsZW1lbnQgPT09IGVsZW1lbnQud2luZG93XG4gIH1cblxuICBmdW5jdGlvbiBnZXRXaW5kb3coZWxlbWVudCkge1xuICAgIGlmIChpc1dpbmRvdyhlbGVtZW50KSkge1xuICAgICAgcmV0dXJuIGVsZW1lbnRcbiAgICB9XG4gICAgcmV0dXJuIGVsZW1lbnQuZGVmYXVsdFZpZXdcbiAgfVxuXG4gIGZ1bmN0aW9uIE5vRnJhbWV3b3JrQWRhcHRlcihlbGVtZW50KSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICAgIHRoaXMuaGFuZGxlcnMgPSB7fVxuICB9XG5cbiAgTm9GcmFtZXdvcmtBZGFwdGVyLnByb3RvdHlwZS5pbm5lckhlaWdodCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBpc1dpbiA9IGlzV2luZG93KHRoaXMuZWxlbWVudClcbiAgICByZXR1cm4gaXNXaW4gPyB0aGlzLmVsZW1lbnQuaW5uZXJIZWlnaHQgOiB0aGlzLmVsZW1lbnQuY2xpZW50SGVpZ2h0XG4gIH1cblxuICBOb0ZyYW1ld29ya0FkYXB0ZXIucHJvdG90eXBlLmlubmVyV2lkdGggPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaXNXaW4gPSBpc1dpbmRvdyh0aGlzLmVsZW1lbnQpXG4gICAgcmV0dXJuIGlzV2luID8gdGhpcy5lbGVtZW50LmlubmVyV2lkdGggOiB0aGlzLmVsZW1lbnQuY2xpZW50V2lkdGhcbiAgfVxuXG4gIE5vRnJhbWV3b3JrQWRhcHRlci5wcm90b3R5cGUub2ZmID0gZnVuY3Rpb24oZXZlbnQsIGhhbmRsZXIpIHtcbiAgICBmdW5jdGlvbiByZW1vdmVMaXN0ZW5lcnMoZWxlbWVudCwgbGlzdGVuZXJzLCBoYW5kbGVyKSB7XG4gICAgICBmb3IgKHZhciBpID0gMCwgZW5kID0gbGlzdGVuZXJzLmxlbmd0aCAtIDE7IGkgPCBlbmQ7IGkrKykge1xuICAgICAgICB2YXIgbGlzdGVuZXIgPSBsaXN0ZW5lcnNbaV1cbiAgICAgICAgaWYgKCFoYW5kbGVyIHx8IGhhbmRsZXIgPT09IGxpc3RlbmVyKSB7XG4gICAgICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGxpc3RlbmVyKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGV2ZW50UGFydHMgPSBldmVudC5zcGxpdCgnLicpXG4gICAgdmFyIGV2ZW50VHlwZSA9IGV2ZW50UGFydHNbMF1cbiAgICB2YXIgbmFtZXNwYWNlID0gZXZlbnRQYXJ0c1sxXVxuICAgIHZhciBlbGVtZW50ID0gdGhpcy5lbGVtZW50XG5cbiAgICBpZiAobmFtZXNwYWNlICYmIHRoaXMuaGFuZGxlcnNbbmFtZXNwYWNlXSAmJiBldmVudFR5cGUpIHtcbiAgICAgIHJlbW92ZUxpc3RlbmVycyhlbGVtZW50LCB0aGlzLmhhbmRsZXJzW25hbWVzcGFjZV1bZXZlbnRUeXBlXSwgaGFuZGxlcilcbiAgICAgIHRoaXMuaGFuZGxlcnNbbmFtZXNwYWNlXVtldmVudFR5cGVdID0gW11cbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnRUeXBlKSB7XG4gICAgICBmb3IgKHZhciBucyBpbiB0aGlzLmhhbmRsZXJzKSB7XG4gICAgICAgIHJlbW92ZUxpc3RlbmVycyhlbGVtZW50LCB0aGlzLmhhbmRsZXJzW25zXVtldmVudFR5cGVdIHx8IFtdLCBoYW5kbGVyKVxuICAgICAgICB0aGlzLmhhbmRsZXJzW25zXVtldmVudFR5cGVdID0gW11cbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAobmFtZXNwYWNlICYmIHRoaXMuaGFuZGxlcnNbbmFtZXNwYWNlXSkge1xuICAgICAgZm9yICh2YXIgdHlwZSBpbiB0aGlzLmhhbmRsZXJzW25hbWVzcGFjZV0pIHtcbiAgICAgICAgcmVtb3ZlTGlzdGVuZXJzKGVsZW1lbnQsIHRoaXMuaGFuZGxlcnNbbmFtZXNwYWNlXVt0eXBlXSwgaGFuZGxlcilcbiAgICAgIH1cbiAgICAgIHRoaXMuaGFuZGxlcnNbbmFtZXNwYWNlXSA9IHt9XG4gICAgfVxuICB9XG5cbiAgLyogQWRhcHRlZCBmcm9tIGpRdWVyeSAxLnggb2Zmc2V0KCkgKi9cbiAgTm9GcmFtZXdvcmtBZGFwdGVyLnByb3RvdHlwZS5vZmZzZXQgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAoIXRoaXMuZWxlbWVudC5vd25lckRvY3VtZW50KSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIHZhciBkb2N1bWVudEVsZW1lbnQgPSB0aGlzLmVsZW1lbnQub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnRcbiAgICB2YXIgd2luID0gZ2V0V2luZG93KHRoaXMuZWxlbWVudC5vd25lckRvY3VtZW50KVxuICAgIHZhciByZWN0ID0ge1xuICAgICAgdG9wOiAwLFxuICAgICAgbGVmdDogMFxuICAgIH1cblxuICAgIGlmICh0aGlzLmVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KSB7XG4gICAgICByZWN0ID0gdGhpcy5lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHRvcDogcmVjdC50b3AgKyB3aW4ucGFnZVlPZmZzZXQgLSBkb2N1bWVudEVsZW1lbnQuY2xpZW50VG9wLFxuICAgICAgbGVmdDogcmVjdC5sZWZ0ICsgd2luLnBhZ2VYT2Zmc2V0IC0gZG9jdW1lbnRFbGVtZW50LmNsaWVudExlZnRcbiAgICB9XG4gIH1cblxuICBOb0ZyYW1ld29ya0FkYXB0ZXIucHJvdG90eXBlLm9uID0gZnVuY3Rpb24oZXZlbnQsIGhhbmRsZXIpIHtcbiAgICB2YXIgZXZlbnRQYXJ0cyA9IGV2ZW50LnNwbGl0KCcuJylcbiAgICB2YXIgZXZlbnRUeXBlID0gZXZlbnRQYXJ0c1swXVxuICAgIHZhciBuYW1lc3BhY2UgPSBldmVudFBhcnRzWzFdIHx8ICdfX2RlZmF1bHQnXG4gICAgdmFyIG5zSGFuZGxlcnMgPSB0aGlzLmhhbmRsZXJzW25hbWVzcGFjZV0gPSB0aGlzLmhhbmRsZXJzW25hbWVzcGFjZV0gfHwge31cbiAgICB2YXIgbnNUeXBlTGlzdCA9IG5zSGFuZGxlcnNbZXZlbnRUeXBlXSA9IG5zSGFuZGxlcnNbZXZlbnRUeXBlXSB8fCBbXVxuXG4gICAgbnNUeXBlTGlzdC5wdXNoKGhhbmRsZXIpXG4gICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyKVxuICB9XG5cbiAgTm9GcmFtZXdvcmtBZGFwdGVyLnByb3RvdHlwZS5vdXRlckhlaWdodCA9IGZ1bmN0aW9uKGluY2x1ZGVNYXJnaW4pIHtcbiAgICB2YXIgaGVpZ2h0ID0gdGhpcy5pbm5lckhlaWdodCgpXG4gICAgdmFyIGNvbXB1dGVkU3R5bGVcblxuICAgIGlmIChpbmNsdWRlTWFyZ2luICYmICFpc1dpbmRvdyh0aGlzLmVsZW1lbnQpKSB7XG4gICAgICBjb21wdXRlZFN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5lbGVtZW50KVxuICAgICAgaGVpZ2h0ICs9IHBhcnNlSW50KGNvbXB1dGVkU3R5bGUubWFyZ2luVG9wLCAxMClcbiAgICAgIGhlaWdodCArPSBwYXJzZUludChjb21wdXRlZFN0eWxlLm1hcmdpbkJvdHRvbSwgMTApXG4gICAgfVxuXG4gICAgcmV0dXJuIGhlaWdodFxuICB9XG5cbiAgTm9GcmFtZXdvcmtBZGFwdGVyLnByb3RvdHlwZS5vdXRlcldpZHRoID0gZnVuY3Rpb24oaW5jbHVkZU1hcmdpbikge1xuICAgIHZhciB3aWR0aCA9IHRoaXMuaW5uZXJXaWR0aCgpXG4gICAgdmFyIGNvbXB1dGVkU3R5bGVcblxuICAgIGlmIChpbmNsdWRlTWFyZ2luICYmICFpc1dpbmRvdyh0aGlzLmVsZW1lbnQpKSB7XG4gICAgICBjb21wdXRlZFN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5lbGVtZW50KVxuICAgICAgd2lkdGggKz0gcGFyc2VJbnQoY29tcHV0ZWRTdHlsZS5tYXJnaW5MZWZ0LCAxMClcbiAgICAgIHdpZHRoICs9IHBhcnNlSW50KGNvbXB1dGVkU3R5bGUubWFyZ2luUmlnaHQsIDEwKVxuICAgIH1cblxuICAgIHJldHVybiB3aWR0aFxuICB9XG5cbiAgTm9GcmFtZXdvcmtBZGFwdGVyLnByb3RvdHlwZS5zY3JvbGxMZWZ0ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHdpbiA9IGdldFdpbmRvdyh0aGlzLmVsZW1lbnQpXG4gICAgcmV0dXJuIHdpbiA/IHdpbi5wYWdlWE9mZnNldCA6IHRoaXMuZWxlbWVudC5zY3JvbGxMZWZ0XG4gIH1cblxuICBOb0ZyYW1ld29ya0FkYXB0ZXIucHJvdG90eXBlLnNjcm9sbFRvcCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciB3aW4gPSBnZXRXaW5kb3codGhpcy5lbGVtZW50KVxuICAgIHJldHVybiB3aW4gPyB3aW4ucGFnZVlPZmZzZXQgOiB0aGlzLmVsZW1lbnQuc2Nyb2xsVG9wXG4gIH1cblxuICBOb0ZyYW1ld29ya0FkYXB0ZXIuZXh0ZW5kID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpXG5cbiAgICBmdW5jdGlvbiBtZXJnZSh0YXJnZXQsIG9iaikge1xuICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdvYmplY3QnICYmIHR5cGVvZiBvYmogPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIHRhcmdldFtrZXldID0gb2JqW2tleV1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRhcmdldFxuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAxLCBlbmQgPSBhcmdzLmxlbmd0aDsgaSA8IGVuZDsgaSsrKSB7XG4gICAgICBtZXJnZShhcmdzWzBdLCBhcmdzW2ldKVxuICAgIH1cbiAgICByZXR1cm4gYXJnc1swXVxuICB9XG5cbiAgTm9GcmFtZXdvcmtBZGFwdGVyLmluQXJyYXkgPSBmdW5jdGlvbihlbGVtZW50LCBhcnJheSwgaSkge1xuICAgIHJldHVybiBhcnJheSA9PSBudWxsID8gLTEgOiBhcnJheS5pbmRleE9mKGVsZW1lbnQsIGkpXG4gIH1cblxuICBOb0ZyYW1ld29ya0FkYXB0ZXIuaXNFbXB0eU9iamVjdCA9IGZ1bmN0aW9uKG9iaikge1xuICAgIC8qIGVzbGludCBuby11bnVzZWQtdmFyczogMCAqL1xuICAgIGZvciAodmFyIG5hbWUgaW4gb2JqKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIFdheXBvaW50LmFkYXB0ZXJzLnB1c2goe1xuICAgIG5hbWU6ICdub2ZyYW1ld29yaycsXG4gICAgQWRhcHRlcjogTm9GcmFtZXdvcmtBZGFwdGVyXG4gIH0pXG4gIFdheXBvaW50LkFkYXB0ZXIgPSBOb0ZyYW1ld29ya0FkYXB0ZXJcbn0oKSlcbjsiLCJpbXBvcnQgZ3NhcCBmcm9tICdnc2FwJztcbmltcG9ydCBMb2NvbW90aXZlU2Nyb2xsIGZyb20gJ2xvY29tb3RpdmUtc2Nyb2xsJztcbmltcG9ydCAnd2F5cG9pbnRzL2xpYi9ub2ZyYW1ld29yay53YXlwb2ludHMuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoZWFkbGluZXMoKSB7XG5cdC8vIFN0dWZmIGhlcmVcblx0Y29uc29sZS5sb2coJ1J1bm5pbmcgYW5pbWF0aW9ucycpO1xuXG5cdFNwbGl0dGluZygpO1xuXG5cdHZhciBtaWdodHlCbG9ja3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYmxvY2snKTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtaWdodHlCbG9ja3MubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgbWlnaHR5QmxvY2sgPSBtaWdodHlCbG9ja3NbaV07XG5cdFx0bWlnaHR5QmxvY2suY2xhc3NMaXN0LmFkZCgncmVhZHknKTtcblx0XHRuZXcgV2F5cG9pbnQoe1xuXHRcdFx0ZWxlbWVudDogbWlnaHR5QmxvY2ssXG5cdFx0XHRoYW5kbGVyOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhbmltYXRlJyk7XG5cdFx0XHR9LFxuXHRcdFx0b2Zmc2V0OiAnNTAlJyxcblx0XHR9KTtcblx0fVxuXG5cdC8vIGNvbnN0IHNjcm9sbCA9IG5ldyBMb2NvbW90aXZlU2Nyb2xsKCk7XG5cblx0Ly8gbGV0IERPTSA9IHtcblx0Ly8gXHRjb250ZW50OiB7XG5cdC8vIFx0XHRob21lOiB7XG5cdC8vIFx0XHRcdHNlY3Rpb246IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ibG9jay5oZXJvLnN0eWxlLTEnKSxcblx0Ly8gXHRcdFx0Z2V0IGxhYmVsKCkge1xuXHQvLyBcdFx0XHRcdHJldHVybiB0aGlzLnNlY3Rpb24ucXVlcnlTZWxlY3RvcignLmxhYmVsJyk7XG5cdC8vIFx0XHRcdH0sXG5cdC8vIFx0XHRcdGdldCBjaGFycygpIHtcblx0Ly8gXHRcdFx0XHRyZXR1cm4gdGhpcy5zZWN0aW9uLnF1ZXJ5U2VsZWN0b3JBbGwoXG5cdC8vIFx0XHRcdFx0XHQnLmxpbmUgLndvcmQgPiAuY2hhciwgLndoaXRlc3BhY2UnXG5cdC8vIFx0XHRcdFx0KTtcblx0Ly8gXHRcdFx0fSxcblx0Ly8gXHRcdH0sXG5cdC8vIFx0fSxcblx0Ly8gfTtcblxuXHQvLyBjb25zdCB0aW1lbGluZVNldHRpbmdzID0ge1xuXHQvLyBcdHN0YWdnZXJWYWx1ZTogMC4wMSxcblx0Ly8gXHRjaGFyc0R1cmF0aW9uOiAwLjUsXG5cdC8vIH07XG5cdC8vIGNvbnN0IHRpbWVsaW5lID0gZ3NhcFxuXHQvLyBcdC50aW1lbGluZSh7IHBhdXNlZDogdHJ1ZSB9KVxuXHQvLyBcdC8vIFN0YXJ0IHZhbHVlcyBmb3IgdGhlIGhvbWUgc2VjdGlvbiBlbGVtZW50cyB0aGF0IHdpbGwgYW5pbWF0ZSBpblxuXHQvLyBcdC5zZXQoRE9NLmNvbnRlbnQuaG9tZS5sYWJlbCwge1xuXHQvLyBcdFx0eDogJy0xMDAlJyxcblx0Ly8gXHRcdG9wYWNpdHk6ICcwJyxcblx0Ly8gXHR9KVxuXHQvLyBcdC5zZXQoRE9NLmNvbnRlbnQuaG9tZS5jaGFycywge1xuXHQvLyBcdFx0eTogJzEwMCUnLFxuXHQvLyBcdH0pXG5cdC8vIFx0Ly8gU3RhZ2dlciB0aGUgYW5pbWF0aW9uIG9mIHRoZSBob21lIHNlY3Rpb24gY2hhcnNcblx0Ly8gXHQuc3RhZ2dlclRvKFxuXHQvLyBcdFx0RE9NLmNvbnRlbnQuaG9tZS5sYWJlbCxcblx0Ly8gXHRcdDEuNSxcblx0Ly8gXHRcdHtcblx0Ly8gXHRcdFx0ZWFzZTogJ1Bvd2VyMy5lYXNlSW4nLFxuXHQvLyBcdFx0XHR4OiAnMCUnLFxuXHQvLyBcdFx0XHRvcGFjaXR5OiAnMScsXG5cdC8vIFx0XHR9LFxuXHQvLyBcdFx0MFxuXHQvLyBcdClcblx0Ly8gXHQuc3RhZ2dlclRvKFxuXHQvLyBcdFx0RE9NLmNvbnRlbnQuaG9tZS5jaGFycyxcblx0Ly8gXHRcdHRpbWVsaW5lU2V0dGluZ3MuY2hhcnNEdXJhdGlvbixcblx0Ly8gXHRcdHtcblx0Ly8gXHRcdFx0ZWFzZTogJ1Bvd2VyMy5lYXNlSW4nLFxuXHQvLyBcdFx0XHR5OiAnMCUnLFxuXHQvLyBcdFx0fSxcblx0Ly8gXHRcdHRpbWVsaW5lU2V0dGluZ3Muc3RhZ2dlclZhbHVlXG5cdC8vIFx0KTtcblxuXHQvLyB0aW1lbGluZS5wbGF5KCk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwb3J0Zm9saW8oKSB7XG5cdC8vIFN0dWZmIGhlcmVcblx0Y29uc29sZS5sb2coJ1J1bm5pbmcgcG9ydGZvbGlvJyk7XG5cdHZhciBwb3J0Zm9saW9CYWNrZ3JvdW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihcblx0XHQnI3BvcnRmb2xpby1iYWNrZ3JvdW5kJ1xuXHQpO1xuXG5cdHZhciBwb3J0Zm9saW9JdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saXN0aW5nIC5pdGVtJyk7XG5cblx0cG9ydGZvbGlvSXRlbXMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuXHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgZnVuY3Rpb24gKGV2ZW50KSB7XG5cdFx0XHQvLyBjb25zb2xlLmxvZyhldmVudC50YXJnZXQuY2xvc2VzdCgnLml0ZW0nKTtcblxuXHRcdFx0dmFyIG5ld0JHID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbWcnKTtcblx0XHRcdGNvbnNvbGUubG9nKCdNb3VzZSBvdmVyIGV2ZW50Jyk7XG5cdFx0XHRjb25zb2xlLmxvZyhuZXdCRy5nZXRBdHRyaWJ1dGUoJ3NyYycpKTtcblxuXHRcdFx0Ly8gU2V0IHRoZSBiYWNrZ3JvdW5kIGNvbG9yIHRvIGEgbGlnaHQgZ3JheVxuXHRcdFx0cG9ydGZvbGlvQmFja2dyb3VuZC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPVxuXHRcdFx0XHQndXJsKCcgKyBuZXdCRy5nZXRBdHRyaWJ1dGUoJ3NyYycpICsgJyknO1xuXHRcdH0pO1xuXHR9KTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZ1ZSgpIHtcblx0dmFyIGFwcCA9IG5ldyBWdWUoe1xuXHRcdGVsOiBcIiNhcHBcIixcblx0XHRkYXRhOiB7XG5cdFx0XHRtZXNzYWdlOiBcIkhlbGxvIFZ1ZSFcIixcblx0XHR9LFxuXHR9KTtcbn1cbiIsImltcG9ydCAnLi4vc3R5bGVzL21haW4uc2Nzcyc7XG5cbmltcG9ydCB2dWUgZnJvbSAnLi9jb21wb25lbnRzL3Z1ZSc7XG5pbXBvcnQgaGVhZGxpbmVzIGZyb20gJy4vY29tcG9uZW50cy9hbmltYXRpb25zJztcbmltcG9ydCBwb3J0Zm9saW8gZnJvbSAnLi9jb21wb25lbnRzL3BvcnRmb2xpbyc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XG5cdGZ1bmN0aW9uIGRvU3R1ZmYoY2FsbGJhY2spIHtcblx0XHQvLyBkbyBhbGwgYXBwIHNjcmlwdHMgaGVyZS4uLlxuXHRcdGNhbGxiYWNrKCk7XG5cdH1cblxuXHRkb1N0dWZmKGZ1bmN0aW9uICgpIHtcblx0XHRkb2N1bWVudC5ib2R5LmNsYXNzTmFtZSA9ICd2aXNpYmxlJztcblx0fSk7XG5cblx0dnVlKCk7XG5cdGhlYWRsaW5lcygpO1xuXHRwb3J0Zm9saW8oKTtcbn0pO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiBtb2R1bGVbJ2RlZmF1bHQnXSA6XG5cdFx0KCkgPT4gbW9kdWxlO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvanMvaW5kZXguanNcIik7XG4vLyBUaGlzIGVudHJ5IG1vZHVsZSB1c2VkICdleHBvcnRzJyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG4iXSwic291cmNlUm9vdCI6IiJ9