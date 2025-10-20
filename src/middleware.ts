import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";

export async function middleware(request: NextRequest) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const { pathname } = request.nextUrl;

  // اگر کاربر سشن فعال دارد و در صفحات احراز هویت است، به داشبورد منتقل شود
  if (
    session &&
    (pathname === "/" ||
      pathname === "/register" ||
      pathname === "/forgot-password")
  ) {
    return NextResponse.redirect(new URL("/d", request.url));
  }

  // اگر کاربر سشن ندارد و می‌خواهد وارد داشبورد شود، به صفحه ورود منتقل شود
  if (!session && pathname.startsWith("/d")) {
    const redirectUrl = new URL("/", request.url);
    redirectUrl.searchParams.set("callbackurl", request.nextUrl.pathname);
    return NextResponse.redirect(redirectUrl);
  }

  return NextResponse.next();
}

export const config = {
  runtime: "nodejs",
  matcher: ["/", "/register", "/forgot-password", "/d/:path*"],
};
