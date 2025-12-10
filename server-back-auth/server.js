const jsonServer = require('json-server');
const jsonServerAuth = require('json-server-auth');

const server = jsonServer.create();
const router = jsonServer.router('./db.json');
const middlewares = jsonServer.defaults();

// middlewares standards
server.use(middlewares);
server.use(jsonServer.bodyParser);

// 🔑 IMPORTANT : connecter la DB à auth
server.db = router.db;

// ✅ auth middleware (NE PAS mettre auth())
server.use(jsonServerAuth);

// routes REST
server.use(router);

// lancement serveur
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`✅ Auth server running on http://localhost:${PORT}`);
});
