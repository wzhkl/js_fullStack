function ListNode(val) {
  this.val = val
  this.next = null
}

var a1 = new ListNode(1);
var a2 = new ListNode(2);
var a3 = new ListNode(3);
var a4 = new ListNode(4);
var a5 = new ListNode(5);
a1.next = a2;
a2.next = a3;
a3.next = a4;
a4.next = a5;

var reverseList = function(head) {
  // head 头结点
  var cur = head,
    pre = null;

  while (cur) {
    var t = cur.next;
    cur.next = pre;
    pre = cur;
    cur = t;
  }
  return pre;
};

console.log(reverseList(a1))