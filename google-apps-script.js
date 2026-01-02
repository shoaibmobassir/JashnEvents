/**
 * Google Apps Script for Contact Form
 * 
 * SETUP INSTRUCTIONS:
 * 1. Go to https://script.google.com
 * 2. Create a new project
 * 3. Paste this code
 * 4. Create a Google Sheet and copy its ID from the URL
 * 5. Replace 'YOUR_SHEET_ID' below with your actual Sheet ID
 * 6. Deploy as a web app:
 *    - Click "Deploy" > "New deployment"
 *    - Choose type: "Web app"
 *    - Execute as: "Me"
 *    - Who has access: "Anyone"
 *    - Click "Deploy"
 * 7. Copy the Web App URL and use it in your contact form
 */

function doPost(e) {
  try {
    // Get the sheet ID from the script properties or replace with your sheet ID
    const SHEET_ID = '1VNi57oR3QG9Bx8VLGeVNGh4jenIuwkEbGb7Evrw77Ic'; // Your Google Sheet ID
    
    // Open the spreadsheet
    const sheet = SpreadsheetApp.openById(SHEET_ID).getActiveSheet();
    
    // Check if headers exist, if not add them
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Timestamp', 'Name', 'Email', 'Phone', 'Event Type', 'Message']);
    }
    
    // Parse the POST data - handle both JSON and URL-encoded form data
    let postData;
    // URL-encoded form data is available in e.parameter
    if (e.parameter && Object.keys(e.parameter).length > 0) {
      postData = e.parameter;
    } 
    // JSON data is in e.postData.contents
    else if (e.postData && e.postData.contents) {
      try {
        postData = JSON.parse(e.postData.contents);
      } catch (parseError) {
        throw new Error('Invalid JSON data: ' + parseError.toString());
      }
    } else {
      throw new Error('No data received');
    }
    
    // Validate required fields
    if (!postData.name || !postData.email || !postData.phone || !postData.message) {
      return ContentService
        .createTextOutput(JSON.stringify({
          success: false,
          error: 'Missing required fields'
        }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    // Get current timestamp
    const timestamp = new Date().toISOString();
    
    // Append the data to the sheet
    sheet.appendRow([
      timestamp,
      postData.name,
      postData.email,
      postData.phone,
      postData.eventType || '',
      postData.message
    ]);
    
    // Return success response with CORS headers
    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        message: 'Contact form submitted successfully',
        timestamp: timestamp
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        error: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Optional: GET endpoint for testing
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({
      message: 'Contact form API is running',
      method: 'Use POST to submit contact forms'
    }))
    .setMimeType(ContentService.MimeType.JSON);
}

