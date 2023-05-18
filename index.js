const fetch = require("node-fetch");
// Installed v2 due to import - https://www.npmjs.com/package/node-fetch#installation

// API docs: https://middleware.idxbroker.com/docs/api/overview.php#headers
// URL format: https://api.idxbroker.com/component/method/primary request ID/secondary request ID?query string
// https://api.idxbroker.com/mls/cities/a001?filterField=stateAbrv&filterValue=OR
const url =
  "https://api.idxbroker.com/mls/cities/a001?filterField=stateAbrv&filterValue=OR";

const testFetch = async () => {
  const response = await fetch(url, {
    method: "get",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      accesskey: "",
    },
  });

  if (!response.ok)
    throw new Error(
      `unexpected response ${response.status}: ${response.statusText}`
    );

  const data = await response.json();

  console.log(data);
};

testFetch();
