// valor das moedas
const USD = 5.81
const EUR = 6.66
const GBP = 7.75

// obtendo os valores do formulário
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")

// manipulando o input amount para receber apenas números.
amount.addEventListener("input", () => {
  const hasCaractersRegex = /\D+/g
  amount.value = amount.value.replace(hasCaractersRegex, "")
})

// capturando o evento de submit do formulário.
form.onsubmit = (event) => {
  event.preventDefault()
  
  switch (currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, "US$")
      break
    case "EUR":
      convertCurrency(amount.value, EUR, "€")
      break
    case "GBP":
      convertCurrency(amount.value, GBP, "£")
      break
  }
}

// function para converção de moeda
function convertCurrency(amount, price, symbol) {
  try {
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}` // formata o valor da moeda
    
    let total = amount * price // converte

    if (isNaN(total)) {
      return alert("Por favor, digite o valor corretamente para converter.")
    }

    total = formatCurrencyBRL(total).replace("R$", "") // formata e retira o R$

    result.textContent = `${total} Reais` // exibe o resultado

    footer.classList.add("show-result") // exibe o footer
    } 
    catch (error) {
    console.log(error)
    footer.classList.remove("show-result")
    alert("Não foi possível converter.")
  }
}


// formata a moeda para o padrão BRL (R$ 00,00)
function formatCurrencyBRL(value) {
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })
}