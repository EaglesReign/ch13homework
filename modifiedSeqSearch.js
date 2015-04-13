//Phil Hofer
//CMP344
//4/13/15
//This program returns the last occurrence of an element in a dataset.

function modifiedSeqSearch(arr, data) {
  for (var i = arr.length; i > 0; --i) {
    if (arr[i] == data) {
      return i;
    }//end if
  }//end for
  return -1;
}//end modifiedSeqSearch()

var array = [1,1,2,3,4,5,5,5,6,6];
var num = 5;
print("The last occurence of " + num + " is located at: " 
		+ modifiedSeqSearch(array, num));
