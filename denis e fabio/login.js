document.addEventListener("DOMContentLoaded", () => {
    // Definindo o fundo da página via JS
    document.body.style.background = `
        linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.9)),
        url('fundo.jpg.jpg') no-repeat center center fixed
    `;
    document.body.style.backgroundSize = 'cover';
});

document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Validação simples (apenas para exemplo)
    if (!email || !password) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Simulando login (na prática, aqui você faria uma requisição a um servidor)
    if (email === "usuario@exemplo.com" && password === "123456") {
        alert("Login bem-sucedido!");
        // Redirecionar para outra página ou dashboard
        window.location.href = "dashboard.html"; // Exemplo de redirecionamento
    } else {
        alert("E-mail ou senha incorretos.");
    }
});
