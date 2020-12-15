const efetuarLogin = async (usuario, senha) => {
    let url = "192.168.0.108";
    if (Platform.OS == "ios") {
        url = "localhost";
    }
    const cabecalhoHTTP = {
        method: "POST",
        body: JSON.stringify({
            username: usuario,
            password: senha
        }),
        headers: {
            "Content-type": "application/json"
        }
    }
    const resposta = await fetch(`http://${url}:8085/login`, cabecalhoHTTP);
    if (resposta.status === 403) {
        throw "Usuario ou senha invalida"
    }
    if (resposta.ok) {
        //consegui logar
        return resposta.headers.get("authorization").split(" ")[1];
    }

}

export default efetuarLogin