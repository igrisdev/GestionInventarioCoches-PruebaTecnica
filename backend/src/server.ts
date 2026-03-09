import app from "./app.ts";

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`http://localhost:${port}/api`);
});
