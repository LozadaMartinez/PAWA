var val=process.argv.length;
var arg=parseInt(val);
var incr=0;
for(i=2; i<arg; i++){
	incr=(parseInt(process.argv[i])+incr);
}
console.log(process.argv);
console.log(incr);