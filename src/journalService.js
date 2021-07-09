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

}