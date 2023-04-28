# Conjunto de REGEX para validação de entradas.
import re

email_regex = re.compile(r'([A-Za-z0-9]+[.-_])*[A-Za-z0-9]+@[A-Za-z0-9-]+(\.[A-Z|a-z]{2,})+')
cep_regex = r'^\d{5}-?\d{3}$'
cpf_regex = r'^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$'
telefone_regex = r'^\(?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$'


def validar_email(email):
    if re.fullmatch(email_regex, email):
      print("Email valido")
      return True
    else:
      print("Email invalido")
      return False
  
def validar_cep(cep):
  if re.match(cep_regex, cep):
    print("CEP válido!")
    return True
  else:
    print("CEP inválido.")
    return False
  
def validar_cpf(cpf):
  if re.match(cpf_regex, cpf):
    print("CPF válido!")
    return True
  else:
    print("CPF inválido.")
    return False
  
def validar_telefone(telefone):
  if re.match(telefone_regex, telefone):
    print("Número de telefone válido!")
    return True
  else:
    print("Número de telefone inválido.")
    return False
 