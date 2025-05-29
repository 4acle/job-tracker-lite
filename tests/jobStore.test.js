import { describe, it, expect } from "vitest";
import { JobStore } from "./jobStore";

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
});
