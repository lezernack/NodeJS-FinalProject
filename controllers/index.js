const mainFunction = async (req, res) => {
  res.send(
    "Hello, this is the default message! To get the secret path put /secret at the end of the link"
  );
};

const secretFunction = async (req, res) => {
  res.send("Hello you've found the secret path!");
};

module.exports = { mainFunction, secretFunction };
