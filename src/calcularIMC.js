// ## Calculadora de IMC (1 ponto)

// **Enunciado:**

// Crie a função calcularIMC que receba peso e altura e retorne:

// - `"Abaixo do peso"` se < 18.5
// - `"Peso normal"` se entre 18.5 e 24.9
// - `"Sobrepeso"` se entre 25 e 29.9
// - `"Obesidade"` se ≥ 30
// - `"Erro"` para dados inválidos

// **Fórmula IMC**: peso / (altura * altura)

function calcularIMC(peso, altura) {
  // TODO: implementar função
  let imc = (peso / (altura * altura))
  console.log()

  if (isNaN(peso) || isNaN(altura) || altura <= 0 || imc === 0) {
    return "Erro"
  }
  else if (imc < 18.5) {
    return "Abaixo do peso"
  }
  else if (18.5 <= imc && imc <= 24.9) {
    return "Peso normal"
  }
  else if (25 <= imc && imc <= 29.9) {
    return "Sobrepeso"
  }
  else if (30 <= imc) {
    return "Obesidade"
  }
}

// NÃO REMOVA O CÓDIGO ABAIXO
module.exports = { calcularIMC };