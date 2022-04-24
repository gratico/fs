import { InMemoryAdapter } from "../adapters/memory";
import { IndexedDBAdapter } from "../adapters/indexeddb";

describe("FS", () => {
  // todo make it work with
  beforeAll(async () => {});
  test("work with sync", async () => {
    const syncAdapter = new InMemoryAdapter();
    expect(syncAdapter).toBeDefined();
  }, 5000);
});
