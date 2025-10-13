import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
  try {
    const { content } = await request.json();

    if (typeof content !== 'string') {
      return NextResponse.json({ error: 'Invalid content' }, { status: 400 });
    }

    // مسیر فایل در حالت عادی (در پوشه public)
    const publicPath = path.join(process.cwd(), 'public', 'variables.css');

    // مسیر fallback برای حالت read-only هاست (مثلاً Vercel)
    const fallbackPath = path.join(process.cwd(), 'data', 'variables.css');

    let targetPath = publicPath;

    try {
      // چک کن قابل نوشتن هست یا نه
      await fs.promises.access(publicPath, fs.constants.W_OK);
    } catch {
      // اگر قابل نوشتن نبود، مسیر data رو استفاده کن
      targetPath = fallbackPath;

      // اگر پوشه data وجود نداره بساز
      const dir = path.dirname(fallbackPath);
      if (!fs.existsSync(dir)) {
        await fs.promises.mkdir(dir, { recursive: true });
      }
    }

    // حالا محتوا رو بنویس
    await fs.promises.writeFile(targetPath, content, 'utf8');

    return NextResponse.json({ success: true, path: targetPath });
  } catch (error) {
    console.error('❌ Error saving CSS:', error);
    return NextResponse.json({ error: 'Failed to save file' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const publicPath = path.join(process.cwd(), 'public', 'variables.css');
    const fallbackPath = path.join(process.cwd(), 'data', 'variables.css');

    // اگر فایل ویرایش‌شده در data وجود داره، همون رو بده
    const filePath = fs.existsSync(fallbackPath) ? fallbackPath : publicPath;

    const content = await fs.promises.readFile(filePath, 'utf8');
    return NextResponse.json({ content });
  } catch (error) {
    console.error('❌ Error reading CSS:', error);
    return NextResponse.json({ error: 'Failed to load file' }, { status: 500 });
  }
}
