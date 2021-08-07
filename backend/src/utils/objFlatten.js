const objFlatten = async (obj) => {
  return Object.assign(
    {},
    ...(function _flatten(o) {
      // return [].concat(...Object.keys(o).map((k) => (typeof o[k] === 'object' ? _flatten(o[k]) : { [k]: o[k] })));
      return [].concat(
        ...Object.keys(o).map((k) => {
          if (!o[k]) return null;
          typeof o[k] === 'object' ? _flatten(o[k]) : { [k]: o[k] };
        })
      );
    })(obj)
  );
};

module.exports = objFlatten;
