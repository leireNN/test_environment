function foo(number){
  if(number === null || number === undefined){
    return 'foo';
  }else if(number < 0){
    return 'biz';
  }
  return 'bar';
}

module.exports = foo;
