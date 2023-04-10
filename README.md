# Import Japanese Holidays into Notion Calendar

This script allows you to easily import Japanese holidays into your Notion calendar. 

As of the current date (2023/04/11), there is no built-in function in Notion to import Japanese holidays.
![Notion-japanese-holidays-sample](https://user-images.githubusercontent.com/95740190/230990301-6eb042b0-c8e4-43dd-a910-265e0b17b084.png)

## Getting Started

### Prerequisites

Before using this script, make sure you have the following prerequisites installed:

- Node.js

### Installation

1. Clone or download the repository.
2. Install dependencies by running `npm install`.
3. Create a new Notion integration by following the instructions on the [official Notion API documentation](https://developers.notion.com/docs/getting-started#step-2-share-a-database-with-your-integration).
4. Copy your integration token and the URL of your Notion calendar page to `.envsample`, and rename the file to `.env`.
5. Run `node import-japanese-holidays.js` to import Japanese holidays into your Notion calendar.

### Note about the Data Source

This script uses the [Holidays JP API](https://holidays-jp.github.io/) as the data source for Japanese holidays. 
The API provides Japanese holidays from the previous year to the next year. 

### Optimization

Consider the following optimizations to improve the script:

- Check for duplicate data

>Currently, the script does not check for duplicate holiday data. 
As a result, if you import the holidays today, holidays for both this year and next year will be imported. 
Similarly, if you import the holidays next year, holidays for both next year and the year after will be imported, which may result in duplicate entries. 
To prevent this, consider adding a check to ensure that each holiday is imported only once.
- User-friendly version
>This script requires Node.js to be installed on your computer. 
If you're not familiar with Node.js, you may find it difficult to use this script. 
To make it more accessible, you could consider creating a user-friendly version that does not require Node.js.

## Acknowledgments

- [Holidays JP API](https://holidays-jp.github.io/) for providing Japanese holidays data.
