const kodomAli = {
    name: 'Kadam Ali',
    exam: 'Bangla',
    examMarks: function(mark){
        console.log(`${this.name} is perticipating an ${this.exam} exam and got ${mark} mark`);
    },
}
const Sahil={
    name:'sahil',
    mark: 70,
    exam: 'English',
}
const result = kodomAli.examMarks.call(Sahil,Sahil.mark);