// src/app/api/saveData/route.js
import fs from 'fs';
import path from 'path';

export async function POST(req) {
  try {
    const data = await req.json();
    const fileName = `data-${Date.now()}.json`; // Generate a unique file name based on timestamp
    const filePath = path.join(process.cwd(), 'data', fileName);

    // Ensure the directory exists
    fs.mkdirSync(path.dirname(filePath), { recursive: true });

    // Write data to the JSON file
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');

    return new Response(JSON.stringify({ message: 'Data saved successfully!', fileName }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Failed to save data', error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
