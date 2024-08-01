document.getElementById('authForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const fingerprintData = document.getElementById('fingerprint').value;

    const response = await fetch('/api/authenticate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ fingerprintData })
    });

    const result = await response.json();
    document.getElementById('authResult').innerText = result.message;
});

document.getElementById('loadInventory').addEventListener('click', async () => {
    const response = await fetch('/api/inventory');
    const inventoryItems = await response.json();
    const inventoryDiv = document.getElementById('inventory');
    
    inventoryDiv.innerHTML = '<ul>' + inventoryItems.map(item => `<li>${item.name} - ${item.quantity}</li>`).join('') + '</ul>';
});
