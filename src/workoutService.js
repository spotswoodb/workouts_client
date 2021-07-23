// make all service calls for workout object

class WorkoutService {

    // 1. Read/Index action
    static getWorkouts(journalId){
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
        const journalId = e.target.dataset.journalId
        const workoutContainer = document.querySelector(`#journal-${journalId}-workouts-container`)
        if (workoutContainer.classList.contains("open")){
            workoutContainer.innerHTML = ''
            workoutContainer.classList.remove('open')
        } else {
            WorkoutService.getWorkouts(journalId)
            workoutContainer.classList.add('open')
        }
    }

    static deleteWorkout(e){
        const workoutId = e.target.dataset.workoutId
        document.querySelector(`#workout-${workoutId}`).remove()
        fetch(`${base_url}/workouts/${workoutId}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(resp => resp.json())
        .then(json => alert(json.message))
    }
}