const Airtable = require("airtable");

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  process.env.AIRTABLE_BASE_ID
);
function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return emailRegex.test(email);
}

async function getAllSubscriber() {
  const table = base("subscriber");
  const subscribers = await table.select().all();

  return subscribers.map((subscriber) => {
    return subscriber.Email;
  });
}

export default async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }
  if (!validateEmail(email)) {

    return res.status(400).json({ error: "Something is wrong with your email address." });
  }

  const allSubscriber =await getAllSubscriber();

  if(allSubscriber.indexOf(email) > 0) {
    return res.status(400).json({ error: "You have already subscribe." });
  }

  addSubscribe(email)
    .then((response) => {
      return res.status(200).json(response);
    })
    .catch((error) => {
      return res.status(405).json(error);
    });

  function addSubscribe(email) {
    
    const table = base("subscriber");

    let now = new Date();  
    let nowStr = now.toLocaleString();
    
    return new Promise((resolve, reject) => {
      table.create(
        {
          Email: email,
          Date: nowStr,
        },
        function (err, record) {
          if (err) {
            reject();
          }
          resolve();
        }
      );
    });
  }
  /*
  try {
    const API_KEY = process.env.BUTTONDOWN_API_KEY;
    const response = await fetch(
      `https://api.buttondown.email/v1/subscribers`,
      {
        body: JSON.stringify({ email }),
        headers: {
          Authorization: `Token ${API_KEY}`,
          "Content-Type": "application/json",
        },
        method: "POST",
      }
    );

    const responseJson = await response.json();

    if (response.status >= 400) {
      return res.status(400).json({
        error: await responseJson[0],
      });
    }
    

    return res.status(201).json({ error: "" });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
  */

};
