function countLetter(input_string)
{
    let countStore = {};
    let countArray= input_string.split("");
        countArray.reduce(function(prev,curr)
            {
                (countStore[curr]) ? countStore[curr]+=1 : countStore[curr]=1;
                return countStore;
             },0     // 0 or any other number lets say num can be  passed for prev = num, to start current element from index 0 
                     // since we r not using prev
        );         
 console.log("Count of each letter in inputted_string is:\n", countStore);
}
let input = "nikhilmukati";
countLetter(input);
