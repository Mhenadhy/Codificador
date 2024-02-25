const input = document.getElementById('texto')

function copytext(){
    navigator.clipboard.writeText(input.value).then(() => {
        alert('copied to clipboard')
    })
}