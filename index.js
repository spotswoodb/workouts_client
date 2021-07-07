// any global variables
const base_url = "http://127.0.0.1:3000"
const workoutService = new WorkoutService(base_url)

workoutService.getWorkouts()
// any initializations of the application