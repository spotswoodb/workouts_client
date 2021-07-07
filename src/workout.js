class Workout {
    // remember objects
    static all = []
    static workoutsContainer = document.getElementById("workouts-container")
    static workoutForm = document.getElementById("workouts-container")
    constructor({id, name, journal_id}){
        this.id = id
        this.name = name
        this.journal_id = journal_id

        this.element = document.createElement('li')
        this.element.dataset.id = this.id
        this.element.id = `workout-${this.id}`


        Workout.all.push(this)
    }

    workoutHTML(){
        this.element.innerHTML += `
            <div>
                <h3>${this.name}</h3>
            </div>
        `
        return this.element
    }

    slapOnDom(){
        Workout.workoutsContainer.append(this.workoutHTML())
    }
}