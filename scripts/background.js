let timer;

const triggerScavenger = (on) => {
  if (on) {
    timer = setInterval(() => {
      [...document.getElementsByClassName("adsbygoogle")].map(element => element.style.display = 'none')
    }, 1000)
  } else {
    if (timer) {
      clearInterval(timer)
    }
  }
}

chrome.storage.local.get(['adsScavengerOn'], ({ adsScavengerOn }) => {
  triggerScavenger(adsScavengerOn)
})

chrome.storage.onChanged.addListener((changes) => {
  const { adsScavengerOn } = changes
  const { newValue } = adsScavengerOn
  triggerScavenger(newValue)
});