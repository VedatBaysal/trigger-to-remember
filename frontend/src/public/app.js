const el = document.getElementById('trigger-to-remember')

const getRandomWord = async (lang) => {
  await fetch(`http://localhost:1212/api/word`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data[0])
      el.innerHTML = `<b>${data[0].en}: </b> ${data[0].tr}`
    })
}

document.addEventListener('DOMContentLoaded', (e) => {
  getRandomWord()
  const getRandomWithTime = setInterval(() => {
    getRandomWord()
  }, 5000)
})
