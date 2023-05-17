export const Home = () => {
  return (
    <>
      <h1>Welcome</h1>
      <br />
      <p>
        This demo project shows how wouter can be used with Ultra.js, a Deno framework. The upcoming
        2.11.0 release of wouter has a built-in support for SSR via a simple prop for defining
        server-side location.
      </p>

      <p>
        Features in this demo:
        <ul>
          <li>Server-side rendering</li>
          <li>Navigation links (active state)</li>
          <li>Switch with default route (404)</li>
          <li>
            Optional locale segment and nested routing <code>/en/users</code>
          </li>
        </ul>
      </p>

      <a href="https://github.com/molefrog/wultra">
        <button>Website's source on GitHub →</button>
      </a>
    </>
  );
};

export default Home;
