import { __commonJSMin, __exportAll, __reExport, __toESM, require_jsx_runtime, require_react, require_react_dom } from "./ssr.mjs";
import { clsx, cva } from "../_libs/class-variance-authority+clsx.mjs";
import { Symbol as Symbol$1, area_default, basisClosed_default, basisOpen_default, basis_default, bumpX, bumpY, circle_default, cross_default, diamond_default, expand_default, line_default, linearClosed_default, linear_default, monotoneX, monotoneY, natural_default, none_default as none_default$1, none_default$1 as none_default, silhouette_default, square_default, stack_default, star_default, stepAfter, stepBefore, step_default, triangle_default, wiggle_default, wye_default } from "../_libs/d3-shape.mjs";
import { get, isPlainObject, range, sortBy, throttle, uniqBy } from "../_libs/es-toolkit.mjs";
import { applyMiddleware, combineReducers, compose, createStore, isAction, isPlainObject as isPlainObject$1, redux_exports } from "../_libs/redux.mjs";
import { castDraft, current, freeze, isDraft, isDraftable, original as original$1, produce } from "../_libs/immer.mjs";
import { createSelector, createSelectorCreator, lruMemoize, weakMapMemoize } from "../_libs/reselect.mjs";
import { thunk, withExtraArgument } from "../_libs/redux-thunk.mjs";
import { require_react_is } from "../_libs/react-is.mjs";
import { decimal_default } from "../_libs/decimal.js-light.mjs";
import { d3_scale_exports } from "../_libs/victory-vendor.mjs";
import { eventemitter3_default } from "../_libs/eventemitter3.mjs";
import { invariant } from "../_libs/tiny-invariant.mjs";
import { twMerge } from "../_libs/tailwind-merge.mjs";
import { composeEventHandlers } from "../_libs/radix-ui__primitive.mjs";
import { getNonce } from "../_libs/get-nonce.mjs";
import { hideOthers } from "../_libs/aria-hidden.mjs";
import { clamp } from "../_libs/radix-ui__number.mjs";
import { __assign, __rest, __spreadArray } from "tslib";
//#region node_modules/.nitro/vite/services/ssr/assets/recoveriq-app-COv9qt7K.js
var import_react_is = require_react_is();
var import_react = /* @__PURE__ */ __toESM(require_react());
var EventKeys = [
	"dangerouslySetInnerHTML",
	"onCopy",
	"onCopyCapture",
	"onCut",
	"onCutCapture",
	"onPaste",
	"onPasteCapture",
	"onCompositionEnd",
	"onCompositionEndCapture",
	"onCompositionStart",
	"onCompositionStartCapture",
	"onCompositionUpdate",
	"onCompositionUpdateCapture",
	"onFocus",
	"onFocusCapture",
	"onBlur",
	"onBlurCapture",
	"onChange",
	"onChangeCapture",
	"onBeforeInput",
	"onBeforeInputCapture",
	"onInput",
	"onInputCapture",
	"onReset",
	"onResetCapture",
	"onSubmit",
	"onSubmitCapture",
	"onInvalid",
	"onInvalidCapture",
	"onLoad",
	"onLoadCapture",
	"onError",
	"onErrorCapture",
	"onKeyDown",
	"onKeyDownCapture",
	"onKeyPress",
	"onKeyPressCapture",
	"onKeyUp",
	"onKeyUpCapture",
	"onAbort",
	"onAbortCapture",
	"onCanPlay",
	"onCanPlayCapture",
	"onCanPlayThrough",
	"onCanPlayThroughCapture",
	"onDurationChange",
	"onDurationChangeCapture",
	"onEmptied",
	"onEmptiedCapture",
	"onEncrypted",
	"onEncryptedCapture",
	"onEnded",
	"onEndedCapture",
	"onLoadedData",
	"onLoadedDataCapture",
	"onLoadedMetadata",
	"onLoadedMetadataCapture",
	"onLoadStart",
	"onLoadStartCapture",
	"onPause",
	"onPauseCapture",
	"onPlay",
	"onPlayCapture",
	"onPlaying",
	"onPlayingCapture",
	"onProgress",
	"onProgressCapture",
	"onRateChange",
	"onRateChangeCapture",
	"onSeeked",
	"onSeekedCapture",
	"onSeeking",
	"onSeekingCapture",
	"onStalled",
	"onStalledCapture",
	"onSuspend",
	"onSuspendCapture",
	"onTimeUpdate",
	"onTimeUpdateCapture",
	"onVolumeChange",
	"onVolumeChangeCapture",
	"onWaiting",
	"onWaitingCapture",
	"onAuxClick",
	"onAuxClickCapture",
	"onClick",
	"onClickCapture",
	"onContextMenu",
	"onContextMenuCapture",
	"onDoubleClick",
	"onDoubleClickCapture",
	"onDrag",
	"onDragCapture",
	"onDragEnd",
	"onDragEndCapture",
	"onDragEnter",
	"onDragEnterCapture",
	"onDragExit",
	"onDragExitCapture",
	"onDragLeave",
	"onDragLeaveCapture",
	"onDragOver",
	"onDragOverCapture",
	"onDragStart",
	"onDragStartCapture",
	"onDrop",
	"onDropCapture",
	"onMouseDown",
	"onMouseDownCapture",
	"onMouseEnter",
	"onMouseLeave",
	"onMouseMove",
	"onMouseMoveCapture",
	"onMouseOut",
	"onMouseOutCapture",
	"onMouseOver",
	"onMouseOverCapture",
	"onMouseUp",
	"onMouseUpCapture",
	"onSelect",
	"onSelectCapture",
	"onTouchCancel",
	"onTouchCancelCapture",
	"onTouchEnd",
	"onTouchEndCapture",
	"onTouchMove",
	"onTouchMoveCapture",
	"onTouchStart",
	"onTouchStartCapture",
	"onPointerDown",
	"onPointerDownCapture",
	"onPointerMove",
	"onPointerMoveCapture",
	"onPointerUp",
	"onPointerUpCapture",
	"onPointerCancel",
	"onPointerCancelCapture",
	"onPointerEnter",
	"onPointerEnterCapture",
	"onPointerLeave",
	"onPointerLeaveCapture",
	"onPointerOver",
	"onPointerOverCapture",
	"onPointerOut",
	"onPointerOutCapture",
	"onGotPointerCapture",
	"onGotPointerCaptureCapture",
	"onLostPointerCapture",
	"onLostPointerCaptureCapture",
	"onScroll",
	"onScrollCapture",
	"onWheel",
	"onWheelCapture",
	"onAnimationStart",
	"onAnimationStartCapture",
	"onAnimationEnd",
	"onAnimationEndCapture",
	"onAnimationIteration",
	"onAnimationIterationCapture",
	"onTransitionEnd",
	"onTransitionEndCapture"
];
function isEventKey(key) {
	if (typeof key !== "string") return false;
	return EventKeys.includes(key);
}
/**
* Determines how values are stacked:
*
* - `none` is the default, it adds values on top of each other. No smarts. Negative values will overlap.
* - `expand` make it so that the values always add up to 1 - so the chart will look like a rectangle.
* - `wiggle` and `silhouette` tries to keep the chart centered.
* - `sign` stacks positive values above zero and negative values below zero. Similar to `none` but handles negatives.
* - `positive` ignores all negative values, and then behaves like \`none\`.
*
* @see {@link https://d3js.org/d3-shape/stack#stack-offsets}
* (note that the `diverging` offset in d3 is named `sign` in recharts)
*
* @inline
*/
/**
* @deprecated use either `CartesianLayout` or `PolarLayout` instead.
* Mixing both charts families leads to ambiguity in the type system.
* These two layouts share very few properties, so it is best to keep them separate.
*/
/**
* The type of axis.
*
* `category`: Treats data as distinct values.
* Each value is in the same distance from its neighbors, regardless of their actual numeric difference.
*
* `number`: Treats data as continuous range.
* Values that are numerically closer are placed closer together on the axis.
*
* `auto`: the type is inferred based on the chart layout.
*
* This is external type - users will provide this type in props.
* Internally we will evaluate it to either 'category' or 'number' based on the layout,
* before sending it to the store.
*
* @inline
*/
/**
* Individual axes are responsible for resolving the 'auto' type to either 'number' or 'category',
* based on the chart layout and axis kind. Then they can start using this type.
*/
/**
* Extracts values from data objects.
*
* @inline
*/
/**
* @inline
*/
/**
* @inline
*/
/**
* @deprecated do not use: too many properties, mixing too many concepts, cartesian and polar together, everything optional.
* Instead, use either `Coordinate` or `PolarCoordinate`.
*/
var isPolarCoordinate = (c) => {
	return "radius" in c && "startAngle" in c && "endAngle" in c;
};
/**
* String shortcuts for scale types.
* In case none of these does what you want you can also provide your own scale function
* @see {@link CustomScaleDefinition}
*/
/**
* The type of easing function to use for animations
*
* @inline
*/
/** Specifies the duration of animation, the unit of this option is ms. */
/**
* This object defines the offset of the chart area and width and height and brush and ... it's a bit too much information all in one.
* We use it internally but let's not expose it to the outside world.
* If you are looking for this information, instead import `ChartOffset` or `PlotArea` from `recharts`.
*/
/**
* The domain of axis.
* This is the definition
*
* Numeric domain is always defined by an array of exactly two values, for the min and the max of the axis.
* Categorical domain is defined as array of all possible values.
*
* Can be specified in many ways:
* - array of numbers
* - with special strings like 'dataMin' and 'dataMax'
* - with special string math like 'dataMin - 100'
* - with keyword 'auto'
* - or a function
* - array of functions
* - or a combination of the above
*/
/**
* NumberDomain is an evaluated {@link AxisDomain}.
* Unlike {@link AxisDomain}, it has no variety - it's a tuple of two number.
* This is after all the keywords and functions were evaluated and what is left is [min, max].
*
* Know that the min, max values are not guaranteed to be nice numbers - values like -Infinity or NaN are possible.
*
* There are also `category` axes that have different things than numbers in their domain.
*/
/**
* Props shared in all renderable axes - meaning the ones that are drawn on the chart,
* can have ticks, axis line, etc.
*/
/** Defines how ticks are placed and whether / how tick collisions are handled.
* 'preserveStart' keeps the left tick on collision and ensures that the first tick is always shown.
* 'preserveEnd' keeps the right tick on collision and ensures that the last tick is always shown.
* 'preserveStartEnd' keeps the left tick on collision and ensures that the first and last ticks always show.
* 'equidistantPreserveStart' selects a number N such that every nTh tick will be shown without collision.
* 'equidistantPreserveEnd' selects a number N such that every nTh tick will be shown, ensuring the last tick is always visible.
*/
/**
* Ticks can be any type when the axis is the type of category.
*
* Ticks must be numbers when the axis is the type of number.
*/
/**
* @inline
*/
/**
* @inline
*/
var adaptEventHandlers = (props, newHandler) => {
	if (!props || typeof props === "function" || typeof props === "boolean") return null;
	var inputProps = props;
	if (/* @__PURE__ */ (0, import_react.isValidElement)(props)) inputProps = props.props;
	if (typeof inputProps !== "object" && typeof inputProps !== "function") return null;
	var out = {};
	Object.keys(inputProps).forEach((key) => {
		if (isEventKey(key) && typeof inputProps[key] === "function") out[key] = newHandler || ((e) => inputProps[key](inputProps, e));
	});
	return out;
};
var getEventHandlerOfChild = (originalHandler, data, index) => (e) => {
	originalHandler(data, index, e);
	return null;
};
var adaptEventsOfChild = (props, data, index) => {
	if (props === null || typeof props !== "object" && typeof props !== "function") return null;
	var out = null;
	Object.keys(props).forEach((key) => {
		var item = props[key];
		if (isEventKey(key) && typeof item === "function") {
			if (!out) out = {};
			out[key] = getEventHandlerOfChild(item, data, index);
		}
	});
	return out;
};
var defaultRoundPrecision = 4;
function round(num) {
	var factor = 10 ** (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : defaultRoundPrecision);
	var rounded = Math.round(num * factor) / factor;
	if (Object.is(rounded, -0)) return 0;
	return rounded;
}
/**
* This function will accept a string template literal and for each
* variable placeholder, it will round the value to avoid long float numbers in
* the SVG path which might cause rendering issues in some browsers.
*/
function roundTemplateLiteral(strings) {
	for (var _len = arguments.length, values = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) values[_key - 1] = arguments[_key];
	return strings.reduce((result, string, i) => {
		var value = values[i - 1];
		if (typeof value === "string") return result + value + string;
		if (value !== void 0) return result + round(value) + string;
		return result + string;
	}, "");
}
var mathSign = (value) => {
	if (value === 0) return 0;
	if (value > 0) return 1;
	return -1;
};
var isNan = (value) => {
	return typeof value == "number" && value != +value;
};
var isPercent = (value) => typeof value === "string" && value.indexOf("%") === value.length - 1;
var isNumber$1 = (value) => (typeof value === "number" || value instanceof Number) && !isNan(value);
var isNumOrStr = (value) => isNumber$1(value) || typeof value === "string";
var idCounter$1 = 0;
var uniqueId = (prefix) => {
	var id = ++idCounter$1;
	return "".concat(prefix || "").concat(id);
};
/**
* Calculates the numeric value represented by a percent string or number, based on a total value.
*
* - If `percent` is not a number or string, returns `defaultValue`.
* - If `percent` is a percent string but `totalValue` is null/undefined, returns `defaultValue`.
* - If the result is NaN, returns `defaultValue`.
* - If `validate` is true and the result exceeds `totalValue`, returns `totalValue`.
*
* @param percent - The percent value to convert. Can be a number (e.g. 25) or a string ending with '%' (e.g. '25%').
*                  If a string, it must end with '%' to be treated as a percent; otherwise, it is parsed as a number.
* @param totalValue - The total value to calculate the percent of. Required if `percent` is a percent string.
* @param defaultValue - The value returned if `percent` is undefined, invalid, or cannot be converted to a number.
* @param validate - If true, ensures the result does not exceed `totalValue` (when provided).
* @returns The calculated value, or `defaultValue` for invalid input.
*/
var getPercentValue = function getPercentValue(percent, totalValue) {
	var defaultValue = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
	var validate = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
	if (!isNumber$1(percent) && typeof percent !== "string") return defaultValue;
	var value;
	if (isPercent(percent)) {
		if (totalValue == null) return defaultValue;
		var index = percent.indexOf("%");
		value = totalValue * parseFloat(percent.slice(0, index)) / 100;
	} else value = +percent;
	if (isNan(value)) value = defaultValue;
	if (validate && totalValue != null && value > totalValue) value = totalValue;
	return value;
};
var hasDuplicate = (ary) => {
	if (!Array.isArray(ary)) return false;
	var len = ary.length;
	var cache = {};
	for (var i = 0; i < len; i++) if (!cache[String(ary[i])]) cache[String(ary[i])] = true;
	else return true;
	return false;
};
function interpolate(start, end, t) {
	if (isNumber$1(start) && isNumber$1(end)) return round(start + t * (end - start));
	return end;
}
function findEntryInArray(ary, specifiedKey, specifiedValue) {
	if (!ary || !ary.length) return;
	return ary.find((entry) => entry && (typeof specifiedKey === "function" ? specifiedKey(entry) : get(entry, specifiedKey)) === specifiedValue);
}
/**
* Checks if the value is null or undefined
* @param value The value to check
* @returns true if the value is null or undefined
*/
var isNullish = (value) => {
	return value === null || typeof value === "undefined";
};
/**
* Uppercase the first letter of a string
* @param {string} value The string to uppercase
* @returns {string} The uppercased string
*/
var upperFirst = (value) => {
	if (isNullish(value)) return value;
	return "".concat(value.charAt(0).toUpperCase()).concat(value.slice(1));
};
/**
* Checks if the value is not null nor undefined.
* @param value The value to check
* @returns true if the value is not null nor undefined
*/
function isNotNil(value) {
	return value != null;
}
/**
* No-operation function that does nothing.
* Useful as a placeholder or default callback function.
*/
function noop$2() {}
function isWellBehavedNumber(n) {
	return Number.isFinite(n);
}
function isPositiveNumber(n) {
	return typeof n === "number" && n > 0 && Number.isFinite(n);
}
var SVGElementPropKeySet = new Set([
	"aria-activedescendant",
	"aria-atomic",
	"aria-autocomplete",
	"aria-busy",
	"aria-checked",
	"aria-colcount",
	"aria-colindex",
	"aria-colspan",
	"aria-controls",
	"aria-current",
	"aria-describedby",
	"aria-details",
	"aria-disabled",
	"aria-errormessage",
	"aria-expanded",
	"aria-flowto",
	"aria-haspopup",
	"aria-hidden",
	"aria-invalid",
	"aria-keyshortcuts",
	"aria-label",
	"aria-labelledby",
	"aria-level",
	"aria-live",
	"aria-modal",
	"aria-multiline",
	"aria-multiselectable",
	"aria-orientation",
	"aria-owns",
	"aria-placeholder",
	"aria-posinset",
	"aria-pressed",
	"aria-readonly",
	"aria-relevant",
	"aria-required",
	"aria-roledescription",
	"aria-rowcount",
	"aria-rowindex",
	"aria-rowspan",
	"aria-selected",
	"aria-setsize",
	"aria-sort",
	"aria-valuemax",
	"aria-valuemin",
	"aria-valuenow",
	"aria-valuetext",
	"className",
	"color",
	"height",
	"id",
	"lang",
	"max",
	"media",
	"method",
	"min",
	"name",
	"style",
	"target",
	"width",
	"role",
	"tabIndex",
	"accentHeight",
	"accumulate",
	"additive",
	"alignmentBaseline",
	"allowReorder",
	"alphabetic",
	"amplitude",
	"arabicForm",
	"ascent",
	"attributeName",
	"attributeType",
	"autoReverse",
	"azimuth",
	"baseFrequency",
	"baselineShift",
	"baseProfile",
	"bbox",
	"begin",
	"bias",
	"by",
	"calcMode",
	"capHeight",
	"clip",
	"clipPath",
	"clipPathUnits",
	"clipRule",
	"colorInterpolation",
	"colorInterpolationFilters",
	"colorProfile",
	"colorRendering",
	"contentScriptType",
	"contentStyleType",
	"cursor",
	"cx",
	"cy",
	"d",
	"decelerate",
	"descent",
	"diffuseConstant",
	"direction",
	"display",
	"divisor",
	"dominantBaseline",
	"dur",
	"dx",
	"dy",
	"edgeMode",
	"elevation",
	"enableBackground",
	"end",
	"exponent",
	"externalResourcesRequired",
	"fill",
	"fillOpacity",
	"fillRule",
	"filter",
	"filterRes",
	"filterUnits",
	"floodColor",
	"floodOpacity",
	"focusable",
	"fontFamily",
	"fontSize",
	"fontSizeAdjust",
	"fontStretch",
	"fontStyle",
	"fontVariant",
	"fontWeight",
	"format",
	"from",
	"fx",
	"fy",
	"g1",
	"g2",
	"glyphName",
	"glyphOrientationHorizontal",
	"glyphOrientationVertical",
	"glyphRef",
	"gradientTransform",
	"gradientUnits",
	"hanging",
	"horizAdvX",
	"horizOriginX",
	"href",
	"ideographic",
	"imageRendering",
	"in2",
	"in",
	"intercept",
	"k1",
	"k2",
	"k3",
	"k4",
	"k",
	"kernelMatrix",
	"kernelUnitLength",
	"kerning",
	"keyPoints",
	"keySplines",
	"keyTimes",
	"lengthAdjust",
	"letterSpacing",
	"lightingColor",
	"limitingConeAngle",
	"local",
	"markerEnd",
	"markerHeight",
	"markerMid",
	"markerStart",
	"markerUnits",
	"markerWidth",
	"mask",
	"maskContentUnits",
	"maskUnits",
	"mathematical",
	"mode",
	"numOctaves",
	"offset",
	"opacity",
	"operator",
	"order",
	"orient",
	"orientation",
	"origin",
	"overflow",
	"overlinePosition",
	"overlineThickness",
	"paintOrder",
	"panose1",
	"pathLength",
	"patternContentUnits",
	"patternTransform",
	"patternUnits",
	"pointerEvents",
	"pointsAtX",
	"pointsAtY",
	"pointsAtZ",
	"preserveAlpha",
	"preserveAspectRatio",
	"primitiveUnits",
	"r",
	"radius",
	"refX",
	"refY",
	"renderingIntent",
	"repeatCount",
	"repeatDur",
	"requiredExtensions",
	"requiredFeatures",
	"restart",
	"result",
	"rotate",
	"rx",
	"ry",
	"seed",
	"shapeRendering",
	"slope",
	"spacing",
	"specularConstant",
	"specularExponent",
	"speed",
	"spreadMethod",
	"startOffset",
	"stdDeviation",
	"stemh",
	"stemv",
	"stitchTiles",
	"stopColor",
	"stopOpacity",
	"strikethroughPosition",
	"strikethroughThickness",
	"string",
	"stroke",
	"strokeDasharray",
	"strokeDashoffset",
	"strokeLinecap",
	"strokeLinejoin",
	"strokeMiterlimit",
	"strokeOpacity",
	"strokeWidth",
	"surfaceScale",
	"systemLanguage",
	"tableValues",
	"targetX",
	"targetY",
	"textAnchor",
	"textDecoration",
	"textLength",
	"textRendering",
	"to",
	"transform",
	"u1",
	"u2",
	"underlinePosition",
	"underlineThickness",
	"unicode",
	"unicodeBidi",
	"unicodeRange",
	"unitsPerEm",
	"vAlphabetic",
	"values",
	"vectorEffect",
	"version",
	"vertAdvY",
	"vertOriginX",
	"vertOriginY",
	"vHanging",
	"vIdeographic",
	"viewTarget",
	"visibility",
	"vMathematical",
	"widths",
	"wordSpacing",
	"writingMode",
	"x1",
	"x2",
	"x",
	"xChannelSelector",
	"xHeight",
	"xlinkActuate",
	"xlinkArcrole",
	"xlinkHref",
	"xlinkRole",
	"xlinkShow",
	"xlinkTitle",
	"xlinkType",
	"xmlBase",
	"xmlLang",
	"xmlns",
	"xmlnsXlink",
	"xmlSpace",
	"y1",
	"y2",
	"y",
	"yChannelSelector",
	"z",
	"zoomAndPan",
	"ref",
	"key",
	"angle"
]);
function isSvgElementPropKey(key) {
	if (typeof key !== "string") return false;
	return SVGElementPropKeySet.has(key);
}
/**
* Checks if the property is a data attribute.
* @param key The property key.
* @returns True if the key starts with 'data-', false otherwise.
*/
function isDataAttribute(key) {
	return typeof key === "string" && key.startsWith("data-");
}
/**
* Filters an object to only include SVG properties. Removes all event handlers too.
* @param obj - The object to filter
* @returns A new object containing only valid SVG properties, excluding event handlers.
*/
function svgPropertiesNoEvents(obj) {
	if (typeof obj !== "object" || obj === null) return {};
	var result = {};
	for (var key in obj) if (Object.prototype.hasOwnProperty.call(obj, key)) {
		if (isSvgElementPropKey(key) || isDataAttribute(key)) result[key] = obj[key];
	}
	return result;
}
/**
* Function to filter SVG properties from various input types.
* The input types can be:
* - A record of string keys to any values, in which case it returns a record of only SVG properties
* - A React element, in which case it returns the props of the element filtered to only SVG properties
* - Anything else, in which case it returns null
*
* This function has a wide-open return type, because it will read and filter the props of an arbitrary React element.
* This can be SVG, HTML, whatnot, with arbitrary values, so we can't type it more specifically.
*
* If you wish to have a type-safe version, use svgPropertiesNoEvents directly with a typed object.
*
* @param input - The input to filter, which can be a record, a React element, or other types.
* @returns A record of SVG properties if the input is a record or React element, otherwise null.
*/
function svgPropertiesNoEventsFromUnknown(input) {
	if (input == null) return null;
	if (/* @__PURE__ */ (0, import_react.isValidElement)(input) && typeof input.props === "object" && input.props !== null) {
		var p = input.props;
		return svgPropertiesNoEvents(p);
	}
	if (typeof input === "object" && !Array.isArray(input)) return svgPropertiesNoEvents(input);
	return null;
}
/**
* @license React
* use-sync-external-store-shim.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_use_sync_external_store_shim_production = /* @__PURE__ */ __commonJSMin(((exports) => {
	var React = require_react();
	function is(x, y) {
		return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
	}
	var objectIs = "function" === typeof Object.is ? Object.is : is, useState = React.useState, useEffect = React.useEffect, useLayoutEffect = React.useLayoutEffect, useDebugValue = React.useDebugValue;
	function useSyncExternalStore$2(subscribe, getSnapshot) {
		var value = getSnapshot(), _useState = useState({ inst: {
			value,
			getSnapshot
		} }), inst = _useState[0].inst, forceUpdate = _useState[1];
		useLayoutEffect(function() {
			inst.value = value;
			inst.getSnapshot = getSnapshot;
			checkIfSnapshotChanged(inst) && forceUpdate({ inst });
		}, [
			subscribe,
			value,
			getSnapshot
		]);
		useEffect(function() {
			checkIfSnapshotChanged(inst) && forceUpdate({ inst });
			return subscribe(function() {
				checkIfSnapshotChanged(inst) && forceUpdate({ inst });
			});
		}, [subscribe]);
		useDebugValue(value);
		return value;
	}
	function checkIfSnapshotChanged(inst) {
		var latestGetSnapshot = inst.getSnapshot;
		inst = inst.value;
		try {
			var nextValue = latestGetSnapshot();
			return !objectIs(inst, nextValue);
		} catch (error) {
			return !0;
		}
	}
	function useSyncExternalStore$1(subscribe, getSnapshot) {
		return getSnapshot();
	}
	var shim = "undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? useSyncExternalStore$1 : useSyncExternalStore$2;
	exports.useSyncExternalStore = void 0 !== React.useSyncExternalStore ? React.useSyncExternalStore : shim;
}));
var require_shim = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_use_sync_external_store_shim_production();
}));
/**
* @license React
* use-sync-external-store-shim/with-selector.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_with_selector_production = /* @__PURE__ */ __commonJSMin(((exports) => {
	var React = require_react(), shim = require_shim();
	function is(x, y) {
		return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
	}
	var objectIs = "function" === typeof Object.is ? Object.is : is, useSyncExternalStore = shim.useSyncExternalStore, useRef = React.useRef, useEffect = React.useEffect, useMemo = React.useMemo, useDebugValue = React.useDebugValue;
	exports.useSyncExternalStoreWithSelector = function(subscribe, getSnapshot, getServerSnapshot, selector, isEqual) {
		var instRef = useRef(null);
		if (null === instRef.current) {
			var inst = {
				hasValue: !1,
				value: null
			};
			instRef.current = inst;
		} else inst = instRef.current;
		instRef = useMemo(function() {
			function memoizedSelector(nextSnapshot) {
				if (!hasMemo) {
					hasMemo = !0;
					memoizedSnapshot = nextSnapshot;
					nextSnapshot = selector(nextSnapshot);
					if (void 0 !== isEqual && inst.hasValue) {
						var currentSelection = inst.value;
						if (isEqual(currentSelection, nextSnapshot)) return memoizedSelection = currentSelection;
					}
					return memoizedSelection = nextSnapshot;
				}
				currentSelection = memoizedSelection;
				if (objectIs(memoizedSnapshot, nextSnapshot)) return currentSelection;
				var nextSelection = selector(nextSnapshot);
				if (void 0 !== isEqual && isEqual(currentSelection, nextSelection)) return memoizedSnapshot = nextSnapshot, currentSelection;
				memoizedSnapshot = nextSnapshot;
				return memoizedSelection = nextSelection;
			}
			var hasMemo = !1, memoizedSnapshot, memoizedSelection, maybeGetServerSnapshot = void 0 === getServerSnapshot ? null : getServerSnapshot;
			return [function() {
				return memoizedSelector(getSnapshot());
			}, null === maybeGetServerSnapshot ? void 0 : function() {
				return memoizedSelector(maybeGetServerSnapshot());
			}];
		}, [
			getSnapshot,
			getServerSnapshot,
			selector,
			isEqual
		]);
		var value = useSyncExternalStore(subscribe, instRef[0], instRef[1]);
		useEffect(function() {
			inst.hasValue = !0;
			inst.value = value;
		}, [value]);
		useDebugValue(value);
		return value;
	};
}));
var import_with_selector$1 = (/* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_with_selector_production();
})))();
/**
* We need to use our own independent Redux context because we need to avoid interfering with other people's Redux stores
* in case they decide to install and use Recharts in another Redux app which is likely to happen.
*
* https://react-redux.js.org/using-react-redux/accessing-store#providing-custom-context
*/
var RechartsReduxContext = /* @__PURE__ */ (0, import_react.createContext)(null);
var noopDispatch = (a) => a;
var useAppDispatch = () => {
	var context = (0, import_react.useContext)(RechartsReduxContext);
	if (context) return context.store.dispatch;
	return noopDispatch;
};
var noop$1 = () => {};
var addNestedSubNoop = () => noop$1;
var refEquality = (a, b) => a === b;
/**
* This is a recharts variant of `useSelector` from 'react-redux' package.
*
* The difference is that react-redux version will throw an Error when used outside of Redux context.
*
* This, recharts version, will return undefined instead.
*
* This is because we want to allow using our components outside the Chart wrapper,
* and have people provide all props explicitly.
*
* If however they use the component inside a chart wrapper then those props become optional,
* and we read them from Redux state instead.
*
* @param selector for pulling things out of Redux store; will not be called if the store is not accessible
* @return whatever the selector returned; or undefined when outside of Redux store
*/
function useAppSelector(selector) {
	var context = (0, import_react.useContext)(RechartsReduxContext);
	var outOfContextSelector = (0, import_react.useMemo)(() => {
		if (!context) return noop$1;
		return (state) => {
			if (state == null) return;
			return selector(state);
		};
	}, [context, selector]);
	return (0, import_with_selector$1.useSyncExternalStoreWithSelector)(context ? context.subscription.addNestedSub : addNestedSubNoop, context ? context.store.getState : noop$1, context ? context.store.getState : noop$1, outOfContextSelector, refEquality);
}
var redux_toolkit_modern_exports = /* @__PURE__ */ __exportAll({
	ReducerType: () => ReducerType,
	SHOULD_AUTOBATCH: () => SHOULD_AUTOBATCH,
	TaskAbortError: () => TaskAbortError,
	Tuple: () => Tuple,
	addListener: () => addListener,
	asyncThunkCreator: () => asyncThunkCreator,
	autoBatchEnhancer: () => autoBatchEnhancer,
	buildCreateSlice: () => buildCreateSlice,
	clearAllListeners: () => clearAllListeners,
	combineSlices: () => combineSlices,
	configureStore: () => configureStore,
	createAction: () => createAction,
	createActionCreatorInvariantMiddleware: () => createActionCreatorInvariantMiddleware,
	createAsyncThunk: () => createAsyncThunk,
	createDraftSafeSelector: () => createDraftSafeSelector,
	createDraftSafeSelectorCreator: () => createDraftSafeSelectorCreator,
	createDynamicMiddleware: () => createDynamicMiddleware,
	createEntityAdapter: () => createEntityAdapter,
	createImmutableStateInvariantMiddleware: () => createImmutableStateInvariantMiddleware,
	createListenerMiddleware: () => createListenerMiddleware,
	createNextState: () => produce,
	createReducer: () => createReducer,
	createSelector: () => createSelector,
	createSelectorCreator: () => createSelectorCreator,
	createSerializableStateInvariantMiddleware: () => createSerializableStateInvariantMiddleware,
	createSlice: () => createSlice,
	current: () => current,
	findNonSerializableValue: () => findNonSerializableValue,
	formatProdErrorMessage: () => formatProdErrorMessage,
	freeze: () => freeze,
	isActionCreator: () => isActionCreator,
	isAllOf: () => isAllOf,
	isAnyOf: () => isAnyOf,
	isAsyncThunkAction: () => isAsyncThunkAction,
	isDraft: () => isDraft,
	isFluxStandardAction: () => isFSA,
	isFulfilled: () => isFulfilled,
	isImmutableDefault: () => isImmutableDefault,
	isPending: () => isPending,
	isPlain: () => isPlain,
	isRejected: () => isRejected,
	isRejectedWithValue: () => isRejectedWithValue,
	lruMemoize: () => lruMemoize,
	miniSerializeError: () => miniSerializeError,
	nanoid: () => nanoid,
	original: () => original$1,
	prepareAutoBatched: () => prepareAutoBatched,
	removeListener: () => removeListener,
	unwrapResult: () => unwrapResult,
	weakMapMemoize: () => weakMapMemoize
});
__reExport(redux_toolkit_modern_exports, redux_exports);
var createDraftSafeSelectorCreator = (...args) => {
	const createSelector2 = createSelectorCreator(...args);
	const createDraftSafeSelector2 = Object.assign((...args2) => {
		const selector = createSelector2(...args2);
		const wrappedSelector = (value, ...rest) => selector(isDraft(value) ? current(value) : value, ...rest);
		Object.assign(wrappedSelector, selector);
		return wrappedSelector;
	}, { withTypes: () => createDraftSafeSelector2 });
	return createDraftSafeSelector2;
};
var createDraftSafeSelector = /* @__PURE__ */ createDraftSafeSelectorCreator(weakMapMemoize);
var composeWithDevTools = typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
	if (arguments.length === 0) return void 0;
	if (typeof arguments[0] === "object") return compose;
	return compose.apply(null, arguments);
};
typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__;
var hasMatchFunction = (v) => {
	return v && typeof v.match === "function";
};
function createAction(type, prepareAction) {
	function actionCreator(...args) {
		if (prepareAction) {
			let prepared = prepareAction(...args);
			if (!prepared) throw new Error(formatProdErrorMessage(0));
			return {
				type,
				payload: prepared.payload,
				..."meta" in prepared && { meta: prepared.meta },
				..."error" in prepared && { error: prepared.error }
			};
		}
		return {
			type,
			payload: args[0]
		};
	}
	actionCreator.toString = () => `${type}`;
	actionCreator.type = type;
	actionCreator.match = (action) => isAction(action) && action.type === type;
	return actionCreator;
}
function isActionCreator(action) {
	return typeof action === "function" && "type" in action && hasMatchFunction(action);
}
function isFSA(action) {
	return isAction(action) && Object.keys(action).every(isValidKey);
}
function isValidKey(key) {
	return [
		"type",
		"payload",
		"error",
		"meta"
	].indexOf(key) > -1;
}
function createActionCreatorInvariantMiddleware(options = {}) {
	return () => (next) => (action) => next(action);
}
var Tuple = class _Tuple extends Array {
	constructor(...items) {
		super(...items);
		Object.setPrototypeOf(this, _Tuple.prototype);
	}
	static get [Symbol.species]() {
		return _Tuple;
	}
	concat(...arr) {
		return super.concat.apply(this, arr);
	}
	prepend(...arr) {
		if (arr.length === 1 && Array.isArray(arr[0])) return new _Tuple(...arr[0].concat(this));
		return new _Tuple(...arr.concat(this));
	}
};
function freezeDraftable(val) {
	return isDraftable(val) ? produce(val, () => {}) : val;
}
function getOrInsertComputed(map, key, compute) {
	if (map.has(key)) return map.get(key);
	return map.set(key, compute(key)).get(key);
}
function isImmutableDefault(value) {
	return typeof value !== "object" || value == null || Object.isFrozen(value);
}
function createImmutableStateInvariantMiddleware(options = {}) {
	return () => (next) => (action) => next(action);
}
function isPlain(val) {
	const type = typeof val;
	return val == null || type === "string" || type === "boolean" || type === "number" || Array.isArray(val) || isPlainObject$1(val);
}
function findNonSerializableValue(value, path = "", isSerializable = isPlain, getEntries, ignoredPaths = [], cache) {
	let foundNestedSerializable;
	if (!isSerializable(value)) return {
		keyPath: path || "<root>",
		value
	};
	if (typeof value !== "object" || value === null) return false;
	if (cache?.has(value)) return false;
	const entries = getEntries != null ? getEntries(value) : Object.entries(value);
	const hasIgnoredPaths = ignoredPaths.length > 0;
	for (const [key, nestedValue] of entries) {
		const nestedPath = path ? path + "." + key : key;
		if (hasIgnoredPaths) {
			if (ignoredPaths.some((ignored) => {
				if (ignored instanceof RegExp) return ignored.test(nestedPath);
				return nestedPath === ignored;
			})) continue;
		}
		if (!isSerializable(nestedValue)) return {
			keyPath: nestedPath,
			value: nestedValue
		};
		if (typeof nestedValue === "object") {
			foundNestedSerializable = findNonSerializableValue(nestedValue, nestedPath, isSerializable, getEntries, ignoredPaths, cache);
			if (foundNestedSerializable) return foundNestedSerializable;
		}
	}
	if (cache && isNestedFrozen(value)) cache.add(value);
	return false;
}
function isNestedFrozen(value) {
	if (!Object.isFrozen(value)) return false;
	for (const nestedValue of Object.values(value)) {
		if (typeof nestedValue !== "object" || nestedValue === null) continue;
		if (!isNestedFrozen(nestedValue)) return false;
	}
	return true;
}
function createSerializableStateInvariantMiddleware(options = {}) {
	return () => (next) => (action) => next(action);
}
function isBoolean(x) {
	return typeof x === "boolean";
}
var buildGetDefaultMiddleware = () => function getDefaultMiddleware(options) {
	const { thunk: thunk$1 = true, immutableCheck = true, serializableCheck = true, actionCreatorCheck = true } = options ?? {};
	let middlewareArray = new Tuple();
	if (thunk$1) if (isBoolean(thunk$1)) middlewareArray.push(thunk);
	else middlewareArray.push(withExtraArgument(thunk$1.extraArgument));
	return middlewareArray;
};
var SHOULD_AUTOBATCH = "RTK_autoBatch";
var prepareAutoBatched = () => (payload) => ({
	payload,
	meta: { [SHOULD_AUTOBATCH]: true }
});
var createQueueWithTimer = (timeout) => {
	return (notify) => {
		setTimeout(notify, timeout);
	};
};
var createRafWithFallbackTimer = (raf, timeout) => {
	return (notify) => {
		let called = false;
		const callback = () => {
			if (called) return;
			called = true;
			cancelAnimationFrame(rafId);
			clearTimeout(timerId);
			notify();
		};
		const rafId = raf(callback);
		const timerId = setTimeout(callback, timeout);
	};
};
var autoBatchEnhancer = (options = { type: "raf" }) => (next) => (...args) => {
	const store = next(...args);
	let notifying = true;
	let shouldNotifyAtEndOfTick = false;
	let notificationQueued = false;
	const listeners = /* @__PURE__ */ new Set();
	const queueCallback = options.type === "tick" ? queueMicrotask : options.type === "raf" ? typeof window !== "undefined" && window.requestAnimationFrame ? createRafWithFallbackTimer(window.requestAnimationFrame, 100) : createQueueWithTimer(10) : options.type === "callback" ? options.queueNotification : createQueueWithTimer(options.timeout);
	const notifyListeners = () => {
		notificationQueued = false;
		if (shouldNotifyAtEndOfTick) {
			shouldNotifyAtEndOfTick = false;
			listeners.forEach((l) => l());
		}
	};
	return Object.assign({}, store, {
		subscribe(listener2) {
			const wrappedListener = () => notifying && listener2();
			const unsubscribe = store.subscribe(wrappedListener);
			listeners.add(listener2);
			return () => {
				unsubscribe();
				listeners.delete(listener2);
			};
		},
		dispatch(action) {
			try {
				notifying = !action?.meta?.[SHOULD_AUTOBATCH];
				shouldNotifyAtEndOfTick = !notifying;
				if (shouldNotifyAtEndOfTick) {
					if (!notificationQueued) {
						notificationQueued = true;
						queueCallback(notifyListeners);
					}
				}
				return store.dispatch(action);
			} finally {
				notifying = true;
			}
		}
	});
};
var buildGetDefaultEnhancers = (middlewareEnhancer) => function getDefaultEnhancers(options) {
	const { autoBatch = true } = options ?? {};
	let enhancerArray = new Tuple(middlewareEnhancer);
	if (autoBatch) enhancerArray.push(autoBatchEnhancer(typeof autoBatch === "object" ? autoBatch : void 0));
	return enhancerArray;
};
function configureStore(options) {
	const getDefaultMiddleware = buildGetDefaultMiddleware();
	const { reducer = void 0, middleware, devTools = true, duplicateMiddlewareCheck = true, preloadedState = void 0, enhancers = void 0 } = options || {};
	let rootReducer;
	if (typeof reducer === "function") rootReducer = reducer;
	else if (isPlainObject$1(reducer)) rootReducer = combineReducers(reducer);
	else throw new Error(formatProdErrorMessage(1));
	let finalMiddleware;
	if (typeof middleware === "function") finalMiddleware = middleware(getDefaultMiddleware);
	else finalMiddleware = getDefaultMiddleware();
	let finalCompose = compose;
	if (devTools) finalCompose = composeWithDevTools({
		trace: false,
		...typeof devTools === "object" && devTools
	});
	const getDefaultEnhancers = buildGetDefaultEnhancers(applyMiddleware(...finalMiddleware));
	let storeEnhancers = typeof enhancers === "function" ? enhancers(getDefaultEnhancers) : getDefaultEnhancers();
	const composedEnhancer = finalCompose(...storeEnhancers);
	return createStore(rootReducer, preloadedState, composedEnhancer);
}
function executeReducerBuilderCallback(builderCallback) {
	const actionsMap = {};
	const actionMatchers = [];
	let defaultCaseReducer;
	const builder = {
		addCase(typeOrActionCreator, reducer) {
			const type = typeof typeOrActionCreator === "string" ? typeOrActionCreator : typeOrActionCreator.type;
			if (!type) throw new Error(formatProdErrorMessage(28));
			if (type in actionsMap) throw new Error(formatProdErrorMessage(29));
			actionsMap[type] = reducer;
			return builder;
		},
		addAsyncThunk(asyncThunk, reducers) {
			if (reducers.pending) actionsMap[asyncThunk.pending.type] = reducers.pending;
			if (reducers.rejected) actionsMap[asyncThunk.rejected.type] = reducers.rejected;
			if (reducers.fulfilled) actionsMap[asyncThunk.fulfilled.type] = reducers.fulfilled;
			if (reducers.settled) actionMatchers.push({
				matcher: asyncThunk.settled,
				reducer: reducers.settled
			});
			return builder;
		},
		addMatcher(matcher, reducer) {
			actionMatchers.push({
				matcher,
				reducer
			});
			return builder;
		},
		addDefaultCase(reducer) {
			defaultCaseReducer = reducer;
			return builder;
		}
	};
	builderCallback(builder);
	return [
		actionsMap,
		actionMatchers,
		defaultCaseReducer
	];
}
function isStateFunction(x) {
	return typeof x === "function";
}
function createReducer(initialState, mapOrBuilderCallback) {
	let [actionsMap, finalActionMatchers, finalDefaultCaseReducer] = executeReducerBuilderCallback(mapOrBuilderCallback);
	let getInitialState;
	if (isStateFunction(initialState)) getInitialState = () => freezeDraftable(initialState());
	else {
		const frozenInitialState = freezeDraftable(initialState);
		getInitialState = () => frozenInitialState;
	}
	function reducer(state = getInitialState(), action) {
		let caseReducers = [actionsMap[action.type], ...finalActionMatchers.filter(({ matcher }) => matcher(action)).map(({ reducer: reducer2 }) => reducer2)];
		if (caseReducers.filter((cr) => !!cr).length === 0) caseReducers = [finalDefaultCaseReducer];
		return caseReducers.reduce((previousState, caseReducer) => {
			if (caseReducer) if (isDraft(previousState)) {
				const result = caseReducer(previousState, action);
				if (result === void 0) return previousState;
				return result;
			} else if (!isDraftable(previousState)) {
				const result = caseReducer(previousState, action);
				if (result === void 0) {
					if (previousState === null) return previousState;
					throw Error("A case reducer on a non-draftable value must not return undefined");
				}
				return result;
			} else return produce(previousState, (draft) => {
				return caseReducer(draft, action);
			});
			return previousState;
		}, state);
	}
	reducer.getInitialState = getInitialState;
	return reducer;
}
var matches = (matcher, action) => {
	if (hasMatchFunction(matcher)) return matcher.match(action);
	else return matcher(action);
};
function isAnyOf(...matchers) {
	return (action) => {
		return matchers.some((matcher) => matches(matcher, action));
	};
}
function isAllOf(...matchers) {
	return (action) => {
		return matchers.every((matcher) => matches(matcher, action));
	};
}
function hasExpectedRequestMetadata(action, validStatus) {
	if (!action || !action.meta) return false;
	const hasValidRequestId = typeof action.meta.requestId === "string";
	const hasValidRequestStatus = validStatus.indexOf(action.meta.requestStatus) > -1;
	return hasValidRequestId && hasValidRequestStatus;
}
function isAsyncThunkArray(a) {
	return typeof a[0] === "function" && "pending" in a[0] && "fulfilled" in a[0] && "rejected" in a[0];
}
function isPending(...asyncThunks) {
	if (asyncThunks.length === 0) return (action) => hasExpectedRequestMetadata(action, ["pending"]);
	if (!isAsyncThunkArray(asyncThunks)) return isPending()(asyncThunks[0]);
	return isAnyOf(...asyncThunks.map((asyncThunk) => asyncThunk.pending));
}
function isRejected(...asyncThunks) {
	if (asyncThunks.length === 0) return (action) => hasExpectedRequestMetadata(action, ["rejected"]);
	if (!isAsyncThunkArray(asyncThunks)) return isRejected()(asyncThunks[0]);
	return isAnyOf(...asyncThunks.map((asyncThunk) => asyncThunk.rejected));
}
function isRejectedWithValue(...asyncThunks) {
	const hasFlag = (action) => {
		return action && action.meta && action.meta.rejectedWithValue;
	};
	if (asyncThunks.length === 0) return isAllOf(isRejected(...asyncThunks), hasFlag);
	if (!isAsyncThunkArray(asyncThunks)) return isRejectedWithValue()(asyncThunks[0]);
	return isAllOf(isRejected(...asyncThunks), hasFlag);
}
function isFulfilled(...asyncThunks) {
	if (asyncThunks.length === 0) return (action) => hasExpectedRequestMetadata(action, ["fulfilled"]);
	if (!isAsyncThunkArray(asyncThunks)) return isFulfilled()(asyncThunks[0]);
	return isAnyOf(...asyncThunks.map((asyncThunk) => asyncThunk.fulfilled));
}
function isAsyncThunkAction(...asyncThunks) {
	if (asyncThunks.length === 0) return (action) => hasExpectedRequestMetadata(action, [
		"pending",
		"fulfilled",
		"rejected"
	]);
	if (!isAsyncThunkArray(asyncThunks)) return isAsyncThunkAction()(asyncThunks[0]);
	return isAnyOf(...asyncThunks.flatMap((asyncThunk) => [
		asyncThunk.pending,
		asyncThunk.rejected,
		asyncThunk.fulfilled
	]));
}
var urlAlphabet = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW";
var nanoid = (size = 21) => {
	let id = "";
	let i = size;
	while (i--) id += urlAlphabet[Math.random() * 64 | 0];
	return id;
};
var commonProperties = [
	"name",
	"message",
	"stack",
	"code"
];
var RejectWithValue = class {
	constructor(payload, meta) {
		this.payload = payload;
		this.meta = meta;
	}
	payload;
	meta;
	_type;
};
var FulfillWithMeta = class {
	constructor(payload, meta) {
		this.payload = payload;
		this.meta = meta;
	}
	payload;
	meta;
	_type;
};
var miniSerializeError = (value) => {
	if (typeof value === "object" && value !== null) {
		const simpleError = {};
		for (const property of commonProperties) if (typeof value[property] === "string") simpleError[property] = value[property];
		return simpleError;
	}
	return { message: String(value) };
};
var externalAbortMessage = "External signal was aborted";
var createAsyncThunk = /* @__PURE__ */ (() => {
	function createAsyncThunk2(typePrefix, payloadCreator, options) {
		const fulfilled = createAction(typePrefix + "/fulfilled", (payload, requestId, arg, meta) => ({
			payload,
			meta: {
				...meta || {},
				arg,
				requestId,
				requestStatus: "fulfilled"
			}
		}));
		const pending = createAction(typePrefix + "/pending", (requestId, arg, meta) => ({
			payload: void 0,
			meta: {
				...meta || {},
				arg,
				requestId,
				requestStatus: "pending"
			}
		}));
		const rejected = createAction(typePrefix + "/rejected", (error, requestId, arg, payload, meta) => ({
			payload,
			error: (options && options.serializeError || miniSerializeError)(error || "Rejected"),
			meta: {
				...meta || {},
				arg,
				requestId,
				rejectedWithValue: !!payload,
				requestStatus: "rejected",
				aborted: error?.name === "AbortError",
				condition: error?.name === "ConditionError"
			}
		}));
		function actionCreator(arg, { signal } = {}) {
			return (dispatch, getState, extra) => {
				const requestId = options?.idGenerator ? options.idGenerator(arg) : nanoid();
				const abortController = new AbortController();
				let abortHandler;
				let abortReason;
				function abort(reason) {
					abortReason = reason;
					abortController.abort();
				}
				if (signal) if (signal.aborted) abort(externalAbortMessage);
				else signal.addEventListener("abort", () => abort(externalAbortMessage), { once: true });
				const promise = (async function() {
					let finalAction;
					try {
						let conditionResult = options?.condition?.(arg, {
							getState,
							extra
						});
						if (isThenable(conditionResult)) conditionResult = await conditionResult;
						if (conditionResult === false || abortController.signal.aborted) throw {
							name: "ConditionError",
							message: "Aborted due to condition callback returning false."
						};
						const abortedPromise = new Promise((_, reject) => {
							abortHandler = () => {
								reject({
									name: "AbortError",
									message: abortReason || "Aborted"
								});
							};
							abortController.signal.addEventListener("abort", abortHandler, { once: true });
						});
						dispatch(pending(requestId, arg, options?.getPendingMeta?.({
							requestId,
							arg
						}, {
							getState,
							extra
						})));
						finalAction = await Promise.race([abortedPromise, Promise.resolve(payloadCreator(arg, {
							dispatch,
							getState,
							extra,
							requestId,
							signal: abortController.signal,
							abort,
							rejectWithValue: ((value, meta) => {
								return new RejectWithValue(value, meta);
							}),
							fulfillWithValue: ((value, meta) => {
								return new FulfillWithMeta(value, meta);
							})
						})).then((result) => {
							if (result instanceof RejectWithValue) throw result;
							if (result instanceof FulfillWithMeta) return fulfilled(result.payload, requestId, arg, result.meta);
							return fulfilled(result, requestId, arg);
						})]);
					} catch (err) {
						finalAction = err instanceof RejectWithValue ? rejected(null, requestId, arg, err.payload, err.meta) : rejected(err, requestId, arg);
					} finally {
						if (abortHandler) abortController.signal.removeEventListener("abort", abortHandler);
					}
					if (!(options && !options.dispatchConditionRejection && rejected.match(finalAction) && finalAction.meta.condition)) dispatch(finalAction);
					return finalAction;
				})();
				return Object.assign(promise, {
					abort,
					requestId,
					arg,
					unwrap() {
						return promise.then(unwrapResult);
					}
				});
			};
		}
		return Object.assign(actionCreator, {
			pending,
			rejected,
			fulfilled,
			settled: isAnyOf(rejected, fulfilled),
			typePrefix
		});
	}
	createAsyncThunk2.withTypes = () => createAsyncThunk2;
	return createAsyncThunk2;
})();
function unwrapResult(action) {
	if (action.meta && action.meta.rejectedWithValue) throw action.payload;
	if (action.error) throw action.error;
	return action.payload;
}
function isThenable(value) {
	return value !== null && typeof value === "object" && typeof value.then === "function";
}
var asyncThunkSymbol = /* @__PURE__ */ Symbol.for("rtk-slice-createasyncthunk");
var asyncThunkCreator = { [asyncThunkSymbol]: createAsyncThunk };
var ReducerType = /* @__PURE__ */ ((ReducerType2) => {
	ReducerType2["reducer"] = "reducer";
	ReducerType2["reducerWithPrepare"] = "reducerWithPrepare";
	ReducerType2["asyncThunk"] = "asyncThunk";
	return ReducerType2;
})(ReducerType || {});
function getType(slice, actionKey) {
	return `${slice}/${actionKey}`;
}
function buildCreateSlice({ creators } = {}) {
	const cAT = creators?.asyncThunk?.[asyncThunkSymbol];
	return function createSlice2(options) {
		const { name, reducerPath = name } = options;
		if (!name) throw new Error(formatProdErrorMessage(11));
		const reducers = (typeof options.reducers === "function" ? options.reducers(buildReducerCreators()) : options.reducers) || {};
		const reducerNames = Object.keys(reducers);
		const context = {
			sliceCaseReducersByName: {},
			sliceCaseReducersByType: {},
			actionCreators: {},
			sliceMatchers: []
		};
		const contextMethods = {
			addCase(typeOrActionCreator, reducer2) {
				const type = typeof typeOrActionCreator === "string" ? typeOrActionCreator : typeOrActionCreator.type;
				if (!type) throw new Error(formatProdErrorMessage(12));
				if (type in context.sliceCaseReducersByType) throw new Error(formatProdErrorMessage(13));
				context.sliceCaseReducersByType[type] = reducer2;
				return contextMethods;
			},
			addMatcher(matcher, reducer2) {
				context.sliceMatchers.push({
					matcher,
					reducer: reducer2
				});
				return contextMethods;
			},
			exposeAction(name2, actionCreator) {
				context.actionCreators[name2] = actionCreator;
				return contextMethods;
			},
			exposeCaseReducer(name2, reducer2) {
				context.sliceCaseReducersByName[name2] = reducer2;
				return contextMethods;
			}
		};
		reducerNames.forEach((reducerName) => {
			const reducerDefinition = reducers[reducerName];
			const reducerDetails = {
				reducerName,
				type: getType(name, reducerName),
				createNotation: typeof options.reducers === "function"
			};
			if (isAsyncThunkSliceReducerDefinition(reducerDefinition)) handleThunkCaseReducerDefinition(reducerDetails, reducerDefinition, contextMethods, cAT);
			else handleNormalReducerDefinition(reducerDetails, reducerDefinition, contextMethods);
		});
		function buildReducer() {
			const [extraReducers = {}, actionMatchers = [], defaultCaseReducer = void 0] = typeof options.extraReducers === "function" ? executeReducerBuilderCallback(options.extraReducers) : [options.extraReducers];
			const finalCaseReducers = {
				...extraReducers,
				...context.sliceCaseReducersByType
			};
			return createReducer(options.initialState, (builder) => {
				for (let key in finalCaseReducers) builder.addCase(key, finalCaseReducers[key]);
				for (let sM of context.sliceMatchers) builder.addMatcher(sM.matcher, sM.reducer);
				for (let m of actionMatchers) builder.addMatcher(m.matcher, m.reducer);
				if (defaultCaseReducer) builder.addDefaultCase(defaultCaseReducer);
			});
		}
		const selectSelf = (state) => state;
		const injectedSelectorCache = /* @__PURE__ */ new Map();
		const injectedStateCache = /* @__PURE__ */ new WeakMap();
		let _reducer;
		function reducer(state, action) {
			if (!_reducer) _reducer = buildReducer();
			return _reducer(state, action);
		}
		function getInitialState() {
			if (!_reducer) _reducer = buildReducer();
			return _reducer.getInitialState();
		}
		function makeSelectorProps(reducerPath2, injected = false) {
			function selectSlice(state) {
				let sliceState = state[reducerPath2];
				if (typeof sliceState === "undefined") {
					if (injected) sliceState = getOrInsertComputed(injectedStateCache, selectSlice, getInitialState);
				}
				return sliceState;
			}
			function getSelectors(selectState = selectSelf) {
				return getOrInsertComputed(getOrInsertComputed(injectedSelectorCache, injected, () => /* @__PURE__ */ new WeakMap()), selectState, () => {
					const map = {};
					for (const [name2, selector] of Object.entries(options.selectors ?? {})) map[name2] = wrapSelector(selector, selectState, () => getOrInsertComputed(injectedStateCache, selectState, getInitialState), injected);
					return map;
				});
			}
			return {
				reducerPath: reducerPath2,
				getSelectors,
				get selectors() {
					return getSelectors(selectSlice);
				},
				selectSlice
			};
		}
		const slice = {
			name,
			reducer,
			actions: context.actionCreators,
			caseReducers: context.sliceCaseReducersByName,
			getInitialState,
			...makeSelectorProps(reducerPath),
			injectInto(injectable, { reducerPath: pathOpt, ...config } = {}) {
				const newReducerPath = pathOpt ?? reducerPath;
				injectable.inject({
					reducerPath: newReducerPath,
					reducer
				}, config);
				return {
					...slice,
					...makeSelectorProps(newReducerPath, true)
				};
			}
		};
		return slice;
	};
}
function wrapSelector(selector, selectState, getInitialState, injected) {
	function wrapper(rootState, ...args) {
		let sliceState = selectState(rootState);
		if (typeof sliceState === "undefined") {
			if (injected) sliceState = getInitialState();
		}
		return selector(sliceState, ...args);
	}
	wrapper.unwrapped = selector;
	return wrapper;
}
var createSlice = /* @__PURE__ */ buildCreateSlice();
function buildReducerCreators() {
	function asyncThunk(payloadCreator, config) {
		return {
			_reducerDefinitionType: "asyncThunk",
			payloadCreator,
			...config
		};
	}
	asyncThunk.withTypes = () => asyncThunk;
	return {
		reducer(caseReducer) {
			return Object.assign({ [caseReducer.name](...args) {
				return caseReducer(...args);
			} }[caseReducer.name], { _reducerDefinitionType: "reducer" });
		},
		preparedReducer(prepare, reducer) {
			return {
				_reducerDefinitionType: "reducerWithPrepare",
				prepare,
				reducer
			};
		},
		asyncThunk
	};
}
function handleNormalReducerDefinition({ type, reducerName, createNotation }, maybeReducerWithPrepare, context) {
	let caseReducer;
	let prepareCallback;
	if ("reducer" in maybeReducerWithPrepare) {
		if (createNotation && !isCaseReducerWithPrepareDefinition(maybeReducerWithPrepare)) throw new Error(formatProdErrorMessage(17));
		caseReducer = maybeReducerWithPrepare.reducer;
		prepareCallback = maybeReducerWithPrepare.prepare;
	} else caseReducer = maybeReducerWithPrepare;
	context.addCase(type, caseReducer).exposeCaseReducer(reducerName, caseReducer).exposeAction(reducerName, prepareCallback ? createAction(type, prepareCallback) : createAction(type));
}
function isAsyncThunkSliceReducerDefinition(reducerDefinition) {
	return reducerDefinition._reducerDefinitionType === "asyncThunk";
}
function isCaseReducerWithPrepareDefinition(reducerDefinition) {
	return reducerDefinition._reducerDefinitionType === "reducerWithPrepare";
}
function handleThunkCaseReducerDefinition({ type, reducerName }, reducerDefinition, context, cAT) {
	if (!cAT) throw new Error(formatProdErrorMessage(18));
	const { payloadCreator, fulfilled, pending, rejected, settled, options } = reducerDefinition;
	const thunk = cAT(type, payloadCreator, options);
	context.exposeAction(reducerName, thunk);
	if (fulfilled) context.addCase(thunk.fulfilled, fulfilled);
	if (pending) context.addCase(thunk.pending, pending);
	if (rejected) context.addCase(thunk.rejected, rejected);
	if (settled) context.addMatcher(thunk.settled, settled);
	context.exposeCaseReducer(reducerName, {
		fulfilled: fulfilled || noop,
		pending: pending || noop,
		rejected: rejected || noop,
		settled: settled || noop
	});
}
function noop() {}
function getInitialEntityState() {
	return {
		ids: [],
		entities: {}
	};
}
function createInitialStateFactory(stateAdapter) {
	function getInitialState(additionalState = {}, entities) {
		const state = Object.assign(getInitialEntityState(), additionalState);
		return entities ? stateAdapter.setAll(state, entities) : state;
	}
	return { getInitialState };
}
function createSelectorsFactory() {
	function getSelectors(selectState, options = {}) {
		const { createSelector: createSelector2 = createDraftSafeSelector } = options;
		const selectIds = (state) => state.ids;
		const selectEntities = (state) => state.entities;
		const selectAll = createSelector2(selectIds, selectEntities, (ids, entities) => ids.map((id) => entities[id]));
		const selectId = (_, id) => id;
		const selectById = (entities, id) => entities[id];
		const selectTotal = createSelector2(selectIds, (ids) => ids.length);
		if (!selectState) return {
			selectIds,
			selectEntities,
			selectAll,
			selectTotal,
			selectById: createSelector2(selectEntities, selectId, selectById)
		};
		const selectGlobalizedEntities = createSelector2(selectState, selectEntities);
		return {
			selectIds: createSelector2(selectState, selectIds),
			selectEntities: selectGlobalizedEntities,
			selectAll: createSelector2(selectState, selectAll),
			selectTotal: createSelector2(selectState, selectTotal),
			selectById: createSelector2(selectGlobalizedEntities, selectId, selectById)
		};
	}
	return { getSelectors };
}
var isDraftTyped = isDraft;
function createSingleArgumentStateOperator(mutator) {
	const operator = createStateOperator((_, state) => mutator(state));
	return function operation(state) {
		return operator(state, void 0);
	};
}
function createStateOperator(mutator) {
	return function operation(state, arg) {
		function isPayloadActionArgument(arg2) {
			return isFSA(arg2);
		}
		const runMutator = (draft) => {
			if (isPayloadActionArgument(arg)) mutator(arg.payload, draft);
			else mutator(arg, draft);
		};
		if (isDraftTyped(state)) {
			runMutator(state);
			return state;
		}
		return produce(state, runMutator);
	};
}
function selectIdValue(entity, selectId) {
	return selectId(entity);
}
function ensureEntitiesArray(entities) {
	if (!Array.isArray(entities)) entities = Object.values(entities);
	return entities;
}
function getCurrent(value) {
	return isDraft(value) ? current(value) : value;
}
function splitAddedUpdatedEntities(newEntities, selectId, state) {
	newEntities = ensureEntitiesArray(newEntities);
	const existingIdsArray = getCurrent(state.ids);
	const existingIds = new Set(existingIdsArray);
	const added = [];
	const addedIds = /* @__PURE__ */ new Set([]);
	const updated = [];
	for (const entity of newEntities) {
		const id = selectIdValue(entity, selectId);
		if (existingIds.has(id) || addedIds.has(id)) updated.push({
			id,
			changes: entity
		});
		else {
			addedIds.add(id);
			added.push(entity);
		}
	}
	return [
		added,
		updated,
		existingIdsArray
	];
}
function createUnsortedStateAdapter(selectId) {
	function addOneMutably(entity, state) {
		const key = selectIdValue(entity, selectId);
		if (key in state.entities) return;
		state.ids.push(key);
		state.entities[key] = entity;
	}
	function addManyMutably(newEntities, state) {
		newEntities = ensureEntitiesArray(newEntities);
		for (const entity of newEntities) addOneMutably(entity, state);
	}
	function setOneMutably(entity, state) {
		const key = selectIdValue(entity, selectId);
		if (!(key in state.entities)) state.ids.push(key);
		state.entities[key] = entity;
	}
	function setManyMutably(newEntities, state) {
		newEntities = ensureEntitiesArray(newEntities);
		for (const entity of newEntities) setOneMutably(entity, state);
	}
	function setAllMutably(newEntities, state) {
		newEntities = ensureEntitiesArray(newEntities);
		state.ids = [];
		state.entities = {};
		addManyMutably(newEntities, state);
	}
	function removeOneMutably(key, state) {
		return removeManyMutably([key], state);
	}
	function removeManyMutably(keys, state) {
		let didMutate = false;
		keys.forEach((key) => {
			if (key in state.entities) {
				delete state.entities[key];
				didMutate = true;
			}
		});
		if (didMutate) state.ids = state.ids.filter((id) => id in state.entities);
	}
	function removeAllMutably(state) {
		Object.assign(state, {
			ids: [],
			entities: {}
		});
	}
	function takeNewKey(keys, update, state) {
		const original3 = state.entities[update.id];
		if (original3 === void 0) return false;
		const updated = Object.assign({}, original3, update.changes);
		const newKey = selectIdValue(updated, selectId);
		const hasNewKey = newKey !== update.id;
		if (hasNewKey) {
			keys[update.id] = newKey;
			delete state.entities[update.id];
		}
		state.entities[newKey] = updated;
		return hasNewKey;
	}
	function updateOneMutably(update, state) {
		return updateManyMutably([update], state);
	}
	function updateManyMutably(updates, state) {
		const newKeys = {};
		const updatesPerEntity = {};
		updates.forEach((update) => {
			if (update.id in state.entities) updatesPerEntity[update.id] = {
				id: update.id,
				changes: {
					...updatesPerEntity[update.id]?.changes,
					...update.changes
				}
			};
		});
		updates = Object.values(updatesPerEntity);
		if (updates.length > 0) {
			if (updates.filter((update) => takeNewKey(newKeys, update, state)).length > 0) state.ids = Object.values(state.entities).map((e) => selectIdValue(e, selectId));
		}
	}
	function upsertOneMutably(entity, state) {
		return upsertManyMutably([entity], state);
	}
	function upsertManyMutably(newEntities, state) {
		const [added, updated] = splitAddedUpdatedEntities(newEntities, selectId, state);
		addManyMutably(added, state);
		updateManyMutably(updated, state);
	}
	return {
		removeAll: createSingleArgumentStateOperator(removeAllMutably),
		addOne: createStateOperator(addOneMutably),
		addMany: createStateOperator(addManyMutably),
		setOne: createStateOperator(setOneMutably),
		setMany: createStateOperator(setManyMutably),
		setAll: createStateOperator(setAllMutably),
		updateOne: createStateOperator(updateOneMutably),
		updateMany: createStateOperator(updateManyMutably),
		upsertOne: createStateOperator(upsertOneMutably),
		upsertMany: createStateOperator(upsertManyMutably),
		removeOne: createStateOperator(removeOneMutably),
		removeMany: createStateOperator(removeManyMutably)
	};
}
function findInsertIndex(sortedItems, item, comparisonFunction) {
	let lowIndex = 0;
	let highIndex = sortedItems.length;
	while (lowIndex < highIndex) {
		let middleIndex = lowIndex + highIndex >>> 1;
		const currentItem = sortedItems[middleIndex];
		if (comparisonFunction(item, currentItem) >= 0) lowIndex = middleIndex + 1;
		else highIndex = middleIndex;
	}
	return lowIndex;
}
function insert(sortedItems, item, comparisonFunction) {
	const insertAtIndex = findInsertIndex(sortedItems, item, comparisonFunction);
	sortedItems.splice(insertAtIndex, 0, item);
	return sortedItems;
}
function createSortedStateAdapter(selectId, comparer) {
	const { removeOne, removeMany, removeAll } = createUnsortedStateAdapter(selectId);
	function addOneMutably(entity, state) {
		return addManyMutably([entity], state);
	}
	function addManyMutably(newEntities, state, existingIds) {
		newEntities = ensureEntitiesArray(newEntities);
		const existingKeys = new Set(existingIds ?? getCurrent(state.ids));
		const addedKeys = /* @__PURE__ */ new Set();
		const models = newEntities.filter((model) => {
			const modelId = selectIdValue(model, selectId);
			const notAdded = !addedKeys.has(modelId);
			if (notAdded) addedKeys.add(modelId);
			return !existingKeys.has(modelId) && notAdded;
		});
		if (models.length !== 0) mergeFunction(state, models);
	}
	function setOneMutably(entity, state) {
		return setManyMutably([entity], state);
	}
	function setManyMutably(newEntities, state) {
		let deduplicatedEntities = {};
		newEntities = ensureEntitiesArray(newEntities);
		if (newEntities.length !== 0) {
			for (const item of newEntities) {
				const entityId = selectId(item);
				deduplicatedEntities[entityId] = item;
				delete state.entities[entityId];
			}
			newEntities = ensureEntitiesArray(deduplicatedEntities);
			mergeFunction(state, newEntities);
		}
	}
	function setAllMutably(newEntities, state) {
		newEntities = ensureEntitiesArray(newEntities);
		state.entities = {};
		state.ids = [];
		addManyMutably(newEntities, state, []);
	}
	function updateOneMutably(update, state) {
		return updateManyMutably([update], state);
	}
	function updateManyMutably(updates, state) {
		let appliedUpdates = false;
		let replacedIds = false;
		for (let update of updates) {
			const entity = state.entities[update.id];
			if (!entity) continue;
			appliedUpdates = true;
			Object.assign(entity, update.changes);
			const newId = selectId(entity);
			if (update.id !== newId) {
				replacedIds = true;
				delete state.entities[update.id];
				const oldIndex = state.ids.indexOf(update.id);
				state.ids[oldIndex] = newId;
				state.entities[newId] = entity;
			}
		}
		if (appliedUpdates) mergeFunction(state, [], appliedUpdates, replacedIds);
	}
	function upsertOneMutably(entity, state) {
		return upsertManyMutably([entity], state);
	}
	function upsertManyMutably(newEntities, state) {
		const [added, updated, existingIdsArray] = splitAddedUpdatedEntities(newEntities, selectId, state);
		if (added.length) addManyMutably(added, state, existingIdsArray);
		if (updated.length) updateManyMutably(updated, state);
	}
	function areArraysEqual(a, b) {
		if (a.length !== b.length) return false;
		for (let i = 0; i < a.length; i++) {
			if (a[i] === b[i]) continue;
			return false;
		}
		return true;
	}
	const mergeFunction = (state, addedItems, appliedUpdates, replacedIds) => {
		const currentEntities = getCurrent(state.entities);
		const currentIds = getCurrent(state.ids);
		const stateEntities = state.entities;
		let ids = currentIds;
		if (replacedIds) ids = new Set(currentIds);
		let sortedEntities = [];
		for (const id of ids) {
			const entity = currentEntities[id];
			if (entity) sortedEntities.push(entity);
		}
		const wasPreviouslyEmpty = sortedEntities.length === 0;
		for (const item of addedItems) {
			stateEntities[selectId(item)] = item;
			if (!wasPreviouslyEmpty) insert(sortedEntities, item, comparer);
		}
		if (wasPreviouslyEmpty) sortedEntities = addedItems.slice().sort(comparer);
		else if (appliedUpdates) sortedEntities.sort(comparer);
		const newSortedIds = sortedEntities.map(selectId);
		if (!areArraysEqual(currentIds, newSortedIds)) state.ids = newSortedIds;
	};
	return {
		removeOne,
		removeMany,
		removeAll,
		addOne: createStateOperator(addOneMutably),
		updateOne: createStateOperator(updateOneMutably),
		upsertOne: createStateOperator(upsertOneMutably),
		setOne: createStateOperator(setOneMutably),
		setMany: createStateOperator(setManyMutably),
		setAll: createStateOperator(setAllMutably),
		addMany: createStateOperator(addManyMutably),
		updateMany: createStateOperator(updateManyMutably),
		upsertMany: createStateOperator(upsertManyMutably)
	};
}
function createEntityAdapter(options = {}) {
	const { selectId, sortComparer } = {
		sortComparer: false,
		selectId: (instance) => instance.id,
		...options
	};
	const stateAdapter = sortComparer ? createSortedStateAdapter(selectId, sortComparer) : createUnsortedStateAdapter(selectId);
	const stateFactory = createInitialStateFactory(stateAdapter);
	const selectorsFactory = createSelectorsFactory();
	return {
		selectId,
		sortComparer,
		...stateFactory,
		...selectorsFactory,
		...stateAdapter
	};
}
var task = "task";
var listener = "listener";
var completed = "completed";
var cancelled = "cancelled";
var taskCancelled = `task-${cancelled}`;
var taskCompleted = `task-${completed}`;
var listenerCancelled = `${listener}-${cancelled}`;
var listenerCompleted = `${listener}-${completed}`;
var TaskAbortError = class {
	constructor(code) {
		this.code = code;
		this.message = `${task} ${cancelled} (reason: ${code})`;
	}
	code;
	name = "TaskAbortError";
	message;
};
var assertFunction = (func, expected) => {
	if (typeof func !== "function") throw new TypeError(formatProdErrorMessage(32));
};
var noop2 = () => {};
var catchRejection = (promise, onError = noop2) => {
	promise.catch(onError);
	return promise;
};
var addAbortSignalListener = (abortSignal, callback) => {
	abortSignal.addEventListener("abort", callback, { once: true });
	return () => abortSignal.removeEventListener("abort", callback);
};
var validateActive = (signal) => {
	if (signal.aborted) throw new TaskAbortError(signal.reason);
};
function raceWithSignal(signal, promise) {
	let cleanup = noop2;
	return new Promise((resolve, reject) => {
		const notifyRejection = () => reject(new TaskAbortError(signal.reason));
		if (signal.aborted) {
			notifyRejection();
			return;
		}
		cleanup = addAbortSignalListener(signal, notifyRejection);
		promise.finally(() => cleanup()).then(resolve, reject);
	}).finally(() => {
		cleanup = noop2;
	});
}
var runTask = async (task2, cleanUp) => {
	try {
		await Promise.resolve();
		return {
			status: "ok",
			value: await task2()
		};
	} catch (error) {
		return {
			status: error instanceof TaskAbortError ? "cancelled" : "rejected",
			error
		};
	} finally {
		cleanUp?.();
	}
};
var createPause = (signal) => {
	return (promise) => {
		return catchRejection(raceWithSignal(signal, promise).then((output) => {
			validateActive(signal);
			return output;
		}));
	};
};
var createDelay = (signal) => {
	const pause = createPause(signal);
	return (timeoutMs) => {
		return pause(new Promise((resolve) => setTimeout(resolve, timeoutMs)));
	};
};
var { assign } = Object;
var INTERNAL_NIL_TOKEN = {};
var alm = "listenerMiddleware";
var createFork = (parentAbortSignal, parentBlockingPromises) => {
	const linkControllers = (controller) => addAbortSignalListener(parentAbortSignal, () => controller.abort(parentAbortSignal.reason));
	return (taskExecutor, opts) => {
		assertFunction(taskExecutor, "taskExecutor");
		const childAbortController = new AbortController();
		linkControllers(childAbortController);
		const result = runTask(async () => {
			validateActive(parentAbortSignal);
			validateActive(childAbortController.signal);
			const result2 = await taskExecutor({
				pause: createPause(childAbortController.signal),
				delay: createDelay(childAbortController.signal),
				signal: childAbortController.signal
			});
			validateActive(childAbortController.signal);
			return result2;
		}, () => childAbortController.abort(taskCompleted));
		if (opts?.autoJoin) parentBlockingPromises.push(result.catch(noop2));
		return {
			result: createPause(parentAbortSignal)(result),
			cancel() {
				childAbortController.abort(taskCancelled);
			}
		};
	};
};
var createTakePattern = (startListening, signal) => {
	const take = async (predicate, timeout) => {
		validateActive(signal);
		let unsubscribe = () => {};
		const promises = [new Promise((resolve, reject) => {
			let stopListening = startListening({
				predicate,
				effect: (action, listenerApi) => {
					listenerApi.unsubscribe();
					resolve([
						action,
						listenerApi.getState(),
						listenerApi.getOriginalState()
					]);
				}
			});
			unsubscribe = () => {
				stopListening();
				reject();
			};
		})];
		if (timeout != null) promises.push(new Promise((resolve) => setTimeout(resolve, timeout, null)));
		try {
			const output = await raceWithSignal(signal, Promise.race(promises));
			validateActive(signal);
			return output;
		} finally {
			unsubscribe();
		}
	};
	return ((predicate, timeout) => catchRejection(take(predicate, timeout)));
};
var getListenerEntryPropsFrom = (options) => {
	let { type, actionCreator, matcher, predicate, effect } = options;
	if (type) predicate = createAction(type).match;
	else if (actionCreator) {
		type = actionCreator.type;
		predicate = actionCreator.match;
	} else if (matcher) predicate = matcher;
	else if (predicate) {} else throw new Error(formatProdErrorMessage(21));
	assertFunction(effect, "options.listener");
	return {
		predicate,
		type,
		effect
	};
};
var createListenerEntry = /* @__PURE__ */ assign((options) => {
	const { type, predicate, effect } = getListenerEntryPropsFrom(options);
	return {
		id: nanoid(),
		effect,
		type,
		predicate,
		pending: /* @__PURE__ */ new Set(),
		unsubscribe: () => {
			throw new Error(formatProdErrorMessage(22));
		}
	};
}, { withTypes: () => createListenerEntry });
var findListenerEntry = (listenerMap, options) => {
	const { type, effect, predicate } = getListenerEntryPropsFrom(options);
	return Array.from(listenerMap.values()).find((entry) => {
		return (typeof type === "string" ? entry.type === type : entry.predicate === predicate) && entry.effect === effect;
	});
};
var cancelActiveListeners = (entry) => {
	entry.pending.forEach((controller) => {
		controller.abort(listenerCancelled);
	});
};
var createClearListenerMiddleware = (listenerMap, executingListeners) => {
	return () => {
		for (const listener2 of executingListeners.keys()) cancelActiveListeners(listener2);
		listenerMap.clear();
	};
};
var safelyNotifyError = (errorHandler, errorToNotify, errorInfo) => {
	try {
		errorHandler(errorToNotify, errorInfo);
	} catch (errorHandlerError) {
		setTimeout(() => {
			throw errorHandlerError;
		}, 0);
	}
};
var addListener = /* @__PURE__ */ assign(/* @__PURE__ */ createAction(`${alm}/add`), { withTypes: () => addListener });
var clearAllListeners = /* @__PURE__ */ createAction(`${alm}/removeAll`);
var removeListener = /* @__PURE__ */ assign(/* @__PURE__ */ createAction(`${alm}/remove`), { withTypes: () => removeListener });
var defaultErrorHandler = (...args) => {
	console.error(`${alm}/error`, ...args);
};
var createListenerMiddleware = (middlewareOptions = {}) => {
	const listenerMap = /* @__PURE__ */ new Map();
	const executingListeners = /* @__PURE__ */ new Map();
	const trackExecutingListener = (entry) => {
		const count = executingListeners.get(entry) ?? 0;
		executingListeners.set(entry, count + 1);
	};
	const untrackExecutingListener = (entry) => {
		const count = executingListeners.get(entry) ?? 1;
		if (count === 1) executingListeners.delete(entry);
		else executingListeners.set(entry, count - 1);
	};
	const { extra, onError = defaultErrorHandler } = middlewareOptions;
	assertFunction(onError, "onError");
	const insertEntry = (entry) => {
		entry.unsubscribe = () => listenerMap.delete(entry.id);
		listenerMap.set(entry.id, entry);
		return (cancelOptions) => {
			entry.unsubscribe();
			if (cancelOptions?.cancelActive) cancelActiveListeners(entry);
		};
	};
	const startListening = ((options) => {
		return insertEntry(findListenerEntry(listenerMap, options) ?? createListenerEntry(options));
	});
	assign(startListening, { withTypes: () => startListening });
	const stopListening = (options) => {
		const entry = findListenerEntry(listenerMap, options);
		if (entry) {
			entry.unsubscribe();
			if (options.cancelActive) cancelActiveListeners(entry);
		}
		return !!entry;
	};
	assign(stopListening, { withTypes: () => stopListening });
	const notifyListener = async (entry, action, api, getOriginalState) => {
		const internalTaskController = new AbortController();
		const take = createTakePattern(startListening, internalTaskController.signal);
		const autoJoinPromises = [];
		try {
			entry.pending.add(internalTaskController);
			trackExecutingListener(entry);
			await Promise.resolve(entry.effect(action, assign({}, api, {
				getOriginalState,
				condition: (predicate, timeout) => take(predicate, timeout).then(Boolean),
				take,
				delay: createDelay(internalTaskController.signal),
				pause: createPause(internalTaskController.signal),
				extra,
				signal: internalTaskController.signal,
				fork: createFork(internalTaskController.signal, autoJoinPromises),
				unsubscribe: entry.unsubscribe,
				subscribe: () => {
					listenerMap.set(entry.id, entry);
				},
				cancelActiveListeners: () => {
					entry.pending.forEach((controller, _, set) => {
						if (controller !== internalTaskController) {
							controller.abort(listenerCancelled);
							set.delete(controller);
						}
					});
				},
				cancel: () => {
					internalTaskController.abort(listenerCancelled);
					entry.pending.delete(internalTaskController);
				},
				throwIfCancelled: () => {
					validateActive(internalTaskController.signal);
				}
			})));
		} catch (listenerError) {
			if (!(listenerError instanceof TaskAbortError)) safelyNotifyError(onError, listenerError, { raisedBy: "effect" });
		} finally {
			await Promise.all(autoJoinPromises);
			internalTaskController.abort(listenerCompleted);
			untrackExecutingListener(entry);
			entry.pending.delete(internalTaskController);
		}
	};
	const clearListenerMiddleware = createClearListenerMiddleware(listenerMap, executingListeners);
	const middleware = (api) => (next) => (action) => {
		if (!isAction(action)) return next(action);
		if (addListener.match(action)) return startListening(action.payload);
		if (clearAllListeners.match(action)) {
			clearListenerMiddleware();
			return;
		}
		if (removeListener.match(action)) return stopListening(action.payload);
		let originalState = api.getState();
		const getOriginalState = () => {
			if (originalState === INTERNAL_NIL_TOKEN) throw new Error(formatProdErrorMessage(23));
			return originalState;
		};
		let result;
		try {
			result = next(action);
			if (listenerMap.size > 0) {
				const currentState = api.getState();
				const listenerEntries = Array.from(listenerMap.values());
				for (const entry of listenerEntries) {
					let runListener = false;
					try {
						runListener = entry.predicate(action, currentState, originalState);
					} catch (predicateError) {
						runListener = false;
						safelyNotifyError(onError, predicateError, { raisedBy: "predicate" });
					}
					if (!runListener) continue;
					notifyListener(entry, action, api, getOriginalState);
				}
			}
		} finally {
			originalState = INTERNAL_NIL_TOKEN;
		}
		return result;
	};
	return {
		middleware,
		startListening,
		stopListening,
		clearListeners: clearListenerMiddleware
	};
};
var createMiddlewareEntry = (middleware) => ({
	middleware,
	applied: /* @__PURE__ */ new Map()
});
var matchInstance = (instanceId) => (action) => action?.meta?.instanceId === instanceId;
var createDynamicMiddleware = () => {
	const instanceId = nanoid();
	const middlewareMap = /* @__PURE__ */ new Map();
	const withMiddleware = Object.assign(createAction("dynamicMiddleware/add", (...middlewares) => ({
		payload: middlewares,
		meta: { instanceId }
	})), { withTypes: () => withMiddleware });
	const addMiddleware = Object.assign(function addMiddleware2(...middlewares) {
		middlewares.forEach((middleware2) => {
			getOrInsertComputed(middlewareMap, middleware2, createMiddlewareEntry);
		});
	}, { withTypes: () => addMiddleware });
	const getFinalMiddleware = (api) => {
		return compose(...Array.from(middlewareMap.values()).map((entry) => getOrInsertComputed(entry.applied, api, entry.middleware)));
	};
	const isWithMiddleware = isAllOf(withMiddleware, matchInstance(instanceId));
	const middleware = (api) => (next) => (action) => {
		if (isWithMiddleware(action)) {
			addMiddleware(...action.payload);
			return api.dispatch;
		}
		return getFinalMiddleware(api)(next)(action);
	};
	return {
		middleware,
		addMiddleware,
		withMiddleware,
		instanceId
	};
};
var isSliceLike = (maybeSliceLike) => "reducerPath" in maybeSliceLike && typeof maybeSliceLike.reducerPath === "string";
var getReducers = (slices) => slices.flatMap((sliceOrMap) => isSliceLike(sliceOrMap) ? [[sliceOrMap.reducerPath, sliceOrMap.reducer]] : Object.entries(sliceOrMap));
var ORIGINAL_STATE = /* @__PURE__ */ Symbol.for("rtk-state-proxy-original");
var isStateProxy = (value) => !!value && !!value[ORIGINAL_STATE];
var stateProxyMap = /* @__PURE__ */ new WeakMap();
var createStateProxy = (state, reducerMap, initialStateCache) => getOrInsertComputed(stateProxyMap, state, () => new Proxy(state, { get: (target, prop, receiver) => {
	if (prop === ORIGINAL_STATE) return target;
	const result = Reflect.get(target, prop, receiver);
	if (typeof result === "undefined") {
		const cached = initialStateCache[prop];
		if (typeof cached !== "undefined") return cached;
		const reducer = reducerMap[prop];
		if (reducer) {
			const reducerResult = reducer(void 0, { type: nanoid() });
			if (typeof reducerResult === "undefined") throw new Error(formatProdErrorMessage(24));
			initialStateCache[prop] = reducerResult;
			return reducerResult;
		}
	}
	return result;
} }));
var original = (state) => {
	if (!isStateProxy(state)) throw new Error(formatProdErrorMessage(25));
	return state[ORIGINAL_STATE];
};
var emptyObject = {};
var noopReducer = (state = emptyObject) => state;
function combineSlices(...slices) {
	const reducerMap = Object.fromEntries(getReducers(slices));
	const getReducer = () => Object.keys(reducerMap).length ? combineReducers(reducerMap) : noopReducer;
	let reducer = getReducer();
	function combinedReducer(state, action) {
		return reducer(state, action);
	}
	combinedReducer.withLazyLoadedSlices = () => combinedReducer;
	const initialStateCache = {};
	const inject = (slice, config = {}) => {
		const { reducerPath, reducer: reducerToInject } = slice;
		const currentReducer = reducerMap[reducerPath];
		if (!config.overrideExisting && currentReducer && currentReducer !== reducerToInject) return combinedReducer;
		if (config.overrideExisting && currentReducer !== reducerToInject) delete initialStateCache[reducerPath];
		reducerMap[reducerPath] = reducerToInject;
		reducer = getReducer();
		return combinedReducer;
	};
	const selector = Object.assign(function makeSelector(selectorFn, selectState) {
		return function selector2(state, ...args) {
			return selectorFn(createStateProxy(selectState ? selectState(state, ...args) : state, reducerMap, initialStateCache), ...args);
		};
	}, { original });
	return Object.assign(combinedReducer, {
		inject,
		selector
	});
}
function formatProdErrorMessage(code) {
	return `Minified Redux Toolkit error #${code}; visit https://redux-toolkit.js.org/Errors?code=${code} for the full message or use the non-minified dev environment for full errors. `;
}
var chartLayoutSlice = createSlice({
	name: "chartLayout",
	initialState: {
		layoutType: "horizontal",
		width: 0,
		height: 0,
		margin: {
			top: 5,
			right: 5,
			bottom: 5,
			left: 5
		},
		scale: 1
	},
	reducers: {
		setLayout(state, action) {
			state.layoutType = action.payload;
		},
		setChartSize(state, action) {
			state.width = action.payload.width;
			state.height = action.payload.height;
		},
		setMargin(state, action) {
			var _action$payload$top, _action$payload$right, _action$payload$botto, _action$payload$left;
			state.margin.top = (_action$payload$top = action.payload.top) !== null && _action$payload$top !== void 0 ? _action$payload$top : 0;
			state.margin.right = (_action$payload$right = action.payload.right) !== null && _action$payload$right !== void 0 ? _action$payload$right : 0;
			state.margin.bottom = (_action$payload$botto = action.payload.bottom) !== null && _action$payload$botto !== void 0 ? _action$payload$botto : 0;
			state.margin.left = (_action$payload$left = action.payload.left) !== null && _action$payload$left !== void 0 ? _action$payload$left : 0;
		},
		setScale(state, action) {
			state.scale = action.payload;
		}
	}
});
var { setMargin, setLayout, setChartSize, setScale } = chartLayoutSlice.actions;
var chartLayoutReducer = chartLayoutSlice.reducer;
var selectLegendSettings = (state) => state.legend.settings;
var selectLegendSize = (state) => state.legend.size;
var selectAllLegendPayload2DArray = (state) => state.legend.payload;
createSelector([selectAllLegendPayload2DArray, selectLegendSettings], (payloads, _ref) => {
	var { itemSorter } = _ref;
	var flat = payloads.flat(1);
	return itemSorter ? sortBy(flat, itemSorter) : flat;
});
function getSliced(arr, startIndex, endIndex) {
	if (!Array.isArray(arr)) return arr;
	if (arr && startIndex + endIndex !== 0) return arr.slice(startIndex, endIndex + 1);
	return arr;
}
function ownKeys$40(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r) {
			return Object.getOwnPropertyDescriptor(e, r).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread$40(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys$40(Object(t), !0).forEach(function(r) {
			_defineProperty$42(e, r, t[r]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$40(Object(t)).forEach(function(r) {
			Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
		});
	}
	return e;
}
function _defineProperty$42(e, r, t) {
	return (r = _toPropertyKey$42(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}
function _toPropertyKey$42(t) {
	var i = _toPrimitive$42(t, "string");
	return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive$42(t, r) {
	if ("object" != typeof t || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != typeof i) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
function getValueByDataKey(obj, dataKey, defaultValue) {
	if (isNullish(obj) || isNullish(dataKey)) return defaultValue;
	if (isNumOrStr(dataKey)) return get(obj, dataKey, defaultValue);
	if (typeof dataKey === "function") return dataKey(obj);
	return defaultValue;
}
var appendOffsetOfLegend = (offset, legendSettings, legendSize) => {
	if (legendSettings && legendSize) {
		var { width: boxWidth, height: boxHeight } = legendSize;
		var { align, verticalAlign, layout } = legendSettings;
		if ((layout === "vertical" || layout === "horizontal" && verticalAlign === "middle") && align !== "center" && isNumber$1(offset[align])) return _objectSpread$40(_objectSpread$40({}, offset), {}, { [align]: offset[align] + (boxWidth || 0) });
		if ((layout === "horizontal" || layout === "vertical" && align === "center") && verticalAlign !== "middle" && isNumber$1(offset[verticalAlign])) return _objectSpread$40(_objectSpread$40({}, offset), {}, { [verticalAlign]: offset[verticalAlign] + (boxHeight || 0) });
	}
	return offset;
};
var isCategoricalAxis = (layout, axisType) => layout === "horizontal" && axisType === "xAxis" || layout === "vertical" && axisType === "yAxis" || layout === "centric" && axisType === "angleAxis" || layout === "radial" && axisType === "radiusAxis";
/**
* Calculate the Coordinates of grid
* @param  {Array} ticks           The ticks in axis
* @param {Number} minValue        The minimum value of axis
* @param {Number} maxValue        The maximum value of axis
* @param {boolean} syncWithTicks  Synchronize grid lines with ticks or not
* @return {Array}                 Coordinates
*/
var getCoordinatesOfGrid = (ticks, minValue, maxValue, syncWithTicks) => {
	if (syncWithTicks) return ticks.map((entry) => entry.coordinate);
	var hasMin, hasMax;
	var values = ticks.map((entry) => {
		if (entry.coordinate === minValue) hasMin = true;
		if (entry.coordinate === maxValue) hasMax = true;
		return entry.coordinate;
	});
	if (!hasMin) values.push(minValue);
	if (!hasMax) values.push(maxValue);
	return values;
};
/**
* Of on four almost identical implementations of tick generation.
* The four horsemen of tick generation are:
* - {@link selectTooltipAxisTicks}
* - {@link combineAxisTicks}
* - {@link getTicksOfAxis}.
* - {@link combineGraphicalItemTicks}
*/
var getTicksOfAxis = (axis, isGrid, isAll) => {
	if (!axis) return null;
	var { duplicateDomain, type, range, scale, realScaleType, isCategorical, categoricalDomain, tickCount, ticks, niceTicks, axisType } = axis;
	if (!scale) return null;
	var offsetForBand = realScaleType === "scaleBand" && scale.bandwidth ? scale.bandwidth() / 2 : 2;
	var offset = (isGrid || isAll) && type === "category" && scale.bandwidth ? scale.bandwidth() / offsetForBand : 0;
	offset = axisType === "angleAxis" && range && range.length >= 2 ? mathSign(range[0] - range[1]) * 2 * offset : offset;
	if (isGrid && (ticks || niceTicks)) return (ticks || niceTicks || []).map((entry, index) => {
		var scaleContent = duplicateDomain ? duplicateDomain.indexOf(entry) : entry;
		var scaled = scale.map(scaleContent);
		if (!isWellBehavedNumber(scaled)) return null;
		return {
			coordinate: scaled + offset,
			value: entry,
			offset,
			index
		};
	}).filter(isNotNil);
	if (isCategorical && categoricalDomain) return categoricalDomain.map((entry, index) => {
		var scaled = scale.map(entry);
		if (!isWellBehavedNumber(scaled)) return null;
		return {
			coordinate: scaled + offset,
			value: entry,
			index,
			offset
		};
	}).filter(isNotNil);
	if (scale.ticks && !isAll && tickCount != null) return scale.ticks(tickCount).map((entry, index) => {
		var scaled = scale.map(entry);
		if (!isWellBehavedNumber(scaled)) return null;
		return {
			coordinate: scaled + offset,
			value: entry,
			index,
			offset
		};
	}).filter(isNotNil);
	return scale.domain().map((entry, index) => {
		var scaled = scale.map(entry);
		if (!isWellBehavedNumber(scaled)) return null;
		return {
			coordinate: scaled + offset,
			value: duplicateDomain ? duplicateDomain[entry] : entry,
			index,
			offset
		};
	}).filter(isNotNil);
};
/**
* Both value and domain are tuples of two numbers
* - but the type stays as array of numbers until we have better support in rest of the app
* @param value input that will be truncated
* @param domain boundaries
* @returns tuple of two numbers
*/
var truncateByDomain = (value, domain) => {
	if (!domain || domain.length !== 2 || !isNumber$1(domain[0]) || !isNumber$1(domain[1])) return value;
	var minValue = Math.min(domain[0], domain[1]);
	var maxValue = Math.max(domain[0], domain[1]);
	var result = [value[0], value[1]];
	if (!isNumber$1(value[0]) || value[0] < minValue) result[0] = minValue;
	if (!isNumber$1(value[1]) || value[1] > maxValue) result[1] = maxValue;
	if (result[0] > maxValue) result[0] = maxValue;
	if (result[1] < minValue) result[1] = minValue;
	return result;
};
/**
* Stacks all positive numbers above zero and all negative numbers below zero.
*
* If all values in the series are positive then this behaves the same as 'none' stacker.
*
* @param {Array} series from d3-shape Stack
* @return {Array} series with applied offset
*/
var offsetSign = (series) => {
	var _series$;
	var n = series.length;
	if (n <= 0) return;
	var m = (_series$ = series[0]) === null || _series$ === void 0 ? void 0 : _series$.length;
	if (m == null || m <= 0) return;
	for (var j = 0; j < m; ++j) {
		var positive = 0;
		var negative = 0;
		for (var i = 0; i < n; ++i) {
			var row = series[i];
			var col = row === null || row === void 0 ? void 0 : row[j];
			if (col == null) continue;
			var series1 = col[1];
			var series0 = col[0];
			var value = isNan(series1) ? series0 : series1;
			if (value >= 0) {
				col[0] = positive;
				positive += value;
				col[1] = positive;
			} else {
				col[0] = negative;
				negative += value;
				col[1] = negative;
			}
		}
	}
};
/**
* Replaces all negative values with zero when stacking data.
*
* If all values in the series are positive then this behaves the same as 'none' stacker.
*
* @param {Array} series from d3-shape Stack
* @return {Array} series with applied offset
*/
var offsetPositive = (series) => {
	var _series$2;
	var n = series.length;
	if (n <= 0) return;
	var m = (_series$2 = series[0]) === null || _series$2 === void 0 ? void 0 : _series$2.length;
	if (m == null || m <= 0) return;
	for (var j = 0; j < m; ++j) {
		var positive = 0;
		for (var i = 0; i < n; ++i) {
			var row = series[i];
			var col = row === null || row === void 0 ? void 0 : row[j];
			if (col == null) continue;
			var value = isNan(col[1]) ? col[0] : col[1];
			if (value >= 0) {
				col[0] = positive;
				positive += value;
				col[1] = positive;
			} else {
				col[0] = 0;
				col[1] = 0;
			}
		}
	}
};
/**
* Function type to compute offset for stacked data.
*
* d3-shape has something fishy going on with its types.
* In @definitelytyped/d3-shape, this function (the offset accessor) is typed as Series<> => void.
* However! When I actually open the storybook I can see that the offset accessor actually receives Array<Series<>>.
* The same I can see in the source code itself:
* https://github.com/DefinitelyTyped/DefinitelyTyped/discussions/66042
* That one unfortunately has no types but we can tell it passes three-dimensional array.
*
* Which leads me to believe that definitelytyped is wrong on this one.
* There's open discussion on this topic without much attention:
* https://github.com/DefinitelyTyped/DefinitelyTyped/discussions/66042
*/
var STACK_OFFSET_MAP = {
	sign: offsetSign,
	expand: expand_default,
	none: none_default,
	silhouette: silhouette_default,
	wiggle: wiggle_default,
	positive: offsetPositive
};
var getStackedData = (data, dataKeys, offsetType) => {
	var _STACK_OFFSET_MAP$off;
	var offsetAccessor = (_STACK_OFFSET_MAP$off = STACK_OFFSET_MAP[offsetType]) !== null && _STACK_OFFSET_MAP$off !== void 0 ? _STACK_OFFSET_MAP$off : none_default;
	var result = stack_default().keys(dataKeys).value((d, key) => Number(getValueByDataKey(d, key, 0))).order(none_default$1).offset(offsetAccessor)(data);
	result.forEach((series, seriesIndex) => {
		series.forEach((point, pointIndex) => {
			var value = getValueByDataKey(data[pointIndex], dataKeys[seriesIndex], 0);
			if (Array.isArray(value) && value.length === 2 && isNumber$1(value[0]) && isNumber$1(value[1])) {
				point[0] = value[0];
				point[1] = value[1];
			}
		});
	});
	return result;
};
/**
* Externally, we accept both strings and numbers as stack IDs
* @inline
*/
/**
* Stack IDs in the external props allow numbers; but internally we use it as an object key
* and object keys are always strings. Also, it would be kinda confusing if stackId=8 and stackId='8' were different stacks
* so let's just force a string.
*/
function getNormalizedStackId(publicStackId) {
	return publicStackId == null ? void 0 : String(publicStackId);
}
function getCateCoordinateOfLine(_ref) {
	var { axis, ticks, bandSize, entry, index, dataKey } = _ref;
	if (axis.type === "category") {
		if (!axis.allowDuplicatedCategory && axis.dataKey && !isNullish(entry[axis.dataKey])) {
			var matchedTick = findEntryInArray(ticks, "value", entry[axis.dataKey]);
			if (matchedTick) return matchedTick.coordinate + bandSize / 2;
		}
		return ticks !== null && ticks !== void 0 && ticks[index] ? ticks[index].coordinate + bandSize / 2 : null;
	}
	var value = getValueByDataKey(entry, !isNullish(dataKey) ? dataKey : axis.dataKey);
	var scaled = axis.scale.map(value);
	if (!isNumber$1(scaled)) return null;
	return scaled;
}
var getCateCoordinateOfBar = (_ref2) => {
	var { axis, ticks, offset, bandSize, entry, index } = _ref2;
	if (axis.type === "category") return ticks[index] ? ticks[index].coordinate + offset : null;
	var value = getValueByDataKey(entry, axis.dataKey, axis.scale.domain()[index]);
	if (isNullish(value)) return null;
	var scaled = axis.scale.map(value);
	if (!isNumber$1(scaled)) return null;
	return scaled - bandSize / 2 + offset;
};
var getBaseValueOfBar = (_ref3) => {
	var { numericAxis } = _ref3;
	var domain = numericAxis.scale.domain();
	if (numericAxis.type === "number") {
		var minValue = Math.min(domain[0], domain[1]);
		var maxValue = Math.max(domain[0], domain[1]);
		if (minValue <= 0 && maxValue >= 0) return 0;
		if (maxValue < 0) return maxValue;
		return minValue;
	}
	return domain[0];
};
var getDomainOfSingle = (data) => {
	var flat = data.flat(2).filter(isNumber$1);
	return [Math.min(...flat), Math.max(...flat)];
};
var makeDomainFinite = (domain) => {
	return [domain[0] === Infinity ? 0 : domain[0], domain[1] === -Infinity ? 0 : domain[1]];
};
var getDomainOfStackGroups = (stackGroups, startIndex, endIndex) => {
	if (stackGroups == null) return;
	return makeDomainFinite(Object.keys(stackGroups).reduce((result, stackId) => {
		var group = stackGroups[stackId];
		if (!group) return result;
		var { stackedData } = group;
		var domain = stackedData.reduce((res, entry) => {
			var s = getDomainOfSingle(getSliced(entry, startIndex, endIndex));
			if (!isWellBehavedNumber(s[0]) || !isWellBehavedNumber(s[1])) return res;
			return [Math.min(res[0], s[0]), Math.max(res[1], s[1])];
		}, [Infinity, -Infinity]);
		return [Math.min(domain[0], result[0]), Math.max(domain[1], result[1])];
	}, [Infinity, -Infinity]));
};
var MIN_VALUE_REG = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/;
var MAX_VALUE_REG = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/;
/**
* Calculate the size between two category
* @param  {Object} axis  The options of axis
* @param  {Array}  ticks The ticks of axis
* @param  {Boolean} isBar if items in axis are bars
* @return {Number} Size
*/
var getBandSizeOfAxis = (axis, ticks, isBar) => {
	if (axis && axis.scale && axis.scale.bandwidth) {
		var bandWidth = axis.scale.bandwidth();
		if (!isBar || bandWidth > 0) return bandWidth;
	}
	if (axis && ticks && ticks.length >= 2) {
		var orderedTicks = sortBy(ticks, (o) => o.coordinate);
		var bandSize = Infinity;
		for (var i = 1, len = orderedTicks.length; i < len; i++) {
			var cur = orderedTicks[i];
			var prev = orderedTicks[i - 1];
			bandSize = Math.min(((cur === null || cur === void 0 ? void 0 : cur.coordinate) || 0) - ((prev === null || prev === void 0 ? void 0 : prev.coordinate) || 0), bandSize);
		}
		return bandSize === Infinity ? 0 : bandSize;
	}
	return isBar ? void 0 : 0;
};
function getTooltipEntry(_ref4) {
	var { tooltipEntrySettings, dataKey, payload, value, name } = _ref4;
	return _objectSpread$40(_objectSpread$40({}, tooltipEntrySettings), {}, {
		dataKey,
		payload,
		value,
		name
	});
}
function getTooltipNameProp(nameFromItem, dataKey) {
	if (nameFromItem) return String(nameFromItem);
	if (typeof dataKey === "string") return dataKey;
}
var calculateCartesianTooltipPos = (coordinate, layout) => {
	if (layout === "horizontal") return coordinate.relativeX;
	if (layout === "vertical") return coordinate.relativeY;
};
var calculatePolarTooltipPos = (rangeObj, layout) => {
	if (layout === "centric") return rangeObj.angle;
	return rangeObj.radius;
};
var selectChartWidth = (state) => state.layout.width;
var selectChartHeight = (state) => state.layout.height;
var selectContainerScale = (state) => state.layout.scale;
var selectMargin = (state) => state.layout.margin;
var selectAllXAxes = createSelector((state) => state.cartesianAxis.xAxis, (xAxisMap) => {
	return Object.values(xAxisMap);
});
var selectAllYAxes = createSelector((state) => state.cartesianAxis.yAxis, (yAxisMap) => {
	return Object.values(yAxisMap);
});
/**
* We use this attribute to identify which element is the one that the user is touching.
* The index is the position of the element in the data array.
* This can be either a number (for array-based charts) or a string (for the charts that have a matrix-shaped data).
*/
var DATA_ITEM_INDEX_ATTRIBUTE_NAME = "data-recharts-item-index";
function ownKeys$39(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r) {
			return Object.getOwnPropertyDescriptor(e, r).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread$39(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys$39(Object(t), !0).forEach(function(r) {
			_defineProperty$41(e, r, t[r]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$39(Object(t)).forEach(function(r) {
			Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
		});
	}
	return e;
}
function _defineProperty$41(e, r, t) {
	return (r = _toPropertyKey$41(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}
function _toPropertyKey$41(t) {
	var i = _toPrimitive$41(t, "string");
	return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive$41(t, r) {
	if ("object" != typeof t || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != typeof i) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
var selectBrushHeight = (state) => state.brush.height;
function selectLeftAxesOffset(state) {
	return selectAllYAxes(state).reduce((result, entry) => {
		if (entry.orientation === "left" && !entry.mirror && !entry.hide) return result + (typeof entry.width === "number" ? entry.width : 60);
		return result;
	}, 0);
}
function selectRightAxesOffset(state) {
	return selectAllYAxes(state).reduce((result, entry) => {
		if (entry.orientation === "right" && !entry.mirror && !entry.hide) return result + (typeof entry.width === "number" ? entry.width : 60);
		return result;
	}, 0);
}
function selectTopAxesOffset(state) {
	return selectAllXAxes(state).reduce((result, entry) => {
		if (entry.orientation === "top" && !entry.mirror && !entry.hide) return result + entry.height;
		return result;
	}, 0);
}
function selectBottomAxesOffset(state) {
	return selectAllXAxes(state).reduce((result, entry) => {
		if (entry.orientation === "bottom" && !entry.mirror && !entry.hide) return result + entry.height;
		return result;
	}, 0);
}
/**
* For internal use only.
*
* @param root state
* @return ChartOffsetInternal
*/
var selectChartOffsetInternal = createSelector([
	selectChartWidth,
	selectChartHeight,
	selectMargin,
	selectBrushHeight,
	selectLeftAxesOffset,
	selectRightAxesOffset,
	selectTopAxesOffset,
	selectBottomAxesOffset,
	selectLegendSettings,
	selectLegendSize
], (chartWidth, chartHeight, margin, brushHeight, leftAxesOffset, rightAxesOffset, topAxesOffset, bottomAxesOffset, legendSettings, legendSize) => {
	var offsetH = {
		left: (margin.left || 0) + leftAxesOffset,
		right: (margin.right || 0) + rightAxesOffset
	};
	var offset = _objectSpread$39(_objectSpread$39({}, {
		top: (margin.top || 0) + topAxesOffset,
		bottom: (margin.bottom || 0) + bottomAxesOffset
	}), offsetH);
	var brushBottom = offset.bottom;
	offset.bottom += brushHeight;
	offset = appendOffsetOfLegend(offset, legendSettings, legendSize);
	var offsetWidth = chartWidth - offset.left - offset.right;
	var offsetHeight = chartHeight - offset.top - offset.bottom;
	return _objectSpread$39(_objectSpread$39({ brushBottom }, offset), {}, {
		width: Math.max(offsetWidth, 0),
		height: Math.max(offsetHeight, 0)
	});
});
var selectChartViewBox = createSelector(selectChartOffsetInternal, (offset) => ({
	x: offset.left,
	y: offset.top,
	width: offset.width,
	height: offset.height
}));
var selectAxisViewBox = createSelector(selectChartWidth, selectChartHeight, (width, height) => ({
	x: 0,
	y: 0,
	width,
	height
}));
var PanoramaContext = /* @__PURE__ */ (0, import_react.createContext)(null);
var useIsPanorama = () => (0, import_react.useContext)(PanoramaContext) != null;
var selectBrushSettings = (state) => state.brush;
var selectBrushDimensions = createSelector([
	selectBrushSettings,
	selectChartOffsetInternal,
	selectMargin
], (brushSettings, offset, margin) => ({
	height: brushSettings.height,
	x: isNumber$1(brushSettings.x) ? brushSettings.x : offset.left,
	y: isNumber$1(brushSettings.y) ? brushSettings.y : offset.top + offset.height + offset.brushBottom - ((margin === null || margin === void 0 ? void 0 : margin.bottom) || 0),
	width: isNumber$1(brushSettings.width) ? brushSettings.width : offset.width
}));
var isDev = true;
var warn = function warn(condition, format) {
	for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) args[_key - 2] = arguments[_key];
	if (isDev && typeof console !== "undefined" && console.warn) {
		if (format === void 0) console.warn("LogUtils requires an error message argument");
		if (!condition) if (format === void 0) console.warn("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
		else {
			var argIndex = 0;
			console.warn(format.replace(/%s/g, () => args[argIndex++]));
		}
	}
};
var defaultResponsiveContainerProps = {
	width: "100%",
	height: "100%",
	debounce: 0,
	minWidth: 0,
	initialDimension: {
		width: -1,
		height: -1
	}
};
var calculateChartDimensions = (containerWidth, containerHeight, props) => {
	var { width = defaultResponsiveContainerProps.width, height = defaultResponsiveContainerProps.height, aspect, maxHeight } = props;
	var calculatedWidth = isPercent(width) ? containerWidth : Number(width);
	var calculatedHeight = isPercent(height) ? containerHeight : Number(height);
	if (aspect && aspect > 0) {
		if (calculatedWidth) calculatedHeight = calculatedWidth / aspect;
		else if (calculatedHeight) calculatedWidth = calculatedHeight * aspect;
		if (maxHeight && calculatedHeight != null && calculatedHeight > maxHeight) calculatedHeight = maxHeight;
	}
	return {
		calculatedWidth,
		calculatedHeight
	};
};
var bothOverflow = {
	width: 0,
	height: 0,
	overflow: "visible"
};
var overflowX = {
	width: 0,
	overflowX: "visible"
};
var overflowY = {
	height: 0,
	overflowY: "visible"
};
var noStyle = {};
/**
* This zero-size, overflow-visible is required to allow the chart to shrink.
* Without it, the chart itself will fill the ResponsiveContainer, and while it allows the chart to grow,
* it would always keep the container at the size of the chart,
* and ResizeObserver would never fire.
* With this zero-size element, the chart itself never actually fills the container,
* it just so happens that it is visible because it overflows.
* I learned this trick from the `react-virtualized` library: https://github.com/bvaughn/react-virtualized-auto-sizer/blob/master/src/AutoSizer.ts
* See https://github.com/recharts/recharts/issues/172 and also https://github.com/bvaughn/react-virtualized/issues/68
*
* Also, we don't need to apply the zero-size style if the dimension is a fixed number (or undefined),
* because in that case the chart can't shrink in that dimension anyway.
* This fixes defining the dimensions using aspect ratio: https://github.com/recharts/recharts/issues/6245
*/
var getInnerDivStyle = (props) => {
	var { width, height } = props;
	var isWidthPercent = isPercent(width);
	var isHeightPercent = isPercent(height);
	if (isWidthPercent && isHeightPercent) return bothOverflow;
	if (isWidthPercent) return overflowX;
	if (isHeightPercent) return overflowY;
	return noStyle;
};
function getDefaultWidthAndHeight(_ref) {
	var { width, height, aspect } = _ref;
	var calculatedWidth = width;
	var calculatedHeight = height;
	if (calculatedWidth === void 0 && calculatedHeight === void 0) {
		calculatedWidth = defaultResponsiveContainerProps.width;
		calculatedHeight = defaultResponsiveContainerProps.height;
	} else if (calculatedWidth === void 0) calculatedWidth = aspect && aspect > 0 ? void 0 : defaultResponsiveContainerProps.width;
	else if (calculatedHeight === void 0) calculatedHeight = aspect && aspect > 0 ? void 0 : defaultResponsiveContainerProps.height;
	return {
		width: calculatedWidth,
		height: calculatedHeight
	};
}
function _extends$26() {
	return _extends$26 = Object.assign ? Object.assign.bind() : function(n) {
		for (var e = 1; e < arguments.length; e++) {
			var t = arguments[e];
			for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
		}
		return n;
	}, _extends$26.apply(null, arguments);
}
function ownKeys$38(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r) {
			return Object.getOwnPropertyDescriptor(e, r).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread$38(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys$38(Object(t), !0).forEach(function(r) {
			_defineProperty$40(e, r, t[r]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$38(Object(t)).forEach(function(r) {
			Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
		});
	}
	return e;
}
function _defineProperty$40(e, r, t) {
	return (r = _toPropertyKey$40(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}
function _toPropertyKey$40(t) {
	var i = _toPrimitive$40(t, "string");
	return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive$40(t, r) {
	if ("object" != typeof t || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != typeof i) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
var ResponsiveContainerContext = /* @__PURE__ */ (0, import_react.createContext)(defaultResponsiveContainerProps.initialDimension);
function isAcceptableSize(size) {
	return isPositiveNumber(size.width) && isPositiveNumber(size.height);
}
function ResponsiveContainerContextProvider(_ref) {
	var { children, width, height } = _ref;
	var size = (0, import_react.useMemo)(() => ({
		width,
		height
	}), [width, height]);
	if (!isAcceptableSize(size)) return null;
	return /* @__PURE__ */ import_react.createElement(ResponsiveContainerContext.Provider, { value: size }, children);
}
var useResponsiveContainerContext = () => (0, import_react.useContext)(ResponsiveContainerContext);
var SizeDetectorContainer = /* @__PURE__ */ (0, import_react.forwardRef)((_ref2, ref) => {
	var { aspect, initialDimension = defaultResponsiveContainerProps.initialDimension, width, height, minWidth = defaultResponsiveContainerProps.minWidth, minHeight, maxHeight, children, debounce = defaultResponsiveContainerProps.debounce, id, className, onResize, style = {} } = _ref2;
	var containerRef = (0, import_react.useRef)(null);
	var onResizeRef = (0, import_react.useRef)();
	onResizeRef.current = onResize;
	(0, import_react.useImperativeHandle)(ref, () => containerRef.current);
	var [sizes, setSizes] = (0, import_react.useState)({
		containerWidth: initialDimension.width,
		containerHeight: initialDimension.height
	});
	var setContainerSize = (0, import_react.useCallback)((newWidth, newHeight) => {
		setSizes((prevState) => {
			var roundedWidth = Math.round(newWidth);
			var roundedHeight = Math.round(newHeight);
			if (prevState.containerWidth === roundedWidth && prevState.containerHeight === roundedHeight) return prevState;
			return {
				containerWidth: roundedWidth,
				containerHeight: roundedHeight
			};
		});
	}, []);
	(0, import_react.useEffect)(() => {
		if (containerRef.current == null || typeof ResizeObserver === "undefined") return noop$2;
		var callback = (entries) => {
			var _onResizeRef$current;
			var entry = entries[0];
			if (entry == null) return;
			var { width: containerWidth, height: containerHeight } = entry.contentRect;
			setContainerSize(containerWidth, containerHeight);
			(_onResizeRef$current = onResizeRef.current) === null || _onResizeRef$current === void 0 || _onResizeRef$current.call(onResizeRef, containerWidth, containerHeight);
		};
		if (debounce > 0) callback = throttle(callback, debounce, {
			trailing: true,
			leading: false
		});
		var observer = new ResizeObserver(callback);
		var { width: containerWidth, height: containerHeight } = containerRef.current.getBoundingClientRect();
		setContainerSize(containerWidth, containerHeight);
		observer.observe(containerRef.current);
		return () => {
			observer.disconnect();
		};
	}, [setContainerSize, debounce]);
	var { containerWidth, containerHeight } = sizes;
	warn(!aspect || aspect > 0, "The aspect(%s) must be greater than zero.", aspect);
	var { calculatedWidth, calculatedHeight } = calculateChartDimensions(containerWidth, containerHeight, {
		width,
		height,
		aspect,
		maxHeight
	});
	warn(calculatedWidth != null && calculatedWidth > 0 || calculatedHeight != null && calculatedHeight > 0, "The width(%s) and height(%s) of chart should be greater than 0,\n       please check the style of container, or the props width(%s) and height(%s),\n       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the\n       height and width.", calculatedWidth, calculatedHeight, width, height, minWidth, minHeight, aspect);
	return /* @__PURE__ */ import_react.createElement("div", {
		id: id ? "".concat(id) : void 0,
		className: clsx("recharts-responsive-container", className),
		style: _objectSpread$38(_objectSpread$38({}, style), {}, {
			width,
			height,
			minWidth,
			minHeight,
			maxHeight
		}),
		ref: containerRef
	}, /* @__PURE__ */ import_react.createElement("div", { style: getInnerDivStyle({
		width,
		height
	}) }, /* @__PURE__ */ import_react.createElement(ResponsiveContainerContextProvider, {
		width: calculatedWidth,
		height: calculatedHeight
	}, children)));
});
/**
* The `ResponsiveContainer` component is a container that adjusts its width and height based on the size of its parent element.
* It is used to create responsive charts that adapt to different screen sizes.
*
* This component uses the {@link https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver ResizeObserver} API to monitor changes to the size of its parent element.
* If you need to support older browsers that do not support this API, you may need to include a polyfill.
*
* @see {@link https://recharts.github.io/en-US/guide/sizes/ Chart size guide}
*
* @provides ResponsiveContainerContext
*/
var ResponsiveContainer = /* @__PURE__ */ (0, import_react.forwardRef)((props, ref) => {
	var responsiveContainerContext = useResponsiveContainerContext();
	if (isPositiveNumber(responsiveContainerContext.width) && isPositiveNumber(responsiveContainerContext.height)) return props.children;
	var { width, height } = getDefaultWidthAndHeight({
		width: props.width,
		height: props.height,
		aspect: props.aspect
	});
	var { calculatedWidth, calculatedHeight } = calculateChartDimensions(void 0, void 0, {
		width,
		height,
		aspect: props.aspect,
		maxHeight: props.maxHeight
	});
	if (isNumber$1(calculatedWidth) && isNumber$1(calculatedHeight)) return /* @__PURE__ */ import_react.createElement(ResponsiveContainerContextProvider, {
		width: calculatedWidth,
		height: calculatedHeight
	}, props.children);
	return /* @__PURE__ */ import_react.createElement(SizeDetectorContainer, _extends$26({}, props, {
		width,
		height,
		ref
	}));
});
function cartesianViewBoxToTrapezoid(box) {
	if (!box) return;
	return {
		x: box.x,
		y: box.y,
		upperWidth: "upperWidth" in box ? box.upperWidth : box.width,
		lowerWidth: "lowerWidth" in box ? box.lowerWidth : box.width,
		width: box.width,
		height: box.height
	};
}
var useViewBox = () => {
	var _useAppSelector;
	var panorama = useIsPanorama();
	var rootViewBox = useAppSelector(selectChartViewBox);
	var brushDimensions = useAppSelector(selectBrushDimensions);
	var brushPadding = (_useAppSelector = useAppSelector(selectBrushSettings)) === null || _useAppSelector === void 0 ? void 0 : _useAppSelector.padding;
	if (!panorama || !brushDimensions || !brushPadding) return rootViewBox;
	return {
		width: brushDimensions.width - brushPadding.left - brushPadding.right,
		height: brushDimensions.height - brushPadding.top - brushPadding.bottom,
		x: brushPadding.left,
		y: brushPadding.top
	};
};
var manyComponentsThrowErrorsIfOffsetIsUndefined = {
	top: 0,
	bottom: 0,
	left: 0,
	right: 0,
	width: 0,
	height: 0,
	brushBottom: 0
};
/**
* For internal use only. If you want this information, `import { useOffset } from 'recharts'` instead.
*
* Returns the offset of the chart in pixels.
*
* @returns {ChartOffsetInternal} The offset of the chart in pixels, or a default value if not in a chart context.
*/
var useOffsetInternal = () => {
	var _useAppSelector2;
	return (_useAppSelector2 = useAppSelector(selectChartOffsetInternal)) !== null && _useAppSelector2 !== void 0 ? _useAppSelector2 : manyComponentsThrowErrorsIfOffsetIsUndefined;
};
/**
* Returns the width of the chart in pixels.
*
* If you are using chart with hardcoded `width` prop, then the width returned will be the same
* as the `width` prop on the main chart element.
*
* If you are using a chart with a `ResponsiveContainer`, the width will be the size of the chart
* as the ResponsiveContainer has decided it would be.
*
* If the chart has any axes or legend, the `width` will be the size of the chart
* including the axes and legend. Meaning: adding axes and legend will not change the width.
*
* The dimensions do not scale, meaning as user zoom in and out, the width number will not change
* as the chart gets visually larger or smaller.
*
* Returns `undefined` if used outside a chart context.
*
* @returns {number | undefined} The width of the chart in pixels, or `undefined` if not in a chart context.
*/
var useChartWidth = () => {
	return useAppSelector(selectChartWidth);
};
/**
* Returns the height of the chart in pixels.
*
* If you are using chart with hardcoded `height` props, then the height returned will be the same
* as the `height` prop on the main chart element.
*
* If you are using a chart with a `ResponsiveContainer`, the height will be the size of the chart
* as the ResponsiveContainer has decided it would be.
*
* If the chart has any axes or legend, the `height` will be the size of the chart
* including the axes and legend. Meaning: adding axes and legend will not change the height.
*
* The dimensions do not scale, meaning as user zoom in and out, the height number will not change
* as the chart gets visually larger or smaller.
*
* Returns `undefined` if used outside a chart context.
*
* @returns {number | undefined} The height of the chart in pixels, or `undefined` if not in a chart context.
*/
var useChartHeight = () => {
	return useAppSelector(selectChartHeight);
};
var selectChartLayout = (state) => state.layout.layoutType;
var useChartLayout = () => useAppSelector(selectChartLayout);
var useCartesianChartLayout = () => {
	var layout = useChartLayout();
	if (layout === "horizontal" || layout === "vertical") return layout;
};
var selectPolarChartLayout = (state) => {
	var layout = state.layout.layoutType;
	if (layout === "centric" || layout === "radial") return layout;
};
/**
* Returns true if the component is rendered inside a chart context.
* Some components may be used both inside and outside of charts,
* and this hook allows them to determine if they are in a chart context or not.
*
* Other selectors may return undefined when used outside a chart context,
* or undefined when inside a chart, but without relevant data.
* This hook provides a more explicit way to check for chart context.
*
* @returns {boolean} True if in chart context, false otherwise.
*/
var useIsInChartContext = () => {
	return useChartLayout() !== void 0;
};
var ReportChartSize = (props) => {
	var dispatch = useAppDispatch();
	var isPanorama = useIsPanorama();
	var { width: widthFromProps, height: heightFromProps } = props;
	var responsiveContainerCalculations = useResponsiveContainerContext();
	var width = widthFromProps;
	var height = heightFromProps;
	if (responsiveContainerCalculations) {
		width = responsiveContainerCalculations.width > 0 ? responsiveContainerCalculations.width : widthFromProps;
		height = responsiveContainerCalculations.height > 0 ? responsiveContainerCalculations.height : heightFromProps;
	}
	(0, import_react.useEffect)(() => {
		if (!isPanorama && isPositiveNumber(width) && isPositiveNumber(height)) dispatch(setChartSize({
			width,
			height
		}));
	}, [
		dispatch,
		isPanorama,
		width,
		height
	]);
	return null;
};
/**
* @fileOverview Curve
*/
function _extends$25() {
	return _extends$25 = Object.assign ? Object.assign.bind() : function(n) {
		for (var e = 1; e < arguments.length; e++) {
			var t = arguments[e];
			for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
		}
		return n;
	}, _extends$25.apply(null, arguments);
}
function ownKeys$37(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r) {
			return Object.getOwnPropertyDescriptor(e, r).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread$37(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys$37(Object(t), !0).forEach(function(r) {
			_defineProperty$39(e, r, t[r]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$37(Object(t)).forEach(function(r) {
			Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
		});
	}
	return e;
}
function _defineProperty$39(e, r, t) {
	return (r = _toPropertyKey$39(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}
function _toPropertyKey$39(t) {
	var i = _toPrimitive$39(t, "string");
	return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive$39(t, r) {
	if ("object" != typeof t || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != typeof i) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
var CURVE_FACTORIES = {
	curveBasisClosed: basisClosed_default,
	curveBasisOpen: basisOpen_default,
	curveBasis: basis_default,
	curveBumpX: bumpX,
	curveBumpY: bumpY,
	curveLinearClosed: linearClosed_default,
	curveLinear: linear_default,
	curveMonotoneX: monotoneX,
	curveMonotoneY: monotoneY,
	curveNatural: natural_default,
	curveStep: step_default,
	curveStepAfter: stepAfter,
	curveStepBefore: stepBefore
};
/**
* @inline
*/
/**
* @inline
*/
var defined = (p) => isWellBehavedNumber(p.x) && isWellBehavedNumber(p.y);
var areaDefined = (d) => d.base != null && defined(d.base) && defined(d);
var getX = (p) => p.x;
var getY = (p) => p.y;
var getCurveFactory = (type, layout) => {
	if (typeof type === "function") return type;
	var name = "curve".concat(upperFirst(type));
	if ((name === "curveMonotone" || name === "curveBump") && layout) {
		var factory = CURVE_FACTORIES["".concat(name).concat(layout === "vertical" ? "Y" : "X")];
		if (factory) return factory;
	}
	return CURVE_FACTORIES[name] || linear_default;
};
var defaultCurveProps = {
	connectNulls: false,
	type: "linear"
};
/**
* Calculate the path of curve. Returns null if points is an empty array.
* @return path or null
*/
var getPath$1 = (_ref) => {
	var { type = defaultCurveProps.type, points = [], baseLine, layout, connectNulls = defaultCurveProps.connectNulls } = _ref;
	var curveFactory = getCurveFactory(type, layout);
	var formatPoints = connectNulls ? points.filter(defined) : points;
	if (Array.isArray(baseLine)) {
		var _lineFunction;
		var areaPoints = points.map((entry, index) => _objectSpread$37(_objectSpread$37({}, entry), {}, { base: baseLine[index] }));
		if (layout === "vertical") _lineFunction = area_default().y(getY).x1(getX).x0((d) => d.base.x);
		else _lineFunction = area_default().x(getX).y1(getY).y0((d) => d.base.y);
		return _lineFunction.defined(areaDefined).curve(curveFactory)(connectNulls ? areaPoints.filter(areaDefined) : areaPoints);
	}
	var lineFunction;
	if (layout === "vertical" && isNumber$1(baseLine)) lineFunction = area_default().y(getY).x1(getX).x0(baseLine);
	else if (isNumber$1(baseLine)) lineFunction = area_default().x(getX).y1(getY).y0(baseLine);
	else lineFunction = line_default().x(getX).y(getY);
	return lineFunction.defined(defined).curve(curveFactory)(formatPoints);
};
var Curve = (props) => {
	var { className, points, path, pathRef } = props;
	var layout = useChartLayout();
	if ((!points || !points.length) && !path) return null;
	var getPathInput = {
		type: props.type,
		points: props.points,
		baseLine: props.baseLine,
		layout: props.layout || layout,
		connectNulls: props.connectNulls
	};
	var realPath = points && points.length ? getPath$1(getPathInput) : path;
	return /* @__PURE__ */ import_react.createElement("path", _extends$25({}, svgPropertiesNoEvents(props), adaptEventHandlers(props), {
		className: clsx("recharts-curve", className),
		d: realPath === null ? void 0 : realPath,
		ref: pathRef
	}));
};
/**
* Filters an object to only include SVG properties, data attributes, and event handlers.
* @param obj - The object to filter.
* @returns A new object containing only valid SVG properties, data attributes, and event handlers.
*/
function svgPropertiesAndEvents(obj) {
	var result = {};
	for (var key in obj) if (Object.prototype.hasOwnProperty.call(obj, key)) {
		if (isSvgElementPropKey(key) || isDataAttribute(key) || isEventKey(key)) result[key] = obj[key];
	}
	return result;
}
/**
* Function to filter SVG properties from various input types.
* The input types can be:
* - A record of string keys to any values, in which case it returns a record of only SVG properties
* - A React element, in which case it returns the props of the element filtered to only SVG properties
* - Anything else, in which case it returns null
*
* This function has a wide-open return type, because it will read and filter the props of an arbitrary React element.
* This can be SVG, HTML, whatnot, with arbitrary values, so we can't type it more specifically.
*
* If you wish to have a type-safe version, use svgPropertiesNoEvents directly with a typed object.
*
* @param input - The input to filter, which can be a record, a React element, or other types.
* @returns A record of SVG properties if the input is a record or React element, otherwise null.
*/
function svgPropertiesAndEventsFromUnknown(input) {
	if (input == null) return null;
	if (/* @__PURE__ */ (0, import_react.isValidElement)(input)) return svgPropertiesAndEvents(input.props);
	if (typeof input === "object" && !Array.isArray(input)) return svgPropertiesAndEvents(input);
	return null;
}
var _excluded$21 = ["children", "className"];
function _extends$24() {
	return _extends$24 = Object.assign ? Object.assign.bind() : function(n) {
		for (var e = 1; e < arguments.length; e++) {
			var t = arguments[e];
			for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
		}
		return n;
	}, _extends$24.apply(null, arguments);
}
function _objectWithoutProperties$21(e, t) {
	if (null == e) return {};
	var o, r, i = _objectWithoutPropertiesLoose$21(e, t);
	if (Object.getOwnPropertySymbols) {
		var n = Object.getOwnPropertySymbols(e);
		for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
	}
	return i;
}
function _objectWithoutPropertiesLoose$21(r, e) {
	if (null == r) return {};
	var t = {};
	for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
		if (-1 !== e.indexOf(n)) continue;
		t[n] = r[n];
	}
	return t;
}
/**
* Creates an SVG group element to group other SVG elements.
*
* Useful if you want to apply transformations or styles to a set of elements
* without affecting other elements in the SVG.
*
* @link https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Element/g
*/
var Layer = /* @__PURE__ */ import_react.forwardRef((props, ref) => {
	var { children, className } = props, others = _objectWithoutProperties$21(props, _excluded$21);
	var layerClass = clsx("recharts-layer", className);
	return /* @__PURE__ */ import_react.createElement("g", _extends$24({ className: layerClass }, svgPropertiesAndEvents(others), { ref }), children);
});
var parseIsSsrByDefault = () => !(typeof window !== "undefined" && window.document && Boolean(window.document.createElement) && window.setTimeout);
var Global = {
	devToolsEnabled: true,
	isSsr: parseIsSsrByDefault()
};
function _defineProperty$38(e, r, t) {
	return (r = _toPropertyKey$38(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}
function _toPropertyKey$38(t) {
	var i = _toPrimitive$38(t, "string");
	return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive$38(t, r) {
	if ("object" != typeof t || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != typeof i) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
/**
* Simple LRU (Least Recently Used) cache implementation
*/
var LRUCache = class {
	constructor(maxSize) {
		_defineProperty$38(this, "cache", /* @__PURE__ */ new Map());
		this.maxSize = maxSize;
	}
	get(key) {
		var value = this.cache.get(key);
		if (value !== void 0) {
			this.cache.delete(key);
			this.cache.set(key, value);
		}
		return value;
	}
	set(key, value) {
		if (this.cache.has(key)) this.cache.delete(key);
		else if (this.cache.size >= this.maxSize) {
			var firstKey = this.cache.keys().next().value;
			if (firstKey != null) this.cache.delete(firstKey);
		}
		this.cache.set(key, value);
	}
	clear() {
		this.cache.clear();
	}
	size() {
		return this.cache.size;
	}
};
function ownKeys$36(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r) {
			return Object.getOwnPropertyDescriptor(e, r).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread$36(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys$36(Object(t), !0).forEach(function(r) {
			_defineProperty$37(e, r, t[r]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$36(Object(t)).forEach(function(r) {
			Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
		});
	}
	return e;
}
function _defineProperty$37(e, r, t) {
	return (r = _toPropertyKey$37(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}
function _toPropertyKey$37(t) {
	var i = _toPrimitive$37(t, "string");
	return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive$37(t, r) {
	if ("object" != typeof t || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != typeof i) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
var currentConfig = _objectSpread$36({}, {
	cacheSize: 2e3,
	enableCache: true
});
var stringCache = new LRUCache(currentConfig.cacheSize);
var SPAN_STYLE = {
	position: "absolute",
	top: "-20000px",
	left: 0,
	padding: 0,
	margin: 0,
	border: "none",
	whiteSpace: "pre"
};
var MEASUREMENT_SPAN_ID = "recharts_measurement_span";
function createCacheKey(text, style) {
	var fontSize = style.fontSize || "";
	var fontFamily = style.fontFamily || "";
	var fontWeight = style.fontWeight || "";
	var fontStyle = style.fontStyle || "";
	var letterSpacing = style.letterSpacing || "";
	var textTransform = style.textTransform || "";
	return "".concat(text, "|").concat(fontSize, "|").concat(fontFamily, "|").concat(fontWeight, "|").concat(fontStyle, "|").concat(letterSpacing, "|").concat(textTransform);
}
/**
* Measure text using DOM (accurate but slower)
* @param text - The text to measure
* @param style - CSS style properties to apply
* @returns The size of the text
*/
var measureTextWithDOM = (text, style) => {
	try {
		var measurementSpan = document.getElementById(MEASUREMENT_SPAN_ID);
		if (!measurementSpan) {
			measurementSpan = document.createElement("span");
			measurementSpan.setAttribute("id", MEASUREMENT_SPAN_ID);
			measurementSpan.setAttribute("aria-hidden", "true");
			document.body.appendChild(measurementSpan);
		}
		Object.assign(measurementSpan.style, SPAN_STYLE, style);
		measurementSpan.textContent = "".concat(text);
		var rect = measurementSpan.getBoundingClientRect();
		return {
			width: rect.width,
			height: rect.height
		};
	} catch (_unused) {
		return {
			width: 0,
			height: 0
		};
	}
};
var getStringSize = function getStringSize(text) {
	var style = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
	if (text === void 0 || text === null || Global.isSsr) return {
		width: 0,
		height: 0
	};
	if (!currentConfig.enableCache) return measureTextWithDOM(text, style);
	var cacheKey = createCacheKey(text, style);
	var cachedResult = stringCache.get(cacheKey);
	if (cachedResult) return cachedResult;
	var result = measureTextWithDOM(text, style);
	stringCache.set(cacheKey, result);
	return result;
};
var _DecimalCSS;
function _defineProperty$36(e, r, t) {
	return (r = _toPropertyKey$36(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}
function _toPropertyKey$36(t) {
	var i = _toPrimitive$36(t, "string");
	return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive$36(t, r) {
	if ("object" != typeof t || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != typeof i) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
var MULTIPLY_OR_DIVIDE_REGEX = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/;
var ADD_OR_SUBTRACT_REGEX = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/;
var CSS_LENGTH_UNIT_REGEX = /^(px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q)$/;
var NUM_SPLIT_REGEX = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/;
var CONVERSION_RATES = {
	cm: 96 / 2.54,
	mm: 96 / 25.4,
	pt: 96 / 72,
	pc: 96 / 6,
	in: 96,
	Q: 96 / (2.54 * 40),
	px: 1
};
var FIXED_CSS_LENGTH_UNITS = [
	"cm",
	"mm",
	"pt",
	"pc",
	"in",
	"Q",
	"px"
];
function isSupportedUnit(unit) {
	return FIXED_CSS_LENGTH_UNITS.includes(unit);
}
var STR_NAN = "NaN";
function convertToPx(value, unit) {
	return value * CONVERSION_RATES[unit];
}
var DecimalCSS = class DecimalCSS {
	static parse(str) {
		var _NUM_SPLIT_REGEX$exec;
		var [, numStr, unit] = (_NUM_SPLIT_REGEX$exec = NUM_SPLIT_REGEX.exec(str)) !== null && _NUM_SPLIT_REGEX$exec !== void 0 ? _NUM_SPLIT_REGEX$exec : [];
		if (numStr == null) return DecimalCSS.NaN;
		return new DecimalCSS(parseFloat(numStr), unit !== null && unit !== void 0 ? unit : "");
	}
	constructor(num, unit) {
		this.num = num;
		this.unit = unit;
		this.num = num;
		this.unit = unit;
		if (isNan(num)) this.unit = "";
		if (unit !== "" && !CSS_LENGTH_UNIT_REGEX.test(unit)) {
			this.num = NaN;
			this.unit = "";
		}
		if (isSupportedUnit(unit)) {
			this.num = convertToPx(num, unit);
			this.unit = "px";
		}
	}
	add(other) {
		if (this.unit !== other.unit) return new DecimalCSS(NaN, "");
		return new DecimalCSS(this.num + other.num, this.unit);
	}
	subtract(other) {
		if (this.unit !== other.unit) return new DecimalCSS(NaN, "");
		return new DecimalCSS(this.num - other.num, this.unit);
	}
	multiply(other) {
		if (this.unit !== "" && other.unit !== "" && this.unit !== other.unit) return new DecimalCSS(NaN, "");
		return new DecimalCSS(this.num * other.num, this.unit || other.unit);
	}
	divide(other) {
		if (this.unit !== "" && other.unit !== "" && this.unit !== other.unit) return new DecimalCSS(NaN, "");
		return new DecimalCSS(this.num / other.num, this.unit || other.unit);
	}
	toString() {
		return "".concat(this.num).concat(this.unit);
	}
	isNaN() {
		return isNan(this.num);
	}
};
_DecimalCSS = DecimalCSS;
_defineProperty$36(DecimalCSS, "NaN", new _DecimalCSS(NaN, ""));
function calculateArithmetic(expr) {
	if (expr == null || expr.includes(STR_NAN)) return STR_NAN;
	var newExpr = expr;
	while (newExpr.includes("*") || newExpr.includes("/")) {
		var _MULTIPLY_OR_DIVIDE_R;
		var [, leftOperand, operator, rightOperand] = (_MULTIPLY_OR_DIVIDE_R = MULTIPLY_OR_DIVIDE_REGEX.exec(newExpr)) !== null && _MULTIPLY_OR_DIVIDE_R !== void 0 ? _MULTIPLY_OR_DIVIDE_R : [];
		var lTs = DecimalCSS.parse(leftOperand !== null && leftOperand !== void 0 ? leftOperand : "");
		var rTs = DecimalCSS.parse(rightOperand !== null && rightOperand !== void 0 ? rightOperand : "");
		var result = operator === "*" ? lTs.multiply(rTs) : lTs.divide(rTs);
		if (result.isNaN()) return STR_NAN;
		newExpr = newExpr.replace(MULTIPLY_OR_DIVIDE_REGEX, result.toString());
	}
	while (newExpr.includes("+") || /.-\d+(?:\.\d+)?/.test(newExpr)) {
		var _ADD_OR_SUBTRACT_REGE;
		var [, _leftOperand, _operator, _rightOperand] = (_ADD_OR_SUBTRACT_REGE = ADD_OR_SUBTRACT_REGEX.exec(newExpr)) !== null && _ADD_OR_SUBTRACT_REGE !== void 0 ? _ADD_OR_SUBTRACT_REGE : [];
		var _lTs = DecimalCSS.parse(_leftOperand !== null && _leftOperand !== void 0 ? _leftOperand : "");
		var _rTs = DecimalCSS.parse(_rightOperand !== null && _rightOperand !== void 0 ? _rightOperand : "");
		var _result = _operator === "+" ? _lTs.add(_rTs) : _lTs.subtract(_rTs);
		if (_result.isNaN()) return STR_NAN;
		newExpr = newExpr.replace(ADD_OR_SUBTRACT_REGEX, _result.toString());
	}
	return newExpr;
}
var PARENTHESES_REGEX = /\(([^()]*)\)/;
function calculateParentheses(expr) {
	var newExpr = expr;
	var match;
	while ((match = PARENTHESES_REGEX.exec(newExpr)) != null) {
		var [, parentheticalExpression] = match;
		newExpr = newExpr.replace(PARENTHESES_REGEX, calculateArithmetic(parentheticalExpression));
	}
	return newExpr;
}
function evaluateExpression(expression) {
	var newExpr = expression.replace(/\s+/g, "");
	newExpr = calculateParentheses(newExpr);
	newExpr = calculateArithmetic(newExpr);
	return newExpr;
}
function safeEvaluateExpression(expression) {
	try {
		return evaluateExpression(expression);
	} catch (_unused) {
		return STR_NAN;
	}
}
function reduceCSSCalc(expression) {
	var result = safeEvaluateExpression(expression.slice(5, -1));
	if (result === STR_NAN) return "";
	return result;
}
function ownKeys$35(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r) {
			return Object.getOwnPropertyDescriptor(e, r).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread$35(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys$35(Object(t), !0).forEach(function(r) {
			_defineProperty$35(e, r, t[r]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$35(Object(t)).forEach(function(r) {
			Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
		});
	}
	return e;
}
function _defineProperty$35(e, r, t) {
	return (r = _toPropertyKey$35(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}
function _toPropertyKey$35(t) {
	var i = _toPrimitive$35(t, "string");
	return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive$35(t, r) {
	if ("object" != typeof t || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != typeof i) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
/**
* This function mimics the behavior of the `defaultProps` static property in React.
* Functional components do not have a defaultProps property, so this function is useful to resolve default props.
*
* The common recommendation is to use ES6 destructuring with default values in the function signature,
* but you need to be careful there and make sure you destructure all the individual properties
* and not the whole object. See the test file for example.
*
* And because destructuring all properties one by one is a faff, and it's easy to miss one property,
* this function exists.
*
* @param realProps - the props object passed to the component by the user
* @param defaultProps - the default props object defined in the component by Recharts
* @returns - the props object with all the default props resolved. All `undefined` values are replaced with the default value.
*/
function resolveDefaultProps(realProps, defaultProps) {
	var resolvedProps = _objectSpread$35({}, realProps);
	var dp = defaultProps;
	return Object.keys(defaultProps).reduce((acc, key) => {
		if (acc[key] === void 0 && dp[key] !== void 0) acc[key] = dp[key];
		return acc;
	}, resolvedProps);
}
/**
* Helper type to extract the keys of T that are required.
* It iterates through each key K in T. If Pick<T, K> cannot be assigned an empty object {},
* it means K is required, so we keep K; otherwise, we discard it (never).
* [keyof T] at the end creates a union of the kept keys.
*/
/**
* Helper type to extract the keys of T that are optional.
* It iterates through each key K in T. If Pick<T, K> can be assigned an empty object {},
* it means K is optional (or potentially missing), so we keep K; otherwise, we discard it (never).
* [keyof T] at the end creates a union of the kept keys.
*/
/**
* Helper type to ensure keys of D exist in T.
* For each key K in D, if K is also a key of T, keep the type D[K].
* If K is NOT a key of T, map it to type `never`.
* An object cannot have a property of type `never`, effectively disallowing extra keys.
*/
/**
* This type will take a source type `Props` and a default type `Defaults` and will return a new type
* where all properties that are optional in `Props` but required in `Defaults` are made required in the result.
* Properties that are required in `Props` and optional in `Defaults` will remain required.
* Properties that are optional in both `Props` and `Defaults` will remain optional.
*
* This is useful for creating a type that represents the resolved props of a component with default props.
*/
var _excluded$20 = [
	"x",
	"y",
	"lineHeight",
	"capHeight",
	"fill",
	"scaleToFit",
	"textAnchor",
	"verticalAnchor"
], _excluded2$9 = [
	"dx",
	"dy",
	"angle",
	"className",
	"breakAll"
];
function _extends$23() {
	return _extends$23 = Object.assign ? Object.assign.bind() : function(n) {
		for (var e = 1; e < arguments.length; e++) {
			var t = arguments[e];
			for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
		}
		return n;
	}, _extends$23.apply(null, arguments);
}
function _objectWithoutProperties$20(e, t) {
	if (null == e) return {};
	var o, r, i = _objectWithoutPropertiesLoose$20(e, t);
	if (Object.getOwnPropertySymbols) {
		var n = Object.getOwnPropertySymbols(e);
		for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
	}
	return i;
}
function _objectWithoutPropertiesLoose$20(r, e) {
	if (null == r) return {};
	var t = {};
	for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
		if (-1 !== e.indexOf(n)) continue;
		t[n] = r[n];
	}
	return t;
}
var BREAKING_SPACES = /[ \f\n\r\t\v\u2028\u2029]+/;
var calculateWordWidths = (_ref) => {
	var { children, breakAll, style } = _ref;
	try {
		var words = [];
		if (!isNullish(children)) if (breakAll) words = children.toString().split("");
		else words = children.toString().split(BREAKING_SPACES);
		return {
			wordsWithComputedWidth: words.map((word) => ({
				word,
				width: getStringSize(word, style).width
			})),
			spaceWidth: breakAll ? 0 : getStringSize("\xA0", style).width
		};
	} catch (_unused) {
		return null;
	}
};
/**
* @inline
*/
function isValidTextAnchor(value) {
	return value === "start" || value === "middle" || value === "end" || value === "inherit";
}
/**
* @inline
*/
/**
* @inline
*/
function isRenderableText(val) {
	return isNullish(val) || typeof val === "string" || typeof val === "number" || typeof val === "boolean";
}
var calculate = (words, lineWidth, spaceWidth, scaleToFit) => words.reduce((result, _ref2) => {
	var { word, width } = _ref2;
	var currentLine = result[result.length - 1];
	if (currentLine && width != null && (lineWidth == null || scaleToFit || currentLine.width + width + spaceWidth < Number(lineWidth))) {
		currentLine.words.push(word);
		currentLine.width += width + spaceWidth;
	} else {
		var newLine = {
			words: [word],
			width
		};
		result.push(newLine);
	}
	return result;
}, []);
var findLongestLine = (words) => words.reduce((a, b) => a.width > b.width ? a : b);
var suffix = "…";
var checkOverflow = (text, index, breakAll, style, maxLines, lineWidth, spaceWidth, scaleToFit) => {
	var words = calculateWordWidths({
		breakAll,
		style,
		children: text.slice(0, index) + suffix
	});
	if (!words) return [false, []];
	var result = calculate(words.wordsWithComputedWidth, lineWidth, spaceWidth, scaleToFit);
	return [result.length > maxLines || findLongestLine(result).width > Number(lineWidth), result];
};
var calculateWordsByLines = (_ref3, initialWordsWithComputedWith, spaceWidth, lineWidth, scaleToFit) => {
	var { maxLines, children, style, breakAll } = _ref3;
	var shouldLimitLines = isNumber$1(maxLines);
	var text = String(children);
	var originalResult = calculate(initialWordsWithComputedWith, lineWidth, spaceWidth, scaleToFit);
	if (!shouldLimitLines || scaleToFit) return originalResult;
	if (!(originalResult.length > maxLines || findLongestLine(originalResult).width > Number(lineWidth))) return originalResult;
	var start = 0;
	var end = text.length - 1;
	var iterations = 0;
	var trimmedResult;
	while (start <= end && iterations <= text.length - 1) {
		var middle = Math.floor((start + end) / 2);
		var [doesPrevOverflow, result] = checkOverflow(text, middle - 1, breakAll, style, maxLines, lineWidth, spaceWidth, scaleToFit);
		var [doesMiddleOverflow] = checkOverflow(text, middle, breakAll, style, maxLines, lineWidth, spaceWidth, scaleToFit);
		if (!doesPrevOverflow && !doesMiddleOverflow) start = middle + 1;
		if (doesPrevOverflow && doesMiddleOverflow) end = middle - 1;
		if (!doesPrevOverflow && doesMiddleOverflow) {
			trimmedResult = result;
			break;
		}
		iterations++;
	}
	return trimmedResult || originalResult;
};
var getWordsWithoutCalculate = (children) => {
	return [{
		words: !isNullish(children) ? children.toString().split(BREAKING_SPACES) : [],
		width: void 0
	}];
};
var getWordsByLines = (_ref4) => {
	var { width, scaleToFit, children, style, breakAll, maxLines } = _ref4;
	if ((width || scaleToFit) && !Global.isSsr) {
		var wordsWithComputedWidth, spaceWidth;
		var wordWidths = calculateWordWidths({
			breakAll,
			children,
			style
		});
		if (wordWidths) {
			var { wordsWithComputedWidth: wcw, spaceWidth: sw } = wordWidths;
			wordsWithComputedWidth = wcw;
			spaceWidth = sw;
		} else return getWordsWithoutCalculate(children);
		return calculateWordsByLines({
			breakAll,
			children,
			maxLines,
			style
		}, wordsWithComputedWidth, spaceWidth, width, Boolean(scaleToFit));
	}
	return getWordsWithoutCalculate(children);
};
var DEFAULT_FILL = "#808080";
var textDefaultProps = {
	angle: 0,
	breakAll: false,
	capHeight: "0.71em",
	fill: DEFAULT_FILL,
	lineHeight: "1em",
	scaleToFit: false,
	textAnchor: "start",
	verticalAnchor: "end",
	x: 0,
	y: 0
};
var Text = /* @__PURE__ */ (0, import_react.forwardRef)((outsideProps, ref) => {
	var _resolveDefaultProps = resolveDefaultProps(outsideProps, textDefaultProps), { x: propsX, y: propsY, lineHeight, capHeight, fill, scaleToFit, textAnchor, verticalAnchor } = _resolveDefaultProps, props = _objectWithoutProperties$20(_resolveDefaultProps, _excluded$20);
	var wordsByLines = (0, import_react.useMemo)(() => {
		return getWordsByLines({
			breakAll: props.breakAll,
			children: props.children,
			maxLines: props.maxLines,
			scaleToFit,
			style: props.style,
			width: props.width
		});
	}, [
		props.breakAll,
		props.children,
		props.maxLines,
		scaleToFit,
		props.style,
		props.width
	]);
	var { dx, dy, angle, className, breakAll } = props, textProps = _objectWithoutProperties$20(props, _excluded2$9);
	if (!isNumOrStr(propsX) || !isNumOrStr(propsY) || wordsByLines.length === 0) return null;
	var x = Number(propsX) + (isNumber$1(dx) ? dx : 0);
	var y = Number(propsY) + (isNumber$1(dy) ? dy : 0);
	if (!isWellBehavedNumber(x) || !isWellBehavedNumber(y)) return null;
	var startDy;
	switch (verticalAnchor) {
		case "start":
			startDy = reduceCSSCalc("calc(".concat(capHeight, ")"));
			break;
		case "middle":
			startDy = reduceCSSCalc("calc(".concat((wordsByLines.length - 1) / 2, " * -").concat(lineHeight, " + (").concat(capHeight, " / 2))"));
			break;
		default:
			startDy = reduceCSSCalc("calc(".concat(wordsByLines.length - 1, " * -").concat(lineHeight, ")"));
			break;
	}
	var transforms = [];
	var firstLine = wordsByLines[0];
	if (scaleToFit && firstLine != null) {
		var lineWidth = firstLine.width;
		var { width } = props;
		transforms.push("scale(".concat(isNumber$1(width) && isNumber$1(lineWidth) ? width / lineWidth : 1, ")"));
	}
	if (angle) transforms.push("rotate(".concat(angle, ", ").concat(x, ", ").concat(y, ")"));
	if (transforms.length) textProps.transform = transforms.join(" ");
	return /* @__PURE__ */ import_react.createElement("text", _extends$23({}, svgPropertiesAndEvents(textProps), {
		ref,
		x,
		y,
		className: clsx("recharts-text", className),
		textAnchor,
		fill: fill.includes("url") ? DEFAULT_FILL : fill
	}), wordsByLines.map((line, index) => {
		var words = line.words.join(breakAll ? "" : " ");
		return /* @__PURE__ */ import_react.createElement("tspan", {
			x,
			dy: index === 0 ? startDy : lineHeight,
			key: "".concat(words, "-").concat(index)
		}, words);
	}));
});
Text.displayName = "Text";
function ownKeys$34(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r) {
			return Object.getOwnPropertyDescriptor(e, r).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread$34(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys$34(Object(t), !0).forEach(function(r) {
			_defineProperty$34(e, r, t[r]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$34(Object(t)).forEach(function(r) {
			Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
		});
	}
	return e;
}
function _defineProperty$34(e, r, t) {
	return (r = _toPropertyKey$34(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}
function _toPropertyKey$34(t) {
	var i = _toPrimitive$34(t, "string");
	return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive$34(t, r) {
	if ("object" != typeof t || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != typeof i) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
var RADIAN$1 = Math.PI / 180;
var radianToDegree = (angleInRadian) => angleInRadian * 180 / Math.PI;
var polarToCartesian = (cx, cy, radius, angle) => ({
	x: cx + Math.cos(-RADIAN$1 * angle) * radius,
	y: cy + Math.sin(-RADIAN$1 * angle) * radius
});
var getMaxRadius = function getMaxRadius(width, height) {
	var offset = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		width: 0,
		height: 0,
		brushBottom: 0
	};
	return Math.min(Math.abs(width - (offset.left || 0) - (offset.right || 0)), Math.abs(height - (offset.top || 0) - (offset.bottom || 0))) / 2;
};
var distanceBetweenPoints = (point, anotherPoint) => {
	var { x: x1, y: y1 } = point;
	var { x: x2, y: y2 } = anotherPoint;
	return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
};
var getAngleOfPoint = (_ref, _ref2) => {
	var { x, y } = _ref;
	var { cx, cy } = _ref2;
	var radius = distanceBetweenPoints({
		x,
		y
	}, {
		x: cx,
		y: cy
	});
	if (radius <= 0) return {
		radius,
		angle: 0
	};
	var cos = (x - cx) / radius;
	var angleInRadian = Math.acos(cos);
	if (y > cy) angleInRadian = 2 * Math.PI - angleInRadian;
	return {
		radius,
		angle: radianToDegree(angleInRadian),
		angleInRadian
	};
};
var formatAngleOfSector = (_ref3) => {
	var { startAngle, endAngle } = _ref3;
	var startCnt = Math.floor(startAngle / 360);
	var endCnt = Math.floor(endAngle / 360);
	var min = Math.min(startCnt, endCnt);
	return {
		startAngle: startAngle - min * 360,
		endAngle: endAngle - min * 360
	};
};
var reverseFormatAngleOfSector = (angle, _ref4) => {
	var { startAngle, endAngle } = _ref4;
	var startCnt = Math.floor(startAngle / 360);
	var endCnt = Math.floor(endAngle / 360);
	return angle + Math.min(startCnt, endCnt) * 360;
};
var inRangeOfSector = (_ref5, viewBox) => {
	var { relativeX: x, relativeY: y } = _ref5;
	var { radius, angle } = getAngleOfPoint({
		x,
		y
	}, viewBox);
	var { innerRadius, outerRadius } = viewBox;
	if (radius < innerRadius || radius > outerRadius) return null;
	if (radius === 0) return null;
	var { startAngle, endAngle } = formatAngleOfSector(viewBox);
	var formatAngle = angle;
	var inRange;
	if (startAngle <= endAngle) {
		while (formatAngle > endAngle) formatAngle -= 360;
		while (formatAngle < startAngle) formatAngle += 360;
		inRange = formatAngle >= startAngle && formatAngle <= endAngle;
	} else {
		while (formatAngle > startAngle) formatAngle -= 360;
		while (formatAngle < endAngle) formatAngle += 360;
		inRange = formatAngle >= endAngle && formatAngle <= startAngle;
	}
	if (inRange) return _objectSpread$34(_objectSpread$34({}, viewBox), {}, {
		radius,
		angle: reverseFormatAngleOfSector(formatAngle, viewBox)
	});
	return null;
};
/**
* A collection of all default zIndex values used by Recharts.
*
* You can reuse these, or you can define your own.
*/
var DefaultZIndexes = {
	/**
	* CartesianGrid and PolarGrid
	*/
	grid: -100,
	/**
	* Background of Bar and RadialBar.
	* This is not visible by default but can be enabled by setting background={true} on Bar or RadialBar.
	*/
	barBackground: -50,
	/**
	* Area, Pie, Radar, and ReferenceArea
	*/
	area: 100,
	/**
	* Cursor is embedded inside Tooltip and controlled by it.
	* The Tooltip itself has a separate portal and is not included in the zIndex system;
	* Cursor is the decoration inside the chart area. CursorRectangle is a rectangle box.
	* It renders below bar so that in a stacked bar chart the cursor rectangle does not hide the other bars.
	*/
	cursorRectangle: 200,
	/**
	* Bar and RadialBar
	*/
	bar: 300,
	/**
	* Line and ReferenceLine, and ErrorBor
	*/
	line: 400,
	/**
	* XAxis and YAxis and PolarAngleAxis and PolarRadiusAxis ticks and lines and children
	*/
	axis: 500,
	/**
	* Scatter and ReferenceDot,
	* and Dots of Line and Area and Radar if they have dot=true
	*/
	scatter: 600,
	/**
	* Hovering over a Bar or RadialBar renders a highlight rectangle
	*/
	activeBar: 1e3,
	/**
	* Cursor is embedded inside Tooltip and controlled by it.
	* The Tooltip itself has a separate portal and is not included in the zIndex system;
	* Cursor is the decoration inside the chart area, usually a cross or a box.
	* CursorLine is a line cursor rendered in Line, Area, Scatter, Radar charts.
	* It renders above the Line and Scatter so that it is always visible.
	* It renders below active dot so that the dot is always visible and shows the current point.
	* We're also assuming that the active dot is small enough that it does not fully cover the cursor line.
	*
	* This also applies to the radial cursor in RadialBarChart.
	*/
	cursorLine: 1100,
	/**
	* Hovering over a Point in Line, Area, Scatter, Radar renders a highlight dot
	*/
	activeDot: 1200,
	/**
	* LabelList and Label, including Axis labels
	*/
	label: 2e3
};
var defaultPolarAngleAxisProps = {
	allowDecimals: false,
	allowDuplicatedCategory: true,
	allowDataOverflow: false,
	angle: 0,
	angleAxisId: 0,
	axisLine: true,
	axisLineType: "polygon",
	cx: 0,
	cy: 0,
	hide: false,
	includeHidden: false,
	label: false,
	niceTicks: "auto",
	orientation: "outer",
	reversed: false,
	scale: "auto",
	tick: true,
	tickLine: true,
	tickSize: 8,
	type: "auto",
	zIndex: DefaultZIndexes.axis
};
var defaultPolarRadiusAxisProps = {
	allowDataOverflow: false,
	allowDecimals: false,
	allowDuplicatedCategory: true,
	angle: 0,
	axisLine: true,
	includeHidden: false,
	hide: false,
	niceTicks: "auto",
	label: false,
	orientation: "right",
	radiusAxisId: 0,
	reversed: false,
	scale: "auto",
	stroke: "#ccc",
	tick: true,
	tickCount: 5,
	tickLine: true,
	type: "auto",
	zIndex: DefaultZIndexes.axis
};
var combineAxisRangeWithReverse = (axisSettings, axisRange) => {
	if (!axisSettings || !axisRange) return;
	if (axisSettings !== null && axisSettings !== void 0 && axisSettings.reversed) return [axisRange[1], axisRange[0]];
	return axisRange;
};
/**
* This function evaluates the "auto" axis domain type based on the chart layout and axis type.
* It outputs a definitive axis domain type that can be used for further processing.
*/
function getAxisTypeBasedOnLayout(layout, axisType, axisDomainType) {
	if (axisDomainType !== "auto") return axisDomainType;
	if (layout == null) return;
	return isCategoricalAxis(layout, axisType) ? "category" : "number";
}
function ownKeys$33(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r) {
			return Object.getOwnPropertyDescriptor(e, r).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread$33(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys$33(Object(t), !0).forEach(function(r) {
			_defineProperty$33(e, r, t[r]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$33(Object(t)).forEach(function(r) {
			Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
		});
	}
	return e;
}
function _defineProperty$33(e, r, t) {
	return (r = _toPropertyKey$33(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}
function _toPropertyKey$33(t) {
	var i = _toPrimitive$33(t, "string");
	return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive$33(t, r) {
	if ("object" != typeof t || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != typeof i) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
var implicitAngleAxis = {
	allowDataOverflow: defaultPolarAngleAxisProps.allowDataOverflow,
	allowDecimals: defaultPolarAngleAxisProps.allowDecimals,
	allowDuplicatedCategory: false,
	dataKey: void 0,
	domain: void 0,
	id: defaultPolarAngleAxisProps.angleAxisId,
	includeHidden: false,
	name: void 0,
	reversed: defaultPolarAngleAxisProps.reversed,
	scale: defaultPolarAngleAxisProps.scale,
	tick: defaultPolarAngleAxisProps.tick,
	tickCount: void 0,
	ticks: void 0,
	type: defaultPolarAngleAxisProps.type,
	unit: void 0,
	niceTicks: "auto"
};
var implicitRadiusAxis = {
	allowDataOverflow: defaultPolarRadiusAxisProps.allowDataOverflow,
	allowDecimals: defaultPolarRadiusAxisProps.allowDecimals,
	allowDuplicatedCategory: defaultPolarRadiusAxisProps.allowDuplicatedCategory,
	dataKey: void 0,
	domain: void 0,
	id: defaultPolarRadiusAxisProps.radiusAxisId,
	includeHidden: defaultPolarRadiusAxisProps.includeHidden,
	name: void 0,
	reversed: defaultPolarRadiusAxisProps.reversed,
	scale: defaultPolarRadiusAxisProps.scale,
	tick: defaultPolarRadiusAxisProps.tick,
	tickCount: defaultPolarRadiusAxisProps.tickCount,
	ticks: void 0,
	type: defaultPolarRadiusAxisProps.type,
	unit: void 0,
	niceTicks: "auto"
};
var selectAngleAxisNoDefaults = (state, angleAxisId) => {
	if (angleAxisId == null) return;
	return state.polarAxis.angleAxis[angleAxisId];
};
var selectAngleAxis = createSelector([selectAngleAxisNoDefaults, selectPolarChartLayout], (angleAxisSettings, layout) => {
	var _getAxisTypeBasedOnLa;
	if (angleAxisSettings != null) return angleAxisSettings;
	var evaluatedType = (_getAxisTypeBasedOnLa = getAxisTypeBasedOnLayout(layout, "angleAxis", implicitAngleAxis.type)) !== null && _getAxisTypeBasedOnLa !== void 0 ? _getAxisTypeBasedOnLa : "category";
	return _objectSpread$33(_objectSpread$33({}, implicitAngleAxis), {}, { type: evaluatedType });
});
var selectRadiusAxisNoDefaults = (state, radiusAxisId) => {
	return state.polarAxis.radiusAxis[radiusAxisId];
};
var selectRadiusAxis = createSelector([selectRadiusAxisNoDefaults, selectPolarChartLayout], (radiusAxisSettings, layout) => {
	var _getAxisTypeBasedOnLa2;
	if (radiusAxisSettings != null) return radiusAxisSettings;
	var evaluatedType = (_getAxisTypeBasedOnLa2 = getAxisTypeBasedOnLayout(layout, "radiusAxis", implicitRadiusAxis.type)) !== null && _getAxisTypeBasedOnLa2 !== void 0 ? _getAxisTypeBasedOnLa2 : "category";
	return _objectSpread$33(_objectSpread$33({}, implicitRadiusAxis), {}, { type: evaluatedType });
});
var selectPolarOptions = (state) => state.polarOptions;
var selectMaxRadius = createSelector([
	selectChartWidth,
	selectChartHeight,
	selectChartOffsetInternal
], getMaxRadius);
var selectInnerRadius = createSelector([selectPolarOptions, selectMaxRadius], (polarChartOptions, maxRadius) => {
	if (polarChartOptions == null) return;
	return getPercentValue(polarChartOptions.innerRadius, maxRadius, 0);
});
var selectOuterRadius = createSelector([selectPolarOptions, selectMaxRadius], (polarChartOptions, maxRadius) => {
	if (polarChartOptions == null) return;
	return getPercentValue(polarChartOptions.outerRadius, maxRadius, maxRadius * .8);
});
var combineAngleAxisRange = (polarOptions) => {
	if (polarOptions == null) return [0, 0];
	var { startAngle, endAngle } = polarOptions;
	return [startAngle, endAngle];
};
var selectAngleAxisRange = createSelector([selectPolarOptions], combineAngleAxisRange);
createSelector([selectAngleAxis, selectAngleAxisRange], combineAxisRangeWithReverse);
var selectRadiusAxisRange = createSelector([
	selectMaxRadius,
	selectInnerRadius,
	selectOuterRadius
], (maxRadius, innerRadius, outerRadius) => {
	if (maxRadius == null || innerRadius == null || outerRadius == null) return;
	return [innerRadius, outerRadius];
});
createSelector([selectRadiusAxis, selectRadiusAxisRange], combineAxisRangeWithReverse);
var selectPolarViewBox = createSelector([
	selectChartLayout,
	selectPolarOptions,
	selectInnerRadius,
	selectOuterRadius,
	selectChartWidth,
	selectChartHeight
], (layout, polarOptions, innerRadius, outerRadius, width, height) => {
	if (layout !== "centric" && layout !== "radial" || polarOptions == null || innerRadius == null || outerRadius == null) return;
	var { cx, cy, startAngle, endAngle } = polarOptions;
	return {
		cx: getPercentValue(cx, width, width / 2),
		cy: getPercentValue(cy, height, height / 2),
		innerRadius,
		outerRadius,
		startAngle,
		endAngle,
		clockWise: false
	};
});
var import_react_dom = /* @__PURE__ */ __toESM(require_react_dom());
/**
* Checks if two arrays are equal, treating empty arrays as equal regardless of reference.
* If both arrays are non-empty, it checks for reference equality.
* @param a
* @param b
*/
function emptyArraysAreEqualCheck(a, b) {
	if (Array.isArray(a) && Array.isArray(b) && a.length === 0 && b.length === 0) return true;
	return a === b;
}
/**
* Checks if two arrays have the same contents in the same order.
* @param a
* @param b
*/
function arrayContentsAreEqualCheck(a, b) {
	if (a.length === b.length) {
		for (var i = 0; i < a.length; i++) if (a[i] !== b[i]) return false;
		return true;
	}
	return false;
}
/**
* Given a zIndex, returns the corresponding portal element reference.
* If no zIndex is provided or if the zIndex is not registered, returns undefined.
*
* It also returns undefined in case the z-index portal has not been rendered yet.
*/
var selectZIndexPortalElement = createSelector((state) => state.zIndex.zIndexMap, (_, zIndex) => zIndex, (_, _zIndex, isPanorama) => isPanorama, (zIndexMap, zIndex, isPanorama) => {
	if (zIndex == null) return;
	var entry = zIndexMap[zIndex];
	if (entry == null) return;
	if (isPanorama) return entry.panoramaElement;
	return entry.element;
});
var selectAllRegisteredZIndexes = createSelector((state) => state.zIndex.zIndexMap, (zIndexMap) => {
	var allNumbers = Object.keys(zIndexMap).map((zIndexStr) => parseInt(zIndexStr, 10)).concat(Object.values(DefaultZIndexes));
	return Array.from(new Set(allNumbers)).sort((a, b) => a - b);
}, { memoizeOptions: { resultEqualityCheck: arrayContentsAreEqualCheck } });
/**
* This slice contains a registry of z-index values for various components.
* The state is a map from z-index numbers to element references.
*/
function ownKeys$32(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r) {
			return Object.getOwnPropertyDescriptor(e, r).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread$32(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys$32(Object(t), !0).forEach(function(r) {
			_defineProperty$32(e, r, t[r]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$32(Object(t)).forEach(function(r) {
			Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
		});
	}
	return e;
}
function _defineProperty$32(e, r, t) {
	return (r = _toPropertyKey$32(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}
function _toPropertyKey$32(t) {
	var i = _toPrimitive$32(t, "string");
	return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive$32(t, r) {
	if ("object" != typeof t || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != typeof i) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
var initialState$5 = { zIndexMap: Object.values(DefaultZIndexes).reduce((acc, current) => _objectSpread$32(_objectSpread$32({}, acc), {}, { [current]: {
	element: void 0,
	panoramaElement: void 0,
	consumers: 0
} }), {}) };
var defaultZIndexSet = new Set(Object.values(DefaultZIndexes));
function isDefaultZIndex(zIndex) {
	return defaultZIndexSet.has(zIndex);
}
var zIndexSlice = createSlice({
	name: "zIndex",
	initialState: initialState$5,
	reducers: {
		registerZIndexPortal: {
			reducer: (state, action) => {
				var { zIndex } = action.payload;
				if (state.zIndexMap[zIndex]) state.zIndexMap[zIndex].consumers += 1;
				else state.zIndexMap[zIndex] = {
					consumers: 1,
					element: void 0,
					panoramaElement: void 0
				};
			},
			prepare: prepareAutoBatched()
		},
		unregisterZIndexPortal: {
			reducer: (state, action) => {
				var { zIndex } = action.payload;
				if (state.zIndexMap[zIndex]) {
					state.zIndexMap[zIndex].consumers -= 1;
					if (state.zIndexMap[zIndex].consumers <= 0 && !isDefaultZIndex(zIndex)) delete state.zIndexMap[zIndex];
				}
			},
			prepare: prepareAutoBatched()
		},
		registerZIndexPortalElement: {
			reducer: (state, action) => {
				var { zIndex, element, isPanorama } = action.payload;
				if (state.zIndexMap[zIndex]) if (isPanorama) state.zIndexMap[zIndex].panoramaElement = castDraft(element);
				else state.zIndexMap[zIndex].element = castDraft(element);
				else state.zIndexMap[zIndex] = {
					consumers: 0,
					element: isPanorama ? void 0 : castDraft(element),
					panoramaElement: isPanorama ? castDraft(element) : void 0
				};
			},
			prepare: prepareAutoBatched()
		},
		unregisterZIndexPortalElement: {
			reducer: (state, action) => {
				var { zIndex } = action.payload;
				if (state.zIndexMap[zIndex]) if (action.payload.isPanorama) state.zIndexMap[zIndex].panoramaElement = void 0;
				else state.zIndexMap[zIndex].element = void 0;
			},
			prepare: prepareAutoBatched()
		}
	}
});
var { registerZIndexPortal, unregisterZIndexPortal, registerZIndexPortalElement, unregisterZIndexPortalElement } = zIndexSlice.actions;
var zIndexReducer = zIndexSlice.reducer;
/**
* @since 3.4
*/
/**
* A layer that renders its children into a portal corresponding to the given zIndex.
* We can't use regular CSS `z-index` because SVG does not support it.
* So instead, we create separate DOM nodes for each zIndex layer
* and render the children into the corresponding DOM node using React portals.
*
* This component must be used inside a Chart component.
*
* @param zIndex numeric zIndex value, higher values are rendered on top of lower values
* @param children the content to render inside this zIndex layer
*
* @since 3.4
*/
function ZIndexLayer(_ref) {
	var { zIndex, children } = _ref;
	var shouldRenderInPortal = useIsInChartContext() && zIndex !== void 0 && zIndex !== 0;
	var isPanorama = useIsPanorama();
	var dispatch = useAppDispatch();
	(0, import_react.useLayoutEffect)(() => {
		if (!shouldRenderInPortal) return noop$2;
		dispatch(registerZIndexPortal({ zIndex }));
		return () => {
			dispatch(unregisterZIndexPortal({ zIndex }));
		};
	}, [
		dispatch,
		zIndex,
		shouldRenderInPortal
	]);
	var portalElement = useAppSelector((state) => selectZIndexPortalElement(state, zIndex, isPanorama));
	if (!shouldRenderInPortal) return children;
	if (!portalElement) return null;
	return /* @__PURE__ */ (0, import_react_dom.createPortal)(children, portalElement);
}
function ownKeys$31(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r) {
			return Object.getOwnPropertyDescriptor(e, r).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread$31(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys$31(Object(t), !0).forEach(function(r) {
			_defineProperty$31(e, r, t[r]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$31(Object(t)).forEach(function(r) {
			Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
		});
	}
	return e;
}
function _defineProperty$31(e, r, t) {
	return (r = _toPropertyKey$31(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}
function _toPropertyKey$31(t) {
	var i = _toPrimitive$31(t, "string");
	return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive$31(t, r) {
	if ("object" != typeof t || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != typeof i) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
/**
* Calculates the position and alignment for a generic element in a Cartesian coordinate system.
*
* @param options - The options including viewBox, position, and offset.
* @returns The calculated x, y, alignment and size.
*/
var getCartesianPosition = (options) => {
	var { viewBox, position, offset = 0, parentViewBox: parentViewBoxFromOptions, clamp } = options;
	var { x, y, height, upperWidth, lowerWidth } = cartesianViewBoxToTrapezoid(viewBox);
	var upperX = x;
	var lowerX = x + (upperWidth - lowerWidth) / 2;
	var middleX = (upperX + lowerX) / 2;
	var midHeightWidth = (upperWidth + lowerWidth) / 2;
	var centerX = upperX + upperWidth / 2;
	var verticalSign = height >= 0 ? 1 : -1;
	var verticalOffset = verticalSign * offset;
	var verticalEnd = verticalSign > 0 ? "end" : "start";
	var verticalStart = verticalSign > 0 ? "start" : "end";
	var horizontalSign = upperWidth >= 0 ? 1 : -1;
	var horizontalOffset = horizontalSign * offset;
	var horizontalEnd = horizontalSign > 0 ? "end" : "start";
	var horizontalStart = horizontalSign > 0 ? "start" : "end";
	var parentViewBox = parentViewBoxFromOptions;
	if (position === "top") {
		var result = {
			x: upperX + upperWidth / 2,
			y: y - verticalOffset,
			horizontalAnchor: "middle",
			verticalAnchor: verticalEnd
		};
		if (clamp && parentViewBox) {
			result.height = Math.max(y - parentViewBox.y, 0);
			result.width = upperWidth;
		}
		return result;
	}
	if (position === "bottom") {
		var _result = {
			x: lowerX + lowerWidth / 2,
			y: y + height + verticalOffset,
			horizontalAnchor: "middle",
			verticalAnchor: verticalStart
		};
		if (clamp && parentViewBox) {
			_result.height = Math.max(parentViewBox.y + parentViewBox.height - (y + height), 0);
			_result.width = lowerWidth;
		}
		return _result;
	}
	if (position === "left") {
		var _result2 = {
			x: middleX - horizontalOffset,
			y: y + height / 2,
			horizontalAnchor: horizontalEnd,
			verticalAnchor: "middle"
		};
		if (clamp && parentViewBox) {
			_result2.width = Math.max(_result2.x - parentViewBox.x, 0);
			_result2.height = height;
		}
		return _result2;
	}
	if (position === "right") {
		var _result3 = {
			x: middleX + midHeightWidth + horizontalOffset,
			y: y + height / 2,
			horizontalAnchor: horizontalStart,
			verticalAnchor: "middle"
		};
		if (clamp && parentViewBox) {
			_result3.width = Math.max(parentViewBox.x + parentViewBox.width - _result3.x, 0);
			_result3.height = height;
		}
		return _result3;
	}
	var sizeAttrs = clamp && parentViewBox ? {
		width: midHeightWidth,
		height
	} : {};
	if (position === "insideLeft") return _objectSpread$31({
		x: middleX + horizontalOffset,
		y: y + height / 2,
		horizontalAnchor: horizontalStart,
		verticalAnchor: "middle"
	}, sizeAttrs);
	if (position === "insideRight") return _objectSpread$31({
		x: middleX + midHeightWidth - horizontalOffset,
		y: y + height / 2,
		horizontalAnchor: horizontalEnd,
		verticalAnchor: "middle"
	}, sizeAttrs);
	if (position === "insideTop") return _objectSpread$31({
		x: upperX + upperWidth / 2,
		y: y + verticalOffset,
		horizontalAnchor: "middle",
		verticalAnchor: verticalStart
	}, sizeAttrs);
	if (position === "insideBottom") return _objectSpread$31({
		x: lowerX + lowerWidth / 2,
		y: y + height - verticalOffset,
		horizontalAnchor: "middle",
		verticalAnchor: verticalEnd
	}, sizeAttrs);
	if (position === "insideTopLeft") return _objectSpread$31({
		x: upperX + horizontalOffset,
		y: y + verticalOffset,
		horizontalAnchor: horizontalStart,
		verticalAnchor: verticalStart
	}, sizeAttrs);
	if (position === "insideTopRight") return _objectSpread$31({
		x: upperX + upperWidth - horizontalOffset,
		y: y + verticalOffset,
		horizontalAnchor: horizontalEnd,
		verticalAnchor: verticalStart
	}, sizeAttrs);
	if (position === "insideBottomLeft") return _objectSpread$31({
		x: lowerX + horizontalOffset,
		y: y + height - verticalOffset,
		horizontalAnchor: horizontalStart,
		verticalAnchor: verticalEnd
	}, sizeAttrs);
	if (position === "insideBottomRight") return _objectSpread$31({
		x: lowerX + lowerWidth - horizontalOffset,
		y: y + height - verticalOffset,
		horizontalAnchor: horizontalEnd,
		verticalAnchor: verticalEnd
	}, sizeAttrs);
	if (!!position && typeof position === "object" && (isNumber$1(position.x) || isPercent(position.x)) && (isNumber$1(position.y) || isPercent(position.y))) return _objectSpread$31({
		x: x + getPercentValue(position.x, midHeightWidth),
		y: y + getPercentValue(position.y, height),
		horizontalAnchor: "end",
		verticalAnchor: "end"
	}, sizeAttrs);
	return _objectSpread$31({
		x: centerX,
		y: y + height / 2,
		horizontalAnchor: "middle",
		verticalAnchor: "middle"
	}, sizeAttrs);
};
var _excluded$19 = ["labelRef"], _excluded2$8 = ["content"];
function _objectWithoutProperties$19(e, t) {
	if (null == e) return {};
	var o, r, i = _objectWithoutPropertiesLoose$19(e, t);
	if (Object.getOwnPropertySymbols) {
		var n = Object.getOwnPropertySymbols(e);
		for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
	}
	return i;
}
function _objectWithoutPropertiesLoose$19(r, e) {
	if (null == r) return {};
	var t = {};
	for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
		if (-1 !== e.indexOf(n)) continue;
		t[n] = r[n];
	}
	return t;
}
function ownKeys$30(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r) {
			return Object.getOwnPropertyDescriptor(e, r).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread$30(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys$30(Object(t), !0).forEach(function(r) {
			_defineProperty$30(e, r, t[r]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$30(Object(t)).forEach(function(r) {
			Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
		});
	}
	return e;
}
function _defineProperty$30(e, r, t) {
	return (r = _toPropertyKey$30(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}
function _toPropertyKey$30(t) {
	var i = _toPrimitive$30(t, "string");
	return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive$30(t, r) {
	if ("object" != typeof t || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != typeof i) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
function _extends$22() {
	return _extends$22 = Object.assign ? Object.assign.bind() : function(n) {
		for (var e = 1; e < arguments.length; e++) {
			var t = arguments[e];
			for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
		}
		return n;
	}, _extends$22.apply(null, arguments);
}
/**
* @inline
*/
/**
* @inline
*/
/**
* @inline
*/
var CartesianLabelContext = /* @__PURE__ */ (0, import_react.createContext)(null);
var CartesianLabelContextProvider = (_ref) => {
	var { x, y, upperWidth, lowerWidth, width, height, children } = _ref;
	var viewBox = (0, import_react.useMemo)(() => ({
		x,
		y,
		upperWidth,
		lowerWidth,
		width,
		height
	}), [
		x,
		y,
		upperWidth,
		lowerWidth,
		width,
		height
	]);
	return /* @__PURE__ */ import_react.createElement(CartesianLabelContext.Provider, { value: viewBox }, children);
};
var useCartesianLabelContext = () => {
	var labelChildContext = (0, import_react.useContext)(CartesianLabelContext);
	var chartContext = useViewBox();
	return labelChildContext || (chartContext ? cartesianViewBoxToTrapezoid(chartContext) : void 0);
};
var PolarLabelContext = /* @__PURE__ */ (0, import_react.createContext)(null);
var usePolarLabelContext = () => {
	var labelChildContext = (0, import_react.useContext)(PolarLabelContext);
	var chartContext = useAppSelector(selectPolarViewBox);
	return labelChildContext || chartContext;
};
var getLabel$1 = (props) => {
	var { value, formatter } = props;
	var label = isNullish(props.children) ? value : props.children;
	if (typeof formatter === "function") return formatter(label);
	return label;
};
var isLabelContentAFunction = (content) => {
	return content != null && typeof content === "function";
};
var getDeltaAngle$1 = (startAngle, endAngle) => {
	return mathSign(endAngle - startAngle) * Math.min(Math.abs(endAngle - startAngle), 360);
};
var renderRadialLabel = (labelProps, position, label, attrs, viewBox) => {
	var { offset, className } = labelProps;
	var { cx, cy, innerRadius, outerRadius, startAngle, endAngle, clockWise } = viewBox;
	var radius = (innerRadius + outerRadius) / 2;
	var deltaAngle = getDeltaAngle$1(startAngle, endAngle);
	var sign = deltaAngle >= 0 ? 1 : -1;
	var labelAngle, direction;
	switch (position) {
		case "insideStart":
			labelAngle = startAngle + sign * offset;
			direction = clockWise;
			break;
		case "insideEnd":
			labelAngle = endAngle - sign * offset;
			direction = !clockWise;
			break;
		case "end":
			labelAngle = endAngle + sign * offset;
			direction = clockWise;
			break;
		default: throw new Error("Unsupported position ".concat(position));
	}
	direction = deltaAngle <= 0 ? direction : !direction;
	var startPoint = polarToCartesian(cx, cy, radius, labelAngle);
	var endPoint = polarToCartesian(cx, cy, radius, labelAngle + (direction ? 1 : -1) * 359);
	var path = "M".concat(startPoint.x, ",").concat(startPoint.y, "\n    A").concat(radius, ",").concat(radius, ",0,1,").concat(direction ? 0 : 1, ",\n    ").concat(endPoint.x, ",").concat(endPoint.y);
	var id = isNullish(labelProps.id) ? uniqueId("recharts-radial-line-") : labelProps.id;
	return /* @__PURE__ */ import_react.createElement("text", _extends$22({}, attrs, {
		dominantBaseline: "central",
		className: clsx("recharts-radial-bar-label", className)
	}), /* @__PURE__ */ import_react.createElement("defs", null, /* @__PURE__ */ import_react.createElement("path", {
		id,
		d: path
	})), /* @__PURE__ */ import_react.createElement("textPath", { xlinkHref: "#".concat(id) }, label));
};
var getAttrsOfPolarLabel = (viewBox, offset, position) => {
	var { cx, cy, innerRadius, outerRadius, startAngle, endAngle } = viewBox;
	var midAngle = (startAngle + endAngle) / 2;
	if (position === "outside") {
		var { x: _x, y: _y } = polarToCartesian(cx, cy, outerRadius + offset, midAngle);
		return {
			x: _x,
			y: _y,
			textAnchor: _x >= cx ? "start" : "end",
			verticalAnchor: "middle"
		};
	}
	if (position === "center") return {
		x: cx,
		y: cy,
		textAnchor: "middle",
		verticalAnchor: "middle"
	};
	if (position === "centerTop") return {
		x: cx,
		y: cy,
		textAnchor: "middle",
		verticalAnchor: "start"
	};
	if (position === "centerBottom") return {
		x: cx,
		y: cy,
		textAnchor: "middle",
		verticalAnchor: "end"
	};
	var { x, y } = polarToCartesian(cx, cy, (innerRadius + outerRadius) / 2, midAngle);
	return {
		x,
		y,
		textAnchor: "middle",
		verticalAnchor: "middle"
	};
};
var isPolar = (viewBox) => viewBox != null && "cx" in viewBox && isNumber$1(viewBox.cx);
var defaultLabelProps = {
	angle: 0,
	offset: 5,
	zIndex: DefaultZIndexes.label,
	position: "middle",
	textBreakAll: false
};
function polarViewBoxToTrapezoid(viewBox) {
	if (!isPolar(viewBox)) return viewBox;
	var { cx, cy, outerRadius } = viewBox;
	var diameter = outerRadius * 2;
	return {
		x: cx - outerRadius,
		y: cy - outerRadius,
		width: diameter,
		upperWidth: diameter,
		lowerWidth: diameter,
		height: diameter
	};
}
/**
* @consumes CartesianViewBoxContext
* @consumes PolarViewBoxContext
* @consumes CartesianLabelContext
* @consumes PolarLabelContext
*/
function Label(outerProps) {
	var props = resolveDefaultProps(outerProps, defaultLabelProps);
	var { viewBox: viewBoxFromProps, parentViewBox, position, value, children, content, className = "", textBreakAll, labelRef } = props;
	var polarViewBox = usePolarLabelContext();
	var cartesianViewBox = useCartesianLabelContext();
	var resolvedViewBox = position === "center" ? cartesianViewBox : polarViewBox !== null && polarViewBox !== void 0 ? polarViewBox : cartesianViewBox;
	var viewBox, label, positionAttrs;
	if (viewBoxFromProps == null) viewBox = resolvedViewBox;
	else if (isPolar(viewBoxFromProps)) viewBox = viewBoxFromProps;
	else viewBox = cartesianViewBoxToTrapezoid(viewBoxFromProps);
	var cartesianBox = polarViewBoxToTrapezoid(viewBox);
	if (!viewBox || isNullish(value) && isNullish(children) && !/* @__PURE__ */ (0, import_react.isValidElement)(content) && typeof content !== "function") return null;
	var propsWithViewBox = _objectSpread$30(_objectSpread$30({}, props), {}, { viewBox });
	if (/* @__PURE__ */ (0, import_react.isValidElement)(content)) {
		var { labelRef: _ } = propsWithViewBox;
		return /* @__PURE__ */ (0, import_react.cloneElement)(content, _objectWithoutProperties$19(propsWithViewBox, _excluded$19));
	}
	if (typeof content === "function") {
		var { content: _2 } = propsWithViewBox;
		label = /* @__PURE__ */ (0, import_react.createElement)(content, _objectWithoutProperties$19(propsWithViewBox, _excluded2$8));
		if (/* @__PURE__ */ (0, import_react.isValidElement)(label)) return label;
	} else label = getLabel$1(props);
	var attrs = svgPropertiesAndEvents(props);
	if (isPolar(viewBox)) {
		if (position === "insideStart" || position === "insideEnd" || position === "end") return renderRadialLabel(props, position, label, attrs, viewBox);
		positionAttrs = getAttrsOfPolarLabel(viewBox, props.offset, props.position);
	} else {
		if (!cartesianBox) return null;
		var cartesianResult = getCartesianPosition({
			viewBox: cartesianBox,
			position,
			offset: props.offset,
			parentViewBox: isPolar(parentViewBox) ? void 0 : parentViewBox,
			clamp: true
		});
		positionAttrs = _objectSpread$30(_objectSpread$30({
			x: cartesianResult.x,
			y: cartesianResult.y,
			textAnchor: cartesianResult.horizontalAnchor,
			verticalAnchor: cartesianResult.verticalAnchor
		}, cartesianResult.width !== void 0 ? { width: cartesianResult.width } : {}), cartesianResult.height !== void 0 ? { height: cartesianResult.height } : {});
	}
	return /* @__PURE__ */ import_react.createElement(ZIndexLayer, { zIndex: props.zIndex }, /* @__PURE__ */ import_react.createElement(Text, _extends$22({
		ref: labelRef,
		className: clsx("recharts-label", className)
	}, attrs, positionAttrs, {
		textAnchor: isValidTextAnchor(attrs.textAnchor) ? attrs.textAnchor : positionAttrs.textAnchor,
		breakAll: textBreakAll
	}), label));
}
Label.displayName = "Label";
var parseLabel = (label, viewBox, labelRef) => {
	if (!label) return null;
	var commonProps = {
		viewBox,
		labelRef
	};
	if (label === true) return /* @__PURE__ */ import_react.createElement(Label, _extends$22({ key: "label-implicit" }, commonProps));
	if (isNumOrStr(label)) return /* @__PURE__ */ import_react.createElement(Label, _extends$22({
		key: "label-implicit",
		value: label
	}, commonProps));
	if (/* @__PURE__ */ (0, import_react.isValidElement)(label)) {
		if (label.type === Label) return /* @__PURE__ */ (0, import_react.cloneElement)(label, _objectSpread$30({ key: "label-implicit" }, commonProps));
		return /* @__PURE__ */ import_react.createElement(Label, _extends$22({
			key: "label-implicit",
			content: label
		}, commonProps));
	}
	if (isLabelContentAFunction(label)) return /* @__PURE__ */ import_react.createElement(Label, _extends$22({
		key: "label-implicit",
		content: label
	}, commonProps));
	if (label && typeof label === "object") return /* @__PURE__ */ import_react.createElement(Label, _extends$22({}, label, { key: "label-implicit" }, commonProps));
	return null;
};
function CartesianLabelFromLabelProp(_ref3) {
	var { label, labelRef } = _ref3;
	return parseLabel(label, useCartesianLabelContext(), labelRef) || null;
}
var _excluded$18 = ["valueAccessor"], _excluded2$7 = [
	"dataKey",
	"clockWise",
	"id",
	"textBreakAll",
	"zIndex"
];
function _extends$21() {
	return _extends$21 = Object.assign ? Object.assign.bind() : function(n) {
		for (var e = 1; e < arguments.length; e++) {
			var t = arguments[e];
			for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
		}
		return n;
	}, _extends$21.apply(null, arguments);
}
function _objectWithoutProperties$18(e, t) {
	if (null == e) return {};
	var o, r, i = _objectWithoutPropertiesLoose$18(e, t);
	if (Object.getOwnPropertySymbols) {
		var n = Object.getOwnPropertySymbols(e);
		for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
	}
	return i;
}
function _objectWithoutPropertiesLoose$18(r, e) {
	if (null == r) return {};
	var t = {};
	for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
		if (-1 !== e.indexOf(n)) continue;
		t[n] = r[n];
	}
	return t;
}
/**
* This is public API because we expose it as the valueAccessor parameter.
*
* The properties of "viewBox" are repeated as the root props of the entry object.
* So it doesn't matter if you read entry.x or entry.viewBox.x, they are the same.
*
* It's not necessary to pass redundant data, but we keep it for backward compatibility.
*/
/**
* LabelList props do not allow refs because the same props are reused in multiple elements so we don't have a good single place to ref to.
*/
/**
* This is the type accepted for the `label` prop on various graphical items.
* It accepts:
*
* boolean:
*    true = labels show,
*    false = labels don't show
* React element:
*    will be cloned with extra props
* function:
*    is used as <Label content={function} />, so this will be called once for each individual label (so typically once for each data point)
* object:
*    the props to be passed to a LabelList component
*
* @inline
*/
var defaultAccessor = (entry) => {
	var val = Array.isArray(entry.value) ? entry.value[entry.value.length - 1] : entry.value;
	if (isRenderableText(val)) return val;
};
var CartesianLabelListContext = /* @__PURE__ */ (0, import_react.createContext)(void 0);
var CartesianLabelListContextProvider = CartesianLabelListContext.Provider;
var PolarLabelListContext = /* @__PURE__ */ (0, import_react.createContext)(void 0);
PolarLabelListContext.Provider;
function useCartesianLabelListContext() {
	return (0, import_react.useContext)(CartesianLabelListContext);
}
function usePolarLabelListContext() {
	return (0, import_react.useContext)(PolarLabelListContext);
}
/**
* @consumes LabelListContext
*/
function LabelList(_ref) {
	var { valueAccessor = defaultAccessor } = _ref, restProps = _objectWithoutProperties$18(_ref, _excluded$18);
	var { dataKey, clockWise, id, textBreakAll, zIndex } = restProps, others = _objectWithoutProperties$18(restProps, _excluded2$7);
	var cartesianData = useCartesianLabelListContext();
	var polarData = usePolarLabelListContext();
	var data = cartesianData || polarData;
	if (!data || !data.length) return null;
	return /* @__PURE__ */ import_react.createElement(ZIndexLayer, { zIndex: zIndex !== null && zIndex !== void 0 ? zIndex : DefaultZIndexes.label }, /* @__PURE__ */ import_react.createElement(Layer, { className: "recharts-label-list" }, data.map((entry, index) => {
		var _restProps$fill;
		var value = isNullish(dataKey) ? valueAccessor(entry, index) : getValueByDataKey(entry.payload, dataKey);
		var idProps = isNullish(id) ? {} : { id: "".concat(id, "-").concat(index) };
		return /* @__PURE__ */ import_react.createElement(Label, _extends$21({ key: "label-".concat(index) }, svgPropertiesAndEvents(entry), others, idProps, {
			fill: (_restProps$fill = restProps.fill) !== null && _restProps$fill !== void 0 ? _restProps$fill : entry.fill,
			parentViewBox: entry.parentViewBox,
			value,
			textBreakAll,
			viewBox: entry.viewBox,
			index,
			zIndex: 0
		}));
	})));
}
LabelList.displayName = "LabelList";
function LabelListFromLabelProp(_ref2) {
	var { label } = _ref2;
	if (!label) return null;
	if (label === true) return /* @__PURE__ */ import_react.createElement(LabelList, { key: "labelList-implicit" });
	if (/* @__PURE__ */ import_react.isValidElement(label) || isLabelContentAFunction(label)) return /* @__PURE__ */ import_react.createElement(LabelList, {
		key: "labelList-implicit",
		content: label
	});
	if (typeof label === "object") return /* @__PURE__ */ import_react.createElement(LabelList, _extends$21({ key: "labelList-implicit" }, label, { type: String(label.type) }));
	return null;
}
function _extends$20() {
	return _extends$20 = Object.assign ? Object.assign.bind() : function(n) {
		for (var e = 1; e < arguments.length; e++) {
			var t = arguments[e];
			for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
		}
		return n;
	}, _extends$20.apply(null, arguments);
}
/**
* Renders a dot in the chart.
*
* This component accepts X and Y coordinates in pixels.
* If you need to position the rectangle based on your chart's data,
* consider using the {@link ReferenceDot} component instead.
*
* @param props
* @constructor
*/
var Dot = (props) => {
	var { cx, cy, r, className } = props;
	var layerClass = clsx("recharts-dot", className);
	if (isNumber$1(cx) && isNumber$1(cy) && isNumber$1(r)) return /* @__PURE__ */ import_react.createElement("circle", _extends$20({}, svgPropertiesNoEvents(props), adaptEventHandlers(props), {
		className: layerClass,
		cx,
		cy,
		r
	}));
	return null;
};
/**
* @deprecated instead find another approach that does not depend on displayName.
* Get the display name of a component
* @param  {Object} Comp Specified Component
* @return {String}      Display name of Component
*/
var getDisplayName = (Comp) => {
	if (typeof Comp === "string") return Comp;
	if (!Comp) return "";
	return Comp.displayName || Comp.name || "Component";
};
var lastChildren = null;
var lastResult = null;
/**
* @deprecated instead find another approach that does not require reading React Elements from DOM.
*
* @param children do not use
* @return deprecated do not use
*/
var toArray = (children) => {
	if (children === lastChildren && Array.isArray(lastResult)) return lastResult;
	var result = [];
	import_react.Children.forEach(children, (child) => {
		if (isNullish(child)) return;
		if ((0, import_react_is.isFragment)(child)) result = result.concat(toArray(child.props.children));
		else result.push(child);
	});
	lastResult = result;
	lastChildren = children;
	return result;
};
/**
* @deprecated instead find another approach that does not require reading React Elements from DOM.
*
* Find and return all matched children by type.
* `type` must be a React.ComponentType
*
* @param children do not use
* @param type do not use
* @return deprecated do not use
*/
function findAllByType(children, type) {
	var result = [];
	var types = [];
	if (Array.isArray(type)) types = type.map((t) => getDisplayName(t));
	else types = [getDisplayName(type)];
	toArray(children).forEach((child) => {
		var childType = get(child, "type.displayName") || get(child, "type.name");
		if (childType && types.indexOf(childType) !== -1) result.push(child);
	});
	return result;
}
var isClipDot = (dot) => {
	if (dot && typeof dot === "object" && "clipDot" in dot) return Boolean(dot.clipDot);
	return true;
};
var _excluded$17 = ["points"];
function ownKeys$29(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r) {
			return Object.getOwnPropertyDescriptor(e, r).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread$29(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys$29(Object(t), !0).forEach(function(r) {
			_defineProperty$29(e, r, t[r]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$29(Object(t)).forEach(function(r) {
			Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
		});
	}
	return e;
}
function _defineProperty$29(e, r, t) {
	return (r = _toPropertyKey$29(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}
function _toPropertyKey$29(t) {
	var i = _toPrimitive$29(t, "string");
	return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive$29(t, r) {
	if ("object" != typeof t || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != typeof i) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
function _extends$19() {
	return _extends$19 = Object.assign ? Object.assign.bind() : function(n) {
		for (var e = 1; e < arguments.length; e++) {
			var t = arguments[e];
			for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
		}
		return n;
	}, _extends$19.apply(null, arguments);
}
function _objectWithoutProperties$17(e, t) {
	if (null == e) return {};
	var o, r, i = _objectWithoutPropertiesLoose$17(e, t);
	if (Object.getOwnPropertySymbols) {
		var n = Object.getOwnPropertySymbols(e);
		for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
	}
	return i;
}
function _objectWithoutPropertiesLoose$17(r, e) {
	if (null == r) return {};
	var t = {};
	for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
		if (-1 !== e.indexOf(n)) continue;
		t[n] = r[n];
	}
	return t;
}
function DotItem(_ref) {
	var { option, dotProps, className } = _ref;
	if (/* @__PURE__ */ (0, import_react.isValidElement)(option)) return /* @__PURE__ */ (0, import_react.cloneElement)(option, dotProps);
	if (typeof option === "function") return option(dotProps);
	var finalClassName = clsx(className, typeof option !== "boolean" ? option.className : "");
	var _ref2 = dotProps !== null && dotProps !== void 0 ? dotProps : {}, { points } = _ref2, props = _objectWithoutProperties$17(_ref2, _excluded$17);
	return /* @__PURE__ */ import_react.createElement(Dot, _extends$19({}, props, { className: finalClassName }));
}
function shouldRenderDots(points, dot) {
	if (points == null) return false;
	if (dot) return true;
	return points.length === 1;
}
function Dots(_ref3) {
	var { points, dot, className, dotClassName, dataKey, baseProps, needClip, clipPathId, zIndex = DefaultZIndexes.scatter } = _ref3;
	if (!shouldRenderDots(points, dot)) return null;
	var clipDot = isClipDot(dot);
	var customDotProps = svgPropertiesAndEventsFromUnknown(dot);
	var dots = points.map((entry, i) => {
		var _entry$x, _entry$y;
		var dotProps = _objectSpread$29(_objectSpread$29(_objectSpread$29({ r: 3 }, baseProps), customDotProps), {}, {
			index: i,
			cx: (_entry$x = entry.x) !== null && _entry$x !== void 0 ? _entry$x : void 0,
			cy: (_entry$y = entry.y) !== null && _entry$y !== void 0 ? _entry$y : void 0,
			dataKey,
			value: entry.value,
			payload: entry.payload,
			points
		});
		return /* @__PURE__ */ import_react.createElement(DotItem, {
			key: "dot-".concat(i),
			option: dot,
			dotProps,
			className: dotClassName
		});
	});
	var layerProps = {};
	if (needClip && clipPathId != null) layerProps.clipPath = "url(#clipPath-".concat(clipDot ? "" : "dots-").concat(clipPathId, ")");
	return /* @__PURE__ */ import_react.createElement(ZIndexLayer, { zIndex }, /* @__PURE__ */ import_react.createElement(Layer, _extends$19({ className }, layerProps), dots));
}
/**
* This selector always returns the data with the indexes set by a Brush.
* Trouble is, that might or might not be what you want.
*
* In charts with Brush, you will sometimes want to select the full range of data, and sometimes the one decided by the Brush
* - even if the Brush is active, the panorama inside the Brush should show the full range of data.
*
* So instead of this selector, consider using either selectChartDataAndAlwaysIgnoreIndexes or selectChartDataWithIndexesIfNotInPanorama
*
* @param state RechartsRootState
* @returns data defined on the chart root element, such as BarChart or ScatterChart
*/
var selectChartDataWithIndexes = (state) => state.chartData;
/**
* This selector will always return the full range of data, ignoring the indexes set by a Brush.
* Useful for when you want to render the full range of data, even if a Brush is active.
* For example: in the Brush panorama, in Legend, in Tooltip.
*/
var selectChartDataAndAlwaysIgnoreIndexes = createSelector([selectChartDataWithIndexes], (dataState) => {
	var dataEndIndex = dataState.chartData != null ? dataState.chartData.length - 1 : 0;
	return {
		chartData: dataState.chartData,
		computedData: dataState.computedData,
		dataEndIndex,
		dataStartIndex: 0
	};
});
var selectChartDataWithIndexesIfNotInPanoramaPosition4 = (state, _unused1, _unused2, isPanorama) => {
	if (isPanorama) return selectChartDataAndAlwaysIgnoreIndexes(state);
	return selectChartDataWithIndexes(state);
};
var selectChartDataWithIndexesIfNotInPanoramaPosition3 = (state, _unused1, isPanorama) => {
	if (isPanorama) return selectChartDataAndAlwaysIgnoreIndexes(state);
	return selectChartDataWithIndexes(state);
};
function isWellFormedNumberDomain(v) {
	if (Array.isArray(v) && v.length === 2) {
		var [min, max] = v;
		if (isWellBehavedNumber(min) && isWellBehavedNumber(max)) return true;
	}
	return false;
}
function extendDomain(providedDomain, boundaryDomain, allowDataOverflow) {
	if (allowDataOverflow) return providedDomain;
	return [Math.min(providedDomain[0], boundaryDomain[0]), Math.max(providedDomain[1], boundaryDomain[1])];
}
/**
* So Recharts allows users to provide their own domains,
* but it also places some expectations on what the domain is.
* We can improve on the typescript typing, but we also need a runtime test
to observe that the user-provided domain is well-formed,
* that is: an array with exactly two numbers.
*
* This function does not accept data as an argument.
* This is to enable a performance optimization - if the domain is there,
* and we know what it is without traversing all the data,
* then we don't have to traverse all the data!
*
* If the user-provided domain is not well-formed,
* this function will return undefined - in which case we should traverse the data to calculate the real domain.
*
* This function is for parsing the numerical domain only.
*
* @param userDomain external prop, user provided, before validation. Can have various shapes: array, function, special magical strings inside too.
* @param allowDataOverflow boolean, provided by users. If true then the data domain wins
*
* @return [min, max] domain if it's well-formed; undefined if the domain is invalid
*/
function numericalDomainSpecifiedWithoutRequiringData(userDomain, allowDataOverflow) {
	if (!allowDataOverflow) return;
	if (typeof userDomain === "function") return;
	if (Array.isArray(userDomain) && userDomain.length === 2) {
		var [providedMin, providedMax] = userDomain;
		var finalMin, finalMax;
		if (isWellBehavedNumber(providedMin)) finalMin = providedMin;
		else if (typeof providedMin === "function") return;
		if (isWellBehavedNumber(providedMax)) finalMax = providedMax;
		else if (typeof providedMax === "function") return;
		var candidate = [finalMin, finalMax];
		if (isWellFormedNumberDomain(candidate)) return candidate;
	}
}
/**
* So Recharts allows users to provide their own domains,
* but it also places some expectations on what the domain is.
* We can improve on the typescript typing, but we also need a runtime test
* to observe that the user-provided domain is well-formed,
* that is: an array with exactly two numbers.
* If the user-provided domain is not well-formed,
* this function will return undefined - in which case we should traverse the data to calculate the real domain.
*
* This function is for parsing the numerical domain only.
*
* You are probably thinking, why does domain need tick count?
* Well it adjusts the domain based on where the "nice ticks" land, and nice ticks depend on the tick count.
*
* @param userDomain external prop, user provided, before validation. Can have various shapes: array, function, special magical strings inside too.
* @param dataDomain calculated from data. Can be undefined, as an option for performance optimization
* @param allowDataOverflow provided by users. If true then the data domain wins
*
* @return [min, max] domain if it's well-formed; undefined if the domain is invalid
*/
function parseNumericalUserDomain(userDomain, dataDomain, allowDataOverflow) {
	if (!allowDataOverflow && dataDomain == null) return;
	if (typeof userDomain === "function" && dataDomain != null) try {
		var result = userDomain(dataDomain, allowDataOverflow);
		if (isWellFormedNumberDomain(result)) return extendDomain(result, dataDomain, allowDataOverflow);
	} catch (_unused) {}
	if (Array.isArray(userDomain) && userDomain.length === 2) {
		var [providedMin, providedMax] = userDomain;
		var finalMin, finalMax;
		if (providedMin === "auto") {
			if (dataDomain != null) finalMin = Math.min(...dataDomain);
		} else if (isNumber$1(providedMin)) finalMin = providedMin;
		else if (typeof providedMin === "function") try {
			if (dataDomain != null) finalMin = providedMin(dataDomain === null || dataDomain === void 0 ? void 0 : dataDomain[0]);
		} catch (_unused2) {}
		else if (typeof providedMin === "string" && MIN_VALUE_REG.test(providedMin)) {
			var match = MIN_VALUE_REG.exec(providedMin);
			if (match == null || match[1] == null || dataDomain == null) finalMin = void 0;
			else {
				var value = +match[1];
				finalMin = dataDomain[0] - value;
			}
		} else finalMin = dataDomain === null || dataDomain === void 0 ? void 0 : dataDomain[0];
		if (providedMax === "auto") {
			if (dataDomain != null) finalMax = Math.max(...dataDomain);
		} else if (isNumber$1(providedMax)) finalMax = providedMax;
		else if (typeof providedMax === "function") try {
			if (dataDomain != null) finalMax = providedMax(dataDomain === null || dataDomain === void 0 ? void 0 : dataDomain[1]);
		} catch (_unused3) {}
		else if (typeof providedMax === "string" && MAX_VALUE_REG.test(providedMax)) {
			var _match = MAX_VALUE_REG.exec(providedMax);
			if (_match == null || _match[1] == null || dataDomain == null) finalMax = void 0;
			else {
				var _value = +_match[1];
				finalMax = dataDomain[1] + _value;
			}
		} else finalMax = dataDomain === null || dataDomain === void 0 ? void 0 : dataDomain[1];
		var candidate = [finalMin, finalMax];
		if (isWellFormedNumberDomain(candidate)) {
			if (dataDomain == null) return candidate;
			return extendDomain(candidate, dataDomain, allowDataOverflow);
		}
	}
}
/**
* @fileOverview Some common arithmetic methods
* @author xile611
* @date 2015-09-17
*/
/**
* Get the digit count of a number.
* If the absolute value is in the interval [0.1, 1), the result is 0.
* If the absolute value is in the interval [0.01, 0.1), the digit count is -1.
* If the absolute value is in the interval [0.001, 0.01), the digit count is -2.
*
* @param  {Number} value The number
* @return {Integer}      Digit count
*/
function getDigitCount(value) {
	var result;
	if (value === 0) result = 1;
	else result = Math.floor(new decimal_default(value).abs().log(10).toNumber()) + 1;
	return result;
}
/**
* Get the data in the interval [start, end) with a fixed step.
* Also handles JS calculation precision issues.
*
* @param  {Decimal} start Start point
* @param  {Decimal} end   End point, not included
* @param  {Decimal} step  Step size
* @return {Array}         Array of numbers
*/
function rangeStep(start, end, step) {
	var num = new decimal_default(start);
	var i = 0;
	var result = [];
	while (num.lt(end) && i < 1e5) {
		result.push(num.toNumber());
		num = num.add(step);
		i++;
	}
	return result;
}
/**
* @fileOverview calculate tick values of scale
* @author xile611, arcthur
* @date 2015-09-17
*/
/**
* Calculate a interval of a minimum value and a maximum value
*
* @param  {Number} min       The minimum value
* @param  {Number} max       The maximum value
* @return {Array} An interval
*/
var getValidInterval = (_ref) => {
	var [min, max] = _ref;
	var [validMin, validMax] = [min, max];
	if (min > max) [validMin, validMax] = [max, min];
	return [validMin, validMax];
};
/**
* Calculate the step which is easy to understand between ticks, like 10, 20, 25
*
* @param  roughStep        The rough step calculated by dividing the difference by the tickCount
* @param  allowDecimals    Allow the ticks to be decimals or not
* @param  correctionFactor A correction factor
* @return The step which is easy to understand between two ticks
*/
var getAdaptiveStep = (roughStep, allowDecimals, correctionFactor) => {
	if (roughStep.lte(0)) return new decimal_default(0);
	var digitCount = getDigitCount(roughStep.toNumber());
	var digitCountValue = new decimal_default(10).pow(digitCount);
	var stepRatio = roughStep.div(digitCountValue);
	var stepRatioScale = digitCount !== 1 ? .05 : .1;
	var formatStep = new decimal_default(Math.ceil(stepRatio.div(stepRatioScale).toNumber())).add(correctionFactor).mul(stepRatioScale).mul(digitCountValue);
	return allowDecimals ? new decimal_default(formatStep.toNumber()) : new decimal_default(Math.ceil(formatStep.toNumber()));
};
/**
* The snap125 step algorithm snaps to nice numbers (1, 2, 2.5, 5) at each
* order of magnitude, producing human-friendly tick intervals like
* 0, 5, 10, 15, 20 instead of 0, 4, 8, 12, 16.
*
* This is opt-in and can be enabled via the `niceTicks` prop on axis components.
*
* @param  roughStep        The rough step calculated by dividing the difference by the tickCount
* @param  allowDecimals    Allow the ticks to be decimals or not
* @param  correctionFactor A correction factor
* @return The step which is easy to understand between two ticks
*/
var getSnap125Step = (roughStep, allowDecimals, correctionFactor) => {
	var _NICE_STEPS$niceIdx;
	if (roughStep.lte(0)) return new decimal_default(0);
	var NICE_STEPS = [
		1,
		2,
		2.5,
		5
	];
	var roughNum = roughStep.toNumber();
	var exponent = Math.floor(new decimal_default(roughNum).abs().log(10).toNumber());
	var magnitude = new decimal_default(10).pow(exponent);
	var normalized = roughStep.div(magnitude).toNumber();
	var niceIdx = NICE_STEPS.findIndex((s) => s >= normalized - 1e-10);
	if (niceIdx === -1) {
		magnitude = magnitude.mul(10);
		niceIdx = 0;
	}
	niceIdx += correctionFactor;
	if (niceIdx >= NICE_STEPS.length) {
		var extraMag = Math.floor(niceIdx / NICE_STEPS.length);
		niceIdx %= NICE_STEPS.length;
		magnitude = magnitude.mul(new decimal_default(10).pow(extraMag));
	}
	var formatStep = new decimal_default((_NICE_STEPS$niceIdx = NICE_STEPS[niceIdx]) !== null && _NICE_STEPS$niceIdx !== void 0 ? _NICE_STEPS$niceIdx : 1).mul(magnitude);
	return allowDecimals ? formatStep : new decimal_default(Math.ceil(formatStep.toNumber()));
};
/**
* calculate the ticks when the minimum value equals to the maximum value
*
* @param  value         The minimum value which is also the maximum value
* @param  tickCount     The count of ticks
* @param  allowDecimals Allow the ticks to be decimals or not
* @return array of ticks
*/
var getTickOfSingleValue = (value, tickCount, allowDecimals) => {
	var step = new decimal_default(1);
	var middle = new decimal_default(value);
	if (!middle.isint() && allowDecimals) {
		var absVal = Math.abs(value);
		if (absVal < 1) {
			step = new decimal_default(10).pow(getDigitCount(value) - 1);
			middle = new decimal_default(Math.floor(middle.div(step).toNumber())).mul(step);
		} else if (absVal > 1) middle = new decimal_default(Math.floor(value));
	} else if (value === 0) middle = new decimal_default(Math.floor((tickCount - 1) / 2));
	else if (!allowDecimals) middle = new decimal_default(Math.floor(value));
	var middleIndex = Math.floor((tickCount - 1) / 2);
	var ticks = [];
	for (var i = 0; i < tickCount; i++) ticks.push(middle.add(new decimal_default(i - middleIndex).mul(step)).toNumber());
	return ticks;
};
/**
* Calculate the step
*
* @param  min              The minimum value of an interval
* @param  max              The maximum value of an interval
* @param  tickCount        The count of ticks
* @param  allowDecimals    Allow the ticks to be decimals or not
* @param  correctionFactor A correction factor
* @return The step, minimum value of ticks, maximum value of ticks
*/
var _calculateStep = function calculateStep(min, max, tickCount, allowDecimals) {
	var correctionFactor = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
	var stepFn = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : getAdaptiveStep;
	if (!Number.isFinite((max - min) / (tickCount - 1))) return {
		step: new decimal_default(0),
		tickMin: new decimal_default(0),
		tickMax: new decimal_default(0)
	};
	var step = stepFn(new decimal_default(max).sub(min).div(tickCount - 1), allowDecimals, correctionFactor);
	var middle;
	if (min <= 0 && max >= 0) middle = new decimal_default(0);
	else {
		middle = new decimal_default(min).add(max).div(2);
		middle = middle.sub(new decimal_default(middle).mod(step));
	}
	var belowCount = Math.ceil(middle.sub(min).div(step).toNumber());
	var upCount = Math.ceil(new decimal_default(max).sub(middle).div(step).toNumber());
	var scaleCount = belowCount + upCount + 1;
	if (scaleCount > tickCount) return _calculateStep(min, max, tickCount, allowDecimals, correctionFactor + 1, stepFn);
	if (scaleCount < tickCount) {
		upCount = max > 0 ? upCount + (tickCount - scaleCount) : upCount;
		belowCount = max > 0 ? belowCount : belowCount + (tickCount - scaleCount);
	}
	return {
		step,
		tickMin: middle.sub(new decimal_default(belowCount).mul(step)),
		tickMax: middle.add(new decimal_default(upCount).mul(step))
	};
};
var getNiceTickValues = function getNiceTickValues(_ref2) {
	var [min, max] = _ref2;
	var tickCount = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 6;
	var allowDecimals = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
	var niceTicksMode = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "auto";
	var count = Math.max(tickCount, 2);
	var [cormin, cormax] = getValidInterval([min, max]);
	if (cormin === -Infinity || cormax === Infinity) {
		var _values = cormax === Infinity ? [cormin, ...Array(tickCount - 1).fill(Infinity)] : [...Array(tickCount - 1).fill(-Infinity), cormax];
		return min > max ? _values.reverse() : _values;
	}
	if (cormin === cormax) return getTickOfSingleValue(cormin, tickCount, allowDecimals);
	var { step, tickMin, tickMax } = _calculateStep(cormin, cormax, count, allowDecimals, 0, niceTicksMode === "snap125" ? getSnap125Step : getAdaptiveStep);
	var values = rangeStep(tickMin, tickMax.add(new decimal_default(.1).mul(step)), step);
	return min > max ? values.reverse() : values;
};
/**
* Calculate the ticks of an interval.
* Ticks will be constrained to the interval [min, max] even if it makes them less rounded and nice.
*
* @param tuple of [min,max] min: The minimum value, max: The maximum value
* @param tickCount     The count of ticks. This function may return less than tickCount ticks if the interval is too small.
* @param allowDecimals Allow the ticks to be decimals or not
* @param niceTicksMode          The algorithm to use for calculating nice ticks. See {@link NiceTicksAlgorithm}.
* @return array of ticks
*/
var getTickValuesFixedDomain = function getTickValuesFixedDomain(_ref3, tickCount) {
	var [min, max] = _ref3;
	var allowDecimals = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
	var niceTicksMode = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "auto";
	var [cormin, cormax] = getValidInterval([min, max]);
	if (cormin === -Infinity || cormax === Infinity) return [min, max];
	if (cormin === cormax) return [cormin];
	var stepFn = niceTicksMode === "snap125" ? getSnap125Step : getAdaptiveStep;
	var count = Math.max(tickCount, 2);
	var step = stepFn(new decimal_default(cormax).sub(cormin).div(count - 1), allowDecimals, 0);
	var values = [...rangeStep(new decimal_default(cormin), new decimal_default(cormax), step), cormax];
	if (allowDecimals === false) values = values.map((value) => Math.round(value));
	return min > max ? values.reverse() : values;
};
var selectRootMaxBarSize = (state) => state.rootProps.maxBarSize;
var selectBarGap = (state) => state.rootProps.barGap;
var selectBarCategoryGap = (state) => state.rootProps.barCategoryGap;
var selectRootBarSize = (state) => state.rootProps.barSize;
var selectStackOffsetType = (state) => state.rootProps.stackOffset;
var selectReverseStackOrder = (state) => state.rootProps.reverseStackOrder;
var selectChartName = (state) => state.options.chartName;
var selectSyncId = (state) => state.rootProps.syncId;
var selectSyncMethod = (state) => state.rootProps.syncMethod;
var selectEventEmitter = (state) => state.options.eventEmitter;
var selectChartBaseValue = (state) => state.rootProps.baseValue;
var pickAxisType = (_state, axisType) => axisType;
var pickAxisId = (_state, _axisType, axisId) => axisId;
/**
* Returns identifier for stack series which is one individual graphical item in the stack.
* @param graphicalItem - The graphical item representing the series in the stack.
* @return The identifier for the series in the stack
*/
function getStackSeriesIdentifier(graphicalItem) {
	return graphicalItem === null || graphicalItem === void 0 ? void 0 : graphicalItem.id;
}
/**
* In a stacked chart, each graphical item has its own data. That data could be either:
* - defined on the chart root, in which case the item gets a unique dataKey
* - or defined on the item itself, in which case multiple items can share the same dataKey
*
* That means we cannot use the dataKey as a unique identifier for the item.
*
* This type represents a single data point in a stacked chart, where each key is a series identifier
* and the value is the numeric value for that series using the numerical axis dataKey.
*/
function combineDisplayedStackedData(stackedGraphicalItems, _ref, tooltipAxisSettings) {
	var { chartData = [] } = _ref;
	var { allowDuplicatedCategory, dataKey: tooltipDataKey } = tooltipAxisSettings;
	var knownItemsByDataKey = /* @__PURE__ */ new Map();
	stackedGraphicalItems.forEach((item) => {
		var _item$data;
		var resolvedData = (_item$data = item.data) !== null && _item$data !== void 0 ? _item$data : chartData;
		if (resolvedData == null || resolvedData.length === 0) return;
		var stackIdentifier = getStackSeriesIdentifier(item);
		resolvedData.forEach((entry, index) => {
			var tooltipValue = tooltipDataKey == null || allowDuplicatedCategory ? index : String(getValueByDataKey(entry, tooltipDataKey, null));
			var numericValue = getValueByDataKey(entry, item.dataKey, 0);
			var curr;
			if (knownItemsByDataKey.has(tooltipValue)) curr = knownItemsByDataKey.get(tooltipValue);
			else curr = {};
			Object.assign(curr, { [stackIdentifier]: numericValue });
			knownItemsByDataKey.set(tooltipValue, curr);
		});
	});
	return Array.from(knownItemsByDataKey.values());
}
/**
* Some graphical items allow data stacking. The stacks are optional,
* so all props here are optional too.
*/
/**
* Some graphical items allow data stacking.
* This interface is used to represent the items that are stacked
* because the user has provided the stackId and dataKey properties.
*/
function isStacked(graphicalItem) {
	return "stackId" in graphicalItem && graphicalItem.stackId != null && graphicalItem.dataKey != null;
}
var numberDomainEqualityCheck = (a, b) => {
	if (a === b) return true;
	if (a == null || b == null) return false;
	return a[0] === b[0] && a[1] === b[1];
};
/**
* angle, radius, X, Y, and Z axes all have domain and range and scale and associated settings
*/
/**
* Z axis is never displayed and so it lacks ticks and tick settings.
*/
var selectTooltipAxisType = (state) => {
	var layout = selectChartLayout(state);
	if (layout === "horizontal") return "xAxis";
	if (layout === "vertical") return "yAxis";
	if (layout === "centric") return "angleAxis";
	return "radiusAxis";
};
var selectTooltipAxisId = (state) => state.tooltip.settings.axisId;
/**
* This is internal representation of scale used in Recharts.
* Users will provide CustomScaleDefinition or a string, which we will parse into RechartsScale.
* Most importantly, RechartsScale is fully immutable - there are no setters that mutate the scale in place.
* This is important for React integration - if the scale changes, we want to trigger re-renders.
* Mutating the scale in place would not trigger re-renders, leading to stale UI.
*/
/**
* Position within a band for banded scales.
* In scales that are not banded, this parameter is ignored.
*
* @inline
*/
function rechartsScaleFactory(d3Scale) {
	if (d3Scale == null) return;
	var ticksFn = d3Scale.ticks;
	var bandwidthFn = d3Scale.bandwidth;
	var d3Range = d3Scale.range();
	var range = [Math.min(...d3Range), Math.max(...d3Range)];
	return {
		domain: () => d3Scale.domain(),
		range: function(_range) {
			function range() {
				return _range.apply(this, arguments);
			}
			range.toString = function() {
				return _range.toString();
			};
			return range;
		}(() => range),
		rangeMin: () => range[0],
		rangeMax: () => range[1],
		isInRange(value) {
			var first = range[0];
			var last = range[1];
			return first <= last ? value >= first && value <= last : value >= last && value <= first;
		},
		bandwidth: bandwidthFn ? () => bandwidthFn.call(d3Scale) : void 0,
		ticks: ticksFn ? (count) => ticksFn.call(d3Scale, count) : void 0,
		map: (input, options) => {
			var baseValue = d3Scale(input);
			if (baseValue == null) return;
			if (d3Scale.bandwidth && options !== null && options !== void 0 && options.position) {
				var bandWidth = d3Scale.bandwidth();
				switch (options.position) {
					case "middle":
						baseValue += bandWidth / 2;
						break;
					case "end":
						baseValue += bandWidth;
						break;
					default: break;
				}
			}
			return baseValue;
		}
	};
}
/**
* This function validates and transforms the axis domain so that it is safe to use in the provided scale.
*/
var combineCheckedDomain = (realScaleType, axisDomain) => {
	if (axisDomain == null) return;
	switch (realScaleType) {
		case "linear":
			if (!isWellFormedNumberDomain(axisDomain)) {
				var min, max;
				for (var i = 0; i < axisDomain.length; i++) {
					var value = axisDomain[i];
					if (!isWellBehavedNumber(value)) continue;
					if (min === void 0 || value < min) min = value;
					if (max === void 0 || value > max) max = value;
				}
				if (min !== void 0 && max !== void 0) return [min, max];
				return;
			}
			return axisDomain;
		default: return axisDomain;
	}
};
function getD3ScaleFromType(realScaleType) {
	if (realScaleType in d3_scale_exports) return d3_scale_exports[realScaleType]();
	var name = "scale".concat(upperFirst(realScaleType));
	if (name in d3_scale_exports) return d3_scale_exports[name]();
}
/**
* Converts external scale definition into internal RechartsScale definition.
* @param scale custom function scale - if you have the `string` from outside, use `combineRealScaleType` first which will validate it and return RechartsScaleType or undefined
* @param axisDomain
* @param axisRange
*/
function combineConfiguredScaleInternal(scale, axisDomain, axisRange) {
	if (typeof scale === "function") return scale.copy().domain(axisDomain).range(axisRange);
	if (scale == null) return;
	var d3ScaleFunction = getD3ScaleFromType(scale);
	if (d3ScaleFunction == null) return;
	d3ScaleFunction.domain(axisDomain).range(axisRange);
	return d3ScaleFunction;
}
function combineConfiguredScale(axis, realScaleType, axisDomain, axisRange) {
	if (axisDomain == null || axisRange == null) return;
	if (typeof axis.scale === "function") return combineConfiguredScaleInternal(axis.scale, axisDomain, axisRange);
	return combineConfiguredScaleInternal(realScaleType, axisDomain, axisRange);
}
function getD3ScaleName(name) {
	return "scale".concat(upperFirst(name));
}
function isSupportedScaleName(name) {
	return getD3ScaleName(name) in d3_scale_exports;
}
var combineRealScaleType = (axisConfig, hasBar, chartType) => {
	if (axisConfig == null) return;
	var { scale, type } = axisConfig;
	if (scale === "auto") {
		if (type === "category" && chartType && (chartType.indexOf("LineChart") >= 0 || chartType.indexOf("AreaChart") >= 0 || chartType.indexOf("ComposedChart") >= 0 && !hasBar)) return "point";
		if (type === "category") return "band";
		return "linear";
	}
	if (typeof scale === "string") return isSupportedScaleName(scale) ? scale : "point";
};
/**
* Binary search to find the index where x would fit in array a.
* Works for arrays that are sorted both ascending and descending.
*
* Unlike d3.bisect, this implementation handles both ascending and descending arrays.
*
* @param haystack Sorted array of numbers
* @param needle Number to find the insertion index for
* @returns Index where x would fit in array a
*/
function bisect(haystack, needle) {
	var lo = 0;
	var hi = haystack.length;
	var ascending = haystack[0] < haystack[haystack.length - 1];
	while (lo < hi) {
		var mid = Math.floor((lo + hi) / 2);
		if (ascending ? haystack[mid] < needle : haystack[mid] > needle) lo = mid + 1;
		else hi = mid;
	}
	return lo;
}
/**
* Computes an inverse scale function for categorical/ordinal scales.
* Uses bisect to find the closest domain value for a given pixel coordinate.
*/
function createCategoricalInverse(scale, allDataPointsOnAxis) {
	if (!scale) return;
	var domain = allDataPointsOnAxis !== null && allDataPointsOnAxis !== void 0 ? allDataPointsOnAxis : scale.domain();
	var pixelPositions = domain.map((d) => {
		var _scale;
		return (_scale = scale(d)) !== null && _scale !== void 0 ? _scale : 0;
	});
	var range = scale.range();
	if (domain.length === 0 || range.length < 2) return;
	return (pixelValue) => {
		var _pixelPositions, _pixelPositions$index;
		var index = bisect(pixelPositions, pixelValue);
		if (index <= 0) return domain[0];
		if (index >= domain.length) return domain[domain.length - 1];
		var leftPixel = (_pixelPositions = pixelPositions[index - 1]) !== null && _pixelPositions !== void 0 ? _pixelPositions : 0;
		var rightPixel = (_pixelPositions$index = pixelPositions[index]) !== null && _pixelPositions$index !== void 0 ? _pixelPositions$index : 0;
		if (Math.abs(pixelValue - leftPixel) <= Math.abs(pixelValue - rightPixel)) return domain[index - 1];
		return domain[index];
	};
}
function combineInverseScaleFunction(configuredScale) {
	if (configuredScale == null) return;
	if ("invert" in configuredScale && typeof configuredScale.invert === "function") return configuredScale.invert.bind(configuredScale);
	return createCategoricalInverse(configuredScale, void 0);
}
function ownKeys$28(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r) {
			return Object.getOwnPropertyDescriptor(e, r).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread$28(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys$28(Object(t), !0).forEach(function(r) {
			_defineProperty$28(e, r, t[r]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$28(Object(t)).forEach(function(r) {
			Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
		});
	}
	return e;
}
function _defineProperty$28(e, r, t) {
	return (r = _toPropertyKey$28(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}
function _toPropertyKey$28(t) {
	var i = _toPrimitive$28(t, "string");
	return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive$28(t, r) {
	if ("object" != typeof t || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != typeof i) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
var defaultNumericDomain = [0, "auto"];
/**
* If an axis is not explicitly defined as an element,
* we still need to render something in the chart and we need
* some object to hold the domain and default settings.
*/
var implicitXAxis = {
	allowDataOverflow: false,
	allowDecimals: true,
	allowDuplicatedCategory: true,
	angle: 0,
	dataKey: void 0,
	domain: void 0,
	height: 30,
	hide: true,
	id: 0,
	includeHidden: false,
	interval: "preserveEnd",
	minTickGap: 5,
	mirror: false,
	name: void 0,
	orientation: "bottom",
	padding: {
		left: 0,
		right: 0
	},
	reversed: false,
	scale: "auto",
	tick: true,
	tickCount: 5,
	tickFormatter: void 0,
	ticks: void 0,
	type: "category",
	unit: void 0,
	niceTicks: "auto"
};
var selectXAxisSettingsNoDefaults = (state, axisId) => {
	return state.cartesianAxis.xAxis[axisId];
};
var selectXAxisSettings = (state, axisId) => {
	var axis = selectXAxisSettingsNoDefaults(state, axisId);
	if (axis == null) return implicitXAxis;
	return axis;
};
/**
* If an axis is not explicitly defined as an element,
* we still need to render something in the chart and we need
* some object to hold the domain and default settings.
*/
var implicitYAxis = {
	allowDataOverflow: false,
	allowDecimals: true,
	allowDuplicatedCategory: true,
	angle: 0,
	dataKey: void 0,
	domain: defaultNumericDomain,
	hide: true,
	id: 0,
	includeHidden: false,
	interval: "preserveEnd",
	minTickGap: 5,
	mirror: false,
	name: void 0,
	orientation: "left",
	padding: {
		top: 0,
		bottom: 0
	},
	reversed: false,
	scale: "auto",
	tick: true,
	tickCount: 5,
	tickFormatter: void 0,
	ticks: void 0,
	type: "number",
	unit: void 0,
	niceTicks: "auto",
	width: 60
};
var selectYAxisSettingsNoDefaults = (state, axisId) => {
	return state.cartesianAxis.yAxis[axisId];
};
var selectYAxisSettings = (state, axisId) => {
	var axis = selectYAxisSettingsNoDefaults(state, axisId);
	if (axis == null) return implicitYAxis;
	return axis;
};
var implicitZAxis = {
	domain: [0, "auto"],
	includeHidden: false,
	reversed: false,
	allowDataOverflow: false,
	allowDuplicatedCategory: false,
	dataKey: void 0,
	id: 0,
	name: "",
	range: [64, 64],
	scale: "auto",
	type: "number",
	unit: ""
};
var selectZAxisSettings = (state, axisId) => {
	var axis = state.cartesianAxis.zAxis[axisId];
	if (axis == null) return implicitZAxis;
	return axis;
};
var selectBaseAxis = (state, axisType, axisId) => {
	switch (axisType) {
		case "xAxis": return selectXAxisSettings(state, axisId);
		case "yAxis": return selectYAxisSettings(state, axisId);
		case "zAxis": return selectZAxisSettings(state, axisId);
		case "angleAxis": return selectAngleAxis(state, axisId);
		case "radiusAxis": return selectRadiusAxis(state, axisId);
		default: throw new Error("Unexpected axis type: ".concat(axisType));
	}
};
var selectCartesianAxisSettings = (state, axisType, axisId) => {
	switch (axisType) {
		case "xAxis": return selectXAxisSettings(state, axisId);
		case "yAxis": return selectYAxisSettings(state, axisId);
		default: throw new Error("Unexpected axis type: ".concat(axisType));
	}
};
/**
* Selects either an X or Y axis. Doesn't work with Z axis - for that, instead use selectBaseAxis.
* @param state Root state
* @param axisType xAxis | yAxis
* @param axisId xAxisId | yAxisId
* @returns axis settings object
*/
var selectRenderableAxisSettings = (state, axisType, axisId) => {
	switch (axisType) {
		case "xAxis": return selectXAxisSettings(state, axisId);
		case "yAxis": return selectYAxisSettings(state, axisId);
		case "angleAxis": return selectAngleAxis(state, axisId);
		case "radiusAxis": return selectRadiusAxis(state, axisId);
		default: throw new Error("Unexpected axis type: ".concat(axisType));
	}
};
/**
* @param state RechartsRootState
* @return boolean true if there is at least one Bar or RadialBar
*/
var selectHasBar = (state) => state.graphicalItems.cartesianItems.some((item) => item.type === "bar") || state.graphicalItems.polarItems.some((item) => item.type === "radialBar");
/**
* Filters CartesianGraphicalItemSettings by the relevant axis ID
* @param axisType 'xAxis' | 'yAxis' | 'zAxis' | 'radiusAxis' | 'angleAxis'
* @param axisId from props, defaults to 0
*
* @returns Predicate function that return true for CartesianGraphicalItemSettings that are relevant to the specified axis
*/
function itemAxisPredicate(axisType, axisId) {
	return (item) => {
		switch (axisType) {
			case "xAxis": return "xAxisId" in item && item.xAxisId === axisId;
			case "yAxis": return "yAxisId" in item && item.yAxisId === axisId;
			case "zAxis": return "zAxisId" in item && item.zAxisId === axisId;
			case "angleAxis": return "angleAxisId" in item && item.angleAxisId === axisId;
			case "radiusAxis": return "radiusAxisId" in item && item.radiusAxisId === axisId;
			default: return false;
		}
	};
}
var selectUnfilteredCartesianItems = (state) => state.graphicalItems.cartesianItems;
var selectAxisPredicate = createSelector([pickAxisType, pickAxisId], itemAxisPredicate);
var combineGraphicalItemsSettings = (graphicalItems, axisSettings, axisPredicate) => graphicalItems.filter(axisPredicate).filter((item) => {
	if ((axisSettings === null || axisSettings === void 0 ? void 0 : axisSettings.includeHidden) === true) return true;
	return !item.hide;
});
var selectCartesianItemsSettings = createSelector([
	selectUnfilteredCartesianItems,
	selectBaseAxis,
	selectAxisPredicate
], combineGraphicalItemsSettings, { memoizeOptions: { resultEqualityCheck: emptyArraysAreEqualCheck } });
var selectStackedCartesianItemsSettings = createSelector([selectCartesianItemsSettings], (cartesianItems) => {
	return cartesianItems.filter((item) => item.type === "area" || item.type === "bar").filter(isStacked);
});
var filterGraphicalNotStackedItems = (cartesianItems) => cartesianItems.filter((item) => !("stackId" in item) || item.stackId === void 0);
var selectCartesianItemsSettingsExceptStacked = createSelector([selectCartesianItemsSettings], filterGraphicalNotStackedItems);
var combineGraphicalItemsData = (cartesianItems) => cartesianItems.map((item) => item.data).filter(Boolean).flat(1);
/**
* This is a "cheap" selector - it returns the data but doesn't iterate them, so it is not sensitive on the array length.
* Also does not apply dataKey yet.
* @param state RechartsRootState
* @returns data defined on the chart graphical items, such as Line or Scatter or Pie, and filtered with appropriate dataKey
*/
var selectCartesianGraphicalItemsData = createSelector([selectCartesianItemsSettings], combineGraphicalItemsData, { memoizeOptions: { resultEqualityCheck: emptyArraysAreEqualCheck } });
var combineDisplayedData = (graphicalItemsData, _ref) => {
	var { chartData = [], dataStartIndex, dataEndIndex } = _ref;
	if (graphicalItemsData.length > 0) return graphicalItemsData;
	return chartData.slice(dataStartIndex, dataEndIndex + 1);
};
/**
* This selector will return all data there is in the chart: graphical items, chart root, all together.
* Useful for figuring out an axis domain (because that needs to know of everything),
* not useful for rendering individual graphical elements (because they need to know which data is theirs and which is not).
*
* This function will discard the original indexes, so it is also not useful for anything that depends on ordering.
*/
var selectDisplayedData = createSelector([selectCartesianGraphicalItemsData, selectChartDataWithIndexesIfNotInPanoramaPosition4], combineDisplayedData);
var combineAppliedValues = (data, axisSettings, items) => {
	if ((axisSettings === null || axisSettings === void 0 ? void 0 : axisSettings.dataKey) != null) return data.map((item) => ({ value: getValueByDataKey(item, axisSettings.dataKey) }));
	if (items.length > 0) return items.map((item) => item.dataKey).flatMap((dataKey) => data.map((entry) => ({ value: getValueByDataKey(entry, dataKey) })));
	return data.map((entry) => ({ value: entry }));
};
/**
* This selector will return all values with the appropriate dataKey applied on them.
* Which dataKey is appropriate depends on where it is defined.
*
* This is an expensive selector - it will iterate all data and compute their value using the provided dataKey.
*/
var selectAllAppliedValues = createSelector([
	selectDisplayedData,
	selectBaseAxis,
	selectCartesianItemsSettings
], combineAppliedValues);
function makeNumber(val) {
	if (isNumOrStr(val) || val instanceof Date) {
		var n = Number(val);
		if (isWellBehavedNumber(n)) return n;
	}
}
function makeDomain(val) {
	if (Array.isArray(val)) {
		var attempt = [makeNumber(val[0]), makeNumber(val[1])];
		if (isWellFormedNumberDomain(attempt)) return attempt;
		return;
	}
	var n = makeNumber(val);
	if (n == null) return;
	return [n, n];
}
function onlyAllowNumbers(data) {
	return data.map(makeNumber).filter(isNotNil);
}
function sortBy$1(a, b) {
	var aNum = makeNumber(a);
	var bNum = makeNumber(b);
	if (aNum == null && bNum == null) return 0;
	if (aNum == null) return -1;
	if (bNum == null) return 1;
	return aNum - bNum;
}
var selectSortedDataPoints = createSelector([selectAllAppliedValues], (appliedData) => {
	return appliedData === null || appliedData === void 0 ? void 0 : appliedData.map((item) => item.value).sort(sortBy$1);
});
function isErrorBarRelevantForAxisType(axisType, errorBar) {
	switch (axisType) {
		case "xAxis": return errorBar.direction === "x";
		case "yAxis": return errorBar.direction === "y";
		default: return false;
	}
}
/**
* @param entry One item in the 'data' array. Could be anything really - this is defined externally. This is the raw, before dataKey application
* @param appliedValue This is the result of applying the 'main' dataKey on the `entry`.
* @param relevantErrorBars Error bars that are relevant for the current axis and layout and all that.
* @return either undefined or an array of ErrorValue
*/
function getErrorDomainByDataKey(entry, appliedValue, relevantErrorBars) {
	if (!relevantErrorBars || typeof appliedValue !== "number" || isNan(appliedValue)) return [];
	if (!relevantErrorBars.length) return [];
	return onlyAllowNumbers(relevantErrorBars.flatMap((eb) => {
		var errorValue = getValueByDataKey(entry, eb.dataKey);
		var lowBound, highBound;
		if (Array.isArray(errorValue)) [lowBound, highBound] = errorValue;
		else lowBound = highBound = errorValue;
		if (!isWellBehavedNumber(lowBound) || !isWellBehavedNumber(highBound)) return;
		return [appliedValue - lowBound, appliedValue + highBound];
	}));
}
var selectTooltipAxis = (state) => {
	return selectRenderableAxisSettings(state, selectTooltipAxisType(state), selectTooltipAxisId(state));
};
var selectTooltipAxisDataKey = createSelector([selectTooltipAxis], (axis) => axis === null || axis === void 0 ? void 0 : axis.dataKey);
var selectDisplayedStackedData = createSelector([
	selectStackedCartesianItemsSettings,
	selectChartDataWithIndexesIfNotInPanoramaPosition4,
	selectTooltipAxis
], combineDisplayedStackedData);
var combineStackGroups = (displayedData, items, stackOffsetType, reverseStackOrder) => {
	var itemsGroup = items.reduce((acc, item) => {
		if (item.stackId == null) return acc;
		var stack = acc[item.stackId];
		if (stack == null) stack = [];
		stack.push(item);
		acc[item.stackId] = stack;
		return acc;
	}, {});
	return Object.fromEntries(Object.entries(itemsGroup).map((_ref2) => {
		var [stackId, graphicalItems] = _ref2;
		var orderedGraphicalItems = reverseStackOrder ? [...graphicalItems].reverse() : graphicalItems;
		return [stackId, {
			stackedData: getStackedData(displayedData, orderedGraphicalItems.map(getStackSeriesIdentifier), stackOffsetType),
			graphicalItems: orderedGraphicalItems
		}];
	}));
};
/**
* Stack groups are groups of graphical items that stack on each other.
* Stack is a function of axis type (X, Y), axis ID, and stack ID.
* Graphical items that do not have a stack ID are not going to be present in stack groups.
*/
var selectStackGroups = createSelector([
	selectDisplayedStackedData,
	selectStackedCartesianItemsSettings,
	selectStackOffsetType,
	selectReverseStackOrder
], combineStackGroups);
var combineDomainOfStackGroups = (stackGroups, _ref3, axisType, domainFromUserPreference) => {
	var { dataStartIndex, dataEndIndex } = _ref3;
	if (domainFromUserPreference != null) return;
	if (axisType === "zAxis") return;
	var domainOfStackGroups = getDomainOfStackGroups(stackGroups, dataStartIndex, dataEndIndex);
	if (domainOfStackGroups != null && domainOfStackGroups[0] === 0 && domainOfStackGroups[1] === 0) return;
	return domainOfStackGroups;
};
var selectAllowsDataOverflow = createSelector([selectBaseAxis], (axisSettings) => axisSettings.allowDataOverflow);
var getDomainDefinition = (axisSettings) => {
	var _axisSettings$domain;
	if (axisSettings == null || !("domain" in axisSettings)) return defaultNumericDomain;
	if (axisSettings.domain != null) return axisSettings.domain;
	if ("ticks" in axisSettings && axisSettings.ticks != null) {
		if (axisSettings.type === "number") {
			var allValues = onlyAllowNumbers(axisSettings.ticks);
			return [Math.min(...allValues), Math.max(...allValues)];
		}
		if (axisSettings.type === "category") return axisSettings.ticks.map(String);
	}
	return (_axisSettings$domain = axisSettings === null || axisSettings === void 0 ? void 0 : axisSettings.domain) !== null && _axisSettings$domain !== void 0 ? _axisSettings$domain : defaultNumericDomain;
};
var selectDomainDefinition = createSelector([selectBaseAxis], getDomainDefinition);
/**
* Under certain circumstances, we can determine the domain without looking at the data at all.
* This is the case when the domain is explicitly specified as numbers, or when it is specified
* as 'auto' or 'dataMin'/'dataMax' and data overflow is not allowed.
*
* In that case, this function will return the domain, otherwise it returns undefined.
*
* This is an optimization to avoid unnecessary data processing.
* @param state
* @param axisType
* @param axisId
* @param isPanorama
*/
var selectDomainFromUserPreference = createSelector([selectDomainDefinition, selectAllowsDataOverflow], numericalDomainSpecifiedWithoutRequiringData);
var selectDomainOfStackGroups = createSelector([
	selectStackGroups,
	selectChartDataWithIndexes,
	pickAxisType,
	selectDomainFromUserPreference
], combineDomainOfStackGroups, { memoizeOptions: { resultEqualityCheck: numberDomainEqualityCheck } });
var selectAllErrorBarSettings = (state) => state.errorBars;
var combineRelevantErrorBarSettings = (cartesianItemsSettings, allErrorBarSettings, axisType) => {
	return cartesianItemsSettings.flatMap((item) => {
		return allErrorBarSettings[item.id];
	}).filter(Boolean).filter((e) => {
		return isErrorBarRelevantForAxisType(axisType, e);
	});
};
var mergeDomains = function mergeDomains() {
	for (var _len = arguments.length, domains = new Array(_len), _key = 0; _key < _len; _key++) domains[_key] = arguments[_key];
	var allDomains = domains.filter(Boolean);
	if (allDomains.length === 0) return;
	var allValues = allDomains.flat();
	return [Math.min(...allValues), Math.max(...allValues)];
};
var combineDomainOfAllAppliedNumericalValuesIncludingErrorValues = (data, axisSettings, items, errorBars, axisType) => {
	var lowerEnd, upperEnd;
	if (items.length > 0) data.forEach((entry) => {
		items.forEach((item) => {
			var _errorBars$item$id, _axisSettings$dataKey;
			var relevantErrorBars = (_errorBars$item$id = errorBars[item.id]) === null || _errorBars$item$id === void 0 ? void 0 : _errorBars$item$id.filter((errorBar) => isErrorBarRelevantForAxisType(axisType, errorBar));
			var valueByDataKey = getValueByDataKey(entry, (_axisSettings$dataKey = axisSettings.dataKey) !== null && _axisSettings$dataKey !== void 0 ? _axisSettings$dataKey : item.dataKey);
			var errorDomain = getErrorDomainByDataKey(entry, valueByDataKey, relevantErrorBars);
			if (errorDomain.length >= 2) {
				var localLower = Math.min(...errorDomain);
				var localUpper = Math.max(...errorDomain);
				if (lowerEnd == null || localLower < lowerEnd) lowerEnd = localLower;
				if (upperEnd == null || localUpper > upperEnd) upperEnd = localUpper;
			}
			var dataValueDomain = makeDomain(valueByDataKey);
			if (dataValueDomain != null) {
				lowerEnd = lowerEnd == null ? dataValueDomain[0] : Math.min(lowerEnd, dataValueDomain[0]);
				upperEnd = upperEnd == null ? dataValueDomain[1] : Math.max(upperEnd, dataValueDomain[1]);
			}
		});
	});
	if ((axisSettings === null || axisSettings === void 0 ? void 0 : axisSettings.dataKey) != null) data.forEach((item) => {
		var dataValueDomain = makeDomain(getValueByDataKey(item, axisSettings.dataKey));
		if (dataValueDomain != null) {
			lowerEnd = lowerEnd == null ? dataValueDomain[0] : Math.min(lowerEnd, dataValueDomain[0]);
			upperEnd = upperEnd == null ? dataValueDomain[1] : Math.max(upperEnd, dataValueDomain[1]);
		}
	});
	if (isWellBehavedNumber(lowerEnd) && isWellBehavedNumber(upperEnd)) return [lowerEnd, upperEnd];
};
var selectDomainOfAllAppliedNumericalValuesIncludingErrorValues$1 = createSelector([
	selectDisplayedData,
	selectBaseAxis,
	selectCartesianItemsSettingsExceptStacked,
	selectAllErrorBarSettings,
	pickAxisType
], combineDomainOfAllAppliedNumericalValuesIncludingErrorValues, { memoizeOptions: { resultEqualityCheck: numberDomainEqualityCheck } });
function onlyAllowNumbersAndStringsAndDates(item) {
	var { value } = item;
	if (isNumOrStr(value) || value instanceof Date) return value;
}
var computeDomainOfTypeCategory = (allDataSquished, axisSettings, isCategorical) => {
	var categoricalDomain = allDataSquished.map(onlyAllowNumbersAndStringsAndDates).filter((v) => v != null);
	if (isCategorical && (axisSettings.dataKey == null || axisSettings.allowDuplicatedCategory && hasDuplicate(categoricalDomain))) return range(0, allDataSquished.length);
	if (axisSettings.allowDuplicatedCategory) return categoricalDomain;
	return Array.from(new Set(categoricalDomain));
};
var selectReferenceDots = (state) => state.referenceElements.dots;
var filterReferenceElements = (elements, axisType, axisId) => {
	return elements.filter((el) => el.ifOverflow === "extendDomain").filter((el) => {
		if (axisType === "xAxis") return el.xAxisId === axisId;
		return el.yAxisId === axisId;
	});
};
var selectReferenceDotsByAxis = createSelector([
	selectReferenceDots,
	pickAxisType,
	pickAxisId
], filterReferenceElements);
var selectReferenceAreas = (state) => state.referenceElements.areas;
var selectReferenceAreasByAxis = createSelector([
	selectReferenceAreas,
	pickAxisType,
	pickAxisId
], filterReferenceElements);
var selectReferenceLines = (state) => state.referenceElements.lines;
var selectReferenceLinesByAxis = createSelector([
	selectReferenceLines,
	pickAxisType,
	pickAxisId
], filterReferenceElements);
var combineDotsDomain = (dots, axisType) => {
	if (dots == null) return;
	var allCoords = onlyAllowNumbers(dots.map((dot) => axisType === "xAxis" ? dot.x : dot.y));
	if (allCoords.length === 0) return;
	return [Math.min(...allCoords), Math.max(...allCoords)];
};
var selectReferenceDotsDomain = createSelector(selectReferenceDotsByAxis, pickAxisType, combineDotsDomain);
var combineAreasDomain = (areas, axisType) => {
	if (areas == null) return;
	var allCoords = onlyAllowNumbers(areas.flatMap((area) => [axisType === "xAxis" ? area.x1 : area.y1, axisType === "xAxis" ? area.x2 : area.y2]));
	if (allCoords.length === 0) return;
	return [Math.min(...allCoords), Math.max(...allCoords)];
};
var selectReferenceAreasDomain = createSelector([selectReferenceAreasByAxis, pickAxisType], combineAreasDomain);
function extractXCoordinates(line) {
	var _line$segment;
	if (line.x != null) return onlyAllowNumbers([line.x]);
	var segmentCoordinates = (_line$segment = line.segment) === null || _line$segment === void 0 ? void 0 : _line$segment.map((s) => s.x);
	if (segmentCoordinates == null || segmentCoordinates.length === 0) return [];
	return onlyAllowNumbers(segmentCoordinates);
}
function extractYCoordinates(line) {
	var _line$segment2;
	if (line.y != null) return onlyAllowNumbers([line.y]);
	var segmentCoordinates = (_line$segment2 = line.segment) === null || _line$segment2 === void 0 ? void 0 : _line$segment2.map((s) => s.y);
	if (segmentCoordinates == null || segmentCoordinates.length === 0) return [];
	return onlyAllowNumbers(segmentCoordinates);
}
var combineLinesDomain = (lines, axisType) => {
	if (lines == null) return;
	var allCoords = lines.flatMap((line) => axisType === "xAxis" ? extractXCoordinates(line) : extractYCoordinates(line));
	if (allCoords.length === 0) return;
	return [Math.min(...allCoords), Math.max(...allCoords)];
};
var selectReferenceElementsDomain = createSelector(selectReferenceDotsDomain, createSelector([selectReferenceLinesByAxis, pickAxisType], combineLinesDomain), selectReferenceAreasDomain, (dotsDomain, linesDomain, areasDomain) => {
	return mergeDomains(dotsDomain, areasDomain, linesDomain);
});
var combineNumericalDomain = (axisSettings, domainDefinition, domainFromUserPreference, domainOfStackGroups, dataAndErrorBarsDomain, referenceElementsDomain, layout, axisType) => {
	if (domainFromUserPreference != null) return domainFromUserPreference;
	return parseNumericalUserDomain(domainDefinition, layout === "vertical" && axisType === "xAxis" || layout === "horizontal" && axisType === "yAxis" ? mergeDomains(domainOfStackGroups, referenceElementsDomain, dataAndErrorBarsDomain) : mergeDomains(referenceElementsDomain, dataAndErrorBarsDomain), axisSettings.allowDataOverflow);
};
var selectNumericalDomain = createSelector([
	selectBaseAxis,
	selectDomainDefinition,
	selectDomainFromUserPreference,
	selectDomainOfStackGroups,
	selectDomainOfAllAppliedNumericalValuesIncludingErrorValues$1,
	selectReferenceElementsDomain,
	selectChartLayout,
	pickAxisType
], combineNumericalDomain, { memoizeOptions: { resultEqualityCheck: numberDomainEqualityCheck } });
/**
* Expand by design maps everything between 0 and 1,
* there is nothing to compute.
* See https://d3js.org/d3-shape/stack#stack-offsets
*/
var expandDomain = [0, 1];
var combineAxisDomain = (axisSettings, layout, displayedData, allAppliedValues, stackOffsetType, axisType, numericalDomain) => {
	if ((axisSettings == null || displayedData == null || displayedData.length === 0) && numericalDomain === void 0) return;
	var { dataKey, type } = axisSettings;
	var isCategorical = isCategoricalAxis(layout, axisType);
	if (isCategorical && dataKey == null) {
		var _displayedData$length;
		return range(0, (_displayedData$length = displayedData === null || displayedData === void 0 ? void 0 : displayedData.length) !== null && _displayedData$length !== void 0 ? _displayedData$length : 0);
	}
	if (type === "category") return computeDomainOfTypeCategory(allAppliedValues, axisSettings, isCategorical);
	if (stackOffsetType === "expand") return expandDomain;
	return numericalDomain;
};
var selectAxisDomain = createSelector([
	selectBaseAxis,
	selectChartLayout,
	selectDisplayedData,
	selectAllAppliedValues,
	selectStackOffsetType,
	pickAxisType,
	selectNumericalDomain
], combineAxisDomain);
var selectRealScaleType = createSelector([
	selectBaseAxis,
	selectHasBar,
	selectChartName
], combineRealScaleType);
var combineNiceTicks = (axisDomain, axisSettings, realScaleType) => {
	var { niceTicks } = axisSettings;
	if (niceTicks === "none") return;
	var domainDefinition = getDomainDefinition(axisSettings);
	var hasDomainAutoKeyword = Array.isArray(domainDefinition) && (domainDefinition[0] === "auto" || domainDefinition[1] === "auto");
	if ((niceTicks === "snap125" || niceTicks === "adaptive") && axisSettings != null && axisSettings.tickCount && isWellFormedNumberDomain(axisDomain)) {
		if (hasDomainAutoKeyword) return getNiceTickValues(axisDomain, axisSettings.tickCount, axisSettings.allowDecimals, niceTicks);
		if (axisSettings.type === "number") return getTickValuesFixedDomain(axisDomain, axisSettings.tickCount, axisSettings.allowDecimals, niceTicks);
	}
	if (niceTicks === "auto" && realScaleType === "linear" && axisSettings != null && axisSettings.tickCount) {
		if (hasDomainAutoKeyword && isWellFormedNumberDomain(axisDomain)) return getNiceTickValues(axisDomain, axisSettings.tickCount, axisSettings.allowDecimals, "adaptive");
		if (axisSettings.type === "number" && isWellFormedNumberDomain(axisDomain)) return getTickValuesFixedDomain(axisDomain, axisSettings.tickCount, axisSettings.allowDecimals, "adaptive");
	}
};
var selectNiceTicks = createSelector([
	selectAxisDomain,
	selectRenderableAxisSettings,
	selectRealScaleType
], combineNiceTicks);
var combineAxisDomainWithNiceTicks = (axisSettings, domain, niceTicks, axisType) => {
	if (axisType !== "angleAxis" && (axisSettings === null || axisSettings === void 0 ? void 0 : axisSettings.type) === "number" && isWellFormedNumberDomain(domain) && Array.isArray(niceTicks) && niceTicks.length > 0) {
		var _niceTicks$, _niceTicks;
		var minFromDomain = domain[0];
		var minFromTicks = (_niceTicks$ = niceTicks[0]) !== null && _niceTicks$ !== void 0 ? _niceTicks$ : 0;
		var maxFromDomain = domain[1];
		var maxFromTicks = (_niceTicks = niceTicks[niceTicks.length - 1]) !== null && _niceTicks !== void 0 ? _niceTicks : 0;
		return [Math.min(minFromDomain, minFromTicks), Math.max(maxFromDomain, maxFromTicks)];
	}
	return domain;
};
var selectAxisDomainIncludingNiceTicks = createSelector([
	selectBaseAxis,
	selectAxisDomain,
	selectNiceTicks,
	pickAxisType
], combineAxisDomainWithNiceTicks);
var selectCalculatedPadding = createSelector(createSelector(selectAllAppliedValues, selectBaseAxis, (allDataSquished, axisSettings) => {
	if (!axisSettings || axisSettings.type !== "number") return;
	var smallestDistanceBetweenValues = Infinity;
	var sortedValues = Array.from(onlyAllowNumbers(allDataSquished.map((d) => d.value))).sort((a, b) => a - b);
	var first = sortedValues[0];
	var last = sortedValues[sortedValues.length - 1];
	if (first == null || last == null) return Infinity;
	var diff = last - first;
	if (diff === 0) return Infinity;
	for (var i = 0; i < sortedValues.length - 1; i++) {
		var curr = sortedValues[i];
		var next = sortedValues[i + 1];
		if (curr == null || next == null) continue;
		var distance = next - curr;
		smallestDistanceBetweenValues = Math.min(smallestDistanceBetweenValues, distance);
	}
	return smallestDistanceBetweenValues / diff;
}), selectChartLayout, selectBarCategoryGap, selectChartOffsetInternal, (_1, _2, _3, _4, padding) => padding, (smallestDistanceInPercent, layout, barCategoryGap, offset, padding) => {
	if (!isWellBehavedNumber(smallestDistanceInPercent)) return 0;
	var rangeWidth = layout === "vertical" ? offset.height : offset.width;
	if (padding === "gap") return smallestDistanceInPercent * rangeWidth / 2;
	if (padding === "no-gap") {
		var gap = getPercentValue(barCategoryGap, smallestDistanceInPercent * rangeWidth);
		var halfBand = smallestDistanceInPercent * rangeWidth / 2;
		return halfBand - gap - (halfBand - gap) / rangeWidth * gap;
	}
	return 0;
});
var selectCalculatedXAxisPadding = (state, axisId, isPanorama) => {
	var xAxisSettings = selectXAxisSettings(state, axisId);
	if (xAxisSettings == null || typeof xAxisSettings.padding !== "string") return 0;
	return selectCalculatedPadding(state, "xAxis", axisId, isPanorama, xAxisSettings.padding);
};
var selectCalculatedYAxisPadding = (state, axisId, isPanorama) => {
	var yAxisSettings = selectYAxisSettings(state, axisId);
	if (yAxisSettings == null || typeof yAxisSettings.padding !== "string") return 0;
	return selectCalculatedPadding(state, "yAxis", axisId, isPanorama, yAxisSettings.padding);
};
var selectXAxisPadding = createSelector(selectXAxisSettings, selectCalculatedXAxisPadding, (xAxisSettings, calculated) => {
	var _padding$left, _padding$right;
	if (xAxisSettings == null) return {
		left: 0,
		right: 0
	};
	var { padding } = xAxisSettings;
	if (typeof padding === "string") return {
		left: calculated,
		right: calculated
	};
	return {
		left: ((_padding$left = padding.left) !== null && _padding$left !== void 0 ? _padding$left : 0) + calculated,
		right: ((_padding$right = padding.right) !== null && _padding$right !== void 0 ? _padding$right : 0) + calculated
	};
});
var selectYAxisPadding = createSelector(selectYAxisSettings, selectCalculatedYAxisPadding, (yAxisSettings, calculated) => {
	var _padding$top, _padding$bottom;
	if (yAxisSettings == null) return {
		top: 0,
		bottom: 0
	};
	var { padding } = yAxisSettings;
	if (typeof padding === "string") return {
		top: calculated,
		bottom: calculated
	};
	return {
		top: ((_padding$top = padding.top) !== null && _padding$top !== void 0 ? _padding$top : 0) + calculated,
		bottom: ((_padding$bottom = padding.bottom) !== null && _padding$bottom !== void 0 ? _padding$bottom : 0) + calculated
	};
});
var selectXAxisRange = createSelector([
	selectChartOffsetInternal,
	selectXAxisPadding,
	selectBrushDimensions,
	selectBrushSettings,
	(_state, _axisId, isPanorama) => isPanorama
], (offset, padding, brushDimensions, _ref4, isPanorama) => {
	var { padding: brushPadding } = _ref4;
	if (isPanorama) return [brushPadding.left, brushDimensions.width - brushPadding.right];
	return [offset.left + padding.left, offset.left + offset.width - padding.right];
});
var selectYAxisRange = createSelector([
	selectChartOffsetInternal,
	selectChartLayout,
	selectYAxisPadding,
	selectBrushDimensions,
	selectBrushSettings,
	(_state, _axisId, isPanorama) => isPanorama
], (offset, layout, padding, brushDimensions, _ref5, isPanorama) => {
	var { padding: brushPadding } = _ref5;
	if (isPanorama) return [brushDimensions.height - brushPadding.bottom, brushPadding.top];
	if (layout === "horizontal") return [offset.top + offset.height - padding.bottom, offset.top + padding.top];
	return [offset.top + padding.top, offset.top + offset.height - padding.bottom];
});
var selectAxisRange = (state, axisType, axisId, isPanorama) => {
	var _selectZAxisSettings;
	switch (axisType) {
		case "xAxis": return selectXAxisRange(state, axisId, isPanorama);
		case "yAxis": return selectYAxisRange(state, axisId, isPanorama);
		case "zAxis": return (_selectZAxisSettings = selectZAxisSettings(state, axisId)) === null || _selectZAxisSettings === void 0 ? void 0 : _selectZAxisSettings.range;
		case "angleAxis": return selectAngleAxisRange(state);
		case "radiusAxis": return selectRadiusAxisRange(state, axisId);
		default: return;
	}
};
var selectAxisRangeWithReverse = createSelector([selectBaseAxis, selectAxisRange], combineAxisRangeWithReverse);
var selectConfiguredScale = createSelector([
	selectBaseAxis,
	selectRealScaleType,
	createSelector([selectRealScaleType, selectAxisDomainIncludingNiceTicks], combineCheckedDomain),
	selectAxisRangeWithReverse
], combineConfiguredScale);
var combineCategoricalDomain = (layout, appliedValues, axis, axisType) => {
	if (axis == null || axis.dataKey == null) return;
	var { type, scale } = axis;
	if (isCategoricalAxis(layout, axisType) && (type === "number" || scale !== "auto")) return appliedValues.map((d) => d.value);
};
var selectCategoricalDomain = createSelector([
	selectChartLayout,
	selectAllAppliedValues,
	selectRenderableAxisSettings,
	pickAxisType
], combineCategoricalDomain);
var selectAxisScale = createSelector([selectConfiguredScale], rechartsScaleFactory);
createSelector([selectConfiguredScale], combineInverseScaleFunction);
createSelector([selectConfiguredScale, selectSortedDataPoints], createCategoricalInverse);
createSelector([
	selectCartesianItemsSettings,
	selectAllErrorBarSettings,
	pickAxisType
], combineRelevantErrorBarSettings);
function compareIds(a, b) {
	if (a.id < b.id) return -1;
	if (a.id > b.id) return 1;
	return 0;
}
var pickAxisOrientation = (_state, orientation) => orientation;
var pickMirror = (_state, _orientation, mirror) => mirror;
var selectAllXAxesWithOffsetType = createSelector(selectAllXAxes, pickAxisOrientation, pickMirror, (allAxes, orientation, mirror) => allAxes.filter((axis) => axis.orientation === orientation).filter((axis) => axis.mirror === mirror).sort(compareIds));
var selectAllYAxesWithOffsetType = createSelector(selectAllYAxes, pickAxisOrientation, pickMirror, (allAxes, orientation, mirror) => allAxes.filter((axis) => axis.orientation === orientation).filter((axis) => axis.mirror === mirror).sort(compareIds));
var getXAxisSize = (offset, axisSettings) => {
	return {
		width: offset.width,
		height: axisSettings.height
	};
};
var getYAxisSize = (offset, axisSettings) => {
	return {
		width: typeof axisSettings.width === "number" ? axisSettings.width : 60,
		height: offset.height
	};
};
var selectXAxisSize = createSelector(selectChartOffsetInternal, selectXAxisSettings, getXAxisSize);
var combineXAxisPositionStartingPoint = (offset, orientation, chartHeight) => {
	switch (orientation) {
		case "top": return offset.top;
		case "bottom": return chartHeight - offset.bottom;
		default: return 0;
	}
};
var combineYAxisPositionStartingPoint = (offset, orientation, chartWidth) => {
	switch (orientation) {
		case "left": return offset.left;
		case "right": return chartWidth - offset.right;
		default: return 0;
	}
};
var selectAllXAxesOffsetSteps = createSelector(selectChartHeight, selectChartOffsetInternal, selectAllXAxesWithOffsetType, pickAxisOrientation, pickMirror, (chartHeight, offset, allAxesWithSameOffsetType, orientation, mirror) => {
	var steps = {};
	var position;
	allAxesWithSameOffsetType.forEach((axis) => {
		var axisSize = getXAxisSize(offset, axis);
		if (position == null) position = combineXAxisPositionStartingPoint(offset, orientation, chartHeight);
		var needSpace = orientation === "top" && !mirror || orientation === "bottom" && mirror;
		steps[axis.id] = position - Number(needSpace) * axisSize.height;
		position += (needSpace ? -1 : 1) * axisSize.height;
	});
	return steps;
});
var selectAllYAxesOffsetSteps = createSelector(selectChartWidth, selectChartOffsetInternal, selectAllYAxesWithOffsetType, pickAxisOrientation, pickMirror, (chartWidth, offset, allAxesWithSameOffsetType, orientation, mirror) => {
	var steps = {};
	var position;
	allAxesWithSameOffsetType.forEach((axis) => {
		var axisSize = getYAxisSize(offset, axis);
		if (position == null) position = combineYAxisPositionStartingPoint(offset, orientation, chartWidth);
		var needSpace = orientation === "left" && !mirror || orientation === "right" && mirror;
		steps[axis.id] = position - Number(needSpace) * axisSize.width;
		position += (needSpace ? -1 : 1) * axisSize.width;
	});
	return steps;
});
var selectXAxisOffsetSteps = (state, axisId) => {
	var axisSettings = selectXAxisSettings(state, axisId);
	if (axisSettings == null) return;
	return selectAllXAxesOffsetSteps(state, axisSettings.orientation, axisSettings.mirror);
};
var selectXAxisPosition = createSelector([
	selectChartOffsetInternal,
	selectXAxisSettings,
	selectXAxisOffsetSteps,
	(_, axisId) => axisId
], (offset, axisSettings, allSteps, axisId) => {
	if (axisSettings == null) return;
	var stepOfThisAxis = allSteps === null || allSteps === void 0 ? void 0 : allSteps[axisId];
	if (stepOfThisAxis == null) return {
		x: offset.left,
		y: 0
	};
	return {
		x: offset.left,
		y: stepOfThisAxis
	};
});
var selectYAxisOffsetSteps = (state, axisId) => {
	var axisSettings = selectYAxisSettings(state, axisId);
	if (axisSettings == null) return;
	return selectAllYAxesOffsetSteps(state, axisSettings.orientation, axisSettings.mirror);
};
var selectYAxisPosition = createSelector([
	selectChartOffsetInternal,
	selectYAxisSettings,
	selectYAxisOffsetSteps,
	(_, axisId) => axisId
], (offset, axisSettings, allSteps, axisId) => {
	if (axisSettings == null) return;
	var stepOfThisAxis = allSteps === null || allSteps === void 0 ? void 0 : allSteps[axisId];
	if (stepOfThisAxis == null) return {
		x: 0,
		y: offset.top
	};
	return {
		x: stepOfThisAxis,
		y: offset.top
	};
});
var selectYAxisSize = createSelector(selectChartOffsetInternal, selectYAxisSettings, (offset, axisSettings) => {
	return {
		width: typeof axisSettings.width === "number" ? axisSettings.width : 60,
		height: offset.height
	};
});
var selectCartesianAxisSize = (state, axisType, axisId) => {
	switch (axisType) {
		case "xAxis": return selectXAxisSize(state, axisId).width;
		case "yAxis": return selectYAxisSize(state, axisId).height;
		default: return;
	}
};
var combineDuplicateDomain = (chartLayout, appliedValues, axis, axisType) => {
	if (axis == null) return;
	var { allowDuplicatedCategory, type, dataKey } = axis;
	var isCategorical = isCategoricalAxis(chartLayout, axisType);
	var allData = appliedValues.map((av) => av.value);
	if (dataKey && isCategorical && type === "category" && allowDuplicatedCategory && hasDuplicate(allData)) return allData;
};
var selectDuplicateDomain = createSelector([
	selectChartLayout,
	selectAllAppliedValues,
	selectBaseAxis,
	pickAxisType
], combineDuplicateDomain);
var selectAxisPropsNeededForCartesianGridTicksGenerator = createSelector([
	selectChartLayout,
	selectCartesianAxisSettings,
	selectRealScaleType,
	selectAxisScale,
	selectDuplicateDomain,
	selectCategoricalDomain,
	selectAxisRange,
	selectNiceTicks,
	pickAxisType
], (layout, axis, realScaleType, scale, duplicateDomain, categoricalDomain, axisRange, niceTicks, axisType) => {
	if (axis == null) return;
	var isCategorical = isCategoricalAxis(layout, axisType);
	return {
		angle: axis.angle,
		interval: axis.interval,
		minTickGap: axis.minTickGap,
		orientation: axis.orientation,
		tick: axis.tick,
		tickCount: axis.tickCount,
		tickFormatter: axis.tickFormatter,
		ticks: axis.ticks,
		type: axis.type,
		unit: axis.unit,
		axisType,
		categoricalDomain,
		duplicateDomain,
		isCategorical,
		niceTicks,
		range: axisRange,
		realScaleType,
		scale
	};
});
/**
* Of on four almost identical implementations of tick generation.
* The four horsemen of tick generation are:
* - {@link selectTooltipAxisTicks}
* - {@link combineAxisTicks}
* - {@link getTicksOfAxis}.
* - {@link combineGraphicalItemTicks}
*/
var combineAxisTicks = (layout, axis, realScaleType, scale, niceTicks, axisRange, duplicateDomain, categoricalDomain, axisType) => {
	if (axis == null || scale == null) return;
	var isCategorical = isCategoricalAxis(layout, axisType);
	var { type, ticks, tickCount } = axis;
	var offsetForBand = realScaleType === "scaleBand" && typeof scale.bandwidth === "function" ? scale.bandwidth() / 2 : 2;
	var offset = type === "category" && scale.bandwidth ? scale.bandwidth() / offsetForBand : 0;
	offset = axisType === "angleAxis" && axisRange != null && axisRange.length >= 2 ? mathSign(axisRange[0] - axisRange[1]) * 2 * offset : offset;
	var ticksOrNiceTicks = ticks || niceTicks;
	if (ticksOrNiceTicks) return ticksOrNiceTicks.map((entry, index) => {
		var scaleContent = duplicateDomain ? duplicateDomain.indexOf(entry) : entry;
		var scaled = scale.map(scaleContent);
		if (!isWellBehavedNumber(scaled)) return null;
		return {
			index,
			coordinate: scaled + offset,
			value: entry,
			offset
		};
	}).filter(isNotNil);
	if (isCategorical && categoricalDomain) return categoricalDomain.map((entry, index) => {
		var scaled = scale.map(entry);
		if (!isWellBehavedNumber(scaled)) return null;
		return {
			coordinate: scaled + offset,
			value: entry,
			index,
			offset
		};
	}).filter(isNotNil);
	if (scale.ticks) return scale.ticks(tickCount).map((entry, index) => {
		var scaled = scale.map(entry);
		if (!isWellBehavedNumber(scaled)) return null;
		return {
			coordinate: scaled + offset,
			value: entry,
			index,
			offset
		};
	}).filter(isNotNil);
	return scale.domain().map((entry, index) => {
		var scaled = scale.map(entry);
		if (!isWellBehavedNumber(scaled)) return null;
		return {
			coordinate: scaled + offset,
			value: duplicateDomain ? duplicateDomain[entry] : entry,
			index,
			offset
		};
	}).filter(isNotNil);
};
var selectTicksOfAxis = createSelector([
	selectChartLayout,
	selectRenderableAxisSettings,
	selectRealScaleType,
	selectAxisScale,
	selectNiceTicks,
	selectAxisRange,
	selectDuplicateDomain,
	selectCategoricalDomain,
	pickAxisType
], combineAxisTicks);
/**
* Of on four almost identical implementations of tick generation.
* The four horsemen of tick generation are:
* - {@link selectTooltipAxisTicks}
* - {@link combineAxisTicks}
* - {@link getTicksOfAxis}.
* - {@link combineGraphicalItemTicks}
*/
var combineGraphicalItemTicks = (layout, axis, scale, axisRange, duplicateDomain, categoricalDomain, axisType) => {
	if (axis == null || scale == null || axisRange == null || axisRange[0] === axisRange[1]) return;
	var isCategorical = isCategoricalAxis(layout, axisType);
	var { tickCount } = axis;
	var offset = 0;
	offset = axisType === "angleAxis" && (axisRange === null || axisRange === void 0 ? void 0 : axisRange.length) >= 2 ? mathSign(axisRange[0] - axisRange[1]) * 2 * offset : offset;
	if (isCategorical && categoricalDomain) return categoricalDomain.map((entry, index) => {
		var scaled = scale.map(entry);
		if (!isWellBehavedNumber(scaled)) return null;
		return {
			coordinate: scaled + offset,
			value: entry,
			index,
			offset
		};
	}).filter(isNotNil);
	if (scale.ticks) return scale.ticks(tickCount).map((entry, index) => {
		var scaled = scale.map(entry);
		if (!isWellBehavedNumber(scaled)) return null;
		return {
			coordinate: scaled + offset,
			value: entry,
			index,
			offset
		};
	}).filter(isNotNil);
	return scale.domain().map((entry, index) => {
		var scaled = scale.map(entry);
		if (!isWellBehavedNumber(scaled)) return null;
		return {
			coordinate: scaled + offset,
			value: duplicateDomain ? duplicateDomain[entry] : entry,
			index,
			offset
		};
	}).filter(isNotNil);
};
var selectTicksOfGraphicalItem = createSelector([
	selectChartLayout,
	selectRenderableAxisSettings,
	selectAxisScale,
	selectAxisRange,
	selectDuplicateDomain,
	selectCategoricalDomain,
	pickAxisType
], combineGraphicalItemTicks);
/**
* This is the internal representation of an axis along with its scale function.
* Here we have already computed the scale function for the axis,
* and replaced the union type of scale (string | function) with just the function type.
*/
var selectAxisWithScale = createSelector(selectBaseAxis, selectAxisScale, (axis, scale) => {
	if (axis == null || scale == null) return;
	return _objectSpread$28(_objectSpread$28({}, axis), {}, { scale });
});
createSelector((state, _axisType, axisId) => selectZAxisSettings(state, axisId), createSelector([createSelector([
	selectBaseAxis,
	selectRealScaleType,
	selectAxisDomain,
	selectAxisRangeWithReverse
], combineConfiguredScale)], rechartsScaleFactory), (axis, scale) => {
	if (axis == null || scale == null) return;
	return _objectSpread$28(_objectSpread$28({}, axis), {}, { scale });
});
/**
* We are also going to need to implement polar chart directions if we want to support keyboard controls for those.
*/
var selectChartDirection = createSelector([
	selectChartLayout,
	selectAllXAxes,
	selectAllYAxes
], (layout, allXAxes, allYAxes) => {
	switch (layout) {
		case "horizontal": return allXAxes.some((axis) => axis.reversed) ? "right-to-left" : "left-to-right";
		case "vertical": return allYAxes.some((axis) => axis.reversed) ? "bottom-to-top" : "top-to-bottom";
		case "centric":
		case "radial": return "left-to-right";
		default: return;
	}
});
var selectRenderedTicksOfAxis = (state, axisType, axisId) => {
	var _state$renderedTicks$;
	return (_state$renderedTicks$ = state.renderedTicks[axisType]) === null || _state$renderedTicks$ === void 0 ? void 0 : _state$renderedTicks$[axisId];
};
createSelector([selectRenderedTicksOfAxis], (ticks) => {
	if (!ticks || ticks.length === 0) return;
	return (pixelValue) => {
		var _closestTick;
		var minDistance = Infinity;
		var closestTick = ticks[0];
		for (var tick of ticks) {
			var distance = Math.abs(tick.coordinate - pixelValue);
			if (distance < minDistance) {
				minDistance = distance;
				closestTick = tick;
			}
		}
		return (_closestTick = closestTick) === null || _closestTick === void 0 ? void 0 : _closestTick.value;
	};
});
var selectDefaultTooltipEventType = (state) => state.options.defaultTooltipEventType;
var selectValidateTooltipEventTypes = (state) => state.options.validateTooltipEventTypes;
function combineTooltipEventType(shared, defaultTooltipEventType, validateTooltipEventTypes) {
	if (shared == null) return defaultTooltipEventType;
	var eventType = shared ? "axis" : "item";
	if (validateTooltipEventTypes == null) return defaultTooltipEventType;
	return validateTooltipEventTypes.includes(eventType) ? eventType : defaultTooltipEventType;
}
function selectTooltipEventType$1(state, shared) {
	return combineTooltipEventType(shared, selectDefaultTooltipEventType(state), selectValidateTooltipEventTypes(state));
}
function useTooltipEventType(shared) {
	return useAppSelector((state) => selectTooltipEventType$1(state, shared));
}
var combineActiveLabel = (tooltipTicks, activeIndex) => {
	var _tooltipTicks$n;
	var n = Number(activeIndex);
	if (isNan(n) || activeIndex == null) return;
	return n >= 0 ? tooltipTicks === null || tooltipTicks === void 0 || (_tooltipTicks$n = tooltipTicks[n]) === null || _tooltipTicks$n === void 0 ? void 0 : _tooltipTicks$n.value : void 0;
};
var selectTooltipSettings = (state) => state.tooltip.settings;
/**
* One Tooltip can display multiple TooltipPayloadEntries at a time.
*/
/**
* So what happens is that the tooltip payload is decided based on the available data, and the dataKey.
* The dataKey can either be defined on the graphical element (like Line, or Bar)
* or on the tooltip itself.
*
* The data can be defined in the chart element, or in the graphical item.
*
* So this type is all the settings, other than the data + dataKey complications.
*/
/**
* This is what Tooltip renders.
*/
/**
* null means no active index
* string means: whichever index from the chart data it is.
* Different charts have different requirements on data shapes,
* and are also responsible for providing a function that will accept this index
* and return data.
*/
/**
* Different items have different data shapes so the state has no opinion on what the data shape should be;
* the only requirement is that the chart also provides a searcher function
* that accepts the data, and a key, and returns whatever the payload in Tooltip should be.
*/
/**
* So this informs the "tooltip event type". Tooltip event type can be either "axis" or "item"
* and it is used for two things:
* 1. Sets the active area
* 2. Sets the background and cursor highlights
*
* Some charts only allow to have one type of tooltip event type, some allow both.
* Those charts that allow both will have one default, and the "shared" prop will be used to switch between them.
* Undefined means "use the chart default".
*
* Charts that only allow one tooltip event type, will ignore the shared prop.
*/
/**
* A generic state for user interaction with the chart.
* User interaction can come through multiple channels: mouse events, keyboard events, or hardcoded in props, or synchronised from other charts.
*
* Each of the interaction states is represented as TooltipInteractionState,
* and then the selectors and Tooltip will decide which of the interaction states to use.
*/
var noInteraction = {
	active: false,
	index: null,
	dataKey: void 0,
	graphicalItemId: void 0,
	coordinate: void 0
};
/**
* This is the event we get when user is interacting with a specific graphical item.
*/
/**
* Keyboard interaction payload has no graphical item ID,
* and no dataKey, because keyboard interaction is always
* with the whole chart, not with a specific graphical item.
*/
var tooltipSlice = createSlice({
	name: "tooltip",
	initialState: {
		itemInteraction: {
			click: noInteraction,
			hover: noInteraction
		},
		axisInteraction: {
			click: noInteraction,
			hover: noInteraction
		},
		keyboardInteraction: noInteraction,
		syncInteraction: {
			active: false,
			index: null,
			dataKey: void 0,
			label: void 0,
			coordinate: void 0,
			sourceViewBox: void 0,
			graphicalItemId: void 0
		},
		tooltipItemPayloads: [],
		settings: {
			shared: void 0,
			trigger: "hover",
			axisId: 0,
			active: false,
			defaultIndex: void 0
		}
	},
	reducers: {
		addTooltipEntrySettings: {
			reducer(state, action) {
				state.tooltipItemPayloads.push(castDraft(action.payload));
			},
			prepare: prepareAutoBatched()
		},
		replaceTooltipEntrySettings: {
			reducer(state, action) {
				var { prev, next } = action.payload;
				var index = current(state).tooltipItemPayloads.indexOf(castDraft(prev));
				if (index > -1) state.tooltipItemPayloads[index] = castDraft(next);
			},
			prepare: prepareAutoBatched()
		},
		removeTooltipEntrySettings: {
			reducer(state, action) {
				var index = current(state).tooltipItemPayloads.indexOf(castDraft(action.payload));
				if (index > -1) state.tooltipItemPayloads.splice(index, 1);
			},
			prepare: prepareAutoBatched()
		},
		setTooltipSettingsState(state, action) {
			state.settings = action.payload;
		},
		setActiveMouseOverItemIndex(state, action) {
			state.syncInteraction.active = false;
			state.keyboardInteraction.active = false;
			state.itemInteraction.hover.active = true;
			state.itemInteraction.hover.index = action.payload.activeIndex;
			state.itemInteraction.hover.dataKey = action.payload.activeDataKey;
			state.itemInteraction.hover.graphicalItemId = action.payload.activeGraphicalItemId;
			state.itemInteraction.hover.coordinate = action.payload.activeCoordinate;
		},
		mouseLeaveChart(state) {
			state.itemInteraction.hover.active = false;
			state.axisInteraction.hover.active = false;
		},
		mouseLeaveItem(state) {
			state.itemInteraction.hover.active = false;
		},
		setActiveClickItemIndex(state, action) {
			state.syncInteraction.active = false;
			state.itemInteraction.click.active = true;
			state.keyboardInteraction.active = false;
			state.itemInteraction.click.index = action.payload.activeIndex;
			state.itemInteraction.click.dataKey = action.payload.activeDataKey;
			state.itemInteraction.click.graphicalItemId = action.payload.activeGraphicalItemId;
			state.itemInteraction.click.coordinate = action.payload.activeCoordinate;
		},
		setMouseOverAxisIndex(state, action) {
			state.syncInteraction.active = false;
			state.axisInteraction.hover.active = true;
			state.keyboardInteraction.active = false;
			state.axisInteraction.hover.index = action.payload.activeIndex;
			state.axisInteraction.hover.dataKey = action.payload.activeDataKey;
			state.axisInteraction.hover.coordinate = action.payload.activeCoordinate;
		},
		setMouseClickAxisIndex(state, action) {
			state.syncInteraction.active = false;
			state.keyboardInteraction.active = false;
			state.axisInteraction.click.active = true;
			state.axisInteraction.click.index = action.payload.activeIndex;
			state.axisInteraction.click.dataKey = action.payload.activeDataKey;
			state.axisInteraction.click.coordinate = action.payload.activeCoordinate;
		},
		setSyncInteraction(state, action) {
			state.syncInteraction = action.payload;
		},
		setKeyboardInteraction(state, action) {
			state.keyboardInteraction.active = action.payload.active;
			state.keyboardInteraction.index = action.payload.activeIndex;
			state.keyboardInteraction.coordinate = action.payload.activeCoordinate;
		}
	}
});
var { addTooltipEntrySettings, replaceTooltipEntrySettings, removeTooltipEntrySettings, setTooltipSettingsState, setActiveMouseOverItemIndex, mouseLeaveItem, mouseLeaveChart, setActiveClickItemIndex, setMouseOverAxisIndex, setMouseClickAxisIndex, setSyncInteraction, setKeyboardInteraction } = tooltipSlice.actions;
var tooltipReducer = tooltipSlice.reducer;
function ownKeys$27(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r) {
			return Object.getOwnPropertyDescriptor(e, r).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread$27(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys$27(Object(t), !0).forEach(function(r) {
			_defineProperty$27(e, r, t[r]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$27(Object(t)).forEach(function(r) {
			Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
		});
	}
	return e;
}
function _defineProperty$27(e, r, t) {
	return (r = _toPropertyKey$27(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}
function _toPropertyKey$27(t) {
	var i = _toPrimitive$27(t, "string");
	return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive$27(t, r) {
	if ("object" != typeof t || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != typeof i) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
function chooseAppropriateMouseInteraction(tooltipState, tooltipEventType, trigger) {
	if (tooltipEventType === "axis") {
		if (trigger === "click") return tooltipState.axisInteraction.click;
		return tooltipState.axisInteraction.hover;
	}
	if (trigger === "click") return tooltipState.itemInteraction.click;
	return tooltipState.itemInteraction.hover;
}
function hasBeenActivePreviously(tooltipInteractionState) {
	return tooltipInteractionState.index != null;
}
var combineTooltipInteractionState = (tooltipState, tooltipEventType, trigger, defaultIndex) => {
	if (tooltipEventType == null) return noInteraction;
	var appropriateMouseInteraction = chooseAppropriateMouseInteraction(tooltipState, tooltipEventType, trigger);
	if (appropriateMouseInteraction == null) return noInteraction;
	if (appropriateMouseInteraction.active) return appropriateMouseInteraction;
	if (tooltipState.keyboardInteraction.active) return tooltipState.keyboardInteraction;
	if (tooltipState.syncInteraction.active && tooltipState.syncInteraction.index != null) return tooltipState.syncInteraction;
	var activeFromProps = tooltipState.settings.active === true;
	if (hasBeenActivePreviously(appropriateMouseInteraction)) {
		if (activeFromProps) return _objectSpread$27(_objectSpread$27({}, appropriateMouseInteraction), {}, { active: true });
	} else if (defaultIndex != null) return {
		active: true,
		coordinate: void 0,
		dataKey: void 0,
		index: defaultIndex,
		graphicalItemId: void 0
	};
	return _objectSpread$27(_objectSpread$27({}, noInteraction), {}, { coordinate: appropriateMouseInteraction.coordinate });
};
function toFiniteNumber(value) {
	if (typeof value === "number") return Number.isFinite(value) ? value : void 0;
	if (value instanceof Date) {
		var numericValue = value.valueOf();
		return Number.isFinite(numericValue) ? numericValue : void 0;
	}
	var parsed = Number(value);
	return Number.isFinite(parsed) ? parsed : void 0;
}
function isValueWithinNumberDomain(value, domain) {
	var numericValue = toFiniteNumber(value);
	var lowerBound = domain[0];
	var upperBound = domain[1];
	if (numericValue === void 0) return false;
	return numericValue >= Math.min(lowerBound, upperBound) && numericValue <= Math.max(lowerBound, upperBound);
}
function isValueWithinDomain(entry, axisDataKey, domain) {
	if (domain == null || axisDataKey == null) return true;
	var value = getValueByDataKey(entry, axisDataKey);
	if (value == null) return true;
	if (!isWellFormedNumberDomain(domain)) return true;
	return isValueWithinNumberDomain(value, domain);
}
var combineActiveTooltipIndex = (tooltipInteraction, chartData, axisDataKey, domain) => {
	var desiredIndex = tooltipInteraction === null || tooltipInteraction === void 0 ? void 0 : tooltipInteraction.index;
	if (desiredIndex == null) return null;
	var indexAsNumber = Number(desiredIndex);
	if (!isWellBehavedNumber(indexAsNumber)) return desiredIndex;
	var lowerLimit = 0;
	var upperLimit = Infinity;
	if (chartData.length > 0) upperLimit = chartData.length - 1;
	var clampedIndex = Math.max(lowerLimit, Math.min(indexAsNumber, upperLimit));
	var entry = chartData[clampedIndex];
	if (entry == null) return String(clampedIndex);
	if (!isValueWithinDomain(entry, axisDataKey, domain)) return null;
	return String(clampedIndex);
};
var combineCoordinateForDefaultIndex = (width, height, layout, offset, tooltipTicks, defaultIndex, tooltipConfigurations) => {
	if (defaultIndex == null) return;
	var firstConfiguration = tooltipConfigurations[0];
	var maybePosition = firstConfiguration === null || firstConfiguration === void 0 ? void 0 : firstConfiguration.getPosition(defaultIndex);
	if (maybePosition != null) return maybePosition;
	var tick = tooltipTicks === null || tooltipTicks === void 0 ? void 0 : tooltipTicks[Number(defaultIndex)];
	if (!tick) return;
	switch (layout) {
		case "horizontal": return {
			x: tick.coordinate,
			y: (offset.top + height) / 2
		};
		default: return {
			x: (offset.left + width) / 2,
			y: tick.coordinate
		};
	}
};
var combineTooltipPayloadConfigurations = (tooltipState, tooltipEventType, trigger, defaultIndex) => {
	if (tooltipEventType === "axis") return tooltipState.tooltipItemPayloads;
	if (tooltipState.tooltipItemPayloads.length === 0) return [];
	var filterByGraphicalItemId;
	if (trigger === "hover") filterByGraphicalItemId = tooltipState.itemInteraction.hover.graphicalItemId;
	else filterByGraphicalItemId = tooltipState.itemInteraction.click.graphicalItemId;
	if (tooltipState.syncInteraction.active && filterByGraphicalItemId == null) return tooltipState.tooltipItemPayloads;
	if (filterByGraphicalItemId == null && defaultIndex != null) {
		var firstItemPayload = tooltipState.tooltipItemPayloads[0];
		if (firstItemPayload != null) return [firstItemPayload];
		return [];
	}
	return tooltipState.tooltipItemPayloads.filter((tpc) => {
		var _tpc$settings;
		return ((_tpc$settings = tpc.settings) === null || _tpc$settings === void 0 ? void 0 : _tpc$settings.graphicalItemId) === filterByGraphicalItemId;
	});
};
var selectTooltipPayloadSearcher = (state) => state.options.tooltipPayloadSearcher;
var selectTooltipState = (state) => state.tooltip;
function ownKeys$26(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r) {
			return Object.getOwnPropertyDescriptor(e, r).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread$26(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys$26(Object(t), !0).forEach(function(r) {
			_defineProperty$26(e, r, t[r]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$26(Object(t)).forEach(function(r) {
			Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
		});
	}
	return e;
}
function _defineProperty$26(e, r, t) {
	return (r = _toPropertyKey$26(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}
function _toPropertyKey$26(t) {
	var i = _toPrimitive$26(t, "string");
	return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive$26(t, r) {
	if ("object" != typeof t || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != typeof i) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
function parseName(value) {
	if (typeof value === "string" || typeof value === "number") return value;
}
function parseUnit(value) {
	if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") return value;
}
function parseDataKey(value) {
	if (typeof value === "string" || typeof value === "number") return value;
	if (typeof value === "function") return (obj) => value(obj);
}
function parseColor(value) {
	if (typeof value === "string") return value;
}
function parseTooltipPayloadItem(item) {
	if (item == null || typeof item !== "object") return;
	return {
		name: "name" in item ? parseName(item.name) : void 0,
		unit: "unit" in item ? parseUnit(item.unit) : void 0,
		dataKey: "dataKey" in item ? parseDataKey(item.dataKey) : void 0,
		payload: "payload" in item ? item.payload : void 0,
		color: "color" in item ? parseColor(item.color) : void 0,
		fill: "fill" in item ? parseColor(item.fill) : void 0
	};
}
function selectFinalData(dataDefinedOnItem, dataDefinedOnChart) {
	if (dataDefinedOnItem != null) return dataDefinedOnItem;
	return dataDefinedOnChart;
}
var combineTooltipPayload = (tooltipPayloadConfigurations, activeIndex, chartDataState, tooltipAxisDataKey, activeLabel, tooltipPayloadSearcher, tooltipEventType) => {
	if (activeIndex == null || tooltipPayloadSearcher == null) return;
	var { chartData, computedData, dataStartIndex, dataEndIndex } = chartDataState;
	return tooltipPayloadConfigurations.reduce((agg, _ref) => {
		var _settings$dataKey;
		var { dataDefinedOnItem, settings } = _ref;
		var finalData = selectFinalData(dataDefinedOnItem, chartData);
		var sliced = Array.isArray(finalData) ? getSliced(finalData, dataStartIndex, dataEndIndex) : finalData;
		var finalDataKey = (_settings$dataKey = settings === null || settings === void 0 ? void 0 : settings.dataKey) !== null && _settings$dataKey !== void 0 ? _settings$dataKey : tooltipAxisDataKey;
		var finalNameKey = settings === null || settings === void 0 ? void 0 : settings.nameKey;
		var tooltipPayload;
		if (tooltipAxisDataKey && Array.isArray(sliced) && !Array.isArray(sliced[0]) && tooltipEventType === "axis") tooltipPayload = findEntryInArray(sliced, tooltipAxisDataKey, activeLabel);
		else tooltipPayload = tooltipPayloadSearcher(sliced, activeIndex, computedData, finalNameKey);
		if (Array.isArray(tooltipPayload)) tooltipPayload.forEach((item) => {
			var _parsedItem$color, _parsedItem$fill;
			var parsedItem = parseTooltipPayloadItem(item);
			var itemName = parsedItem === null || parsedItem === void 0 ? void 0 : parsedItem.name;
			var itemDataKey = parsedItem === null || parsedItem === void 0 ? void 0 : parsedItem.dataKey;
			var itemPayload = parsedItem === null || parsedItem === void 0 ? void 0 : parsedItem.payload;
			var newSettings = _objectSpread$26(_objectSpread$26({}, settings), {}, {
				name: itemName,
				unit: parsedItem === null || parsedItem === void 0 ? void 0 : parsedItem.unit,
				color: (_parsedItem$color = parsedItem === null || parsedItem === void 0 ? void 0 : parsedItem.color) !== null && _parsedItem$color !== void 0 ? _parsedItem$color : settings === null || settings === void 0 ? void 0 : settings.color,
				fill: (_parsedItem$fill = parsedItem === null || parsedItem === void 0 ? void 0 : parsedItem.fill) !== null && _parsedItem$fill !== void 0 ? _parsedItem$fill : settings === null || settings === void 0 ? void 0 : settings.fill
			});
			agg.push(getTooltipEntry({
				tooltipEntrySettings: newSettings,
				dataKey: itemDataKey,
				payload: itemPayload,
				value: getValueByDataKey(itemPayload, itemDataKey),
				name: itemName == null ? void 0 : String(itemName)
			}));
		});
		else {
			var _getValueByDataKey;
			agg.push(getTooltipEntry({
				tooltipEntrySettings: settings,
				dataKey: finalDataKey,
				payload: tooltipPayload,
				value: getValueByDataKey(tooltipPayload, finalDataKey),
				name: (_getValueByDataKey = getValueByDataKey(tooltipPayload, finalNameKey)) !== null && _getValueByDataKey !== void 0 ? _getValueByDataKey : settings === null || settings === void 0 ? void 0 : settings.name
			}));
		}
		return agg;
	}, []);
};
var selectTooltipAxisRealScaleType = createSelector([
	selectTooltipAxis,
	selectHasBar,
	selectChartName
], combineRealScaleType);
var selectAllGraphicalItemsSettings = createSelector([
	createSelector([(state) => state.graphicalItems.cartesianItems, (state) => state.graphicalItems.polarItems], (cartesianItems, polarItems) => [...cartesianItems, ...polarItems]),
	selectTooltipAxis,
	createSelector([selectTooltipAxisType, selectTooltipAxisId], itemAxisPredicate)
], combineGraphicalItemsSettings, { memoizeOptions: { resultEqualityCheck: emptyArraysAreEqualCheck } });
var selectAllStackedGraphicalItemsSettings = createSelector([selectAllGraphicalItemsSettings], (graphicalItems) => graphicalItems.filter(isStacked));
/**
* Data for tooltip always use the data with indexes set by a Brush,
* and never accept the isPanorama flag:
* because Tooltip never displays inside the panorama anyway
* so we don't need to worry what would happen there.
*/
var selectTooltipDisplayedData = createSelector([createSelector([selectAllGraphicalItemsSettings], combineGraphicalItemsData, { memoizeOptions: { resultEqualityCheck: emptyArraysAreEqualCheck } }), selectChartDataWithIndexes], combineDisplayedData);
var selectTooltipStackedData = createSelector([
	selectAllStackedGraphicalItemsSettings,
	selectChartDataWithIndexes,
	selectTooltipAxis
], combineDisplayedStackedData);
var selectAllTooltipAppliedValues = createSelector([
	selectTooltipDisplayedData,
	selectTooltipAxis,
	selectAllGraphicalItemsSettings
], combineAppliedValues);
var selectTooltipAxisDomainDefinition = createSelector([selectTooltipAxis], getDomainDefinition);
var selectTooltipDomainFromUserPreferences = createSelector([selectTooltipAxisDomainDefinition, createSelector([selectTooltipAxis], (axisSettings) => axisSettings.allowDataOverflow)], numericalDomainSpecifiedWithoutRequiringData);
var selectTooltipDomainOfStackGroups = createSelector([
	createSelector([
		selectTooltipStackedData,
		createSelector([selectAllGraphicalItemsSettings], (graphicalItems) => graphicalItems.filter(isStacked)),
		selectStackOffsetType,
		selectReverseStackOrder
	], combineStackGroups),
	selectChartDataWithIndexes,
	selectTooltipAxisType,
	selectTooltipDomainFromUserPreferences
], combineDomainOfStackGroups);
var selectDomainOfAllAppliedNumericalValuesIncludingErrorValues = createSelector([
	selectTooltipDisplayedData,
	selectTooltipAxis,
	createSelector([selectAllGraphicalItemsSettings], filterGraphicalNotStackedItems),
	selectAllErrorBarSettings,
	selectTooltipAxisType
], combineDomainOfAllAppliedNumericalValuesIncludingErrorValues, { memoizeOptions: { resultEqualityCheck: numberDomainEqualityCheck } });
var selectTooltipReferenceDotsDomain = createSelector([createSelector([
	selectReferenceDots,
	selectTooltipAxisType,
	selectTooltipAxisId
], filterReferenceElements), selectTooltipAxisType], combineDotsDomain);
var selectTooltipReferenceAreasDomain = createSelector([createSelector([
	selectReferenceAreas,
	selectTooltipAxisType,
	selectTooltipAxisId
], filterReferenceElements), selectTooltipAxisType], combineAreasDomain);
var selectTooltipAxisDomain = createSelector([
	selectTooltipAxis,
	selectChartLayout,
	selectTooltipDisplayedData,
	selectAllTooltipAppliedValues,
	selectStackOffsetType,
	selectTooltipAxisType,
	createSelector([
		selectTooltipAxis,
		selectTooltipAxisDomainDefinition,
		selectTooltipDomainFromUserPreferences,
		selectTooltipDomainOfStackGroups,
		selectDomainOfAllAppliedNumericalValuesIncludingErrorValues,
		createSelector([
			selectTooltipReferenceDotsDomain,
			createSelector([createSelector([
				selectReferenceLines,
				selectTooltipAxisType,
				selectTooltipAxisId
			], filterReferenceElements), selectTooltipAxisType], combineLinesDomain),
			selectTooltipReferenceAreasDomain
		], mergeDomains),
		selectChartLayout,
		selectTooltipAxisType
	], combineNumericalDomain)
], combineAxisDomain);
var selectTooltipAxisDomainIncludingNiceTicks = createSelector([
	selectTooltipAxis,
	selectTooltipAxisDomain,
	createSelector([
		selectTooltipAxisDomain,
		selectTooltipAxis,
		selectTooltipAxisRealScaleType
	], combineNiceTicks),
	selectTooltipAxisType
], combineAxisDomainWithNiceTicks);
var selectTooltipAxisRange = (state) => {
	return selectAxisRange(state, selectTooltipAxisType(state), selectTooltipAxisId(state), false);
};
var selectTooltipAxisRangeWithReverse = createSelector([selectTooltipAxis, selectTooltipAxisRange], combineAxisRangeWithReverse);
var selectTooltipAxisScale = createSelector([createSelector([
	selectTooltipAxis,
	selectTooltipAxisRealScaleType,
	selectTooltipAxisDomainIncludingNiceTicks,
	selectTooltipAxisRangeWithReverse
], combineConfiguredScale)], rechartsScaleFactory);
var selectTooltipDuplicateDomain = createSelector([
	selectChartLayout,
	selectAllTooltipAppliedValues,
	selectTooltipAxis,
	selectTooltipAxisType
], combineDuplicateDomain);
var selectTooltipCategoricalDomain = createSelector([
	selectChartLayout,
	selectAllTooltipAppliedValues,
	selectTooltipAxis,
	selectTooltipAxisType
], combineCategoricalDomain);
var combineTicksOfTooltipAxis = (layout, axis, realScaleType, scale, range, duplicateDomain, categoricalDomain, axisType) => {
	if (!axis) return;
	var { type } = axis;
	var isCategorical = isCategoricalAxis(layout, axisType);
	if (!scale) return;
	var offsetForBand = realScaleType === "scaleBand" && scale.bandwidth ? scale.bandwidth() / 2 : 2;
	var offset = type === "category" && scale.bandwidth ? scale.bandwidth() / offsetForBand : 0;
	offset = axisType === "angleAxis" && range != null && (range === null || range === void 0 ? void 0 : range.length) >= 2 ? mathSign(range[0] - range[1]) * 2 * offset : offset;
	if (isCategorical && categoricalDomain) return categoricalDomain.map((entry, index) => {
		var scaled = scale.map(entry);
		if (!isWellBehavedNumber(scaled)) return null;
		return {
			coordinate: scaled + offset,
			value: entry,
			index,
			offset
		};
	}).filter(isNotNil);
	return scale.domain().map((entry, index) => {
		var scaled = scale.map(entry);
		if (!isWellBehavedNumber(scaled)) return null;
		return {
			coordinate: scaled + offset,
			value: duplicateDomain ? duplicateDomain[entry] : entry,
			index,
			offset
		};
	}).filter(isNotNil);
};
/**
* Of on four almost identical implementations of tick generation.
* The four horsemen of tick generation are:
* - {@link selectTooltipAxisTicks}
* - {@link combineAxisTicks}
* - {@link getTicksOfAxis}.
* - {@link combineGraphicalItemTicks}
*/
var selectTooltipAxisTicks = createSelector([
	selectChartLayout,
	selectTooltipAxis,
	selectTooltipAxisRealScaleType,
	selectTooltipAxisScale,
	selectTooltipAxisRange,
	selectTooltipDuplicateDomain,
	selectTooltipCategoricalDomain,
	selectTooltipAxisType
], combineTicksOfTooltipAxis);
var selectTooltipEventType = createSelector([
	selectDefaultTooltipEventType,
	selectValidateTooltipEventTypes,
	selectTooltipSettings
], (defaultTooltipEventType, validateTooltipEventType, settings) => combineTooltipEventType(settings.shared, defaultTooltipEventType, validateTooltipEventType));
var selectTooltipTrigger = (state) => state.tooltip.settings.trigger;
var selectDefaultIndex = (state) => state.tooltip.settings.defaultIndex;
var selectTooltipInteractionState$1 = createSelector([
	selectTooltipState,
	selectTooltipEventType,
	selectTooltipTrigger,
	selectDefaultIndex
], combineTooltipInteractionState);
var selectActiveTooltipIndex = createSelector([
	selectTooltipInteractionState$1,
	selectTooltipDisplayedData,
	selectTooltipAxisDataKey,
	selectTooltipAxisDomain
], combineActiveTooltipIndex);
var selectActiveLabel$1 = createSelector([selectTooltipAxisTicks, selectActiveTooltipIndex], combineActiveLabel);
var selectActiveTooltipDataKey = createSelector([selectTooltipInteractionState$1], (tooltipInteraction) => {
	if (!tooltipInteraction) return;
	return tooltipInteraction.dataKey;
});
var selectActiveTooltipGraphicalItemId = createSelector([selectTooltipInteractionState$1], (tooltipInteraction) => {
	if (!tooltipInteraction) return;
	return tooltipInteraction.graphicalItemId;
});
var selectTooltipPayloadConfigurations$1 = createSelector([
	selectTooltipState,
	selectTooltipEventType,
	selectTooltipTrigger,
	selectDefaultIndex
], combineTooltipPayloadConfigurations);
var selectActiveTooltipCoordinate = createSelector([selectTooltipInteractionState$1, createSelector([
	selectChartWidth,
	selectChartHeight,
	selectChartLayout,
	selectChartOffsetInternal,
	selectTooltipAxisTicks,
	selectDefaultIndex,
	selectTooltipPayloadConfigurations$1
], combineCoordinateForDefaultIndex)], (tooltipInteractionState, defaultIndexCoordinate) => {
	if (tooltipInteractionState !== null && tooltipInteractionState !== void 0 && tooltipInteractionState.coordinate) return tooltipInteractionState.coordinate;
	return defaultIndexCoordinate;
});
var selectIsTooltipActive$1 = createSelector([selectTooltipInteractionState$1], (tooltipInteractionState) => {
	var _tooltipInteractionSt;
	return (_tooltipInteractionSt = tooltipInteractionState === null || tooltipInteractionState === void 0 ? void 0 : tooltipInteractionState.active) !== null && _tooltipInteractionSt !== void 0 ? _tooltipInteractionSt : false;
});
var selectActiveTooltipDataPoints = createSelector([createSelector([
	selectTooltipPayloadConfigurations$1,
	selectActiveTooltipIndex,
	selectChartDataWithIndexes,
	selectTooltipAxisDataKey,
	selectActiveLabel$1,
	selectTooltipPayloadSearcher,
	selectTooltipEventType
], combineTooltipPayload)], (payload) => {
	if (payload == null) return;
	var dataPoints = payload.map((p) => p.payload).filter((p) => p != null);
	return Array.from(new Set(dataPoints));
});
function ownKeys$25(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r) {
			return Object.getOwnPropertyDescriptor(e, r).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread$25(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys$25(Object(t), !0).forEach(function(r) {
			_defineProperty$25(e, r, t[r]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$25(Object(t)).forEach(function(r) {
			Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
		});
	}
	return e;
}
function _defineProperty$25(e, r, t) {
	return (r = _toPropertyKey$25(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}
function _toPropertyKey$25(t) {
	var i = _toPrimitive$25(t, "string");
	return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive$25(t, r) {
	if ("object" != typeof t || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != typeof i) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
/**
* This is the slice where each individual Axis element pushes its own configuration.
* Prefer to use this one instead of axisSlice.
*/
var cartesianAxisSlice = createSlice({
	name: "cartesianAxis",
	initialState: {
		xAxis: {},
		yAxis: {},
		zAxis: {}
	},
	reducers: {
		addXAxis: {
			reducer(state, action) {
				state.xAxis[action.payload.id] = castDraft(action.payload);
			},
			prepare: prepareAutoBatched()
		},
		replaceXAxis: {
			reducer(state, action) {
				var { prev, next } = action.payload;
				if (state.xAxis[prev.id] !== void 0) {
					if (prev.id !== next.id) delete state.xAxis[prev.id];
					state.xAxis[next.id] = castDraft(next);
				}
			},
			prepare: prepareAutoBatched()
		},
		removeXAxis: {
			reducer(state, action) {
				delete state.xAxis[action.payload.id];
			},
			prepare: prepareAutoBatched()
		},
		addYAxis: {
			reducer(state, action) {
				state.yAxis[action.payload.id] = castDraft(action.payload);
			},
			prepare: prepareAutoBatched()
		},
		replaceYAxis: {
			reducer(state, action) {
				var { prev, next } = action.payload;
				if (state.yAxis[prev.id] !== void 0) {
					if (prev.id !== next.id) delete state.yAxis[prev.id];
					state.yAxis[next.id] = castDraft(next);
				}
			},
			prepare: prepareAutoBatched()
		},
		removeYAxis: {
			reducer(state, action) {
				delete state.yAxis[action.payload.id];
			},
			prepare: prepareAutoBatched()
		},
		addZAxis: {
			reducer(state, action) {
				state.zAxis[action.payload.id] = castDraft(action.payload);
			},
			prepare: prepareAutoBatched()
		},
		replaceZAxis: {
			reducer(state, action) {
				var { prev, next } = action.payload;
				if (state.zAxis[prev.id] !== void 0) {
					if (prev.id !== next.id) delete state.zAxis[prev.id];
					state.zAxis[next.id] = castDraft(next);
				}
			},
			prepare: prepareAutoBatched()
		},
		removeZAxis: {
			reducer(state, action) {
				delete state.zAxis[action.payload.id];
			},
			prepare: prepareAutoBatched()
		},
		updateYAxisWidth(state, action) {
			var { id, width } = action.payload;
			var axis = state.yAxis[id];
			if (axis) {
				var _history$;
				var history = axis.widthHistory || [];
				if (history.length === 3 && history[0] === history[2] && width === history[1] && width !== axis.width && Math.abs(width - ((_history$ = history[0]) !== null && _history$ !== void 0 ? _history$ : 0)) <= 1) return;
				var newHistory = [...history, width].slice(-3);
				state.yAxis[id] = _objectSpread$25(_objectSpread$25({}, axis), {}, {
					width,
					widthHistory: newHistory
				});
			}
		}
	}
});
var { addXAxis, replaceXAxis, removeXAxis, addYAxis, replaceYAxis, removeYAxis, addZAxis, replaceZAxis, removeZAxis, updateYAxisWidth } = cartesianAxisSlice.actions;
var cartesianAxisReducer = cartesianAxisSlice.reducer;
var selectPlotArea = createSelector([
	createSelector([selectChartOffsetInternal], (offsetInternal) => {
		return {
			top: offsetInternal.top,
			bottom: offsetInternal.bottom,
			left: offsetInternal.left,
			right: offsetInternal.right
		};
	}),
	selectChartWidth,
	selectChartHeight
], (offset, chartWidth, chartHeight) => {
	if (!offset || chartWidth == null || chartHeight == null) return;
	return {
		x: offset.left,
		y: offset.top,
		width: Math.max(0, chartWidth - offset.left - offset.right),
		height: Math.max(0, chartHeight - offset.top - offset.bottom)
	};
});
/**
* Plot area is the area where the actual chart data is rendered.
* This means: bars, lines, scatter points, etc.
*
* The plot area is calculated based on the chart dimensions and the offset.
*
* Plot area `width` and `height` are the dimensions in pixels;
* `x` and `y` are the coordinates of the top-left corner of the plot area relative to the chart container.
*
* They are also independent of the scale and zoom, meaning that as the user zooms in and out,
* the plot area dimensions will not change as the chart gets visually larger or smaller.
*
* This hook must be used within a chart context (inside a `<LineChart>`, `<BarChart>`, etc.).
* This hook returns `undefined` if used outside a chart context.
*
* @returns Plot area of the chart in pixels, or undefined if used outside a chart context.
* @since 3.1
*/
var usePlotArea = () => {
	return useAppSelector(selectPlotArea);
};
/**
* Returns the currently active data points being displayed in the Tooltip.
* Active means that it is currently visible; this hook will return `undefined` if there is no current interaction.
*
* This follows the `<Tooltip />` props, if the Tooltip element is present in the chart.
* If there is no `<Tooltip />` then this hook will follow the default Tooltip props.
*
* Data point is whatever you pass as an input to the chart using the `data={}` prop.
*
* This returns an array because a chart can have multiple graphical items in it (multiple Lines for example)
* and tooltip with `shared={true}` will display all items at the same time.
*
* Returns undefined when used outside a chart context.
*
* @returns Data points that are currently visible in a Tooltip
*/
var useActiveTooltipDataPoints = () => {
	return useAppSelector(selectActiveTooltipDataPoints);
};
function ownKeys$24(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r) {
			return Object.getOwnPropertyDescriptor(e, r).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread$24(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys$24(Object(t), !0).forEach(function(r) {
			_defineProperty$24(e, r, t[r]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$24(Object(t)).forEach(function(r) {
			Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
		});
	}
	return e;
}
function _defineProperty$24(e, r, t) {
	return (r = _toPropertyKey$24(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}
function _toPropertyKey$24(t) {
	var i = _toPrimitive$24(t, "string");
	return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive$24(t, r) {
	if ("object" != typeof t || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != typeof i) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
var ActivePoint = (_ref) => {
	var { point, childIndex, mainColor, activeDot, dataKey, clipPath } = _ref;
	if (activeDot === false || point.x == null || point.y == null) return null;
	var dotProps = _objectSpread$24(_objectSpread$24(_objectSpread$24({}, {
		index: childIndex,
		dataKey,
		cx: point.x,
		cy: point.y,
		r: 4,
		fill: mainColor !== null && mainColor !== void 0 ? mainColor : "none",
		strokeWidth: 2,
		stroke: "#fff",
		payload: point.payload,
		value: point.value
	}), svgPropertiesNoEventsFromUnknown(activeDot)), adaptEventHandlers(activeDot));
	var dot;
	if (/* @__PURE__ */ (0, import_react.isValidElement)(activeDot)) dot = /* @__PURE__ */ (0, import_react.cloneElement)(activeDot, dotProps);
	else if (typeof activeDot === "function") dot = activeDot(dotProps);
	else dot = /* @__PURE__ */ import_react.createElement(Dot, dotProps);
	return /* @__PURE__ */ import_react.createElement(Layer, {
		className: "recharts-active-dot",
		clipPath
	}, dot);
};
function ActivePoints(_ref2) {
	var { points, mainColor, activeDot, itemDataKey, clipPath, zIndex = DefaultZIndexes.activeDot } = _ref2;
	var activeTooltipIndex = useAppSelector(selectActiveTooltipIndex);
	var activeDataPoints = useActiveTooltipDataPoints();
	if (points == null || activeDataPoints == null) return null;
	var activePoint = points.find((p) => activeDataPoints.includes(p.payload));
	if (isNullish(activePoint)) return null;
	return /* @__PURE__ */ import_react.createElement(ZIndexLayer, { zIndex }, /* @__PURE__ */ import_react.createElement(ActivePoint, {
		point: activePoint,
		childIndex: Number(activeTooltipIndex),
		mainColor,
		dataKey: itemDataKey,
		activeDot,
		clipPath
	}));
}
function SetTooltipEntrySettings(_ref) {
	var { tooltipEntrySettings } = _ref;
	var dispatch = useAppDispatch();
	var isPanorama = useIsPanorama();
	var prevSettingsRef = (0, import_react.useRef)(null);
	(0, import_react.useLayoutEffect)(() => {
		if (isPanorama) return;
		if (prevSettingsRef.current === null) dispatch(addTooltipEntrySettings(tooltipEntrySettings));
		else if (prevSettingsRef.current !== tooltipEntrySettings) dispatch(replaceTooltipEntrySettings({
			prev: prevSettingsRef.current,
			next: tooltipEntrySettings
		}));
		prevSettingsRef.current = tooltipEntrySettings;
	}, [
		tooltipEntrySettings,
		dispatch,
		isPanorama
	]);
	(0, import_react.useLayoutEffect)(() => {
		return () => {
			if (prevSettingsRef.current) {
				dispatch(removeTooltipEntrySettings(prevSettingsRef.current));
				prevSettingsRef.current = null;
			}
		};
	}, [dispatch]);
	return null;
}
function useNeedsClip(xAxisId, yAxisId) {
	var _xAxis$allowDataOverf, _yAxis$allowDataOverf;
	var xAxis = useAppSelector((state) => selectXAxisSettings(state, xAxisId));
	var yAxis = useAppSelector((state) => selectYAxisSettings(state, yAxisId));
	var needClipX = (_xAxis$allowDataOverf = xAxis === null || xAxis === void 0 ? void 0 : xAxis.allowDataOverflow) !== null && _xAxis$allowDataOverf !== void 0 ? _xAxis$allowDataOverf : implicitXAxis.allowDataOverflow;
	var needClipY = (_yAxis$allowDataOverf = yAxis === null || yAxis === void 0 ? void 0 : yAxis.allowDataOverflow) !== null && _yAxis$allowDataOverf !== void 0 ? _yAxis$allowDataOverf : implicitYAxis.allowDataOverflow;
	return {
		needClip: needClipX || needClipY,
		needClipX,
		needClipY
	};
}
function GraphicalItemClipPath(_ref) {
	var { xAxisId, yAxisId, clipPathId } = _ref;
	var plotArea = usePlotArea();
	var { needClipX, needClipY, needClip } = useNeedsClip(xAxisId, yAxisId);
	if (!needClip || !plotArea) return null;
	var { x, y, width, height } = plotArea;
	return /* @__PURE__ */ import_react.createElement("clipPath", { id: "clipPath-".concat(clipPathId) }, /* @__PURE__ */ import_react.createElement("rect", {
		x: needClipX ? x : x - width / 2,
		y: needClipY ? y : y - height / 2,
		width: needClipX ? width : width * 2,
		height: needClipY ? height : height * 2
	}));
}
function selectXAxisIdFromGraphicalItemId(state, id) {
	var _state$graphicalItems, _state$graphicalItems2;
	return (_state$graphicalItems = (_state$graphicalItems2 = state.graphicalItems.cartesianItems.find((item) => item.id === id)) === null || _state$graphicalItems2 === void 0 ? void 0 : _state$graphicalItems2.xAxisId) !== null && _state$graphicalItems !== void 0 ? _state$graphicalItems : 0;
}
function selectYAxisIdFromGraphicalItemId(state, id) {
	var _state$graphicalItems3, _state$graphicalItems4;
	return (_state$graphicalItems3 = (_state$graphicalItems4 = state.graphicalItems.cartesianItems.find((item) => item.id === id)) === null || _state$graphicalItems4 === void 0 ? void 0 : _state$graphicalItems4.yAxisId) !== null && _state$graphicalItems3 !== void 0 ? _state$graphicalItems3 : 0;
}
var selectXAxisWithScale$1 = (state, graphicalItemId, isPanorama) => selectAxisWithScale(state, "xAxis", selectXAxisIdFromGraphicalItemId(state, graphicalItemId), isPanorama);
var selectXAxisTicks$1 = (state, graphicalItemId, isPanorama) => selectTicksOfGraphicalItem(state, "xAxis", selectXAxisIdFromGraphicalItemId(state, graphicalItemId), isPanorama);
var selectYAxisWithScale$1 = (state, graphicalItemId, isPanorama) => selectAxisWithScale(state, "yAxis", selectYAxisIdFromGraphicalItemId(state, graphicalItemId), isPanorama);
var selectYAxisTicks$1 = (state, graphicalItemId, isPanorama) => selectTicksOfGraphicalItem(state, "yAxis", selectYAxisIdFromGraphicalItemId(state, graphicalItemId), isPanorama);
var selectBandSize = createSelector([
	selectChartLayout,
	selectXAxisWithScale$1,
	selectYAxisWithScale$1,
	selectXAxisTicks$1,
	selectYAxisTicks$1
], (layout, xAxis, yAxis, xAxisTicks, yAxisTicks) => {
	if (isCategoricalAxis(layout, "xAxis")) return getBandSizeOfAxis(xAxis, xAxisTicks, false);
	return getBandSizeOfAxis(yAxis, yAxisTicks, false);
});
var pickAreaId = (_state, id) => id;
var selectSynchronisedAreaSettings = createSelector([selectUnfilteredCartesianItems, pickAreaId], (graphicalItems, id) => graphicalItems.filter((item) => item.type === "area").find((item) => item.id === id));
var selectNumericalAxisType = (state) => {
	return isCategoricalAxis(selectChartLayout(state), "xAxis") ? "yAxis" : "xAxis";
};
var selectNumericalAxisIdFromGraphicalItemId = (state, graphicalItemId) => {
	if (selectNumericalAxisType(state) === "yAxis") return selectYAxisIdFromGraphicalItemId(state, graphicalItemId);
	return selectXAxisIdFromGraphicalItemId(state, graphicalItemId);
};
var selectNumericalAxisStackGroups = (state, graphicalItemId, isPanorama) => selectStackGroups(state, selectNumericalAxisType(state), selectNumericalAxisIdFromGraphicalItemId(state, graphicalItemId), isPanorama);
var selectArea = createSelector([
	selectChartLayout,
	selectXAxisWithScale$1,
	selectYAxisWithScale$1,
	selectXAxisTicks$1,
	selectYAxisTicks$1,
	createSelector([selectSynchronisedAreaSettings, selectNumericalAxisStackGroups], (areaSettings, stackGroups) => {
		var _stackGroups$stackId;
		if (areaSettings == null || stackGroups == null) return;
		var { stackId } = areaSettings;
		var stackSeriesIdentifier = getStackSeriesIdentifier(areaSettings);
		if (stackId == null || stackSeriesIdentifier == null) return;
		var groups = (_stackGroups$stackId = stackGroups[stackId]) === null || _stackGroups$stackId === void 0 ? void 0 : _stackGroups$stackId.stackedData;
		var found = groups === null || groups === void 0 ? void 0 : groups.find((v) => v.key === stackSeriesIdentifier);
		if (found == null) return;
		return found.map((item) => [item[0], item[1]]);
	}),
	selectChartDataWithIndexesIfNotInPanoramaPosition3,
	selectBandSize,
	selectSynchronisedAreaSettings,
	selectChartBaseValue
], (layout, xAxis, yAxis, xAxisTicks, yAxisTicks, stackedData, _ref, bandSize, areaSettings, chartBaseValue) => {
	var { chartData, dataStartIndex, dataEndIndex } = _ref;
	if (areaSettings == null || layout !== "horizontal" && layout !== "vertical" || xAxis == null || yAxis == null || xAxisTicks == null || yAxisTicks == null || xAxisTicks.length === 0 || yAxisTicks.length === 0 || bandSize == null) return;
	var { data } = areaSettings;
	var displayedData;
	if (data && data.length > 0) displayedData = data;
	else displayedData = chartData === null || chartData === void 0 ? void 0 : chartData.slice(dataStartIndex, dataEndIndex + 1);
	if (displayedData == null) return;
	return computeArea({
		layout,
		xAxis,
		yAxis,
		xAxisTicks,
		yAxisTicks,
		dataStartIndex,
		areaSettings,
		stackedData,
		displayedData,
		chartBaseValue,
		bandSize
	});
});
function ownKeys$23(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r) {
			return Object.getOwnPropertyDescriptor(e, r).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread$23(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys$23(Object(t), !0).forEach(function(r) {
			_defineProperty$23(e, r, t[r]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$23(Object(t)).forEach(function(r) {
			Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
		});
	}
	return e;
}
function _defineProperty$23(e, r, t) {
	return (r = _toPropertyKey$23(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}
function _toPropertyKey$23(t) {
	var i = _toPrimitive$23(t, "string");
	return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive$23(t, r) {
	if ("object" != typeof t || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != typeof i) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
var getActiveCartesianCoordinate = (layout, tooltipTicks, activeIndex, pointer) => {
	var entry = tooltipTicks.find((tick) => tick && tick.index === activeIndex);
	if (entry) {
		if (layout === "horizontal") return {
			x: entry.coordinate,
			y: pointer.relativeY
		};
		if (layout === "vertical") return {
			x: pointer.relativeX,
			y: entry.coordinate
		};
	}
	return {
		x: 0,
		y: 0
	};
};
/**
* Get the active coordinate in polar coordinate system.
* Internally we only really use x and y, but this returned object is part of public API
* (because it goes straight to the tooltip content) so we keep all the other properties
* for backwards compatibility.
*
* @param layout - The polar layout type ('centric' or 'radial').
* @param tooltipTicks - Array of tick items used for tooltips.
* @param activeIndex - The index of the active tick.
* @param rangeObj - The range object containing polar chart properties.
* @returns The active coordinate object with polar properties.
*/
var getActivePolarCoordinate = (layout, tooltipTicks, activeIndex, rangeObj) => {
	var entry = tooltipTicks.find((tick) => tick && tick.index === activeIndex);
	if (entry) {
		if (layout === "centric") {
			var _angle = entry.coordinate;
			var { radius: _radius } = rangeObj;
			return _objectSpread$23(_objectSpread$23(_objectSpread$23({}, rangeObj), polarToCartesian(rangeObj.cx, rangeObj.cy, _radius, _angle)), {}, {
				angle: _angle,
				radius: _radius
			});
		}
		var radius = entry.coordinate;
		var { angle } = rangeObj;
		return _objectSpread$23(_objectSpread$23(_objectSpread$23({}, rangeObj), polarToCartesian(rangeObj.cx, rangeObj.cy, radius, angle)), {}, {
			angle,
			radius
		});
	}
	return {
		angle: 0,
		clockWise: false,
		cx: 0,
		cy: 0,
		endAngle: 0,
		innerRadius: 0,
		outerRadius: 0,
		radius: 0,
		startAngle: 0,
		x: 0,
		y: 0
	};
};
function isInCartesianRange(pointer, offset) {
	var { relativeX: x, relativeY: y } = pointer;
	return x >= offset.left && x <= offset.left + offset.width && y >= offset.top && y <= offset.top + offset.height;
}
var calculateActiveTickIndex = (coordinate, ticks, unsortedTicks, axisType, range) => {
	var _ticks$length;
	var len = (_ticks$length = ticks === null || ticks === void 0 ? void 0 : ticks.length) !== null && _ticks$length !== void 0 ? _ticks$length : 0;
	if (len <= 1 || coordinate == null) return 0;
	if (axisType === "angleAxis" && range != null && Math.abs(Math.abs(range[1] - range[0]) - 360) <= 1e-6) for (var i = 0; i < len; i++) {
		var _unsortedTicks, _unsortedTicks2, _unsortedTicks$i, _unsortedTicks$, _unsortedTicks3;
		var before = i > 0 ? (_unsortedTicks = unsortedTicks[i - 1]) === null || _unsortedTicks === void 0 ? void 0 : _unsortedTicks.coordinate : (_unsortedTicks2 = unsortedTicks[len - 1]) === null || _unsortedTicks2 === void 0 ? void 0 : _unsortedTicks2.coordinate;
		var cur = (_unsortedTicks$i = unsortedTicks[i]) === null || _unsortedTicks$i === void 0 ? void 0 : _unsortedTicks$i.coordinate;
		var after = i >= len - 1 ? (_unsortedTicks$ = unsortedTicks[0]) === null || _unsortedTicks$ === void 0 ? void 0 : _unsortedTicks$.coordinate : (_unsortedTicks3 = unsortedTicks[i + 1]) === null || _unsortedTicks3 === void 0 ? void 0 : _unsortedTicks3.coordinate;
		var sameDirectionCoord = void 0;
		if (before == null || cur == null || after == null) continue;
		if (mathSign(cur - before) !== mathSign(after - cur)) {
			var diffInterval = [];
			if (mathSign(after - cur) === mathSign(range[1] - range[0])) {
				sameDirectionCoord = after;
				var curInRange = cur + range[1] - range[0];
				diffInterval[0] = Math.min(curInRange, (curInRange + before) / 2);
				diffInterval[1] = Math.max(curInRange, (curInRange + before) / 2);
			} else {
				sameDirectionCoord = before;
				var afterInRange = after + range[1] - range[0];
				diffInterval[0] = Math.min(cur, (afterInRange + cur) / 2);
				diffInterval[1] = Math.max(cur, (afterInRange + cur) / 2);
			}
			var sameInterval = [Math.min(cur, (sameDirectionCoord + cur) / 2), Math.max(cur, (sameDirectionCoord + cur) / 2)];
			if (coordinate > sameInterval[0] && coordinate <= sameInterval[1] || coordinate >= diffInterval[0] && coordinate <= diffInterval[1]) {
				var _unsortedTicks$i2;
				return (_unsortedTicks$i2 = unsortedTicks[i]) === null || _unsortedTicks$i2 === void 0 ? void 0 : _unsortedTicks$i2.index;
			}
		} else {
			var minValue = Math.min(before, after);
			var maxValue = Math.max(before, after);
			if (coordinate > (minValue + cur) / 2 && coordinate <= (maxValue + cur) / 2) {
				var _unsortedTicks$i3;
				return (_unsortedTicks$i3 = unsortedTicks[i]) === null || _unsortedTicks$i3 === void 0 ? void 0 : _unsortedTicks$i3.index;
			}
		}
	}
	else if (ticks) for (var _i = 0; _i < len; _i++) {
		var curr = ticks[_i];
		if (curr == null) continue;
		var next = ticks[_i + 1];
		var prev = ticks[_i - 1];
		if (_i === 0 && next != null && coordinate <= (curr.coordinate + next.coordinate) / 2) return curr.index;
		if (_i === len - 1 && prev != null && coordinate > (curr.coordinate + prev.coordinate) / 2) return curr.index;
		if (_i > 0 && _i < len - 1 && prev != null && next != null && coordinate > (curr.coordinate + prev.coordinate) / 2 && coordinate <= (curr.coordinate + next.coordinate) / 2) return curr.index;
	}
	return -1;
};
var useChartName = () => {
	return useAppSelector(selectChartName);
};
var pickTooltipEventType = (_state, tooltipEventType) => tooltipEventType;
var pickTrigger = (_state, _tooltipEventType, trigger) => trigger;
var pickDefaultIndex = (_state, _tooltipEventType, _trigger, defaultIndex) => defaultIndex;
var selectOrderedTooltipTicks = createSelector(selectTooltipAxisTicks, (ticks) => sortBy(ticks, (o) => o.coordinate));
var selectTooltipInteractionState = createSelector([
	selectTooltipState,
	pickTooltipEventType,
	pickTrigger,
	pickDefaultIndex
], combineTooltipInteractionState);
var selectActiveIndex = createSelector([
	selectTooltipInteractionState,
	selectTooltipDisplayedData,
	selectTooltipAxisDataKey,
	selectTooltipAxisDomain
], combineActiveTooltipIndex);
var selectTooltipDataKey = (state, tooltipEventType, trigger) => {
	if (tooltipEventType == null) return;
	var tooltipState = selectTooltipState(state);
	if (tooltipEventType === "axis") {
		if (trigger === "hover") return tooltipState.axisInteraction.hover.dataKey;
		return tooltipState.axisInteraction.click.dataKey;
	}
	if (trigger === "hover") return tooltipState.itemInteraction.hover.dataKey;
	return tooltipState.itemInteraction.click.dataKey;
};
var selectTooltipPayloadConfigurations = createSelector([
	selectTooltipState,
	pickTooltipEventType,
	pickTrigger,
	pickDefaultIndex
], combineTooltipPayloadConfigurations);
var selectCoordinateForDefaultIndex = createSelector([
	selectChartWidth,
	selectChartHeight,
	selectChartLayout,
	selectChartOffsetInternal,
	selectTooltipAxisTicks,
	pickDefaultIndex,
	selectTooltipPayloadConfigurations
], combineCoordinateForDefaultIndex);
var selectActiveCoordinate = createSelector([selectTooltipInteractionState, selectCoordinateForDefaultIndex], (tooltipInteractionState, defaultIndexCoordinate) => {
	var _tooltipInteractionSt;
	return (_tooltipInteractionSt = tooltipInteractionState.coordinate) !== null && _tooltipInteractionSt !== void 0 ? _tooltipInteractionSt : defaultIndexCoordinate;
});
var selectActiveLabel = createSelector([selectTooltipAxisTicks, selectActiveIndex], combineActiveLabel);
var selectTooltipPayload = createSelector([
	selectTooltipPayloadConfigurations,
	selectActiveIndex,
	selectChartDataWithIndexes,
	selectTooltipAxisDataKey,
	selectActiveLabel,
	selectTooltipPayloadSearcher,
	pickTooltipEventType
], combineTooltipPayload);
var selectIsTooltipActive = createSelector([selectTooltipInteractionState, selectActiveIndex], (tooltipInteractionState, activeIndex) => {
	return {
		isActive: tooltipInteractionState.active && activeIndex != null,
		activeIndex
	};
});
var combineActiveCartesianProps = (chartEvent, layout, tooltipAxisType, tooltipAxisRange, tooltipTicks, orderedTooltipTicks, offset) => {
	if (!chartEvent || !tooltipAxisType || !tooltipAxisRange || !tooltipTicks) return;
	if (!isInCartesianRange(chartEvent, offset)) return;
	var activeIndex = calculateActiveTickIndex(calculateCartesianTooltipPos(chartEvent, layout), orderedTooltipTicks, tooltipTicks, tooltipAxisType, tooltipAxisRange);
	var activeCoordinate = getActiveCartesianCoordinate(layout, tooltipTicks, activeIndex, chartEvent);
	return {
		activeIndex: String(activeIndex),
		activeCoordinate
	};
};
var combineActivePolarProps = (chartEvent, layout, polarViewBox, tooltipAxisType, tooltipAxisRange, tooltipTicks, orderedTooltipTicks) => {
	if (!chartEvent || !tooltipAxisType || !tooltipAxisRange || !tooltipTicks || !polarViewBox) return;
	var rangeObj = inRangeOfSector(chartEvent, polarViewBox);
	if (!rangeObj) return;
	var activeIndex = calculateActiveTickIndex(calculatePolarTooltipPos(rangeObj, layout), orderedTooltipTicks, tooltipTicks, tooltipAxisType, tooltipAxisRange);
	var activeCoordinate = getActivePolarCoordinate(layout, tooltipTicks, activeIndex, rangeObj);
	return {
		activeIndex: String(activeIndex),
		activeCoordinate
	};
};
var combineActiveProps = (chartEvent, layout, polarViewBox, tooltipAxisType, tooltipAxisRange, tooltipTicks, orderedTooltipTicks, offset) => {
	if (!chartEvent || !layout || !tooltipAxisType || !tooltipAxisRange || !tooltipTicks) return;
	if (layout === "horizontal" || layout === "vertical") return combineActiveCartesianProps(chartEvent, layout, tooltipAxisType, tooltipAxisRange, tooltipTicks, orderedTooltipTicks, offset);
	return combineActivePolarProps(chartEvent, layout, polarViewBox, tooltipAxisType, tooltipAxisRange, tooltipTicks, orderedTooltipTicks);
};
var legendSlice = createSlice({
	name: "legend",
	initialState: {
		settings: {
			layout: "horizontal",
			align: "center",
			verticalAlign: "middle",
			itemSorter: "value"
		},
		size: {
			width: 0,
			height: 0
		},
		payload: []
	},
	reducers: {
		setLegendSize(state, action) {
			state.size.width = action.payload.width;
			state.size.height = action.payload.height;
		},
		setLegendSettings(state, action) {
			state.settings.align = action.payload.align;
			state.settings.layout = action.payload.layout;
			state.settings.verticalAlign = action.payload.verticalAlign;
			state.settings.itemSorter = action.payload.itemSorter;
		},
		addLegendPayload: {
			reducer(state, action) {
				state.payload.push(castDraft(action.payload));
			},
			prepare: prepareAutoBatched()
		},
		replaceLegendPayload: {
			reducer(state, action) {
				var { prev, next } = action.payload;
				var index = current(state).payload.indexOf(castDraft(prev));
				if (index > -1) state.payload[index] = castDraft(next);
			},
			prepare: prepareAutoBatched()
		},
		removeLegendPayload: {
			reducer(state, action) {
				var index = current(state).payload.indexOf(castDraft(action.payload));
				if (index > -1) state.payload.splice(index, 1);
			},
			prepare: prepareAutoBatched()
		}
	}
});
var { setLegendSize, setLegendSettings, addLegendPayload, replaceLegendPayload, removeLegendPayload } = legendSlice.actions;
var legendReducer = legendSlice.reducer;
function SetLegendPayload(_ref) {
	var { legendPayload } = _ref;
	var dispatch = useAppDispatch();
	var isPanorama = useIsPanorama();
	var prevPayloadRef = (0, import_react.useRef)(null);
	(0, import_react.useLayoutEffect)(() => {
		if (isPanorama) return;
		if (prevPayloadRef.current === null) dispatch(addLegendPayload(legendPayload));
		else if (prevPayloadRef.current !== legendPayload) dispatch(replaceLegendPayload({
			prev: prevPayloadRef.current,
			next: legendPayload
		}));
		prevPayloadRef.current = legendPayload;
	}, [
		dispatch,
		isPanorama,
		legendPayload
	]);
	(0, import_react.useLayoutEffect)(() => {
		return () => {
			if (prevPayloadRef.current) {
				dispatch(removeLegendPayload(prevPayloadRef.current));
				prevPayloadRef.current = null;
			}
		};
	}, [dispatch]);
	return null;
}
/**
* This hook returns a unique animation id for the object input.
* If input changes (as in, reference equality is different), the animation id will change.
* If input does not change, the animation id will not change.
*
* This is useful for animations. The Animate component
* does have a `shouldReAnimate` prop but that doesn't seem to be doing what the name implies.
* Also, we don't always want to re-animate on every render;
* we only want to re-animate when the input changes. Not the internal state (e.g. `isAnimating`).
*
* @param input The object to check for changes. Uses reference equality (=== operator)
* @param prefix Optional prefix to use for the animation id
* @returns A unique animation id
*/
function useAnimationId(input) {
	var prefix = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "animation-";
	var animationId = (0, import_react.useRef)(uniqueId(prefix));
	var prevProps = (0, import_react.useRef)(input);
	if (prevProps.current !== input) {
		animationId.current = uniqueId(prefix);
		prevProps.current = input;
	}
	return animationId.current;
}
var _ref;
/**
* Fallback for React.useId() for versions prior to React 18.
* Generates a unique ID using a simple counter and a prefix.
*
* @returns A unique ID that remains consistent across renders.
*/
var useIdFallback = () => {
	var [id] = import_react.useState(() => uniqueId("uid-"));
	return id;
};
var useId$1 = (_ref = import_react["useId".toString()]) !== null && _ref !== void 0 ? _ref : useIdFallback;
/**
* A hook that generates a unique ID. It uses React.useId() in React 18+ for SSR safety
* and falls back to a client-side-only unique ID generator for older versions.
*
* The ID will stay the same across renders, and you can optionally provide a prefix.
*
* @param [prefix] - An optional prefix for the generated ID.
* @param [customId] - An optional custom ID to override the generated one.
* @returns The unique ID.
*/
function useUniqueId(prefix, customId) {
	var generatedId = useId$1();
	if (customId) return customId;
	return prefix ? "".concat(prefix, "-").concat(generatedId) : generatedId;
}
/**
* The useUniqueId hook returns a unique ID that is either reused from external props or generated internally.
* Either way the ID is now guaranteed to be present so no more nulls or undefined.
*/
var GraphicalItemIdContext = /* @__PURE__ */ (0, import_react.createContext)(void 0);
var RegisterGraphicalItemId = (_ref) => {
	var { id, type, children } = _ref;
	var resolvedId = useUniqueId("recharts-".concat(type), id);
	return /* @__PURE__ */ import_react.createElement(GraphicalItemIdContext.Provider, { value: resolvedId }, children(resolvedId));
};
var graphicalItemsSlice = createSlice({
	name: "graphicalItems",
	initialState: {
		cartesianItems: [],
		polarItems: []
	},
	reducers: {
		addCartesianGraphicalItem: {
			reducer(state, action) {
				state.cartesianItems.push(castDraft(action.payload));
			},
			prepare: prepareAutoBatched()
		},
		replaceCartesianGraphicalItem: {
			reducer(state, action) {
				var { prev, next } = action.payload;
				var index = current(state).cartesianItems.indexOf(castDraft(prev));
				if (index > -1) state.cartesianItems[index] = castDraft(next);
			},
			prepare: prepareAutoBatched()
		},
		removeCartesianGraphicalItem: {
			reducer(state, action) {
				var index = current(state).cartesianItems.indexOf(castDraft(action.payload));
				if (index > -1) state.cartesianItems.splice(index, 1);
			},
			prepare: prepareAutoBatched()
		},
		addPolarGraphicalItem: {
			reducer(state, action) {
				state.polarItems.push(castDraft(action.payload));
			},
			prepare: prepareAutoBatched()
		},
		removePolarGraphicalItem: {
			reducer(state, action) {
				var index = current(state).polarItems.indexOf(castDraft(action.payload));
				if (index > -1) state.polarItems.splice(index, 1);
			},
			prepare: prepareAutoBatched()
		},
		replacePolarGraphicalItem: {
			reducer(state, action) {
				var { prev, next } = action.payload;
				var index = current(state).polarItems.indexOf(castDraft(prev));
				if (index > -1) state.polarItems[index] = castDraft(next);
			},
			prepare: prepareAutoBatched()
		}
	}
});
var { addCartesianGraphicalItem, replaceCartesianGraphicalItem, removeCartesianGraphicalItem, addPolarGraphicalItem, removePolarGraphicalItem, replacePolarGraphicalItem } = graphicalItemsSlice.actions;
var graphicalItemsReducer = graphicalItemsSlice.reducer;
var SetCartesianGraphicalItemImpl = (props) => {
	var dispatch = useAppDispatch();
	var prevPropsRef = (0, import_react.useRef)(null);
	(0, import_react.useLayoutEffect)(() => {
		if (prevPropsRef.current === null) dispatch(addCartesianGraphicalItem(props));
		else if (prevPropsRef.current !== props) dispatch(replaceCartesianGraphicalItem({
			prev: prevPropsRef.current,
			next: props
		}));
		prevPropsRef.current = props;
	}, [dispatch, props]);
	(0, import_react.useLayoutEffect)(() => {
		return () => {
			if (prevPropsRef.current) {
				dispatch(removeCartesianGraphicalItem(prevPropsRef.current));
				prevPropsRef.current = null;
			}
		};
	}, [dispatch]);
	return null;
};
var SetCartesianGraphicalItem = /* @__PURE__ */ (0, import_react.memo)(SetCartesianGraphicalItemImpl);
function ownKeys$22(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r) {
			return Object.getOwnPropertyDescriptor(e, r).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread$22(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys$22(Object(t), !0).forEach(function(r) {
			_defineProperty$22(e, r, t[r]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$22(Object(t)).forEach(function(r) {
			Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
		});
	}
	return e;
}
function _defineProperty$22(e, r, t) {
	return (r = _toPropertyKey$22(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}
function _toPropertyKey$22(t) {
	var i = _toPrimitive$22(t, "string");
	return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive$22(t, r) {
	if ("object" != typeof t || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != typeof i) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
var getDashCase = (name) => name.replace(/([A-Z])/g, (v) => "-".concat(v.toLowerCase()));
var getTransitionVal = (props, duration, easing) => props.map((prop) => "".concat(getDashCase(prop), " ").concat(duration, "ms ").concat(easing)).join(",");
/**
* Finds the intersection of keys between two objects
* @param {object} preObj previous object
* @param {object} nextObj next object
* @returns an array of keys that exist in both objects
*/
var getIntersectionKeys = (preObj, nextObj) => [Object.keys(preObj), Object.keys(nextObj)].reduce((a, b) => a.filter((c) => b.includes(c)));
/**
* Maps an object to another object
* @param {function} fn function to map
* @param {object} obj object to map
* @returns mapped object
*/
var mapObject = (fn, obj) => Object.keys(obj).reduce((res, key) => _objectSpread$22(_objectSpread$22({}, res), {}, { [key]: fn(key, obj[key]) }), {});
function ownKeys$21(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r) {
			return Object.getOwnPropertyDescriptor(e, r).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread$21(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys$21(Object(t), !0).forEach(function(r) {
			_defineProperty$21(e, r, t[r]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$21(Object(t)).forEach(function(r) {
			Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
		});
	}
	return e;
}
function _defineProperty$21(e, r, t) {
	return (r = _toPropertyKey$21(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}
function _toPropertyKey$21(t) {
	var i = _toPrimitive$21(t, "string");
	return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive$21(t, r) {
	if ("object" != typeof t || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != typeof i) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
var alpha = (begin, end, k) => begin + (end - begin) * k;
var needContinue = (_ref) => {
	var { from, to } = _ref;
	return from !== to;
};
var calStepperVals = (easing, preVals, steps) => {
	var nextStepVals = mapObject((key, val) => {
		if (needContinue(val)) {
			var [newX, newV] = easing(val.from, val.to, val.velocity);
			return _objectSpread$21(_objectSpread$21({}, val), {}, {
				from: newX,
				velocity: newV
			});
		}
		return val;
	}, preVals);
	if (steps < 1) return mapObject((key, val) => {
		if (needContinue(val) && nextStepVals[key] != null) return _objectSpread$21(_objectSpread$21({}, val), {}, {
			velocity: alpha(val.velocity, nextStepVals[key].velocity, steps),
			from: alpha(val.from, nextStepVals[key].from, steps)
		});
		return val;
	}, preVals);
	return calStepperVals(easing, nextStepVals, steps - 1);
};
function createStepperUpdate(from, to, easing, interKeys, render, timeoutController) {
	var preTime;
	var stepperStyle = interKeys.reduce((res, key) => _objectSpread$21(_objectSpread$21({}, res), {}, { [key]: {
		from: from[key],
		velocity: 0,
		to: to[key]
	} }), {});
	var getCurrStyle = () => mapObject((key, val) => val.from, stepperStyle);
	var shouldStopAnimation = () => !Object.values(stepperStyle).filter(needContinue).length;
	var stopAnimation = null;
	var stepperUpdate = (now) => {
		if (!preTime) preTime = now;
		var steps = (now - preTime) / easing.dt;
		stepperStyle = calStepperVals(easing, stepperStyle, steps);
		render(_objectSpread$21(_objectSpread$21(_objectSpread$21({}, from), to), getCurrStyle()));
		preTime = now;
		if (!shouldStopAnimation()) stopAnimation = timeoutController.setTimeout(stepperUpdate);
	};
	return () => {
		stopAnimation = timeoutController.setTimeout(stepperUpdate);
		return () => {
			var _stopAnimation;
			(_stopAnimation = stopAnimation) === null || _stopAnimation === void 0 || _stopAnimation();
		};
	};
}
function createTimingUpdate(from, to, easing, duration, interKeys, render, timeoutController) {
	var stopAnimation = null;
	var timingStyle = interKeys.reduce((res, key) => {
		var fromElement = from[key];
		var toElement = to[key];
		if (fromElement == null || toElement == null) return res;
		return _objectSpread$21(_objectSpread$21({}, res), {}, { [key]: [fromElement, toElement] });
	}, {});
	var beginTime;
	var timingUpdate = (now) => {
		if (!beginTime) beginTime = now;
		var t = (now - beginTime) / duration;
		var currStyle = mapObject((key, val) => alpha(...val, easing(t)), timingStyle);
		render(_objectSpread$21(_objectSpread$21(_objectSpread$21({}, from), to), currStyle));
		if (t < 1) stopAnimation = timeoutController.setTimeout(timingUpdate);
		else {
			var finalStyle = mapObject((key, val) => alpha(...val, easing(1)), timingStyle);
			render(_objectSpread$21(_objectSpread$21(_objectSpread$21({}, from), to), finalStyle));
		}
	};
	return () => {
		stopAnimation = timeoutController.setTimeout(timingUpdate);
		return () => {
			var _stopAnimation2;
			(_stopAnimation2 = stopAnimation) === null || _stopAnimation2 === void 0 || _stopAnimation2();
		};
	};
}
var configUpdate_default = (from, to, easing, duration, render, timeoutController) => {
	var interKeys = getIntersectionKeys(from, to);
	if (easing == null) return () => {
		render(_objectSpread$21(_objectSpread$21({}, from), to));
		return () => {};
	};
	return easing.isStepper === true ? createStepperUpdate(from, to, easing, interKeys, render, timeoutController) : createTimingUpdate(from, to, easing, duration, interKeys, render, timeoutController);
};
var cubicBezierFactor = (c1, c2) => [
	0,
	3 * c1,
	3 * c2 - 6 * c1,
	3 * c1 - 3 * c2 + 1
];
var evaluatePolynomial = (params, t) => params.map((param, i) => param * t ** i).reduce((pre, curr) => pre + curr);
var cubicBezier = (c1, c2) => (t) => {
	return evaluatePolynomial(cubicBezierFactor(c1, c2), t);
};
var derivativeCubicBezier = (c1, c2) => (t) => {
	return evaluatePolynomial([...cubicBezierFactor(c1, c2).map((param, i) => param * i).slice(1), 0], t);
};
var parseCubicBezier = (easing) => {
	var _easingParts$;
	var easingParts = easing.split("(");
	if (easingParts.length !== 2 || easingParts[0] !== "cubic-bezier") return null;
	var numbers = (_easingParts$ = easingParts[1]) === null || _easingParts$ === void 0 || (_easingParts$ = _easingParts$.split(")")[0]) === null || _easingParts$ === void 0 ? void 0 : _easingParts$.split(",");
	if (numbers == null || numbers.length !== 4) return null;
	var coords = numbers.map((x) => parseFloat(x));
	return [
		coords[0],
		coords[1],
		coords[2],
		coords[3]
	];
};
var getBezierCoordinates = function getBezierCoordinates() {
	for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
	if (args.length === 1) switch (args[0]) {
		case "linear": return [
			0,
			0,
			1,
			1
		];
		case "ease": return [
			.25,
			.1,
			.25,
			1
		];
		case "ease-in": return [
			.42,
			0,
			1,
			1
		];
		case "ease-out": return [
			.42,
			0,
			.58,
			1
		];
		case "ease-in-out": return [
			0,
			0,
			.58,
			1
		];
		default:
			var easing = parseCubicBezier(args[0]);
			if (easing) return easing;
	}
	if (args.length === 4) return args;
	return [
		0,
		0,
		1,
		1
	];
};
var createBezierEasing = (x1, y1, x2, y2) => {
	var curveX = cubicBezier(x1, x2);
	var curveY = cubicBezier(y1, y2);
	var derCurveX = derivativeCubicBezier(x1, x2);
	var rangeValue = (value) => {
		if (value > 1) return 1;
		if (value < 0) return 0;
		return value;
	};
	var bezier = (_t) => {
		var t = _t > 1 ? 1 : _t;
		var x = t;
		for (var i = 0; i < 8; ++i) {
			var evalT = curveX(x) - t;
			var derVal = derCurveX(x);
			if (Math.abs(evalT - t) < 1e-4 || derVal < 1e-4) return curveY(x);
			x = rangeValue(x - evalT / derVal);
		}
		return curveY(x);
	};
	bezier.isStepper = false;
	return bezier;
};
var configBezier = function configBezier() {
	return createBezierEasing(...getBezierCoordinates(...arguments));
};
var configSpring = function configSpring() {
	var { stiff = 100, damping = 8, dt = 17 } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
	var stepper = (currX, destX, currV) => {
		var newV = currV + (-(currX - destX) * stiff - currV * damping) * dt / 1e3;
		var newX = currV * dt / 1e3 + currX;
		if (Math.abs(newX - destX) < 1e-4 && Math.abs(newV) < 1e-4) return [destX, 0];
		return [newX, newV];
	};
	stepper.isStepper = true;
	stepper.dt = dt;
	return stepper;
};
var configEasing = (easing) => {
	if (typeof easing === "string") switch (easing) {
		case "ease":
		case "ease-in-out":
		case "ease-out":
		case "ease-in":
		case "linear": return configBezier(easing);
		case "spring": return configSpring();
		default: if (easing.split("(")[0] === "cubic-bezier") return configBezier(easing);
	}
	if (typeof easing === "function") return easing;
	return null;
};
/**
* Represents a single item in the ReactSmoothQueue.
* The item can be:
* - A number representing a delay in milliseconds.
* - An object representing a style change
* - A StartAnimationFunction that starts eased transition and calls different render
*      because of course in Recharts we have to have three ways to do everything
* - An arbitrary function to be executed
*/
function createAnimateManager(timeoutController) {
	var currStyle;
	var handleChange = () => null;
	var shouldStop = false;
	var cancelTimeout = null;
	var setStyle = (_style) => {
		if (shouldStop) return;
		if (Array.isArray(_style)) {
			if (!_style.length) return;
			var [curr, ...restStyles] = _style;
			if (typeof curr === "number") {
				cancelTimeout = timeoutController.setTimeout(setStyle.bind(null, restStyles), curr);
				return;
			}
			setStyle(curr);
			cancelTimeout = timeoutController.setTimeout(setStyle.bind(null, restStyles));
			return;
		}
		if (typeof _style === "string") {
			currStyle = _style;
			handleChange(currStyle);
		}
		if (typeof _style === "object") {
			currStyle = _style;
			handleChange(currStyle);
		}
		if (typeof _style === "function") _style();
	};
	return {
		stop: () => {
			shouldStop = true;
		},
		start: (style) => {
			shouldStop = false;
			if (cancelTimeout) {
				cancelTimeout();
				cancelTimeout = null;
			}
			setStyle(style);
		},
		subscribe: (_handleChange) => {
			handleChange = _handleChange;
			return () => {
				handleChange = () => null;
			};
		},
		getTimeoutController: () => timeoutController
	};
}
/**
* Callback type for the timeout function.
* Receives current time in milliseconds as an argument.
*/
/**
* A function that, when called, cancels the timeout.
*/
var RequestAnimationFrameTimeoutController = class {
	setTimeout(callback) {
		var delay = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
		var startTime = performance.now();
		var requestId = null;
		var executeCallback = (now) => {
			if (now - startTime >= delay) callback(now);
			else if (typeof requestAnimationFrame === "function") requestId = requestAnimationFrame(executeCallback);
		};
		requestId = requestAnimationFrame(executeCallback);
		return () => {
			if (requestId != null) cancelAnimationFrame(requestId);
		};
	}
};
function createDefaultAnimationManager() {
	return createAnimateManager(new RequestAnimationFrameTimeoutController());
}
var AnimationManagerContext = /* @__PURE__ */ (0, import_react.createContext)(createDefaultAnimationManager);
function useAnimationManager(animationId, animationManagerFromProps) {
	var contextAnimationManager = (0, import_react.useContext)(AnimationManagerContext);
	return (0, import_react.useMemo)(() => animationManagerFromProps !== null && animationManagerFromProps !== void 0 ? animationManagerFromProps : contextAnimationManager(animationId), [
		animationId,
		animationManagerFromProps,
		contextAnimationManager
	]);
}
/**
* Detects and subscribes to the user's `prefers-reduced-motion` system preference.
* Returns `true` when the user prefers reduced motion, `false` otherwise.
* SSR-safe: always returns `false` during server-side rendering.
*/
function usePrefersReducedMotion() {
	var [prefersReducedMotion, setPrefersReducedMotion] = (0, import_react.useState)(() => {
		if (Global.isSsr) return false;
		if (!window.matchMedia) return false;
		return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
	});
	(0, import_react.useEffect)(() => {
		if (!window.matchMedia) return;
		var mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
		var handleChange = () => {
			setPrefersReducedMotion(mediaQuery.matches);
		};
		mediaQuery.addEventListener("change", handleChange);
		return () => {
			mediaQuery.removeEventListener("change", handleChange);
		};
	}, []);
	return prefersReducedMotion;
}
var defaultJavascriptAnimateProps = {
	begin: 0,
	duration: 1e3,
	easing: "ease",
	isActive: true,
	canBegin: true,
	onAnimationEnd: () => {},
	onAnimationStart: () => {}
};
var from = { t: 0 };
var to = { t: 1 };
function JavascriptAnimate(outsideProps) {
	var props = resolveDefaultProps(outsideProps, defaultJavascriptAnimateProps);
	var { isActive: isActiveProp, canBegin, duration, easing, begin, onAnimationEnd, onAnimationStart, children } = props;
	var prefersReducedMotion = usePrefersReducedMotion();
	var isActive = isActiveProp === "auto" ? !Global.isSsr && !prefersReducedMotion : isActiveProp;
	var animationManager = useAnimationManager(props.animationId, props.animationManager);
	var [style, setStyle] = (0, import_react.useState)(isActive ? from : to);
	var stopJSAnimation = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (!isActive) setStyle(to);
	}, [isActive]);
	(0, import_react.useEffect)(() => {
		if (!isActive || !canBegin) return noop$2;
		var startAnimation = configUpdate_default(from, to, configEasing(easing), duration, setStyle, animationManager.getTimeoutController());
		var onAnimationActive = () => {
			stopJSAnimation.current = startAnimation();
		};
		animationManager.start([
			onAnimationStart,
			begin,
			onAnimationActive,
			duration,
			onAnimationEnd
		]);
		return () => {
			animationManager.stop();
			if (stopJSAnimation.current) stopJSAnimation.current();
			onAnimationEnd();
		};
	}, [
		isActive,
		canBegin,
		duration,
		easing,
		begin,
		onAnimationStart,
		onAnimationEnd,
		animationManager
	]);
	return children(style.t);
}
function getRadiusAndStrokeWidthFromDot(dot) {
	var props = svgPropertiesNoEventsFromUnknown(dot);
	var defaultR = 3;
	var defaultStrokeWidth = 2;
	if (props != null) {
		var { r, strokeWidth } = props;
		var realR = Number(r);
		var realStrokeWidth = Number(strokeWidth);
		if (Number.isNaN(realR) || realR < 0) realR = defaultR;
		if (Number.isNaN(realStrokeWidth) || realStrokeWidth < 0) realStrokeWidth = defaultStrokeWidth;
		return {
			r: realR,
			strokeWidth: realStrokeWidth
		};
	}
	return {
		r: defaultR,
		strokeWidth: defaultStrokeWidth
	};
}
/**
* @license React
* use-sync-external-store-with-selector.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_use_sync_external_store_with_selector_production = /* @__PURE__ */ __commonJSMin(((exports) => {
	var React = require_react();
	React.useSyncExternalStore;
	React.useRef;
	React.useEffect;
	React.useMemo;
	React.useDebugValue;
}));
(/* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_use_sync_external_store_with_selector_production();
})))();
function defaultNoopBatch(callback) {
	callback();
}
function createListenerCollection() {
	let first = null;
	let last = null;
	return {
		clear() {
			first = null;
			last = null;
		},
		notify() {
			defaultNoopBatch(() => {
				let listener = first;
				while (listener) {
					listener.callback();
					listener = listener.next;
				}
			});
		},
		get() {
			const listeners = [];
			let listener = first;
			while (listener) {
				listeners.push(listener);
				listener = listener.next;
			}
			return listeners;
		},
		subscribe(callback) {
			let isSubscribed = true;
			const listener = last = {
				callback,
				next: null,
				prev: last
			};
			if (listener.prev) listener.prev.next = listener;
			else first = listener;
			return function unsubscribe() {
				if (!isSubscribed || first === null) return;
				isSubscribed = false;
				if (listener.next) listener.next.prev = listener.prev;
				else last = listener.prev;
				if (listener.prev) listener.prev.next = listener.next;
				else first = listener.next;
			};
		}
	};
}
var nullListeners = {
	notify() {},
	get: () => []
};
function createSubscription(store, parentSub) {
	let unsubscribe;
	let listeners = nullListeners;
	let subscriptionsAmount = 0;
	let selfSubscribed = false;
	function addNestedSub(listener) {
		trySubscribe();
		const cleanupListener = listeners.subscribe(listener);
		let removed = false;
		return () => {
			if (!removed) {
				removed = true;
				cleanupListener();
				tryUnsubscribe();
			}
		};
	}
	function notifyNestedSubs() {
		listeners.notify();
	}
	function handleChangeWrapper() {
		if (subscription.onStateChange) subscription.onStateChange();
	}
	function isSubscribed() {
		return selfSubscribed;
	}
	function trySubscribe() {
		subscriptionsAmount++;
		if (!unsubscribe) {
			unsubscribe = parentSub ? parentSub.addNestedSub(handleChangeWrapper) : store.subscribe(handleChangeWrapper);
			listeners = createListenerCollection();
		}
	}
	function tryUnsubscribe() {
		subscriptionsAmount--;
		if (unsubscribe && subscriptionsAmount === 0) {
			unsubscribe();
			unsubscribe = void 0;
			listeners.clear();
			listeners = nullListeners;
		}
	}
	function trySubscribeSelf() {
		if (!selfSubscribed) {
			selfSubscribed = true;
			trySubscribe();
		}
	}
	function tryUnsubscribeSelf() {
		if (selfSubscribed) {
			selfSubscribed = false;
			tryUnsubscribe();
		}
	}
	const subscription = {
		addNestedSub,
		notifyNestedSubs,
		handleChangeWrapper,
		isSubscribed,
		trySubscribe: trySubscribeSelf,
		tryUnsubscribe: tryUnsubscribeSelf,
		getListeners: () => listeners
	};
	return subscription;
}
var canUseDOM = () => !!(typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined");
var isDOM = /* @__PURE__ */ canUseDOM();
var isRunningInReactNative = () => typeof navigator !== "undefined" && navigator.product === "ReactNative";
var isReactNative = /* @__PURE__ */ isRunningInReactNative();
var getUseIsomorphicLayoutEffect = () => isDOM || isReactNative ? import_react.useLayoutEffect : import_react.useEffect;
var useIsomorphicLayoutEffect$1 = /* @__PURE__ */ getUseIsomorphicLayoutEffect();
function is(x, y) {
	if (x === y) return x !== 0 || y !== 0 || 1 / x === 1 / y;
	else return x !== x && y !== y;
}
function shallowEqual$1(objA, objB) {
	if (is(objA, objB)) return true;
	if (typeof objA !== "object" || objA === null || typeof objB !== "object" || objB === null) return false;
	const keysA = Object.keys(objA);
	const keysB = Object.keys(objB);
	if (keysA.length !== keysB.length) return false;
	for (let i = 0; i < keysA.length; i++) if (!Object.prototype.hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) return false;
	return true;
}
var ContextKey = /* @__PURE__ */ Symbol.for(`react-redux-context`);
var gT = typeof globalThis !== "undefined" ? globalThis : {};
function getContext() {
	if (!import_react.createContext) return {};
	const contextMap = gT[ContextKey] ??= /* @__PURE__ */ new Map();
	let realContext = contextMap.get(import_react.createContext);
	if (!realContext) {
		realContext = import_react.createContext(null);
		contextMap.set(import_react.createContext, realContext);
	}
	return realContext;
}
var ReactReduxContext = /* @__PURE__ */ getContext();
function Provider(providerProps) {
	const { children, context, serverState, store } = providerProps;
	const contextValue = import_react.useMemo(() => {
		return {
			store,
			subscription: createSubscription(store),
			getServerState: serverState ? () => serverState : void 0
		};
	}, [store, serverState]);
	const previousState = import_react.useMemo(() => store.getState(), [store]);
	useIsomorphicLayoutEffect$1(() => {
		const { subscription } = contextValue;
		subscription.onStateChange = subscription.notifyNestedSubs;
		subscription.trySubscribe();
		if (previousState !== store.getState()) subscription.notifyNestedSubs();
		return () => {
			subscription.tryUnsubscribe();
			subscription.onStateChange = void 0;
		};
	}, [contextValue, previousState]);
	const Context = context || ReactReduxContext;
	return /* @__PURE__ */ import_react.createElement(Context.Provider, { value: contextValue }, children);
}
var Provider_default = Provider;
var propsToShallowCompare = new Set([
	"axisLine",
	"tickLine",
	"activeBar",
	"activeDot",
	"activeLabel",
	"activeShape",
	"allowEscapeViewBox",
	"background",
	"cursor",
	"dot",
	"label",
	"line",
	"margin",
	"padding",
	"position",
	"shape",
	"style",
	"tick",
	"wrapperStyle",
	"radius",
	"throttledEvents"
]);
/**
* When comparing two values, returns true if they are the same value or
* are both NaN.
*
* If we used just a simple triple equals, we would get false negatives for two NaNs
* which could cause extra re-renders so let's have this instead.
*
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness#same-value-zero_equality
*
* @param x first value to compare
* @param y second value to compare
* return true if the same, false if different
*/
function sameValueZero(x, y) {
	if (x == null && y == null) return true;
	if (typeof x === "number" && typeof y === "number") return x === y || x !== x && y !== y;
	return x === y;
}
/**
* So usually React would compare only the first level of props using Object.is.
* However, in our case many props are objects or arrays, and our own docs recommend to do that!
* Therefore, we need a custom comparison function that does a shallow comparison of each prop value.
*
* Because charts can and do receive large props (typically the data array),
* we only limit this to a subset of known props that are likely to be objects/arrays.
*
* @param prevProps
* @param nextProps
*/
function propsAreEqual(prevProps, nextProps) {
	for (var key of new Set([...Object.keys(prevProps), ...Object.keys(nextProps)])) if (propsToShallowCompare.has(key)) {
		if (prevProps[key] == null && nextProps[key] == null) continue;
		if (!shallowEqual$1(prevProps[key], nextProps[key])) return false;
	} else if (!sameValueZero(prevProps[key], nextProps[key])) return false;
	return true;
}
var _excluded$16 = ["id"], _excluded2$6 = [
	"activeDot",
	"animationBegin",
	"animationDuration",
	"animationEasing",
	"connectNulls",
	"dot",
	"fill",
	"fillOpacity",
	"hide",
	"isAnimationActive",
	"legendType",
	"stroke",
	"xAxisId",
	"yAxisId"
];
function _extends$18() {
	return _extends$18 = Object.assign ? Object.assign.bind() : function(n) {
		for (var e = 1; e < arguments.length; e++) {
			var t = arguments[e];
			for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
		}
		return n;
	}, _extends$18.apply(null, arguments);
}
function _objectWithoutProperties$16(e, t) {
	if (null == e) return {};
	var o, r, i = _objectWithoutPropertiesLoose$16(e, t);
	if (Object.getOwnPropertySymbols) {
		var n = Object.getOwnPropertySymbols(e);
		for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
	}
	return i;
}
function _objectWithoutPropertiesLoose$16(r, e) {
	if (null == r) return {};
	var t = {};
	for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
		if (-1 !== e.indexOf(n)) continue;
		t[n] = r[n];
	}
	return t;
}
function ownKeys$20(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r) {
			return Object.getOwnPropertyDescriptor(e, r).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread$20(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys$20(Object(t), !0).forEach(function(r) {
			_defineProperty$20(e, r, t[r]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$20(Object(t)).forEach(function(r) {
			Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
		});
	}
	return e;
}
function _defineProperty$20(e, r, t) {
	return (r = _toPropertyKey$20(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}
function _toPropertyKey$20(t) {
	var i = _toPrimitive$20(t, "string");
	return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive$20(t, r) {
	if ("object" != typeof t || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != typeof i) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
/**
* @inline
*/
/**
* Our base value array has payload in it, and we expose it externally too.
*/
/**
* Internal props, combination of external props + defaultProps + private Recharts state
*/
/**
* External props, intended for end users to fill in
*/
/**
* Because of naming conflict, we are forced to ignore certain (valid) SVG attributes.
*/
function getLegendItemColor(stroke, fill) {
	return stroke && stroke !== "none" ? stroke : fill;
}
var computeLegendPayloadFromAreaData = (props) => {
	var { dataKey, name, stroke, fill, legendType, hide } = props;
	return [{
		inactive: hide,
		dataKey,
		type: legendType,
		color: getLegendItemColor(stroke, fill),
		value: getTooltipNameProp(name, dataKey),
		payload: props
	}];
};
var SetAreaTooltipEntrySettings = /* @__PURE__ */ import_react.memo((_ref) => {
	var { dataKey, data, stroke, strokeWidth, fill, name, hide, unit, tooltipType, id } = _ref;
	var tooltipEntrySettings = {
		dataDefinedOnItem: data,
		getPosition: noop$2,
		settings: {
			stroke,
			strokeWidth,
			fill,
			dataKey,
			nameKey: void 0,
			name: getTooltipNameProp(name, dataKey),
			hide,
			type: tooltipType,
			color: getLegendItemColor(stroke, fill),
			unit,
			graphicalItemId: id
		}
	};
	return /* @__PURE__ */ import_react.createElement(SetTooltipEntrySettings, { tooltipEntrySettings });
});
function AreaDotsWrapper(_ref2) {
	var { clipPathId, points, props } = _ref2;
	var { needClip, dot, dataKey } = props;
	var areaProps = svgPropertiesNoEvents(props);
	return /* @__PURE__ */ import_react.createElement(Dots, {
		points,
		dot,
		className: "recharts-area-dots",
		dotClassName: "recharts-area-dot",
		dataKey,
		baseProps: areaProps,
		needClip,
		clipPathId
	});
}
function AreaLabelListProvider(_ref3) {
	var { showLabels, children, points } = _ref3;
	var labelListEntries = points.map((point) => {
		var _point$x, _point$y;
		var viewBox = {
			x: (_point$x = point.x) !== null && _point$x !== void 0 ? _point$x : 0,
			y: (_point$y = point.y) !== null && _point$y !== void 0 ? _point$y : 0,
			width: 0,
			lowerWidth: 0,
			upperWidth: 0,
			height: 0
		};
		return _objectSpread$20(_objectSpread$20({}, viewBox), {}, {
			value: point.value,
			payload: point.payload,
			parentViewBox: void 0,
			viewBox,
			fill: void 0
		});
	});
	return /* @__PURE__ */ import_react.createElement(CartesianLabelListContextProvider, { value: showLabels ? labelListEntries : void 0 }, children);
}
function StaticArea(_ref4) {
	var { points, baseLine, needClip, clipPathId, props } = _ref4;
	var { layout, type, stroke, connectNulls, isRange } = props;
	var { id } = props, propsWithoutId = _objectWithoutProperties$16(props, _excluded$16);
	var allOtherProps = svgPropertiesNoEvents(propsWithoutId);
	var propsWithEvents = svgPropertiesAndEvents(propsWithoutId);
	return /* @__PURE__ */ import_react.createElement(import_react.Fragment, null, (points === null || points === void 0 ? void 0 : points.length) > 1 && /* @__PURE__ */ import_react.createElement(Layer, { clipPath: needClip ? "url(#clipPath-".concat(clipPathId, ")") : void 0 }, /* @__PURE__ */ import_react.createElement(Curve, _extends$18({}, propsWithEvents, {
		id,
		points,
		connectNulls,
		type,
		baseLine,
		layout,
		stroke: "none",
		className: "recharts-area-area"
	})), stroke !== "none" && /* @__PURE__ */ import_react.createElement(Curve, _extends$18({}, allOtherProps, {
		className: "recharts-area-curve",
		layout,
		type,
		connectNulls,
		fill: "none",
		points
	})), stroke !== "none" && isRange && Array.isArray(baseLine) && /* @__PURE__ */ import_react.createElement(Curve, _extends$18({}, allOtherProps, {
		className: "recharts-area-curve",
		layout,
		type,
		connectNulls,
		fill: "none",
		points: baseLine
	}))), /* @__PURE__ */ import_react.createElement(AreaDotsWrapper, {
		points,
		props: propsWithoutId,
		clipPathId
	}));
}
function VerticalRect(_ref5) {
	var _points$, _points;
	var { alpha, baseLine, points, strokeWidth } = _ref5;
	var startY = (_points$ = points[0]) === null || _points$ === void 0 ? void 0 : _points$.y;
	var endY = (_points = points[points.length - 1]) === null || _points === void 0 ? void 0 : _points.y;
	if (!isWellBehavedNumber(startY) || !isWellBehavedNumber(endY)) return null;
	var height = alpha * Math.abs(startY - endY);
	var maxX = Math.max(...points.map((entry) => entry.x || 0));
	if (isNumber$1(baseLine)) maxX = Math.max(baseLine, maxX);
	else if (baseLine && Array.isArray(baseLine) && baseLine.length) maxX = Math.max(...baseLine.map((entry) => entry.x || 0), maxX);
	if (isNumber$1(maxX)) return /* @__PURE__ */ import_react.createElement("rect", {
		x: 0,
		y: startY < endY ? startY : startY - height,
		width: maxX + (strokeWidth ? parseInt("".concat(strokeWidth), 10) : 1),
		height: Math.floor(height)
	});
	return null;
}
function HorizontalRect(_ref6) {
	var _points$2, _points2;
	var { alpha, baseLine, points, strokeWidth } = _ref6;
	var startX = (_points$2 = points[0]) === null || _points$2 === void 0 ? void 0 : _points$2.x;
	var endX = (_points2 = points[points.length - 1]) === null || _points2 === void 0 ? void 0 : _points2.x;
	if (!isWellBehavedNumber(startX) || !isWellBehavedNumber(endX)) return null;
	var width = alpha * Math.abs(startX - endX);
	var maxY = Math.max(...points.map((entry) => entry.y || 0));
	if (isNumber$1(baseLine)) maxY = Math.max(baseLine, maxY);
	else if (baseLine && Array.isArray(baseLine) && baseLine.length) maxY = Math.max(...baseLine.map((entry) => entry.y || 0), maxY);
	if (isNumber$1(maxY)) return /* @__PURE__ */ import_react.createElement("rect", {
		x: startX < endX ? startX : startX - width,
		y: 0,
		width,
		height: Math.floor(maxY + (strokeWidth ? parseInt("".concat(strokeWidth), 10) : 1))
	});
	return null;
}
function ClipRect(_ref7) {
	var { alpha, layout, points, baseLine, strokeWidth } = _ref7;
	if (layout === "vertical") return /* @__PURE__ */ import_react.createElement(VerticalRect, {
		alpha,
		points,
		baseLine,
		strokeWidth
	});
	return /* @__PURE__ */ import_react.createElement(HorizontalRect, {
		alpha,
		points,
		baseLine,
		strokeWidth
	});
}
function AreaWithAnimation(_ref8) {
	var { needClip, clipPathId, props, previousPointsRef, previousBaselineRef } = _ref8;
	var { points, baseLine, isAnimationActive, animationBegin, animationDuration, animationEasing, onAnimationStart, onAnimationEnd } = props;
	var animationId = useAnimationId((0, import_react.useMemo)(() => ({
		points,
		baseLine
	}), [points, baseLine]), "recharts-area-");
	var layout = useCartesianChartLayout();
	var [isAnimating, setIsAnimating] = (0, import_react.useState)(false);
	var showLabels = !isAnimating;
	var handleAnimationEnd = (0, import_react.useCallback)(() => {
		if (typeof onAnimationEnd === "function") onAnimationEnd();
		setIsAnimating(false);
	}, [onAnimationEnd]);
	var handleAnimationStart = (0, import_react.useCallback)(() => {
		if (typeof onAnimationStart === "function") onAnimationStart();
		setIsAnimating(true);
	}, [onAnimationStart]);
	if (layout == null) return null;
	var prevPoints = previousPointsRef.current;
	var prevBaseLine = previousBaselineRef.current;
	return /* @__PURE__ */ import_react.createElement(AreaLabelListProvider, {
		showLabels,
		points
	}, props.children, /* @__PURE__ */ import_react.createElement(JavascriptAnimate, {
		animationId,
		begin: animationBegin,
		duration: animationDuration,
		isActive: isAnimationActive,
		easing: animationEasing,
		onAnimationEnd: handleAnimationEnd,
		onAnimationStart: handleAnimationStart,
		key: animationId
	}, (t) => {
		if (prevPoints) {
			var prevPointsDiffFactor = prevPoints.length / points.length;
			var stepPoints = t === 1 ? points : points.map((entry, index) => {
				var prevPointIndex = Math.floor(index * prevPointsDiffFactor);
				if (prevPoints[prevPointIndex]) {
					var prev = prevPoints[prevPointIndex];
					return _objectSpread$20(_objectSpread$20({}, entry), {}, {
						x: interpolate(prev.x, entry.x, t),
						y: interpolate(prev.y, entry.y, t)
					});
				}
				return entry;
			});
			var stepBaseLine;
			if (isNumber$1(baseLine)) stepBaseLine = interpolate(prevBaseLine, baseLine, t);
			else if (isNullish(baseLine) || isNan(baseLine)) stepBaseLine = interpolate(prevBaseLine, 0, t);
			else stepBaseLine = baseLine.map((entry, index) => {
				var prevPointIndex = Math.floor(index * prevPointsDiffFactor);
				if (Array.isArray(prevBaseLine) && prevBaseLine[prevPointIndex]) {
					var prev = prevBaseLine[prevPointIndex];
					return _objectSpread$20(_objectSpread$20({}, entry), {}, {
						x: interpolate(prev.x, entry.x, t),
						y: interpolate(prev.y, entry.y, t)
					});
				}
				return entry;
			});
			if (t > 0) {
				previousPointsRef.current = stepPoints;
				previousBaselineRef.current = stepBaseLine;
			}
			return /* @__PURE__ */ import_react.createElement(StaticArea, {
				points: stepPoints,
				baseLine: stepBaseLine,
				needClip,
				clipPathId,
				props
			});
		}
		if (t > 0) {
			previousPointsRef.current = points;
			previousBaselineRef.current = baseLine;
		}
		return /* @__PURE__ */ import_react.createElement(Layer, null, isAnimationActive && /* @__PURE__ */ import_react.createElement("defs", null, /* @__PURE__ */ import_react.createElement("clipPath", { id: "animationClipPath-".concat(clipPathId) }, /* @__PURE__ */ import_react.createElement(ClipRect, {
			alpha: t,
			points,
			baseLine,
			layout,
			strokeWidth: props.strokeWidth
		}))), /* @__PURE__ */ import_react.createElement(Layer, { clipPath: "url(#animationClipPath-".concat(clipPathId, ")") }, /* @__PURE__ */ import_react.createElement(StaticArea, {
			points,
			baseLine,
			needClip,
			clipPathId,
			props
		})));
	}), /* @__PURE__ */ import_react.createElement(LabelListFromLabelProp, { label: props.label }));
}
function RenderArea(_ref9) {
	var { needClip, clipPathId, props } = _ref9;
	var previousPointsRef = (0, import_react.useRef)(null);
	var previousBaselineRef = (0, import_react.useRef)();
	return /* @__PURE__ */ import_react.createElement(AreaWithAnimation, {
		needClip,
		clipPathId,
		props,
		previousPointsRef,
		previousBaselineRef
	});
}
var AreaWithState = class extends import_react.PureComponent {
	render() {
		var { hide, dot, points, className, top, left, needClip, xAxisId, yAxisId, width, height, id, baseLine, zIndex } = this.props;
		if (hide) return null;
		var layerClass = clsx("recharts-area", className);
		var clipPathId = id;
		var { r, strokeWidth } = getRadiusAndStrokeWidthFromDot(dot);
		var clipDot = isClipDot(dot);
		var dotSize = r * 2 + strokeWidth;
		var activePointsClipPath = needClip ? "url(#clipPath-".concat(clipDot ? "" : "dots-").concat(clipPathId, ")") : void 0;
		return /* @__PURE__ */ import_react.createElement(ZIndexLayer, { zIndex }, /* @__PURE__ */ import_react.createElement(Layer, { className: layerClass }, needClip && /* @__PURE__ */ import_react.createElement("defs", null, /* @__PURE__ */ import_react.createElement(GraphicalItemClipPath, {
			clipPathId,
			xAxisId,
			yAxisId
		}), !clipDot && /* @__PURE__ */ import_react.createElement("clipPath", { id: "clipPath-dots-".concat(clipPathId) }, /* @__PURE__ */ import_react.createElement("rect", {
			x: left - dotSize / 2,
			y: top - dotSize / 2,
			width: width + dotSize,
			height: height + dotSize
		}))), /* @__PURE__ */ import_react.createElement(RenderArea, {
			needClip,
			clipPathId,
			props: this.props
		})), /* @__PURE__ */ import_react.createElement(ActivePoints, {
			points,
			mainColor: getLegendItemColor(this.props.stroke, this.props.fill),
			itemDataKey: this.props.dataKey,
			activeDot: this.props.activeDot,
			clipPath: activePointsClipPath
		}), this.props.isRange && Array.isArray(baseLine) && /* @__PURE__ */ import_react.createElement(ActivePoints, {
			points: baseLine,
			mainColor: getLegendItemColor(this.props.stroke, this.props.fill),
			itemDataKey: this.props.dataKey,
			activeDot: this.props.activeDot,
			clipPath: activePointsClipPath
		}));
	}
};
var defaultAreaProps = {
	activeDot: true,
	animationBegin: 0,
	animationDuration: 1500,
	animationEasing: "ease",
	connectNulls: false,
	dot: false,
	fill: "#3182bd",
	fillOpacity: .6,
	hide: false,
	isAnimationActive: "auto",
	legendType: "line",
	stroke: "#3182bd",
	strokeWidth: 1,
	type: "linear",
	label: false,
	xAxisId: 0,
	yAxisId: 0,
	zIndex: DefaultZIndexes.area
};
function AreaImpl(props) {
	var _useAppSelector;
	var { activeDot, animationBegin, animationDuration, animationEasing, connectNulls, dot, fill, fillOpacity, hide, isAnimationActive, legendType, stroke, xAxisId, yAxisId } = props, everythingElse = _objectWithoutProperties$16(props, _excluded2$6);
	var layout = useChartLayout();
	var chartName = useChartName();
	var { needClip } = useNeedsClip(xAxisId, yAxisId);
	var isPanorama = useIsPanorama();
	var { points, isRange, baseLine } = (_useAppSelector = useAppSelector((state) => selectArea(state, props.id, isPanorama))) !== null && _useAppSelector !== void 0 ? _useAppSelector : {};
	var plotArea = usePlotArea();
	if (layout !== "horizontal" && layout !== "vertical" || plotArea == null) return null;
	if (chartName !== "AreaChart" && chartName !== "ComposedChart") return null;
	var { height, width, x: left, y: top } = plotArea;
	if (!points || !points.length) return null;
	return /* @__PURE__ */ import_react.createElement(AreaWithState, _extends$18({}, everythingElse, {
		activeDot,
		animationBegin,
		animationDuration,
		animationEasing,
		baseLine,
		connectNulls,
		dot,
		fill,
		fillOpacity,
		height,
		hide,
		layout,
		isAnimationActive,
		isRange,
		legendType,
		needClip,
		points,
		stroke,
		width,
		left,
		top,
		xAxisId,
		yAxisId
	}));
}
var getBaseValue = (layout, chartBaseValue, itemBaseValue, xAxis, yAxis) => {
	var baseValue = itemBaseValue !== null && itemBaseValue !== void 0 ? itemBaseValue : chartBaseValue;
	if (isNumber$1(baseValue)) return baseValue;
	var numericAxis = layout === "horizontal" ? yAxis : xAxis;
	var domain = numericAxis.scale.domain();
	if (numericAxis.type === "number") {
		var domainMax = Math.max(domain[0], domain[1]);
		var domainMin = Math.min(domain[0], domain[1]);
		if (baseValue === "dataMin") return domainMin;
		if (baseValue === "dataMax") return domainMax;
		return domainMax < 0 ? domainMax : Math.max(Math.min(domain[0], domain[1]), 0);
	}
	if (baseValue === "dataMin") return domain[0];
	if (baseValue === "dataMax") return domain[1];
	return domain[0];
};
function computeArea(_ref0) {
	var { areaSettings: { connectNulls, baseValue: itemBaseValue, dataKey }, stackedData, layout, chartBaseValue, xAxis, yAxis, displayedData, dataStartIndex, xAxisTicks, yAxisTicks, bandSize } = _ref0;
	var hasStack = stackedData && stackedData.length;
	var baseValue = getBaseValue(layout, chartBaseValue, itemBaseValue, xAxis, yAxis);
	var isHorizontalLayout = layout === "horizontal";
	var isRange = false;
	var points = displayedData.map((entry, index) => {
		var _valueAsArray$, _valueAsArray, _xAxis$scale$map;
		var valueAsArray;
		if (hasStack) valueAsArray = stackedData[dataStartIndex + index];
		else {
			var rawValue = getValueByDataKey(entry, dataKey);
			if (!Array.isArray(rawValue)) valueAsArray = [baseValue, rawValue];
			else {
				valueAsArray = rawValue;
				isRange = true;
			}
		}
		var value1 = (_valueAsArray$ = (_valueAsArray = valueAsArray) === null || _valueAsArray === void 0 ? void 0 : _valueAsArray[1]) !== null && _valueAsArray$ !== void 0 ? _valueAsArray$ : null;
		var isBreakPoint = value1 == null || hasStack && !connectNulls && getValueByDataKey(entry, dataKey) == null;
		if (isHorizontalLayout) {
			var _yAxis$scale$map;
			return {
				x: getCateCoordinateOfLine({
					axis: xAxis,
					ticks: xAxisTicks,
					bandSize,
					entry,
					index
				}),
				y: isBreakPoint ? null : (_yAxis$scale$map = yAxis.scale.map(value1)) !== null && _yAxis$scale$map !== void 0 ? _yAxis$scale$map : null,
				value: valueAsArray,
				payload: entry
			};
		}
		return {
			x: isBreakPoint ? null : (_xAxis$scale$map = xAxis.scale.map(value1)) !== null && _xAxis$scale$map !== void 0 ? _xAxis$scale$map : null,
			y: getCateCoordinateOfLine({
				axis: yAxis,
				ticks: yAxisTicks,
				bandSize,
				entry,
				index
			}),
			value: valueAsArray,
			payload: entry
		};
	});
	var baseLine;
	if (hasStack || isRange) baseLine = points.map((entry) => {
		var _xAxis$scale$map2;
		var x = Array.isArray(entry.value) ? entry.value[0] : null;
		if (isHorizontalLayout) {
			var _yAxis$scale$map2;
			return {
				x: entry.x,
				y: x != null && entry.y != null ? (_yAxis$scale$map2 = yAxis.scale.map(x)) !== null && _yAxis$scale$map2 !== void 0 ? _yAxis$scale$map2 : null : null,
				payload: entry.payload
			};
		}
		return {
			x: x != null ? (_xAxis$scale$map2 = xAxis.scale.map(x)) !== null && _xAxis$scale$map2 !== void 0 ? _xAxis$scale$map2 : null : null,
			y: entry.y,
			payload: entry.payload
		};
	});
	else baseLine = isHorizontalLayout ? yAxis.scale.map(baseValue) : xAxis.scale.map(baseValue);
	return {
		points,
		baseLine: baseLine !== null && baseLine !== void 0 ? baseLine : 0,
		isRange
	};
}
function AreaFn(outsideProps) {
	var props = resolveDefaultProps(outsideProps, defaultAreaProps);
	var isPanorama = useIsPanorama();
	return /* @__PURE__ */ import_react.createElement(RegisterGraphicalItemId, {
		id: props.id,
		type: "area"
	}, (id) => /* @__PURE__ */ import_react.createElement(import_react.Fragment, null, /* @__PURE__ */ import_react.createElement(SetLegendPayload, { legendPayload: computeLegendPayloadFromAreaData(props) }), /* @__PURE__ */ import_react.createElement(SetAreaTooltipEntrySettings, {
		dataKey: props.dataKey,
		data: props.data,
		stroke: props.stroke,
		strokeWidth: props.strokeWidth,
		fill: props.fill,
		name: props.name,
		hide: props.hide,
		unit: props.unit,
		tooltipType: props.tooltipType,
		id
	}), /* @__PURE__ */ import_react.createElement(SetCartesianGraphicalItem, {
		type: "area",
		id,
		data: props.data,
		dataKey: props.dataKey,
		xAxisId: props.xAxisId,
		yAxisId: props.yAxisId,
		zAxisId: 0,
		stackId: getNormalizedStackId(props.stackId),
		hide: props.hide,
		barSize: void 0,
		baseValue: props.baseValue,
		isPanorama,
		connectNulls: props.connectNulls
	}), /* @__PURE__ */ import_react.createElement(AreaImpl, _extends$18({}, props, { id }))));
}
/**
* @provides LabelListContext
* @consumes CartesianChartContext
*/
var Area = /* @__PURE__ */ import_react.memo(AreaFn, propsAreEqual);
Area.displayName = "Area";
/**
* These chart options are decided internally, by Recharts,
* and will not change during the lifetime of the chart.
*
* Changing these options can be done by swapping the root element
* which will make a brand-new Redux store.
*
* If you want to store options that can be changed by the user,
* use UpdatableChartOptions in rootPropsSlice.ts.
*/
var arrayTooltipSearcher = (data, strIndex) => {
	if (!strIndex) return void 0;
	if (!Array.isArray(data)) return void 0;
	var numIndex = Number.parseInt(strIndex, 10);
	if (isNan(numIndex)) return;
	return data[numIndex];
};
var optionsSlice = createSlice({
	name: "options",
	initialState: {
		chartName: "",
		tooltipPayloadSearcher: () => void 0,
		eventEmitter: void 0,
		defaultTooltipEventType: "axis"
	},
	reducers: { createEventEmitter: (state) => {
		if (state.eventEmitter == null) state.eventEmitter = Symbol("rechartsEventEmitter");
	} }
});
var optionsReducer = optionsSlice.reducer;
var { createEventEmitter } = optionsSlice.actions;
var chartDataSlice = createSlice({
	name: "chartData",
	initialState: {
		chartData: void 0,
		computedData: void 0,
		dataStartIndex: 0,
		dataEndIndex: 0
	},
	reducers: {
		setChartData(state, action) {
			state.chartData = castDraft(action.payload);
			if (action.payload == null) {
				state.dataStartIndex = 0;
				state.dataEndIndex = 0;
				return;
			}
			if (action.payload.length > 0 && state.dataEndIndex !== action.payload.length - 1) state.dataEndIndex = action.payload.length - 1;
		},
		setComputedData(state, action) {
			state.computedData = action.payload;
		},
		setDataStartEndIndexes(state, action) {
			var { startIndex, endIndex } = action.payload;
			if (startIndex != null) state.dataStartIndex = startIndex;
			if (endIndex != null) state.dataEndIndex = endIndex;
		}
	}
});
var { setChartData, setDataStartEndIndexes, setComputedData } = chartDataSlice.actions;
var chartDataReducer = chartDataSlice.reducer;
var pickChartPointer = (_state, chartPointer) => chartPointer;
var selectActivePropsFromChartPointer = createSelector([
	pickChartPointer,
	selectChartLayout,
	selectPolarViewBox,
	selectTooltipAxisType,
	selectTooltipAxisRangeWithReverse,
	selectTooltipAxisTicks,
	selectOrderedTooltipTicks,
	selectChartOffsetInternal
], combineActiveProps);
/**
* Type guard to check if the pointer event is from an SVG element.
*/
function isSvgPointer(pointer) {
	return "getBBox" in pointer.currentTarget && typeof pointer.currentTarget.getBBox === "function";
}
/**
* Computes relative element coordinates from mouse or touch event.
*
* The output coordinates are relative to the top-left corner of the active element (= currentTarget),
* where the top-left corner is (0, 0).
* Moving right, the x-coordinate increases, and moving down, the y-coordinate increases.
*
* The coordinates are rounded to the nearest integer and account for CSS transform scale.
* So element that's scaled will return the same coordinates as element that's not scaled.
*
* In other words: you zoom in or out, numbers stay the same.
*
* This function works with both HTML elements and SVG elements.
*
* It works with both Mouse and Touch events.
* For Touch events, it returns an array of coordinates, one for each touch point.
* For Mouse events, it returns a single coordinate object.
*
* @example
* ```tsx
* // In an HTML element event handler. Legend passes the native event as the 3rd argument.
* <Legend onMouseMove={(_data, _i, e) => {
*   // These coordinates are relative to the top-left corner of the Legend element
*   const { relativeX, relativeY } = getRelativeCoordinate(e);
*   console.log(`Mouse at Legend position: (${relativeX}, ${relativeY})`);
* }}>
* ```
*
* @example
* ```tsx
* // In an SVG element event handler. Area is an SVG element, and passes the event as second argument.
* <Area onMouseMove={(_, e) => {
*   const { relativeX, relativeY } = getRelativeCoordinate(e);
*   console.log(`Mouse at Area position: (${relativeX}, ${relativeY})`);
*   // Here you can call usePlotArea to convert to chart coordinates
* }}>
* ```
*
* @example
* ```tsx
* // In a chart root touch handler. Chart root passes the event as second argument.
* <LineChart onTouchMove={(_, e) => {
*   const touchPoints = getRelativeCoordinate(e);
*   touchPoints.forEach(({ relativeX, relativeY }, index) => {
*     console.log(`Touch point ${index} at LineChart position: (${relativeX}, ${relativeY})`);
*   });
* }}>
* ```
*
* @since 3.8
* @param event The mouse or touch event from React event handlers (works with both HTML and SVG elements)
* @returns Coordinates relative to the top-left corner of the element. Single object for Mouse events, array of objects for Touch events.
*/
function getRelativeCoordinate(event) {
	var rect = event.currentTarget.getBoundingClientRect();
	var scaleX, scaleY;
	if (isSvgPointer(event)) {
		var bbox = event.currentTarget.getBBox();
		scaleX = bbox.width > 0 ? rect.width / bbox.width : 1;
		scaleY = bbox.height > 0 ? rect.height / bbox.height : 1;
	} else {
		var element = event.currentTarget;
		scaleX = element.offsetWidth > 0 ? rect.width / element.offsetWidth : 1;
		scaleY = element.offsetHeight > 0 ? rect.height / element.offsetHeight : 1;
	}
	var getCoordinates = (clientX, clientY) => ({
		relativeX: Math.round((clientX - rect.left) / scaleX),
		relativeY: Math.round((clientY - rect.top) / scaleY)
	});
	if ("touches" in event) return Array.from(event.touches).map((touch) => getCoordinates(touch.clientX, touch.clientY));
	return getCoordinates(event.clientX, event.clientY);
}
var mouseClickAction = createAction("mouseClick");
var mouseClickMiddleware = createListenerMiddleware();
mouseClickMiddleware.startListening({
	actionCreator: mouseClickAction,
	effect: (action, listenerApi) => {
		var mousePointer = action.payload;
		var activeProps = selectActivePropsFromChartPointer(listenerApi.getState(), getRelativeCoordinate(mousePointer));
		if ((activeProps === null || activeProps === void 0 ? void 0 : activeProps.activeIndex) != null) listenerApi.dispatch(setMouseClickAxisIndex({
			activeIndex: activeProps.activeIndex,
			activeDataKey: void 0,
			activeCoordinate: activeProps.activeCoordinate
		}));
	}
});
var mouseMoveAction = createAction("mouseMove");
var mouseMoveMiddleware = createListenerMiddleware();
var rafId$2 = null;
var timeoutId$2 = null;
var latestChartPointer = null;
mouseMoveMiddleware.startListening({
	actionCreator: mouseMoveAction,
	effect: (action, listenerApi) => {
		var mousePointer = action.payload;
		var { throttleDelay, throttledEvents } = listenerApi.getState().eventSettings;
		var isThrottled = throttledEvents === "all" || (throttledEvents === null || throttledEvents === void 0 ? void 0 : throttledEvents.includes("mousemove"));
		if (rafId$2 !== null) {
			cancelAnimationFrame(rafId$2);
			rafId$2 = null;
		}
		if (timeoutId$2 !== null && (typeof throttleDelay !== "number" || !isThrottled)) {
			clearTimeout(timeoutId$2);
			timeoutId$2 = null;
		}
		latestChartPointer = getRelativeCoordinate(mousePointer);
		var callback = () => {
			var currentState = listenerApi.getState();
			var tooltipEventType = selectTooltipEventType$1(currentState, currentState.tooltip.settings.shared);
			if (!latestChartPointer) {
				rafId$2 = null;
				timeoutId$2 = null;
				return;
			}
			if (tooltipEventType === "axis") {
				var activeProps = selectActivePropsFromChartPointer(currentState, latestChartPointer);
				if ((activeProps === null || activeProps === void 0 ? void 0 : activeProps.activeIndex) != null) listenerApi.dispatch(setMouseOverAxisIndex({
					activeIndex: activeProps.activeIndex,
					activeDataKey: void 0,
					activeCoordinate: activeProps.activeCoordinate
				}));
				else listenerApi.dispatch(mouseLeaveChart());
			}
			rafId$2 = null;
			timeoutId$2 = null;
		};
		if (!isThrottled) {
			callback();
			return;
		}
		if (throttleDelay === "raf") rafId$2 = requestAnimationFrame(callback);
		else if (typeof throttleDelay === "number") {
			if (timeoutId$2 === null) timeoutId$2 = setTimeout(callback, throttleDelay);
		}
	}
});
function reduxDevtoolsJsonStringifyReplacer(key, value) {
	if (value instanceof HTMLElement) return "HTMLElement <".concat(value.tagName, " class=\"").concat(value.className, "\">");
	if (value === window) return "global.window";
	if (key === "children" && typeof value === "object" && value !== null) return "<<CHILDREN>>";
	return value;
}
var referenceElementsSlice = createSlice({
	name: "referenceElements",
	initialState: {
		dots: [],
		areas: [],
		lines: []
	},
	reducers: {
		addDot: (state, action) => {
			state.dots.push(action.payload);
		},
		removeDot: (state, action) => {
			var index = current(state).dots.findIndex((dot) => dot === action.payload);
			if (index !== -1) state.dots.splice(index, 1);
		},
		addArea: (state, action) => {
			state.areas.push(action.payload);
		},
		removeArea: (state, action) => {
			var index = current(state).areas.findIndex((area) => area === action.payload);
			if (index !== -1) state.areas.splice(index, 1);
		},
		addLine: (state, action) => {
			state.lines.push(castDraft(action.payload));
		},
		removeLine: (state, action) => {
			var index = current(state).lines.findIndex((line) => line === action.payload);
			if (index !== -1) state.lines.splice(index, 1);
		}
	}
});
var { addDot, removeDot, addArea, removeArea, addLine, removeLine } = referenceElementsSlice.actions;
var referenceElementsReducer = referenceElementsSlice.reducer;
/**
* From all Brush properties, only height has a default value and will always be defined.
* Other properties are nullable and will be computed from offsets and margins if they are not set.
*/
var initialState$2 = {
	x: 0,
	y: 0,
	width: 0,
	height: 0,
	padding: {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0
	}
};
var brushSlice = createSlice({
	name: "brush",
	initialState: initialState$2,
	reducers: { setBrushSettings(_state, action) {
		if (action.payload == null) return initialState$2;
		return action.payload;
	} }
});
var { setBrushSettings } = brushSlice.actions;
var brushReducer = brushSlice.reducer;
/**
* These are chart options that users can choose - which means they can also
* choose to change them which should trigger a re-render.
*/
var initialState$1 = {
	accessibilityLayer: true,
	barCategoryGap: "10%",
	barGap: 4,
	barSize: void 0,
	className: void 0,
	maxBarSize: void 0,
	stackOffset: "none",
	syncId: void 0,
	syncMethod: "index",
	baseValue: void 0,
	reverseStackOrder: false
};
var rootPropsSlice = createSlice({
	name: "rootProps",
	initialState: initialState$1,
	reducers: { updateOptions: (state, action) => {
		var _action$payload$barGa;
		state.accessibilityLayer = action.payload.accessibilityLayer;
		state.barCategoryGap = action.payload.barCategoryGap;
		state.barGap = (_action$payload$barGa = action.payload.barGap) !== null && _action$payload$barGa !== void 0 ? _action$payload$barGa : initialState$1.barGap;
		state.barSize = action.payload.barSize;
		state.maxBarSize = action.payload.maxBarSize;
		state.stackOffset = action.payload.stackOffset;
		state.syncId = action.payload.syncId;
		state.syncMethod = action.payload.syncMethod;
		state.className = action.payload.className;
		state.baseValue = action.payload.baseValue;
		state.reverseStackOrder = action.payload.reverseStackOrder;
	} }
});
var rootPropsReducer = rootPropsSlice.reducer;
var { updateOptions } = rootPropsSlice.actions;
var polarAxisSlice = createSlice({
	name: "polarAxis",
	initialState: {
		radiusAxis: {},
		angleAxis: {}
	},
	reducers: {
		addRadiusAxis(state, action) {
			state.radiusAxis[action.payload.id] = castDraft(action.payload);
		},
		removeRadiusAxis(state, action) {
			delete state.radiusAxis[action.payload.id];
		},
		addAngleAxis(state, action) {
			state.angleAxis[action.payload.id] = castDraft(action.payload);
		},
		removeAngleAxis(state, action) {
			delete state.angleAxis[action.payload.id];
		}
	}
});
var { addRadiusAxis, removeRadiusAxis, addAngleAxis, removeAngleAxis } = polarAxisSlice.actions;
var polarAxisReducer = polarAxisSlice.reducer;
var polarOptionsSlice = createSlice({
	name: "polarOptions",
	initialState: null,
	reducers: { updatePolarOptions: (state, action) => {
		if (state === null) return action.payload;
		state.startAngle = action.payload.startAngle;
		state.endAngle = action.payload.endAngle;
		state.cx = action.payload.cx;
		state.cy = action.payload.cy;
		state.innerRadius = action.payload.innerRadius;
		state.outerRadius = action.payload.outerRadius;
		return state;
	} }
});
var { updatePolarOptions } = polarOptionsSlice.actions;
var polarOptionsReducer = polarOptionsSlice.reducer;
var keyDownAction = createAction("keyDown");
var focusAction = createAction("focus");
var blurAction = createAction("blur");
var keyboardEventsMiddleware = createListenerMiddleware();
var rafId$1 = null;
var timeoutId$1 = null;
var latestKeyboardActionPayload = null;
keyboardEventsMiddleware.startListening({
	actionCreator: keyDownAction,
	effect: (action, listenerApi) => {
		latestKeyboardActionPayload = action.payload;
		if (rafId$1 !== null) {
			cancelAnimationFrame(rafId$1);
			rafId$1 = null;
		}
		var { throttleDelay, throttledEvents } = listenerApi.getState().eventSettings;
		var isThrottled = throttledEvents === "all" || throttledEvents.includes("keydown");
		if (timeoutId$1 !== null && (typeof throttleDelay !== "number" || !isThrottled)) {
			clearTimeout(timeoutId$1);
			timeoutId$1 = null;
		}
		var callback = () => {
			try {
				var currentState = listenerApi.getState();
				if (!(currentState.rootProps.accessibilityLayer !== false)) return;
				var { keyboardInteraction } = currentState.tooltip;
				var key = latestKeyboardActionPayload;
				if (key !== "ArrowRight" && key !== "ArrowLeft" && key !== "Enter") return;
				var resolvedIndex = combineActiveTooltipIndex(keyboardInteraction, selectTooltipDisplayedData(currentState), selectTooltipAxisDataKey(currentState), selectTooltipAxisDomain(currentState));
				var currentIndex = resolvedIndex == null ? -1 : Number(resolvedIndex);
				if (!Number.isFinite(currentIndex) || currentIndex < 0) return;
				var tooltipTicks = selectTooltipAxisTicks(currentState);
				if (key === "Enter") {
					var _coordinate = selectCoordinateForDefaultIndex(currentState, "axis", "hover", String(keyboardInteraction.index));
					listenerApi.dispatch(setKeyboardInteraction({
						active: !keyboardInteraction.active,
						activeIndex: keyboardInteraction.index,
						activeCoordinate: _coordinate
					}));
					return;
				}
				var directionMultiplier = selectChartDirection(currentState) === "left-to-right" ? 1 : -1;
				var nextIndex = currentIndex + (key === "ArrowRight" ? 1 : -1) * directionMultiplier;
				if (tooltipTicks == null || nextIndex >= tooltipTicks.length || nextIndex < 0) return;
				var coordinate = selectCoordinateForDefaultIndex(currentState, "axis", "hover", String(nextIndex));
				listenerApi.dispatch(setKeyboardInteraction({
					active: true,
					activeIndex: nextIndex.toString(),
					activeCoordinate: coordinate
				}));
			} finally {
				rafId$1 = null;
				timeoutId$1 = null;
			}
		};
		if (!isThrottled) {
			callback();
			return;
		}
		if (throttleDelay === "raf") rafId$1 = requestAnimationFrame(callback);
		else if (typeof throttleDelay === "number") {
			if (timeoutId$1 === null) {
				callback();
				latestKeyboardActionPayload = null;
				timeoutId$1 = setTimeout(() => {
					if (latestKeyboardActionPayload) callback();
					else {
						timeoutId$1 = null;
						rafId$1 = null;
					}
				}, throttleDelay);
			}
		}
	}
});
keyboardEventsMiddleware.startListening({
	actionCreator: focusAction,
	effect: (_action, listenerApi) => {
		var state = listenerApi.getState();
		if (!(state.rootProps.accessibilityLayer !== false)) return;
		var { keyboardInteraction } = state.tooltip;
		if (keyboardInteraction.active) return;
		if (keyboardInteraction.index == null) {
			var nextIndex = "0";
			var coordinate = selectCoordinateForDefaultIndex(state, "axis", "hover", String(nextIndex));
			listenerApi.dispatch(setKeyboardInteraction({
				active: true,
				activeIndex: nextIndex,
				activeCoordinate: coordinate
			}));
		}
	}
});
keyboardEventsMiddleware.startListening({
	actionCreator: blurAction,
	effect: (_action, listenerApi) => {
		var state = listenerApi.getState();
		if (!(state.rootProps.accessibilityLayer !== false)) return;
		var { keyboardInteraction } = state.tooltip;
		if (keyboardInteraction.active) listenerApi.dispatch(setKeyboardInteraction({
			active: false,
			activeIndex: keyboardInteraction.index,
			activeCoordinate: keyboardInteraction.coordinate
		}));
	}
});
function createEventProxy(reactEvent) {
	reactEvent.persist();
	var { currentTarget } = reactEvent;
	return new Proxy(reactEvent, { get: (target, prop) => {
		if (prop === "currentTarget") return currentTarget;
		var value = Reflect.get(target, prop);
		if (typeof value === "function") return value.bind(target);
		return value;
	} });
}
var externalEventAction = createAction("externalEvent");
var externalEventsMiddleware = createListenerMiddleware();
var rafIdMap = /* @__PURE__ */ new Map();
var timeoutIdMap = /* @__PURE__ */ new Map();
var latestEventMap = /* @__PURE__ */ new Map();
externalEventsMiddleware.startListening({
	actionCreator: externalEventAction,
	effect: (action, listenerApi) => {
		var { handler, reactEvent } = action.payload;
		if (handler == null) return;
		var eventType = reactEvent.type;
		var eventProxy = createEventProxy(reactEvent);
		latestEventMap.set(eventType, {
			handler,
			reactEvent: eventProxy
		});
		var existingRafId = rafIdMap.get(eventType);
		if (existingRafId !== void 0) {
			cancelAnimationFrame(existingRafId);
			rafIdMap.delete(eventType);
		}
		var { throttleDelay, throttledEvents } = listenerApi.getState().eventSettings;
		var eventListAsString = throttledEvents;
		var isThrottled = eventListAsString === "all" || (eventListAsString === null || eventListAsString === void 0 ? void 0 : eventListAsString.includes(eventType));
		var existingTimeoutId = timeoutIdMap.get(eventType);
		if (existingTimeoutId !== void 0 && (typeof throttleDelay !== "number" || !isThrottled)) {
			clearTimeout(existingTimeoutId);
			timeoutIdMap.delete(eventType);
		}
		var callback = () => {
			var latestAction = latestEventMap.get(eventType);
			try {
				if (!latestAction) return;
				var { handler: latestHandler, reactEvent: latestEvent } = latestAction;
				var currentState = listenerApi.getState();
				var nextState = {
					activeCoordinate: selectActiveTooltipCoordinate(currentState),
					activeDataKey: selectActiveTooltipDataKey(currentState),
					activeIndex: selectActiveTooltipIndex(currentState),
					activeLabel: selectActiveLabel$1(currentState),
					activeTooltipIndex: selectActiveTooltipIndex(currentState),
					isTooltipActive: selectIsTooltipActive$1(currentState)
				};
				if (latestHandler) latestHandler(nextState, latestEvent);
			} finally {
				rafIdMap.delete(eventType);
				timeoutIdMap.delete(eventType);
				latestEventMap.delete(eventType);
			}
		};
		if (!isThrottled) {
			callback();
			return;
		}
		if (throttleDelay === "raf") {
			var rafId = requestAnimationFrame(callback);
			rafIdMap.set(eventType, rafId);
		} else if (typeof throttleDelay === "number") {
			if (!timeoutIdMap.has(eventType)) {
				callback();
				var timeoutId = setTimeout(callback, throttleDelay);
				timeoutIdMap.set(eventType, timeoutId);
			}
		} else callback();
	}
});
var selectTooltipCoordinate = createSelector([
	createSelector([selectTooltipState], (tooltipState) => tooltipState.tooltipItemPayloads),
	(_state, tooltipIndex) => tooltipIndex,
	(_state, _tooltipIndex, graphicalItemId) => graphicalItemId
], (allTooltipConfigurations, tooltipIndex, graphicalItemId) => {
	if (tooltipIndex == null) return;
	var mostRelevantTooltipConfiguration = allTooltipConfigurations.find((tooltipConfiguration) => {
		return tooltipConfiguration.settings.graphicalItemId === graphicalItemId;
	});
	if (mostRelevantTooltipConfiguration == null) return;
	var { getPosition } = mostRelevantTooltipConfiguration;
	if (getPosition == null) return;
	return getPosition(tooltipIndex);
});
var touchEventAction = createAction("touchMove");
var touchEventMiddleware = createListenerMiddleware();
var rafId = null;
var timeoutId = null;
var latestChartPointers = null;
var latestTouchEvent = null;
touchEventMiddleware.startListening({
	actionCreator: touchEventAction,
	effect: (action, listenerApi) => {
		var touchEvent = action.payload;
		if (touchEvent.touches == null || touchEvent.touches.length === 0) return;
		latestTouchEvent = createEventProxy(touchEvent);
		var { throttleDelay, throttledEvents } = listenerApi.getState().eventSettings;
		var isThrottled = throttledEvents === "all" || throttledEvents.includes("touchmove");
		if (rafId !== null) {
			cancelAnimationFrame(rafId);
			rafId = null;
		}
		if (timeoutId !== null && (typeof throttleDelay !== "number" || !isThrottled)) {
			clearTimeout(timeoutId);
			timeoutId = null;
		}
		latestChartPointers = Array.from(touchEvent.touches).map((touch) => getRelativeCoordinate({
			clientX: touch.clientX,
			clientY: touch.clientY,
			currentTarget: touchEvent.currentTarget
		}));
		var callback = () => {
			if (latestTouchEvent == null) return;
			var currentState = listenerApi.getState();
			var tooltipEventType = selectTooltipEventType$1(currentState, currentState.tooltip.settings.shared);
			if (tooltipEventType === "axis") {
				var _latestChartPointers;
				var latestTouchPointer = (_latestChartPointers = latestChartPointers) === null || _latestChartPointers === void 0 ? void 0 : _latestChartPointers[0];
				if (latestTouchPointer == null) {
					rafId = null;
					timeoutId = null;
					return;
				}
				var activeProps = selectActivePropsFromChartPointer(currentState, latestTouchPointer);
				if ((activeProps === null || activeProps === void 0 ? void 0 : activeProps.activeIndex) != null) listenerApi.dispatch(setMouseOverAxisIndex({
					activeIndex: activeProps.activeIndex,
					activeDataKey: void 0,
					activeCoordinate: activeProps.activeCoordinate
				}));
			} else if (tooltipEventType === "item") {
				var _target$getAttribute;
				var touch = latestTouchEvent.touches[0];
				if (document.elementFromPoint == null || touch == null) return;
				var target = document.elementFromPoint(touch.clientX, touch.clientY);
				if (!target || !target.getAttribute) return;
				var itemIndex = target.getAttribute(DATA_ITEM_INDEX_ATTRIBUTE_NAME);
				var graphicalItemId = (_target$getAttribute = target.getAttribute("data-recharts-item-id")) !== null && _target$getAttribute !== void 0 ? _target$getAttribute : void 0;
				var settings = selectAllGraphicalItemsSettings(currentState).find((item) => item.id === graphicalItemId);
				if (itemIndex == null || settings == null || graphicalItemId == null) return;
				var { dataKey } = settings;
				var coordinate = selectTooltipCoordinate(currentState, itemIndex, graphicalItemId);
				listenerApi.dispatch(setActiveMouseOverItemIndex({
					activeDataKey: dataKey,
					activeIndex: itemIndex,
					activeCoordinate: coordinate,
					activeGraphicalItemId: graphicalItemId
				}));
			}
			rafId = null;
			timeoutId = null;
		};
		if (!isThrottled) {
			callback();
			return;
		}
		if (throttleDelay === "raf") rafId = requestAnimationFrame(callback);
		else if (typeof throttleDelay === "number") {
			if (timeoutId === null) {
				callback();
				latestTouchEvent = null;
				timeoutId = setTimeout(() => {
					if (latestTouchEvent) callback();
					else {
						timeoutId = null;
						rafId = null;
					}
				}, throttleDelay);
			}
		}
	}
});
var errorBarSlice = createSlice({
	name: "errorBars",
	initialState: {},
	reducers: {
		addErrorBar: (state, action) => {
			var { itemId, errorBar } = action.payload;
			if (!state[itemId]) state[itemId] = [];
			state[itemId].push(errorBar);
		},
		replaceErrorBar: (state, action) => {
			var { itemId, prev, next } = action.payload;
			if (state[itemId]) state[itemId] = state[itemId].map((e) => e.dataKey === prev.dataKey && e.direction === prev.direction ? next : e);
		},
		removeErrorBar: (state, action) => {
			var { itemId, errorBar } = action.payload;
			if (state[itemId]) state[itemId] = state[itemId].filter((e) => e.dataKey !== errorBar.dataKey || e.direction !== errorBar.direction);
		}
	}
});
var { addErrorBar, replaceErrorBar, removeErrorBar } = errorBarSlice.actions;
var errorBarReducer = errorBarSlice.reducer;
var initialEventSettingsState = {
	throttleDelay: "raf",
	throttledEvents: [
		"mousemove",
		"touchmove",
		"pointermove",
		"scroll",
		"wheel"
	]
};
var eventSettingsSlice = createSlice({
	name: "eventSettings",
	initialState: initialEventSettingsState,
	reducers: { setEventSettings: (state, action) => {
		if (action.payload.throttleDelay != null) state.throttleDelay = action.payload.throttleDelay;
		if (action.payload.throttledEvents != null) state.throttledEvents = castDraft(action.payload.throttledEvents);
	} }
});
var { setEventSettings } = eventSettingsSlice.actions;
var eventSettingsReducer = eventSettingsSlice.reducer;
var renderedTicksSlice = createSlice({
	name: "renderedTicks",
	initialState: {
		xAxis: {},
		yAxis: {}
	},
	reducers: {
		setRenderedTicks: (state, action) => {
			var { axisType, axisId, ticks } = action.payload;
			state[axisType][axisId] = castDraft(ticks);
		},
		removeRenderedTicks: (state, action) => {
			var { axisType, axisId } = action.payload;
			delete state[axisType][axisId];
		}
	}
});
var { setRenderedTicks, removeRenderedTicks } = renderedTicksSlice.actions;
var renderedTicksReducer = renderedTicksSlice.reducer;
var rootReducer = (0, redux_toolkit_modern_exports.combineReducers)({
	brush: brushReducer,
	cartesianAxis: cartesianAxisReducer,
	chartData: chartDataReducer,
	errorBars: errorBarReducer,
	eventSettings: eventSettingsReducer,
	graphicalItems: graphicalItemsReducer,
	layout: chartLayoutReducer,
	legend: legendReducer,
	options: optionsReducer,
	polarAxis: polarAxisReducer,
	polarOptions: polarOptionsReducer,
	referenceElements: referenceElementsReducer,
	renderedTicks: renderedTicksReducer,
	rootProps: rootPropsReducer,
	tooltip: tooltipReducer,
	zIndex: zIndexReducer
});
var createRechartsStore = function createRechartsStore(preloadedState) {
	var chartName = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "Chart";
	return configureStore({
		reducer: rootReducer,
		preloadedState,
		middleware: (getDefaultMiddleware) => {
			var _process$env$NODE_ENV;
			return getDefaultMiddleware({
				serializableCheck: false,
				immutableCheck: ![
					"commonjs",
					"es6",
					"production"
				].includes((_process$env$NODE_ENV = "es6") !== null && _process$env$NODE_ENV !== void 0 ? _process$env$NODE_ENV : "")
			}).concat([
				mouseClickMiddleware.middleware,
				mouseMoveMiddleware.middleware,
				keyboardEventsMiddleware.middleware,
				externalEventsMiddleware.middleware,
				touchEventMiddleware.middleware
			]);
		},
		enhancers: (getDefaultEnhancers) => {
			var enhancers = getDefaultEnhancers;
			if (typeof getDefaultEnhancers === "function") enhancers = getDefaultEnhancers();
			return enhancers.concat(autoBatchEnhancer({ type: "raf" }));
		},
		devTools: Global.devToolsEnabled && {
			serialize: { replacer: reduxDevtoolsJsonStringifyReplacer },
			name: "recharts-".concat(chartName)
		}
	});
};
function RechartsStoreProvider(_ref) {
	var { preloadedState, children, reduxStoreName } = _ref;
	var isPanorama = useIsPanorama();
	var storeRef = (0, import_react.useRef)(null);
	if (isPanorama) return children;
	if (storeRef.current == null) storeRef.current = createRechartsStore(preloadedState, reduxStoreName);
	var nonNullContext = RechartsReduxContext;
	return /* @__PURE__ */ import_react.createElement(Provider_default, {
		context: nonNullContext,
		store: storeRef.current
	}, children);
}
var ChartDataContextProvider = (props) => {
	var { chartData } = props;
	var dispatch = useAppDispatch();
	var isPanorama = useIsPanorama();
	(0, import_react.useEffect)(() => {
		if (isPanorama) return () => {};
		dispatch(setChartData(chartData));
		return () => {
			dispatch(setChartData(void 0));
		};
	}, [
		chartData,
		dispatch,
		isPanorama
	]);
	return null;
};
/**
* "Main" props are props that are only accepted on the main chart,
* as opposed to the small panorama chart inside a Brush.
*/
function ReportMainChartPropsImpl(_ref) {
	var { layout, margin } = _ref;
	var dispatch = useAppDispatch();
	var isPanorama = useIsPanorama();
	(0, import_react.useEffect)(() => {
		if (!isPanorama) {
			dispatch(setLayout(layout));
			dispatch(setMargin(margin));
		}
	}, [
		dispatch,
		isPanorama,
		layout,
		margin
	]);
	return null;
}
var ReportMainChartProps = /* @__PURE__ */ (0, import_react.memo)(ReportMainChartPropsImpl, propsAreEqual);
function ReportChartProps(props) {
	var dispatch = useAppDispatch();
	(0, import_react.useEffect)(() => {
		dispatch(updateOptions(props));
	}, [dispatch, props]);
	return null;
}
var ReportEventSettingsImpl = (props) => {
	var dispatch = useAppDispatch();
	(0, import_react.useEffect)(() => {
		dispatch(setEventSettings(props));
	}, [dispatch, props]);
	return null;
};
var ReportEventSettings = /* @__PURE__ */ (0, import_react.memo)(ReportEventSettingsImpl, propsAreEqual);
var useAccessibilityLayer = () => {
	var _useAppSelector;
	return (_useAppSelector = useAppSelector((state) => state.rootProps.accessibilityLayer)) !== null && _useAppSelector !== void 0 ? _useAppSelector : true;
};
var _excluded$15 = [
	"children",
	"width",
	"height",
	"viewBox",
	"className",
	"style",
	"title",
	"desc"
];
function _extends$17() {
	return _extends$17 = Object.assign ? Object.assign.bind() : function(n) {
		for (var e = 1; e < arguments.length; e++) {
			var t = arguments[e];
			for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
		}
		return n;
	}, _extends$17.apply(null, arguments);
}
function _objectWithoutProperties$15(e, t) {
	if (null == e) return {};
	var o, r, i = _objectWithoutPropertiesLoose$15(e, t);
	if (Object.getOwnPropertySymbols) {
		var n = Object.getOwnPropertySymbols(e);
		for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
	}
	return i;
}
function _objectWithoutPropertiesLoose$15(r, e) {
	if (null == r) return {};
	var t = {};
	for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
		if (-1 !== e.indexOf(n)) continue;
		t[n] = r[n];
	}
	return t;
}
/**
* Renders an SVG element.
*
* All charts already include a Surface component, so you would not normally use this directly.
*
* @link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/svg
*/
var Surface = /* @__PURE__ */ (0, import_react.forwardRef)((props, ref) => {
	var { children, width, height, viewBox, className, style, title, desc } = props, others = _objectWithoutProperties$15(props, _excluded$15);
	var svgView = viewBox || {
		width,
		height,
		x: 0,
		y: 0
	};
	var layerClass = clsx("recharts-surface", className);
	return /* @__PURE__ */ import_react.createElement("svg", _extends$17({}, svgPropertiesAndEvents(others), {
		className: layerClass,
		width,
		height,
		style,
		viewBox: "".concat(svgView.x, " ").concat(svgView.y, " ").concat(svgView.width, " ").concat(svgView.height),
		ref
	}), /* @__PURE__ */ import_react.createElement("title", null, title), /* @__PURE__ */ import_react.createElement("desc", null, desc), children);
});
function ZIndexSvgPortal(_ref) {
	var { zIndex, isPanorama } = _ref;
	var ref = (0, import_react.useRef)(null);
	var dispatch = useAppDispatch();
	(0, import_react.useLayoutEffect)(() => {
		if (ref.current) dispatch(registerZIndexPortalElement({
			zIndex,
			element: ref.current,
			isPanorama
		}));
		return () => {
			dispatch(unregisterZIndexPortalElement({
				zIndex,
				isPanorama
			}));
		};
	}, [
		dispatch,
		zIndex,
		isPanorama
	]);
	return /* @__PURE__ */ import_react.createElement("g", {
		tabIndex: -1,
		ref,
		className: "recharts-zIndex-layer_".concat(zIndex)
	});
}
function AllZIndexPortals(_ref2) {
	var { children, isPanorama } = _ref2;
	var allRegisteredZIndexes = useAppSelector(selectAllRegisteredZIndexes);
	if (!allRegisteredZIndexes || allRegisteredZIndexes.length === 0) return children;
	var allNegativeZIndexes = allRegisteredZIndexes.filter((zIndex) => zIndex < 0);
	var allPositiveZIndexes = allRegisteredZIndexes.filter((zIndex) => zIndex > 0);
	return /* @__PURE__ */ import_react.createElement(import_react.Fragment, null, allNegativeZIndexes.map((zIndex) => /* @__PURE__ */ import_react.createElement(ZIndexSvgPortal, {
		key: zIndex,
		zIndex,
		isPanorama
	})), children, allPositiveZIndexes.map((zIndex) => /* @__PURE__ */ import_react.createElement(ZIndexSvgPortal, {
		key: zIndex,
		zIndex,
		isPanorama
	})));
}
var _excluded$14 = ["children"];
function _objectWithoutProperties$14(e, t) {
	if (null == e) return {};
	var o, r, i = _objectWithoutPropertiesLoose$14(e, t);
	if (Object.getOwnPropertySymbols) {
		var n = Object.getOwnPropertySymbols(e);
		for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
	}
	return i;
}
function _objectWithoutPropertiesLoose$14(r, e) {
	if (null == r) return {};
	var t = {};
	for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
		if (-1 !== e.indexOf(n)) continue;
		t[n] = r[n];
	}
	return t;
}
function _extends$16() {
	return _extends$16 = Object.assign ? Object.assign.bind() : function(n) {
		for (var e = 1; e < arguments.length; e++) {
			var t = arguments[e];
			for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
		}
		return n;
	}, _extends$16.apply(null, arguments);
}
var FULL_WIDTH_AND_HEIGHT = {
	width: "100%",
	height: "100%",
	display: "block"
};
var MainChartSurface = /* @__PURE__ */ (0, import_react.forwardRef)((props, ref) => {
	var width = useChartWidth();
	var height = useChartHeight();
	var hasAccessibilityLayer = useAccessibilityLayer();
	if (!isPositiveNumber(width) || !isPositiveNumber(height)) return null;
	var { children, otherAttributes, title, desc } = props;
	var tabIndex, role;
	if (otherAttributes != null) {
		if (typeof otherAttributes.tabIndex === "number") tabIndex = otherAttributes.tabIndex;
		else tabIndex = hasAccessibilityLayer ? 0 : void 0;
		if (typeof otherAttributes.role === "string") role = otherAttributes.role;
		else role = hasAccessibilityLayer ? "application" : void 0;
	}
	return /* @__PURE__ */ import_react.createElement(Surface, _extends$16({}, otherAttributes, {
		title,
		desc,
		role,
		tabIndex,
		width,
		height,
		style: FULL_WIDTH_AND_HEIGHT,
		ref
	}), children);
});
var BrushPanoramaSurface = (_ref) => {
	var { children } = _ref;
	var brushDimensions = useAppSelector(selectBrushDimensions);
	if (!brushDimensions) return null;
	var { width, height, y, x } = brushDimensions;
	return /* @__PURE__ */ import_react.createElement(Surface, {
		width,
		height,
		x,
		y
	}, children);
};
var RootSurface = /* @__PURE__ */ (0, import_react.forwardRef)((_ref2, ref) => {
	var { children } = _ref2, rest = _objectWithoutProperties$14(_ref2, _excluded$14);
	if (useIsPanorama()) return /* @__PURE__ */ import_react.createElement(BrushPanoramaSurface, null, /* @__PURE__ */ import_react.createElement(AllZIndexPortals, { isPanorama: true }, children));
	return /* @__PURE__ */ import_react.createElement(MainChartSurface, _extends$16({ ref }, rest), /* @__PURE__ */ import_react.createElement(AllZIndexPortals, { isPanorama: false }, children));
});
var eventCenter = new eventemitter3_default();
var TOOLTIP_SYNC_EVENT = "recharts.syncEvent.tooltip";
var BRUSH_SYNC_EVENT = "recharts.syncEvent.brush";
function selectSynchronisedTooltipState(state) {
	return state.tooltip.syncInteraction;
}
var _excluded$13 = ["x", "y"];
function ownKeys$19(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r) {
			return Object.getOwnPropertyDescriptor(e, r).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread$19(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys$19(Object(t), !0).forEach(function(r) {
			_defineProperty$19(e, r, t[r]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$19(Object(t)).forEach(function(r) {
			Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
		});
	}
	return e;
}
function _defineProperty$19(e, r, t) {
	return (r = _toPropertyKey$19(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}
function _toPropertyKey$19(t) {
	var i = _toPrimitive$19(t, "string");
	return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive$19(t, r) {
	if ("object" != typeof t || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != typeof i) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
function _objectWithoutProperties$13(e, t) {
	if (null == e) return {};
	var o, r, i = _objectWithoutPropertiesLoose$13(e, t);
	if (Object.getOwnPropertySymbols) {
		var n = Object.getOwnPropertySymbols(e);
		for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
	}
	return i;
}
function _objectWithoutPropertiesLoose$13(r, e) {
	if (null == r) return {};
	var t = {};
	for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
		if (-1 !== e.indexOf(n)) continue;
		t[n] = r[n];
	}
	return t;
}
function useTooltipSyncEventsListener() {
	var mySyncId = useAppSelector(selectSyncId);
	var myEventEmitter = useAppSelector(selectEventEmitter);
	var dispatch = useAppDispatch();
	var syncMethod = useAppSelector(selectSyncMethod);
	var tooltipTicks = useAppSelector(selectTooltipAxisTicks);
	var layout = useChartLayout();
	var viewBox = useViewBox();
	(0, import_react.useEffect)(() => {
		if (mySyncId == null) return noop$2;
		var listener = (incomingSyncId, action, emitter) => {
			if (myEventEmitter === emitter) return;
			if (mySyncId !== incomingSyncId) return;
			if (syncMethod === "index") {
				var _action$payload;
				if (viewBox && action !== null && action !== void 0 && (_action$payload = action.payload) !== null && _action$payload !== void 0 && _action$payload.coordinate && action.payload.sourceViewBox) {
					var _action$payload$coord = action.payload.coordinate, { x: _x, y: _y } = _action$payload$coord, otherCoordinateProps = _objectWithoutProperties$13(_action$payload$coord, _excluded$13);
					var { x: sourceX, y: sourceY, width: sourceWidth, height: sourceHeight } = action.payload.sourceViewBox;
					var scaledCoordinate = _objectSpread$19(_objectSpread$19({}, otherCoordinateProps), {}, {
						x: viewBox.x + (sourceWidth ? (_x - sourceX) / sourceWidth : 0) * viewBox.width,
						y: viewBox.y + (sourceHeight ? (_y - sourceY) / sourceHeight : 0) * viewBox.height
					});
					dispatch(_objectSpread$19(_objectSpread$19({}, action), {}, { payload: _objectSpread$19(_objectSpread$19({}, action.payload), {}, { coordinate: scaledCoordinate }) }));
				} else dispatch(action);
				return;
			}
			if (tooltipTicks == null) return;
			var activeTick;
			if (typeof syncMethod === "function") activeTick = tooltipTicks[syncMethod(tooltipTicks, {
				activeTooltipIndex: action.payload.index == null ? void 0 : Number(action.payload.index),
				isTooltipActive: action.payload.active,
				activeIndex: action.payload.index == null ? void 0 : Number(action.payload.index),
				activeLabel: action.payload.label,
				activeDataKey: action.payload.dataKey,
				activeCoordinate: action.payload.coordinate
			})];
			else if (syncMethod === "value") activeTick = tooltipTicks.find((tick) => String(tick.value) === action.payload.label);
			var { coordinate } = action.payload;
			if (activeTick == null || action.payload.active === false || coordinate == null || viewBox == null) {
				dispatch(setSyncInteraction({
					active: false,
					coordinate: void 0,
					dataKey: void 0,
					index: null,
					label: void 0,
					sourceViewBox: void 0,
					graphicalItemId: void 0
				}));
				return;
			}
			var { x, y } = coordinate;
			var validateChartX = Math.min(x, viewBox.x + viewBox.width);
			var validateChartY = Math.min(y, viewBox.y + viewBox.height);
			var activeCoordinate = {
				x: layout === "horizontal" ? activeTick.coordinate : validateChartX,
				y: layout === "horizontal" ? validateChartY : activeTick.coordinate
			};
			dispatch(setSyncInteraction({
				active: action.payload.active,
				coordinate: activeCoordinate,
				dataKey: action.payload.dataKey,
				index: String(activeTick.index),
				label: action.payload.label,
				sourceViewBox: action.payload.sourceViewBox,
				graphicalItemId: action.payload.graphicalItemId
			}));
		};
		eventCenter.on(TOOLTIP_SYNC_EVENT, listener);
		return () => {
			eventCenter.off(TOOLTIP_SYNC_EVENT, listener);
		};
	}, [
		useAppSelector((state) => state.rootProps.className),
		dispatch,
		myEventEmitter,
		mySyncId,
		syncMethod,
		tooltipTicks,
		layout,
		viewBox
	]);
}
function useBrushSyncEventsListener() {
	var mySyncId = useAppSelector(selectSyncId);
	var myEventEmitter = useAppSelector(selectEventEmitter);
	var dispatch = useAppDispatch();
	(0, import_react.useEffect)(() => {
		if (mySyncId == null) return noop$2;
		var listener = (incomingSyncId, action, emitter) => {
			if (myEventEmitter === emitter) return;
			if (mySyncId === incomingSyncId) dispatch(setDataStartEndIndexes(action));
		};
		eventCenter.on(BRUSH_SYNC_EVENT, listener);
		return () => {
			eventCenter.off(BRUSH_SYNC_EVENT, listener);
		};
	}, [
		dispatch,
		myEventEmitter,
		mySyncId
	]);
}
/**
* Will receive synchronisation events from other charts.
*
* Reads syncMethod from state and decides how to synchronise the tooltip based on that.
*
* @returns void
*/
function useSynchronisedEventsFromOtherCharts() {
	var dispatch = useAppDispatch();
	(0, import_react.useEffect)(() => {
		dispatch(createEventEmitter());
	}, [dispatch]);
	useTooltipSyncEventsListener();
	useBrushSyncEventsListener();
}
/**
* Will send events to other charts.
* If syncId is undefined, no events will be sent.
*
* This ignores the syncMethod, because that is set and computed on the receiving end.
*
* @param tooltipEventType from Tooltip
* @param trigger from Tooltip
* @param activeCoordinate from state
* @param activeLabel from state
* @param activeIndex from state
* @param isTooltipActive from state
* @returns void
*/
function useTooltipChartSynchronisation(tooltipEventType, trigger, activeCoordinate, activeLabel, activeIndex, isTooltipActive) {
	var activeDataKey = useAppSelector((state) => selectTooltipDataKey(state, tooltipEventType, trigger));
	var activeGraphicalItemId = useAppSelector(selectActiveTooltipGraphicalItemId);
	var eventEmitterSymbol = useAppSelector(selectEventEmitter);
	var syncId = useAppSelector(selectSyncId);
	var syncMethod = useAppSelector(selectSyncMethod);
	var tooltipState = useAppSelector(selectSynchronisedTooltipState);
	var isReceivingSynchronisation = tooltipState === null || tooltipState === void 0 ? void 0 : tooltipState.active;
	var viewBox = useViewBox();
	(0, import_react.useEffect)(() => {
		if (isReceivingSynchronisation) return;
		if (syncId == null) return;
		if (eventEmitterSymbol == null) return;
		var syncAction = setSyncInteraction({
			active: isTooltipActive,
			coordinate: activeCoordinate,
			dataKey: activeDataKey,
			index: activeIndex,
			label: typeof activeLabel === "number" ? String(activeLabel) : activeLabel,
			sourceViewBox: viewBox,
			graphicalItemId: activeGraphicalItemId
		});
		eventCenter.emit(TOOLTIP_SYNC_EVENT, syncId, syncAction, eventEmitterSymbol);
	}, [
		isReceivingSynchronisation,
		activeCoordinate,
		activeDataKey,
		activeGraphicalItemId,
		activeIndex,
		activeLabel,
		eventEmitterSymbol,
		syncId,
		syncMethod,
		isTooltipActive,
		viewBox
	]);
}
function useReportScale() {
	var dispatch = useAppDispatch();
	var [ref, setRef] = (0, import_react.useState)(null);
	var scale = useAppSelector(selectContainerScale);
	(0, import_react.useEffect)(() => {
		if (ref == null) return;
		var newScale = ref.getBoundingClientRect().width / ref.offsetWidth;
		if (isWellBehavedNumber(newScale) && newScale !== scale) dispatch(setScale(newScale));
	}, [
		ref,
		dispatch,
		scale
	]);
	return setRef;
}
var TooltipPortalContext = /* @__PURE__ */ (0, import_react.createContext)(null);
var useTooltipPortal = () => (0, import_react.useContext)(TooltipPortalContext);
var LegendPortalContext = /* @__PURE__ */ (0, import_react.createContext)(null);
function ownKeys$18(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r) {
			return Object.getOwnPropertyDescriptor(e, r).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread$18(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys$18(Object(t), !0).forEach(function(r) {
			_defineProperty$18(e, r, t[r]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$18(Object(t)).forEach(function(r) {
			Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
		});
	}
	return e;
}
function _defineProperty$18(e, r, t) {
	return (r = _toPropertyKey$18(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}
function _toPropertyKey$18(t) {
	var i = _toPrimitive$18(t, "string");
	return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive$18(t, r) {
	if ("object" != typeof t || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != typeof i) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
function _extends$15() {
	return _extends$15 = Object.assign ? Object.assign.bind() : function(n) {
		for (var e = 1; e < arguments.length; e++) {
			var t = arguments[e];
			for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
		}
		return n;
	}, _extends$15.apply(null, arguments);
}
var EventSynchronizer = () => {
	useSynchronisedEventsFromOtherCharts();
	return null;
};
function getNumberOrZero(value) {
	if (typeof value === "number") return value;
	if (typeof value === "string") {
		var parsed = parseFloat(value);
		if (!Number.isNaN(parsed)) return parsed;
	}
	return 0;
}
var ResponsiveDiv = /* @__PURE__ */ (0, import_react.forwardRef)((props, ref) => {
	var _props$style, _props$style2;
	var observerRef = (0, import_react.useRef)(null);
	var [sizes, setSizes] = (0, import_react.useState)({
		containerWidth: getNumberOrZero((_props$style = props.style) === null || _props$style === void 0 ? void 0 : _props$style.width),
		containerHeight: getNumberOrZero((_props$style2 = props.style) === null || _props$style2 === void 0 ? void 0 : _props$style2.height)
	});
	var setContainerSize = (0, import_react.useCallback)((newWidth, newHeight) => {
		setSizes((prevState) => {
			var roundedWidth = Math.round(newWidth);
			var roundedHeight = Math.round(newHeight);
			if (prevState.containerWidth === roundedWidth && prevState.containerHeight === roundedHeight) return prevState;
			return {
				containerWidth: roundedWidth,
				containerHeight: roundedHeight
			};
		});
	}, []);
	var innerRef = (0, import_react.useCallback)((node) => {
		if (typeof ref === "function") ref(node);
		if (node != null && typeof ResizeObserver !== "undefined") {
			var { width: containerWidth, height: containerHeight } = node.getBoundingClientRect();
			setContainerSize(containerWidth, containerHeight);
			var callback = (entries) => {
				var entry = entries[0];
				if (entry == null) return;
				var { width, height } = entry.contentRect;
				setContainerSize(width, height);
			};
			var observer = new ResizeObserver(callback);
			observer.observe(node);
			observerRef.current = observer;
		}
	}, [ref, setContainerSize]);
	(0, import_react.useEffect)(() => {
		return () => {
			var observer = observerRef.current;
			if (observer != null) observer.disconnect();
		};
	}, [setContainerSize]);
	return /* @__PURE__ */ import_react.createElement(import_react.Fragment, null, /* @__PURE__ */ import_react.createElement(ReportChartSize, {
		width: sizes.containerWidth,
		height: sizes.containerHeight
	}), /* @__PURE__ */ import_react.createElement("div", _extends$15({ ref: innerRef }, props)));
});
var ReadSizeOnceDiv = /* @__PURE__ */ (0, import_react.forwardRef)((props, ref) => {
	var { width, height } = props;
	var [sizes, setSizes] = (0, import_react.useState)({
		containerWidth: getNumberOrZero(width),
		containerHeight: getNumberOrZero(height)
	});
	var setContainerSize = (0, import_react.useCallback)((newWidth, newHeight) => {
		setSizes((prevState) => {
			var roundedWidth = Math.round(newWidth);
			var roundedHeight = Math.round(newHeight);
			if (prevState.containerWidth === roundedWidth && prevState.containerHeight === roundedHeight) return prevState;
			return {
				containerWidth: roundedWidth,
				containerHeight: roundedHeight
			};
		});
	}, []);
	var innerRef = (0, import_react.useCallback)((node) => {
		if (typeof ref === "function") ref(node);
		if (node != null) {
			var { width: containerWidth, height: containerHeight } = node.getBoundingClientRect();
			setContainerSize(containerWidth, containerHeight);
		}
	}, [ref, setContainerSize]);
	return /* @__PURE__ */ import_react.createElement(import_react.Fragment, null, /* @__PURE__ */ import_react.createElement(ReportChartSize, {
		width: sizes.containerWidth,
		height: sizes.containerHeight
	}), /* @__PURE__ */ import_react.createElement("div", _extends$15({ ref: innerRef }, props)));
});
var StaticDiv = /* @__PURE__ */ (0, import_react.forwardRef)((props, ref) => {
	var { width, height } = props;
	return /* @__PURE__ */ import_react.createElement(import_react.Fragment, null, /* @__PURE__ */ import_react.createElement(ReportChartSize, {
		width,
		height
	}), /* @__PURE__ */ import_react.createElement("div", _extends$15({ ref }, props)));
});
var NonResponsiveDiv = /* @__PURE__ */ (0, import_react.forwardRef)((props, ref) => {
	var { width, height } = props;
	if (typeof width === "string" || typeof height === "string") return /* @__PURE__ */ import_react.createElement(ReadSizeOnceDiv, _extends$15({}, props, { ref }));
	if (typeof width === "number" && typeof height === "number") return /* @__PURE__ */ import_react.createElement(StaticDiv, _extends$15({}, props, {
		width,
		height,
		ref
	}));
	return /* @__PURE__ */ import_react.createElement(import_react.Fragment, null, /* @__PURE__ */ import_react.createElement(ReportChartSize, {
		width,
		height
	}), /* @__PURE__ */ import_react.createElement("div", _extends$15({ ref }, props)));
});
function getWrapperDivComponent(responsive) {
	return responsive ? ResponsiveDiv : NonResponsiveDiv;
}
var RechartsWrapper = /* @__PURE__ */ (0, import_react.forwardRef)((props, ref) => {
	var { children, className, height: heightFromProps, onClick, onContextMenu, onDoubleClick, onMouseDown, onMouseEnter, onMouseLeave, onMouseMove, onMouseUp, onTouchEnd, onTouchMove, onTouchStart, style, width: widthFromProps, responsive, dispatchTouchEvents = true } = props;
	var containerRef = (0, import_react.useRef)(null);
	var dispatch = useAppDispatch();
	var [tooltipPortal, setTooltipPortal] = (0, import_react.useState)(null);
	var [legendPortal, setLegendPortal] = (0, import_react.useState)(null);
	var setScaleRef = useReportScale();
	var responsiveContainerCalculations = useResponsiveContainerContext();
	var width = (responsiveContainerCalculations === null || responsiveContainerCalculations === void 0 ? void 0 : responsiveContainerCalculations.width) > 0 ? responsiveContainerCalculations.width : widthFromProps;
	var height = (responsiveContainerCalculations === null || responsiveContainerCalculations === void 0 ? void 0 : responsiveContainerCalculations.height) > 0 ? responsiveContainerCalculations.height : heightFromProps;
	var innerRef = (0, import_react.useCallback)((node) => {
		setScaleRef(node);
		if (typeof ref === "function") ref(node);
		setTooltipPortal(node);
		setLegendPortal(node);
		if (node != null) containerRef.current = node;
	}, [
		setScaleRef,
		ref,
		setTooltipPortal,
		setLegendPortal
	]);
	var myOnClick = (0, import_react.useCallback)((e) => {
		dispatch(mouseClickAction(e));
		dispatch(externalEventAction({
			handler: onClick,
			reactEvent: e
		}));
	}, [dispatch, onClick]);
	var myOnMouseEnter = (0, import_react.useCallback)((e) => {
		dispatch(mouseMoveAction(e));
		dispatch(externalEventAction({
			handler: onMouseEnter,
			reactEvent: e
		}));
	}, [dispatch, onMouseEnter]);
	var myOnMouseLeave = (0, import_react.useCallback)((e) => {
		dispatch(mouseLeaveChart());
		dispatch(externalEventAction({
			handler: onMouseLeave,
			reactEvent: e
		}));
	}, [dispatch, onMouseLeave]);
	var myOnMouseMove = (0, import_react.useCallback)((e) => {
		dispatch(mouseMoveAction(e));
		dispatch(externalEventAction({
			handler: onMouseMove,
			reactEvent: e
		}));
	}, [dispatch, onMouseMove]);
	var onFocus = (0, import_react.useCallback)(() => {
		dispatch(focusAction());
	}, [dispatch]);
	var onBlur = (0, import_react.useCallback)(() => {
		dispatch(blurAction());
	}, [dispatch]);
	var onKeyDown = (0, import_react.useCallback)((e) => {
		dispatch(keyDownAction(e.key));
	}, [dispatch]);
	var myOnContextMenu = (0, import_react.useCallback)((e) => {
		dispatch(externalEventAction({
			handler: onContextMenu,
			reactEvent: e
		}));
	}, [dispatch, onContextMenu]);
	var myOnDoubleClick = (0, import_react.useCallback)((e) => {
		dispatch(externalEventAction({
			handler: onDoubleClick,
			reactEvent: e
		}));
	}, [dispatch, onDoubleClick]);
	var myOnMouseDown = (0, import_react.useCallback)((e) => {
		dispatch(externalEventAction({
			handler: onMouseDown,
			reactEvent: e
		}));
	}, [dispatch, onMouseDown]);
	var myOnMouseUp = (0, import_react.useCallback)((e) => {
		dispatch(externalEventAction({
			handler: onMouseUp,
			reactEvent: e
		}));
	}, [dispatch, onMouseUp]);
	var myOnTouchStart = (0, import_react.useCallback)((e) => {
		dispatch(externalEventAction({
			handler: onTouchStart,
			reactEvent: e
		}));
	}, [dispatch, onTouchStart]);
	var myOnTouchMove = (0, import_react.useCallback)((e) => {
		if (dispatchTouchEvents) dispatch(touchEventAction(e));
		dispatch(externalEventAction({
			handler: onTouchMove,
			reactEvent: e
		}));
	}, [
		dispatch,
		dispatchTouchEvents,
		onTouchMove
	]);
	var myOnTouchEnd = (0, import_react.useCallback)((e) => {
		dispatch(externalEventAction({
			handler: onTouchEnd,
			reactEvent: e
		}));
	}, [dispatch, onTouchEnd]);
	var WrapperDiv = getWrapperDivComponent(responsive);
	return /* @__PURE__ */ import_react.createElement(TooltipPortalContext.Provider, { value: tooltipPortal }, /* @__PURE__ */ import_react.createElement(LegendPortalContext.Provider, { value: legendPortal }, /* @__PURE__ */ import_react.createElement(WrapperDiv, {
		width: width !== null && width !== void 0 ? width : style === null || style === void 0 ? void 0 : style.width,
		height: height !== null && height !== void 0 ? height : style === null || style === void 0 ? void 0 : style.height,
		className: clsx("recharts-wrapper", className),
		style: _objectSpread$18({
			position: "relative",
			cursor: "default",
			width,
			height
		}, style),
		onClick: myOnClick,
		onContextMenu: myOnContextMenu,
		onDoubleClick: myOnDoubleClick,
		onFocus,
		onBlur,
		onKeyDown,
		onMouseDown: myOnMouseDown,
		onMouseEnter: myOnMouseEnter,
		onMouseLeave: myOnMouseLeave,
		onMouseMove: myOnMouseMove,
		onMouseUp: myOnMouseUp,
		onTouchEnd: myOnTouchEnd,
		onTouchMove: myOnTouchMove,
		onTouchStart: myOnTouchStart,
		ref: innerRef
	}, /* @__PURE__ */ import_react.createElement(EventSynchronizer, null), children)));
});
var ClipPathIdContext = /* @__PURE__ */ (0, import_react.createContext)(void 0);
/**
* Generates a unique clip path ID for use in SVG elements,
* and puts it in a context provider.
*
* To read the clip path ID, use the `useClipPathId` hook,
* or render `<ClipPath>` component which will automatically use the ID from this context.
*
* @param props children - React children to be wrapped by the provider
* @returns React Context Provider
*/
var ClipPathProvider = (_ref) => {
	var { children } = _ref;
	var [clipPathId] = (0, import_react.useState)("".concat(uniqueId("recharts"), "-clip"));
	var plotArea = usePlotArea();
	if (plotArea == null) return null;
	var { x, y, width, height } = plotArea;
	return /* @__PURE__ */ import_react.createElement(ClipPathIdContext.Provider, { value: clipPathId }, /* @__PURE__ */ import_react.createElement("defs", null, /* @__PURE__ */ import_react.createElement("clipPath", { id: clipPathId }, /* @__PURE__ */ import_react.createElement("rect", {
		x,
		y,
		height,
		width
	}))), children);
};
var _excluded$12 = [
	"width",
	"height",
	"responsive",
	"children",
	"className",
	"style",
	"compact",
	"title",
	"desc"
];
function _objectWithoutProperties$12(e, t) {
	if (null == e) return {};
	var o, r, i = _objectWithoutPropertiesLoose$12(e, t);
	if (Object.getOwnPropertySymbols) {
		var n = Object.getOwnPropertySymbols(e);
		for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
	}
	return i;
}
function _objectWithoutPropertiesLoose$12(r, e) {
	if (null == r) return {};
	var t = {};
	for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
		if (-1 !== e.indexOf(n)) continue;
		t[n] = r[n];
	}
	return t;
}
var CategoricalChart = /* @__PURE__ */ (0, import_react.forwardRef)((props, ref) => {
	var { width, height, responsive, children, className, style, compact, title, desc } = props;
	var attrs = svgPropertiesNoEvents(_objectWithoutProperties$12(props, _excluded$12));
	if (compact) return /* @__PURE__ */ import_react.createElement(import_react.Fragment, null, /* @__PURE__ */ import_react.createElement(ReportChartSize, {
		width,
		height
	}), /* @__PURE__ */ import_react.createElement(RootSurface, {
		otherAttributes: attrs,
		title,
		desc
	}, children));
	return /* @__PURE__ */ import_react.createElement(RechartsWrapper, {
		className,
		style,
		width,
		height,
		responsive: responsive !== null && responsive !== void 0 ? responsive : false,
		onClick: props.onClick,
		onMouseLeave: props.onMouseLeave,
		onMouseEnter: props.onMouseEnter,
		onMouseMove: props.onMouseMove,
		onMouseDown: props.onMouseDown,
		onMouseUp: props.onMouseUp,
		onContextMenu: props.onContextMenu,
		onDoubleClick: props.onDoubleClick,
		onTouchStart: props.onTouchStart,
		onTouchMove: props.onTouchMove,
		onTouchEnd: props.onTouchEnd
	}, /* @__PURE__ */ import_react.createElement(RootSurface, {
		otherAttributes: attrs,
		title,
		desc,
		ref
	}, /* @__PURE__ */ import_react.createElement(ClipPathProvider, null, children)));
});
function _extends$14() {
	return _extends$14 = Object.assign ? Object.assign.bind() : function(n) {
		for (var e = 1; e < arguments.length; e++) {
			var t = arguments[e];
			for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
		}
		return n;
	}, _extends$14.apply(null, arguments);
}
function ownKeys$17(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r) {
			return Object.getOwnPropertyDescriptor(e, r).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread$17(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys$17(Object(t), !0).forEach(function(r) {
			_defineProperty$17(e, r, t[r]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$17(Object(t)).forEach(function(r) {
			Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
		});
	}
	return e;
}
function _defineProperty$17(e, r, t) {
	return (r = _toPropertyKey$17(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}
function _toPropertyKey$17(t) {
	var i = _toPrimitive$17(t, "string");
	return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive$17(t, r) {
	if ("object" != typeof t || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != typeof i) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
var defaultCartesianChartProps = _objectSpread$17({
	accessibilityLayer: true,
	barCategoryGap: "10%",
	barGap: 4,
	layout: "horizontal",
	margin: {
		top: 5,
		right: 5,
		bottom: 5,
		left: 5
	},
	responsive: false,
	reverseStackOrder: false,
	stackOffset: "none",
	syncMethod: "index"
}, initialEventSettingsState);
/**
* These are one-time, immutable options that decide the chart's behavior.
* Users who wish to call CartesianChart may decide to pass these options explicitly,
* but usually we would expect that they use one of the convenience components like BarChart, LineChart, etc.
*/
var CartesianChart = /* @__PURE__ */ (0, import_react.forwardRef)(function CartesianChart(props, ref) {
	var _categoricalChartProp;
	var rootChartProps = resolveDefaultProps(props.categoricalChartProps, defaultCartesianChartProps);
	var { chartName, defaultTooltipEventType, validateTooltipEventTypes, tooltipPayloadSearcher, categoricalChartProps } = props;
	var options = {
		chartName,
		defaultTooltipEventType,
		validateTooltipEventTypes,
		tooltipPayloadSearcher,
		eventEmitter: void 0
	};
	return /* @__PURE__ */ import_react.createElement(RechartsStoreProvider, {
		preloadedState: { options },
		reduxStoreName: (_categoricalChartProp = categoricalChartProps.id) !== null && _categoricalChartProp !== void 0 ? _categoricalChartProp : chartName
	}, /* @__PURE__ */ import_react.createElement(ChartDataContextProvider, { chartData: categoricalChartProps.data }), /* @__PURE__ */ import_react.createElement(ReportMainChartProps, {
		layout: rootChartProps.layout,
		margin: rootChartProps.margin
	}), /* @__PURE__ */ import_react.createElement(ReportEventSettings, {
		throttleDelay: rootChartProps.throttleDelay,
		throttledEvents: rootChartProps.throttledEvents
	}), /* @__PURE__ */ import_react.createElement(ReportChartProps, {
		baseValue: rootChartProps.baseValue,
		accessibilityLayer: rootChartProps.accessibilityLayer,
		barCategoryGap: rootChartProps.barCategoryGap,
		maxBarSize: rootChartProps.maxBarSize,
		stackOffset: rootChartProps.stackOffset,
		barGap: rootChartProps.barGap,
		barSize: rootChartProps.barSize,
		syncId: rootChartProps.syncId,
		syncMethod: rootChartProps.syncMethod,
		className: rootChartProps.className,
		reverseStackOrder: rootChartProps.reverseStackOrder
	}), /* @__PURE__ */ import_react.createElement(CategoricalChart, _extends$14({}, rootChartProps, { ref })));
});
var allowedTooltipTypes$1 = ["axis"];
/**
* @consumes ResponsiveContainerContext
* @provides CartesianViewBoxContext
* @provides CartesianChartContext
*/
var AreaChart = /* @__PURE__ */ (0, import_react.forwardRef)((props, ref) => {
	return /* @__PURE__ */ import_react.createElement(CartesianChart, {
		chartName: "AreaChart",
		defaultTooltipEventType: "axis",
		validateTooltipEventTypes: allowedTooltipTypes$1,
		tooltipPayloadSearcher: arrayTooltipSearcher,
		categoricalChartProps: props,
		ref
	});
});
/**
* Cell component used to define colors and styles of chart elements.
*
* This component is now deprecated and will be removed in Recharts 4.0.
*
* Please use the `shape` prop or `content` prop on the respective chart components
* to customize the rendering of chart elements instead of using `Cell`.
*
* @see {@link https://recharts.github.io/en-US/guide/cell/ Guide: Migrate from Cell component to shape prop}
*
* @deprecated
* @consumes CellReader
*/
var Cell = (_props) => null;
Cell.displayName = "Cell";
/**
* @fileOverview Rectangle
*/
var _excluded$11 = ["radius"], _excluded2$5 = ["radius"];
var _templateObject$2, _templateObject2$2, _templateObject3$2, _templateObject4$2, _templateObject5$2, _templateObject6$1, _templateObject7$1, _templateObject8, _templateObject9, _templateObject0;
function ownKeys$16(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r) {
			return Object.getOwnPropertyDescriptor(e, r).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread$16(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys$16(Object(t), !0).forEach(function(r) {
			_defineProperty$16(e, r, t[r]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$16(Object(t)).forEach(function(r) {
			Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
		});
	}
	return e;
}
function _defineProperty$16(e, r, t) {
	return (r = _toPropertyKey$16(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}
function _toPropertyKey$16(t) {
	var i = _toPrimitive$16(t, "string");
	return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive$16(t, r) {
	if ("object" != typeof t || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != typeof i) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
function _extends$13() {
	return _extends$13 = Object.assign ? Object.assign.bind() : function(n) {
		for (var e = 1; e < arguments.length; e++) {
			var t = arguments[e];
			for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
		}
		return n;
	}, _extends$13.apply(null, arguments);
}
function _objectWithoutProperties$11(e, t) {
	if (null == e) return {};
	var o, r, i = _objectWithoutPropertiesLoose$11(e, t);
	if (Object.getOwnPropertySymbols) {
		var n = Object.getOwnPropertySymbols(e);
		for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
	}
	return i;
}
function _objectWithoutPropertiesLoose$11(r, e) {
	if (null == r) return {};
	var t = {};
	for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
		if (-1 !== e.indexOf(n)) continue;
		t[n] = r[n];
	}
	return t;
}
function _taggedTemplateLiteral$2(e, t) {
	return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
}
/**
* @inline
*/
var getRectanglePath = (x, y, width, height, radius) => {
	var roundedWidth = round(width);
	var roundedHeight = round(height);
	var maxRadius = Math.min(Math.abs(roundedWidth) / 2, Math.abs(roundedHeight) / 2);
	var ySign = roundedHeight >= 0 ? 1 : -1;
	var xSign = roundedWidth >= 0 ? 1 : -1;
	var clockWise = roundedHeight >= 0 && roundedWidth >= 0 || roundedHeight < 0 && roundedWidth < 0 ? 1 : 0;
	var path;
	if (maxRadius > 0 && Array.isArray(radius)) {
		var newRadius = [
			0,
			0,
			0,
			0
		];
		for (var i = 0, len = 4; i < len; i++) {
			var _radius$i;
			var r = (_radius$i = radius[i]) !== null && _radius$i !== void 0 ? _radius$i : 0;
			newRadius[i] = r > maxRadius ? maxRadius : r;
		}
		path = roundTemplateLiteral(_templateObject$2 || (_templateObject$2 = _taggedTemplateLiteral$2([
			"M",
			",",
			""
		])), x, y + ySign * newRadius[0]);
		if (newRadius[0] > 0) path += roundTemplateLiteral(_templateObject2$2 || (_templateObject2$2 = _taggedTemplateLiteral$2([
			"A ",
			",",
			",0,0,",
			",",
			",",
			""
		])), newRadius[0], newRadius[0], clockWise, x + xSign * newRadius[0], y);
		path += roundTemplateLiteral(_templateObject3$2 || (_templateObject3$2 = _taggedTemplateLiteral$2([
			"L ",
			",",
			""
		])), x + width - xSign * newRadius[1], y);
		if (newRadius[1] > 0) path += roundTemplateLiteral(_templateObject4$2 || (_templateObject4$2 = _taggedTemplateLiteral$2([
			"A ",
			",",
			",0,0,",
			",\n        ",
			",",
			""
		])), newRadius[1], newRadius[1], clockWise, x + width, y + ySign * newRadius[1]);
		path += roundTemplateLiteral(_templateObject5$2 || (_templateObject5$2 = _taggedTemplateLiteral$2([
			"L ",
			",",
			""
		])), x + width, y + height - ySign * newRadius[2]);
		if (newRadius[2] > 0) path += roundTemplateLiteral(_templateObject6$1 || (_templateObject6$1 = _taggedTemplateLiteral$2([
			"A ",
			",",
			",0,0,",
			",\n        ",
			",",
			""
		])), newRadius[2], newRadius[2], clockWise, x + width - xSign * newRadius[2], y + height);
		path += roundTemplateLiteral(_templateObject7$1 || (_templateObject7$1 = _taggedTemplateLiteral$2([
			"L ",
			",",
			""
		])), x + xSign * newRadius[3], y + height);
		if (newRadius[3] > 0) path += roundTemplateLiteral(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral$2([
			"A ",
			",",
			",0,0,",
			",\n        ",
			",",
			""
		])), newRadius[3], newRadius[3], clockWise, x, y + height - ySign * newRadius[3]);
		path += "Z";
	} else if (maxRadius > 0 && radius === +radius && radius > 0) {
		var _newRadius = Math.min(maxRadius, radius);
		path = roundTemplateLiteral(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral$2([
			"M ",
			",",
			"\n            A ",
			",",
			",0,0,",
			",",
			",",
			"\n            L ",
			",",
			"\n            A ",
			",",
			",0,0,",
			",",
			",",
			"\n            L ",
			",",
			"\n            A ",
			",",
			",0,0,",
			",",
			",",
			"\n            L ",
			",",
			"\n            A ",
			",",
			",0,0,",
			",",
			",",
			" Z"
		])), x, y + ySign * _newRadius, _newRadius, _newRadius, clockWise, x + xSign * _newRadius, y, x + width - xSign * _newRadius, y, _newRadius, _newRadius, clockWise, x + width, y + ySign * _newRadius, x + width, y + height - ySign * _newRadius, _newRadius, _newRadius, clockWise, x + width - xSign * _newRadius, y + height, x + xSign * _newRadius, y + height, _newRadius, _newRadius, clockWise, x, y + height - ySign * _newRadius);
	} else path = roundTemplateLiteral(_templateObject0 || (_templateObject0 = _taggedTemplateLiteral$2([
		"M ",
		",",
		" h ",
		" v ",
		" h ",
		" Z"
	])), x, y, width, height, -width);
	return path;
};
var defaultRectangleProps = {
	x: 0,
	y: 0,
	width: 0,
	height: 0,
	radius: 0,
	isAnimationActive: false,
	isUpdateAnimationActive: false,
	animationBegin: 0,
	animationDuration: 1500,
	animationEasing: "ease"
};
/**
* Renders a rectangle element. Unlike the {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Element/rect rect SVG element}, this component supports rounded corners
* and animation.
*
* This component accepts X and Y coordinates in pixels.
* If you need to position the rectangle based on your chart's data,
* consider using the {@link ReferenceArea} component instead.
*
* @param rectangleProps
* @constructor
*/
var Rectangle = (rectangleProps) => {
	var props = resolveDefaultProps(rectangleProps, defaultRectangleProps);
	var pathRef = (0, import_react.useRef)(null);
	var [totalLength, setTotalLength] = (0, import_react.useState)(-1);
	(0, import_react.useEffect)(() => {
		if (pathRef.current && pathRef.current.getTotalLength) try {
			var pathTotalLength = pathRef.current.getTotalLength();
			if (pathTotalLength) setTotalLength(pathTotalLength);
		} catch (_unused) {}
	}, []);
	var { x, y, width, height, radius, className } = props;
	var { animationEasing, animationDuration, animationBegin, isAnimationActive, isUpdateAnimationActive } = props;
	var prevWidthRef = (0, import_react.useRef)(width);
	var prevHeightRef = (0, import_react.useRef)(height);
	var prevXRef = (0, import_react.useRef)(x);
	var prevYRef = (0, import_react.useRef)(y);
	var animationId = useAnimationId((0, import_react.useMemo)(() => ({
		x,
		y,
		width,
		height,
		radius
	}), [
		x,
		y,
		width,
		height,
		radius
	]), "rectangle-");
	if (x !== +x || y !== +y || width !== +width || height !== +height || width === 0 || height === 0) return null;
	var layerClass = clsx("recharts-rectangle", className);
	if (!isUpdateAnimationActive) {
		var _svgPropertiesAndEven = svgPropertiesAndEvents(props), { radius: _ } = _svgPropertiesAndEven, otherPathProps = _objectWithoutProperties$11(_svgPropertiesAndEven, _excluded$11);
		return /* @__PURE__ */ import_react.createElement("path", _extends$13({}, otherPathProps, {
			x: round(x),
			y: round(y),
			width: round(width),
			height: round(height),
			radius: typeof radius === "number" ? radius : void 0,
			className: layerClass,
			d: getRectanglePath(x, y, width, height, radius)
		}));
	}
	var prevWidth = prevWidthRef.current;
	var prevHeight = prevHeightRef.current;
	var prevX = prevXRef.current;
	var prevY = prevYRef.current;
	var from = "0px ".concat(totalLength === -1 ? 1 : totalLength, "px");
	var to = "".concat(totalLength, "px ").concat(totalLength, "px");
	var transition = getTransitionVal(["strokeDasharray"], animationDuration, typeof animationEasing === "string" ? animationEasing : defaultRectangleProps.animationEasing);
	return /* @__PURE__ */ import_react.createElement(JavascriptAnimate, {
		animationId,
		key: animationId,
		canBegin: totalLength > 0,
		duration: animationDuration,
		easing: animationEasing,
		isActive: isUpdateAnimationActive,
		begin: animationBegin
	}, (t) => {
		var currWidth = interpolate(prevWidth, width, t);
		var currHeight = interpolate(prevHeight, height, t);
		var currX = interpolate(prevX, x, t);
		var currY = interpolate(prevY, y, t);
		if (pathRef.current) {
			prevWidthRef.current = currWidth;
			prevHeightRef.current = currHeight;
			prevXRef.current = currX;
			prevYRef.current = currY;
		}
		var animationStyle;
		if (!isAnimationActive) animationStyle = { strokeDasharray: to };
		else if (t > 0) animationStyle = {
			transition,
			strokeDasharray: to
		};
		else animationStyle = { strokeDasharray: from };
		var _svgPropertiesAndEven2 = svgPropertiesAndEvents(props), { radius: _ } = _svgPropertiesAndEven2, otherPathProps = _objectWithoutProperties$11(_svgPropertiesAndEven2, _excluded2$5);
		return /* @__PURE__ */ import_react.createElement("path", _extends$13({}, otherPathProps, {
			radius: typeof radius === "number" ? radius : void 0,
			className: layerClass,
			d: getRectanglePath(currX, currY, currWidth, currHeight, radius),
			ref: pathRef,
			style: _objectSpread$16(_objectSpread$16({}, animationStyle), props.style)
		}));
	});
};
/**
* @fileOverview Rectangle
*/
var _templateObject$1, _templateObject2$1, _templateObject3$1, _templateObject4$1, _templateObject5$1;
function ownKeys$15(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r) {
			return Object.getOwnPropertyDescriptor(e, r).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread$15(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys$15(Object(t), !0).forEach(function(r) {
			_defineProperty$15(e, r, t[r]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$15(Object(t)).forEach(function(r) {
			Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
		});
	}
	return e;
}
function _defineProperty$15(e, r, t) {
	return (r = _toPropertyKey$15(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}
function _toPropertyKey$15(t) {
	var i = _toPrimitive$15(t, "string");
	return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive$15(t, r) {
	if ("object" != typeof t || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != typeof i) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
function _extends$12() {
	return _extends$12 = Object.assign ? Object.assign.bind() : function(n) {
		for (var e = 1; e < arguments.length; e++) {
			var t = arguments[e];
			for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
		}
		return n;
	}, _extends$12.apply(null, arguments);
}
function _taggedTemplateLiteral$1(e, t) {
	return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
}
var getTrapezoidPath = (x, y, upperWidth, lowerWidth, height) => {
	var widthGap = upperWidth - lowerWidth;
	var path = roundTemplateLiteral(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteral$1([
		"M ",
		",",
		""
	])), x, y);
	path += roundTemplateLiteral(_templateObject2$1 || (_templateObject2$1 = _taggedTemplateLiteral$1([
		"L ",
		",",
		""
	])), x + upperWidth, y);
	path += roundTemplateLiteral(_templateObject3$1 || (_templateObject3$1 = _taggedTemplateLiteral$1([
		"L ",
		",",
		""
	])), x + upperWidth - widthGap / 2, y + height);
	path += roundTemplateLiteral(_templateObject4$1 || (_templateObject4$1 = _taggedTemplateLiteral$1([
		"L ",
		",",
		""
	])), x + upperWidth - widthGap / 2 - lowerWidth, y + height);
	path += roundTemplateLiteral(_templateObject5$1 || (_templateObject5$1 = _taggedTemplateLiteral$1([
		"L ",
		",",
		" Z"
	])), x, y);
	return path;
};
var defaultTrapezoidProps = {
	x: 0,
	y: 0,
	upperWidth: 0,
	lowerWidth: 0,
	height: 0,
	isUpdateAnimationActive: false,
	animationBegin: 0,
	animationDuration: 1500,
	animationEasing: "ease"
};
var Trapezoid = (outsideProps) => {
	var trapezoidProps = resolveDefaultProps(outsideProps, defaultTrapezoidProps);
	var { x, y, upperWidth, lowerWidth, height, className } = trapezoidProps;
	var { animationEasing, animationDuration, animationBegin, isUpdateAnimationActive } = trapezoidProps;
	var pathRef = (0, import_react.useRef)(null);
	var [totalLength, setTotalLength] = (0, import_react.useState)(-1);
	var prevUpperWidthRef = (0, import_react.useRef)(upperWidth);
	var prevLowerWidthRef = (0, import_react.useRef)(lowerWidth);
	var prevHeightRef = (0, import_react.useRef)(height);
	var prevXRef = (0, import_react.useRef)(x);
	var prevYRef = (0, import_react.useRef)(y);
	var animationId = useAnimationId(outsideProps, "trapezoid-");
	(0, import_react.useEffect)(() => {
		if (pathRef.current && pathRef.current.getTotalLength) try {
			var pathTotalLength = pathRef.current.getTotalLength();
			if (pathTotalLength) setTotalLength(pathTotalLength);
		} catch (_unused) {}
	}, []);
	if (x !== +x || y !== +y || upperWidth !== +upperWidth || lowerWidth !== +lowerWidth || height !== +height || upperWidth === 0 && lowerWidth === 0 || height === 0) return null;
	var layerClass = clsx("recharts-trapezoid", className);
	if (!isUpdateAnimationActive) return /* @__PURE__ */ import_react.createElement("g", null, /* @__PURE__ */ import_react.createElement("path", _extends$12({}, svgPropertiesAndEvents(trapezoidProps), {
		className: layerClass,
		d: getTrapezoidPath(x, y, upperWidth, lowerWidth, height)
	})));
	var prevUpperWidth = prevUpperWidthRef.current;
	var prevLowerWidth = prevLowerWidthRef.current;
	var prevHeight = prevHeightRef.current;
	var prevX = prevXRef.current;
	var prevY = prevYRef.current;
	var from = "0px ".concat(totalLength === -1 ? 1 : totalLength, "px");
	var to = "".concat(totalLength, "px ").concat(totalLength, "px");
	var transition = getTransitionVal(["strokeDasharray"], animationDuration, animationEasing);
	return /* @__PURE__ */ import_react.createElement(JavascriptAnimate, {
		animationId,
		key: animationId,
		canBegin: totalLength > 0,
		duration: animationDuration,
		easing: animationEasing,
		isActive: isUpdateAnimationActive,
		begin: animationBegin
	}, (t) => {
		var currUpperWidth = interpolate(prevUpperWidth, upperWidth, t);
		var currLowerWidth = interpolate(prevLowerWidth, lowerWidth, t);
		var currHeight = interpolate(prevHeight, height, t);
		var currX = interpolate(prevX, x, t);
		var currY = interpolate(prevY, y, t);
		if (pathRef.current) {
			prevUpperWidthRef.current = currUpperWidth;
			prevLowerWidthRef.current = currLowerWidth;
			prevHeightRef.current = currHeight;
			prevXRef.current = currX;
			prevYRef.current = currY;
		}
		var animationStyle = t > 0 ? {
			transition,
			strokeDasharray: to
		} : { strokeDasharray: from };
		return /* @__PURE__ */ import_react.createElement("path", _extends$12({}, svgPropertiesAndEvents(trapezoidProps), {
			className: layerClass,
			d: getTrapezoidPath(currX, currY, currUpperWidth, currLowerWidth, currHeight),
			ref: pathRef,
			style: _objectSpread$15(_objectSpread$15({}, animationStyle), trapezoidProps.style)
		}));
	});
};
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;
function _extends$11() {
	return _extends$11 = Object.assign ? Object.assign.bind() : function(n) {
		for (var e = 1; e < arguments.length; e++) {
			var t = arguments[e];
			for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
		}
		return n;
	}, _extends$11.apply(null, arguments);
}
function _taggedTemplateLiteral(e, t) {
	return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
}
var getDeltaAngle = (startAngle, endAngle) => {
	return mathSign(endAngle - startAngle) * Math.min(Math.abs(endAngle - startAngle), 359.999);
};
var getTangentCircle = (_ref) => {
	var { cx, cy, radius, angle, sign, isExternal, cornerRadius, cornerIsExternal } = _ref;
	var centerRadius = cornerRadius * (isExternal ? 1 : -1) + radius;
	var theta = Math.asin(cornerRadius / centerRadius) / RADIAN$1;
	var centerAngle = cornerIsExternal ? angle : angle + sign * theta;
	var center = polarToCartesian(cx, cy, centerRadius, centerAngle);
	var circleTangency = polarToCartesian(cx, cy, radius, centerAngle);
	var lineTangencyAngle = cornerIsExternal ? angle - sign * theta : angle;
	return {
		center,
		circleTangency,
		lineTangency: polarToCartesian(cx, cy, centerRadius * Math.cos(theta * RADIAN$1), lineTangencyAngle),
		theta
	};
};
var getSectorPath = (_ref2) => {
	var { cx, cy, innerRadius, outerRadius, startAngle, endAngle } = _ref2;
	var angle = getDeltaAngle(startAngle, endAngle);
	var tempEndAngle = startAngle + angle;
	var outerStartPoint = polarToCartesian(cx, cy, outerRadius, startAngle);
	var outerEndPoint = polarToCartesian(cx, cy, outerRadius, tempEndAngle);
	var path = roundTemplateLiteral(_templateObject || (_templateObject = _taggedTemplateLiteral([
		"M ",
		",",
		"\n    A ",
		",",
		",0,\n    ",
		",",
		",\n    ",
		",",
		"\n  "
	])), outerStartPoint.x, outerStartPoint.y, outerRadius, outerRadius, +(Math.abs(angle) > 180), +(startAngle > tempEndAngle), outerEndPoint.x, outerEndPoint.y);
	if (innerRadius > 0) {
		var innerStartPoint = polarToCartesian(cx, cy, innerRadius, startAngle);
		var innerEndPoint = polarToCartesian(cx, cy, innerRadius, tempEndAngle);
		path += roundTemplateLiteral(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral([
			"L ",
			",",
			"\n            A ",
			",",
			",0,\n            ",
			",",
			",\n            ",
			",",
			" Z"
		])), innerEndPoint.x, innerEndPoint.y, innerRadius, innerRadius, +(Math.abs(angle) > 180), +(startAngle <= tempEndAngle), innerStartPoint.x, innerStartPoint.y);
	} else path += roundTemplateLiteral(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral([
		"L ",
		",",
		" Z"
	])), cx, cy);
	return path;
};
var getSectorWithCorner = (_ref3) => {
	var { cx, cy, innerRadius, outerRadius, cornerRadius, forceCornerRadius, cornerIsExternal, startAngle, endAngle } = _ref3;
	var sign = mathSign(endAngle - startAngle);
	var { circleTangency: soct, lineTangency: solt, theta: sot } = getTangentCircle({
		cx,
		cy,
		radius: outerRadius,
		angle: startAngle,
		sign,
		cornerRadius,
		cornerIsExternal
	});
	var { circleTangency: eoct, lineTangency: eolt, theta: eot } = getTangentCircle({
		cx,
		cy,
		radius: outerRadius,
		angle: endAngle,
		sign: -sign,
		cornerRadius,
		cornerIsExternal
	});
	var outerArcAngle = cornerIsExternal ? Math.abs(startAngle - endAngle) : Math.abs(startAngle - endAngle) - sot - eot;
	if (outerArcAngle < 0) {
		if (forceCornerRadius) return roundTemplateLiteral(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral([
			"M ",
			",",
			"\n        a",
			",",
			",0,0,1,",
			",0\n        a",
			",",
			",0,0,1,",
			",0\n      "
		])), solt.x, solt.y, cornerRadius, cornerRadius, cornerRadius * 2, cornerRadius, cornerRadius, -cornerRadius * 2);
		return getSectorPath({
			cx,
			cy,
			innerRadius,
			outerRadius,
			startAngle,
			endAngle
		});
	}
	var path = roundTemplateLiteral(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral([
		"M ",
		",",
		"\n    A",
		",",
		",0,0,",
		",",
		",",
		"\n    A",
		",",
		",0,",
		",",
		",",
		",",
		"\n    A",
		",",
		",0,0,",
		",",
		",",
		"\n  "
	])), solt.x, solt.y, cornerRadius, cornerRadius, +(sign < 0), soct.x, soct.y, outerRadius, outerRadius, +(outerArcAngle > 180), +(sign < 0), eoct.x, eoct.y, cornerRadius, cornerRadius, +(sign < 0), eolt.x, eolt.y);
	if (innerRadius > 0) {
		var { circleTangency: sict, lineTangency: silt, theta: sit } = getTangentCircle({
			cx,
			cy,
			radius: innerRadius,
			angle: startAngle,
			sign,
			isExternal: true,
			cornerRadius,
			cornerIsExternal
		});
		var { circleTangency: eict, lineTangency: eilt, theta: eit } = getTangentCircle({
			cx,
			cy,
			radius: innerRadius,
			angle: endAngle,
			sign: -sign,
			isExternal: true,
			cornerRadius,
			cornerIsExternal
		});
		var innerArcAngle = cornerIsExternal ? Math.abs(startAngle - endAngle) : Math.abs(startAngle - endAngle) - sit - eit;
		if (innerArcAngle < 0 && cornerRadius === 0) return "".concat(path, "L").concat(cx, ",").concat(cy, "Z");
		path += roundTemplateLiteral(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral([
			"L",
			",",
			"\n      A",
			",",
			",0,0,",
			",",
			",",
			"\n      A",
			",",
			",0,",
			",",
			",",
			",",
			"\n      A",
			",",
			",0,0,",
			",",
			",",
			"Z"
		])), eilt.x, eilt.y, cornerRadius, cornerRadius, +(sign < 0), eict.x, eict.y, innerRadius, innerRadius, +(innerArcAngle > 180), +(sign > 0), sict.x, sict.y, cornerRadius, cornerRadius, +(sign < 0), silt.x, silt.y);
	} else path += roundTemplateLiteral(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral([
		"L",
		",",
		"Z"
	])), cx, cy);
	return path;
};
/**
* SVG cx, cy are `string | number | undefined`, but internally we use `number` so let's
* override the types here.
*/
var defaultSectorProps = {
	cx: 0,
	cy: 0,
	innerRadius: 0,
	outerRadius: 0,
	startAngle: 0,
	endAngle: 0,
	cornerRadius: 0,
	forceCornerRadius: false,
	cornerIsExternal: false
};
var Sector = (sectorProps) => {
	var props = resolveDefaultProps(sectorProps, defaultSectorProps);
	var { cx, cy, innerRadius, outerRadius, cornerRadius, forceCornerRadius, cornerIsExternal, startAngle, endAngle, className } = props;
	if (outerRadius < innerRadius || startAngle === endAngle) return null;
	var layerClass = clsx("recharts-sector", className);
	var deltaRadius = outerRadius - innerRadius;
	var cr = getPercentValue(cornerRadius, deltaRadius, 0, true);
	var path;
	if (cr > 0 && Math.abs(startAngle - endAngle) < 360) path = getSectorWithCorner({
		cx,
		cy,
		innerRadius,
		outerRadius,
		cornerRadius: Math.min(cr, deltaRadius / 2),
		forceCornerRadius,
		cornerIsExternal,
		startAngle,
		endAngle
	});
	else path = getSectorPath({
		cx,
		cy,
		innerRadius,
		outerRadius,
		startAngle,
		endAngle
	});
	return /* @__PURE__ */ import_react.createElement("path", _extends$11({}, svgPropertiesAndEvents(props), {
		className: layerClass,
		d: path
	}));
};
var _excluded$10 = [
	"type",
	"size",
	"sizeType"
];
function _extends$10() {
	return _extends$10 = Object.assign ? Object.assign.bind() : function(n) {
		for (var e = 1; e < arguments.length; e++) {
			var t = arguments[e];
			for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
		}
		return n;
	}, _extends$10.apply(null, arguments);
}
function ownKeys$14(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r) {
			return Object.getOwnPropertyDescriptor(e, r).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread$14(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys$14(Object(t), !0).forEach(function(r) {
			_defineProperty$14(e, r, t[r]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$14(Object(t)).forEach(function(r) {
			Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
		});
	}
	return e;
}
function _defineProperty$14(e, r, t) {
	return (r = _toPropertyKey$14(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}
function _toPropertyKey$14(t) {
	var i = _toPrimitive$14(t, "string");
	return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive$14(t, r) {
	if ("object" != typeof t || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != typeof i) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
function _objectWithoutProperties$10(e, t) {
	if (null == e) return {};
	var o, r, i = _objectWithoutPropertiesLoose$10(e, t);
	if (Object.getOwnPropertySymbols) {
		var n = Object.getOwnPropertySymbols(e);
		for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
	}
	return i;
}
function _objectWithoutPropertiesLoose$10(r, e) {
	if (null == r) return {};
	var t = {};
	for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
		if (-1 !== e.indexOf(n)) continue;
		t[n] = r[n];
	}
	return t;
}
var symbolFactories = {
	symbolCircle: circle_default,
	symbolCross: cross_default,
	symbolDiamond: diamond_default,
	symbolSquare: square_default,
	symbolStar: star_default,
	symbolTriangle: triangle_default,
	symbolWye: wye_default
};
var RADIAN = Math.PI / 180;
var getSymbolFactory = (type) => {
	return symbolFactories["symbol".concat(upperFirst(type))] || circle_default;
};
var calculateAreaSize = (size, sizeType, type) => {
	if (sizeType === "area") return size;
	switch (type) {
		case "cross": return 5 * size * size / 9;
		case "diamond": return .5 * size * size / Math.sqrt(3);
		case "square": return size * size;
		case "star":
			var angle = 18 * RADIAN;
			return 1.25 * size * size * (Math.tan(angle) - Math.tan(angle * 2) * Math.tan(angle) ** 2);
		case "triangle": return Math.sqrt(3) * size * size / 4;
		case "wye": return (21 - 10 * Math.sqrt(3)) * size * size / 8;
		default: return Math.PI * size * size / 4;
	}
};
var registerSymbol = (key, factory) => {
	symbolFactories["symbol".concat(upperFirst(key))] = factory;
};
/**
* Renders a symbol from a set of predefined shapes.
*/
var Symbols = (_ref) => {
	var { type = "circle", size = 64, sizeType = "area" } = _ref;
	var props = _objectSpread$14(_objectSpread$14({}, _objectWithoutProperties$10(_ref, _excluded$10)), {}, {
		type,
		size,
		sizeType
	});
	var realType = "circle";
	if (typeof type === "string") realType = type;
	/**
	* Calculate the path of curve
	* @return {String} path
	*/
	var getPath = () => {
		var symbolFactory = getSymbolFactory(realType);
		var s = Symbol$1().type(symbolFactory).size(calculateAreaSize(size, sizeType, realType))();
		if (s === null) return;
		return s;
	};
	var { className, cx, cy } = props;
	var filteredProps = svgPropertiesAndEvents(props);
	if (isNumber$1(cx) && isNumber$1(cy) && isNumber$1(size)) return /* @__PURE__ */ import_react.createElement("path", _extends$10({}, filteredProps, {
		className: clsx("recharts-symbols", className),
		transform: "translate(".concat(cx, ", ").concat(cy, ")"),
		d: getPath()
	}));
	return null;
};
Symbols.registerSymbol = registerSymbol;
var _excluded$9 = [
	"option",
	"shapeType",
	"activeClassName",
	"inActiveClassName"
];
function _objectWithoutProperties$9(e, t) {
	if (null == e) return {};
	var o, r, i = _objectWithoutPropertiesLoose$9(e, t);
	if (Object.getOwnPropertySymbols) {
		var n = Object.getOwnPropertySymbols(e);
		for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
	}
	return i;
}
function _objectWithoutPropertiesLoose$9(r, e) {
	if (null == r) return {};
	var t = {};
	for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
		if (-1 !== e.indexOf(n)) continue;
		t[n] = r[n];
	}
	return t;
}
function ownKeys$13(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r) {
			return Object.getOwnPropertyDescriptor(e, r).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread$13(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys$13(Object(t), !0).forEach(function(r) {
			_defineProperty$13(e, r, t[r]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$13(Object(t)).forEach(function(r) {
			Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
		});
	}
	return e;
}
function _defineProperty$13(e, r, t) {
	return (r = _toPropertyKey$13(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}
function _toPropertyKey$13(t) {
	var i = _toPrimitive$13(t, "string");
	return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive$13(t, r) {
	if ("object" != typeof t || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != typeof i) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
/**
* This is an abstraction for rendering a user defined prop for a customized shape in several forms.
*
* <Shape /> is the root and will handle taking in:
*  - an object of svg properties
*  - a boolean
*  - a render prop(inline function that returns jsx)
*  - a React element
*
* <ShapeSelector /> is a subcomponent of <Shape /> and used to match a component
* to the value of props.shapeType that is passed to the root.
*
*/
function defaultPropTransformer(option, props) {
	return _objectSpread$13(_objectSpread$13({}, props), option);
}
function isSymbolsProps(shapeType, _elementProps) {
	return shapeType === "symbols";
}
function ShapeSelector(_ref) {
	var { shapeType, elementProps } = _ref;
	switch (shapeType) {
		case "rectangle": return /* @__PURE__ */ import_react.createElement(Rectangle, elementProps);
		case "trapezoid": return /* @__PURE__ */ import_react.createElement(Trapezoid, elementProps);
		case "sector": return /* @__PURE__ */ import_react.createElement(Sector, elementProps);
		case "symbols":
			if (isSymbolsProps(shapeType, elementProps)) return /* @__PURE__ */ import_react.createElement(Symbols, elementProps);
			break;
		case "curve": return /* @__PURE__ */ import_react.createElement(Curve, elementProps);
		default: return null;
	}
}
function getPropsFromShapeOption(option) {
	if (/* @__PURE__ */ (0, import_react.isValidElement)(option)) return option.props;
	return option;
}
function Shape(_ref2) {
	var { option, shapeType, activeClassName = "recharts-active-shape", inActiveClassName = "recharts-shape" } = _ref2, props = _objectWithoutProperties$9(_ref2, _excluded$9);
	var shape;
	if (/* @__PURE__ */ (0, import_react.isValidElement)(option)) shape = /* @__PURE__ */ (0, import_react.cloneElement)(option, _objectSpread$13(_objectSpread$13({}, props), getPropsFromShapeOption(option)));
	else if (typeof option === "function") shape = option(props, props.index);
	else if (isPlainObject(option) && typeof option !== "boolean") {
		var nextProps = defaultPropTransformer(option, props);
		shape = /* @__PURE__ */ import_react.createElement(ShapeSelector, {
			shapeType,
			elementProps: nextProps
		});
	} else {
		var elementProps = props;
		shape = /* @__PURE__ */ import_react.createElement(ShapeSelector, {
			shapeType,
			elementProps
		});
	}
	if (props.isActive) return /* @__PURE__ */ import_react.createElement(Layer, { className: activeClassName }, shape);
	return /* @__PURE__ */ import_react.createElement(Layer, { className: inActiveClassName }, shape);
}
function _extends$9() {
	return _extends$9 = Object.assign ? Object.assign.bind() : function(n) {
		for (var e = 1; e < arguments.length; e++) {
			var t = arguments[e];
			for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
		}
		return n;
	}, _extends$9.apply(null, arguments);
}
function BarRectangle(props) {
	return /* @__PURE__ */ import_react.createElement(Shape, _extends$9({
		shapeType: "rectangle",
		activeClassName: "recharts-active-bar",
		inActiveClassName: "recharts-inactive-bar"
	}, props));
}
/**
* Safely gets minPointSize from the minPointSize prop if it is a function
* @param minPointSize minPointSize as passed to the Bar component
* @param defaultValue default minPointSize
* @returns minPointSize
*/
var minPointSizeCallback = function minPointSizeCallback(minPointSize) {
	var defaultValue = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
	return (value, index) => {
		if (isNumber$1(minPointSize)) return minPointSize;
		var isValueNumberOrNil = isNumber$1(value) || isNullish(value);
		if (isValueNumberOrNil) return minPointSize(value, index);
		!isValueNumberOrNil && invariant(false, "minPointSize callback function received a value with type of ".concat(typeof value, ". Currently only numbers or null/undefined are supported."));
		return defaultValue;
	};
};
/**
* Some graphical items choose to provide more information to the tooltip
* and some do not.
*/
var useMouseEnterItemDispatch = (onMouseEnterFromProps, dataKey, graphicalItemId) => {
	var dispatch = useAppDispatch();
	return (data, index) => (event) => {
		onMouseEnterFromProps === null || onMouseEnterFromProps === void 0 || onMouseEnterFromProps(data, index, event);
		dispatch(setActiveMouseOverItemIndex({
			activeIndex: String(index),
			activeDataKey: dataKey,
			activeCoordinate: data.tooltipPosition,
			activeGraphicalItemId: graphicalItemId
		}));
	};
};
var useMouseLeaveItemDispatch = (onMouseLeaveFromProps) => {
	var dispatch = useAppDispatch();
	return (data, index) => (event) => {
		onMouseLeaveFromProps === null || onMouseLeaveFromProps === void 0 || onMouseLeaveFromProps(data, index, event);
		dispatch(mouseLeaveItem());
	};
};
var useMouseClickItemDispatch = (onMouseClickFromProps, dataKey, graphicalItemId) => {
	var dispatch = useAppDispatch();
	return (data, index) => (event) => {
		onMouseClickFromProps === null || onMouseClickFromProps === void 0 || onMouseClickFromProps(data, index, event);
		dispatch(setActiveClickItemIndex({
			activeIndex: String(index),
			activeDataKey: dataKey,
			activeCoordinate: data.tooltipPosition,
			activeGraphicalItemId: graphicalItemId
		}));
	};
};
var _excluded$8 = ["children"];
function _objectWithoutProperties$8(e, t) {
	if (null == e) return {};
	var o, r, i = _objectWithoutPropertiesLoose$8(e, t);
	if (Object.getOwnPropertySymbols) {
		var n = Object.getOwnPropertySymbols(e);
		for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
	}
	return i;
}
function _objectWithoutPropertiesLoose$8(r, e) {
	if (null == r) return {};
	var t = {};
	for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
		if (-1 !== e.indexOf(n)) continue;
		t[n] = r[n];
	}
	return t;
}
var ErrorBarContext = /* @__PURE__ */ (0, import_react.createContext)({
	data: [],
	xAxisId: "xAxis-0",
	yAxisId: "yAxis-0",
	dataPointFormatter: () => ({
		x: 0,
		y: 0,
		value: 0
	}),
	errorBarOffset: 0
});
function SetErrorBarContext(props) {
	var { children } = props, rest = _objectWithoutProperties$8(props, _excluded$8);
	return /* @__PURE__ */ import_react.createElement(ErrorBarContext.Provider, { value: rest }, children);
}
var getBarSize = (globalSize, totalSize, selfSize) => {
	var barSize = selfSize !== null && selfSize !== void 0 ? selfSize : globalSize;
	if (isNullish(barSize)) return;
	return getPercentValue(barSize, totalSize, 0);
};
var combineBarSizeList = (allBars, globalSize, totalSize) => {
	var initialValue = {};
	var stackedBars = allBars.filter(isStacked);
	var unstackedBars = allBars.filter((b) => b.stackId == null);
	var groupByStack = stackedBars.reduce((acc, bar) => {
		var s = acc[bar.stackId];
		if (s == null) s = [];
		s.push(bar);
		acc[bar.stackId] = s;
		return acc;
	}, initialValue);
	var stackedSizeList = Object.entries(groupByStack).map((_ref) => {
		var _bars$;
		var [stackId, bars] = _ref;
		return {
			stackId,
			dataKeys: bars.map((b) => b.dataKey),
			barSize: getBarSize(globalSize, totalSize, (_bars$ = bars[0]) === null || _bars$ === void 0 ? void 0 : _bars$.barSize)
		};
	});
	var unstackedSizeList = unstackedBars.map((b) => {
		return {
			stackId: void 0,
			dataKeys: [b.dataKey].filter((dk) => dk != null),
			barSize: getBarSize(globalSize, totalSize, b.barSize)
		};
	});
	return [...stackedSizeList, ...unstackedSizeList];
};
function ownKeys$12(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r) {
			return Object.getOwnPropertyDescriptor(e, r).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread$12(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys$12(Object(t), !0).forEach(function(r) {
			_defineProperty$12(e, r, t[r]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$12(Object(t)).forEach(function(r) {
			Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
		});
	}
	return e;
}
function _defineProperty$12(e, r, t) {
	return (r = _toPropertyKey$12(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}
function _toPropertyKey$12(t) {
	var i = _toPrimitive$12(t, "string");
	return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive$12(t, r) {
	if ("object" != typeof t || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != typeof i) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
function getBarPositions(barGap, barCategoryGap, bandSize, sizeList, maxBarSize) {
	var _sizeList$;
	var len = sizeList.length;
	if (len < 1) return;
	var realBarGap = getPercentValue(barGap, bandSize, 0, true);
	var result;
	var initialValue = [];
	if (isWellBehavedNumber((_sizeList$ = sizeList[0]) === null || _sizeList$ === void 0 ? void 0 : _sizeList$.barSize)) {
		var useFull = false;
		var fullBarSize = bandSize / len;
		var sum = sizeList.reduce((res, entry) => res + (entry.barSize || 0), 0);
		sum += (len - 1) * realBarGap;
		if (sum >= bandSize) {
			sum -= (len - 1) * realBarGap;
			realBarGap = 0;
		}
		if (sum >= bandSize && fullBarSize > 0) {
			useFull = true;
			fullBarSize *= .9;
			sum = len * fullBarSize;
		}
		var prev = {
			offset: ((bandSize - sum) / 2 >> 0) - realBarGap,
			size: 0
		};
		result = sizeList.reduce((res, entry) => {
			var _entry$barSize;
			var newPosition = {
				stackId: entry.stackId,
				dataKeys: entry.dataKeys,
				position: {
					offset: prev.offset + prev.size + realBarGap,
					size: useFull ? fullBarSize : (_entry$barSize = entry.barSize) !== null && _entry$barSize !== void 0 ? _entry$barSize : 0
				}
			};
			var newRes = [...res, newPosition];
			prev = newPosition.position;
			return newRes;
		}, initialValue);
	} else {
		var _offset = getPercentValue(barCategoryGap, bandSize, 0, true);
		if (bandSize - 2 * _offset - (len - 1) * realBarGap <= 0) realBarGap = 0;
		var originalSize = (bandSize - 2 * _offset - (len - 1) * realBarGap) / len;
		if (originalSize > 1) originalSize >>= 0;
		var size = isWellBehavedNumber(maxBarSize) ? Math.min(originalSize, maxBarSize) : originalSize;
		result = sizeList.reduce((res, entry, i) => [...res, {
			stackId: entry.stackId,
			dataKeys: entry.dataKeys,
			position: {
				offset: _offset + (originalSize + realBarGap) * i + (originalSize - size) / 2,
				size
			}
		}], initialValue);
	}
	return result;
}
var combineAllBarPositions = (sizeList, globalMaxBarSize, barGap, barCategoryGap, barBandSize, bandSize, childMaxBarSize) => {
	var maxBarSize = isNullish(childMaxBarSize) ? globalMaxBarSize : childMaxBarSize;
	var allBarPositions = getBarPositions(barGap, barCategoryGap, barBandSize !== bandSize ? barBandSize : bandSize, sizeList, maxBarSize);
	if (barBandSize !== bandSize && allBarPositions != null) allBarPositions = allBarPositions.map((pos) => _objectSpread$12(_objectSpread$12({}, pos), {}, { position: _objectSpread$12(_objectSpread$12({}, pos.position), {}, { offset: pos.position.offset - barBandSize / 2 }) }));
	return allBarPositions;
};
var combineStackedData = (stackGroups, barSettings) => {
	var stackSeriesIdentifier = getStackSeriesIdentifier(barSettings);
	if (!stackGroups || stackSeriesIdentifier == null || barSettings == null) return;
	var { stackId } = barSettings;
	if (stackId == null) return;
	var stackGroup = stackGroups[stackId];
	if (!stackGroup) return;
	var { stackedData } = stackGroup;
	if (!stackedData) return;
	return stackedData.find((sd) => sd.key === stackSeriesIdentifier);
};
var combineBarPosition = (allBarPositions, barSettings) => {
	if (allBarPositions == null || barSettings == null) return;
	var position = allBarPositions.find((p) => p.stackId === barSettings.stackId && barSettings.dataKey != null && p.dataKeys.includes(barSettings.dataKey));
	if (position == null) return;
	return position.position;
};
var pickIsPanorama = (_state, _id, isPanorama) => isPanorama;
var pickBarId = (_state, id) => id;
var selectSynchronisedBarSettings = createSelector([selectUnfilteredCartesianItems, pickBarId], (graphicalItems, id) => graphicalItems.filter((item) => item.type === "bar").find((item) => item.id === id));
var selectMaxBarSize = createSelector([selectSynchronisedBarSettings], (barSettings) => barSettings === null || barSettings === void 0 ? void 0 : barSettings.maxBarSize);
var pickCells = (_state, _id, _isPanorama, cells) => cells;
var selectAllVisibleBars = createSelector([
	selectChartLayout,
	selectUnfilteredCartesianItems,
	selectXAxisIdFromGraphicalItemId,
	selectYAxisIdFromGraphicalItemId,
	pickIsPanorama
], (layout, allItems, xAxisId, yAxisId, isPanorama) => allItems.filter((i) => {
	if (layout === "horizontal") return i.xAxisId === xAxisId;
	return i.yAxisId === yAxisId;
}).filter((i) => i.isPanorama === isPanorama).filter((i) => i.hide === false).filter((i) => i.type === "bar"));
var selectBarStackGroups = (state, id, isPanorama) => {
	var layout = selectChartLayout(state);
	var xAxisId = selectXAxisIdFromGraphicalItemId(state, id);
	var yAxisId = selectYAxisIdFromGraphicalItemId(state, id);
	if (xAxisId == null || yAxisId == null) return;
	if (layout === "horizontal") return selectStackGroups(state, "yAxis", yAxisId, isPanorama);
	return selectStackGroups(state, "xAxis", xAxisId, isPanorama);
};
var selectBarCartesianAxisSize = (state, id) => {
	var layout = selectChartLayout(state);
	var xAxisId = selectXAxisIdFromGraphicalItemId(state, id);
	var yAxisId = selectYAxisIdFromGraphicalItemId(state, id);
	if (xAxisId == null || yAxisId == null) return;
	if (layout === "horizontal") return selectCartesianAxisSize(state, "xAxis", xAxisId);
	return selectCartesianAxisSize(state, "yAxis", yAxisId);
};
var selectBarSizeList = createSelector([
	selectAllVisibleBars,
	selectRootBarSize,
	selectBarCartesianAxisSize
], combineBarSizeList);
var selectBarBandSize = (state, id, isPanorama) => {
	var _ref, _getBandSizeOfAxis;
	var barSettings = selectSynchronisedBarSettings(state, id);
	if (barSettings == null) return 0;
	var xAxisId = selectXAxisIdFromGraphicalItemId(state, id);
	var yAxisId = selectYAxisIdFromGraphicalItemId(state, id);
	if (xAxisId == null || yAxisId == null) return 0;
	var layout = selectChartLayout(state);
	var globalMaxBarSize = selectRootMaxBarSize(state);
	var { maxBarSize: childMaxBarSize } = barSettings;
	var maxBarSize = isNullish(childMaxBarSize) ? globalMaxBarSize : childMaxBarSize;
	var axis, ticks;
	if (layout === "horizontal") {
		axis = selectAxisWithScale(state, "xAxis", xAxisId, isPanorama);
		ticks = selectTicksOfGraphicalItem(state, "xAxis", xAxisId, isPanorama);
	} else {
		axis = selectAxisWithScale(state, "yAxis", yAxisId, isPanorama);
		ticks = selectTicksOfGraphicalItem(state, "yAxis", yAxisId, isPanorama);
	}
	return (_ref = (_getBandSizeOfAxis = getBandSizeOfAxis(axis, ticks, true)) !== null && _getBandSizeOfAxis !== void 0 ? _getBandSizeOfAxis : maxBarSize) !== null && _ref !== void 0 ? _ref : 0;
};
var selectAxisBandSize = (state, id, isPanorama) => {
	var layout = selectChartLayout(state);
	var xAxisId = selectXAxisIdFromGraphicalItemId(state, id);
	var yAxisId = selectYAxisIdFromGraphicalItemId(state, id);
	if (xAxisId == null || yAxisId == null) return;
	var axis, ticks;
	if (layout === "horizontal") {
		axis = selectAxisWithScale(state, "xAxis", xAxisId, isPanorama);
		ticks = selectTicksOfGraphicalItem(state, "xAxis", xAxisId, isPanorama);
	} else {
		axis = selectAxisWithScale(state, "yAxis", yAxisId, isPanorama);
		ticks = selectTicksOfGraphicalItem(state, "yAxis", yAxisId, isPanorama);
	}
	return getBandSizeOfAxis(axis, ticks);
};
var selectAllBarPositions = createSelector([
	selectBarSizeList,
	selectRootMaxBarSize,
	selectBarGap,
	selectBarCategoryGap,
	selectBarBandSize,
	selectAxisBandSize,
	selectMaxBarSize
], combineAllBarPositions);
var selectXAxisWithScale = (state, id, isPanorama) => {
	var xAxisId = selectXAxisIdFromGraphicalItemId(state, id);
	if (xAxisId == null) return;
	return selectAxisWithScale(state, "xAxis", xAxisId, isPanorama);
};
var selectYAxisWithScale = (state, id, isPanorama) => {
	var yAxisId = selectYAxisIdFromGraphicalItemId(state, id);
	if (yAxisId == null) return;
	return selectAxisWithScale(state, "yAxis", yAxisId, isPanorama);
};
var selectXAxisTicks = (state, id, isPanorama) => {
	var xAxisId = selectXAxisIdFromGraphicalItemId(state, id);
	if (xAxisId == null) return;
	return selectTicksOfGraphicalItem(state, "xAxis", xAxisId, isPanorama);
};
var selectYAxisTicks = (state, id, isPanorama) => {
	var yAxisId = selectYAxisIdFromGraphicalItemId(state, id);
	if (yAxisId == null) return;
	return selectTicksOfGraphicalItem(state, "yAxis", yAxisId, isPanorama);
};
var selectBarRectangles = createSelector([
	selectChartOffsetInternal,
	selectAxisViewBox,
	selectXAxisWithScale,
	selectYAxisWithScale,
	selectXAxisTicks,
	selectYAxisTicks,
	createSelector([selectAllBarPositions, selectSynchronisedBarSettings], combineBarPosition),
	selectChartLayout,
	selectChartDataWithIndexesIfNotInPanoramaPosition3,
	selectAxisBandSize,
	createSelector([selectBarStackGroups, selectSynchronisedBarSettings], combineStackedData),
	selectSynchronisedBarSettings,
	pickCells
], (offset, axisViewBox, xAxis, yAxis, xAxisTicks, yAxisTicks, pos, layout, _ref2, bandSize, stackedData, barSettings, cells) => {
	var { chartData, dataStartIndex, dataEndIndex } = _ref2;
	if (barSettings == null || pos == null || axisViewBox == null || layout !== "horizontal" && layout !== "vertical" || xAxis == null || yAxis == null || xAxisTicks == null || yAxisTicks == null || bandSize == null) return;
	var { data } = barSettings;
	var displayedData;
	if (data != null && data.length > 0) displayedData = data;
	else displayedData = chartData === null || chartData === void 0 ? void 0 : chartData.slice(dataStartIndex, dataEndIndex + 1);
	if (displayedData == null) return;
	return computeBarRectangles({
		layout,
		barSettings,
		pos,
		parentViewBox: axisViewBox,
		bandSize,
		xAxis,
		yAxis,
		xAxisTicks,
		yAxisTicks,
		stackedData,
		displayedData,
		offset,
		cells,
		dataStartIndex
	});
});
function getZIndexFromUnknown(input, defaultZIndex) {
	if (input && typeof input === "object" && "zIndex" in input && typeof input.zIndex === "number" && isWellBehavedNumber(input.zIndex)) return input.zIndex;
	return defaultZIndex;
}
var _excluded$7 = ["index"];
function _extends$8() {
	return _extends$8 = Object.assign ? Object.assign.bind() : function(n) {
		for (var e = 1; e < arguments.length; e++) {
			var t = arguments[e];
			for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
		}
		return n;
	}, _extends$8.apply(null, arguments);
}
function _objectWithoutProperties$7(e, t) {
	if (null == e) return {};
	var o, r, i = _objectWithoutPropertiesLoose$7(e, t);
	if (Object.getOwnPropertySymbols) {
		var n = Object.getOwnPropertySymbols(e);
		for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
	}
	return i;
}
function _objectWithoutPropertiesLoose$7(r, e) {
	if (null == r) return {};
	var t = {};
	for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
		if (-1 !== e.indexOf(n)) continue;
		t[n] = r[n];
	}
	return t;
}
var BarStackContext = /* @__PURE__ */ (0, import_react.createContext)(void 0);
/**
* Hook to resolve the stack ID for a Bar component.
* If a stack ID is provided via props, it is used directly.
* Otherwise, this will read stack ID from BarStack context if available.
* If both are undefined, it returns undefined.
* @param childStackId
*/
var useStackId = (childStackId) => {
	var stackSettings = (0, import_react.useContext)(BarStackContext);
	if (stackSettings != null) return stackSettings.stackId;
	if (childStackId == null) return;
	return getNormalizedStackId(childStackId);
};
var getClipPathId = (stackId, index) => {
	return "recharts-bar-stack-clip-path-".concat(stackId, "-").concat(index);
};
var useBarStackClipPathUrl = (index) => {
	var barStackContext = (0, import_react.useContext)(BarStackContext);
	if (barStackContext == null) return;
	var { stackId } = barStackContext;
	return "url(#".concat(getClipPathId(stackId, index), ")");
};
var BarStackClipLayer = (_ref) => {
	var { index } = _ref, rest = _objectWithoutProperties$7(_ref, _excluded$7);
	var clipPathUrl = useBarStackClipPathUrl(index);
	return /* @__PURE__ */ import_react.createElement(Layer, _extends$8({
		className: "recharts-bar-stack-layer",
		clipPath: clipPathUrl
	}, rest));
};
var _excluded$6 = [
	"onMouseEnter",
	"onMouseLeave",
	"onClick"
], _excluded2$4 = [
	"value",
	"background",
	"tooltipPosition"
], _excluded3$3 = ["id"], _excluded4$1 = [
	"onMouseEnter",
	"onClick",
	"onMouseLeave"
];
function _extends$7() {
	return _extends$7 = Object.assign ? Object.assign.bind() : function(n) {
		for (var e = 1; e < arguments.length; e++) {
			var t = arguments[e];
			for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
		}
		return n;
	}, _extends$7.apply(null, arguments);
}
function ownKeys$11(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r) {
			return Object.getOwnPropertyDescriptor(e, r).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread$11(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys$11(Object(t), !0).forEach(function(r) {
			_defineProperty$11(e, r, t[r]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$11(Object(t)).forEach(function(r) {
			Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
		});
	}
	return e;
}
function _defineProperty$11(e, r, t) {
	return (r = _toPropertyKey$11(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}
function _toPropertyKey$11(t) {
	var i = _toPrimitive$11(t, "string");
	return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive$11(t, r) {
	if ("object" != typeof t || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != typeof i) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
function _objectWithoutProperties$6(e, t) {
	if (null == e) return {};
	var o, r, i = _objectWithoutPropertiesLoose$6(e, t);
	if (Object.getOwnPropertySymbols) {
		var n = Object.getOwnPropertySymbols(e);
		for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
	}
	return i;
}
function _objectWithoutPropertiesLoose$6(r, e) {
	if (null == r) return {};
	var t = {};
	for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
		if (-1 !== e.indexOf(n)) continue;
		t[n] = r[n];
	}
	return t;
}
var computeLegendPayloadFromBarData = (props) => {
	var { dataKey, name, fill, legendType, hide } = props;
	return [{
		inactive: hide,
		dataKey,
		type: legendType,
		color: fill,
		value: getTooltipNameProp(name, dataKey),
		payload: props
	}];
};
var SetBarTooltipEntrySettings = /* @__PURE__ */ import_react.memo((_ref) => {
	var { dataKey, stroke, strokeWidth, fill, name, hide, unit, tooltipType, id } = _ref;
	var tooltipEntrySettings = {
		dataDefinedOnItem: void 0,
		getPosition: noop$2,
		settings: {
			stroke,
			strokeWidth,
			fill,
			dataKey,
			nameKey: void 0,
			name: getTooltipNameProp(name, dataKey),
			hide,
			type: tooltipType,
			color: fill,
			unit,
			graphicalItemId: id
		}
	};
	return /* @__PURE__ */ import_react.createElement(SetTooltipEntrySettings, { tooltipEntrySettings });
});
function BarBackground(props) {
	var activeIndex = useAppSelector(selectActiveTooltipIndex);
	var { data, dataKey, background: backgroundFromProps, allOtherBarProps } = props;
	var { onMouseEnter: onMouseEnterFromProps, onMouseLeave: onMouseLeaveFromProps, onClick: onItemClickFromProps } = allOtherBarProps, restOfAllOtherProps = _objectWithoutProperties$6(allOtherBarProps, _excluded$6);
	var onMouseEnterFromContext = useMouseEnterItemDispatch(onMouseEnterFromProps, dataKey, allOtherBarProps.id);
	var onMouseLeaveFromContext = useMouseLeaveItemDispatch(onMouseLeaveFromProps);
	var onClickFromContext = useMouseClickItemDispatch(onItemClickFromProps, dataKey, allOtherBarProps.id);
	if (!backgroundFromProps || data == null) return null;
	var backgroundProps = svgPropertiesNoEventsFromUnknown(backgroundFromProps);
	return /* @__PURE__ */ import_react.createElement(ZIndexLayer, { zIndex: getZIndexFromUnknown(backgroundFromProps, DefaultZIndexes.barBackground) }, data.map((entry, i) => {
		var { value, background: backgroundFromDataEntry, tooltipPosition } = entry, rest = _objectWithoutProperties$6(entry, _excluded2$4);
		if (!backgroundFromDataEntry) return null;
		var onMouseEnter = onMouseEnterFromContext(entry, i);
		var onMouseLeave = onMouseLeaveFromContext(entry, i);
		var onClick = onClickFromContext(entry, i);
		var barRectangleProps = _objectSpread$11(_objectSpread$11(_objectSpread$11(_objectSpread$11(_objectSpread$11({
			option: backgroundFromProps,
			isActive: String(i) === activeIndex
		}, rest), {}, { fill: "#eee" }, backgroundFromDataEntry), backgroundProps), adaptEventsOfChild(restOfAllOtherProps, entry, i)), {}, {
			onMouseEnter,
			onMouseLeave,
			onClick,
			dataKey,
			index: i,
			className: "recharts-bar-background-rectangle"
		});
		return /* @__PURE__ */ import_react.createElement(BarRectangle, _extends$7({ key: "background-bar-".concat(i) }, barRectangleProps));
	}));
}
function BarLabelListProvider(_ref2) {
	var { showLabels, children, rects } = _ref2;
	var labelListEntries = rects === null || rects === void 0 ? void 0 : rects.map((entry) => {
		var viewBox = {
			x: entry.x,
			y: entry.y,
			width: entry.width,
			lowerWidth: entry.width,
			upperWidth: entry.width,
			height: entry.height
		};
		return _objectSpread$11(_objectSpread$11({}, viewBox), {}, {
			value: entry.value,
			payload: entry.payload,
			parentViewBox: entry.parentViewBox,
			viewBox,
			fill: entry.fill
		});
	});
	return /* @__PURE__ */ import_react.createElement(CartesianLabelListContextProvider, { value: showLabels ? labelListEntries : void 0 }, children);
}
function BarRectangleWithActiveState(props) {
	var { shape, activeBar, baseProps, entry, index, dataKey } = props;
	var activeIndex = useAppSelector(selectActiveTooltipIndex);
	var activeDataKey = useAppSelector(selectActiveTooltipDataKey);
	var isActive = activeBar && String(entry.originalDataIndex) === activeIndex && (activeDataKey == null || dataKey === activeDataKey);
	var [stayInLayer, setStayInLayer] = (0, import_react.useState)(false);
	var [hasMountedActive, setHasMountedActive] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		var rafId;
		if (isActive) {
			setStayInLayer(true);
			rafId = requestAnimationFrame(() => {
				setHasMountedActive(true);
			});
		} else setHasMountedActive(false);
		return () => {
			cancelAnimationFrame(rafId);
		};
	}, [isActive]);
	var handleTransitionEnd = (0, import_react.useCallback)(() => {
		if (!isActive) setStayInLayer(false);
	}, [isActive]);
	var isVisuallyActive = isActive && hasMountedActive;
	var shouldRenderInLayer = isActive || stayInLayer;
	var option;
	if (isActive) if (activeBar === true) option = shape;
	else option = activeBar;
	else option = shape;
	var content = /* @__PURE__ */ import_react.createElement(BarRectangle, _extends$7({}, baseProps, { name: String(baseProps.name) }, entry, {
		isActive: isVisuallyActive,
		option,
		index,
		dataKey,
		onTransitionEnd: handleTransitionEnd
	}));
	if (shouldRenderInLayer) return /* @__PURE__ */ import_react.createElement(ZIndexLayer, { zIndex: DefaultZIndexes.activeBar }, /* @__PURE__ */ import_react.createElement(BarStackClipLayer, { index: entry.originalDataIndex }, content));
	return content;
}
function BarRectangleNeverActive(props) {
	var { shape, baseProps, entry, index, dataKey } = props;
	return /* @__PURE__ */ import_react.createElement(BarRectangle, _extends$7({}, baseProps, { name: String(baseProps.name) }, entry, {
		isActive: false,
		option: shape,
		index,
		dataKey
	}));
}
function BarRectangles(_ref3) {
	var _svgPropertiesNoEvent;
	var { data, props } = _ref3;
	var _ref4 = (_svgPropertiesNoEvent = svgPropertiesNoEvents(props)) !== null && _svgPropertiesNoEvent !== void 0 ? _svgPropertiesNoEvent : {}, { id } = _ref4, baseProps = _objectWithoutProperties$6(_ref4, _excluded3$3);
	var { shape, dataKey, activeBar } = props;
	var { onMouseEnter: onMouseEnterFromProps, onClick: onItemClickFromProps, onMouseLeave: onMouseLeaveFromProps } = props, restOfAllOtherProps = _objectWithoutProperties$6(props, _excluded4$1);
	var onMouseEnterFromContext = useMouseEnterItemDispatch(onMouseEnterFromProps, dataKey, id);
	var onMouseLeaveFromContext = useMouseLeaveItemDispatch(onMouseLeaveFromProps);
	var onClickFromContext = useMouseClickItemDispatch(onItemClickFromProps, dataKey, id);
	if (!data) return null;
	return /* @__PURE__ */ import_react.createElement(import_react.Fragment, null, data.map((entry, i) => {
		return /* @__PURE__ */ import_react.createElement(BarStackClipLayer, _extends$7({
			index: entry.originalDataIndex,
			key: "rectangle-".concat(entry === null || entry === void 0 ? void 0 : entry.x, "-").concat(entry === null || entry === void 0 ? void 0 : entry.y, "-").concat(entry === null || entry === void 0 ? void 0 : entry.value, "-").concat(i),
			className: "recharts-bar-rectangle"
		}, adaptEventsOfChild(restOfAllOtherProps, entry, i), {
			onMouseEnter: onMouseEnterFromContext(entry, i),
			onMouseLeave: onMouseLeaveFromContext(entry, i),
			onClick: onClickFromContext(entry, i)
		}), activeBar ? /* @__PURE__ */ import_react.createElement(BarRectangleWithActiveState, {
			shape,
			activeBar,
			baseProps,
			entry,
			index: i,
			dataKey
		}) : /* @__PURE__ */ import_react.createElement(BarRectangleNeverActive, {
			shape,
			baseProps,
			entry,
			index: i,
			dataKey
		}));
	}));
}
function RectanglesWithAnimation(_ref5) {
	var { props, previousRectanglesRef } = _ref5;
	var { data, layout, isAnimationActive, animationBegin, animationDuration, animationEasing, onAnimationEnd, onAnimationStart } = props;
	var prevData = previousRectanglesRef.current;
	var animationId = useAnimationId(props, "recharts-bar-");
	var [isAnimating, setIsAnimating] = (0, import_react.useState)(false);
	var showLabels = !isAnimating;
	var handleAnimationEnd = (0, import_react.useCallback)(() => {
		if (typeof onAnimationEnd === "function") onAnimationEnd();
		setIsAnimating(false);
	}, [onAnimationEnd]);
	var handleAnimationStart = (0, import_react.useCallback)(() => {
		if (typeof onAnimationStart === "function") onAnimationStart();
		setIsAnimating(true);
	}, [onAnimationStart]);
	return /* @__PURE__ */ import_react.createElement(BarLabelListProvider, {
		showLabels,
		rects: data
	}, /* @__PURE__ */ import_react.createElement(JavascriptAnimate, {
		animationId,
		begin: animationBegin,
		duration: animationDuration,
		isActive: isAnimationActive,
		easing: animationEasing,
		onAnimationEnd: handleAnimationEnd,
		onAnimationStart: handleAnimationStart,
		key: animationId
	}, (t) => {
		var stepData = t === 1 ? data : data === null || data === void 0 ? void 0 : data.map((entry, index) => {
			var prev = prevData && prevData[index];
			if (prev) return _objectSpread$11(_objectSpread$11({}, entry), {}, {
				x: interpolate(prev.x, entry.x, t),
				y: interpolate(prev.y, entry.y, t),
				width: interpolate(prev.width, entry.width, t),
				height: interpolate(prev.height, entry.height, t)
			});
			if (layout === "horizontal") {
				var height = interpolate(0, entry.height, t);
				var y = interpolate(entry.stackedBarStart, entry.y, t);
				return _objectSpread$11(_objectSpread$11({}, entry), {}, {
					y,
					height
				});
			}
			var w = interpolate(0, entry.width, t);
			var x = interpolate(entry.stackedBarStart, entry.x, t);
			return _objectSpread$11(_objectSpread$11({}, entry), {}, {
				width: w,
				x
			});
		});
		if (t > 0) previousRectanglesRef.current = stepData !== null && stepData !== void 0 ? stepData : null;
		if (stepData == null) return null;
		return /* @__PURE__ */ import_react.createElement(Layer, null, /* @__PURE__ */ import_react.createElement(BarRectangles, {
			props,
			data: stepData
		}));
	}), /* @__PURE__ */ import_react.createElement(LabelListFromLabelProp, { label: props.label }), props.children);
}
function RenderRectangles(props) {
	var previousRectanglesRef = (0, import_react.useRef)(null);
	return /* @__PURE__ */ import_react.createElement(RectanglesWithAnimation, {
		previousRectanglesRef,
		props
	});
}
var defaultMinPointSize = 0;
var errorBarDataPointFormatter = (dataPoint, dataKey) => {
	/**
	* if the value coming from `selectBarRectangles` is an array then this is a stacked bar chart.
	* arr[1] represents end value of the bar since the data is in the form of [startValue, endValue].
	* */
	var value = Array.isArray(dataPoint.value) ? dataPoint.value[1] : dataPoint.value;
	return {
		x: dataPoint.x,
		y: dataPoint.y,
		value,
		errorVal: getValueByDataKey(dataPoint, dataKey)
	};
};
var BarWithState = class extends import_react.PureComponent {
	render() {
		var { hide, data, dataKey, className, xAxisId, yAxisId, needClip, background, id } = this.props;
		if (hide || data == null) return null;
		var layerClass = clsx("recharts-bar", className);
		var clipPathId = id;
		return /* @__PURE__ */ import_react.createElement(Layer, {
			className: layerClass,
			id
		}, needClip && /* @__PURE__ */ import_react.createElement("defs", null, /* @__PURE__ */ import_react.createElement(GraphicalItemClipPath, {
			clipPathId,
			xAxisId,
			yAxisId
		})), /* @__PURE__ */ import_react.createElement(Layer, {
			className: "recharts-bar-rectangles",
			clipPath: needClip ? "url(#clipPath-".concat(clipPathId, ")") : void 0
		}, /* @__PURE__ */ import_react.createElement(BarBackground, {
			data,
			dataKey,
			background,
			allOtherBarProps: this.props
		}), /* @__PURE__ */ import_react.createElement(RenderRectangles, this.props)));
	}
};
var defaultBarProps = {
	activeBar: false,
	animationBegin: 0,
	animationDuration: 400,
	animationEasing: "ease",
	background: false,
	hide: false,
	isAnimationActive: "auto",
	label: false,
	legendType: "rect",
	minPointSize: defaultMinPointSize,
	xAxisId: 0,
	yAxisId: 0,
	zIndex: DefaultZIndexes.bar
};
function BarImpl(props) {
	var { xAxisId, yAxisId, hide, legendType, minPointSize, activeBar, animationBegin, animationDuration, animationEasing, isAnimationActive } = props;
	var { needClip } = useNeedsClip(xAxisId, yAxisId);
	var layout = useChartLayout();
	var isPanorama = useIsPanorama();
	var cells = findAllByType(props.children, Cell);
	var rects = useAppSelector((state) => selectBarRectangles(state, props.id, isPanorama, cells));
	if (layout !== "vertical" && layout !== "horizontal") return null;
	var errorBarOffset;
	var firstDataPoint = rects === null || rects === void 0 ? void 0 : rects[0];
	if (firstDataPoint == null || firstDataPoint.height == null || firstDataPoint.width == null) errorBarOffset = 0;
	else errorBarOffset = layout === "vertical" ? firstDataPoint.height / 2 : firstDataPoint.width / 2;
	return /* @__PURE__ */ import_react.createElement(SetErrorBarContext, {
		xAxisId,
		yAxisId,
		data: rects,
		dataPointFormatter: errorBarDataPointFormatter,
		errorBarOffset
	}, /* @__PURE__ */ import_react.createElement(BarWithState, _extends$7({}, props, {
		layout,
		needClip,
		data: rects,
		xAxisId,
		yAxisId,
		hide,
		legendType,
		minPointSize,
		activeBar,
		animationBegin,
		animationDuration,
		animationEasing,
		isAnimationActive
	})));
}
function computeBarRectangles(_ref6) {
	var { layout, barSettings: { dataKey, minPointSize: minPointSizeProp, hasCustomShape }, pos, bandSize, xAxis, yAxis, xAxisTicks, yAxisTicks, stackedData, displayedData, offset, cells, parentViewBox, dataStartIndex } = _ref6;
	var numericAxis = layout === "horizontal" ? yAxis : xAxis;
	var stackedDomain = stackedData ? numericAxis.scale.domain() : null;
	var baseValue = getBaseValueOfBar({ numericAxis });
	var stackedBarStart = numericAxis.scale.map(baseValue);
	return displayedData.map((entry, index) => {
		var value, x, y, width, height, background;
		if (stackedData) {
			var untruncatedValue = stackedData[index + dataStartIndex];
			if (untruncatedValue == null) return null;
			value = truncateByDomain(untruncatedValue, stackedDomain);
		} else {
			value = getValueByDataKey(entry, dataKey);
			if (!Array.isArray(value)) value = [baseValue, value];
		}
		var minPointSize = minPointSizeCallback(minPointSizeProp, defaultMinPointSize)(value[1], index);
		if (layout === "horizontal") {
			var _ref7;
			var baseValueScale = yAxis.scale.map(value[0]);
			var currentValueScale = yAxis.scale.map(value[1]);
			if (baseValueScale == null || currentValueScale == null) return null;
			x = getCateCoordinateOfBar({
				axis: xAxis,
				ticks: xAxisTicks,
				bandSize,
				offset: pos.offset,
				entry,
				index
			});
			y = (_ref7 = currentValueScale !== null && currentValueScale !== void 0 ? currentValueScale : baseValueScale) !== null && _ref7 !== void 0 ? _ref7 : void 0;
			width = pos.size;
			var computedHeight = baseValueScale - currentValueScale;
			height = isNan(computedHeight) ? 0 : computedHeight;
			background = {
				x,
				y: offset.top,
				width,
				height: offset.height
			};
			if (Math.abs(minPointSize) > 0 && Math.abs(height) < Math.abs(minPointSize)) {
				var delta = mathSign(height || minPointSize) * (Math.abs(minPointSize) - Math.abs(height));
				y -= delta;
				height += delta;
			}
		} else {
			var _baseValueScale = xAxis.scale.map(value[0]);
			var _currentValueScale = xAxis.scale.map(value[1]);
			if (_baseValueScale == null || _currentValueScale == null) return null;
			x = _baseValueScale;
			y = getCateCoordinateOfBar({
				axis: yAxis,
				ticks: yAxisTicks,
				bandSize,
				offset: pos.offset,
				entry,
				index
			});
			width = _currentValueScale - _baseValueScale;
			height = pos.size;
			background = {
				x: offset.left,
				y,
				width: offset.width,
				height
			};
			if (Math.abs(minPointSize) > 0 && Math.abs(width) < Math.abs(minPointSize)) {
				var _delta = mathSign(width || minPointSize) * (Math.abs(minPointSize) - Math.abs(width));
				width += _delta;
			}
		}
		if (x == null || y == null || width == null || height == null || !hasCustomShape && (width === 0 || height === 0)) return null;
		return _objectSpread$11(_objectSpread$11({}, entry), {}, {
			stackedBarStart,
			x,
			y,
			width,
			height,
			value: stackedData ? value : value[1],
			payload: entry,
			background,
			tooltipPosition: {
				x: x + width / 2,
				y: y + height / 2
			},
			parentViewBox,
			originalDataIndex: index
		}, cells && cells[index] && cells[index].props);
	}).filter(Boolean);
}
function BarFn(outsideProps) {
	var props = resolveDefaultProps(outsideProps, defaultBarProps);
	var stackId = useStackId(props.stackId);
	var isPanorama = useIsPanorama();
	return /* @__PURE__ */ import_react.createElement(RegisterGraphicalItemId, {
		id: props.id,
		type: "bar"
	}, (id) => /* @__PURE__ */ import_react.createElement(import_react.Fragment, null, /* @__PURE__ */ import_react.createElement(SetLegendPayload, { legendPayload: computeLegendPayloadFromBarData(props) }), /* @__PURE__ */ import_react.createElement(SetBarTooltipEntrySettings, {
		dataKey: props.dataKey,
		stroke: props.stroke,
		strokeWidth: props.strokeWidth,
		fill: props.fill,
		name: props.name,
		hide: props.hide,
		unit: props.unit,
		tooltipType: props.tooltipType,
		id
	}), /* @__PURE__ */ import_react.createElement(SetCartesianGraphicalItem, {
		type: "bar",
		id,
		data: void 0,
		xAxisId: props.xAxisId,
		yAxisId: props.yAxisId,
		zAxisId: 0,
		dataKey: props.dataKey,
		stackId,
		hide: props.hide,
		barSize: props.barSize,
		minPointSize: props.minPointSize,
		maxBarSize: props.maxBarSize,
		isPanorama,
		hasCustomShape: props.shape != null
	}), /* @__PURE__ */ import_react.createElement(ZIndexLayer, { zIndex: props.zIndex }, /* @__PURE__ */ import_react.createElement(BarImpl, _extends$7({}, props, { id })))));
}
/**
* @provides ErrorBarContext
* @provides LabelListContext
* @provides CellReader
* @consumes CartesianChartContext
* @consumes BarStackContext
*/
var Bar = /* @__PURE__ */ import_react.memo(BarFn, propsAreEqual);
Bar.displayName = "Bar";
var allowedTooltipTypes = ["axis", "item"];
/**
* @consumes ResponsiveContainerContext
* @provides CartesianViewBoxContext
* @provides CartesianChartContext
*/
var BarChart = /* @__PURE__ */ (0, import_react.forwardRef)((props, ref) => {
	return /* @__PURE__ */ import_react.createElement(CartesianChart, {
		chartName: "BarChart",
		defaultTooltipEventType: "axis",
		validateTooltipEventTypes: allowedTooltipTypes,
		tooltipPayloadSearcher: arrayTooltipSearcher,
		categoricalChartProps: props,
		ref
	});
});
/** Normalizes the angle so that 0 <= angle < 180.
* @param {number} angle Angle in degrees.
* @return {number} the normalized angle with a value of at least 0 and never greater or equal to 180. */
function normalizeAngle(angle) {
	return (angle % 180 + 180) % 180;
}
/** Calculates the width of the largest horizontal line that fits inside a rectangle that is displayed at an angle.
* @param {Object} size Width and height of the text in a horizontal position.
* @param {number} angle Angle in degrees in which the text is displayed.
* @return {number} The width of the largest horizontal line that fits inside a rectangle that is displayed at an angle.
*/
var getAngledRectangleWidth = function getAngledRectangleWidth(_ref4) {
	var { width, height } = _ref4;
	var angleRadians = normalizeAngle(arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0) * Math.PI / 180;
	var angleThreshold = Math.atan(height / width);
	var angledWidth = angleRadians > angleThreshold && angleRadians < Math.PI - angleThreshold ? height / Math.sin(angleRadians) : width / Math.cos(angleRadians);
	return Math.abs(angledWidth);
};
/**
* Given an array and a number N, return a new array which contains every nTh
* element of the input array. For n below 1, an empty array is returned.
* For n equal to 1, the input array is returned as is.
* For n greater than the length of the array, an array containing the first element
* and every nTh element after that (if any) is returned.
*
* @param array An input array.
* @param n A number specifying which elements to take.
* @returns The result array of the same type as the input array.
*/
function getEveryNth(array, n) {
	if (n < 1) return [];
	if (n === 1) return array;
	var result = [];
	for (var i = 0; i < array.length; i += n) {
		var item = array[i];
		if (item !== void 0) result.push(item);
	}
	return result;
}
function getAngledTickWidth(contentSize, unitSize, angle) {
	return getAngledRectangleWidth({
		width: contentSize.width + unitSize.width,
		height: contentSize.height + unitSize.height
	}, angle);
}
function getTickBoundaries(viewBox, sign, sizeKey) {
	var isWidth = sizeKey === "width";
	var { x, y, width, height } = viewBox;
	if (sign === 1) return {
		start: isWidth ? x : y,
		end: isWidth ? x + width : y + height
	};
	return {
		start: isWidth ? x + width : y + height,
		end: isWidth ? x : y
	};
}
function isVisible(sign, tickPosition, getSize, start, end) {
	if (sign * tickPosition < sign * start || sign * tickPosition > sign * end) return false;
	var size = getSize();
	return sign * (tickPosition - sign * size / 2 - start) >= 0 && sign * (tickPosition + sign * size / 2 - end) <= 0;
}
function getNumberIntervalTicks(ticks, interval) {
	return getEveryNth(ticks, interval + 1);
}
function getEquidistantTicks(sign, boundaries, getTickSize, ticks, minTickGap) {
	var result = (ticks || []).slice();
	var { start: initialStart, end } = boundaries;
	var index = 0;
	var stepsize = 1;
	var start = initialStart;
	var _loop = function _loop() {
		var entry = ticks === null || ticks === void 0 ? void 0 : ticks[index];
		if (entry === void 0) return { v: getEveryNth(ticks, stepsize) };
		var i = index;
		var size;
		var getSize = () => {
			if (size === void 0) size = getTickSize(entry, i);
			return size;
		};
		var tickCoord = entry.coordinate;
		var isShow = index === 0 || isVisible(sign, tickCoord, getSize, start, end);
		if (!isShow) {
			index = 0;
			start = initialStart;
			stepsize += 1;
		}
		if (isShow) {
			start = tickCoord + sign * (getSize() / 2 + minTickGap);
			index += stepsize;
		}
	}, _ret;
	while (stepsize <= result.length) {
		_ret = _loop();
		if (_ret) return _ret.v;
	}
	return [];
}
function getEquidistantPreserveEndTicks(sign, boundaries, getTickSize, ticks, minTickGap) {
	var len = (ticks || []).slice().length;
	if (len === 0) return [];
	var { start: initialStart, end } = boundaries;
	for (var stepsize = 1; stepsize <= len; stepsize++) {
		var offset = (len - 1) % stepsize;
		var start = initialStart;
		var ok = true;
		var _loop2 = function _loop2() {
			var entry = ticks[index];
			if (entry == null) return 0;
			var i = index;
			var size;
			var getSize = () => {
				if (size === void 0) size = getTickSize(entry, i);
				return size;
			};
			var tickCoord = entry.coordinate;
			var isShow = index === offset || isVisible(sign, tickCoord, getSize, start, end);
			if (!isShow) {
				ok = false;
				return 1;
			}
			if (isShow) start = tickCoord + sign * (getSize() / 2 + minTickGap);
		}, _ret2;
		for (var index = offset; index < len; index += stepsize) {
			_ret2 = _loop2();
			if (_ret2 === 0) continue;
			if (_ret2 === 1) break;
		}
		if (ok) {
			var finalTicks = [];
			for (var _index = offset; _index < len; _index += stepsize) {
				var tick = ticks[_index];
				if (tick != null) finalTicks.push(tick);
			}
			return finalTicks;
		}
	}
	return [];
}
function ownKeys$10(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r) {
			return Object.getOwnPropertyDescriptor(e, r).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread$10(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys$10(Object(t), !0).forEach(function(r) {
			_defineProperty$10(e, r, t[r]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$10(Object(t)).forEach(function(r) {
			Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
		});
	}
	return e;
}
function _defineProperty$10(e, r, t) {
	return (r = _toPropertyKey$10(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}
function _toPropertyKey$10(t) {
	var i = _toPrimitive$10(t, "string");
	return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive$10(t, r) {
	if ("object" != typeof t || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != typeof i) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
function getTicksEnd(sign, boundaries, getTickSize, ticks, minTickGap) {
	var result = (ticks || []).slice();
	var len = result.length;
	var { start } = boundaries;
	var { end } = boundaries;
	var _loop = function _loop(i) {
		var initialEntry = result[i];
		if (initialEntry == null) return 1;
		var entry = initialEntry;
		var size;
		var getSize = () => {
			if (size === void 0) size = getTickSize(initialEntry, i);
			return size;
		};
		if (i === len - 1) {
			var gap = sign * (entry.coordinate + sign * getSize() / 2 - end);
			result[i] = entry = _objectSpread$10(_objectSpread$10({}, entry), {}, { tickCoord: gap > 0 ? entry.coordinate - gap * sign : entry.coordinate });
		} else result[i] = entry = _objectSpread$10(_objectSpread$10({}, entry), {}, { tickCoord: entry.coordinate });
		if (entry.tickCoord != null) {
			if (isVisible(sign, entry.tickCoord, getSize, start, end)) {
				end = entry.tickCoord - sign * (getSize() / 2 + minTickGap);
				result[i] = _objectSpread$10(_objectSpread$10({}, entry), {}, { isShow: true });
			}
		}
	};
	for (var i = len - 1; i >= 0; i--) if (_loop(i)) continue;
	return result;
}
function getTicksStart(sign, boundaries, getTickSize, ticks, minTickGap, preserveEnd) {
	var result = (ticks || []).slice();
	var len = result.length;
	var { start, end } = boundaries;
	if (preserveEnd) {
		var tail = ticks[len - 1];
		if (tail != null) {
			var tailSize = getTickSize(tail, len - 1);
			var tailGap = sign * (tail.coordinate + sign * tailSize / 2 - end);
			result[len - 1] = tail = _objectSpread$10(_objectSpread$10({}, tail), {}, { tickCoord: tailGap > 0 ? tail.coordinate - tailGap * sign : tail.coordinate });
			if (tail.tickCoord != null) {
				if (isVisible(sign, tail.tickCoord, () => tailSize, start, end)) {
					end = tail.tickCoord - sign * (tailSize / 2 + minTickGap);
					result[len - 1] = _objectSpread$10(_objectSpread$10({}, tail), {}, { isShow: true });
				}
			}
		}
	}
	var count = preserveEnd ? len - 1 : len;
	var _loop2 = function _loop2(i) {
		var initialEntry = result[i];
		if (initialEntry == null) return 1;
		var entry = initialEntry;
		var size;
		var getSize = () => {
			if (size === void 0) size = getTickSize(initialEntry, i);
			return size;
		};
		if (i === 0) {
			var gap = sign * (entry.coordinate - sign * getSize() / 2 - start);
			result[i] = entry = _objectSpread$10(_objectSpread$10({}, entry), {}, { tickCoord: gap < 0 ? entry.coordinate - gap * sign : entry.coordinate });
		} else result[i] = entry = _objectSpread$10(_objectSpread$10({}, entry), {}, { tickCoord: entry.coordinate });
		if (entry.tickCoord != null) {
			if (isVisible(sign, entry.tickCoord, getSize, start, end)) {
				start = entry.tickCoord + sign * (getSize() / 2 + minTickGap);
				result[i] = _objectSpread$10(_objectSpread$10({}, entry), {}, { isShow: true });
			}
		}
	};
	for (var i = 0; i < count; i++) if (_loop2(i)) continue;
	return result;
}
function getTicks(props, fontSize, letterSpacing) {
	var { tick, ticks, viewBox, minTickGap, orientation, interval, tickFormatter, unit, angle } = props;
	if (!ticks || !ticks.length || !tick) return [];
	if (isNumber$1(interval) || Global.isSsr) {
		var _getNumberIntervalTic;
		return (_getNumberIntervalTic = getNumberIntervalTicks(ticks, isNumber$1(interval) ? interval : 0)) !== null && _getNumberIntervalTic !== void 0 ? _getNumberIntervalTic : [];
	}
	var candidates = [];
	var sizeKey = orientation === "top" || orientation === "bottom" ? "width" : "height";
	var unitSize = unit && sizeKey === "width" ? getStringSize(unit, {
		fontSize,
		letterSpacing
	}) : {
		width: 0,
		height: 0
	};
	var getTickSize = (content, index) => {
		var value = typeof tickFormatter === "function" ? tickFormatter(content.value, index) : content.value;
		return sizeKey === "width" ? getAngledTickWidth(getStringSize(value, {
			fontSize,
			letterSpacing
		}), unitSize, angle) : getStringSize(value, {
			fontSize,
			letterSpacing
		})[sizeKey];
	};
	var tick0 = ticks[0];
	var tick1 = ticks[1];
	var sign = ticks.length >= 2 && tick0 != null && tick1 != null ? mathSign(tick1.coordinate - tick0.coordinate) : 1;
	var boundaries = getTickBoundaries(viewBox, sign, sizeKey);
	if (interval === "equidistantPreserveStart") return getEquidistantTicks(sign, boundaries, getTickSize, ticks, minTickGap);
	if (interval === "equidistantPreserveEnd") return getEquidistantPreserveEndTicks(sign, boundaries, getTickSize, ticks, minTickGap);
	if (interval === "preserveStart" || interval === "preserveStartEnd") candidates = getTicksStart(sign, boundaries, getTickSize, ticks, minTickGap, interval === "preserveStartEnd");
	else candidates = getTicksEnd(sign, boundaries, getTickSize, ticks, minTickGap);
	return candidates.filter((entry) => entry.isShow);
}
/**
* Calculates the width of the Y-axis based on the tick labels and the axis label.
* @param params - The parameters object.
* @param [params.ticks] - An array-like object of tick elements, each with a `getBoundingClientRect` method.
* @param [params.label] - The axis label element, with a `getBoundingClientRect` method.
* @param [params.labelGapWithTick=5] - The gap between the label and the tick.
* @param [params.tickSize=0] - The length of the tick line.
* @param [params.tickMargin=0] - The margin between the tick line and the tick text.
* @returns The calculated width of the Y-axis.
*/
var getCalculatedYAxisWidth = (_ref) => {
	var { ticks, label, labelGapWithTick = 5, tickSize = 0, tickMargin = 0 } = _ref;
	var maxTickWidth = 0;
	if (ticks) {
		Array.from(ticks).forEach((tickNode) => {
			if (tickNode) {
				var bbox = tickNode.getBoundingClientRect();
				if (bbox.width > maxTickWidth) maxTickWidth = bbox.width;
			}
		});
		var labelWidth = label ? label.getBoundingClientRect().width : 0;
		var tickWidth = tickSize + tickMargin;
		var updatedYAxisWidth = maxTickWidth + tickWidth + labelWidth + (label ? labelGapWithTick : 0);
		return Math.round(updatedYAxisWidth);
	}
	return 0;
};
function getClassNameFromUnknown(u) {
	if (u && typeof u === "object" && "className" in u && typeof u.className === "string") return u.className;
	return "";
}
/**
* @fileOverview Cartesian Axis
*/
var _excluded$5 = [
	"axisLine",
	"width",
	"height",
	"className",
	"hide",
	"ticks",
	"axisType",
	"axisId"
];
function _objectWithoutProperties$5(e, t) {
	if (null == e) return {};
	var o, r, i = _objectWithoutPropertiesLoose$5(e, t);
	if (Object.getOwnPropertySymbols) {
		var n = Object.getOwnPropertySymbols(e);
		for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
	}
	return i;
}
function _objectWithoutPropertiesLoose$5(r, e) {
	if (null == r) return {};
	var t = {};
	for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
		if (-1 !== e.indexOf(n)) continue;
		t[n] = r[n];
	}
	return t;
}
function _extends$6() {
	return _extends$6 = Object.assign ? Object.assign.bind() : function(n) {
		for (var e = 1; e < arguments.length; e++) {
			var t = arguments[e];
			for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
		}
		return n;
	}, _extends$6.apply(null, arguments);
}
function ownKeys$9(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r) {
			return Object.getOwnPropertyDescriptor(e, r).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread$9(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys$9(Object(t), !0).forEach(function(r) {
			_defineProperty$9(e, r, t[r]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$9(Object(t)).forEach(function(r) {
			Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
		});
	}
	return e;
}
function _defineProperty$9(e, r, t) {
	return (r = _toPropertyKey$9(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}
function _toPropertyKey$9(t) {
	var i = _toPrimitive$9(t, "string");
	return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive$9(t, r) {
	if ("object" != typeof t || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != typeof i) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
/** The orientation of the axis in correspondence to the chart */
/** A unit to be appended to a value */
/** The formatter function of tick */
var defaultCartesianAxisProps = {
	x: 0,
	y: 0,
	width: 0,
	height: 0,
	viewBox: {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	},
	orientation: "bottom",
	ticks: [],
	stroke: "#666",
	tickLine: true,
	axisLine: true,
	tick: true,
	mirror: false,
	minTickGap: 5,
	tickSize: 6,
	tickMargin: 2,
	interval: "preserveEnd",
	zIndex: DefaultZIndexes.axis
};
function AxisLine(axisLineProps) {
	var { x, y, width, height, orientation, mirror, axisLine, otherSvgProps } = axisLineProps;
	if (!axisLine) return null;
	var props = _objectSpread$9(_objectSpread$9(_objectSpread$9({}, otherSvgProps), svgPropertiesNoEvents(axisLine)), {}, { fill: "none" });
	if (orientation === "top" || orientation === "bottom") {
		var needHeight = +(orientation === "top" && !mirror || orientation === "bottom" && mirror);
		props = _objectSpread$9(_objectSpread$9({}, props), {}, {
			x1: x,
			y1: y + needHeight * height,
			x2: x + width,
			y2: y + needHeight * height
		});
	} else {
		var needWidth = +(orientation === "left" && !mirror || orientation === "right" && mirror);
		props = _objectSpread$9(_objectSpread$9({}, props), {}, {
			x1: x + needWidth * width,
			y1: y,
			x2: x + needWidth * width,
			y2: y + height
		});
	}
	return /* @__PURE__ */ import_react.createElement("line", _extends$6({}, props, { className: clsx("recharts-cartesian-axis-line", get(axisLine, "className")) }));
}
/**
* Calculate the coordinates of endpoints in ticks.
* @param data The data of a simple tick.
* @param x The x-coordinate of the axis.
* @param y The y-coordinate of the axis.
* @param width The width of the axis.
* @param height The height of the axis.
* @param orientation The orientation of the axis.
* @param tickSize The length of the tick line.
* @param mirror If true, the ticks are mirrored.
* @param tickMargin The margin between the tick line and the tick text.
* @returns An object with `line` and `tick` coordinates.
* `line` is the coordinates for the tick line, and `tick` is the coordinate for the tick text.
*/
function getTickLineCoord(data, x, y, width, height, orientation, tickSize, mirror, tickMargin) {
	var x1, x2, y1, y2, tx, ty;
	var sign = mirror ? -1 : 1;
	var finalTickSize = data.tickSize || tickSize;
	var tickCoord = isNumber$1(data.tickCoord) ? data.tickCoord : data.coordinate;
	switch (orientation) {
		case "top":
			x1 = x2 = data.coordinate;
			y2 = y + +!mirror * height;
			y1 = y2 - sign * finalTickSize;
			ty = y1 - sign * tickMargin;
			tx = tickCoord;
			break;
		case "left":
			y1 = y2 = data.coordinate;
			x2 = x + +!mirror * width;
			x1 = x2 - sign * finalTickSize;
			tx = x1 - sign * tickMargin;
			ty = tickCoord;
			break;
		case "right":
			y1 = y2 = data.coordinate;
			x2 = x + +mirror * width;
			x1 = x2 + sign * finalTickSize;
			tx = x1 + sign * tickMargin;
			ty = tickCoord;
			break;
		default:
			x1 = x2 = data.coordinate;
			y2 = y + +mirror * height;
			y1 = y2 + sign * finalTickSize;
			ty = y1 + sign * tickMargin;
			tx = tickCoord;
			break;
	}
	return {
		line: {
			x1,
			y1,
			x2,
			y2
		},
		tick: {
			x: tx,
			y: ty
		}
	};
}
/**
* @param orientation The orientation of the axis.
* @param mirror If true, the ticks are mirrored.
* @returns The text anchor of the tick.
*/
function getTickTextAnchor(orientation, mirror) {
	switch (orientation) {
		case "left": return mirror ? "start" : "end";
		case "right": return mirror ? "end" : "start";
		default: return "middle";
	}
}
/**
* @param orientation The orientation of the axis.
* @param mirror If true, the ticks are mirrored.
* @returns The vertical text anchor of the tick.
*/
function getTickVerticalAnchor(orientation, mirror) {
	switch (orientation) {
		case "left":
		case "right": return "middle";
		case "top": return mirror ? "start" : "end";
		default: return mirror ? "end" : "start";
	}
}
function TickItem(props) {
	var { option, tickProps, value } = props;
	var tickItem;
	var combinedClassName = clsx(tickProps.className, "recharts-cartesian-axis-tick-value");
	if (/* @__PURE__ */ import_react.isValidElement(option)) tickItem = /* @__PURE__ */ import_react.cloneElement(option, _objectSpread$9(_objectSpread$9({}, tickProps), {}, { className: combinedClassName }));
	else if (typeof option === "function") tickItem = option(_objectSpread$9(_objectSpread$9({}, tickProps), {}, { className: combinedClassName }));
	else {
		var className = "recharts-cartesian-axis-tick-value";
		if (typeof option !== "boolean") className = clsx(className, getClassNameFromUnknown(option));
		tickItem = /* @__PURE__ */ import_react.createElement(Text, _extends$6({}, tickProps, { className }), value);
	}
	return tickItem;
}
function RenderedTicksReporter(_ref) {
	var { ticks, axisType, axisId } = _ref;
	var dispatch = useAppDispatch();
	(0, import_react.useEffect)(() => {
		if (axisId == null || axisType == null) return noop$2;
		dispatch(setRenderedTicks({
			ticks: ticks.map((tick) => ({
				value: tick.value,
				coordinate: tick.coordinate,
				offset: tick.offset,
				index: tick.index
			})),
			axisId,
			axisType
		}));
		return () => {
			dispatch(removeRenderedTicks({
				axisId,
				axisType
			}));
		};
	}, [
		dispatch,
		ticks,
		axisId,
		axisType
	]);
	return null;
}
var Ticks = /* @__PURE__ */ (0, import_react.forwardRef)((props, ref) => {
	var { ticks = [], tick, tickLine, stroke, tickFormatter, unit, padding, tickTextProps, orientation, mirror, x, y, width, height, tickSize, tickMargin, fontSize, letterSpacing, getTicksConfig, events, axisType, axisId } = props;
	var finalTicks = getTicks(_objectSpread$9(_objectSpread$9({}, getTicksConfig), {}, { ticks }), fontSize, letterSpacing);
	var axisProps = svgPropertiesNoEvents(getTicksConfig);
	var customTickProps = svgPropertiesNoEventsFromUnknown(tick);
	var textAnchor = isValidTextAnchor(axisProps.textAnchor) ? axisProps.textAnchor : getTickTextAnchor(orientation, mirror);
	var verticalAnchor = getTickVerticalAnchor(orientation, mirror);
	var tickLinePropsObject = {};
	if (typeof tickLine === "object") tickLinePropsObject = tickLine;
	var tickLineProps = _objectSpread$9(_objectSpread$9({}, axisProps), {}, { fill: "none" }, tickLinePropsObject);
	var tickLineCoords = finalTicks.map((entry) => _objectSpread$9({ entry }, getTickLineCoord(entry, x, y, width, height, orientation, tickSize, mirror, tickMargin)));
	var tickLines = tickLineCoords.map((_ref2) => {
		var { entry, line: lineCoord } = _ref2;
		return /* @__PURE__ */ import_react.createElement(Layer, {
			className: "recharts-cartesian-axis-tick",
			key: "tick-".concat(entry.value, "-").concat(entry.coordinate, "-").concat(entry.tickCoord)
		}, tickLine && /* @__PURE__ */ import_react.createElement("line", _extends$6({}, tickLineProps, lineCoord, { className: clsx("recharts-cartesian-axis-tick-line", get(tickLine, "className")) })));
	});
	var tickLabels = tickLineCoords.map((_ref3, i) => {
		var _ref4, _tickTextProps$angle;
		var { entry, tick: tickCoord } = _ref3;
		var finalTickProps = _objectSpread$9(_objectSpread$9({}, _objectSpread$9(_objectSpread$9(_objectSpread$9(_objectSpread$9({ verticalAnchor }, axisProps), {}, {
			textAnchor,
			stroke: "none",
			fill: stroke
		}, tickCoord), {}, {
			index: i,
			payload: entry,
			visibleTicksCount: finalTicks.length,
			tickFormatter,
			padding
		}, tickTextProps), {}, { angle: (_ref4 = (_tickTextProps$angle = tickTextProps === null || tickTextProps === void 0 ? void 0 : tickTextProps.angle) !== null && _tickTextProps$angle !== void 0 ? _tickTextProps$angle : axisProps.angle) !== null && _ref4 !== void 0 ? _ref4 : 0 })), customTickProps);
		return /* @__PURE__ */ import_react.createElement(Layer, _extends$6({
			className: "recharts-cartesian-axis-tick-label",
			key: "tick-label-".concat(entry.value, "-").concat(entry.coordinate, "-").concat(entry.tickCoord)
		}, adaptEventsOfChild(events, entry, i)), tick && /* @__PURE__ */ import_react.createElement(TickItem, {
			option: tick,
			tickProps: finalTickProps,
			value: "".concat(typeof tickFormatter === "function" ? tickFormatter(entry.value, i) : entry.value).concat(unit || "")
		}));
	});
	return /* @__PURE__ */ import_react.createElement("g", { className: "recharts-cartesian-axis-ticks recharts-".concat(axisType, "-ticks") }, /* @__PURE__ */ import_react.createElement(RenderedTicksReporter, {
		ticks: finalTicks,
		axisId,
		axisType
	}), tickLabels.length > 0 && /* @__PURE__ */ import_react.createElement(ZIndexLayer, { zIndex: DefaultZIndexes.label }, /* @__PURE__ */ import_react.createElement("g", {
		className: "recharts-cartesian-axis-tick-labels recharts-".concat(axisType, "-tick-labels"),
		ref
	}, tickLabels)), tickLines.length > 0 && /* @__PURE__ */ import_react.createElement("g", { className: "recharts-cartesian-axis-tick-lines recharts-".concat(axisType, "-tick-lines") }, tickLines));
});
var CartesianAxisComponent = /* @__PURE__ */ (0, import_react.forwardRef)((props, ref) => {
	var { axisLine, width, height, className, hide, ticks, axisType, axisId } = props, rest = _objectWithoutProperties$5(props, _excluded$5);
	var [fontSize, setFontSize] = (0, import_react.useState)("");
	var [letterSpacing, setLetterSpacing] = (0, import_react.useState)("");
	var tickRefs = (0, import_react.useRef)(null);
	(0, import_react.useImperativeHandle)(ref, () => ({ getCalculatedWidth: () => {
		var _props$labelRef;
		return getCalculatedYAxisWidth({
			ticks: tickRefs.current,
			label: (_props$labelRef = props.labelRef) === null || _props$labelRef === void 0 ? void 0 : _props$labelRef.current,
			labelGapWithTick: 5,
			tickSize: props.tickSize,
			tickMargin: props.tickMargin
		});
	} }));
	var layerRef = (0, import_react.useCallback)((el) => {
		if (el) {
			var tickNodes = el.getElementsByClassName("recharts-cartesian-axis-tick-value");
			tickRefs.current = tickNodes;
			var tick = tickNodes[0];
			if (tick) {
				var computedStyle = window.getComputedStyle(tick);
				var calculatedFontSize = computedStyle.fontSize;
				var calculatedLetterSpacing = computedStyle.letterSpacing;
				if (calculatedFontSize !== fontSize || calculatedLetterSpacing !== letterSpacing) {
					setFontSize(calculatedFontSize);
					setLetterSpacing(calculatedLetterSpacing);
				}
			}
		}
	}, [fontSize, letterSpacing]);
	if (hide) return null;
	if (width != null && width <= 0 || height != null && height <= 0) return null;
	return /* @__PURE__ */ import_react.createElement(ZIndexLayer, { zIndex: props.zIndex }, /* @__PURE__ */ import_react.createElement(Layer, { className: clsx("recharts-cartesian-axis", className) }, /* @__PURE__ */ import_react.createElement(AxisLine, {
		x: props.x,
		y: props.y,
		width,
		height,
		orientation: props.orientation,
		mirror: props.mirror,
		axisLine,
		otherSvgProps: svgPropertiesNoEvents(props)
	}), /* @__PURE__ */ import_react.createElement(Ticks, {
		ref: layerRef,
		axisType,
		events: rest,
		fontSize,
		getTicksConfig: props,
		height: props.height,
		letterSpacing,
		mirror: props.mirror,
		orientation: props.orientation,
		padding: props.padding,
		stroke: props.stroke,
		tick: props.tick,
		tickFormatter: props.tickFormatter,
		tickLine: props.tickLine,
		tickMargin: props.tickMargin,
		tickSize: props.tickSize,
		tickTextProps: props.tickTextProps,
		ticks,
		unit: props.unit,
		width: props.width,
		x: props.x,
		y: props.y,
		axisId
	}), /* @__PURE__ */ import_react.createElement(CartesianLabelContextProvider, {
		x: props.x,
		y: props.y,
		width: props.width,
		height: props.height,
		lowerWidth: props.width,
		upperWidth: props.width
	}, /* @__PURE__ */ import_react.createElement(CartesianLabelFromLabelProp, {
		label: props.label,
		labelRef: props.labelRef
	}), props.children)));
});
/**
* @deprecated
*
* This component is not meant to be used directly in app code.
* Use XAxis or YAxis instead.
*
* Starting from Recharts v4.0 we will make this component internal only.
*/
var CartesianAxis = /* @__PURE__ */ import_react.forwardRef((outsideProps, ref) => {
	var props = resolveDefaultProps(outsideProps, defaultCartesianAxisProps);
	return /* @__PURE__ */ import_react.createElement(CartesianAxisComponent, _extends$6({}, props, { ref }));
});
CartesianAxis.displayName = "CartesianAxis";
var _excluded$4 = [
	"x1",
	"y1",
	"x2",
	"y2",
	"key"
], _excluded2$3 = ["offset"], _excluded3$2 = ["xAxisId", "yAxisId"], _excluded4 = ["xAxisId", "yAxisId"];
function ownKeys$8(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r) {
			return Object.getOwnPropertyDescriptor(e, r).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread$8(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys$8(Object(t), !0).forEach(function(r) {
			_defineProperty$8(e, r, t[r]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$8(Object(t)).forEach(function(r) {
			Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
		});
	}
	return e;
}
function _defineProperty$8(e, r, t) {
	return (r = _toPropertyKey$8(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}
function _toPropertyKey$8(t) {
	var i = _toPrimitive$8(t, "string");
	return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive$8(t, r) {
	if ("object" != typeof t || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != typeof i) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
function _extends$5() {
	return _extends$5 = Object.assign ? Object.assign.bind() : function(n) {
		for (var e = 1; e < arguments.length; e++) {
			var t = arguments[e];
			for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
		}
		return n;
	}, _extends$5.apply(null, arguments);
}
function _objectWithoutProperties$4(e, t) {
	if (null == e) return {};
	var o, r, i = _objectWithoutPropertiesLoose$4(e, t);
	if (Object.getOwnPropertySymbols) {
		var n = Object.getOwnPropertySymbols(e);
		for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
	}
	return i;
}
function _objectWithoutPropertiesLoose$4(r, e) {
	if (null == r) return {};
	var t = {};
	for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
		if (-1 !== e.indexOf(n)) continue;
		t[n] = r[n];
	}
	return t;
}
/**
* The <CartesianGrid horizontal
*/
var Background = (props) => {
	var { fill } = props;
	if (!fill || fill === "none") return null;
	var { fillOpacity, x, y, width, height, ry } = props;
	return /* @__PURE__ */ import_react.createElement("rect", {
		x,
		y,
		ry,
		width,
		height,
		stroke: "none",
		fill,
		fillOpacity,
		className: "recharts-cartesian-grid-bg"
	});
};
function LineItem(_ref) {
	var { option, lineItemProps } = _ref;
	var lineItem;
	if (/* @__PURE__ */ import_react.isValidElement(option)) lineItem = /* @__PURE__ */ import_react.cloneElement(option, lineItemProps);
	else if (typeof option === "function") lineItem = option(lineItemProps);
	else {
		var _svgPropertiesNoEvent;
		var { x1, y1, x2, y2, key } = lineItemProps;
		var _ref2 = (_svgPropertiesNoEvent = svgPropertiesNoEvents(_objectWithoutProperties$4(lineItemProps, _excluded$4))) !== null && _svgPropertiesNoEvent !== void 0 ? _svgPropertiesNoEvent : {}, { offset: __ } = _ref2, restOfFilteredProps = _objectWithoutProperties$4(_ref2, _excluded2$3);
		lineItem = /* @__PURE__ */ import_react.createElement("line", _extends$5({}, restOfFilteredProps, {
			x1,
			y1,
			x2,
			y2,
			fill: "none",
			key
		}));
	}
	return lineItem;
}
function HorizontalGridLines(props) {
	var { x, width, horizontal = true, horizontalPoints } = props;
	if (!horizontal || !horizontalPoints || !horizontalPoints.length) return null;
	var { xAxisId, yAxisId } = props, otherLineItemProps = _objectWithoutProperties$4(props, _excluded3$2);
	var items = horizontalPoints.map((entry, i) => {
		var lineItemProps = _objectSpread$8(_objectSpread$8({}, otherLineItemProps), {}, {
			x1: x,
			y1: entry,
			x2: x + width,
			y2: entry,
			key: "line-".concat(i),
			index: i
		});
		return /* @__PURE__ */ import_react.createElement(LineItem, {
			key: "line-".concat(i),
			option: horizontal,
			lineItemProps
		});
	});
	return /* @__PURE__ */ import_react.createElement("g", { className: "recharts-cartesian-grid-horizontal" }, items);
}
function VerticalGridLines(props) {
	var { y, height, vertical = true, verticalPoints } = props;
	if (!vertical || !verticalPoints || !verticalPoints.length) return null;
	var { xAxisId, yAxisId } = props, otherLineItemProps = _objectWithoutProperties$4(props, _excluded4);
	var items = verticalPoints.map((entry, i) => {
		var lineItemProps = _objectSpread$8(_objectSpread$8({}, otherLineItemProps), {}, {
			x1: entry,
			y1: y,
			x2: entry,
			y2: y + height,
			key: "line-".concat(i),
			index: i
		});
		return /* @__PURE__ */ import_react.createElement(LineItem, {
			option: vertical,
			lineItemProps,
			key: "line-".concat(i)
		});
	});
	return /* @__PURE__ */ import_react.createElement("g", { className: "recharts-cartesian-grid-vertical" }, items);
}
function HorizontalStripes(props) {
	var { horizontalFill, fillOpacity, x, y, width, height, horizontalPoints, horizontal = true } = props;
	if (!horizontal || !horizontalFill || !horizontalFill.length || horizontalPoints == null) return null;
	var roundedSortedHorizontalPoints = horizontalPoints.map((e) => Math.round(e + y - y)).sort((a, b) => a - b);
	if (y !== roundedSortedHorizontalPoints[0]) roundedSortedHorizontalPoints.unshift(0);
	var items = roundedSortedHorizontalPoints.map((entry, i) => {
		var nextPoint = roundedSortedHorizontalPoints[i + 1];
		var lineHeight = nextPoint == null ? y + height - entry : nextPoint - entry;
		if (lineHeight <= 0) return null;
		var colorIndex = i % horizontalFill.length;
		return /* @__PURE__ */ import_react.createElement("rect", {
			key: "react-".concat(i),
			y: entry,
			x,
			height: lineHeight,
			width,
			stroke: "none",
			fill: horizontalFill[colorIndex],
			fillOpacity,
			className: "recharts-cartesian-grid-bg"
		});
	});
	return /* @__PURE__ */ import_react.createElement("g", { className: "recharts-cartesian-gridstripes-horizontal" }, items);
}
function VerticalStripes(props) {
	var { vertical = true, verticalFill, fillOpacity, x, y, width, height, verticalPoints } = props;
	if (!vertical || !verticalFill || !verticalFill.length) return null;
	var roundedSortedVerticalPoints = verticalPoints.map((e) => Math.round(e + x - x)).sort((a, b) => a - b);
	if (x !== roundedSortedVerticalPoints[0]) roundedSortedVerticalPoints.unshift(0);
	var items = roundedSortedVerticalPoints.map((entry, i) => {
		var nextPoint = roundedSortedVerticalPoints[i + 1];
		var lineWidth = nextPoint == null ? x + width - entry : nextPoint - entry;
		if (lineWidth <= 0) return null;
		var colorIndex = i % verticalFill.length;
		return /* @__PURE__ */ import_react.createElement("rect", {
			key: "react-".concat(i),
			x: entry,
			y,
			width: lineWidth,
			height,
			stroke: "none",
			fill: verticalFill[colorIndex],
			fillOpacity,
			className: "recharts-cartesian-grid-bg"
		});
	});
	return /* @__PURE__ */ import_react.createElement("g", { className: "recharts-cartesian-gridstripes-vertical" }, items);
}
var defaultVerticalCoordinatesGenerator = (_ref3, syncWithTicks) => {
	var { xAxis, width, height, offset } = _ref3;
	return getCoordinatesOfGrid(getTicks(_objectSpread$8(_objectSpread$8(_objectSpread$8({}, defaultCartesianAxisProps), xAxis), {}, {
		ticks: getTicksOfAxis(xAxis, true),
		viewBox: {
			x: 0,
			y: 0,
			width,
			height
		}
	})), offset.left, offset.left + offset.width, syncWithTicks);
};
var defaultHorizontalCoordinatesGenerator = (_ref4, syncWithTicks) => {
	var { yAxis, width, height, offset } = _ref4;
	return getCoordinatesOfGrid(getTicks(_objectSpread$8(_objectSpread$8(_objectSpread$8({}, defaultCartesianAxisProps), yAxis), {}, {
		ticks: getTicksOfAxis(yAxis, true),
		viewBox: {
			x: 0,
			y: 0,
			width,
			height
		}
	})), offset.top, offset.top + offset.height, syncWithTicks);
};
var defaultCartesianGridProps = {
	horizontal: true,
	vertical: true,
	horizontalPoints: [],
	verticalPoints: [],
	stroke: "#ccc",
	fill: "none",
	verticalFill: [],
	horizontalFill: [],
	xAxisId: 0,
	yAxisId: 0,
	syncWithTicks: false,
	zIndex: DefaultZIndexes.grid
};
/**
* Renders background grid with lines and fill colors in a Cartesian chart.
*
* @consumes CartesianChartContext
*/
function CartesianGrid(props) {
	var chartWidth = useChartWidth();
	var chartHeight = useChartHeight();
	var offset = useOffsetInternal();
	var propsIncludingDefaults = _objectSpread$8(_objectSpread$8({}, resolveDefaultProps(props, defaultCartesianGridProps)), {}, {
		x: isNumber$1(props.x) ? props.x : offset.left,
		y: isNumber$1(props.y) ? props.y : offset.top,
		width: isNumber$1(props.width) ? props.width : offset.width,
		height: isNumber$1(props.height) ? props.height : offset.height
	});
	var { xAxisId, yAxisId, x, y, width, height, syncWithTicks, horizontalValues, verticalValues } = propsIncludingDefaults;
	var isPanorama = useIsPanorama();
	var xAxis = useAppSelector((state) => selectAxisPropsNeededForCartesianGridTicksGenerator(state, "xAxis", xAxisId, isPanorama));
	var yAxis = useAppSelector((state) => selectAxisPropsNeededForCartesianGridTicksGenerator(state, "yAxis", yAxisId, isPanorama));
	if (!isPositiveNumber(width) || !isPositiveNumber(height) || !isNumber$1(x) || !isNumber$1(y)) return null;
	var verticalCoordinatesGenerator = propsIncludingDefaults.verticalCoordinatesGenerator || defaultVerticalCoordinatesGenerator;
	var horizontalCoordinatesGenerator = propsIncludingDefaults.horizontalCoordinatesGenerator || defaultHorizontalCoordinatesGenerator;
	var { horizontalPoints, verticalPoints } = propsIncludingDefaults;
	if ((!horizontalPoints || !horizontalPoints.length) && typeof horizontalCoordinatesGenerator === "function") {
		var isHorizontalValues = horizontalValues && horizontalValues.length;
		var generatorResult = horizontalCoordinatesGenerator({
			yAxis: yAxis ? _objectSpread$8(_objectSpread$8({}, yAxis), {}, { ticks: isHorizontalValues ? horizontalValues : yAxis.ticks }) : void 0,
			width: chartWidth !== null && chartWidth !== void 0 ? chartWidth : width,
			height: chartHeight !== null && chartHeight !== void 0 ? chartHeight : height,
			offset
		}, isHorizontalValues ? true : syncWithTicks);
		warn(Array.isArray(generatorResult), "horizontalCoordinatesGenerator should return Array but instead it returned [".concat(typeof generatorResult, "]"));
		if (Array.isArray(generatorResult)) horizontalPoints = generatorResult;
	}
	if ((!verticalPoints || !verticalPoints.length) && typeof verticalCoordinatesGenerator === "function") {
		var isVerticalValues = verticalValues && verticalValues.length;
		var _generatorResult = verticalCoordinatesGenerator({
			xAxis: xAxis ? _objectSpread$8(_objectSpread$8({}, xAxis), {}, { ticks: isVerticalValues ? verticalValues : xAxis.ticks }) : void 0,
			width: chartWidth !== null && chartWidth !== void 0 ? chartWidth : width,
			height: chartHeight !== null && chartHeight !== void 0 ? chartHeight : height,
			offset
		}, isVerticalValues ? true : syncWithTicks);
		warn(Array.isArray(_generatorResult), "verticalCoordinatesGenerator should return Array but instead it returned [".concat(typeof _generatorResult, "]"));
		if (Array.isArray(_generatorResult)) verticalPoints = _generatorResult;
	}
	return /* @__PURE__ */ import_react.createElement(ZIndexLayer, { zIndex: propsIncludingDefaults.zIndex }, /* @__PURE__ */ import_react.createElement("g", { className: "recharts-cartesian-grid" }, /* @__PURE__ */ import_react.createElement(Background, {
		fill: propsIncludingDefaults.fill,
		fillOpacity: propsIncludingDefaults.fillOpacity,
		x: propsIncludingDefaults.x,
		y: propsIncludingDefaults.y,
		width: propsIncludingDefaults.width,
		height: propsIncludingDefaults.height,
		ry: propsIncludingDefaults.ry
	}), /* @__PURE__ */ import_react.createElement(HorizontalStripes, _extends$5({}, propsIncludingDefaults, { horizontalPoints })), /* @__PURE__ */ import_react.createElement(VerticalStripes, _extends$5({}, propsIncludingDefaults, { verticalPoints })), /* @__PURE__ */ import_react.createElement(HorizontalGridLines, _extends$5({}, propsIncludingDefaults, {
		offset,
		horizontalPoints,
		xAxis,
		yAxis
	})), /* @__PURE__ */ import_react.createElement(VerticalGridLines, _extends$5({}, propsIncludingDefaults, {
		offset,
		verticalPoints,
		xAxis,
		yAxis
	}))));
}
CartesianGrid.displayName = "CartesianGrid";
/**
* @fileOverview Default Tooltip Content
*/
function _extends$4() {
	return _extends$4 = Object.assign ? Object.assign.bind() : function(n) {
		for (var e = 1; e < arguments.length; e++) {
			var t = arguments[e];
			for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
		}
		return n;
	}, _extends$4.apply(null, arguments);
}
function ownKeys$7(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r) {
			return Object.getOwnPropertyDescriptor(e, r).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread$7(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys$7(Object(t), !0).forEach(function(r) {
			_defineProperty$7(e, r, t[r]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$7(Object(t)).forEach(function(r) {
			Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
		});
	}
	return e;
}
function _defineProperty$7(e, r, t) {
	return (r = _toPropertyKey$7(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}
function _toPropertyKey$7(t) {
	var i = _toPrimitive$7(t, "string");
	return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive$7(t, r) {
	if ("object" != typeof t || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != typeof i) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
function defaultFormatter(value) {
	return Array.isArray(value) && isNumOrStr(value[0]) && isNumOrStr(value[1]) ? value.join(" ~ ") : value;
}
/**
* @inline
*/
var defaultDefaultTooltipContentProps = {
	separator: " : ",
	contentStyle: {
		margin: 0,
		padding: 10,
		backgroundColor: "#fff",
		border: "1px solid #ccc",
		whiteSpace: "nowrap"
	},
	itemStyle: {
		display: "block",
		paddingTop: 4,
		paddingBottom: 4,
		color: "#000"
	},
	labelStyle: {},
	accessibilityLayer: false
};
function lodashLikeSortBy(array, itemSorter) {
	if (itemSorter == null) return array;
	return sortBy(array, itemSorter);
}
/**
* This component is by default rendered inside the {@link Tooltip} component. You would not use it directly.
*
* You can use this component to customize the content of the tooltip,
* or you can provide your own completely independent content.
*/
var DefaultTooltipContent = (props) => {
	var { separator = defaultDefaultTooltipContentProps.separator, contentStyle, itemStyle, labelStyle = defaultDefaultTooltipContentProps.labelStyle, payload, formatter, itemSorter, wrapperClassName, labelClassName, label, labelFormatter, accessibilityLayer = defaultDefaultTooltipContentProps.accessibilityLayer } = props;
	var renderContent = () => {
		if (payload && payload.length) {
			var listStyle = {
				padding: 0,
				margin: 0
			};
			var items = lodashLikeSortBy(payload, itemSorter).map((entry, i) => {
				if (entry.type === "none") return null;
				var finalFormatter = entry.formatter || formatter || defaultFormatter;
				var { value, name } = entry;
				var finalValue = value;
				var finalName = name;
				if (finalFormatter) {
					var formatted = finalFormatter(value, name, entry, i, payload);
					if (Array.isArray(formatted)) [finalValue, finalName] = formatted;
					else if (formatted != null) finalValue = formatted;
					else return null;
				}
				var finalItemStyle = _objectSpread$7(_objectSpread$7({}, defaultDefaultTooltipContentProps.itemStyle), {}, { color: entry.color || defaultDefaultTooltipContentProps.itemStyle.color }, itemStyle);
				return /* @__PURE__ */ import_react.createElement("li", {
					className: "recharts-tooltip-item",
					key: "tooltip-item-".concat(i),
					style: finalItemStyle
				}, isNumOrStr(finalName) ? /* @__PURE__ */ import_react.createElement("span", { className: "recharts-tooltip-item-name" }, finalName) : null, isNumOrStr(finalName) ? /* @__PURE__ */ import_react.createElement("span", { className: "recharts-tooltip-item-separator" }, separator) : null, /* @__PURE__ */ import_react.createElement("span", { className: "recharts-tooltip-item-value" }, finalValue), /* @__PURE__ */ import_react.createElement("span", { className: "recharts-tooltip-item-unit" }, entry.unit || ""));
			});
			return /* @__PURE__ */ import_react.createElement("ul", {
				className: "recharts-tooltip-item-list",
				style: listStyle
			}, items);
		}
		return null;
	};
	var finalStyle = _objectSpread$7(_objectSpread$7({}, defaultDefaultTooltipContentProps.contentStyle), contentStyle);
	var finalLabelStyle = _objectSpread$7({ margin: 0 }, labelStyle);
	var hasLabel = !isNullish(label);
	var finalLabel = hasLabel ? label : "";
	var wrapperCN = clsx("recharts-default-tooltip", wrapperClassName);
	var labelCN = clsx("recharts-tooltip-label", labelClassName);
	if (hasLabel && labelFormatter && payload !== void 0 && payload !== null) finalLabel = labelFormatter(label, payload);
	var accessibilityAttributes = accessibilityLayer ? {
		role: "status",
		"aria-live": "assertive"
	} : {};
	return /* @__PURE__ */ import_react.createElement("div", _extends$4({
		className: wrapperCN,
		style: finalStyle
	}, accessibilityAttributes), /* @__PURE__ */ import_react.createElement("p", {
		className: labelCN,
		style: finalLabelStyle
	}, /* @__PURE__ */ import_react.isValidElement(finalLabel) ? finalLabel : "".concat(finalLabel)), renderContent());
};
var CSS_CLASS_PREFIX = "recharts-tooltip-wrapper";
var TOOLTIP_HIDDEN = { visibility: "hidden" };
function getTooltipCSSClassName(_ref) {
	var { coordinate, translateX, translateY } = _ref;
	return clsx(CSS_CLASS_PREFIX, {
		["".concat(CSS_CLASS_PREFIX, "-right")]: isNumber$1(translateX) && coordinate && isNumber$1(coordinate.x) && translateX >= coordinate.x,
		["".concat(CSS_CLASS_PREFIX, "-left")]: isNumber$1(translateX) && coordinate && isNumber$1(coordinate.x) && translateX < coordinate.x,
		["".concat(CSS_CLASS_PREFIX, "-bottom")]: isNumber$1(translateY) && coordinate && isNumber$1(coordinate.y) && translateY >= coordinate.y,
		["".concat(CSS_CLASS_PREFIX, "-top")]: isNumber$1(translateY) && coordinate && isNumber$1(coordinate.y) && translateY < coordinate.y
	});
}
function getTooltipTranslateXY(_ref2) {
	var { allowEscapeViewBox, coordinate, key, offset, position, reverseDirection, tooltipDimension, viewBox, viewBoxDimension } = _ref2;
	if (position && isNumber$1(position[key])) return position[key];
	var negative = coordinate[key] - tooltipDimension - (offset > 0 ? offset : 0);
	var positive = coordinate[key] + offset;
	if (allowEscapeViewBox[key]) return reverseDirection[key] ? negative : positive;
	var viewBoxKey = viewBox[key];
	if (viewBoxKey == null) return 0;
	if (reverseDirection[key]) {
		if (negative < viewBoxKey) return Math.max(positive, viewBoxKey);
		return Math.max(negative, viewBoxKey);
	}
	if (viewBoxDimension == null) return 0;
	if (positive + tooltipDimension > viewBoxKey + viewBoxDimension) return Math.max(negative, viewBoxKey);
	return Math.max(positive, viewBoxKey);
}
function getTransformStyle(_ref3) {
	var { translateX, translateY, useTranslate3d } = _ref3;
	return { transform: useTranslate3d ? "translate3d(".concat(translateX, "px, ").concat(translateY, "px, 0)") : "translate(".concat(translateX, "px, ").concat(translateY, "px)") };
}
function getTooltipTranslate(_ref4) {
	var { allowEscapeViewBox, coordinate, offsetTop, offsetLeft, position, reverseDirection, tooltipBox, useTranslate3d, viewBox } = _ref4;
	var cssProperties, translateX, translateY;
	if (tooltipBox.height > 0 && tooltipBox.width > 0 && coordinate) {
		translateX = getTooltipTranslateXY({
			allowEscapeViewBox,
			coordinate,
			key: "x",
			offset: offsetLeft,
			position,
			reverseDirection,
			tooltipDimension: tooltipBox.width,
			viewBox,
			viewBoxDimension: viewBox.width
		});
		translateY = getTooltipTranslateXY({
			allowEscapeViewBox,
			coordinate,
			key: "y",
			offset: offsetTop,
			position,
			reverseDirection,
			tooltipDimension: tooltipBox.height,
			viewBox,
			viewBoxDimension: viewBox.height
		});
		cssProperties = getTransformStyle({
			translateX,
			translateY,
			useTranslate3d
		});
	} else cssProperties = TOOLTIP_HIDDEN;
	return {
		cssProperties,
		cssClasses: getTooltipCSSClassName({
			translateX,
			translateY,
			coordinate
		})
	};
}
function ownKeys$6(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r) {
			return Object.getOwnPropertyDescriptor(e, r).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread$6(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys$6(Object(t), !0).forEach(function(r) {
			_defineProperty$6(e, r, t[r]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$6(Object(t)).forEach(function(r) {
			Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
		});
	}
	return e;
}
function _defineProperty$6(e, r, t) {
	return (r = _toPropertyKey$6(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}
function _toPropertyKey$6(t) {
	var i = _toPrimitive$6(t, "string");
	return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive$6(t, r) {
	if ("object" != typeof t || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != typeof i) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
function resolveTransitionProperty(args) {
	if (args.prefersReducedMotion && args.isAnimationActive === "auto") return;
	if (args.isAnimationActive && args.active) return "transform ".concat(args.animationDuration, "ms ").concat(args.animationEasing);
}
function TooltipBoundingBoxImpl(props) {
	var _props$coordinate3, _props$coordinate4, _props$coordinate$x2, _props$coordinate5, _props$coordinate$y2, _props$coordinate6;
	var prefersReducedMotion = usePrefersReducedMotion();
	var [state, setState] = import_react.useState(() => ({
		dismissed: false,
		dismissedAtCoordinate: {
			x: 0,
			y: 0
		}
	}));
	import_react.useEffect(() => {
		var handleKeyDown = (event) => {
			if (event.key === "Escape") {
				var _props$coordinate$x, _props$coordinate, _props$coordinate$y, _props$coordinate2;
				setState({
					dismissed: true,
					dismissedAtCoordinate: {
						x: (_props$coordinate$x = (_props$coordinate = props.coordinate) === null || _props$coordinate === void 0 ? void 0 : _props$coordinate.x) !== null && _props$coordinate$x !== void 0 ? _props$coordinate$x : 0,
						y: (_props$coordinate$y = (_props$coordinate2 = props.coordinate) === null || _props$coordinate2 === void 0 ? void 0 : _props$coordinate2.y) !== null && _props$coordinate$y !== void 0 ? _props$coordinate$y : 0
					}
				});
			}
		};
		document.addEventListener("keydown", handleKeyDown);
		return () => {
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, [(_props$coordinate3 = props.coordinate) === null || _props$coordinate3 === void 0 ? void 0 : _props$coordinate3.x, (_props$coordinate4 = props.coordinate) === null || _props$coordinate4 === void 0 ? void 0 : _props$coordinate4.y]);
	if (state.dismissed && (((_props$coordinate$x2 = (_props$coordinate5 = props.coordinate) === null || _props$coordinate5 === void 0 ? void 0 : _props$coordinate5.x) !== null && _props$coordinate$x2 !== void 0 ? _props$coordinate$x2 : 0) !== state.dismissedAtCoordinate.x || ((_props$coordinate$y2 = (_props$coordinate6 = props.coordinate) === null || _props$coordinate6 === void 0 ? void 0 : _props$coordinate6.y) !== null && _props$coordinate$y2 !== void 0 ? _props$coordinate$y2 : 0) !== state.dismissedAtCoordinate.y)) setState(_objectSpread$6(_objectSpread$6({}, state), {}, { dismissed: false }));
	var { cssClasses, cssProperties } = getTooltipTranslate({
		allowEscapeViewBox: props.allowEscapeViewBox,
		coordinate: props.coordinate,
		offsetLeft: typeof props.offset === "number" ? props.offset : props.offset.x,
		offsetTop: typeof props.offset === "number" ? props.offset : props.offset.y,
		position: props.position,
		reverseDirection: props.reverseDirection,
		tooltipBox: {
			height: props.lastBoundingBox.height,
			width: props.lastBoundingBox.width
		},
		useTranslate3d: props.useTranslate3d,
		viewBox: props.viewBox
	});
	var outerStyle = _objectSpread$6(_objectSpread$6({}, props.hasPortalFromProps ? {} : _objectSpread$6(_objectSpread$6({ transition: resolveTransitionProperty({
		prefersReducedMotion,
		isAnimationActive: props.isAnimationActive,
		active: props.active,
		animationDuration: props.animationDuration,
		animationEasing: props.animationEasing
	}) }, cssProperties), {}, {
		pointerEvents: "none",
		position: "absolute",
		top: 0,
		left: 0
	})), {}, { visibility: !state.dismissed && props.active && props.hasPayload ? "visible" : "hidden" }, props.wrapperStyle);
	return /* @__PURE__ */ import_react.createElement("div", {
		xmlns: "http://www.w3.org/1999/xhtml",
		tabIndex: -1,
		className: cssClasses,
		style: outerStyle,
		ref: props.innerRef
	}, props.children);
}
var TooltipBoundingBox = /* @__PURE__ */ import_react.memo(TooltipBoundingBoxImpl);
/**
* This is configuration option that decides how to filter for unique values only:
*
* - `false` means "no filter"
* - `true` means "use recharts default filter"
* - function means "use return of this function as the default key"
*/
function getUniqPayload(payload, option, defaultUniqBy) {
	if (option === true) return uniqBy(payload, defaultUniqBy);
	if (typeof option === "function") return uniqBy(payload, option);
	return payload;
}
var EPS = 1;
/**
* TODO this documentation does not reflect what this hook is doing, update it.
* Stores the `offsetHeight`, `offsetLeft`, `offsetTop`, and `offsetWidth` of a DOM element.
*/
/**
* Use this to listen to element layout changes.
*
* Very useful for reading actual sizes of DOM elements relative to the viewport.
*
* @param extraDependencies use this to trigger new DOM dimensions read when any of these change. Good for things like payload and label, that will re-render something down in the children array, but you want to read the layout box of a parent.
* @returns [lastElementOffset, updateElementOffset] most recent value, and setter. Pass the setter to a DOM element ref like this: `<div ref={updateElementOffset}>`
*/
function useElementOffset() {
	var extraDependencies = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
	var [lastBoundingBox, setLastBoundingBox] = (0, import_react.useState)({
		height: 0,
		left: 0,
		top: 0,
		width: 0
	});
	return [lastBoundingBox, (0, import_react.useCallback)((node) => {
		if (node != null) {
			var rect = node.getBoundingClientRect();
			var box = {
				height: rect.height,
				left: rect.left,
				top: rect.top,
				width: rect.width
			};
			if (Math.abs(box.height - lastBoundingBox.height) > EPS || Math.abs(box.left - lastBoundingBox.left) > EPS || Math.abs(box.top - lastBoundingBox.top) > EPS || Math.abs(box.width - lastBoundingBox.width) > EPS) setLastBoundingBox({
				height: box.height,
				left: box.left,
				top: box.top,
				width: box.width
			});
		}
	}, [
		lastBoundingBox.width,
		lastBoundingBox.height,
		lastBoundingBox.top,
		lastBoundingBox.left,
		...extraDependencies
	])];
}
/**
* @fileOverview Cross
*/
var _excluded$3 = [
	"x",
	"y",
	"top",
	"left",
	"width",
	"height",
	"className"
];
function _extends$3() {
	return _extends$3 = Object.assign ? Object.assign.bind() : function(n) {
		for (var e = 1; e < arguments.length; e++) {
			var t = arguments[e];
			for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
		}
		return n;
	}, _extends$3.apply(null, arguments);
}
function ownKeys$5(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r) {
			return Object.getOwnPropertyDescriptor(e, r).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread$5(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys$5(Object(t), !0).forEach(function(r) {
			_defineProperty$5(e, r, t[r]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$5(Object(t)).forEach(function(r) {
			Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
		});
	}
	return e;
}
function _defineProperty$5(e, r, t) {
	return (r = _toPropertyKey$5(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}
function _toPropertyKey$5(t) {
	var i = _toPrimitive$5(t, "string");
	return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive$5(t, r) {
	if ("object" != typeof t || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != typeof i) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
function _objectWithoutProperties$3(e, t) {
	if (null == e) return {};
	var o, r, i = _objectWithoutPropertiesLoose$3(e, t);
	if (Object.getOwnPropertySymbols) {
		var n = Object.getOwnPropertySymbols(e);
		for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
	}
	return i;
}
function _objectWithoutPropertiesLoose$3(r, e) {
	if (null == r) return {};
	var t = {};
	for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
		if (-1 !== e.indexOf(n)) continue;
		t[n] = r[n];
	}
	return t;
}
var getPath = (x, y, width, height, top, left) => {
	return "M".concat(x, ",").concat(top, "v").concat(height, "M").concat(left, ",").concat(y, "h").concat(width);
};
var Cross = (_ref) => {
	var { x = 0, y = 0, top = 0, left = 0, width = 0, height = 0, className } = _ref, rest = _objectWithoutProperties$3(_ref, _excluded$3);
	var props = _objectSpread$5({
		x,
		y,
		top,
		left,
		width,
		height
	}, rest);
	if (!isNumber$1(x) || !isNumber$1(y) || !isNumber$1(width) || !isNumber$1(height) || !isNumber$1(top) || !isNumber$1(left)) return null;
	return /* @__PURE__ */ import_react.createElement("path", _extends$3({}, svgPropertiesAndEvents(props), {
		className: clsx("recharts-cross", className),
		d: getPath(x, y, width, height, top, left)
	}));
};
function getCursorRectangle(layout, activeCoordinate, offset, tooltipAxisBandSize) {
	var halfSize = tooltipAxisBandSize / 2;
	return {
		stroke: "none",
		fill: "#ccc",
		x: layout === "horizontal" ? activeCoordinate.x - halfSize : offset.left + .5,
		y: layout === "horizontal" ? offset.top + .5 : activeCoordinate.y - halfSize,
		width: layout === "horizontal" ? tooltipAxisBandSize : offset.width - 1,
		height: layout === "horizontal" ? offset.height - 1 : tooltipAxisBandSize
	};
}
/**
* Only applicable for radial layouts
* @param {Object} activeCoordinate ChartCoordinate
* @returns {Object} RadialCursorPoints
*/
function getRadialCursorPoints(activeCoordinate) {
	var { cx, cy, radius, startAngle, endAngle } = activeCoordinate;
	return {
		points: [polarToCartesian(cx, cy, radius, startAngle), polarToCartesian(cx, cy, radius, endAngle)],
		cx,
		cy,
		radius,
		startAngle,
		endAngle
	};
}
function getCursorPoints(layout, activeCoordinate, offset) {
	if (layout === "horizontal") return [{
		x: activeCoordinate.x,
		y: offset.top
	}, {
		x: activeCoordinate.x,
		y: offset.top + offset.height
	}];
	if (layout === "vertical") return [{
		x: offset.left,
		y: activeCoordinate.y
	}, {
		x: offset.left + offset.width,
		y: activeCoordinate.y
	}];
	if (isPolarCoordinate(activeCoordinate)) {
		if (layout === "centric") {
			var { cx, cy, innerRadius, outerRadius, angle } = activeCoordinate;
			var innerPoint = polarToCartesian(cx, cy, innerRadius, angle);
			var outerPoint = polarToCartesian(cx, cy, outerRadius, angle);
			return [{
				x: innerPoint.x,
				y: innerPoint.y
			}, {
				x: outerPoint.x,
				y: outerPoint.y
			}];
		}
		return getRadialCursorPoints(activeCoordinate);
	}
}
function ownKeys$4(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r) {
			return Object.getOwnPropertyDescriptor(e, r).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread$4(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys$4(Object(t), !0).forEach(function(r) {
			_defineProperty$4(e, r, t[r]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$4(Object(t)).forEach(function(r) {
			Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
		});
	}
	return e;
}
function _defineProperty$4(e, r, t) {
	return (r = _toPropertyKey$4(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}
function _toPropertyKey$4(t) {
	var i = _toPrimitive$4(t, "string");
	return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive$4(t, r) {
	if ("object" != typeof t || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != typeof i) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
var useTooltipAxis = () => useAppSelector(selectTooltipAxis);
var useTooltipAxisBandSize = () => {
	var tooltipAxis = useTooltipAxis();
	var tooltipTicks = useAppSelector(selectTooltipAxisTicks);
	var tooltipAxisScale = useAppSelector(selectTooltipAxisScale);
	if (!tooltipAxis || !tooltipAxisScale) return getBandSizeOfAxis(void 0, tooltipTicks);
	return getBandSizeOfAxis(_objectSpread$4(_objectSpread$4({}, tooltipAxis), {}, { scale: tooltipAxisScale }), tooltipTicks);
};
function _extends$2() {
	return _extends$2 = Object.assign ? Object.assign.bind() : function(n) {
		for (var e = 1; e < arguments.length; e++) {
			var t = arguments[e];
			for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
		}
		return n;
	}, _extends$2.apply(null, arguments);
}
function ownKeys$3(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r) {
			return Object.getOwnPropertyDescriptor(e, r).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread$3(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys$3(Object(t), !0).forEach(function(r) {
			_defineProperty$3(e, r, t[r]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$3(Object(t)).forEach(function(r) {
			Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
		});
	}
	return e;
}
function _defineProperty$3(e, r, t) {
	return (r = _toPropertyKey$3(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}
function _toPropertyKey$3(t) {
	var i = _toPrimitive$3(t, "string");
	return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive$3(t, r) {
	if ("object" != typeof t || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != typeof i) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
/**
* If set false, no cursor will be drawn when tooltip is active.
* If set an object, the option is the configuration of cursor.
* If set a React element, the option is the custom react element of drawing cursor
*/
function RenderCursor(_ref) {
	var { cursor, cursorComp, cursorProps } = _ref;
	if (/* @__PURE__ */ (0, import_react.isValidElement)(cursor)) return /* @__PURE__ */ (0, import_react.cloneElement)(cursor, cursorProps);
	return /* @__PURE__ */ (0, import_react.createElement)(cursorComp, cursorProps);
}
function CursorInternal(props) {
	var _props$zIndex;
	var { coordinate, payload, index, offset, tooltipAxisBandSize, layout, cursor, tooltipEventType, chartName } = props;
	var activeCoordinate = coordinate;
	var activePayload = payload;
	var activeTooltipIndex = index;
	if (!cursor || !activeCoordinate || chartName !== "ScatterChart" && tooltipEventType !== "axis") return null;
	var restProps, cursorComp, preferredZIndex;
	if (chartName === "ScatterChart") {
		restProps = activeCoordinate;
		cursorComp = Cross;
		preferredZIndex = DefaultZIndexes.cursorLine;
	} else if (chartName === "BarChart") {
		restProps = getCursorRectangle(layout, activeCoordinate, offset, tooltipAxisBandSize);
		cursorComp = Rectangle;
		preferredZIndex = DefaultZIndexes.cursorRectangle;
	} else if (layout === "radial" && isPolarCoordinate(activeCoordinate)) {
		var { cx, cy, radius, startAngle, endAngle } = getRadialCursorPoints(activeCoordinate);
		restProps = {
			cx,
			cy,
			startAngle,
			endAngle,
			innerRadius: radius,
			outerRadius: radius
		};
		cursorComp = Sector;
		preferredZIndex = DefaultZIndexes.cursorLine;
	} else {
		restProps = { points: getCursorPoints(layout, activeCoordinate, offset) };
		cursorComp = Curve;
		preferredZIndex = DefaultZIndexes.cursorLine;
	}
	var extraClassName = typeof cursor === "object" && "className" in cursor ? cursor.className : void 0;
	var cursorProps = _objectSpread$3(_objectSpread$3(_objectSpread$3(_objectSpread$3({
		stroke: "#ccc",
		pointerEvents: "none"
	}, offset), restProps), svgPropertiesNoEventsFromUnknown(cursor)), {}, {
		payload: activePayload,
		payloadIndex: activeTooltipIndex,
		className: clsx("recharts-tooltip-cursor", extraClassName)
	});
	return /* @__PURE__ */ import_react.createElement(ZIndexLayer, { zIndex: (_props$zIndex = props.zIndex) !== null && _props$zIndex !== void 0 ? _props$zIndex : preferredZIndex }, /* @__PURE__ */ import_react.createElement(RenderCursor, {
		cursor,
		cursorComp,
		cursorProps
	}));
}
function Cursor(props) {
	var tooltipAxisBandSize = useTooltipAxisBandSize();
	var offset = useOffsetInternal();
	var layout = useChartLayout();
	var chartName = useChartName();
	if (tooltipAxisBandSize == null || offset == null || layout == null || chartName == null) return null;
	return /* @__PURE__ */ import_react.createElement(CursorInternal, _extends$2({}, props, {
		offset,
		layout,
		tooltipAxisBandSize,
		chartName
	}));
}
function ownKeys$2(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r) {
			return Object.getOwnPropertyDescriptor(e, r).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread$2(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys$2(Object(t), !0).forEach(function(r) {
			_defineProperty$2(e, r, t[r]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$2(Object(t)).forEach(function(r) {
			Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
		});
	}
	return e;
}
function _defineProperty$2(e, r, t) {
	return (r = _toPropertyKey$2(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}
function _toPropertyKey$2(t) {
	var i = _toPrimitive$2(t, "string");
	return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive$2(t, r) {
	if ("object" != typeof t || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != typeof i) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
function defaultUniqBy(entry) {
	return entry.dataKey;
}
function renderContent(content, props) {
	if (/* @__PURE__ */ import_react.isValidElement(content)) return /* @__PURE__ */ import_react.cloneElement(content, props);
	if (typeof content === "function") return /* @__PURE__ */ import_react.createElement(content, props);
	return /* @__PURE__ */ import_react.createElement(DefaultTooltipContent, props);
}
var emptyPayload = [];
var defaultTooltipProps = {
	allowEscapeViewBox: {
		x: false,
		y: false
	},
	animationDuration: 400,
	animationEasing: "ease",
	axisId: 0,
	contentStyle: {},
	cursor: true,
	filterNull: true,
	includeHidden: false,
	isAnimationActive: "auto",
	itemSorter: "name",
	itemStyle: {},
	labelStyle: {},
	offset: 10,
	reverseDirection: {
		x: false,
		y: false
	},
	separator: " : ",
	trigger: "hover",
	useTranslate3d: false,
	wrapperStyle: {}
};
/**
* The Tooltip component displays a floating box with data values when hovering over or clicking on chart elements.
*
* It can be configured to show information for individual data points or for all points at a specific axis coordinate.
* The appearance and content of the tooltip can be customized via props.
*
* @see {@link https://github.com/recharts/recharts/wiki/Tooltip-event-type-and-shared-prop Tooltip event type and shared prop wiki page}
* @see {@link https://recharts.github.io/en-US/guide/activeIndex/ Active index replacement when migrating from Recharts v2 to v3}
*
* @consumes CartesianChartContext
* @consumes PolarChartContext
* @consumes TooltipEntrySettings
*/
function Tooltip(outsideProps) {
	var _useAppSelector, _ref;
	var props = resolveDefaultProps(outsideProps, defaultTooltipProps);
	var { active: activeFromProps, allowEscapeViewBox, animationDuration, animationEasing, content, filterNull, isAnimationActive, offset, payloadUniqBy, position, reverseDirection, useTranslate3d, wrapperStyle, cursor, shared, trigger, defaultIndex, portal: portalFromProps, axisId } = props;
	var dispatch = useAppDispatch();
	var defaultIndexAsString = typeof defaultIndex === "number" ? String(defaultIndex) : defaultIndex;
	(0, import_react.useEffect)(() => {
		dispatch(setTooltipSettingsState({
			shared,
			trigger,
			axisId,
			active: activeFromProps,
			defaultIndex: defaultIndexAsString
		}));
	}, [
		dispatch,
		shared,
		trigger,
		axisId,
		activeFromProps,
		defaultIndexAsString
	]);
	var viewBox = useViewBox();
	var accessibilityLayer = useAccessibilityLayer();
	var tooltipEventType = useTooltipEventType(shared);
	var { activeIndex, isActive } = (_useAppSelector = useAppSelector((state) => selectIsTooltipActive(state, tooltipEventType, trigger, defaultIndexAsString))) !== null && _useAppSelector !== void 0 ? _useAppSelector : {};
	var payloadFromRedux = useAppSelector((state) => selectTooltipPayload(state, tooltipEventType, trigger, defaultIndexAsString));
	var labelFromRedux = useAppSelector((state) => selectActiveLabel(state, tooltipEventType, trigger, defaultIndexAsString));
	var coordinate = useAppSelector((state) => selectActiveCoordinate(state, tooltipEventType, trigger, defaultIndexAsString));
	var payload = payloadFromRedux;
	var tooltipPortalFromContext = useTooltipPortal();
	var finalIsActive = (_ref = activeFromProps !== null && activeFromProps !== void 0 ? activeFromProps : isActive) !== null && _ref !== void 0 ? _ref : false;
	var [lastBoundingBox, updateBoundingBox] = useElementOffset([payload, finalIsActive]);
	var finalLabel = tooltipEventType === "axis" ? labelFromRedux : void 0;
	useTooltipChartSynchronisation(tooltipEventType, trigger, coordinate, finalLabel, activeIndex, finalIsActive);
	var tooltipPortal = portalFromProps !== null && portalFromProps !== void 0 ? portalFromProps : tooltipPortalFromContext;
	if (tooltipPortal == null || viewBox == null || tooltipEventType == null) return null;
	var finalPayload = payload !== null && payload !== void 0 ? payload : emptyPayload;
	if (!finalIsActive) finalPayload = emptyPayload;
	if (filterNull && finalPayload.length) finalPayload = getUniqPayload(finalPayload.filter((entry) => entry.value != null && (entry.hide !== true || props.includeHidden)), payloadUniqBy, defaultUniqBy);
	var hasPayload = finalPayload.length > 0;
	var tooltipContentProps = _objectSpread$2(_objectSpread$2({}, props), {}, {
		payload: finalPayload,
		label: finalLabel,
		active: finalIsActive,
		activeIndex,
		coordinate,
		accessibilityLayer
	});
	var tooltipElement = /* @__PURE__ */ import_react.createElement(TooltipBoundingBox, {
		allowEscapeViewBox,
		animationDuration,
		animationEasing,
		isAnimationActive,
		active: finalIsActive,
		coordinate,
		hasPayload,
		offset,
		position,
		reverseDirection,
		useTranslate3d,
		viewBox,
		wrapperStyle,
		lastBoundingBox,
		innerRef: updateBoundingBox,
		hasPortalFromProps: Boolean(portalFromProps)
	}, renderContent(content, tooltipContentProps));
	return /* @__PURE__ */ import_react.createElement(import_react.Fragment, null, /* @__PURE__ */ (0, import_react_dom.createPortal)(tooltipElement, tooltipPortal), finalIsActive && /* @__PURE__ */ import_react.createElement(Cursor, {
		cursor,
		tooltipEventType,
		coordinate,
		payload: finalPayload,
		index: activeIndex
	}));
}
var _excluded$2 = ["domain", "range"], _excluded2$2 = ["domain", "range"];
function _objectWithoutProperties$2(e, t) {
	if (null == e) return {};
	var o, r, i = _objectWithoutPropertiesLoose$2(e, t);
	if (Object.getOwnPropertySymbols) {
		var n = Object.getOwnPropertySymbols(e);
		for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
	}
	return i;
}
function _objectWithoutPropertiesLoose$2(r, e) {
	if (null == r) return {};
	var t = {};
	for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
		if (-1 !== e.indexOf(n)) continue;
		t[n] = r[n];
	}
	return t;
}
function shortArraysAreEqual(arr1, arr2) {
	if (arr1 === arr2) return true;
	if (Array.isArray(arr1) && arr1.length === 2 && Array.isArray(arr2) && arr2.length === 2) return arr1[0] === arr2[0] && arr1[1] === arr2[1];
	return false;
}
/**
* Usually we would not compare array props deeply for performance consideration.
* However, for axis props, domain is sometimes defined as a two-elements array, and range is always
* a two-elements array. So we can do a shallow comparison for the rest props and a shallow
* comparison for these two array props.
* @param prevProps
* @param nextProps
*/
function axisPropsAreEqual(prevProps, nextProps) {
	if (prevProps === nextProps) return true;
	var { domain: prevDomain, range: prevRange } = prevProps, prevRest = _objectWithoutProperties$2(prevProps, _excluded$2);
	var { domain: nextDomain, range: nextRange } = nextProps, nextRest = _objectWithoutProperties$2(nextProps, _excluded2$2);
	if (!shortArraysAreEqual(prevDomain, nextDomain)) return false;
	if (!shortArraysAreEqual(prevRange, nextRange)) return false;
	return propsAreEqual(prevRest, nextRest);
}
/**
* @fileOverview X Axis
*/
var _excluded$1 = ["type"], _excluded2$1 = [
	"dangerouslySetInnerHTML",
	"ticks",
	"scale"
], _excluded3$1 = ["id", "scale"];
function _extends$1() {
	return _extends$1 = Object.assign ? Object.assign.bind() : function(n) {
		for (var e = 1; e < arguments.length; e++) {
			var t = arguments[e];
			for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
		}
		return n;
	}, _extends$1.apply(null, arguments);
}
function ownKeys$1(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r) {
			return Object.getOwnPropertyDescriptor(e, r).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread$1(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys$1(Object(t), !0).forEach(function(r) {
			_defineProperty$1(e, r, t[r]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function(r) {
			Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
		});
	}
	return e;
}
function _defineProperty$1(e, r, t) {
	return (r = _toPropertyKey$1(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}
function _toPropertyKey$1(t) {
	var i = _toPrimitive$1(t, "string");
	return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive$1(t, r) {
	if ("object" != typeof t || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != typeof i) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
function _objectWithoutProperties$1(e, t) {
	if (null == e) return {};
	var o, r, i = _objectWithoutPropertiesLoose$1(e, t);
	if (Object.getOwnPropertySymbols) {
		var n = Object.getOwnPropertySymbols(e);
		for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
	}
	return i;
}
function _objectWithoutPropertiesLoose$1(r, e) {
	if (null == r) return {};
	var t = {};
	for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
		if (-1 !== e.indexOf(n)) continue;
		t[n] = r[n];
	}
	return t;
}
function SetXAxisSettings(props) {
	var dispatch = useAppDispatch();
	var prevSettingsRef = (0, import_react.useRef)(null);
	var layout = useCartesianChartLayout();
	var { type: typeFromProps } = props, restProps = _objectWithoutProperties$1(props, _excluded$1);
	var evaluatedType = getAxisTypeBasedOnLayout(layout, "xAxis", typeFromProps);
	var settings = (0, import_react.useMemo)(() => {
		if (evaluatedType == null) return;
		return _objectSpread$1(_objectSpread$1({}, restProps), {}, { type: evaluatedType });
	}, [restProps, evaluatedType]);
	(0, import_react.useLayoutEffect)(() => {
		if (settings == null) return;
		if (prevSettingsRef.current === null) dispatch(addXAxis(settings));
		else if (prevSettingsRef.current !== settings) dispatch(replaceXAxis({
			prev: prevSettingsRef.current,
			next: settings
		}));
		prevSettingsRef.current = settings;
	}, [settings, dispatch]);
	(0, import_react.useLayoutEffect)(() => {
		return () => {
			if (prevSettingsRef.current) {
				dispatch(removeXAxis(prevSettingsRef.current));
				prevSettingsRef.current = null;
			}
		};
	}, [dispatch]);
	return null;
}
var XAxisImpl = (props) => {
	var { xAxisId, className } = props;
	var viewBox = useAppSelector(selectAxisViewBox);
	var isPanorama = useIsPanorama();
	var axisType = "xAxis";
	var cartesianTickItems = useAppSelector((state) => selectTicksOfAxis(state, axisType, xAxisId, isPanorama));
	var axisSize = useAppSelector((state) => selectXAxisSize(state, xAxisId));
	var position = useAppSelector((state) => selectXAxisPosition(state, xAxisId));
	var synchronizedSettings = useAppSelector((state) => selectXAxisSettingsNoDefaults(state, xAxisId));
	if (axisSize == null || position == null || synchronizedSettings == null) return null;
	var { dangerouslySetInnerHTML, ticks, scale: del } = props, allOtherProps = _objectWithoutProperties$1(props, _excluded2$1);
	var { id, scale: del2 } = synchronizedSettings, restSynchronizedSettings = _objectWithoutProperties$1(synchronizedSettings, _excluded3$1);
	return /* @__PURE__ */ import_react.createElement(CartesianAxis, _extends$1({}, allOtherProps, restSynchronizedSettings, {
		x: position.x,
		y: position.y,
		width: axisSize.width,
		height: axisSize.height,
		className: clsx("recharts-".concat(axisType, " ").concat(axisType), className),
		viewBox,
		ticks: cartesianTickItems,
		axisType,
		axisId: xAxisId
	}));
};
var xAxisDefaultProps = {
	allowDataOverflow: implicitXAxis.allowDataOverflow,
	allowDecimals: implicitXAxis.allowDecimals,
	allowDuplicatedCategory: implicitXAxis.allowDuplicatedCategory,
	angle: implicitXAxis.angle,
	axisLine: defaultCartesianAxisProps.axisLine,
	height: implicitXAxis.height,
	hide: false,
	includeHidden: implicitXAxis.includeHidden,
	interval: implicitXAxis.interval,
	label: false,
	minTickGap: implicitXAxis.minTickGap,
	mirror: implicitXAxis.mirror,
	orientation: implicitXAxis.orientation,
	padding: implicitXAxis.padding,
	reversed: implicitXAxis.reversed,
	scale: implicitXAxis.scale,
	tick: implicitXAxis.tick,
	tickCount: implicitXAxis.tickCount,
	tickLine: defaultCartesianAxisProps.tickLine,
	tickSize: defaultCartesianAxisProps.tickSize,
	type: implicitXAxis.type,
	niceTicks: implicitXAxis.niceTicks,
	xAxisId: 0
};
var XAxisSettingsDispatcher = (outsideProps) => {
	var props = resolveDefaultProps(outsideProps, xAxisDefaultProps);
	return /* @__PURE__ */ import_react.createElement(import_react.Fragment, null, /* @__PURE__ */ import_react.createElement(SetXAxisSettings, {
		allowDataOverflow: props.allowDataOverflow,
		allowDecimals: props.allowDecimals,
		allowDuplicatedCategory: props.allowDuplicatedCategory,
		angle: props.angle,
		dataKey: props.dataKey,
		domain: props.domain,
		height: props.height,
		hide: props.hide,
		id: props.xAxisId,
		includeHidden: props.includeHidden,
		interval: props.interval,
		minTickGap: props.minTickGap,
		mirror: props.mirror,
		name: props.name,
		orientation: props.orientation,
		padding: props.padding,
		reversed: props.reversed,
		scale: props.scale,
		tick: props.tick,
		tickCount: props.tickCount,
		tickFormatter: props.tickFormatter,
		ticks: props.ticks,
		type: props.type,
		unit: props.unit,
		niceTicks: props.niceTicks
	}), /* @__PURE__ */ import_react.createElement(XAxisImpl, props));
};
/**
* @consumes CartesianViewBoxContext
* @provides CartesianLabelContext
*/
var XAxis = /* @__PURE__ */ import_react.memo(XAxisSettingsDispatcher, axisPropsAreEqual);
XAxis.displayName = "XAxis";
var _excluded = ["type"], _excluded2 = [
	"dangerouslySetInnerHTML",
	"ticks",
	"scale"
], _excluded3 = ["id", "scale"];
function _extends() {
	return _extends = Object.assign ? Object.assign.bind() : function(n) {
		for (var e = 1; e < arguments.length; e++) {
			var t = arguments[e];
			for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
		}
		return n;
	}, _extends.apply(null, arguments);
}
function ownKeys(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r) {
			return Object.getOwnPropertyDescriptor(e, r).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
			_defineProperty(e, r, t[r]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
			Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
		});
	}
	return e;
}
function _defineProperty(e, r, t) {
	return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}
function _toPropertyKey(t) {
	var i = _toPrimitive(t, "string");
	return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive(t, r) {
	if ("object" != typeof t || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != typeof i) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
function _objectWithoutProperties(e, t) {
	if (null == e) return {};
	var o, r, i = _objectWithoutPropertiesLoose(e, t);
	if (Object.getOwnPropertySymbols) {
		var n = Object.getOwnPropertySymbols(e);
		for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
	}
	return i;
}
function _objectWithoutPropertiesLoose(r, e) {
	if (null == r) return {};
	var t = {};
	for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
		if (-1 !== e.indexOf(n)) continue;
		t[n] = r[n];
	}
	return t;
}
function SetYAxisSettings(props) {
	var dispatch = useAppDispatch();
	var prevSettingsRef = (0, import_react.useRef)(null);
	var layout = useCartesianChartLayout();
	var { type: typeFromProps } = props, restProps = _objectWithoutProperties(props, _excluded);
	var evaluatedType = getAxisTypeBasedOnLayout(layout, "yAxis", typeFromProps);
	var settings = (0, import_react.useMemo)(() => {
		if (evaluatedType == null) return;
		return _objectSpread(_objectSpread({}, restProps), {}, { type: evaluatedType });
	}, [evaluatedType, restProps]);
	(0, import_react.useLayoutEffect)(() => {
		if (settings == null) return;
		if (prevSettingsRef.current === null) dispatch(addYAxis(settings));
		else if (prevSettingsRef.current !== settings) dispatch(replaceYAxis({
			prev: prevSettingsRef.current,
			next: settings
		}));
		prevSettingsRef.current = settings;
	}, [settings, dispatch]);
	(0, import_react.useLayoutEffect)(() => {
		return () => {
			if (prevSettingsRef.current) {
				dispatch(removeYAxis(prevSettingsRef.current));
				prevSettingsRef.current = null;
			}
		};
	}, [dispatch]);
	return null;
}
function YAxisImpl(props) {
	var { yAxisId, className, width, label } = props;
	var cartesianAxisRef = (0, import_react.useRef)(null);
	var labelRef = (0, import_react.useRef)(null);
	var viewBox = useAppSelector(selectAxisViewBox);
	var isPanorama = useIsPanorama();
	var dispatch = useAppDispatch();
	var axisType = "yAxis";
	var axisSize = useAppSelector((state) => selectYAxisSize(state, yAxisId));
	var position = useAppSelector((state) => selectYAxisPosition(state, yAxisId));
	var cartesianTickItems = useAppSelector((state) => selectTicksOfAxis(state, axisType, yAxisId, isPanorama));
	var synchronizedSettings = useAppSelector((state) => selectYAxisSettingsNoDefaults(state, yAxisId));
	(0, import_react.useLayoutEffect)(() => {
		if (width !== "auto" || !axisSize || isLabelContentAFunction(label) || /* @__PURE__ */ (0, import_react.isValidElement)(label) || synchronizedSettings == null) return;
		var axisComponent = cartesianAxisRef.current;
		if (!axisComponent) return;
		var updatedYAxisWidth = axisComponent.getCalculatedWidth();
		if (Math.round(axisSize.width) !== Math.round(updatedYAxisWidth)) dispatch(updateYAxisWidth({
			id: yAxisId,
			width: updatedYAxisWidth
		}));
	}, [
		cartesianTickItems,
		axisSize,
		dispatch,
		label,
		yAxisId,
		width,
		synchronizedSettings
	]);
	if (axisSize == null || position == null || synchronizedSettings == null) return null;
	var { dangerouslySetInnerHTML, ticks, scale: del } = props, allOtherProps = _objectWithoutProperties(props, _excluded2);
	var { id, scale: del2 } = synchronizedSettings, restSynchronizedSettings = _objectWithoutProperties(synchronizedSettings, _excluded3);
	return /* @__PURE__ */ import_react.createElement(CartesianAxis, _extends({}, allOtherProps, restSynchronizedSettings, {
		ref: cartesianAxisRef,
		labelRef,
		x: position.x,
		y: position.y,
		tickTextProps: width === "auto" ? { width: void 0 } : { width },
		width: axisSize.width,
		height: axisSize.height,
		className: clsx("recharts-".concat(axisType, " ").concat(axisType), className),
		viewBox,
		ticks: cartesianTickItems,
		axisType,
		axisId: yAxisId
	}));
}
var yAxisDefaultProps = {
	allowDataOverflow: implicitYAxis.allowDataOverflow,
	allowDecimals: implicitYAxis.allowDecimals,
	allowDuplicatedCategory: implicitYAxis.allowDuplicatedCategory,
	angle: implicitYAxis.angle,
	axisLine: defaultCartesianAxisProps.axisLine,
	hide: false,
	includeHidden: implicitYAxis.includeHidden,
	interval: implicitYAxis.interval,
	label: false,
	minTickGap: implicitYAxis.minTickGap,
	mirror: implicitYAxis.mirror,
	orientation: implicitYAxis.orientation,
	padding: implicitYAxis.padding,
	reversed: implicitYAxis.reversed,
	scale: implicitYAxis.scale,
	tick: implicitYAxis.tick,
	tickCount: implicitYAxis.tickCount,
	tickLine: defaultCartesianAxisProps.tickLine,
	tickSize: defaultCartesianAxisProps.tickSize,
	type: implicitYAxis.type,
	niceTicks: implicitYAxis.niceTicks,
	width: implicitYAxis.width,
	yAxisId: 0
};
var YAxisSettingsDispatcher = (outsideProps) => {
	var props = resolveDefaultProps(outsideProps, yAxisDefaultProps);
	return /* @__PURE__ */ import_react.createElement(import_react.Fragment, null, /* @__PURE__ */ import_react.createElement(SetYAxisSettings, {
		interval: props.interval,
		id: props.yAxisId,
		scale: props.scale,
		type: props.type,
		domain: props.domain,
		allowDataOverflow: props.allowDataOverflow,
		dataKey: props.dataKey,
		allowDuplicatedCategory: props.allowDuplicatedCategory,
		allowDecimals: props.allowDecimals,
		tickCount: props.tickCount,
		padding: props.padding,
		includeHidden: props.includeHidden,
		reversed: props.reversed,
		ticks: props.ticks,
		width: props.width,
		orientation: props.orientation,
		mirror: props.mirror,
		hide: props.hide,
		unit: props.unit,
		name: props.name,
		angle: props.angle,
		minTickGap: props.minTickGap,
		tick: props.tick,
		tickFormatter: props.tickFormatter,
		niceTicks: props.niceTicks
	}), /* @__PURE__ */ import_react.createElement(YAxisImpl, props));
};
/**
* @consumes CartesianViewBoxContext
* @provides CartesianLabelContext
*/
var YAxis = /* @__PURE__ */ import_react.memo(YAxisSettingsDispatcher, axisPropsAreEqual);
YAxis.displayName = "YAxis";
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var mergeClasses = (...classes) => classes.filter((className, index, array) => {
	return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var toCamelCase = (string) => string.replace(/^([A-Z])|[\s-_]+(\w)/g, (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase());
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var toPascalCase = (string) => {
	const camelCase = toCamelCase(string);
	return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var defaultAttributes = {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: 2,
	strokeLinecap: "round",
	strokeLinejoin: "round"
};
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var hasA11yProp = (props) => {
	for (const prop in props) if (prop.startsWith("aria-") || prop === "role" || prop === "title") return true;
	return false;
};
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var LucideContext = (0, import_react.createContext)({});
var useLucideContext = () => (0, import_react.useContext)(LucideContext);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Icon = (0, import_react.forwardRef)(({ color, size, strokeWidth, absoluteStrokeWidth, className = "", children, iconNode, ...rest }, ref) => {
	const { size: contextSize = 24, strokeWidth: contextStrokeWidth = 2, absoluteStrokeWidth: contextAbsoluteStrokeWidth = false, color: contextColor = "currentColor", className: contextClass = "" } = useLucideContext() ?? {};
	const calculatedStrokeWidth = absoluteStrokeWidth ?? contextAbsoluteStrokeWidth ? Number(strokeWidth ?? contextStrokeWidth) * 24 / Number(size ?? contextSize) : strokeWidth ?? contextStrokeWidth;
	return (0, import_react.createElement)("svg", {
		ref,
		...defaultAttributes,
		width: size ?? contextSize ?? defaultAttributes.width,
		height: size ?? contextSize ?? defaultAttributes.height,
		stroke: color ?? contextColor,
		strokeWidth: calculatedStrokeWidth,
		className: mergeClasses("lucide", contextClass, className),
		...!children && !hasA11yProp(rest) && { "aria-hidden": "true" },
		...rest
	}, [...iconNode.map(([tag, attrs]) => (0, import_react.createElement)(tag, attrs)), ...Array.isArray(children) ? children : [children]]);
});
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var createLucideIcon = (iconName, iconNode) => {
	const Component = (0, import_react.forwardRef)(({ className, ...props }, ref) => (0, import_react.createElement)(Icon, {
		ref,
		iconNode,
		className: mergeClasses(`lucide-${toKebabCase(toPascalCase(iconName))}`, `lucide-${iconName}`, className),
		...props
	}));
	Component.displayName = toPascalCase(iconName);
	return Component;
};
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Activity = createLucideIcon("activity", [["path", {
	d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
	key: "169zse"
}]]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ArrowRight = createLucideIcon("arrow-right", [["path", {
	d: "M5 12h14",
	key: "1ays0h"
}], ["path", {
	d: "m12 5 7 7-7 7",
	key: "xquz4c"
}]]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Bot = createLucideIcon("bot", [
	["path", {
		d: "M12 8V4H8",
		key: "hb8ula"
	}],
	["rect", {
		width: "16",
		height: "12",
		x: "4",
		y: "8",
		rx: "2",
		key: "enze0r"
	}],
	["path", {
		d: "M2 14h2",
		key: "vft8re"
	}],
	["path", {
		d: "M20 14h2",
		key: "4cs60a"
	}],
	["path", {
		d: "M15 13v2",
		key: "1xurst"
	}],
	["path", {
		d: "M9 13v2",
		key: "rq6x2g"
	}]
]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var CircleCheck = createLucideIcon("circle-check", [["circle", {
	cx: "12",
	cy: "12",
	r: "10",
	key: "1mglay"
}], ["path", {
	d: "m9 12 2 2 4-4",
	key: "dzmm74"
}]]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ChevronRight = createLucideIcon("chevron-right", [["path", {
	d: "m9 18 6-6-6-6",
	key: "mthhwq"
}]]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var CircleDollarSign = createLucideIcon("circle-dollar-sign", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}],
	["path", {
		d: "M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8",
		key: "1h4pet"
	}],
	["path", {
		d: "M12 18V6",
		key: "zqpxq5"
	}]
]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Clock3 = createLucideIcon("clock-3", [["circle", {
	cx: "12",
	cy: "12",
	r: "10",
	key: "1mglay"
}], ["path", {
	d: "M12 6v6h4",
	key: "135r8i"
}]]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var FileCheckCorner = createLucideIcon("file-check-corner", [
	["path", {
		d: "M10.5 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v6",
		key: "g5mvt7"
	}],
	["path", {
		d: "M14 2v5a1 1 0 0 0 1 1h5",
		key: "wfsgrz"
	}],
	["path", {
		d: "m14 20 2 2 4-4",
		key: "15kota"
	}]
]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var FileDown = createLucideIcon("file-down", [
	["path", {
		d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
		key: "1oefj6"
	}],
	["path", {
		d: "M14 2v5a1 1 0 0 0 1 1h5",
		key: "wfsgrz"
	}],
	["path", {
		d: "M12 18v-6",
		key: "17g6i2"
	}],
	["path", {
		d: "m9 15 3 3 3-3",
		key: "1npd3o"
	}]
]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Gauge = createLucideIcon("gauge", [["path", {
	d: "m12 14 4-4",
	key: "9kzdfg"
}], ["path", {
	d: "M3.34 19a10 10 0 1 1 17.32 0",
	key: "19p75a"
}]]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var LogOut = createLucideIcon("log-out", [
	["path", {
		d: "m16 17 5-5-5-5",
		key: "1bji2h"
	}],
	["path", {
		d: "M21 12H9",
		key: "dn1m92"
	}],
	["path", {
		d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",
		key: "1uf3rs"
	}]
]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Menu = createLucideIcon("menu", [
	["path", {
		d: "M4 5h16",
		key: "1tepv9"
	}],
	["path", {
		d: "M4 12h16",
		key: "1lakjw"
	}],
	["path", {
		d: "M4 19h16",
		key: "1djgab"
	}]
]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ExternalLink = createLucideIcon("external-link", [
	["path", {
		d: "M15 3h6v6",
		key: "1q9fwt"
	}],
	["path", {
		d: "M10 14 21 3",
		key: "gplh6r"
	}],
	["path", {
		d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
		key: "a6xqqp"
	}]
]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Play = createLucideIcon("play", [["path", {
	d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
	key: "10ikf1"
}]]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var RefreshCw = createLucideIcon("refresh-cw", [
	["path", {
		d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",
		key: "v9h5vc"
	}],
	["path", {
		d: "M21 3v5h-5",
		key: "1q7to0"
	}],
	["path", {
		d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",
		key: "3uifl3"
	}],
	["path", {
		d: "M8 16H3v5",
		key: "1cv678"
	}]
]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Search = createLucideIcon("search", [["path", {
	d: "m21 21-4.34-4.34",
	key: "14j7rj"
}], ["circle", {
	cx: "11",
	cy: "11",
	r: "8",
	key: "4ej97u"
}]]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ShieldCheck = createLucideIcon("shield-check", [["path", {
	d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
	key: "oel41y"
}], ["path", {
	d: "m9 12 2 2 4-4",
	key: "dzmm74"
}]]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var TriangleAlert = createLucideIcon("triangle-alert", [
	["path", {
		d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
		key: "wmoenq"
	}],
	["path", {
		d: "M12 9v4",
		key: "juzpu7"
	}],
	["path", {
		d: "M12 17h.01",
		key: "p32p05"
	}]
]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var WalletCards = createLucideIcon("wallet-cards", [
	["path", {
		d: "M3 11h3.75a2 2 0 0 1 1.6.8l.45.6a4 4 0 0 0 6.4 0l.45-.6a2 2 0 0 1 1.6-.8H21",
		key: "1vwh6y"
	}],
	["path", {
		d: "M3 7h18",
		key: "1uiuf2"
	}],
	["rect", {
		x: "3",
		y: "3",
		width: "18",
		height: "18",
		rx: "2",
		key: "h1oib"
	}]
]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var X = createLucideIcon("x", [["path", {
	d: "M18 6 6 18",
	key: "1bl5f8"
}], ["path", {
	d: "m6 6 12 12",
	key: "d8bk6v"
}]]);
var __defProp$32 = Object.defineProperty;
var __name$32 = (target, value) => __defProp$32(target, "name", {
	value,
	configurable: true
});
function setRef$9(ref, value) {
	if (typeof ref === "function") return ref(value);
	else if (ref !== null && ref !== void 0) ref.current = value;
}
__name$32(setRef$9, "setRef");
function composeRefs$8(...refs) {
	return (node) => {
		let hasCleanup = false;
		const cleanups = refs.map((ref) => {
			const cleanup = setRef$9(ref, node);
			if (!hasCleanup && typeof cleanup == "function") hasCleanup = true;
			return cleanup;
		});
		if (hasCleanup) return () => {
			for (let i = 0; i < cleanups.length; i++) {
				const cleanup = cleanups[i];
				if (typeof cleanup == "function") cleanup();
				else setRef$9(refs[i], null);
			}
		};
	};
}
__name$32(composeRefs$8, "composeRefs");
function useComposedRefs$8(...refs) {
	return import_react.useCallback(composeRefs$8(...refs), refs);
}
__name$32(useComposedRefs$8, "useComposedRefs");
var __defProp$31 = Object.defineProperty;
var __name$31 = (target, value) => __defProp$31(target, "name", {
	value,
	configurable: true
});
/* @__NO_SIDE_EFFECTS__ */
function createSlot$3(ownerName) {
	const Slot2 = import_react.forwardRef((props, forwardedRef) => {
		let { children, ...slotProps } = props;
		let slottableElement = null;
		let hasSlottable = false;
		const newChildren = [];
		if (isLazyComponent$3(children) && typeof use$3 === "function") children = use$3(children._payload);
		import_react.Children.forEach(children, (maybeSlottable) => {
			if (isSlottable$3(maybeSlottable)) {
				hasSlottable = true;
				const slottable = maybeSlottable;
				let child = "child" in slottable.props ? slottable.props.child : slottable.props.children;
				if (isLazyComponent$3(child) && typeof use$3 === "function") child = use$3(child._payload);
				slottableElement = getSlottableElementFromSlottable$3(slottable, child);
				newChildren.push(slottableElement?.props?.children);
			} else newChildren.push(maybeSlottable);
		});
		if (slottableElement) slottableElement = import_react.cloneElement(slottableElement, void 0, newChildren);
		else if (!hasSlottable && import_react.Children.count(children) === 1 && import_react.isValidElement(children)) slottableElement = children;
		const slottableElementRef = slottableElement ? getElementRef$4(slottableElement) : void 0;
		const composedRef = useComposedRefs$8(forwardedRef, slottableElementRef);
		if (!slottableElement) {
			if (children || children === 0) throw new Error(hasSlottable ? createSlottableError$3(ownerName) : createSlotError$3(ownerName));
			return children;
		}
		const mergedProps = mergeProps$3(slotProps, slottableElement.props ?? {});
		if (slottableElement.type !== import_react.Fragment) mergedProps.ref = forwardedRef ? composedRef : slottableElementRef;
		return import_react.cloneElement(slottableElement, mergedProps);
	});
	Slot2.displayName = `${ownerName}.Slot`;
	return Slot2;
}
__name$31(createSlot$3, "createSlot");
var Slot$1 = /* @__PURE__ */ createSlot$3("Slot");
var SLOTTABLE_IDENTIFIER$3 = Symbol.for("radix.slottable");
/* @__NO_SIDE_EFFECTS__ */
function createSlottable$3(ownerName) {
	const Slottable2 = /* @__PURE__ */ __name$31((props) => "child" in props ? props.children(props.child) : props.children, "Slottable");
	Slottable2.displayName = `${ownerName}.Slottable`;
	Slottable2.__radixId = SLOTTABLE_IDENTIFIER$3;
	return Slottable2;
}
__name$31(createSlottable$3, "createSlottable");
var getSlottableElementFromSlottable$3 = /* @__PURE__ */ __name$31((slottable, child) => {
	if ("child" in slottable.props) {
		const child2 = slottable.props.child;
		if (!import_react.isValidElement(child2)) return null;
		return import_react.cloneElement(child2, void 0, slottable.props.children(child2.props.children));
	}
	return import_react.isValidElement(child) ? child : null;
}, "getSlottableElementFromSlottable");
function mergeProps$3(slotProps, childProps) {
	const overrideProps = { ...childProps };
	for (const propName in childProps) {
		const slotPropValue = slotProps[propName];
		const childPropValue = childProps[propName];
		if (/^on[A-Z]/.test(propName)) {
			if (slotPropValue && childPropValue) overrideProps[propName] = (...args) => {
				const result = childPropValue(...args);
				slotPropValue(...args);
				return result;
			};
			else if (slotPropValue) overrideProps[propName] = slotPropValue;
		} else if (propName === "style") overrideProps[propName] = {
			...slotPropValue,
			...childPropValue
		};
		else if (propName === "className") overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(" ");
	}
	return {
		...slotProps,
		...overrideProps
	};
}
__name$31(mergeProps$3, "mergeProps");
function getElementRef$4(element) {
	let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
	let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
	if (mayWarn) return element.ref;
	getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
	mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
	if (mayWarn) return element.props.ref;
	return element.props.ref || element.ref;
}
__name$31(getElementRef$4, "getElementRef");
function isSlottable$3(child) {
	return import_react.isValidElement(child) && typeof child.type === "function" && "__radixId" in child.type && child.type.__radixId === SLOTTABLE_IDENTIFIER$3;
}
__name$31(isSlottable$3, "isSlottable");
var REACT_LAZY_TYPE$3 = Symbol.for("react.lazy");
function isLazyComponent$3(element) {
	return element != null && typeof element === "object" && "$$typeof" in element && element.$$typeof === REACT_LAZY_TYPE$3 && "_payload" in element && isPromiseLike$3(element._payload);
}
__name$31(isLazyComponent$3, "isLazyComponent");
function isPromiseLike$3(value) {
	return typeof value === "object" && value !== null && "then" in value;
}
__name$31(isPromiseLike$3, "isPromiseLike");
var createSlotError$3 = /* @__PURE__ */ __name$31((ownerName) => {
	return `${ownerName} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`;
}, "createSlotError");
var createSlottableError$3 = /* @__PURE__ */ __name$31((ownerName) => {
	return `${ownerName} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`;
}, "createSlottableError");
var use$3 = import_react[" use ".trim().toString()];
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var import_jsx_runtime = require_jsx_runtime();
var buttonVariants = cva("inline-flex shrink-0 items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground hover:bg-primary/90",
			destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:bg-destructive/60 dark:focus-visible:ring-destructive/40",
			outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
			secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2 has-[>svg]:px-3",
			xs: "h-6 gap-1 rounded-md px-2 text-xs has-[>svg]:px-1.5 [&_svg:not([class*='size-'])]:size-3",
			sm: "h-8 gap-1.5 rounded-md px-3 has-[>svg]:px-2.5",
			lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
			icon: "size-9",
			"icon-xs": "size-6 rounded-md [&_svg:not([class*='size-'])]:size-3",
			"icon-sm": "size-8",
			"icon-lg": "size-10"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function Button({ className, variant = "default", size = "default", asChild = false, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot$1 : "button", {
		"data-slot": "button",
		"data-variant": variant,
		"data-size": size,
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		...props
	});
}
var __defProp$30 = Object.defineProperty;
var __name$30 = (target, value) => __defProp$30(target, "name", {
	value,
	configurable: true
});
/* @__NO_SIDE_EFFECTS__ */
function createContext2(rootComponentName, defaultContext) {
	const Context = import_react.createContext(defaultContext);
	Context.displayName = rootComponentName + "Context";
	const Provider = /* @__PURE__ */ __name$30((props) => {
		const { children, ...context } = props;
		const value = import_react.useMemo(() => context, Object.values(context));
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Context.Provider, {
			value,
			children
		});
	}, "Provider");
	Provider.displayName = rootComponentName + "Provider";
	function useContext2(consumerName, options = {}) {
		const { optional = false } = options;
		const context = import_react.useContext(Context);
		if (context) return context;
		if (defaultContext !== void 0) return defaultContext;
		if (optional) return void 0;
		throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
	}
	__name$30(useContext2, "useContext");
	return [Provider, useContext2];
}
__name$30(createContext2, "createContext");
/* @__NO_SIDE_EFFECTS__ */
function createContextScope(scopeName, createContextScopeDeps = []) {
	let defaultContexts = [];
	function createContext3(rootComponentName, defaultContext) {
		const BaseContext = import_react.createContext(defaultContext);
		BaseContext.displayName = rootComponentName + "Context";
		const index = defaultContexts.length;
		defaultContexts = [...defaultContexts, defaultContext];
		const Provider = /* @__PURE__ */ __name$30((props) => {
			const { scope, children, ...context } = props;
			const Context = scope?.[scopeName]?.[index] || BaseContext;
			const value = import_react.useMemo(() => context, Object.values(context));
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Context.Provider, {
				value,
				children
			});
		}, "Provider");
		Provider.displayName = rootComponentName + "Provider";
		function useContext2(consumerName, scope, options = {}) {
			const { optional = false } = options;
			const Context = scope?.[scopeName]?.[index] || BaseContext;
			const context = import_react.useContext(Context);
			if (context) return context;
			if (defaultContext !== void 0) return defaultContext;
			if (optional) return void 0;
			throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
		}
		__name$30(useContext2, "useContext");
		return [Provider, useContext2];
	}
	__name$30(createContext3, "createContext");
	const createScope = /* @__PURE__ */ __name$30(() => {
		const scopeContexts = defaultContexts.map((defaultContext) => {
			return import_react.createContext(defaultContext);
		});
		return /* @__PURE__ */ __name$30(function useScope(scope) {
			const contexts = scope?.[scopeName] || scopeContexts;
			return import_react.useMemo(() => ({ [`__scope${scopeName}`]: {
				...scope,
				[scopeName]: contexts
			} }), [scope, contexts]);
		}, "useScope");
	}, "createScope");
	createScope.scopeName = scopeName;
	return [createContext3, composeContextScopes(createScope, ...createContextScopeDeps)];
}
__name$30(createContextScope, "createContextScope");
function composeContextScopes(...scopes) {
	const baseScope = scopes[0];
	if (scopes.length === 1) return baseScope;
	const createScope = /* @__PURE__ */ __name$30(() => {
		const scopeHooks = scopes.map((createScope2) => ({
			useScope: createScope2(),
			scopeName: createScope2.scopeName
		}));
		return /* @__PURE__ */ __name$30(function useComposedScopes(overrideScopes) {
			const nextScopes = scopeHooks.reduce((nextScopes2, { useScope, scopeName }) => {
				const currentScope = useScope(overrideScopes)[`__scope${scopeName}`];
				return {
					...nextScopes2,
					...currentScope
				};
			}, {});
			return import_react.useMemo(() => ({ [`__scope${baseScope.scopeName}`]: nextScopes }), [nextScopes]);
		}, "useComposedScopes");
	}, "createScope");
	createScope.scopeName = baseScope.scopeName;
	return createScope;
}
__name$30(composeContextScopes, "composeContextScopes");
var __defProp$29 = Object.defineProperty;
var __name$29 = (target, value) => __defProp$29(target, "name", {
	value,
	configurable: true
});
function setRef$8(ref, value) {
	if (typeof ref === "function") return ref(value);
	else if (ref !== null && ref !== void 0) ref.current = value;
}
__name$29(setRef$8, "setRef");
function composeRefs$7(...refs) {
	return (node) => {
		let hasCleanup = false;
		const cleanups = refs.map((ref) => {
			const cleanup = setRef$8(ref, node);
			if (!hasCleanup && typeof cleanup == "function") hasCleanup = true;
			return cleanup;
		});
		if (hasCleanup) return () => {
			for (let i = 0; i < cleanups.length; i++) {
				const cleanup = cleanups[i];
				if (typeof cleanup == "function") cleanup();
				else setRef$8(refs[i], null);
			}
		};
	};
}
__name$29(composeRefs$7, "composeRefs");
function useComposedRefs$7(...refs) {
	return import_react.useCallback(composeRefs$7(...refs), refs);
}
__name$29(useComposedRefs$7, "useComposedRefs");
var __defProp$28 = Object.defineProperty;
var __name$28 = (target, value) => __defProp$28(target, "name", {
	value,
	configurable: true
});
/* @__NO_SIDE_EFFECTS__ */
function createSlot$2(ownerName) {
	const Slot2 = import_react.forwardRef((props, forwardedRef) => {
		let { children, ...slotProps } = props;
		let slottableElement = null;
		let hasSlottable = false;
		const newChildren = [];
		if (isLazyComponent$2(children) && typeof use$2 === "function") children = use$2(children._payload);
		import_react.Children.forEach(children, (maybeSlottable) => {
			if (isSlottable$2(maybeSlottable)) {
				hasSlottable = true;
				const slottable = maybeSlottable;
				let child = "child" in slottable.props ? slottable.props.child : slottable.props.children;
				if (isLazyComponent$2(child) && typeof use$2 === "function") child = use$2(child._payload);
				slottableElement = getSlottableElementFromSlottable$2(slottable, child);
				newChildren.push(slottableElement?.props?.children);
			} else newChildren.push(maybeSlottable);
		});
		if (slottableElement) slottableElement = import_react.cloneElement(slottableElement, void 0, newChildren);
		else if (!hasSlottable && import_react.Children.count(children) === 1 && import_react.isValidElement(children)) slottableElement = children;
		const slottableElementRef = slottableElement ? getElementRef$3(slottableElement) : void 0;
		const composedRef = useComposedRefs$7(forwardedRef, slottableElementRef);
		if (!slottableElement) {
			if (children || children === 0) throw new Error(hasSlottable ? createSlottableError$2(ownerName) : createSlotError$2(ownerName));
			return children;
		}
		const mergedProps = mergeProps$2(slotProps, slottableElement.props ?? {});
		if (slottableElement.type !== import_react.Fragment) mergedProps.ref = forwardedRef ? composedRef : slottableElementRef;
		return import_react.cloneElement(slottableElement, mergedProps);
	});
	Slot2.displayName = `${ownerName}.Slot`;
	return Slot2;
}
__name$28(createSlot$2, "createSlot");
var SLOTTABLE_IDENTIFIER$2 = Symbol.for("radix.slottable");
/* @__NO_SIDE_EFFECTS__ */
function createSlottable$2(ownerName) {
	const Slottable2 = /* @__PURE__ */ __name$28((props) => "child" in props ? props.children(props.child) : props.children, "Slottable");
	Slottable2.displayName = `${ownerName}.Slottable`;
	Slottable2.__radixId = SLOTTABLE_IDENTIFIER$2;
	return Slottable2;
}
__name$28(createSlottable$2, "createSlottable");
var getSlottableElementFromSlottable$2 = /* @__PURE__ */ __name$28((slottable, child) => {
	if ("child" in slottable.props) {
		const child2 = slottable.props.child;
		if (!import_react.isValidElement(child2)) return null;
		return import_react.cloneElement(child2, void 0, slottable.props.children(child2.props.children));
	}
	return import_react.isValidElement(child) ? child : null;
}, "getSlottableElementFromSlottable");
function mergeProps$2(slotProps, childProps) {
	const overrideProps = { ...childProps };
	for (const propName in childProps) {
		const slotPropValue = slotProps[propName];
		const childPropValue = childProps[propName];
		if (/^on[A-Z]/.test(propName)) {
			if (slotPropValue && childPropValue) overrideProps[propName] = (...args) => {
				const result = childPropValue(...args);
				slotPropValue(...args);
				return result;
			};
			else if (slotPropValue) overrideProps[propName] = slotPropValue;
		} else if (propName === "style") overrideProps[propName] = {
			...slotPropValue,
			...childPropValue
		};
		else if (propName === "className") overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(" ");
	}
	return {
		...slotProps,
		...overrideProps
	};
}
__name$28(mergeProps$2, "mergeProps");
function getElementRef$3(element) {
	let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
	let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
	if (mayWarn) return element.ref;
	getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
	mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
	if (mayWarn) return element.props.ref;
	return element.props.ref || element.ref;
}
__name$28(getElementRef$3, "getElementRef");
function isSlottable$2(child) {
	return import_react.isValidElement(child) && typeof child.type === "function" && "__radixId" in child.type && child.type.__radixId === SLOTTABLE_IDENTIFIER$2;
}
__name$28(isSlottable$2, "isSlottable");
var REACT_LAZY_TYPE$2 = Symbol.for("react.lazy");
function isLazyComponent$2(element) {
	return element != null && typeof element === "object" && "$$typeof" in element && element.$$typeof === REACT_LAZY_TYPE$2 && "_payload" in element && isPromiseLike$2(element._payload);
}
__name$28(isLazyComponent$2, "isLazyComponent");
function isPromiseLike$2(value) {
	return typeof value === "object" && value !== null && "then" in value;
}
__name$28(isPromiseLike$2, "isPromiseLike");
var createSlotError$2 = /* @__PURE__ */ __name$28((ownerName) => {
	return `${ownerName} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`;
}, "createSlotError");
var createSlottableError$2 = /* @__PURE__ */ __name$28((ownerName) => {
	return `${ownerName} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`;
}, "createSlottableError");
var use$2 = import_react[" use ".trim().toString()];
var __defProp$27 = Object.defineProperty;
var __name$27 = (target, value) => __defProp$27(target, "name", {
	value,
	configurable: true
});
var Primitive = [
	"a",
	"button",
	"div",
	"form",
	"h2",
	"h3",
	"img",
	"input",
	"label",
	"li",
	"nav",
	"ol",
	"p",
	"select",
	"span",
	"svg",
	"ul"
].reduce((primitive, node) => {
	const Slot = /* @__PURE__ */ createSlot$2(`Primitive.${node}`);
	const Node = import_react.forwardRef((props, forwardedRef) => {
		const { asChild, ...primitiveProps } = props;
		const Comp = asChild ? Slot : node;
		if (typeof window !== "undefined") window[Symbol.for("radix-ui")] = true;
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Comp, {
			...primitiveProps,
			ref: forwardedRef
		});
	});
	Node.displayName = `Primitive.${node}`;
	return {
		...primitive,
		[node]: Node
	};
}, {});
function dispatchDiscreteCustomEvent(target, event) {
	if (target) import_react_dom.flushSync(() => target.dispatchEvent(event));
}
__name$27(dispatchDiscreteCustomEvent, "dispatchDiscreteCustomEvent");
var __defProp$26 = Object.defineProperty;
var __name$26 = (target, value) => __defProp$26(target, "name", {
	value,
	configurable: true
});
var PROGRESS_NAME = "Progress";
var DEFAULT_MAX = 100;
var [createProgressContext, createProgressScope] = /* @__PURE__ */ createContextScope(PROGRESS_NAME);
var [ProgressProvider, useProgressContext] = createProgressContext(PROGRESS_NAME);
var Progress$1 = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$26(function Progress2(props, forwardedRef) {
	const { __scopeProgress, value: valueProp = null, max: maxProp, getValueLabel = defaultGetValueLabel, ...progressProps } = props;
	if ((maxProp || maxProp === 0) && !isValidMaxNumber(maxProp)) console.error(getInvalidMaxError(`${maxProp}`, "Progress"));
	const max = isValidMaxNumber(maxProp) ? maxProp : DEFAULT_MAX;
	if (valueProp !== null && !isValidValueNumber(valueProp, max)) console.error(getInvalidValueError(`${valueProp}`, "Progress"));
	const value = isValidValueNumber(valueProp, max) ? valueProp : null;
	const valueLabel = isNumber(value) ? getValueLabel(value, max) : void 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgressProvider, {
		scope: __scopeProgress,
		value,
		max,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
			"aria-valuemax": max,
			"aria-valuemin": 0,
			"aria-valuenow": isNumber(value) ? value : void 0,
			"aria-valuetext": valueLabel,
			role: "progressbar",
			"data-state": getProgressState(value, max),
			"data-value": value ?? void 0,
			"data-max": max,
			...progressProps,
			ref: forwardedRef
		})
	});
}, "Progress"));
var INDICATOR_NAME$1 = "ProgressIndicator";
var ProgressIndicator = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$26(function ProgressIndicator2(props, forwardedRef) {
	const { __scopeProgress, ...indicatorProps } = props;
	const context = useProgressContext(INDICATOR_NAME$1, __scopeProgress);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
		"data-state": getProgressState(context.value, context.max),
		"data-value": context.value ?? void 0,
		"data-max": context.max,
		...indicatorProps,
		ref: forwardedRef
	});
}, "ProgressIndicator"));
function defaultGetValueLabel(value, max) {
	return `${Math.round(value / max * 100)}%`;
}
__name$26(defaultGetValueLabel, "defaultGetValueLabel");
function getProgressState(value, maxValue) {
	return value == null ? "indeterminate" : value === maxValue ? "complete" : "loading";
}
__name$26(getProgressState, "getProgressState");
function isNumber(value) {
	return typeof value === "number";
}
__name$26(isNumber, "isNumber");
function isValidMaxNumber(max) {
	return isNumber(max) && !isNaN(max) && max > 0;
}
__name$26(isValidMaxNumber, "isValidMaxNumber");
function isValidValueNumber(value, max) {
	return isNumber(value) && !isNaN(value) && value <= max && value >= 0;
}
__name$26(isValidValueNumber, "isValidValueNumber");
function getInvalidMaxError(propValue, componentName) {
	return `Invalid prop \`max\` of value \`${propValue}\` supplied to \`${componentName}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${DEFAULT_MAX}\`.`;
}
__name$26(getInvalidMaxError, "getInvalidMaxError");
function getInvalidValueError(propValue, componentName) {
	return `Invalid prop \`value\` of value \`${propValue}\` supplied to \`${componentName}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${DEFAULT_MAX} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
__name$26(getInvalidValueError, "getInvalidValueError");
var Root = Progress$1;
var Indicator = ProgressIndicator;
function Progress({ className, value, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
		"data-slot": "progress",
		value,
		className: cn("relative h-2 w-full overflow-hidden rounded-full bg-primary/20", className),
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Indicator, {
			"data-slot": "progress-indicator",
			className: "h-full w-full flex-1 bg-primary transition-all",
			style: { transform: `translateX(-${100 - (value ?? 0)}%)` }
		})
	});
}
function Table({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"data-slot": "table-container",
		className: "relative w-full overflow-x-auto",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("table", {
			"data-slot": "table",
			className: cn("w-full caption-bottom text-sm", className),
			...props
		})
	});
}
function TableHeader({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
		"data-slot": "table-header",
		className: cn("[&_tr]:border-b", className),
		...props
	});
}
function TableBody({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
		"data-slot": "table-body",
		className: cn("[&_tr:last-child]:border-0", className),
		...props
	});
}
function TableRow({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", {
		"data-slot": "table-row",
		className: cn("border-b transition-colors hover:bg-muted/50 has-aria-expanded:bg-muted/50 data-[state=selected]:bg-muted", className),
		...props
	});
}
function TableHead({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
		"data-slot": "table-head",
		className: cn("h-10 px-2 text-left align-middle font-medium whitespace-nowrap text-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", className),
		...props
	});
}
function TableCell({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
		"data-slot": "table-cell",
		className: cn("p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", className),
		...props
	});
}
var __defProp$25 = Object.defineProperty;
var __name$25 = (target, value) => __defProp$25(target, "name", {
	value,
	configurable: true
});
function setRef$7(ref, value) {
	if (typeof ref === "function") return ref(value);
	else if (ref !== null && ref !== void 0) ref.current = value;
}
__name$25(setRef$7, "setRef");
function composeRefs$6(...refs) {
	return (node) => {
		let hasCleanup = false;
		const cleanups = refs.map((ref) => {
			const cleanup = setRef$7(ref, node);
			if (!hasCleanup && typeof cleanup == "function") hasCleanup = true;
			return cleanup;
		});
		if (hasCleanup) return () => {
			for (let i = 0; i < cleanups.length; i++) {
				const cleanup = cleanups[i];
				if (typeof cleanup == "function") cleanup();
				else setRef$7(refs[i], null);
			}
		};
	};
}
__name$25(composeRefs$6, "composeRefs");
function useComposedRefs$6(...refs) {
	return import_react.useCallback(composeRefs$6(...refs), refs);
}
__name$25(useComposedRefs$6, "useComposedRefs");
var useLayoutEffect2 = globalThis?.document ? import_react.useLayoutEffect : () => {};
var __defProp$24 = Object.defineProperty;
var __name$24 = (target, value) => __defProp$24(target, "name", {
	value,
	configurable: true
});
var useReactId = import_react[" useId ".trim().toString()] || (() => void 0);
var count$1 = 0;
function useId(deterministicId) {
	const [id, setId] = import_react.useState(useReactId());
	useLayoutEffect2(() => {
		if (!deterministicId) setId((reactId) => reactId ?? String(count$1++));
	}, [deterministicId]);
	return deterministicId || (id ? `radix-${id}` : "");
}
__name$24(useId, "useId");
var __defProp$23 = Object.defineProperty;
var __name$23 = (target, value) => __defProp$23(target, "name", {
	value,
	configurable: true
});
var useReactEffectEvent = import_react[" useEffectEvent ".trim().toString()];
var useReactInsertionEffect = import_react[" useInsertionEffect ".trim().toString()];
function useEffectEvent(callback) {
	if (typeof useReactEffectEvent === "function") return useReactEffectEvent(callback);
	const ref = import_react.useRef(() => {
		throw new Error("Cannot call an event handler while rendering.");
	});
	if (typeof useReactInsertionEffect === "function") useReactInsertionEffect(() => {
		ref.current = callback;
	});
	else useLayoutEffect2(() => {
		ref.current = callback;
	});
	return import_react.useMemo(() => ((...args) => ref.current?.(...args)), []);
}
__name$23(useEffectEvent, "useEffectEvent");
var __defProp$22 = Object.defineProperty;
var __name$22 = (target, value) => __defProp$22(target, "name", {
	value,
	configurable: true
});
var useInsertionEffect = import_react[" useInsertionEffect ".trim().toString()] || useLayoutEffect2;
function useControllableState({ prop, defaultProp, onChange = /* @__PURE__ */ __name$22(() => {}, "onChange"), caller }) {
	const [uncontrolledProp, setUncontrolledProp, onChangeRef] = useUncontrolledState({
		defaultProp,
		onChange
	});
	const isControlled = prop !== void 0;
	return [isControlled ? prop : uncontrolledProp, import_react.useCallback((nextValue) => {
		if (isControlled) {
			const value2 = isFunction$3(nextValue) ? nextValue(prop) : nextValue;
			if (value2 !== prop) onChangeRef.current?.(value2);
		} else setUncontrolledProp(nextValue);
	}, [
		isControlled,
		prop,
		setUncontrolledProp,
		onChangeRef
	])];
}
__name$22(useControllableState, "useControllableState");
function useUncontrolledState({ defaultProp, onChange }) {
	const [value, setValue] = import_react.useState(defaultProp);
	const prevValueRef = import_react.useRef(value);
	const onChangeRef = import_react.useRef(onChange);
	useInsertionEffect(() => {
		onChangeRef.current = onChange;
	}, [onChange]);
	import_react.useEffect(() => {
		if (prevValueRef.current !== value) {
			onChangeRef.current?.(value);
			prevValueRef.current = value;
		}
	}, [value, prevValueRef]);
	return [
		value,
		setValue,
		onChangeRef
	];
}
__name$22(useUncontrolledState, "useUncontrolledState");
function isFunction$3(value) {
	return typeof value === "function";
}
__name$22(isFunction$3, "isFunction");
var SYNC_STATE = Symbol("RADIX:SYNC_STATE");
function useControllableStateReducer(reducer, userArgs, initialArg, init) {
	const { prop: controlledState, defaultProp, onChange: onChangeProp, caller } = userArgs;
	const isControlled = controlledState !== void 0;
	const onChange = useEffectEvent(onChangeProp);
	const args = [{
		...initialArg,
		state: defaultProp
	}];
	if (init) args.push(init);
	const [internalState, dispatch] = import_react.useReducer((state2, action) => {
		if (action.type === SYNC_STATE) return {
			...state2,
			state: action.state
		};
		const next = reducer(state2, action);
		if (isControlled && !Object.is(next.state, state2.state)) onChange(next.state);
		return next;
	}, ...args);
	const uncontrolledState = internalState.state;
	const prevValueRef = import_react.useRef(uncontrolledState);
	import_react.useEffect(() => {
		if (prevValueRef.current !== uncontrolledState) {
			prevValueRef.current = uncontrolledState;
			if (!isControlled) onChange(uncontrolledState);
		}
	}, [
		uncontrolledState,
		prevValueRef,
		isControlled
	]);
	const state = import_react.useMemo(() => {
		if (controlledState !== void 0) return {
			...internalState,
			state: controlledState
		};
		return internalState;
	}, [internalState, controlledState]);
	import_react.useEffect(() => {
		if (isControlled && !Object.is(controlledState, internalState.state)) dispatch({
			type: SYNC_STATE,
			state: controlledState
		});
	}, [
		controlledState,
		internalState.state,
		isControlled
	]);
	return [state, dispatch];
}
__name$22(useControllableStateReducer, "useControllableStateReducer");
var __defProp$21 = Object.defineProperty;
var __name$21 = (target, value) => __defProp$21(target, "name", {
	value,
	configurable: true
});
function setRef$6(ref, value) {
	if (typeof ref === "function") return ref(value);
	else if (ref !== null && ref !== void 0) ref.current = value;
}
__name$21(setRef$6, "setRef");
function composeRefs$5(...refs) {
	return (node) => {
		let hasCleanup = false;
		const cleanups = refs.map((ref) => {
			const cleanup = setRef$6(ref, node);
			if (!hasCleanup && typeof cleanup == "function") hasCleanup = true;
			return cleanup;
		});
		if (hasCleanup) return () => {
			for (let i = 0; i < cleanups.length; i++) {
				const cleanup = cleanups[i];
				if (typeof cleanup == "function") cleanup();
				else setRef$6(refs[i], null);
			}
		};
	};
}
__name$21(composeRefs$5, "composeRefs");
function useComposedRefs$5(...refs) {
	return import_react.useCallback(composeRefs$5(...refs), refs);
}
__name$21(useComposedRefs$5, "useComposedRefs");
var __defProp$20 = Object.defineProperty;
var __name$20 = (target, value) => __defProp$20(target, "name", {
	value,
	configurable: true
});
function useCallbackRef$1(callback) {
	const callbackRef = import_react.useRef(callback);
	import_react.useEffect(() => {
		callbackRef.current = callback;
	});
	return import_react.useMemo(() => ((...args) => callbackRef.current?.(...args)), []);
}
__name$20(useCallbackRef$1, "useCallbackRef");
var __defProp$19 = Object.defineProperty;
var __name$19 = (target, value) => __defProp$19(target, "name", {
	value,
	configurable: true
});
var CONTEXT_UPDATE = "dismissableLayer.update";
var POINTER_DOWN_OUTSIDE = "dismissableLayer.pointerDownOutside";
var FOCUS_OUTSIDE = "dismissableLayer.focusOutside";
var originalBodyPointerEvents;
var DismissableLayerContext = import_react.createContext({
	layers: /* @__PURE__ */ new Set(),
	layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
	branches: /* @__PURE__ */ new Set(),
	dismissableSurfaces: /* @__PURE__ */ new Set()
});
var DismissableLayer = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$19(function DismissableLayer2(props, forwardedRef) {
	const { disableOutsidePointerEvents = false, deferPointerDownOutside = false, onEscapeKeyDown, onPointerDownOutside, onFocusOutside, onInteractOutside, onDismiss, ...layerProps } = props;
	const context = import_react.useContext(DismissableLayerContext);
	const [node, setNode] = import_react.useState(null);
	const ownerDocument = node?.ownerDocument ?? globalThis?.document;
	const [, force] = import_react.useState({});
	const composedRefs = useComposedRefs$5(forwardedRef, setNode);
	const layers = Array.from(context.layers);
	const [highestLayerWithOutsidePointerEventsDisabled] = [...context.layersWithOutsidePointerEventsDisabled].slice(-1);
	const highestLayerWithOutsidePointerEventsDisabledIndex = highestLayerWithOutsidePointerEventsDisabled ? layers.indexOf(highestLayerWithOutsidePointerEventsDisabled) : -1;
	const index = node ? layers.indexOf(node) : -1;
	const isBodyPointerEventsDisabled = context.layersWithOutsidePointerEventsDisabled.size > 0;
	const isPointerEventsEnabled = index >= highestLayerWithOutsidePointerEventsDisabledIndex;
	const isDeferredPointerDownOutsideRef = import_react.useRef(false);
	const pointerDownOutside = usePointerDownOutside((event) => {
		onPointerDownOutside?.(event);
		onInteractOutside?.(event);
		if (!event.defaultPrevented) onDismiss?.();
	}, {
		ownerDocument,
		deferPointerDownOutside,
		isDeferredPointerDownOutsideRef,
		dismissableSurfaces: context.dismissableSurfaces,
		shouldHandlePointerDownOutside: import_react.useCallback((target) => {
			if (!(target instanceof Node)) return false;
			const isPointerDownOnBranch = [...context.branches].some((branch) => branch.contains(target));
			return isPointerEventsEnabled && !isPointerDownOnBranch;
		}, [context.branches, isPointerEventsEnabled])
	});
	const focusOutside = useFocusOutside((event) => {
		if (deferPointerDownOutside && isDeferredPointerDownOutsideRef.current) return;
		const target = event.target;
		if ([...context.branches].some((branch) => branch.contains(target))) return;
		onFocusOutside?.(event);
		onInteractOutside?.(event);
		if (!event.defaultPrevented) onDismiss?.();
	}, ownerDocument);
	const isHighestLayer = node ? index === layers.length - 1 : false;
	const handleKeyDown = useCallbackRef$1((event) => {
		if (event.key !== "Escape") return;
		onEscapeKeyDown?.(event);
		if (!event.defaultPrevented && onDismiss) {
			event.preventDefault();
			onDismiss();
		}
	});
	import_react.useEffect(() => {
		if (!isHighestLayer) return;
		ownerDocument.addEventListener("keydown", handleKeyDown, { capture: true });
		return () => ownerDocument.removeEventListener("keydown", handleKeyDown, { capture: true });
	}, [
		ownerDocument,
		isHighestLayer,
		handleKeyDown
	]);
	import_react.useEffect(() => {
		if (!node) return;
		if (disableOutsidePointerEvents) {
			if (context.layersWithOutsidePointerEventsDisabled.size === 0) {
				originalBodyPointerEvents = ownerDocument.body.style.pointerEvents;
				ownerDocument.body.style.pointerEvents = "none";
			}
			context.layersWithOutsidePointerEventsDisabled.add(node);
		}
		context.layers.add(node);
		dispatchUpdate();
		return () => {
			if (disableOutsidePointerEvents) {
				context.layersWithOutsidePointerEventsDisabled.delete(node);
				if (context.layersWithOutsidePointerEventsDisabled.size === 0) ownerDocument.body.style.pointerEvents = originalBodyPointerEvents;
			}
		};
	}, [
		node,
		ownerDocument,
		disableOutsidePointerEvents,
		context
	]);
	import_react.useEffect(() => {
		return () => {
			if (!node) return;
			context.layers.delete(node);
			context.layersWithOutsidePointerEventsDisabled.delete(node);
			dispatchUpdate();
		};
	}, [node, context]);
	import_react.useEffect(() => {
		const handleUpdate = /* @__PURE__ */ __name$19(() => force({}), "handleUpdate");
		document.addEventListener(CONTEXT_UPDATE, handleUpdate);
		return () => document.removeEventListener(CONTEXT_UPDATE, handleUpdate);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
		...layerProps,
		ref: composedRefs,
		style: {
			pointerEvents: isBodyPointerEventsDisabled ? isPointerEventsEnabled ? "auto" : "none" : void 0,
			...props.style
		},
		onFocusCapture: composeEventHandlers(props.onFocusCapture, focusOutside.onFocusCapture),
		onBlurCapture: composeEventHandlers(props.onBlurCapture, focusOutside.onBlurCapture),
		onPointerDownCapture: composeEventHandlers(props.onPointerDownCapture, pointerDownOutside.onPointerDownCapture)
	});
}, "DismissableLayer"));
function useDismissableLayerSurface() {
	const context = import_react.useContext(DismissableLayerContext);
	const [node, setNode] = import_react.useState(null);
	import_react.useEffect(() => {
		if (!node) return;
		context.dismissableSurfaces.add(node);
		return () => {
			context.dismissableSurfaces.delete(node);
		};
	}, [node, context.dismissableSurfaces]);
	return setNode;
}
__name$19(useDismissableLayerSurface, "useDismissableLayerSurface");
var IS_TRUE = /* @__PURE__ */ __name$19(() => true, "IS_TRUE");
function usePointerDownOutside(onPointerDownOutside, args) {
	const { ownerDocument = globalThis?.document, deferPointerDownOutside = false, isDeferredPointerDownOutsideRef, dismissableSurfaces, shouldHandlePointerDownOutside = IS_TRUE } = args;
	const handlePointerDownOutside = useCallbackRef$1(onPointerDownOutside);
	const isPointerInsideReactTreeRef = import_react.useRef(false);
	const isPointerDownOutsideRef = import_react.useRef(false);
	const interceptedOutsideInteractionEventsRef = import_react.useRef(/* @__PURE__ */ new Map());
	const handleClickRef = import_react.useRef(() => {});
	import_react.useEffect(() => {
		function resetOutsideInteraction() {
			isPointerDownOutsideRef.current = false;
			isDeferredPointerDownOutsideRef.current = false;
			interceptedOutsideInteractionEventsRef.current.clear();
		}
		__name$19(resetOutsideInteraction, "resetOutsideInteraction");
		function isOutsideInteractionIntercepted() {
			return Array.from(interceptedOutsideInteractionEventsRef.current.values()).some(Boolean);
		}
		__name$19(isOutsideInteractionIntercepted, "isOutsideInteractionIntercepted");
		function handleInteractionCapture(event) {
			if (!isPointerDownOutsideRef.current) return;
			const target = event.target;
			if (!(target instanceof Node && [...dismissableSurfaces].some((surface) => surface.contains(target)))) interceptedOutsideInteractionEventsRef.current.set(event.type, true);
			if (event.type === "click") window.setTimeout(() => {
				if (isPointerDownOutsideRef.current) handleClickRef.current();
			}, 0);
		}
		__name$19(handleInteractionCapture, "handleInteractionCapture");
		function handleInteractionBubble(event) {
			if (isPointerDownOutsideRef.current) interceptedOutsideInteractionEventsRef.current.set(event.type, false);
		}
		__name$19(handleInteractionBubble, "handleInteractionBubble");
		const handlePointerDown = /* @__PURE__ */ __name$19((event) => {
			if (event.target && !isPointerInsideReactTreeRef.current) {
				let handleAndDispatchPointerDownOutsideEvent2 = function() {
					ownerDocument.removeEventListener("click", handleClickRef.current);
					const wasOutsideInteractionIntercepted = isOutsideInteractionIntercepted();
					resetOutsideInteraction();
					if (!wasOutsideInteractionIntercepted) handleAndDispatchCustomEvent(POINTER_DOWN_OUTSIDE, handlePointerDownOutside, eventDetail, { discrete: true });
				};
				__name$19(handleAndDispatchPointerDownOutsideEvent2, "handleAndDispatchPointerDownOutsideEvent");
				if (!shouldHandlePointerDownOutside(event.target)) {
					ownerDocument.removeEventListener("click", handleClickRef.current);
					resetOutsideInteraction();
					isPointerInsideReactTreeRef.current = false;
					return;
				}
				const eventDetail = { originalEvent: event };
				isPointerDownOutsideRef.current = true;
				isDeferredPointerDownOutsideRef.current = deferPointerDownOutside && event.button === 0;
				interceptedOutsideInteractionEventsRef.current.clear();
				if (!deferPointerDownOutside || event.button !== 0) handleAndDispatchPointerDownOutsideEvent2();
				else {
					ownerDocument.removeEventListener("click", handleClickRef.current);
					handleClickRef.current = handleAndDispatchPointerDownOutsideEvent2;
					ownerDocument.addEventListener("click", handleClickRef.current, { once: true });
				}
			} else {
				ownerDocument.removeEventListener("click", handleClickRef.current);
				resetOutsideInteraction();
			}
			isPointerInsideReactTreeRef.current = false;
		}, "handlePointerDown");
		const outsideInteractionEvents = [
			"pointerup",
			"mousedown",
			"mouseup",
			"touchstart",
			"touchend",
			"click"
		];
		for (const eventName of outsideInteractionEvents) {
			ownerDocument.addEventListener(eventName, handleInteractionCapture, true);
			ownerDocument.addEventListener(eventName, handleInteractionBubble);
		}
		const timerId = window.setTimeout(() => {
			ownerDocument.addEventListener("pointerdown", handlePointerDown);
		}, 0);
		return () => {
			window.clearTimeout(timerId);
			ownerDocument.removeEventListener("pointerdown", handlePointerDown);
			ownerDocument.removeEventListener("click", handleClickRef.current);
			for (const eventName of outsideInteractionEvents) {
				ownerDocument.removeEventListener(eventName, handleInteractionCapture, true);
				ownerDocument.removeEventListener(eventName, handleInteractionBubble);
			}
		};
	}, [
		ownerDocument,
		handlePointerDownOutside,
		deferPointerDownOutside,
		isDeferredPointerDownOutsideRef,
		dismissableSurfaces,
		shouldHandlePointerDownOutside
	]);
	return { onPointerDownCapture: /* @__PURE__ */ __name$19(() => isPointerInsideReactTreeRef.current = true, "onPointerDownCapture") };
}
__name$19(usePointerDownOutside, "usePointerDownOutside");
function useFocusOutside(onFocusOutside, ownerDocument = globalThis?.document) {
	const handleFocusOutside = useCallbackRef$1(onFocusOutside);
	const isFocusInsideReactTreeRef = import_react.useRef(false);
	import_react.useEffect(() => {
		const handleFocus = /* @__PURE__ */ __name$19((event) => {
			if (event.target && !isFocusInsideReactTreeRef.current) handleAndDispatchCustomEvent(FOCUS_OUTSIDE, handleFocusOutside, { originalEvent: event }, { discrete: false });
		}, "handleFocus");
		ownerDocument.addEventListener("focusin", handleFocus);
		return () => ownerDocument.removeEventListener("focusin", handleFocus);
	}, [ownerDocument, handleFocusOutside]);
	return {
		onFocusCapture: /* @__PURE__ */ __name$19(() => isFocusInsideReactTreeRef.current = true, "onFocusCapture"),
		onBlurCapture: /* @__PURE__ */ __name$19(() => isFocusInsideReactTreeRef.current = false, "onBlurCapture")
	};
}
__name$19(useFocusOutside, "useFocusOutside");
function dispatchUpdate() {
	const event = new CustomEvent(CONTEXT_UPDATE);
	document.dispatchEvent(event);
}
__name$19(dispatchUpdate, "dispatchUpdate");
function handleAndDispatchCustomEvent(name, handler, detail, { discrete }) {
	const target = detail.originalEvent.target;
	const event = new CustomEvent(name, {
		bubbles: false,
		cancelable: true,
		detail
	});
	if (handler) target.addEventListener(name, handler, { once: true });
	if (discrete) dispatchDiscreteCustomEvent(target, event);
	else target.dispatchEvent(event);
}
__name$19(handleAndDispatchCustomEvent, "handleAndDispatchCustomEvent");
var __defProp$18 = Object.defineProperty;
var __name$18 = (target, value) => __defProp$18(target, "name", {
	value,
	configurable: true
});
function setRef$5(ref, value) {
	if (typeof ref === "function") return ref(value);
	else if (ref !== null && ref !== void 0) ref.current = value;
}
__name$18(setRef$5, "setRef");
function composeRefs$4(...refs) {
	return (node) => {
		let hasCleanup = false;
		const cleanups = refs.map((ref) => {
			const cleanup = setRef$5(ref, node);
			if (!hasCleanup && typeof cleanup == "function") hasCleanup = true;
			return cleanup;
		});
		if (hasCleanup) return () => {
			for (let i = 0; i < cleanups.length; i++) {
				const cleanup = cleanups[i];
				if (typeof cleanup == "function") cleanup();
				else setRef$5(refs[i], null);
			}
		};
	};
}
__name$18(composeRefs$4, "composeRefs");
function useComposedRefs$4(...refs) {
	return import_react.useCallback(composeRefs$4(...refs), refs);
}
__name$18(useComposedRefs$4, "useComposedRefs");
var __defProp$17 = Object.defineProperty;
var __name$17 = (target, value) => __defProp$17(target, "name", {
	value,
	configurable: true
});
var AUTOFOCUS_ON_MOUNT = "focusScope.autoFocusOnMount";
var AUTOFOCUS_ON_UNMOUNT = "focusScope.autoFocusOnUnmount";
var EVENT_OPTIONS = {
	bubbles: false,
	cancelable: true
};
var FocusScope = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$17(function FocusScope2(props, forwardedRef) {
	const { loop = false, trapped = false, onMountAutoFocus: onMountAutoFocusProp, onUnmountAutoFocus: onUnmountAutoFocusProp, ...scopeProps } = props;
	const [container, setContainer] = import_react.useState(null);
	const onMountAutoFocus = useCallbackRef$1(onMountAutoFocusProp);
	const onUnmountAutoFocus = useCallbackRef$1(onUnmountAutoFocusProp);
	const lastFocusedElementRef = import_react.useRef(null);
	const composedRefs = useComposedRefs$4(forwardedRef, setContainer);
	const focusScope = import_react.useRef({
		paused: false,
		pause() {
			this.paused = true;
		},
		resume() {
			this.paused = false;
		}
	}).current;
	import_react.useEffect(() => {
		if (trapped) {
			let handleFocusIn2 = function(event) {
				if (focusScope.paused || !container) return;
				const target = event.target;
				if (container.contains(target)) lastFocusedElementRef.current = target;
				else focus(lastFocusedElementRef.current, { select: true });
			}, handleFocusOut2 = function(event) {
				if (focusScope.paused || !container) return;
				const relatedTarget = event.relatedTarget;
				if (relatedTarget === null) return;
				if (!container.contains(relatedTarget)) focus(lastFocusedElementRef.current, { select: true });
			}, handleMutations2 = function(mutations) {
				if (document.activeElement !== document.body) return;
				for (const mutation of mutations) if (mutation.removedNodes.length > 0) focus(container);
			};
			__name$17(handleFocusIn2, "handleFocusIn");
			__name$17(handleFocusOut2, "handleFocusOut");
			__name$17(handleMutations2, "handleMutations");
			document.addEventListener("focusin", handleFocusIn2);
			document.addEventListener("focusout", handleFocusOut2);
			const mutationObserver = new MutationObserver(handleMutations2);
			if (container) mutationObserver.observe(container, {
				childList: true,
				subtree: true
			});
			return () => {
				document.removeEventListener("focusin", handleFocusIn2);
				document.removeEventListener("focusout", handleFocusOut2);
				mutationObserver.disconnect();
			};
		}
	}, [
		trapped,
		container,
		focusScope.paused
	]);
	import_react.useEffect(() => {
		if (container) {
			focusScopesStack.add(focusScope);
			const previouslyFocusedElement = document.activeElement;
			if (!container.contains(previouslyFocusedElement)) {
				const mountEvent = new CustomEvent(AUTOFOCUS_ON_MOUNT, EVENT_OPTIONS);
				container.addEventListener(AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
				container.dispatchEvent(mountEvent);
				if (!mountEvent.defaultPrevented) {
					focusFirst(removeLinks(getTabbableCandidates(container)), { select: true });
					if (document.activeElement === previouslyFocusedElement) focus(container);
				}
			}
			return () => {
				container.removeEventListener(AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
				setTimeout(() => {
					const unmountEvent = new CustomEvent(AUTOFOCUS_ON_UNMOUNT, EVENT_OPTIONS);
					container.addEventListener(AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
					container.dispatchEvent(unmountEvent);
					if (!unmountEvent.defaultPrevented) focus(previouslyFocusedElement ?? document.body, { select: true });
					container.removeEventListener(AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
					focusScopesStack.remove(focusScope);
				}, 0);
			};
		}
	}, [
		container,
		onMountAutoFocus,
		onUnmountAutoFocus,
		focusScope
	]);
	const handleKeyDown = import_react.useCallback((event) => {
		if (!loop && !trapped) return;
		if (focusScope.paused) return;
		const isTabKey = event.key === "Tab" && !event.altKey && !event.ctrlKey && !event.metaKey;
		const focusedElement = document.activeElement;
		if (isTabKey && focusedElement) {
			const container2 = event.currentTarget;
			const [first, last] = getTabbableEdges(container2);
			if (!(first && last)) {
				if (focusedElement === container2) event.preventDefault();
			} else if (!event.shiftKey && focusedElement === last) {
				event.preventDefault();
				if (loop) focus(first, { select: true });
			} else if (event.shiftKey && focusedElement === first) {
				event.preventDefault();
				if (loop) focus(last, { select: true });
			}
		}
	}, [
		loop,
		trapped,
		focusScope.paused
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
		tabIndex: -1,
		...scopeProps,
		ref: composedRefs,
		onKeyDown: handleKeyDown
	});
}, "FocusScope"));
function focusFirst(candidates, { select = false } = {}) {
	const previouslyFocusedElement = document.activeElement;
	for (const candidate of candidates) {
		focus(candidate, { select });
		if (document.activeElement !== previouslyFocusedElement) return;
	}
}
__name$17(focusFirst, "focusFirst");
function getTabbableEdges(container) {
	const candidates = getTabbableCandidates(container);
	return [findVisible(candidates, container), findVisible(candidates.reverse(), container)];
}
__name$17(getTabbableEdges, "getTabbableEdges");
function getTabbableCandidates(container) {
	const nodes = [];
	const walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, { acceptNode: /* @__PURE__ */ __name$17((node) => {
		const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
		if (node.disabled || node.hidden || isHiddenInput) return NodeFilter.FILTER_SKIP;
		return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
	}, "acceptNode") });
	while (walker.nextNode()) nodes.push(walker.currentNode);
	return nodes;
}
__name$17(getTabbableCandidates, "getTabbableCandidates");
function findVisible(elements, container) {
	const canUseCheckVisibility = typeof container.checkVisibility === "function" && container.checkVisibility({ checkVisibilityCSS: true });
	for (const element of elements) if (!(canUseCheckVisibility ? !element.checkVisibility({ checkVisibilityCSS: true }) : isHidden(element, { upTo: container }))) return element;
}
__name$17(findVisible, "findVisible");
function isHidden(node, { upTo }) {
	if (getComputedStyle(node).visibility === "hidden") return true;
	while (node) {
		if (upTo !== void 0 && node === upTo) return false;
		if (getComputedStyle(node).display === "none") return true;
		node = node.parentElement;
	}
	return false;
}
__name$17(isHidden, "isHidden");
function isSelectableInput(element) {
	return element instanceof HTMLInputElement && "select" in element;
}
__name$17(isSelectableInput, "isSelectableInput");
function focus(element, { select = false } = {}) {
	if (element && element.focus) {
		const previouslyFocusedElement = document.activeElement;
		element.focus({ preventScroll: true });
		if (element !== previouslyFocusedElement && isSelectableInput(element) && select) element.select();
	}
}
__name$17(focus, "focus");
var focusScopesStack = createFocusScopesStack();
function createFocusScopesStack() {
	let stack = [];
	return {
		add(focusScope) {
			const activeFocusScope = stack[0];
			if (focusScope !== activeFocusScope) activeFocusScope?.pause();
			stack = arrayRemove(stack, focusScope);
			stack.unshift(focusScope);
		},
		remove(focusScope) {
			stack = arrayRemove(stack, focusScope);
			stack[0]?.resume();
		}
	};
}
__name$17(createFocusScopesStack, "createFocusScopesStack");
function arrayRemove(array, item) {
	const updatedArray = [...array];
	const index = updatedArray.indexOf(item);
	if (index !== -1) updatedArray.splice(index, 1);
	return updatedArray;
}
__name$17(arrayRemove, "arrayRemove");
function removeLinks(items) {
	return items.filter((item) => item.tagName !== "A");
}
__name$17(removeLinks, "removeLinks");
var __defProp$16 = Object.defineProperty;
var __name$16 = (target, value) => __defProp$16(target, "name", {
	value,
	configurable: true
});
var Portal = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$16(function Portal2(props, forwardedRef) {
	const { container: containerProp, ...portalProps } = props;
	const [mounted, setMounted] = import_react.useState(false);
	useLayoutEffect2(() => setMounted(true), []);
	const container = containerProp || mounted && globalThis?.document?.body;
	return container ? import_react_dom.createPortal(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
		...portalProps,
		ref: forwardedRef
	}), container) : null;
}, "Portal"));
var __defProp$15 = Object.defineProperty;
var __name$15 = (target, value) => __defProp$15(target, "name", {
	value,
	configurable: true
});
function useStateMachine(initialState, machine) {
	return import_react.useReducer((state, event) => {
		return machine[state][event] ?? state;
	}, initialState);
}
__name$15(useStateMachine, "useStateMachine");
var Presence = /* @__PURE__ */ __name$15((props) => {
	const { present, children } = props;
	const presence = usePresence(present);
	const child = typeof children === "function" ? children({ present: presence.isPresent }) : import_react.Children.only(children);
	const ref = useStableComposedRefs(presence.ref, getElementRef$2(child));
	return typeof children === "function" || presence.isPresent ? import_react.cloneElement(child, { ref }) : null;
}, "Presence");
function usePresence(present) {
	const [node, setNode] = import_react.useState();
	const stylesRef = import_react.useRef(null);
	const prevPresentRef = import_react.useRef(present);
	const prevAnimationNameRef = import_react.useRef("none");
	const mountAnimationNameRef = import_react.useRef(void 0);
	const [state, send] = useStateMachine(present ? "mounted" : "unmounted", {
		mounted: {
			UNMOUNT: "unmounted",
			ANIMATION_OUT: "unmountSuspended"
		},
		unmountSuspended: {
			MOUNT: "mounted",
			ANIMATION_END: "unmounted"
		},
		unmounted: { MOUNT: "mounted" }
	});
	import_react.useEffect(() => {
		if (state === "mounted") {
			prevAnimationNameRef.current = mountAnimationNameRef.current ?? getAnimationName(stylesRef.current);
			mountAnimationNameRef.current = void 0;
		} else prevAnimationNameRef.current = "none";
	}, [state]);
	useLayoutEffect2(() => {
		const styles = stylesRef.current;
		const wasPresent = prevPresentRef.current;
		if (wasPresent !== present) {
			const prevAnimationName = prevAnimationNameRef.current;
			const currentAnimationName = getAnimationName(styles);
			if (present) {
				mountAnimationNameRef.current = currentAnimationName;
				send("MOUNT");
			} else if (currentAnimationName === "none" || styles?.display === "none") send("UNMOUNT");
			else if (wasPresent && prevAnimationName !== currentAnimationName) send("ANIMATION_OUT");
			else send("UNMOUNT");
			prevPresentRef.current = present;
		}
	}, [present, send]);
	useLayoutEffect2(() => {
		if (node) {
			let timeoutId;
			const ownerWindow = node.ownerDocument.defaultView ?? window;
			const handleAnimationEnd = /* @__PURE__ */ __name$15((event) => {
				const isCurrentAnimation = getAnimationName(stylesRef.current).includes(CSS.escape(event.animationName));
				if (event.target === node && isCurrentAnimation) {
					send("ANIMATION_END");
					if (!prevPresentRef.current) {
						const currentFillMode = node.style.animationFillMode;
						node.style.animationFillMode = "forwards";
						timeoutId = ownerWindow.setTimeout(() => {
							if (node.style.animationFillMode === "forwards") node.style.animationFillMode = currentFillMode;
						});
					}
				}
			}, "handleAnimationEnd");
			const handleAnimationStart = /* @__PURE__ */ __name$15((event) => {
				if (event.target === node) prevAnimationNameRef.current = getAnimationName(stylesRef.current);
			}, "handleAnimationStart");
			node.addEventListener("animationstart", handleAnimationStart);
			node.addEventListener("animationcancel", handleAnimationEnd);
			node.addEventListener("animationend", handleAnimationEnd);
			return () => {
				ownerWindow.clearTimeout(timeoutId);
				node.removeEventListener("animationstart", handleAnimationStart);
				node.removeEventListener("animationcancel", handleAnimationEnd);
				node.removeEventListener("animationend", handleAnimationEnd);
			};
		} else send("ANIMATION_END");
	}, [node, send]);
	return {
		isPresent: ["mounted", "unmountSuspended"].includes(state),
		ref: import_react.useCallback((node2) => {
			if (node2) {
				const styles = getComputedStyle(node2);
				stylesRef.current = styles;
				mountAnimationNameRef.current = getAnimationName(styles);
			} else stylesRef.current = null;
			setNode(node2);
		}, [])
	};
}
__name$15(usePresence, "usePresence");
function setRef$4(ref, value) {
	if (typeof ref === "function") return ref(value);
	else if (ref !== null && ref !== void 0) ref.current = value;
}
__name$15(setRef$4, "setRef");
function useStableComposedRefs(...refs) {
	const refsRef = import_react.useRef(refs);
	refsRef.current = refs;
	return import_react.useCallback((node) => {
		const currentRefs = refsRef.current;
		let hasCleanup = false;
		const cleanups = currentRefs.map((ref) => {
			const cleanup = setRef$4(ref, node);
			if (!hasCleanup && typeof cleanup === "function") hasCleanup = true;
			return cleanup;
		});
		if (hasCleanup) return () => {
			for (let i = 0; i < cleanups.length; i++) {
				const cleanup = cleanups[i];
				if (typeof cleanup === "function") cleanup();
				else setRef$4(currentRefs[i], null);
			}
		};
	}, []);
}
__name$15(useStableComposedRefs, "useStableComposedRefs");
function getAnimationName(styles) {
	return styles?.animationName || "none";
}
__name$15(getAnimationName, "getAnimationName");
function getElementRef$2(element) {
	let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
	let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
	if (mayWarn) return element.ref;
	getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
	mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
	if (mayWarn) return element.props.ref;
	return element.props.ref || element.ref;
}
__name$15(getElementRef$2, "getElementRef");
var __defProp$14 = Object.defineProperty;
var __name$14 = (target, value) => __defProp$14(target, "name", {
	value,
	configurable: true
});
var count = 0;
var guards = null;
function FocusGuards(props) {
	useFocusGuards();
	return props.children;
}
__name$14(FocusGuards, "FocusGuards");
function useFocusGuards() {
	import_react.useEffect(() => {
		if (!guards) guards = {
			start: createFocusGuard(),
			end: createFocusGuard()
		};
		const { start, end } = guards;
		if (document.body.firstElementChild !== start) document.body.insertAdjacentElement("afterbegin", start);
		if (document.body.lastElementChild !== end) document.body.insertAdjacentElement("beforeend", end);
		count++;
		return () => {
			if (count === 1) {
				guards?.start.remove();
				guards?.end.remove();
				guards = null;
			}
			count = Math.max(0, count - 1);
		};
	}, []);
}
__name$14(useFocusGuards, "useFocusGuards");
function createFocusGuard() {
	const element = document.createElement("span");
	element.setAttribute("data-radix-focus-guard", "");
	element.tabIndex = 0;
	element.style.outline = "none";
	element.style.opacity = "0";
	element.style.position = "fixed";
	element.style.pointerEvents = "none";
	return element;
}
__name$14(createFocusGuard, "createFocusGuard");
var zeroRightClassName = "right-scroll-bar-position";
var fullWidthClassName = "width-before-scroll-bar";
var noScrollbarsClassName = "with-scroll-bars-hidden";
/**
* Name of a CSS variable containing the amount of "hidden" scrollbar
* ! might be undefined ! use will fallback!
*/
var removedBarSizeVariable = "--removed-body-scroll-bar-size";
/**
* Assigns a value for a given ref, no matter of the ref format
* @param {RefObject} ref - a callback function or ref object
* @param value - a new value
*
* @see https://github.com/theKashey/use-callback-ref#assignref
* @example
* const refObject = useRef();
* const refFn = (ref) => {....}
*
* assignRef(refObject, "refValue");
* assignRef(refFn, "refValue");
*/
function assignRef(ref, value) {
	if (typeof ref === "function") ref(value);
	else if (ref) ref.current = value;
	return ref;
}
/**
* creates a MutableRef with ref change callback
* @param initialValue - initial ref value
* @param {Function} callback - a callback to run when value changes
*
* @example
* const ref = useCallbackRef(0, (newValue, oldValue) => console.log(oldValue, '->', newValue);
* ref.current = 1;
* // prints 0 -> 1
*
* @see https://reactjs.org/docs/hooks-reference.html#useref
* @see https://github.com/theKashey/use-callback-ref#usecallbackref---to-replace-reactuseref
* @returns {MutableRefObject}
*/
function useCallbackRef(initialValue, callback) {
	var ref = (0, import_react.useState)(function() {
		return {
			value: initialValue,
			callback,
			facade: {
				get current() {
					return ref.value;
				},
				set current(value) {
					var last = ref.value;
					if (last !== value) {
						ref.value = value;
						ref.callback(value, last);
					}
				}
			}
		};
	})[0];
	ref.callback = callback;
	return ref.facade;
}
var useIsomorphicLayoutEffect = typeof window !== "undefined" ? import_react.useLayoutEffect : import_react.useEffect;
var currentValues = /* @__PURE__ */ new WeakMap();
/**
* Merges two or more refs together providing a single interface to set their value
* @param {RefObject|Ref} refs
* @returns {MutableRefObject} - a new ref, which translates all changes to {refs}
*
* @see {@link mergeRefs} a version without buit-in memoization
* @see https://github.com/theKashey/use-callback-ref#usemergerefs
* @example
* const Component = React.forwardRef((props, ref) => {
*   const ownRef = useRef();
*   const domRef = useMergeRefs([ref, ownRef]); // 👈 merge together
*   return <div ref={domRef}>...</div>
* }
*/
function useMergeRefs(refs, defaultValue) {
	var callbackRef = useCallbackRef(defaultValue || null, function(newValue) {
		return refs.forEach(function(ref) {
			return assignRef(ref, newValue);
		});
	});
	useIsomorphicLayoutEffect(function() {
		var oldValue = currentValues.get(callbackRef);
		if (oldValue) {
			var prevRefs_1 = new Set(oldValue);
			var nextRefs_1 = new Set(refs);
			var current_1 = callbackRef.current;
			prevRefs_1.forEach(function(ref) {
				if (!nextRefs_1.has(ref)) assignRef(ref, null);
			});
			nextRefs_1.forEach(function(ref) {
				if (!prevRefs_1.has(ref)) assignRef(ref, current_1);
			});
		}
		currentValues.set(callbackRef, refs);
	}, [refs]);
	return callbackRef;
}
function ItoI(a) {
	return a;
}
function innerCreateMedium(defaults, middleware) {
	if (middleware === void 0) middleware = ItoI;
	var buffer = [];
	var assigned = false;
	return {
		read: function() {
			if (assigned) throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
			if (buffer.length) return buffer[buffer.length - 1];
			return defaults;
		},
		useMedium: function(data) {
			var item = middleware(data, assigned);
			buffer.push(item);
			return function() {
				buffer = buffer.filter(function(x) {
					return x !== item;
				});
			};
		},
		assignSyncMedium: function(cb) {
			assigned = true;
			while (buffer.length) {
				var cbs = buffer;
				buffer = [];
				cbs.forEach(cb);
			}
			buffer = {
				push: function(x) {
					return cb(x);
				},
				filter: function() {
					return buffer;
				}
			};
		},
		assignMedium: function(cb) {
			assigned = true;
			var pendingQueue = [];
			if (buffer.length) {
				var cbs = buffer;
				buffer = [];
				cbs.forEach(cb);
				pendingQueue = buffer;
			}
			var executeQueue = function() {
				var cbs = pendingQueue;
				pendingQueue = [];
				cbs.forEach(cb);
			};
			var cycle = function() {
				return Promise.resolve().then(executeQueue);
			};
			cycle();
			buffer = {
				push: function(x) {
					pendingQueue.push(x);
					cycle();
				},
				filter: function(filter) {
					pendingQueue = pendingQueue.filter(filter);
					return buffer;
				}
			};
		}
	};
}
function createSidecarMedium(options) {
	if (options === void 0) options = {};
	var medium = innerCreateMedium(null);
	medium.options = __assign({
		async: true,
		ssr: false
	}, options);
	return medium;
}
var SideCar = function(_a) {
	var sideCar = _a.sideCar, rest = __rest(_a, ["sideCar"]);
	if (!sideCar) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
	var Target = sideCar.read();
	if (!Target) throw new Error("Sidecar medium not found");
	return import_react.createElement(Target, __assign({}, rest));
};
SideCar.isSideCarExport = true;
function exportSidecar(medium, exported) {
	medium.useMedium(exported);
	return SideCar;
}
var effectCar = createSidecarMedium();
var nothing = function() {};
/**
* Removes scrollbar from the page and contain the scroll within the Lock
*/
var RemoveScroll = import_react.forwardRef(function(props, parentRef) {
	var ref = import_react.useRef(null);
	var _a = import_react.useState({
		onScrollCapture: nothing,
		onWheelCapture: nothing,
		onTouchMoveCapture: nothing
	}), callbacks = _a[0], setCallbacks = _a[1];
	var forwardProps = props.forwardProps, children = props.children, className = props.className, removeScrollBar = props.removeScrollBar, enabled = props.enabled, shards = props.shards, sideCar = props.sideCar, noRelative = props.noRelative, noIsolation = props.noIsolation, inert = props.inert, allowPinchZoom = props.allowPinchZoom, _b = props.as, Container = _b === void 0 ? "div" : _b, gapMode = props.gapMode, rest = __rest(props, [
		"forwardProps",
		"children",
		"className",
		"removeScrollBar",
		"enabled",
		"shards",
		"sideCar",
		"noRelative",
		"noIsolation",
		"inert",
		"allowPinchZoom",
		"as",
		"gapMode"
	]);
	var SideCar = sideCar;
	var containerRef = useMergeRefs([ref, parentRef]);
	var containerProps = __assign(__assign({}, rest), callbacks);
	return import_react.createElement(import_react.Fragment, null, enabled && import_react.createElement(SideCar, {
		sideCar: effectCar,
		removeScrollBar,
		shards,
		noRelative,
		noIsolation,
		inert,
		setCallbacks,
		allowPinchZoom: !!allowPinchZoom,
		lockRef: ref,
		gapMode
	}), forwardProps ? import_react.cloneElement(import_react.Children.only(children), __assign(__assign({}, containerProps), { ref: containerRef })) : import_react.createElement(Container, __assign({}, containerProps, {
		className,
		ref: containerRef
	}), children));
});
RemoveScroll.defaultProps = {
	enabled: true,
	removeScrollBar: true,
	inert: false
};
RemoveScroll.classNames = {
	fullWidth: fullWidthClassName,
	zeroRight: zeroRightClassName
};
function makeStyleTag() {
	if (!document) return null;
	var tag = document.createElement("style");
	tag.type = "text/css";
	var nonce = getNonce();
	if (nonce) tag.setAttribute("nonce", nonce);
	return tag;
}
function injectStyles(tag, css) {
	if (tag.styleSheet) tag.styleSheet.cssText = css;
	else tag.appendChild(document.createTextNode(css));
}
function insertStyleTag(tag) {
	(document.head || document.getElementsByTagName("head")[0]).appendChild(tag);
}
var stylesheetSingleton = function() {
	var counter = 0;
	var stylesheet = null;
	return {
		add: function(style) {
			if (counter == 0) {
				if (stylesheet = makeStyleTag()) {
					injectStyles(stylesheet, style);
					insertStyleTag(stylesheet);
				}
			}
			counter++;
		},
		remove: function() {
			counter--;
			if (!counter && stylesheet) {
				stylesheet.parentNode && stylesheet.parentNode.removeChild(stylesheet);
				stylesheet = null;
			}
		}
	};
};
/**
* creates a hook to control style singleton
* @see {@link styleSingleton} for a safer component version
* @example
* ```tsx
* const useStyle = styleHookSingleton();
* ///
* useStyle('body { overflow: hidden}');
*/
var styleHookSingleton = function() {
	var sheet = stylesheetSingleton();
	return function(styles, isDynamic) {
		import_react.useEffect(function() {
			sheet.add(styles);
			return function() {
				sheet.remove();
			};
		}, [styles && isDynamic]);
	};
};
/**
* create a Component to add styles on demand
* - styles are added when first instance is mounted
* - styles are removed when the last instance is unmounted
* - changing styles in runtime does nothing unless dynamic is set. But with multiple components that can lead to the undefined behavior
*/
var styleSingleton = function() {
	var useStyle = styleHookSingleton();
	var Sheet = function(_a) {
		var styles = _a.styles, dynamic = _a.dynamic;
		useStyle(styles, dynamic);
		return null;
	};
	return Sheet;
};
var zeroGap = {
	left: 0,
	top: 0,
	right: 0,
	gap: 0
};
var parse = function(x) {
	return parseInt(x || "", 10) || 0;
};
var getOffset = function(gapMode) {
	var cs = window.getComputedStyle(document.body);
	var left = cs[gapMode === "padding" ? "paddingLeft" : "marginLeft"];
	var top = cs[gapMode === "padding" ? "paddingTop" : "marginTop"];
	var right = cs[gapMode === "padding" ? "paddingRight" : "marginRight"];
	return [
		parse(left),
		parse(top),
		parse(right)
	];
};
var getGapWidth = function(gapMode) {
	if (gapMode === void 0) gapMode = "margin";
	if (typeof window === "undefined") return zeroGap;
	var offsets = getOffset(gapMode);
	var documentWidth = document.documentElement.clientWidth;
	var windowWidth = window.innerWidth;
	return {
		left: offsets[0],
		top: offsets[1],
		right: offsets[2],
		gap: Math.max(0, windowWidth - documentWidth + offsets[2] - offsets[0])
	};
};
var Style = styleSingleton();
var lockAttribute = "data-scroll-locked";
var getStyles = function(_a, allowRelative, gapMode, important) {
	var left = _a.left, top = _a.top, right = _a.right, gap = _a.gap;
	if (gapMode === void 0) gapMode = "margin";
	return "\n  .".concat(noScrollbarsClassName, " {\n   overflow: hidden ").concat(important, ";\n   padding-right: ").concat(gap, "px ").concat(important, ";\n  }\n  body[").concat(lockAttribute, "] {\n    overflow: hidden ").concat(important, ";\n    overscroll-behavior: contain;\n    ").concat([
		allowRelative && "position: relative ".concat(important, ";"),
		gapMode === "margin" && "\n    padding-left: ".concat(left, "px;\n    padding-top: ").concat(top, "px;\n    padding-right: ").concat(right, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(gap, "px ").concat(important, ";\n    "),
		gapMode === "padding" && "padding-right: ".concat(gap, "px ").concat(important, ";")
	].filter(Boolean).join(""), "\n  }\n  \n  .").concat(zeroRightClassName, " {\n    right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(fullWidthClassName, " {\n    margin-right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(zeroRightClassName, " .").concat(zeroRightClassName, " {\n    right: 0 ").concat(important, ";\n  }\n  \n  .").concat(fullWidthClassName, " .").concat(fullWidthClassName, " {\n    margin-right: 0 ").concat(important, ";\n  }\n  \n  body[").concat(lockAttribute, "] {\n    ").concat(removedBarSizeVariable, ": ").concat(gap, "px;\n  }\n");
};
var getCurrentUseCounter = function() {
	var counter = parseInt(document.body.getAttribute("data-scroll-locked") || "0", 10);
	return isFinite(counter) ? counter : 0;
};
var useLockAttribute = function() {
	import_react.useEffect(function() {
		document.body.setAttribute(lockAttribute, (getCurrentUseCounter() + 1).toString());
		return function() {
			var newCounter = getCurrentUseCounter() - 1;
			if (newCounter <= 0) document.body.removeAttribute(lockAttribute);
			else document.body.setAttribute(lockAttribute, newCounter.toString());
		};
	}, []);
};
/**
* Removes page scrollbar and blocks page scroll when mounted
*/
var RemoveScrollBar = function(_a) {
	var noRelative = _a.noRelative, noImportant = _a.noImportant, _b = _a.gapMode, gapMode = _b === void 0 ? "margin" : _b;
	useLockAttribute();
	var gap = import_react.useMemo(function() {
		return getGapWidth(gapMode);
	}, [gapMode]);
	return import_react.createElement(Style, { styles: getStyles(gap, !noRelative, gapMode, !noImportant ? "!important" : "") });
};
var passiveSupported = false;
if (typeof window !== "undefined") try {
	var options = Object.defineProperty({}, "passive", { get: function() {
		passiveSupported = true;
		return true;
	} });
	window.addEventListener("test", options, options);
	window.removeEventListener("test", options, options);
} catch (err) {
	passiveSupported = false;
}
var nonPassive = passiveSupported ? { passive: false } : false;
var alwaysContainsScroll = function(node) {
	return node.tagName === "TEXTAREA";
};
var elementCanBeScrolled = function(node, overflow) {
	if (!(node instanceof Element)) return false;
	var styles = window.getComputedStyle(node);
	return styles[overflow] !== "hidden" && !(styles.overflowY === styles.overflowX && !alwaysContainsScroll(node) && styles[overflow] === "visible");
};
var elementCouldBeVScrolled = function(node) {
	return elementCanBeScrolled(node, "overflowY");
};
var elementCouldBeHScrolled = function(node) {
	return elementCanBeScrolled(node, "overflowX");
};
var locationCouldBeScrolled = function(axis, node) {
	var ownerDocument = node.ownerDocument;
	var current = node;
	do {
		if (typeof ShadowRoot !== "undefined" && current instanceof ShadowRoot) current = current.host;
		if (elementCouldBeScrolled(axis, current)) {
			var _a = getScrollVariables(axis, current);
			if (_a[1] > _a[2]) return true;
		}
		current = current.parentNode;
	} while (current && current !== ownerDocument.body);
	return false;
};
var getVScrollVariables = function(_a) {
	return [
		_a.scrollTop,
		_a.scrollHeight,
		_a.clientHeight
	];
};
var getHScrollVariables = function(_a) {
	return [
		_a.scrollLeft,
		_a.scrollWidth,
		_a.clientWidth
	];
};
var elementCouldBeScrolled = function(axis, node) {
	return axis === "v" ? elementCouldBeVScrolled(node) : elementCouldBeHScrolled(node);
};
var getScrollVariables = function(axis, node) {
	return axis === "v" ? getVScrollVariables(node) : getHScrollVariables(node);
};
var getDirectionFactor = function(axis, direction) {
	/**
	* If the element's direction is rtl (right-to-left), then scrollLeft is 0 when the scrollbar is at its rightmost position,
	* and then increasingly negative as you scroll towards the end of the content.
	* @see https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollLeft
	*/
	return axis === "h" && direction === "rtl" ? -1 : 1;
};
var handleScroll = function(axis, endTarget, event, sourceDelta, noOverscroll) {
	var directionFactor = getDirectionFactor(axis, window.getComputedStyle(endTarget).direction);
	var delta = directionFactor * sourceDelta;
	var target = event.target;
	var targetInLock = endTarget.contains(target);
	var shouldCancelScroll = false;
	var isDeltaPositive = delta > 0;
	var availableScroll = 0;
	var availableScrollTop = 0;
	do {
		if (!target) break;
		var _a = getScrollVariables(axis, target), position = _a[0];
		var elementScroll = _a[1] - _a[2] - directionFactor * position;
		if (position || elementScroll) {
			if (elementCouldBeScrolled(axis, target)) {
				availableScroll += elementScroll;
				availableScrollTop += position;
			}
		}
		var parent_1 = target.parentNode;
		target = parent_1 && parent_1.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? parent_1.host : parent_1;
	} while (!targetInLock && target !== document.body || targetInLock && (endTarget.contains(target) || endTarget === target));
	if (isDeltaPositive && (noOverscroll && Math.abs(availableScroll) < 1 || !noOverscroll && delta > availableScroll)) shouldCancelScroll = true;
	else if (!isDeltaPositive && (noOverscroll && Math.abs(availableScrollTop) < 1 || !noOverscroll && -delta > availableScrollTop)) shouldCancelScroll = true;
	return shouldCancelScroll;
};
var getTouchXY = function(event) {
	return "changedTouches" in event ? [event.changedTouches[0].clientX, event.changedTouches[0].clientY] : [0, 0];
};
var getDeltaXY = function(event) {
	return [event.deltaX, event.deltaY];
};
var extractRef = function(ref) {
	return ref && "current" in ref ? ref.current : ref;
};
var deltaCompare = function(x, y) {
	return x[0] === y[0] && x[1] === y[1];
};
var generateStyle = function(id) {
	return "\n  .block-interactivity-".concat(id, " {pointer-events: none;}\n  .allow-interactivity-").concat(id, " {pointer-events: all;}\n");
};
var idCounter = 0;
var lockStack = [];
function RemoveScrollSideCar(props) {
	var shouldPreventQueue = import_react.useRef([]);
	var touchStartRef = import_react.useRef([0, 0]);
	var activeAxis = import_react.useRef();
	var id = import_react.useState(idCounter++)[0];
	var Style = import_react.useState(styleSingleton)[0];
	var lastProps = import_react.useRef(props);
	import_react.useEffect(function() {
		lastProps.current = props;
	}, [props]);
	import_react.useEffect(function() {
		if (props.inert) {
			document.body.classList.add("block-interactivity-".concat(id));
			var allow_1 = __spreadArray([props.lockRef.current], (props.shards || []).map(extractRef), true).filter(Boolean);
			allow_1.forEach(function(el) {
				return el.classList.add("allow-interactivity-".concat(id));
			});
			return function() {
				document.body.classList.remove("block-interactivity-".concat(id));
				allow_1.forEach(function(el) {
					return el.classList.remove("allow-interactivity-".concat(id));
				});
			};
		}
	}, [
		props.inert,
		props.lockRef.current,
		props.shards
	]);
	var shouldCancelEvent = import_react.useCallback(function(event, parent) {
		if ("touches" in event && event.touches.length === 2 || event.type === "wheel" && event.ctrlKey) return !lastProps.current.allowPinchZoom;
		var touch = getTouchXY(event);
		var touchStart = touchStartRef.current;
		var deltaX = "deltaX" in event ? event.deltaX : touchStart[0] - touch[0];
		var deltaY = "deltaY" in event ? event.deltaY : touchStart[1] - touch[1];
		var currentAxis;
		var target = event.target;
		var moveDirection = Math.abs(deltaX) > Math.abs(deltaY) ? "h" : "v";
		if ("touches" in event && moveDirection === "h" && target.type === "range") return false;
		var selection = window.getSelection();
		var anchorNode = selection && selection.anchorNode;
		if (anchorNode ? anchorNode === target || anchorNode.contains(target) : false) return false;
		var canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
		if (!canBeScrolledInMainDirection) return true;
		if (canBeScrolledInMainDirection) currentAxis = moveDirection;
		else {
			currentAxis = moveDirection === "v" ? "h" : "v";
			canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
		}
		if (!canBeScrolledInMainDirection) return false;
		if (!activeAxis.current && "changedTouches" in event && (deltaX || deltaY)) activeAxis.current = currentAxis;
		if (!currentAxis) return true;
		var cancelingAxis = activeAxis.current || currentAxis;
		return handleScroll(cancelingAxis, parent, event, cancelingAxis === "h" ? deltaX : deltaY, true);
	}, []);
	var shouldPrevent = import_react.useCallback(function(_event) {
		var event = _event;
		if (!lockStack.length || lockStack[lockStack.length - 1] !== Style) return;
		var delta = "deltaY" in event ? getDeltaXY(event) : getTouchXY(event);
		var sourceEvent = shouldPreventQueue.current.filter(function(e) {
			return e.name === event.type && (e.target === event.target || event.target === e.shadowParent) && deltaCompare(e.delta, delta);
		})[0];
		if (sourceEvent && sourceEvent.should) {
			if (event.cancelable) event.preventDefault();
			return;
		}
		if (!sourceEvent) {
			var shardNodes = (lastProps.current.shards || []).map(extractRef).filter(Boolean).filter(function(node) {
				return node.contains(event.target);
			});
			if (shardNodes.length > 0 ? shouldCancelEvent(event, shardNodes[0]) : !lastProps.current.noIsolation) {
				if (event.cancelable) event.preventDefault();
			}
		}
	}, []);
	var shouldCancel = import_react.useCallback(function(name, delta, target, should) {
		var event = {
			name,
			delta,
			target,
			should,
			shadowParent: getOutermostShadowParent(target)
		};
		shouldPreventQueue.current.push(event);
		setTimeout(function() {
			shouldPreventQueue.current = shouldPreventQueue.current.filter(function(e) {
				return e !== event;
			});
		}, 1);
	}, []);
	var scrollTouchStart = import_react.useCallback(function(event) {
		touchStartRef.current = getTouchXY(event);
		activeAxis.current = void 0;
	}, []);
	var scrollWheel = import_react.useCallback(function(event) {
		shouldCancel(event.type, getDeltaXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
	}, []);
	var scrollTouchMove = import_react.useCallback(function(event) {
		shouldCancel(event.type, getTouchXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
	}, []);
	import_react.useEffect(function() {
		lockStack.push(Style);
		props.setCallbacks({
			onScrollCapture: scrollWheel,
			onWheelCapture: scrollWheel,
			onTouchMoveCapture: scrollTouchMove
		});
		document.addEventListener("wheel", shouldPrevent, nonPassive);
		document.addEventListener("touchmove", shouldPrevent, nonPassive);
		document.addEventListener("touchstart", scrollTouchStart, nonPassive);
		return function() {
			lockStack = lockStack.filter(function(inst) {
				return inst !== Style;
			});
			document.removeEventListener("wheel", shouldPrevent, nonPassive);
			document.removeEventListener("touchmove", shouldPrevent, nonPassive);
			document.removeEventListener("touchstart", scrollTouchStart, nonPassive);
		};
	}, []);
	var removeScrollBar = props.removeScrollBar, inert = props.inert;
	return import_react.createElement(import_react.Fragment, null, inert ? import_react.createElement(Style, { styles: generateStyle(id) }) : null, removeScrollBar ? import_react.createElement(RemoveScrollBar, {
		noRelative: props.noRelative,
		gapMode: props.gapMode
	}) : null);
}
function getOutermostShadowParent(node) {
	var shadowParent = null;
	while (node !== null) {
		if (node instanceof ShadowRoot) {
			shadowParent = node.host;
			node = node.host;
		}
		node = node.parentNode;
	}
	return shadowParent;
}
var sidecar_default = exportSidecar(effectCar, RemoveScrollSideCar);
var ReactRemoveScroll = import_react.forwardRef(function(props, ref) {
	return import_react.createElement(RemoveScroll, __assign({}, props, {
		ref,
		sideCar: sidecar_default
	}));
});
ReactRemoveScroll.classNames = RemoveScroll.classNames;
var __defProp$13 = Object.defineProperty;
var __name$13 = (target, value) => __defProp$13(target, "name", {
	value,
	configurable: true
});
/* @__NO_SIDE_EFFECTS__ */
function createSlot$1(ownerName) {
	const Slot2 = import_react.forwardRef((props, forwardedRef) => {
		let { children, ...slotProps } = props;
		let slottableElement = null;
		let hasSlottable = false;
		const newChildren = [];
		if (isLazyComponent$1(children) && typeof use$1 === "function") children = use$1(children._payload);
		import_react.Children.forEach(children, (maybeSlottable) => {
			if (isSlottable$1(maybeSlottable)) {
				hasSlottable = true;
				const slottable = maybeSlottable;
				let child = "child" in slottable.props ? slottable.props.child : slottable.props.children;
				if (isLazyComponent$1(child) && typeof use$1 === "function") child = use$1(child._payload);
				slottableElement = getSlottableElementFromSlottable$1(slottable, child);
				newChildren.push(slottableElement?.props?.children);
			} else newChildren.push(maybeSlottable);
		});
		if (slottableElement) slottableElement = import_react.cloneElement(slottableElement, void 0, newChildren);
		else if (!hasSlottable && import_react.Children.count(children) === 1 && import_react.isValidElement(children)) slottableElement = children;
		const slottableElementRef = slottableElement ? getElementRef$1(slottableElement) : void 0;
		const composedRef = useComposedRefs$6(forwardedRef, slottableElementRef);
		if (!slottableElement) {
			if (children || children === 0) throw new Error(hasSlottable ? createSlottableError$1(ownerName) : createSlotError$1(ownerName));
			return children;
		}
		const mergedProps = mergeProps$1(slotProps, slottableElement.props ?? {});
		if (slottableElement.type !== import_react.Fragment) mergedProps.ref = forwardedRef ? composedRef : slottableElementRef;
		return import_react.cloneElement(slottableElement, mergedProps);
	});
	Slot2.displayName = `${ownerName}.Slot`;
	return Slot2;
}
__name$13(createSlot$1, "createSlot");
var SLOTTABLE_IDENTIFIER$1 = Symbol.for("radix.slottable");
/* @__NO_SIDE_EFFECTS__ */
function createSlottable$1(ownerName) {
	const Slottable2 = /* @__PURE__ */ __name$13((props) => "child" in props ? props.children(props.child) : props.children, "Slottable");
	Slottable2.displayName = `${ownerName}.Slottable`;
	Slottable2.__radixId = SLOTTABLE_IDENTIFIER$1;
	return Slottable2;
}
__name$13(createSlottable$1, "createSlottable");
var getSlottableElementFromSlottable$1 = /* @__PURE__ */ __name$13((slottable, child) => {
	if ("child" in slottable.props) {
		const child2 = slottable.props.child;
		if (!import_react.isValidElement(child2)) return null;
		return import_react.cloneElement(child2, void 0, slottable.props.children(child2.props.children));
	}
	return import_react.isValidElement(child) ? child : null;
}, "getSlottableElementFromSlottable");
function mergeProps$1(slotProps, childProps) {
	const overrideProps = { ...childProps };
	for (const propName in childProps) {
		const slotPropValue = slotProps[propName];
		const childPropValue = childProps[propName];
		if (/^on[A-Z]/.test(propName)) {
			if (slotPropValue && childPropValue) overrideProps[propName] = (...args) => {
				const result = childPropValue(...args);
				slotPropValue(...args);
				return result;
			};
			else if (slotPropValue) overrideProps[propName] = slotPropValue;
		} else if (propName === "style") overrideProps[propName] = {
			...slotPropValue,
			...childPropValue
		};
		else if (propName === "className") overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(" ");
	}
	return {
		...slotProps,
		...overrideProps
	};
}
__name$13(mergeProps$1, "mergeProps");
function getElementRef$1(element) {
	let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
	let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
	if (mayWarn) return element.ref;
	getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
	mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
	if (mayWarn) return element.props.ref;
	return element.props.ref || element.ref;
}
__name$13(getElementRef$1, "getElementRef");
function isSlottable$1(child) {
	return import_react.isValidElement(child) && typeof child.type === "function" && "__radixId" in child.type && child.type.__radixId === SLOTTABLE_IDENTIFIER$1;
}
__name$13(isSlottable$1, "isSlottable");
var REACT_LAZY_TYPE$1 = Symbol.for("react.lazy");
function isLazyComponent$1(element) {
	return element != null && typeof element === "object" && "$$typeof" in element && element.$$typeof === REACT_LAZY_TYPE$1 && "_payload" in element && isPromiseLike$1(element._payload);
}
__name$13(isLazyComponent$1, "isLazyComponent");
function isPromiseLike$1(value) {
	return typeof value === "object" && value !== null && "then" in value;
}
__name$13(isPromiseLike$1, "isPromiseLike");
var createSlotError$1 = /* @__PURE__ */ __name$13((ownerName) => {
	return `${ownerName} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`;
}, "createSlotError");
var createSlottableError$1 = /* @__PURE__ */ __name$13((ownerName) => {
	return `${ownerName} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`;
}, "createSlottableError");
var use$1 = import_react[" use ".trim().toString()];
var __defProp$12 = Object.defineProperty;
var __name$12 = (target, value) => __defProp$12(target, "name", {
	value,
	configurable: true
});
var DIALOG_NAME = "Dialog";
var [createDialogContext, createDialogScope] = /* @__PURE__ */ createContextScope(DIALOG_NAME);
var [DialogProvider, useDialogContext] = createDialogContext(DIALOG_NAME);
var Dialog$1 = /* @__PURE__ */ __name$12((props) => {
	const { __scopeDialog, children, open: openProp, defaultOpen, onOpenChange, modal = true } = props;
	const triggerRef = import_react.useRef(null);
	const contentRef = import_react.useRef(null);
	const [open, setOpen] = useControllableState({
		prop: openProp,
		defaultProp: defaultOpen ?? false,
		onChange: onOpenChange,
		caller: DIALOG_NAME
	});
	const [titleCount, setTitleCount] = import_react.useState(0);
	const [descriptionCount, setDescriptionCount] = import_react.useState(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogProvider, {
		scope: __scopeDialog,
		triggerRef,
		contentRef,
		contentId: useId(),
		titleId: useId(),
		descriptionId: useId(),
		titlePresent: titleCount > 0,
		descriptionPresent: descriptionCount > 0,
		setTitleCount,
		setDescriptionCount,
		open,
		onOpenChange: setOpen,
		onOpenToggle: import_react.useCallback(() => setOpen((prevOpen) => !prevOpen), [setOpen]),
		modal,
		children
	});
}, "Dialog");
var PORTAL_NAME = "DialogPortal";
var [PortalProvider, usePortalContext] = createDialogContext(PORTAL_NAME, { forceMount: void 0 });
var DialogPortal$1 = /* @__PURE__ */ __name$12((props) => {
	const { __scopeDialog, forceMount, children, container } = props;
	const context = useDialogContext(PORTAL_NAME, __scopeDialog);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalProvider, {
		scope: __scopeDialog,
		forceMount,
		children: import_react.Children.map(children, (child) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, {
			present: forceMount || context.open,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal, {
				asChild: true,
				container,
				children: child
			})
		}))
	});
}, "DialogPortal");
var OVERLAY_NAME = "DialogOverlay";
var DialogOverlay$1 = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$12(function DialogOverlay2(props, forwardedRef) {
	const portalContext = usePortalContext(OVERLAY_NAME, props.__scopeDialog);
	const { forceMount = portalContext.forceMount, ...overlayProps } = props;
	const context = useDialogContext(OVERLAY_NAME, props.__scopeDialog);
	return context.modal ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, {
		present: forceMount || context.open,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlayImpl, {
			...overlayProps,
			ref: forwardedRef
		})
	}) : null;
}, "DialogOverlay"));
var Slot = /* @__PURE__ */ createSlot$1("DialogOverlay.RemoveScroll");
var DialogOverlayImpl = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$12(function DialogOverlayImpl2(props, forwardedRef) {
	const { __scopeDialog, ...overlayProps } = props;
	const context = useDialogContext(OVERLAY_NAME, __scopeDialog);
	const composedRefs = useComposedRefs$6(forwardedRef, useDismissableLayerSurface());
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReactRemoveScroll, {
		as: Slot,
		allowPinchZoom: true,
		shards: [context.contentRef],
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
			"data-state": getState$2(context.open),
			...overlayProps,
			ref: composedRefs,
			style: {
				pointerEvents: "auto",
				...overlayProps.style
			}
		})
	});
}, "DialogOverlayImpl"));
var CONTENT_NAME = "DialogContent";
var DialogContent$1 = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$12(function DialogContent2(props, forwardedRef) {
	const portalContext = usePortalContext(CONTENT_NAME, props.__scopeDialog);
	const { forceMount = portalContext.forceMount, ...contentProps } = props;
	const context = useDialogContext(CONTENT_NAME, props.__scopeDialog);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, {
		present: forceMount || context.open,
		children: context.modal ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContentModal, {
			...contentProps,
			ref: forwardedRef
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContentNonModal, {
			...contentProps,
			ref: forwardedRef
		})
	});
}, "DialogContent"));
var DialogContentModal = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$12(function DialogContentModal2(props, forwardedRef) {
	const context = useDialogContext(CONTENT_NAME, props.__scopeDialog);
	const contentRef = import_react.useRef(null);
	const composedRefs = useComposedRefs$6(forwardedRef, context.contentRef, contentRef);
	import_react.useEffect(() => {
		const content = contentRef.current;
		if (content) return hideOthers(content);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContentImpl, {
		...props,
		ref: composedRefs,
		trapFocus: context.open,
		disableOutsidePointerEvents: context.open,
		onCloseAutoFocus: composeEventHandlers(props.onCloseAutoFocus, (event) => {
			event.preventDefault();
			context.triggerRef.current?.focus();
		}),
		onPointerDownOutside: composeEventHandlers(props.onPointerDownOutside, (event) => {
			const originalEvent = event.detail.originalEvent;
			const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
			if (originalEvent.button === 2 || ctrlLeftClick) event.preventDefault();
		}),
		onFocusOutside: composeEventHandlers(props.onFocusOutside, (event) => event.preventDefault())
	});
}, "DialogContentModal"));
var DialogContentNonModal = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$12(function DialogContentNonModal2(props, forwardedRef) {
	const context = useDialogContext(CONTENT_NAME, props.__scopeDialog);
	const hasInteractedOutsideRef = import_react.useRef(false);
	const hasPointerDownOutsideRef = import_react.useRef(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContentImpl, {
		...props,
		ref: forwardedRef,
		trapFocus: false,
		disableOutsidePointerEvents: false,
		onCloseAutoFocus: (event) => {
			props.onCloseAutoFocus?.(event);
			if (!event.defaultPrevented) {
				if (!hasInteractedOutsideRef.current) context.triggerRef.current?.focus();
				event.preventDefault();
			}
			hasInteractedOutsideRef.current = false;
			hasPointerDownOutsideRef.current = false;
		},
		onInteractOutside: (event) => {
			props.onInteractOutside?.(event);
			if (!event.defaultPrevented) {
				hasInteractedOutsideRef.current = true;
				if (event.detail.originalEvent.type === "pointerdown") hasPointerDownOutsideRef.current = true;
			}
			const target = event.target;
			if (context.triggerRef.current?.contains(target)) event.preventDefault();
			if (event.detail.originalEvent.type === "focusin" && hasPointerDownOutsideRef.current) event.preventDefault();
		}
	});
}, "DialogContentNonModal"));
var DialogContentImpl = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$12(function DialogContentImpl2(props, forwardedRef) {
	const { __scopeDialog, trapFocus, onOpenAutoFocus, onCloseAutoFocus, ...contentProps } = props;
	const context = useDialogContext(CONTENT_NAME, __scopeDialog);
	useFocusGuards();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FocusScope, {
		asChild: true,
		loop: true,
		trapped: trapFocus,
		onMountAutoFocus: onOpenAutoFocus,
		onUnmountAutoFocus: onCloseAutoFocus,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DismissableLayer, {
			role: "dialog",
			id: context.contentId,
			"aria-describedby": context.descriptionPresent ? context.descriptionId : void 0,
			"aria-labelledby": context.titlePresent ? context.titleId : void 0,
			"data-state": getState$2(context.open),
			...contentProps,
			ref: forwardedRef,
			deferPointerDownOutside: true,
			onDismiss: () => context.onOpenChange(false)
		})
	}) });
}, "DialogContentImpl"));
var TITLE_NAME = "DialogTitle";
var DialogTitle$1 = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$12(function DialogTitle2(props, forwardedRef) {
	const { __scopeDialog, ...titleProps } = props;
	const context = useDialogContext(TITLE_NAME, __scopeDialog);
	const { setTitleCount } = context;
	useLayoutEffect2(() => {
		setTitleCount((count) => count + 1);
		return () => setTitleCount((count) => count - 1);
	}, [setTitleCount]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.h2, {
		id: context.titleId,
		...titleProps,
		ref: forwardedRef
	});
}, "DialogTitle"));
var DESCRIPTION_NAME = "DialogDescription";
var DialogDescription$1 = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$12(function DialogDescription2(props, forwardedRef) {
	const { __scopeDialog, ...descriptionProps } = props;
	const context = useDialogContext(DESCRIPTION_NAME, __scopeDialog);
	const { setDescriptionCount } = context;
	useLayoutEffect2(() => {
		setDescriptionCount((count) => count + 1);
		return () => setDescriptionCount((count) => count - 1);
	}, [setDescriptionCount]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.p, {
		id: context.descriptionId,
		...descriptionProps,
		ref: forwardedRef
	});
}, "DialogDescription"));
var CLOSE_NAME = "DialogClose";
var DialogClose = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$12(function DialogClose2(props, forwardedRef) {
	const { __scopeDialog, ...closeProps } = props;
	const context = useDialogContext(CLOSE_NAME, __scopeDialog);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.button, {
		type: "button",
		...closeProps,
		ref: forwardedRef,
		onClick: composeEventHandlers(props.onClick, () => context.onOpenChange(false))
	});
}, "DialogClose"));
function getState$2(open) {
	return open ? "open" : "closed";
}
__name$12(getState$2, "getState");
function Dialog({ ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog$1, {
		"data-slot": "dialog",
		...props
	});
}
function DialogPortal({ ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogPortal$1, {
		"data-slot": "dialog-portal",
		...props
	});
}
function DialogOverlay({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
		"data-slot": "dialog-overlay",
		className: cn("fixed inset-0 z-50 bg-black/50 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0", className),
		...props
	});
}
function DialogContent({ className, children, showCloseButton = true, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, {
		"data-slot": "dialog-portal",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
			"data-slot": "dialog-content",
			className: cn("fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border bg-background p-6 shadow-lg duration-200 outline-none data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 sm:max-w-lg", className),
			...props,
			children: [children, showCloseButton && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
				"data-slot": "dialog-close",
				className: "absolute top-4 right-4 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "sr-only",
					children: "Close"
				})]
			})]
		})]
	});
}
function DialogHeader({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"data-slot": "dialog-header",
		className: cn("flex flex-col gap-2 text-center sm:text-left", className),
		...props
	});
}
function DialogTitle({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
		"data-slot": "dialog-title",
		className: cn("text-lg leading-none font-semibold", className),
		...props
	});
}
function DialogDescription({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
		"data-slot": "dialog-description",
		className: cn("text-sm text-muted-foreground", className),
		...props
	});
}
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Check = createLucideIcon("check", [["path", {
	d: "M20 6 9 17l-5-5",
	key: "1gmf2c"
}]]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Eye = createLucideIcon("eye", [["path", {
	d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
	key: "1nclc0"
}], ["circle", {
	cx: "12",
	cy: "12",
	r: "3",
	key: "1v7zrd"
}]]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var EyeOff = createLucideIcon("eye-off", [
	["path", {
		d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",
		key: "ct8e1f"
	}],
	["path", {
		d: "M14.084 14.158a3 3 0 0 1-4.242-4.242",
		key: "151rxh"
	}],
	["path", {
		d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",
		key: "13bj9a"
	}],
	["path", {
		d: "m2 2 20 20",
		key: "1ooewy"
	}]
]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var FingerprintPattern = createLucideIcon("fingerprint-pattern", [
	["path", {
		d: "M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4",
		key: "1nerag"
	}],
	["path", {
		d: "M14 13.12c0 2.38 0 6.38-1 8.88",
		key: "o46ks0"
	}],
	["path", {
		d: "M17.29 21.02c.12-.6.43-2.3.5-3.02",
		key: "ptglia"
	}],
	["path", {
		d: "M2 12a10 10 0 0 1 18-6",
		key: "ydlgp0"
	}],
	["path", {
		d: "M2 16h.01",
		key: "1gqxmh"
	}],
	["path", {
		d: "M21.8 16c.2-2 .131-5.354 0-6",
		key: "drycrb"
	}],
	["path", {
		d: "M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2",
		key: "1tidbn"
	}],
	["path", {
		d: "M8.65 22c.21-.66.45-1.32.57-2",
		key: "13wd9y"
	}],
	["path", {
		d: "M9 6.8a6 6 0 0 1 9 5.2v2",
		key: "1fr1j5"
	}]
]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var KeyRound = createLucideIcon("key-round", [["path", {
	d: "M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z",
	key: "1s6t7t"
}], ["circle", {
	cx: "16.5",
	cy: "7.5",
	r: ".5",
	fill: "currentColor",
	key: "w0ekpg"
}]]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var LockKeyhole = createLucideIcon("lock-keyhole", [
	["circle", {
		cx: "12",
		cy: "16",
		r: "1",
		key: "1au0dj"
	}],
	["rect", {
		x: "3",
		y: "10",
		width: "18",
		height: "12",
		rx: "2",
		key: "6s8ecr"
	}],
	["path", {
		d: "M7 10V7a5 5 0 0 1 10 0v3",
		key: "1pqi11"
	}]
]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Mail = createLucideIcon("mail", [["path", {
	d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",
	key: "132q7q"
}], ["rect", {
	x: "2",
	y: "4",
	width: "20",
	height: "16",
	rx: "2",
	key: "izxlao"
}]]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Sparkles = createLucideIcon("sparkles", [
	["path", {
		d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
		key: "1s2grr"
	}],
	["path", {
		d: "M20 2v4",
		key: "1rf3ol"
	}],
	["path", {
		d: "M22 4h-4",
		key: "gwowj6"
	}],
	["circle", {
		cx: "4",
		cy: "20",
		r: "2",
		key: "6kqj1y"
	}]
]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var UserRound = createLucideIcon("user-round", [["circle", {
	cx: "12",
	cy: "8",
	r: "5",
	key: "1hypcn"
}], ["path", {
	d: "M20 21a8 8 0 0 0-16 0",
	key: "rfgkzh"
}]]);
function Input({ className, type, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		"data-slot": "input",
		className: cn("h-9 w-full min-w-0 rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none selection:bg-primary selection:text-primary-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:bg-input/30", "focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50", "aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40", className),
		...props
	});
}
var __defProp$11 = Object.defineProperty;
var __name$11 = (target, value) => __defProp$11(target, "name", {
	value,
	configurable: true
});
function setRef$3(ref, value) {
	if (typeof ref === "function") return ref(value);
	else if (ref !== null && ref !== void 0) ref.current = value;
}
__name$11(setRef$3, "setRef");
function composeRefs$3(...refs) {
	return (node) => {
		let hasCleanup = false;
		const cleanups = refs.map((ref) => {
			const cleanup = setRef$3(ref, node);
			if (!hasCleanup && typeof cleanup == "function") hasCleanup = true;
			return cleanup;
		});
		if (hasCleanup) return () => {
			for (let i = 0; i < cleanups.length; i++) {
				const cleanup = cleanups[i];
				if (typeof cleanup == "function") cleanup();
				else setRef$3(refs[i], null);
			}
		};
	};
}
__name$11(composeRefs$3, "composeRefs");
function useComposedRefs$3(...refs) {
	return import_react.useCallback(composeRefs$3(...refs), refs);
}
__name$11(useComposedRefs$3, "useComposedRefs");
var __defProp$10 = Object.defineProperty;
var __name$10 = (target, value) => __defProp$10(target, "name", {
	value,
	configurable: true
});
function useSize(element) {
	const [size, setSize] = import_react.useState(void 0);
	useLayoutEffect2(() => {
		if (element) {
			setSize({
				width: element.offsetWidth,
				height: element.offsetHeight
			});
			const resizeObserver = new ResizeObserver((entries) => {
				if (!Array.isArray(entries)) return;
				if (!entries.length) return;
				const entry = entries[0];
				let width;
				let height;
				if ("borderBoxSize" in entry) {
					const borderSizeEntry = entry["borderBoxSize"];
					const borderSize = Array.isArray(borderSizeEntry) ? borderSizeEntry[0] : borderSizeEntry;
					width = borderSize["inlineSize"];
					height = borderSize["blockSize"];
				} else {
					width = element.offsetWidth;
					height = element.offsetHeight;
				}
				setSize({
					width,
					height
				});
			});
			resizeObserver.observe(element, { box: "border-box" });
			return () => resizeObserver.unobserve(element);
		} else setSize(void 0);
	}, [element]);
	return size;
}
__name$10(useSize, "useSize");
var __defProp$9 = Object.defineProperty;
var __name$9 = (target, value) => __defProp$9(target, "name", {
	value,
	configurable: true
});
var CHECKBOX_NAME = "Checkbox";
var [createCheckboxContext, createCheckboxScope] = /* @__PURE__ */ createContextScope(CHECKBOX_NAME);
var [CheckboxProviderImpl, useCheckboxContext] = createCheckboxContext(CHECKBOX_NAME);
function CheckboxProvider(props) {
	const { __scopeCheckbox, checked: checkedProp, children, defaultChecked, disabled, form, name, onCheckedChange, required, value = "on", internal_do_not_use_render } = props;
	const [checked, setChecked] = useControllableState({
		prop: checkedProp,
		defaultProp: defaultChecked ?? false,
		onChange: onCheckedChange,
		caller: CHECKBOX_NAME
	});
	const [control, setControl] = import_react.useState(null);
	const [bubbleInput, setBubbleInput] = import_react.useState(null);
	const hasConsumerStoppedPropagationRef = import_react.useRef(false);
	const [userInteractionCount, onUserInteraction] = import_react.useReducer((count) => count + 1, 0);
	const isFormControl = control ? !!form || !!control.closest("form") : true;
	const context = {
		checked,
		disabled,
		setChecked,
		control,
		setControl,
		name,
		form,
		value,
		hasConsumerStoppedPropagationRef,
		userInteractionCount,
		onUserInteraction,
		required,
		defaultChecked: isIndeterminate(defaultChecked) ? false : defaultChecked,
		isFormControl,
		bubbleInput,
		setBubbleInput
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckboxProviderImpl, {
		scope: __scopeCheckbox,
		...context,
		children: isFunction$2(internal_do_not_use_render) ? internal_do_not_use_render(context) : children
	});
}
__name$9(CheckboxProvider, "CheckboxProvider");
var TRIGGER_NAME$1 = "CheckboxTrigger";
var CheckboxTrigger = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$9(function CheckboxTrigger2({ __scopeCheckbox, onKeyDown, onClick, ...checkboxProps }, forwardedRef) {
	const { control, value, disabled, checked, required, setControl, setChecked, hasConsumerStoppedPropagationRef, onUserInteraction, isFormControl, bubbleInput } = useCheckboxContext(TRIGGER_NAME$1, __scopeCheckbox);
	const composedRefs = useComposedRefs$3(forwardedRef, setControl);
	const initialCheckedStateRef = import_react.useRef(checked);
	import_react.useEffect(() => {
		const form = control?.form;
		if (form) {
			const reset = /* @__PURE__ */ __name$9(() => setChecked(initialCheckedStateRef.current), "reset");
			form.addEventListener("reset", reset);
			return () => form.removeEventListener("reset", reset);
		}
	}, [control, setChecked]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.button, {
		type: "button",
		role: "checkbox",
		"aria-checked": isIndeterminate(checked) ? "mixed" : checked,
		"aria-required": required,
		"data-state": getState$1(checked),
		"data-disabled": disabled ? "" : void 0,
		disabled,
		value,
		...checkboxProps,
		ref: composedRefs,
		onKeyDown: composeEventHandlers(onKeyDown, (event) => {
			if (event.key === "Enter") event.preventDefault();
		}),
		onClick: composeEventHandlers(onClick, (event) => {
			onUserInteraction();
			setChecked((prevChecked) => isIndeterminate(prevChecked) ? true : !prevChecked);
			if (bubbleInput && isFormControl) {
				hasConsumerStoppedPropagationRef.current = event.isPropagationStopped();
				if (!hasConsumerStoppedPropagationRef.current) event.stopPropagation();
			}
		})
	});
}, "CheckboxTrigger"));
var Checkbox$1 = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$9(function Checkbox2(props, forwardedRef) {
	const { __scopeCheckbox, name, checked, defaultChecked, required, disabled, value, onCheckedChange, form, ...checkboxProps } = props;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckboxProvider, {
		__scopeCheckbox,
		checked,
		defaultChecked,
		disabled,
		required,
		onCheckedChange,
		name,
		form,
		value,
		internal_do_not_use_render: ({ isFormControl }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckboxTrigger, {
			...checkboxProps,
			ref: forwardedRef,
			__scopeCheckbox
		}), isFormControl && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckboxBubbleInput, { __scopeCheckbox })] })
	});
}, "Checkbox"));
var INDICATOR_NAME = "CheckboxIndicator";
var CheckboxIndicator = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$9(function CheckboxIndicator2(props, forwardedRef) {
	const { __scopeCheckbox, forceMount, ...indicatorProps } = props;
	const context = useCheckboxContext(INDICATOR_NAME, __scopeCheckbox);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, {
		present: forceMount || isIndeterminate(context.checked) || context.checked === true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.span, {
			"data-state": getState$1(context.checked),
			"data-disabled": context.disabled ? "" : void 0,
			...indicatorProps,
			ref: forwardedRef,
			style: {
				pointerEvents: "none",
				...props.style
			}
		})
	});
}, "CheckboxIndicator"));
var BUBBLE_INPUT_NAME$2 = "CheckboxBubbleInput";
var CheckboxBubbleInput = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$9(function CheckboxBubbleInput2({ __scopeCheckbox, onClick, ...props }, forwardedRef) {
	const { control, hasConsumerStoppedPropagationRef, userInteractionCount, checked, defaultChecked, required, disabled, name, value, form, bubbleInput, setBubbleInput } = useCheckboxContext(BUBBLE_INPUT_NAME$2, __scopeCheckbox);
	const composedRefs = useComposedRefs$3(forwardedRef, setBubbleInput);
	const controlSize = useSize(control);
	const shouldStopClickPropagationRef = import_react.useRef(false);
	const prevCheckedRef = import_react.useRef(checked);
	const prevUserInteractionCountRef = import_react.useRef(userInteractionCount);
	import_react.useEffect(() => {
		const input = bubbleInput;
		if (!input) return;
		const inputProto = window.HTMLInputElement.prototype;
		const setChecked = Object.getOwnPropertyDescriptor(inputProto, "checked").set;
		const isUserInteraction = userInteractionCount !== prevUserInteractionCountRef.current;
		prevUserInteractionCountRef.current = userInteractionCount;
		const checkedChanged = prevCheckedRef.current !== checked;
		prevCheckedRef.current = checked;
		const bubbles = !(isUserInteraction && hasConsumerStoppedPropagationRef.current);
		if (checkedChanged && setChecked) {
			shouldStopClickPropagationRef.current = !isUserInteraction;
			const event = new Event("click", { bubbles });
			input.indeterminate = isIndeterminate(checked);
			setChecked.call(input, isIndeterminate(checked) ? false : checked);
			input.dispatchEvent(event);
			shouldStopClickPropagationRef.current = false;
		}
	}, [
		bubbleInput,
		checked,
		hasConsumerStoppedPropagationRef,
		userInteractionCount
	]);
	const defaultCheckedRef = import_react.useRef(isIndeterminate(checked) ? false : checked);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.input, {
		type: "checkbox",
		"aria-hidden": true,
		defaultChecked: defaultChecked ?? defaultCheckedRef.current,
		required,
		disabled,
		name,
		value,
		form,
		...props,
		tabIndex: -1,
		ref: composedRefs,
		onClick: composeEventHandlers(onClick, (event) => {
			if (shouldStopClickPropagationRef.current) event.stopPropagation();
		}),
		style: {
			...props.style,
			...controlSize,
			position: "absolute",
			pointerEvents: "none",
			opacity: 0,
			margin: 0,
			transform: "translateX(-100%)"
		}
	});
}, "CheckboxBubbleInput"));
function isFunction$2(value) {
	return typeof value === "function";
}
__name$9(isFunction$2, "isFunction");
function isIndeterminate(checked) {
	return checked === "indeterminate";
}
__name$9(isIndeterminate, "isIndeterminate");
function getState$1(checked) {
	return isIndeterminate(checked) ? "indeterminate" : checked ? "checked" : "unchecked";
}
__name$9(getState$1, "getState");
function Checkbox({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox$1, {
		"data-slot": "checkbox",
		className: cn("peer size-4 shrink-0 rounded-[4px] border border-input shadow-xs transition-shadow outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:bg-input/30 dark:aria-invalid:ring-destructive/40 dark:data-[state=checked]:bg-primary", className),
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckboxIndicator, {
			"data-slot": "checkbox-indicator",
			className: "grid place-content-center text-current transition-none",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5" })
		})
	});
}
function playCoinRainSound(delaySeconds = 0) {
	const AudioContextClass = window.AudioContext || window.webkitAudioContext;
	if (!AudioContextClass) return;
	const context = new AudioContextClass();
	context.resume();
	const now = context.currentTime;
	const master = context.createGain();
	master.gain.setValueAtTime(.14, now);
	master.gain.exponentialRampToValueAtTime(.001, now + delaySeconds + 1.55);
	master.connect(context.destination);
	[
		0,
		.08,
		.16,
		.26,
		.38,
		.52,
		.68,
		.86,
		1.04
	].forEach((offset, index) => {
		const start = now + delaySeconds + offset;
		const oscillator = context.createOscillator();
		const gain = context.createGain();
		oscillator.type = "triangle";
		oscillator.frequency.setValueAtTime(1320 + index * 62, start);
		oscillator.frequency.exponentialRampToValueAtTime(680 + index * 24, start + .13);
		gain.gain.setValueAtTime(1e-4, start);
		gain.gain.exponentialRampToValueAtTime(.85, start + .01);
		gain.gain.exponentialRampToValueAtTime(1e-4, start + .17);
		oscillator.connect(gain);
		gain.connect(master);
		oscillator.start(start);
		oscillator.stop(start + .19);
	});
	window.setTimeout(() => void context.close(), Math.ceil((delaySeconds + 1.9) * 1e3));
}
function isAuthSession(value) {
	return "name" in value && "email" in value && "company" in value && "method" in value;
}
function AuthScreen({ onAuthenticated }) {
	const [mode, setMode] = (0, import_react.useState)("signin");
	const [name, setName] = (0, import_react.useState)("");
	const [company, setCompany] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("demo@recoveriq.ai");
	const [password, setPassword] = (0, import_react.useState)("Recover@2026");
	const [showPassword, setShowPassword] = (0, import_react.useState)(false);
	const [remember, setRemember] = (0, import_react.useState)(true);
	const [error, setError] = (0, import_react.useState)("");
	const [notice, setNotice] = (0, import_react.useState)("");
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	const [googleReady, setGoogleReady] = (0, import_react.useState)(false);
	const googleClient = (0, import_react.useRef)(null);
	const googleClientId = "899876132975-d79jhqhkakicnf0tr1qnjdcrbgmg6ms3.apps.googleusercontent.com";
	const finish = (0, import_react.useCallback)((session) => {
		playCoinRainSound(.42);
		setSubmitting(true);
		window.setTimeout(() => onAuthenticated(session), 420);
	}, [onAuthenticated]);
	const verifyGoogleToken = (0, import_react.useCallback)(async (response) => {
		if (!response.access_token || response.error) {
			setSubmitting(false);
			setError("Google sign-in was cancelled or denied.");
			return;
		}
		try {
			const verified = await fetch("/api/auth/google", {
				method: "POST",
				headers: { "content-type": "application/json" },
				body: JSON.stringify({ accessToken: response.access_token })
			});
			const session = await verified.json();
			if (!verified.ok || !isAuthSession(session)) throw new Error("error" in session ? session.error : "Google verification failed");
			finish(session);
		} catch (caught) {
			setSubmitting(false);
			setError(caught instanceof Error ? caught.message : "Google sign-in could not be verified.");
		}
	}, [finish]);
	(0, import_react.useEffect)(() => {
		const configure = () => {
			if (!window.google?.accounts?.oauth2) return;
			googleClient.current = window.google.accounts.oauth2.initTokenClient({
				client_id: googleClientId,
				scope: "openid email profile",
				callback: verifyGoogleToken
			});
			setGoogleReady(true);
		};
		const existing = document.querySelector("script[src=\"https://accounts.google.com/gsi/client\"]");
		if (existing) {
			configure();
			existing.addEventListener("load", configure, { once: true });
			return () => existing.removeEventListener("load", configure);
		}
		const script = document.createElement("script");
		script.src = "https://accounts.google.com/gsi/client";
		script.async = true;
		script.defer = true;
		script.onload = configure;
		script.onerror = () => setError("Google sign-in could not be loaded. Check your connection.");
		document.head.appendChild(script);
	}, [googleClientId, verifyGoogleToken]);
	function signInWithGoogle() {
		setError("");
		setNotice("");
		if (!googleReady || !googleClient.current) {
			setError("Google sign-in is still loading. Try again in a moment.");
			return;
		}
		setSubmitting(true);
		googleClient.current.requestAccessToken({ prompt: "select_account" });
	}
	function submit(event) {
		event.preventDefault();
		setError("");
		setNotice("");
		if (!email.includes("@")) return setError("Enter a valid work email address.");
		if (mode === "reset") {
			setNotice("Reset instructions prepared for this demo account. You can return to sign in.");
			return;
		}
		if (password.length < 8) return setError("Password must contain at least 8 characters.");
		if (mode === "signup" && (!name.trim() || !company.trim())) return setError("Add your name and company to create the workspace.");
		finish({
			name: mode === "signup" ? name.trim() : "Abdus Sami",
			email,
			company: mode === "signup" ? company.trim() : "RecoverIQ Demo Merchant",
			method: "password"
		});
	}
	function switchMode(next) {
		setMode(next);
		setError("");
		setNotice("");
		if (next === "signup") {
			setEmail("");
			setPassword("");
		}
		if (next === "signin") {
			setEmail("demo@recoveriq.ai");
			setPassword("Recover@2026");
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "auth-shell",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "auth-story",
			"aria-label": "RecoverIQ product introduction",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "auth-grid",
					"aria-hidden": "true"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "auth-orbit auth-orbit-one",
					"aria-hidden": "true"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "auth-orbit auth-orbit-two",
					"aria-hidden": "true"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "auth-brand",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "auth-brand-mark",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, {})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "RecoverIQ" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "REVENUE INTELLIGENCE" })] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "auth-story-copy",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "auth-kicker",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {}), " BUILT FOR PAYMENT RECOVERY"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", { children: ["Revenue shouldn't disappear after ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "one failed payment." })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Predict what can be recovered. Authorize the right action. Prove every rupee returned—with financial safety built into the workflow." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "auth-proof-row",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "91%" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "top recovery score" })] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "2×" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "bounded attempts" })] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "100%" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "auditable actions" })] })
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "money-console",
					"aria-label": "Sample recovered revenue visualization",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "money-console-top",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}), " LIVE RECOVERY PULSE"] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "money-console-value",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "SIMULATED REVENUE RECOVERED" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "₹4,82,650" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "+18.4% this cycle" })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "money-bars",
							"aria-hidden": "true",
							children: [
								34,
								48,
								43,
								62,
								54,
								74,
								66,
								88,
								82,
								96
							].map((height, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { style: { height: `${height}%` } }, index))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "floating-payment floating-payment-a",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "payment-status",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Payment recovered" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "UPI · ₹8,420" })] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "Just now" })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "floating-payment floating-payment-b",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "payment-status payment-status-blue",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WalletCards, {})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Link authorized" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "Guardrail approved" })] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "12 sec" })
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
					className: "auth-story-footer",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LockKeyhole, {}), " Financial-grade guardrails"] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Razorpay Buildathon · 2026" })]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "auth-form-side",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "auth-mobile-brand",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "auth-brand-mark",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, {})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "RecoverIQ" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "auth-form-wrap",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "auth-form-icon",
							children: mode === "signup" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserRound, {}) : mode === "reset" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyRound, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FingerprintPattern, {})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "auth-overline",
							children: "SECURE MERCHANT WORKSPACE"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: mode === "signin" ? "Welcome back" : mode === "signup" ? "Create your workspace" : "Reset your password" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "auth-subtitle",
							children: mode === "signin" ? "Sign in to continue recovering revenue." : mode === "signup" ? "Start with a safe, credential-free demo workspace." : "Enter your email and we’ll prepare reset instructions."
						}),
						mode !== "reset" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							className: "google-button",
							type: "button",
							onClick: signInWithGoogle,
							disabled: submitting,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "google-g",
								children: "G"
							}), " Continue with Google"]
						}),
						mode !== "reset" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "auth-divider",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "or continue with email" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: submit,
							className: "auth-form",
							noValidate: true,
							children: [
								mode === "signup" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "auth-field-row",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthField, {
										label: "Full name",
										icon: UserRound,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											value: name,
											onChange: (e) => setName(e.target.value),
											placeholder: "Abdus Sami",
											autoComplete: "name"
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthField, {
										label: "Company",
										icon: WalletCards,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											value: company,
											onChange: (e) => setCompany(e.target.value),
											placeholder: "RecoverIQ Demo Merchant",
											autoComplete: "organization"
										})
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthField, {
									label: "Work email",
									icon: Mail,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										type: "email",
										value: email,
										onChange: (e) => setEmail(e.target.value),
										placeholder: "you@company.com",
										autoComplete: "email"
									})
								}),
								mode !== "reset" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthField, {
									label: "Password",
									icon: LockKeyhole,
									action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setShowPassword(!showPassword),
										"aria-label": showPassword ? "Hide password" : "Show password",
										children: showPassword ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOff, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, {})
									}),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										type: showPassword ? "text" : "password",
										value: password,
										onChange: (e) => setPassword(e.target.value),
										placeholder: "At least 8 characters",
										autoComplete: mode === "signup" ? "new-password" : "current-password"
									})
								}),
								mode === "signin" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "auth-form-options",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
											checked: remember,
											onCheckedChange: (value) => setRemember(value === true)
										}),
										" ",
										"Keep me signed in"
									] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => switchMode("reset"),
										children: "Forgot password?"
									})]
								}),
								error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "auth-message auth-error",
									role: "alert",
									children: error
								}),
								notice && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "auth-message auth-success",
									role: "status",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {}), notice]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									type: "submit",
									className: "auth-submit",
									disabled: submitting,
									children: [submitting ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "auth-spinner" }) : mode === "signin" ? "Sign in to RecoverIQ" : mode === "signup" ? "Create demo workspace" : "Send reset instructions", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
								})
							]
						}),
						mode === "signin" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							className: "demo-access",
							onClick: () => finish({
								name: "Buildathon Judge",
								email: "judge@recoveriq.demo",
								company: "RecoverIQ Demo Merchant",
								method: "demo"
							}),
							disabled: submitting,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Explore the judge demo" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "No credentials or API keys needed" })] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "auth-switch",
							children: mode === "signin" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
								"New to RecoverIQ?",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => switchMode("signup"),
									children: "Create an account"
								})
							] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
								"Already have an account?",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => switchMode("signin"),
									children: "Sign in"
								})
							] })
						}),
						mode === "reset" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "auth-back",
							onClick: () => switchMode("signin"),
							children: "← Back to sign in"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "auth-trust",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Protected by deterministic guardrails" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "AI can recommend. Only rules can authorize." })] })]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
					className: "auth-form-footer",
					children: "Google OAuth requires configured client credentials"
				})
			]
		})]
	});
}
function AuthField({ label, icon: Icon, action, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "auth-field",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "auth-input-wrap",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "auth-input-icon" }),
				children,
				action && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "auth-input-action",
					children: action
				})
			]
		})]
	});
}
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var TrendingUp = createLucideIcon("trending-up", [["path", {
	d: "M16 7h6v6",
	key: "box55l"
}], ["path", {
	d: "m22 7-8.5 8.5-5-5L2 17",
	key: "1t1m79"
}]]);
function RevenueEntry({ session, portfolioValue, onComplete }) {
	(0, import_react.useEffect)(() => {
		const timer = window.setTimeout(onComplete, 2100);
		return () => window.clearTimeout(timer);
	}, [onComplete]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "revenue-entry",
		"aria-label": "Signing in to RecoverIQ",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "entry-grid",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "entry-glow",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "entry-coins",
				"aria-hidden": "true",
				children: [
					"₹",
					"₹",
					"₹",
					"₹",
					"₹",
					"₹",
					"₹",
					"₹",
					"₹"
				].map((coin, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {
					style: {
						"--coin-index": index,
						left: `${8 + index * 10}%`
					},
					children: coin
				}, index))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "entry-card",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "entry-logo",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "entry-kicker",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {}), " REVENUE INTELLIGENCE ONLINE"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", { children: ["Welcome, ", session.name.split(" ")[0]] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Securing your workspace and connecting the recovery control plane." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "entry-value",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: portfolioValue !== void 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: new Intl.NumberFormat("en-IN", {
							style: "currency",
							currency: "INR",
							maximumFractionDigits: 0
						}).format(portfolioValue) }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: "entry-calculating",
							children: "Calculating…"
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "SYNTHETIC PORTFOLIO REVENUE AT RISK" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "entry-progress",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "entry-checks",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {}), " Session verified"] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {}), " Guardrails active"] })]
					})
				]
			})
		]
	});
}
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Copy = createLucideIcon("copy", [["rect", {
	width: "14",
	height: "14",
	x: "8",
	y: "8",
	rx: "2",
	ry: "2",
	key: "17jyea"
}], ["path", {
	d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
	key: "zix9uf"
}]]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Save = createLucideIcon("save", [
	["path", {
		d: "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",
		key: "1c8476"
	}],
	["path", {
		d: "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",
		key: "1ydtos"
	}],
	["path", {
		d: "M7 3v4a1 1 0 0 0 1 1h7",
		key: "t51u73"
	}]
]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var TestTubeDiagonal = createLucideIcon("test-tube-diagonal", [
	["path", {
		d: "M21 7 6.82 21.18a2.83 2.83 0 0 1-3.99-.01a2.83 2.83 0 0 1 0-4L17 3",
		key: "1ub6xw"
	}],
	["path", {
		d: "m16 2 6 6",
		key: "1gw87d"
	}],
	["path", {
		d: "M12 16H4",
		key: "1cjfip"
	}]
]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var TimerReset = createLucideIcon("timer-reset", [
	["path", {
		d: "M10 2h4",
		key: "n1abiw"
	}],
	["path", {
		d: "M12 14v-4",
		key: "1evpnu"
	}],
	["path", {
		d: "M4 13a8 8 0 0 1 8-7 8 8 0 1 1-5.3 14L4 17.6",
		key: "1ts96g"
	}],
	["path", {
		d: "M9 17H4v5",
		key: "8t5av"
	}]
]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Webhook = createLucideIcon("webhook", [
	["path", {
		d: "M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2",
		key: "q3hayz"
	}],
	["path", {
		d: "m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06",
		key: "1go1hn"
	}],
	["path", {
		d: "m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8",
		key: "qlwsc0"
	}]
]);
/**
* @license lucide-react v1.31.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Zap = createLucideIcon("zap", [["path", {
	d: "M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z",
	key: "1v7up4"
}]]);
var __defProp$8 = Object.defineProperty;
var __name$8 = (target, value) => __defProp$8(target, "name", {
	value,
	configurable: true
});
function setRef$2(ref, value) {
	if (typeof ref === "function") return ref(value);
	else if (ref !== null && ref !== void 0) ref.current = value;
}
__name$8(setRef$2, "setRef");
function composeRefs$2(...refs) {
	return (node) => {
		let hasCleanup = false;
		const cleanups = refs.map((ref) => {
			const cleanup = setRef$2(ref, node);
			if (!hasCleanup && typeof cleanup == "function") hasCleanup = true;
			return cleanup;
		});
		if (hasCleanup) return () => {
			for (let i = 0; i < cleanups.length; i++) {
				const cleanup = cleanups[i];
				if (typeof cleanup == "function") cleanup();
				else setRef$2(refs[i], null);
			}
		};
	};
}
__name$8(composeRefs$2, "composeRefs");
function useComposedRefs$2(...refs) {
	return import_react.useCallback(composeRefs$2(...refs), refs);
}
__name$8(useComposedRefs$2, "useComposedRefs");
var __defProp$7 = Object.defineProperty;
var __name$7 = (target, value) => __defProp$7(target, "name", {
	value,
	configurable: true
});
var DirectionContext = import_react.createContext(void 0);
function useDirection(localDir) {
	const globalDir = import_react.useContext(DirectionContext);
	return localDir || globalDir || "ltr";
}
__name$7(useDirection, "useDirection");
var __defProp$6 = Object.defineProperty;
var __name$6 = (target, value) => __defProp$6(target, "name", {
	value,
	configurable: true
});
function usePrevious(value) {
	const ref = import_react.useRef({
		value,
		previous: value
	});
	return import_react.useMemo(() => {
		if (ref.current.value !== value) {
			ref.current.previous = ref.current.value;
			ref.current.value = value;
		}
		return ref.current.previous;
	}, [value]);
}
__name$6(usePrevious, "usePrevious");
var __defProp$5 = Object.defineProperty;
var __name$5 = (target, value) => __defProp$5(target, "name", {
	value,
	configurable: true
});
function setRef$1(ref, value) {
	if (typeof ref === "function") return ref(value);
	else if (ref !== null && ref !== void 0) ref.current = value;
}
__name$5(setRef$1, "setRef");
function composeRefs$1(...refs) {
	return (node) => {
		let hasCleanup = false;
		const cleanups = refs.map((ref) => {
			const cleanup = setRef$1(ref, node);
			if (!hasCleanup && typeof cleanup == "function") hasCleanup = true;
			return cleanup;
		});
		if (hasCleanup) return () => {
			for (let i = 0; i < cleanups.length; i++) {
				const cleanup = cleanups[i];
				if (typeof cleanup == "function") cleanup();
				else setRef$1(refs[i], null);
			}
		};
	};
}
__name$5(composeRefs$1, "composeRefs");
function useComposedRefs$1(...refs) {
	return import_react.useCallback(composeRefs$1(...refs), refs);
}
__name$5(useComposedRefs$1, "useComposedRefs");
var __defProp$4 = Object.defineProperty;
var __name$4 = (target, value) => __defProp$4(target, "name", {
	value,
	configurable: true
});
/* @__NO_SIDE_EFFECTS__ */
function createSlot(ownerName) {
	const Slot2 = import_react.forwardRef((props, forwardedRef) => {
		let { children, ...slotProps } = props;
		let slottableElement = null;
		let hasSlottable = false;
		const newChildren = [];
		if (isLazyComponent(children) && typeof use === "function") children = use(children._payload);
		import_react.Children.forEach(children, (maybeSlottable) => {
			if (isSlottable(maybeSlottable)) {
				hasSlottable = true;
				const slottable = maybeSlottable;
				let child = "child" in slottable.props ? slottable.props.child : slottable.props.children;
				if (isLazyComponent(child) && typeof use === "function") child = use(child._payload);
				slottableElement = getSlottableElementFromSlottable(slottable, child);
				newChildren.push(slottableElement?.props?.children);
			} else newChildren.push(maybeSlottable);
		});
		if (slottableElement) slottableElement = import_react.cloneElement(slottableElement, void 0, newChildren);
		else if (!hasSlottable && import_react.Children.count(children) === 1 && import_react.isValidElement(children)) slottableElement = children;
		const slottableElementRef = slottableElement ? getElementRef(slottableElement) : void 0;
		const composedRef = useComposedRefs$1(forwardedRef, slottableElementRef);
		if (!slottableElement) {
			if (children || children === 0) throw new Error(hasSlottable ? createSlottableError(ownerName) : createSlotError(ownerName));
			return children;
		}
		const mergedProps = mergeProps(slotProps, slottableElement.props ?? {});
		if (slottableElement.type !== import_react.Fragment) mergedProps.ref = forwardedRef ? composedRef : slottableElementRef;
		return import_react.cloneElement(slottableElement, mergedProps);
	});
	Slot2.displayName = `${ownerName}.Slot`;
	return Slot2;
}
__name$4(createSlot, "createSlot");
var SLOTTABLE_IDENTIFIER = Symbol.for("radix.slottable");
/* @__NO_SIDE_EFFECTS__ */
function createSlottable(ownerName) {
	const Slottable2 = /* @__PURE__ */ __name$4((props) => "child" in props ? props.children(props.child) : props.children, "Slottable");
	Slottable2.displayName = `${ownerName}.Slottable`;
	Slottable2.__radixId = SLOTTABLE_IDENTIFIER;
	return Slottable2;
}
__name$4(createSlottable, "createSlottable");
var getSlottableElementFromSlottable = /* @__PURE__ */ __name$4((slottable, child) => {
	if ("child" in slottable.props) {
		const child2 = slottable.props.child;
		if (!import_react.isValidElement(child2)) return null;
		return import_react.cloneElement(child2, void 0, slottable.props.children(child2.props.children));
	}
	return import_react.isValidElement(child) ? child : null;
}, "getSlottableElementFromSlottable");
function mergeProps(slotProps, childProps) {
	const overrideProps = { ...childProps };
	for (const propName in childProps) {
		const slotPropValue = slotProps[propName];
		const childPropValue = childProps[propName];
		if (/^on[A-Z]/.test(propName)) {
			if (slotPropValue && childPropValue) overrideProps[propName] = (...args) => {
				const result = childPropValue(...args);
				slotPropValue(...args);
				return result;
			};
			else if (slotPropValue) overrideProps[propName] = slotPropValue;
		} else if (propName === "style") overrideProps[propName] = {
			...slotPropValue,
			...childPropValue
		};
		else if (propName === "className") overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(" ");
	}
	return {
		...slotProps,
		...overrideProps
	};
}
__name$4(mergeProps, "mergeProps");
function getElementRef(element) {
	let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
	let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
	if (mayWarn) return element.ref;
	getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
	mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
	if (mayWarn) return element.props.ref;
	return element.props.ref || element.ref;
}
__name$4(getElementRef, "getElementRef");
function isSlottable(child) {
	return import_react.isValidElement(child) && typeof child.type === "function" && "__radixId" in child.type && child.type.__radixId === SLOTTABLE_IDENTIFIER;
}
__name$4(isSlottable, "isSlottable");
var REACT_LAZY_TYPE = Symbol.for("react.lazy");
function isLazyComponent(element) {
	return element != null && typeof element === "object" && "$$typeof" in element && element.$$typeof === REACT_LAZY_TYPE && "_payload" in element && isPromiseLike(element._payload);
}
__name$4(isLazyComponent, "isLazyComponent");
function isPromiseLike(value) {
	return typeof value === "object" && value !== null && "then" in value;
}
__name$4(isPromiseLike, "isPromiseLike");
var createSlotError = /* @__PURE__ */ __name$4((ownerName) => {
	return `${ownerName} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`;
}, "createSlotError");
var createSlottableError = /* @__PURE__ */ __name$4((ownerName) => {
	return `${ownerName} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`;
}, "createSlottableError");
var use = import_react[" use ".trim().toString()];
var __defProp$3 = Object.defineProperty;
var __name$3 = (target, value) => __defProp$3(target, "name", {
	value,
	configurable: true
});
/* @__NO_SIDE_EFFECTS__ */
function createCollection(name) {
	const PROVIDER_NAME = name + "CollectionProvider";
	const [createCollectionContext, createCollectionScope] = /* @__PURE__ */ createContextScope(PROVIDER_NAME);
	const [CollectionProviderImpl, useCollectionContext] = createCollectionContext(PROVIDER_NAME, {
		collectionRef: { current: null },
		itemMap: /* @__PURE__ */ new Map()
	});
	const CollectionProvider = /* @__PURE__ */ __name$3((props) => {
		const { scope, children } = props;
		const ref = import_react.useRef(null);
		const itemMap = import_react.useRef(/* @__PURE__ */ new Map()).current;
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollectionProviderImpl, {
			scope,
			itemMap,
			collectionRef: ref,
			children
		});
	}, "CollectionProvider");
	CollectionProvider.displayName = PROVIDER_NAME;
	const COLLECTION_SLOT_NAME = name + "CollectionSlot";
	const CollectionSlotImpl = /* @__PURE__ */ createSlot(COLLECTION_SLOT_NAME);
	const CollectionSlot = import_react.forwardRef((props, forwardedRef) => {
		const { scope, children } = props;
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollectionSlotImpl, {
			ref: useComposedRefs$1(forwardedRef, useCollectionContext(COLLECTION_SLOT_NAME, scope).collectionRef),
			children
		});
	});
	CollectionSlot.displayName = COLLECTION_SLOT_NAME;
	const ITEM_SLOT_NAME = name + "CollectionItemSlot";
	const ITEM_DATA_ATTR = "data-radix-collection-item";
	const CollectionItemSlotImpl = /* @__PURE__ */ createSlot(ITEM_SLOT_NAME);
	const CollectionItemSlot = import_react.forwardRef((props, forwardedRef) => {
		const { scope, children, ...itemData } = props;
		const ref = import_react.useRef(null);
		const composedRefs = useComposedRefs$1(forwardedRef, ref);
		const context = useCollectionContext(ITEM_SLOT_NAME, scope);
		import_react.useEffect(() => {
			context.itemMap.set(ref, {
				ref,
				...itemData
			});
			return () => void context.itemMap.delete(ref);
		});
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollectionItemSlotImpl, {
			[ITEM_DATA_ATTR]: "",
			ref: composedRefs,
			children
		});
	});
	CollectionItemSlot.displayName = ITEM_SLOT_NAME;
	function useCollection(scope) {
		const context = useCollectionContext(name + "CollectionConsumer", scope);
		return import_react.useCallback(() => {
			const collectionNode = context.collectionRef.current;
			if (!collectionNode) return [];
			const orderedNodes = Array.from(collectionNode.querySelectorAll(`[${ITEM_DATA_ATTR}]`));
			return Array.from(context.itemMap.values()).sort((a, b) => orderedNodes.indexOf(a.ref.current) - orderedNodes.indexOf(b.ref.current));
		}, [context.collectionRef, context.itemMap]);
	}
	__name$3(useCollection, "useCollection");
	return [
		{
			Provider: CollectionProvider,
			Slot: CollectionSlot,
			ItemSlot: CollectionItemSlot
		},
		useCollection,
		createCollectionScope
	];
}
__name$3(createCollection, "createCollection");
var __instanciated = /* @__PURE__ */ new WeakMap();
var OrderedDict = class _OrderedDict extends Map {
	static {
		__name$3(this, "OrderedDict");
	}
	#keys;
	constructor(entries) {
		super(entries);
		this.#keys = [...super.keys()];
		__instanciated.set(this, true);
	}
	set(key, value) {
		if (__instanciated.get(this)) if (this.has(key)) this.#keys[this.#keys.indexOf(key)] = key;
		else this.#keys.push(key);
		super.set(key, value);
		return this;
	}
	insert(index, key, value) {
		const has = this.has(key);
		const length = this.#keys.length;
		const relativeIndex = toSafeInteger(index);
		let actualIndex = relativeIndex >= 0 ? relativeIndex : length + relativeIndex;
		const safeIndex = actualIndex < 0 || actualIndex >= length ? -1 : actualIndex;
		if (safeIndex === this.size || has && safeIndex === this.size - 1 || safeIndex === -1) {
			this.set(key, value);
			return this;
		}
		const size = this.size + (has ? 0 : 1);
		if (relativeIndex < 0) actualIndex++;
		const keys = [...this.#keys];
		let nextValue;
		let shouldSkip = false;
		for (let i = actualIndex; i < size; i++) if (actualIndex === i) {
			let nextKey = keys[i];
			if (keys[i] === key) nextKey = keys[i + 1];
			if (has) this.delete(key);
			nextValue = this.get(nextKey);
			this.set(key, value);
		} else {
			if (!shouldSkip && keys[i - 1] === key) shouldSkip = true;
			const currentKey = keys[shouldSkip ? i : i - 1];
			const currentValue = nextValue;
			nextValue = this.get(currentKey);
			this.delete(currentKey);
			this.set(currentKey, currentValue);
		}
		return this;
	}
	with(index, key, value) {
		const copy = new _OrderedDict(this);
		copy.insert(index, key, value);
		return copy;
	}
	before(key) {
		const index = this.#keys.indexOf(key) - 1;
		if (index < 0) return;
		return this.entryAt(index);
	}
	/**
	* Sets a new key-value pair at the position before the given key.
	*/
	setBefore(key, newKey, value) {
		const index = this.#keys.indexOf(key);
		if (index === -1) return this;
		return this.insert(index, newKey, value);
	}
	after(key) {
		let index = this.#keys.indexOf(key);
		index = index === -1 || index === this.size - 1 ? -1 : index + 1;
		if (index === -1) return;
		return this.entryAt(index);
	}
	/**
	* Sets a new key-value pair at the position after the given key.
	*/
	setAfter(key, newKey, value) {
		const index = this.#keys.indexOf(key);
		if (index === -1) return this;
		return this.insert(index + 1, newKey, value);
	}
	first() {
		return this.entryAt(0);
	}
	last() {
		return this.entryAt(-1);
	}
	clear() {
		this.#keys = [];
		return super.clear();
	}
	delete(key) {
		const deleted = super.delete(key);
		if (deleted) this.#keys.splice(this.#keys.indexOf(key), 1);
		return deleted;
	}
	deleteAt(index) {
		const key = this.keyAt(index);
		if (key !== void 0) return this.delete(key);
		return false;
	}
	at(index) {
		const key = at(this.#keys, index);
		if (key !== void 0) return this.get(key);
	}
	entryAt(index) {
		const key = at(this.#keys, index);
		if (key !== void 0) return [key, this.get(key)];
	}
	indexOf(key) {
		return this.#keys.indexOf(key);
	}
	keyAt(index) {
		return at(this.#keys, index);
	}
	from(key, offset) {
		const index = this.indexOf(key);
		if (index === -1) return;
		let dest = index + offset;
		if (dest < 0) dest = 0;
		if (dest >= this.size) dest = this.size - 1;
		return this.at(dest);
	}
	keyFrom(key, offset) {
		const index = this.indexOf(key);
		if (index === -1) return;
		let dest = index + offset;
		if (dest < 0) dest = 0;
		if (dest >= this.size) dest = this.size - 1;
		return this.keyAt(dest);
	}
	find(predicate, thisArg) {
		let index = 0;
		for (const entry of this) {
			if (Reflect.apply(predicate, thisArg, [
				entry,
				index,
				this
			])) return entry;
			index++;
		}
	}
	findIndex(predicate, thisArg) {
		let index = 0;
		for (const entry of this) {
			if (Reflect.apply(predicate, thisArg, [
				entry,
				index,
				this
			])) return index;
			index++;
		}
		return -1;
	}
	filter(predicate, thisArg) {
		const entries = [];
		let index = 0;
		for (const entry of this) {
			if (Reflect.apply(predicate, thisArg, [
				entry,
				index,
				this
			])) entries.push(entry);
			index++;
		}
		return new _OrderedDict(entries);
	}
	map(callbackfn, thisArg) {
		const entries = [];
		let index = 0;
		for (const entry of this) {
			entries.push([entry[0], Reflect.apply(callbackfn, thisArg, [
				entry,
				index,
				this
			])]);
			index++;
		}
		return new _OrderedDict(entries);
	}
	reduce(...args) {
		const [callbackfn, initialValue] = args;
		let index = 0;
		let accumulator = initialValue ?? this.at(0);
		for (const entry of this) {
			if (index === 0 && args.length === 1) accumulator = entry;
			else accumulator = Reflect.apply(callbackfn, this, [
				accumulator,
				entry,
				index,
				this
			]);
			index++;
		}
		return accumulator;
	}
	reduceRight(...args) {
		const [callbackfn, initialValue] = args;
		let accumulator = initialValue ?? this.at(-1);
		for (let index = this.size - 1; index >= 0; index--) {
			const entry = this.at(index);
			if (index === this.size - 1 && args.length === 1) accumulator = entry;
			else accumulator = Reflect.apply(callbackfn, this, [
				accumulator,
				entry,
				index,
				this
			]);
		}
		return accumulator;
	}
	toSorted(compareFn) {
		return new _OrderedDict([...this.entries()].sort(compareFn));
	}
	toReversed() {
		const reversed = new _OrderedDict();
		for (let index = this.size - 1; index >= 0; index--) {
			const key = this.keyAt(index);
			const element = this.get(key);
			reversed.set(key, element);
		}
		return reversed;
	}
	toSpliced(...args) {
		const entries = [...this.entries()];
		entries.splice(...args);
		return new _OrderedDict(entries);
	}
	slice(start, end) {
		const result = new _OrderedDict();
		let stop = this.size - 1;
		if (start === void 0) return result;
		if (start < 0) start = start + this.size;
		if (end !== void 0 && end > 0) stop = end - 1;
		for (let index = start; index <= stop; index++) {
			const key = this.keyAt(index);
			const element = this.get(key);
			result.set(key, element);
		}
		return result;
	}
	every(predicate, thisArg) {
		let index = 0;
		for (const entry of this) {
			if (!Reflect.apply(predicate, thisArg, [
				entry,
				index,
				this
			])) return false;
			index++;
		}
		return true;
	}
	some(predicate, thisArg) {
		let index = 0;
		for (const entry of this) {
			if (Reflect.apply(predicate, thisArg, [
				entry,
				index,
				this
			])) return true;
			index++;
		}
		return false;
	}
};
function at(array, index) {
	if ("at" in Array.prototype) return Array.prototype.at.call(array, index);
	const actualIndex = toSafeIndex(array, index);
	return actualIndex === -1 ? void 0 : array[actualIndex];
}
__name$3(at, "at");
function toSafeIndex(array, index) {
	const length = array.length;
	const relativeIndex = toSafeInteger(index);
	const actualIndex = relativeIndex >= 0 ? relativeIndex : length + relativeIndex;
	return actualIndex < 0 || actualIndex >= length ? -1 : actualIndex;
}
__name$3(toSafeIndex, "toSafeIndex");
function toSafeInteger(number) {
	return number !== number || number === 0 ? 0 : Math.trunc(number);
}
__name$3(toSafeInteger, "toSafeInteger");
/* @__NO_SIDE_EFFECTS__ */
function createCollection2(name) {
	const PROVIDER_NAME = name + "CollectionProvider";
	const [createCollectionContext, createCollectionScope] = /* @__PURE__ */ createContextScope(PROVIDER_NAME);
	const [CollectionContextProvider, useCollectionContext] = createCollectionContext(PROVIDER_NAME, {
		collectionElement: null,
		collectionRef: { current: null },
		collectionRefObject: { current: null },
		itemMap: new OrderedDict(),
		setItemMap: /* @__PURE__ */ __name$3(() => void 0, "setItemMap")
	});
	const CollectionProvider = /* @__PURE__ */ __name$3(({ state, ...props }) => {
		return state ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollectionProviderImpl, {
			...props,
			state
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollectionInit, { ...props });
	}, "CollectionProvider");
	CollectionProvider.displayName = PROVIDER_NAME;
	const CollectionInit = /* @__PURE__ */ __name$3((props) => {
		const state = useInitCollection();
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollectionProviderImpl, {
			...props,
			state
		});
	}, "CollectionInit");
	CollectionInit.displayName = PROVIDER_NAME + "Init";
	const CollectionProviderImpl = /* @__PURE__ */ __name$3((props) => {
		const { scope, children, state } = props;
		const ref = import_react.useRef(null);
		const [collectionElement, setCollectionElement] = import_react.useState(null);
		const composeRefs = useComposedRefs$1(ref, setCollectionElement);
		const [itemMap, setItemMap] = state;
		import_react.useEffect(() => {
			if (!collectionElement) return;
			const observer = getChildListObserver(() => {});
			observer.observe(collectionElement, {
				childList: true,
				subtree: true
			});
			return () => {
				observer.disconnect();
			};
		}, [collectionElement]);
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollectionContextProvider, {
			scope,
			itemMap,
			setItemMap,
			collectionRef: composeRefs,
			collectionRefObject: ref,
			collectionElement,
			children
		});
	}, "CollectionProviderImpl");
	CollectionProviderImpl.displayName = PROVIDER_NAME + "Impl";
	const COLLECTION_SLOT_NAME = name + "CollectionSlot";
	const CollectionSlotImpl = /* @__PURE__ */ createSlot(COLLECTION_SLOT_NAME);
	const CollectionSlot = import_react.forwardRef((props, forwardedRef) => {
		const { scope, children } = props;
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollectionSlotImpl, {
			ref: useComposedRefs$1(forwardedRef, useCollectionContext(COLLECTION_SLOT_NAME, scope).collectionRef),
			children
		});
	});
	CollectionSlot.displayName = COLLECTION_SLOT_NAME;
	const ITEM_SLOT_NAME = name + "CollectionItemSlot";
	const ITEM_DATA_ATTR = "data-radix-collection-item";
	const CollectionItemSlotImpl = /* @__PURE__ */ createSlot(ITEM_SLOT_NAME);
	const CollectionItemSlot = import_react.forwardRef((props, forwardedRef) => {
		const { scope, children, ...itemData } = props;
		const ref = import_react.useRef(null);
		const [element, setElement] = import_react.useState(null);
		const composedRefs = useComposedRefs$1(forwardedRef, ref, setElement);
		const { setItemMap } = useCollectionContext(ITEM_SLOT_NAME, scope);
		const itemDataRef = import_react.useRef(itemData);
		if (!shallowEqual(itemDataRef.current, itemData)) itemDataRef.current = itemData;
		const memoizedItemData = itemDataRef.current;
		import_react.useEffect(() => {
			const itemData2 = memoizedItemData;
			setItemMap((map) => {
				if (!element) return map;
				if (!map.has(element)) {
					map.set(element, {
						...itemData2,
						element
					});
					return map.toSorted(sortByDocumentPosition);
				}
				return map.set(element, {
					...itemData2,
					element
				}).toSorted(sortByDocumentPosition);
			});
			return () => {
				setItemMap((map) => {
					if (!element || !map.has(element)) return map;
					map.delete(element);
					return new OrderedDict(map);
				});
			};
		}, [
			element,
			memoizedItemData,
			setItemMap
		]);
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollectionItemSlotImpl, {
			[ITEM_DATA_ATTR]: "",
			ref: composedRefs,
			children
		});
	});
	CollectionItemSlot.displayName = ITEM_SLOT_NAME;
	function useInitCollection() {
		return import_react.useState(new OrderedDict());
	}
	__name$3(useInitCollection, "useInitCollection");
	function useCollection(scope) {
		const { itemMap } = useCollectionContext(name + "CollectionConsumer", scope);
		return itemMap;
	}
	__name$3(useCollection, "useCollection");
	return [{
		Provider: CollectionProvider,
		Slot: CollectionSlot,
		ItemSlot: CollectionItemSlot
	}, {
		createCollectionScope,
		useCollection,
		useInitCollection
	}];
}
__name$3(createCollection2, "createCollection");
function shallowEqual(a, b) {
	if (a === b) return true;
	if (typeof a !== "object" || typeof b !== "object") return false;
	if (a == null || b == null) return false;
	const keysA = Object.keys(a);
	const keysB = Object.keys(b);
	if (keysA.length !== keysB.length) return false;
	for (const key of keysA) {
		if (!Object.prototype.hasOwnProperty.call(b, key)) return false;
		if (a[key] !== b[key]) return false;
	}
	return true;
}
__name$3(shallowEqual, "shallowEqual");
function isElementPreceding(a, b) {
	return !!(b.compareDocumentPosition(a) & Node.DOCUMENT_POSITION_PRECEDING);
}
__name$3(isElementPreceding, "isElementPreceding");
function sortByDocumentPosition(a, b) {
	return !a[1].element || !b[1].element ? 0 : isElementPreceding(a[1].element, b[1].element) ? -1 : 1;
}
__name$3(sortByDocumentPosition, "sortByDocumentPosition");
function getChildListObserver(callback) {
	return new MutationObserver((mutationsList) => {
		for (const mutation of mutationsList) if (mutation.type === "childList") {
			callback();
			return;
		}
	});
}
__name$3(getChildListObserver, "getChildListObserver");
var __defProp$2 = Object.defineProperty;
var __name$2 = (target, value) => __defProp$2(target, "name", {
	value,
	configurable: true
});
var PAGE_KEYS = ["PageUp", "PageDown"];
var ARROW_KEYS = [
	"ArrowUp",
	"ArrowDown",
	"ArrowLeft",
	"ArrowRight"
];
var BACK_KEYS = {
	"from-left": [
		"Home",
		"PageDown",
		"ArrowDown",
		"ArrowLeft"
	],
	"from-right": [
		"Home",
		"PageDown",
		"ArrowDown",
		"ArrowRight"
	],
	"from-bottom": [
		"Home",
		"PageDown",
		"ArrowDown",
		"ArrowLeft"
	],
	"from-top": [
		"Home",
		"PageDown",
		"ArrowUp",
		"ArrowLeft"
	]
};
var SLIDER_NAME = "Slider";
var [Collection, useCollection, createCollectionScope] = /* @__PURE__ */ createCollection(SLIDER_NAME);
var [createSliderContext, createSliderScope] = /* @__PURE__ */ createContextScope(SLIDER_NAME, [createCollectionScope]);
var [SliderProvider, useSliderContext] = createSliderContext(SLIDER_NAME);
var Slider$1 = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$2(function Slider2(props, forwardedRef) {
	const { name, min = 0, max = 100, step = 1, orientation = "horizontal", disabled = false, minStepsBetweenThumbs = 0, defaultValue = [min], value, onValueChange = /* @__PURE__ */ __name$2(() => {}, "onValueChange"), onValueCommit = /* @__PURE__ */ __name$2(() => {}, "onValueCommit"), inverted = false, form, ...sliderProps } = props;
	const thumbRefs = import_react.useRef(/* @__PURE__ */ new Set());
	const valueIndexToChangeRef = import_react.useRef(0);
	const isKeyboardInteractionRef = import_react.useRef(false);
	const SliderOrientation = orientation === "horizontal" ? SliderHorizontal : SliderVertical;
	const [control, setControl] = import_react.useState(null);
	const composedRefs = useComposedRefs$2(forwardedRef, setControl);
	const [values = [], setValues] = useControllableState({
		prop: value,
		defaultProp: defaultValue,
		onChange: /* @__PURE__ */ __name$2((value2) => {
			[...thumbRefs.current][valueIndexToChangeRef.current]?.focus({
				preventScroll: true,
				focusVisible: isKeyboardInteractionRef.current
			});
			isKeyboardInteractionRef.current = false;
			onValueChange(value2);
		}, "onChange")
	});
	const valuesBeforeSlideStartRef = import_react.useRef(values);
	const initialValuesRef = import_react.useRef(values);
	import_react.useEffect(() => {
		const associatedForm = form ? control?.ownerDocument.getElementById(form) : control?.closest("form");
		if (associatedForm instanceof HTMLFormElement) {
			const reset = /* @__PURE__ */ __name$2(() => setValues(initialValuesRef.current), "reset");
			associatedForm.addEventListener("reset", reset);
			return () => associatedForm.removeEventListener("reset", reset);
		}
	}, [
		control,
		form,
		setValues
	]);
	function handleSlideStart(value2) {
		updateValues(value2, getClosestValueIndex(values, value2));
	}
	__name$2(handleSlideStart, "handleSlideStart");
	function handleSlideMove(value2) {
		updateValues(value2, valueIndexToChangeRef.current);
	}
	__name$2(handleSlideMove, "handleSlideMove");
	function handleSlideEnd() {
		if (String(values) !== String(valuesBeforeSlideStartRef.current)) onValueCommit(values);
	}
	__name$2(handleSlideEnd, "handleSlideEnd");
	function updateValues(value2, atIndex, { commit } = { commit: false }) {
		const decimalCount = getDecimalCount(step);
		const nextValue = clamp(roundValue(Math.round((value2 - min) / step) * step + min, decimalCount), [min, max]);
		setValues((prevValues = []) => {
			const nextValues = getNextSortedValues(prevValues, nextValue, atIndex);
			if (hasMinStepsBetweenValues(nextValues, minStepsBetweenThumbs * step)) {
				valueIndexToChangeRef.current = nextValues.indexOf(nextValue);
				const hasChanged = String(nextValues) !== String(prevValues);
				if (hasChanged && commit) onValueCommit(nextValues);
				return hasChanged ? nextValues : prevValues;
			} else return prevValues;
		});
	}
	__name$2(updateValues, "updateValues");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderProvider, {
		scope: props.__scopeSlider,
		name,
		disabled,
		min,
		max,
		valueIndexToChangeRef,
		thumbs: thumbRefs.current,
		values,
		orientation,
		form,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Collection.Provider, {
			scope: props.__scopeSlider,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Collection.Slot, {
				scope: props.__scopeSlider,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderOrientation, {
					"aria-disabled": disabled,
					"data-disabled": disabled ? "" : void 0,
					...sliderProps,
					ref: composedRefs,
					onPointerDown: composeEventHandlers(sliderProps.onPointerDown, () => {
						if (!disabled) {
							valuesBeforeSlideStartRef.current = values;
							isKeyboardInteractionRef.current = false;
						}
					}),
					min,
					max,
					inverted,
					onSlideStart: disabled ? void 0 : handleSlideStart,
					onSlideMove: disabled ? void 0 : handleSlideMove,
					onSlideEnd: disabled ? void 0 : handleSlideEnd,
					onHomeKeyDown: () => {
						if (!disabled) {
							isKeyboardInteractionRef.current = true;
							updateValues(min, 0, { commit: true });
						}
					},
					onEndKeyDown: () => {
						if (!disabled) {
							isKeyboardInteractionRef.current = true;
							updateValues(max, values.length - 1, { commit: true });
						}
					},
					onStepKeyDown: ({ event, direction: stepDirection }) => {
						if (!disabled) {
							isKeyboardInteractionRef.current = true;
							const multiplier = PAGE_KEYS.includes(event.key) || event.shiftKey && ARROW_KEYS.includes(event.key) ? 10 : 1;
							const atIndex = valueIndexToChangeRef.current;
							const value2 = values[atIndex];
							updateValues(getNextStepValue(value2, {
								min,
								step,
								direction: stepDirection,
								multiplier
							}), atIndex, { commit: true });
						}
					}
				})
			})
		})
	});
}, "Slider"));
var [SliderOrientationProvider, useSliderOrientationContext] = createSliderContext(SLIDER_NAME, {
	startEdge: "left",
	endEdge: "right",
	size: "width",
	direction: 1
});
var SliderHorizontal = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$2(function SliderHorizontal2(props, forwardedRef) {
	const { min, max, dir, inverted, onSlideStart, onSlideMove, onSlideEnd, onStepKeyDown, ...sliderProps } = props;
	const [slider, setSlider] = import_react.useState(null);
	const composedRefs = useComposedRefs$2(forwardedRef, setSlider);
	const rectRef = import_react.useRef(void 0);
	const direction = useDirection(dir);
	const isDirectionLTR = direction === "ltr";
	const isSlidingFromLeft = isDirectionLTR && !inverted || !isDirectionLTR && inverted;
	function getValueFromPointer(pointerPosition) {
		const rect = rectRef.current || slider.getBoundingClientRect();
		const value = linearScale([0, rect.width], isSlidingFromLeft ? [min, max] : [max, min]);
		rectRef.current = rect;
		return value(pointerPosition - rect.left);
	}
	__name$2(getValueFromPointer, "getValueFromPointer");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderOrientationProvider, {
		scope: props.__scopeSlider,
		startEdge: isSlidingFromLeft ? "left" : "right",
		endEdge: isSlidingFromLeft ? "right" : "left",
		direction: isSlidingFromLeft ? 1 : -1,
		size: "width",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderImpl, {
			dir: direction,
			"data-orientation": "horizontal",
			...sliderProps,
			ref: composedRefs,
			style: {
				...sliderProps.style,
				"--radix-slider-thumb-transform": "translateX(-50%)"
			},
			onSlideStart: (event) => {
				const value = getValueFromPointer(event.clientX);
				onSlideStart?.(value);
			},
			onSlideMove: (event) => {
				const value = getValueFromPointer(event.clientX);
				onSlideMove?.(value);
			},
			onSlideEnd: () => {
				rectRef.current = void 0;
				onSlideEnd?.();
			},
			onStepKeyDown: (event) => {
				const isBackKey = BACK_KEYS[isSlidingFromLeft ? "from-left" : "from-right"].includes(event.key);
				onStepKeyDown?.({
					event,
					direction: isBackKey ? -1 : 1
				});
			}
		})
	});
}, "SliderHorizontal"));
var SliderVertical = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$2(function SliderVertical2(props, forwardedRef) {
	const { min, max, inverted, onSlideStart, onSlideMove, onSlideEnd, onStepKeyDown, ...sliderProps } = props;
	const sliderRef = import_react.useRef(null);
	const ref = useComposedRefs$2(forwardedRef, sliderRef);
	const rectRef = import_react.useRef(void 0);
	const isSlidingFromBottom = !inverted;
	function getValueFromPointer(pointerPosition) {
		const rect = rectRef.current || sliderRef.current.getBoundingClientRect();
		const value = linearScale([0, rect.height], isSlidingFromBottom ? [max, min] : [min, max]);
		rectRef.current = rect;
		return value(pointerPosition - rect.top);
	}
	__name$2(getValueFromPointer, "getValueFromPointer");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderOrientationProvider, {
		scope: props.__scopeSlider,
		startEdge: isSlidingFromBottom ? "bottom" : "top",
		endEdge: isSlidingFromBottom ? "top" : "bottom",
		size: "height",
		direction: isSlidingFromBottom ? 1 : -1,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderImpl, {
			"data-orientation": "vertical",
			...sliderProps,
			ref,
			style: {
				...sliderProps.style,
				"--radix-slider-thumb-transform": "translateY(50%)"
			},
			onSlideStart: (event) => {
				const value = getValueFromPointer(event.clientY);
				onSlideStart?.(value);
			},
			onSlideMove: (event) => {
				const value = getValueFromPointer(event.clientY);
				onSlideMove?.(value);
			},
			onSlideEnd: () => {
				rectRef.current = void 0;
				onSlideEnd?.();
			},
			onStepKeyDown: (event) => {
				const isBackKey = BACK_KEYS[isSlidingFromBottom ? "from-bottom" : "from-top"].includes(event.key);
				onStepKeyDown?.({
					event,
					direction: isBackKey ? -1 : 1
				});
			}
		})
	});
}, "SliderVertical"));
var SliderImpl = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$2(function SliderImpl2(props, forwardedRef) {
	const { __scopeSlider, onSlideStart, onSlideMove, onSlideEnd, onHomeKeyDown, onEndKeyDown, onStepKeyDown, ...sliderProps } = props;
	const context = useSliderContext(SLIDER_NAME, __scopeSlider);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.span, {
		...sliderProps,
		ref: forwardedRef,
		onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
			if (event.key === "Home") {
				onHomeKeyDown(event);
				event.preventDefault();
			} else if (event.key === "End") {
				onEndKeyDown(event);
				event.preventDefault();
			} else if (PAGE_KEYS.concat(ARROW_KEYS).includes(event.key)) {
				onStepKeyDown(event);
				event.preventDefault();
			}
		}),
		onPointerDown: composeEventHandlers(props.onPointerDown, (event) => {
			const target = event.target;
			target.setPointerCapture(event.pointerId);
			event.preventDefault();
			if (context.thumbs.has(target)) target.focus({
				preventScroll: true,
				focusVisible: false
			});
			else onSlideStart(event);
		}),
		onPointerMove: composeEventHandlers(props.onPointerMove, (event) => {
			if (event.target.hasPointerCapture(event.pointerId)) onSlideMove(event);
		}),
		onPointerUp: composeEventHandlers(props.onPointerUp, (event) => {
			const target = event.target;
			if (target.hasPointerCapture(event.pointerId)) {
				target.releasePointerCapture(event.pointerId);
				onSlideEnd(event);
			}
		})
	});
}, "SliderImpl"));
var TRACK_NAME = "SliderTrack";
var SliderTrack = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$2(function SliderTrack2(props, forwardedRef) {
	const { __scopeSlider, ...trackProps } = props;
	const context = useSliderContext(TRACK_NAME, __scopeSlider);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.span, {
		"data-disabled": context.disabled ? "" : void 0,
		"data-orientation": context.orientation,
		...trackProps,
		ref: forwardedRef
	});
}, "SliderTrack"));
var RANGE_NAME = "SliderRange";
var SliderRange = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$2(function SliderRange2(props, forwardedRef) {
	const { __scopeSlider, ...rangeProps } = props;
	const context = useSliderContext(RANGE_NAME, __scopeSlider);
	const orientation = useSliderOrientationContext(RANGE_NAME, __scopeSlider);
	const composedRefs = useComposedRefs$2(forwardedRef, import_react.useRef(null));
	const valuesCount = context.values.length;
	const percentages = context.values.map((value) => convertValueToPercentage(value, context.min, context.max));
	const offsetStart = valuesCount > 1 ? Math.min(...percentages) : 0;
	const offsetEnd = 100 - Math.max(...percentages);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.span, {
		"data-orientation": context.orientation,
		"data-disabled": context.disabled ? "" : void 0,
		...rangeProps,
		ref: composedRefs,
		style: {
			...props.style,
			[orientation.startEdge]: offsetStart + "%",
			[orientation.endEdge]: offsetEnd + "%"
		}
	});
}, "SliderRange"));
var [SliderThumbContextProvider, useSliderThumbContext] = createSliderContext("SliderThumb");
var THUMB_PROVIDER_NAME = "SliderThumbProvider";
function SliderThumbProvider(props) {
	const { __scopeSlider, name, children, internal_do_not_use_render } = props;
	const context = useSliderContext(THUMB_PROVIDER_NAME, __scopeSlider);
	const getItems = useCollection(__scopeSlider);
	const [thumb, setThumb] = import_react.useState(null);
	const index = import_react.useMemo(() => thumb ? getItems().findIndex((item) => item.ref.current === thumb) : -1, [getItems, thumb]);
	const size = useSize(thumb);
	const isFormControl = thumb ? !!context.form || !!thumb.closest("form") : true;
	const value = context.values[index];
	const resolvedName = name ?? (context.name ? context.name + (context.values.length > 1 ? "[]" : "") : void 0);
	const percent = value === void 0 ? 0 : convertValueToPercentage(value, context.min, context.max);
	import_react.useEffect(() => {
		if (thumb) {
			context.thumbs.add(thumb);
			return () => {
				context.thumbs.delete(thumb);
			};
		}
	}, [thumb, context.thumbs]);
	const thumbContext = {
		value,
		name: resolvedName,
		form: context.form,
		isFormControl,
		index,
		thumb,
		onThumbChange: setThumb,
		percent,
		size
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderThumbContextProvider, {
		scope: __scopeSlider,
		...thumbContext,
		children: isFunction$1(internal_do_not_use_render) ? internal_do_not_use_render(thumbContext) : children
	});
}
__name$2(SliderThumbProvider, "SliderThumbProvider");
var THUMB_TRIGGER_NAME = "SliderThumbTrigger";
var SliderThumbTrigger = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$2(function SliderThumbTrigger2(props, forwardedRef) {
	const { __scopeSlider, ...thumbProps } = props;
	const context = useSliderContext(THUMB_TRIGGER_NAME, __scopeSlider);
	const orientation = useSliderOrientationContext(THUMB_TRIGGER_NAME, __scopeSlider);
	const { index, value, percent, size, onThumbChange } = useSliderThumbContext(THUMB_TRIGGER_NAME, __scopeSlider);
	const composedRefs = useComposedRefs$2(forwardedRef, onThumbChange);
	const label = getLabel(index, context.values.length);
	const orientationSize = size?.[orientation.size];
	const thumbInBoundsOffset = orientationSize ? getThumbInBoundsOffset(orientationSize, percent, orientation.direction) : 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		style: {
			transform: "var(--radix-slider-thumb-transform)",
			position: "absolute",
			[orientation.startEdge]: `calc(${percent}% + ${thumbInBoundsOffset}px)`
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Collection.ItemSlot, {
			scope: __scopeSlider,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.span, {
				role: "slider",
				"aria-label": props["aria-label"] || label,
				"aria-valuemin": context.min,
				"aria-valuenow": value,
				"aria-valuemax": context.max,
				"aria-orientation": context.orientation,
				"data-orientation": context.orientation,
				"data-disabled": context.disabled ? "" : void 0,
				tabIndex: context.disabled ? void 0 : 0,
				...thumbProps,
				ref: composedRefs,
				style: value === void 0 ? { display: "none" } : props.style,
				onFocus: composeEventHandlers(props.onFocus, () => {
					context.valueIndexToChangeRef.current = index;
				})
			})
		})
	});
}, "SliderThumbTrigger"));
var SliderThumb = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$2(function SliderThumb2(props, forwardedRef) {
	const { __scopeSlider, name, ...thumbProps } = props;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderThumbProvider, {
		__scopeSlider,
		name,
		internal_do_not_use_render: ({ index, isFormControl }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderThumbTrigger, {
			...thumbProps,
			ref: forwardedRef,
			__scopeSlider
		}), isFormControl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderBubbleInput, { __scopeSlider }, index) : null] })
	});
}, "SliderThumb"));
var BUBBLE_INPUT_NAME$1 = "SliderBubbleInput";
var SliderBubbleInput = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name$2(function SliderBubbleInput2({ __scopeSlider, ...props }, forwardedRef) {
	const { value, name, form } = useSliderThumbContext(BUBBLE_INPUT_NAME$1, __scopeSlider);
	const ref = import_react.useRef(null);
	const composedRefs = useComposedRefs$2(ref, forwardedRef);
	const prevValue = usePrevious(value);
	import_react.useEffect(() => {
		const input = ref.current;
		if (!input) return;
		const inputProto = window.HTMLInputElement.prototype;
		const setValue = Object.getOwnPropertyDescriptor(inputProto, "value").set;
		if (prevValue !== value && setValue) {
			const event = new Event("input", { bubbles: true });
			setValue.call(input, value);
			input.dispatchEvent(event);
		}
	}, [prevValue, value]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.input, {
		style: { display: "none" },
		name,
		form,
		...props,
		ref: composedRefs,
		defaultValue: value
	});
}, "SliderBubbleInput"));
function getNextSortedValues(prevValues = [], nextValue, atIndex) {
	const nextValues = [...prevValues];
	nextValues[atIndex] = nextValue;
	return nextValues.sort((a, b) => a - b);
}
__name$2(getNextSortedValues, "getNextSortedValues");
function convertValueToPercentage(value, min, max) {
	return clamp(100 / (max - min) * (value - min), [0, 100]);
}
__name$2(convertValueToPercentage, "convertValueToPercentage");
function getLabel(index, totalValues) {
	if (totalValues > 2) return `Value ${index + 1} of ${totalValues}`;
	else if (totalValues === 2) return ["Minimum", "Maximum"][index];
	else return;
}
__name$2(getLabel, "getLabel");
function getClosestValueIndex(values, nextValue) {
	if (values.length === 1) return 0;
	const distances = values.map((value) => Math.abs(value - nextValue));
	const closestDistance = Math.min(...distances);
	return distances.indexOf(closestDistance);
}
__name$2(getClosestValueIndex, "getClosestValueIndex");
function getThumbInBoundsOffset(width, left, direction) {
	const halfWidth = width / 2;
	return (halfWidth - linearScale([0, 50], [0, halfWidth])(left) * direction) * direction;
}
__name$2(getThumbInBoundsOffset, "getThumbInBoundsOffset");
function getStepsBetweenValues(values) {
	return values.slice(0, -1).map((value, index) => values[index + 1] - value);
}
__name$2(getStepsBetweenValues, "getStepsBetweenValues");
function hasMinStepsBetweenValues(values, minStepsBetweenValues) {
	if (minStepsBetweenValues > 0) {
		const stepsBetweenValues = getStepsBetweenValues(values);
		return Math.min(...stepsBetweenValues) >= minStepsBetweenValues;
	}
	return true;
}
__name$2(hasMinStepsBetweenValues, "hasMinStepsBetweenValues");
function linearScale(input, output) {
	return (value) => {
		if (input[0] === input[1] || output[0] === output[1]) return output[0];
		const ratio = (output[1] - output[0]) / (input[1] - input[0]);
		return output[0] + ratio * (value - input[0]);
	};
}
__name$2(linearScale, "linearScale");
function getDecimalCount(value) {
	if (!Number.isFinite(value)) return 0;
	const str = value.toString();
	if (str.includes("e")) {
		const [coefficient, exponent] = str.split("e");
		const decimalPart2 = coefficient.split(".")[1] || "";
		const exponentNum = Number(exponent);
		return Math.max(0, decimalPart2.length - exponentNum);
	}
	const decimalPart = str.split(".")[1];
	return decimalPart ? decimalPart.length : 0;
}
__name$2(getDecimalCount, "getDecimalCount");
function roundValue(value, decimalCount) {
	const rounder = Math.pow(10, decimalCount);
	return Math.round(value * rounder) / rounder;
}
__name$2(roundValue, "roundValue");
function getNextStepValue(value, { min, step, direction, multiplier }) {
	const decimalCount = getDecimalCount(step);
	const stepsFromMin = (value - min) / step;
	const nearestSteps = Math.round(stepsFromMin);
	const isAligned = roundValue(nearestSteps * step + min, decimalCount) === roundValue(value, decimalCount);
	let nextSteps;
	if (isAligned) nextSteps = nearestSteps + multiplier * direction;
	else if (direction > 0) nextSteps = Math.ceil(stepsFromMin);
	else nextSteps = Math.floor(stepsFromMin);
	return roundValue(nextSteps * step + min, decimalCount);
}
__name$2(getNextStepValue, "getNextStepValue");
function isFunction$1(value) {
	return typeof value === "function";
}
__name$2(isFunction$1, "isFunction");
function Slider({ className, defaultValue, value, min = 0, max = 100, ...props }) {
	const _values = import_react.useMemo(() => Array.isArray(value) ? value : Array.isArray(defaultValue) ? defaultValue : [min, max], [
		value,
		defaultValue,
		min,
		max
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Slider$1, {
		"data-slot": "slider",
		defaultValue,
		value,
		min,
		max,
		className: cn("relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col", className),
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderTrack, {
			"data-slot": "slider-track",
			className: cn("relative grow overflow-hidden rounded-full bg-muted data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderRange, {
				"data-slot": "slider-range",
				className: cn("absolute bg-primary data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full")
			})
		}), Array.from({ length: _values.length }, (_, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderThumb, {
			"data-slot": "slider-thumb",
			className: "block size-4 shrink-0 rounded-full border border-primary bg-white shadow-sm ring-ring/50 transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50"
		}, index))]
	});
}
var __defProp$1 = Object.defineProperty;
var __name$1 = (target, value) => __defProp$1(target, "name", {
	value,
	configurable: true
});
function setRef(ref, value) {
	if (typeof ref === "function") return ref(value);
	else if (ref !== null && ref !== void 0) ref.current = value;
}
__name$1(setRef, "setRef");
function composeRefs(...refs) {
	return (node) => {
		let hasCleanup = false;
		const cleanups = refs.map((ref) => {
			const cleanup = setRef(ref, node);
			if (!hasCleanup && typeof cleanup == "function") hasCleanup = true;
			return cleanup;
		});
		if (hasCleanup) return () => {
			for (let i = 0; i < cleanups.length; i++) {
				const cleanup = cleanups[i];
				if (typeof cleanup == "function") cleanup();
				else setRef(refs[i], null);
			}
		};
	};
}
__name$1(composeRefs, "composeRefs");
function useComposedRefs(...refs) {
	return import_react.useCallback(composeRefs(...refs), refs);
}
__name$1(useComposedRefs, "useComposedRefs");
var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", {
	value,
	configurable: true
});
var SWITCH_NAME = "Switch";
var [createSwitchContext, createSwitchScope] = /* @__PURE__ */ createContextScope(SWITCH_NAME);
var [SwitchProviderImpl, useSwitchContext] = createSwitchContext(SWITCH_NAME);
function SwitchProvider(props) {
	const { __scopeSwitch, checked: checkedProp, children, defaultChecked, disabled, form, name, onCheckedChange, required, value = "on", internal_do_not_use_render } = props;
	const [checked, setChecked] = useControllableState({
		prop: checkedProp,
		defaultProp: defaultChecked ?? false,
		onChange: onCheckedChange,
		caller: SWITCH_NAME
	});
	const [control, setControl] = import_react.useState(null);
	const [bubbleInput, setBubbleInput] = import_react.useState(null);
	const hasConsumerStoppedPropagationRef = import_react.useRef(false);
	const [userInteractionCount, onUserInteraction] = import_react.useReducer((count) => count + 1, 0);
	const context = {
		checked,
		setChecked,
		disabled,
		control,
		setControl,
		name,
		form,
		value,
		hasConsumerStoppedPropagationRef,
		userInteractionCount,
		onUserInteraction,
		required,
		defaultChecked,
		isFormControl: control ? !!form || !!control.closest("form") : true,
		bubbleInput,
		setBubbleInput
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SwitchProviderImpl, {
		scope: __scopeSwitch,
		...context,
		children: isFunction(internal_do_not_use_render) ? internal_do_not_use_render(context) : children
	});
}
__name(SwitchProvider, "SwitchProvider");
var TRIGGER_NAME = "SwitchTrigger";
var SwitchTrigger = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name(function SwitchTrigger2({ __scopeSwitch, onClick, ...switchProps }, forwardedRef) {
	const { control, form, value, disabled, checked, required, setControl, setChecked, hasConsumerStoppedPropagationRef, onUserInteraction, isFormControl, bubbleInput } = useSwitchContext(TRIGGER_NAME, __scopeSwitch);
	const composedRefs = useComposedRefs(forwardedRef, setControl);
	const initialCheckedStateRef = import_react.useRef(checked);
	import_react.useEffect(() => {
		const associatedForm = form ? control?.ownerDocument.getElementById(form) : control?.form;
		if (associatedForm instanceof HTMLFormElement) {
			const reset = /* @__PURE__ */ __name(() => setChecked(initialCheckedStateRef.current), "reset");
			associatedForm.addEventListener("reset", reset);
			return () => associatedForm.removeEventListener("reset", reset);
		}
	}, [
		control,
		form,
		setChecked
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.button, {
		type: "button",
		role: "switch",
		"aria-checked": checked,
		"aria-required": required,
		"data-state": getState(checked),
		"data-disabled": disabled ? "" : void 0,
		disabled,
		value,
		...switchProps,
		ref: composedRefs,
		onClick: composeEventHandlers(onClick, (event) => {
			onUserInteraction();
			setChecked((prevChecked) => !prevChecked);
			if (bubbleInput && isFormControl) {
				hasConsumerStoppedPropagationRef.current = event.isPropagationStopped();
				if (!hasConsumerStoppedPropagationRef.current) event.stopPropagation();
			}
		})
	});
}, "SwitchTrigger"));
var Switch$1 = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name(function Switch2(props, forwardedRef) {
	const { __scopeSwitch, name, checked, defaultChecked, required, disabled, value, onCheckedChange, form, ...switchProps } = props;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SwitchProvider, {
		__scopeSwitch,
		checked,
		defaultChecked,
		disabled,
		required,
		onCheckedChange,
		name,
		form,
		value,
		internal_do_not_use_render: ({ isFormControl }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SwitchTrigger, {
			...switchProps,
			ref: forwardedRef,
			__scopeSwitch
		}), isFormControl && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SwitchBubbleInput, { __scopeSwitch })] })
	});
}, "Switch"));
var THUMB_NAME = "SwitchThumb";
var SwitchThumb = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name(function SwitchThumb2(props, forwardedRef) {
	const { __scopeSwitch, ...thumbProps } = props;
	const context = useSwitchContext(THUMB_NAME, __scopeSwitch);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.span, {
		"data-state": getState(context.checked),
		"data-disabled": context.disabled ? "" : void 0,
		...thumbProps,
		ref: forwardedRef
	});
}, "SwitchThumb"));
var BUBBLE_INPUT_NAME = "SwitchBubbleInput";
var SwitchBubbleInput = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name(function SwitchBubbleInput2({ __scopeSwitch, onClick, ...props }, forwardedRef) {
	const { control, hasConsumerStoppedPropagationRef, userInteractionCount, checked, defaultChecked, required, disabled, name, value, form, bubbleInput, setBubbleInput } = useSwitchContext(BUBBLE_INPUT_NAME, __scopeSwitch);
	const composedRefs = useComposedRefs(forwardedRef, setBubbleInput);
	const controlSize = useSize(control);
	const shouldStopClickPropagationRef = import_react.useRef(false);
	const prevCheckedRef = import_react.useRef(checked);
	const prevUserInteractionCountRef = import_react.useRef(userInteractionCount);
	import_react.useEffect(() => {
		const input = bubbleInput;
		if (!input) return;
		const inputProto = window.HTMLInputElement.prototype;
		const setChecked = Object.getOwnPropertyDescriptor(inputProto, "checked").set;
		const isUserInteraction = userInteractionCount !== prevUserInteractionCountRef.current;
		prevUserInteractionCountRef.current = userInteractionCount;
		const checkedChanged = prevCheckedRef.current !== checked;
		prevCheckedRef.current = checked;
		const bubbles = !(isUserInteraction && hasConsumerStoppedPropagationRef.current);
		if (checkedChanged && setChecked) {
			shouldStopClickPropagationRef.current = !isUserInteraction;
			const event = new Event("click", { bubbles });
			setChecked.call(input, checked);
			input.dispatchEvent(event);
			shouldStopClickPropagationRef.current = false;
		}
	}, [
		bubbleInput,
		checked,
		hasConsumerStoppedPropagationRef,
		userInteractionCount
	]);
	const defaultCheckedRef = import_react.useRef(checked);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.input, {
		type: "checkbox",
		"aria-hidden": true,
		defaultChecked: defaultChecked ?? defaultCheckedRef.current,
		required,
		disabled,
		name,
		value,
		form,
		...props,
		tabIndex: -1,
		ref: composedRefs,
		onClick: composeEventHandlers(onClick, (event) => {
			if (shouldStopClickPropagationRef.current) event.stopPropagation();
		}),
		style: {
			...props.style,
			...controlSize,
			position: "absolute",
			pointerEvents: "none",
			opacity: 0,
			margin: 0,
			transform: "translateX(-100%)"
		}
	});
}, "SwitchBubbleInput"));
function isFunction(value) {
	return typeof value === "function";
}
__name(isFunction, "isFunction");
function getState(checked) {
	return checked ? "checked" : "unchecked";
}
__name(getState, "getState");
function Switch({ className, size = "default", ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch$1, {
		"data-slot": "switch",
		"data-size": size,
		className: cn("peer group/switch inline-flex shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-[1.15rem] data-[size=default]:w-8 data-[size=sm]:h-3.5 data-[size=sm]:w-6 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input dark:data-[state=unchecked]:bg-input/80", className),
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SwitchThumb, {
			"data-slot": "switch-thumb",
			className: cn("pointer-events-none block rounded-full bg-background ring-0 transition-transform group-data-[size=default]/switch:size-4 group-data-[size=sm]/switch:size-3 data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0 dark:data-[state=checked]:bg-primary-foreground dark:data-[state=unchecked]:bg-foreground")
		})
	});
}
var defaults = {
	autoRecovery: true,
	approvalThreshold: 25e3,
	maxAttempts: 2,
	maxContacts: 2,
	recoveryWindowHours: 168
};
var formatMoney = (value) => new Intl.NumberFormat("en-IN", {
	style: "currency",
	currency: "INR",
	maximumFractionDigits: 0
}).format(value);
function SettingsPanel({ provider, aiMode, mode, onAction, working, demoCaseId, settings, cases, onSnapshot }) {
	const [prefs, setPrefs] = (0, import_react.useState)({
		...defaults,
		...settings
	});
	const [notice, setNotice] = (0, import_react.useState)("");
	const [saving, setSaving] = (0, import_react.useState)(false);
	const actionable = cases.filter((item) => item.priority !== "SUPPRESSED" && (item.ageHours ?? 24) <= prefs.recoveryWindowHours);
	const suppressed = cases.filter((item) => item.priority === "SUPPRESSED" || (item.ageHours ?? 24) > prefs.recoveryWindowHours);
	const impact = {
		automaticCases: prefs.autoRecovery && prefs.maxAttempts > 0 && prefs.maxContacts > 0 ? actionable.filter((item) => item.amount < prefs.approvalThreshold).length : 0,
		reviewCases: actionable.filter((item) => !prefs.autoRecovery || prefs.maxAttempts <= 0 || prefs.maxContacts <= 0 || item.amount >= prefs.approvalThreshold).length,
		suppressedCases: suppressed.length,
		expectedValue: actionable.reduce((sum, item) => sum + item.expectedValue, 0)
	};
	function flash(message) {
		setNotice(message);
		window.setTimeout(() => setNotice(""), 2600);
	}
	async function persist(nextPrefs, message) {
		setSaving(true);
		try {
			const response = await fetch("/api/demo/settings", {
				method: "POST",
				headers: { "content-type": "application/json" },
				body: JSON.stringify(nextPrefs)
			});
			if (!response.ok) throw new Error("Settings update failed");
			const next = await response.json();
			setPrefs({
				...defaults,
				...next.settings
			});
			onSnapshot(next);
			flash(message);
		} catch {
			flash("Settings could not be saved. Please try again.");
		} finally {
			setSaving(false);
		}
	}
	function save() {
		persist(prefs, "Engine policy saved. It will govern the next recovery batch.");
	}
	function reset() {
		setPrefs(defaults);
		persist(defaults, "Safe engine defaults restored.");
	}
	async function copyWebhook() {
		const url = `${window.location.origin}/api/webhooks/razorpay`;
		try {
			await navigator.clipboard.writeText(url);
			flash("Webhook endpoint copied.");
		} catch {
			flash(`Webhook: ${url}`);
		}
	}
	const razorpayStatus = provider.includes("RAZORPAY") ? "CONFIGURED" : "MOCK MODE";
	const geminiStatus = aiMode.includes("GEMINI") ? "CONFIGURED" : "FALLBACK";
	const simulationMode = mode.includes("SIMULATION");
	const webhookUrl = typeof window === "undefined" ? "/api/webhooks/razorpay" : `${window.location.origin}/api/webhooks/razorpay`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-[1280px] space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "MERCHANT CONTROL PLANE"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "page-title",
						children: "Settings & safety"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "page-copy",
						children: "Configure only recovery controls that affect deterministic engine behavior."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						onClick: reset,
						disabled: saving,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, {}), "Reset policy"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						className: "bg-orange-600 hover:bg-orange-700",
						onClick: save,
						disabled: saving,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, {}), "Save changes"]
					})]
				})]
			}),
			notice && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "settings-notice",
				role: "status",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {}), notice]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "policy-impact",
				"aria-label": "Policy impact preview",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "LIVE POLICY IMPACT"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "What this configuration will do" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Calculated from the current synthetic recovery portfolio." })
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Impact, {
						value: String(impact.automaticCases),
						label: "automatic cases",
						tone: "blue"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Impact, {
						value: String(impact.reviewCases),
						label: "human reviews",
						tone: "purple"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Impact, {
						value: String(impact.suppressedCases),
						label: "safe suppressions",
						tone: "green"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Impact, {
						value: formatMoney(impact.expectedValue),
						label: "eligible expected value",
						tone: "orange"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "grid gap-5 xl:grid-cols-[1.25fr_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "panel p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "settings-card-head",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow",
								children: "RECOVERY POLICY"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Deterministic action limits" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingRow, {
							title: "Automatic recovery",
							note: "Execute eligible actions only after all guardrails pass.",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
								"aria-label": "Automatic recovery",
								checked: prefs.autoRecovery,
								onCheckedChange: (value) => setPrefs({
									...prefs,
									autoRecovery: value
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "settings-range",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Human approval threshold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Pause high-value recovery actions for merchant review." })] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: formatMoney(prefs.approvalThreshold) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
									"aria-label": "Human approval threshold",
									min: 5e3,
									max: 1e5,
									step: 5e3,
									value: [prefs.approvalThreshold],
									onValueChange: (value) => setPrefs({
										...prefs,
										approvalThreshold: value[0]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "range-labels",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Rs 5K" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Rs 1L" })]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stepper, {
							label: "Max recovery attempts",
							note: "Hard stop per case.",
							values: [
								1,
								2,
								3,
								4
							],
							value: prefs.maxAttempts,
							onChange: (value) => setPrefs({
								...prefs,
								maxAttempts: value
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stepper, {
							label: "Max customer contacts",
							note: "Caps customer-facing payment links, reminders, and alternate-method prompts.",
							values: [
								0,
								1,
								2,
								3,
								4
							],
							value: prefs.maxContacts,
							onChange: (value) => setPrefs({
								...prefs,
								maxContacts: value
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stepper, {
							label: "Recovery window",
							note: "Cases outside this window stop before execution.",
							values: [
								24,
								72,
								168,
								336
							],
							value: prefs.recoveryWindowHours,
							suffix: "h",
							onChange: (value) => setPrefs({
								...prefs,
								recoveryWindowHours: value
							})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "panel p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "settings-card-head",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "eyebrow",
									children: "INTEGRATIONS"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Provider readiness" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Webhook, {})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Integration, {
								icon: Zap,
								name: "Razorpay",
								note: provider.includes("RAZORPAY") ? "Test Mode credentials are configured. Provider failures remain audited." : "Mock provider is active for reliable simulation demos.",
								status: razorpayStatus
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Integration, {
								icon: Sparkles,
								name: "Gemini",
								note: aiMode.includes("GEMINI") ? "Structured diagnosis is enabled before deterministic authorization." : "Deterministic diagnosis fallback is active.",
								status: geminiStatus
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Integration, {
								icon: Webhook,
								name: "Webhook URL",
								note: webhookUrl,
								status: "VERIFIED"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-2 gap-2 pt-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									variant: "outline",
									onClick: copyWebhook,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {}), "Copy webhook"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									variant: "outline",
									onClick: () => flash("Configuration check passed for the active runtime."),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyRound, {}), "Test config"]
								})]
							})
						]
					}), simulationMode && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "settings-demo-card",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "settings-demo-icon",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TestTubeDiagonal, {})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow text-orange-300",
								children: "SIMULATION DEMO"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Reset and exercise critical flows." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								"Synthetic data only. Provider mode is ",
								provider,
								"; demo seed is 42."
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										disabled: !!working,
										onClick: () => onAction("seed"),
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, {}),
											"Seed demo",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "SEED 42" })
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										disabled: !!working,
										onClick: () => onAction("seed"),
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TimerReset, {}),
											"Reset demo",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "SYNTHETIC" })
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										disabled: !!working,
										onClick: () => onAction("run"),
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, {}),
											"Run recovery",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "LIVE FLOW" })
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										disabled: !!working || !demoCaseId,
										onClick: () => onAction("duplicate", demoCaseId),
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Webhook, {}),
											"Duplicate webhook",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "0 DUPLICATES" })
										]
									})
								]
							})
						]
					})]
				})]
			})
		]
	});
}
function Impact({ value, label, tone }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `policy-impact-metric ${tone}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: value }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label })]
	});
}
function SettingRow({ title, note, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "settings-row",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: title }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: note })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "ml-auto",
			children
		})]
	});
}
function Stepper({ label, note, values, value, suffix = "", onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "settings-stepper",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: note })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: values.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			className: value === item ? "active" : "",
			onClick: () => onChange(item),
			children: [item, suffix]
		}, item)) })]
	});
}
function Integration({ icon: Icon, name, note, status }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "integration-row",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: name }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: note })] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: status })
		]
	});
}
var NAV = [
	{
		id: "overview",
		label: "Command center",
		icon: Gauge
	},
	{
		id: "queue",
		label: "Recovery queue",
		icon: Activity
	},
	{
		id: "analytics",
		label: "Analytics",
		icon: CircleDollarSign
	},
	{
		id: "audit",
		label: "Audit trail",
		icon: FileCheckCorner
	},
	{
		id: "settings",
		label: "Settings",
		icon: ShieldCheck
	}
];
var money = (value) => new Intl.NumberFormat("en-IN", {
	style: "currency",
	currency: "INR",
	maximumFractionDigits: 0
}).format(value);
var shortMoney = (value) => value >= 1e5 ? `₹${(value / 1e5).toFixed(2)}L` : money(value);
function Badge({ children, tone = "slate" }) {
	const palette = {
		green: "bg-emerald-50 text-emerald-700 ring-emerald-600/15",
		orange: "bg-orange-50 text-orange-700 ring-orange-600/15",
		blue: "bg-blue-50 text-blue-700 ring-blue-600/15",
		purple: "bg-purple-50 text-purple-700 ring-purple-600/15",
		red: "bg-rose-50 text-rose-700 ring-rose-600/15",
		slate: "bg-slate-100 text-slate-600 ring-slate-500/15"
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: `inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-bold tracking-[.08em] ring-1 ring-inset ${palette[tone] || palette.slate}`,
		children
	});
}
var toneFor = (value) => value === "RECOVERED" || value === "APPROVED" ? "green" : value === "HIGH" ? "orange" : value === "MONITORING" ? "blue" : value === "AWAITING_APPROVAL" ? "purple" : value === "FAILED" ? "red" : "slate";
function MetricCard({ label, value, meta, accent, icon: Icon }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: `metric-card ${accent ? "metric-card-accent" : ""}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: `metric-icon ${accent ? "metric-icon-accent" : ""}`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 text-[2rem] font-semibold leading-none tracking-[-.04em] text-slate-950",
				children: value
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-xs leading-5 text-slate-500",
				children: meta
			})
		]
	});
}
function Loading() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid min-h-screen place-items-center bg-[#f4f6f8]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mx-auto h-10 w-10 animate-spin rounded-full border-2 border-slate-200 border-t-orange-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-sm text-slate-500",
				children: "Loading recovery command center…"
			})]
		})
	});
}
function RecoverIQApp({ initialView = "overview" }) {
	const [session, setSession] = (0, import_react.useState)(void 0);
	const [data, setData] = (0, import_react.useState)(null);
	const [view, setView] = (0, import_react.useState)(initialView);
	const [selected, setSelected] = (0, import_react.useState)(null);
	const [working, setWorking] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)("");
	const [mobileNav, setMobileNav] = (0, import_react.useState)(false);
	const [showEntry, setShowEntry] = (0, import_react.useState)(false);
	const finishEntry = (0, import_react.useCallback)(() => setShowEntry(false), []);
	(0, import_react.useEffect)(() => {
		const timer = window.setTimeout(() => {
			try {
				const stored = localStorage.getItem("recoveriq-session");
				const parsed = stored ? JSON.parse(stored) : null;
				if (parsed?.company === "Northstar Commerce") {
					parsed.company = "RecoverIQ Demo Merchant";
					localStorage.setItem("recoveriq-session", JSON.stringify(parsed));
				}
				setSession(parsed);
			} catch {
				setSession(null);
			}
		}, 0);
		return () => window.clearTimeout(timer);
	}, []);
	(0, import_react.useEffect)(() => {
		if (!session) return;
		const refresh = () => fetch("/api/demo/state").then((r) => r.ok ? r.json() : Promise.reject()).then(setData).catch(() => setError("Live state update paused. Use Seed demo to reconnect."));
		refresh();
		const timer = window.setInterval(refresh, 4e3);
		return () => window.clearInterval(timer);
	}, [session]);
	function authenticate(next) {
		localStorage.setItem("recoveriq-session", JSON.stringify(next));
		setShowEntry(true);
		setSession(next);
		setData(null);
	}
	function signOut() {
		localStorage.removeItem("recoveriq-session");
		setSession(null);
		setData(null);
		setSelected(null);
	}
	async function action(type, id) {
		setWorking(type + (id || ""));
		setError("");
		try {
			const response = await fetch("/api/demo/action", {
				method: "POST",
				headers: { "content-type": "application/json" },
				body: JSON.stringify({
					type,
					id
				})
			});
			if (!response.ok) throw new Error("Action failed");
			const next = await response.json();
			setData(next);
			if (selected) setSelected(next.cases.find((c) => c.id === selected.id) || null);
		} catch {
			setError("The demo action could not be completed. Try Seed Demo to reset.");
		} finally {
			setWorking("");
		}
	}
	if (session === void 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Loading, {});
	if (!session) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthScreen, { onAuthenticated: authenticate });
	if (showEntry) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevenueEntry, {
		session,
		portfolioValue: data?.metrics.atRisk,
		onComplete: finishEntry
	});
	if (!data) return error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid min-h-screen place-items-center bg-slate-50",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "mx-auto text-rose-500" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm",
					children: error
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					className: "mt-4",
					onClick: () => window.location.reload(),
					children: "Retry connection"
				})
			]
		})
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Loading, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-[#f4f6f8] text-slate-900",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: `sidebar ${mobileNav ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex h-20 items-center gap-3 border-b border-white/8 px-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "logo-mark",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, {})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-lg font-semibold tracking-[-.03em] text-white",
								children: "RecoverIQ"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[9px] font-semibold tracking-[.2em] text-slate-500",
								children: "REVENUE INTELLIGENCE"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "ml-auto lg:hidden",
								onClick: () => setMobileNav(false),
								"aria-label": "Close navigation",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "text-slate-400" })
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "space-y-1 px-3 py-6",
						"aria-label": "Primary navigation",
						children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => {
								setView(item.id);
								setMobileNav(false);
							},
							className: `nav-item ${view === item.id ? "nav-item-active" : ""}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, {}), item.label]
						}, item.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-auto p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl border border-white/8 bg-white/[.035] p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 text-xs font-semibold text-emerald-400",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 animate-pulse rounded-full bg-emerald-400" }), "SYSTEM HEALTHY"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-2 text-[11px] leading-5 text-slate-500",
								children: [
									"Guardrail engine active",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"Event polling · 4 sec"
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 px-1 text-[10px] tracking-wide text-slate-600",
							children: "RAZORPAY BUILDATHON · 2026"
						})]
					})
				]
			}),
			mobileNav && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: "fixed inset-0 z-30 bg-slate-950/40 lg:hidden",
				onClick: () => setMobileNav(false),
				"aria-label": "Close menu"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "lg:pl-[252px]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
						className: "sticky top-0 z-20 flex h-20 items-center border-b border-slate-200/80 bg-white/90 px-5 backdrop-blur-xl sm:px-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setMobileNav(true),
								className: "mr-3 lg:hidden",
								"aria-label": "Open navigation",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] font-bold tracking-[.12em] text-slate-400",
								children: session.company.toUpperCase()
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "text-lg font-semibold tracking-[-.02em]",
								children: NAV.find((n) => n.id === view)?.label
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "ml-auto flex items-center gap-2 sm:gap-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										tone: "orange",
										children: "SIMULATION"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										className: "header-search hidden sm:flex",
										onClick: () => setView("queue"),
										"aria-label": "Open recovery queue search",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {}),
											"Search cases ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", { children: "⌘ K" })
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "hidden text-right md:block",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs font-semibold text-slate-700",
											children: session.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[10px] text-slate-400",
											children: session.email
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid h-9 w-9 place-items-center rounded-full bg-[#10223b] text-xs font-bold text-white",
										children: session.name.split(" ").map((part) => part[0]).join("").slice(0, 2).toUpperCase()
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										className: "logout-button",
										onClick: signOut,
										"aria-label": "Sign out",
										title: "Sign out",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, {})
									})
								]
							})
						]
					}),
					error && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-5 mt-5 flex items-center gap-2 rounded-lg border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700 sm:mx-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "h-4 w-4" }), error]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-5 sm:p-8",
						children: [
							view === "overview" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Overview, {
								data,
								action,
								working,
								open: setSelected
							}),
							" ",
							view === "queue" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Queue, {
								data,
								action,
								working,
								open: setSelected
							}),
							" ",
							view === "analytics" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Analytics, { data }),
							" ",
							view === "audit" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuditTrail, { data }),
							" ",
							view === "settings" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingsPanel, {
								provider: data.provider,
								aiMode: data.aiMode,
								mode: data.mode,
								onAction: action,
								working,
								demoCaseId: data.cases[0]?.id || "",
								settings: data.settings,
								cases: data.cases,
								onSnapshot: (next) => setData(next)
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CaseDialog, {
				item: selected,
				audit: data.audit,
				onClose: () => setSelected(null),
				action
			})
		]
	});
}
function Overview({ data, action, working, open }) {
	const awaiting = data.cases.find((c) => c.state === "AWAITING_APPROVAL");
	const recoveredLift = Math.max(0, data.metrics.netRecovered);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-[1480px] space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "flex flex-col gap-5 xl:flex-row xl:items-end xl:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								tone: "blue",
								children: data.mode
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: data.aiMode }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: data.provider })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-5 max-w-3xl text-3xl font-semibold tracking-[-.045em] text-slate-950 sm:text-[2.6rem] sm:leading-[1.05]",
						children: [
							"Turn failed payments into",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-orange-600",
								children: "recovered revenue."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-2xl text-sm leading-6 text-slate-500",
						children: "RecoverIQ detects failed payments and checkout abandonment, predicts recoverability, and executes only the actions deterministic financial guardrails authorize."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "demo-actions",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						onClick: () => action("seed"),
						disabled: !!working,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, {}), "Seed demo"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						className: "bg-orange-600 text-white hover:bg-orange-700",
						onClick: () => action("run"),
						disabled: !!working,
						children: [working === "run" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: "animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, {}), "Run recovery"]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
						label: "Revenue at risk",
						value: shortMoney(data.metrics.atRisk),
						meta: "Failed & abandoned payments still eligible",
						icon: TriangleAlert
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
						label: "Revenue recovered",
						value: shortMoney(data.metrics.recovered),
						meta: "Verified simulated payment success",
						accent: true,
						icon: CircleDollarSign
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
						label: "Net recovered revenue",
						value: shortMoney(data.metrics.netRecovered),
						meta: "After tracked intervention cost",
						icon: WalletCards
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
						label: "Recovery rate",
						value: `${data.metrics.recoveryRate.toFixed(1)}%`,
						meta: `${data.metrics.successes} successful · ${data.metrics.active} active cases`,
						icon: Gauge
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "grid gap-5 xl:grid-cols-[1fr_1.25fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "proof-panel",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "MEASURED MONEY RECOVERED"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Before vs after" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "lift-grid",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Baseline recovered" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: money(0) })] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "RecoverIQ recovered" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: money(data.metrics.recovered) })] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "lift-strong",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Net lift" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: money(recoveredLift) })]
								})
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "proof-panel",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "BOUNDED RECOVERY LOOP"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Detect to audit trail" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "judge-loop",
							"aria-label": "Recovery workflow checklist",
							children: [
								"Detect",
								"Score",
								"Diagnose",
								"Guard",
								"Execute",
								"Monitor",
								"Stop",
								"Audit"
							].map((step, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {}),
								index + 1,
								". ",
								step
							] }, step))
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "grid gap-5 xl:grid-cols-[1.65fr_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "panel",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "panel-heading",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "VALUE MOVEMENT"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Revenue recovery pulse" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-4 text-[11px] font-medium text-slate-500",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "legend bg-slate-300" }), "At risk"] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "legend bg-orange-500" }), "Recovered"] })]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-[260px] px-2 pb-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
							width: "100%",
							height: "100%",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AreaChart, {
								data: data.timeline,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("defs", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
										id: "risk",
										x1: "0",
										y1: "0",
										x2: "0",
										y2: "1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
											offset: "0",
											stopColor: "#cbd5e1",
											stopOpacity: .5
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
											offset: "1",
											stopColor: "#cbd5e1",
											stopOpacity: .02
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
										id: "recovered",
										x1: "0",
										y1: "0",
										x2: "0",
										y2: "1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
											offset: "0",
											stopColor: "#f26722",
											stopOpacity: .32
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
											offset: "1",
											stopColor: "#f26722",
											stopOpacity: .01
										})]
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
										vertical: false,
										stroke: "#e9edf2",
										strokeDasharray: "3 3"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
										dataKey: "day",
										axisLine: false,
										tickLine: false,
										tick: {
											fontSize: 11,
											fill: "#8190a5"
										}
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
										axisLine: false,
										tickLine: false,
										tickFormatter: (v) => `${Math.round(v / 1e3)}k`,
										tick: {
											fontSize: 11,
											fill: "#8190a5"
										}
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { formatter: (v) => money(Number(v)) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
										type: "monotone",
										dataKey: "risk",
										stroke: "#94a3b8",
										fill: "url(#risk)",
										strokeWidth: 2
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
										type: "monotone",
										dataKey: "recovered",
										stroke: "#f26722",
										fill: "url(#recovered)",
										strokeWidth: 2.5
									})
								]
							})
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "panel overflow-hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "panel-heading",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "CONTROL PLANE"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "AI recommends. Rules authorize." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "text-emerald-600" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "px-5 pb-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "control-flow",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flow, {
									icon: Bot,
									label: "ML + AI",
									note: "score · diagnose · recommend"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flow, {
									icon: ShieldCheck,
									label: "Guardrails",
									note: "authorize · reject · review",
									strong: true
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flow, {
									icon: WalletCards,
									label: "Provider",
									note: "execute once · monitor"
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 rounded-xl bg-[#10223b] p-4 text-white",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-semibold",
								children: "Bounded by design"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-3 grid grid-cols-3 gap-2 text-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "2" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "max attempts" })] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "2" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "max contacts" })] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "₹25K" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "approval gate" })] })
								]
							})]
						})]
					})]
				})]
			}),
			awaiting && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "approval-strip",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "approval-icon",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow text-purple-600",
							children: "MERCHANT DECISION REQUIRED"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
							className: "mt-1 font-semibold",
							children: [
								awaiting.customer,
								" · ",
								money(awaiting.amount)
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-xs text-slate-500",
							children: [
								"AI recommends ",
								awaiting.action.replaceAll("_", " "),
								"; guardrail paused execution above ₹25,000."
							]
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "ml-auto flex gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "outline",
								onClick: () => open(awaiting),
								children: "Review"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "outline",
								onClick: () => action("reject", awaiting.id),
								children: "Reject"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								className: "bg-purple-600 hover:bg-purple-700",
								onClick: () => action("approve", awaiting.id),
								children: "Approve action"
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueueTable, {
				cases: data.cases.slice(0, 8),
				open
			})
		]
	});
}
function Flow({ icon: Icon, label, note, strong }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `flow-node ${strong ? "flow-node-strong" : ""}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: label }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: note })
		]
	});
}
function QueueTable({ cases, open }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "panel overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "panel-heading",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow",
				children: "PRIORITIZED WORKLIST"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Recovery queue" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-slate-400",
				children: "Computed from probability × value × eligibility"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
			className: "bg-slate-50/70",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Customer" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Amount" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Failure" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Recovery probability" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Expected value" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Priority" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Status" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {})
			]
		}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, { children: cases.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
			className: "cursor-pointer",
			onClick: () => open(item),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-semibold text-slate-800",
					children: item.customer
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-0.5 text-[10px] text-slate-400",
					children: item.id
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
					className: "font-semibold",
					children: money(item.amount)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-slate-700",
					children: item.failure
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-[10px] uppercase tracking-wide text-slate-400",
					children: item.method
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex min-w-32 items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
						value: item.probability * 100,
						className: "h-1.5"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "w-8 text-right font-semibold",
						children: [Math.round(item.probability * 100), "%"]
					})]
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: money(item.expectedValue) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					tone: toneFor(item.priority),
					children: item.priority
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					tone: toneFor(item.state),
					children: item.state.replaceAll("_", " ")
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-4 w-4 text-slate-300" }) })
			]
		}, item.id)) })] })]
	});
}
function Queue({ data, action, working, open }) {
	const [priorityFilter, setPriorityFilter] = (0, import_react.useState)("ALL");
	const [statusFilter, setStatusFilter] = (0, import_react.useState)("ALL");
	const visible = data.cases.filter((c) => (priorityFilter === "ALL" || c.priority === priorityFilter) && (statusFilter === "ALL" || c.state === statusFilter));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-[1480px] space-y-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col justify-between gap-4 sm:flex-row sm:items-end",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "DETECT → DECIDE → RECOVER"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "page-title",
						children: "Recovery queue"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "page-copy",
						children: "Every case is ranked by expected recovery value and checked for financial eligibility."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					onClick: () => action("run"),
					className: "bg-orange-600 hover:bg-orange-700",
					disabled: !!working,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, {}), "Run eligible cases"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "filter-label",
						children: "Priority"
					}), [
						"ALL",
						"HIGH",
						"MEDIUM",
						"LOW",
						"SUPPRESSED"
					].map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setPriorityFilter(f),
						className: `filter-chip ${priorityFilter === f ? "filter-chip-active" : ""}`,
						children: [
							f.replaceAll("_", " "),
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: data.cases.filter((c) => f === "ALL" || c.priority === f).length })
						]
					}, f))]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "filter-label",
						children: "Status"
					}), [
						"ALL",
						"AWAITING_APPROVAL",
						"MONITORING",
						"RECOVERED",
						"FAILED",
						"STOPPED"
					].map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setStatusFilter(f),
						className: `filter-chip ${statusFilter === f ? "filter-chip-active" : ""}`,
						children: [
							f.replaceAll("_", " "),
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: data.cases.filter((c) => f === "ALL" || c.state === f).length })
						]
					}, f))]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueueTable, {
				cases: visible,
				open
			})
		]
	});
}
function Analytics({ data }) {
	const reasons = (0, import_react.useMemo)(() => Object.values(data.cases.reduce((a, c) => {
		a[c.failure] ??= {
			name: c.failure,
			cases: 0,
			value: 0
		};
		a[c.failure].cases++;
		if (c.state === "RECOVERED") a[c.failure].value += c.amount;
		return a;
	}, {})), [data]);
	const probability = [
		{
			name: "0–20",
			value: data.cases.filter((c) => c.probability < .2).length
		},
		{
			name: "20–50",
			value: data.cases.filter((c) => c.probability >= .2 && c.probability < .5).length
		},
		{
			name: "50–75",
			value: data.cases.filter((c) => c.probability >= .5 && c.probability < .75).length
		},
		{
			name: "75–100",
			value: data.cases.filter((c) => c.probability >= .75).length
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-[1480px] space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "MEASURED OUTCOMES"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "page-title",
					children: "Recovery analytics"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "page-copy",
					children: "Actual outputs from the current deterministic simulation run—never claimed as merchant production revenue."
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
						label: "Analyzed",
						value: String(data.metrics.analyzed),
						meta: "Transactions scored in this batch",
						icon: Activity
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
						label: "Recovered",
						value: money(data.metrics.recovered),
						meta: "Captured simulated payments",
						icon: CircleDollarSign
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
						label: "Active cases",
						value: String(data.metrics.active),
						meta: "Monitoring, approval, or failure",
						icon: Clock3
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricCard, {
						label: "Average time",
						value: `${data.metrics.avgMinutes}m`,
						meta: "Detection to verified recovery",
						icon: Gauge
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "grid gap-5 xl:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "panel",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "panel-heading",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "PORTFOLIO"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Cases by failure reason" })] })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-72 px-4 pb-5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
							data: reasons,
							layout: "vertical",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
									horizontal: false,
									stroke: "#eef1f5"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
									type: "number",
									axisLine: false,
									tickLine: false
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
									dataKey: "name",
									type: "category",
									width: 110,
									axisLine: false,
									tickLine: false,
									tick: { fontSize: 10 }
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
									dataKey: "cases",
									fill: "#1d6cff",
									radius: [
										0,
										6,
										6,
										0
									]
								})
							]
						}) })
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "panel",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "panel-heading",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "MODEL OUTPUT"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Recovery probability distribution" })] })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-72 px-4 pb-5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
							data: probability,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
									vertical: false,
									stroke: "#eef1f5"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
									dataKey: "name",
									axisLine: false,
									tickLine: false
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
									allowDecimals: false,
									axisLine: false,
									tickLine: false
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
									dataKey: "value",
									radius: [
										7,
										7,
										0,
										0
									],
									children: probability.map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, { fill: [
										"#64748b",
										"#e9a23b",
										"#1d6cff",
										"#f26722"
									][i] }, i))
								})
							]
						}) })
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "panel p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "BASELINE VS RECOVERIQ"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-2 text-lg font-semibold",
						children: "Fewer unnecessary interventions by design"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 grid gap-4 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Comparison, {
							label: "Fixed baseline",
							interventions: data.cases.length,
							suppressed: data.cases.filter((c) => c.priority === "SUPPRESSED").length,
							recovered: 0,
							cost: data.cases.length * 3.5,
							net: 0 - data.cases.length * 3.5,
							note: "Contacts every failed transaction with one rule."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Comparison, {
							label: "RecoverIQ",
							interventions: data.cases.filter((c) => c.action !== "DO_NOTHING").length,
							suppressed: 0,
							recovered: data.metrics.recovered,
							cost: data.metrics.recovered - data.metrics.netRecovered,
							net: data.metrics.netRecovered,
							note: "Prioritizes expected value, eligibility, and contact safety.",
							strong: true
						})]
					})
				]
			})
		]
	});
}
function Comparison({ label, interventions, suppressed, recovered, cost, net, note, strong }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `rounded-xl border p-5 ${strong ? "border-orange-200 bg-orange-50/50" : "border-slate-200"}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: label }), strong && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					tone: "orange",
					children: "SELECTIVE"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-xs text-slate-500",
				children: note
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 grid grid-cols-2 gap-3 sm:grid-cols-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-2xl font-semibold",
						children: interventions
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[10px] uppercase tracking-wider text-slate-400",
						children: "interventions"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-2xl font-semibold",
						children: suppressed
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[10px] uppercase tracking-wider text-slate-400",
						children: "unnecessary"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-2xl font-semibold",
						children: shortMoney(recovered)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[10px] uppercase tracking-wider text-slate-400",
						children: "recovered"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-2xl font-semibold",
						children: money(cost)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[10px] uppercase tracking-wider text-slate-400",
						children: "cost"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-2xl font-semibold",
						children: shortMoney(net)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[10px] uppercase tracking-wider text-slate-400",
						children: "net"
					})] })
				]
			})
		]
	});
}
function AuditTrail({ data }) {
	const [exported, setExported] = (0, import_react.useState)(false);
	function exportEvidence() {
		const escape = (value) => `"${String(value).replaceAll("\"", "\"\"")}"`;
		const rows = [[
			"time",
			"case_id",
			"component",
			"event",
			"detail",
			"result"
		], ...data.audit.map((row) => [
			row.time,
			row.caseId,
			row.component,
			row.event,
			row.detail,
			row.result
		])];
		const csv = [...[
			["RecoverIQ recovery evidence"],
			["environment", data.mode],
			["provider", data.provider],
			["revenue_at_risk_inr", data.metrics.atRisk],
			["revenue_recovered_inr", data.metrics.recovered],
			["net_recovered_revenue_inr", data.metrics.netRecovered],
			["recovery_rate_percent", data.metrics.recoveryRate.toFixed(2)],
			[]
		], ...rows].map((row) => row.map(escape).join(",")).join("\n");
		const url = URL.createObjectURL(new Blob(["﻿", csv], { type: "text/csv;charset=utf-8" }));
		const anchor = document.createElement("a");
		anchor.href = url;
		anchor.download = `RecoverIQ-recovery-evidence-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.csv`;
		document.body.appendChild(anchor);
		anchor.click();
		anchor.remove();
		window.setTimeout(() => URL.revokeObjectURL(url), 1e3);
		setExported(true);
		window.setTimeout(() => setExported(false), 2600);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-[1180px] space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "IMMUTABLE DECISION RECORD"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "page-title",
					children: "Audit trail"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "page-copy",
					children: "Concise reason codes and state transitions—no hidden model chain-of-thought."
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				variant: "outline",
				onClick: exportEvidence,
				children: [exported ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileDown, {}), exported ? "Evidence CSV downloaded" : "Export recovery evidence"]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "panel overflow-hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-[80px_115px_1fr_100px] gap-4 border-b border-slate-200 bg-slate-50 px-5 py-3 text-[10px] font-bold tracking-[.1em] text-slate-400",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "TIME" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "COMPONENT" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "EVENT" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "RESULT" })
				]
			}), data.audit.map((row, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-[80px_115px_1fr_100px] gap-4 border-b border-slate-100 px-5 py-4 last:border-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-xs text-slate-400",
						children: row.time
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						tone: row.component === "GUARDRAIL" ? "green" : row.component === "PROVIDER" ? "blue" : row.component === "AI" ? "purple" : "slate",
						children: row.component
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold text-slate-800",
						children: row.event.replaceAll("_", " ")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 text-xs leading-5 text-slate-500",
						children: [
							row.detail,
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-mono text-[10px] text-slate-400",
								children: ["· ", row.caseId]
							})
						]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[10px] font-bold text-slate-500",
						children: row.result
					})
				]
			}, `${row.time}-${i}`))]
		})]
	});
}
function CaseDialog({ item, audit, onClose, action }) {
	if (!item) return null;
	const recommendedActionLabel = item.paymentLinkUrl && item.action === "CREATE_PAYMENT_LINK" ? "PAYMENT LINK CREATED" : item.action.replaceAll("_", " ");
	const caseAudit = audit.filter((row) => row.caseId === item.id).slice(0, 5);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open: !!item,
		onOpenChange: (open) => !open && onClose(),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "max-h-[92vh] overflow-y-auto p-0 sm:max-w-3xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, {
				className: "border-b border-slate-200 p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							tone: toneFor(item.priority),
							children: item.priority
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							tone: toneFor(item.state),
							children: item.state.replaceAll("_", " ")
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, {
						className: "mt-3 text-2xl tracking-[-.03em]",
						children: [
							item.customer,
							" · ",
							money(item.amount)
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogDescription, { children: [
						item.id,
						" · ",
						item.method,
						" · ",
						item.failure
					] })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-6 p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-3 sm:grid-cols-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mini, {
								label: "Probability",
								value: `${Math.round(item.probability * 100)}%`
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mini, {
								label: "Expected value",
								value: money(item.expectedValue)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mini, {
								label: "Past success",
								value: `${item.successes}/${item.successes + item.failures}`
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mini, {
								label: "Guardrail",
								value: item.guardrail.replace("HUMAN_REVIEW", "REVIEW")
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "WHAT HAPPENED?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm font-semibold",
							children: item.failure
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs leading-5 text-slate-500",
							children: item.method === "Checkout" ? "The customer left checkout before completing payment while the cart remained inside the configured recovery window." : `The ${item.method.toLowerCase()} attempt failed while the payment remained inside the configured recovery window.`
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border border-blue-100 bg-blue-50/50 p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 text-blue-700",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bot, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-bold tracking-wider",
									children: "EXPLAINABLE DECISION"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-3 text-sm leading-6 text-slate-700",
								children: [
									item.successes,
									" of this customer's previous",
									" ",
									item.successes + item.failures,
									" payments succeeded. The model estimates a ",
									Math.round(item.probability * 100),
									"% recovery probability. Expected recovery value after intervention cost is",
									" ",
									money(item.expectedValue),
									"."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 flex items-center justify-between rounded-lg bg-white p-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs text-slate-500",
									children: "Recommended action"
								}), item.action === "CREATE_PAYMENT_LINK" && ["DETECTED", "FAILED"].includes(item.state) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "text-xs font-bold text-blue-700 underline-offset-4 hover:underline",
									onClick: () => action("execute", item.id),
									children: item.action.replaceAll("_", " ")
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
									className: "text-xs text-blue-700",
									children: recommendedActionLabel
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border border-emerald-100 bg-emerald-50/50 p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 text-emerald-700",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-bold tracking-wider",
									children: "DETERMINISTIC AUTHORIZATION"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm font-semibold",
								children: item.guardrail === "HUMAN_REVIEW" ? "Human approval required" : item.guardrail === "APPROVED" ? "All applicable safety rules passed" : item.guardrail
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs leading-5 text-slate-500",
								children: "No duplicate link · within contact limits · payment not already successful · inside recovery window."
							})
						]
					}),
					["RECOVERED", "STOPPED"].includes(item.state) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border border-emerald-200 bg-emerald-50 p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 text-emerald-700",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-bold tracking-wider",
								children: "STOPPING RULE APPLIED"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm font-semibold text-slate-900",
							children: item.state === "RECOVERED" ? "Payment recovered. No more contact or provider action is allowed." : "Recovery suppressed. No customer contact was created."
						})]
					}),
					item.providerRef && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between rounded-xl bg-slate-950 p-4 text-white",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[10px] tracking-wider text-slate-400",
							children: "PROVIDER REFERENCE"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 font-mono text-xs",
							children: item.providerRef
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							tone: "blue",
							children: item.paymentLinkUrl ? "RAZORPAY" : "MOCK"
						})]
					}),
					(item.operationStatus || item.webhookStatus) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-700",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 font-semibold text-slate-900",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 text-emerald-600" }), "Latest action"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-xs leading-5",
							children: item.webhookStatus || item.operationStatus
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border border-slate-200 bg-white p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-bold tracking-wider text-slate-500",
								children: "CASE TIMELINE"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-slate-400",
								children: "Latest verified state changes for this payment."
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
								tone: "slate",
								children: [caseAudit.length, " EVENTS"]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 space-y-3",
							children: [caseAudit.map((row, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-[74px_92px_1fr] gap-3 text-xs",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono text-slate-400",
										children: row.time
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-semibold text-slate-500",
										children: row.component
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-slate-700",
										children: row.event.replaceAll("_", " ")
									})
								]
							}, `${row.time}-${row.event}-${index}`)), !caseAudit.length && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-slate-400",
								children: "No case events have been recorded yet."
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap justify-end gap-2",
						children: [
							item.paymentLinkUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "outline",
								onClick: () => window.open(item.paymentLinkUrl, "_blank", "noopener"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {}), "Open payment link"]
							}),
							item.action === "CREATE_PAYMENT_LINK" && ["DETECTED", "FAILED"].includes(item.state) && !item.paymentLinkUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								className: "bg-orange-600 hover:bg-orange-700",
								onClick: () => action("execute", item.id),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {}), "Create payment link"]
							}),
							item.state === "AWAITING_APPROVAL" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "outline",
								onClick: () => action("reject", item.id),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {}), "Reject action"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								className: "bg-purple-600 hover:bg-purple-700",
								onClick: () => action("approve", item.id),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {}), "Approve action"]
							})] }),
							item.state === "MONITORING" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								className: "bg-emerald-600 hover:bg-emerald-700",
								onClick: () => action("success", item.id),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {}), "Simulate success"]
							}),
							!item.paymentLinkUrl && item.state !== "RECOVERED" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "outline",
								onClick: () => action("failure", item.id),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {}), "Provider failure"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "outline",
								onClick: () => action("duplicate", item.id),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileCheckCorner, {}), "Duplicate webhook"]
							})
						]
					})
				]
			})]
		})
	});
}
function Mini({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl bg-slate-50 p-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-[9px] font-bold tracking-wider text-slate-400",
			children: label.toUpperCase()
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-sm font-semibold",
			children: value
		})]
	});
}
//#endregion
export { RecoverIQApp as default };
