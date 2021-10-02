<script>
export default {
  metaInfo() {
    const url = new URL("http://localhost:8000/oauth/authorize/");

    url.searchParams.append("response_type", "token");
    url.searchParams.append("state", "state");
    url.searchParams.append("scope", "read write");
    url.searchParams.append("client_id", "CLIENT_ID");
    url.searchParams.append(
      "redirect_uri",
      "http://localhost:8080/login-callback/"
    );

    return {
      title: `Redirecting to Login`,
      meta: [{ "http-equiv": "refresh", content: `0; URL=${url}` }],
      link: [{ rel: "canonical", href: `${url}` }],
    };
  },

  render(h) {
    return h(
      "div",
      {
        style: `
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
        `,
      },
      ["Redirect Login ..."]
    );
  },
};
</script>
