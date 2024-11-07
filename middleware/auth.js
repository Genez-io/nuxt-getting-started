// Middleware to check if the user is authenticated
export default function ({ store, redirect }) {
  // Check if the user is not authenticated
  if (!store.state.authenticated) {
    // Redirect to the login page
    return redirect('/login');
  }
}