<script>
import axios from "axios";

export default {
  async mounted() {
    // Clean URI and hide the access token ASAP
    const uri = window.location.toString();
    if (uri.indexOf("#") !== -1) {
      const cleanUri = uri.slice(0, uri.indexOf("#"));
      window.history.replaceState({}, document.title, cleanUri);
    }

    const params = new URLSearchParams("?" + this.$route.hash.slice(1));
    const accessToken = params.get("access_token");
    const response = await axios.get("http://localhost:8000/v1/me/", {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    // Commit to storage
    localStorage.setItem(
      "auth",
      JSON.stringify({
        access_token: accessToken,
        user: response.data,
      })
    );

    window.location = "/";
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
      ["Processing ..."]
    );
  },
};
</script>
