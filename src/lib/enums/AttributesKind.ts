import { toEnum } from "../utils/toEnum";

export const AttributesKind = toEnum([
    "alignContent",
    "alignItems",
    "alignSelf",
    "alignmentBaseline",
    "animation",
    "animationDelay",
    "animationDirection",
    "animationDuration",
    "animationFillMode",
    "animationIterationCount",
    "animationName",
    "animationPlayState",
    "animationTimingFunction",
    "backfaceVisibility",
    "background",
    "backgroundAttachment",
    "backgroundClip",
    "backgroundColor",
    "backgroundImage",
    "backgroundOrigin",
    "backgroundPosition",
    "backgroundPositionX",
    "backgroundPositionY",
    "backgroundRepeat",
    "backgroundSize",
    "baselineShift",
    "blockSize",
    "border",
    "borderBlockEnd",
    "borderBlockEndColor",
    "borderBlockEndStyle",
    "borderBlockEndWidth",
    "borderBlockStart",
    "borderBlockStartColor",
    "borderBlockStartStyle",
    "borderBlockStartWidth",
    "borderBottom",
    "borderBottomColor",
    "borderBottomLeftRadius",
    "borderBottomRightRadius",
    "borderBottomStyle",
    "borderBottomWidth",
    "borderCollapse",
    "borderColor",
    "borderImage",
    "borderImageOutset",
    "borderImageRepeat",
    "borderImageSlice",
    "borderImageSource",
    "borderImageWidth",
    "borderInlineEnd",
    "borderInlineEndColor",
    "borderInlineEndStyle",
    "borderInlineEndWidth",
    "borderInlineStart",
    "borderInlineStartColor",
    "borderInlineStartStyle",
    "borderInlineStartWidth",
    "borderLeft",
    "borderLeftColor",
    "borderLeftStyle",
    "borderLeftWidth",
    "borderRadius",
    "borderRight",
    "borderRightColor",
    "borderRightStyle",
    "borderRightWidth",
    "borderSpacing",
    "borderStyle",
    "borderTop",
    "borderTopColor",
    "borderTopLeftRadius",
    "borderTopRightRadius",
    "borderTopStyle",
    "borderTopWidth",
    "borderWidth",
    "bottom",
    "boxShadow",
    "boxSizing",
    "breakAfter",
    "breakBefore",
    "breakInside",
    "captionSide",
    "caretColor",
    "clear",
    "clip",
    "clipPath",
    "clipRule",
    "color",
    "colorInterpolation",
    "colorInterpolationFilters",
    "columnCount",
    "columnFill",
    "columnGap",
    "columnRule",
    "columnRuleColor",
    "columnRuleStyle",
    "columnRuleWidth",
    "columnSpan",
    "columnWidth",
    "columns",
    "content",
    "counterIncrement",
    "counterReset",
    "cssFloat",
    "cssText",
    "cursor",
    "direction",
    "display",
    "dominantBaseline",
    "emptyCells",
    "enableBackground",
    "fill",
    "fillOpacity",
    "fillRule",
    "filter",
    "flex",
    "flexBasis",
    "flexDirection",
    "flexFlow",
    "flexGrow",
    "flexShrink",
    "flexWrap",
    "float",
    "floodColor",
    "floodOpacity",
    "font",
    "fontFamily",
    "fontFeatureSettings",
    "fontKerning",
    "fontSize",
    "fontSizeAdjust",
    "fontStretch",
    "fontStyle",
    "fontSynthesis",
    "fontVariant",
    "fontVariantCaps",
    "fontVariantEastAsian",
    "fontVariantLigatures",
    "fontVariantNumeric",
    "fontVariantPosition",
    "fontWeight",
    "gap",
    "glyphOrientationHorizontal",
    "glyphOrientationVertical",
    "grid",
    "gridArea",
    "gridAutoColumns",
    "gridAutoFlow",
    "gridAutoRows",
    "gridColumn",
    "gridColumnEnd",
    "gridColumnGap",
    "gridColumnStart",
    "gridGap",
    "gridRow",
    "gridRowEnd",
    "gridRowGap",
    "gridRowStart",
    "gridTemplate",
    "gridTemplateAreas",
    "gridTemplateColumns",
    "gridTemplateRows",
    "height",
    "hyphens",
    "imageOrientation",
    "imageRendering",
    "imeMode",
    "inlineSize",
    "justifyContent",
    "justifyItems",
    "justifySelf",
    "kerning",
    "layoutGrid",
    "layoutGridChar",
    "layoutGridLine",
    "layoutGridMode",
    "layoutGridType",
    "left",
    "letterSpacing",
    "lightingColor",
    "lineBreak",
    "lineHeight",
    "listStyle",
    "listStyleImage",
    "listStylePosition",
    "listStyleType",
    "margin",
    "marginBlockEnd",
    "marginBlockStart",
    "marginBottom",
    "marginInlineEnd",
    "marginInlineStart",
    "marginLeft",
    "marginRight",
    "marginTop",
    "marker",
    "markerEnd",
    "markerMid",
    "markerStart",
    "mask",
    "maskComposite",
    "maskImage",
    "maskPosition",
    "maskRepeat",
    "maskSize",
    "maskType",
    "maxBlockSize",
    "maxHeight",
    "maxInlineSize",
    "maxWidth",
    "minBlockSize",
    "minHeight",
    "minInlineSize",
    "minWidth",
    "msContentZoomChaining",
    "msContentZoomLimit",
    "msContentZoomLimitMax",
    "msContentZoomLimitMin",
    "msContentZoomSnap",
    "msContentZoomSnapPoints",
    "msContentZoomSnapType",
    "msContentZooming",
    "msFlowFrom",
    "msFlowInto",
    "msFontFeatureSettings",
    "msGridColumn",
    "msGridColumnAlign",
    "msGridColumnSpan",
    "msGridColumns",
    "msGridRow",
    "msGridRowAlign",
    "msGridRowSpan",
    "msGridRows",
    "msHighContrastAdjust",
    "msHyphenateLimitChars",
    "msHyphenateLimitLines",
    "msHyphenateLimitZone",
    "msHyphens",
    "msImeAlign",
    "msOverflowStyle",
    "msScrollChaining",
    "msScrollLimit",
    "msScrollLimitXMax",
    "msScrollLimitXMin",
    "msScrollLimitYMax",
    "msScrollLimitYMin",
    "msScrollRails",
    "msScrollSnapPointsX",
    "msScrollSnapPointsY",
    "msScrollSnapType",
    "msScrollSnapX",
    "msScrollSnapY",
    "msScrollTranslation",
    "msTextCombineHorizontal",
    "msTextSizeAdjust",
    "msTouchAction",
    "msTouchSelect",
    "msUserSelect",
    "msWrapFlow",
    "msWrapMargin",
    "msWrapThrough",
    "objectFit",
    "objectPosition",
    "opacity",
    "order",
    "orphans",
    "outline",
    "outlineColor",
    "outlineOffset",
    "outlineStyle",
    "outlineWidth",
    "overflow",
    "overflowAnchor",
    "overflowWrap",
    "overflowX",
    "overflowY",
    "padding",
    "paddingBlockEnd",
    "paddingBlockStart",
    "paddingBottom",
    "paddingInlineEnd",
    "paddingInlineStart",
    "paddingLeft",
    "paddingRight",
    "paddingTop",
    "pageBreakAfter",
    "pageBreakBefore",
    "pageBreakInside",
    "paintOrder",
    "penAction",
    "perspective",
    "perspectiveOrigin",
    "placeContent",
    "placeItems",
    "placeSelf",
    "pointerEvents",
    "position",
    "quotes",
    "resize",
    "right",
    "rotate",
    "rowGap",
    "rubyAlign",
    "rubyOverhang",
    "rubyPosition",
    "scale",
    "scrollBehavior",
    "shapeRendering",
    "stopColor",
    "stopOpacity",
    "stroke",
    "strokeDasharray",
    "strokeDashoffset",
    "strokeLinecap",
    "strokeLinejoin",
    "strokeMiterlimit",
    "strokeOpacity",
    "strokeWidth",
    "tabSize",
    "tableLayout",
    "textAlign",
    "textAlignLast",
    "textAnchor",
    "textCombineUpright",
    "textDecoration",
    "textDecorationColor",
    "textDecorationLine",
    "textDecorationStyle",
    "textEmphasis",
    "textEmphasisColor",
    "textEmphasisPosition",
    "textEmphasisStyle",
    "textIndent",
    "textJustify",
    "textKashida",
    "textKashidaSpace",
    "textOrientation",
    "textOverflow",
    "textRendering",
    "textShadow",
    "textTransform",
    "textUnderlinePosition",
    "top",
    "touchAction",
    "transform",
    "transformBox",
    "transformOrigin",
    "transformStyle",
    "transition",
    "transitionDelay",
    "transitionDuration",
    "transitionProperty",
    "transitionTimingFunction",
    "translate",
    "unicodeBidi",
    "userSelect",
    "verticalAlign",
    "visibility",
    "webkitAlignContent",
    "webkitAlignItems",
    "webkitAlignSelf",
    "webkitAnimation",
    "webkitAnimationDelay",
    "webkitAnimationDirection",
    "webkitAnimationDuration",
    "webkitAnimationFillMode",
    "webkitAnimationIterationCount",
    "webkitAnimationName",
    "webkitAnimationPlayState",
    "webkitAnimationTimingFunction",
    "webkitAppearance",
    "webkitBackfaceVisibility",
    "webkitBackgroundClip",
    "webkitBackgroundOrigin",
    "webkitBackgroundSize",
    "webkitBorderBottomLeftRadius",
    "webkitBorderBottomRightRadius",
    "webkitBorderImage",
    "webkitBorderRadius",
    "webkitBorderTopLeftRadius",
    "webkitBorderTopRightRadius",
    "webkitBoxAlign",
    "webkitBoxDirection",
    "webkitBoxFlex",
    "webkitBoxOrdinalGroup",
    "webkitBoxOrient",
    "webkitBoxPack",
    "webkitBoxShadow",
    "webkitBoxSizing",
    "webkitColumnBreakAfter",
    "webkitColumnBreakBefore",
    "webkitColumnBreakInside",
    "webkitColumnCount",
    "webkitColumnGap",
    "webkitColumnRule",
    "webkitColumnRuleColor",
    "webkitColumnRuleStyle",
    "webkitColumnRuleWidth",
    "webkitColumnSpan",
    "webkitColumnWidth",
    "webkitColumns",
    "webkitFilter",
    "webkitFlex",
    "webkitFlexBasis",
    "webkitFlexDirection",
    "webkitFlexFlow",
    "webkitFlexGrow",
    "webkitFlexShrink",
    "webkitFlexWrap",
    "webkitJustifyContent",
    "webkitLineClamp",
    "webkitMask",
    "webkitMaskBoxImage",
    "webkitMaskBoxImageOutset",
    "webkitMaskBoxImageRepeat",
    "webkitMaskBoxImageSlice",
    "webkitMaskBoxImageSource",
    "webkitMaskBoxImageWidth",
    "webkitMaskClip",
    "webkitMaskComposite",
    "webkitMaskImage",
    "webkitMaskOrigin",
    "webkitMaskPosition",
    "webkitMaskRepeat",
    "webkitMaskSize",
    "webkitOrder",
    "webkitPerspective",
    "webkitPerspectiveOrigin",
    "webkitTapHighlightColor",
    "webkitTextFillColor",
    "webkitTextSizeAdjust",
    "webkitTextStroke",
    "webkitTextStrokeColor",
    "webkitTextStrokeWidth",
    "webkitTransform",
    "webkitTransformOrigin",
    "webkitTransformStyle",
    "webkitTransition",
    "webkitTransitionDelay",
    "webkitTransitionDuration",
    "webkitTransitionProperty",
    "webkitTransitionTimingFunction",
    "webkitUserModify",
    "webkitUserSelect",
    "webkitWritingMode",
    "whiteSpace",
    "widows",
    "width",
    "willChange",
    "wordBreak",
    "wordSpacing",
    "wordWrap",
    "writingMode",
    "zIndex",
    "zoom",
]);
