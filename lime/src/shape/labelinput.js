goog.provide('lime.LabelInput');
goog.provide('lime.Renderer.DOM.LABELINPUT');


goog.require('lime.Renderer.DOM.SPRITE');
goog.require('lime.Sprite');
goog.require('goog.style');
goog.require('goog.ui.LabelInput');
goog.require('goog.dom');

/**
 * object for input text 
 * @constructor
 * @extends lime.Sprite
 */
lime.LabelInput = function(txt) {
    lime.Sprite.call(this);
    this.labelinput_ = new goog.ui.LabelInput(txt);
    //this.labelinput_.getElement().name = 'LabelInput';
   

};
goog.inherits(lime.LabelInput, lime.Sprite);

/** @inheritDoc */
lime.LabelInput.prototype.supportedRenderers = [
    lime.Renderer.DOM.SPRITE.makeSubRenderer(lime.Renderer.DOM.LABELINPUT)
];

/**
 * @inheritDoc
 * @this {lime.Label}
 */
lime.Renderer.DOM.LABELINPUT.draw = function(el) {
    lime.Renderer.DOM.SPRITE.draw.call(this, el);
    var style = el.style;
    if (this.dirty_ ) {
        this.labelinput_.render(el);
        this.labelinput_.getElement().style['-webkit-transform-origin'] = style['-webkit-transform-origin'];
        this.labelinput_.getElement().style['display'] = style['display'];
        this.labelinput_.getElement().style['opacity'] = style['opacity'];
        this.labelinput_.getElement().style['height'] = style['height'];
        this.labelinput_.getElement().style['width'] = style['width'];
        this.labelinput_.getElement().style['border-width'] = style['border-width'];
        this.labelinput_.enterDocument();
        
        
        

    }

};
