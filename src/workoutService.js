// make all service calls for workout object

class WorkoutService {

    constructor(endpoint){
        this.endpoint = endpoint
    }

    // 1. Read/Index action
    getWorkouts(){
        fetch(`${this.endpoint}/workouts`)
        .then(resp => resp.json())
        .then(workouts => {
            for (const workout of workouts){
                const c = new Workout(workout)
                c.slapOnDom()
            }
        })
    }
}