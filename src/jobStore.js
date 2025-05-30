export class JobStore {
    constructor() {
        this.jobs = [];
    }

    addJob(job) {
        this.jobs.push(job);
    }
    
    getJobs() {
        return this.jobs;
    }
    
    updateJob(id, updates) {
        const job = this.jobs[id];
        if (job) {
            Object.assign(job, updates);
        }
    }

    deleteJob(id) {
        this.jobs.splice(id, 1);
    }
}