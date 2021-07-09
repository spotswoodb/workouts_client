// any global variables
const base_url = "http://127.0.0.1:3000"
const journalService = new JournalService(base_url)
// workoutService.getWorkouts()
journalService.getJournals()
// any initializations of the application