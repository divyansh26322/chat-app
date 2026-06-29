let baseUrl;
let socketUrl;

if (import.meta.env.VITE_NODE_ENV === "production") {
  baseUrl = import.meta.env.VITE_API_URL;
  socketUrl = import.meta.env.VITE_SOCKET_URL;
} else {
  baseUrl = "http://localhost:4000";
  socketUrl = "ws://localhost:4000";
}

export { baseUrl, socketUrl };