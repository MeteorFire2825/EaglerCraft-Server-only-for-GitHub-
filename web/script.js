document.getElementById('connect-btn').addEventListener('click', function() {
    const serverAddress = 'ws://your-custom-server-address.com:25565'; // Custom Server Address
    window.location.href = `eaglercraft.html?server=${serverAddress}`;
});
