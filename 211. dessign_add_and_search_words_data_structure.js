/**
 * 
 * 211. Design Add and Search Words Data Structure
Medium
6.6K
378
company
Amazon
company
Google
company
Microsoft
Design a data structure that supports adding new words and finding if a string matches any previously added string.

Implement the WordDictionary class:

WordDictionary() Initializes the object.
void addWord(word) Adds word to the data structure, it can be matched later.
bool search(word) Returns true if there is any string in the data structure that matches word or false otherwise. word may contain dots '.' where dots can be matched with any letter.
 

Example:

Input
["WordDictionary","addWord","addWord","addWord","search","search","search","search"]
[[],["bad"],["dad"],["mad"],["pad"],["bad"],[".ad"],["b.."]]
Output
[null,null,null,null,false,true,true,true]

Explanation
WordDictionary wordDictionary = new WordDictionary();
wordDictionary.addWord("bad");
wordDictionary.addWord("dad");
wordDictionary.addWord("mad");
wordDictionary.search("pad"); // return False
wordDictionary.search("bad"); // return True
wordDictionary.search(".ad"); // return True
wordDictionary.search("b.."); // return True
 

Constraints:

1 <= word.length <= 25
word in addWord consists of lowercase English letters.
word in search consist of '.' or lowercase English letters.
There will be at most 3 dots in word for search queries.
At most 104 calls will be made to addWord and search.
Accepted
505K
Submissions
1.2M
Acceptance Rate
43.7%
 */


class Node{
    constructor(){
        this.keys = new Map();
        this.end = false;
    }
    setEnd(){this.end = true;}
    isEnd(){return this.end}
}

// Simple initialization of the WordDictionary class

var WordDictionary = function() {
    this.root = new Node();
};

// This just adds the word to the dictionary

WordDictionary.prototype.addWord = function(word) {
    let node = this.root;
    function rec(node, word){
        if(word){
            if(!node.keys.has(word[0]))
                node.keys.set(word[0], new Node());
            return rec(node.keys.get(word[0]), word.substr(1));
        }
        else node.setEnd();
    }
    rec(node, word)
    return true;
};

// This is the main recursive function where all of the magic is happening

WordDictionary.prototype.search = function(word) {
    let node = this.root;
    function rec(node, word){
	
		// returns false if the node doesn't exist
        if(!node) return false;
		
		// if the word exist
        if(word){
		
			//skipping any calculation if the word[0] is . 
        
			if(word[0]==='.'){
				
				// Since we don't know what should be the next node so, need to go through all of them one by one
                let out = false;
                for(let val of node.keys.keys()){
					// Any one of the nodes will return true for the upcoming character in word after .
					// So, taking an OR operation
                    out = out || rec(node.keys.get(val), word.substr(1));
                }
                return out;
            }
            else if(node.keys.has(word[0])){
				// If the node has encountered a word then the simple stuff
                return rec(node.keys.get(word[0]), word.substr(1));
            }
			// otherwise return false when the above two are false
            else{ return false}
            
        }
		// If the word doesn't exist but it could have existed so just checking if the node is the end node and returning the result
        else return node.isEnd();
    }
	
    return rec(node, word);
};