// any global variables
const base_url = "http://127.0.0.1:3000"
const journalService = new JournalService(base_url)
// workoutService.getWorkouts()
journalService.getJournals()
// any initializations of the application
// Workout.workoutForm.addEventListener('submit', handleSubmit)
Journal.renderForm()

// this below needs to be fixed

function handleSubmit(){
    event.preventDefault()
    WorkoutService.createWorkout()
}