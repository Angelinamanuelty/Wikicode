function copyCode() {
    const codeText = document.getElementById('code').innerText;
    navigator.clipboard.writeText(codeText)
        .then(() => {
            alert('Code copied to clipboard!');
        })
        .catch((err) => {
            console.error('Failed to copy text: ', err);
        });
}