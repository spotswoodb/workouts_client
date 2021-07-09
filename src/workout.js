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
        const workoutsContainer = document.querySelector(`#journal-${this.journal_id}-workouts-container`)
        const workoutContainer = document.createElement('div')
        workoutContainer.id = `workout-${this.id}`
        workoutContainer.innerHTML = `
            <p>${this.name}</p>
            <button class='delete-workout-button' data-workout-id='${this.id}'>Delete</button>
        `
        workoutsContainer.appendChild(workoutContainer)
        workoutsContainer.querySelector('.delete-workout-button').addEventListener('click', WorkoutService.deleteWorkout)
    }

    toggleDiv(){
        
    }
}

// i need to toggle between div onclicks - show the div then not show the div
// what does it take to do that?
// something with the event listener
// 
