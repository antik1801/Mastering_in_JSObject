const kodomAli = {
    name: 'Kadam Ali',
    exam: 'Bangla',
    bill: 2500,
    tips: 500,
    examMarks: function(mark){
        console.log(`${this.name} is perticipating an ${this.exam} exam and got ${mark} mark`);
    },
    resturentBills: function(bill,tips){
        const remainBalance = this.bill - this.tips;
        return [remainBalance,this.name];
    },

}
const obj = {a:1 ,b:7, c:3, length:2}
console.log(Object.keys(obj).length);