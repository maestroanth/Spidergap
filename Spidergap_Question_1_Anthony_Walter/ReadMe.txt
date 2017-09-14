ReadMe For _Spidergap_Question_1.js and _Spidergap_Question_1_Tests.js
Author: Anthony Walter
Date: 9/14/2017

Instructions: 

1. Make sure node.js is installed (node -v to see version number)

2. In terminal, navigate to the folder where this file is located

3. Run the command "node _Spidergap_Question_1_Tests.js"

4. The terminal will output all the tests. In this case, the file, "_Spidergap_Question_1.js"
itself doesn't output anything since it wasn't indicated for it as per instructions.


Take-Away: Both shallow clones and deep clones copy the immediate fields without them
being linked.  However if there is another object within the clone, shallow cloning
will not duplicate this object, but just copy the memory references to that object.
This 'may' cause unforeseen bugs if not aware by the programmer for if the data
changes within shared inner object changes, that change will be reflected in ALL
clones if shallow-copied.  However, in deep cloning, any interior object will be 
duplicated along with updated memory addresses pointing to the duplicated object 
instead of the original; thereby, keeping the cloned object completely independent 
of the original object.
