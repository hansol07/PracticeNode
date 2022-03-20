console.time('시간');
console.log('시간');
console.timeEnd('시간');
setImmediate(() => console.log('하이'));


const interval = setInterval(() => {
  console.log('test');
},1500);

setTimeout(() => {
  clearInterval(interval);
},2000);