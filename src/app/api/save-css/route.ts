import { promises as fs } from 'fs';
import { join } from 'path';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { content } = await request.json();
    
    // Define the path to the variables.css file
    const cssFilePath = join(process.cwd(), 'src', 'app', 'variables.css');
    
    // Write the content to the file
    await fs.writeFile(cssFilePath, content, 'utf8');
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error saving CSS file:', error);
    return NextResponse.json({ success: false, error: 'Failed to save CSS file' }, { status: 500 });
  }
}