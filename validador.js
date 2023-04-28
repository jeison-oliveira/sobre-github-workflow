function validarCPF(cpf) {
  cpf = cpf.replace(/[^\d]+/g,''); // Remove caracteres não numéricos

  if(cpf == '') return false;

  // Valida CPF
  if (cpf.length != 11 ||
      cpf == "00000000000" ||
      cpf == "11111111111" ||
      cpf == "22222222222" ||
      cpf == "33333333333" ||
      cpf == "44444444444" ||
      cpf == "55555555555" ||
      cpf == "66666666666" ||
      cpf == "77777777777" ||
      cpf == "88888888888" ||
      cpf == "99999999999")
      return false;

  var soma = 0;
  for (var i = 0; i < 9; i++) {
      soma += parseInt(cpf.charAt(i)) * (10 - i);
  }

  var resto = 11 - (soma % 11);
  if (resto == 10 || resto == 11) {
      resto = 0;
  }
  if (resto != parseInt(cpf.charAt(9))) {
      return false;
  }

  soma = 0;
  for (var i = 0; i < 10; i++) {
      soma += parseInt(cpf.charAt(i)) * (11 - i);
  }

  resto = 11 - (soma % 11);
  if (resto == 10 || resto == 11) {
      resto = 0;
  }
  if (resto != parseInt(cpf.charAt(10))) {
      return false;
  }

  return true;
}

function validarEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function validarTelefone(telefone) {
  telefone = telefone.replace(/[^\d]+/g,''); // Remove caracteres não numéricos

  if(telefone == '') return false;

  // Valida telefone
  if (telefone.length < 10 || telefone.length > 11) {
    return false;
  }

  return true;
}