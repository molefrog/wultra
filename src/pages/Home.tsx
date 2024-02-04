export const Home = () => {
  return (
    <>
      <h1>Welcome</h1>
      <br />
      <p>This demo project shows how wouter@3.0.0 can be used with Ultra.js, a Deno framework.</p>

      <p>Features in this demo:</p>
      <ul>
        <li>Server-side rendering</li>
        <li>Navigation links (active state)</li>
        <li>Switch with default route (404)</li>
        <li>
          Optional locale segment and nested routing <code>/en/users</code>
        </li>
      </ul>

      <a href="https://github.com/molefrog/wultra">
        <button>Website's source on GitHub →</button>
      </a>
    </>
  );
};

export default Home;
