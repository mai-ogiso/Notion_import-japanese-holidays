// Load environment variables from .env file
require('dotenv').config();

// Initialize a new Notion client with my integration's API key
const { Client } = require('@notionhq/client');
const notion = new Client({ auth: process.env.NOTION_API_KEY });

// Set the database ID of my calendar database
const databaseId = process.env.NOTION_DATABASE_ID;

// Define the URL of the Japanese holidays API
const holidaysUrl = 'https://holidays-jp.github.io/api/v1/date.json';

// Get the current year as a number
const now = new Date();
const thisYear = now.getFullYear();

// // Initialize i to count pages
// let i = 0;

// // Fetch the list of holidays from the API
// (async () => {
//   fetch(holidaysUrl)
//     .then(response => response.json())
//     .then(holidays => {
//       // Loop through the list of holidays and add each one to my database
//       for (const [key, value] of Object.entries(holidays)) {
//         // Get the holiday data for this year and later years
//         if (Number(key.slice(0, 4)) >= thisYear) {
//           notion.pages.create({
//             parent: { database_id: databaseId },
//             properties: {
//               Name: { title: [{ text: { content: `\u{1F1EF}\u{1F1F5} ${value}` } }] },
//               Date: { date: { start: key } },
//               // Tags: { select: { name: "祝日" } } // Add a "祝日" tag to each holiday
//             }

//           })
//           i++;
//         }
//       }
//     })
//     .then(() => console.log(`Created ${i} pages!`))
//     .catch(error => console.error(error));
// })();


// Define an async function to fetch the holidays and add them to the database
async function fetchHolidays() {
  try {
    const response = await fetch(holidaysUrl); // Await the fetch request
    const holidays = await response.json(); // Await the JSON response

    let created = 0;
    for (const [key, value] of Object.entries(holidays)) {
      if (Number(key.slice(0, 4)) >= thisYear) {
        await notion.pages.create({
          parent: { database_id: databaseId },
          properties: {
            Name: { title: [{ text: { content: `\u{1F1EF}\u{1F1F5} ${value}` } }] },
            Date: { date: { start: key } },
              // Tags: { select: { name: "祝日" } } // Add a "祝日" tag to each holiday
            },
        });
        created++;
      }
    }

    console.log(`Created ${created} pages!`);
  } catch (error) {
    console.error(error);
  }
}

// Call the async function
fetchHolidays();