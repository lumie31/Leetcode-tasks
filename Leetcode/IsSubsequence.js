// https://leetcode.com/problems/is-subsequence/description/
/*
  Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

  A subsequence of a string is a new string that is formed from the original 
  string by deleting some (can be none) of the characters without disturbing the 
  relative positions of the remaining characters. 
  (i.e., "ace" is a subsequence of "abcde" while "aec" is not).
*/

var isSubsequence = function (s, t) {
  let i = 0,
    j = 0;
  if (!s) return true;
  while (j < t.length) {
    if (t[j] === s[i]) i++;
    if (i === s.length) return true;
    j++;
  }
  return false;
};