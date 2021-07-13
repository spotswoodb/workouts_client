class JournalService {
    
    constructor(endpoint){
        this.endpoint = endpoint
    }

    getJournals(){
        fetch(`${this.endpoint}/journals`)
        .then(resp => resp.json())
        .then(journals => {
            for (const journal of journals){
                const c = new Journal(journal)
                c.slapOnDom()
            }
        })
    }

    static createJournal(event){
        event.preventDefault()
       const form = event.target
       const data = {
           journal: {
               name: form.querySelector(`#name`).value
           }
       }
       form.reset()
       
       fetch(`${base_url}/journals`, {
           method: 'POST',
           headers: {
               'Content-Type': 'application/json',
               'Accept': 'application/json'
           },
           body: JSON.stringify(data)
       })
       .then(resp => resp.json())
       .then(journal => {
            const c = new Journal(journal)
            c.slapOnDom()
       })
    }

}
