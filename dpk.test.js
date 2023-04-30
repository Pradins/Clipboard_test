const { deterministicPartitionKey } = require("./dpk");
const crypto = require("crypto");

const longPartitionKey = 'a'.repeat(257);
const expectedHash = crypto.createHash("sha3-512").update(longPartitionKey).digest("hex");
const expectedStringifyHash = crypto.createHash("sha3-512").update(JSON.stringify(longPartitionKey)).digest("hex");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });


  it("Returns the literal '12' when sent a numeric partitionKey and partitionKey.length < 256", () => {
    const trivialKey = deterministicPartitionKey({ partitionKey: 12 });
    expect(trivialKey).toBe("12");
  });

  it("Returns the literal '12' when sent a string partitionKey and partitionKey.length < 256", () => {
    const trivialKey = deterministicPartitionKey({ partitionKey: '12' });
    expect(trivialKey).toBe("12");
  });

  it("Returns the literal '12' when sent a string partitionKey and partitionKey.length < 256", () => {
    const trivialKey = deterministicPartitionKey({ partitionKey: longPartitionKey });
    expect(trivialKey).toBe(expectedHash);
  });

  it("Returns the literal '12' when sent a event vairble > 256", () => {
    const trivialKey = deterministicPartitionKey(longPartitionKey);
    expect(trivialKey).toBe(expectedStringifyHash);
  });
});
