import { describe, it, expect } from "vitest";
import { JobStore } from "../src/jobStore";

describe("JobStore", () => {
    it("adds a job to the store", () => {
        const jobStore = new JobStore();
        jobStore.addJob({
            title: "test",
            company: "test",
        })

        const job = jobStore.getJobs();
        expect(job.length).toBe(1);
        expect(job[0].title).toBe("test");
    });

    it('updates a job in the store', () => {
        const jobStore = new JobStore();
        jobStore.addJob({
            title: "test",
            company: "test",
            status: "applied",
        })

        jobStore.updateJob(0, {
            status: "interview",
        })

        const job = jobStore.getJobs();
        expect(job[0].status).toBe("interview");
    })
});
