function sendMessage() {
    const message = "Parabéns pelos 19 anos! 🎉 Que seu ano seja tão incrível quanto você!";
    const whatsappURL = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  }
  