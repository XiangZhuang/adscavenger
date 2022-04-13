let timer;

const triggerScavenger = (on) => {
  if (on) {
    clearAds()
    // Required to block any JS generated ads after page loaded
    timer = setTimeout(() => {
      clearAds()
    }, 500)
  } else {
    if (timer) {
      setTimeout(timer)
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