var names=new Array();
names[0]='Yaakov'
names[1]='John'
names[2]='Jane'
names[3]='jason'
names[4]='paul'
names[5]='frank'
names[6]='walter'
names[7]='paul'
names[8]='hank'
names[9]='jay'

for(var i=0;i<names.length;i++){
    if(names[i].charAt(0)==='J'||names[i].charAt(0)==='j'){
        console.log('Goodbye'+names[i])
    }
    else{
        console.log('Hello'+names[i])
    }
}