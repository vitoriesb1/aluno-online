class Nota {
    constructor(disciplina, a1, a2, a3) {
        this.disciplina = disciplina;
        this.a1 = a1;
        this.a2 = a2;
        this.a3 = a3;
    }

    mediaFinal() {
        return Math.max(
            0.4 * this.a1 + 0.6 * this.a2, 
            0.4 * this.a1 + 0.6 * this.a3, 
            0.4 * this.a3 + 0.6 * this.a2
        );
    }

    mediaCA() {
        if (this.mediaFinal() == 0){
            return "SR"
        } else if (this.mediaFinal() > 0 && this.mediaFinal() < 3){
            return "II"
        } else if (this.mediaFinal() >= 3 && this.mediaFinal() < 5){
            return "MI"
        } else if (this.mediaFinal() >= 5 && this.mediaFinal() < 7){
            return "MM"
        } else if (this.mediaFinal() >= 7 && this.mediaFinal() < 9){
            return "MS"
        } else if (this.mediaFinal() >= 9 && this.mediaFinal() <= 10){
            return "SS"
        } else {
            console.log(this.mediaFinal())
            return "error"
        }
    }
}

module.exports = Nota;