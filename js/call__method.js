const kodomAli = {
    name: 'Kadam Ali',
    exam: 'Bangla',
    bill: 2500,
    tips: 500,
    examMarks: function(mark){
        console.log(`${this.name} is perticipating an ${this.exam} exam and got ${mark} mark`);
    },

}
const Sahil={
    name:'sahil',
    mark: 70,
    exam: 'English',
    bill: 4000,
    tips: 700,
}
const result = kodomAli.examMarks.call(Sahil,Sahil.mark);