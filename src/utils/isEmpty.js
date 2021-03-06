/*
* This is a global function, used for checking if
* passed value (object, string etc) is empty or not
* */

const isEmpty = (value) => {
  return(
    value === undefined ||
    value === null ||
    (typeof  value === 'object' && Object.keys(value).length === 0) ||
    (typeof value === 'string' && value.trim().length === 0)
  );
}

export default isEmpty;