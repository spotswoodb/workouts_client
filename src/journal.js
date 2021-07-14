class Journal {
    static all = []
    static journalsContainer = document.getElementById("journals-container")
    static journalForm = document.getElementById("form-container")
    constructor({name, id}) {
        this.id = id
        this.name = name


        this.element = document.createElement('div')
        this.element.dataset.id = this.id
        this.element.id = `journal-${this.id}`


        Journal.all.push(this)
    }
   
    
    journalHTML(){
        this.element.innerHTML += `
            <div>
                <h3>
                    <span data-journal-id="${this.id}">${this.name}</span>
                </h3>
                <div id="journal-${this.id}-workouts-container">
                    
                </div>
            </div>
        `
        return this.element
    }

    slapOnDom(){
        Journal.journalsContainer.append(this.journalHTML())
        const journalSpan = document.querySelector(`#journal-${this.id} span`)        
        journalSpan.addEventListener('click', WorkoutService.toggleDiv)

    }

    

    static renderForm(){
        Journal.journalForm.innerHTML += `
            <form id="new-journal-form">
                Journal Name: <input type="text" id="name">
                <input type="submit" id="create">
            </form>
        `
        document.querySelector(`#new-journal-form`).addEventListener('submit', JournalService.createJournal)
    }

}