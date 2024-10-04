export async function register() {
  // If you have any server-side or edge-specific configurations, handle them here.
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    // Implement your server-side logic if needed.
  }

  if (process.env.NEXT_RUNTIME === 'edge') {
    // Implement your edge-specific logic if needed.
  }
}

// You can handle request errors in a custom way if needed.
// For now, simply logging the error to the console.
export const onRequestError = (error: Error) => {
  console.error("Request Error:", error);
};
