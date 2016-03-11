// TBE JS library - General utility methods
//
var TBE = {
  CreateCanvasElement: function (position)
  {
    var canvas = document.createElement('canvas');
    canvas.style.position = position;
    return canvas;
  },

  CreateSquareCanvasElement: function (size)
  {
    var width = 0;
    var height = 0;
    var position = 'absolute';
    if(typeof size == 'object') {
      if(typeof size.width!='undefined') {
        width=size.width;
      } else if(typeof size[0]!='undefined') {
        width=size[0];
      }
      if(typeof size.height!='undefined') {
        height=size.height;
      } else if(typeof size[1]!='undefined') {
        height=size[1];
      }
      if(typeof size.position!='undefined') {
        position=size.position;
      } else if(typeof size[2]!='undefined') {
        position=size[2];
      }
    } else if(typeof size == 'number' || typeof size == 'string'){
      width = parseInt(size);
      height = parseInt(size);
    }
    var canvas = TBE.CreateCanvasElement(position);
    canvas.setAttribute ('width', width);
    canvas.setAttribute ('height', height);
    return canvas;
  },

  // Get a Canvas context, given an element.
  // Accepts either an element ID or a DOM object.
  //
  GetElement2DContext: function (element)
  {
    if (typeof (element) != 'object')
      element = document.getElementById (element);

    if (element && element.getContext)
      return element.getContext('2d');

    return null;
  },

  // Clear a canvas, per w3c specification.
  // Accepts either an element ID or a DOM object.
  //
  ClearCanvas: function (element)
  {
    if (typeof (element) != 'object')
      element = document.getElementById(element);

    if (element)
      element.setAttribute ('width', element.getAttribute ('width'));
  },

  defaultView: null, // Cache defaultView (like jQuery does)
  GetElementComputedStyle: function (element)
  {
    if (!this.defaultView) this.defaultView = document.defaultView; 
    if (this.defaultView && this.defaultView.getComputedStyle)
      return this.defaultView.getComputedStyle (element, null);

    return null;
  },

  // Convert degrees to radians
  //
  Deg2Rad: function (theta)
  {
    return theta * Math.PI / 180.0;
  }
};
