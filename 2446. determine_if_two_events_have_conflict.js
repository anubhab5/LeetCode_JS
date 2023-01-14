/**
 * 2446. Determine if Two Events Have Conflict
Easy
243
37
company
Google
company
Goldman Sachs
You are given two arrays of strings that represent two inclusive events that happened on the same day, event1 and event2, where:

event1 = [startTime1, endTime1] and
event2 = [startTime2, endTime2].
Event times are valid 24 hours format in the form of HH:MM.

A conflict happens when two events have some non-empty intersection (i.e., some moment is common to both events).

Return true if there is a conflict between two events. Otherwise, return false.

 

Example 1:

Input: event1 = ["01:15","02:00"], event2 = ["02:00","03:00"]
Output: true
Explanation: The two events intersect at time 2:00.
Example 2:

Input: event1 = ["01:00","02:00"], event2 = ["01:20","03:00"]
Output: true
Explanation: The two events intersect starting from 01:20 to 02:00.
Example 3:

Input: event1 = ["10:00","11:00"], event2 = ["14:00","15:00"]
Output: false
Explanation: The two events do not intersect.
 

Constraints:

evnet1.length == event2.length == 2.
event1[i].length == event2[i].length == 5
startTime1 <= endTime1
startTime2 <= endTime2
All the event times follow the HH:MM format.
Accepted
24.8K
Submissions
50K
Acceptance Rate
49.7%
 */

/**
 * @param {string[]} event1
 * @param {string[]} event2
 * @return {boolean}
 */
var haveConflict = function (event1, event2) {

    let ev1 = [Number(event1[0].split(":").join("")), Number(event1[1].split(":").join(""))];
    let ev2 = [Number(event2[0].split(":").join("")), Number(event2[1].split(":").join(""))];


    if (ev1[0] < ev2[0]) {
        if (ev1[1] >= ev2[0]) {
            return true;
        } else {
            return false;
        }
    } else {
        if (ev2[1] >= ev1[0]) {
            return true;
        } else {
            return false;
        }
    }
};

console.log(haveConflict(["10:00", "11:00"], ["14:00", "15:00"]));