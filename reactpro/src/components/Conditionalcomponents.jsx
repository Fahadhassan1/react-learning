function Conditionalcomponents({isLoggedIn}) {
  return (
    <div>
      {isLoggedIn ? (
        <h1>Welcome back, user!</h1>
      ) : (
        <h1>Please log in to continue.</h1>
      )}
    </div>
  );
}
export default Conditionalcomponents;