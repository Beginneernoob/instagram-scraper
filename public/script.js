document.getElementById('scrapeForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const type = document.getElementById('type').value;
    
    try {
        const response = await fetch(`/scrape?username=${username}&type=${type}`);
        const result = await response.json();
        
        // Tampilkan hasil
        document.getElementById('result').innerHTML = `<pre>${JSON.stringify(result, null, 2)}</pre>`;
        
        // Buat file JSON
        const json = JSON.stringify(result, null, 2);
        const blob = new Blob([json], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        
        // Buat elemen <a> untuk unduhan otomatis
        const a = document.createElement('a');
        a.href = url;
        a.download = `${username}_${type}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('result').innerHTML = '<p>Terjadi kesalahan saat mengambil data.</p>';
    }
});
