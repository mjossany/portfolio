function resizeTo(width, height) {
  Object.assign(this, {
    innertWidth: width,
    innerHeight: height,
    outerWidth: width,
    outerHeight: height,
  });
}

export default resizeTo;
