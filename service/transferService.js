const userRepository = require('../repository/userRepository');

exports.transfer = (req, res) => {
  const { from, to, amount } = req.body;
  if (!from || !to || typeof amount !== 'number') {
    // Mensagem igual à do Swagger
    return res.status(400).json({ message: 'Os campos from, to e amount são obrigatórios.' });
  }
  const sender = userRepository.findByUsername(from);
  const recipient = userRepository.findByUsername(to);
  if (!sender || !recipient) {
    // Mensagem igual à do Swagger
    return res.status(404).json({ message: 'Remetente ou destinatário não encontrado.' });
  }
  if (sender.balance < amount) {
    return res.status(400).json({ message: 'Saldo insuficiente.' });
  }
  const isFavorite = sender.favorites.includes(to);
  if (!isFavorite && amount >= 5000) {
    return res.status(403).json({ message: 'Transferências iguais ou superiores a R$ 5.000,00 só são permitidas para favorecidos.' });
  }
  sender.balance -= amount;
  recipient.balance += amount;
  res.status(200).json({ message: 'Transferência realizada com sucesso.' });
};
