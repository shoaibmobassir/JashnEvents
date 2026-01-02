import { NextRequest, NextResponse } from 'next/server'
import { writeFile, appendFile, mkdir } from 'fs/promises'
import { existsSync } from 'fs'
import path from 'path'

// Path to the data directory
const dataDir = path.join(process.cwd(), 'data')
const csvFilePath = path.join(dataDir, 'contact-submissions.csv')

// CSV headers
const csvHeaders = 'Timestamp,Name,Email,Phone,Event Type,Message\n'

// Ensure data directory exists and CSV file is initialized
async function ensureCSVFile() {
  try {
    // Create data directory if it doesn't exist
    if (!existsSync(dataDir)) {
      await mkdir(dataDir, { recursive: true })
    }

    // Create CSV file with headers if it doesn't exist
    if (!existsSync(csvFilePath)) {
      await writeFile(csvFilePath, csvHeaders, 'utf-8')
    }
  } catch (error) {
    console.error('Error initializing CSV file:', error)
    throw error
  }
}

// Escape CSV values (handle commas, quotes, and newlines)
function escapeCSV(value: string): string {
  if (!value) return ''
  // Replace quotes with double quotes and wrap in quotes if contains comma, quote, or newline
  const escaped = value.replace(/"/g, '""')
  if (escaped.includes(',') || escaped.includes('"') || escaped.includes('\n')) {
    return `"${escaped}"`
  }
  return escaped
}

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json()
    const { name, email, phone, eventType, message } = body

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, phone, and message are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Ensure CSV file exists
    await ensureCSVFile()

    // Create CSV row
    const timestamp = new Date().toISOString()
    const csvRow = [
      timestamp,
      escapeCSV(name),
      escapeCSV(email),
      escapeCSV(phone),
      escapeCSV(eventType || ''),
      escapeCSV(message),
    ].join(',') + '\n'

    // Append to CSV file
    await appendFile(csvFilePath, csvRow, 'utf-8')

    // Return success response
    return NextResponse.json(
      { 
        success: true, 
        message: 'Contact form submitted successfully',
        timestamp 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json(
      { 
        error: 'Failed to process contact form submission',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}

// Optional: GET endpoint to view submissions (for testing/admin purposes)
// Remove or secure this in production
export async function GET() {
  try {
    if (!existsSync(csvFilePath)) {
      return NextResponse.json({ message: 'No submissions yet', data: [] })
    }

    const { readFile } = await import('fs/promises')
    const csvContent = await readFile(csvFilePath, 'utf-8')
    const lines = csvContent.trim().split('\n')
    
    if (lines.length <= 1) {
      return NextResponse.json({ message: 'No submissions yet', data: [] })
    }

    // Parse CSV (simple parser - for production, consider using a CSV library)
    const headers = lines[0].split(',')
    const data = lines.slice(1).map(line => {
      const values = line.split(',')
      return {
        timestamp: values[0],
        name: values[1],
        email: values[2],
        phone: values[3],
        eventType: values[4],
        message: values[5],
      }
    })

    return NextResponse.json({ data, count: data.length })
  } catch (error) {
    console.error('Error reading submissions:', error)
    return NextResponse.json(
      { error: 'Failed to read submissions' },
      { status: 500 }
    )
  }
}

