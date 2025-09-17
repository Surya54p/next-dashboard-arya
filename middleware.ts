import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/", // redirect otomatis kalau belum login
  },
});

export const config = {
  matcher: ["/user/:path*", "/user"], // semua route /user dicek session
};
