"use client";

import NextError from "next/error";
import { useEffect } from "react";

export default function GlobalError({ error }: { error: Error & { digest?: string } }) {
  useEffect(() => {
    // Handle error logging or other side effects here if needed
    console.error(error); // You can log the error to the console or to another error tracking service
  }, [error]);

  return (
    <html>
      <body>
        {/* Display the default Next.js error page */}
        <NextError statusCode={0} />
      </body>
    </html>
  );
}
