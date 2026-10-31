const { Client } = require("pg");

console.log(process.version);

const client = new Client({
  host: "127.0.0.1",
  port: 5432,
  user: "payload",
  password: "payload",
  database: "armstrong",
});

async function test() {
  try {
    await client.connect();
    console.log("✅ Connected");
    const result = await client.query("SELECT current_user");
    console.log(result.rows);
  } catch (err) {
    console.error(err);
  } finally {
    await client.end().catch(() => {});
  }
}

test();