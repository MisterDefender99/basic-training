function countWord(string)
{
    let co = {};
    let ar= string.split('');
        ar.reduce(function(prev,cur)
            {
                (co[cur]) ? co[cur]+=1 : co[cur]=1;
                return co;
             },0     // 0 or any other number lets say num can be  passed for prev = num, to start current element from index 0 
                      // since we r not using prev
        );         
 console.log("Count of each letter in string is:\n", co);
}
var str = "nikhilmukati";
countWord(str);
