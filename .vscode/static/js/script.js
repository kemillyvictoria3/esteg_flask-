// Função para mostrar o spinner enquanto o formulario está sendo enviado
document.getElementById('decode_form').addEventListener('submit',
    function() {
        document.getElementById('loading-spinner').style.display = 'block';

        //Esconder resultado
        document.getElementById('result').style.display = 'none';
    }
)