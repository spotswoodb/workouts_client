// make all service calls for workout object

class WorkoutService {

    // 1. Read/Index action
    static getWorkouts(e){
        const journalId = e.target.dataset.journalId
        fetch(`${base_url}/journals/${journalId}/workouts`)
        .then(resp => resp.json())
        .then(workouts => {
            for (const workout of workouts){
                const c = new Workout(workout)
                c.slapOnDom()
            }
        })
    }

    static toggleDiv(e) {
        const workoutId = e.target.dataset.workoutId
        workoutId.classList.toggle("divstyle")
    }

    static deleteWorkout(e){
        const workoutId = e.target.dataset.workoutId
        document.querySelector(`#workout-${workoutId}`).remove()
        fetch(`${base_url}/workouts/${workoutId}`, {
            method: "DELETE"
        })
    }
}