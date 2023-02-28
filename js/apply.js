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
const Sahil={
    name:'sahil',
    mark: 70,
    exam: 'English',
    bill: 4000,
    tips: 700,
}
const apply = kodomAli.examMarks.apply(Sahil,[70]);
const restBill = kodomAli.resturentBills.apply(Sahil);
console.log(restBill);