const bcrypt = require("bcryptjs");

module.exports = {
  register: async (req, res) => {
    const { username, password } = req.body,
    db = req.app.get("db");

  const existingUser = await db.users.check_user(username);
  if (existingUser[0]) {
    return res.status(400).send({
      message: "Username Already In Use",
    });
  }

  let salt = bcrypt.genSaltSync(10);
  let hash = bcrypt.hashSync(password, salt);
  const newUser = await db.users.register_user(
    username,
    hash
  );

  delete newUser[0].password;
  req.session.user = newUser[0];
  res.status(201).json(req.session.user);
  },
  login: async (req, res) => {
    const { username, password } = req.body,
      db = req.app.get("db");

    let foundUser = await db.users.check_user(username);
    if (!foundUser[0]) {
      return res.status(400).send("User not found");
    }

    const authorized = bcrypt.compareSync(password, foundUser[0].password);
    if (!authorized) {
      return res.status(401).send("Incorrect password");
    }

    delete foundUser[0].password;
    req.session.user = foundUser[0];
    res.status(202).send(req.session.user);
  },
  logout: async (req, res) => {
    req.session.destroy();
    return res.sendStatus(200);
  },
};
