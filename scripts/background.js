let timer;

const triggerScavenger = (on) => {
  if (on) {
    clearAds()
    timer = setInterval(() => {
      clearAds()
    }, 1000)
  } else {
    if (timer) {
      clearInterval(timer)
    }
  }
}

const clearAds = () => {
  const elements = [...document.getElementsByClassName("adsbygoogle")]
  elements.map(element => element.style.display = 'none')
}

chrome.storage.local.get(['adsScavengerOn'], ({ adsScavengerOn }) => {
  triggerScavenger(adsScavengerOn)
})

chrome.storage.onChanged.addListener((changes) => {
  const { adsScavengerOn } = changes
  const { newValue } = adsScavengerOn
  triggerScavenger(newValue)
});