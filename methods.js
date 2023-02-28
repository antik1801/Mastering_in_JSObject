const students = {
    name:'kadam ali',
    money: 5000,
    study: 'Math',
    subjects: ['hi','there','fuck','you'],
    exam: function(){
        return `${this.name} is participended an ${this.study} show`;
    },
    improveExam: function(subjects){
        this.exam();
        return `${this.name} is taking improvement on ${this.subjects}`
    }

}
const arrayToString = students.subjects.join(" ");
console.log(students.exam());
console.log(students.improveExam());