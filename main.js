const form = document.getElementById ('form-tarefa');
let linha = '<li>';

form.addEventListener('submit', function(e) {
    e.preventDefault(); 

    const inputNomeTarefa = document.getElementById ('nome-tarefa');

    linha += `<li>${inputNomeTarefa.value}</li>`;

    const listaTarefas = document.querySelector('ul');
    listaTarefas.innerHTML = linha;

    inputNomeTarefa.value = '';

    $('li').click(function() {
        $(this).toggleClass("strikethrough");
    });
});