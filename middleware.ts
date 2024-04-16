import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";
export async function middleware(req: NextRequest) {
  const jwt = req.cookies.get("enag_session");
  if (jwt === undefined) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
  try {
    const { value } = jwt;
    const { payload } = await jwtVerify(
      value,
      new TextEncoder().encode("secret")
    );
    const path = req.nextUrl.pathname;
    switch (payload.rol) {
      case "ADMIN":
        if (!path.startsWith("/admin")) {
          return NextResponse.redirect(new URL("/404", req.url));
        }
        break;
      case "STUDENT":
        if (!path.startsWith("/my")) {
          return NextResponse.redirect(new URL("/404", req.url));
        }
        break;
      case "TEACHER":
        if (!path.startsWith("/teacher")) {
          return NextResponse.redirect(new URL("/404", req.url));
        }
        break;
      default:
        break;
    }

    return NextResponse.next();
  } catch (error) {
    console.log(error);
    return NextResponse.redirect(new URL("/login", req.url));
  }
}

export const config = {
  matcher: ["/my/:path*", "/admin/:path*", "/teacher/:path*"],
};
