export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/api/admin",
    "/api/event",
    "/api/event/(.*)",
    "/api/user/(.*)",
    "/create",
    "/profile",
    "/(.+)",
  ],
};
