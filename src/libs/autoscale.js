// https://github.com/component/autoscale-canvas/blob/master/index.js

/**
 * Retina-enable the given `canvas`.
 *
 * @param {Canvas} canvas
 * @return {Canvas}
 * @api public
 */

module.exports = function(canvasList, opt) {
  var ratio = window.devicePixelRatio || 1,
    ctx = null;

  canvasList.forEach(canvas => {
    ctx = canvas.getContext('2d');
    canvas.style.position = 'absolute';
    canvas.style.width = opt.width + 'px';
    canvas.style.height = opt.height + 'px';
    canvas.width = opt.width * ratio;
    canvas.height = opt.height * ratio;
    ctx.scale(ratio, ratio);
  });

  return canvasList;
};
