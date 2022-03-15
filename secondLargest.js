function secondLargest(arr)
{
  let first =-99, second = -99;
  arr.forEach(findNum);
  function findNum(num)
  {
    if(num>first) { second=first; first=num;}
    else {if(num>second && num<first) second = num;}
  }
  console.log("second largest element is: ",second);
}
secondLargest([3,6,4,9,5,9]);