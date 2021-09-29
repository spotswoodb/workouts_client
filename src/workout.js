class Workout {
    // remember objects
    static all = []
    static workoutsContainer = document.getElementById("workouts-container")
    static workoutForm = document.getElementById("form-container")
    
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
        if (document.querySelector(`#workout-${this.id}`)){
            return 
        }
        const workoutsContainer = document.querySelector(`#journal-${this.journal_id}-workouts-container`)
        const workoutContainer = document.createElement('div')
        workoutContainer.id = `workout-${this.id}`
        workoutContainer.innerHTML = `
            <p class='p-4'>${this.name}</p>
            <button class='delete-workout-button border p-4' data-workout-id='${this.id}'>Delete</button>
            <button class='leg-day-btn'>Leg Day!</button>
        `
        workoutsContainer.appendChild(workoutContainer)
        const deleteButton = workoutContainer.querySelector('.delete-workout-button')
        // const legDayButton = workoutContainer.querySelector('.leg-day-btn')
        // const legJournalId = workoutsContainer.
        // .addEventListener('click', () => {
        //     WorkoutService.addLegWorkout
        // } 
        deleteButton.addEventListener('click', WorkoutService.deleteWorkout)
    }
    
}